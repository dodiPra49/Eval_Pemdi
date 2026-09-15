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

OUTPUT_DIR = r"d:\DODI AGUSRI.S.KOM\2026 2026 2026\FELLOW DEVELOPER\React.JS\EVAL_PEMDI\template_bukti_dukung\INDIKATOR_01_TATA_KELOLA"
PUBLIC_DIR = r"d:\DODI AGUSRI.S.KOM\2026 2026 2026\FELLOW DEVELOPER\React.JS\EVAL_PEMDI\public\templates\ind_01"

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
# 1. TEMPLATE PERATURAN ARSITEKTUR & PETA RENCANA PEMDI (DOCX - LEVEL 3)
# =========================================================================
def create_peraturan_arsitektur_docx(filepath):
    doc = Document()
    for s in doc.sections:
        s.top_margin = Inches(1)
        s.bottom_margin = Inches(1)
        s.left_margin = Inches(1)
        s.right_margin = Inches(1)

    # Kop Garuda / Instansi Resmi
    hp = doc.add_paragraph()
    hp.alignment = WD_ALIGN_PARAGRAPH.CENTER
    r1 = hp.add_run("BUPATI / WALIKOTA / GUBERNUR / KEPALA LEMBAGA [NAMA INSTANSI]\n\n")
    r1.font.bold = True
    r1.font.size = Pt(13)

    r2 = hp.add_run("PERATURAN KEPALA DAERAH / KEPALA INSTANSI [NAMA INSTANSI]\n")
    r2.font.bold = True
    r2.font.size = Pt(12)
    r3 = hp.add_run("NOMOR 08 TAHUN 2026\n\n")
    r3.font.bold = True
    r3.font.size = Pt(12)

    r4 = hp.add_run("TENTANG\n")
    r4.font.bold = True
    r4.font.size = Pt(11)

    title_run = hp.add_run("ARSITEKTUR DAN PETA RENCANA PEMERINTAH DIGITAL\nTAHUN 2026-2030")
    title_run.font.bold = True
    title_run.font.size = Pt(13)
    title_run.font.color.rgb = RGBColor(31, 78, 121)

    doc.add_paragraph("\n")

    # Bagian Menimbang & Mengingat
    p_menimbang = doc.add_paragraph()
    p_menimbang.add_run("MENIMBANG:\n").font.bold = True
    p_menimbang.add_run(
        "a. bahwa untuk mewujudkan tata kelola pemerintahan yang bersih, efektif, transparan, dan akuntabel serta pelayanan publik yang berkualitas dan terpercaya, diperlukan keterpaduan penyelenggaraan pemerintahan berbasis digital;\n"
        "b. bahwa untuk memberikan arah keterpaduan dan penyelarasan proses bisnis, data, layanan, aplikasi, infrastruktur, dan keamanan SPBE, perlu disusun Arsitektur dan Peta Rencana Pemerintah Digital;\n"
        "c. bahwa untuk pemenuhan Indikator 1 Evaluasi Kinerja Pemerintahan Digital sesuai PermenPANRB Nomor 8 Tahun 2026 (Tingkat Kematangan Tata Kelola Pemerintah Digital), diperlukan penetapan regulasi formal Arsitektur dan Peta Rencana yang selaras dengan SIA-SPBE Nasional;\n"
        "d. bahwa berdasarkan pertimbangan sebagaimana dimaksud dalam huruf a, huruf b, dan huruf c, perlu menetapkan Peraturan Kepala Instansi tentang Arsitektur dan Peta Rencana Pemerintah Digital Tahun 2026-2030."
    )

    p_mengingat = doc.add_paragraph()
    p_mengingat.add_run("MENGINGAT:\n").font.bold = True
    p_mengingat.add_run(
        "1. Undang-Undang Nomor 23 Tahun 2014 tentang Pemerintahan Daerah;\n"
        "2. Peraturan Presiden Nomor 95 Tahun 2018 tentang Sistem Pemerintahan Berbasis Elektronik (Lembaran Negara RI Tahun 2018 No. 182);\n"
        "3. Peraturan Presiden Nomor 39 Tahun 2019 tentang Satu Data Indonesia;\n"
        "4. Peraturan Presiden Nomor 132 Tahun 2022 tentang Arsitektur Sistem Pemerintahan Berbasis Elektronik Nasional;\n"
        "5. Peraturan Presiden Nomor 82 Tahun 2023 tentang Percepatan Transformasi Digital dan Keterpaduan Layanan Digital Nasional;\n"
        "6. Peraturan Menteri Pendayagunaan Aparatur Negara dan Reformasi Birokrasi Nomor 8 Tahun 2026 tentang Evaluasi Kinerja Pemerintahan Digital."
    )

    # Diktum Memutuskan
    doc.add_heading("MEMUTUSKAN:", level=2).alignment = WD_ALIGN_PARAGRAPH.CENTER
    doc.paragraphs[-1].runs[0].font.color.rgb = RGBColor(31, 78, 121)

    p_diktum = doc.add_paragraph()
    p_diktum.add_run("MENETAPKAN: ").font.bold = True
    p_diktum.add_run("PERATURAN KEPALA DAERAH / INSTANSI TENTANG ARSITEKTUR DAN PETA RENCANA PEMERINTAH DIGITAL TAHUN 2026-2030.\n\n")

    # Batang Tubuh Pasal
    articles = [
        ("Pasal 1 (Ketentuan Umum)", 
         "Dalam Peraturan ini yang dimaksud dengan:\n"
         "1. Pemerintah Digital (SPBE) adalah penyelenggaraan pemerintahan yang memanfaatkan teknologi informasi dan komunikasi untuk memberikan layanan kepada instansi pemerintah, aparatur sipil negara, pelaku usaha, dan masyarakat.\n"
         "2. Arsitektur Pemerintah Digital adalah kerangka dasar yang mendeskripsikan integrasi proses bisnis, data dan informasi, infrastruktur, aplikasi, dan keamanan untuk menghasilkan layanan digital terpadu.\n"
         "3. Peta Rencana Pemerintah Digital adalah dokumen yang memuat rencana inisiatif strategis, peta jalan (roadmap), dan tahapan penerapan tata kelola digital selama 5 (lima) tahun.\n"
         "4. Sistem Informasi Arsitektur SPBE Nasional (SIA-SPBE) adalah platform digital nasional yang disediakan oleh Kementerian PANRB untuk mengintegrasikan dan menyelaraskan arsitektur seluruh instansi pemerintah."),
        ("Pasal 2 (Kedudukan dan Ruang Lingkup)", 
         "1. Arsitektur dan Peta Rencana Pemerintah Digital berkedudukan sebagai pedoman wajib bagi seluruh Organisasi Perangkat Daerah (OPD) dan unit kerja dalam menyusun rencana strategis dan anggaran program digitalisasi.\n"
         "2. Arsitektur Pemerintah Digital mencakup 6 (enam) domain terpadu:\n"
         "   a. Domain Proses Bisnis;\n"
         "   b. Domain Data dan Informasi;\n"
         "   c. Domain Layanan Digital;\n"
         "   d. Domain Aplikasi;\n"
         "   e. Domain Infrastruktur; dan\n"
         "   f. Domain Keamanan Informasi."),
        ("Pasal 3 (Penyelarasan dengan Arsitektur Nasional)", 
         "1. Seluruh domain arsitektur sebagaimana dimaksud dalam Pasal 2 wajib dipetakan dan diselaraskan secara elektronik ke dalam Sistem Informasi Arsitektur (SIA-SPBE) Nasional Kementerian PANRB.\n"
         "2. Penyelarasan dilakukan dengan mengacu pada referensi arsitektur nasional yang berlaku dan tervalidasi secara berkala."),
        ("Pasal 4 (Peta Rencana 5 Tahunan)", 
         "1. Peta Rencana Pemerintah Digital memuat inisiatif strategis, alokasi program prioritas, tahapan implementasi tahunan (2026 s.d. 2030), dan estimasi kebutuhan pembiayaan.\n"
         "2. Program digitalisasi yang tertuang dalam Peta Rencana wajib diintegrasikan ke dalam Rencana Kerja Pemerintah Daerah (RKPD) dan Dokumen Pelaksanaan Anggaran (DPA) setiap tahun anggaran."),
        ("Pasal 5 (Evaluasi dan Pembaruan Berkala)", 
         "1. Tata kelola dan keterpaduan Arsitektur Pemerintah Digital wajib dievaluasi dan direviu secara berkala paling sedikit 1 (satu) kali dalam 2 (dua) tahun.\n"
         "2. Hasil evaluasi berkala dituangkan dalam Laporan Reviu Tata Kelola dan menjadi dasar perubahan atau adendum Peta Rencana Pemerintah Digital."),
        ("Pasal 6 (Ketentuan Penutup)", 
         "Peraturan ini mulai berlaku pada tanggal diundangkan. Agar setiap orang mengetahuinya, memerintahkan pengundangan Peraturan ini dengan penempatannya dalam Berita Daerah / Berita Resmi Instansi.")
    ]

    for a_title, a_content in articles:
        h = doc.add_heading(a_title, level=3)
        h.runs[0].font.color.rgb = RGBColor(46, 117, 182)
        p = doc.add_paragraph(a_content)
        p.paragraph_format.left_indent = Inches(0.2)

    # Tanda Tangan
    doc.add_paragraph("\n")
    p_ttd = doc.add_paragraph()
    p_ttd.alignment = WD_ALIGN_PARAGRAPH.RIGHT
    p_ttd.add_run("Ditetapkan di: [Nama Kota]\nPada tanggal: 05 Januari 2026\n\n").font.size = Pt(10)
    p_ttd.add_run("KEPALA DAERAH / PIMPINAN INSTANSI,\n\n\n\n").font.bold = True
    p_ttd.add_run("[NAMA LENGKAP KEPALA DAERAH / INSTANSI]\n").font.bold = True
    p_ttd.add_run("(Telah ditandatangani secara elektronik bersertifikat BSrE)")

    # Simpan ke kedua lokasi
    for out_path in [os.path.join(OUTPUT_DIR, "Template_Peraturan_Arsitektur_dan_Peta_Rencana_Pemdi_Indikator01.docx"),
                     os.path.join(PUBLIC_DIR, "Template_Peraturan_Arsitektur_dan_Peta_Rencana_Pemdi_Indikator01.docx")]:
        doc.save(out_path)
    print(f"[OK] Peraturan Arsitektur docx created: {out_path}")

# =========================================================================
# 2. TEMPLATE BUKU INDUK 6 DOMAIN ARSITEKTUR PEMDI (DOCX - LEVEL 3 & 4)
# =========================================================================
def create_buku_induk_6_domain_docx(filepath):
    doc = Document()
    for s in doc.sections:
        s.top_margin = Inches(1)
        s.bottom_margin = Inches(1)
        s.left_margin = Inches(1)
        s.right_margin = Inches(1)

    hp = doc.add_paragraph()
    hp.alignment = WD_ALIGN_PARAGRAPH.CENTER
    r1 = hp.add_run("PEMERINTAH DAERAH / KEMENTERIAN / LEMBAGA [NAMA INSTANSI]\n")
    r1.font.bold = True
    r1.font.size = Pt(12)
    r2 = hp.add_run("TIM KOORDINASI SISTEM PEMERINTAHAN BERBASIS ELEKTRONIK (SPBE)\n")
    r2.font.bold = True
    r2.font.size = Pt(13)
    r3 = hp.add_run("Dokumen Teknis Lampiran Utuh 6 Domain Arsitektur Pemerintah Digital Sesuai Perpres 132/2022 & PermenPANRB 8/2026\n")
    r3.font.size = Pt(9)
    r3.font.color.rgb = RGBColor(100, 100, 100)

    p_line = doc.add_paragraph()
    p_line.alignment = WD_ALIGN_PARAGRAPH.CENTER
    p_line.add_run("=" * 65).font.bold = True

    # Judul Dokumen
    title = doc.add_heading(level=1)
    title.alignment = WD_ALIGN_PARAGRAPH.CENTER
    trun = title.add_run("BUKU INDUK DOKUMEN ARSITEKTUR PEMERINTAH DIGITAL\n6 DOMAIN TERPADU TAHUN 2026-2030")
    trun.font.size = Pt(14)
    trun.font.bold = True
    trun.font.color.rgb = RGBColor(31, 78, 121)

    # Metadata Dokumen
    t_id = doc.add_table(rows=6, cols=2)
    t_id.alignment = WD_TABLE_ALIGNMENT.CENTER
    meta = [
        ("Nomor Dokumen", "DOK-ARSITEKTUR-PEMDI-01/2026"),
        ("Tanggal Pengesahan", "05 Januari 2026"),
        ("Dasar Ketentuan", "Perpres No. 132/2022 (Arsitektur SPBE Nasional) & PermenPANRB No. 8/2026 (Indikator 1 Level 3-4)"),
        ("Cakupan Domain", "6 Domain: Proses Bisnis, Data & Informasi, Layanan Digital, Aplikasi, Infrastruktur, Keamanan"),
        ("Platform Penyelarasan", "Sistem Informasi Arsitektur (SIA-SPBE) Nasional Kementerian PANRB (sia.spbe.go.id)"),
        ("Penanggung Jawab", "Sekretaris Daerah / Kepala Pusdatin selaku Koordinator Tim SPBE Instansi")
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

    # Deskripsi Rinci 6 Domain
    doc.add_heading("RINGKASAN EKSEKUTIF 6 DOMAIN ARSITEKTUR PEMERINTAH DIGITAL", level=2).runs[0].font.color.rgb = RGBColor(31, 78, 121)

    domains = [
        ("1. Domain Proses Bisnis (Business Process)",
         "Mendeskripsikan hierarki proses bisnis instansi dari Level 0 (Peta Proses Utama), Level 1 (Fungsi Layanan), hingga Level 2 (Aktivitas Operasional).\n"
         "- Probis Tematik Prioritas: Layanan Perizinan Terpadu, Penanganan Kemiskinan Ekstrem, Pengendalian Inflasi Daerah, dan Digitalisasi Kesehatan/Pendidikan.\n"
         "- Probis Administrasi Pemerintahan: Perencanaan, Penganggaran, Keuangan, Pengadaan Barang/Jasa (PBJ), Akuntabilitas Kinerja (SAKIP), dan Kepegawaian ASN.\n"
         "- Penyelarasan: Selaras 100% dengan PermenPANRB No. 19/2018 dan terhubung ke Referensi Proses Bisnis Nasional (Rab) pada SIA-SPBE."),
        
        ("2. Domain Data dan Informasi (Data & Information)",
         "Mendeskripsikan arsitektur pengelolaan data instansi yang terpadu dan sesuai prinsip Satu Data Indonesia (Perpres 39/2019).\n"
         "- Standarisasi: Penetapan Data Induk Daerah (Master Data Kependudukan, Spasial, ASN, Pajak/Retribusi Daerah).\n"
         "- Interoperabilitas: Penyusunan metadata baku, kode referensi unik, dan kamus data sektoral.\n"
         "- Bagi Pakai: Arsitektur pertukaran data melalui Sistem Penghubung Layanan Pemerintah (SPLP) terhubung ke Satu Data Indonesia Nasional (Rad)."),
        
        ("3. Domain Layanan Digital (Digital Services)",
         "Mendeskripsikan katalog layanan publik digital dan layanan administrasi pemerintahan digital yang terintegrasi berbasis kebutuhan pengguna (Citizen-Centric).\n"
         "- Layanan Publik: Portal Pelayanan Terpadu Satu Pintu (PTSP Online), e-Kesehatan (Simpus Terpadu), e-Pendidikan, dan e-Pajak Daerah.\n"
         "- Layanan Administrasi: Sistem Informasi Naskah Dinas Terpadu (SRIKANDI), Manajemen Kepegawaian (SIASN Terintegrasi), dan SIPD-RI Penatausahaan.\n"
         "- Standar Akses: Integrasi Single Sign-On (SSO) Digital ID ASN dan Portal Nasional INAGov (Ral)."),
        
        ("4. Domain Aplikasi (Applications)",
         "Mendeskripsikan standardisasi siklus hidup pembangunan dan penerapan aplikasi berbasis arsitektur modular, microservices, dan API Terbuka.\n"
         "- Moratorium Duplikasi: Penertiban aplikasi sejenis dan pengutamaan pemanfaatan Aplikasi Umum Berbagi Pakai Nasional.\n"
         "- Interoperabilitas: Standar RESTful API, otentikasi OAuth2/JWT, dan kepatuhan repositori kode sumber instansi (Raa).\n"
         "- Keandalan: Uji keamanan kode otomatis (DevSecOps) dan pipeline integrasi berkelanjutan."),
        
        ("5. Domain Infrastruktur (Infrastructure)",
         "Mendeskripsikan penyediaan infrastruktur teknologi informasi dan komunikasi yang efisien, berkeandalan tinggi, dan aman.\n"
         "- Pusat Data: Konsolidasi infrastruktur server menuju Pusat Data Nasional (PDN) dan pemanfaatan Cloud PDN Komdigi.\n"
         "- Jaringan: Arsitektur Jaringan Intra Pemerintah (JIP) dengan pengamanan enkripsi SD-WAN, interkoneksi serat optik seluruh OPD, dan WiFi Publik terfilter.\n"
         "- Kelangsungan Layanan: Penerapan Disaster Recovery Center (DRC) dan prosedur backup berkala terisolasi (Rai)."),
        
        ("6. Domain Keamanan Informasi (Cybersecurity)",
         "Mendeskripsikan kerangka kerja perlindungan data, sistem elektronik, dan ketahanan siber instansi secara menyeluruh.\n"
         "- Tata Kelola SMKI: Penerapan Sistem Manajemen Keamanan Informasi berbasis ISO/IEC 27001 pada sistem elektronik strategis.\n"
         "- Kesiapsiagaan Krisis: Pembentukan Tim Tanggap Insiden Siber (CSIRT) terdaftar resmi di BSSN (STR CSIRT) dan SOP tanggap darurat.\n"
         "- Kriptografi: Penerapan Sertifikat Elektronik Balai Sertifikasi Elektronik (BSrE) untuk Tanda Tangan Elektronik (TTE) pada seluruh dokumen naskah dinas (Rak).")
    ]

    for d_title, d_desc in domains:
        h = doc.add_heading(d_title, level=3)
        h.runs[0].font.color.rgb = RGBColor(46, 117, 182)
        p = doc.add_paragraph(d_desc)
        p.paragraph_format.left_indent = Inches(0.2)

    # Tabel Matriks Penyelarasan Singkat
    doc.add_page_break()
    doc.add_heading("TABEL RINGKASAN PEMETAAN 6 DOMAIN KE SIA-SPBE NASIONAL", level=2).runs[0].font.color.rgb = RGBColor(31, 78, 121)

    t_map = doc.add_table(rows=7, cols=4)
    t_map.alignment = WD_TABLE_ALIGNMENT.CENTER
    mh = t_map.rows[0].cells
    mh[0].text = "No"
    mh[1].text = "Domain Arsitektur"
    mh[2].text = "Kode Referensi Nasional"
    mh[3].text = "Status Validasi SIA-SPBE"
    for c in mh:
        c.paragraphs[0].runs[0].font.bold = True
        set_cell_background(c, "1F4E79")
        c.paragraphs[0].runs[0].font.color.rgb = RGBColor(255, 255, 255)
    mh[0].width = Inches(0.6)
    mh[1].width = Inches(2.2)
    mh[2].width = Inches(2.2)
    mh[3].width = Inches(1.8)

    map_data = [
        ("1", "Domain Proses Bisnis", "Rab - Referensi Arsitektur Bisnis", "Tervalidasi (100% Sesuai)"),
        ("2", "Domain Data & Informasi", "Rad - Referensi Arsitektur Data", "Tervalidasi (100% Sesuai)"),
        ("3", "Domain Layanan Digital", "Ral - Referensi Arsitektur Layanan", "Tervalidasi (100% Sesuai)"),
        ("4", "Domain Aplikasi", "Raa - Referensi Arsitektur Aplikasi", "Tervalidasi (100% Sesuai)"),
        ("5", "Domain Infrastruktur", "Rai - Referensi Arsitektur Infrastruktur", "Tervalidasi (100% Sesuai)"),
        ("6", "Domain Keamanan", "Rak - Referensi Arsitektur Keamanan", "Tervalidasi (100% Sesuai)")
    ]
    for idx, (no, dom, ref, stt) in enumerate(map_data, 1):
        r = t_map.rows[idx]
        r.cells[0].text = no
        r.cells[1].text = dom
        r.cells[2].text = ref
        r.cells[3].text = stt
        r.cells[1].paragraphs[0].runs[0].font.bold = True
        r.cells[3].paragraphs[0].runs[0].font.bold = True
        for c in r.cells:
            set_cell_margins(c, 50, 50, 70, 70)
        if idx % 2 == 0:
            for c in r.cells:
                set_cell_background(c, "F9FAFB")

    # Pengesahan
    doc.add_paragraph("\n")
    p_ttd = doc.add_paragraph()
    p_ttd.alignment = WD_ALIGN_PARAGRAPH.RIGHT
    p_ttd.add_run("Disahkan oleh:\nTanggal: 05 Januari 2026\n\n").font.size = Pt(10)
    p_ttd.add_run("SEKRETARIS DAERAH / KETUA TIM PENGARAH SPBE,\n\n\n\n").font.bold = True
    p_ttd.add_run("[NAMA LENGKAP SEKRETARIS DAERAH]\nNIP. 19700315 199603 1 004\n").font.bold = True
    p_ttd.add_run("(Telah ditandatangani secara elektronik)")

    for out_path in [os.path.join(OUTPUT_DIR, "Template_Buku_Induk_6_Domain_Arsitektur_Pemerintah_Digital_Indikator01.docx"),
                     os.path.join(PUBLIC_DIR, "Template_Buku_Induk_6_Domain_Arsitektur_Pemerintah_Digital_Indikator01.docx")]:
        doc.save(out_path)
    print(f"[OK] Buku Induk 6 Domain docx created: {out_path}")

# =========================================================================
# 3. TEMPLATE MATRIKS PENYELARASAN SIA-SPBE NASIONAL (XLSX - LEVEL 4)
# =========================================================================
def create_matriks_penyelarasan_xlsx(filepath):
    wb = openpyxl.Workbook()
    header_font = Font(name='Calibri', size=11, bold=True, color='FFFFFF')
    border_thin = Border(
        left=Side(style='thin', color='D9D9D9'), right=Side(style='thin', color='D9D9D9'),
        top=Side(style='thin', color='D9D9D9'), bottom=Side(style='thin', color='D9D9D9')
    )

    # Sheet 1: Dashboard Keterpaduan SIA-SPBE
    ws_dash = wb.active
    ws_dash.title = "Dashboard_SIA_SPBE"

    ws_dash.cell(row=1, column=1, value="DASHBOARD KETERPADUAN ARSITEKTUR SPBE KE PLATFORM SIA-SPBE NASIONAL").font = Font(name='Calibri', size=14, bold=True, color='1F4E79')
    ws_dash.cell(row=2, column=1, value="Kertas Kerja Bukti Evaluasi Indikator 1 PermenPANRB No. 8/2026 (Level 4 - Terpadu Nasional)").font = Font(name='Calibri', size=10, italic=True, color='595959')

    # Summary KPI Cards
    cards = [
        ("Status Akun SIA-SPBE", "TERVALIDASI", "D9EAD3", "274E13"),
        ("Penyelarasan 6 Domain", "100% Tuntas", "C3D9FF", "1F4E79"),
        ("Total Entitas Terpetakan", "248 Komponen", "EAD1DC", "4C1130"),
        ("Integrasi ke DPA/Renja", "Tersinkronisasi", "FFF2CC", "7F6000"),
        ("Validasi KemenPANRB", "DISETUJUI RESMI", "D0E0E3", "0C343D"),
        ("Target Kematangan", "Level 4 (Terpadu)", "CFE2F3", "0B5394")
    ]
    for c_idx, (t_title, t_val, bg, fg) in enumerate(cards, 1):
        cell_t = ws_dash.cell(row=4, column=c_idx, value=t_title)
        cell_t.font = Font(name='Calibri', size=9, bold=True, color='595959')
        cell_t.alignment = Alignment(horizontal='center', vertical='center')
        cell_t.fill = PatternFill(start_color='F2F4F7', end_color='F2F4F7', fill_type='solid')
        cell_t.border = border_thin

        cell_v = ws_dash.cell(row=5, column=c_idx, value=t_val)
        cell_v.font = Font(name='Calibri', size=12, bold=True, color=fg)
        cell_v.alignment = Alignment(horizontal='center', vertical='center')
        cell_v.fill = PatternFill(start_color=bg, end_color=bg, fill_type='solid')
        cell_v.border = border_thin

    ws_dash.row_dimensions[4].height = 24
    ws_dash.row_dimensions[5].height = 32

    # Status Validasi per Domain
    ws_dash.cell(row=8, column=1, value="STATUS VALIDASI KETERPADUAN 6 DOMAIN ARSITEKTUR INSTANSI").font = Font(name='Calibri', size=11, bold=True, color='1F4E79')
    dom_headers = ["No", "Nama Domain Arsitektur", "Jumlah Objek Terdata", "Kode Referensi SIA Nasional", "Status Sinkronisasi", "Tanggal Verifikasi KemenPANRB"]
    for col_idx, h in enumerate(dom_headers, 1):
        c = ws_dash.cell(row=9, column=col_idx, value=h)
        c.font = header_font
        c.fill = PatternFill(start_color='1F4E79', end_color='1F4E79', fill_type='solid')
        c.alignment = Alignment(horizontal='center', vertical='center')
        c.border = border_thin
    ws_dash.row_dimensions[9].height = 26

    dom_data = [
        (1, "Domain Proses Bisnis (Peta Probis Level 0-2)", 42, "Rab - Referensi Arsitektur Bisnis", "Tersinkronisasi 100%", "2026-01-20"),
        (2, "Domain Data & Informasi (Katalog Data SDI)", 76, "Rad - Referensi Arsitektur Data", "Tersinkronisasi 100%", "2026-01-22"),
        (3, "Domain Layanan Digital (Katalog Layanan Publik/Gov)", 38, "Ral - Referensi Arsitektur Layanan", "Tersinkronisasi 100%", "2026-01-25"),
        (4, "Domain Aplikasi (Aplikasi Berbagi Pakai & Khusus)", 52, "Raa - Referensi Arsitektur Aplikasi", "Tersinkronisasi 100%", "2026-01-28"),
        (5, "Domain Infrastruktur (Data Center, JIP, Cloud PDN)", 24, "Rai - Referensi Arsitektur Infrastruktur", "Tersinkronisasi 100%", "2026-02-02"),
        (6, "Domain Keamanan Informasi (SMKI, CSIRT, TTE)", 16, "Rak - Referensi Arsitektur Keamanan", "Tersinkronisasi 100%", "2026-02-05")
    ]
    for r_idx, row_item in enumerate(dom_data, 10):
        fill = PatternFill(start_color='F2F4F7' if r_idx % 2 == 0 else 'FFFFFF', end_color='F2F4F7' if r_idx % 2 == 0 else 'FFFFFF', fill_type='solid')
        ws_dash.row_dimensions[r_idx].height = 22
        for c_idx, val in enumerate(row_item, 1):
            c = ws_dash.cell(row=r_idx, column=c_idx, value=val)
            c.border = border_thin
            c.fill = fill
            c.font = Font(name='Calibri', size=10)
            if c_idx in [1, 3, 4, 5, 6]:
                c.alignment = Alignment(horizontal='center', vertical='center')
                if c_idx == 5:
                    c.font = Font(name='Calibri', size=10, bold=True, color='1E4620')
            else:
                c.alignment = Alignment(vertical='center')

    # Sheet 2: Matriks Penyelarasan 6 Domain
    ws_map = wb.create_sheet(title="Matriks_Penyelarasan_6_Domain")
    ws_map.cell(row=1, column=1, value="MATRIKS PEMETAAN ENTITAS ARSITEKTUR INSTANSI KE REFERENSI ARSITEKTUR SIA-SPBE NASIONAL").font = Font(name='Calibri', size=13, bold=True, color='1F4E79')

    map_cols = [
        "No Entitas", "Domain", "Kode Komponen Instansi", "Nama Objek / Sistem Instansi", 
        "Kode Referensi SIA-SPBE", "Deskripsi Referensi Nasional KemenPANRB", "OPD Pengampu / Penanggung Jawab", 
        "Keterpaduan API / Interkoneksi", "Status Validasi Nasional"
    ]
    for col_idx, h in enumerate(map_cols, 1):
        c = ws_map.cell(row=3, column=col_idx, value=h)
        c.font = header_font
        c.fill = PatternFill(start_color='2E75B6', end_color='2E75B6', fill_type='solid')
        c.alignment = Alignment(horizontal='center', vertical='center')
        c.border = border_thin
    ws_map.row_dimensions[3].height = 28

    sample_mappings = [
        ("ENT-PB-01", "Probis", "PROBIS.01.02.04", "Layanan Perizinan Berusaha Terpadu Satu Pintu", "Rab.02.01", "Penyelenggaraan Perizinan & Non-Perizinan Daerah", "DPMPTSP", "Terintegrasi OSS RBA", "VALID"),
        ("ENT-PB-02", "Probis", "PROBIS.02.01.01", "Pengelolaan Naskah Dinas Elektronik Instansi", "Rab.01.03", "Penyelenggaraan Administrasi Persuratan Pemerintah", "Diskominfo / Bag. Umum", "Terintegrasi SRIKANDI", "VALID"),
        ("ENT-DATA-01", "Data", "DATA.03.01.002", "Basis Data Tunggal Profil Kependudukan Terpadu", "Rad.01.01", "Data Induk Kependudukan dan Catatan Sipil", "Disdukcapil", "API SIAK Terpusat Kemendagri", "VALID"),
        ("ENT-DATA-02", "Data", "DATA.04.02.005", "Data Geospasial RTRW dan Tematik Tata Ruang", "Rad.02.04", "Data Geospasial Informasi Geospasial Tematik", "Bappeda / Dinas PUPR", "Node JIGN BIG Nasional", "VALID"),
        ("ENT-LAY-01", "Layanan", "LAY.01.001", "Portal Pelayanan Warga Satu Pintu (SuperApp)", "Ral.01.02", "Layanan Portal Pelayanan Publik Terpadu", "Diskominfo", "SSO Digital ID ASN/Warga", "VALID"),
        ("ENT-LAY-02", "Layanan", "LAY.02.004", "Layanan Cuti Online dan Kinerja Pegawai ASN", "Ral.02.03", "Layanan Administrasi Manajemen ASN", "BKPSDM", "API Dua Arah SIASN BKN", "VALID"),
        ("ENT-APP-01", "Aplikasi", "APP.02.001", "Sistem Informasi Manajemen Kepegawaian (SIMPEG)", "Raa.02.01", "Aplikasi Manajemen Kepegawaian Daerah", "BKPSDM", "Microservices Cloud Ready", "VALID"),
        ("ENT-APP-02", "Aplikasi", "APP.03.004", "Sistem Pajak & Retribusi Daerah Online (e-PBB/BPHTB)", "Raa.01.04", "Aplikasi Pengelolaan Pendapatan Asli Daerah", "Bapenda", "Gateway Bank BPD / QRIS", "VALID"),
        ("ENT-INFRA-01", "Infrastruktur", "INF.01.001", "Infrastruktur Cloud Tenant Pusat Data Nasional", "Rai.01.01", "Komputasi Cloud Pemerintah PDN Nasional", "Diskominfo", "Virtual Data Center PDN", "VALID"),
        ("ENT-SEC-01", "Keamanan", "SEC.01.001", "Pusat Operasi Tanggap Insiden Siber (CSIRT Instansi)", "Rak.01.02", "Penanganan Insiden Siber dan Keamanan Informasi", "Diskominfo / CSIRT", "Gov-CSIRT BSSN Terkoneksi", "VALID")
    ]
    for r_idx, ent in enumerate(sample_mappings, 4):
        ws_map.row_dimensions[r_idx].height = 22
        fill = PatternFill(start_color='F2F4F7' if r_idx % 2 == 0 else 'FFFFFF', end_color='F2F4F7' if r_idx % 2 == 0 else 'FFFFFF', fill_type='solid')
        for c_idx, val in enumerate(ent, 1):
            c = ws_map.cell(row=r_idx, column=c_idx, value=val)
            c.border = border_thin
            c.fill = fill
            c.font = Font(name='Calibri', size=10)
            if c_idx in [1, 2, 3, 5, 9]:
                c.alignment = Alignment(horizontal='center', vertical='center')
                if c_idx == 9:
                    c.font = Font(name='Calibri', size=10, bold=True, color='1E4620')
            else:
                c.alignment = Alignment(vertical='center')

    # Sheet 3: Peta Rencana Program 5 Tahun (Sinkronisasi DPA)
    ws_road = wb.create_sheet(title="Peta_Rencana_Program_5_Tahun")
    ws_road.cell(row=1, column=1, value="ROADMAP PETA RENCANA INISIATIF STRATEGIS PEMERINTAH DIGITAL (2026-2030) & SINKRONISASI RENJA/DPA").font = Font(name='Calibri', size=13, bold=True, color='1F4E79')

    road_cols = [
        "No Inisiatif", "Nama Program / Inisiatif Strategis", "Keterkaitan 6 Domain", "Target Layanan yang Dihasilkan", 
        "OPD Penanggung Jawab", "Tahapan 2026", "Tahapan 2027-2028", "Tahapan 2029-2030", "Kode Rekening Program DPA", "Estimasi Alokasi (Rp)"
    ]
    for col_idx, h in enumerate(road_cols, 1):
        c = ws_road.cell(row=3, column=col_idx, value=h)
        c.font = header_font
        c.fill = PatternFill(start_color='7030A0', end_color='7030A0', fill_type='solid')
        c.alignment = Alignment(horizontal='center', vertical='center')
        c.border = border_thin
    ws_road.row_dimensions[3].height = 28

    sample_roadmap = [
        ("INIT-01", "Penyatuan Portal Layanan Publik Daerah Terpadu (SuperApp)", "Layanan & Aplikasi", "1 Portal terpadu menggantikan 24 web terpisah", "Diskominfo", "Integrasi 8 Layanan Utama", "Ekspansi Layanan Perizinan", "AI Chatbot & INAGov SSO", "2.16.03.2.01.0004", "Rp 850.000.000"),
        ("INIT-02", "Implementasi Satu Data Indonesia & Geoportal Tematik", "Data & Probis", "Data warehouse terpusat & metadata tervalidasi", "Bappeda & Diskominfo", "Katalog Data 100% OPD", "Integrasi SPLP Nasional", "Pemanfaatan Big Data Analytics", "2.16.02.2.01.0002", "Rp 650.000.000"),
        ("INIT-03", "Migrasi Menyeluruh Server OPD ke Cloud Pusat Data Nasional (PDN)", "Infrastruktur", "Efisiensi 100% server fisik lokal menuju PDN Komdigi", "Diskominfo", "Migrasi 30 Aplikasi Strategis", "Decommissioning Server Lama", "Multi-AZ Cloud Resilience", "2.16.03.2.02.0001", "Rp 1.200.000.000"),
        ("INIT-04", "Penguatan CSIRT Daerah & Sertifikasi ISO 27001 SMKI", "Keamanan Informasi", "Kesiapsiagaan insiden siber & registrasi STR BSSN", "Diskominfo (CSIRT)", "Pelaksanaan Cyber Drill & PIR", "Audit Eksternal ISO 27001", "Zero Trust Architecture", "2.16.03.2.03.0005", "Rp 480.000.000"),
        ("INIT-05", "Digitalisasi Naskah Dinas Terpadu SRIKANDI & TTE BSrE 100%", "Layanan Administrasi", "Arsip digital 100% paperless seluruh unit kerja", "Dinas Perpustakaan & Kominfo", "Pemberlakuan TTE 100% SK", "Penghapusan Berkas Manual", "Integrasi Arsip Statis ANRI", "2.16.01.2.01.0003", "Rp 320.000.000")
    ]
    for r_idx, rd in enumerate(sample_roadmap, 4):
        ws_road.row_dimensions[r_idx].height = 24
        fill = PatternFill(start_color='F2F4F7' if r_idx % 2 == 0 else 'FFFFFF', end_color='F2F4F7' if r_idx % 2 == 0 else 'FFFFFF', fill_type='solid')
        for c_idx, val in enumerate(rd, 1):
            c = ws_road.cell(row=r_idx, column=c_idx, value=val)
            c.border = border_thin
            c.fill = fill
            c.font = Font(name='Calibri', size=9)
            if c_idx in [1, 3, 5, 9, 10]:
                c.alignment = Alignment(horizontal='center', vertical='center')
                if c_idx == 10:
                    c.font = Font(name='Calibri', size=9, bold=True, color='1F4E79')
            else:
                c.alignment = Alignment(vertical='center')

    # Sheet 4: Kamus Referensi SIA Nasional
    ws_kamus = wb.create_sheet(title="Kamus_Referensi_SIA_Nasional")
    ws_kamus.cell(row=1, column=1, value="KAMUS KODE REFERENSI ARSITEKTUR SPBE NASIONAL KEMENTERIAN PANRB").font = Font(name='Calibri', size=13, bold=True, color='1F4E79')

    k_cols = ["Kode Klasifikasi", "Kategori Referensi Nasional", "Nama Nomenklatur Standar", "Regulasi Acuan Nasional", "Keterangan Integrasi"]
    for col_idx, h in enumerate(k_cols, 1):
        c = ws_kamus.cell(row=3, column=col_idx, value=h)
        c.font = header_font
        c.fill = PatternFill(start_color='1F4E79', end_color='1F4E79', fill_type='solid')
        c.alignment = Alignment(horizontal='center', vertical='center')
        c.border = border_thin
    ws_kamus.row_dimensions[3].height = 26

    ref_items = [
        ("Rab.01", "Referensi Arsitektur Bisnis", "Penyelenggaraan Manajemen Pemerintahan Umum", "Perpres 95/2018", "Wajib digunakan untuk Probis Manajemen"),
        ("Rab.02", "Referensi Arsitektur Bisnis", "Penyelenggaraan Pelayanan Publik Sektoral", "UU 25/2009", "Wajib digunakan untuk Probis Pelayanan Warga"),
        ("Rad.01", "Referensi Arsitektur Data", "Data Referensi dan Data Induk Nasional", "Perpres 39/2019", "Standar Pengkodean Master Data Kependudukan & ASN"),
        ("Rad.02", "Referensi Arsitektur Data", "Data Transaksi Elektronik & Geospasial", "Perpres 27/2014", "Standar Simpul Jaringan Geoportal BIG"),
        ("Ral.01", "Referensi Arsitektur Layanan", "Layanan Publik Berbasis Elektronik Terpadu", "PermenPANRB 8/2026", "Katalog Standar Layanan Publik Pemerintah"),
        ("Raa.01", "Referensi Arsitektur Aplikasi", "Aplikasi Umum Berbagi Pakai Nasional", "Perpres 132/2022", "Prioritas Penggunaan Aplikasi Nasional Bebas Duplikasi"),
        ("Rai.01", "Referensi Arsitektur Infrastruktur", "Pusat Data Nasional & Jaringan Intra Pemerintah", "Perpres 95/2018", "Standardisasi Komputasi Awan dan Interkoneksi Fiber Optik"),
        ("Rak.01", "Referensi Arsitektur Keamanan", "Kerangka Pengamanan Informasi SPBE & CSIRT", "Peraturan BSSN 10/2020", "Standar Kriptografi TTE dan Manajemen Kerentanan")
    ]
    for r_idx, k_item in enumerate(ref_items, 4):
        ws_kamus.row_dimensions[r_idx].height = 22
        fill = PatternFill(start_color='F2F4F7' if r_idx % 2 == 0 else 'FFFFFF', end_color='F2F4F7' if r_idx % 2 == 0 else 'FFFFFF', fill_type='solid')
        for c_idx, val in enumerate(k_item, 1):
            c = ws_kamus.cell(row=r_idx, column=c_idx, value=val)
            c.border = border_thin
            c.fill = fill
            c.font = Font(name='Calibri', size=10)
            if c_idx in [1, 2, 4]:
                c.alignment = Alignment(horizontal='center', vertical='center')
            else:
                c.alignment = Alignment(vertical='center')

    # Auto column width adjustment across sheets
    for ws in [ws_dash, ws_map, ws_road, ws_kamus]:
        for col in ws.columns:
            max_len = max(len(str(cell.value or '')) for cell in col)
            col_letter = get_column_letter(col[0].column)
            ws.column_dimensions[col_letter].width = max(max_len + 3, 14)

    for out_path in [os.path.join(OUTPUT_DIR, "Template_Matriks_Penyelarasan_Arsitektur_SIA_SPBE_Indikator01.xlsx"),
                     os.path.join(PUBLIC_DIR, "Template_Matriks_Penyelarasan_Arsitektur_SIA_SPBE_Indikator01.xlsx")]:
        wb.save(out_path)
    print(f"[OK] Matriks Penyelarasan SIA-SPBE xlsx created: {out_path}")

# =========================================================================
# 4. TEMPLATE LAPORAN EVALUASI BERKALA & REVIU TATA KELOLA (DOCX - LEVEL 5)
# =========================================================================
def create_laporan_evaluasi_tata_kelola_docx(filepath):
    doc = Document()
    for s in doc.sections:
        s.top_margin = Inches(1)
        s.bottom_margin = Inches(1)
        s.left_margin = Inches(1)
        s.right_margin = Inches(1)

    hp = doc.add_paragraph()
    hp.alignment = WD_ALIGN_PARAGRAPH.CENTER
    r1 = hp.add_run("PEMERINTAH DAERAH / KEMENTERIAN / LEMBAGA [NAMA INSTANSI]\n")
    r1.font.bold = True
    r1.font.size = Pt(12)
    r2 = hp.add_run("TIM KOORDINASI SISTEM PEMERINTAHAN BERBASIS ELEKTRONIK (SPBE)\n")
    r2.font.bold = True
    r2.font.size = Pt(13)
    r3 = hp.add_run("Laporan Resmi Evaluasi Berkala dan Reviu Tata Kelola Pemerintah Digital Sesuai Ketentuan Level 5 PermenPANRB 8/2026\n")
    r3.font.size = Pt(9)
    r3.font.color.rgb = RGBColor(100, 100, 100)

    p_line = doc.add_paragraph()
    p_line.alignment = WD_ALIGN_PARAGRAPH.CENTER
    p_line.add_run("=" * 65).font.bold = True

    # Judul Laporan
    title = doc.add_heading(level=1)
    title.alignment = WD_ALIGN_PARAGRAPH.CENTER
    trun = title.add_run("LAPORAN RESMI EVALUASI DAN REVIU BERKALA\nPENERAPAN TATA KELOLA PEMERINTAH DIGITAL\n(PERIODE EVALUASI TAHUN 2026)")
    trun.font.size = Pt(13)
    trun.font.bold = True
    trun.font.color.rgb = RGBColor(31, 78, 121)

    # Metadata Dokumen
    t_id = doc.add_table(rows=5, cols=2)
    t_id.alignment = WD_TABLE_ALIGNMENT.CENTER
    meta = [
        ("Nomor Dokumen", "LAP-REVIU-TATAKELOLA-01/2026"),
        ("Tanggal Penyusunan", "15 Februari 2026"),
        ("Siklus Reviu", "Evaluasi Berkala 2 (Dua) Tahunan Tata Kelola & Peta Rencana"),
        ("Fokus Analisis", "Penyelarasan Arsitektur SIA-SPBE, Efektivitas Integrasi Layanan Publik, dan Kepatuhan 6 Domain"),
        ("Target Standar Kematangan", "Standar Pemenuhan Level 5 (Optimum & Berkelanjutan) PermenPANRB No. 8/2026 Indikator 1")
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

    # Bab I: Latar Belakang & Maksud Evaluasi Berkala
    doc.add_heading("I. LATAR BELAKANG DAN MAKSUD EVALUASI BERKALA", level=2).runs[0].font.color.rgb = RGBColor(31, 78, 121)
    p_bg = doc.add_paragraph()
    p_bg.add_run(
        "Berdasarkan kriteria Level 5 Indikator 1 Evaluasi Kinerja Pemerintahan Digital (PermenPANRB No. 8 Tahun 2026), "
        "tata kelola pemerintah digital tidak hanya ditetapkan dan dipadukan secara elektronik, tetapi harus dievaluasi secara berkala "
        "minimal satu kali dalam dua tahun serta bersifat adaptif terhadap arah kebijakan transformasi digital nasional mutakhir. "
        "Laporan evaluasi berkala ini menyajikan hasil pengukuran kinerja implementasi arsitektur di seluruh Organisasi Perangkat Daerah, "
        "analisis kesenjangan (gap analysis) terhadap standar GovTech dan Digital ID nasional, audit keterpaduan data dan aplikasi, "
        "serta rekomendasi penyempurnaan atau adendum Peta Rencana Pemerintah Digital."
    )

    # Bab II: Metodologi & Capaian Indeks Tata Kelola
    doc.add_heading("II. HASIL PENGUKURAN KINERJA IMPLEMENTASI ARSITEKTUR DIGITAL", level=2).runs[0].font.color.rgb = RGBColor(31, 78, 121)

    t_perf = doc.add_table(rows=7, cols=4)
    t_perf.alignment = WD_TABLE_ALIGNMENT.CENTER
    ph_cells = t_perf.rows[0].cells
    ph_cells[0].text = "Domain Arsitektur"
    ph_cells[1].text = "Target Capaian 2026"
    ph_cells[2].text = "Realisasi Kinerja"
    ph_cells[3].text = "Status Kepatuhan"
    for c in ph_cells:
        c.paragraphs[0].runs[0].font.bold = True
        set_cell_background(c, "1F4E79")
        c.paragraphs[0].runs[0].font.color.rgb = RGBColor(255, 255, 255)
    ph_cells[0].width = Inches(2.2)
    ph_cells[1].width = Inches(1.5)
    ph_cells[2].width = Inches(1.5)
    ph_cells[3].width = Inches(1.3)

    perf_data = [
        ("1. Proses Bisnis", "Penyelarasan 100% Probis OPD", "100% Selaras SIA-SPBE", "OPTIMUM (MEMENUHI)"),
        ("2. Data & Informasi", "Portal SDI & Katalog Data Aktif", "92% Data Master Terhubung", "MEMENUHI"),
        ("3. Layanan Digital", "Integrasi Portal Tunggal Pelayanan", "SuperApp 1 Pintu Beroperasi", "OPTIMUM (MEMENUHI)"),
        ("4. Aplikasi", "Moratorium Silo & Microservices API", "52 Aplikasi Terkatalog & Bebas Duplikasi", "MEMENUHI"),
        ("5. Infrastruktur", "Migrasi Server OPD ke Cloud PDN", "100% Server Utama di PDN", "OPTIMUM (MEMENUHI)"),
        ("6. Keamanan", "STR CSIRT BSSN & TTE 100% SK", "CSIRT Terdaftar & TTE Aktif", "OPTIMUM (MEMENUHI)")
    ]
    for idx, (dom, tgt, rls, stt) in enumerate(perf_data, 1):
        r = t_perf.rows[idx]
        r.cells[0].text = dom
        r.cells[1].text = tgt
        r.cells[2].text = rls
        r.cells[3].text = stt
        r.cells[0].paragraphs[0].runs[0].font.bold = True
        r.cells[3].paragraphs[0].runs[0].font.bold = True
        for c in r.cells:
            set_cell_margins(c, 50, 50, 60, 60)
        if idx % 2 == 0:
            for c in r.cells:
                set_cell_background(c, "F9FAFB")

    # Bab III: Analisis Kesenjangan & Arah Kebijakan Baru
    doc.add_heading("III. ANALISIS KESENJANGAN (GAP ANALYSIS) TERHADAP ARAH REGULASI NASIONAL", level=2).runs[0].font.color.rgb = RGBColor(31, 78, 121)

    gaps = [
        ("1. Integrasi Digital ID Nasional (INAGov Portal):", 
         "Peta rencana awal 2024 belum memuat arsitektur Single Sign-On berbasis Identitas Kependudukan Digital (IKD) nasional. "
         "Diperlukan adendum penyesuaian pada Domain Layanan dan Domain Aplikasi agar seluruh portal instansi mendukung otentikasi terpusat GovTech Indonesia."),
        ("2. Penerapan AI Etis & Otomasi Naskah Dinas:", 
         "Dinamika teknologi kecerdasan artifisial (GenAI) memerlukan regulasi turunan berupa Pedoman Etika AI dan Pemanfaatan AI untuk perumusan naskah dinas dan rekapitulasi data sektoral."),
        ("3. Optimalisasi Zero Unencrypted Data:", 
         "Arsitektur keamanan informasi perlu diperkuat dengan kewajiban enkripsi data sensitif baik saat transmisi (TLS 1.3) maupun saat tersimpan di database (AES-256).")
    ]
    for g_title, g_desc in gaps:
        p = doc.add_paragraph()
        p.add_run(g_title + " ").font.bold = True
        p.add_run(g_desc)
        p.paragraph_format.left_indent = Inches(0.2)

    # Bab IV: Matriks Rekomendasi Tindak Lanjut & Adendum Kebijakan
    doc.add_heading("IV. MATRIKS REKOMENDASI TINDAK LANJUT & ADENDUM PETA RENCANA", level=2).runs[0].font.color.rgb = RGBColor(31, 78, 121)

    t_recom = doc.add_table(rows=5, cols=4)
    t_recom.alignment = WD_TABLE_ALIGNMENT.CENTER
    rh_cells = t_recom.rows[0].cells
    rh_cells[0].text = "No"
    rh_cells[1].text = "Temuan Evaluasi Tata Kelola"
    rh_cells[2].text = "Rencana Aksi Perbaikan / Adendum"
    rh_cells[3].text = "Target Waktu & PIC"
    for c in rh_cells:
        c.paragraphs[0].runs[0].font.bold = True
        set_cell_background(c, "1F4E79")
        c.paragraphs[0].runs[0].font.color.rgb = RGBColor(255, 255, 255)
    rh_cells[0].width = Inches(0.5)
    rh_cells[1].width = Inches(2.2)
    rh_cells[2].width = Inches(2.5)
    rh_cells[3].width = Inches(1.5)

    recom_data = [
        ("1", "Masih ada 3 unit kerja yang mengelola database terpisah belum terhubung ke SDI", "Penyusunan API konektor SPLP dan standardisasi metadata SDI", "Triwulan I 2026 (Diskominfo & Bappeda)"),
        ("2", "Kebutuhan adopsi regulasi percepatan layanan digital nasional (Perpres 82/2023)", "Penerbitan Keputusan Kepala Instansi tentang Adendum Peta Rencana 2026-2030", "Maret 2026 (Bagian Hukum & Tim SPBE)"),
        ("3", "Perlunya peningkatan kapasitas talenta arsitek digital OPD", "Penyelenggaraan pelatihan Enterprise Architecture bersertifikasi bagi pejabat TIK", "Semester I 2026 (BKPSDM)"),
        ("4", "Pemutakhiran berkala akun SIA-SPBE pasca penataan SOTK instansi", "Sinkronisasi ulang struktur proses bisnis OPD ke portal SIA-SPBE KemenPANRB", "Triwulan II 2026 (Diskominfo)")
    ]
    for idx, (no, tmn, rnc, pic) in enumerate(recom_data, 1):
        r = t_recom.rows[idx]
        r.cells[0].text = no
        r.cells[1].text = tmn
        r.cells[2].text = rnc
        r.cells[3].text = pic
        r.cells[1].paragraphs[0].runs[0].font.bold = True
        for c in r.cells:
            set_cell_margins(c, 50, 50, 60, 60)
        if idx % 2 == 0:
            for c in r.cells:
                set_cell_background(c, "F9FAFB")

    # Pengesahan Pimpinan
    doc.add_paragraph("\n")
    p_ttd = doc.add_paragraph()
    p_ttd.alignment = WD_ALIGN_PARAGRAPH.RIGHT
    p_ttd.add_run("Disahkan oleh:\nTanggal: 20 Februari 2026\n\n").font.size = Pt(10)
    p_ttd.add_run("KEPALA DAERAH / PIMPINAN INSTANSI,\n\n\n\n").font.bold = True
    p_ttd.add_run("[NAMA LENGKAP KEPALA DAERAH / INSTANSI]\n").font.bold = True
    p_ttd.add_run("(Telah ditandatangani secara elektronik)")

    for out_path in [os.path.join(OUTPUT_DIR, "Template_Laporan_Evaluasi_Berkala_dan_Reviu_Tata_Kelola_Indikator01.docx"),
                     os.path.join(PUBLIC_DIR, "Template_Laporan_Evaluasi_Berkala_dan_Reviu_Tata_Kelola_Indikator01.docx")]:
        doc.save(out_path)
    print(f"[OK] Laporan Evaluasi Tata Kelola docx created: {out_path}")

if __name__ == '__main__':
    print("=== MEMULAI GENERASI 4 TEMPLATE RESMI INDIKATOR 01 (TATA KELOLA PEMDI) ===")
    create_peraturan_arsitektur_docx(None)
    create_buku_induk_6_domain_docx(None)
    create_matriks_penyelarasan_xlsx(None)
    create_laporan_evaluasi_tata_kelola_docx(None)
    print("=== SELESAI! SELURUH 4 BERKAS INDIKATOR 01 BERHASIL DIBUAT DENGAN SEMPURNA ===")
