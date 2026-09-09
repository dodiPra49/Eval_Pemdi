/**
 * Service untuk Pengelolaan Berkas Bukti Dukung (PDF)
 * Mendukung Cloud Database Supabase (Storage + PostgreSQL)
 * dengan fallback ke Netlify Functions / Local API.
 */

import { supabase, isSupabaseConfigured } from './supabaseClient';

const API_BASE_URL = '/api/evidence';
const SUPABASE_BUCKET = 'eval-pemdi-evidence';

/**
 * Mengonversi objek File ke format Base64 string (untuk API Netlify Functions)
 * @param {File} file 
 * @returns {Promise<string>}
 */
export function fileToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
}

/**
 * Mengambil daftar bukti dukung berdasarkan filter indikator
 * @param {Object} filter - { indicator_id, checklist_id, target_level }
 */
export async function getEvidenceList({ indicator_id, checklist_id, target_level } = {}) {
  // 1. Jika Supabase dikonfigurasi, gunakan Supabase Cloud
  if (isSupabaseConfigured && supabase) {
    try {
      let query = supabase
        .from('evidence_documents')
        .select('*')
        .order('created_at', { ascending: false });

      if (indicator_id) query = query.eq('indicator_id', indicator_id);
      if (checklist_id) query = query.eq('checklist_id', checklist_id);
      if (target_level) query = query.eq('target_level', Number(target_level));

      const { data, error } = await query;
      if (error) throw error;
      return data || [];
    } catch (err) {
      console.warn('Gagal memuat bukti dari Supabase, beralih ke local API fallback:', err.message);
    }
  }

  // 2. Fallback: Gunakan Netlify Functions API / MySQL lokal
  const params = new URLSearchParams();
  if (indicator_id) params.append('indicator_id', indicator_id);
  if (checklist_id) params.append('checklist_id', checklist_id);
  if (target_level) params.append('target_level', target_level);

  const url = `${API_BASE_URL}${params.toString() ? `?${params.toString()}` : ''}`;
  
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Accept': 'application/json'
    }
  });

  if (!response.ok) {
    const errData = await response.json().catch(() => ({}));
    throw new Error(errData.message || `Gagal mengambil daftar bukti (HTTP ${response.status})`);
  }

  const result = await response.json();
  return result.data || [];
}

/**
 * Mengunggah berkas bukti dukung PDF ke server / Supabase Storage
 * @param {Object} payload 
 */
export async function uploadEvidencePdf({
  indicator_id,
  checklist_id,
  target_level = 3,
  judul_dokumen,
  nomor_surat_resmi,
  tahun_terbit,
  deskripsi_singkat,
  file
}) {
  if (!file) {
    throw new Error('Pilih berkas dokumen terlebih dahulu.');
  }

  // Validasi ketat format PDF
  const isPdfExtension = file.name.toLowerCase().endsWith('.pdf');
  const isPdfMime = file.type === 'application/pdf' || file.type === '';
  if (!isPdfExtension || !isPdfMime) {
    throw new Error('Format file tidak didukung! Bukti dukung wajib berupa dokumen PDF (.pdf).');
  }

  // Validasi ukuran berkas (Maksimal 25MB)
  const MAX_SIZE_BYTES = 25 * 1024 * 1024;
  if (file.size > MAX_SIZE_BYTES) {
    throw new Error('Ukuran file terlalu besar! Maksimal ukuran PDF adalah 25 MB.');
  }

  // 1. Jika Supabase dikonfigurasi, simpan langsung ke Supabase Cloud
  if (isSupabaseConfigured && supabase) {
    const uniqueSuffix = crypto.randomUUID();
    const sanitizedName = file.name.replace(/[^a-zA-Z0-9._-]/g, '_');
    const storagePath = `${indicator_id}/${uniqueSuffix}_${sanitizedName}`;

    // Upload berkas biner ke Supabase Storage
    const { error: storageError } = await supabase.storage
      .from(SUPABASE_BUCKET)
      .upload(storagePath, file, {
        contentType: 'application/pdf',
        upsert: false
      });

    if (storageError) {
      throw new Error(`Gagal mengunggah ke Supabase Storage: ${storageError.message}`);
    }

    // Dapatkan URL Publik
    const { data: publicUrlData } = supabase.storage
      .from(SUPABASE_BUCKET)
      .getPublicUrl(storagePath);

    const publicUrl = publicUrlData?.publicUrl || '';

    // Simpan metadata ke tabel PostgreSQL Supabase
    const { data: insertedData, error: dbError } = await supabase
      .from('evidence_documents')
      .insert([
        {
          instansi_id: '11111111-1111-1111-1111-111111111111',
          periode_id: '44444444-4444-4444-4444-000000002026',
          indicator_id,
          checklist_id: checklist_id || null,
          target_level: Number(target_level),
          jenis_sumber: 'file_upload',
          judul_dokumen,
          nomor_surat_resmi: nomor_surat_resmi || null,
          tahun_terbit: tahun_terbit ? Number(tahun_terbit) : new Date().getFullYear(),
          deskripsi_singkat: deskripsi_singkat || '',
          file_name_original: file.name,
          file_name_system: `${uniqueSuffix}_${sanitizedName}`,
          file_path_storage: storagePath,
          file_mime_type: 'application/pdf',
          file_size_bytes: file.size,
          external_url: publicUrl,
          status_validasi: 'draft',
          uploaded_by: '33333333-3333-3333-3333-000000000001'
        }
      ])
      .select()
      .single();

    if (dbError) {
      // Rollback file jika insert database gagal
      await supabase.storage.from(SUPABASE_BUCKET).remove([storagePath]);
      throw new Error(`Gagal menyimpan metadata ke database Supabase: ${dbError.message}`);
    }

    return insertedData;
  }

  // 2. Fallback: Gunakan Netlify Functions API / MySQL lokal
  const base64Data = await fileToBase64(file);

  const response = await fetch(API_BASE_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({
      indicator_id,
      checklist_id: checklist_id || null,
      target_level: Number(target_level),
      judul_dokumen,
      nomor_surat_resmi: nomor_surat_resmi || null,
      tahun_terbit: tahun_terbit ? Number(tahun_terbit) : new Date().getFullYear(),
      deskripsi_singkat: deskripsi_singkat || '',
      file_name: file.name,
      file_base64: base64Data
    })
  });

  const result = await response.json().catch(() => ({}));
  if (!response.ok || !result.success) {
    throw new Error(result.message || `Gagal mengunggah berkas (HTTP ${response.status})`);
  }

  return result.data;
}

/**
 * Menghapus bukti dukung dari database dan penyimpanan
 * @param {string} id - UUID bukti dukung
 * @param {string} [storagePath] - Path di storage jika menggunakan Supabase
 */
export async function deleteEvidence(id, storagePath) {
  if (!id) throw new Error('ID bukti dukung tidak valid.');

  // 1. Jika Supabase dikonfigurasi
  if (isSupabaseConfigured && supabase) {
    if (storagePath) {
      await supabase.storage.from(SUPABASE_BUCKET).remove([storagePath]);
    }
    const { error } = await supabase
      .from('evidence_documents')
      .delete()
      .eq('id', id);

    if (error) {
      throw new Error(`Gagal menghapus dari database Supabase: ${error.message}`);
    }
    return true;
  }

  // 2. Fallback: Netlify Functions API
  const response = await fetch(`${API_BASE_URL}?id=${encodeURIComponent(id)}`, {
    method: 'DELETE',
    headers: {
      'Accept': 'application/json'
    }
  });

  const result = await response.json().catch(() => ({}));
  if (!response.ok || !result.success) {
    throw new Error(result.message || `Gagal menghapus bukti dukung (HTTP ${response.status})`);
  }

  return true;
}
