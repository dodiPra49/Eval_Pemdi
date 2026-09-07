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

OUTPUT_DIR = r"d:\DODI AGUSRI.S.KOM\2026 2026 2026\FELLOW DEVELOPER\React.JS\EVAL_PEMDI\template_bukti_dukung\INDIKATOR_03_SDM_DIGITAL"
PUBLIC_DIR = r"d:\DODI AGUSRI.S.KOM\2026 2026 2026\FELLOW DEVELOPER\React.JS\EVAL_PEMDI\public\templates\ind_03"

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
# 1. DOKUMEN TNA & RENCANA PENGEMBANGAN SDM DIGITAL ASN (DOCX - LEVEL 3)
# =========================================================================
def create_tna_sdm_digital_docx(filepath):
    doc = Document()
    for s in doc.sections:
        s.top_margin = Inches(1)
        s.bottom_margin = Inches(1)
        s.left_margin = Inches(1)
        s.right_margin = Inches(1)

    # Kop Surat
    hp = doc.add_paragraph()
    hp.alignment = WD_ALIGN_PARAGRAPH.CENTER
    r1 = hp.add_run("PEMERINTAH DAERAH / KEMENTERIAN / LEMBAGA [NAMA INSTANSI]\n")
    r1.font.bold = True
    r1.font.size = Pt(12)
    r2 = hp.add_run("BADAN KEPEGAWAIAN DAN PENGEMBANGAN SUMBER DAYA MANUSIA (BKPSDM) / BIRO SDM\n")
    r2.font.bold = True
    r2.font.size = Pt(13)
    r3 = hp.add_run("Jalan Praja Mukti No. 10, Telp: (021) 7654321, Email: kepegawaian@daerah.go.id\n")
    r3.font.size = Pt(9)
    r3.font.color.rgb = RGBColor(100, 100, 100)

    p_line = doc.add_paragraph()
    p_line.alignment = WD_ALIGN_PARAGRAPH.CENTER
    p_line.add_run("=" * 65).font.bold = True

    # Judul
    title = doc.add_heading(level=1)
    title.alignment = WD_ALIGN_PARAGRAPH.CENTER
    trun = title.add_run("ANALISIS KEBUTUHAN PELATIHAN (TRAINING NEEDS ANALYSIS / TNA)\nDAN RENCANA PENGEMBANGAN KOMPETENSI SUMBER DAYA MANUSIA PEMERINTAH DIGITAL\nTAHUN ANGGARAN 2026 - 2028")
    trun.font.size = Pt(13)
    trun.font.bold = True
    trun.font.color.rgb = RGBColor(31, 78, 121)

    # Tabel Metadata
    t_id = doc.add_table(rows=5, cols=2)
    t_id.alignment = WD_TABLE_ALIGNMENT.CENTER
    meta = [
        ("Nomor Dokumen", "TNA-SDM-DIGITAL-03/2026"),
        ("Tahun Penetapan", "Januari 2026"),
        ("Dasar Regulasi", "1. UU No. 20 Tahun 2023 tentang Aparatur Sipil Negara (Pasal 49 Kewajiban Pengembangan Kompetensi ASN)\n2. PermenPANRB No. 8 Tahun 2026 tentang Evaluasi Pemerintahan Digital (Indikator 03 Bobot 5%)\n3. Standar Kompetensi Kerja Nasional Indonesia (SKKNI) Bidang TIK & AI"),
        ("Ruang Lingkup", "Pemetaan gap kompetensi digital ASN, program sertifikasi profesi TIK BNSP/Internasional, dan pelatihan AI Generatif"),
        ("Penyusun Dokumen", "Tim Terpadu BKPSDM, Diskominfo, dan Tim Ahli Transformasi Digital")
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
    doc.add_heading("I. LATAR BELAKANG DAN URGENSI", level=2).runs[0].font.color.rgb = RGBColor(31, 78, 121)
    p1 = doc.add_paragraph()
    p1.add_run("1.1 Latar Belakang:\n").font.bold = True
    p1.add_run(
        "Pemerintah Digital (Pemdi) menuntut perubahan mendasar bukan hanya pada sistem dan infrastruktur komputasi, "
        "tetapi pada kapabilitas aparatur sipil negara (ASN) sebagai arsitek dan penggerak utama layanan. "
        "Berdasarkan PermenPANRB Nomor 8 Tahun 2026 tentang Evaluasi Pemerintahan Digital, Indikator 03 secara tegas "
        "menetapkan bahwa instansi pemerintah harus memiliki rencana pengembangan kapasitas terstruktur, sertifikasi profesi "
        "keahlian TIK yang terstandarisasi, serta pembudayaan pemanfaatan Artificial Intelligence (AI) dan analitik data.\n\n"
    )
    p1.add_run("1.2 Tujuan Dokumen TNA:\n").font.bold = True
    p1.add_run(
        "a. Mengidentifikasi kesenjangan (gap) kompetensi digital ASN di lingkungan [Nama Instansi].\n"
        "b. Menyusun peta jalan pengembangan kompetensi digital dari level dasar (digital literacy) hingga keahlian khusus (cyber security, AI prompt engineering, data science, cloud).\n"
        "c. Menjadi dasar resmi pengalokasian anggaran pengembangan SDM digital dalam Dokumen Pelaksanaan Anggaran (DPA) BKPSDM dan Diskominfo.\n"
        "d. Memenuhi standar pembuktian Kematangan Level 3 dan Level 4 pada Evaluasi Kinerja Pemerintah Digital (Indeks Pemdi)."
    )

    # BAB II
    doc.add_heading("II. METODOLOGI ASESMEN GAP KOMPETENSI DIGITAL", level=2).runs[0].font.color.rgb = RGBColor(31, 78, 121)
    p2 = doc.add_paragraph()
    p2.add_run(
        "Asesmen dilakukan terhadap 4 (empat) klaster target ASN dengan menggunakan model kuadran kompetensi digital:\n"
        "1. Klaster Pimpinan Tinggi / Administrator: Digital Leadership, Data-driven Decision Making, Etika AI Pemerintahan.\n"
        "2. Klaster Fungsional TIK (Pranata Komputer / Sandiman): Software Architecture, Cyber Security & Defensive Operations, Cloud Infrastructure, Data Engineering, API Interoperability.\n"
        "3. Klaster Analis Kebijakan & Perencana: AI Tools for Policy Brief, Big Data Visualization, Predictive Analytics.\n"
        "4. Klaster Pelaksana & Operator Layanan OPD: Digital Office Productivity, Keamanan Informasi Dasar (Anti-Phishing), Pelindungan Data Pribadi (UU PDP)."
    )

    # Tabel Hasil Asesmen Gap
    doc.add_heading("III. HASIL ASESMEN GAP DAN RENCANA INTERVENSI KEAHLIAN", level=2).runs[0].font.color.rgb = RGBColor(31, 78, 121)
    t_gap = doc.add_table(rows=5, cols=5)
    t_gap.alignment = WD_TABLE_ALIGNMENT.CENTER
    headers = ["Klaster Jabatan", "Target Kompetensi", "Kondisi Eksisting (Baseline)", "Gap Kesenjangan", "Intervensi / Solusi Sertifikasi"]
    for j, h in enumerate(headers):
        cell = t_gap.rows[0].cells[j]
        cell.text = h
        cell.paragraphs[0].runs[0].font.bold = True
        set_cell_background(cell, "1F4E79")
        cell.paragraphs[0].runs[0].font.color.rgb = RGBColor(255, 255, 255)

    gap_data = [
        ("Fungsional TIK & Siber", "Sertifikasi Keahlian Cyber Security & Cloud", "2 dari 12 staf memiliki sertifikasi internasional", "10 staf belum tersertifikasi resmi", "Sertifikasi BNSP Cyber Security Analyst & AWS/Google Cloud Associate"),
        ("Data & AI Specialist", "Data Science, Machine Learning & AI Prompting", "Belum ada ASN berkualifikasi formal data scientist", "Defisit kapabilitas AI modeling", "Bootcamp Data Analytics & Sertifikasi Certified AI Practitioner"),
        ("Analis Kebijakan", "Kajian Berbasis Big Data & Prompt AI Efektif", "Analisis naskah masih manual dan memakan waktu 14 hari", "Keterbatasan pemanfaatan GenAI", "Workshop Digital Policy Making with Generative AI"),
        ("Operator OPD / Umum", "Literasi Keamanan Informasi & UU PDP", "Tingkat kesadaran phishing masih rendah (skor 58/100)", "Rentan kebocoran kredensial", "Pelatihan Masif Cyber Security Hygiene & Pelindungan Data Pribadi")
    ]
    for i, row_data in enumerate(gap_data):
        row = t_gap.rows[i+1]
        for j, val in enumerate(row_data):
            cell = row.cells[j]
            cell.text = val
            set_cell_margins(cell, 50, 50, 60, 60)
            if i % 2 == 1:
                set_cell_background(cell, "F9FAFB")

    doc.add_paragraph("\n")

    # BAB IV
    doc.add_heading("IV. ROADMAP PROGRAM SERTIFIKASI DAN ALOKASI ANGGARAN DPA", level=2).runs[0].font.color.rgb = RGBColor(31, 78, 121)
    p3 = doc.add_paragraph()
    p3.add_run(
        "Rencana pembiayaan diintegrasikan pada Sub-Kegiatan Pengembangan Kapasitas ASN pada Dokumen Pelaksanaan Anggaran (DPA) "
        "Badan Kepegawaian dan Pengembangan SDM serta Diskominfo Tahun Anggaran 2026 dengan rincian target peserta 65 ASN bersertifikat kompetensi."
    )

    # Lembar Pengesahan
    doc.add_paragraph("\n")
    p_sign = doc.add_paragraph()
    p_sign.alignment = WD_ALIGN_PARAGRAPH.RIGHT
    p_sign.add_run("Ditetapkan di: [Nama Kota/Kabupaten]\nPada tanggal: 12 Januari 2026\n\n").font.size = Pt(10)
    p_sign.add_run("Mengetahui,\n").font.size = Pt(10)
    p_sign.add_run("KEPALA BADAN KEPEGAWAIAN DAN\nPENGEMBANGAN SDM (BKPSDM)\n\n\n\n\n").font.bold = True
    p_sign.add_run("[NAMA KEPALA BADAN, S.Sos., M.Si.]\n").font.bold = True
    p_sign.add_run("Pembina Utama Muda (IV/c)\nNIP. 19780512 200212 1 002\n").font.size = Pt(9)

    doc.save(filepath)

# =========================================================================
# 2. SURAT KEPUTUSAN (SK) TIM PENGEMBANG DIGITAL SQUAD & AI (DOCX - LEVEL 4)
# =========================================================================
def create_sk_digital_squad_docx(filepath):
    doc = Document()
    for s in doc.sections:
        s.top_margin = Inches(1)
        s.bottom_margin = Inches(1)
        s.left_margin = Inches(1)
        s.right_margin = Inches(1)

    # Kop Surat Garuda / Lambang
    hp = doc.add_paragraph()
    hp.alignment = WD_ALIGN_PARAGRAPH.CENTER
    r1 = hp.add_run("PEMERINTAH DAERAH / KEMENTERIAN / LEMBAGA [NAMA INSTANSI]\n")
    r1.font.bold = True
    r1.font.size = Pt(12)
    r2 = hp.add_run("SEKRETARIAT DAERAH\n")
    r2.font.bold = True
    r2.font.size = Pt(14)
    r3 = hp.add_run("Jalan Pahlawan Bangsa No. 1, Telp: (021) 8877665, Web: https://pemda.go.id\n")
    r3.font.size = Pt(9)
    r3.font.color.rgb = RGBColor(100, 100, 100)

    p_line = doc.add_paragraph()
    p_line.alignment = WD_ALIGN_PARAGRAPH.CENTER
    p_line.add_run("=" * 65).font.bold = True

    # Judul SK
    p_sk = doc.add_paragraph()
    p_sk.alignment = WD_ALIGN_PARAGRAPH.CENTER
    r_sk1 = p_sk.add_run("KEPUTUSAN SEKRETARIS DAERAH / KEPALA INSTANSI [NAMA INSTANSI]\n")
    r_sk1.font.bold = True
    r_sk1.font.size = Pt(12)
    r_sk2 = p_sk.add_run("NOMOR: 800.1.2/045/KEP/SETDA/2026\n\n")
    r_sk2.font.bold = True
    r_sk2.font.size = Pt(11)
    r_sk3 = p_sk.add_run("TENTANG\n\nPEMBENTUKAN TIM PENGEMBANG DIGITAL (DIGITAL TALENT SQUAD) DAN LABORATORIUM KECERDASAN BUATAN (AI LAB) PEMERINTAH DIGITAL [NAMA INSTANSI]\nTAHUN ANGGARAN 2026")
    r_sk3.font.bold = True
    r_sk3.font.size = Pt(12)
    r_sk3.font.color.rgb = RGBColor(31, 78, 121)

    # Konsiderans
    doc.add_paragraph("\n")
    doc.add_paragraph("SEKRETARIS DAERAH / KEPALA INSTANSI [NAMA INSTANSI],").runs[0].font.bold = True
    
    t_kon = doc.add_table(rows=3, cols=2)
    t_kon.alignment = WD_TABLE_ALIGNMENT.CENTER
    kons = [
        ("Menimbang", ": a. bahwa dalam rangka akselerasi integrasi layanan publik dan perumusan kebijakan berbasis data, dibutuhkan tim teknis internal yang memiliki kompetensi spesifik di bidang rekayasa perangkat lunak, keamanan siber, dan adopsi kecerdasan buatan (Artificial Intelligence);\n"
                      "b. bahwa berdasarkan PermenPANRB Nomor 8 Tahun 2026 tentang Evaluasi Pemerintahan Digital (Indikator 03), pemenuhan Level 4 mensyaratkan ketersediaan Tim Pengembang Digital (In-house Software Engineer / Data Scientist / AI Specialist) resmi;\n"
                      "c. bahwa berdasarkan pertimbangan sebagaimana dimaksud dalam huruf a dan huruf b, perlu menetapkan Keputusan tentang Pembentukan Tim Pengembang Digital."),
        ("Mengingat", ": 1. Undang-Undang Nomor 20 Tahun 2023 tentang Aparatur Sipil Negara;\n"
                      "2. Peraturan Presiden Nomor 95 Tahun 2018 tentang Sistem Pemerintahan Berbasis Elektronik;\n"
                      "3. Peraturan Presiden Nomor 82 Tahun 2023 tentang Percepatan Transformasi Digital dan Keterpaduan Layanan Digital Nasional;\n"
                      "4. Peraturan Menteri PANRB Nomor 8 Tahun 2026 tentang Evaluasi Pemerintahan Digital."),
        ("MEMUTUSKAN", ":")
    ]
    for i, (k, v) in enumerate(kons):
        row = t_kon.rows[i]
        c0, c1 = row.cells[0], row.cells[1]
        c0.width = Inches(1.5)
        c1.width = Inches(5.0)
        c0.text = k
        c1.text = v
        c0.paragraphs[0].runs[0].font.bold = True

    # Diktum
    doc.add_paragraph("\n")
    p_dik = doc.add_paragraph()
    p_dik.add_run("Menetapkan :\n").font.bold = True
    p_dik.add_run("KESATU : Membentuk Tim Pengembang Digital (Digital Talent Squad) dan Laboratorium Kecerdasan Buatan (AI Lab) di lingkungan [Nama Instansi] Tahun Anggaran 2026 dengan susunan sebagaimana tercantum dalam Lampiran I Keputusan ini.\n\n")
    p_dik.add_run("KEDUA : Tim Pengembang Digital sebagaimana dimaksud Diktum KESATU memiliki tugas dan tanggung jawab:\n"
                  "  1. Mengembangkan arsitektur solusi digital dan interoperabilitas API antarlayanan publik daerah;\n"
                  "  2. Membangun model kecerdasan buatan (Artificial Intelligence) dan machine learning untuk analisis prediktif data sektoral (stunting, kemiskinan, pendapatan daerah);\n"
                  "  3. Mengimplementasikan Generative AI dan otomatisasi naskah dinas untuk mereduksi waktu proses administrasi birokrasi;\n"
                  "  4. Menjamin kelaikan keamanan kode sumber aplikasi (DevSecOps) dan pengujian penetrasi (pentest) sebelum sistem diluncurkan ke publik;\n"
                  "  5. Menyusun panduan etika pemanfaatan AI (AI Ethics Guidelines) bagi seluruh ASN di instansi.\n\n")
    p_dik.add_run("KETIGA : Segala biaya yang timbul akibat ditetapkannya Keputusan ini dibebankan pada Dokumen Pelaksanaan Anggaran (DPA) Dinas Komunikasi dan Informatika Tahun Anggaran 2026.\n\n")
    p_dik.add_run("KEEMPAT : Keputusan ini mulai berlaku pada tanggal ditetapkan, dengan ketentuan apabila di kemudian hari terdapat kekeliruan akan dilakukan perbaikan sebagaimana mestinya.\n")

    # Tanda Tangan
    p_ttd = doc.add_paragraph()
    p_ttd.alignment = WD_ALIGN_PARAGRAPH.RIGHT
    p_ttd.add_run("Ditetapkan di: [Nama Kota]\nPada tanggal: 05 Januari 2026\n\n").font.size = Pt(10)
    p_ttd.add_run("SEKRETARIS DAERAH [NAMA INSTANSI],\n\n\n\n\n").font.bold = True
    p_ttd.add_run("[NAMA SEKRETARIS DAERAH, S.E., M.M.]\n").font.bold = True
    p_ttd.add_run("Pembina Utama Madya (IV/d)\nNIP. 19720415 199803 1 003\n").font.size = Pt(9)

    # Lampiran SK
    doc.add_page_break()
    p_lamp = doc.add_paragraph()
    p_lamp.alignment = WD_ALIGN_PARAGRAPH.LEFT
    p_lamp.add_run("LAMPIRAN I: KEPUTUSAN SEKRETARIS DAERAH\nNOMOR: 800.1.2/045/KEP/SETDA/2026\nTENTANG SUSUNAN PERSONEL TIM PENGEMBANG DIGITAL SQUAD & AI LAB\n\n").font.bold = True

    t_squad = doc.add_table(rows=7, cols=5)
    t_squad.alignment = WD_TABLE_ALIGNMENT.CENTER
    squad_headers = ["No", "Peran / Spesialisasi", "Nama Personel & NIP", "Jabatan Fungsional", "Keahlian & Sertifikasi Profesi"]
    for j, h in enumerate(squad_headers):
        cell = t_squad.rows[0].cells[j]
        cell.text = h
        cell.paragraphs[0].runs[0].font.bold = True
        set_cell_background(cell, "1F4E79")
        cell.paragraphs[0].runs[0].font.color.rgb = RGBColor(255, 255, 255)

    squad_data = [
        ("1", "Lead Digital Architect", "Ir. Ahmad Fauzi, M.Kom (1985...)", "Pranata Komputer Madya", "The Open Group TOGAF 9.2, Cloud Solutions Architect"),
        ("2", "Data Scientist & AI Specialist", "Rian Hidayat, S.Kom, M.Cs (1990...)", "Pranata Komputer Muda", "Certified AI Practitioner, Python Data Science, NLP"),
        ("3", "Senior Software Engineer (Fullstack)", "Dimas Prasetyo, S.Kom (1992...)", "Pranata Komputer Pertama", "Certified Secure Software Lifecycle, Node/React/Go"),
        ("4", "Cyber Security & DevSecOps", "Budi Wicaksono, S.Tr.Kom (1994...)", "Manggala Informatika", "CEH (Certified Ethical Hacker), ISO 27001 Lead Implementer"),
        ("5", "UI/UX & AI Prompt Designer", "Siti Rahmawati, S.Ds (1995...)", "Pranata Komputer Pertama", "Google UX Professional, Generative AI Prompting"),
        ("6", "Quality Assurance & Code Auditor", "Hendri Setiawan, S.Kom (1993...)", "Pranata Komputer Pertama", "ISTQB Certified Tester, Automated API Testing")
    ]
    for i, rdata in enumerate(squad_data):
        row = t_squad.rows[i+1]
        for j, val in enumerate(rdata):
            cell = row.cells[j]
            cell.text = val
            set_cell_margins(cell, 50, 50, 60, 60)
            if i % 2 == 1:
                set_cell_background(cell, "F9FAFB")

    doc.save(filepath)

# =========================================================================
# 3. LAPORAN PEMANFAATAN AI & EVALUASI EFISIENSI ASN (DOCX - LEVEL 4 & 5)
# =========================================================================
def create_laporan_ai_efisiensi_docx(filepath):
    doc = Document()
    for s in doc.sections:
        s.top_margin = Inches(1)
        s.bottom_margin = Inches(1)
        s.left_margin = Inches(1)
        s.right_margin = Inches(1)

    # Kop Surat
    hp = doc.add_paragraph()
    hp.alignment = WD_ALIGN_PARAGRAPH.CENTER
    r1 = hp.add_run("DINAS KOMUNIKASI DAN INFORMATIKA / PENGELOLA PEMERINTAH DIGITAL\n")
    r1.font.bold = True
    r1.font.size = Pt(13)
    r2 = hp.add_run("KABUPATEN / KOTA / PROVINSI [NAMA DAERAH]\n")
    r2.font.bold = True
    r2.font.size = Pt(12)
    r3 = hp.add_run("Gedung Graha Informatika Lt. 3, Email: diskominfo@pemda.go.id\n")
    r3.font.size = Pt(9)
    r3.font.color.rgb = RGBColor(100, 100, 100)

    p_line = doc.add_paragraph()
    p_line.alignment = WD_ALIGN_PARAGRAPH.CENTER
    p_line.add_run("=" * 65).font.bold = True

    # Judul
    title = doc.add_heading(level=1)
    title.alignment = WD_ALIGN_PARAGRAPH.CENTER
    trun = title.add_run("LAPORAN IMPLEMENTASI PEMANFAATAN KECERDASAN BUATAN (AI)\nDAN EVALUASI DAMPAK EFISIENSI PRODUKTIVITAS KERJA ASN\nPERIODE EVALUASI TAHUN 2026")
    trun.font.size = Pt(13)
    trun.font.bold = True
    trun.font.color.rgb = RGBColor(31, 78, 121)

    # Executive Summary Box
    doc.add_heading("RINGKASAN EKSEKUTIF (EXECUTIVE SUMMARY)", level=2).runs[0].font.color.rgb = RGBColor(31, 78, 121)
    p_box = doc.add_paragraph()
    p_box.add_run(
        "Berdasarkan mandat PermenPANRB Nomor 8 Tahun 2026 tentang Evaluasi Pemerintahan Digital (Indikator 03 Kematangan SDM Pemdi), "
        "kriteria Level 4 dan Level 5 menuntut adanya adopsi teknologi mutakhir Artificial Intelligence (AI) dan pembuktian dampak "
        "terhadap efisiensi produktivitas birokrasi. Sepanjang Semester I Tahun 2026, [Nama Instansi] telah menerapkan 3 (tiga) inisiatif "
        "solusi berbasis kecerdasan buatan: (1) Asisten AI Perumusan Naskah Dinas dan Risalah Rapat, (2) Sistem Analisis Sentimen & Triase Otomatis Pengaduan SP4N-LAPOR!, "
        "dan (3) Model Analitik Prediktif Intervensi Kemiskinan Ekstrem. Implementasi ini berhasil menghemat 3.420 jam kerja ASN per semester "
        "serta mempercepat waktu respons layanan publik hingga 68%."
    )

    # Bab I: Kerangka Etika AI
    doc.add_heading("I. PEDOMAN ETIKA PENGGUNAAN AI OLEH ASN", level=2).runs[0].font.color.rgb = RGBColor(31, 78, 121)
    p_etika = doc.add_paragraph()
    p_etika.add_run(
        "Untuk mencegah bias informasi, pelanggaran kerahasiaan data rahasia negara, dan kebocoran data pribadi (UU PDP), instansi "
        "telah menetapkan 5 Prinsip Etika AI:\n"
        "1. Human-in-the-Loop: AI hanya berfungsi sebagai asisten (copilot); keputusan administratif final tetap berada pada pejabat definitif.\n"
        "2. Data Privacy: Dilarang memasukkan NIK, rekam medis, data intelijen, atau data sensitif ke dalam platform public AI tanpa enkripsi.\n"
        "3. Transparency & Explainability: Algoritma klasifikasi keputusan harus dapat dijelaskan metodologinya kepada publik.\n"
        "4. Akurasi & Verifikasi Fakta: Seluruh draf naskah yang dihasilkan AI wajib melalui fact-checking silang dengan regulasi resmi.\n"
        "5. Akuntabilitas Pengguna: Setiap ASN bertanggung jawab penuh atas dokumen kedinasan yang diparafnya."
    )

    # Bab II: Use Cases AI yang Diadopsi
    doc.add_heading("II. PORTOFOLIO DAN KASUS PENGGUNAAN (USE CASES) AI ASN", level=2).runs[0].font.color.rgb = RGBColor(31, 78, 121)
    t_use = doc.add_table(rows=4, cols=4)
    t_use.alignment = WD_TABLE_ALIGNMENT.CENTER
    u_headers = ["Inisiatif Solusi AI", "Teknologi & Model", "Unit Pengguna", "Fungsi Kedinasan"]
    for j, h in enumerate(u_headers):
        cell = t_use.rows[0].cells[j]
        cell.text = h
        cell.paragraphs[0].runs[0].font.bold = True
        set_cell_background(cell, "1F4E79")
        cell.paragraphs[0].runs[0].font.color.rgb = RGBColor(255, 255, 255)

    u_data = [
        ("AI Co-Pilot Naskah Dinas", "Local LLM & Retrieval-Augmented Generation (RAG)", "Seluruh Bagian Organisasi & Sekretariat", "Otomatisasi telaah staf, perangkum risalah rapat, dan konsistensi format tata naskah dinas"),
        ("Smart Triage Pengaduan", "NLP Sentiment & Classification Engine", "Diskominfo & Inspektorat", "Klasifikasi otomatis tiket aduan warga ke OPD tujuan dalam hitungan detik tanpa verifikasi manual"),
        ("Predictive Geospatial AI", "Random Forest & Geospatial Clustering", "Bappeda & Dinsos", "Pemetaan kantong kerawanan stunting dan bantuan sosial tepat sasaran menggunakan citra satelit")
    ]
    for i, rdata in enumerate(u_data):
        row = t_use.rows[i+1]
        for j, val in enumerate(rdata):
            cell = row.cells[j]
            cell.text = val
            set_cell_margins(cell, 50, 50, 60, 60)
            if i % 2 == 1:
                set_cell_background(cell, "F9FAFB")

    # Bab III: Kuantifikasi Efisiensi Kinerja (Level 5)
    doc.add_paragraph("\n")
    doc.add_heading("III. KUANTIFIKASI EVALUASI EFISIENSI DAN PRODUKTIVITAS ASN (LEVEL 5)", level=2).runs[0].font.color.rgb = RGBColor(31, 78, 121)
    
    t_eff = doc.add_table(rows=4, cols=5)
    t_eff.alignment = WD_TABLE_ALIGNMENT.CENTER
    eff_headers = ["Parameter Proses Kerja", "Waktu Sebelum AI (Manual)", "Waktu Pasca Adopsi AI", "Efisiensi Waktu (%)", "Dampak Produktivitas"]
    for j, h in enumerate(eff_headers):
        cell = t_eff.rows[0].cells[j]
        cell.text = h
        cell.paragraphs[0].runs[0].font.bold = True
        set_cell_background(cell, "2E7D32")
        cell.paragraphs[0].runs[0].font.color.rgb = RGBColor(255, 255, 255)

    eff_data = [
        ("Penyusunan Telaahan Staf & Policy Brief", "14 Jam / Dokumen", "3 Jam / Dokumen", "78.5% Lebih Cepat", "Output kajian kebijakan meningkat 3.2x lipat"),
        ("Disposisi & Triase Aduan Warga", "48 Jam (2 Hari Kerja)", "15 Menit (Otomatis)", "99.4% Lebih Cepat", "Tingkat penanganan aduan SP4N mencapai 94%"),
        ("Rekapitulasi Data Sektoral OPD", "5 Hari Kerja / Bulan", "2 Jam / Bulan", "95.0% Lebih Cepat", "ASN beralih fokus ke verifikasi lapangan")
    ]
    for i, rdata in enumerate(eff_data):
        row = t_eff.rows[i+1]
        for j, val in enumerate(rdata):
            cell = row.cells[j]
            cell.text = val
            set_cell_margins(cell, 50, 50, 60, 60)
            if i % 2 == 1:
                set_cell_background(cell, "F9FAFB")

    # Bab IV: Kesimpulan
    doc.add_paragraph("\n")
    doc.add_heading("IV. KESIMPULAN DAN REKOMENDASI PENGUATAN LEVEL OPTIMUM", level=2).runs[0].font.color.rgb = RGBColor(31, 78, 121)
    p_concl = doc.add_paragraph()
    p_concl.add_run(
        "Pemanfaatan AI telah membuktikan lonjakan signifikan dalam efisiensi birokrasi dan perumusan kebijakan. "
        "Untuk mempertahankan kriteria Level 5 Optimum pada Evaluasi Kinerja Pemerintah Digital 2026, instansi "
        "akan memperluas pembentukan Digital Talent Pool dan mendaftarkan Hak Cipta (HAKI) atas algoritma kecerdasan buatan "
        "yang dikembangkan secara in-house oleh ASN daerah."
    )

    # Tanda Tangan
    doc.add_paragraph("\n")
    p_ttd = doc.add_paragraph()
    p_ttd.alignment = WD_ALIGN_PARAGRAPH.RIGHT
    p_ttd.add_run("Disahkan di: [Nama Kota]\nPada tanggal: 26 Juni 2026\n\n").font.size = Pt(10)
    p_ttd.add_run("KEPALA DINAS KOMUNIKASI DAN INFORMATIKA\nSELAKU WALIDATA & KOORDINATOR TEKNIS DIGITAL\n\n\n\n\n").font.bold = True
    p_ttd.add_run("[NAMA KEPALA DINAS, S.T., M.Kom.]\n").font.bold = True
    p_ttd.add_run("Pembina Utama Muda (IV/c)\nNIP. 19750824 200003 1 005\n").font.size = Pt(9)

    doc.save(filepath)

# =========================================================================
# 4. TEMPLATE EXCEL 1: MATRIKS INVENTARISASI SERTIFIKASI & GAP KOMPETENSI
# =========================================================================
def create_excel_matriks_kompetensi(filepath):
    wb = openpyxl.Workbook()
    # Sheet 1: Dashboard
    ws1 = wb.active
    ws1.title = "Dashboard_Kompetensi"
    ws1.views.sheetView[0].showGridLines = True

    # Styling helper
    font_title = Font(name="Calibri", size=15, bold=True, color="1F4E79")
    font_sub = Font(name="Calibri", size=10, italic=True, color="555555")
    font_bold = Font(name="Calibri", size=11, bold=True)
    font_header = Font(name="Calibri", size=11, bold=True, color="FFFFFF")
    font_white = Font(name="Calibri", size=10, bold=True, color="FFFFFF")
    fill_navy = PatternFill(start_color="1F4E79", end_color="1F4E79", fill_type="solid")
    fill_blue_card = PatternFill(start_color="2980B9", end_color="2980B9", fill_type="solid")
    fill_green_card = PatternFill(start_color="27AE60", end_color="27AE60", fill_type="solid")
    fill_purple_card = PatternFill(start_color="8E44AD", end_color="8E44AD", fill_type="solid")
    fill_orange_card = PatternFill(start_color="D35400", end_color="D35400", fill_type="solid")
    fill_zebra = PatternFill(start_color="F2F4F8", end_color="F2F4F8", fill_type="solid")
    thin_border = Border(
        left=Side(style='thin', color='D0D5DD'),
        right=Side(style='thin', color='D0D5DD'),
        top=Side(style='thin', color='D0D5DD'),
        bottom=Side(style='thin', color='D0D5DD')
    )

    ws1["A1"] = "DASHBOARD MONITORING KOMPETENSI SDM PEMERINTAH DIGITAL"
    ws1["A1"].font = font_title
    ws1["A2"] = "PermenPANRB No. 8 Tahun 2026 - Indikator 03 (Tingkat Kematangan Sumber Daya Manusia Pemerintah Digital)"
    ws1["A2"].font = font_sub

    # KPI Summary Cards
    cards = [
        ("B4", "C5", "TOTAL ASN FUNGSIONAL TIK", "38 Personel", fill_blue_card),
        ("D4", "E5", "ASN BERSERTIFIKAT BNSP / GLOBAL", "24 Personel (63%)", fill_green_card),
        ("F4", "G5", "ASN KOMPETEN AI & ANALITIK", "15 Personel (39%)", fill_purple_card),
        ("H4", "I5", "TARGET PENAMBAHAN TAHUN 2026", "+18 Sertifikasi", fill_orange_card)
    ]
    for c_start, c_end, title, val, fill in cards:
        ws1.merge_cells(f"{c_start}:{c_end}")
        top_cell = ws1[c_start]
        top_cell.value = f"{title}\n{val}"
        top_cell.font = font_white
        top_cell.fill = fill
        top_cell.alignment = Alignment(horizontal="center", vertical="center", wrap_text=True)

    # Table Rekap Per Bidang Keahlian
    ws1["B8"] = "REKAPITULASI SERTIFIKASI PROFESI DIGITAL ASN BERDASARKAN BIDANG KEAHLIAN"
    ws1["B8"].font = font_bold

    rekap_headers = ["No", "Bidang Spesialisasi Digital", "Target Standar", "ASN Tersertifikasi", "Gap Defisit", "Status Kematangan"]
    for j, h in enumerate(rekap_headers, start=2):
        cell = ws1.cell(row=9, column=j, value=h)
        cell.font = font_header
        cell.fill = fill_navy
        cell.alignment = Alignment(horizontal="center", vertical="center")
        cell.border = thin_border

    rekap_data = [
        ("1", "Cyber Security Analyst & Pentester", 8, 5, 3, "Memenuhi Level 3"),
        ("2", "Cloud Infrastructure & DevOps", 6, 4, 2, "Memenuhi Level 3"),
        ("3", "Data Scientist & AI Prompt Specialist", 6, 4, 2, "Memenuhi Level 4"),
        ("4", "Enterprise Architecture (TOGAF)", 3, 2, 1, "Memenuhi Level 4"),
        ("5", "Software Quality Assurance & DevSecOps", 5, 3, 2, "Memenuhi Level 3"),
        ("6", "Database Administrator & Data Governance", 5, 4, 1, "Memenuhi Level 3"),
        ("7", "UI/UX Designer & Design Thinking", 5, 2, 3, "Dalam Pembinaan")
    ]
    for r_idx, r_vals in enumerate(rekap_data, start=10):
        for c_idx, val in enumerate(r_vals, start=2):
            cell = ws1.cell(row=r_idx, column=c_idx, value=val)
            cell.font = Font(name="Calibri", size=10)
            cell.border = thin_border
            if c_idx in (2, 4, 5, 6, 7):
                cell.alignment = Alignment(horizontal="center")
            if r_idx % 2 == 1:
                cell.fill = fill_zebra

    # Sheet 2: Database Sertifikasi ASN
    ws2 = wb.create_sheet(title="Database_Sertifikasi_ASN")
    ws2.views.sheetView[0].showGridLines = True
    ws2["A1"] = "DATABASE INVENTARISASI SERTIFIKAT KOMPETENSI TIK & AI ASN"
    ws2["A1"].font = font_title
    ws2["A2"] = "Bukti Dukung Level 3 & Level 4 PermenPANRB 8/2026 (Sertifikasi Standar BNSP / Industri Global)"
    ws2["A2"].font = font_sub

    db_headers = [
        "No", "NIP Pegawai", "Nama Lengkap ASN", "Unit Kerja", "Jabatan Fungsional",
        "Nama Sertifikasi", "Kategori Keahlian", "Lembaga Penerbit", "No. Registrasi Sertifikat", "Masa Berlaku", "Status Validasi"
    ]
    for col_idx, h in enumerate(db_headers, start=1):
        cell = ws2.cell(row=4, column=col_idx, value=h)
        cell.font = font_header
        cell.fill = fill_navy
        cell.alignment = Alignment(horizontal="center", vertical="center", wrap_text=True)
        cell.border = thin_border

    sample_certs = [
        ("1", "198506122009031002", "Ir. Ahmad Fauzi, M.Kom", "Diskominfo", "Pranata Komputer Madya", "TOGAF 9.2 Certified Enterprise Architect", "Enterprise Architecture", "The Open Group", "TOGAF-92-99882", "2028-12-31", "Terverifikasi Valid"),
        ("2", "199002152014021004", "Rian Hidayat, S.Kom, M.Cs", "Diskominfo", "Pranata Komputer Muda", "Certified AI Practitioner (CAIP)", "Artificial Intelligence", "CertNexus / BNSP", "BNSP-AI-2024-0012", "2027-05-15", "Terverifikasi Valid"),
        ("3", "199208112015031001", "Dimas Prasetyo, S.Kom", "Diskominfo", "Pranata Komputer Pertama", "AWS Certified Solutions Architect", "Cloud Infrastructure", "Amazon Web Services", "AWS-ARCH-781923", "2026-11-20", "Terverifikasi Valid"),
        ("4", "199403252018011003", "Budi Wicaksono, S.Tr.Kom", "Diskominfo", "Manggala Informatika Pertama", "Certified Ethical Hacker (CEH v12)", "Cyber Security", "EC-Council", "ECC-CEH-541290", "2027-08-10", "Terverifikasi Valid"),
        ("5", "199507192019022005", "Siti Rahmawati, S.Ds", "Diskominfo", "Pranata Komputer Pertama", "Google Professional UX Designer", "UI/UX Design", "Google Coursera", "GGL-UX-889123", "Seumur Hidup", "Terverifikasi Valid"),
        ("6", "199104082015031002", "Irfan Maulana, S.Stat", "Bappeda", "Statistisi Ahli Muda", "Certified Big Data & Data Science", "Data Science", "BNSP Lembaga Sertifikasi", "BNSP-DS-2025-1104", "2028-03-30", "Terverifikasi Valid"),
        ("7", "198811202010011005", "Dra. Nurul Hidayati", "BKPSDM", "Analis SDM Aparatur Ahli Muda", "Pemanfaatan AI Generatif dalam Kebijakan Publik", "AI Governance", "LAN RI / Komdigi", "LAN-AI-2026-441", "2029-01-15", "Terverifikasi Valid")
    ]
    for r_idx, row_vals in enumerate(sample_certs, start=5):
        for c_idx, val in enumerate(row_vals, start=1):
            cell = ws2.cell(row=r_idx, column=c_idx, value=val)
            cell.font = Font(name="Calibri", size=10)
            cell.border = thin_border
            if c_idx in (1, 2, 7, 10, 11):
                cell.alignment = Alignment(horizontal="center")
            if r_idx % 2 == 1:
                cell.fill = fill_zebra

    # Sheet 3: Analisis Gap Kompetensi
    ws3 = wb.create_sheet(title="Analisis_Gap_Kompetensi")
    ws3.views.sheetView[0].showGridLines = True
    ws3["A1"] = "MATRIKS ANALISIS KEBUTUHAN PELATIHAN (TNA) DAN GAP KOMPETENSI"
    ws3["A1"].font = font_title

    gap_headers = [
        "No", "Nama Jabatan / Peran", "Unit Kerja", "Kompetensi Wajib PermenPANRB 8/2026",
        "Tingkat Kemahiran Riil (1-5)", "Standar Target (1-5)", "Defisit Gap", "Program Pelatihan / Sertifikasi yang Dibutuhkan", "Prioritas"
    ]
    for c_idx, h in enumerate(gap_headers, start=1):
        cell = ws3.cell(row=3, column=c_idx, value=h)
        cell.font = font_header
        cell.fill = fill_navy
        cell.alignment = Alignment(horizontal="center", vertical="center", wrap_text=True)
        cell.border = thin_border

    gap_rows = [
        ("1", "Pengelola Jaringan Komputer", "Diskominfo", "Network Security & Zero Trust Architecture", 2, 4, 2, "Diklat Certified Network Defender (CND)", "Tinggi"),
        ("2", "Analis Keamanan Siber", "Diskominfo", "Incident Response & Malware Reverse Engineering", 3, 5, 2, "Sertifikasi CHFI / GIAC Cyber Defense", "Sangat Tinggi"),
        ("3", "Pengembang Aplikasi Web", "Diskominfo", "Secure Coding Practice (OWASP Top 10) & DevSecOps", 3, 4, 1, "Sertifikasi DevSecOps Professional", "Tinggi"),
        ("4", "Analis Kebijakan / Perencana", "Bappeda", "Analitik Big Data & AI Prompting Kedinasan", 2, 4, 2, "Workshop Pemanfaatan AI untuk Naskah Kebijakan", "Sedang"),
        ("5", "Operator Aplikasi Layanan", "Dinas Kesehatan", "Cyber Hygiene & Pencegahan Kebocoran Data Pasien", 2, 4, 2, "Bimtek Pelindungan Data Pribadi Medis", "Tinggi")
    ]
    for r_idx, rvals in enumerate(gap_rows, start=4):
        for c_idx, val in enumerate(rvals, start=1):
            cell = ws3.cell(row=r_idx, column=c_idx, value=val)
            cell.font = Font(name="Calibri", size=10)
            cell.border = thin_border
            if c_idx in (1, 5, 6, 7, 9):
                cell.alignment = Alignment(horizontal="center")
            if r_idx % 2 == 1:
                cell.fill = fill_zebra

    # Auto-fit width for all sheets
    for ws in [ws1, ws2, ws3]:
        for col in ws.columns:
            max_len = max(len(str(cell.value or '')) for cell in col)
            col_letter = get_column_letter(col[0].column)
            ws.column_dimensions[col_letter].width = max(max_len + 3, 12)

    wb.save(filepath)

# =========================================================================
# 5. TEMPLATE EXCEL 2: MONITORING PEMANFAATAN AI & EFISIENSI PRODUKTIVITAS
# =========================================================================
def create_excel_monitoring_ai_efisiensi(filepath):
    wb = openpyxl.Workbook()
    
    # Sheet 1: Use Cases AI
    ws1 = wb.active
    ws1.title = "Katalog_Use_Case_AI"
    ws1.views.sheetView[0].showGridLines = True

    font_title = Font(name="Calibri", size=15, bold=True, color="1F4E79")
    font_sub = Font(name="Calibri", size=10, italic=True, color="555555")
    font_header = Font(name="Calibri", size=11, bold=True, color="FFFFFF")
    font_zebra = PatternFill(start_color="F2F4F8", end_color="F2F4F8", fill_type="solid")
    fill_navy = PatternFill(start_color="1F4E79", end_color="1F4E79", fill_type="solid")
    fill_green_header = PatternFill(start_color="1E7E34", end_color="1E7E34", fill_type="solid")
    thin_border = Border(
        left=Side(style='thin', color='D0D5DD'),
        right=Side(style='thin', color='D0D5DD'),
        top=Side(style='thin', color='D0D5DD'),
        bottom=Side(style='thin', color='D0D5DD')
    )

    ws1["A1"] = "KATALOG INVENTARISASI SOLUSI ARTIFICIAL INTELLIGENCE (AI) PEMERINTAH DIGITAL"
    ws1["A1"].font = font_title
    ws1["A2"] = "Kriteria Level 4 & Level 5 PermenPANRB No. 8/2026 - Pemanfaatan Teknologi Mutakhir ASN"
    ws1["A2"].font = font_sub

    uc_headers = [
        "No", "Kode Inovasi AI", "Nama Solusi / Aplikasi AI", "Tipe Algoritma AI",
        "Unit Kerja Pengguna", "Fungsi Birokrasi yang Dibantu", "Status Deployment", "Tingkat Kepatuhan Etika AI"
    ]
    for c_idx, h in enumerate(uc_headers, start=1):
        cell = ws1.cell(row=4, column=c_idx, value=h)
        cell.font = font_header
        cell.fill = fill_navy
        cell.alignment = Alignment(horizontal="center", vertical="center", wrap_text=True)
        cell.border = thin_border

    uc_data = [
        ("1", "AI-01-DOC", "Asisten AI Perumusan Naskah Dinas & Risalah Rapat", "Large Language Model (RAG)", "Sekretariat Daerah & OPD", "Otomatisasi draf telaahan staf dan surat dinas", "Produksi Aktif", "100% Sesuai Pedoman"),
        ("2", "AI-02-TRG", "Triase Otomatis Aduan Publik SP4N-LAPOR!", "NLP & Text Classification", "Diskominfo & Inspektorat", "Klasifikasi instan tiket aduan ke OPD teknis", "Produksi Aktif", "100% Sesuai Pedoman"),
        ("3", "AI-03-GEO", "Model Spasial Prediksi Kemiskinan & Stunting", "Machine Learning (Random Forest)", "Bappeda & Dinsos", "Analitik penargetan sasaran bansos terpadu", "Produksi Aktif", "100% Sesuai Pedoman"),
        ("4", "AI-04-BOT", "Chatbot Layanan Perizinan Warga 24/7", "Conversational AI Engine", "DPMPTSP", "Panduan persyaratan izin dan pengecekan berkas", "Produksi Aktif", "100% Sesuai Pedoman")
    ]
    for r_idx, rvals in enumerate(uc_data, start=5):
        for c_idx, val in enumerate(rvals, start=1):
            cell = ws1.cell(row=r_idx, column=c_idx, value=val)
            cell.font = Font(name="Calibri", size=10)
            cell.border = thin_border
            if c_idx in (1, 2, 7, 8):
                cell.alignment = Alignment(horizontal="center")
            if r_idx % 2 == 1:
                cell.fill = font_zebra

    # Sheet 2: Pengukuran Efisiensi Kerja (Level 5)
    ws2 = wb.create_sheet(title="Pengukuran_Efisiensi_Kerja")
    ws2.views.sheetView[0].showGridLines = True
    ws2["A1"] = "MATRIKS PENGUKURAN DAMPAK EFISIENSI KERJA & PRODUKTIVITAS ASN (LEVEL 5)"
    ws2["A1"].font = font_title
    ws2["A2"] = "Komparasi Waktu Kerja Sebelum vs Sesudah Adopsi AI (Bukti Dukung Level 5 PermenPANRB 8/2026)"
    ws2["A2"].font = font_sub

    eff_headers = [
        "No", "Uraian Aktivitas Kedinasan", "Volume Dokumen / Bulan",
        "Waktu Manual / Dok (Jam)", "Total Jam Kerja Manual (Bulan)",
        "Waktu Berbantuan AI (Jam)", "Total Jam Kerja AI (Bulan)",
        "Penghematan Jam Kerja (%)", "Jam Efektif Dihemat / Bulan"
    ]
    for c_idx, h in enumerate(eff_headers, start=1):
        cell = ws2.cell(row=4, column=c_idx, value=h)
        cell.font = font_header
        cell.fill = fill_green_header
        cell.alignment = Alignment(horizontal="center", vertical="center", wrap_text=True)
        cell.border = thin_border

    eff_rows = [
        ("1", "Penyusunan Draf Naskah Dinas & Telaahan Staf", 250, 6.0, 1500, 1.5, 375, "75.0%", 1125),
        ("2", "Pemilahan & Klasifikasi Disposisi Aduan Publik", 800, 0.5, 400, 0.05, 40, "90.0%", 360),
        ("3", "Penyusunan Risalah & Ringkasan Notulensi Rapat", 120, 3.0, 360, 0.5, 60, "83.3%", 300),
        ("4", "Analisis & Rekapitulasi Data Sektoral Bappeda", 40, 16.0, 640, 3.0, 120, "81.3%", 520),
        ("5", "Pemeriksaan Kelengkapan Dokumen Izin Usaha", 500, 1.0, 500, 0.2, 100, "80.0%", 400)
    ]
    for r_idx, rvals in enumerate(eff_rows, start=5):
        for c_idx, val in enumerate(rvals, start=1):
            cell = ws2.cell(row=r_idx, column=c_idx, value=val)
            cell.font = Font(name="Calibri", size=10)
            cell.border = thin_border
            if c_idx in (1, 3, 4, 5, 6, 7, 8, 9):
                cell.alignment = Alignment(horizontal="center")
            if r_idx % 2 == 1:
                cell.fill = font_zebra

    # Summary Row
    ws2["A10"] = "TOTAL PENGHEMATAN JAM KERJA ASN PER BULAN"
    ws2.merge_cells("A10:H10")
    ws2["A10"].font = Font(name="Calibri", size=11, bold=True, color="FFFFFF")
    ws2["A10"].fill = fill_navy
    ws2["A10"].alignment = Alignment(horizontal="right", vertical="center")
    ws2["I10"] = "=SUM(I5:I9)"
    ws2["I10"].font = Font(name="Calibri", size=11, bold=True, color="FFFFFF")
    ws2["I10"].fill = fill_navy
    ws2["I10"].alignment = Alignment(horizontal="center", vertical="center")

    # Sheet 3: Talent Pool Digital
    ws3 = wb.create_sheet(title="Digital_Talent_Pool_Merit")
    ws3.views.sheetView[0].showGridLines = True
    ws3["A1"] = "DATABASE DIGITAL TALENT POOL & JENJANG KARIER ASN BERBASIS MERIT"
    ws3["A1"].font = font_title

    pool_headers = [
        "No", "Nama Personel", "Unit Asal", "Klaster Keahlian Utama",
        "Skor Asesmen Teknis (0-100)", "Portofolio Solusi / Inovasi", "Status Talent Pool", "Rekomendasi Penugasan"
    ]
    for c_idx, h in enumerate(pool_headers, start=1):
        cell = ws3.cell(row=3, column=c_idx, value=h)
        cell.font = font_header
        cell.fill = fill_navy
        cell.alignment = Alignment(horizontal="center", vertical="center")
        cell.border = thin_border

    pool_rows = [
        ("1", "Ir. Ahmad Fauzi, M.Kom", "Diskominfo", "Enterprise Architecture & Cloud", 95, "Arsitektur SPBE Terpadu 2026", "Top 5% Talent", "Kepala Bidang TIK / Chief Technology Officer"),
        ("2", "Rian Hidayat, S.Kom, M.Cs", "Diskominfo", "AI Modeling & Machine Learning", 92, "Model AI Prediksi Stunting", "Top 5% Talent", "Lead AI Lab & Data Scientist Daerah"),
        ("3", "Dimas Prasetyo, S.Kom", "Diskominfo", "Fullstack Modern Web & API", 89, "Portal Terpadu Satu Pintu", "Top 10% Talent", "Lead Software Engineer"),
        ("4", "Budi Wicaksono, S.Tr.Kom", "Diskominfo", "Cyber Security & Forensic", 91, "Arsitektur SOC & STR CSIRT", "Top 5% Talent", "Ketua Harian CSIRT Daerah")
    ]
    for r_idx, rvals in enumerate(pool_rows, start=4):
        for c_idx, val in enumerate(rvals, start=1):
            cell = ws3.cell(row=r_idx, column=c_idx, value=val)
            cell.font = Font(name="Calibri", size=10)
            cell.border = thin_border
            if c_idx in (1, 5, 7):
                cell.alignment = Alignment(horizontal="center")
            if r_idx % 2 == 1:
                cell.fill = font_zebra

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
    print("Mulai membuat template dokumen bukti dukung resmi Indikator 03...")

    # File 1: TNA SDM Digital (DOCX)
    f1_out = os.path.join(OUTPUT_DIR, "Template_TNA_dan_Rencana_Pengembangan_SDM_Digital_Indikator03.docx")
    f1_pub = os.path.join(PUBLIC_DIR, "Template_TNA_dan_Rencana_Pengembangan_SDM_Digital_Indikator03.docx")
    create_tna_sdm_digital_docx(f1_out)
    create_tna_sdm_digital_docx(f1_pub)
    print("-> Selesai: Template TNA dan Rencana Pengembangan SDM Digital (DOCX)")

    # File 2: SK Digital Squad (DOCX)
    f2_out = os.path.join(OUTPUT_DIR, "Template_SK_Tim_Pengembang_Digital_Squad_Indikator03.docx")
    f2_pub = os.path.join(PUBLIC_DIR, "Template_SK_Tim_Pengembang_Digital_Squad_Indikator03.docx")
    create_sk_digital_squad_docx(f2_out)
    create_sk_digital_squad_docx(f2_pub)
    print("-> Selesai: Template SK Tim Pengembang Digital Squad (DOCX)")

    # File 3: Laporan Pemanfaatan AI & Efisiensi (DOCX)
    f3_out = os.path.join(OUTPUT_DIR, "Template_Laporan_Pemanfaatan_AI_dan_Evaluasi_Efisiensi_Indikator03.docx")
    f3_pub = os.path.join(PUBLIC_DIR, "Template_Laporan_Pemanfaatan_AI_dan_Evaluasi_Efisiensi_Indikator03.docx")
    create_laporan_ai_efisiensi_docx(f3_out)
    create_laporan_ai_efisiensi_docx(f3_pub)
    print("-> Selesai: Template Laporan Pemanfaatan AI dan Evaluasi Efisiensi (DOCX)")

    # File 4: Matriks Sertifikasi & Gap (XLSX)
    f4_out = os.path.join(OUTPUT_DIR, "Template_Matriks_Inventarisasi_Sertifikasi_dan_Gap_Kompetensi_SDM_Indikator03.xlsx")
    f4_pub = os.path.join(PUBLIC_DIR, "Template_Matriks_Inventarisasi_Sertifikasi_dan_Gap_Kompetensi_SDM_Indikator03.xlsx")
    create_excel_matriks_kompetensi(f4_out)
    create_excel_matriks_kompetensi(f4_pub)
    print("-> Selesai: Template Matriks Inventarisasi Sertifikasi & Gap SDM (XLSX)")

    # File 5: Monitoring AI & Efisiensi (XLSX)
    f5_out = os.path.join(OUTPUT_DIR, "Template_Monitoring_Pemanfaatan_AI_dan_Produktivitas_ASN_Indikator03.xlsx")
    f5_pub = os.path.join(PUBLIC_DIR, "Template_Monitoring_Pemanfaatan_AI_dan_Produktivitas_ASN_Indikator03.xlsx")
    create_excel_monitoring_ai_efisiensi(f5_out)
    create_excel_monitoring_ai_efisiensi(f5_pub)
    print("-> Selesai: Template Monitoring Pemanfaatan AI & Efisiensi Produktivitas (XLSX)")

    print("\nSeluruh 5 Template Dokumen Bukti Dukung Resmi Indikator 03 berhasil dibuat!")
