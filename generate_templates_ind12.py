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

OUTPUT_DIR = r"d:\DODI AGUSRI.S.KOM\2026 2026 2026\FELLOW DEVELOPER\React.JS\EVAL_PEMDI\template_bukti_dukung\INDIKATOR_12_TANGGAP_INSIDEN_CSIRT"
PUBLIC_DIR = r"d:\DODI AGUSRI.S.KOM\2026 2026 2026\FELLOW DEVELOPER\React.JS\EVAL_PEMDI\public\templates\ind_12"

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
# 1. TEMPLATE SK TIM CSIRT & DOKUMEN PROFIL RFC 2350 (DOCX - LEVEL 3)
# =========================================================================
def create_sk_csirt_docx(filepath):
    doc = Document()
    for s in doc.sections:
        s.top_margin = Inches(1)
        s.bottom_margin = Inches(1)
        s.left_margin = Inches(1)
        s.right_margin = Inches(1)

    # Kop Surat Resmi
    hp = doc.add_paragraph()
    hp.alignment = WD_ALIGN_PARAGRAPH.CENTER
    r1 = hp.add_run("PEMERINTAH DAERAH / KEMENTERIAN / LEMBAGA [NAMA INSTANSI]\n")
    r1.font.bold = True
    r1.font.size = Pt(12)
    r2 = hp.add_run("DINAS KOMUNIKASI DAN INFORMATIKA / PUSAT DATA DAN INFORMASI\n")
    r2.font.bold = True
    r2.font.size = Pt(13)
    r3 = hp.add_run("Jalan Merdeka Siber No. 1, Telp: (021) 8888-CSIRT, Email: csirt@daerah.go.id, Web: https://csirt.daerah.go.id\n")
    r3.font.size = Pt(9)
    r3.font.color.rgb = RGBColor(100, 100, 100)

    p_line = doc.add_paragraph()
    p_line.alignment = WD_ALIGN_PARAGRAPH.CENTER
    p_line.add_run("=" * 65).font.bold = True

    # Judul Keputusan
    title = doc.add_heading(level=1)
    title.alignment = WD_ALIGN_PARAGRAPH.CENTER
    trun = title.add_run("KEPUTUSAN KEPALA DAERAH / PIMPINAN INSTANSI\nNOMOR: 188.45/120/CSIRT/2026\n\nTENTANG\nPEMBENTUKAN TIM TANGGAP INSIDEN SIBER (COMPUTER SECURITY INCIDENT RESPONSE TEAM / CSIRT)\nPEMERINTAH [NAMA INSTANSI]")
    trun.font.size = Pt(12)
    trun.font.bold = True
    trun.font.color.rgb = RGBColor(31, 78, 121)

    doc.add_paragraph("\n")

    # Bagian Menimbang & Mengingat
    p_menimbang = doc.add_paragraph()
    p_menimbang.add_run("MENIMBANG:\n").font.bold = True
    p_menimbang.add_run(
        "a. bahwa untuk menjamin keamanan informasi, kelangsungan penyelenggaraan sistem elektronik, dan ketahanan data strategis pemerintah dari ancaman dan serangan siber;\n"
        "b. bahwa berdasarkan Peraturan Badan Siber dan Sandi Negara Nomor 10 Tahun 2020 tentang Tim Tanggap Insiden Siber, perlu dibentuk Tim Tanggap Insiden Siber (CSIRT) pada instansi pemerintah;\n"
        "c. bahwa untuk pemenuhan Indikator 12 Evaluasi Kinerja Pemerintahan Digital PermenPANRB Nomor 8 Tahun 2026, diperlukan kelembagaan resmi penanganan insiden siber yang terdaftar di BSSN;\n"
        "d. bahwa berdasarkan pertimbangan sebagaimana dimaksud pada huruf a, b, dan c, perlu menetapkan Keputusan Kepala Instansi tentang Pembentukan Tim CSIRT."
    )

    p_mengingat = doc.add_paragraph()
    p_mengingat.add_run("MENGINGAT:\n").font.bold = True
    p_mengingat.add_run(
        "1. Undang-Undang Nomor 1 Tahun 2024 tentang Perubahan Kedua atas UU No. 11/2008 tentang Informasi dan Transaksi Elektronik;\n"
        "2. Undang-Undang Nomor 27 Tahun 2022 tentang Pelindungan Data Pribadi (UU PDP);\n"
        "3. Peraturan Presiden Nomor 95 Tahun 2018 tentang Sistem Pemerintahan Berbasis Elektronik (SPBE);\n"
        "4. Peraturan Presiden Nomor 82 Tahun 2022 tentang Pelindungan Infrastruktur Informasi Vital;\n"
        "5. Peraturan BSSN Nomor 10 Tahun 2020 tentang Tim Tanggap Insiden Siber;\n"
        "6. Peraturan Menteri PANRB Nomor 8 Tahun 2026 tentang Evaluasi Kinerja Pemerintahan Digital (Indikator 12: Penanganan Insiden Siber)."
    )

    # Diktum Memutuskan
    doc.add_heading("MEMUTUSKAN:", level=2).alignment = WD_ALIGN_PARAGRAPH.CENTER
    doc.paragraphs[-1].runs[0].font.color.rgb = RGBColor(31, 78, 121)

    p_diktum = doc.add_paragraph()
    p_diktum.add_run("KESATU: ").font.bold = True
    p_diktum.add_run("Membentuk Tim Tanggap Insiden Siber (Computer Security Incident Response Team / CSIRT) Instansi dengan nama resmi [NAMA INSTANSI]-CSIRT.\n\n")
    
    p_diktum.add_run("KEDUA: ").font.bold = True
    p_diktum.add_run("Susunan keanggotaan dan uraian tugas [NAMA INSTANSI]-CSIRT tercantum dalam Lampiran I yang merupakan bagian tidak terpisahkan dari Keputusan ini.\n\n")

    p_diktum.add_run("KETIGA: ").font.bold = True
    p_diktum.add_run("Menetapkan Dokumen Profil CSIRT mengacu pada standar internasional RFC 2350 (Expectations for Computer Security Incident Response) sebagaimana tercantum dalam Lampiran II Keputusan ini.\n\n")

    p_diktum.add_run("KEEMPAT: ").font.bold = True
    p_diktum.add_run("Dalam melaksanakan tugasnya, Tim CSIRT bertanggung jawab kepada Kepala Instansi melalui Kepala Dinas Komunikasi dan Informatika / Pejabat yang membidangi TIK dan berkoordinasi secara teknis dengan Pusat Operasi Keamanan Siber Nasional Badan Siber dan Sandi Negara (Gov-CSIRT BSSN).\n\n")

    p_diktum.add_run("KELIMA: ").font.bold = True
    p_diktum.add_run("Keputusan ini mulai berlaku pada tanggal ditetapkan dengan ketentuan apabila di kemudian hari terdapat kekeliruan akan diadakan perbaikan sebagaimana mestinya.\n")

    # Tanda Tangan
    doc.add_paragraph("\n")
    p_ttd = doc.add_paragraph()
    p_ttd.alignment = WD_ALIGN_PARAGRAPH.RIGHT
    p_ttd.add_run("Ditetapkan di: [Nama Kota]\nPada tanggal: 05 Januari 2026\n\n").font.size = Pt(10)
    p_ttd.add_run("KEPALA DAERAH / PIMPINAN INSTANSI,\n\n\n\n").font.bold = True
    p_ttd.add_run("[NAMA LENGKAP PIMPINAN]\nNIP. 19750810 199803 1 002\n").font.bold = True
    p_ttd.add_run("(Ditandatangani secara elektronik bersertifikat BSrE)")

    # Page Break untuk Lampiran
    doc.add_page_break()

    # Lampiran I: Struktur Organisasi CSIRT
    h_lamp1 = doc.add_heading("LAMPIRAN I: STRUKTUR ORGANISASI DAN URAIAN TUGAS TIM CSIRT", level=2)
    h_lamp1.runs[0].font.color.rgb = RGBColor(31, 78, 121)

    t_org = doc.add_table(rows=6, cols=3)
    t_org.alignment = WD_TABLE_ALIGNMENT.CENTER
    h_cells = t_org.rows[0].cells
    h_cells[0].text = "No"
    h_cells[1].text = "Jabatan dalam Tim CSIRT"
    h_cells[2].text = "Uraian Tugas dan Tanggung Jawab Operasional"
    for c in h_cells:
        c.paragraphs[0].runs[0].font.bold = True
        set_cell_background(c, "1F4E79")
        c.paragraphs[0].runs[0].font.color.rgb = RGBColor(255, 255, 255)
    h_cells[0].width = Inches(0.5)
    h_cells[1].width = Inches(2.2)
    h_cells[2].width = Inches(3.8)

    roles = [
        ("1", "Pengarah (Steering Committee)", "Memberikan arahan strategis, kebijakan alokasi anggaran, otorisasi deklarasi keadaan darurat siber instansi, dan persetujuan penghentian sementara layanan publik terdampak kritis."),
        ("2", "Ketua CSIRT (Incident Commander)", "Memimpin seluruh koordinasi operasional respon tanggap insiden, menjalin hubungan eskalasi dengan BSSN dan aparat penegak hukum, serta menyetujui laporan akhir investigasi insiden."),
        ("3", "Koordinator Triase & Helpdesk Aduan", "Menerima laporan aduan insiden siber dari kanal resmi (web, email, hotline 24/7), memverifikasi keabsahan laporan, mengkategorikan tingkat keparahan, dan mendistribusikan tiket penanganan."),
        ("4", "Analis Forensik & Malware", "Melakukan akuisisi bukti digital, preservasi artefak memori dan disk, analisis reverse engineering kode berbahaya (malware), serta pelacakan jejak intrusion / attack vector."),
        ("5", "Tim Penanganan Teknis (System & Network Hardening)", "Melakukan tindakan isolasi server terkompromi (network segmentation), perbaikan celah kerentanan (patching), pemulihan basis data dari backup bersih, dan monitoring pasca-recovery.")
    ]

    for idx, (no, jab, tgs) in enumerate(roles, 1):
        r = t_org.rows[idx]
        r.cells[0].text = no
        r.cells[1].text = jab
        r.cells[2].text = tgs
        r.cells[1].paragraphs[0].runs[0].font.bold = True
        for c in r.cells:
            set_cell_margins(c, 60, 60, 80, 80)
        if idx % 2 == 0:
            for c in r.cells:
                set_cell_background(c, "F9FAFB")

    # Lampiran II: Dokumen Profil CSIRT Standar RFC 2350
    doc.add_page_break()
    h_lamp2 = doc.add_heading("LAMPIRAN II: DOKUMEN PROFIL TIM CSIRT (STANDAR RFC 2350)", level=2)
    h_lamp2.runs[0].font.color.rgb = RGBColor(31, 78, 121)

    p_rfc = doc.add_paragraph()
    p_rfc.add_run("Dokumen ini mendeskripsikan secara publik profil, wewenang, kebijakan operasional, dan kanal komunikasi resmi Tim CSIRT sesuai standar Internet Engineering Task Force (IETF) RFC 2350 sebagai syarat registrasi BSSN.\n\n")

    rfc_items = [
        ("1. Informasi Dokumen", "Versi: 1.0 | Tanggal Rilis: Januari 2026 | Distribusi: Publik (TLP:CLEAR)"),
        ("2. Informasi Kontak", "Nama CSIRT: [NAMA INSTANSI]-CSIRT\nAlamat: Gedung Data Center Lt. 2, Jl. Merdeka Siber No. 1\nEmail: csirt@daerah.go.id | Hotline: 0812-9999-CSIRT (24/7)\nKunci Publik PGP: Key-ID 0x9B4D2F1A, Fingerprint: 4E7A 29BC 11FA 9081 33ED\nZona Waktu: UTC+07:00 (WIB)"),
        ("3. Mandat & Konstituen", "Mandat dibentuk melalui Keputusan Kepala Instansi No. 188.45/120/CSIRT/2026.\nKonstituen mencakup seluruh Organisasi Perangkat Daerah (OPD), Unit Pelaksana Teknis, dan pengguna portal layanan publik di lingkungan instansi."),
        ("4. Kebijakan Operasional", "Menggunakan Traffic Light Protocol (TLP v2.0) untuk klasifikasi pertukaran informasi sensitif.\nBekerja sama erat dengan Pusat Operasi Keamanan Siber Nasional BSSN (Gov-CSIRT)."),
        ("5. Layanan CSIRT", "Layanan Reaktif: Penanganan insiden siber, triase tiket aduan, koordinasi respon darurat, analisis forensik digital.\nLayanan Proaktif: Pemindaian kerentanan aplikasi (VAPT), peringatan dini kerentanan (Security Advisory), audit konfigurasi, dan simulasi krisis siber tahunan.")
    ]

    for title_sec, content_sec in rfc_items:
        h = doc.add_heading(title_sec, level=3)
        h.runs[0].font.color.rgb = RGBColor(46, 117, 182)
        p = doc.add_paragraph(content_sec)
        p.paragraph_format.left_indent = Inches(0.2)

    # Simpan kedua file
    for out_path in [os.path.join(OUTPUT_DIR, "Template_SK_Tim_CSIRT_dan_Profil_RFC2350_Indikator12.docx"),
                     os.path.join(PUBLIC_DIR, "Template_SK_Tim_CSIRT_dan_Profil_RFC2350_Indikator12.docx")]:
        doc.save(out_path)
    print(f"[OK] SK Tim CSIRT docx created: {out_path}")

# =========================================================================
# 2. TEMPLATE SOP PENANGANAN INSIDEN KEAMANAN SIBER (DOCX - LEVEL 3 & 4)
# =========================================================================
def create_sop_insiden_docx(filepath):
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
    r2 = hp.add_run("TIM TANGGAP INSIDEN SIBER ([NAMA INSTANSI]-CSIRT)\n")
    r2.font.bold = True
    r2.font.size = Pt(13)
    r3 = hp.add_run("Standar Operasional Prosedur Penanganan Insiden Keamanan Siber Berstandar NIST SP 800-61 & BSSN\n")
    r3.font.size = Pt(9)
    r3.font.color.rgb = RGBColor(100, 100, 100)

    p_line = doc.add_paragraph()
    p_line.alignment = WD_ALIGN_PARAGRAPH.CENTER
    p_line.add_run("=" * 65).font.bold = True

    # Judul SOP
    title = doc.add_heading(level=1)
    title.alignment = WD_ALIGN_PARAGRAPH.CENTER
    trun = title.add_run("STANDAR OPERASIONAL PROSEDUR (SOP)\nPENANGGULANGAN DAN PEMULIHAN INSIDEN KEAMANAN SIBER")
    trun.font.size = Pt(14)
    trun.font.bold = True
    trun.font.color.rgb = RGBColor(31, 78, 121)

    # Metadata SOP
    t_id = doc.add_table(rows=6, cols=2)
    t_id.alignment = WD_TABLE_ALIGNMENT.CENTER
    meta = [
        ("Nomor Dokumen", "SOP-CSIRT-CYBER-12/2026"),
        ("Tanggal Berlaku", "02 Januari 2026"),
        ("Dasar Regulasi", "1. Peraturan BSSN No. 10/2020 tentang Tim Tanggap Insiden Siber\n2. NIST SP 800-61 Rev. 2 (Computer Security Incident Handling Guide)\n3. PermenPANRB No. 8/2026 tentang Evaluasi Pemdi (Indikator 12 Level 3-4)"),
        ("Ruang Lingkup", "Web Defacement, Malware/Ransomware Infection, DDoS Attack, Kebocoran Data Pribadi, Unauthorized System Access, Phishing ASN"),
        ("Pelaksana Prosedur", "Tim CSIRT Instansi, Administrator Sistem OPD, Pengelola Jaringan Kominfo, dan Pengguna Layanan"),
        ("Hubungan Eskalasi", "Pusat Operasi Keamanan Siber Nasional (Pusopskamsinas / Gov-CSIRT BSSN)")
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

    # Bab I: Matriks Klasifikasi Tingkat Keparahan (Severity Level)
    doc.add_heading("I. MATRIKS KLASIFIKASI KEPARAHAN INSIDEN & WAKTU TANGGAP (SLA)", level=2).runs[0].font.color.rgb = RGBColor(31, 78, 121)

    sev_table = doc.add_table(rows=5, cols=4)
    sev_table.alignment = WD_TABLE_ALIGNMENT.CENTER
    sh_cells = sev_table.rows[0].cells
    sh_cells[0].text = "Tingkat"
    sh_cells[1].text = "Kategori Dampak"
    sh_cells[2].text = "Contoh Skenario Serangan"
    sh_cells[3].text = "Target Waktu Tanggap (MTTR)"
    for c in sh_cells:
        c.paragraphs[0].runs[0].font.bold = True
        set_cell_background(c, "1F4E79")
        c.paragraphs[0].runs[0].font.color.rgb = RGBColor(255, 255, 255)
    sh_cells[0].width = Inches(0.8)
    sh_cells[1].width = Inches(1.5)
    sh_cells[2].width = Inches(2.6)
    sh_cells[3].width = Inches(1.6)

    sev_data = [
        ("Kritis (Sev-1)", "Layanan publik utama padam total, enkripsi ransomware pada database kependudukan/keuangan, kebocoran data rahasia instansi.", "Ransomware LockBit, database dump bocor di Darkweb, server utama drop.", "<= 15 Menit (Eskalasi langsung Kepala Daerah & BSSN)"),
        ("Tinggi (Sev-2)", "Infiltrasi root server terindikasi, web defacement pada sub-domain strategis OPD, serangan DDoS intensitas tinggi.", "Halaman depan portal resmi diubah judi online, server CPU 100% banjir traffic.", "<= 30 Menit (Aktivasi Incident Response Team)"),
        ("Sedang (Sev-3)", "Aktivitas scanning massal, infeksi trojan pada workstation lokal ASN tanpa penyebaran lateral, unauthorized login berulang.", "Percobaan brute force SSH/RDP, deteksi worm pada PC staf kantor.", "<= 2 Jam (Isolasi workstation terdampak)"),
        ("Rendah (Sev-4)", "Spam phishing email massal tanpa ada klik tautan, anomali log ringan.", "Email tipuan naskah dinas tanpa kredensial bocor.", "<= 8 Jam (Update blocklist mail gateway)")
    ]

    for idx, (lvl, dmpk, cth, sla) in enumerate(sev_data, 1):
        r = sev_table.rows[idx]
        r.cells[0].text = lvl
        r.cells[1].text = dmpk
        r.cells[2].text = cth
        r.cells[3].text = sla
        r.cells[0].paragraphs[0].runs[0].font.bold = True
        for c in r.cells:
            set_cell_margins(c, 50, 50, 70, 70)
        if idx % 2 == 0:
            for c in r.cells:
                set_cell_background(c, "F9FAFB")

    # Bab II: 6 Tahapan Prosedur Penanganan Insiden (Life Cycle)
    doc.add_heading("II. PROSEDUR 6 FASE PENANGGULANGAN INSIDEN (NIST SP 800-61)", level=2).runs[0].font.color.rgb = RGBColor(31, 78, 121)

    phases = [
        ("Fase 1: Persiapan (Preparation)", 
         "1. Pemeliharaan kesiapan tools forensik (FTK Imager, Wireshark, Volatility, SIEM Wazuh/Suricata).\n"
         "2. Pengujian rutin jalur komunikasi darurat out-of-band (Signal group terenkripsi Tim CSIRT).\n"
         "3. Verifikasi immutable offline backup database layanan publik secara berkala."),
        ("Fase 2: Deteksi dan Analisis (Detection & Analysis)", 
         "1. Penerimaan tiket aduan dari portal csirt.daerah.go.id atau alert otomatis sensor IDS/SIEM.\n"
         "2. Triase verifikasi apakah alert merupakan insiden nyata (True Positive) atau peringatan palsu (False Positive).\n"
         "3. Pencatatan nomor tiket pada Log Register Insiden dan penentuan klasifikasi Severity.\n"
         "4. Akuisisi memori RAM dan pembuatan bit-stream image hard disk server sebelum server dimatikan."),
        ("Fase 3: Penahanan (Containment)", 
         "1. Penahanan Jangka Pendek: Isolasi virtual LAN (VLAN), pencabutan kabel jaringan, atau disable port firewall.\n"
         "2. Penahanan Jangka Panjang: Penerapan ACL blocking IP penyerang, reset semua credential administratif berhak akses root."),
        ("Fase 4: Pembasmian dan Pembersihan (Eradication)", 
         "1. Penghapusan webshell, backdoors, crontab mencurigakan, dan file malware yang teridentifikasi.\n"
         "2. Penutupan celah keamanan eksploitasi (patching software, update framework, validasi input sanitization).\n"
         "3. Pemindaian menyeluruh (full vulnerability assessment) memastikan tidak ada malware laten tersembunyi."),
        ("Fase 5: Pemulihan (Recovery)", 
         "1. Restorasi sistem dan data dari media backup terakhir yang telah diverifikasi bersih dari virus.\n"
         "2. Pengujian fungsi layanan pada lingkungan staging sebelum dihubungkan kembali ke jaringan publik.\n"
         "3. Peningkatan level monitoring lalu lintas data (enhanced monitoring) selama minimal 14x24 jam pasca rilis."),
        ("Fase 6: Pembelajaran Pasca-Insiden (Post-Incident Activity)", 
         "1. Pelaksanaan rapat Post-Incident Review (PIR) maksimal 3 hari kerja setelah insiden dinyatakan selesai.\n"
         "2. Penyusunan Dokumen Laporan Akhir Insiden dan penyampaian notifikasi penutupan tiket ke Gov-CSIRT BSSN.\n"
         "3. Pembaruan arsitektur keamanan dan SOP untuk mencegah terulangnya insiden serupa.")
    ]

    for p_title, p_body in phases:
        h = doc.add_heading(p_title, level=3)
        h.runs[0].font.color.rgb = RGBColor(46, 117, 182)
        p = doc.add_paragraph(p_body)
        p.paragraph_format.left_indent = Inches(0.2)

    # Simpan
    for out_path in [os.path.join(OUTPUT_DIR, "Template_SOP_Penanganan_Insiden_Keamanan_Siber_Indikator12.docx"),
                     os.path.join(PUBLIC_DIR, "Template_SOP_Penanganan_Insiden_Keamanan_Siber_Indikator12.docx")]:
        doc.save(out_path)
    print(f"[OK] SOP Insiden Siber docx created: {out_path}")

# =========================================================================
# 3. TEMPLATE LOG REGISTER INSIDEN SIBER CSIRT (XLSX - LEVEL 4)
# =========================================================================
def create_register_insiden_xlsx(filepath):
    wb = openpyxl.Workbook()
    header_font = Font(name='Calibri', size=11, bold=True, color='FFFFFF')
    border_thin = Border(
        left=Side(style='thin', color='D9D9D9'), right=Side(style='thin', color='D9D9D9'),
        top=Side(style='thin', color='D9D9D9'), bottom=Side(style='thin', color='D9D9D9')
    )

    # Sheet 1: Dashboard & KPI CSIRT
    ws_dash = wb.active
    ws_dash.title = "Dashboard_KPI_CSIRT"

    ws_dash.cell(row=1, column=1, value="DASHBOARD PEMANTAUAN & METRIK KINERJA CSIRT TAHUN 2026").font = Font(name='Calibri', size=14, bold=True, color='1F4E79')
    ws_dash.cell(row=2, column=1, value="Indikator 12 Evaluasi Pemerintahan Digital (Standar Level 4 & 5 - Terpadu BSSN)").font = Font(name='Calibri', size=10, italic=True, color='595959')

    # KPI Summary Cards
    kpi_cards = [
        ("Total Tiket Insiden 2026", 18, "C3D9FF", "1F4E79"),
        ("Tuntas Tertangani (Resolved)", 17, "D9EAD3", "274E13"),
        ("Sedang Investigasi (Open)", 1, "FFF2CC", "7F6000"),
        ("Rata-rata Waktu Tanggap (MTTD)", "14 Menit", "EAD1DC", "4C1130"),
        ("Rata-rata Pemulihan (MTTR)", "2 Jam 15 Mnt", "D0E0E3", "0C343D"),
        ("Laporan Terkirim ke Gov-CSIRT BSSN", "100%", "CFE2F3", "0B5394")
    ]
    for c_idx, (kpi_title, kpi_val, bg_col, text_col) in enumerate(kpi_cards, 1):
        cell_t = ws_dash.cell(row=4, column=c_idx, value=kpi_title)
        cell_t.font = Font(name='Calibri', size=9, bold=True, color='595959')
        cell_t.alignment = Alignment(horizontal='center', vertical='center')
        cell_t.fill = PatternFill(start_color='F2F4F7', end_color='F2F4F7', fill_type='solid')
        cell_t.border = border_thin

        cell_v = ws_dash.cell(row=5, column=c_idx, value=kpi_val)
        cell_v.font = Font(name='Calibri', size=13, bold=True, color=text_col)
        cell_v.alignment = Alignment(horizontal='center', vertical='center')
        cell_v.fill = PatternFill(start_color=bg_col, end_color=bg_col, fill_type='solid')
        cell_v.border = border_thin

    ws_dash.row_dimensions[4].height = 24
    ws_dash.row_dimensions[5].height = 32

    # Breakdown Kategori Serangan
    ws_dash.cell(row=8, column=1, value="REKAPITULASI INSIDEN BERDASARKAN VEKTOR SERANGAN").font = Font(name='Calibri', size=11, bold=True, color='1F4E79')
    table_headers = ["No", "Vektor / Jenis Insiden Siber", "Jumlah Kejadian", "Tingkat Keparahan Dominan", "Status Mitigasi", "Rekomendasi Utama"]
    for col_idx, h in enumerate(table_headers, 1):
        c = ws_dash.cell(row=9, column=col_idx, value=h)
        c.font = header_font
        c.fill = PatternFill(start_color='1F4E79', end_color='1F4E79', fill_type='solid')
        c.alignment = Alignment(horizontal='center', vertical='center')
        c.border = border_thin
    ws_dash.row_dimensions[9].height = 26

    threat_rows = [
        (1, "Web Defacement (Perubahan Tampilan / Sisipan Judi Online)", 7, "Tinggi (Sev-2)", "100% Selesai", "Perketat sanitasi upload file, WAF, dan scanning web shell otomatis harian"),
        (2, "Percobaan Brute Force Login & Unauthorized Access", 5, "Sedang (Sev-3)", "100% Selesai", "Implementasi Multi-Factor Authentication (MFA) & IP Rate Limiting"),
        (3, "Phishing Email Mengatasnamakan Pejabat/Naskah Dinas", 3, "Sedang (Sev-3)", "100% Selesai", "Security Awareness Training ASN & konfigurasi DMARC/DKIM/SPF"),
        (4, "Serangan Distributed Denial of Service (DDoS)", 2, "Tinggi (Sev-2)", "100% Selesai", "Integrasi proteksi CDN scrubbing center PDN & routing BGP filtering"),
        (5, "Penyusupan Ransomware / Enkripsi Data", 1, "Kritis (Sev-1)", "100% Selesai", "Pemisahan jaringan backup (Air-gapped) & implementasi EDR pada endpoint server")
    ]
    for r_idx, t_data in enumerate(threat_rows, 10):
        fill = PatternFill(start_color='F2F4F7' if r_idx % 2 == 0 else 'FFFFFF', end_color='F2F4F7' if r_idx % 2 == 0 else 'FFFFFF', fill_type='solid')
        ws_dash.row_dimensions[r_idx].height = 22
        for c_idx, val in enumerate(t_data, 1):
            c = ws_dash.cell(row=r_idx, column=c_idx, value=val)
            c.border = border_thin
            c.fill = fill
            c.font = Font(name='Calibri', size=10)
            if c_idx in [1, 3, 4, 5]:
                c.alignment = Alignment(horizontal='center', vertical='center')
            else:
                c.alignment = Alignment(vertical='center')

    # Sheet 2: Log Register Insiden Siber
    ws_log = wb.create_sheet(title="Log_Register_Insiden")
    ws_log.cell(row=1, column=1, value="BUKU REGISTER PENANGANAN TIKET INSIDEN SIBER INSTANSI TAHUN 2026").font = Font(name='Calibri', size=13, bold=True, color='1F4E79')
    
    log_cols = [
        "No. Tiket CSIRT", "Waktu Deteksi", "Pelapor / Sumber Deteksi", "Sistem / Aplikasi Terdampak", 
        "Vektor Serangan", "Keparahan", "Lead Incident Handler", "Waktu Respon (MTTD)", "Waktu Pemulihan (MTTR)", 
        "No. Laporan BSSN", "Status Tiket"
    ]
    for col_idx, h in enumerate(log_cols, 1):
        c = ws_log.cell(row=3, column=col_idx, value=h)
        c.font = header_font
        c.fill = PatternFill(start_color='2E75B6', end_color='2E75B6', fill_type='solid')
        c.alignment = Alignment(horizontal='center', vertical='center')
        c.border = border_thin
    ws_log.row_dimensions[3].height = 28

    sample_incidents = [
        ("INC-CSIRT-2026-001", "2026-01-12 03:22", "Alert SIEM Wazuh", "Portal Berita Daerah (dinas.daerah.go.id)", "Web Defacement (Judi Online)", "Tinggi (Sev-2)", "Rizky Pratama, S.Kom", "8 Menit", "1 Jam 10 Mnt", "BSSN-NOTIF-0291", "CLOSED"),
        ("INC-CSIRT-2026-002", "2026-01-25 14:10", "Helpdesk OPD Bappeda", "Email Resmi Subbag Umum", "Phishing Naskah Palsu", "Sedang (Sev-3)", "Dewi Kartika, S.ST", "15 Menit", "45 Menit", "BSSN-NOTIF-0344", "CLOSED"),
        ("INC-CSIRT-2026-003", "2026-02-04 22:45", "Sensor IDS Suricata", "Aplikasi SIMPEG Kepegawaian", "SQL Injection Massal", "Tinggi (Sev-2)", "Ahmad Fauzi, S.Kom", "12 Menit", "2 Jam 05 Mnt", "BSSN-NOTIF-0412", "CLOSED"),
        ("INC-CSIRT-2026-02-004", "2026-02-18 08:30", "Laporan Operator SIMDA", "Server File Keuangan BPKAD", "Trojan Backdoor Terdeteksi", "Sedang (Sev-3)", "Rizky Pratama, S.Kom", "10 Menit", "1 Jam 30 Mnt", "BSSN-NOTIF-0518", "CLOSED"),
        ("INC-CSIRT-2026-03-005", "2026-03-02 11:15", "Monitoring Bandwidth NOC", "Gateway Jaringan Kantor Utama", "SYN Flood DDoS Attack", "Tinggi (Sev-2)", "Budi Santoso, S.T.", "6 Menit", "55 Menit", "BSSN-NOTIF-0620", "CLOSED"),
        ("INC-CSIRT-2026-03-006", "2026-03-14 19:20", "Alert Endpoint EDR", "Server Database Simpus Dinkes", "Percobaan Eksekusi Ransomware", "Kritis (Sev-1)", "Tim Forensik Gabungan", "5 Menit", "3 Jam 40 Mnt", "BSSN-NOTIF-0701", "CLOSED")
    ]

    for r_idx, inc in enumerate(sample_incidents, 4):
        ws_log.row_dimensions[r_idx].height = 22
        fill = PatternFill(start_color='F2F4F7' if r_idx % 2 == 0 else 'FFFFFF', end_color='F2F4F7' if r_idx % 2 == 0 else 'FFFFFF', fill_type='solid')
        for c_idx, val in enumerate(inc, 1):
            c = ws_log.cell(row=r_idx, column=c_idx, value=val)
            c.border = border_thin
            c.fill = fill
            c.font = Font(name='Calibri', size=10)
            if c_idx in [1, 2, 6, 8, 9, 10, 11]:
                c.alignment = Alignment(horizontal='center', vertical='center')
                if c_idx == 11:
                    c.font = Font(name='Calibri', size=10, bold=True, color='1E4620')
            else:
                c.alignment = Alignment(vertical='center')

    # Sheet 3: Triase & Forensik Digital
    ws_for = wb.create_sheet(title="Analisis_Triase_dan_Forensik")
    ws_for.cell(row=1, column=1, value="LEMBAR KERJA ANALISIS TRIASE & ARTEFAK FORENSIK DIGITAL (CHAIN OF CUSTODY)").font = Font(name='Calibri', size=13, bold=True, color='1F4E79')

    for_cols = [
        "No Tiket", "Nama Artefak / Log File", "Tipe Bukti", "IP Address Penyerang / C2", 
        "Nilai Hash SHA-256 (Integritas)", "Temuan Teknis & Celah Terekploitasi", "Tindakan Netralisasi / Hardening", "Penyidik Forensik"
    ]
    for col_idx, h in enumerate(for_cols, 1):
        c = ws_for.cell(row=3, column=col_idx, value=h)
        c.font = header_font
        c.fill = PatternFill(start_color='7030A0', end_color='7030A0', fill_type='solid')
        c.alignment = Alignment(horizontal='center', vertical='center')
        c.border = border_thin
    ws_for.row_dimensions[3].height = 28

    sample_forensics = [
        ("INC-CSIRT-2026-001", "access_log_nginx_20260112.tar.gz", "Server Access Log", "185.220.101.42 (Tor Exit Node)", "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855", "Injeksi PHP shell via celah plugin form upload yang belum diupdate", "Isolasi web directory, patch plugin versi terbaru, WAF rule blocking pattern", "Ahmad Fauzi, S.Kom"),
        ("INC-CSIRT-2026-003", "mysql_query_audit_20260204.log", "Database Query Log", "103.145.22.18 (Proxy Luar)", "a1b2c3d4e5f67890123456789abcdef0123456789abcdef0123456789abcdef0", "Union-based SQL Injection pada parameter id_pegawai modul mutasi", "Refactor parameterized query PDO, validasi tipe data input, blacklist keyword", "Rizky Pratama, S.Kom"),
        ("INC-CSIRT-2026-006", "memory_dump_srvdb01.raw", "RAM Forensics Volatility", "194.26.29.112 (Command & Control)", "b8f042e88a09bc11394f42013824ab1190bcdae34120934ca4819234b7851234", "Injeksi proses rundll32.exe mencurigakan mencoba mengenkripsi direktori /data", "Kill PID terinfeksi, restore snapshot VM sebelum infeksi, blokir port egress 4444", "Dewi Kartika, S.ST")
    ]
    for r_idx, f_row in enumerate(sample_forensics, 4):
        ws_for.row_dimensions[r_idx].height = 24
        fill = PatternFill(start_color='F2F4F7' if r_idx % 2 == 0 else 'FFFFFF', end_color='F2F4F7' if r_idx % 2 == 0 else 'FFFFFF', fill_type='solid')
        for c_idx, val in enumerate(f_row, 1):
            c = ws_for.cell(row=r_idx, column=c_idx, value=val)
            c.border = border_thin
            c.fill = fill
            c.font = Font(name='Calibri', size=9)
            if c_idx in [1, 3, 4]:
                c.alignment = Alignment(horizontal='center', vertical='center')
            else:
                c.alignment = Alignment(vertical='center')

    # Sheet 4: Direktori Kontak Eskalasi & BSSN
    ws_dir = wb.create_sheet(title="Direktori_Kontak_Eskalasi")
    ws_dir.cell(row=1, column=1, value="MATRIKS DIREKTORI KONTAK DARURAT TIM CSIRT & GOV-CSIRT BSSN (24/7)").font = Font(name='Calibri', size=13, bold=True, color='1F4E79')

    dir_cols = ["Entitas / Lembaga", "Peran dalam Eskalasi", "Nama Pejabat / Posko", "Nomor Telepon Darurat", "Email Resmi", "Saluran Terenkripsi (PGP / Signal)"]
    for col_idx, h in enumerate(dir_cols, 1):
        c = ws_dir.cell(row=3, column=col_idx, value=h)
        c.font = header_font
        c.fill = PatternFill(start_color='1F4E79', end_color='1F4E79', fill_type='solid')
        c.alignment = Alignment(horizontal='center', vertical='center')
        c.border = border_thin
    ws_dir.row_dimensions[3].height = 26

    contacts = [
        ("Tim CSIRT Instansi Internal", "Incident Commander", "Ketua CSIRT Daerah", "0812-9999-CSIRT", "csirt@daerah.go.id", "PGP Key: 0x9B4D2F1A"),
        ("Pengelola Data Center Kominfo", "Infrastruktur & Jaringan", "Kabid Penyelenggaraan E-Gov", "0811-2345-6789", "datacenter@daerah.go.id", "Hotline NOC Internal"),
        ("Gov-CSIRT Nasional (BSSN)", "Pusat Operasi Keamanan Siber Nasional", "Direktorat Operasi Keamanan Siber BSSN", "(021) 78833610 / 0811-888-2776", "bantuan.insiden@bssn.go.id", "Portal: csirt.bssn.go.id"),
        ("Penyedia Cloud PDN (Komdigi)", "Penyedia Hosting PDN Nasional", "Helpdesk Cloud PDN Komdigi", "(021) 3844445", "layanan.pdn@komdigi.go.id", "SLA Dukungan PDN 24/7"),
        ("Direktorat Tindak Pidana Siber POLRI", "Penegakan Hukum Kejahatan Siber", "Bareskrim Cyber Crime", "(021) 5234057", "cybercrime@polri.go.id", "Pelaporan Resmi BAP")
    ]
    for r_idx, ct in enumerate(contacts, 4):
        ws_dir.row_dimensions[r_idx].height = 22
        fill = PatternFill(start_color='F2F4F7' if r_idx % 2 == 0 else 'FFFFFF', end_color='F2F4F7' if r_idx % 2 == 0 else 'FFFFFF', fill_type='solid')
        for c_idx, val in enumerate(ct, 1):
            c = ws_dir.cell(row=r_idx, column=c_idx, value=val)
            c.border = border_thin
            c.fill = fill
            c.font = Font(name='Calibri', size=10)
            if c_idx in [1, 2, 4]:
                c.alignment = Alignment(horizontal='center', vertical='center')
            else:
                c.alignment = Alignment(vertical='center')

    # Auto fit column widths across all sheets
    for ws in [ws_dash, ws_log, ws_for, ws_dir]:
        for col in ws.columns:
            max_len = max(len(str(cell.value or '')) for cell in col)
            col_letter = get_column_letter(col[0].column)
            ws.column_dimensions[col_letter].width = max(max_len + 3, 14)

    for out_path in [os.path.join(OUTPUT_DIR, "Template_Log_Register_Insiden_Keamanan_Siber_CSIRT_Indikator12.xlsx"),
                     os.path.join(PUBLIC_DIR, "Template_Log_Register_Insiden_Keamanan_Siber_CSIRT_Indikator12.xlsx")]:
        wb.save(out_path)
    print(f"[OK] Log Register Insiden Siber xlsx created: {out_path}")

# =========================================================================
# 4. TEMPLATE LAPORAN CYBER DRILL & POST-INCIDENT REVIEW (DOCX - LEVEL 5)
# =========================================================================
def create_cyber_drill_docx(filepath):
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
    r2 = hp.add_run("TIM TANGGAP INSIDEN SIBER ([NAMA INSTANSI]-CSIRT)\n")
    r2.font.bold = True
    r2.font.size = Pt(13)
    r3 = hp.add_run("Laporan Evaluasi Pelaksanaan Latihan Simulasi Tanggap Krisis Siber (Cyber Drill Exercise) & Post-Incident Review\n")
    r3.font.size = Pt(9)
    r3.font.color.rgb = RGBColor(100, 100, 100)

    p_line = doc.add_paragraph()
    p_line.alignment = WD_ALIGN_PARAGRAPH.CENTER
    p_line.add_run("=" * 65).font.bold = True

    # Judul Laporan
    title = doc.add_heading(level=1)
    title.alignment = WD_ALIGN_PARAGRAPH.CENTER
    trun = title.add_run("LAPORAN RESMI PELAKSANAAN SIMULASI TANGGAP KRISIS SIBER\n(CYBER DRILL EXERCISE) DAN POST-INCIDENT REVIEW (PIR) TAHUN 2026")
    trun.font.size = Pt(13)
    trun.font.bold = True
    trun.font.color.rgb = RGBColor(31, 78, 121)

    # Metadata Dokumen
    t_id = doc.add_table(rows=5, cols=2)
    t_id.alignment = WD_TABLE_ALIGNMENT.CENTER
    meta = [
        ("Nomor Dokumen", "LAP-DRILL-CSIRT-12/2026"),
        ("Tanggal Pelaksanaan", "24-25 Februari 2026"),
        ("Jenis Latihan", "Technical Tabletop & Functional Cyber Drill Bersama BSSN"),
        ("Skenario Uji", "Simulasi Penanganan Serangan Ransomware Terdistribusi pada Basis Data Pelayanan Terpadu Satu Pintu (PTSP)"),
        ("Tingkat Kematangan Bukti", "Standar Pemenuhan Level 5 (Optimum) PermenPANRB No. 8/2026 Indikator 12")
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

    # Bab I: Latar Belakang & Tujuan
    doc.add_heading("I. LATAR BELAKANG DAN TUJUAN LATIHAN", level=2).runs[0].font.color.rgb = RGBColor(31, 78, 121)
    p_bg = doc.add_paragraph()
    p_bg.add_run(
        "Sebagai bagian dari komitmen pengamanan ruang siber dan kepatuhan terhadap indikator Level 5 Evaluasi Kinerja Pemerintahan Digital "
        "(PermenPANRB No. 8 Tahun 2026), Tim CSIRT Instansi secara rutin menyelenggarakan latihan simulasi krisis siber (Cyber Drill). "
        "Latihan ini bertujuan untuk menguji kesiapsiagaan personel tanggap insiden, mengukur efektivitas SOP penanganan insiden, "
        "memvalidasi rantai komando koordinasi eskalasi dengan BSSN, serta memastikan mekanisme pemulihan data cadangan (disaster recovery) "
        "dapat berjalan sesuai target RTO dan RPO yang telah ditetapkan."
    )

    # Bab II: Metodologi & Skenario Serangan
    doc.add_heading("II. SKENARIO INJEKSI SERANGAN DAN JADWAL SIMULASI", level=2).runs[0].font.color.rgb = RGBColor(31, 78, 121)

    t_sched = doc.add_table(rows=6, cols=4)
    t_sched.alignment = WD_TABLE_ALIGNMENT.CENTER
    th_cells = t_sched.rows[0].cells
    th_cells[0].text = "Waktu / Jam"
    th_cells[1].text = "Tahap Injeksi Skenario (Red Team)"
    th_cells[2].text = "Respon & Tindakan Tim CSIRT (Blue Team)"
    th_cells[3].text = "Hasil Evaluasi"
    for c in th_cells:
        c.paragraphs[0].runs[0].font.bold = True
        set_cell_background(c, "1F4E79")
        c.paragraphs[0].runs[0].font.color.rgb = RGBColor(255, 255, 255)
    th_cells[0].width = Inches(1.1)
    th_cells[1].width = Inches(2.2)
    th_cells[2].width = Inches(2.3)
    th_cells[3].width = Inches(1.2)

    sched_data = [
        ("Hari 1, 09:00", "Injeksi email spear-phishing berlampiran macro ke staf admin PTSP", "Penerimaan aduan staf -> Triase dan deteksi indikator IoC hash file berbahaya", "Sukses terdeteksi dalam 8 menit"),
        ("Hari 1, 10:30", "Simulasi eksploitasi lateral movement menuju database server", "Aktivasi sensor EDR -> Isolasi VLAN server database dari jaringan publik", "Isolasi tuntas dalam 12 menit"),
        ("Hari 1, 13:00", "Simulasi enkripsi ransomware dummy pada direktori arsip perizinan", "Deklarasi status Insiden Severity-1 oleh Incident Commander CSIRT", "Pemberitahuan resmi ke pimpinan"),
        ("Hari 2, 09:30", "Simulasi koordinasi laporan insiden darurat ke Gov-CSIRT BSSN", "Penyampaian tiket insiden dan permintaan asistensi teknis forensik BSSN", "Terkonfirmasi via kanal aman"),
        ("Hari 2, 11:00", "Simulasi failover dan pemulihan data dari immutable cloud backup", "Eksekusi disaster recovery script -> Verifikasi integritas checksum data", "Layanan pulih RTO 1 Jam 45 Mnt")
    ]
    for idx, (wkt, inj, rsp, hsl) in enumerate(sched_data, 1):
        r = t_sched.rows[idx]
        r.cells[0].text = wkt
        r.cells[1].text = inj
        r.cells[2].text = rsp
        r.cells[3].text = hsl
        r.cells[0].paragraphs[0].runs[0].font.bold = True
        for c in r.cells:
            set_cell_margins(c, 50, 50, 60, 60)
        if idx % 2 == 0:
            for c in r.cells:
                set_cell_background(c, "F9FAFB")

    # Bab III: Metrik Hasil Pengukuran Kinerja Tanggap Insiden
    doc.add_heading("III. PENGUKURAN METRIK KINERJA (RTO, RPO, MTTD, MTTR)", level=2).runs[0].font.color.rgb = RGBColor(31, 78, 121)

    t_metrics = doc.add_table(rows=5, cols=4)
    t_metrics.alignment = WD_TABLE_ALIGNMENT.CENTER
    mh_cells = t_metrics.rows[0].cells
    mh_cells[0].text = "Parameter Metrik"
    mh_cells[1].text = "Standar Target SLA"
    mh_cells[2].text = "Hasil Capaian Simulasi"
    mh_cells[3].text = "Status Kepatuhan"
    for c in mh_cells:
        c.paragraphs[0].runs[0].font.bold = True
        set_cell_background(c, "1F4E79")
        c.paragraphs[0].runs[0].font.color.rgb = RGBColor(255, 255, 255)
    mh_cells[0].width = Inches(2.2)
    mh_cells[1].width = Inches(1.5)
    mh_cells[2].width = Inches(1.5)
    mh_cells[3].width = Inches(1.3)

    m_data = [
        ("Mean Time to Detect (MTTD)", "<= 15 Menit", "8 Menit", "MEMENUHI TARGET"),
        ("Mean Time to Respond / Isolate", "<= 30 Menit", "12 Menit", "MEMENUHI TARGET"),
        ("Recovery Time Objective (RTO)", "<= 4 Jam", "1 Jam 45 Menit", "MEMENUHI TARGET"),
        ("Recovery Point Objective (RPO)", "<= 1 Jam hilangnya data", "15 Menit transaksi terakhir", "MEMENUHI TARGET")
    ]
    for idx, (prm, std, cap, stt) in enumerate(m_data, 1):
        r = t_metrics.rows[idx]
        r.cells[0].text = prm
        r.cells[1].text = std
        r.cells[2].text = cap
        r.cells[3].text = stt
        r.cells[0].paragraphs[0].runs[0].font.bold = True
        r.cells[3].paragraphs[0].runs[0].font.bold = True
        for c in r.cells:
            set_cell_margins(c, 50, 50, 70, 70)
        if idx % 2 == 0:
            for c in r.cells:
                set_cell_background(c, "F9FAFB")

    # Bab IV: Temuan Gap Analisis & Rencana Tindak Lanjut Pasca Insiden (PIR)
    doc.add_heading("IV. REKOMENDASI POST-INCIDENT REVIEW (PIR) DAN RENCANA AKSI", level=2).runs[0].font.color.rgb = RGBColor(31, 78, 121)

    pir_points = [
        ("1. Penguatan Endpoint Detection & Response (EDR):", "Memperluas pemasangan agen sensor EDR aktif ke seluruh server basis data pelayanan publik dan workstation pejabat pengesah izin."),
        ("2. Penerapan Zero Trust Architecture & Network Segmentation:", "Memisahkan jaringan operasional kantor internal (LAN) dengan segmen Server DMZ publik menggunakan Next-Generation Firewall (NGFW)."),
        ("3. Kampanye Keamanan Siber (Security Awareness Training):", "Menyelenggarakan simulasi phishing berkala bagi seluruh ASN instansi setiap triwulan guna meminimalkan risiko human error."),
        ("4. Automasi Pelaporan ke Gov-CSIRT BSSN:", "Mengintegrasikan REST API ticketing internal dengan sistem monitoring Pusat Operasi Keamanan Siber Nasional BSSN.")
    ]
    for p_head, p_desc in pir_points:
        p = doc.add_paragraph()
        p.add_run(p_head + " ").font.bold = True
        p.add_run(p_desc)
        p.paragraph_format.left_indent = Inches(0.2)

    # Tanda Tangan Laporan
    doc.add_paragraph("\n")
    p_ttd = doc.add_paragraph()
    p_ttd.alignment = WD_ALIGN_PARAGRAPH.RIGHT
    p_ttd.add_run("Disahkan oleh:\nTanggal: 28 Februari 2026\n\n").font.size = Pt(10)
    p_ttd.add_run("KETUA TIM CSIRT INSTANSI,\n\n\n\n").font.bold = True
    p_ttd.add_run("[NAMA LENGKAP KETUA CSIRT]\nNIP. 19820415 200501 1 003\n").font.bold = True
    p_ttd.add_run("(Telah ditandatangani secara elektronik)")

    # Simpan
    for out_path in [os.path.join(OUTPUT_DIR, "Template_Laporan_Simulasi_Cyber_Drill_dan_PIR_Indikator12.docx"),
                     os.path.join(PUBLIC_DIR, "Template_Laporan_Simulasi_Cyber_Drill_dan_PIR_Indikator12.docx")]:
        doc.save(out_path)
    print(f"[OK] Laporan Cyber Drill docx created: {out_path}")

if __name__ == '__main__':
    print("=== MEMULAI GENERASI 4 TEMPLATE RESMI INDIKATOR 12 (CSIRT & INSIDEN SIBER) ===")
    create_sk_csirt_docx(None)
    create_sop_insiden_docx(None)
    create_register_insiden_xlsx(None)
    create_cyber_drill_docx(None)
    print("=== SELESAI! SELURUH 4 BERKAS INDIKATOR 12 BERHASIL DIBUAT DENGAN SEMPURNA ===")
