/**
 * Service untuk Pengelolaan Berkas Bukti Dukung (PDF)
 * Mendukung Docker Multi-Container Backend (MariaDB + Express)
 * dengan opsi fallback ke Supabase Cloud jika dikonfigurasi.
 */

import { supabase, isSupabaseConfigured } from './supabaseClient';

const API_BASE_URL = '/api/evidence';
const SUPABASE_BUCKET = 'eval-pemdi-evidence';

/**
 * Mengonversi objek File ke format Base64 string
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
  // 1. Utamakan MariaDB Backend API (/api/evidence)
  try {
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

    if (response.ok) {
      const result = await response.json();
      return result.data || [];
    }
  } catch (err) {
    console.warn('API MariaDB tidak dapat dijangkau, mencoba fallback:', err.message);
  }

  // 2. Fallback: Jika Supabase dikonfigurasi, gunakan Supabase Cloud
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
      console.warn('Gagal memuat bukti dari Supabase:', err.message);
    }
  }

  return [];
}

/**
 * Mengunggah berkas bukti dukung PDF ke server MariaDB / Supabase Storage
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

  // Validasi format PDF
  const isPdfExtension = file.name.toLowerCase().endsWith('.pdf');
  const isPdfMime = file.type === 'application/pdf' || file.type === '';
  if (!isPdfExtension || !isPdfMime) {
    throw new Error('Format file tidak didukung! Bukti dukung wajib berupa dokumen PDF (.pdf).');
  }

  // Validasi ukuran berkas (Maksimal 50MB)
  const MAX_SIZE_BYTES = 50 * 1024 * 1024;
  if (file.size > MAX_SIZE_BYTES) {
    throw new Error('Ukuran file terlalu besar! Maksimal ukuran PDF adalah 50 MB.');
  }

  // 1. Coba unggah ke Backend MariaDB (/api/evidence) menggunakan FormData
  try {
    const formData = new FormData();
    formData.append('indicator_id', indicator_id);
    if (checklist_id) formData.append('checklist_id', checklist_id);
    formData.append('target_level', target_level);
    formData.append('judul_dokumen', judul_dokumen);
    if (nomor_surat_resmi) formData.append('nomor_surat_resmi', nomor_surat_resmi);
    if (tahun_terbit) formData.append('tahun_terbit', tahun_terbit);
    if (deskripsi_singkat) formData.append('deskripsi_singkat', deskripsi_singkat);
    formData.append('file_name', file.name);
    formData.append('file', file);

    const response = await fetch(API_BASE_URL, {
      method: 'POST',
      body: formData
    });

    if (response.ok) {
      const result = await response.json();
      if (result.success && result.data) {
        return result.data;
      }
    } else {
      const errData = await response.json().catch(() => ({}));
      if (response.status === 413) {
        throw new Error('Ukuran berkas terlalu besar untuk server (HTTP 413 Payload Too Large).');
      }
      if (errData.message) {
        throw new Error(errData.message);
      }
    }
  } catch (apiErr) {
    // Jika bukan error validasi atau ukuran berkas, teruskan ke fallback jika ada
    if (apiErr.message.includes('Maksimal') || apiErr.message.includes('Format file') || apiErr.message.includes('413')) {
      throw apiErr;
    }
    console.warn('Upload via API MariaDB gagal, mencoba fallback jika Supabase aktif:', apiErr.message);
  }

  // 2. Fallback: Jika Supabase dikonfigurasi, simpan langsung ke Supabase Cloud
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
      await supabase.storage.from(SUPABASE_BUCKET).remove([storagePath]);
      throw new Error(`Gagal menyimpan metadata ke database Supabase: ${dbError.message}`);
    }

    return insertedData;
  }

  throw new Error('Gagal mengunggah berkas bukti dukung. Pastikan layanan backend MariaDB aktif.');
}

/**
 * Menghapus bukti dukung dari database dan media penyimpanan
 * @param {string} id - UUID bukti dukung
 * @param {string} [storagePath] - Path di storage jika menggunakan Supabase
 */
export async function deleteEvidence(id, storagePath) {
  if (!id) throw new Error('ID bukti dukung tidak valid.');

  // 1. Coba hapus via MariaDB REST API
  try {
    const response = await fetch(`${API_BASE_URL}/${encodeURIComponent(id)}`, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json'
      }
    });

    if (response.ok) {
      const result = await response.json().catch(() => ({}));
      if (result.success) return true;
    }
  } catch (apiErr) {
    console.warn('Hapus via API MariaDB gagal, mencoba fallback:', apiErr.message);
  }

  // 2. Fallback: Jika Supabase dikonfigurasi
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

  return true;
}
