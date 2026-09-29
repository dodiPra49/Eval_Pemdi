import crypto from 'crypto';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { getDbPool } from '../config/db.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Lokasi folder upload fisik
export const UPLOADS_DIR = process.env.UPLOADS_DIR 
  ? path.resolve(process.env.UPLOADS_DIR)
  : path.resolve(__dirname, '..', '..', 'uploads');

if (!fs.existsSync(UPLOADS_DIR)) {
  fs.mkdirSync(UPLOADS_DIR, { recursive: true });
}

/**
 * GET: Mengambil daftar berkas bukti dukung
 */
export async function getEvidenceList(req, res) {
  try {
    const pool = getDbPool();
    const { indicator_id, checklist_id, target_level } = req.query;

    let query = `
      SELECT 
        id, instansi_id, periode_id, indicator_id, checklist_id, target_level,
        jenis_sumber, judul_dokumen, nomor_surat_resmi, tahun_terbit, deskripsi_singkat,
        file_name_original, file_name_system, file_path_storage, file_mime_type,
        file_size_bytes, file_hash_sha256, external_url, status_validasi,
        uploaded_by, created_at, updated_at
      FROM evidence_documents
      WHERE 1=1
    `;
    const values = [];

    if (indicator_id) {
      query += ` AND indicator_id = ?`;
      values.push(indicator_id);
    }
    if (checklist_id) {
      query += ` AND checklist_id = ?`;
      values.push(checklist_id);
    }
    if (target_level) {
      query += ` AND target_level = ?`;
      values.push(Number(target_level));
    }

    query += ` ORDER BY created_at DESC`;

    const [rows] = await pool.query(query, values);

    return res.json({
      success: true,
      total: rows.length,
      data: rows
    });
  } catch (error) {
    console.error('Error getEvidenceList:', error);
    return res.status(500).json({
      success: false,
      message: 'Gagal memuat daftar bukti dukung dari basis data MariaDB.',
      error: error.message
    });
  }
}

/**
 * POST: Unggah berkas bukti dukung baru (Mendukung Multipart FormData & Base64)
 */
export async function uploadEvidence(req, res) {
  try {
    const pool = getDbPool();
    let {
      indicator_id,
      checklist_id = null,
      target_level = 3,
      judul_dokumen,
      nomor_surat_resmi = null,
      tahun_terbit = new Date().getFullYear(),
      deskripsi_singkat = '',
      file_name,
      file_base64,
      instansi_id = '11111111-1111-1111-1111-111111111111',
      periode_id = '44444444-4444-4444-4444-000000002026',
      uploaded_by = '33333333-3333-3333-3333-000000000001'
    } = req.body;

    let fileBuffer = null;
    let originalName = file_name;

    // A. Jika diunggah via Multipart FormData (Multer)
    if (req.file) {
      fileBuffer = req.file.buffer || fs.readFileSync(req.file.path);
      originalName = req.file.originalname || file_name;
    } 
    // B. Jika diunggah via JSON Base64
    else if (file_base64) {
      const rawBase64 = file_base64.includes('base64,')
        ? file_base64.split('base64,')[1]
        : file_base64;
      fileBuffer = Buffer.from(rawBase64, 'base64');
    }

    if (!indicator_id || !judul_dokumen || !fileBuffer || !originalName) {
      return res.status(400).json({
        success: false,
        message: 'Parameter wajib: indicator_id, judul_dokumen, dan file bukti PDF.'
      });
    }

    // 1. Validasi Ekstensi Berkas (.pdf)
    const cleanFileName = path.basename(originalName);
    if (!cleanFileName.toLowerCase().endsWith('.pdf')) {
      return res.status(400).json({
        success: false,
        message: 'Gagal! Bukti dukung wajib berupa dokumen format PDF (.pdf).'
      });
    }

    // 2. Validasi Ukuran Berkas (Maksimal 50MB)
    const MAX_SIZE_BYTES = 50 * 1024 * 1024;
    if (fileBuffer.length > MAX_SIZE_BYTES) {
      return res.status(400).json({
        success: false,
        message: 'Ukuran berkas melebihi batas maksimal 50 MB.'
      });
    }

    // 3. Validasi Magic Bytes PDF (%PDF-)
    const magicBytes = fileBuffer.slice(0, 5).toString('ascii');
    if (magicBytes !== '%PDF-') {
      return res.status(400).json({
        success: false,
        message: 'Berkas tidak valid! Berkas terdeteksi bukan dokumen PDF asli.'
      });
    }

    // 4. Hitung Checksum SHA-256
    const fileHash = crypto.createHash('sha256').update(fileBuffer).digest('hex');

    // 5. Simpan Berkas Fisik ke folder uploads
    const uniqueSuffix = crypto.randomUUID();
    const sanitizedName = cleanFileName.replace(/[^a-zA-Z0-9._-]/g, '_');
    const systemFileName = `${indicator_id}_${uniqueSuffix}_${sanitizedName}`;
    const physicalFilePath = path.join(UPLOADS_DIR, systemFileName);
    const publicStoragePath = `/uploads/${systemFileName}`;

    fs.writeFileSync(physicalFilePath, fileBuffer);

    // 6. Simpan Metadata ke Basis Data MariaDB
    const insertSql = `
      INSERT INTO evidence_documents (
        id, instansi_id, periode_id, indicator_id, checklist_id, target_level,
        jenis_sumber, judul_dokumen, nomor_surat_resmi, tahun_terbit, deskripsi_singkat,
        file_name_original, file_name_system, file_path_storage, file_mime_type,
        file_size_bytes, file_hash_sha256, external_url, status_validasi, uploaded_by
      ) VALUES (
        UUID(), ?, ?, ?, ?, ?,
        'file_upload', ?, ?, ?, ?,
        ?, ?, ?, 'application/pdf',
        ?, ?, ?, 'draft', ?
      )
    `;

    const insertValues = [
      instansi_id,
      periode_id,
      indicator_id,
      checklist_id || null,
      Number(target_level),
      judul_dokumen,
      nomor_surat_resmi || null,
      tahun_terbit ? Number(tahun_terbit) : new Date().getFullYear(),
      deskripsi_singkat || null,
      cleanFileName,
      systemFileName,
      publicStoragePath,
      fileBuffer.length,
      fileHash,
      publicStoragePath,
      uploaded_by
    ];

    await pool.query(insertSql, insertValues);

    const [insertedRows] = await pool.query(
      `SELECT * FROM evidence_documents WHERE file_name_system = ? LIMIT 1`,
      [systemFileName]
    );

    return res.status(201).json({
      success: true,
      message: 'Bukti dukung PDF berhasil disimpan ke MariaDB dan media penyimpanan!',
      data: insertedRows[0]
    });
  } catch (error) {
    console.error('Error uploadEvidence:', error);
    return res.status(500).json({
      success: false,
      message: 'Terjadi kesalahan saat memproses unggahan bukti dukung.',
      error: error.message
    });
  }
}

/**
 * DELETE: Menghapus berkas bukti dukung
 */
export async function deleteEvidence(req, res) {
  try {
    const pool = getDbPool();
    const id = req.params.id || req.query.id;

    if (!id) {
      return res.status(400).json({
        success: false,
        message: 'Parameter ID bukti dukung wajib disertakan.'
      });
    }

    const [existing] = await pool.query(
      `SELECT id, file_name_system FROM evidence_documents WHERE id = ? LIMIT 1`,
      [id]
    );

    if (existing.length === 0) {
      return res.status(404).json({
        success: false,
        message: 'Data bukti dukung tidak ditemukan di MariaDB.'
      });
    }

    const systemFileName = existing[0].file_name_system;
    if (systemFileName) {
      const physicalFilePath = path.join(UPLOADS_DIR, systemFileName);
      if (fs.existsSync(physicalFilePath)) {
        try {
          fs.unlinkSync(physicalFilePath);
        } catch (e) {
          console.warn('Gagal menghapus berkas fisik:', e.message);
        }
      }
    }

    await pool.query(`DELETE FROM evidence_documents WHERE id = ?`, [id]);

    return res.json({
      success: true,
      message: 'Bukti dukung berhasil dihapus dari sistem.'
    });
  } catch (error) {
    console.error('Error deleteEvidence:', error);
    return res.status(500).json({
      success: false,
      message: 'Gagal menghapus bukti dukung dari MariaDB.',
      error: error.message
    });
  }
}
