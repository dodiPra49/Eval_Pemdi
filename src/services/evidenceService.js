/**
 * Service untuk Pengelolaan Berkas Bukti Dukung (PDF)
 * Mengakses Netlify Functions API: /api/evidence atau /.netlify/functions/evidence
 */

const API_BASE_URL = '/api/evidence';

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
 * Mengunggah berkas bukti dukung PDF ke server
 * @param {Object} payload 
 * @param {string} payload.indicator_id - ID Indikator (misal 'ind-01')
 * @param {string} [payload.checklist_id] - ID Checklist (misal 'c1-1')
 * @param {number} payload.target_level - Level target (1-5)
 * @param {string} payload.judul_dokumen - Nama resmi dokumen
 * @param {string} [payload.nomor_surat_resmi] - Nomor surat
 * @param {number} [payload.tahun_terbit] - Tahun dokumen
 * @param {string} [payload.deskripsi_singkat] - Keterangan isi
 * @param {File} payload.file - Objek File PDF
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
 */
export async function deleteEvidence(id) {
  if (!id) throw new Error('ID bukti dukung tidak valid.');

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
