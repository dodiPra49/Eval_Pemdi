import fs from 'fs';

const ddl = `-- ============================================================================
-- FULL MIGRATION SCRIPT: EVALUASI PEMERINTAHAN DIGITAL (PERMENPANRB 8/2026)
-- Target: Supabase Cloud Database (PostgreSQL 15/16)
-- Project: EvalPemdi
-- ============================================================================

-- Aktifkan ekstensi UUID dan Kriptografi
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- ----------------------------------------------------------------------------
-- 1. TABEL INSTANSI (Kementerian, Lembaga, atau Pemda)
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS instansi (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    kode_instansi VARCHAR(50) UNIQUE NOT NULL,
    nama_instansi VARCHAR(255) NOT NULL,
    kategori VARCHAR(50) NOT NULL CHECK (kategori IN ('Kementerian', 'Lembaga', 'Pemprov', 'Pemkab', 'Pemkot')),
    alamat_kantor TEXT,
    logo_url TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- ----------------------------------------------------------------------------
-- 2. TABEL UNIT KERJA / OPD
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS unit_kerja (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    instansi_id UUID NOT NULL REFERENCES instansi(id) ON DELETE CASCADE,
    nama_unit VARCHAR(255) NOT NULL,
    singkatan VARCHAR(50),
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ----------------------------------------------------------------------------
-- 3. TABEL USERS (Akses & PIC Indikator)
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    instansi_id UUID REFERENCES instansi(id) ON DELETE SET NULL,
    unit_kerja_id UUID REFERENCES unit_kerja(id) ON DELETE SET NULL,
    nama_lengkap VARCHAR(150) NOT NULL,
    email VARCHAR(150) UNIQUE NOT NULL,
    password_hash TEXT,
    role VARCHAR(50) NOT NULL DEFAULT 'pic_opd' CHECK (role IN ('admin_instansi', 'pic_opd', 'asesor_internal', 'viewer')),
    telepon_wa VARCHAR(30),
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- ----------------------------------------------------------------------------
-- 4. TABEL PERIODE EVALUASI
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS evaluation_periods (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    tahun INT NOT NULL UNIQUE,
    nama_periode VARCHAR(100) NOT NULL,
    tanggal_mulai DATE,
    tanggal_selesai DATE,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ----------------------------------------------------------------------------
-- 5. TABEL MASTER INDIKATOR (20 Indikator PermenPANRB 8/2026)
-- ----------------------------------------------------------------------------
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
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ----------------------------------------------------------------------------
-- 6. TABEL KRITERIA LEVEL INDIKATOR (Level 1 s.d. 5)
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS indicator_levels (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    indicator_id VARCHAR(10) NOT NULL REFERENCES indicators(id) ON DELETE CASCADE,
    level INT NOT NULL CHECK (level BETWEEN 1 AND 5),
    kriteria TEXT NOT NULL,
    narasi_bukti TEXT NOT NULL,
    CONSTRAINT uq_indicator_level UNIQUE(indicator_id, level)
);

-- ----------------------------------------------------------------------------
-- 7. TABEL BUTIR CHECKLIST BUKTI
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS indicator_checklists (
    id VARCHAR(30) PRIMARY KEY, -- 'c1-1', 'c1-2'
    indicator_id VARCHAR(10) NOT NULL REFERENCES indicators(id) ON DELETE CASCADE,
    label TEXT NOT NULL,
    is_required BOOLEAN DEFAULT TRUE,
    min_level INT DEFAULT 3 CHECK (min_level BETWEEN 1 AND 5),
    urutan INT DEFAULT 1,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ----------------------------------------------------------------------------
-- 8. TABEL PENILAIAN MANDIRI (SELF ASSESSMENT)
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS self_assessments (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    instansi_id UUID NOT NULL REFERENCES instansi(id) ON DELETE CASCADE,
    periode_id UUID NOT NULL REFERENCES evaluation_periods(id) ON DELETE CASCADE,
    indicator_id VARCHAR(10) NOT NULL REFERENCES indicators(id) ON DELETE CASCADE,
    self_level INT NOT NULL DEFAULT 1 CHECK (self_level BETWEEN 1 AND 5),
    weighted_score DECIMAL(6,3) GENERATED ALWAYS AS (self_level * 5.0) STORED,
    catatan_internal TEXT,
    status_kesiapan VARCHAR(50) DEFAULT 'belum_lengkap' CHECK (status_kesiapan IN ('belum_lengkap', 'sebagian', 'siap_evaluasi')),
    updated_by UUID REFERENCES users(id) ON DELETE SET NULL,
    updated_at TIMESTAMPTZ DEFAULT NOW(),
    CONSTRAINT uq_instansi_periode_indicator UNIQUE(instansi_id, periode_id, indicator_id)
);

-- ----------------------------------------------------------------------------
-- 9. TABEL DOKUMEN BUKTI DUKUNG (EVIDENCE DOCUMENTS)
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS evidence_documents (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    instansi_id UUID NOT NULL REFERENCES instansi(id) ON DELETE CASCADE,
    periode_id UUID NOT NULL REFERENCES evaluation_periods(id) ON DELETE CASCADE,
    indicator_id VARCHAR(10) NOT NULL REFERENCES indicators(id) ON DELETE CASCADE,
    checklist_id VARCHAR(30) REFERENCES indicator_checklists(id) ON DELETE SET NULL,
    target_level INT NOT NULL CHECK (target_level BETWEEN 1 AND 5),
    jenis_sumber VARCHAR(30) NOT NULL CHECK (jenis_sumber IN ('file_upload', 'cloud_link', 'screenshot')),
    judul_dokumen VARCHAR(255) NOT NULL,
    nomor_surat_resmi VARCHAR(100),
    tahun_terbit INT,
    deskripsi_singkat TEXT,
    file_name_original VARCHAR(255),
    file_name_system VARCHAR(255),
    file_path_storage TEXT, -- Path di Supabase Storage
    file_mime_type VARCHAR(100) DEFAULT 'application/pdf',
    file_size_bytes BIGINT,
    file_hash_sha256 VARCHAR(64),
    external_url TEXT,      -- Public URL Supabase Storage
    status_validasi VARCHAR(30) DEFAULT 'draft' CHECK (status_validasi IN ('draft', 'diajukan', 'memenuhi', 'perlu_revisi', 'ditolak')),
    uploaded_by UUID NOT NULL REFERENCES users(id) ON DELETE RESTRICT,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- ----------------------------------------------------------------------------
-- 10. TABEL CATATAN REVIU BUKTI DUKUNG (ASESOR & AI GEMINI)
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS evidence_reviews (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    evidence_id UUID NOT NULL REFERENCES evidence_documents(id) ON DELETE CASCADE,
    reviewer_id UUID REFERENCES users(id) ON DELETE SET NULL,
    tipe_reviewer VARCHAR(30) NOT NULL CHECK (tipe_reviewer IN ('asesor_manusia', 'gemini_ai')),
    status_hasil VARCHAR(30) NOT NULL CHECK (status_hasil IN ('layak', 'kurang_lengkap', 'tidak_sesuai')),
    skor_relevansi INT CHECK (skor_relevansi BETWEEN 0 AND 100),
    catatan_reviu TEXT NOT NULL,
    rekomendasi_perbaikan TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ----------------------------------------------------------------------------
-- 11. TABEL AUDIT LOG (JEJAK AKTIVITAS)
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS audit_logs (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES users(id) ON DELETE SET NULL,
    aksi VARCHAR(50) NOT NULL,
    entitas VARCHAR(50) NOT NULL,
    entitas_id UUID,
    data_lama JSONB,
    data_baru JSONB,
    ip_address VARCHAR(45),
    user_agent TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================================================
-- INDEKS PERFORMA
-- ============================================================================
CREATE INDEX IF NOT EXISTS idx_evidence_instansi_indicator ON evidence_documents(instansi_id, indicator_id);
CREATE INDEX IF NOT EXISTS idx_evidence_status ON evidence_documents(status_validasi);
CREATE INDEX IF NOT EXISTS idx_evidence_checklist ON evidence_documents(checklist_id);
CREATE INDEX IF NOT EXISTS idx_self_assessments_lookup ON self_assessments(instansi_id, periode_id, indicator_id);
CREATE INDEX IF NOT EXISTS idx_indicator_checklists_ind ON indicator_checklists(indicator_id);
CREATE INDEX IF NOT EXISTS idx_audit_logs_user_date ON audit_logs(user_id, created_at DESC);

-- ============================================================================
-- TRIGGER UPDATE TIMESTAMP OTOMATIS
-- ============================================================================
CREATE OR REPLACE FUNCTION set_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS trg_evidence_updated_at ON evidence_documents;
CREATE TRIGGER trg_evidence_updated_at
BEFORE UPDATE ON evidence_documents
FOR EACH ROW EXECUTE FUNCTION set_updated_at_column();

DROP TRIGGER IF EXISTS trg_assessment_updated_at ON self_assessments;
CREATE TRIGGER trg_assessment_updated_at
BEFORE UPDATE ON self_assessments
FOR EACH ROW EXECUTE FUNCTION set_updated_at_column();

-- ============================================================================
-- ROW LEVEL SECURITY (RLS) POLICIES
-- ============================================================================
ALTER TABLE indicators ENABLE ROW LEVEL SECURITY;
ALTER TABLE indicator_levels ENABLE ROW LEVEL SECURITY;
ALTER TABLE indicator_checklists ENABLE ROW LEVEL SECURITY;
ALTER TABLE evidence_documents ENABLE ROW LEVEL SECURITY;
ALTER TABLE self_assessments ENABLE ROW LEVEL SECURITY;

DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE policyname = 'Public Read Indicators' AND tablename = 'indicators') THEN
    CREATE POLICY "Public Read Indicators" ON indicators FOR SELECT USING (true);
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE policyname = 'Public Read Indicator Levels' AND tablename = 'indicator_levels') THEN
    CREATE POLICY "Public Read Indicator Levels" ON indicator_levels FOR SELECT USING (true);
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE policyname = 'Public Read Indicator Checklists' AND tablename = 'indicator_checklists') THEN
    CREATE POLICY "Public Read Indicator Checklists" ON indicator_checklists FOR SELECT USING (true);
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE policyname = 'Enable Read Access for All Evidence' AND tablename = 'evidence_documents') THEN
    CREATE POLICY "Enable Read Access for All Evidence" ON evidence_documents FOR SELECT USING (true);
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE policyname = 'Enable Insert Access for Evidence' AND tablename = 'evidence_documents') THEN
    CREATE POLICY "Enable Insert Access for Evidence" ON evidence_documents FOR INSERT WITH CHECK (true);
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE policyname = 'Enable Delete Access for Evidence' AND tablename = 'evidence_documents') THEN
    CREATE POLICY "Enable Delete Access for Evidence" ON evidence_documents FOR DELETE USING (true);
  END IF;
END $$;

-- ============================================================================
-- SUPABASE STORAGE BUCKET: eval-pemdi-evidence
-- ============================================================================
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES ('eval-pemdi-evidence', 'eval-pemdi-evidence', true, 26214400, ARRAY['application/pdf']::text[])
ON CONFLICT (id) DO UPDATE SET public = true, file_size_limit = 26214400;

DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE policyname = 'Public Access Evidence PDF' AND tablename = 'objects') THEN
    CREATE POLICY "Public Access Evidence PDF" ON storage.objects FOR SELECT USING (bucket_id = 'eval-pemdi-evidence');
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE policyname = 'Allow Upload Evidence PDF' AND tablename = 'objects') THEN
    CREATE POLICY "Allow Upload Evidence PDF" ON storage.objects FOR INSERT WITH CHECK (bucket_id = 'eval-pemdi-evidence');
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE policyname = 'Allow Delete Evidence PDF' AND tablename = 'objects') THEN
    CREATE POLICY "Allow Delete Evidence PDF" ON storage.objects FOR DELETE USING (bucket_id = 'eval-pemdi-evidence');
  END IF;
END $$;

`;

const seedSql = fs.readFileSync('seed_data_supabase.sql', 'utf8');

const fullSql = ddl + "\n\n" + seedSql;
fs.writeFileSync('supabase_full_migration.sql', fullSql, 'utf8');
console.log('supabase_full_migration.sql berhasil dibuat dengan total ukuran:', fullSql.length, 'bytes');
