-- ============================================================================
-- SKRIP BASIS DATA EVALUASI PEMERINTAHAN DIGITAL (PERMENPANRB NO. 8 TAHUN 2026)
-- Target RDBMS: MySQL 8.0+ / 8.4 LTS
-- Database: EvalPemdi
-- ============================================================================

CREATE DATABASE IF NOT EXISTS EvalPemdi CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE EvalPemdi;

-- 1. TABEL INSTANSI (Kementerian, Lembaga, atau Pemerintah Daerah)
CREATE TABLE IF NOT EXISTS instansi (
    id CHAR(36) PRIMARY KEY DEFAULT (UUID()),
    kode_instansi VARCHAR(50) UNIQUE NOT NULL,
    nama_instansi VARCHAR(255) NOT NULL,
    kategori ENUM('Kementerian', 'Lembaga', 'Pemprov', 'Pemkab', 'Pemkot') NOT NULL,
    alamat_kantor TEXT,
    logo_url TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 2. TABEL UNIT KERJA / OPD (Dinas, Badan, Bagian sebagai PIC Indikator)
CREATE TABLE IF NOT EXISTS unit_kerja (
    id CHAR(36) PRIMARY KEY DEFAULT (UUID()),
    instansi_id CHAR(36) NOT NULL,
    nama_unit VARCHAR(255) NOT NULL,
    singkatan VARCHAR(50),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_unitkerja_instansi FOREIGN KEY (instansi_id) REFERENCES instansi(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 3. TABEL USERS (Admin Instansi, PIC OPD, Asesor Internal)
CREATE TABLE IF NOT EXISTS users (
    id CHAR(36) PRIMARY KEY DEFAULT (UUID()),
    instansi_id CHAR(36) NULL,
    unit_kerja_id CHAR(36) NULL,
    nama_lengkap VARCHAR(150) NOT NULL,
    email VARCHAR(150) UNIQUE NOT NULL,
    password_hash TEXT NOT NULL,
    role ENUM('admin_instansi', 'pic_opd', 'asesor_internal', 'viewer') NOT NULL DEFAULT 'pic_opd',
    telepon_wa VARCHAR(30),
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT fk_users_instansi FOREIGN KEY (instansi_id) REFERENCES instansi(id) ON DELETE SET NULL,
    CONSTRAINT fk_users_unitkerja FOREIGN KEY (unit_kerja_id) REFERENCES unit_kerja(id) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 4. TABEL PERIODE EVALUASI (Tahun Evaluasi, misal 2026)
CREATE TABLE IF NOT EXISTS evaluation_periods (
    id CHAR(36) PRIMARY KEY DEFAULT (UUID()),
    tahun INT NOT NULL UNIQUE,
    nama_periode VARCHAR(100) NOT NULL,
    tanggal_mulai DATE,
    tanggal_selesai DATE,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 5. TABEL MASTER INDIKATOR (20 Indikator PermenPANRB No. 8/2026)
CREATE TABLE IF NOT EXISTS indicators (
    id VARCHAR(10) PRIMARY KEY, -- 'ind-01', 'ind-02', dst.
    nomor INT NOT NULL UNIQUE,
    kode VARCHAR(20) NOT NULL UNIQUE,
    nama VARCHAR(255) NOT NULL,
    domain_id VARCHAR(20) NOT NULL,
    domain_name VARCHAR(100) NOT NULL,
    aspect_name VARCHAR(100) NOT NULL,
    bobot DECIMAL(5,2) DEFAULT 5.00 NOT NULL,
    deskripsi TEXT,
    tips_asesor TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 6. TABEL KRITERIA LEVEL INDIKATOR (Level 1 s.d. 5 dan Panduan Bukti)
CREATE TABLE IF NOT EXISTS indicator_levels (
    id CHAR(36) PRIMARY KEY DEFAULT (UUID()),
    indicator_id VARCHAR(10) NOT NULL,
    level INT NOT NULL CHECK (level BETWEEN 1 AND 5),
    kriteria TEXT NOT NULL,
    narasi_bukti TEXT NOT NULL,
    CONSTRAINT uq_indicator_level UNIQUE(indicator_id, level),
    CONSTRAINT fk_indlevels_indicator FOREIGN KEY (indicator_id) REFERENCES indicators(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 7. TABEL BUTIR CHECKLIST BUKTI
CREATE TABLE IF NOT EXISTS indicator_checklists (
    id VARCHAR(30) PRIMARY KEY, -- 'c1-1', 'c1-2'
    indicator_id VARCHAR(10) NOT NULL,
    label TEXT NOT NULL,
    is_required BOOLEAN DEFAULT TRUE,
    min_level INT DEFAULT 3 CHECK (min_level BETWEEN 1 AND 5),
    urutan INT DEFAULT 1,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_indchecklists_indicator FOREIGN KEY (indicator_id) REFERENCES indicators(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 8. TABEL PENILAIAN MANDIRI (SELF ASSESSMENT PER INDIKATOR)
CREATE TABLE IF NOT EXISTS self_assessments (
    id CHAR(36) PRIMARY KEY DEFAULT (UUID()),
    instansi_id CHAR(36) NOT NULL,
    periode_id CHAR(36) NOT NULL,
    indicator_id VARCHAR(10) NOT NULL,
    self_level INT NOT NULL DEFAULT 1 CHECK (self_level BETWEEN 1 AND 5),
    weighted_score DECIMAL(6,3) GENERATED ALWAYS AS (self_level * 5.0) STORED,
    catatan_internal TEXT,
    status_kesiapan ENUM('belum_lengkap', 'sebagian', 'siap_evaluasi') DEFAULT 'belum_lengkap',
    updated_by CHAR(36) NULL,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT uq_instansi_periode_indicator UNIQUE(instansi_id, periode_id, indicator_id),
    CONSTRAINT fk_selfassess_instansi FOREIGN KEY (instansi_id) REFERENCES instansi(id) ON DELETE CASCADE,
    CONSTRAINT fk_selfassess_periode FOREIGN KEY (periode_id) REFERENCES evaluation_periods(id) ON DELETE CASCADE,
    CONSTRAINT fk_selfassess_indicator FOREIGN KEY (indicator_id) REFERENCES indicators(id) ON DELETE CASCADE,
    CONSTRAINT fk_selfassess_user FOREIGN KEY (updated_by) REFERENCES users(id) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 9. TABEL UTAMA: DOKUMEN BUKTI DUKUNG TERUNGGAH (EVIDENCE DOCUMENTS)
CREATE TABLE IF NOT EXISTS evidence_documents (
    id CHAR(36) PRIMARY KEY DEFAULT (UUID()),
    instansi_id CHAR(36) NOT NULL,
    periode_id CHAR(36) NOT NULL,
    indicator_id VARCHAR(10) NOT NULL,
    checklist_id VARCHAR(30) NULL,
    target_level INT NOT NULL CHECK (target_level BETWEEN 1 AND 5),
    jenis_sumber ENUM('file_upload', 'cloud_link', 'screenshot') NOT NULL,
    judul_dokumen VARCHAR(255) NOT NULL,
    nomor_surat_resmi VARCHAR(100),
    tahun_terbit INT,
    deskripsi_singkat TEXT,
    file_name_original VARCHAR(255),
    file_name_system VARCHAR(255),
    file_path_storage TEXT,
    file_mime_type VARCHAR(100),
    file_size_bytes BIGINT,
    file_hash_sha256 VARCHAR(64),
    external_url TEXT,
    status_validasi ENUM('draft', 'diajukan', 'memenuhi', 'perlu_revisi', 'ditolak') DEFAULT 'draft',
    uploaded_by CHAR(36) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT fk_evidence_instansi FOREIGN KEY (instansi_id) REFERENCES instansi(id) ON DELETE CASCADE,
    CONSTRAINT fk_evidence_periode FOREIGN KEY (periode_id) REFERENCES evaluation_periods(id) ON DELETE CASCADE,
    CONSTRAINT fk_evidence_indicator FOREIGN KEY (indicator_id) REFERENCES indicators(id) ON DELETE CASCADE,
    CONSTRAINT fk_evidence_checklist FOREIGN KEY (checklist_id) REFERENCES indicator_checklists(id) ON DELETE SET NULL,
    CONSTRAINT fk_evidence_user FOREIGN KEY (uploaded_by) REFERENCES users(id) ON DELETE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 10. TABEL CATATAN REVIU BUKTI DUKUNG (ASESOR & AI GEMINI)
CREATE TABLE IF NOT EXISTS evidence_reviews (
    id CHAR(36) PRIMARY KEY DEFAULT (UUID()),
    evidence_id CHAR(36) NOT NULL,
    reviewer_id CHAR(36) NULL,
    tipe_reviewer ENUM('asesor_manusia', 'gemini_ai') NOT NULL,
    status_hasil ENUM('layak', 'kurang_lengkap', 'tidak_sesuai') NOT NULL,
    skor_relevansi INT CHECK (skor_relevansi BETWEEN 0 AND 100),
    catatan_reviu TEXT NOT NULL,
    rekomendasi_perbaikan TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_reviews_evidence FOREIGN KEY (evidence_id) REFERENCES evidence_documents(id) ON DELETE CASCADE,
    CONSTRAINT fk_reviews_user FOREIGN KEY (reviewer_id) REFERENCES users(id) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 11. TABEL AUDIT LOG (JEJAK AKTIVITAS SISTEM)
CREATE TABLE IF NOT EXISTS audit_logs (
    id CHAR(36) PRIMARY KEY DEFAULT (UUID()),
    user_id CHAR(36) NULL,
    aksi VARCHAR(50) NOT NULL,
    entitas VARCHAR(50) NOT NULL,
    entitas_id CHAR(36) NULL,
    data_lama JSON,
    data_baru JSON,
    ip_address VARCHAR(45),
    user_agent TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_audit_user FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================================================
-- INDEKS PERFORMA
-- ============================================================================
CREATE INDEX idx_evidence_instansi_indicator ON evidence_documents(instansi_id, indicator_id);
CREATE INDEX idx_evidence_status ON evidence_documents(status_validasi);
CREATE INDEX idx_evidence_checklist ON evidence_documents(checklist_id);
CREATE INDEX idx_self_assessments_lookup ON self_assessments(instansi_id, periode_id, indicator_id);
CREATE INDEX idx_indicator_checklists_ind ON indicator_checklists(indicator_id);
CREATE INDEX idx_audit_logs_user_date ON audit_logs(user_id, created_at DESC);
