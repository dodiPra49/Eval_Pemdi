-- ============================================================================
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

-- 5. MASTER 20 INDIKATOR
INSERT INTO indicators (id, nomor, kode, nama, domain_id, domain_name, aspect_name, bobot, deskripsi, tips_asesor)
VALUES ('ind-01', 1, 'IND-01', 'Tingkat Kematangan Tata Kelola Pemerintah Digital', 'aspek-1', 'Tata Kelola dan Manajemen', 'Tata Kelola Pemdi', 5, 'Menilai kelembagaan, arsitektur pemerintah digital, dan peta rencana strategis yang memadukan seluruh proses digitalisasi di lingkungan instansi.', 'Pastikan regulasi arsitektur telah diundangkan secara formal dan terhubung ke SIA-SPBE Nasional.')
ON DUPLICATE KEY UPDATE nama=VALUES(nama), deskripsi=VALUES(deskripsi), tips_asesor=VALUES(tips_asesor);
INSERT INTO indicators (id, nomor, kode, nama, domain_id, domain_name, aspect_name, bobot, deskripsi, tips_asesor)
VALUES ('ind-02', 2, 'IND-02', 'Tingkat Kematangan Manajemen Layanan Digital Pemerintah', 'aspek-1', 'Tata Kelola dan Manajemen', 'Manajemen Layanan', 5, 'Menilai penerapan manajemen risiko, manajemen perubahan, manajemen aset TIK, dan service desk manajemen layanan digital berstandar.', 'Sertakan risiko-risiko mutakhir seperti insiden ransomware, kebocoran data pribadi, dan kegagalan migrasi cloud.')
ON DUPLICATE KEY UPDATE nama=VALUES(nama), deskripsi=VALUES(deskripsi), tips_asesor=VALUES(tips_asesor);
INSERT INTO indicators (id, nomor, kode, nama, domain_id, domain_name, aspect_name, bobot, deskripsi, tips_asesor)
VALUES ('ind-03', 3, 'IND-03', 'Tingkat Kematangan Sumber Daya Manusia Pemerintah Digital', 'aspek-2', 'Penyelenggara', 'SDM Pemdi & AI', 5, 'Menilai perencanaan, kompetensi, literasi digital ASN, serta adopsi kecerdasan buatan (AI) dan analisis data mutakhir.', 'PermenPANRB 8/2026 secara eksplisit menilai pemanfaatan AI dan analitik data mutakhir sebagai pengungkit skor Level 4 & 5.')
ON DUPLICATE KEY UPDATE nama=VALUES(nama), deskripsi=VALUES(deskripsi), tips_asesor=VALUES(tips_asesor);
INSERT INTO indicators (id, nomor, kode, nama, domain_id, domain_name, aspect_name, bobot, deskripsi, tips_asesor)
VALUES ('ind-04', 4, 'IND-04', 'Tingkat Kematangan Kolaborasi Pemerintah Digital', 'aspek-2', 'Penyelenggara', 'Kolaborasi Digital', 5, 'Menilai sinergi, kemitraan strategis, dan berbagi pakai kapabilitas dengan instansi lain, akademisi, BUMN/swasta, dan komunitas digital.', 'Tunjukkan kerja sama berbagi pakai kode sumber aplikasi (open source) atau replikasi sistem antardaerah.')
ON DUPLICATE KEY UPDATE nama=VALUES(nama), deskripsi=VALUES(deskripsi), tips_asesor=VALUES(tips_asesor);
INSERT INTO indicators (id, nomor, kode, nama, domain_id, domain_name, aspect_name, bobot, deskripsi, tips_asesor)
VALUES ('ind-05', 5, 'IND-05', 'Tingkat Kematangan Tata Kelola Data', 'aspek-3', 'Data', 'Satu Data Indonesia', 5, 'Menilai implementasi Satu Data Indonesia: peran Walidata, Produsen Data, penegakan standar data, metadata, dan kode referensi.', 'Pastikan seluruh dataset yang dipublikasikan telah memiliki lembar metadata standar XML/JSON.')
ON DUPLICATE KEY UPDATE nama=VALUES(nama), deskripsi=VALUES(deskripsi), tips_asesor=VALUES(tips_asesor);
INSERT INTO indicators (id, nomor, kode, nama, domain_id, domain_name, aspect_name, bobot, deskripsi, tips_asesor)
VALUES ('ind-06', 6, 'IND-06', 'Tingkat Kematangan Penyelenggaraan Informasi Geospasial', 'aspek-3', 'Data', 'Informasi Geospasial / JIGN', 3, 'Menilai penyelenggaraan simpul jaringan informasi geospasial (peta digital/GIS) yang terhubung ke Jaringan Informasi Geospasial Nasional (JIGN) BIG.', 'Keterhubungan aktif dengan status \"Operasional Penuh\" di monitoring JIGN BIG memberikan skor Level 4.')
ON DUPLICATE KEY UPDATE nama=VALUES(nama), deskripsi=VALUES(deskripsi), tips_asesor=VALUES(tips_asesor);
INSERT INTO indicators (id, nomor, kode, nama, domain_id, domain_name, aspect_name, bobot, deskripsi, tips_asesor)
VALUES ('ind-07', 7, 'IND-07', 'Tingkat Kematangan Pembangunan Statistik', 'aspek-3', 'Data', 'Statistik Sektoral', 3, 'Menilai penyelenggaraan statistik sektoral: perolehan rekomendasi kegiatan statistik dari BPS dan penyusunan metadata statistik baku.', 'Lampirkan bukti tangkapan layar akun instansi pada aplikasi Romantik Online BPS.')
ON DUPLICATE KEY UPDATE nama=VALUES(nama), deskripsi=VALUES(deskripsi), tips_asesor=VALUES(tips_asesor);
INSERT INTO indicators (id, nomor, kode, nama, domain_id, domain_name, aspect_name, bobot, deskripsi, tips_asesor)
VALUES ('ind-08', 8, 'IND-08', 'Tingkat Kematangan Pelindungan Data Pribadi (PDP)', 'aspek-3', 'Data', 'Kepatuhan UU PDP', 4, 'Menilai kepatuhan terhadap UU No. 27/2022 tentang Pelindungan Data Pribadi: penunjukan Pejabat PDP/DPO, SOP pemrosesan data, dan tata kelola persetujuan warga.', 'PermenPANRB 8/2026 sangat mengedepankan aspek PDP sejalan dengan berlakunya penuh sanksi UU No. 27 Tahun 2022.')
ON DUPLICATE KEY UPDATE nama=VALUES(nama), deskripsi=VALUES(deskripsi), tips_asesor=VALUES(tips_asesor);
INSERT INTO indicators (id, nomor, kode, nama, domain_id, domain_name, aspect_name, bobot, deskripsi, tips_asesor)
VALUES ('ind-09', 9, 'IND-09', 'Tingkat Kematangan Pelaksanaan Audit Keamanan Pemerintah Digital dan Teknologi', 'aspek-4', 'Keamanan Pemerintah Digital', 'Audit Keamanan & VAPT', 4, 'Menilai pelaksanaan audit kepatuhan keamanan dan uji penetrasi kerentanan (Vulnerability Assessment & Penetration Testing) pada aplikasi dan server.', 'Pastikan laporan VAPT mencantumkan metode pengujian (OWASP Top 10) dan bukti penutupan celah dengan status \"Closed/Patched\".')
ON DUPLICATE KEY UPDATE nama=VALUES(nama), deskripsi=VALUES(deskripsi), tips_asesor=VALUES(tips_asesor);
INSERT INTO indicators (id, nomor, kode, nama, domain_id, domain_name, aspect_name, bobot, deskripsi, tips_asesor)
VALUES ('ind-10', 10, 'IND-10', 'Tingkat Kematangan Keamanan Pemerintah Digital', 'aspek-4', 'Keamanan Pemerintah Digital', 'SMKI & Indeks KAMI', 4, 'Menilai implementasi Sistem Manajemen Keamanan Informasi (SMKI) dan tingkat kesiapan keamanan informasi berdasarkan Indeks KAMI BSSN.', 'Skor Indeks KAMI yang tervalidasi BSSN adalah bukti terkuat untuk indikator ini.')
ON DUPLICATE KEY UPDATE nama=VALUES(nama), deskripsi=VALUES(deskripsi), tips_asesor=VALUES(tips_asesor);
INSERT INTO indicators (id, nomor, kode, nama, domain_id, domain_name, aspect_name, bobot, deskripsi, tips_asesor)
VALUES ('ind-11', 11, 'IND-11', 'Tingkat Kematangan Penerapan Kriptografi untuk Keamanan Data', 'aspek-4', 'Keamanan Pemerintah Digital', 'Kriptografi & TTE BSrE', 3, 'Menilai pemanfaatan algoritma enkripsi, modul keamanan perangkat keras (HSM), dan pemanfaatan Tanda Tangan Elektronik (TTE) tersertifikasi Balai Sertifikasi Elektronik (BSrE) BSSN.', 'Pastikan sampel PDF yang disiapkan berstatus \"Signature Valid\" saat dicek di situs https://tte.komdigi.go.id.')
ON DUPLICATE KEY UPDATE nama=VALUES(nama), deskripsi=VALUES(deskripsi), tips_asesor=VALUES(tips_asesor);
INSERT INTO indicators (id, nomor, kode, nama, domain_id, domain_name, aspect_name, bobot, deskripsi, tips_asesor)
VALUES ('ind-12', 12, 'IND-12', 'Tingkat Kematangan Kapabilitas Penanganan Insiden Siber', 'aspek-4', 'Keamanan Pemerintah Digital', 'CSIRT & Penanganan Krisis', 4, 'Menilai kesiapsiagaan Tim Tanggap Insiden Siber (CSIRT), Surat Tanda Registrasi BSSN, SOP penanganan insiden, dan pelaksanaan simulasi latihan krisis siber (Cyber Drill).', 'STR dari BSSN adalah bukti kunci agar indikator ini lolos penilaian asesor di Level 4.')
ON DUPLICATE KEY UPDATE nama=VALUES(nama), deskripsi=VALUES(deskripsi), tips_asesor=VALUES(tips_asesor);
INSERT INTO indicators (id, nomor, kode, nama, domain_id, domain_name, aspect_name, bobot, deskripsi, tips_asesor)
VALUES ('ind-13', 13, 'IND-13', 'Tingkat Kematangan Aplikasi Pemerintah Digital', 'aspek-5', 'Teknologi Pemerintah Digital', 'Arsitektur & Pengembangan Aplikasi', 5, 'Menilai tata kelola siklus pengembangan aplikasi (SDLC), dokumentasi software, standardisasi microservice/API, dan pencegahan duplikasi aplikasi baru.', 'Tunjukkan proses kliring aplikasi: tidak ada lagi dinas yang boleh memesan aplikasi baru tanpa persetujuan tim SPBE/Kominfo.')
ON DUPLICATE KEY UPDATE nama=VALUES(nama), deskripsi=VALUES(deskripsi), tips_asesor=VALUES(tips_asesor);
INSERT INTO indicators (id, nomor, kode, nama, domain_id, domain_name, aspect_name, bobot, deskripsi, tips_asesor)
VALUES ('ind-14', 14, 'IND-14', 'Tingkat Kematangan Infrastruktur Pemerintah Digital', 'aspek-5', 'Teknologi Pemerintah Digital', 'Pusat Data & Komputasi Awan (PDN)', 5, 'Menilai konsolidasi ruang server ke Pusat Data Nasional (PDN) / Cloud tersertifikasi, topologi jaringan tertutup intra pemerintah, dan Disaster Recovery Plan.', 'Pemanfaatan PDN Komdigi adalah faktor utama perolehan skor Level 4 pada indikator infrastruktur.')
ON DUPLICATE KEY UPDATE nama=VALUES(nama), deskripsi=VALUES(deskripsi), tips_asesor=VALUES(tips_asesor);
INSERT INTO indicators (id, nomor, kode, nama, domain_id, domain_name, aspect_name, bobot, deskripsi, tips_asesor)
VALUES ('ind-15', 15, 'IND-15', 'Keterpaduan Proses Bisnis Pemerintah Digital Lintas Unit dan Instansi', 'aspek-6', 'Keterpaduan Layanan Digital', 'Proses Bisnis Terpadu', 4, 'Menilai penyusunan dan penyelarasan peta proses bisnis instansi yang terintegrasi lintas sektor dan diselaraskan dengan Proses Bisnis Nasional.', 'Diagram alur proses bisnis harus menggunakan notasi standar (BPMN) dan menunjukkan eliminasi bottleneck.')
ON DUPLICATE KEY UPDATE nama=VALUES(nama), deskripsi=VALUES(deskripsi), tips_asesor=VALUES(tips_asesor);
INSERT INTO indicators (id, nomor, kode, nama, domain_id, domain_name, aspect_name, bobot, deskripsi, tips_asesor)
VALUES ('ind-16', 16, 'IND-16', 'Integrasi Aplikasi dan Sistem Layanan', 'aspek-6', 'Keterpaduan Layanan Digital', 'Integrasi Sistem Layanan', 4, 'Menilai keterpaduan aplikasi administrasi pemerintahan (persuratan SRIKANDI, kepegawaian SIASN, keuangan SIPD) dan integrasi layanan publik.', 'Tunjukkan bukti log transaksi sinkronisasi dua arah yang aktif dan berjalan tanpa error.')
ON DUPLICATE KEY UPDATE nama=VALUES(nama), deskripsi=VALUES(deskripsi), tips_asesor=VALUES(tips_asesor);
INSERT INTO indicators (id, nomor, kode, nama, domain_id, domain_name, aspect_name, bobot, deskripsi, tips_asesor)
VALUES ('ind-17', 17, 'IND-17', 'Portal Layanan Digital Pemerintah', 'aspek-6', 'Keterpaduan Layanan Digital', 'Portal Terpadu / Super-App', 4, 'Menilai penyediaan satu pintu akses layanan digital terpadu (Portal Tunggal / Super-App / Mal Pelayanan Publik Digital) bagi ASN dan masyarakat.', 'Hindari portal yang hanya sekadar link landing page. Harus ada sistem autentikasi tunggal (SSO) yang mengonsolidasikan layanan.')
ON DUPLICATE KEY UPDATE nama=VALUES(nama), deskripsi=VALUES(deskripsi), tips_asesor=VALUES(tips_asesor);
INSERT INTO indicators (id, nomor, kode, nama, domain_id, domain_name, aspect_name, bobot, deskripsi, tips_asesor)
VALUES ('ind-18', 18, 'IND-18', 'Interoperabilitas Data dan Layanan', 'aspek-6', 'Keterpaduan Layanan Digital', 'SPLP / Interoperabilitas API', 3, 'Menilai pemanfaatan Sistem Penghubung Layanan Pemerintah (SPLP) atau API Gateway resmi untuk pertukaran data antar-sistem secara otomatis.', 'Gunakan template dokumen SOP, PKS, Katalog API, dan Log Audit Trail yang telah disediakan di aplikasi.')
ON DUPLICATE KEY UPDATE nama=VALUES(nama), deskripsi=VALUES(deskripsi), tips_asesor=VALUES(tips_asesor);
INSERT INTO indicators (id, nomor, kode, nama, domain_id, domain_name, aspect_name, bobot, deskripsi, tips_asesor)
VALUES ('ind-19', 19, 'IND-19', 'Fasilitas Dukungan Pengguna Layanan Digital Pemerintah', 'aspek-7', 'Kepuasan Pengguna Layanan', 'Helpdesk & Aksesibilitas', 10, 'Menilai penyediaan kanal pusat bantuan pengguna (Contact Center, Live Chat AI, Panduan FAQ, Aksesibilitas Disabilitas) yang responsif menyelesaikan kendala pengguna.', 'PermenPANRB 8/2026 memberikan bobot 10\% penuh pada indikator ini. Pastikan ada kanal chatbot interaktif dan fitur disabilitas.')
ON DUPLICATE KEY UPDATE nama=VALUES(nama), deskripsi=VALUES(deskripsi), tips_asesor=VALUES(tips_asesor);
INSERT INTO indicators (id, nomor, kode, nama, domain_id, domain_name, aspect_name, bobot, deskripsi, tips_asesor)
VALUES ('ind-20', 20, 'IND-20', 'Tingkat Pengelolaan Kepuasan Pengguna Layanan Digital Pemerintah', 'aspek-7', 'Kepuasan Pengguna Layanan', 'Survei Kepuasan Elektronik (e-SKM)', 15, 'Indikator berbobot tertinggi (15\%): Menilai pengukuran kepuasan pengguna secara elektronik (e-SKM) otomatis pasca layanan, transparansi publikasi indeks kepuasan, dan tindak lanjut perbaikan.', 'Indikator ini berbobot 15\% (terbesar dalam PermenPANRB 8/2026). Pastikan ada bukti widget skor kepuasan yang tampil publik dan laporan tindak lanjut perbaikan fitur.')
ON DUPLICATE KEY UPDATE nama=VALUES(nama), deskripsi=VALUES(deskripsi), tips_asesor=VALUES(tips_asesor);

-- 6. KRITERIA LEVEL 1-5 PER INDIKATOR
INSERT INTO indicator_levels (id, indicator_id, level, kriteria, narasi_bukti)
VALUES (UUID(), 'ind-01', 1, 'Kebijakan tata kelola pemerintah digital baru dirumuskan atau belum ditetapkan secara resmi.', 'Dokumen Bukti Level 1 (Rintisan):\n1. Draft awal dokumen konsep tata kelola digital / arsitektur TIK instansi.\n2. Undangan dan notula rapat inisiasi pembentukan tim penyusun tata kelola digital.')
ON DUPLICATE KEY UPDATE kriteria=VALUES(kriteria), narasi_bukti=VALUES(narasi_bukti);
INSERT INTO indicator_levels (id, indicator_id, level, kriteria, narasi_bukti)
VALUES (UUID(), 'ind-01', 2, 'Kebijakan tata kelola telah ditetapkan sebagian dan belum memuat keterpaduan arsitektur digital menyeluruh.', 'Dokumen Bukti Level 2 (Terkelola):\n1. Surat Edaran atau instruksi pimpinan terkait tata kelola digital di unit percontohan.\n2. Draft dokumen arsitektur dan peta rencana yang belum disahkan Kepala Daerah/Menteri.')
ON DUPLICATE KEY UPDATE kriteria=VALUES(kriteria), narasi_bukti=VALUES(narasi_bukti);
INSERT INTO indicator_levels (id, indicator_id, level, kriteria, narasi_bukti)
VALUES (UUID(), 'ind-01', 3, 'Telah ditetapkan Peraturan Kepala Instansi tentang Arsitektur dan Peta Rencana Pemerintah Digital yang selaras dengan Arsitektur Nasional.', 'Dokumen Bukti Level 3 (Terstandarisasi):\n1. Peraturan Kepala Daerah / Pimpinan Instansi tentang Arsitektur dan Peta Rencana Pemerintah Digital.\n2. Lampiran utuh 6 domain arsitektur pemerintah digital (Probis, Data, Aplikasi, Infrastruktur, Keamanan, Layanan).\n3. Berita acara sosialisasi ke seluruh unit kerja instansi.')
ON DUPLICATE KEY UPDATE kriteria=VALUES(kriteria), narasi_bukti=VALUES(narasi_bukti);
INSERT INTO indicator_levels (id, indicator_id, level, kriteria, narasi_bukti)
VALUES (UUID(), 'ind-01', 4, 'Tata kelola digital diterapkan secara terpadu di seluruh unit kerja dan diselaraskan secara elektronik dengan SIA-SPBE Nasional.', 'Dokumen Bukti Level 4 (Terpadu):\n1. Bukti integrasi dan pemetaan Arsitektur Instansi ke dalam platform SIA-SPBE Nasional.\n2. Tangkapan layar status validasi arsitektur dari Kementerian PANRB.\n3. Sinkronisasi rencana program digital dalam dokumen perencanaan anggaran (Renja/DPA).')
ON DUPLICATE KEY UPDATE kriteria=VALUES(kriteria), narasi_bukti=VALUES(narasi_bukti);
INSERT INTO indicator_levels (id, indicator_id, level, kriteria, narasi_bukti)
VALUES (UUID(), 'ind-01', 5, 'Tata kelola digital telah dievaluasi berkala minimal sekali dalam 2 tahun dan adaptif terhadap arah kebijakan transformasi digital nasional.', 'Dokumen Bukti Level 5 (Optimum):\n1. Laporan Resmi Evaluasi dan Reviu Berkala Tata Kelola Pemerintah Digital.\n2. Dokumen adendum/penyesuaian kebijakan berdasarkan hasil audit dan dinamika regulasi terbaru.\n3. Matriks tindak lanjut rekomendasi perbaikan tata kelola yang disahkan Kepala Instansi.')
ON DUPLICATE KEY UPDATE kriteria=VALUES(kriteria), narasi_bukti=VALUES(narasi_bukti);
INSERT INTO indicator_levels (id, indicator_id, level, kriteria, narasi_bukti)
VALUES (UUID(), 'ind-02', 1, 'Manajemen layanan digital dilakukan secara ad-hoc tanpa prosedur terdokumentasi.', 'Dokumen Bukti Level 1 (Rintisan):\n1. Catatan penanganan kendala server atau aplikasi yang bersifat reaktif.\n2. Belum memiliki formulir register risiko digital.')
ON DUPLICATE KEY UPDATE kriteria=VALUES(kriteria), narasi_bukti=VALUES(narasi_bukti);
INSERT INTO indicator_levels (id, indicator_id, level, kriteria, narasi_bukti)
VALUES (UUID(), 'ind-02', 2, 'Telah ada pedoman manajemen layanan di beberapa unit kerja tertentu namun belum seragam.', 'Dokumen Bukti Level 2 (Terkelola):\n1. Draft panduan service desk atau penanganan gangguan yang dibuat oleh unit TIK.\n2. Matriks identifikasi risiko pada 1-2 aplikasi prioritas.')
ON DUPLICATE KEY UPDATE kriteria=VALUES(kriteria), narasi_bukti=VALUES(narasi_bukti);
INSERT INTO indicator_levels (id, indicator_id, level, kriteria, narasi_bukti)
VALUES (UUID(), 'ind-02', 3, 'Telah ditetapkan SOP Manajemen Layanan Digital, SOP Manajemen Risiko Digital, dan SOP Manajemen Perubahan di seluruh instansi.', 'Dokumen Bukti Level 3 (Terstandarisasi):\n1. Dokumen SOP Manajemen Layanan Digital & Service Desk Resmi Instansi.\n2. Formulir Register Risiko Pemerintah Digital terisi lengkap beserta Rencana Mitigasi (Risk Treatment Plan).\n3. SK Tim Pengelola Manajemen Risiko dan Tim Manajemen Perubahan Digital.')
ON DUPLICATE KEY UPDATE kriteria=VALUES(kriteria), narasi_bukti=VALUES(narasi_bukti);
INSERT INTO indicator_levels (id, indicator_id, level, kriteria, narasi_bukti)
VALUES (UUID(), 'ind-02', 4, 'Manajemen layanan digital terintegrasi dalam Service Desk terpusat dan Register Risiko dimonitoring secara berkala.', 'Dokumen Bukti Level 4 (Terpadu):\n1. Tangkapan layar sistem Service Management / Ticketing Helpdesk terpadu.\n2. Laporan pemantauan dan mitigasi risiko digital triwulanan/semesteran.\n3. Rekapitulasi pemenuhan SLA layanan penanganan insiden digital.')
ON DUPLICATE KEY UPDATE kriteria=VALUES(kriteria), narasi_bukti=VALUES(narasi_bukti);
INSERT INTO indicator_levels (id, indicator_id, level, kriteria, narasi_bukti)
VALUES (UUID(), 'ind-02', 5, 'Manajemen layanan digital telah diaudit berkala sesuai standar ISO 20000 / ISO 31000 dan terus ditingkatkan kinerjanya.', 'Dokumen Bukti Level 5 (Optimum):\n1. Laporan Reviu Efektivitas Manajemen Layanan dan Risiko oleh Inspektorat/Auditor Eksternal.\n2. Sertifikat ISO 20000 / ISO 31000 pada operasional pusat data/layanan utama.\n3. Bukti continual service improvement (CSI) berdasarkan umpan balik berkala.')
ON DUPLICATE KEY UPDATE kriteria=VALUES(kriteria), narasi_bukti=VALUES(narasi_bukti);
INSERT INTO indicator_levels (id, indicator_id, level, kriteria, narasi_bukti)
VALUES (UUID(), 'ind-03', 1, 'Pengembangan kompetensi digital ASN belum terencana dan bersifat insidental.', 'Dokumen Bukti Level 1 (Rintisan):\n1. Daftar staf pengelola IT tanpa rincian sertifikasi kompetensi.\n2. Belum ada alokasi anggaran pelatihan digital khusus.')
ON DUPLICATE KEY UPDATE kriteria=VALUES(kriteria), narasi_bukti=VALUES(narasi_bukti);
INSERT INTO indicator_levels (id, indicator_id, level, kriteria, narasi_bukti)
VALUES (UUID(), 'ind-03', 2, 'Telah dilakukan pelatihan TIK dasar bagi sebagian staf pengelola sistem.', 'Dokumen Bukti Level 2 (Terkelola):\n1. Sertifikat pelatihan aplikasi atau bimbingan teknis dasar untuk operator OPD.\n2. Usulan kebutuhan diklat TIK dari unit teknis.')
ON DUPLICATE KEY UPDATE kriteria=VALUES(kriteria), narasi_bukti=VALUES(narasi_bukti);
INSERT INTO indicator_levels (id, indicator_id, level, kriteria, narasi_bukti)
VALUES (UUID(), 'ind-03', 3, 'Telah ditetapkan Analisis Kebutuhan Pelatihan (TNA) digital dan program sertifikasi kompetensi keahlian TIK ASN.', 'Dokumen Bukti Level 3 (Terstandarisasi):\n1. Dokumen Training Needs Analysis (TNA) Keahlian Digital ASN Instansi.\n2. Salinan Sertifikat Kompetensi BNSP / Sertifikasi Internasional ASN (Network, Security, Cloud, Data Analyst).\n3. Bukti alokasi anggaran pengembangan SDM digital dalam DPA/RKA.')
ON DUPLICATE KEY UPDATE kriteria=VALUES(kriteria), narasi_bukti=VALUES(narasi_bukti);
INSERT INTO indicator_levels (id, indicator_id, level, kriteria, narasi_bukti)
VALUES (UUID(), 'ind-03', 4, 'ASN memanfaatkan teknologi mutakhir (AI, big data analytics) dalam pekerjaan dan telah bersertifikasi keahlian spesifik.', 'Dokumen Bukti Level 4 (Terpadu):\n1. Bukti implementasi pemanfaatan Artificial Intelligence (AI) atau analitik data mutakhir oleh ASN dalam perumusan kebijakan.\n2. Laporan peningkatan indeks literasi digital ASN instansi.\n3. Surat Keputusan pembentukan Tim Pengembang Digital (In-house Software Engineer / Data Scientist).')
ON DUPLICATE KEY UPDATE kriteria=VALUES(kriteria), narasi_bukti=VALUES(narasi_bukti);
INSERT INTO indicator_levels (id, indicator_id, level, kriteria, narasi_bukti)
VALUES (UUID(), 'ind-03', 5, 'Penerapan Digital Talent Management berkelanjutan dan inovasi AI yang dievaluasi dampak efisiensinya terhadap produktivitas organisasi.', 'Dokumen Bukti Level 5 (Optimum):\n1. Laporan evaluasi berkala dampak pemanfaatan AI terhadap efisiensi jam kerja birokrasi.\n2. Sistem Talent Pool ASN Digital dengan jenjang karier berbasis merit system teruji.\n3. Publikasi karya inovasi teknologi atau hak cipta solusi digital yang dihasilkan ASN instansi.')
ON DUPLICATE KEY UPDATE kriteria=VALUES(kriteria), narasi_bukti=VALUES(narasi_bukti);
INSERT INTO indicator_levels (id, indicator_id, level, kriteria, narasi_bukti)
VALUES (UUID(), 'ind-04', 1, 'Inisiatif digital berjalan sendiri-sendiri tanpa kolaborasi eksternal.', 'Dokumen Bukti Level 1 (Rintisan):\n1. Diskusi penjajakan kerja sama awal tanpa naskah kesepakatan resmi.')
ON DUPLICATE KEY UPDATE kriteria=VALUES(kriteria), narasi_bukti=VALUES(narasi_bukti);
INSERT INTO indicator_levels (id, indicator_id, level, kriteria, narasi_bukti)
VALUES (UUID(), 'ind-04', 2, 'Kolaborasi bersifat ad-hoc tanpa didukung perjanjian kerja sama formal.', 'Dokumen Bukti Level 2 (Terkelola):\n1. Naskah nota kesepahaman (MoU) umum yang belum ditindaklanjuti dengan PKS operasional.')
ON DUPLICATE KEY UPDATE kriteria=VALUES(kriteria), narasi_bukti=VALUES(narasi_bukti);
INSERT INTO indicator_levels (id, indicator_id, level, kriteria, narasi_bukti)
VALUES (UUID(), 'ind-04', 3, 'Telah ditetapkan Perjanjian Kerja Sama (PKS) atau MoU kolaborasi digital lintas sektor (Quadruple Helix).', 'Dokumen Bukti Level 3 (Terstandarisasi):\n1. Salinan Perjanjian Kerja Sama (PKS) kolaborasi digital dengan perguruan tinggi, BUMN/BUMD, atau Pemda lain.\n2. Kerangka Acuan Kerja (KAK) dan rencana aksi kemitraan digital.\n3. SK Tim Kerja Bersama Pelaksana Kolaborasi Digital.')
ON DUPLICATE KEY UPDATE kriteria=VALUES(kriteria), narasi_bukti=VALUES(narasi_bukti);
INSERT INTO indicator_levels (id, indicator_id, level, kriteria, narasi_bukti)
VALUES (UUID(), 'ind-04', 4, 'Kolaborasi berjalan aktif melalui platform bersama, pertukaran keahlian, dan co-creation solusi digital.', 'Dokumen Bukti Level 4 (Terpadu):\n1. Laporan pelaksanaan program kolaborasi digital aktif (misal: Digital Innovation Lab, Hackathon, sharing infrastruktur).\n2. Bukti adopsi bersama solusi digital hasil kemitraan antardaerah/antarinstansi.')
ON DUPLICATE KEY UPDATE kriteria=VALUES(kriteria), narasi_bukti=VALUES(narasi_bukti);
INSERT INTO indicator_levels (id, indicator_id, level, kriteria, narasi_bukti)
VALUES (UUID(), 'ind-04', 5, 'Kolaborasi dievaluasi berkala dan menghasilkan efisiensi biaya serta perluasan adopsi layanan digital.', 'Dokumen Bukti Level 5 (Optimum):\n1. Laporan Evaluasi Kemitraan Digital yang memuat analisis cost-benefit dan efisiensi anggaran belanja TIK.\n2. Model replikasi solusi digital oleh instansi lain tingkat nasional.\n3. Testimoni dan pengakuan publik/penghargaan atas keberhasilan kolaborasi digital.')
ON DUPLICATE KEY UPDATE kriteria=VALUES(kriteria), narasi_bukti=VALUES(narasi_bukti);
INSERT INTO indicator_levels (id, indicator_id, level, kriteria, narasi_bukti)
VALUES (UUID(), 'ind-05', 1, 'Data dikelola secara parsial di masing-masing unit tanpa Walidata resmi.', 'Dokumen Bukti Level 1 (Rintisan):\n1. Rekapitulasi data tabel di spreadsheet lokal masing-masing dinas.')
ON DUPLICATE KEY UPDATE kriteria=VALUES(kriteria), narasi_bukti=VALUES(narasi_bukti);
INSERT INTO indicator_levels (id, indicator_id, level, kriteria, narasi_bukti)
VALUES (UUID(), 'ind-05', 2, 'Sudah ada penunjukan Walidata tetapi belum ada pedoman standar data dan metadata baku.', 'Dokumen Bukti Level 2 (Terkelola):\n1. SK Penunjukan Walidata di Diskominfo tanpa penetapan struktur Produsen Data dan Forum Satu Data.')
ON DUPLICATE KEY UPDATE kriteria=VALUES(kriteria), narasi_bukti=VALUES(narasi_bukti);
INSERT INTO indicator_levels (id, indicator_id, level, kriteria, narasi_bukti)
VALUES (UUID(), 'ind-05', 3, 'Telah ditetapkan Peraturan Kepala Instansi tentang Tata Kelola Satu Data dan SOP Manajemen Data resmi.', 'Dokumen Bukti Level 3 (Terstandarisasi):\n1. Peraturan Kepala Daerah / Pimpinan Instansi tentang Penyelenggaraan Satu Data Indonesia Daerah.\n2. SK Penetapan Forum Satu Data, Pembina Data, Walidata, dan Produsen Data.\n3. Pedoman Standar Data, Struktur Metadata, dan Kode Referensi Resmi.')
ON DUPLICATE KEY UPDATE kriteria=VALUES(kriteria), narasi_bukti=VALUES(narasi_bukti);
INSERT INTO indicator_levels (id, indicator_id, level, kriteria, narasi_bukti)
VALUES (UUID(), 'ind-05', 4, 'Seluruh dataset prioritas telah tervalidasi memenuhi standar data, memiliki metadata baku, dan terhubung ke Portal SDI Nasional (data.go.id).', 'Dokumen Bukti Level 4 (Terpadu):\n1. Bukti interkoneksi API Portal Satu Data Daerah dengan Portal Satu Data Indonesia Nasional (data.go.id).\n2. Daftar Data dan Rencana Aksi Data tahunan yang disahkan Forum Satu Data.\n3. Rekomendasi Statistik resmi dari Pembina Data (BPS) atas dataset prioritas daerah.')
ON DUPLICATE KEY UPDATE kriteria=VALUES(kriteria), narasi_bukti=VALUES(narasi_bukti);
INSERT INTO indicator_levels (id, indicator_id, level, kriteria, narasi_bukti)
VALUES (UUID(), 'ind-05', 5, 'Telah dilakukan evaluasi berkala dan pembersihan data (data cleansing) otomatis dengan pengawasan forum satu data.', 'Dokumen Bukti Level 5 (Optimum):\n1. Laporan Evaluasi Kualitas Data (Data Quality Assessment / Cleansing) berkala.\n2. Bukti pemanfaatan dataset Satu Data sebagai dasar analitik pengambilan kebijakan pimpinan (Dashboard Eksekutif).')
ON DUPLICATE KEY UPDATE kriteria=VALUES(kriteria), narasi_bukti=VALUES(narasi_bukti);
INSERT INTO indicator_levels (id, indicator_id, level, kriteria, narasi_bukti)
VALUES (UUID(), 'ind-06', 1, 'Peta digital masih berupa file gambar/CAD lepas tanpa georeferensi standar.', 'Dokumen Bukti Level 1 (Rintisan):\n1. File peta format image (JPG/PNG) atau PDF tanpa metadata geospasial baku.')
ON DUPLICATE KEY UPDATE kriteria=VALUES(kriteria), narasi_bukti=VALUES(narasi_bukti);
INSERT INTO indicator_levels (id, indicator_id, level, kriteria, narasi_bukti)
VALUES (UUID(), 'ind-06', 2, 'Sudah ada peta GIS di unit tertentu namun belum terintegrasi dalam simpul jaringan.', 'Dokumen Bukti Level 2 (Terkelola):\n1. Shapefile (SHP) peta tata ruang di Bappeda atau Dinas PUPR tanpa geoportal terbuka.')
ON DUPLICATE KEY UPDATE kriteria=VALUES(kriteria), narasi_bukti=VALUES(narasi_bukti);
INSERT INTO indicator_levels (id, indicator_id, level, kriteria, narasi_bukti)
VALUES (UUID(), 'ind-06', 3, 'Telah ditetapkan SK Pengelola Simpul Jaringan Geospasial dan Geoportal Instansi yang aktif beroperasi.', 'Dokumen Bukti Level 3 (Terstandarisasi):\n1. SK Kepala Instansi tentang Pembentukan Simpul Jaringan Informasi Geospasial Daerah.\n2. URL dan tangkapan layar Geoportal resmi instansi berbasis Web-GIS (MapServer/GeoServer).\n3. Metadata spasial standar ISO 19115 pada layer tematik peta.')
ON DUPLICATE KEY UPDATE kriteria=VALUES(kriteria), narasi_bukti=VALUES(narasi_bukti);
INSERT INTO indicator_levels (id, indicator_id, level, kriteria, narasi_bukti)
VALUES (UUID(), 'ind-06', 4, 'Simpul Jaringan Geospasial telah terhubung secara operasional dengan JIGN Badan Informasi Geospasial (BIG).', 'Dokumen Bukti Level 4 (Terpadu):\n1. Surat Keputusan / Piagam Keterhubungan Simpul Jaringan dari Badan Informasi Geospasial (BIG).\n2. Tangkapan layar integrasi katalog peta ke Portal JIGN Nasional (tanahair.indonesia.go.id).\n3. Layanan web map service (WMS/WFS) aktif yang dapat diakses publik.')
ON DUPLICATE KEY UPDATE kriteria=VALUES(kriteria), narasi_bukti=VALUES(narasi_bukti);
INSERT INTO indicator_levels (id, indicator_id, level, kriteria, narasi_bukti)
VALUES (UUID(), 'ind-06', 5, 'Informasi Geospasial dimanfaatkan optimal untuk tata ruang (RDTR), mitigasi bencana, dan dievaluasi kualitas tematiknya.', 'Dokumen Bukti Level 5 (Optimum):\n1. Penghargaan Bhumandala Award atau Laporan Kinerja Simpul Jaringan Terbaik.\n2. Bukti pemanfaatan peta geospasial real-time untuk perizinan tata ruang (KKPR) dan mitigasi risiko bencana.')
ON DUPLICATE KEY UPDATE kriteria=VALUES(kriteria), narasi_bukti=VALUES(narasi_bukti);
INSERT INTO indicator_levels (id, indicator_id, level, kriteria, narasi_bukti)
VALUES (UUID(), 'ind-07', 1, 'Pengumpulan data statistik dilakukan tanpa koordinasi dengan Pembina Data (BPS).', 'Dokumen Bukti Level 1 (Rintisan):\n1. Buku publikasi angka statistik tahunan tanpa verifikasi metodologi BPS.')
ON DUPLICATE KEY UPDATE kriteria=VALUES(kriteria), narasi_bukti=VALUES(narasi_bukti);
INSERT INTO indicator_levels (id, indicator_id, level, kriteria, narasi_bukti)
VALUES (UUID(), 'ind-07', 2, 'Kegiatan statistik ada di beberapa OPD namun belum mengajukan rekomendasi statistik.', 'Dokumen Bukti Level 2 (Terkelola):\n1. Formulir survei statistik sektoral yang baru dibuat mandiri oleh OPD pelaksana.')
ON DUPLICATE KEY UPDATE kriteria=VALUES(kriteria), narasi_bukti=VALUES(narasi_bukti);
INSERT INTO indicator_levels (id, indicator_id, level, kriteria, narasi_bukti)
VALUES (UUID(), 'ind-07', 3, 'Telah ditetapkan SOP Penyelenggaraan Statistik Sektoral dan seluruh OPD mengajukan rekomendasi statistik ke BPS.', 'Dokumen Bukti Level 3 (Terstandarisasi):\n1. SOP Pengusulan Rekomendasi Kegiatan Statistik Sektoral ke BPS.\n2. Dokumen Kerangka Acuan Kerja (KAK) survei statistik sektoral yang memuat rancangan sampel dan kuesioner.')
ON DUPLICATE KEY UPDATE kriteria=VALUES(kriteria), narasi_bukti=VALUES(narasi_bukti);
INSERT INTO indicator_levels (id, indicator_id, level, kriteria, narasi_bukti)
VALUES (UUID(), 'ind-07', 4, 'Telah memperoleh Surat Rekomendasi Statistik BPS (Romantik) dan metadata statistik terbit di portal resmi.', 'Dokumen Bukti Level 4 (Terpadu):\n1. Surat Rekomendasi Statistik dari BPS (Persetujuan Aplikasi Romantik BPS).\n2. Dokumen Metadata Statistik Kegiatan (MS-Keg), Metadata Variabel (MS-Var), dan Indikator (MS-Ind).\n3. Publikasi dataset statistik sektoral yang telah tervalidasi di portal Satu Data.')
ON DUPLICATE KEY UPDATE kriteria=VALUES(kriteria), narasi_bukti=VALUES(narasi_bukti);
INSERT INTO indicator_levels (id, indicator_id, level, kriteria, narasi_bukti)
VALUES (UUID(), 'ind-07', 5, 'Evaluasi Penyelenggaraan Statistik Sektoral (EPSS) mencapai predikat \"Baik\" / \"Sangat Baik\" dari BPS secara berkelanjutan.', 'Dokumen Bukti Level 5 (Optimum):\n1. Sertifikat Hasil Evaluasi Penyelenggaraan Statistik Sektoral (EPSS) dengan Indeks Pembangunan Statistik (IPS) Predikat Baik/Sangat Baik.\n2. Pemanfaatan data statistik prediktif untuk perencanaan pengentasan kemiskinan dan stunting.')
ON DUPLICATE KEY UPDATE kriteria=VALUES(kriteria), narasi_bukti=VALUES(narasi_bukti);
INSERT INTO indicator_levels (id, indicator_id, level, kriteria, narasi_bukti)
VALUES (UUID(), 'ind-08', 1, 'Belum ada langkah perlindungan data pribadi dan belum ada kebijakan formal.', 'Dokumen Bukti Level 1 (Rintisan):\n1. Belum terdapat klausul kerahasiaan data pribadi pada formulir pengumpulan data warga.')
ON DUPLICATE KEY UPDATE kriteria=VALUES(kriteria), narasi_bukti=VALUES(narasi_bukti);
INSERT INTO indicator_levels (id, indicator_id, level, kriteria, narasi_bukti)
VALUES (UUID(), 'ind-08', 2, 'Telah ada klausul persetujuan (consent) parsial di beberapa form pendaftaran aplikasi publik.', 'Dokumen Bukti Level 2 (Terkelola):\n1. Ketentuan syarat dan ketentuan (Terms & Conditions) sederhana pada website instansi.')
ON DUPLICATE KEY UPDATE kriteria=VALUES(kriteria), narasi_bukti=VALUES(narasi_bukti);
INSERT INTO indicator_levels (id, indicator_id, level, kriteria, narasi_bukti)
VALUES (UUID(), 'ind-08', 3, 'Telah ditetapkan SK Pejabat/Petugas Pelindung Data Pribadi (Data Protection Officer) dan SOP Pemrosesan Data Pribadi resmi.', 'Dokumen Bukti Level 3 (Terstandarisasi):\n1. Keputusan Kepala Instansi tentang Penunjukan Pejabat Pelindung Data Pribadi (DPO / Data Protection Officer).\n2. Dokumen Kebijakan & SOP Pemrosesan, Penyimpanan, dan Penghapusan Data Pribadi.\n3. Format Lembar Persetujuan (Explicit Consent Form) pada seluruh aplikasi layanan masyarakat.')
ON DUPLICATE KEY UPDATE kriteria=VALUES(kriteria), narasi_bukti=VALUES(narasi_bukti);
INSERT INTO indicator_levels (id, indicator_id, level, kriteria, narasi_bukti)
VALUES (UUID(), 'ind-08', 4, 'Penerapan prinsip PDP terintegrasi dalam siklus hidup data (DPIA / Analisis Dampak PDP, enkripsi data sensitif, hak subjek data).', 'Dokumen Bukti Level 4 (Terpadu):\n1. Dokumen Penilaian Dampak Pelindungan Data Pribadi (Data Protection Impact Assessment / DPIA) pada sistem kritikal.\n2. Bukti teknis enkripsi data pribadi (NIK, Rekam Medis, Biometrik) pada basis data (Data-at-rest & Data-in-transit).\n3. Fitur permohonan penghapusan/perbaikan data oleh subjek data (Hak Pemilik Data).')
ON DUPLICATE KEY UPDATE kriteria=VALUES(kriteria), narasi_bukti=VALUES(narasi_bukti);
INSERT INTO indicator_levels (id, indicator_id, level, kriteria, narasi_bukti)
VALUES (UUID(), 'ind-08', 5, 'Pelindungan Data Pribadi diaudit berkala, zero data breach, dan memiliki mekanisme ganti rugi/notifikasi insiden transparan.', 'Dokumen Bukti Level 5 (Optimum):\n1. Laporan Audit Kepatuhan PDP Eksternal independen tahunan.\n2. SOP dan simulasi notifikasi kebocoran data pribadi (maksimal 3x24 jam ke otoritas PDP dan subjek data).\n3. Sertifikasi personel DPO dari lembaga tersertifikasi nasional/internasional.')
ON DUPLICATE KEY UPDATE kriteria=VALUES(kriteria), narasi_bukti=VALUES(narasi_bukti);
INSERT INTO indicator_levels (id, indicator_id, level, kriteria, narasi_bukti)
VALUES (UUID(), 'ind-09', 1, 'Belum pernah dilakukan audit keamanan dan uji penetrasi pada sistem digital instansi.', 'Dokumen Bukti Level 1 (Rintisan):\n1. Log antivirus pada workstation tanpa audit sistem terpusat.')
ON DUPLICATE KEY UPDATE kriteria=VALUES(kriteria), narasi_bukti=VALUES(narasi_bukti);
INSERT INTO indicator_levels (id, indicator_id, level, kriteria, narasi_bukti)
VALUES (UUID(), 'ind-09', 2, 'Uji kerentanan dilakukan internal secara ad-hoc tanpa metodologi standar.', 'Dokumen Bukti Level 2 (Terkelola):\n1. Hasil scan otomatis menggunakan tools scanner gratisan oleh programmer internal tanpa laporan formal.')
ON DUPLICATE KEY UPDATE kriteria=VALUES(kriteria), narasi_bukti=VALUES(narasi_bukti);
INSERT INTO indicator_levels (id, indicator_id, level, kriteria, narasi_bukti)
VALUES (UUID(), 'ind-09', 3, 'Telah dilakukan VAPT secara resmi oleh auditor tersertifikasi / BSSN pada seluruh sistem informasi utama instansi.', 'Dokumen Bukti Level 3 (Terstandarisasi):\n1. Laporan Resmi Hasil Vulnerability Assessment & Penetration Testing (VAPT Report) dari BSSN atau Auditor Bersertifikat (CISA/CEH).\n2. Surat Perintah Tugas / Kontrak Kerja pelaksanaan audit keamanan TIK.\n3. Matriks klasifikasi temuan kerentanan berdasarkan tingkat keparahan (Critical, High, Medium, Low).')
ON DUPLICATE KEY UPDATE kriteria=VALUES(kriteria), narasi_bukti=VALUES(narasi_bukti);
INSERT INTO indicator_levels (id, indicator_id, level, kriteria, narasi_bukti)
VALUES (UUID(), 'ind-09', 4, 'Temuan kerentanan (vulnerability) telah ditindaklanjuti secara tuntas (remediasi/patching) dan lolos uji ulang (re-test).', 'Dokumen Bukti Level 4 (Terpadu):\n1. Lembar Hasil Tindak Lanjut (LHTL) atau Laporan Remidiasi Penutupan Celah Keamanan.\n2. Berita Acara Re-Test Sign-off yang menyatakan seluruh celah kategori Critical dan High telah ditutup (Status: Closed/Patched).\n3. Surat Rekomendasi Keamanan dari Direktorat Keamanan Siber Pemerintah BSSN.')
ON DUPLICATE KEY UPDATE kriteria=VALUES(kriteria), narasi_bukti=VALUES(narasi_bukti);
INSERT INTO indicator_levels (id, indicator_id, level, kriteria, narasi_bukti)
VALUES (UUID(), 'ind-09', 5, 'Audit keamanan dilakukan berkala terjadwal (minimal setahun sekali) dan instansi memiliki sertifikasi ISO 27001 aktif.', 'Dokumen Bukti Level 5 (Optimum):\n1. Sertifikat ISO/IEC 27001 Sistem Manajemen Keamanan Informasi yang masih berlaku aktif.\n2. Laporan audit surveilans ISO tahunan dan audit kepatuhan regulasi keamanan siber.\n3. Penerapan automated security testing (DevSecOps) pada siklus pengembangan aplikasi.')
ON DUPLICATE KEY UPDATE kriteria=VALUES(kriteria), narasi_bukti=VALUES(narasi_bukti);
INSERT INTO indicator_levels (id, indicator_id, level, kriteria, narasi_bukti)
VALUES (UUID(), 'ind-10', 1, 'Belum menerapkan kerangka kerja sistem manajemen keamanan informasi.', 'Dokumen Bukti Level 1 (Rintisan):\n1. Tidak ada dokumen kebijakan keamanan tertulis.')
ON DUPLICATE KEY UPDATE kriteria=VALUES(kriteria), narasi_bukti=VALUES(narasi_bukti);
INSERT INTO indicator_levels (id, indicator_id, level, kriteria, narasi_bukti)
VALUES (UUID(), 'ind-10', 2, 'Penerapan keamanan sebatas pengaturan firewall dasar dan antivirus.', 'Dokumen Bukti Level 2 (Terkelola):\n1. Himbauan pergantian password email berkala di lingkungan kantor.')
ON DUPLICATE KEY UPDATE kriteria=VALUES(kriteria), narasi_bukti=VALUES(narasi_bukti);
INSERT INTO indicator_levels (id, indicator_id, level, kriteria, narasi_bukti)
VALUES (UUID(), 'ind-10', 3, 'Telah ditetapkan Peraturan Pimpinan tentang Kebijakan Keamanan Informasi dan dilakukan Asesmen Indeks KAMI BSSN.', 'Dokumen Bukti Level 3 (Terstandarisasi):\n1. Peraturan Pimpinan Instansi tentang Kebijakan Sistem Manajemen Keamanan Informasi (SMKI).\n2. Dokumen Hasil Pengisian dan Asesmen Indeks Keamanan Informasi (Indeks KAMI) BSSN.\n3. SOP Pengelolaan Hak Akses, SOP Backup Data, dan SOP Pengamanan Fisik Ruang Server.')
ON DUPLICATE KEY UPDATE kriteria=VALUES(kriteria), narasi_bukti=VALUES(narasi_bukti);
INSERT INTO indicator_levels (id, indicator_id, level, kriteria, narasi_bukti)
VALUES (UUID(), 'ind-10', 4, 'Hasil evaluasi Indeks KAMI BSSN mencapai status \"Baik\" / \"Cukup Tinggi\" dan diterapkan di seluruh unit kerja.', 'Dokumen Bukti Level 4 (Terpadu):\n1. Piagam / Sertifikat Hasil Penilaian Indeks KAMI dari BSSN dengan status \"Kesiapan Baik\".\n2. Bukti penerapan segmentasi jaringan zona aman dan Multi-Factor Authentication (MFA) pada seluruh akses admin.')
ON DUPLICATE KEY UPDATE kriteria=VALUES(kriteria), narasi_bukti=VALUES(narasi_bukti);
INSERT INTO indicator_levels (id, indicator_id, level, kriteria, narasi_bukti)
VALUES (UUID(), 'ind-10', 5, 'Penerapan SMKI dievaluasi berkala, zero major security incident, dan adaptif terhadap model zero-trust architecture.', 'Dokumen Bukti Level 5 (Optimum):\n1. Dokumen Arsitektur Keamanan Zero Trust (ZTA) yang diimplementasikan penuh.\n2. Laporan reviu manajemen tahunan SMKI dan peningkatan skor Indeks KAMI secara konsisten.')
ON DUPLICATE KEY UPDATE kriteria=VALUES(kriteria), narasi_bukti=VALUES(narasi_bukti);
INSERT INTO indicator_levels (id, indicator_id, level, kriteria, narasi_bukti)
VALUES (UUID(), 'ind-11', 1, 'Pertukaran data dan persuratan belum menggunakan enkripsi dan masih menggunakan tanda tangan manual.', 'Dokumen Bukti Level 1 (Rintisan):\n1. Scan tanda tangan pulpen dalam format gambar JPG yang ditempel di dokumen Microsoft Word.')
ON DUPLICATE KEY UPDATE kriteria=VALUES(kriteria), narasi_bukti=VALUES(narasi_bukti);
INSERT INTO indicator_levels (id, indicator_id, level, kriteria, narasi_bukti)
VALUES (UUID(), 'ind-11', 2, 'Tanda tangan digital baru berupa scan barcode/gambar tempelan tanpa sertifikat kriptografis.', 'Dokumen Bukti Level 2 (Terkelola):\n1. Barcode QR code sederhana yang hanya mengarahkan ke link website tanpa sertifikat digital tersertifikasi.')
ON DUPLICATE KEY UPDATE kriteria=VALUES(kriteria), narasi_bukti=VALUES(narasi_bukti);
INSERT INTO indicator_levels (id, indicator_id, level, kriteria, narasi_bukti)
VALUES (UUID(), 'ind-11', 3, 'Telah menandatangani PKS pemanfaatan Sertifikat Elektronik dengan BSrE BSSN dan menerbitkan TTE pada seluruh pejabat struktural.', 'Dokumen Bukti Level 3 (Terstandarisasi):\n1. Perjanjian Kerja Sama (PKS) pemanfaatan Sertifikat Elektronik antara Kepala Instansi dengan Balai Sertifikasi Elektronik (BSrE) BSSN.\n2. Surat Keputusan penunjukan Pengelola Sertifikat Elektronik Instansi.\n3. Sampel Surat Dinas Resmi bertanda tangan TTE yang tervalidasi sah di portal verifikasi BSrE/Komdigi.')
ON DUPLICATE KEY UPDATE kriteria=VALUES(kriteria), narasi_bukti=VALUES(narasi_bukti);
INSERT INTO indicator_levels (id, indicator_id, level, kriteria, narasi_bukti)
VALUES (UUID(), 'ind-11', 4, 'TTE BSrE telah terpasang secara API di seluruh aplikasi layanan (e-Office, Perizinan, SIMPEG, Pajak) dan data sensitif terenkripsi TLS 1.3/AES-256.', 'Dokumen Bukti Level 4 (Terpadu):\n1. Tangkapan layar integrasi modul API TTE BSrE ke dalam aplikasi layanan publik, perizinan, persuratan, dan kepegawaian.\n2. Bukti implementasi protokol enkripsi TLS 1.3 dengan sertifikat SSL/TLS valid grade A.\n3. Laporan statistik volume penandatanganan TTE bulanan oleh seluruh pejabat instansi.')
ON DUPLICATE KEY UPDATE kriteria=VALUES(kriteria), narasi_bukti=VALUES(narasi_bukti);
INSERT INTO indicator_levels (id, indicator_id, level, kriteria, narasi_bukti)
VALUES (UUID(), 'ind-11', 5, 'Penerapan Hardware Security Module (HSM) tersertifikasi dan evaluasi berkala kepatuhan siklus hidup sertifikat elektronik.', 'Dokumen Bukti Level 5 (Optimum):\n1. Bukti penggunaan Hardware Security Module (HSM) untuk pengamanan private key instansi.\n2. SOP otomatisasi audit masa kedaluwarsa sertifikat dan zero unencrypted sensitive data transmission.')
ON DUPLICATE KEY UPDATE kriteria=VALUES(kriteria), narasi_bukti=VALUES(narasi_bukti);
INSERT INTO indicator_levels (id, indicator_id, level, kriteria, narasi_bukti)
VALUES (UUID(), 'ind-12', 1, 'Belum ada tim atau prosedur formal saat terjadi serangan siber / kebocoran data.', 'Dokumen Bukti Level 1 (Rintisan):\n1. Catatan perbaikan web defacement secara mandiri tanpa laporan insiden resmi.')
ON DUPLICATE KEY UPDATE kriteria=VALUES(kriteria), narasi_bukti=VALUES(narasi_bukti);
INSERT INTO indicator_levels (id, indicator_id, level, kriteria, narasi_bukti)
VALUES (UUID(), 'ind-12', 2, 'Penanganan insiden dilakukan parsial oleh programmer saat server diserang tanpa prosedur mitigasi baku.', 'Dokumen Bukti Level 2 (Terkelola):\n1. Nomor kontak darurat staf pengelola server jika terjadi insiden down.')
ON DUPLICATE KEY UPDATE kriteria=VALUES(kriteria), narasi_bukti=VALUES(narasi_bukti);
INSERT INTO indicator_levels (id, indicator_id, level, kriteria, narasi_bukti)
VALUES (UUID(), 'ind-12', 3, 'Telah ditetapkan SK Tim CSIRT Instansi dan SOP Penanganan Insiden Keamanan Siber Resmi.', 'Dokumen Bukti Level 3 (Terstandarisasi):\n1. Surat Keputusan (SK) Kepala Daerah / Pimpinan Instansi tentang Pembentukan Tim CSIRT Instansi.\n2. SOP Penanganan Insiden Siber, SOP Triase Laporan, dan SOP Forensik Digital Sederhana.\n3. Portal atau kanal resmi pelaporan insiden siber instansi (csirt.daerah.go.id).')
ON DUPLICATE KEY UPDATE kriteria=VALUES(kriteria), narasi_bukti=VALUES(narasi_bukti);
INSERT INTO indicator_levels (id, indicator_id, level, kriteria, narasi_bukti)
VALUES (UUID(), 'ind-12', 4, 'Tim CSIRT telah resmi mengantongi Surat Tanda Registrasi (STR) dari BSSN dan terhubung ke Gov-CSIRT Nasional.', 'Dokumen Bukti Level 4 (Terpadu):\n1. Surat Tanda Registrasi (STR) CSIRT resmi yang diterbitkan oleh Badan Siber dan Sandi Negara (BSSN).\n2. Bukti interoperabilitas dan pelaporan berkala ke Pusat Operasi Keamanan Siber Nasional BSSN.\n3. Laporan penanganan tiket insiden siber yang diselesaikan sesuai target waktu tanggap (Mean Time to Respond).')
ON DUPLICATE KEY UPDATE kriteria=VALUES(kriteria), narasi_bukti=VALUES(narasi_bukti);
INSERT INTO indicator_levels (id, indicator_id, level, kriteria, narasi_bukti)
VALUES (UUID(), 'ind-12', 5, 'Rutin melaksanakan simulasi krisis siber tahunan (Cyber Drill Exercise) dan memiliki laporan evaluasi post-incident review berkala.', 'Dokumen Bukti Level 5 (Optimum):\n1. Laporan Pelaksanaan Cyber Drill / Simulasi Krisis Siber gabungan dengan BSSN.\n2. Dokumen Post-Incident Review (PIR) dan bukti hardening sistem pasca insiden.\n3. Program Cyber Security Awareness berkala bagi seluruh pegawai instansi.')
ON DUPLICATE KEY UPDATE kriteria=VALUES(kriteria), narasi_bukti=VALUES(narasi_bukti);
INSERT INTO indicator_levels (id, indicator_id, level, kriteria, narasi_bukti)
VALUES (UUID(), 'ind-13', 1, 'Pembangunan aplikasi dilakukan tanpa standar arsitektur dan tanpa dokumentasi kode sumber.', 'Dokumen Bukti Level 1 (Rintisan):\n1. Aplikasi dibuat oleh pihak ketiga tanpa serah terima kode sumber dan dokumentasi teknis.')
ON DUPLICATE KEY UPDATE kriteria=VALUES(kriteria), narasi_bukti=VALUES(narasi_bukti);
INSERT INTO indicator_levels (id, indicator_id, level, kriteria, narasi_bukti)
VALUES (UUID(), 'ind-13', 2, 'Aplikasi dibangun oleh masing-masing unit kerja secara terisolasi (silo application).', 'Dokumen Bukti Level 2 (Terkelola):\n1. Manual book panduan pengguna (User Guide) pada aplikasi-aplikasi yang berdiri sendiri.')
ON DUPLICATE KEY UPDATE kriteria=VALUES(kriteria), narasi_bukti=VALUES(narasi_bukti);
INSERT INTO indicator_levels (id, indicator_id, level, kriteria, narasi_bukti)
VALUES (UUID(), 'ind-13', 3, 'Telah ditetapkan Pedoman Standar Pembangunan Aplikasi, kepatuhan arsitektur terbuka, dan inventarisasi repositori kode sumber instansi.', 'Dokumen Bukti Level 3 (Terstandarisasi):\n1. Peraturan / Pedoman Pimpinan tentang Standar Pembangunan dan Pengembangan Aplikasi Pemerintah Digital.\n2. Dokumen Software Architecture Document (SAD), Entity Relationship Diagram (ERD), dan API Documentation.\n3. Buku Inventaris dan Registrasi Aplikasi Resmi Instansi.')
ON DUPLICATE KEY UPDATE kriteria=VALUES(kriteria), narasi_bukti=VALUES(narasi_bukti);
INSERT INTO indicator_levels (id, indicator_id, level, kriteria, narasi_bukti)
VALUES (UUID(), 'ind-13', 4, 'Aplikasi dibangun modular berbasis arsitektur microservices/cloud-native dengan API terbuka dan bebas duplikasi fungsi.', 'Dokumen Bukti Level 4 (Terpadu):\n1. Repositori kode sumber terpusat (GitLab/GitHub instansi) dengan manajemen versi teratur.\n2. Bukti audit kliring aplikasi oleh Diskominfo untuk mencegah duplikasi aplikasi baru di OPD.\n3. Arsitektur aplikasi berbasis REST API / microservices yang siap diinterkoneksikan.')
ON DUPLICATE KEY UPDATE kriteria=VALUES(kriteria), narasi_bukti=VALUES(narasi_bukti);
INSERT INTO indicator_levels (id, indicator_id, level, kriteria, narasi_bukti)
VALUES (UUID(), 'ind-13', 5, 'Penerapan pipeline otomatisasi CI/CD, uji keamanan otomatis, dan reviu efektivitas aplikasi berkala untuk pembersihan aplikasi usang.', 'Dokumen Bukti Level 5 (Optimum):\n1. Laporan Evaluasi Efektivitas Aplikasi Tahunan (Aplikasi yang dipertahankan, dimerger, atau dipensiunkan).\n2. Penerapan otomatisasi Continuous Integration & Continuous Deployment (CI/CD) teruji.\n3. Bukti integrasi ke katalog kode sumber nasional atau berbagi pakai kode dengan daerah lain.')
ON DUPLICATE KEY UPDATE kriteria=VALUES(kriteria), narasi_bukti=VALUES(narasi_bukti);
INSERT INTO indicator_levels (id, indicator_id, level, kriteria, narasi_bukti)
VALUES (UUID(), 'ind-14', 1, 'Setiap dinas mengoperasikan server fisik sendiri di ruang kerja tanpa standar pusat data.', 'Dokumen Bukti Level 1 (Rintisan):\n1. Foto server PC desktop yang diletakkan di bawah meja kerja dinas.')
ON DUPLICATE KEY UPDATE kriteria=VALUES(kriteria), narasi_bukti=VALUES(narasi_bukti);
INSERT INTO indicator_levels (id, indicator_id, level, kriteria, narasi_bukti)
VALUES (UUID(), 'ind-14', 2, 'Server OPD telah dipindahkan ke ruang server bersama Diskominfo namun belum terstandar tier.', 'Dokumen Bukti Level 2 (Terkelola):\n1. Berita acara pemindahan server fisik dinas ke rak server Diskominfo.')
ON DUPLICATE KEY UPDATE kriteria=VALUES(kriteria), narasi_bukti=VALUES(narasi_bukti);
INSERT INTO indicator_levels (id, indicator_id, level, kriteria, narasi_bukti)
VALUES (UUID(), 'ind-14', 3, 'Telah menggunakan Data Center terpadu instansi dengan standar pengamanan listrik, pendingin, dan SOP backup teratur.', 'Dokumen Bukti Level 3 (Terstandarisasi):\n1. Dokumen Topologi Pusat Data dan Jaringan Fiber Optic Intra Pemerintah Daerah.\n2. SOP Operasional Data Center, Pengaturan Suhu Ruang Server, dan Jadwal Backup Data Rutin.\n3. Bukti fasilitas keamanan fisik (UPS terpusat, Fire Suppression FM200, Akses Biometrik, CCTV).')
ON DUPLICATE KEY UPDATE kriteria=VALUES(kriteria), narasi_bukti=VALUES(narasi_bukti);
INSERT INTO indicator_levels (id, indicator_id, level, kriteria, narasi_bukti)
VALUES (UUID(), 'ind-14', 4, 'Aplikasi dan basis data utama telah dimigrasikan dan memanfaatkan layanan Pusat Data Nasional (PDN) Kementerian Komdigi.', 'Dokumen Bukti Level 4 (Terpadu):\n1. Surat Keputusan / Berita Acara Pemanfaatan Layanan Pusat Data Nasional (PDN) dari Kementerian Komdigi.\n2. Tangkapan layar alokasi cloud resources (vCPU, RAM, Cloud Storage) pada portal PDN.\n3. Daftar aplikasi strategis instansi yang telah live beroperasi di infrastruktur PDN.')
ON DUPLICATE KEY UPDATE kriteria=VALUES(kriteria), narasi_bukti=VALUES(narasi_bukti);
INSERT INTO indicator_levels (id, indicator_id, level, kriteria, narasi_bukti)
VALUES (UUID(), 'ind-14', 5, 'Seluruh sistem beroperasi terpadu di cloud PDN dengan Disaster Recovery Center (DRC) aktif dan teruji failover berkala.', 'Dokumen Bukti Level 5 (Optimum):\n1. Dokumen Disaster Recovery Plan (DRP) dan Business Continuity Plan (BCP) tervalidasi.\n2. Laporan Hasil Simulasi Uji Alih Beban (Failover Simulation Test) ke Disaster Recovery Center (DRC).\n3. Laporan efisiensi anggaran belanja server dan listrik pasca migrasi penuh ke PDN.')
ON DUPLICATE KEY UPDATE kriteria=VALUES(kriteria), narasi_bukti=VALUES(narasi_bukti);
INSERT INTO indicator_levels (id, indicator_id, level, kriteria, narasi_bukti)
VALUES (UUID(), 'ind-15', 1, 'Proses bisnis masih berjalan manual di masing-masing seksi tanpa peta alur formal.', 'Dokumen Bukti Level 1 (Rintisan):\n1. Uraian tugas fungsi staf dalam format teks tanpa diagram alur proses bisnis.')
ON DUPLICATE KEY UPDATE kriteria=VALUES(kriteria), narasi_bukti=VALUES(narasi_bukti);
INSERT INTO indicator_levels (id, indicator_id, level, kriteria, narasi_bukti)
VALUES (UUID(), 'ind-15', 2, 'Peta probis telah dibuat di beberapa unit namun belum terhubung antar-perangkat daerah.', 'Dokumen Bukti Level 2 (Terkelola):\n1. Diagram flowchart SOP teknis pada beberapa bidang terpisah.')
ON DUPLICATE KEY UPDATE kriteria=VALUES(kriteria), narasi_bukti=VALUES(narasi_bukti);
INSERT INTO indicator_levels (id, indicator_id, level, kriteria, narasi_bukti)
VALUES (UUID(), 'ind-15', 3, 'Telah ditetapkan Peraturan Kepala Instansi tentang Peta Proses Bisnis Instansi yang mencakup seluruh urusan pemerintahan.', 'Dokumen Bukti Level 3 (Terstandarisasi):\n1. Peraturan Kepala Daerah / Pimpinan Instansi tentang Peta Proses Bisnis Instansi.\n2. Lampiran Diagram Peta Proses Bisnis Level 0, Level 1, dan Level 2 (Core, Management, Support).\n3. Berita acara penelaahan probis bersama Bagian Organisasi / Tata Laksana.')
ON DUPLICATE KEY UPDATE kriteria=VALUES(kriteria), narasi_bukti=VALUES(narasi_bukti);
INSERT INTO indicator_levels (id, indicator_id, level, kriteria, narasi_bukti)
VALUES (UUID(), 'ind-15', 4, 'Peta probis telah terintegrasi lintas unit kerja dan diselaraskan dengan Arsitektur Probis SPBE Nasional (tidak ada tumpang tindih alur).', 'Dokumen Bukti Level 4 (Terpadu):\n1. Bukti penyelarasan Peta Probis Instansi dengan Peta Probis Tematik Nasional di SIA-SPBE.\n2. Matriks integrasi alur kerja lintas OPD (misal: keterpaduan probis perizinan DPMPTSP dengan rekomendasi teknis PUPR dan Dinkes).')
ON DUPLICATE KEY UPDATE kriteria=VALUES(kriteria), narasi_bukti=VALUES(narasi_bukti);
INSERT INTO indicator_levels (id, indicator_id, level, kriteria, narasi_bukti)
VALUES (UUID(), 'ind-15', 5, 'Proses bisnis telah dievaluasi berkala, disederhanakan (business process re-engineering), dan adaptif memangkas birokrasi berbelit.', 'Dokumen Bukti Level 5 (Optimum):\n1. Laporan Hasil Reviu dan Penyederhanaan Proses Bisnis (Business Process Reengineering).\n2. Bukti pemangkasan tahapan birokrasi dan percepatan durasi siklus layanan publik.')
ON DUPLICATE KEY UPDATE kriteria=VALUES(kriteria), narasi_bukti=VALUES(narasi_bukti);
INSERT INTO indicator_levels (id, indicator_id, level, kriteria, narasi_bukti)
VALUES (UUID(), 'ind-16', 1, 'Aplikasi berjalan sendiri-sendiri tanpa pertukaran data otomatis.', 'Dokumen Bukti Level 1 (Rintisan):\n1. Pengguna harus menginput ulang data yang sama di berbagai aplikasi yang berbeda.')
ON DUPLICATE KEY UPDATE kriteria=VALUES(kriteria), narasi_bukti=VALUES(narasi_bukti);
INSERT INTO indicator_levels (id, indicator_id, level, kriteria, narasi_bukti)
VALUES (UUID(), 'ind-16', 2, 'Integrasi aplikasi baru dilakukan parsial secara manual melalui ekspor impor data Excel.', 'Dokumen Bukti Level 2 (Terkelola):\n1. Bukti script import database periodik secara semi-manual antar dua sistem.')
ON DUPLICATE KEY UPDATE kriteria=VALUES(kriteria), narasi_bukti=VALUES(narasi_bukti);
INSERT INTO indicator_levels (id, indicator_id, level, kriteria, narasi_bukti)
VALUES (UUID(), 'ind-16', 3, 'Telah terintegrasi aplikasi administrasi pemerintahan internal (e-Office/SRIKANDI, SIMPEG, e-Kinerja, Penganggaran).', 'Dokumen Bukti Level 3 (Terstandarisasi):\n1. Bukti integrasi sistem persuratan dinas dengan tanda tangan elektronik (TTE).\n2. Integrasi data presensi pegawai langsung ke perhitungan tunjangan kinerja di aplikasi e-Kinerja instansi.\n3. SOP integrasi sistem informasi di lingkungan pemerintah daerah.')
ON DUPLICATE KEY UPDATE kriteria=VALUES(kriteria), narasi_bukti=VALUES(narasi_bukti);
INSERT INTO indicator_levels (id, indicator_id, level, kriteria, narasi_bukti)
VALUES (UUID(), 'ind-16', 4, 'Aplikasi internal telah terintegrasi secara otomatis via API dengan sistem aplikasi umum nasional (SIPD Kemendagri, SIASN BKN, SRIKANDI ANRI).', 'Dokumen Bukti Level 4 (Terpadu):\n1. Log integrasi web service antara SIMPEG lokal dengan SIASN BKN Nasional.\n2. Bukti sinkronisasi data perencanaan penganggaran ke SIPD-RI Kemendagri.\n3. Pemanfaatan aplikasi SRIKANDI Nasional untuk seluruh naskah dinas keluar-masuk lintas instansi.')
ON DUPLICATE KEY UPDATE kriteria=VALUES(kriteria), narasi_bukti=VALUES(narasi_bukti);
INSERT INTO indicator_levels (id, indicator_id, level, kriteria, narasi_bukti)
VALUES (UUID(), 'ind-16', 5, 'Integrasi aplikasi menyeluruh secara end-to-end dengan pemantauan otomatis performa sistem dan audit trail tanpa jeda manual.', 'Dokumen Bukti Level 5 (Optimum):\n1. Laporan pemantauan utilisasi integrasi sistem secara real-time dan dashboard status sinkronisasi.\n2. Zero data entry duplication pada seluruh rantai layanan administrasi pemerintahan.')
ON DUPLICATE KEY UPDATE kriteria=VALUES(kriteria), narasi_bukti=VALUES(narasi_bukti);
INSERT INTO indicator_levels (id, indicator_id, level, kriteria, narasi_bukti)
VALUES (UUID(), 'ind-17', 1, 'Layanan digital masih tersebar di puluhan website dan aplikasi terpisah yang membingungkan masyarakat.', 'Dokumen Bukti Level 1 (Rintisan):\n1. Masing-masing dinas menyebarkan aplikasi masing-masing di PlayStore tanpa portal payung.')
ON DUPLICATE KEY UPDATE kriteria=VALUES(kriteria), narasi_bukti=VALUES(narasi_bukti);
INSERT INTO indicator_levels (id, indicator_id, level, kriteria, narasi_bukti)
VALUES (UUID(), 'ind-17', 2, 'Terdapat website induk yang hanya memuat kumpulan tautan (link repository) tanpa integrasi login.', 'Dokumen Bukti Level 2 (Terkelola):\n1. Portal website pemerintah daerah yang hanya berisi banner gambar tautan ke web OPD lain.')
ON DUPLICATE KEY UPDATE kriteria=VALUES(kriteria), narasi_bukti=VALUES(narasi_bukti);
INSERT INTO indicator_levels (id, indicator_id, level, kriteria, narasi_bukti)
VALUES (UUID(), 'ind-17', 3, 'Telah tersedia Portal Layanan Publik Terpadu / Super-App dengan Single Sign-On (SSO) akun tunggal.', 'Dokumen Bukti Level 3 (Terstandarisasi):\n1. URL resmi dan tangkapan layar Portal Layanan Terpadu (Super-App / MPP Digital Instansi).\n2. Penerapan Single Sign-On (SSO) bagi masyarakat sehingga satu akun dapat mengakses seluruh layanan.\n3. Regulasi Kepala Daerah tentang Penyelenggaraan Portal Satu Pintu Layanan Digital.')
ON DUPLICATE KEY UPDATE kriteria=VALUES(kriteria), narasi_bukti=VALUES(narasi_bukti);
INSERT INTO indicator_levels (id, indicator_id, level, kriteria, narasi_bukti)
VALUES (UUID(), 'ind-17', 4, 'Portal layanan telah terintegrasi dengan Portal Pelayanan Publik Nasional (INA Digital) dan autentikasi Identitas Kependudukan Digital (IKD).', 'Dokumen Bukti Level 4 (Terpadu):\n1. Bukti integrasi portal instansi dengan INA Digital / Portal Nasional Kementerian PANRB.\n2. Integrasi sistem login dengan Identitas Kependudukan Digital (IKD Ditjen Dukcapil).\n3. Integrasi pembayaran non-tunai melalui payment gateway terpadu (QRIS/VA).')
ON DUPLICATE KEY UPDATE kriteria=VALUES(kriteria), narasi_bukti=VALUES(narasi_bukti);
INSERT INTO indicator_levels (id, indicator_id, level, kriteria, narasi_bukti)
VALUES (UUID(), 'ind-17', 5, 'Portal digital adaptif berbasis kecerdasan buatan, aksesibilitas disabilitas (WCAG compliant), dan pelacakan proses layanan real-time.', 'Dokumen Bukti Level 5 (Optimum):\n1. Fitur pelacakan status layanan (tracking proses) real-time via WhatsApp/SMS notification.\n2. Pemenuhan standar aksesibilitas bagi disabilitas (fitur pembaca suara, kontras tinggi).\n3. Laporan evaluasi peningkatan jumlah pengguna aktif harian (Daily Active Users) portal.')
ON DUPLICATE KEY UPDATE kriteria=VALUES(kriteria), narasi_bukti=VALUES(narasi_bukti);
INSERT INTO indicator_levels (id, indicator_id, level, kriteria, narasi_bukti)
VALUES (UUID(), 'ind-18', 1, 'Pertukaran data antar-sistem masih manual (ekspor file Excel/flashdisk).', 'Dokumen Bukti Level 1 (Rintisan):\n1. Berkas rekap data dikirimkan melalui lampiran pesan email atau flashdisk.')
ON DUPLICATE KEY UPDATE kriteria=VALUES(kriteria), narasi_bukti=VALUES(narasi_bukti);
INSERT INTO indicator_levels (id, indicator_id, level, kriteria, narasi_bukti)
VALUES (UUID(), 'ind-18', 2, 'Pertukaran data menggunakan API point-to-point ad-hoc tanpa katalog dan gateway terstandar.', 'Dokumen Bukti Level 2 (Terkelola):\n1. Dokumentasi script API point-to-point antara dua aplikasi tanpa gateway bersama.')
ON DUPLICATE KEY UPDATE kriteria=VALUES(kriteria), narasi_bukti=VALUES(narasi_bukti);
INSERT INTO indicator_levels (id, indicator_id, level, kriteria, narasi_bukti)
VALUES (UUID(), 'ind-18', 3, 'Telah mengoperasikan Sistem Penghubung Layanan Pemerintah (SPLP) / API Gateway instansi dengan Katalog API resmi.', 'Dokumen Bukti Level 3 (Terstandarisasi):\n1. Tangkapan layar antarmuka dashboard Sistem Penghubung Layanan Pemerintah (SPLP) Instansi.\n2. Dokumen Buku Katalog Layanan Berbagi Pakai (API Registry / Swagger Documentation).\n3. SOP Permohonan dan Integrasi Layanan Berbagi Pakai melalui SPLP.')
ON DUPLICATE KEY UPDATE kriteria=VALUES(kriteria), narasi_bukti=VALUES(narasi_bukti);
INSERT INTO indicator_levels (id, indicator_id, level, kriteria, narasi_bukti)
VALUES (UUID(), 'ind-18', 4, 'SPLP instansi telah terhubung secara operasional dengan SPLP Nasional Kementerian Komdigi untuk pertukaran data lintas K/L/D.', 'Dokumen Bukti Level 4 (Terpadu):\n1. Surat persetujuan dan Berita Acara Interkoneksi dengan SPLP Nasional Kementerian Komdigi.\n2. Contoh transaksi data antar-instansi melalui SPLP (misal: verifikasi NIK Dukcapil via SPLP).\n3. Perjanjian Kerja Sama (PKS) Berbagi Pakai Data Elektronik dengan instansi mitra.')
ON DUPLICATE KEY UPDATE kriteria=VALUES(kriteria), narasi_bukti=VALUES(narasi_bukti);
INSERT INTO indicator_levels (id, indicator_id, level, kriteria, narasi_bukti)
VALUES (UUID(), 'ind-18', 5, 'Pertukaran data melalui SPLP berjalan otomatis dengan audit trail log lengkap, pemantauan trafik 24/7, dan enkripsi payload.', 'Dokumen Bukti Level 5 (Optimum):\n1. Log audit trail transaksi data SPLP lengkap (Timestamp, IP, Endpoint, Status Code 200, Latensi ms).\n2. Laporan pemantauan trafik dan kepatuhan SLA ketersediaan API (> 99.8\%).\n3. Evaluasi berkala efisiensi waktu pemrosesan layanan publik pasca penerapan integrasi SPLP.')
ON DUPLICATE KEY UPDATE kriteria=VALUES(kriteria), narasi_bukti=VALUES(narasi_bukti);
INSERT INTO indicator_levels (id, indicator_id, level, kriteria, narasi_bukti)
VALUES (UUID(), 'ind-19', 1, 'Belum ada kanal bantuan resmi bagi pengguna layanan digital.', 'Dokumen Bukti Level 1 (Rintisan):\n1. Tidak ada kontak bantuan pengguna yang tercantum di aplikasi layanan.')
ON DUPLICATE KEY UPDATE kriteria=VALUES(kriteria), narasi_bukti=VALUES(narasi_bukti);
INSERT INTO indicator_levels (id, indicator_id, level, kriteria, narasi_bukti)
VALUES (UUID(), 'ind-19', 2, 'Kanal bantuan hanya berupa nomor telepon kantor yang hanya aktif pada jam kerja tertentu.', 'Dokumen Bukti Level 2 (Terkelola):\n1. Nomor WhatsApp staf operator yang dicantumkan sebagai narahubung darurat.')
ON DUPLICATE KEY UPDATE kriteria=VALUES(kriteria), narasi_bukti=VALUES(narasi_bukti);
INSERT INTO indicator_levels (id, indicator_id, level, kriteria, narasi_bukti)
VALUES (UUID(), 'ind-19', 3, 'Telah tersedia Helpdesk Layanan Digital multi-kanal (WhatsApp bot, live chat, ticketing system) dengan SOP penanganan keluhan resmi.', 'Dokumen Bukti Level 3 (Terstandarisasi):\n1. Tangkapan layar Helpdesk / Service Desk Layanan Digital Resmi Instansi.\n2. SOP Penanganan Keluhan Pengguna Layanan Digital dan Eskalasi Tiket Gangguan.\n3. Ketersediaan panduan pengguna (FAQ, Video Tutorial, Manual Book) yang mudah diakses di portal.')
ON DUPLICATE KEY UPDATE kriteria=VALUES(kriteria), narasi_bukti=VALUES(narasi_bukti);
INSERT INTO indicator_levels (id, indicator_id, level, kriteria, narasi_bukti)
VALUES (UUID(), 'ind-19', 4, 'Fasilitas dukungan terintegrasi dengan asisten cerdas berbasis AI yang beroperasi 24/7 dan memenuhi standar aksesibilitas inklusif disabilitas.', 'Dokumen Bukti Level 4 (Terpadu):\n1. Pemanfaatan Asisten Virtual Cerdas / Chatbot AI yang dapat merespons pertanyaan pengguna secara otomatis 24/7.\n2. Bukti pemenuhan fitur aksesibilitas bagi penyandang disabilitas (Voice Screen Reader, Text-to-Speech, Pilihan Kontras).\n3. Laporan rekapitulasi penanganan tiket bantuan dengan pencapaian SLA waktu respon.')
ON DUPLICATE KEY UPDATE kriteria=VALUES(kriteria), narasi_bukti=VALUES(narasi_bukti);
INSERT INTO indicator_levels (id, indicator_id, level, kriteria, narasi_bukti)
VALUES (UUID(), 'ind-19', 5, 'Kinerja fasilitas dukungan pengguna dievaluasi berkala dengan Response Time < 15 menit dan First Contact Resolution Rate > 90\%.', 'Dokumen Bukti Level 5 (Optimum):\n1. Laporan Evaluasi Kinerja Helpdesk berkala dengan First Contact Resolution (FCR) > 90\%.\n2. Analisis sentimen percakapan pengguna berbasis analitik AI untuk pencegahan kendala berulang.\n3. Penghargaan atau pengakuan pelayanan prima dukungan pengguna dari lembaga berwenang.')
ON DUPLICATE KEY UPDATE kriteria=VALUES(kriteria), narasi_bukti=VALUES(narasi_bukti);
INSERT INTO indicator_levels (id, indicator_id, level, kriteria, narasi_bukti)
VALUES (UUID(), 'ind-20', 1, 'Belum dilakukan pengukuran kepuasan pengguna layanan digital.', 'Dokumen Bukti Level 1 (Rintisan):\n1. Belum ada instrumen survei kepuasan digital.')
ON DUPLICATE KEY UPDATE kriteria=VALUES(kriteria), narasi_bukti=VALUES(narasi_bukti);
INSERT INTO indicator_levels (id, indicator_id, level, kriteria, narasi_bukti)
VALUES (UUID(), 'ind-20', 2, 'Survei kepuasan dilakukan manual setahun sekali secara parsial di loket kantor.', 'Dokumen Bukti Level 2 (Terkelola):\n1. Kuesioner kepuasan format Google Form yang disebarkan tidak terstruktur.')
ON DUPLICATE KEY UPDATE kriteria=VALUES(kriteria), narasi_bukti=VALUES(narasi_bukti);
INSERT INTO indicator_levels (id, indicator_id, level, kriteria, narasi_bukti)
VALUES (UUID(), 'ind-20', 3, 'Telah diterapkan instrumen Survei Kepuasan Masyarakat Elektronik (e-SKM) otomatis pasca transaksi layanan digital sesuai PermenPANRB.', 'Dokumen Bukti Level 3 (Terstandarisasi):\n1. Fitur kuesioner e-SKM otomatis yang muncul pada layar pengguna tepat setelah menyelesaikan layanan digital.\n2. Peraturan / SOP Pelaksanaan Survei Kepuasan Masyarakat Berbasis Elektronik sesuai pedoman PermenPANRB.\n3. Dokumen Laporan Hasil Survei Kepuasan Masyarakat (SKM) Elektronik Tahunan.')
ON DUPLICATE KEY UPDATE kriteria=VALUES(kriteria), narasi_bukti=VALUES(narasi_bukti);
INSERT INTO indicator_levels (id, indicator_id, level, kriteria, narasi_bukti)
VALUES (UUID(), 'ind-20', 4, 'Hasil Indeks Kepuasan Pengguna Layanan Digital dipublikasikan secara real-time dan terbuka kepada masyarakat di portal resmi.', 'Dokumen Bukti Level 4 (Terpadu):\n1. Tangkapan layar widget nilai Indeks Kepuasan Masyarakat (IKM) yang tampil secara real-time dan transparan di beranda portal layanan publik.\n2. Integrasi sistem survei kepuasan dengan platform nasional (SIPN / SP4N-LAPOR!).\n3. Rekapitulasi nilai kepuasan pengguna mencapai kategori \"Sangat Baik\" (> 3.50 dari skala 4.00 atau > 88.00).')
ON DUPLICATE KEY UPDATE kriteria=VALUES(kriteria), narasi_bukti=VALUES(narasi_bukti);
INSERT INTO indicator_levels (id, indicator_id, level, kriteria, narasi_bukti)
VALUES (UUID(), 'ind-20', 5, 'Hasil kepuasan dianalisis berkala, seluruh masukan/kritik ditindaklanjuti dengan rencana perbaikan nyata (Continuous Service Improvement), dan meraih predikat \"Sangat Memuaskan\".', 'Dokumen Bukti Level 5 (Optimum):\n1. Dokumen Rencana Aksi Tindak Lanjut Perbaikan Layanan berdasarkan ulasan dan komplain masyarakat.\n2. Laporan Pembuktian Perbaikan Fitur / Kebijakan Layanan pasca menerima masukan pengguna.\n3. Tren kenaikan nilai kepuasan pengguna secara konsisten dalam 3 tahun evaluasi berturut-turut.')
ON DUPLICATE KEY UPDATE kriteria=VALUES(kriteria), narasi_bukti=VALUES(narasi_bukti);

-- 7. BUTIR CHECKLIST BUKTI DUKUNG
INSERT INTO indicator_checklists (id, indicator_id, label, is_required, min_level, urutan)
VALUES ('c1-1', 'ind-01', 'Peraturan Kepala Daerah/Instansi tentang Arsitektur & Peta Rencana Digital', TRUE, 3, 1)
ON DUPLICATE KEY UPDATE label=VALUES(label), is_required=VALUES(is_required), min_level=VALUES(min_level);
INSERT INTO indicator_checklists (id, indicator_id, label, is_required, min_level, urutan)
VALUES ('c1-2', 'ind-01', 'Lampiran 6 Domain Arsitektur Pemerintah Digital lengkap', TRUE, 3, 2)
ON DUPLICATE KEY UPDATE label=VALUES(label), is_required=VALUES(is_required), min_level=VALUES(min_level);
INSERT INTO indicator_checklists (id, indicator_id, label, is_required, min_level, urutan)
VALUES ('c1-3', 'ind-01', 'Tangkapan layar akun instansi di SIA-SPBE Nasional tervalidasi', TRUE, 4, 3)
ON DUPLICATE KEY UPDATE label=VALUES(label), is_required=VALUES(is_required), min_level=VALUES(min_level);
INSERT INTO indicator_checklists (id, indicator_id, label, is_required, min_level, urutan)
VALUES ('c1-4', 'ind-01', 'Laporan Evaluasi & Reviu Berkala Tata Kelola Digital', FALSE, 5, 4)
ON DUPLICATE KEY UPDATE label=VALUES(label), is_required=VALUES(is_required), min_level=VALUES(min_level);
INSERT INTO indicator_checklists (id, indicator_id, label, is_required, min_level, urutan)
VALUES ('c2-1', 'ind-02', 'Dokumen SOP Manajemen Layanan & Service Desk Digital Resmi', TRUE, 3, 1)
ON DUPLICATE KEY UPDATE label=VALUES(label), is_required=VALUES(is_required), min_level=VALUES(min_level);
INSERT INTO indicator_checklists (id, indicator_id, label, is_required, min_level, urutan)
VALUES ('c2-2', 'ind-02', 'Dokumen Formulir Register Risiko Digital & Rencana Mitigasi', TRUE, 3, 2)
ON DUPLICATE KEY UPDATE label=VALUES(label), is_required=VALUES(is_required), min_level=VALUES(min_level);
INSERT INTO indicator_checklists (id, indicator_id, label, is_required, min_level, urutan)
VALUES ('c2-3', 'ind-02', 'Laporan Pemantauan Pelaksanaan Mitigasi Risiko Triwulanan', TRUE, 4, 3)
ON DUPLICATE KEY UPDATE label=VALUES(label), is_required=VALUES(is_required), min_level=VALUES(min_level);
INSERT INTO indicator_checklists (id, indicator_id, label, is_required, min_level, urutan)
VALUES ('c2-4', 'ind-02', 'Laporan Hasil Audit/Reviu Efektivitas Manajemen Layanan Digital', FALSE, 5, 4)
ON DUPLICATE KEY UPDATE label=VALUES(label), is_required=VALUES(is_required), min_level=VALUES(min_level);
INSERT INTO indicator_checklists (id, indicator_id, label, is_required, min_level, urutan)
VALUES ('c3-1', 'ind-03', 'Dokumen Analisis Kebutuhan Diklat (TNA) Digital ASN', TRUE, 3, 1)
ON DUPLICATE KEY UPDATE label=VALUES(label), is_required=VALUES(is_required), min_level=VALUES(min_level);
INSERT INTO indicator_checklists (id, indicator_id, label, is_required, min_level, urutan)
VALUES ('c3-2', 'ind-03', 'Salinan Sertifikat Kompetensi Profesional TIK ASN (BNSP/Global)', TRUE, 3, 2)
ON DUPLICATE KEY UPDATE label=VALUES(label), is_required=VALUES(is_required), min_level=VALUES(min_level);
INSERT INTO indicator_checklists (id, indicator_id, label, is_required, min_level, urutan)
VALUES ('c3-3', 'ind-03', 'Dokumen / Laporan Pemanfaatan AI dan Analitik Data oleh ASN', TRUE, 4, 3)
ON DUPLICATE KEY UPDATE label=VALUES(label), is_required=VALUES(is_required), min_level=VALUES(min_level);
INSERT INTO indicator_checklists (id, indicator_id, label, is_required, min_level, urutan)
VALUES ('c3-4', 'ind-03', 'Laporan Evaluasi Dampak Produktivitas SDM Digital', FALSE, 5, 4)
ON DUPLICATE KEY UPDATE label=VALUES(label), is_required=VALUES(is_required), min_level=VALUES(min_level);
INSERT INTO indicator_checklists (id, indicator_id, label, is_required, min_level, urutan)
VALUES ('c4-1', 'ind-04', 'Salinan Perjanjian Kerja Sama (PKS) Kolaborasi Digital', TRUE, 3, 1)
ON DUPLICATE KEY UPDATE label=VALUES(label), is_required=VALUES(is_required), min_level=VALUES(min_level);
INSERT INTO indicator_checklists (id, indicator_id, label, is_required, min_level, urutan)
VALUES ('c4-2', 'ind-04', 'Laporan Pelaksanaan Program Bersama Kemitraan Digital', TRUE, 4, 2)
ON DUPLICATE KEY UPDATE label=VALUES(label), is_required=VALUES(is_required), min_level=VALUES(min_level);
INSERT INTO indicator_checklists (id, indicator_id, label, is_required, min_level, urutan)
VALUES ('c4-3', 'ind-04', 'Laporan Evaluasi Efisiensi dan Dampak Kolaborasi Digital', FALSE, 5, 3)
ON DUPLICATE KEY UPDATE label=VALUES(label), is_required=VALUES(is_required), min_level=VALUES(min_level);
INSERT INTO indicator_checklists (id, indicator_id, label, is_required, min_level, urutan)
VALUES ('c5-1', 'ind-05', 'Peraturan Kepala Daerah tentang Penyelenggaraan Satu Data', TRUE, 3, 1)
ON DUPLICATE KEY UPDATE label=VALUES(label), is_required=VALUES(is_required), min_level=VALUES(min_level);
INSERT INTO indicator_checklists (id, indicator_id, label, is_required, min_level, urutan)
VALUES ('c5-2', 'ind-05', 'SK Penunjukan Walidata, Pembina Data, dan Produsen Data', TRUE, 3, 2)
ON DUPLICATE KEY UPDATE label=VALUES(label), is_required=VALUES(is_required), min_level=VALUES(min_level);
INSERT INTO indicator_checklists (id, indicator_id, label, is_required, min_level, urutan)
VALUES ('c5-3', 'ind-05', 'Bukti Keterhubungan API dengan Portal data.go.id Nasional', TRUE, 4, 3)
ON DUPLICATE KEY UPDATE label=VALUES(label), is_required=VALUES(is_required), min_level=VALUES(min_level);
INSERT INTO indicator_checklists (id, indicator_id, label, is_required, min_level, urutan)
VALUES ('c5-4', 'ind-05', 'Laporan Pemantauan Kualitas Data & Pemanfaatan Kebijakan', FALSE, 5, 4)
ON DUPLICATE KEY UPDATE label=VALUES(label), is_required=VALUES(is_required), min_level=VALUES(min_level);
INSERT INTO indicator_checklists (id, indicator_id, label, is_required, min_level, urutan)
VALUES ('c6-1', 'ind-06', 'SK Penetapan Simpul Jaringan Geospasial Instansi', TRUE, 3, 1)
ON DUPLICATE KEY UPDATE label=VALUES(label), is_required=VALUES(is_required), min_level=VALUES(min_level);
INSERT INTO indicator_checklists (id, indicator_id, label, is_required, min_level, urutan)
VALUES ('c6-2', 'ind-06', 'Tangkapan layar dan URL Geoportal Web-GIS Instansi', TRUE, 3, 2)
ON DUPLICATE KEY UPDATE label=VALUES(label), is_required=VALUES(is_required), min_level=VALUES(min_level);
INSERT INTO indicator_checklists (id, indicator_id, label, is_required, min_level, urutan)
VALUES ('c6-3', 'ind-06', 'Piagam / Surat Keterhubungan dengan Portal JIGN BIG', TRUE, 4, 3)
ON DUPLICATE KEY UPDATE label=VALUES(label), is_required=VALUES(is_required), min_level=VALUES(min_level);
INSERT INTO indicator_checklists (id, indicator_id, label, is_required, min_level, urutan)
VALUES ('c6-4', 'ind-06', 'Bukti pemanfaatan analitik geospasial dalam layanan perizinan/bencana', FALSE, 5, 4)
ON DUPLICATE KEY UPDATE label=VALUES(label), is_required=VALUES(is_required), min_level=VALUES(min_level);
INSERT INTO indicator_checklists (id, indicator_id, label, is_required, min_level, urutan)
VALUES ('c7-1', 'ind-07', 'SOP Tata Cara Pengusulan Rekomendasi Statistik ke BPS', TRUE, 3, 1)
ON DUPLICATE KEY UPDATE label=VALUES(label), is_required=VALUES(is_required), min_level=VALUES(min_level);
INSERT INTO indicator_checklists (id, indicator_id, label, is_required, min_level, urutan)
VALUES ('c7-2', 'ind-07', 'Surat Tanda Bukti Rekomendasi Statistik (Romantik) dari BPS', TRUE, 4, 2)
ON DUPLICATE KEY UPDATE label=VALUES(label), is_required=VALUES(is_required), min_level=VALUES(min_level);
INSERT INTO indicator_checklists (id, indicator_id, label, is_required, min_level, urutan)
VALUES ('c7-3', 'ind-07', 'Dokumen Metadata Statistik Baku (MS-Keg, MS-Var, MS-Ind)', TRUE, 4, 3)
ON DUPLICATE KEY UPDATE label=VALUES(label), is_required=VALUES(is_required), min_level=VALUES(min_level);
INSERT INTO indicator_checklists (id, indicator_id, label, is_required, min_level, urutan)
VALUES ('c7-4', 'ind-07', 'Piagam / Nilai Evaluasi Penyelenggaraan Statistik Sektoral (EPSS)', FALSE, 5, 4)
ON DUPLICATE KEY UPDATE label=VALUES(label), is_required=VALUES(is_required), min_level=VALUES(min_level);
INSERT INTO indicator_checklists (id, indicator_id, label, is_required, min_level, urutan)
VALUES ('c8-1', 'ind-08', 'SK Penunjukan Pejabat Pelindung Data Pribadi (DPO) Instansi', TRUE, 3, 1)
ON DUPLICATE KEY UPDATE label=VALUES(label), is_required=VALUES(is_required), min_level=VALUES(min_level);
INSERT INTO indicator_checklists (id, indicator_id, label, is_required, min_level, urutan)
VALUES ('c8-2', 'ind-08', 'Dokumen SOP Tata Kelola Pemrosesan dan Retensi Data Pribadi', TRUE, 3, 2)
ON DUPLICATE KEY UPDATE label=VALUES(label), is_required=VALUES(is_required), min_level=VALUES(min_level);
INSERT INTO indicator_checklists (id, indicator_id, label, is_required, min_level, urutan)
VALUES ('c8-3', 'ind-08', 'Laporan Penilaian Dampak Pelindungan Data Pribadi (DPIA)', TRUE, 4, 3)
ON DUPLICATE KEY UPDATE label=VALUES(label), is_required=VALUES(is_required), min_level=VALUES(min_level);
INSERT INTO indicator_checklists (id, indicator_id, label, is_required, min_level, urutan)
VALUES ('c8-4', 'ind-08', 'Laporan Audit Kepatuhan PDP dan Sertifikasi Petugas DPO', FALSE, 5, 4)
ON DUPLICATE KEY UPDATE label=VALUES(label), is_required=VALUES(is_required), min_level=VALUES(min_level);
INSERT INTO indicator_checklists (id, indicator_id, label, is_required, min_level, urutan)
VALUES ('c9-1', 'ind-09', 'Laporan Resmi Hasil VAPT dari BSSN atau Auditor Tersertifikasi', TRUE, 3, 1)
ON DUPLICATE KEY UPDATE label=VALUES(label), is_required=VALUES(is_required), min_level=VALUES(min_level);
INSERT INTO indicator_checklists (id, indicator_id, label, is_required, min_level, urutan)
VALUES ('c9-2', 'ind-09', 'Matriks Lembar Hasil Tindak Lanjut (LHTL) Penutupan Bug', TRUE, 4, 2)
ON DUPLICATE KEY UPDATE label=VALUES(label), is_required=VALUES(is_required), min_level=VALUES(min_level);
INSERT INTO indicator_checklists (id, indicator_id, label, is_required, min_level, urutan)
VALUES ('c9-3', 'ind-09', 'Berita Acara Uji Ulang (Re-test Sign-off) Bebas Kerentanan Kritis', TRUE, 4, 3)
ON DUPLICATE KEY UPDATE label=VALUES(label), is_required=VALUES(is_required), min_level=VALUES(min_level);
INSERT INTO indicator_checklists (id, indicator_id, label, is_required, min_level, urutan)
VALUES ('c9-4', 'ind-09', 'Sertifikat ISO/IEC 27001 yang aktif berlaku', FALSE, 5, 4)
ON DUPLICATE KEY UPDATE label=VALUES(label), is_required=VALUES(is_required), min_level=VALUES(min_level);
INSERT INTO indicator_checklists (id, indicator_id, label, is_required, min_level, urutan)
VALUES ('c10-1', 'ind-10', 'Peraturan Pimpinan Instansi tentang Kebijakan SMKI', TRUE, 3, 1)
ON DUPLICATE KEY UPDATE label=VALUES(label), is_required=VALUES(is_required), min_level=VALUES(min_level);
INSERT INTO indicator_checklists (id, indicator_id, label, is_required, min_level, urutan)
VALUES ('c10-2', 'ind-10', 'Dokumen Asesmen Lengkap Indeks KAMI BSSN', TRUE, 3, 2)
ON DUPLICATE KEY UPDATE label=VALUES(label), is_required=VALUES(is_required), min_level=VALUES(min_level);
INSERT INTO indicator_checklists (id, indicator_id, label, is_required, min_level, urutan)
VALUES ('c10-3', 'ind-10', 'Piagam Hasil Evaluasi Indeks KAMI dari BSSN (Kesiapan Baik)', TRUE, 4, 3)
ON DUPLICATE KEY UPDATE label=VALUES(label), is_required=VALUES(is_required), min_level=VALUES(min_level);
INSERT INTO indicator_checklists (id, indicator_id, label, is_required, min_level, urutan)
VALUES ('c10-4', 'ind-10', 'Laporan Audit Kepatuhan SMKI dan Zero Trust Implementation', FALSE, 5, 4)
ON DUPLICATE KEY UPDATE label=VALUES(label), is_required=VALUES(is_required), min_level=VALUES(min_level);
INSERT INTO indicator_checklists (id, indicator_id, label, is_required, min_level, urutan)
VALUES ('c11-1', 'ind-11', 'PKS Pemanfaatan Sertifikat Elektronik dengan BSrE BSSN', TRUE, 3, 1)
ON DUPLICATE KEY UPDATE label=VALUES(label), is_required=VALUES(is_required), min_level=VALUES(min_level);
INSERT INTO indicator_checklists (id, indicator_id, label, is_required, min_level, urutan)
VALUES ('c11-2', 'ind-11', 'Sampel Dokumen Resmi bertanda tangan TTE BSrE tervalidasi', TRUE, 3, 2)
ON DUPLICATE KEY UPDATE label=VALUES(label), is_required=VALUES(is_required), min_level=VALUES(min_level);
INSERT INTO indicator_checklists (id, indicator_id, label, is_required, min_level, urutan)
VALUES ('c11-3', 'ind-11', 'Log integrasi API TTE BSrE pada multi-aplikasi instansi', TRUE, 4, 3)
ON DUPLICATE KEY UPDATE label=VALUES(label), is_required=VALUES(is_required), min_level=VALUES(min_level);
INSERT INTO indicator_checklists (id, indicator_id, label, is_required, min_level, urutan)
VALUES ('c11-4', 'ind-11', 'Dokumen arsitektur enkripsi data-at-rest dan HSM utilization', FALSE, 5, 4)
ON DUPLICATE KEY UPDATE label=VALUES(label), is_required=VALUES(is_required), min_level=VALUES(min_level);
INSERT INTO indicator_checklists (id, indicator_id, label, is_required, min_level, urutan)
VALUES ('c12-1', 'ind-12', 'SK Pembentukan Tim Tanggap Insiden Siber (CSIRT) Instansi', TRUE, 3, 1)
ON DUPLICATE KEY UPDATE label=VALUES(label), is_required=VALUES(is_required), min_level=VALUES(min_level);
INSERT INTO indicator_checklists (id, indicator_id, label, is_required, min_level, urutan)
VALUES ('c12-2', 'ind-12', 'Surat Tanda Registrasi (STR) CSIRT dari BSSN', TRUE, 4, 2)
ON DUPLICATE KEY UPDATE label=VALUES(label), is_required=VALUES(is_required), min_level=VALUES(min_level);
INSERT INTO indicator_checklists (id, indicator_id, label, is_required, min_level, urutan)
VALUES ('c12-3', 'ind-12', 'SOP Penanganan Insiden Siber & Kanal Aduan Resmi', TRUE, 3, 3)
ON DUPLICATE KEY UPDATE label=VALUES(label), is_required=VALUES(is_required), min_level=VALUES(min_level);
INSERT INTO indicator_checklists (id, indicator_id, label, is_required, min_level, urutan)
VALUES ('c12-4', 'ind-12', 'Laporan Pelaksanaan Simulasi Tanggap Krisis Siber (Cyber Drill)', FALSE, 5, 4)
ON DUPLICATE KEY UPDATE label=VALUES(label), is_required=VALUES(is_required), min_level=VALUES(min_level);
INSERT INTO indicator_checklists (id, indicator_id, label, is_required, min_level, urutan)
VALUES ('c13-1', 'ind-13', 'Pedoman Standar Siklus Pembangunan Aplikasi Digital Instansi', TRUE, 3, 1)
ON DUPLICATE KEY UPDATE label=VALUES(label), is_required=VALUES(is_required), min_level=VALUES(min_level);
INSERT INTO indicator_checklists (id, indicator_id, label, is_required, min_level, urutan)
VALUES ('c13-2', 'ind-13', 'Buku Inventaris & Dokumentasi Spesifikasi Teknis API Aplikasi', TRUE, 3, 2)
ON DUPLICATE KEY UPDATE label=VALUES(label), is_required=VALUES(is_required), min_level=VALUES(min_level);
INSERT INTO indicator_checklists (id, indicator_id, label, is_required, min_level, urutan)
VALUES ('c13-3', 'ind-13', 'Bukti Pelaksanaan Kliring Aplikasi (Pencegahan Duplikasi)', TRUE, 4, 3)
ON DUPLICATE KEY UPDATE label=VALUES(label), is_required=VALUES(is_required), min_level=VALUES(min_level);
INSERT INTO indicator_checklists (id, indicator_id, label, is_required, min_level, urutan)
VALUES ('c13-4', 'ind-13', 'Laporan Monitoring utilisasi dan konsolidasi aplikasi berkala', FALSE, 5, 4)
ON DUPLICATE KEY UPDATE label=VALUES(label), is_required=VALUES(is_required), min_level=VALUES(min_level);
INSERT INTO indicator_checklists (id, indicator_id, label, is_required, min_level, urutan)
VALUES ('c14-1', 'ind-14', 'Dokumen Topologi Jaringan & Pusat Data Terpadu Terkini', TRUE, 3, 1)
ON DUPLICATE KEY UPDATE label=VALUES(label), is_required=VALUES(is_required), min_level=VALUES(min_level);
INSERT INTO indicator_checklists (id, indicator_id, label, is_required, min_level, urutan)
VALUES ('c14-2', 'ind-14', 'Berita Acara / Surat Penetapan Pemanfaatan Layanan PDN Komdigi', TRUE, 4, 2)
ON DUPLICATE KEY UPDATE label=VALUES(label), is_required=VALUES(is_required), min_level=VALUES(min_level);
INSERT INTO indicator_checklists (id, indicator_id, label, is_required, min_level, urutan)
VALUES ('c14-3', 'ind-14', 'SOP Pemeliharaan Pusat Data dan Jadwal Backup Rutin Terjadwal', TRUE, 3, 3)
ON DUPLICATE KEY UPDATE label=VALUES(label), is_required=VALUES(is_required), min_level=VALUES(min_level);
INSERT INTO indicator_checklists (id, indicator_id, label, is_required, min_level, urutan)
VALUES ('c14-4', 'ind-14', 'Dokumen Disaster Recovery Plan & Laporan Hasil Uji Coba DRC', FALSE, 5, 4)
ON DUPLICATE KEY UPDATE label=VALUES(label), is_required=VALUES(is_required), min_level=VALUES(min_level);
INSERT INTO indicator_checklists (id, indicator_id, label, is_required, min_level, urutan)
VALUES ('c15-1', 'ind-15', 'Peraturan Pimpinan Instansi tentang Peta Proses Bisnis Instansi', TRUE, 3, 1)
ON DUPLICATE KEY UPDATE label=VALUES(label), is_required=VALUES(is_required), min_level=VALUES(min_level);
INSERT INTO indicator_checklists (id, indicator_id, label, is_required, min_level, urutan)
VALUES ('c15-2', 'ind-15', 'Lampiran Diagram Peta Probis Level 0 s.d. Level 2 Lengkap', TRUE, 3, 2)
ON DUPLICATE KEY UPDATE label=VALUES(label), is_required=VALUES(is_required), min_level=VALUES(min_level);
INSERT INTO indicator_checklists (id, indicator_id, label, is_required, min_level, urutan)
VALUES ('c15-3', 'ind-15', 'Matriks Integrasi Proses Bisnis Lintas Perangkat Daerah', TRUE, 4, 3)
ON DUPLICATE KEY UPDATE label=VALUES(label), is_required=VALUES(is_required), min_level=VALUES(min_level);
INSERT INTO indicator_checklists (id, indicator_id, label, is_required, min_level, urutan)
VALUES ('c15-4', 'ind-15', 'Laporan Reviu dan Penyederhanaan Alur Birokrasi Probis', FALSE, 5, 4)
ON DUPLICATE KEY UPDATE label=VALUES(label), is_required=VALUES(is_required), min_level=VALUES(min_level);
INSERT INTO indicator_checklists (id, indicator_id, label, is_required, min_level, urutan)
VALUES ('c16-1', 'ind-16', 'Tangkapan layar keterpaduan aplikasi administrasi pemerintahan', TRUE, 3, 1)
ON DUPLICATE KEY UPDATE label=VALUES(label), is_required=VALUES(is_required), min_level=VALUES(min_level);
INSERT INTO indicator_checklists (id, indicator_id, label, is_required, min_level, urutan)
VALUES ('c16-2', 'ind-16', 'Log integrasi API dengan sistem aplikasi umum nasional (SIPD/SIASN/SRIKANDI)', TRUE, 4, 2)
ON DUPLICATE KEY UPDATE label=VALUES(label), is_required=VALUES(is_required), min_level=VALUES(min_level);
INSERT INTO indicator_checklists (id, indicator_id, label, is_required, min_level, urutan)
VALUES ('c16-3', 'ind-16', 'SOP tata kelola integrasi data antar-aplikasi operasional', TRUE, 3, 3)
ON DUPLICATE KEY UPDATE label=VALUES(label), is_required=VALUES(is_required), min_level=VALUES(min_level);
INSERT INTO indicator_checklists (id, indicator_id, label, is_required, min_level, urutan)
VALUES ('c16-4', 'ind-16', 'Laporan monitoring kinerja integrasi sistem dan efisiensi waktu', FALSE, 5, 4)
ON DUPLICATE KEY UPDATE label=VALUES(label), is_required=VALUES(is_required), min_level=VALUES(min_level);
INSERT INTO indicator_checklists (id, indicator_id, label, is_required, min_level, urutan)
VALUES ('c17-1', 'ind-17', 'URL resmi dan tangkapan layar Portal Layanan Digital Terpadu', TRUE, 3, 1)
ON DUPLICATE KEY UPDATE label=VALUES(label), is_required=VALUES(is_required), min_level=VALUES(min_level);
INSERT INTO indicator_checklists (id, indicator_id, label, is_required, min_level, urutan)
VALUES ('c17-2', 'ind-17', 'Regulasi Kepala Daerah tentang Penyelenggaraan Portal Terpadu', TRUE, 3, 2)
ON DUPLICATE KEY UPDATE label=VALUES(label), is_required=VALUES(is_required), min_level=VALUES(min_level);
INSERT INTO indicator_checklists (id, indicator_id, label, is_required, min_level, urutan)
VALUES ('c17-3', 'ind-17', 'Bukti integrasi Single Sign-On dengan IKD / Portal INA Digital', TRUE, 4, 3)
ON DUPLICATE KEY UPDATE label=VALUES(label), is_required=VALUES(is_required), min_level=VALUES(min_level);
INSERT INTO indicator_checklists (id, indicator_id, label, is_required, min_level, urutan)
VALUES ('c17-4', 'ind-17', 'Bukti pemenuhan standar aksesibilitas disabilitas dan tracking layanan', FALSE, 5, 4)
ON DUPLICATE KEY UPDATE label=VALUES(label), is_required=VALUES(is_required), min_level=VALUES(min_level);
INSERT INTO indicator_checklists (id, indicator_id, label, is_required, min_level, urutan)
VALUES ('c18-1', 'ind-18', 'Tangkapan layar dashboard Sistem Penghubung Layanan (SPLP)', TRUE, 3, 1)
ON DUPLICATE KEY UPDATE label=VALUES(label), is_required=VALUES(is_required), min_level=VALUES(min_level);
INSERT INTO indicator_checklists (id, indicator_id, label, is_required, min_level, urutan)
VALUES ('c18-2', 'ind-18', 'Dokumen Buku Katalog Layanan Berbagi Pakai (API Registry)', TRUE, 3, 2)
ON DUPLICATE KEY UPDATE label=VALUES(label), is_required=VALUES(is_required), min_level=VALUES(min_level);
INSERT INTO indicator_checklists (id, indicator_id, label, is_required, min_level, urutan)
VALUES ('c18-3', 'ind-18', 'Surat Penetapan / Keterhubungan dengan SPLP Nasional Komdigi', TRUE, 4, 3)
ON DUPLICATE KEY UPDATE label=VALUES(label), is_required=VALUES(is_required), min_level=VALUES(min_level);
INSERT INTO indicator_checklists (id, indicator_id, label, is_required, min_level, urutan)
VALUES ('c18-4', 'ind-18', 'Log Audit Trail Transaksi dan Laporan Kinerja SLA Interoperabilitas', TRUE, 5, 4)
ON DUPLICATE KEY UPDATE label=VALUES(label), is_required=VALUES(is_required), min_level=VALUES(min_level);
INSERT INTO indicator_checklists (id, indicator_id, label, is_required, min_level, urutan)
VALUES ('c19-1', 'ind-19', 'Tangkapan layar kanal Helpdesk / Contact Center resmi layanan digital', TRUE, 3, 1)
ON DUPLICATE KEY UPDATE label=VALUES(label), is_required=VALUES(is_required), min_level=VALUES(min_level);
INSERT INTO indicator_checklists (id, indicator_id, label, is_required, min_level, urutan)
VALUES ('c19-2', 'ind-19', 'SOP Penanganan Bantuan Pengguna dan Standar Waktu Respon', TRUE, 3, 2)
ON DUPLICATE KEY UPDATE label=VALUES(label), is_required=VALUES(is_required), min_level=VALUES(min_level);
INSERT INTO indicator_checklists (id, indicator_id, label, is_required, min_level, urutan)
VALUES ('c19-3', 'ind-19', 'Bukti implementasi Chatbot AI 24/7 dan Aksesibilitas Disabilitas', TRUE, 4, 3)
ON DUPLICATE KEY UPDATE label=VALUES(label), is_required=VALUES(is_required), min_level=VALUES(min_level);
INSERT INTO indicator_checklists (id, indicator_id, label, is_required, min_level, urutan)
VALUES ('c19-4', 'ind-19', 'Laporan Kinerja Helpdesk (First Contact Resolution & Waktu Penyelesaian)', FALSE, 5, 4)
ON DUPLICATE KEY UPDATE label=VALUES(label), is_required=VALUES(is_required), min_level=VALUES(min_level);
INSERT INTO indicator_checklists (id, indicator_id, label, is_required, min_level, urutan)
VALUES ('c20-1', 'ind-20', 'Tangkapan layar fitur modul e-SKM otomatis pasca transaksi layanan', TRUE, 3, 1)
ON DUPLICATE KEY UPDATE label=VALUES(label), is_required=VALUES(is_required), min_level=VALUES(min_level);
INSERT INTO indicator_checklists (id, indicator_id, label, is_required, min_level, urutan)
VALUES ('c20-2', 'ind-20', 'Dokumen Laporan Resmi Hasil Survei Kepuasan Pengguna Digital', TRUE, 3, 2)
ON DUPLICATE KEY UPDATE label=VALUES(label), is_required=VALUES(is_required), min_level=VALUES(min_level);
INSERT INTO indicator_checklists (id, indicator_id, label, is_required, min_level, urutan)
VALUES ('c20-3', 'ind-20', 'Publikasi terbuka nilai Indeks Kepuasan Masyarakat (IKM) di portal', TRUE, 4, 3)
ON DUPLICATE KEY UPDATE label=VALUES(label), is_required=VALUES(is_required), min_level=VALUES(min_level);
INSERT INTO indicator_checklists (id, indicator_id, label, is_required, min_level, urutan)
VALUES ('c20-4', 'ind-20', 'Dokumen Matriks Tindak Lanjut dan Realisasi Perbaikan Layanan Berkelanjutan', FALSE, 5, 4)
ON DUPLICATE KEY UPDATE label=VALUES(label), is_required=VALUES(is_required), min_level=VALUES(min_level);
