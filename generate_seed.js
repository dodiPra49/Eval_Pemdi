import fs from 'fs';
import { INDICATORS } from './src/data/indicatorsData.js';

function escapeSql(str) {
  if (str === null || str === undefined) return 'NULL';
  return "'" + String(str).replace(/[\0\x08\x09\x1a\n\r"'\\\%]/g, (char) => {
    switch (char) {
      case "\0": return "\\0";
      case "\x08": return "\\b";
      case "\x09": return "\\t";
      case "\x1a": return "\\z";
      case "\n": return "\\n";
      case "\r": return "\\r";
      case "\"":
      case "'":
      case "\\":
      case "%":
        return "\\" + char;
      default:
        return char;
    }
  }) + "'";
}

let sql = `-- ============================================================================
-- SEED DATA UNTUK EVALPEMDI (PERMENPANRB NO. 8 TAHUN 2026)
-- ============================================================================
USE EvalPemdi;

-- 1. INSTANSI PERCONTOHAN
INSERT INTO instansi (id, kode_instansi, nama_instansi, kategori, alamat_kantor)
VALUES ('11111111-1111-1111-1111-111111111111', 'PEMDA-001', 'Pemerintah Daerah Percontohan', 'Pemkab', 'Jl. Merdeka No. 1')
ON DUPLICATE KEY UPDATE nama_instansi=VALUES(nama_instansi);

-- 2. UNIT KERJA (OPD PIC)
INSERT INTO unit_kerja (id, instansi_id, nama_unit, singkatan)
VALUES 
('22222222-2222-2222-2222-000000000001', '11111111-1111-1111-1111-111111111111', 'Dinas Komunikasi dan Informatika', 'DISKOMINFO'),
('22222222-2222-2222-2222-000000000002', '11111111-1111-1111-1111-111111111111', 'Badan Perencanaan Pembangunan Daerah', 'BAPPEDA'),
('22222222-2222-2222-2222-000000000003', '11111111-1111-1111-1111-111111111111', 'Badan Kepegawaian dan Pengembangan SDM', 'BKPSDM'),
('22222222-2222-2222-2222-000000000004', '11111111-1111-1111-1111-111111111111', 'Bagian Organisasi Sekretariat Daerah', 'BAG_ORGANISASI')
ON DUPLICATE KEY UPDATE nama_unit=VALUES(nama_unit);

-- 3. PENGGUNA AWAL (USERS)
INSERT INTO users (id, instansi_id, unit_kerja_id, nama_lengkap, email, password_hash, role)
VALUES
('33333333-3333-3333-3333-000000000001', '11111111-1111-1111-1111-111111111111', '22222222-2222-2222-2222-000000000001', 'Admin Pemdi', 'admin@evalpemdi.go.id', 'hashed_pass_placeholder', 'admin_instansi'),
('33333333-3333-3333-3333-000000000002', '11111111-1111-1111-1111-111111111111', '22222222-2222-2222-2222-000000000001', 'PIC Diskominfo', 'pic.kominfo@evalpemdi.go.id', 'hashed_pass_placeholder', 'pic_opd'),
('33333333-3333-3333-3333-000000000003', '11111111-1111-1111-1111-111111111111', NULL, 'Asesor Internal Pemda', 'asesor@evalpemdi.go.id', 'hashed_pass_placeholder', 'asesor_internal')
ON DUPLICATE KEY UPDATE nama_lengkap=VALUES(nama_lengkap);

-- 4. PERIODE EVALUASI 2026
INSERT INTO evaluation_periods (id, tahun, nama_periode, tanggal_mulai, tanggal_selesai, is_active)
VALUES
('44444444-4444-4444-4444-000000002026', 2026, 'Evaluasi Kinerja Pemerintahan Digital 2026', '2026-01-01', '2026-12-31', TRUE)
ON DUPLICATE KEY UPDATE nama_periode=VALUES(nama_periode);

`;

// 5. INSERT MASTER INDICATORS
sql += `-- 5. MASTER 20 INDIKATOR\n`;
INDICATORS.forEach(ind => {
  sql += `INSERT INTO indicators (id, nomor, kode, nama, domain_id, domain_name, aspect_name, bobot, deskripsi, tips_asesor)
VALUES (${escapeSql(ind.id)}, ${ind.number}, ${escapeSql(ind.code)}, ${escapeSql(ind.name)}, ${escapeSql(ind.domainId)}, ${escapeSql(ind.domainName)}, ${escapeSql(ind.aspectName)}, ${ind.weight || 5.0}, ${escapeSql(ind.description)}, ${escapeSql(ind.tips || '')})
ON DUPLICATE KEY UPDATE nama=VALUES(nama), deskripsi=VALUES(deskripsi), tips_asesor=VALUES(tips_asesor);\n`;
});

// 6. INSERT CRITERIA LEVELS
sql += `\n-- 6. KRITERIA LEVEL 1-5 PER INDIKATOR\n`;
INDICATORS.forEach(ind => {
  for (let lvl = 1; lvl <= 5; lvl++) {
    const kriteria = ind.criteria?.[lvl] || `Kriteria level ${lvl}`;
    const narasi = ind.evidenceByLevel?.[lvl] || ind.evidenceNarration || `Dokumen bukti level ${lvl}`;
    sql += `INSERT INTO indicator_levels (id, indicator_id, level, kriteria, narasi_bukti)
VALUES (UUID(), ${escapeSql(ind.id)}, ${lvl}, ${escapeSql(kriteria)}, ${escapeSql(narasi)})
ON DUPLICATE KEY UPDATE kriteria=VALUES(kriteria), narasi_bukti=VALUES(narasi_bukti);\n`;
  }
});

// 7. INSERT CHECKLISTS
sql += `\n-- 7. BUTIR CHECKLIST BUKTI DUKUNG\n`;
INDICATORS.forEach(ind => {
  const checklists = ind.evidenceChecklist || [];
  checklists.forEach((item, idx) => {
    sql += `INSERT INTO indicator_checklists (id, indicator_id, label, is_required, min_level, urutan)
VALUES (${escapeSql(item.id)}, ${escapeSql(ind.id)}, ${escapeSql(item.label)}, ${item.required ? 'TRUE' : 'FALSE'}, ${item.minLevel || 3}, ${idx + 1})
ON DUPLICATE KEY UPDATE label=VALUES(label), is_required=VALUES(is_required), min_level=VALUES(min_level);\n`;
  });
});

fs.writeFileSync('seed_data.sql', sql, 'utf8');
console.log('File seed_data.sql berhasil dibuat!');
