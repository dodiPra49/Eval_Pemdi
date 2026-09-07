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

OUTPUT_DIR = r"d:\DODI AGUSRI.S.KOM\2026 2026 2026\FELLOW DEVELOPER\React.JS\EVAL_PEMDI\template_bukti_dukung\INDIKATOR_07_SPLP"
PUBLIC_DIR = r"d:\DODI AGUSRI.S.KOM\2026 2026 2026\FELLOW DEVELOPER\React.JS\EVAL_PEMDI\public\templates\ind_07"

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
# 1. TEMPLATE SOP INTEGRASI SPLP (DOCX)
# =========================================================================
def create_sop_docx(filepath):
    doc = Document()
    
    # Page setup
    for section in doc.sections:
        section.top_margin = Inches(1)
        section.bottom_margin = Inches(1)
        section.left_margin = Inches(1)
        section.right_margin = Inches(1)

    # Header instansi
    header_p = doc.add_paragraph()
    header_p.alignment = WD_ALIGN_PARAGRAPH.CENTER
    run_instansi = header_p.add_run("PEMERINTAH DAERAH / KEMENTERIAN / LEMBAGA [NAMA INSTANSI]\n")
    run_instansi.font.bold = True
    run_instansi.font.size = Pt(12)
    run_dinas = header_p.add_run("DINAS KOMUNIKASI DAN INFORMATIKA / PENGELOLA SPBE\n")
    run_dinas.font.bold = True
    run_dinas.font.size = Pt(13)
    run_sub = header_p.add_run("Jalan Pemerintahan No. 1, Telp: (021) 1234567, Website: www.daerah.go.id\n")
    run_sub.font.size = Pt(9)
    run_sub.font.color.rgb = RGBColor(100, 100, 100)
    
    p_line = doc.add_paragraph()
    p_line_run = p_line.add_run("=" * 65)
    p_line_run.font.bold = True
    p_line.alignment = WD_ALIGN_PARAGRAPH.CENTER

    # Judul Dokumen
    title = doc.add_heading(level=1)
    title.alignment = WD_ALIGN_PARAGRAPH.CENTER
    trun = title.add_run("STANDAR OPERASIONAL PROSEDUR (SOP)\nPERMOHONAN, PENGEMBANGAN, DAN PENGELOLAAN INTEGRASI SISTEM PENGHUBUNG LAYANAN PEMERINTAH (SPLP)")
    trun.font.size = Pt(14)
    trun.font.bold = True
    trun.font.color.rgb = RGBColor(31, 78, 121)

    # Identitas SOP Table
    table_id = doc.add_table(rows=5, cols=2)
    table_id.alignment = WD_TABLE_ALIGNMENT.CENTER
    table_id.autofit = False
    
    meta_data = [
        ("Nomor SOP", "SOP-KOMINFO-SPBE-07/2026"),
        ("Tanggal Penetapan", "15 Januari 2026"),
        ("Dasar Hukum", "1. Perpres No. 95/2018 tentang SPBE\n2. PermenPANRB No. 8/2026 tentang Evaluasi Pemerintahan Digital\n3. Peraturan Kepala Daerah No. XX Tahun 2025 tentang SPBE"),
        ("Tingkat Evaluasi", "Indikator 07 - Tingkat Kematangan Terstandarisasi (Level 3) & Terpadu (Level 4)"),
        ("Penanggung Jawab", "Kepala Dinas Komunikasi dan Informatika / Koordinator Tim SPBE")
    ]
    
    for i, (k, v) in enumerate(meta_data):
        row = table_id.rows[i]
        c0, c1 = row.cells[0], row.cells[1]
        c0.width = Inches(2.2)
        c1.width = Inches(4.3)
        c0.text = k
        c1.text = v
        c0.paragraphs[0].runs[0].font.bold = True
        set_cell_background(c0, "F2F4F7")
        set_cell_margins(c0, 80, 80, 100, 100)
        set_cell_margins(c1, 80, 80, 100, 100)

    doc.add_paragraph("\n")

    # Bab I: Tujuan & Ruang Lingkup
    h1 = doc.add_heading("I. TUJUAN DAN RUANG LINGKUP", level=2)
    h1.runs[0].font.color.rgb = RGBColor(31, 78, 121)
    
    p1 = doc.add_paragraph()
    p1.add_run("1.1. Tujuan:\n").font.bold = True
    p1.add_run(
        "SOP ini bertujuan memberikan standarisasi dan pedoman baku bagi seluruh Perangkat Daerah (PD) di lingkungan "
        "instansi maupun instansi eksternal dalam mengajukan, membangun, mengamankan, dan memelihara pertukaran data "
        "elektronik antar-aplikasi menggunakan Sistem Penghubung Layanan Pemerintah (SPLP) / API Gateway resmi.\n\n"
    )
    p1.add_run("1.2. Ruang Lingkup:\n").font.bold = True
    p1.add_run(
        "Prosedur ini mencakup proses pengajuan permohonan akses data (Consumer), penyediaan data (Provider), validasi keamanan, "
        "penerbitan token kredensial (API Key / OAuth 2.0), uji coba di lingkungan sandbox/staging, implementasi di production, "
        "hingga audit trail transaksi data harian."
    )

    # Bab II: Definisi Istilah
    h2 = doc.add_heading("II. DEFINISI OPERASIONAL", level=2)
    h2.runs[0].font.color.rgb = RGBColor(31, 78, 121)
    
    defs = [
        ("SPLP (Sistem Penghubung Layanan Pemerintah)", "Infrastruktur middleware / API Gateway yang berfungsi sebagai simpul pertukaran data terpadu antar-aplikasi pemerintah."),
        ("Walidata", "Unit kerja Diskominfo yang berwenang memvalidasi, menyimpan, dan mengelola pertukaran data resmi."),
        ("Produsen Data", "Perangkat daerah yang menghasilkan data sesuai tugas dan fungsinya."),
        ("Pengguna Data (Consumer)", "Perangkat daerah atau instansi mitra yang membutuhkan akses data melalui API."),
        ("API (Application Programming Interface)", "Kumpulan protokol dan antarmuka pemrograman untuk komunikasi data terstandar (REST JSON).")
    ]
    for term, desc in defs:
        p = doc.add_paragraph()
        r = p.add_run(f"• {term}: ")
        r.font.bold = True
        p.add_run(desc)

    # Bab III: Prosedur Langkah Demi Langkah
    h3 = doc.add_heading("III. PROSEDUR PELAKSANAAN INTEGRASI (WORKFLOW)", level=2)
    h3.runs[0].font.color.rgb = RGBColor(31, 78, 121)

    steps = [
        ("Tahap 1: Pengajuan Permohonan", "Unit Pengguna Data mengajukan surat resmi permohonan akses API ke Diskominfo disertai Formulir Spesifikasi Integrasi Layanan (Lampiran 1)."),
        ("Tahap 2: Verifikasi Walidata & Produsen Data", "Diskominfo bersama Produsen Data menelaah dasar kewenangan pemohon, klasifikasi kerahasiaan data (Terbuka/Terbatas), dan kelayakan arsitektur sistem."),
        ("Tahap 3: Penandatanganan PKS / NDA", "Apabila permohonan disetujui, kedua pihak menandatangani Perjanjian Kerja Sama (PKS) atau Non-Disclosure Agreement (NDA) perlindungan data pribadi."),
        ("Tahap 4: Penerbitan Akses Sandbox & Pengujian", "Tim Teknis SPLP menerbitkan Client ID dan API Secret di lingkungan Sandbox/Staging. Pengguna melakukan pengetesan integrasi dan verifikasi schema."),
        ("Tahap 5: Reviu Keamanan & Uji Penetrasi", "Tim Keamanan Siber (CSIRT) melakukan reviu keamanan endpoint API dan memastikan tidak ada kerentanan injeksi atau kebocoran data sensitif."),
        ("Tahap 6: Deployment Production & Pemantauan", "Endpoint live diaktifkan pada SPLP Production. Transaksi pertukaran data dipantau otomatis 24/7 melalui log audit trail.")
    ]

    table_step = doc.add_table(rows=len(steps)+1, cols=3)
    table_step.alignment = WD_TABLE_ALIGNMENT.CENTER
    
    hdr_cells = table_step.rows[0].cells
    hdr_cells[0].text = "No"
    hdr_cells[1].text = "Tahapan Prosedur"
    hdr_cells[2].text = "Uraian Aktivitas & Output Dokumen"
    for c in hdr_cells:
        c.paragraphs[0].runs[0].font.bold = True
        set_cell_background(c, "1F4E79")
        c.paragraphs[0].runs[0].font.color.rgb = RGBColor(255, 255, 255)

    hdr_cells[0].width = Inches(0.6)
    hdr_cells[1].width = Inches(2.2)
    hdr_cells[2].width = Inches(3.7)

    for idx, (tahap, desc) in enumerate(steps, start=1):
        row = table_step.rows[idx]
        c0, c1, c2 = row.cells[0], row.cells[1], row.cells[2]
        c0.width = Inches(0.6)
        c1.width = Inches(2.2)
        c2.width = Inches(3.7)
        c0.text = str(idx)
        c1.text = tahap
        c2.text = desc
        c1.paragraphs[0].runs[0].font.bold = True
        set_cell_margins(c0, 60, 60, 80, 80)
        set_cell_margins(c1, 60, 60, 80, 80)
        set_cell_margins(c2, 60, 60, 80, 80)
        if idx % 2 == 0:
            set_cell_background(c0, "F9FAFB")
            set_cell_background(c1, "F9FAFB")
            set_cell_background(c2, "F9FAFB")

    doc.add_paragraph("\n")

    # Bab IV: Pengesahan
    doc.add_heading("IV. PENGESAHAN DOKUMEN", level=2).runs[0].font.color.rgb = RGBColor(31, 78, 121)
    
    p_sign = doc.add_paragraph()
    p_sign.alignment = WD_ALIGN_PARAGRAPH.RIGHT
    p_sign.add_run("Ditetapkan di: [Nama Kota/Kabupaten]\nPada tanggal: 15 Januari 2026\n\n")
    p_sign.add_run("KEPALA DINAS KOMUNIKASI DAN INFORMATIKA\nSELAKU WALIDATA DAERAH,\n\n\n\n")
    run_name = p_sign.add_run("[NAMA LENGKAP KEPALA DINAS, GELAR]\n")
    run_name.font.bold = True
    run_name.font.underline = True
    p_sign.add_run("Pembina Utama Muda (IV/c)\nNIP. 19780101 200501 1 002\n")

    doc.save(filepath)
    print(f"[OK] SOP docx created: {filepath}")

# =========================================================================
# 2. TEMPLATE PKS PERTUKARAN DATA (DOCX)
# =========================================================================
def create_pks_docx(filepath):
    doc = Document()
    for s in doc.sections:
        s.top_margin = Inches(1)
        s.bottom_margin = Inches(1)
        s.left_margin = Inches(1)
        s.right_margin = Inches(1)

    p_head = doc.add_paragraph()
    p_head.alignment = WD_ALIGN_PARAGRAPH.CENTER
    r = p_head.add_run("PERJANJIAN KERJA SAMA (PKS)\nTENTANG\nPEMANFAATAN LAYANAN BERBAGI PAKAI DAN PERTUKARAN DATA ELEKTRONIK\nMELALUI SISTEM PENGHUBUNG LAYANAN PEMERINTAH (SPLP)\n")
    r.font.bold = True
    r.font.size = Pt(13)
    r.font.color.rgb = RGBColor(31, 78, 121)

    p_nomor = doc.add_paragraph()
    p_nomor.alignment = WD_ALIGN_PARAGRAPH.CENTER
    p_nomor.add_run("NOMOR PIHAK KESATU: 100.3/024/DISKOMINFO/2026\nNOMOR PIHAK KEDUA: 005/112/DPMPTSP/2026\n\n").font.size = Pt(10)

    p_body = doc.add_paragraph()
    p_body.paragraph_format.line_spacing = 1.15
    p_body.add_run("Pada hari ini, Senin tanggal Sepuluh bulan Februari tahun Dua Ribu Dua Puluh Enam (10-02-2026), kami yang bertanda tangan di bawah ini:\n\n")
    
    p_pihak1 = doc.add_paragraph()
    p_pihak1.add_run("1. [NAMA KEPALA DINAS DISKOMINFO], ").font.bold = True
    p_pihak1.add_run("selaku Kepala Dinas Komunikasi dan Informatika, bertindak untuk dan atas nama Pemerintah Daerah [Nama Daerah] selaku Walidata dan Pengelola SPLP, selanjutnya disebut sebagai ")
    p_pihak1.add_run("PIHAK KESATU.\n\n").font.bold = True

    p_pihak2 = doc.add_paragraph()
    p_pihak2.add_run("2. [NAMA KEPALA DINAS PENGGUNA DATA], ").font.bold = True
    p_pihak2.add_run("selaku Kepala [Dinas Penanaman Modal & PTSP / Instansi Pengguna], bertindak untuk dan atas nama Perangkat Daerah Pengguna Data, selanjutnya disebut sebagai ")
    p_pihak2.add_run("PIHAK KEDUA.\n\n").font.bold = True

    p_body2 = doc.add_paragraph()
    p_body2.add_run("PIHAK KESATU dan PIHAK KEDUA secara bersama-sama disebut PARA PIHAK, sepakat mengikatkan diri dalam Perjanjian Kerja Sama ini dengan ketentuan sebagai berikut:\n")

    articles = [
        ("Pasal 1: Maksud dan Tujuan", "Perjanjian ini dimaksudkan sebagai landasan hukum dan operasional bagi integrasi data antar-sistem guna mencegah duplikasi entri data dan mempercepat proses layanan perizinan terpadu."),
        ("Pasal 2: Objek dan Ruang Lingkup", "Objek kerja sama mencakup penyediaan Application Programming Interface (API) Data Kependudukan, Data Perizinan Usaha, dan Data Pajak Daerah melalui SPLP."),
        ("Pasal 3: Hak dan Kewajiban PIHAK KESATU", "1. Menyediakan infrastruktur API gateway SPLP dengan ketersediaan (uptime) minimal 99%.\n2. Menerbitkan kredensial API (Client ID & Token) secara aman.\n3. Melakukan pemantauan trafik dan keamanan data secara berkelanjutan."),
        ("Pasal 4: Hak dan Kewajiban PIHAK KEDUA", "1. Menggunakan data yang diakses semata-mata untuk kepentingan validasi layanan dinas resmi.\n2. Tidak mendistribusikan data mentah kepada pihak ketiga tanpa izin tertulis.\n3. Menjaga kerahasiaan token akses API dan mematuhi UU Perlindungan Data Pribadi."),
        ("Pasal 5: Keamanan dan Kerahasiaan Data", "PARA PIHAK wajib menerapkan standar enkripsi minimal TLS 1.3 dan hashing pada data rahasia/pribadi. Pelanggaran kerahasiaan data dapat berakibat pemutusan akses sepihak dan sanksi peraturan perundang-undangan."),
        ("Pasal 6: Jangka Waktu Kerja Sama", "Perjanjian ini berlaku selama 3 (tiga) tahun terhitung sejak ditandatangani dan dapat diperpanjang berdasarkan hasil evaluasi bersama tahunan.")
    ]

    for title_art, content_art in articles:
        p_art = doc.add_paragraph()
        p_art.add_run(f"{title_art}\n").font.bold = True
        p_art.runs[0].font.color.rgb = RGBColor(31, 78, 121)
        p_art.add_run(content_art + "\n")

    # Kolom Tanda Tangan
    tbl_sign = doc.add_table(rows=2, cols=2)
    tbl_sign.alignment = WD_TABLE_ALIGNMENT.CENTER
    tbl_sign.rows[0].cells[0].width = Inches(3.2)
    tbl_sign.rows[0].cells[1].width = Inches(3.2)
    
    tbl_sign.rows[0].cells[0].text = "PIHAK KESATU,\nKEPALA DINAS KOMINFO\nSELAKU WALIDATA\n\n\n\n( [NAMA KEPALA DISKOMINFO] )\nNIP. 19780101 200501 1 002"
    tbl_sign.rows[0].cells[1].text = "PIHAK KEDUA,\nKEPALA [DINAS PENGGUNA DATA]\nSELAKU PENGGUNA DATA\n\n\n\n( [NAMA KEPALA DINAS PENGGUNA] )\nNIP. 19800512 200801 2 004"

    doc.save(filepath)
    print(f"[OK] PKS docx created: {filepath}")

# =========================================================================
# 3. TEMPLATE LAPORAN EVALUASI SPLP (DOCX)
# =========================================================================
def create_eval_report_docx(filepath):
    doc = Document()
    for s in doc.sections:
        s.top_margin = Inches(1)
        s.bottom_margin = Inches(1)
        s.left_margin = Inches(1)
        s.right_margin = Inches(1)

    p_head = doc.add_paragraph()
    p_head.alignment = WD_ALIGN_PARAGRAPH.CENTER
    r = p_head.add_run("LAPORAN MONITORING DAN EVALUASI BERKALA\nKINERJA SISTEM PENGHUBUNG LAYANAN PEMERINTAH (SPLP)\nTAHUN 2026\n")
    r.font.bold = True
    r.font.size = Pt(14)
    r.font.color.rgb = RGBColor(31, 78, 121)

    p_sub = doc.add_paragraph()
    p_sub.alignment = WD_ALIGN_PARAGRAPH.CENTER
    p_sub.add_run("Bukti Evaluasi Indikator 07 PermenPANRB No. 8/2026 - Tingkat Optimum (Level 5)\n").font.italic = True

    doc.add_heading("1. RINGKASAN EKSEKUTIF", level=2).runs[0].font.color.rgb = RGBColor(31, 78, 121)
    doc.add_paragraph(
        "Sepanjang Semester I Tahun 2026, Sistem Penghubung Layanan Pemerintah (SPLP) instansi telah melayani "
        "total 2.450.890 panggilan API dari 18 Perangkat Daerah dan 3 instansi pusat (Kemendagri Dukcapil, "
        "Kementerian Komdigi, dan BKN). Rata-rata ketersediaan layanan (Uptime) mencapai 99.85% dengan rata-rata waktu "
        "respon sebesar 185 milidetik."
    )

    doc.add_heading("2. REKAPITULASI METRIK KINERJA LAYANAN", level=2).runs[0].font.color.rgb = RGBColor(31, 78, 121)
    
    t = doc.add_table(rows=6, cols=3)
    t.alignment = WD_TABLE_ALIGNMENT.CENTER
    headers = ["Parameter Kinerja", "Target SLA", "Realisasi Semester I 2026"]
    for i, h in enumerate(headers):
        t.rows[0].cells[i].text = h
        t.rows[0].cells[i].paragraphs[0].runs[0].font.bold = True
        set_cell_background(t.rows[0].cells[i], "1F4E79")
        t.rows[0].cells[i].paragraphs[0].runs[0].font.color.rgb = RGBColor(255, 255, 255)

    metrics = [
        ("Total API Aktif Terdaftar", "25 Endpoint", "32 Endpoint"),
        ("Tingkat Ketersediaan (Uptime)", "99.50%", "99.85% (Memenuhi Target)"),
        ("Rata-Rata Latensi Respon", "< 300 ms", "185 ms (Sangat Baik)"),
        ("Error Rate (HTTP 5xx)", "< 0.5%", "0.08%"),
        ("Integrasi ke SPLP Nasional", "Terhubung Aktif", "Terhubung Aktif (Katalog Komdigi)")
    ]

    for idx, (m, target, real) in enumerate(metrics, start=1):
        r = t.rows[idx]
        r.cells[0].text = m
        r.cells[1].text = target
        r.cells[2].text = real
        for c in r.cells:
            set_cell_margins(c, 60, 60, 80, 80)
        if idx % 2 == 0:
            set_cell_background(r.cells[0], "F9FAFB")
            set_cell_background(r.cells[1], "F9FAFB")
            set_cell_background(r.cells[2], "F9FAFB")

    doc.add_paragraph("\n")
    doc.add_heading("3. ANALISIS KENDALA & TINDAK LANJUT PERBAIKAN", level=2).runs[0].font.color.rgb = RGBColor(31, 78, 121)
    doc.add_paragraph(
        "1. Lonjakan Traffic saat Pendaftaran Bansos/PPDB:\n"
        "   Terjadi peningkatan beban request hingga 5x lipat. Tindak lanjut: Diterapkan fitur Rate Limiting dinamis dan Redis Caching pada endpoint data sekolah.\n\n"
        "2. Keamanan Token API:\n"
        "   Dilakukan rotasi rutin kunci API setiap 90 hari dan adopsi enkripsi JWT payload untuk data pribadi."
    )

    doc.add_heading("4. REKOMENDASI UNTUK PERIODE BERIKUTNYA", level=2).runs[0].font.color.rgb = RGBColor(31, 78, 121)
    doc.add_paragraph(
        "1. Menambah 10 endpoint API baru untuk integrasi Portal Satu Sehat Kemenkes dan Layanan Pajak Daerah.\n"
        "2. Meningkatkan kapasitas load balancer API Gateway guna menyambut integrasi INA Digital Nasional.\n"
        "3. Melakukan simulasi failover recovery SPLP semi-tahunan."
    )

    doc.save(filepath)
    print(f"[OK] Eval report docx created: {filepath}")

# =========================================================================
# 4. TEMPLATE KATALOG LAYANAN API SPLP (XLSX)
# =========================================================================
def create_api_catalog_xlsx(filepath):
    wb = openpyxl.Workbook()
    
    # Sheet 1: Katalog API
    ws_katalog = wb.active
    ws_katalog.title = "Katalog_Layanan_API"

    header_font = Font(name='Calibri', size=11, bold=True, color='FFFFFF')
    header_fill = PatternFill(start_color='1F4E79', end_color='1F4E79', fill_type='solid')
    border_thin = Border(
        left=Side(style='thin', color='D9D9D9'),
        right=Side(style='thin', color='D9D9D9'),
        top=Side(style='thin', color='D9D9D9'),
        bottom=Side(style='thin', color='D9D9D9')
    )

    title_cell = ws_katalog.cell(row=1, column=1, value="BUKU KATALOG LAYANAN BERBAGI PAKAI / SISTEM PENGHUBUNG LAYANAN PEMERINTAH (SPLP)")
    title_cell.font = Font(name='Calibri', size=14, bold=True, color='1F4E79')
    ws_katalog.row_dimensions[1].height = 25

    sub_cell = ws_katalog.cell(row=2, column=1, value="Dasar Hukum: PermenPANRB No. 8 Tahun 2026 (Indikator 07 - Kematangan Level 3 & Level 4)")
    sub_cell.font = Font(name='Calibri', size=10, italic=True, color='595959')

    headers = [
        "No", "Kode Service", "Nama Layanan / API", "Produsen Data (OPD)", 
        "Klasifikasi Data", "Metode", "Endpoint URL Resmi (SPLP)", 
        "Format Respon", "Mekanisme Autentikasi", "Keterhubungan Nasional", "Status Layanan"
    ]

    for col_num, h_text in enumerate(headers, 1):
        cell = ws_katalog.cell(row=4, column=col_num, value=h_text)
        cell.font = header_font
        cell.fill = header_fill
        cell.alignment = Alignment(horizontal='center', vertical='center', wrap_text=True)
        cell.border = border_thin
    ws_katalog.row_dimensions[4].height = 30

    sample_apis = [
        (1, "SRV-DUKCAPIL-01", "Verifikasi Validitas NIK Warga", "Disdukcapil", "Terbatas/Pribadi", "POST", "https://splp.daerah.go.id/api/v1/dukcapil/verify-nik", "JSON", "OAuth 2.0 / Bearer", "SPLP Nasional", "Aktif Production"),
        (2, "SRV-PTSP-02", "Pengecekan Nomor Induk Berusaha (NIB)", "DPMPTSP", "Terbuka Terbatas", "GET", "https://splp.daerah.go.id/api/v1/ptsp/nib/{id}", "JSON", "API Key + IP Whitelist", "OSS Kemeninves", "Aktif Production"),
        (3, "SRV-BAPENDA-03", "Data Status Tagihan PBB-P2 & BPHTB", "Bapenda", "Terbuka", "GET", "https://splp.daerah.go.id/api/v1/pajak/tagihan-pbb", "JSON", "Bearer Token", "Bank Daerah / QRIS", "Aktif Production"),
        (4, "SRV-BKPSDM-04", "Sinkronisasi Status ASN & Profil Jabatan", "BKPSDM", "Terbatas", "POST", "https://splp.daerah.go.id/api/v1/kepegawaian/asn-profile", "JSON", "OAuth 2.0 MTLS", "SIASN BKN", "Aktif Production"),
        (5, "SRV-DINKES-05", "Ketersediaan Bed Rawat Inap RSUD", "Dinas Kesehatan", "Publik", "GET", "https://splp.daerah.go.id/api/v1/kesehatan/bed-availability", "JSON", "Public API Key", "Satu Sehat Kemenkes", "Aktif Production"),
        (6, "SRV-BAPPEDA-06", "Data Indikator Capaian Kinerja Makro", "Bappeda", "Publik", "GET", "https://splp.daerah.go.id/api/v1/perencanaan/indikator-makro", "JSON", "Open Data", "Satu Data Indonesia", "Aktif Production"),
        (7, "SRV-DINSOS-07", "Cek Kelayakan Penerima Bansos (DTKS)", "Dinas Sosial", "Terbatas/Pribadi", "POST", "https://splp.daerah.go.id/api/v1/sosial/dtks-verify", "JSON", "OAuth 2.0 + Audit Log", "SIKS-NG Kemensos", "Aktif Production"),
        (8, "SRV-ARSIP-08", "Registrasi Penomoran Naskah Dinas Terpadu", "Bagian Umum", "Internal", "POST", "https://splp.daerah.go.id/api/v1/persuratan/generate-agenda", "JSON", "Bearer Token", "SRIKANDI ANRI", "Aktif Production")
    ]

    for row_idx, item in enumerate(sample_apis, 5):
        ws_katalog.row_dimensions[row_idx].height = 24
        fill_color = 'F2F4F7' if row_idx % 2 == 0 else 'FFFFFF'
        row_fill = PatternFill(start_color=fill_color, end_color=fill_color, fill_type='solid')
        
        for col_idx, val in enumerate(item, 1):
            c = ws_katalog.cell(row=row_idx, column=col_idx, value=val)
            c.border = border_thin
            c.fill = row_fill
            c.font = Font(name='Calibri', size=10)
            if col_idx in [1, 6, 8, 11]:
                c.alignment = Alignment(horizontal='center', vertical='center')
            else:
                c.alignment = Alignment(vertical='center')

    # Sheet 2: Daftar Konsumen / Aplikasi Pengguna
    ws_consumer = wb.create_sheet(title="Daftar_Pengguna_Consumer")
    ws_consumer.cell(row=1, column=1, value="DAFTAR APLIKASI DAN UNIT PENGGUNA LAYANAN SPLP").font = Font(name='Calibri', size=13, bold=True, color='1F4E79')
    
    cons_headers = ["No", "Nama Aplikasi Consumer", "Unit Kerja / Lembaga Pemohon", "API yang Digunakan", "No. Dokumen PKS / Izin", "Status Akses", "Masa Berlaku Token"]
    for col_num, h_text in enumerate(cons_headers, 1):
        c = ws_consumer.cell(row=3, column=col_num, value=h_text)
        c.font = header_font
        c.fill = PatternFill(start_color='2E75B6', end_color='2E75B6', fill_type='solid')
        c.alignment = Alignment(horizontal='center', vertical='center')
        c.border = border_thin

    cons_data = [
        (1, "Aplikasi MPP Digital", "DPMPTSP", "SRV-DUKCAPIL-01, SRV-BAPENDA-03", "PKS No. 100/024/2026", "Aktif Production", "31-12-2026"),
        (2, "Super-App Warga Sejahtera", "Diskominfo", "SRV-DINKES-05, SRV-BAPPEDA-06", "SK Penetapan Layanan 2026", "Aktif Production", "Permanen"),
        (3, "Sistem Penggajian ASN Terpadu", "BPKAD", "SRV-BKPSDM-04", "PKS No. 050/119/2025", "Aktif Production", "31-12-2027"),
        (4, "Aplikasi e-Bansos Daerah", "Dinas Sosial", "SRV-DUKCAPIL-01, SRV-DINSOS-07", "PKS No. 460/088/2026", "Aktif Production", "31-12-2026")
    ]
    for r_idx, item in enumerate(cons_data, 4):
        for c_idx, val in enumerate(item, 1):
            c = ws_consumer.cell(row=r_idx, column=c_idx, value=val)
            c.border = border_thin
            c.font = Font(name='Calibri', size=10)
            if c_idx in [1, 6, 7]:
                c.alignment = Alignment(horizontal='center', vertical='center')

    # Auto-adjust column widths
    for ws in [ws_katalog, ws_consumer]:
        for col in ws.columns:
            max_len = max(len(str(cell.value or '')) for cell in col)
            col_letter = get_column_letter(col[0].column)
            ws.column_dimensions[col_letter].width = max(max_len + 3, 12)

    wb.save(filepath)
    print(f"[OK] API Catalog xlsx created: {filepath}")

# =========================================================================
# 5. TEMPLATE AUDIT TRAIL LOG TRANSAKSI SPLP (XLSX)
# =========================================================================
def create_audit_trail_xlsx(filepath):
    wb = openpyxl.Workbook()
    ws = wb.active
    ws.title = "Log_Audit_Trail_Transaksi"

    header_font = Font(name='Calibri', size=11, bold=True, color='FFFFFF')
    header_fill = PatternFill(start_color='385723', end_color='385723', fill_type='solid') # Forest green
    border_thin = Border(
        left=Side(style='thin', color='D9D9D9'),
        right=Side(style='thin', color='D9D9D9'),
        top=Side(style='thin', color='D9D9D9'),
        bottom=Side(style='thin', color='D9D9D9')
    )

    title_cell = ws.cell(row=1, column=1, value="LOG AUDIT TRAIL TRANSAKSI PERTUKARAN DATA SPLP (EVALUASI LEVEL 4 & LEVEL 5)")
    title_cell.font = Font(name='Calibri', size=13, bold=True, color='385723')
    
    ws.cell(row=2, column=1, value="Membuktikan adanya mekanisme pencatatan otomatis, keamanan, dan non-repudiation pertukaran data.").font = Font(name='Calibri', size=10, italic=True, color='595959')

    headers = [
        "ID Transaksi", "Timestamp (WIB)", "Consumer Application", "Client IP Source", 
        "Endpoint Service", "Method", "HTTP Status", "Response Time (ms)", "Payload Size (KB)", "Audit Status"
    ]

    for col_idx, h in enumerate(headers, 1):
        c = ws.cell(row=4, column=col_idx, value=h)
        c.font = header_font
        c.fill = header_fill
        c.alignment = Alignment(horizontal='center', vertical='center')
        c.border = border_thin
    ws.row_dimensions[4].height = 28

    sample_logs = [
        ("TX-20260210-00109", "2026-02-10 08:30:14", "Aplikasi MPP Digital", "192.168.10.45", "/api/v1/dukcapil/verify-nik", "POST", 200, 142, 1.2, "Verified & Signed"),
        ("TX-20260210-00110", "2026-02-10 08:31:02", "Aplikasi MPP Digital", "192.168.10.45", "/api/v1/ptsp/nib/91200034", "GET", 200, 118, 4.5, "Verified & Signed"),
        ("TX-20260210-00111", "2026-02-10 08:32:45", "Super-App Warga", "10.20.5.12", "/api/v1/kesehatan/bed-availability", "GET", 200, 89, 8.1, "Verified & Signed"),
        ("TX-20260210-00112", "2026-02-10 08:33:10", "Sistem Penggajian", "192.168.12.80", "/api/v1/kepegawaian/asn-profile", "POST", 200, 210, 3.4, "Verified & Signed"),
        ("TX-20260210-00113", "2026-02-10 08:34:00", "Unknown Consumer", "203.114.88.19", "/api/v1/dukcapil/verify-nik", "POST", 401, 15, 0.4, "Blocked (Invalid Token)"),
        ("TX-20260210-00114", "2026-02-10 08:35:12", "Aplikasi e-Bansos", "192.168.15.22", "/api/v1/sosial/dtks-verify", "POST", 200, 195, 2.8, "Verified & Signed"),
        ("TX-20260210-00115", "2026-02-10 08:36:20", "Portal SDI Nasional", "103.247.10.5", "/api/v1/perencanaan/indikator-makro", "GET", 200, 160, 12.4, "Verified (National SPLP)"),
        ("TX-20260210-00116", "2026-02-10 08:37:55", "Aplikasi MPP Digital", "192.168.10.45", "/api/v1/pajak/tagihan-pbb", "GET", 200, 134, 2.1, "Verified & Signed")
    ]

    for r_idx, log in enumerate(sample_logs, 5):
        ws.row_dimensions[r_idx].height = 22
        fill = PatternFill(start_color='F2F9EC' if r_idx % 2 == 0 else 'FFFFFF', end_color='F2F9EC' if r_idx % 2 == 0 else 'FFFFFF', fill_type='solid')
        for c_idx, val in enumerate(log, 1):
            c = ws.cell(row=r_idx, column=c_idx, value=val)
            c.border = border_thin
            c.fill = fill
            c.font = Font(name='Calibri', size=10)
            if c_idx in [1, 2, 4, 6, 7, 8, 9, 10]:
                c.alignment = Alignment(horizontal='center', vertical='center')
                if c_idx == 7: # HTTP status
                    if val == 200:
                        c.font = Font(name='Calibri', size=10, bold=True, color='385723')
                    else:
                        c.font = Font(name='Calibri', size=10, bold=True, color='C00000')
            else:
                c.alignment = Alignment(vertical='center')

    # Sheet 2: Ringkasan Rekapitulasi Bulanan
    ws_rekap = wb.create_sheet(title="Rekapitulasi_Bulanan")
    ws_rekap.cell(row=1, column=1, value="REKAPITULASI TRAFIK DAN TINGKAT KEBERHASILAN TRANSAKSI SPLP 2026").font = Font(name='Calibri', size=13, bold=True, color='385723')
    
    rekap_headers = ["Bulan", "Total Request Transaksi", "Transaksi Sukses (2xx)", "Transaksi Gagal (4xx/5xx)", "Success Rate (%)", "Avg Response Time (ms)", "Status Kepatuhan SLA"]
    for col_idx, h in enumerate(rekap_headers, 1):
        c = ws_rekap.cell(row=3, column=col_idx, value=h)
        c.font = header_font
        c.fill = PatternFill(start_color='548235', end_color='548235', fill_type='solid')
        c.alignment = Alignment(horizontal='center', vertical='center')
        c.border = border_thin

    rekap_data = [
        ("Januari 2026", 412500, 412150, 350, "99.91%", 178, "Memenuhi SLA"),
        ("Februari 2026", 435800, 435200, 600, "99.86%", 185, "Memenuhi SLA"),
        ("Maret 2026", 480200, 479700, 500, "99.90%", 182, "Memenuhi SLA"),
        ("April 2026", 510400, 509850, 550, "99.89%", 190, "Memenuhi SLA")
    ]
    for r_idx, rk in enumerate(rekap_data, 4):
        for c_idx, val in enumerate(rk, 1):
            c = ws_rekap.cell(row=r_idx, column=c_idx, value=val)
            c.border = border_thin
            c.font = Font(name='Calibri', size=10)
            c.alignment = Alignment(horizontal='center', vertical='center')

    for s in [ws, ws_rekap]:
        for col in s.columns:
            max_len = max(len(str(cell.value or '')) for cell in col)
            col_letter = get_column_letter(col[0].column)
            s.column_dimensions[col_letter].width = max(max_len + 3, 14)

    wb.save(filepath)
    print(f"[OK] Audit trail xlsx created: {filepath}")

# Execute generation
create_sop_docx(os.path.join(OUTPUT_DIR, "Template_SOP_Integrasi_Layanan_SPLP_Indikator07.docx"))
create_pks_docx(os.path.join(OUTPUT_DIR, "Template_PKS_Pertukaran_Data_Elektronik_SPLP_Indikator07.docx"))
create_eval_report_docx(os.path.join(OUTPUT_DIR, "Template_Laporan_Evaluasi_Kinerja_SPLP_Indikator07.docx"))
create_api_catalog_xlsx(os.path.join(OUTPUT_DIR, "Template_Buku_Katalog_Layanan_API_SPLP_Indikator07.xlsx"))
create_audit_trail_xlsx(os.path.join(OUTPUT_DIR, "Template_Log_Audit_Trail_Transaksi_SPLP_Indikator07.xlsx"))

# Also copy to public/templates/ind_07 for browser direct download
create_sop_docx(os.path.join(PUBLIC_DIR, "Template_SOP_Integrasi_Layanan_SPLP_Indikator07.docx"))
create_pks_docx(os.path.join(PUBLIC_DIR, "Template_PKS_Pertukaran_Data_Elektronik_SPLP_Indikator07.docx"))
create_eval_report_docx(os.path.join(PUBLIC_DIR, "Template_Laporan_Evaluasi_Kinerja_SPLP_Indikator07.docx"))
create_api_catalog_xlsx(os.path.join(PUBLIC_DIR, "Template_Buku_Katalog_Layanan_API_SPLP_Indikator07.xlsx"))
create_audit_trail_xlsx(os.path.join(PUBLIC_DIR, "Template_Log_Audit_Trail_Transaksi_SPLP_Indikator07.xlsx"))

print("All 5 templates generated successfully in both workspace and public directory!")
