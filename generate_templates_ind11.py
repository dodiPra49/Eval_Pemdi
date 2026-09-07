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

OUTPUT_DIR = r"d:\DODI AGUSRI.S.KOM\2026 2026 2026\FELLOW DEVELOPER\React.JS\EVAL_PEMDI\template_bukti_dukung\INDIKATOR_11_KEPEGAWAIAN"
PUBLIC_DIR = r"d:\DODI AGUSRI.S.KOM\2026 2026 2026\FELLOW DEVELOPER\React.JS\EVAL_PEMDI\public\templates\ind_11"

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
# 1. TEMPLATE SOP LAYANAN KEPEGAWAIAN ELEKTRONIK (DOCX)
# =========================================================================
def create_sop_kepegawaian_docx(filepath):
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
    r2 = header_p.add_run("BADAN KEPEGAWAIAN DAN PENGEMBANGAN SUMBER DAYA MANUSIA (BKPSDM)\n")
    r2.font.bold = True
    r2.font.size = Pt(13)
    r3 = header_p.add_run("Jalan Praja Mukti No. 10, Telp: (021) 7654321, Email: bkpsdm@daerah.go.id\n")
    r3.font.size = Pt(9)
    r3.font.color.rgb = RGBColor(100, 100, 100)

    p_line = doc.add_paragraph()
    p_line.alignment = WD_ALIGN_PARAGRAPH.CENTER
    p_line.add_run("=" * 65).font.bold = True

    # Judul SOP
    title = doc.add_heading(level=1)
    title.alignment = WD_ALIGN_PARAGRAPH.CENTER
    trun = title.add_run("STANDAR OPERASIONAL PROSEDUR (SOP)\nPELAYANAN ADMINISTRASI KEPEGAWAIAN BERBASIS ELEKTRONIK (SIMPEG TERPADU)")
    trun.font.size = Pt(14)
    trun.font.bold = True
    trun.font.color.rgb = RGBColor(31, 78, 121)

    # Tabel Metadata SOP
    t_id = doc.add_table(rows=5, cols=2)
    t_id.alignment = WD_TABLE_ALIGNMENT.CENTER
    meta = [
        ("Nomor Dokumen", "SOP-BKPSDM-LAYANAN-11/2026"),
        ("Tanggal Berlaku", "02 Januari 2026"),
        ("Dasar Hukum", "1. UU No. 20/2023 tentang Aparatur Sipil Negara\n2. PermenPANRB No. 8/2026 tentang Evaluasi Pemerintahan Digital (Indikator 11)\n3. Peraturan BKN No. 2/2023 tentang Pelayanan Kepegawaian Digital melalui SIASN"),
        ("Ruang Lingkup", "Layanan Cuti Online, Presensi Mobile Geotagging, Kenaikan Gaji Berkala (KGB), dan e-Kinerja ASN"),
        ("Penyusun & Penanggung Jawab", "Kepala BKPSDM bersama Tim Teknis Pengelola SIMPEG Instansi")
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
        set_cell_margins(c0, 70, 70, 90, 90)
        set_cell_margins(c1, 70, 70, 90, 90)

    doc.add_paragraph("\n")

    # Bab I: Tujuan & Prinsip
    doc.add_heading("I. TUJUAN DAN PRINSIP PELAYANAN", level=2).runs[0].font.color.rgb = RGBColor(31, 78, 121)
    p_tujuan = doc.add_paragraph()
    p_tujuan.add_run("1. Tujuan:\n").font.bold = True
    p_tujuan.add_run(
        "Menjadi acuan baku bagi seluruh ASN dan pejabat penilai kinerja dalam memproses layanan cuti tahunan/sakit/melahirkan, "
        "presensi mobile GPS/Face recognition, pengusulan Kenaikan Gaji Berkala otomatis, hingga integrasi data penilaian SKP secara terpusat, "
        "tanpa memerlukan pemberkasan dokumen fisik (100% paperless).\n\n"
    )
    p_tujuan.add_run("2. Prinsip Layanan:\n").font.bold = True
    p_tujuan.add_run("Cepat, transparan, terintegrasi satu pintu dengan Single Sign-On (SSO) ASN, dan terhubung real-time ke SIASN BKN.")

    # Bab II: Alur Prosedur Pelayanan (Workflow)
    doc.add_heading("II. PROSEDUR PELAYANAN PER MODUL SIMPEG", level=2).runs[0].font.color.rgb = RGBColor(31, 78, 121)

    steps = [
        ("1. Layanan Cuti Online", "ASN mengajukan permohonan melalui modul e-Cuti SIMPEG -> Notifikasi masuk ke atasan langsung -> Verifikasi dan persetujuan digital via smartphone -> Surat Izin Cuti bertanda tangan TTE terbit otomatis dan tersimpan di database."),
        ("2. Presensi Geotagging & Biometrik", "ASN melakukan presensi masuk/pulang dalam radius geofencing kantor yang telah dikunci koordinatnya -> Validasi swafoto (Face recognition anti-spoofing) -> Data langsung teragregasi otomatis ke tunjangan kinerja bulanan."),
        ("3. Kenaikan Gaji Berkala (KGB) Otomatis", "Sistem melakukan scanning otomatis masa kerja golongan ASN H-3 bulan sebelum jatuh tempo -> Notifikasi verifikasi terkirim ke Subbag Kepegawaian OPD -> Penerbitan Surat Pemberitahuan KGB dengan TTE Kepala BKPSDM."),
        ("4. Pelaporan e-Kinerja & SKP", "ASN menginput bukti dukung realisasi rencana aksi harian/bulanan -> Dialog kinerja triwulanan dengan pimpinan -> Sinkronisasi nilai predikat kinerja tahunan secara otomatis ke database BKN.")
    ]

    t_flow = doc.add_table(rows=len(steps)+1, cols=3)
    t_flow.alignment = WD_TABLE_ALIGNMENT.CENTER
    h_cells = t_flow.rows[0].cells
    h_cells[0].text = "No"
    h_cells[1].text = "Modul Layanan"
    h_cells[2].text = "Alur Pemrosesan Elektronik & Output"
    for c in h_cells:
        c.paragraphs[0].runs[0].font.bold = True
        set_cell_background(c, "1F4E79")
        c.paragraphs[0].runs[0].font.color.rgb = RGBColor(255, 255, 255)

    h_cells[0].width = Inches(0.6)
    h_cells[1].width = Inches(2.2)
    h_cells[2].width = Inches(3.7)

    for idx, (modul, flow) in enumerate(steps, start=1):
        r = t_flow.rows[idx]
        r.cells[0].text = str(idx)
        r.cells[1].text = modul
        r.cells[2].text = flow
        r.cells[1].paragraphs[0].runs[0].font.bold = True
        for c in r.cells:
            set_cell_margins(c, 60, 60, 80, 80)
        if idx % 2 == 0:
            for c in r.cells:
                set_cell_background(c, "F9FAFB")

    doc.add_paragraph("\n")

    # Bab III: SLA Layanan
    doc.add_heading("III. STANDAR WAKTU PENYELESAIAN (SLA)", level=2).runs[0].font.color.rgb = RGBColor(31, 78, 121)
    p_sla = doc.add_paragraph()
    p_sla.add_run("• Penerbitan Izin Cuti Tahunan: Maksimal 1 hari kerja setelah disetujui atasan.\n")
    p_sla.add_run("• Pemrosesan KGB Otomatis: H-15 hari kalender sebelum TMT berlaku.\n")
    p_sla.add_run("• Sinkronisasi Data Riwayat ke SIASN BKN: Dilakukan otomatis setiap malam (daily batch sync) via API.")

    # Kolom Pengesahan
    doc.add_paragraph("\n")
    p_sign = doc.add_paragraph()
    p_sign.alignment = WD_ALIGN_PARAGRAPH.RIGHT
    p_sign.add_run("Ditetapkan di: [Nama Kota/Kabupaten]\nPada tanggal: 02 Januari 2026\n\n")
    p_sign.add_run("KEPALA BADAN KEPEGAWAIAN DAN PENGEMBANGAN SDM,\n\n\n\n")
    r_name = p_sign.add_run("[NAMA LENGKAP KEPALA BKPSDM, GELAR]\n")
    r_name.font.bold = True
    r_name.font.underline = True
    p_sign.add_run("Pembina Utama Muda (IV/c)\nNIP. 19760415 200003 1 004\n")

    doc.save(filepath)
    print(f"[OK] SOP Kepegawaian docx created: {filepath}")

# =========================================================================
# 2. TEMPLATE BERITA ACARA INTEGRASI SIMPEG DENGAN SIASN BKN (DOCX)
# =========================================================================
def create_ba_integrasi_siasn_docx(filepath):
    doc = Document()
    for s in doc.sections:
        s.top_margin = Inches(1)
        s.bottom_margin = Inches(1)
        s.left_margin = Inches(1)
        s.right_margin = Inches(1)

    p_head = doc.add_paragraph()
    p_head.alignment = WD_ALIGN_PARAGRAPH.CENTER
    r = p_head.add_run("BERITA ACARA PENGUJIAN DAN INTEGRASI SISTEM (INTEGRATION SIGN-OFF)\nPENYELARASAN API SIMPEG DAERAH DENGAN SISTEM INFORMASI ASN (SIASN)\nBADAN KEPEGAWAIAN NEGARA (BKN)\n")
    r.font.bold = True
    r.font.size = Pt(13)
    r.font.color.rgb = RGBColor(31, 78, 121)

    p_no = doc.add_paragraph()
    p_no.alignment = WD_ALIGN_PARAGRAPH.CENTER
    p_no.add_run("NOMOR: 800.1/BA-045/BKPSDM-BKN/2026\n\n").font.size = Pt(10)

    p_body = doc.add_paragraph()
    p_body.paragraph_format.line_spacing = 1.15
    p_body.add_run("Pada hari ini, Jumat tanggal Dua Puluh bulan Maret tahun Dua Ribu Dua Puluh Enam (20-03-2026), bertempat di Kantor Regional BKN / secara daring melalui sesi interkoneksi secure gateway, telah dilaksanakan uji kelayakan integrasi sistem antara:\n\n")

    p_pihak1 = doc.add_paragraph()
    p_pihak1.add_run("1. TIM TEKNIS PENGELOLA SIMPEG INSTANSI, ").font.bold = True
    p_pihak1.add_run("dalam hal ini diwakili oleh Kepala Bidang Sistem Informasi Kepegawaian BKPSDM bersama Tim IT Diskominfo [Nama Daerah], selanjutnya disebut ")
    p_pihak1.add_run("PIHAK PERTAMA.\n\n").font.bold = True

    p_pihak2 = doc.add_paragraph()
    p_pihak2.add_run("2. TIM TEKNIS PUSAT PENGEMBANGAN SISTEM INFORMASI ASN (PPSI ASN) BKN, ").font.bold = True
    p_pihak2.add_run("selanjutnya disebut ")
    p_pihak2.add_run("PIHAK KEDUA.\n\n").font.bold = True

    doc.add_heading("HASIL PENGUJIAN DAN STATUS KETERHUBUNGAN WEB SERVICE", level=2).runs[0].font.color.rgb = RGBColor(31, 78, 121)
    
    t_test = doc.add_table(rows=6, cols=4)
    t_test.alignment = WD_TABLE_ALIGNMENT.CENTER
    hdrs = ["No", "Endpoint Layanan SIASN", "Fungsi Integrasi Data", "Hasil Uji UAT"]
    for i, h in enumerate(hdrs):
        t_test.rows[0].cells[i].text = h
        t_test.rows[0].cells[i].paragraphs[0].runs[0].font.bold = True
        set_cell_background(t_test.rows[0].cells[i], "1F4E79")
        t_test.rows[0].cells[i].paragraphs[0].runs[0].font.color.rgb = RGBColor(255, 255, 255)

    hdrs[0] = "0.5 in"

    test_items = [
        ("1", "/api/v1/pns/data-utama", "Tarik & Sinkronisasi Biodata PNS dan CPNS", "100% Valid (HTTP 200)"),
        ("2", "/api/v1/kp/usulan-pangkat", "Kirim Berkas Usulan Kenaikan Pangkat Digital", "100% Valid (Pertek Terbit)"),
        ("3", "/api/v1/pensiun/usul-pensiun", "Push Data Penetapan Pensiun Otomatis", "100% Valid (SK Terbit)"),
        ("4", "/api/v1/kinerja/skp-tahunan", "Push Predikat Penilaian Kinerja Tahunan", "100% Valid (Tersinkronisasi)"),
        ("5", "/api/v1/sso/myasn-auth", "Autentikasi Terpadu Single Sign-On ASN", "100% Valid (OAuth 2.0)")
    ]

    for idx, (no, ep, fungsi, status) in enumerate(test_items, start=1):
        r = t_test.rows[idx]
        r.cells[0].text = no
        r.cells[1].text = ep
        r.cells[2].text = fungsi
        r.cells[3].text = status
        r.cells[3].paragraphs[0].runs[0].font.bold = True
        for c in r.cells:
            set_cell_margins(c, 60, 60, 80, 80)
        if idx % 2 == 0:
            for c in r.cells:
                set_cell_background(c, "F9FAFB")

    doc.add_paragraph("\n")
    p_kesimpulan = doc.add_paragraph()
    p_kesimpulan.add_run("KESIMPULAN:\n").font.bold = True
    p_kesimpulan.add_run(
        "Berdasarkan pengujian teknis yang telah dilakukan, sistem SIMPEG [Nama Daerah] dinyatakan telah terhubung secara penuh (Terpadu / Level 4) "
        "dengan SIASN BKN melalui arsitektur API web service dua arah. Layanan siap dioperasionalkan secara penuh untuk mendukung pemenuhan Indikator 11 "
        "PermenPANRB Nomor 8 Tahun 2026."
    )

    doc.add_paragraph("\n")
    tbl_sign = doc.add_table(rows=2, cols=2)
    tbl_sign.alignment = WD_TABLE_ALIGNMENT.CENTER
    tbl_sign.rows[0].cells[0].width = Inches(3.2)
    tbl_sign.rows[0].cells[1].width = Inches(3.2)
    tbl_sign.rows[0].cells[0].text = "PIHAK PERTAMA,\nKOORDINATOR TEKNIS SIMPEG DAERAH\n\n\n\n( [NAMA KABID SISTEM INFORMASI] )\nNIP. 19820311 200604 1 008"
    tbl_sign.rows[0].cells[1].text = "PIHAK KEDUA,\nPERWAKILAN TIM TEKNIS PPSI ASN BKN\n\n\n\n( [NAMA ANGGOTA TIM TEKNIS BKN] )\nNIP. 19850720 200812 1 001"

    doc.save(filepath)
    print(f"[OK] BA Integrasi SIASN docx created: {filepath}")

# =========================================================================
# 3. TEMPLATE LAPORAN EVALUASI LAYANAN & TALENT MANAGEMENT (DOCX)
# =========================================================================
def create_eval_talenta_docx(filepath):
    doc = Document()
    for s in doc.sections:
        s.top_margin = Inches(1)
        s.bottom_margin = Inches(1)
        s.left_margin = Inches(1)
        s.right_margin = Inches(1)

    p_head = doc.add_paragraph()
    p_head.alignment = WD_ALIGN_PARAGRAPH.CENTER
    r = p_head.add_run("LAPORAN EVALUASI PEMANFAATAN LAYANAN KEPEGAWAIAN ELEKTRONIK\nDAN PENERAPAN MANAJEMEN TALENTA ASN (NINE-BOX MATRIX)\nTAHUN 2026\n")
    r.font.bold = True
    r.font.size = Pt(13)
    r.font.color.rgb = RGBColor(31, 78, 121)

    p_sub = doc.add_paragraph()
    p_sub.alignment = WD_ALIGN_PARAGRAPH.CENTER
    p_sub.add_run("Bukti Evaluasi Indikator 11 PermenPANRB No. 8/2026 - Tingkat Kematangan Optimum (Level 5)\n").font.italic = True

    doc.add_heading("1. PENDAHULUAN & CAKUPAN PENGGUNA", level=2).runs[0].font.color.rgb = RGBColor(31, 78, 121)
    doc.add_paragraph(
        "Laporan ini menyajikan evaluasi komprehensif implementasi SIMPEG Terpadu yang mencakup 4.820 ASN di 35 Perangkat Daerah. "
        "Pada tahun 2026, instansi telah bertransformasi menuju implementasi Sistem Merit Berkelanjutan dengan memanfaatkan analitik data terpadu "
        "dan penerapan Manajemen Talenta ASN berbasis Nine-Box Talent Matrix."
    )

    doc.add_heading("2. METRIK EVALUASI DAN SURVEI KEPUASAN ASN", level=2).runs[0].font.color.rgb = RGBColor(31, 78, 121)
    
    t_stat = doc.add_table(rows=6, cols=3)
    t_stat.alignment = WD_TABLE_ALIGNMENT.CENTER
    heads = ["Indikator Evaluasi", "Target Kinerja", "Capaian Realisasi 2026"]
    for i, h in enumerate(heads):
        t_stat.rows[0].cells[i].text = h
        t_stat.rows[0].cells[i].paragraphs[0].runs[0].font.bold = True
        set_cell_background(t_stat.rows[0].cells[i], "1F4E79")
        t_stat.rows[0].cells[i].paragraphs[0].runs[0].font.color.rgb = RGBColor(255, 255, 255)

    stats = [
        ("Indeks Kepuasan Layanan Kepegawaian (IKL)", "Minimal 3.25 (Skala 4.00)", "3.82 (Kategori Sangat Memuaskan)"),
        ("Tingkat Paperless Dokumen Kepegawaian", "100% Bebas Kertas Fisik", "100% Seluruh Layanan Berbasis TTE"),
        ("Rata-rata Waktu Proses Cuti Online", "< 4 Jam Kerja", "1.5 Jam Kerja"),
        ("Akurasi Pemetaan Talenta Otomatis", "> 90% Terintegrasi e-Kinerja", "96.4% Terpetakan di Kuadran 9-Box"),
        ("Integrasi API Dua Arah ke SIASN BKN", "Real-Time / Harian", "Aktif Berjalan (Zero Discrepancy)")
    ]

    for idx, (ind, trg, real) in enumerate(stats, start=1):
        r = t_stat.rows[idx]
        r.cells[0].text = ind
        r.cells[1].text = trg
        r.cells[2].text = real
        for c in r.cells:
            set_cell_margins(c, 60, 60, 80, 80)
        if idx % 2 == 0:
            for c in r.cells:
                set_cell_background(c, "F9FAFB")

    doc.add_paragraph("\n")

    doc.add_heading("3. PENERAPAN MANAJEMEN TALENTA BERBASIS AI & PREDICTIVE ANALYTICS", level=2).runs[0].font.color.rgb = RGBColor(31, 78, 121)
    doc.add_paragraph(
        "1. Pemetaan Otomatis Kuadran 9-Box:\n"
        "   SIMPEG secara otomatis mengombinasikan data capaian e-Kinerja tahunan (Sumbu Y) dengan hasil asesmen kompetensi manajerial & sosio-kultural (Sumbu X). "
        "Sebanyak 184 ASN terpilih masuk ke dalam Kuadran 9 (Top Talent - Kinerja Tinggi & Potensi Tinggi) sebagai Talent Pool suksesi jabatan pimpinan tinggi dan administrator.\n\n"
        "2. Rekomendasi Diklat Berbasis Kesenjangan Kompetensi:\n"
        "   Sistem memberikan rekomendasi pelatihan otomatis bagi ASN yang berada pada Kuadran 1 s.d. 3 guna akselerasi peningkatan kapabilitas."
    )

    doc.add_heading("4. REKOMENDASI TINDAK LANJUT BERKELANJUTAN", level=2).runs[0].font.color.rgb = RGBColor(31, 78, 121)
    doc.add_paragraph(
        "1. Memperluas integrasi modul talent pool dengan SIASN Manajemen Talenta Nasional.\n"
        "2. Menambahkan fitur konseling karier virtual berbasis kecerdasan buatan di aplikasi mobile ASN.\n"
        "3. Melakukan audit periodik terhadap kerahasiaan rekam jejak medis dan data pribadi ASN."
    )

    doc.save(filepath)
    print(f"[OK] Eval Talenta docx created: {filepath}")

# =========================================================================
# 4. TEMPLATE REKAPITULASI TRANSAKSI LAYANAN KEPEGAWAIAN SIASN (XLSX)
# =========================================================================
def create_rekap_kepegawaian_xlsx(filepath):
    wb = openpyxl.Workbook()
    
    # Sheet 1: Dashboard Rekap
    ws_dash = wb.active
    ws_dash.title = "Dashboard_Rekap_Layanan"

    header_font = Font(name='Calibri', size=11, bold=True, color='FFFFFF')
    fill_blue = PatternFill(start_color='1F4E79', end_color='1F4E79', fill_type='solid')
    border_thin = Border(
        left=Side(style='thin', color='D9D9D9'), right=Side(style='thin', color='D9D9D9'),
        top=Side(style='thin', color='D9D9D9'), bottom=Side(style='thin', color='D9D9D9')
    )

    title_cell = ws_dash.cell(row=1, column=1, value="REKAPITULASI TRANSAKSI PELAYANAN KEPEGAWAIAN ELEKTRONIK TAHUN 2026")
    title_cell.font = Font(name='Calibri', size=14, bold=True, color='1F4E79')
    ws_dash.cell(row=2, column=1, value="Bukti Evaluasi Indikator 11 PermenPANRB No. 8/2026 (Level 3 & Level 4)").font = Font(name='Calibri', size=10, italic=True, color='595959')

    dash_headers = ["No", "Jenis Layanan Kepegawaian", "Total Pengajuan Daring", "Disetujui & Terbit SK/Izin", "Ditolak / Perbaikan", "Tingkat Penyelesaian (%)", "Keterangan Integrasi"]
    for col_idx, h in enumerate(dash_headers, 1):
        c = ws_dash.cell(row=4, column=col_idx, value=h)
        c.font = header_font
        c.fill = fill_blue
        c.alignment = Alignment(horizontal='center', vertical='center')
        c.border = border_thin
    ws_dash.row_dimensions[4].height = 28

    dash_data = [
        (1, "Layanan Permohonan Cuti Online (Tahunan/Sakit/Melahirkan)", 1845, 1820, 25, "98.6%", "Modul Internal SIMPEG (TTE Sah)"),
        (2, "Layanan Kenaikan Gaji Berkala (KGB) Otomatis", 940, 938, 2, "99.8%", "Terintegrasi Sistem Penggajian BPKAD"),
        (3, "Layanan Usulan Kenaikan Pangkat (KP) Reguler & Pilihan", 420, 415, 5, "98.8%", "Sinkronisasi Dua Arah API SIASN BKN"),
        (4, "Layanan Usulan Penetapan Pensiun Otomatis", 115, 115, 0, "100.0%", "Terintegrasi Layanan Pensiun BKN"),
        (5, "Layanan Mutasi / Pindah Instansi Masuk & Keluar", 68, 65, 3, "95.6%", "Sinkronisasi Pertimbangan Teknis BKN"),
        (6, "Pelaporan Penilaian e-Kinerja (SKP) Triwulanan/Tahunan", 4820, 4812, 8, "99.8%", "Push Predikat Kinerja ke MyASN BKN")
    ]

    for r_idx, item in enumerate(dash_data, 5):
        ws_dash.row_dimensions[r_idx].height = 22
        fill = PatternFill(start_color='F2F4F7' if r_idx % 2 == 0 else 'FFFFFF', end_color='F2F4F7' if r_idx % 2 == 0 else 'FFFFFF', fill_type='solid')
        for c_idx, val in enumerate(item, 1):
            c = ws_dash.cell(row=r_idx, column=c_idx, value=val)
            c.border = border_thin
            c.fill = fill
            c.font = Font(name='Calibri', size=10)
            if c_idx in [1, 3, 4, 5, 6]:
                c.alignment = Alignment(horizontal='center', vertical='center')
            else:
                c.alignment = Alignment(vertical='center')

    # Sheet 2: Log Sinkronisasi Detail dengan SIASN BKN
    ws_log = wb.create_sheet(title="Log_Sinkronisasi_SIASN_BKN")
    ws_log.cell(row=1, column=1, value="LOG TRANSAKSI SINKRONISASI API DUA ARAH SIMPEG KE SIASN BKN").font = Font(name='Calibri', size=13, bold=True, color='1F4E79')
    
    log_headers = [
        "No Transaksi", "Timestamp Sinkron", "NIP Pegawai", "Nama ASN", 
        "Unit Kerja / OPD", "Layanan yang Diproses", "Status API SIASN", "No. Pertek / SK BKN", "Status Sinkronisasi"
    ]
    for col_idx, h in enumerate(log_headers, 1):
        c = ws_log.cell(row=3, column=col_idx, value=h)
        c.font = header_font
        c.fill = PatternFill(start_color='2E75B6', end_color='2E75B6', fill_type='solid')
        c.alignment = Alignment(horizontal='center', vertical='center')
        c.border = border_thin

    sample_logs = [
        ("LOG-BKN-2026-001", "2026-02-15 09:12:04", "198503142008011003", "Ahmad Fauzi, S.Kom", "Dinas Kominfo", "Kenaikan Pangkat III/d ke IV/a", "HTTP 200 (Success)", "SK-KP/BKN/2026/0412", "Tersinkronisasi Penuh"),
        ("LOG-BKN-2026-002", "2026-02-15 09:14:22", "199011022014022005", "Siti Rahmawati, S.E.", "Bappeda", "Kenaikan Pangkat III/b ke III/c", "HTTP 200 (Success)", "SK-KP/BKN/2026/0413", "Tersinkronisasi Penuh"),
        ("LOG-BKN-2026-003", "2026-02-15 09:20:11", "196805121994031002", "Drs. Hendra Wijaya, M.Si.", "BKPSDM", "Penetapan Pensiun BUP", "HTTP 200 (Success)", "SK-PEN/BKN/2026/0089", "Tersinkronisasi Penuh"),
        ("LOG-BKN-2026-004", "2026-02-15 09:25:40", "199508212019031004", "Budi Santoso, S.T.", "Dinas PUPR", "Pencatatan Gelar Pendidikan", "HTTP 200 (Success)", "PERTEK-GL/BKN/2026/0231", "Tersinkronisasi Penuh"),
        ("LOG-BKN-2026-005", "2026-02-15 09:30:15", "198812042011012009", "Dewi Lestari, S.Kep", "Dinas Kesehatan", "Update Data Jabatan Fungsional", "HTTP 200 (Success)", "VAL-JAB/BKN/2026/0781", "Tersinkronisasi Penuh")
    ]

    for r_idx, item in enumerate(sample_logs, 4):
        fill = PatternFill(start_color='F2F4F7' if r_idx % 2 == 0 else 'FFFFFF', end_color='F2F4F7' if r_idx % 2 == 0 else 'FFFFFF', fill_type='solid')
        for c_idx, val in enumerate(item, 1):
            c = ws_log.cell(row=r_idx, column=c_idx, value=val)
            c.border = border_thin
            c.fill = fill
            c.font = Font(name='Calibri', size=10)
            if c_idx in [1, 2, 3, 7, 8, 9]:
                c.alignment = Alignment(horizontal='center', vertical='center')
                if c_idx == 7:
                    c.font = Font(name='Calibri', size=10, bold=True, color='1E4620')
            else:
                c.alignment = Alignment(vertical='center')

    for s in [ws_dash, ws_log]:
        for col in s.columns:
            max_len = max(len(str(cell.value or '')) for cell in col)
            col_letter = get_column_letter(col[0].column)
            s.column_dimensions[col_letter].width = max(max_len + 3, 14)

    wb.save(filepath)
    print(f"[OK] Rekap Kepegawaian xlsx created: {filepath}")

# =========================================================================
# 5. TEMPLATE PEMETAAN MANAJEMEN TALENTA 9-BOX (XLSX)
# =========================================================================
def create_nine_box_xlsx(filepath):
    wb = openpyxl.Workbook()
    
    # Sheet 1: Matriks 9-Box
    ws_mat = wb.active
    ws_mat.title = "Matriks_9_Box_Talenta"

    header_font = Font(name='Calibri', size=11, bold=True, color='FFFFFF')
    border_thin = Border(
        left=Side(style='thin', color='D9D9D9'), right=Side(style='thin', color='D9D9D9'),
        top=Side(style='thin', color='D9D9D9'), bottom=Side(style='thin', color='D9D9D9')
    )

    ws_mat.cell(row=1, column=1, value="MATRIKS MANAJEMEN TALENTA ASN (NINE-BOX TALENT MATRIX)").font = Font(name='Calibri', size=14, bold=True, color='7030A0')
    ws_mat.cell(row=2, column=1, value="Berdasarkan Penilaian SKP e-Kinerja (Sumbu Y) dan Uji Asesmen Potensi/Kompetensi (Sumbu X) - Evaluasi Level 5").font = Font(name='Calibri', size=10, italic=True, color='595959')

    # Header Sumbu X (Potensi)
    ws_mat.cell(row=4, column=2, value="Potensi Rendah (< 65)").font = header_font
    ws_mat.cell(row=4, column=2).fill = PatternFill(start_color='7030A0', end_color='7030A0', fill_type='solid')
    ws_mat.cell(row=4, column=2).alignment = Alignment(horizontal='center', vertical='center')

    ws_mat.cell(row=4, column=3, value="Potensi Sedang (65 - 80)").font = header_font
    ws_mat.cell(row=4, column=3).fill = PatternFill(start_color='7030A0', end_color='7030A0', fill_type='solid')
    ws_mat.cell(row=4, column=3).alignment = Alignment(horizontal='center', vertical='center')

    ws_mat.cell(row=4, column=4, value="Potensi Tinggi (> 80)").font = header_font
    ws_mat.cell(row=4, column=4).fill = PatternFill(start_color='7030A0', end_color='7030A0', fill_type='solid')
    ws_mat.cell(row=4, column=4).alignment = Alignment(horizontal='center', vertical='center')

    # Grid 9 Box
    boxes = [
        # Baris 5: Kinerja Di Atas Ekspektasi
        ("Kinerja Di Atas Ekspektasi (> 100)", [
            ("KOTAK 7: EXPERT", "48 ASN (10%)", "Pertahankan performa teknis & berikan penghargaan spesialis", "FFF2CC"),
            ("KOTAK 8: HIGH PERFORMER", "85 ASN (18%)", "Siapkan untuk promosi horizontal & pengayaan tugas", "D9E1F2"),
            ("KOTAK 9: TOP TALENT (STAR)", "51 ASN (11%)", "Kandidat prioritas suksesi pimpinan tinggi (Talent Pool)", "E2EFDA")
        ]),
        # Baris 6: Kinerja Sesuai Ekspektasi
        ("Kinerja Sesuai Ekspektasi (90 - 100)", [
            ("KOTAK 4: SOLID WORKER", "112 ASN (23%)", "Diberikan pembinaan motivasi & monitoring kinerja berkala", "FFF2CC"),
            ("KOTAK 5: CORE CONTRIBUTOR", "135 ASN (28%)", "Diberikan pelatihan manajerial lanjutan", "D9E1F2"),
            ("KOTAK 6: HIGH POTENTIAL", "32 ASN (7%)", "Tingkatkan tantangan kerja & penugasan strategis", "E2EFDA")
        ]),
        # Baris 7: Kinerja Di Bawah Ekspektasi
        ("Kinerja Di Bawah Ekspektasi (< 90)", [
            ("KOTAK 1: UNDER PERFORMER", "6 ASN (1%)", "Konseling kinerja, evaluasi kesesuaian penempatan jabatan", "FCE4D6"),
            ("KOTAK 2: INCONSISTENT", "9 ASN (2%)", "Bimbingan teknis intensif & monitoring capaian mingguan", "FFF2CC"),
            ("KOTAK 3: ENIGMA / DIAMOND", "4 ASN (1%)", "Investigasi faktor penghambat kinerja riil", "D9E1F2")
        ])
    ]

    current_row = 5
    for label_y, row_boxes in boxes:
        ws_mat.row_dimensions[current_row].height = 65
        c_y = ws_mat.cell(row=current_row, column=1, value=label_y)
        c_y.font = Font(name='Calibri', size=10, bold=True, color='FFFFFF')
        c_y.fill = PatternFill(start_color='595959', end_color='595959', fill_type='solid')
        c_y.alignment = Alignment(horizontal='center', vertical='center', wrap_text=True)
        c_y.border = border_thin

        for col_idx, (b_title, b_count, b_recom, b_color) in enumerate(row_boxes, 2):
            cell = ws_mat.cell(row=current_row, column=col_idx)
            cell.value = f"{b_title}\nJumlah: {b_count}\nRekomendasi: {b_recom}"
            cell.font = Font(name='Calibri', size=9)
            cell.fill = PatternFill(start_color=b_color, end_color=b_color, fill_type='solid')
            cell.alignment = Alignment(horizontal='left', vertical='center', wrap_text=True)
            cell.border = border_thin

        current_row += 1

    # Sheet 2: Data Riil Nominasi Pegawai di Talent Pool
    ws_nom = wb.create_sheet(title="Nominasi_Talent_Pool_Kuadran_9")
    ws_nom.cell(row=1, column=1, value="DAFTAR NOMINASI PEGAWAI KATEGORI TOP TALENT (KUADRAN 9) - SIAP PROMOSI").font = Font(name='Calibri', size=13, bold=True, color='7030A0')

    nom_headers = ["No", "NIP", "Nama Lengkap & Gelar", "Jabatan Saat Ini", "Perangkat Daerah", "Skor SKP e-Kinerja", "Skor Asesmen Potensi", "Kuadran", "Rekomendasi Suksesi"]
    for col_idx, h in enumerate(nom_headers, 1):
        c = ws_nom.cell(row=3, column=col_idx, value=h)
        c.font = header_font
        c.fill = PatternFill(start_color='7030A0', end_color='7030A0', fill_type='solid')
        c.alignment = Alignment(horizontal='center', vertical='center')
        c.border = border_thin

    sample_stars = [
        (1, "198305102008011005", "Dr. Irwan Setiawan, M.T.", "Kepala Bidang Infrastruktur TIK", "Dinas Kominfo", "108.5 (Sangat Baik)", "92.4 (Tinggi)", "Kuadran 9", "Promosi Jabatan Pimpinan Tinggi Pratama"),
        (2, "198704222010012011", "Rina Kartika, S.STP, M.AP", "Sekretaris Camat", "Kecamatan Kota Baru", "106.0 (Sangat Baik)", "88.7 (Tinggi)", "Kuadran 9", "Promosi Camat / Kepala Bagian"),
        (3, "198902142012021003", "Bambang Prakoso, S.E., M.Ec.", "Pranata Perencana Ahli Muda", "Bappeda", "104.2 (Sangat Baik)", "86.0 (Tinggi)", "Kuadran 9", "Kandidat Kepala Bidang Perencanaan"),
        (4, "199107182015032002", "dr. Maya Anggraini, Sp.A", "Dokter Ahli Madya", "RSUD Daerah", "107.0 (Sangat Baik)", "90.1 (Tinggi)", "Kuadran 9", "Promosi Wakil Direktur Pelayanan Medik")
    ]

    for r_idx, item in enumerate(sample_stars, 4):
        fill = PatternFill(start_color='F2E8F8' if r_idx % 2 == 0 else 'FFFFFF', end_color='F2E8F8' if r_idx % 2 == 0 else 'FFFFFF', fill_type='solid')
        for c_idx, val in enumerate(item, 1):
            c = ws_nom.cell(row=r_idx, column=c_idx, value=val)
            c.border = border_thin
            c.fill = fill
            c.font = Font(name='Calibri', size=10)
            if c_idx in [1, 2, 6, 7, 8]:
                c.alignment = Alignment(horizontal='center', vertical='center')
                if c_idx == 8:
                    c.font = Font(name='Calibri', size=10, bold=True, color='385723')
            else:
                c.alignment = Alignment(vertical='center')

    for s in [ws_mat, ws_nom]:
        for col in s.columns:
            max_len = max(len(str(cell.value or '')) for cell in col)
            col_letter = get_column_letter(col[0].column)
            s.column_dimensions[col_letter].width = max(max_len + 4, 15)
    
    ws_mat.column_dimensions['A'].width = 25
    ws_mat.column_dimensions['B'].width = 32
    ws_mat.column_dimensions['C'].width = 32
    ws_mat.column_dimensions['D'].width = 32

    wb.save(filepath)
    print(f"[OK] Nine-Box xlsx created: {filepath}")

# Execute generation
create_sop_kepegawaian_docx(os.path.join(OUTPUT_DIR, "Template_SOP_Layanan_Kepegawaian_Elektronik_Indikator11.docx"))
create_ba_integrasi_siasn_docx(os.path.join(OUTPUT_DIR, "Template_BA_Integrasi_SIMPEG_SIASN_BKN_Indikator11.docx"))
create_eval_talenta_docx(os.path.join(OUTPUT_DIR, "Template_Laporan_Evaluasi_Talenta_ASN_Indikator11.docx"))
create_rekap_kepegawaian_xlsx(os.path.join(OUTPUT_DIR, "Template_Rekapitulasi_Layanan_Kepegawaian_SIASN_Indikator11.xlsx"))
create_nine_box_xlsx(os.path.join(OUTPUT_DIR, "Template_Pemetaan_Manajemen_Talenta_NineBox_Indikator11.xlsx"))

# Also copy to public/templates/ind_11 for browser direct download
create_sop_kepegawaian_docx(os.path.join(PUBLIC_DIR, "Template_SOP_Layanan_Kepegawaian_Elektronik_Indikator11.docx"))
create_ba_integrasi_siasn_docx(os.path.join(PUBLIC_DIR, "Template_BA_Integrasi_SIMPEG_SIASN_BKN_Indikator11.docx"))
create_eval_talenta_docx(os.path.join(PUBLIC_DIR, "Template_Laporan_Evaluasi_Talenta_ASN_Indikator11.docx"))
create_rekap_kepegawaian_xlsx(os.path.join(PUBLIC_DIR, "Template_Rekapitulasi_Layanan_Kepegawaian_SIASN_Indikator11.xlsx"))
create_nine_box_xlsx(os.path.join(PUBLIC_DIR, "Template_Pemetaan_Manajemen_Talenta_NineBox_Indikator11.xlsx"))

print("All 5 templates for Indicator 11 generated successfully in both workspace and public directory!")
