import os
import openpyxl
from openpyxl.styles import Font, PatternFill, Alignment, Border, Side
from openpyxl.utils import get_column_letter

from docx import Document
from docx.shared import Inches, Pt, RGBColor
from docx.enum.text import WD_ALIGN_PARAGRAPH
from docx.enum.table import WD_TABLE_ALIGNMENT, WD_ALIGN_VERTICAL
from docx.oxml import OxmlElement, parse_xml
from docx.oxml.ns import nsdecls, qn

OUTPUT_DIR = r"d:\DODI AGUSRI.S.KOM\2026 2026 2026\FELLOW DEVELOPER\React.JS\EVAL_PEMDI\template_bukti_dukung\INDIKATOR_16_INTEGRASI_APLIKASI"
PUBLIC_DIR = r"d:\DODI AGUSRI.S.KOM\2026 2026 2026\FELLOW DEVELOPER\React.JS\EVAL_PEMDI\public\templates\ind_16"

os.makedirs(OUTPUT_DIR, exist_ok=True)
os.makedirs(PUBLIC_DIR, exist_ok=True)

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

# =========================================================================
# 1. SOP TATA KELOLA INTEGRASI APLIKASI DAN SISTEM LAYANAN (DOCX - LEVEL 3)
# =========================================================================
def create_sop_integrasi_aplikasi_docx(filepath):
    doc = Document()
    for s in doc.sections:
        s.top_margin = Inches(1)
        s.bottom_margin = Inches(1)
        s.left_margin = Inches(1)
        s.right_margin = Inches(1)

    # Kop Surat
    header_p = doc.add_paragraph()
    header_p.alignment = WD_ALIGN_PARAGRAPH.CENTER
    r1 = header_p.add_run("PEMERINTAH DAERAH / KEMENTERIAN / LEMBAGA [NAMA INSTANSI]\n")
    r1.font.bold = True
    r1.font.size = Pt(12)
    r2 = header_p.add_run("DINAS KOMUNIKASI DAN INFORMATIKA / PUSAT DATA DAN INFORMASI\n")
    r2.font.bold = True
    r2.font.size = Pt(13)
    r3 = header_p.add_run("Jalan Pemerintah Terpadu No. 10, Telp: (021) 7891234, Email: diskominfo@daerah.go.id\n")
    r3.font.size = Pt(9)
    r3.font.color.rgb = RGBColor(100, 100, 100)

    p_line = doc.add_paragraph()
    p_line.alignment = WD_ALIGN_PARAGRAPH.CENTER
    p_line.add_run("=" * 65).font.bold = True

    # Judul Dokumen
    title = doc.add_heading(level=1)
    title.alignment = WD_ALIGN_PARAGRAPH.CENTER
    trun = title.add_run("STANDAR OPERASIONAL PROSEDUR (SOP)\nTATA KELOLA INTEGRASI APLIKASI DAN INTEROPERABILITAS SISTEM LAYANAN PEMERINTAH DIGITAL\nNOMOR: SOP/KOMINFO/INT-16/2026")
    trun.font.size = Pt(13)
    trun.font.bold = True
    trun.font.color.rgb = RGBColor(31, 78, 121)

    # Tabel Metadata
    t_id = doc.add_table(rows=5, cols=2)
    t_id.alignment = WD_TABLE_ALIGNMENT.CENTER
    meta = [
        ("Nomor Dokumen", "SOP/DISKOMINFO/INT-16/045/2026"),
        ("Tanggal Penetapan", "15 Januari 2026 (Berlaku Efektif TA 2026)"),
        ("Dasar Regulasi", "1. Perpres No. 95 Tahun 2018 tentang SPBE\n2. Perpres No. 132 Tahun 2022 tentang Arsitektur SPBE Nasional\n3. Perpres No. 82 Tahun 2023 tentang Percepatan Transformasi Digital dan Keterpaduan Layanan Digital Nasional\n4. PermenPANRB No. 8 Tahun 2026 tentang Evaluasi Pemerintahan Digital (Indikator 16 Bobot 4%)\n5. UU No. 27 Tahun 2022 tentang Pelindungan Data Pribadi"),
        ("Ruang Lingkup", "Pengaturan permohonan pembukaan antarmuka API, pengujian sandbox, standarisasi data schema JSON, autentikasi token, SLA ketersediaan sistem, dan pemantauan error rate pertukaran data antar-perangkat daerah serta aplikasi umum nasional."),
        ("Pihak Terkait", "Dinas Komunikasi & Informatika, Seluruh Organisasi Perangkat Daerah (OPD) Pemilik Data & Pengguna Data, Kementerian Pembina Sistem Nasional (Kemendagri, BKN, ANRI, BSSN).")
    ]
    for i, (k, v) in enumerate(meta):
        row = t_id.rows[i]
        c0, c1 = row.cells[0], row.cells[1]
        c0.width = Inches(2.2)
        c1.width = Inches(4.3)
        c0.text = k
        c1.text = v
        c0.paragraphs[0].runs[0].font.bold = True
        set_cell_background(c0, "F2F4F7")
        set_cell_margins(c0, 60, 60, 80, 80)
        set_cell_margins(c1, 60, 60, 80, 80)

    doc.add_paragraph("\n")

    # BAB I
    doc.add_heading("I. TUJUAN DAN PRINSIP DASAR KETERPADUAN SISTEM", level=2).runs[0].font.color.rgb = RGBColor(31, 78, 121)
    p1 = doc.add_paragraph()
    p1.add_run("1.1 Tujuan SOP:\n").font.bold = True
    p1.add_run(
        "a. Menjamin terwujudnya keterpaduan aplikasi administrasi pemerintahan dan integrasi layanan publik yang bebas dari silo data di lingkungan [Nama Instansi].\n"
        "b. Mengeliminasi praktik input data manual berulang (Zero Data Duplication) antar-aplikasi operasional.\n"
        "c. Menyelaraskan seluruh pertukaran data elektronik dengan standar Aplikasi Umum Nasional (SIASN BKN, SIPD Kemendagri, SRIKANDI ANRI, dan TTE BSrE BSSN).\n"
        "d. Menjamin kelaikan performa, ketersediaan layanan (SLA minimum 99.5%), dan keamanan siber pertukaran data via API terenkripsi.\n"
        "e. Memenuhi bukti dukung Tingkat Kematangan Level 3, Level 4, dan Level 5 pada Indikator 16 PermenPANRB Nomor 8 Tahun 2026.\n\n"
    )
    p1.add_run("1.2 Prinsip Dasar Interoperabilitas:\n").font.bold = True
    p1.add_run(
        "1. Open Standards: Wajib menggunakan protokol terbuka berbasis RESTful Web Service dengan format pertukaran data terstandar JSON/XML over HTTPS (TLS 1.3).\n"
        "2. Interoperabilitas Berkelanjutan: Setiap pengembangan aplikasi baru wajib menyediakan modul Application Programming Interface (API) dan webhook yang dapat diintegrasikan dengan sistem lain.\n"
        "3. Keamanan dan Audit Trail: Seluruh transmisi pertukaran data harus terekam secara otomatis dalam log audit trail dan dilindungi dengan mekanisme autentikasi OAuth 2.0 / API Key / JWT.\n"
        "4. Kepatuhan Pelindungan Data Pribadi: Pemrosesan data yang memuat NIK/data kependudukan wajib tunduk pada UU No. 27 Tahun 2022 (PDP) dengan prinsip enkripsi dan batasan hak akses minimum (least privilege)."
    )

    # BAB II
    doc.add_heading("II. PROSEDUR DAN ALUR TAHAPAN INTEGRASI APLIKASI", level=2).runs[0].font.color.rgb = RGBColor(31, 78, 121)
    
    t_flow = doc.add_table(rows=7, cols=4)
    t_flow.alignment = WD_TABLE_ALIGNMENT.CENTER
    headers = ["Tahap", "Aktivitas Prosedural", "Pelaksana / Penanggung Jawab", "Output / Dokumen Bukti"]
    for j, h in enumerate(headers):
        cell = t_flow.rows[0].cells[j]
        cell.text = h
        cell.paragraphs[0].runs[0].font.bold = True
        set_cell_background(cell, "1F4E79")
        cell.paragraphs[0].runs[0].font.color.rgb = RGBColor(255, 255, 255)

    flow_data = [
        ("Tahap 1", "Pengajuan Permohonan Integrasi: OPD Pemohon mengajukan permohonan tertulis beserta formulir spesifikasi integrasi (tujuan, data yang dibutuhkan, estimasi volume request harian).", "OPD Pemohon / Consumer", "Surat Permohonan & Formulir Spesifikasi Integrasi API"),
        ("Tahap 2", "Penelaahan Teknis & Keamanan: Tim Arsitektur SPBE Diskominfo memverifikasi kelaikan keamanan, arsitektur data, dan ketersediaan data contract pada aplikasi sumber.", "Tim Arsitektur & Keamanan Diskominfo", "Berita Acara Telaah Kelaikan Arsitektur & Keamanan"),
        ("Tahap 3", "Penyusunan Endpoint & Pengujian Sandbox: Tim teknis membuat endpoint API di lingkungan Staging/Sandbox serta melakukan uji coba pertukaran data sintetik.", "Tim Pengembang Diskominfo & OPD", "Laporan Hasil Uji Coba Sandbox (UAT API Testing)"),
        ("Tahap 4", "Penerbitan Kredensial & Konfigurasi Akses: Diskominfo menerbitkan API Key/Bearer Token dan mendaftarkan IP Whitelist server pemohon pada API Gateway.", "Administrator API Gateway Diskominfo", "Berita Acara Serah Terima Kredensial & NDA Akses Data"),
        ("Tahap 5", "Deployment ke Lingkungan Produksi: Sistem diaktifkan untuk pertukaran data live dengan pemantauan error rate dan utilisasi sumber daya komputasi.", "Tim Operasional TIK & OPD Terkait", "Log Aktivasi Koneksi Produksi & Status Live"),
        ("Tahap 6", "Pemantauan SLA & Reviu Berkala: Pemantauan otomatis ketersediaan sistem 24/7, pencatatan waktu henti (downtime), evaluasi efisiensi dan reviu per semester.", "Tim Monitoring Diskominfo & Inspektorat", "Laporan Bulanan Utilisasi API & Evaluasi Kinerja")
    ]
    for i, row_data in enumerate(flow_data):
        row = t_flow.rows[i+1]
        for j, val in enumerate(row_data):
            cell = row.cells[j]
            cell.text = val
            set_cell_margins(cell, 50, 50, 60, 60)
            if i % 2 == 1:
                set_cell_background(cell, "F9FAFB")

    # BAB III
    doc.add_paragraph("\n")
    doc.add_heading("III. SERVICE LEVEL AGREEMENT (SLA) & PENANGANAN GANGGUAN", level=2).runs[0].font.color.rgb = RGBColor(31, 78, 121)
    p3 = doc.add_paragraph()
    p3.add_run(
        "1. Ketersediaan Sistem (Uptime): Target uptime integrasi antarsistem ditetapkan minimal 99.5% per bulan kalender.\n"
        "2. Waktu Respons API: Response time rata-rata di bawah 300 milidetik untuk query data transaksional standar.\n"
        "3. Manajemen Error & Fallback: Apabila terjadi kegagalan koneksi ke aplikasi pusat (misal: timeout SIASN BKN atau SIPD Kemendagri), sistem lokal wajib menerapkan mekanisme antrean otomatis (Message Queue / Retry Mechanism) tanpa menghilangkan transaksi pengguna.\n"
        "4. Maintenance Window: Pemeliharaan terjadwal hanya diperkenankan pada jam non-kerja (Sabtu/Minggu atau pukul 22.00 - 04.00 WIB) dengan pemberitahuan resmi minimal H-2."
    )

    # Lembar Pengesahan
    doc.add_paragraph("\n")
    p_sign = doc.add_paragraph()
    p_sign.alignment = WD_ALIGN_PARAGRAPH.RIGHT
    p_sign.add_run("Ditetapkan di: [Nama Kota/Kabupaten]\nPada tanggal: 15 Januari 2026\n\n").font.size = Pt(10)
    p_sign.add_run("Mengetahui dan Menetapkan,\n").font.size = Pt(10)
    p_sign.add_run("KEPALA DINAS KOMUNIKASI DAN INFORMATIKA\n[NAMA INSTANSI PEMERINTAH]\n\n\n\n\n").font.bold = True
    p_sign.add_run("[NAMA KEPALA DINAS, S.T., M.Kom.]\n").font.bold = True
    p_sign.add_run("Pembina Utama Muda (IV/c)\nNIP. 19760815 200112 1 003\n").font.size = Pt(9)

    doc.save(filepath)

# =========================================================================
# 2. DOKUMEN ARSITEKTUR & TOPOLOGI INTEGRASI APLIKASI (DOCX - LEVEL 3 & 4)
# =========================================================================
def create_arsitektur_integrasi_docx(filepath):
    doc = Document()
    for s in doc.sections:
        s.top_margin = Inches(1)
        s.bottom_margin = Inches(1)
        s.left_margin = Inches(1)
        s.right_margin = Inches(1)

    # Kop Surat
    header_p = doc.add_paragraph()
    header_p.alignment = WD_ALIGN_PARAGRAPH.CENTER
    r1 = header_p.add_run("PEMERINTAH DAERAH / KEMENTERIAN / LEMBAGA [NAMA INSTANSI]\n")
    r1.font.bold = True
    r1.font.size = Pt(12)
    r2 = header_p.add_run("TIM KOORDINASI SISTEM PEMERINTAHAN BERBASIS ELEKTRONIK (SPBE)\n")
    r2.font.bold = True
    r2.font.size = Pt(13)
    r3 = header_p.add_run("Gedung Sekretariat Daerah Lt. 3, Email: timspbe@daerah.go.id, Web: spbe.daerah.go.id\n")
    r3.font.size = Pt(9)
    r3.font.color.rgb = RGBColor(100, 100, 100)

    p_line = doc.add_paragraph()
    p_line.alignment = WD_ALIGN_PARAGRAPH.CENTER
    p_line.add_run("=" * 65).font.bold = True

    # Judul Dokumen
    title = doc.add_heading(level=1)
    title.alignment = WD_ALIGN_PARAGRAPH.CENTER
    trun = title.add_run("DOKUMEN ARSITEKTUR DAN TOPOLOGI INTEGRASI APLIKASI\nADMINISTRASI PEMERINTAHAN DAN SISTEM LAYANAN PUBLIK TERPADU\nTAHUN ANGGARAN 2026")
    trun.font.size = Pt(13)
    trun.font.bold = True
    trun.font.color.rgb = RGBColor(31, 78, 121)

    # Identifikasi Dokumen
    t_id = doc.add_table(rows=5, cols=2)
    t_id.alignment = WD_TABLE_ALIGNMENT.CENTER
    meta = [
        ("Nomor Dokumen", "ARS-INT-16/SPBE/2026"),
        ("Tahun Penetapan", "Januari 2026 (Reviu Pemutakhiran Semester I)"),
        ("Dasar Regulasi", "1. PermenPANRB No. 8 Tahun 2026 tentang Evaluasi Pemerintahan Digital (Indikator 16)\n2. Keputusan MenPANRB No. 964/2023 tentang Arsitektur SPBE Nasional\n3. Surat Edaran Bersama Kementerian PANRB, Kemendagri, BKN, ANRI tentang Keterpaduan Layanan Digital Nasional"),
        ("Fokus Integrasi", "Keterpaduan Sistem Administrasi Pemerintahan (Kepegawaian SIASN, Keuangan SIPD-RI, Kearsipan SRIKANDI, TTE BSrE) dan Integrasi Layanan Publik Portal Daerah."),
        ("Tim Penyusun", "Tim Terpadu Diskominfo, BKPSDM, BPKAD, DPMPTSP, dan Bagian Organisasi Setda")
    ]
    for i, (k, v) in enumerate(meta):
        row = t_id.rows[i]
        c0, c1 = row.cells[0], row.cells[1]
        c0.width = Inches(2.2)
        c1.width = Inches(4.3)
        c0.text = k
        c1.text = v
        c0.paragraphs[0].runs[0].font.bold = True
        set_cell_background(c0, "F2F4F7")
        set_cell_margins(c0, 60, 60, 80, 80)
        set_cell_margins(c1, 60, 60, 80, 80)

    doc.add_paragraph("\n")

    # BAB I
    doc.add_heading("I. GAMBARAN UMUM DAN MODEL ARSITEKTUR INTEGRASI", level=2).runs[0].font.color.rgb = RGBColor(31, 78, 121)
    p1 = doc.add_paragraph()
    p1.add_run(
        "Arsitektur integrasi sistem pada [Nama Instansi] menggunakan pendekatan Enterprise API Gateway & Service Mesh. "
        "Seluruh aplikasi sektoral tidak lagi diperkenankan melakukan koneksi langsung point-to-point antar-basis data, melainkan "
        "wajib melalui gerbang integrasi resmi terpusat untuk menjamin keamanan, pemantauan trafik, pembatasan kuota (rate limiting), "
        "dan standardisasi kamus data (Data Governance)."
    )

    # BAB II: KETERPADUAN SISTEM INTERNAL & NASIONAL
    doc.add_heading("II. MATRIKS KETERPADUAN SISTEM APLIKASI UTAMA", level=2).runs[0].font.color.rgb = RGBColor(31, 78, 121)
    
    t_sys = doc.add_table(rows=6, cols=5)
    t_sys.alignment = WD_TABLE_ALIGNMENT.CENTER
    sys_headers = ["Domain Layanan", "Aplikasi Lokal", "Sistem Target Nasional", "Protokol / Metode", "Dampak Integrasi (Eliminasi Gap)"]
    for j, h in enumerate(sys_headers):
        cell = t_sys.rows[0].cells[j]
        cell.text = h
        cell.paragraphs[0].runs[0].font.bold = True
        set_cell_background(cell, "1F4E79")
        cell.paragraphs[0].runs[0].font.color.rgb = RGBColor(255, 255, 255)

    sys_data = [
        ("Kepegawaian", "SIMPEG / SIAP Daerah & Presensi", "SIASN BKN RI", "REST API Web Service & OAuth2", "Sinkronisasi otomatis riwayat pangkat, jabatan, kenaikan gaji berkala tanpa input ganda staf BKPSDM."),
        ("Keuangan Daerah", "SIPD Penatausahaan Daerah & Kasda Online", "SIPD-RI Kemendagri & Bank Daerah", "API Gateway & Host-to-Host Virtual Account", "Penerbitan SP2D elektronik langsung memotong rekening kas daerah secara real-time dan terbukukan otomatis."),
        ("Tata Naskah Dinas", "e-Office / Tata Naskah Dinas Daerah", "SRIKANDI ANRI Nasional", "REST API Interoperabilitas Kearsipan", "Pengiriman naskah dinas keluar langsung diterima oleh K/L/D tujuan se-Indonesia tanpa ekspedisi kurir manual."),
        ("Keamanan & Sertifikasi", "Modul Verifikasi Dokumen Daerah", "TTE Balai Sertifikasi Elektronik (BSrE BSSN)", "API Sign PDF & SHA-256 Digest Verification", "Penandatanganan dokumen SK, Izin, Perbup, dan Berita Acara secara sah hukum dalam hitungan detik."),
        ("Layanan Publik / MPP", "Portal Layanan Terpadu & Perizinan PTSP", "OSS-RBA & Portal INA Digital", "Webhooks & Single Sign-On (SSO) IKD", "Pemohon izin cukup login satu kali dengan IKD Dukcapil dan status tracking perizinan terkirim otomatis via WhatsApp.")
    ]
    for i, row_data in enumerate(sys_data):
        row = t_sys.rows[i+1]
        for j, val in enumerate(row_data):
            cell = row.cells[j]
            cell.text = val
            set_cell_margins(cell, 50, 50, 60, 60)
            if i % 2 == 1:
                set_cell_background(cell, "F9FAFB")

    # BAB III: PROTOKOL KEAMANAN & PDP
    doc.add_paragraph("\n")
    doc.add_heading("III. TOPOLOGI JARINGAN, PROTOKOL KEAMANAN DAN PERLINDUNGAN DATA PRIBADI", level=2).runs[0].font.color.rgb = RGBColor(31, 78, 121)
    p2 = doc.add_paragraph()
    p2.add_run(
        "1. Segregasi Jaringan: API Gateway ditempatkan pada zona DMZ terlindung Web Application Firewall (WAF) dan Intrusion Prevention System (IPS).\n"
        "2. Mekanisme Enkripsi: Transmisi data wajib menggunakan protokol TLS 1.3 dengan Cipher Suite berkekuatan tinggi. Data sensitif pada payload dienkripsi end-to-end menggunakan algoritma AES-256.\n"
        "3. Manajemen Autentikasi: Menggunakan JSON Web Token (JWT) dengan masa berlaku (exp) 3600 detik dan refresh token rotasi berkala.\n"
        "4. Kepatuhan UU PDP (UU No. 27/2022): Data kependudukan (NIK, Nomor KK, Rekam Medis) wajib dipseudonimisasi saat melintasi sistem pelaporan statistik dan dilarang disimpan permanen di cache publik."
    )

    # Pengesahan
    doc.add_paragraph("\n")
    p_sign = doc.add_paragraph()
    p_sign.alignment = WD_ALIGN_PARAGRAPH.RIGHT
    p_sign.add_run("Disahkan di: [Nama Kota/Kabupaten]\nPada tanggal: 20 Januari 2026\n\n").font.size = Pt(10)
    p_sign.add_run("Koordinator Tim Arsitektur SPBE / Sekretaris Daerah,\n\n\n\n\n").font.bold = True
    p_sign.add_run("[NAMA SEKRETARIS DAERAH, M.Si.]\n").font.bold = True
    p_sign.add_run("Pembina Utama (IV/d)\nNIP. 19740310 199903 1 004\n").font.size = Pt(9)

    doc.save(filepath)

# =========================================================================
# 3. LAPORAN MONITORING KINERJA INTEGRASI & EFISIENSI (DOCX - LEVEL 4 & 5)
# =========================================================================
def create_laporan_monitoring_integrasi_docx(filepath):
    doc = Document()
    for s in doc.sections:
        s.top_margin = Inches(1)
        s.bottom_margin = Inches(1)
        s.left_margin = Inches(1)
        s.right_margin = Inches(1)

    # Kop Surat
    header_p = doc.add_paragraph()
    header_p.alignment = WD_ALIGN_PARAGRAPH.CENTER
    r1 = header_p.add_run("PEMERINTAH DAERAH / KEMENTERIAN / LEMBAGA [NAMA INSTANSI]\n")
    r1.font.bold = True
    r1.font.size = Pt(12)
    r2 = header_p.add_run("DINAS KOMUNIKASI DAN INFORMATIKA / PUSAT DATA DAN INFORMASI\n")
    r2.font.bold = True
    r2.font.size = Pt(13)
    r3 = header_p.add_run("Laporan Keterpaduan Sistem dan Evaluasi Kinerja Interoperabilitas Layanan SPBE\n")
    r3.font.size = Pt(9)
    r3.font.color.rgb = RGBColor(100, 100, 100)

    p_line = doc.add_paragraph()
    p_line.alignment = WD_ALIGN_PARAGRAPH.CENTER
    p_line.add_run("=" * 65).font.bold = True

    # Judul Dokumen
    title = doc.add_heading(level=1)
    title.alignment = WD_ALIGN_PARAGRAPH.CENTER
    trun = title.add_run("LAPORAN RESMI MONITORING KINERJA INTEGRASI SISTEM,\nUTILISASI API, DAN EVALUASI PENCAPAIAN ZERO DATA DUPLICATION\nPERIODE EVALUASI TAHUN ANGGARAN 2026")
    trun.font.size = Pt(13)
    trun.font.bold = True
    trun.font.color.rgb = RGBColor(31, 78, 121)

    # Identifikasi Laporan
    t_id = doc.add_table(rows=5, cols=2)
    t_id.alignment = WD_TABLE_ALIGNMENT.CENTER
    meta = [
        ("Nomor Laporan", "LAP-MON-INT-16/089/2026"),
        ("Periode Laporan", "Semester I Tahun Anggaran 2026 (Januari - Juni 2026)"),
        ("Dasar Evaluasi", "PermenPANRB No. 8 Tahun 2026 tentang Evaluasi Pemerintahan Digital (Indikator 16 Pemenuhan Level 4 & 5)"),
        ("Fokus Pengukuran", "Tingkat ketersediaan (uptime SLA), rerata latensi respon API, volume transaksi berhasil vs gagal, dan efisiensi jam kerja staf (Zero Data Duplication)."),
        ("Penyusun & Reviu", "Diskominfo bersama Inspektorat Daerah (sebagai tim penjaminan mutu)")
    ]
    for i, (k, v) in enumerate(meta):
        row = t_id.rows[i]
        c0, c1 = row.cells[0], row.cells[1]
        c0.width = Inches(2.2)
        c1.width = Inches(4.3)
        c0.text = k
        c1.text = v
        c0.paragraphs[0].runs[0].font.bold = True
        set_cell_background(c0, "F2F4F7")
        set_cell_margins(c0, 60, 60, 80, 80)
        set_cell_margins(c1, 60, 60, 80, 80)

    doc.add_paragraph("\n")

    # BAB I
    doc.add_heading("I. RINGKASAN EKSEKUTIF KINERJA INTEGRASI", level=2).runs[0].font.color.rgb = RGBColor(31, 78, 121)
    p1 = doc.add_paragraph()
    p1.add_run(
        "Sepanjang periode Semester I Tahun 2026, ekosistem integrasi aplikasi pemerintah digital [Nama Instansi] "
        "telah mencatatkan total transaksi pertukaran data sebesar 2.845.210 hit API dari 18 sistem yang saling terhubung. "
        "Tingkat ketersediaan (availability SLA) mencapai 99.88% dengan rata-rata response time sebesar 185 milidetik. "
        "Koneksi otomatis ke aplikasi umum nasional (SIASN BKN, SIPD Kemendagri, SRIKANDI ANRI, dan TTE BSrE) berjalan lancar "
        "tanpa hambatan fatal."
    )

    # BAB II: REKAPITULASI KINERJA PER ENDPOINT
    doc.add_heading("II. REKAPITULASI KINERJA DAN UTILISASI ENDPOINT INTEGRASI UTAMA", level=2).runs[0].font.color.rgb = RGBColor(31, 78, 121)
    
    t_perf = doc.add_table(rows=6, cols=6)
    t_perf.alignment = WD_TABLE_ALIGNMENT.CENTER
    perf_headers = ["No", "Endpoint Integrasi Layanan", "Total Hit Transaksi", "Success Rate (%)", "Avg Latency (ms)", "Status Kepatuhan SLA"]
    for j, h in enumerate(perf_headers):
        cell = t_perf.rows[0].cells[j]
        cell.text = h
        cell.paragraphs[0].runs[0].font.bold = True
        set_cell_background(cell, "1F4E79")
        cell.paragraphs[0].runs[0].font.color.rgb = RGBColor(255, 255, 255)

    perf_data = [
        ("1", "SIMPEG Daerah <-> SIASN BKN (Sync Data Pegawai)", "485.120", "99.92%", "165 ms", "Memenuhi Target (>=99.5%)"),
        ("2", "SIPD Penatausahaan <-> Bank Daerah (SP2D Online)", "210.450", "99.98%", "110 ms", "Memenuhi Target (>=99.5%)"),
        ("3", "e-Office Persuratan <-> SRIKANDI ANRI (Disposisi/Surat)", "890.300", "99.84%", "215 ms", "Memenuhi Target (>=99.5%)"),
        ("4", "Modul TTE Daerah <-> BSrE BSSN (Signing Gateway)", "640.750", "99.90%", "190 ms", "Memenuhi Target (>=99.5%)"),
        ("5", "Portal Layanan Publik <-> OSS RBA & INA Digital", "618.590", "99.78%", "245 ms", "Memenuhi Target (>=99.5%)")
    ]
    for i, row_data in enumerate(perf_data):
        row = t_perf.rows[i+1]
        for j, val in enumerate(row_data):
            cell = row.cells[j]
            cell.text = val
            set_cell_margins(cell, 50, 50, 60, 60)
            if i % 2 == 1:
                set_cell_background(cell, "F9FAFB")

    # BAB III: PEMBUKTIAN ZERO DATA DUPLICATION
    doc.add_paragraph("\n")
    doc.add_heading("III. PEMBUKTIAN CAPAIAN 'ZERO DATA DUPLICATION' DAN EFISIENSI BIROKRASI", level=2).runs[0].font.color.rgb = RGBColor(31, 78, 121)
    p2 = doc.add_paragraph()
    p2.add_run(
        "Berdasarkan hasil audit lapangan dan survei efisiensi pada unit kerja pengguna, integrasi otomatis ini menghasilkan dampak efisiensi nyata:\n"
        "1. Eliminasi Entri Ganda Data ASN: Pengelola kepegawaian di 45 OPD tidak lagi melakukan entri manual usulan pangkat dan KGB di dua aplikasi terpisah (hemat rata-rata 180 jam kerja staf BKPSDM per bulan).\n"
        "2. Pemangkasan Waktu Pencairan SP2D: Integrasi sistem perbendaharaan langsung ke perbankan memangkas durasi antrean pencairan dana dari 3 hari kerja menjadi hanya 15 menit.\n"
        "3. Penghematan Anggaran Cetak & Kurir Naskah: Terhubungnya naskah dinas ke jaringan SRIKANDI Nasional menghemat belanja kertas, fotokopi, dan honor kurir hingga Rp 340.000.000 per tahun anggaran.\n"
        "4. Validasi Dokumen Seketika (Real-Time Verification): Masyarakat dan pelaku usaha dapat memvalidasi keaslian izin bernomor barcode TTE secara seketika tanpa harus datang ke loket fisik dinas."
    )

    # BAB IV: REKOMENDASI PERBAIKAN BERKELANJUTAN
    doc.add_heading("IV. REKOMENDASI DAN RENCANA PENINGKATAN TAHUN DEPAN", level=2).runs[0].font.color.rgb = RGBColor(31, 78, 121)
    p3 = doc.add_paragraph()
    p3.add_run(
        "1. Mengimplementasikan arsitektur Microservices API Gateway terdistribusi dengan auto-scaling untuk mengantisipasi lonjakan trafik pada masa pelaporan pajak daerah dan penerimaan CPNS.\n"
        "2. Memperluas integrasi sistem ke Portal Data Terbuka (Open Data Daerah) untuk mendukung transparansi keterbukaan informasi publik.\n"
        "3. Memperketat pengujian kerentanan berkala (Vulnerability Assessment & Penetration Testing) pada setiap endpoint integrasi publik minimal sekali dalam 6 bulan."
    )

    # Pengesahan
    doc.add_paragraph("\n")
    p_sign = doc.add_paragraph()
    p_sign.alignment = WD_ALIGN_PARAGRAPH.RIGHT
    p_sign.add_run("Ditetapkan di: [Nama Kota/Kabupaten]\nPada tanggal: 10 Juli 2026\n\n").font.size = Pt(10)
    p_sign.add_run("Mengesahkan,\n").font.size = Pt(10)
    p_sign.add_run("INSPEKTUR DAERAH\n[NAMA INSTANSI PEMERINTAH]\n\n\n\n\n").font.bold = True
    p_sign.add_run("[NAMA INSPEKTUR, S.H., M.H.]\n").font.bold = True
    p_sign.add_run("Pembina Utama Muda (IV/c)\nNIP. 19710405 199703 1 002\n").font.size = Pt(9)

    doc.save(filepath)

# =========================================================================
# 4. MATRIKS PEMETAAN INTEGRASI APLIKASI & KAMUS DATA (XLSX - LEVEL 3 & 4)
# =========================================================================
def create_excel_matriks_integrasi(filepath):
    wb = openpyxl.Workbook()
    
    font_title = Font(name="Calibri", size=13, bold=True, color="1F4E79")
    font_header = Font(name="Calibri", size=10, bold=True, color="FFFFFF")
    fill_navy = PatternFill(start_color="1F4E79", end_color="1F4E79", fill_type="solid")
    fill_blue_header = PatternFill(start_color="2F5597", end_color="2F5597", fill_type="solid")
    font_zebra = PatternFill(start_color="F2F4F7", end_color="F2F4F7", fill_type="solid")
    thin_border = Border(
        left=Side(style='thin', color='D9D9D9'),
        right=Side(style='thin', color='D9D9D9'),
        top=Side(style='thin', color='D9D9D9'),
        bottom=Side(style='thin', color='D9D9D9')
    )

    # ----------------- SHEET 1: Matriks_Integrasi_Sistem -----------------
    ws1 = wb.active
    ws1.title = "Matriks_Integrasi_Sistem"
    ws1.views.sheetView[0].showGridLines = True
    ws1["A1"] = "MATRIKS PEMETAAN INTEGRASI APLIKASI DAN SISTEM LAYANAN PEMERINTAH DIGITAL (TA 2026)"
    ws1["A1"].font = font_title

    headers1 = [
        "No", "Kode Integrasi", "Nama Sistem Sumber (Producer)", "Unit Pemilik Data", 
        "Nama Sistem Sasaran (Consumer)", "Unit Pemanfaat Data", "Protokol Integrasi", 
        "Frekuensi Sinkronisasi", "Format Payload", "Mekanisme Autentikasi", "Status Integrasi", "Target SLA (%)"
    ]
    for c_idx, h in enumerate(headers1, start=1):
        cell = ws1.cell(row=3, column=c_idx, value=h)
        cell.font = font_header
        cell.fill = fill_navy
        cell.alignment = Alignment(horizontal="center", vertical="center", wrap_text=True)
        cell.border = thin_border

    data1 = [
        ("1", "INT-PEG-01", "SIMPEG Daerah / SIAP", "BKPSDM", "SIASN BKN Nasional", "BKN RI", "REST API Web Service", "Real-time Event Webhook", "JSON", "OAuth 2.0 / Bearer Token", "LIVE PRODUCTION", 99.9),
        ("2", "INT-PEG-02", "Mesin Presensi Biometrik OPD", "Dinas Kominfo", "SIMPEG & e-Kinerja Daerah", "BKPSDM / Seluruh OPD", "REST API / JSON", "Scheduled Hourly", "JSON", "API Key + Secret", "LIVE PRODUCTION", 99.8),
        ("3", "INT-KEU-01", "SIPD Penatausahaan Keuangan", "BPKAD", "SIPD-RI Nasional", "Kemendagri RI", "RESTful API over HTTPS", "Daily Batch Sync", "JSON", "HMAC Signature + Token", "LIVE PRODUCTION", 99.9),
        ("4", "INT-KEU-02", "Sistem Kasda Online Daerah", "BPKAD", "Host-to-Host Bank Rekening Kasda", "Bank Pembangunan Daerah", "Host-to-Host API ISO 20022", "Real-time Direct Push", "JSON / XML", "Mutual TLS + IP Whitelist", "LIVE PRODUCTION", 99.95),
        ("5", "INT-SUR-01", "e-Office Persuratan Dinas", "Diskominfo / Setda", "SRIKANDI Nasional", "ANRI Nasional", "REST API Interoperabilitas", "Real-time Push / Pull", "JSON", "OAuth 2.0 Bearer Token", "LIVE PRODUCTION", 99.85),
        ("6", "INT-SEC-01", "Aplikasi Persuratan & SK Daerah", "Seluruh OPD", "Server BSrE BSSN", "BSSN RI", "REST API Digisign PDF", "On-Demand Real-time", "Binary PDF / SHA-256", "Basic Auth + Cert X.509", "LIVE PRODUCTION", 99.9),
        ("7", "INT-PUB-01", "Portal MPP Digital Daerah", "DPMPTSP", "OSS-RBA Nasional", "Kementerian Investasi/BKPM", "REST API Webhook", "Real-time Transactional", "JSON", "OAuth 2.0 Bearer Token", "LIVE PRODUCTION", 99.8),
        ("8", "INT-PUB-02", "Sistem Perizinan Daerah", "DPMPTSP", "Identitas Kependudukan Digital (IKD)", "Ditjen Dukcapil Kemendagri", "OAuth 2.0 SSO API", "On-Demand Auth", "JWT Claims", "OAuth 2.0 OpenID Connect", "LIVE PRODUCTION", 99.9),
        ("9", "INT-PAJ-01", "Sistem Informasi Pajak Daerah", "Bapenda", "Payment Gateway QRIS / VA Bank", "Perbankan Mitra", "REST API Notification", "Real-time Webhook", "JSON", "API Key + Secret Hash", "LIVE PRODUCTION", 99.95),
        ("10", "INT-DAT-01", "Data Warehouse Sektoral", "Bappelitbangda", "Satu Data Indonesia (SDI)", "Bappenas RI", "CKAN API / SDI Protocol", "Weekly Cron Sync", "JSON / GeoJSON", "API Token Bearer", "LIVE PRODUCTION", 99.5),
        ("11", "INT-KES-01", "SIMRS / Puskesmas Elektronik", "Dinas Kesehatan", "SatuSehat Kemenkes", "Kementerian Kesehatan RI", "HL7 FHIR REST API", "Real-time Encounter Sync", "FHIR JSON", "OAuth 2.0 Token", "LIVE PRODUCTION", 99.8),
        ("12", "INT-BANS-01", "Sistem Rekomendasi Bansos Daerah", "Dinas Sosial", "SIKS-NG Kemensos", "Kementerian Sosial RI", "Web Service API", "Monthly Batch Sync", "JSON", "Bearer Token", "LIVE PRODUCTION", 99.5)
    ]
    for r_idx, rvals in enumerate(data1, start=4):
        for c_idx, val in enumerate(rvals, start=1):
            cell = ws1.cell(row=r_idx, column=c_idx, value=val)
            cell.font = Font(name="Calibri", size=10)
            cell.border = thin_border
            if c_idx in (1, 2, 7, 8, 9, 11, 12):
                cell.alignment = Alignment(horizontal="center", vertical="center")
            if r_idx % 2 == 1:
                cell.fill = font_zebra

    # ----------------- SHEET 2: Kamus_Data_dan_Payload_API -----------------
    ws2 = wb.create_sheet(title="Kamus_Data_dan_Payload_API")
    ws2.views.sheetView[0].showGridLines = True
    ws2["A1"] = "INVENTARISASI SPESIFIKASI ENDPOINT API DAN KAMUS DATA PAYLOAD"
    ws2["A1"].font = font_title

    headers2 = [
        "No", "Endpoint ID", "HTTP Method", "URL Endpoint Path", "Fungsi Transaksi", 
        "Parameter Input Utama", "Tipe Data Input", "Struktur Response Sukses", "Response Code", "Standar Enkripsi"
    ]
    for c_idx, h in enumerate(headers2, start=1):
        cell = ws2.cell(row=3, column=c_idx, value=h)
        cell.font = font_header
        cell.fill = fill_blue_header
        cell.alignment = Alignment(horizontal="center", vertical="center")
        cell.border = thin_border

    data2 = [
        ("1", "EP-SIASN-01", "GET", "/api/v1/siasn/pegawai/{nip}", "Ambil profil data ASN dari BKN", "nip (18 digit)", "String / Integer", "{status: 'success', data: {nip, nama, gol, jabatan}}", "200 OK", "TLS 1.3 / HTTPS"),
        ("2", "EP-SIASN-02", "POST", "/api/v1/siasn/kenaikan-pangkat", "Kirim berkas usulan kenaikan pangkat", "nip, nomor_sk, file_sk_base64", "JSON Payload", "{status: 'submitted', tracking_id: 'TRX-9988'}", "201 Created", "TLS 1.3 + AES-256"),
        ("3", "EP-SIPD-01", "POST", "/api/v1/sipd/sp2d-sync", "Sinkronisasi SP2D online ke bank", "nomor_sp2d, nominal, norek_tujuan", "JSON Payload", "{status: 'processed', journal_ref: 'JRN-1234'}", "200 OK", "TLS 1.3 + HMAC-SHA256"),
        ("4", "EP-SRIKANDI-01", "POST", "/api/v1/srikandi/kirim-naskah", "Kirim surat dinas keluar antarinstansi", "nomor_surat, tujuan_kld, perihal, file_pdf", "Multipart / JSON", "{status: 'sent', agenda_nasional: 'AGD-2026-098'}", "200 OK", "TLS 1.3 / OAuth2"),
        ("5", "EP-BSRE-01", "POST", "/api/v1/bsre/sign-document", "Penyematan sertifikat TTE digital BSrE", "nik, passphrase_hash, digest_doc", "JSON Object", "{status: 'signed', signed_pdf_url: '...'}", "200 OK", "TLS 1.3 + SHA-256 Cert"),
        ("6", "EP-IKD-01", "POST", "/api/v1/auth/ikd/verify-token", "Validasi token login kependudukan IKD", "auth_code, client_id, state", "OAuth Payload", "{status: 'authenticated', nik: '3201...', nama: '...'}", "200 OK", "OAuth 2.0 OpenID Connect"),
        ("7", "EP-PAJAK-01", "POST", "/api/v1/pajak/generate-va", "Penerbitan Virtual Account / QRIS", "id_wajib_pajak, jenis_pajak, nominal", "JSON Payload", "{status: 'active', va_number: '8899...', qris_payload: '...'}", "201 Created", "TLS 1.3 + Signature")
    ]
    for r_idx, rvals in enumerate(data2, start=4):
        for c_idx, val in enumerate(rvals, start=1):
            cell = ws2.cell(row=r_idx, column=c_idx, value=val)
            cell.font = Font(name="Calibri", size=10)
            cell.border = thin_border
            if c_idx in (1, 2, 3, 9, 10):
                cell.alignment = Alignment(horizontal="center")
            if r_idx % 2 == 1:
                cell.fill = font_zebra

    # ----------------- SHEET 3: Konektivitas_Aplikasi_Nasional -----------------
    ws3 = wb.create_sheet(title="Konektivitas_Aplikasi_Nasional")
    ws3.views.sheetView[0].showGridLines = True
    ws3["A1"] = "CHECKLIST KONEKTIVITAS INTEGRASI DENGAN APLIKASI UMUM NASIONAL (LEVEL 4 STANDARISASI)"
    ws3["A1"].font = font_title

    headers3 = [
        "No", "Nama Aplikasi Nasional", "Kementerian Pembina", "Dasar Mandat Regulasi", 
        "Status Konektivitas", "Tanggal Uji Sandbox", "Tanggal Go-Live Produksi", "Metode Sinkronisasi", "Keterangan Audit"
    ]
    for c_idx, h in enumerate(headers3, start=1):
        cell = ws3.cell(row=3, column=c_idx, value=h)
        cell.font = font_header
        cell.fill = fill_navy
        cell.alignment = Alignment(horizontal="center", vertical="center")
        cell.border = thin_border

    data3 = [
        ("1", "SIASN (Sistem Informasi ASN)", "Badan Kepegawaian Negara (BKN)", "Perka BKN No. 2 Tahun 2021", "TERHUBUNG AKTIF", "10 Nov 2025", "02 Jan 2026", "Web Service API Dua Arah", "Lolos Uji Validasi BKN & Tanpa Kendala"),
        ("2", "SIPD-RI (Sistem Informasi Pemerintahan Daerah)", "Kementerian Dalam Negeri (Kemendagri)", "Permendagri No. 70 Tahun 2019", "TERHUBUNG AKTIF", "15 Des 2025", "05 Jan 2026", "API Gateway Kemendagri", "Terkoneksi Modul Anggaran & Penatausahaan"),
        ("3", "SRIKANDI (Kearsipan Dinamis Terintegrasi)", "Arsip Nasional RI (ANRI)", "Perpres No. 95/2018 & PermenPANRB 67/2020", "TERHUBUNG AKTIF", "20 Nov 2025", "10 Jan 2026", "Interoperabilitas SRIKANDI ANRI", "100% Surat Masuk & Keluar Terintegrasi"),
        ("4", "TTE Balai Sertifikasi Elektronik (BSrE)", "Badan Siber dan Sandi Negara (BSSN)", "Perka BSSN No. 10 Tahun 2019", "TERHUBUNG AKTIF", "05 Des 2025", "02 Jan 2026", "API Sign BSrE BSSN", "Sertifikat Elektronik Pejabat Terdaftar"),
        ("5", "Identitas Kependudukan Digital (IKD)", "Ditjen Dukcapil Kemendagri", "Permendagri No. 72 Tahun 2022", "TERHUBUNG AKTIF", "12 Jan 2026", "01 Feb 2026", "OpenID Connect SSO IKD", "Single Sign-On MPP Digital Daerah"),
        ("6", "Portal Pelayanan Publik Nasional / INA Digital", "Kementerian PANRB / INA Digital", "Perpres No. 82 Tahun 2023", "DALAM PROSES PILOTING", "15 Feb 2026", "Target Mei 2026", "INA Digital Gateway", "Menunggu rilis API v2 Nasional")
    ]
    for r_idx, rvals in enumerate(data3, start=4):
        for c_idx, val in enumerate(rvals, start=1):
            cell = ws3.cell(row=r_idx, column=c_idx, value=val)
            cell.font = Font(name="Calibri", size=10)
            cell.border = thin_border
            if c_idx in (1, 5, 6, 7):
                cell.alignment = Alignment(horizontal="center")
            if r_idx % 2 == 1:
                cell.fill = font_zebra

    # Auto-fit columns
    for ws in [ws1, ws2, ws3]:
        for col in ws.columns:
            max_len = max(len(str(cell.value or '')) for cell in col)
            col_letter = get_column_letter(col[0].column)
            ws.column_dimensions[col_letter].width = max(max_len + 3, 12)

    wb.save(filepath)

# =========================================================================
# 5. LOG TRANSAKSI API, MONITORING SLA & AUDIT TRAIL (XLSX - LEVEL 4 & 5)
# =========================================================================
def create_excel_log_transaksi_sla(filepath):
    wb = openpyxl.Workbook()
    
    font_title = Font(name="Calibri", size=13, bold=True, color="1F4E79")
    font_header = Font(name="Calibri", size=10, bold=True, color="FFFFFF")
    fill_navy = PatternFill(start_color="1F4E79", end_color="1F4E79", fill_type="solid")
    fill_teal_header = PatternFill(start_color="1B5E20", end_color="1B5E20", fill_type="solid")
    font_zebra = PatternFill(start_color="F2F4F7", end_color="F2F4F7", fill_type="solid")
    thin_border = Border(
        left=Side(style='thin', color='D9D9D9'),
        right=Side(style='thin', color='D9D9D9'),
        top=Side(style='thin', color='D9D9D9'),
        bottom=Side(style='thin', color='D9D9D9')
    )

    # ----------------- SHEET 1: Log_Transaksi_API_Harian -----------------
    ws1 = wb.active
    ws1.title = "Log_Transaksi_API_Harian"
    ws1.views.sheetView[0].showGridLines = True
    ws1["A1"] = "LOG AUDIT TRAIL TRANSAKSI INTEGRASI API REAL-TIME (SAMPEL LOG AKTIF)"
    ws1["A1"].font = font_title

    headers1 = [
        "No", "Transaction ID", "Timestamp (WIB)", "Consumer OPD / Sistem", "API Endpoint Path", 
        "HTTP Method", "Status Code", "Response Time (ms)", "Payload (KB)", "Status Transaksi", "Error / Exception Log"
    ]
    for c_idx, h in enumerate(headers1, start=1):
        cell = ws1.cell(row=3, column=c_idx, value=h)
        cell.font = font_header
        cell.fill = fill_navy
        cell.alignment = Alignment(horizontal="center", vertical="center")
        cell.border = thin_border

    sample_logs = [
        ("1", "TRX-20260301-0001", "2026-03-01 08:00:15", "BKPSDM / SIMPEG", "/api/v1/siasn/pegawai/198504122010011005", "GET", 200, 145, 12.4, "SUCCESS", "-"),
        ("2", "TRX-20260301-0002", "2026-03-01 08:01:22", "Dinkes / Presensi", "/api/v1/presensi/batch-sync", "POST", 200, 210, 48.6, "SUCCESS", "-"),
        ("3", "TRX-20260301-0003", "2026-03-01 08:03:45", "BPKAD / SIPD", "/api/v1/sipd/sp2d-sync", "POST", 200, 115, 8.2, "SUCCESS", "-"),
        ("4", "TRX-20260301-0004", "2026-03-01 08:05:10", "Setda / e-Office", "/api/v1/srikandi/kirim-naskah", "POST", 200, 195, 340.5, "SUCCESS", "-"),
        ("5", "TRX-20260301-0005", "2026-03-01 08:07:33", "DPMPTSP / MPP", "/api/v1/auth/ikd/verify-token", "POST", 200, 120, 4.1, "SUCCESS", "-"),
        ("6", "TRX-20260301-0006", "2026-03-01 08:10:02", "Bapenda / Pajak", "/api/v1/pajak/generate-va", "POST", 200, 95, 3.8, "SUCCESS", "-"),
        ("7", "TRX-20260301-0007", "2026-03-01 08:12:44", "BKPSDM / SIMPEG", "/api/v1/bsre/sign-document", "POST", 200, 280, 520.1, "SUCCESS", "-"),
        ("8", "TRX-20260301-0008", "2026-03-01 08:15:19", "Disdik / Guru", "/api/v1/siasn/pegawai/199002152014022003", "GET", 200, 150, 11.8, "SUCCESS", "-"),
        ("9", "TRX-20260301-0009", "2026-03-01 08:18:50", "External Client", "/api/v1/siasn/pegawai/unknown", "GET", 401, 45, 1.2, "ERROR", "Invalid Bearer Token Authorization"),
        ("10", "TRX-20260301-0010", "2026-03-01 08:22:15", "BPKAD / SIPD", "/api/v1/sipd/sp2d-sync", "POST", 200, 110, 7.9, "SUCCESS", "-"),
        ("11", "TRX-20260301-0011", "2026-03-01 08:25:40", "Diskominfo / Portal", "/api/v1/srikandi/kirim-naskah", "POST", 200, 205, 290.4, "SUCCESS", "-"),
        ("12", "TRX-20260301-0012", "2026-03-01 08:28:11", "DPMPTSP / Izin", "/api/v1/bsre/sign-document", "POST", 200, 310, 480.0, "SUCCESS", "-"),
        ("13", "TRX-20260301-0013", "2026-03-01 08:30:25", "Bapenda / Pajak", "/api/v1/pajak/generate-va", "POST", 200, 102, 3.5, "SUCCESS", "-"),
        ("14", "TRX-20260301-0014", "2026-03-01 08:35:00", "BKPSDM / SIMPEG", "/api/v1/siasn/kenaikan-pangkat", "POST", 200, 220, 68.4, "SUCCESS", "-"),
        ("15", "TRX-20260301-0015", "2026-03-01 08:40:12", "Dinkes / RSUD", "/api/v1/satusehat/encounter", "POST", 200, 250, 25.4, "SUCCESS", "-"),
        ("16", "TRX-20260301-0016", "2026-03-01 08:45:50", "External Spammer", "/api/v1/pajak/generate-va", "POST", 429, 30, 0.8, "ERROR", "Rate Limit Exceeded (1000 req/min)"),
        ("17", "TRX-20260301-0017", "2026-03-01 08:50:30", "Setda / Protokol", "/api/v1/srikandi/kirim-naskah", "POST", 200, 190, 185.0, "SUCCESS", "-"),
        ("18", "TRX-20260301-0018", "2026-03-01 08:55:18", "DPMPTSP / MPP", "/api/v1/auth/ikd/verify-token", "POST", 200, 118, 4.0, "SUCCESS", "-"),
        ("19", "TRX-20260301-0019", "2026-03-01 09:00:05", "BPKAD / Kasda", "/api/v1/sipd/sp2d-sync", "POST", 200, 108, 9.1, "SUCCESS", "-"),
        ("20", "TRX-20260301-0020", "2026-03-01 09:05:40", "BKPSDM / SIMPEG", "/api/v1/siasn/pegawai/198207102008011002", "GET", 200, 140, 12.0, "SUCCESS", "-")
    ]
    for r_idx, rvals in enumerate(sample_logs, start=4):
        for c_idx, val in enumerate(rvals, start=1):
            cell = ws1.cell(row=r_idx, column=c_idx, value=val)
            cell.font = Font(name="Calibri", size=10)
            cell.border = thin_border
            if c_idx in (1, 2, 3, 6, 7, 8, 9, 10):
                cell.alignment = Alignment(horizontal="center")
            if rvals[9] == "ERROR":
                cell.fill = PatternFill(start_color="FDEDEC", end_color="FDEDEC", fill_type="solid")
            elif r_idx % 2 == 1:
                cell.fill = font_zebra

    # ----------------- SHEET 2: Dashboard_SLA_Performa_Sistem -----------------
    ws2 = wb.create_sheet(title="Dashboard_SLA_Performa_Sistem")
    ws2.views.sheetView[0].showGridLines = True
    ws2["A1"] = "DASHBOARD SERVICE LEVEL AGREEMENT (SLA) DAN PEMANTAUAN UPTIME PERFORMA API"
    ws2["A1"].font = font_title

    headers2 = [
        "No", "Endpoint Integrasi", "Total Hit Terdaftar", "Transaksi Sukses", 
        "Transaksi Error", "Success Rate (%)", "Rata-rata Latensi (ms)", "SLA Uptime (%)", "Target Minimum SLA", "Status Kepatuhan SLA"
    ]
    for c_idx, h in enumerate(headers2, start=1):
        cell = ws2.cell(row=3, column=c_idx, value=h)
        cell.font = font_header
        cell.fill = fill_teal_header
        cell.alignment = Alignment(horizontal="center", vertical="center")
        cell.border = thin_border

    sla_data = [
        ("1", "/api/v1/siasn/pegawai", 4, 3, 1, "=ROUND((D4/C4)*100, 2)", 145, 99.92, 99.5, "MEMENUHI TARGET SLA"),
        ("2", "/api/v1/sipd/sp2d-sync", 3, 3, 0, "=ROUND((D5/C5)*100, 2)", 111, 99.98, 99.5, "MEMENUHI TARGET SLA"),
        ("3", "/api/v1/srikandi/kirim-naskah", 3, 3, 0, "=ROUND((D6/C6)*100, 2)", 196, 99.85, 99.5, "MEMENUHI TARGET SLA"),
        ("4", "/api/v1/bsre/sign-document", 2, 2, 0, "=ROUND((D7/C7)*100, 2)", 295, 99.90, 99.5, "MEMENUHI TARGET SLA"),
        ("5", "/api/v1/auth/ikd/verify-token", 2, 2, 0, "=ROUND((D8/C8)*100, 2)", 119, 99.95, 99.5, "MEMENUHI TARGET SLA"),
        ("6", "/api/v1/pajak/generate-va", 3, 2, 1, "=ROUND((D9/C9)*100, 2)", 98, 99.80, 99.5, "MEMENUHI TARGET SLA"),
        ("7", "/api/v1/presensi/batch-sync", 1, 1, 0, "=ROUND((D10/C10)*100, 2)", 210, 99.88, 99.5, "MEMENUHI TARGET SLA")
    ]
    for r_idx, rvals in enumerate(sla_data, start=4):
        for c_idx, val in enumerate(rvals, start=1):
            cell = ws2.cell(row=r_idx, column=c_idx, value=val)
            cell.font = Font(name="Calibri", size=10)
            cell.border = thin_border
            if c_idx in (1, 3, 4, 5, 6, 7, 8, 9, 10):
                cell.alignment = Alignment(horizontal="center")
            if r_idx % 2 == 1:
                cell.fill = font_zebra

    # Baris Total Ringkasan
    total_row = 11
    ws2.cell(row=total_row, column=2, value="TOTAL & RATA-RATA EKOSISTEM").font = Font(name="Calibri", size=10, bold=True)
    ws2.cell(row=total_row, column=3, value="=SUM(C4:C10)").font = Font(name="Calibri", size=10, bold=True)
    ws2.cell(row=total_row, column=4, value="=SUM(D4:D10)").font = Font(name="Calibri", size=10, bold=True)
    ws2.cell(row=total_row, column=5, value="=SUM(E4:E10)").font = Font(name="Calibri", size=10, bold=True)
    ws2.cell(row=total_row, column=6, value="=ROUND(AVERAGE(F4:F10), 2)").font = Font(name="Calibri", size=10, bold=True)
    ws2.cell(row=total_row, column=7, value="=ROUND(AVERAGE(G4:G10), 1)").font = Font(name="Calibri", size=10, bold=True)
    ws2.cell(row=total_row, column=8, value="=ROUND(AVERAGE(H4:H10), 2)").font = Font(name="Calibri", size=10, bold=True)
    ws2.cell(row=total_row, column=9, value="99.50%").font = Font(name="Calibri", size=10, bold=True)
    ws2.cell(row=total_row, column=10, value="PRIMA / EXCELLENT").font = Font(name="Calibri", size=10, bold=True, color="1B5E20")
    for col_i in range(1, 11):
        cell_tot = ws2.cell(row=total_row, column=col_i)
        cell_tot.border = thin_border
        cell_tot.fill = PatternFill(start_color="E8F5E9", end_color="E8F5E9", fill_type="solid")

    # ----------------- SHEET 3: Evaluasi_Zero_Duplikasi_Data -----------------
    ws3 = wb.create_sheet(title="Evaluasi_Zero_Duplikasi_Data")
    ws3.views.sheetView[0].showGridLines = True
    ws3["A1"] = "KUANTIFIKASI PENGHEMATAN JAM KERJA & PENCAPAIAN ZERO DATA DUPLICATION"
    ws3["A1"].font = font_title

    headers3 = [
        "No", "Proses Administrasi / Layanan", "Waktu Sebelum Integrasi (Menit)", "Waktu Sesudah Integrasi (Menit)", 
        "Selisih Dihemat / Transaksi (Menit)", "Frekuensi Transaksi / Bulan", "Total Jam Dihemat / Bulan", 
        "Estimasi Nilai Efisiensi (Rp/Bulan)", "Unit Kerja Penerima Manfaat"
    ]
    for c_idx, h in enumerate(headers3, start=1):
        cell = ws3.cell(row=3, column=c_idx, value=h)
        cell.font = font_header
        cell.fill = fill_navy
        cell.alignment = Alignment(horizontal="center", vertical="center")
        cell.border = thin_border

    zero_data = [
        ("1", "Sinkronisasi SK Kenaikan Pangkat ASN ke SIASN BKN", 45, 1, "=C4-D4", 450, "=ROUND((E4*F4)/60, 1)", "=G4*65000", "BKPSDM & Seluruh OPD"),
        ("2", "Penerbitan & Pencairan SP2D Online ke Kas Daerah", 1440, 15, "=C5-D5", 850, "=ROUND((E5*F5)/60, 1)", "=G5*65000", "BPKAD & Bank Daerah"),
        ("3", "Pengiriman Surat Dinas Antarinstansi via SRIKANDI", 240, 2, "=C6-D6", 3200, "=ROUND((E6*F6)/60, 1)", "=G6*65000", "Seluruh OPD & Kecamatan"),
        ("4", "Penandatanganan Dokumen Sah dengan TTE BSrE", 60, 1, "=C7-D7", 4500, "=ROUND((E7*F7)/60, 1)", "=G7*65000", "Pimpinan & Tim Teknis"),
        ("5", "Verifikasi Berkas Permohonan Izin MPP Digital", 120, 5, "=C8-D8", 1250, "=ROUND((E8*F8)/60, 1)", "=G8*65000", "DPMPTSP & Pemohon Izin"),
        ("6", "Rekonsiliasi Pembayaran Pajak Daerah Otomatis", 90, 1, "=C9-D9", 2800, "=ROUND((E9*F9)/60, 1)", "=G9*65000", "Bapenda Daerah")
    ]
    for r_idx, rvals in enumerate(zero_data, start=4):
        for c_idx, val in enumerate(rvals, start=1):
            cell = ws3.cell(row=r_idx, column=c_idx, value=val)
            cell.font = Font(name="Calibri", size=10)
            cell.border = thin_border
            if c_idx in (1, 3, 4, 5, 6, 7, 8):
                cell.alignment = Alignment(horizontal="center")
            if r_idx % 2 == 1:
                cell.fill = font_zebra

    # Baris Total Ringkasan Efisiensi
    tot_eff = 10
    ws3.cell(row=tot_eff, column=2, value="TOTAL AKUMULASI PENGHEMATAN").font = Font(name="Calibri", size=10, bold=True)
    ws3.cell(row=tot_eff, column=6, value="=SUM(F4:F9)").font = Font(name="Calibri", size=10, bold=True)
    ws3.cell(row=tot_eff, column=7, value="=SUM(G4:G9)").font = Font(name="Calibri", size=10, bold=True)
    ws3.cell(row=tot_eff, column=8, value="=SUM(H4:H9)").font = Font(name="Calibri", size=10, bold=True)
    ws3.cell(row=tot_eff, column=9, value="BERDAMPAK SIGNIFIKAN").font = Font(name="Calibri", size=10, bold=True, color="1B5E20")
    for col_i in range(1, 10):
        c_eff = ws3.cell(row=tot_eff, column=col_i)
        c_eff.border = thin_border
        c_eff.fill = PatternFill(start_color="E8F5E9", end_color="E8F5E9", fill_type="solid")

    # Auto-fit columns
    for ws in [ws1, ws2, ws3]:
        for col in ws.columns:
            max_len = max(len(str(cell.value or '')) for cell in col)
            col_letter = get_column_letter(col[0].column)
            ws.column_dimensions[col_letter].width = max(max_len + 3, 12)

    wb.save(filepath)

# =========================================================================
# MAIN EXECUTION
# =========================================================================
if __name__ == "__main__":
    print("Mulai membuat 5 template bukti dukung resmi Indikator 16...")

    # 1. SOP Integrasi (DOCX)
    f1_out = os.path.join(OUTPUT_DIR, "Template_SOP_Tata_Kelola_Integrasi_Aplikasi_dan_Sistem_Indikator16.docx")
    f1_pub = os.path.join(PUBLIC_DIR, "Template_SOP_Tata_Kelola_Integrasi_Aplikasi_dan_Sistem_Indikator16.docx")
    create_sop_integrasi_aplikasi_docx(f1_out)
    create_sop_integrasi_aplikasi_docx(f1_pub)
    print("-> Selesai: Template SOP Tata Kelola Integrasi Aplikasi dan Sistem (DOCX)")

    # 2. Dokumen Arsitektur & Topologi (DOCX)
    f2_out = os.path.join(OUTPUT_DIR, "Template_Dokumen_Arsitektur_dan_Topologi_Integrasi_Sistem_Indikator16.docx")
    f2_pub = os.path.join(PUBLIC_DIR, "Template_Dokumen_Arsitektur_dan_Topologi_Integrasi_Sistem_Indikator16.docx")
    create_arsitektur_integrasi_docx(f2_out)
    create_arsitektur_integrasi_docx(f2_pub)
    print("-> Selesai: Template Dokumen Arsitektur dan Topologi Integrasi Sistem (DOCX)")

    # 3. Laporan Monitoring Kinerja & Efisiensi (DOCX)
    f3_out = os.path.join(OUTPUT_DIR, "Template_Laporan_Monitoring_Kinerja_Integrasi_dan_Evaluasi_Efisiensi_Indikator16.docx")
    f3_pub = os.path.join(PUBLIC_DIR, "Template_Laporan_Monitoring_Kinerja_Integrasi_dan_Evaluasi_Efisiensi_Indikator16.docx")
    create_laporan_monitoring_integrasi_docx(f3_out)
    create_laporan_monitoring_integrasi_docx(f3_pub)
    print("-> Selesai: Template Laporan Monitoring Kinerja Integrasi dan Evaluasi Efisiensi (DOCX)")

    # 4. Matriks Pemetaan & Kamus Data API (XLSX)
    f4_out = os.path.join(OUTPUT_DIR, "Template_Matriks_Pemetaan_Integrasi_Aplikasi_dan_Kamus_Data_API_Indikator16.xlsx")
    f4_pub = os.path.join(PUBLIC_DIR, "Template_Matriks_Pemetaan_Integrasi_Aplikasi_dan_Kamus_Data_API_Indikator16.xlsx")
    create_excel_matriks_integrasi(f4_out)
    create_excel_matriks_integrasi(f4_pub)
    print("-> Selesai: Template Matriks Pemetaan Integrasi Aplikasi dan Kamus Data API (XLSX)")

    # 5. Log Transaksi API & Dashboard SLA (XLSX)
    f5_out = os.path.join(OUTPUT_DIR, "Template_Log_Transaksi_API_Monitoring_SLA_dan_Audit_Trail_Indikator16.xlsx")
    f5_pub = os.path.join(PUBLIC_DIR, "Template_Log_Transaksi_API_Monitoring_SLA_dan_Audit_Trail_Indikator16.xlsx")
    create_excel_log_transaksi_sla(f5_out)
    create_excel_log_transaksi_sla(f5_pub)
    print("-> Selesai: Template Log Transaksi API, Monitoring SLA, dan Audit Trail (XLSX)")

    print("\nSeluruh 5 Template Dokumen Bukti Dukung Resmi Indikator 16 berhasil dibuat!")
