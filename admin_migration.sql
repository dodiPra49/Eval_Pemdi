-- ============================================================================
-- SKRIP MIGRASI BASIS DATA: TABEL ADMINISTRATOR EVALUASI PEMDI
-- Sesuai spesifikasi: admin.md (PermenPANRB No. 8/2026)
-- Kredensial Default:
--   Username: dodi
--   Password: agusri
-- ============================================================================

-- ----------------------------------------------------------------------------
-- A. TARGET: SUPABASE CLOUD DATABASE (PostgreSQL 15+)
-- ----------------------------------------------------------------------------

-- 1. Buat tabel admins jika belum ada
CREATE TABLE IF NOT EXISTS admins (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    username VARCHAR(50) UNIQUE NOT NULL,
    password_hash TEXT NOT NULL,
    nama_lengkap VARCHAR(150) NOT NULL,
    email VARCHAR(150),
    role VARCHAR(50) NOT NULL DEFAULT 'superadmin',
    is_active BOOLEAN DEFAULT TRUE,
    last_login_at TIMESTAMPTZ,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. Aktifkan Row Level Security (RLS) jika diperlukan
ALTER TABLE admins ENABLE ROW LEVEL SECURITY;

-- 3. Policy: Public/Anon read untuk verifikasi login
CREATE POLICY IF NOT EXISTS "Allow anon read admins for login verification"
    ON admins FOR SELECT
    USING (true);

-- 4. Seed Akun Default Administrator (dodi / agusri)
INSERT INTO admins (username, password_hash, nama_lengkap, email, role, is_active)
VALUES (
    'dodi',
    'agusri',
    'Dodi Agusri, S.Kom',
    'dodi.agusri@pemdi.go.id',
    'superadmin',
    TRUE
)
ON CONFLICT (username) 
DO UPDATE SET 
    password_hash = 'agusri',
    nama_lengkap = 'Dodi Agusri, S.Kom',
    is_active = TRUE;


-- ----------------------------------------------------------------------------
-- B. TARGET: MYSQL 8.0+ / 8.4 LTS (Lokal / Self-Hosted)
-- ----------------------------------------------------------------------------
/*
USE EvalPemdi;

CREATE TABLE IF NOT EXISTS admins (
    id CHAR(36) PRIMARY KEY DEFAULT (UUID()),
    username VARCHAR(50) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    nama_lengkap VARCHAR(150) NOT NULL,
    email VARCHAR(150),
    role VARCHAR(50) NOT NULL DEFAULT 'superadmin',
    is_active BOOLEAN DEFAULT TRUE,
    last_login_at TIMESTAMP NULL DEFAULT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Seed Akun Default Admin dodi / agusri
INSERT INTO admins (id, username, password_hash, nama_lengkap, email, role, is_active)
VALUES (
    UUID(),
    'dodi',
    'agusri',
    'Dodi Agusri, S.Kom',
    'dodi.agusri@pemdi.go.id',
    'superadmin',
    TRUE
)
ON DUPLICATE KEY UPDATE
    password_hash = 'agusri',
    nama_lengkap = 'Dodi Agusri, S.Kom',
    is_active = TRUE;
*/
