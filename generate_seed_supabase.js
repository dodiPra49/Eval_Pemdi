import fs from 'fs';
import { INDICATORS } from './src/data/indicatorsData.js';

function escapeSql(str) {
  if (str === null || str === undefined) return 'NULL';
  return "'" + String(str).replace(/'/g, "''") + "'";
}

let sql = `-- ============================================================================
-- SEED DATA UNTUK SUPABASE CLOUD (PERMENPANRB NO. 8 TAHUN 2026)
-- Target: Supabase SQL Editor (PostgreSQL 15/16)
-- ============================================================================

-- 1. INSTANSI PERCONTOHAN
INSERT INTO instansi (id, kode_instansi, nama_instansi, kategori, alamat_kantor)
VALUES ('11111111-1111-1111-1111-111111111111', 'PEMDA-001', 'Pemerintah Daerah Percontohan', 'Pemkab', 'Jl. Merdeka No. 1')
ON CONFLICT (kode_instansi) DO UPDATE SET nama_instansi = EXCLUDED.nama_instansi;

-- 2. UNIT KERJA (OPD PIC)
INSERT INTO unit_kerja (id, instansi_id, nama_unit, singkatan)
VALUES 
('22222222-2222-2222-2222-000000000001', '11111111-1111-1111-1111-111111111111', 'Dinas Komunikasi dan Informatika', 'DISKOMINFO'),
('22222222-2222-2222-2222-000000000002', '11111111-1111-1111-1111-111111111111', 'Badan Perencanaan Pembangunan Daerah', 'BAPPEDA'),
('22222222-2222-2222-2222-000000000003', '11111111-1111-1111-1111-111111111111', 'Badan Kepegawaian dan Pengembangan SDM', 'BKPSDM'),
('22222222-2222-2222-2222-000000000004', '11111111-1111-1111-1111-111111111111', 'Bagian Organisasi Sekretariat Daerah', 'BAG_ORGANISASI')
ON CONFLICT (id) DO UPDATE SET nama_unit = EXCLUDED.nama_unit;

-- 3. PENGGUNA AWAL (USERS)
INSERT INTO users (id, instansi_id, unit_kerja_id, nama_lengkap, email, password_hash, role)
VALUES
('33333333-3333-3333-3333-000000000001', '11111111-1111-1111-1111-111111111111', '22222222-2222-2222-2222-000000000001', 'Admin Pemdi', 'admin@evalpemdi.go.id', 'hashed_pass_placeholder', 'admin_instansi'),
('33333333-3333-3333-3333-000000000002', '11111111-1111-1111-1111-111111111111', '22222222-2222-2222-2222-000000000001', 'PIC Diskominfo', 'pic.kominfo@evalpemdi.go.id', 'hashed_pass_placeholder', 'pic_opd'),
('33333333-3333-3333-3333-000000000003', '11111111-1111-1111-1111-111111111111', NULL, 'Asesor Internal Pemda', 'asesor@evalpemdi.go.id', 'hashed_pass_placeholder', 'asesor_internal')
ON CONFLICT (email) DO UPDATE SET nama_lengkap = EXCLUDED.nama_lengkap;

-- 4. PERIODE EVALUASI 2026
INSERT INTO evaluation_periods (id, tahun, nama_periode, tanggal_mulai, tanggal_selesai, is_active)
VALUES
('44444444-4444-4444-4444-000000002026', 2026, 'Evaluasi Kinerja Pemerintahan Digital 2026', '2026-01-01', '2026-12-31', TRUE)
ON CONFLICT (tahun) DO UPDATE SET nama_periode = EXCLUDED.nama_periode;

`;

// 5. INSERT MASTER INDICATORS
sql += `-- 5. MASTER 20 INDIKATOR\n`;
INDICATORS.forEach(ind => {
  sql += `INSERT INTO indicators (id, nomor, kode, nama, domain_id, domain_name, aspect_name, bobot, deskripsi, tips_asesor)
VALUES (${escapeSql(ind.id)}, ${ind.number}, ${escapeSql(ind.code)}, ${escapeSql(ind.name)}, ${escapeSql(ind.domainId)}, ${escapeSql(ind.domainName)}, ${escapeSql(ind.aspectName)}, ${ind.weight || 5.0}, ${escapeSql(ind.description)}, ${escapeSql(ind.tips || '')})
ON CONFLICT (id) DO UPDATE SET nama = EXCLUDED.nama, deskripsi = EXCLUDED.deskripsi, tips_asesor = EXCLUDED.tips_asesor;\n`;
});

// 6. INSERT CRITERIA LEVELS
sql += `\n-- 6. KRITERIA LEVEL 1-5 PER INDIKATOR\n`;
INDICATORS.forEach(ind => {
  for (let lvl = 1; lvl <= 5; lvl++) {
    const kriteria = ind.criteria?.[lvl] || `Kriteria level ${lvl}`;
    const narasi = ind.evidenceByLevel?.[lvl] || ind.evidenceNarration || `Dokumen bukti level ${lvl}`;
    sql += `INSERT INTO indicator_levels (id, indicator_id, level, kriteria, narasi_bukti)
VALUES (gen_random_uuid(), ${escapeSql(ind.id)}, ${lvl}, ${escapeSql(kriteria)}, ${escapeSql(narasi)})
ON CONFLICT (indicator_id, level) DO UPDATE SET kriteria = EXCLUDED.kriteria, narasi_bukti = EXCLUDED.narasi_bukti;\n`;
  }
});

// 7. INSERT CHECKLISTS
sql += `\n-- 7. BUTIR CHECKLIST BUKTI DUKUNG\n`;
INDICATORS.forEach(ind => {
  const checklists = ind.evidenceChecklist || [];
  checklists.forEach((item, idx) => {
    sql += `INSERT INTO indicator_checklists (id, indicator_id, label, is_required, min_level, urutan)
VALUES (${escapeSql(item.id)}, ${escapeSql(ind.id)}, ${escapeSql(item.label)}, ${item.required ? 'TRUE' : 'FALSE'}, ${item.minLevel || 3}, ${idx + 1})
ON CONFLICT (id) DO UPDATE SET label = EXCLUDED.label, is_required = EXCLUDED.is_required, min_level = EXCLUDED.min_level;\n`;
  });
});

fs.writeFileSync('seed_data_supabase.sql', sql, 'utf8');
console.log('File seed_data_supabase.sql berhasil dibuat!');
