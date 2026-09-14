import os
import shutil
import openpyxl
from openpyxl.styles import Font, PatternFill, Alignment, Border, Side
from openpyxl.utils import get_column_letter

from docx import Document
from docx.shared import Inches, Pt, RGBColor
from docx.enum.text import WD_ALIGN_PARAGRAPH
from docx.enum.table import WD_TABLE_ALIGNMENT, WD_ALIGN_VERTICAL
from docx.oxml import OxmlElement, parse_xml
from docx.oxml.ns import nsdecls, qn

BASE_DIR = r"d:\DODI AGUSRI.S.KOM\2026 2026 2026\FELLOW DEVELOPER\React.JS\EVAL_PEMDI"
PUBLIC_TEMPLATES_DIR = os.path.join(BASE_DIR, "public", "templates")
BACKUP_TEMPLATES_DIR = os.path.join(BASE_DIR, "template_bukti_dukung")

# Helper formatting docx
def set_cell_background(cell, fill_hex):
    tcPr = cell._tc.get_or_add_tcPr()
    tcPr.append(parse_xml(f'<w:shd {nsdecls("w")} w:fill="{fill_hex}"/>'))

def set_cell_margins(cell, top=100, bottom=100, left=150, right=150):
    tcPr = cell._tc.get_or_add_tcPr()
    tcMar = OxmlElement('w:tcMar')
    for m, val in [('top', top), ('bottom', bottom), ('left', left), ('right', right)]:
        node = OxmlElement(f'w:{m}')
        node.set(qn('w:w'), str(val))
        node.set(qn('w:type'), 'dxa')
        tcMar.append(node)
    tcPr.append(tcMar)

def add_header(doc, instansi="PEMERINTAH KABUPATEN / KOTA / PROVINSI [NAMA DAERAH]", unit="DINAS KOMUNIKASI, INFORMATIKA, PERSANDIAN DAN STATISTIK"):
    for s in doc.sections:
        s.top_margin = Inches(1)
        s.bottom_margin = Inches(1)
        s.left_margin = Inches(1)
        s.right_margin = Inches(1)

    hp = doc.add_paragraph()
    hp.alignment = WD_ALIGN_PARAGRAPH.CENTER
    r1 = hp.add_run(f"{instansi}\n")
    r1.font.bold = True
    r1.font.size = Pt(12)
    r2 = hp.add_run(f"{unit}\n")
    r2.font.bold = True
    r2.font.size = Pt(13)
    r3 = hp.add_run("Jalan Praja Mandiri No. 01, Telp: (021) 7890123, Email: kominfo@daerah.go.id\n")
    r3.font.size = Pt(9)
    r3.font.color.rgb = RGBColor(100, 100, 100)

    p_line = doc.add_paragraph()
    p_line.alignment = WD_ALIGN_PARAGRAPH.CENTER
    p_line.add_run("=" * 65).font.bold = True

def add_footer_approval(doc, jabatan="KEPALA DINAS KOMUNIKASI DAN INFORMATIKA"):
    doc.add_paragraph("\n")
    p = doc.add_paragraph()
    p.alignment = WD_ALIGN_PARAGRAPH.RIGHT
    p.add_run("Ditetapkan di: [Nama Kota]\nPada tanggal: 10 Maret 2026\n\n").font.size = Pt(10)
    p_ttd = doc.add_paragraph()
    p_ttd.alignment = WD_ALIGN_PARAGRAPH.RIGHT
    r_jab = p_ttd.add_run(f"{jabatan}\n\n\n\n\n")
    r_jab.font.bold = True
    r_jab.font.size = Pt(10)
    r_name = p_ttd.add_run("[NAMA PEJABAT LENGKAP, GELAR]\n")
    r_name.font.bold = True
    r_name.font.size = Pt(10)
    r_nip = p_ttd.add_run("NIP. 19800101 200501 1 001\n")
    r_nip.font.size = Pt(9)

# Helper formatting openpyxl
thin_border = Border(
    left=Side(style='thin', color='D3D3D3'),
    right=Side(style='thin', color='D3D3D3'),
    top=Side(style='thin', color='D3D3D3'),
    bottom=Side(style='thin', color='D3D3D3')
)
header_fill = PatternFill(start_color="1E3A8A", end_color="1E3A8A", fill_type="solid")
header_font = Font(name="Calibri", size=10, bold=True, color="FFFFFF")
title_font = Font(name="Calibri", size=14, bold=True, color="1E3A8A")
sub_font = Font(name="Calibri", size=10, italic=True, color="555555")

def setup_excel_title(ws, title, subtitle):
    ws.merge_cells("A1:G1")
    ws["A1"] = title
    ws["A1"].font = title_font
    ws["A1"].alignment = Alignment(horizontal="left", vertical="center")
    
    ws.merge_cells("A2:G2")
    ws["A2"] = subtitle
    ws["A2"].font = sub_font
    ws["A2"].alignment = Alignment(horizontal="left", vertical="center")
    ws.row_dimensions[1].height = 25
    ws.row_dimensions[2].height = 18

def autofit_columns(ws):
    for col in ws.columns:
        max_len = 0
        col_letter = get_column_letter(col[0].column)
        for cell in col:
            val = str(cell.value or '')
            if '\n' in val:
                val = val.split('\n')[0]
            if len(val) > max_len:
                max_len = len(val)
        ws.column_dimensions[col_letter].width = min(max(max_len + 4, 12), 45)


# =========================================================================
# DEFINISI 16 INDIKATOR TAMBAHAN (IND-01 s.d. IND-20 di luar 03, 07, 11, 16)
# =========================================================================

TEMPLATES_CONFIG = [
    {
        "id": "ind_01",
        "code": "IND-01",
        "dir_name": "INDIKATOR_01_TATA_KELOLA",
        "name": "Tata Kelola Pemerintah Digital",
        "aspect": "Aspek 1: Tata Kelola dan Manajemen",
        "word": {
            "file": "Template_Peraturan_Arsitektur_dan_Peta_Rencana_Pemdi_Indikator01.docx",
            "title": "PERATURAN KEPALA DAERAH TENTANG ARSITEKTUR DAN PETA RENCANA PEMERINTAH DIGITAL TAHUN 2025-2029",
            "doc_no": "Nomor: 24 Tahun 2025",
            "sections": [
                ("BAB I KETENTUAN UMUM", "Menetapkan definisi Arsitektur SPBE, Domain Proses Bisnis, Domain Data, Domain Aplikasi, Domain Infrastruktur, Domain Keamanan, dan Domain Layanan sesuai Perpres 95/2018 dan PermenPANRB 8/2026."),
                ("BAB II ARSITEKTUR PEMERINTAH DIGITAL", "Memuat struktur 6 domain arsitektur yang terpadu, referensi arsitektur nasional, dan keterpaduan lintas unit kerja instansi."),
                ("BAB III PETA RENCANA STRATEGIS", "Tahapan inisiatif strategis 5 tahunan, alokasi program prioritas, estimasi kebutuhan anggaran, dan penanggung jawab per inisiatif."),
                ("BAB IV INTEGRASI KE SIA-SPBE NASIONAL", "Kewajiban seluruh unit kerja menginput dan melakukan pemutakhiran arsitektur ke Sistem Informasi Arsitektur SPBE Nasional (SIA-SPBE).")
            ]
        },
        "excel": {
            "file": "Template_Matriks_Penyelarasan_Arsitektur_SIA_SPBE_Indikator01.xlsx",
            "title": "MATRIKS PENYELARASAN 6 DOMAIN ARSITEKTUR PEMDI DENGAN SIA-SPBE NASIONAL",
            "subtitle": "Evaluasi Kematangan Tata Kelola Pemerintah Digital - PermenPANRB No. 8/2026",
            "headers": ["No", "Kode Domain", "Nama Domain Arsitektur", "Komponen Instansi", "Kode Referensi SIA-SPBE", "Status Validasi KemenPANRB", "Unit Kerja PIC"],
            "rows": [
                [1, "D.01", "Domain Proses Bisnis", "Peta Tematik Layanan Administrasi & Publik", "REF-PB-2026-001", "Tervalidasi (Approved)", "Biro Organisasi / Bagian Ortala"],
                [2, "D.02", "Domain Data & Informasi", "Katalog Standar Data & Metadata Sektoral", "REF-DT-2026-012", "Tervalidasi (Approved)", "Bappeda / Diskominfo"],
                [3, "D.03", "Domain Aplikasi SPBE", "Katalog Aplikasi Khusus dan Umum Instansi", "REF-AP-2026-045", "Tervalidasi (Approved)", "Diskominfo (Bidang Aptika)"],
                [4, "D.04", "Domain Infrastruktur", "Pusat Data Nasional & Jaringan Intra Pemerintah", "REF-INF-2026-003", "Tervalidasi (Approved)", "Diskominfo (Bidang IKP/Jaringan)"],
                [5, "D.05", "Domain Keamanan", "Sistem Manajemen Keamanan Informasi & CSIRT", "REF-SEC-2026-009", "Tervalidasi (Approved)", "Diskominfo (Sandi & Siber)"],
                [6, "D.06", "Domain Layanan Digital", "Portal Pelayanan Publik & Administrasi Terpadu", "REF-LAY-2026-021", "Tervalidasi (Approved)", "DPMPTSP / Seluruh OPD"]
            ]
        }
    },
    {
        "id": "ind_02",
        "code": "IND-02",
        "dir_name": "INDIKATOR_02_MANAJEMEN_LAYANAN",
        "name": "Manajemen Layanan Digital Pemerintah",
        "aspect": "Aspek 1: Tata Kelola dan Manajemen",
        "word": {
            "file": "Template_SOP_Manajemen_Layanan_dan_Service_Desk_Indikator02.docx",
            "title": "STANDAR OPERASIONAL PROSEDUR (SOP) MANAJEMEN LAYANAN DIGITAL & SERVICE DESK TERPADU",
            "doc_no": "SOP/DISKOMINFO/2026/002",
            "sections": [
                ("1. TUJUAN DAN RUANG LINGKUP", "Memberikan panduan standar dalam mengelola permintaan layanan digital, penanganan gangguan (incident management), perubahan sistem (change management), dan pemenuhan Service Level Agreement (SLA)."),
                ("2. STRUKTUR SERVICE DESK & ESKALASI", "Level 1: Helpdesk Call/Chat/Web (First Response < 15 menit), Level 2: Technical Specialist Network/App (Resolution < 4 jam), Level 3: Principal Vendor / Pengembang Sistem."),
                ("3. PROSEDUR MANAJEMEN PERUBAHAN SISTEM (RFC)", "Alur pengajuan Request for Change, analisis dampak keamanan, pengujian User Acceptance Test (UAT), dan persetujuan Change Advisory Board (CAB).")
            ]
        },
        "excel": {
            "file": "Template_Register_Risiko_Pemerintah_Digital_Indikator02.xlsx",
            "title": "FORMULIR REGISTER RISIKO SPBE & RENCANA MITIGASI DAMPAK (RISK TREATMENT PLAN)",
            "subtitle": "Standar Evaluasi Manajemen Risiko TIK - PermenPANRB No. 8/2026 & ISO 31000",
            "headers": ["No", "ID Risiko", "Kategori Risiko", "Deskripsi Ancaman / Kerentanan", "Tingkat Kemungkinan (1-5)", "Tingkat Dampak (1-5)", "Besaran Risiko", "Rencana Mitigasi", "Target Penyelesaian"],
            "rows": [
                [1, "RSK-01", "Keamanan Siber", "Serangan Ransomware pada Server Basis Data Layanan Publik", 3, 5, 15, "Penerapan backup offline harian (air-gapped) & implementasi EDR", "Triwulan I 2026"],
                [2, "RSK-02", "Infrastruktur", "Kegagalan suplai daya genset/UPS di Server Room", 2, 4, 8, "Peremajaan baterai UPS berkala dan kontrak maintenance genset", "Triwulan II 2026"],
                [3, "RSK-03", "Data Pribadi", "Kebocoran data kependudukan akibat celah API tidak terautentikasi", 3, 5, 15, "Pemasangan API Gateway dengan autentikasi JWT token & audit berkala", "Triwulan I 2026"],
                [4, "RSK-04", "SDM TIK", "Tingginya turnover programmer dan devops engineer in-house", 4, 3, 12, "Pemberian tunjangan kinerja fungsional pranata komputer & sertifikasi", "Triwulan III 2026"]
            ]
        }
    },
    {
        "id": "ind_04",
        "code": "IND-04",
        "dir_name": "INDIKATOR_04_KOLABORASI_DIGITAL",
        "name": "Kolaborasi Penerapan Pemerintah Digital",
        "aspect": "Aspek 2: Penyelenggara (SDM & Kolaborasi)",
        "word": {
            "file": "Template_MoU_dan_Kerangka_Kolaborasi_Digital_Indikator04.docx",
            "title": "NOTA KESEPAHAMAN (MoU) & KERANGKA KERJA KOLABORASI PEMERINTAH DIGITAL LINTAS INSTANSI",
            "doc_no": "Nomor: 004/MOU-PEMDI/2026",
            "sections": [
                ("1. DASAR KESEPAKATAN", "Sinergi percepatan transformasi digital melalui pemanfaatan bersama infrastruktur, interoperabilitas sistem, dan pertukaran talenta digital."),
                ("2. RUANG LINGKUP KERJA SAMA", "Pengembangan super-app bersama, pemanfaatan cloud sharing, pembentukan gugus tugas AI, dan program capacity building lintas instansi mitra."),
                ("3. HAK DAN KEWAJIBAN PARA PIHAK", "Penyediaan akses data terstandar, perlindungan kerahasiaan data sesuai UU PDP, dan evaluasi hasil kerja sama minimal sekali per semester.")
            ]
        },
        "excel": {
            "file": "Template_Matriks_Agenda_Kolaborasi_Lintas_Sektor_Indikator04.xlsx",
            "title": "MATRIKS PEMETAAN STAKEHOLDER & AGENDA KOLABORASI PEMERINTAH DIGITAL",
            "subtitle": "Monitoring Kolaborasi Quadruple Helix (Pemerintah, Akademisi, Industri, Komunitas)",
            "headers": ["No", "Mitra Kolaborasi", "Sektor Mitra", "Fokus Program Kolaborasi", "Bentuk Dukungan", "Output Capaian", "Status Pelaksanaan"],
            "rows": [
                [1, "Kementerian PANRB & Kominfo", "Kementerian / Pusat", "Penyelarasan SIA-SPBE dan Integrasi Portal Nasional", "Bimbingan teknis arsitektur", "Arsitektur tervalidasi 100%", "Aktif Berjalan"],
                [2, "Universitas Negeri Terkemuka", "Akademisi", "Riset Penggunaan GenAI untuk Naskah Dinas ASN", "Tenaga ahli data science", "Prototype aplikasi AI lokal", "Tahap Uji Coba"],
                [3, "Bank Pembangunan Daerah (BPD)", "BUMD / Perbankan", "Integrasi Payment Gateway Pajak & Retribusi Daerah", "API integrasi keuangan daerah", "Sistem e-Retribusi Live", "Aktif Berjalan"],
                [4, "Komunitas Relawan TIK & Siber", "Komunitas Masyarakat", "Sosialisasi Literasi Keamanan Data Pribadi bagi Warga", "Fasilitator webinar & workshop", "1.500 warga teredukasi", "Selesai Semester 1"]
            ]
        }
    },
    {
        "id": "ind_05",
        "code": "IND-05",
        "dir_name": "INDIKATOR_05_SATU_DATA_INDONESIA",
        "name": "Satu Data Indonesia (SDI)",
        "aspect": "Aspek 3: Data & Informasi",
        "word": {
            "file": "Template_Pedoman_dan_SK_Forum_Satu_Data_Indikator05.docx",
            "title": "SURAT KEPUTUS KEPALA DAERAH TENTANG FORUM SATU DATA INDONESIA & SEKRETARIAT SDI DAERAH",
            "doc_no": "Nomor: 188.45/120/SK/2025",
            "sections": [
                ("MENIMBANG & MENGINGAT", "Pelaksanaan Perpres No. 39 Tahun 2019 tentang Satu Data Indonesia dan pemenuhan prinsip Standar Data, Metadata, Interoperabilitas Data, serta Kode Referensi."),
                ("SUSUNAN FORUM SATU DATA DAERAH", "Pembina Data: BPS Daerah; Walidata: Diskominfo; Walidata Pendukung: Bappeda; Produsen Data: Seluruh Organisasi Perangkat Daerah (OPD)."),
                ("TUGAS DAN TANGGUNG JAWAB WALIDATA", "Memeriksa kesesuaian data dari produsen data, menyebarluaskan data melalui Portal Satu Data, dan mengelola katalog metadata baku.")
            ]
        },
        "excel": {
            "file": "Template_Buku_Induk_Daftar_Data_dan_Metadata_SDI_Indikator05.xlsx",
            "title": "BUKU INDUK DAFTAR DATA PRIORITAS & METADATA STATISTIK SATU DATA INDONESIA (SDI)",
            "subtitle": "Katalog Standar Data Resmi Instansi Sesuai Prinsip SDI (Perpres 39/2019)",
            "headers": ["No", "Kode Data", "Nama Dataset", "Produsen Data (OPD)", "Jenis Data", "Frekuensi Pemutakhiran", "Format Berbagi Pakai", "Status Rilis Portal"],
            "rows": [
                [1, "DTA-SDI-001", "Jumlah Penerima Bantuan Sosial Pangan per Kecamatan", "Dinas Sosial", "Statistik Sektoral", "Bulanan", "JSON / CSV / XLSX", "Terpublikasi"],
                [2, "DTA-SDI-002", "Angka Stunting & Status Gizi Balita per Desa/Kelurahan", "Dinas Kesehatan", "Statistik Sektoral", "Triwulanan", "JSON / CSV / API", "Terpublikasi"],
                [3, "DTA-SDI-003", "Data Realisasi Pendapatan Pajak Daerah Harian", "Badan Pendapatan Daerah", "Keuangan Sektoral", "Harian", "API Endpoint", "Terpublikasi"],
                [4, "DTA-SDI-004", "Kondisi Kemantapan Ruas Jalan Kabupaten", "Dinas PUPR", "Geospasial / Statistik", "Semesteran", "GeoJSON / Shapefile", "Terpublikasi"]
            ]
        }
    },
    {
        "id": "ind_06",
        "code": "IND-06",
        "dir_name": "INDIKATOR_06_INFORMASI_GEOSPASIAL",
        "name": "Penyelenggaraan Informasi Geospasial",
        "aspect": "Aspek 3: Data & Informasi",
        "word": {
            "file": "Template_SOP_Simpul_Jaringan_Informasi_Geospasial_Indikator06.docx",
            "title": "STANDAR OPERASIONAL PROSEDUR (SOP) OPERASIONALISASI SIMPUL JARINGAN INFORMASI GEOSPASIAL",
            "doc_no": "SOP-BIG-GEOPORTAL-2026/01",
            "sections": [
                ("1. KETENTUAN UMUM", "Pengelolaan simpul jaringan informasi geospasial daerah yang terhubung langsung ke Jaringan Informasi Geospasial Nasional (JIGN) Badan Informasi Geospasial (BIG)."),
                ("2. STANDAR DATA SPASIAL", "Mengikuti standar katalog unsur geografis indonesia (KUGI), sistem koordinat WGS 84 / UTM, dan validasi topologi data spasial tanpa celah (no overlaps / gaps)."),
                ("3. PEMELIHARAAN SERVER MAP SERVICE", "Penerbitan layanan Web Map Service (WMS), Web Feature Service (WFS), dan metadata spasial ISO 19115.")
            ]
        },
        "excel": {
            "file": "Template_Katalog_Unsur_Geografis_dan_Node_Geoportal_Indikator06.xlsx",
            "title": "KATALOG UNSUR DATA GEOSPASIAL & STATUS INTEGRASI SIMPUL JARINGAN KE JIGN-BIG",
            "subtitle": "Inventarisasi Layer Data Geospasial Tematik Daerah Sesuai Standar KUGI",
            "headers": ["No", "Kode Unsur KUGI", "Nama Layer Peta Tematik", "Wali Data Peta", "Skala Peta", "Format Service (WMS/WFS)", "Status Terhubung JIGN BIG"],
            "rows": [
                [1, "KUGI-TR-01", "Peta Rencana Tata Ruang Wilayah (RTRW)", "Dinas PUPR / Tata Ruang", "1:25.000", "WMS & WFS", "Terhubung Aktif (Hijau)"],
                [2, "KUGI-BNC-03", "Peta Kawasan Rawan Bencana Banjir & Longsor", "BPBD", "1:25.000", "WMS & WFS", "Terhubung Aktif (Hijau)"],
                [3, "KUGI-KES-05", "Peta Sebaran Fasilitas Kesehatan & Puskesmas", "Dinas Kesehatan", "1:10.000", "WMS & GeoJSON", "Terhubung Aktif (Hijau)"],
                [4, "KUGI-EKO-02", "Peta Kawasan Industri & Sentra UMKM", "Dinas Koperasi & Perdagangan", "1:10.000", "WMS", "Terhubung Aktif (Hijau)"]
            ]
        }
    },
    {
        "id": "ind_08",
        "code": "IND-08",
        "dir_name": "INDIKATOR_08_PERLINDUNGAN_DATA_PRIBADI",
        "name": "Perlindungan Data Pribadi (PDP)",
        "aspect": "Aspek 3: Data & Informasi",
        "word": {
            "file": "Template_Kebijakan_dan_DPIA_Pelindungan_Data_Pribadi_Indikator08.docx",
            "title": "DOKUMEN PENILAIAN DAMPAK PELINDUNGAN DATA PRIBADI (DATA PROTECTION IMPACT ASSESSMENT - DPIA)",
            "doc_no": "DPIA/PDP-PEMDI/2026/01",
            "sections": [
                ("1. DESKRIPSI PEMROSESAN DATA PRIBADI", "Pemetaan aliran pengumpulan, penyimpanan, pemrosesan, dan transfer data identitas warga (NIK, nama, foto wajah, rekam medis, dll.) pada sistem layanan publik."),
                ("2. PENILAIAN KEBUTUHAN DAN PROPORSIONALITAS", "Prinsip pemrosesan data terbatas hanya untuk tujuan sah penyelenggaraan layanan publik digital sesuai amanat UU No. 27 Tahun 2022 tentang PDP."),
                ("3. IDENTIFIKASI & MITIGASI RISIKO PELANGGARAN HAK SUBJEK DATA", "Analisis risiko kebocoran data, penyalahgunaan akses internal, dan mitigasi enkripsi end-to-end serta penunjukan Pejabat Pelindung Data Pribadi (DPO).")
            ]
        },
        "excel": {
            "file": "Template_Record_of_Processing_Activities_RoPA_PDP_Indikator08.xlsx",
            "title": "MATRIKS REKOD KEGIATAN PEMROSESAN DATA PRIBADI (RECORD OF PROCESSING ACTIVITIES - RoPA)",
            "subtitle": "Kepatuhan Mandatori Pengendali Data Pribadi Pemerintah Sesuai UU No. 27/2022",
            "headers": ["No", "Nama Sistem / Aplikasi", "Kategori Data Pribadi Diproses", "Tujuan Pemrosesan", "Dasar Hukum Pemrosesan", "Masa Retensi Data", "Langkah Pengamanan Enkripsi"],
            "rows": [
                [1, "Aplikasi Layanan e-KTP & Adminduk", "Nama, NIK, No KK, Alamat, Sidik Jari", "Penerbitan dokumen kependudukan", "UU Adminduk & UU PDP", "Permanen / Sesuai Aturan Arsip", "Enkripsi AES-256 pada database"],
                [2, "Aplikasi Rekam Medis Elektronik (RME)", "Riwayat penyakit, obat, diagnosis medis", "Pelayanan kesehatan pasien di RSUD", "Permenkes RME & UU Kesehatan", "25 Tahun dari kunjungan terakhir", "Enkripsi kolom database & TLS 1.3"],
                [3, "Portal Seleksi ASN / Non-ASN Daerah", "Ijazah, Transkrip, NIK, No Rekening", "Seleksi rekrutmen pegawai baru", "UU ASN & KepmenPANRB", "5 Tahun setelah seleksi", "Akses berbasis role (RBAC) & hashing"],
                [4, "Aplikasi Pengaduan Warga / Aspirasi", "Nomor Telepon, Nama Pelapor, Titik Lokasi", "Verifikasi identitas pelapor", "Perpres SP4N Lapor", "3 Tahun", "Penyensoran otomatis nomor HP di publik"]
            ]
        }
    },
    {
        "id": "ind_09",
        "code": "IND-09",
        "dir_name": "INDIKATOR_09_AUDIT_TIK",
        "name": "Audit Teknologi Informasi dan Komunikasi",
        "aspect": "Aspek 4: Keamanan Pemerintah Digital",
        "word": {
            "file": "Template_KAK_dan_Laporan_Audit_TIK_Indikator09.docx",
            "title": "KERANGKA ACUAN KERJA (KAK) & LAPORAN HASIL AUDIT TIK DAN PENGUJIAN PENETRASI (VAPT)",
            "doc_no": "AUDIT-TIK/2026/009",
            "sections": [
                ("1. LATAR BELAKANG AUDIT", "Memenuhi ketentuan audit berkala infrastruktur, aplikasi, dan tata kelola TIK instansi minimal sekali dalam 2 tahun sesuai standar BSSN dan PermenPANRB No. 8/2026."),
                ("2. RUANG LINGKUP PEMERIKSAAN", "Vulnerability Assessment & Penetration Testing (VAPT) terhadap 10 sistem elektronik prioritas, review konfigurasi firewall/switch, dan audit kepatuhan lisensi perangkat lunak."),
                ("3. RINGKASAN EKSEKUTIF TEMUAN AUDIT", "Klasifikasi temuan Critical, High, Medium, dan Low, serta rekomendasi teknis perbaikan arsitektur dan patch keamanan.")
            ]
        },
        "excel": {
            "file": "Template_Matriks_Temuan_dan_Tindak_Lanjut_Audit_TIK_Indikator09.xlsx",
            "title": "MATRIKS TEMUAN AUDIT TIK, TINGKAT SEVERITY & MONITORING TINDAK LANJUT",
            "subtitle": "Pencatatan Rekomendasi Auditor Eksternal / BSSN dan Progress Remediasi",
            "headers": ["No", "Kode Temuan", "Aset TIK Terdampak", "Deskripsi Kerentanan (CVE)", "Tingkat Severity", "Rekomendasi Remediasi", "Status Tindak Lanjut", "Verifikasi Auditor"],
            "rows": [
                [1, "TMN-TIK-01", "Server Web Portal Daerah", "Outdated OpenSSL library vulnerable to RCE", "Critical", "Upgrade package OpenSSL & reboot daemon", "100% Selesai (Remediated)", "Verified Closed"],
                [2, "TMN-TIK-02", "API Endpoint Pajak Daerah", "Lack of rate-limiting causing DoS risk", "High", "Implementasi WAF rate-limiting rule (100 req/min)", "100% Selesai (Remediated)", "Verified Closed"],
                [3, "TMN-TIK-03", "Aplikasi Surat Masuk ASN", "Missing HTTP Security Headers (HSTS, CSP)", "Medium", "Konfigurasi header nginx reverse proxy", "100% Selesai (Remediated)", "Verified Closed"],
                [4, "TMN-TIK-04", "Ruang Server Diskominfo", "Kabel UTP patch panel belum berlabel rapi", "Low", "Pemasangan label dan cable management duct", "100% Selesai (Remediated)", "Verified Closed"]
            ]
        }
    },
    {
        "id": "ind_10",
        "code": "IND-10",
        "dir_name": "INDIKATOR_10_SMKI",
        "name": "Penerapan Sistem Manajemen Keamanan Informasi (SMKI)",
        "aspect": "Aspek 4: Keamanan Pemerintah Digital",
        "word": {
            "file": "Template_Kebijakan_Keamanan_Informasi_dan_SOP_Insiden_Indikator10.docx",
            "title": "KEBIJAKAN SISTEM MANAJEMEN KEAMANAN INFORMASI (SMKI) BERDASARKAN STANDAR ISO/IEC 27001",
            "doc_no": "KEB-SMKI/2026/010",
            "sections": [
                ("1. PERNYATAAN KEBIJAKAN KEAMANAN INFORMASI", "Komitmen pimpinan instansi untuk menjaga Kerahasiaan (Confidentiality), Keutuhan (Integrity), dan Ketersediaan (Availability) seluruh aset informasi pemerintah digital."),
                ("2. KONTROL AKSES PENGGUNA & KATA SANDI", "Kebijakan autentikasi multi-faktor (MFA), pergantian sandi minimal 90 hari, larangan berbagi akun, dan pencabutan hak akses segera saat pegawai mutasi/berhenti."),
                ("3. TANGGUNG JAWAB PERSONIL & PENGGUNAAN ASET", "Kebijakan Clear Desk & Clear Screen, penggunaan VPN resmi untuk kerja remote, dan pelarangan pemasangan software tidak berlisensi.")
            ]
        },
        "excel": {
            "file": "Template_Checklist_Evaluasi_Kepatuhan_SMKI_ISO27001_Indikator10.xlsx",
            "title": "CHECKLIST AUDIT INTERNAL KEPATUHAN SMKI (ISO/IEC 27001:2022 / INDEKS KAMI BSSN)",
            "subtitle": "Kertas Kerja Evaluasi Kesiapan Sertifikasi Keamanan Informasi Instansi",
            "headers": ["No", "Klausul / Kontrol", "Area Pengamanan", "Pertanyaan Evaluasi", "Status Pemenuhan", "Bukti Dukung Fisik / Digital", "Skor Kepatuhan (0-100)"],
            "rows": [
                [1, "A.5.1", "Kebijakan Organisasi", "Apakah kebijakan keamanan informasi disahkan pimpinan dan disosialisasikan?", "Sesuai Penuh", "SK Kepala Daerah No 12/2025 & Berita Acara", 100],
                [2, "A.8.1", "Perangkat Pengguna", "Apakah perangkat laptop dinas dipasang antivirus terpusat dan disk encryption?", "Sesuai Penuh", "Dashboard Console EDR Antivirus", 95],
                [3, "A.8.5", "Autentikasi Aman", "Apakah akses administrator server telah mengaktifkan Multi-Factor Authentication?", "Sesuai Penuh", "Log Auth Google Authenticator/FIDO2", 100],
                [4, "A.8.12", "Pencegahan Kebocoran Data", "Apakah ada filter Data Loss Prevention (DLP) untuk file sensitif?", "Sesuai Sebagian", "Konfigurasi gateway email dan firewall", 80]
            ]
        }
    },
    {
        "id": "ind_12",
        "code": "IND-12",
        "dir_name": "INDIKATOR_12_TANGGAP_INSIDEN_CSIRT",
        "name": "Tanggap Insiden Siber (CSIRT)",
        "aspect": "Aspek 4: Keamanan Pemerintah Digital",
        "word": {
            "file": "Template_SK_Tim_CSIRT_dan_Profil_RFC2350_Indikator12.docx",
            "title": "SURAT KEPUTUS KEPALA DAERAH TENTANG TIM TANGGAP INSIDEN SIBER (CSIRT) & DOKUMEN PROFIL RFC 2350",
            "doc_no": "SK/CSIRT-DAERAH/2026/012",
            "sections": [
                ("1. PEMBENTUKAN DAN SUSUNAN TIM CSIRT", "Pembina: Sekretaris Daerah; Ketua Tim: Kepala Diskominfo; Tim Triase & Analis: Pranata Komputer Madya/Muda; Tim Penanganan: Ahli Jaringan & Web."),
                ("2. PROFIL RESMI CSIRT (RFC 2350)", "Mendefinisikan alamat PGP Key resmi tim CSIRT, jam operasional 24/7, email aduan insiden siber resmi (csirt@daerah.go.id), dan ruang lingkup konstituen seluruh OPD."),
                ("3. MATRIKS ESKALASI DAN KOMUNIKASI PUBLIK", "Prosedur isolasi sistem terdampak, eskalasi darurat ke BSSN (Pusopskamsinas), dan penerbitan Security Advisory resmi untuk mitigasi masal.")
            ]
        },
        "excel": {
            "file": "Template_Log_Register_Insiden_Keamanan_Siber_CSIRT_Indikator12.xlsx",
            "title": "LOG REGISTER PENANGANAN INSIDEN SIBER & REKAPITULASI TRIKAP CSIRT",
            "subtitle": "Pencatatan Insiden Keamanan Informasi Sesuai Standar Panduan Penanganan Insiden BSSN",
            "headers": ["No", "ID Insiden", "Waktu Deteksi", "Sistem Terdampak", "Jenis Serangan", "Tingkat Keparahan", "Waktu Respon Awal", "Waktu Pemulihan (RTO)", "Status Penanganan"],
            "rows": [
                [1, "INC-2026-001", "12/01/2026 02:15", "Subdomain Portal Pariwisata", "Web Defacement (Judi Online)", "Tinggi", "8 Menit", "45 Menit", "Closed (Remediated)"],
                [2, "INC-2026-002", "18/02/2026 10:30", "Mail Server Zimbra OPD", "Brute-force Authentication Attack", "Sedang", "5 Menit", "15 Menit (IP Banned)", "Closed (Remediated)"],
                [3, "INC-2026-003", "03/03/2026 14:00", "Aplikasi E-Surat Instansi", "Phishing Link Credential Harvest", "Tinggi", "12 Menit", "30 Menit (Domain Blocked)", "Closed (Remediated)"]
            ]
        }
    },
    {
        "id": "ind_13",
        "code": "IND-13",
        "dir_name": "INDIKATOR_13_KETERPADUAN_APLIKASI",
        "name": "Keterpaduan Aplikasi SPBE",
        "aspect": "Aspek 5: Teknologi (Aplikasi & PDN)",
        "word": {
            "file": "Template_Pedoman_Standarisasi_dan_Rasionalisasi_Aplikasi_Indikator13.docx",
            "title": "PEDOMAN STANDARISASI, PENGEMBANGAN & RASIONALISASI APLIKASI PEMERINTAH DIGITAL",
            "doc_no": "PED/TIK-APLIKASI/2026/013",
            "sections": [
                ("1. PRINSIP INTEGRASI DAN INTEROPERABILITAS", "Larangan membangun aplikasi baru yang berdiri sendiri (silo application) tanpa integrasi API dan restu arsitektur dari Tim Koordinasi SPBE Daerah."),
                ("2. STANDAR TEKNOLOGI & KEAMANAN CODING", "Standar framework modern (Secure Coding OWASP), penggunaan Microservices / REST API, autentikasi tersentralisasi OpenID Connect / OAuth2."),
                ("3. PROGRAM RASIONALISASI & KONSOLIDASI SISTEM", "Rencana penggabungan 45 aplikasi legacy unit kerja menjadi 4 portal tematik utama berbasis super-app.")
            ]
        },
        "excel": {
            "file": "Template_Katalog_Inventarisasi_Aplikasi_Instansi_Indikator13.xlsx",
            "title": "KATALOG INVENTARISASI, ARSITEKTUR & RASIONALISASI SELURUH APLIKASI PEMDI",
            "subtitle": "Basis Data Seluruh Sistem Elektronik Instansi Sesuai PermenPANRB No. 8/2026",
            "headers": ["No", "Kode Aplikasi", "Nama Aplikasi", "Unit Kerja Pengelola", "Kategori Aplikasi", "Kesiapan API Interoperabilitas", "Rencana Tindak Lanjut"],
            "rows": [
                [1, "APP-KHUSUS-01", "SIMRS Rumah Sakit Daerah", "RSUD Daerah", "Layanan Publik Kesehatan", "Sudah Terkoneksi API SATUSEHAT", "Pertahankan & Tingkatkan"],
                [2, "APP-KHUSUS-02", "Smart Tax Pendapatan Daerah", "Badan Pendapatan Daerah", "Layanan Keuangan Daerah", "Sudah Memiliki REST API JSON", "Integrasikan ke Super-App"],
                [3, "APP-LEGACY-03", "Sistem Buku Tamu Manual", "Bagian Umum Setda", "Administrasi Internal", "Belum Memiliki API", "Rasionalisasi (Ditutup & Gabung e-Office)"],
                [4, "APP-UMUM-04", "SRIKANDI (Arsip Dinamis)", "Dinas Kearsipan & Perpustakaan", "Aplikasi Umum Nasional", "Terhubung Pusat ANRI", "Perluas adopsi ke seluruh OPD"]
            ]
        }
    },
    {
        "id": "ind_14",
        "code": "IND-14",
        "dir_name": "INDIKATOR_14_PUSAT_DATA_NASIONAL",
        "name": "Pusat Data Nasional (PDN) & Infrastruktur Terpadu",
        "aspect": "Aspek 5: Teknologi (Aplikasi & PDN)",
        "word": {
            "file": "Template_Rencana_Migrasi_Cloud_ke_PDN_Indikator14.docx",
            "title": "DOKUMEN RENCANA KERJA DAN TAHAPAN MIGRASI SISTEM KE PUSAT DATA NASIONAL (PDN)",
            "doc_no": "RENJA-MIGRASI-PDN/2026/014",
            "sections": [
                ("1. TUJUAN KONSOLIDASI INFRASTRUKTUR", "Menghentikan pengadaan server fisik mandiri di masing-masing OPD dan memusatkan komputasi awan ke Pusat Data Nasional (PDN) Kementerian Kominfo."),
                ("2. MATRIKS INVENTARISASI KEBUTUHAN VM DAN STORAGE", "Spesifikasi Virtual Core, RAM, Storage SSD NVMe, dan bandwidth jaringan intra pemerintah yang diajukan ke pengelola PDN."),
                ("3. RENCANA CADANGAN & PEMULIHAN BENCANA (DRC)", "Strategi replikasi data ke Disaster Recovery Center (DRC) dan prosedur failover jika terjadi gangguan jaringan utama.")
            ]
        },
        "excel": {
            "file": "Template_Daftar_Aset_Server_VM_dan_Utilisasi_PDN_Indikator14.xlsx",
            "title": "DAFTAR ASET KOMPUTASI, VIRTUAL MACHINE (VM), & UTILISASI PUSAT DATA NASIONAL (PDN)",
            "subtitle": "Monitoring Alokasi Resource Server, Storage & Bandwidth Cloud Instansi",
            "headers": ["No", "Nama Virtual Machine (VM)", "Fungsi Sistem", "Alokasi vCPU", "Alokasi RAM (GB)", "Kapasitas Storage (TB)", "Lokasi Server (PDN/Lokal)", "Status Operasional"],
            "rows": [
                [1, "VM-PDN-WEB-PORTAL", "Web Server Portal Utama", 8, 32, 1.0, "Pusat Data Nasional (PDN 1)", "Aktif / Sehat (99.9%)"],
                [2, "VM-PDN-DB-CLUSTER", "Cluster PostgreSQL Utama", 16, 64, 4.0, "Pusat Data Nasional (PDN 1)", "Aktif / Sehat (99.9%)"],
                [3, "VM-PDN-DRC-BACKUP", "Replikasi Cadangan Bencana", 8, 32, 4.0, "Disaster Recovery Center (DRC Batam)", "Sinkronisasi Harian"],
                [4, "SERVER-FISIK-LOKAL", "Server Legacy Kantor Diskominfo", 8, 16, 2.0, "Ruang Server Diskominfo Lokal", "Tahap Decommissioning (Ditutup)"]
            ]
        }
    },
    {
        "id": "ind_15",
        "code": "IND-15",
        "dir_name": "INDIKATOR_15_PROSES_BISNIS_TERPADU",
        "name": "Integrasi Proses Bisnis Layanan Digital",
        "aspect": "Aspek 6: Keterpaduan Layanan Digital",
        "word": {
            "file": "Template_Dokumen_Peta_Proses_Bisnis_Terintegrasi_Indikator15.docx",
            "title": "DOKUMEN PETA PROSES BISNIS (BUSINESS PROCESS MAPPING) LAYANAN DIGITAL TERPADU",
            "doc_no": "DOK-PROBIS/2026/015",
            "sections": [
                ("1. METODOLOGI PENYUSUNAN PETA PROSES BISNIS", "Menggunakan standar PermenPANRB No. 19 Tahun 2018 dan diagram alir BPMN 2.0 untuk memetakan keterhubungan antar unit kerja instansi."),
                ("2. PETA PROBIS LEVEL 0, LEVEL 1, DAN LEVEL 2", "Hubungan makro proses tata kelola pemerintahan, proses operasional layanan publik, dan proses penunjang administrasi."),
                ("3. PENYEDERHANAAN ALUR BIROKRASI (BUSINESS PROCESS REENGINEERING)", "Pemangkasan tahapan tatap muka manual menjadi 100% alur kerja digital tanpa hambatan (seamless workflow).")
            ]
        },
        "excel": {
            "file": "Template_Matriks_Silang_Layanan_dan_Proses_Bisnis_Indikator15.xlsx",
            "title": "MATRIKS SILANG HUBUNGAN PROSES BISNIS (PROBIS) DAN LAYANAN DIGITAL INSTANSI",
            "subtitle": "Keterpaduan Layanan Publik Lintas OPD Sesuai Peta Arsitektur Proses Bisnis",
            "headers": ["No", "Kode Probis", "Nama Proses Bisnis", "Layanan Digital Terkait", "OPD Pemilik Proses", "OPD Pendukung", "Indikator Kinerja Probis (KPI)"],
            "rows": [
                [1, "PB-L1-01", "Pelayanan Izin Bangunan & Tata Ruang", "Sistem SIMBG & Geoportal", "Dinas PUPR / Tata Ruang", "DPMPTSP, Diskominfo", "Waktu terbit izin < 3 hari kerja"],
                [2, "PB-L1-02", "Pemberian Bantuan Sosial Terpadu", "Portal Satu Data Kesejahteraan", "Dinas Sosial", "Disdukcapil, Dinkes, Camat", "Ketepatan sasaran desil 1 & 2 (100%)"],
                [3, "PB-L1-03", "Pengadaan Barang/Jasa Pemerintah", "LPSE & E-Katalog Lokal", "Bagian Pengadaan Barang Jasa", "Inspektorat, BPKAD", "Transparansi lelang & zero fraud"],
                [4, "PB-L1-04", "Pengelolaan Penggajian & Tukin ASN", "Sistem Informasi Keuangan Daerah", "Badan Pengelola Keuangan (BPKAD)", "BKPSDM, Seluruh OPD", "Pencairan tanggal 1 tepat waktu"]
            ]
        }
    },
    {
        "id": "ind_17",
        "code": "IND-17",
        "dir_name": "INDIKATOR_17_PORTAL_SATU_DATA_SUPERAPP",
        "name": "Penerapan Portal Satu Data & Super-App Layanan Terpadu",
        "aspect": "Aspek 6: Keterpaduan Layanan Digital",
        "word": {
            "file": "Template_Spesifikasi_Kebutuhan_SuperApp_dan_Portal_Indikator17.docx",
            "title": "DOKUMEN SPESIFIKASI KEBUTUHAN SISTEM & ARSITEKTUR SUPER-APP LAYANAN PUBLIK TERPADU",
            "doc_no": "SPEC-SUPERAPP/2026/017",
            "sections": [
                ("1. KONSEP SUPER-APP PEMERINTAHAN DAERAH", "Satu aplikasi mobile terpadu (Android & iOS) yang memadukan layanan kependudukan, perizinan, kesehatan, pendidikan, transportasi, dan pembayaran pajak."),
                ("2. SISTEM IDENTITAS TUNGGAL (SINGLE SIGN-ON / SSO)", "Autentikasi warga menggunakan NIK dan biometric face recognition terhubung ke Identitas Kependudukan Digital (IKD) Kemendagri."),
                ("3. KINERJA DAN AKSESIBILITAS SISTEM", "Waktu loading halaman < 2 detik, kepatuhan aksesibilitas bagi penyandang disabilitas (WCAG 2.1), dan dukungan push notification darurat.")
            ]
        },
        "excel": {
            "file": "Template_Daftar_Layanan_Single_Sign_On_SSO_Portal_Indikator17.xlsx",
            "title": "INVENTARISASI MODUL LAYANAN PUBLIK TERPADU DALAM SUPER-APP & PORTAL SSO",
            "subtitle": "Katalog Layanan Digital Warga Terkonsolidasi dalam Satu Akses Akun Terpadu",
            "headers": ["No", "Nama Modul Layanan", "Sektor Pelayanan", "Metode Akses (Web/Mobile)", "Protokol Integrasi SSO", "Jumlah Pengguna Aktif Bulanan", "Status Ketersediaan"],
            "rows": [
                [1, "Layanan Antrean Puskesmas Online", "Kesehatan", "Mobile Apps & Web", "OAuth2 / OIDC", "45.000 Pasien / Bulan", "Aktif Berjalan"],
                [2, "Pembayaran Pajak Bumi & Bangunan (PBB)", "Pendapatan Daerah", "Mobile Apps (QRIS & VA)", "REST API Payment", "32.000 Transaksi / Bulan", "Aktif Berjalan"],
                [3, "Pengurusan Akta Kelahiran & Kematian", "Administrasi Kependudukan", "Mobile Apps & Web", "API IKD Kemendagri", "8.500 Pemohon / Bulan", "Aktif Berjalan"],
                [4, "Penerimaan Peserta Didik Baru (PPDB)", "Pendidikan", "Web Portal Terpadu", "SSO Daerah", "28.000 Siswa / Periode", "Musiman (Aktif)"]
            ]
        }
    },
    {
        "id": "ind_18",
        "code": "IND-18",
        "dir_name": "INDIKATOR_18_KRIPTOGRAFI_TTE",
        "name": "Penerapan Kriptografi & Tanda Tangan Elektronik (TTE) Tersertifikasi",
        "aspect": "Aspek 4: Keamanan Pemerintah Digital",
        "word": {
            "file": "Template_SOP_Pemanfaatan_TTE_Tersertifikasi_BSrE_Indikator18.docx",
            "title": "STANDAR OPERASIONAL PROSEDUR (SOP) PENERBITAN DAN PEMANFAATAN SERTIFIKAT ELEKTRONIK (TTE)",
            "doc_no": "SOP-BSRE-TTE/2026/018",
            "sections": [
                ("1. DASAR HUKUM DAN KERJA SAMA BSrE - BSSN", "Pemanfaatan sertifikat elektronik resmi yang diterbitkan oleh Balai Sertifikasi Elektronik (BSrE) Badan Siber dan Sandi Negara (BSSN)."),
                ("2. PROSEDUR PENGAJUAN DAN VERIFIKASI IDENTITAS PEJABAT", "Alur verifikasi NIK, email dinas resmi, perekaman passphrase aman, dan larangan menyerahkan token pengesahan kepada orang lain."),
                ("3. PENERAPAN TTE PADA SELURUH NASKAH DINAS ELEKTRONIK", "Kewajiban penandatanganan SK, Surat Perintah, Nota Dinas, dan Salinan Keputusan secara elektronik tanpa tanda tangan basah.")
            ]
        },
        "excel": {
            "file": "Template_Log_Penerbitan_dan_Utilisasi_TTE_Naskah_Dinas_Indikator18.xlsx",
            "title": "LOG PENERBITAN SERTIFIKAT ELEKTRONIK & REKAP UTILISASI TTE NASKAH DINAS BULANAN",
            "subtitle": "Monitoring Utilisasi Tanda Tangan Elektronik Pejabat Instansi Sesuai BSrE BSSN",
            "headers": ["No", "Nama Pejabat Penandatangan", "Jabatan Struktural", "Status Sertifikat BSrE", "Masa Berlaku Sertifikat", "Volume TTE per Bulan", "Status Audit Trail"],
            "rows": [
                [1, "Drs. H. Ahmad Sudrajat, M.Si", "Sekretaris Daerah", "Aktif Terbit BSrE", "15 Des 2026", "1.240 Dokumen / Bulan", "Valid (Verified BSSN)"],
                [2, "Ir. Siti Rahmawati, MT", "Kepala Dinas Kominfo", "Aktif Terbit BSrE", "20 Nov 2026", "890 Dokumen / Bulan", "Valid (Verified BSSN)"],
                [3, "Bambang Wijaya, SH", "Kepala Bagian Hukum", "Aktif Terbit BSrE", "10 Jan 2027", "650 Dokumen / Bulan", "Valid (Verified BSSN)"],
                [4, "dr. Hendra Kusuma, Sp.A", "Direktur RSUD Daerah", "Aktif Terbit BSrE", "05 Feb 2027", "1.450 Dokumen / Bulan", "Valid (Verified BSSN)"]
            ]
        }
    },
    {
        "id": "ind_19",
        "code": "IND-19",
        "dir_name": "INDIKATOR_19_HELPDESK_24_7",
        "name": "Penyelenggaraan Helpdesk Terpadu Layanan Digital 24/7",
        "aspect": "Aspek 7: Kepuasan Pengguna Layanan",
        "word": {
            "file": "Template_SOP_Helpdesk_Multikanal_dan_Eskalasi_Tiket_Indikator19.docx",
            "title": "STANDAR OPERASIONAL PROSEDUR (SOP) PENYELENGGARAAN HELPDESK MULTIKANAL 24 JAM 7 HARI",
            "doc_no": "SOP-HELPDESK/2026/019",
            "sections": [
                ("1. KANAL LAYANAN BANTUAN RESMI TERPADU", "Layanan bantuan warga dan ASN melalui Telepon Hotline Bebas Pulsa (112), WhatsApp Bot Terverifikasi, Web Live Chat, dan Integrasi SP4N LAPOR!."),
                ("2. STANDAR RESPON & SERVICE LEVEL AGREEMENT (SLA)", "Response time awal maksimal 5 menit, tiket kendala ringan tuntas < 2 jam, tiket kendala sistem berat tuntas < 24 jam dengan notifikasi SMS/WA."),
                ("3. MANAJEMEN SHIFT PETUGAS HELPDESK 24/7", "Jadwal piket 3 shift kerja (Shift Pagi: 07-15, Shift Siang: 15-23, Shift Malam: 23-07) didukung sistem AI Chatbot otomatis.")
            ]
        },
        "excel": {
            "file": "Template_Laporan_Monitoring_Tiket_dan_SLA_Helpdesk_Indikator19.xlsx",
            "title": "LAPORAN MONITORING TIKET PENGADUAN, DURASI PENANGANAN & PENCAPAIAN SLA HELPDESK",
            "subtitle": "Evaluasi Kinerja Layanan Bantuan Pengguna 24/7 - PermenPANRB No. 8/2026",
            "headers": ["No", "ID Tiket", "Kanal Pengaduan", "Kategori Masalah", "Waktu Respon (Menit)", "Durasi Solusi (Jam)", "Pencapaian SLA (<24 Jam)", "Tingkat Kepuasan (1-5)"],
            "rows": [
                [1, "TKT-2026-0891", "WhatsApp 24/7 Bot", "Reset Password Akun ASN", 2, 0.2, "Sesuai SLA (100%)", 5],
                [2, "TKT-2026-0892", "Call Center 112", "Kendala Input Berkas PBB Online", 1, 1.5, "Sesuai SLA (100%)", 5],
                [3, "TKT-2026-0893", "Web Live Chat", "Pertanyaan Jadwal Vaksinasi Puskesmas", 3, 0.5, "Sesuai SLA (100%)", 4],
                [4, "TKT-2026-0894", "SP4N LAPOR!", "Laporan Lampu PJU Jalan Padam", 4, 18.0, "Sesuai SLA (100%)", 5]
            ]
        }
    },
    {
        "id": "ind_20",
        "code": "IND-20",
        "dir_name": "INDIKATOR_20_EVALUASI_KEPUASAN_ESKM",
        "name": "Evaluasi Kepuasan Pengguna (e-SKM) & Tindak Lanjut",
        "aspect": "Aspek 7: Kepuasan Pengguna Layanan",
        "word": {
            "file": "Template_Laporan_Hasil_Survei_Kepuasan_Masyarakat_eSKM_Indikator20.docx",
            "title": "LAPORAN RESMI HASIL EVALUASI SURVEI KEPUASAN MASYARAKAT ELEKTRONIK (e-SKM)",
            "doc_no": "LAP-SKM/2026/020",
            "sections": [
                ("1. METODOLOGI SURVEI KEPUASAN ELEKTRONIK (e-SKM)", "Pelaksanaan survei otomatis secara pop-up setelah pengguna menyelesaikan transaksi layanan digital, mencakup 9 unsur pelayanan sesuai PermenPANRB No. 14 Tahun 2017."),
                ("2. ANALISIS NILAI INDEKS KEPUASAN MASYARAKAT (IKM)", "Kalkulasi nilai IKM berkala, perbandingan skor antar unit pelayanan, dan identifikasi unsur pelayanan dengan nilai terendah."),
                ("3. RENCANA TINDAK LANJUT PERBAIKAN BERKELANJUTAN", "Matriks aksi perbaikan sistem, komitmen waktu penyelesaian perbaikan fitur aplikasi, dan penunjukan penanggung jawab tindak lanjut.")
            ]
        },
        "excel": {
            "file": "Template_Rekapitulasi_Kuesioner_dan_Indeks_Kepuasan_SKM_Indikator20.xlsx",
            "title": "REKAPITULASI KUESIONER 9 UNSUR e-SKM & PERHITUNGAN NILAI INDEKS KEPUASAN MASYARAKAT",
            "subtitle": "Kalkulasi Matematis IKM Sesuai Formula PermenPANRB No. 14/2017 & PermenPANRB 8/2026",
            "headers": ["No", "Kode Unsur", "Unsur Pelayanan (PermenPANRB 14/2017)", "Total Skor Responden", "Jumlah Responden", "Nilai Rata-rata (NRR)", "Nilai Tertimbang", "Kategori Mutu"],
            "rows": [
                [1, "U1", "Kesesuaian Persyaratan Layanan Digital", 3540, 1000, 3.54, 0.393, "Sangat Baik (A)"],
                [2, "U2", "Kemudahan Prosedur Penggunaan Sistem", 3480, 1000, 3.48, 0.387, "Baik (B)"],
                [3, "U3", "Kecepatan Waktu Pelayanan Sistem", 3620, 1000, 3.62, 0.402, "Sangat Baik (A)"],
                [4, "U4", "Kewajaran Biaya / Tarif (Gratis)", 4000, 1000, 4.00, 0.444, "Sangat Baik (A)"],
                [5, "U5", "Kesesuaian Produk / Output Digital", 3580, 1000, 3.58, 0.398, "Sangat Baik (A)"],
                [6, "U6", "Kompetensi / Responsivitas Petugas Support", 3450, 1000, 3.45, 0.383, "Baik (B)"],
                [7, "U7", "Perilaku Petugas / Kualitas Bahasa Chatbot", 3520, 1000, 3.52, 0.391, "Sangat Baik (A)"],
                [8, "U8", "Kualitas Sarana & Antarmuka Aplikasi (UI/UX)", 3490, 1000, 3.49, 0.388, "Baik (B)"],
                [9, "U9", "Penanganan Pengaduan & Umpan Balik", 3500, 1000, 3.50, 0.389, "Sangat Baik (A)"]
            ]
        }
    }
]

# =========================================================================
# GENERATOR FUNGSI DOCX & XLSX
# =========================================================================

def build_docx(cfg, out_path):
    doc = Document()
    add_header(doc, unit=f"TIM KOORDINASI PEMERINTAH DIGITAL / {cfg['aspect'].upper()}")

    p_title = doc.add_paragraph()
    p_title.alignment = WD_ALIGN_PARAGRAPH.CENTER
    r_title = p_title.add_run(f"{cfg['word']['title']}\n")
    r_title.font.bold = True
    r_title.font.size = Pt(13)
    r_no = p_title.add_run(f"{cfg['word']['doc_no']}\n\n")
    r_no.font.bold = True
    r_no.font.size = Pt(11)

    # Info Box Standar Penilaian
    tbl_info = doc.add_table(rows=2, cols=2)
    tbl_info.alignment = WD_TABLE_ALIGNMENT.CENTER
    tbl_info.autofit = False

    c00 = tbl_info.cell(0, 0)
    c00.text = "Kode Indikator Evaluasi"
    c00.paragraphs[0].runs[0].font.bold = True
    c01 = tbl_info.cell(0, 1)
    c01.text = f"{cfg['code']} - {cfg['name']}"
    
    c10 = tbl_info.cell(1, 0)
    c10.text = "Aspek & Regulasi Rujukan"
    c10.paragraphs[0].runs[0].font.bold = True
    c11 = tbl_info.cell(1, 1)
    c11.text = f"{cfg['aspect']} (PermenPANRB No. 8 Tahun 2026)"

    for row in tbl_info.rows:
        for cell in row.cells:
            set_cell_background(cell, "F1F5F9")
            set_cell_margins(cell, 80, 80, 120, 120)

    doc.add_paragraph("\n")

    # Sections
    for heading, content in cfg['word']['sections']:
        h = doc.add_paragraph()
        r_h = h.add_run(heading)
        r_h.font.bold = True
        r_h.font.size = Pt(11)
        r_h.font.color.rgb = RGBColor(30, 58, 138)

        p_desc = doc.add_paragraph()
        p_desc.paragraph_format.line_spacing = 1.15
        p_desc.paragraph_format.space_after = Pt(6)
        r_c = p_desc.add_run(content)
        r_c.font.size = Pt(10.5)

    add_footer_approval(doc)
    doc.save(out_path)


def build_xlsx(cfg, out_path):
    wb = openpyxl.Workbook()
    ws = wb.active
    ws.title = "Matriks Bukti Dukung"
    ws.views.sheetView[0].showGridLines = True

    setup_excel_title(ws, cfg['excel']['title'], cfg['excel']['subtitle'])

    # Headers at row 4
    start_row = 4
    headers = cfg['excel']['headers']
    for col_idx, h_text in enumerate(headers, 1):
        cell = ws.cell(row=start_row, column=col_idx, value=h_text)
        cell.fill = header_fill
        cell.font = header_font
        cell.alignment = Alignment(horizontal="center", vertical="center", wrap_text=True)
        cell.border = thin_border
    ws.row_dimensions[start_row].height = 28

    # Rows
    for r_idx, row_data in enumerate(cfg['excel']['rows'], start_row + 1):
        ws.row_dimensions[r_idx].height = 22
        for col_idx, val in enumerate(row_data, 1):
            cell = ws.cell(row=r_idx, column=col_idx, value=val)
            cell.font = Font(name="Calibri", size=10)
            cell.border = thin_border
            if col_idx == 1:
                cell.alignment = Alignment(horizontal="center", vertical="center")
            elif isinstance(val, (int, float)):
                cell.alignment = Alignment(horizontal="right", vertical="center")
            else:
                cell.alignment = Alignment(horizontal="left", vertical="center")

    autofit_columns(ws)
    wb.save(out_path)


def main():
    print("=== MEMULAI GENERASI TEMPLATE 16 INDIKATOR TAMBAHAN ===")
    total_generated = 0

    for cfg in TEMPLATES_CONFIG:
        # Directories
        pub_dir = os.path.join(PUBLIC_TEMPLATES_DIR, cfg["id"])
        bak_dir = os.path.join(BACKUP_TEMPLATES_DIR, cfg["dir_name"])
        os.makedirs(pub_dir, exist_ok=True)
        os.makedirs(bak_dir, exist_ok=True)

        # 1. Word file
        word_pub = os.path.join(pub_dir, cfg["word"]["file"])
        word_bak = os.path.join(bak_dir, cfg["word"]["file"])
        build_docx(cfg, word_pub)
        shutil.copyfile(word_pub, word_bak)
        total_generated += 1

        # 2. Excel file
        excel_pub = os.path.join(pub_dir, cfg["excel"]["file"])
        excel_bak = os.path.join(bak_dir, cfg["excel"]["file"])
        build_xlsx(cfg, excel_pub)
        shutil.copyfile(excel_pub, excel_bak)
        total_generated += 1

        print(f"[OK] [{cfg['code']}] {cfg['name']} -> {cfg['word']['file']} & {cfg['excel']['file']}")

    print(f"\nSELESAI! Berhasil men-generate {total_generated} berkas template (DOCX & XLSX).")

if __name__ == "__main__":
    main()
