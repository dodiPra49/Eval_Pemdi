import crypto from 'crypto';
import fs from 'fs';
import path from 'path';
import { getDbPool } from './db.js';

// Folder penyimpanan berkas PDF
const UPLOADS_DIR = path.resolve(process.cwd(), 'public', 'uploads', 'evidence');

// Pastikan folder penyimpanan ada
if (!fs.existsSync(UPLOADS_DIR)) {
  fs.mkdirSync(UPLOADS_DIR, { recursive: true });
}

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
  'Access-Control-Allow-Methods': 'GET, POST, DELETE, PATCH, OPTIONS'
};

export async function handler(event) {
  // Tangani preflight OPTIONS
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers: CORS_HEADERS,
      body: ''
    };
  }

  const pool = getDbPool();

  try {
    // ------------------------------------------------------------------------
    // 1. GET: Ambil daftar bukti dukung yang telah diunggah
    // ------------------------------------------------------------------------
    if (event.httpMethod === 'GET') {
      const params = event.queryStringParameters || {};
      const { indicator_id, checklist_id, target_level } = params;

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

      return {
        statusCode: 200,
        headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' },
        body: JSON.stringify({
          success: true,
          total: rows.length,
          data: rows
        })
      };
    }

    // ------------------------------------------------------------------------
    // 2. POST: Unggah berkas bukti dukung baru (KHUSUS FORMAT PDF)
    // ------------------------------------------------------------------------
    if (event.httpMethod === 'POST') {
      let body;
      try {
        body = JSON.parse(event.body || '{}');
      } catch (err) {
        return {
          statusCode: 400,
          headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' },
          body: JSON.stringify({ success: false, message: 'Body request harus berformat JSON yang valid.' })
        };
      }

      const {
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
      } = body;

      // Validasi kelengkapan data
      if (!indicator_id || !judul_dokumen || !file_base64 || !file_name) {
        return {
          statusCode: 400,
          headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' },
          body: JSON.stringify({
            success: false,
            message: 'Parameter wajib: indicator_id, judul_dokumen, file_name, dan file_base64.'
          })
        };
      }

      // 1. Validasi Ekstensi Berkas: Wajib .pdf
      const cleanFileName = path.basename(file_name);
      if (!cleanFileName.toLowerCase().endsWith('.pdf')) {
        return {
          statusCode: 400,
          headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' },
          body: JSON.stringify({
            success: false,
            message: 'Gagal! Bukti dukung wajib berupa dokumen format PDF (.pdf).'
          })
        };
      }

      // 2. Decode Base64 Buffer
      const rawBase64 = file_base64.includes('base64,')
        ? file_base64.split('base64,')[1]
        : file_base64;
      
      const fileBuffer = Buffer.from(rawBase64, 'base64');

      // 3. Validasi Ukuran Berkas (Maksimal 25MB)
      const MAX_SIZE_BYTES = 25 * 1024 * 1024;
      if (fileBuffer.length > MAX_SIZE_BYTES) {
        return {
          statusCode: 400,
          headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' },
          body: JSON.stringify({
            success: false,
            message: 'Ukuran file melebihi batas maksimal 25 MB.'
          })
        };
      }

      // 4. Validasi Magic Bytes: Setiap file PDF asli diawali string %PDF-
      const magicBytes = fileBuffer.slice(0, 5).toString('ascii');
      if (magicBytes !== '%PDF-') {
        return {
          statusCode: 400,
          headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' },
          body: JSON.stringify({
            success: false,
            message: 'File tidak valid! Berkas terdeteksi bukan dokumen PDF asli.'
          })
        };
      }

      // 5. Hitung Checksum SHA-256
      const fileHash = crypto.createHash('sha256').update(fileBuffer).digest('hex');

      // 6. Simpan Berkas Fisik ke Storage/Uploads
      const uniqueSuffix = crypto.randomUUID();
      const sanitizedName = cleanFileName.replace(/[^a-zA-Z0-9._-]/g, '_');
      const systemFileName = `${indicator_id}_${uniqueSuffix}_${sanitizedName}`;
      const physicalFilePath = path.join(UPLOADS_DIR, systemFileName);
      const publicStoragePath = `/uploads/evidence/${systemFileName}`;

      fs.writeFileSync(physicalFilePath, fileBuffer);

      // 7. Simpan Metadata ke Basis Data MySQL
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
        tahun_terbit ? Number(tahun_terbit) : null,
        deskripsi_singkat || null,
        cleanFileName,
        systemFileName,
        publicStoragePath,
        fileBuffer.length,
        fileHash,
        publicStoragePath, // external_url juga diarahkan ke path download berkas
        uploaded_by
      ];

      await pool.query(insertSql, insertValues);

      // Ambil data yang baru saja dimasukkan
      const [insertedRows] = await pool.query(
        `SELECT * FROM evidence_documents WHERE file_name_system = ? LIMIT 1`,
        [systemFileName]
      );

      return {
        statusCode: 201,
        headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' },
        body: JSON.stringify({
          success: true,
          message: 'Bukti dukung PDF berhasil diunggah dan disimpan ke database!',
          data: insertedRows[0]
        })
      };
    }

    // ------------------------------------------------------------------------
    // 3. DELETE: Hapus berkas bukti dukung
    // ------------------------------------------------------------------------
    if (event.httpMethod === 'DELETE') {
      const params = event.queryStringParameters || {};
      const { id } = params;

      if (!id) {
        return {
          statusCode: 400,
          headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' },
          body: JSON.stringify({ success: false, message: 'Parameter id wajib disertakan.' })
        };
      }

      // Ambil info berkas untuk menghapus file fisik
      const [existing] = await pool.query(
        `SELECT id, file_name_system FROM evidence_documents WHERE id = ? LIMIT 1`,
        [id]
      );

      if (existing.length === 0) {
        return {
          statusCode: 404,
          headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' },
          body: JSON.stringify({ success: false, message: 'Data bukti dukung tidak ditemukan.' })
        };
      }

      const systemFileName = existing[0].file_name_system;
      if (systemFileName) {
        const physicalFilePath = path.join(UPLOADS_DIR, systemFileName);
        if (fs.existsSync(physicalFilePath)) {
          try {
            fs.unlinkSync(physicalFilePath);
          } catch (e) {
            console.warn('Gagal menghapus berkas fisik:', e);
          }
        }
      }

      // Hapus dari database MySQL
      await pool.query(`DELETE FROM evidence_documents WHERE id = ?`, [id]);

      return {
        statusCode: 200,
        headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' },
        body: JSON.stringify({
          success: true,
          message: 'Bukti dukung berhasil dihapus dari sistem.'
        })
      };
    }

    return {
      statusCode: 405,
      headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' },
      body: JSON.stringify({ success: false, message: 'Method Not Allowed' })
    };

  } catch (error) {
    console.error('Error in Netlify Function evidence.js:', error);
    return {
      statusCode: 500,
      headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        success: false,
        message: 'Terjadi kesalahan internal server basis data.',
        error: error.message
      })
    };
  }
}
