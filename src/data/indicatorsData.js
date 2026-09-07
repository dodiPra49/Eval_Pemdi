export const INDICATORS = [
  // ================= DOMAIN 1: KEBIJAKAN PEMERINTAHAN DIGITAL =================
  {
    id: 'ind-01',
    number: 1,
    code: 'IND-01',
    name: 'Kebijakan Internal Arsitektur Pemerintahan Digital / SPBE',
    domainId: 'domain-1',
    domainName: 'Kebijakan Pemerintahan Digital',
    aspectId: 'asp-01',
    aspectName: 'Kebijakan Tata Kelola',
    description: 'Menilai keberadaan dan kelengkapan regulasi internal yang mengatur penyusunan, penetapan, dan pelaksanaan Arsitektur Pemerintahan Digital di lingkungan instansi.',
    criteria: {
      1: 'Konsep dokumen kebijakan arsitektur baru dirumuskan atau belum ditetapkan secara resmi oleh pimpinan.',
      2: 'Kebijakan telah ditetapkan berupa draft/surat edaran namun belum mencakup seluruh 6 domain arsitektur SPBE.',
      3: 'Kebijakan telah ditetapkan melalui Peraturan Kepala Daerah / Pimpinan Instansi yang memuat lengkap domain proses bisnis, data, aplikasi, infrastruktur, keamanan, dan layanan.',
      4: 'Kebijakan telah diterapkan terpadu dan diselaraskan secara penuh dengan Arsitektur SPBE Nasional.',
      5: 'Kebijakan telah dilakukan reviu berkala minimal sekali dalam 2 tahun dan disesuaikan dengan dinamika regulasi/teknologi terbaru.'
    },
    evidenceNarration: `Untuk memenuhi evaluasi indikator ini pada tingkat kematangan maksimal (Level 3-5), instansi wajib menyajikan:
1. Salinan Dokumen Regulasi Resmi (Peraturan Menteri/Kepala Lembaga/Peraturan Gubernur/Bupati/Walikota) yang telah diundangkan tentang Arsitektur SPBE/Pemerintahan Digital Instansi.
2. Lampiran Dokumen Arsitektur SPBE yang memuat detail 6 Domain (Probis, Data/Informasi, Aplikasi, Infrastruktur, Keamanan, Layanan).
3. Bukti keterhubungan/interoperabilitas dengan Sistem Informasi Arsitektur SPBE Nasional (SIA-SPBE).
4. Berita Acara / Notula Rapat pembahasan penyelarasan arsitektur dengan tim koordinasi.
5. Laporan Hasil Reviu/Evaluasi Kebijakan secara berkala beserta rekomendasi perubahannya.`,
    evidenceChecklist: [
      { id: 'c1-1', label: 'Salinan Peraturan Pimpinan Instansi (Perbup/Perwal/Pergub/Permen) tentang Arsitektur SPBE', required: true },
      { id: 'c1-2', label: 'Lampiran 6 Domain Arsitektur SPBE lengkap dan tervalidasi', required: true },
      { id: 'c1-3', label: 'Tangkapan layar akun instansi pada aplikasi SIA-SPBE Nasional', required: true },
      { id: 'c1-4', label: 'Daftar hadir dan notula rapat penyusunan/reviu kebijakan', required: false },
      { id: 'c1-5', label: 'Dokumen evaluasi berkala dan perbaikan kebijakan arsitektur', required: false }
    ],
    tips: 'Pastikan Peraturan Kepala Daerah/Instansi tidak hanya berbentuk Draft atau Surat Edaran jika menargetkan Level 3 ke atas.'
  },
  {
    id: 'ind-02',
    number: 2,
    code: 'IND-02',
    name: 'Kebijakan Internal Peta Rencana Pemerintahan Digital / SPBE',
    domainId: 'domain-1',
    domainName: 'Kebijakan Pemerintahan Digital',
    aspectId: 'asp-01',
    aspectName: 'Kebijakan Tata Kelola',
    description: 'Menilai penetapan peta jalan (roadmap) rencana aksi digital jangka menengah (5 tahunan) yang selaras dengan RPJMD/Renstra instansi.',
    criteria: {
      1: 'Draf peta rencana SPBE masih dalam tahap inisiasi penyusunan.',
      2: 'Peta rencana telah disusun parsial oleh unit TIK namun belum disahkan oleh Kepala Instansi.',
      3: 'Peta Rencana SPBE telah ditetapkan secara formal melalui Peraturan/Keputusan Kepala Instansi untuk periode 5 tahun.',
      4: 'Peta Rencana SPBE telah terintegrasi dengan rencana kerja tahunan (Renja) dan alokasi anggaran belanja APBD/APBN.',
      5: 'Peta Rencana telah dilakukan penyesuaian berkala (review tahunan) berdasarkan pencapaian target kinerja program digital.'
    },
    evidenceNarration: `Dokumen bukti yang harus disiapkan mencakup:
1. Salinan Surat Keputusan atau Peraturan Penetapan Peta Rencana SPBE / Pemerintahan Digital 5 Tahunan.
2. Matriks Rencana Aksi tahunan (Timeline, PIC Unit Kerja, Anggaran, Indikator Output).
3. Bukti integrasi program ke dalam dokumen Renstra dan RKA/DPA Perangkat Daerah.
4. Laporan monitoring dan evaluasi tahunan terhadap realisasi Peta Rencana.`,
    evidenceChecklist: [
      { id: 'c2-1', label: 'Dokumen Regulasi Peta Rencana SPBE 5 Tahunan bertanda tangan basah / TTE resmi', required: true },
      { id: 'c2-2', label: 'Matriks Action Plan tahunan beserta indikator capaian', required: true },
      { id: 'c2-3', label: 'Bukti sinkronisasi program SPBE dalam DPA/RKA SKPD', required: false },
      { id: 'c2-4', label: 'Laporan Evaluasi Tahunan pelaksanaan Peta Rencana SPBE', required: false }
    ],
    tips: 'Sertakan matriks keterkaitan antara Peta Rencana SPBE dengan program prioritas pimpinan daerah.'
  },
  {
    id: 'ind-03',
    number: 3,
    code: 'IND-03',
    name: 'Kebijakan Internal Manajemen Data & Satu Data Indonesia',
    domainId: 'domain-1',
    domainName: 'Kebijakan Pemerintahan Digital',
    aspectId: 'asp-01',
    aspectName: 'Kebijakan Tata Kelola',
    description: 'Menilai regulasi internal yang mengatur tata kelola data, produsen data, walidata, standar data, dan metadata sesuai prinsip Satu Data Indonesia.',
    criteria: {
      1: 'Belum ada aturan tertulis atau baru sebatas arahan lisan.',
      2: 'Kebijakan data ada di beberapa OPD secara terpisah tanpa ada Walidata resmi.',
      3: 'Telah ditetapkan Peraturan Kepala Daerah tentang Penyelenggaraan Satu Data / Manajemen Data di instansi.',
      4: 'Kebijakan tata kelola data telah terhubung dengan Portal Satu Data Nasional (data.go.id).',
      5: 'Kebijakan telah dievaluasi berkala dan terdapat mekanisme pengawasan kualitas data (data cleansing & audit).'
    },
    evidenceNarration: `Data dukung pembuktian meliputi:
1. Peraturan Kepala Daerah (Perbup/Perwal/Pergub) tentang Tata Kelola Satu Data Indonesia Tingkat Instansi.
2. SK Pembagian Peran: Pembina Data, Walidata (Diskominfo), Walidata Pendukung, dan Produsen Data.
3. Pedoman/SOP Penyusunan Standar Data, Metadata, dan Kode Referensi.
4. Laporan berkala Forum Satu Data dan bukti publikasi dataset ke portal open data.`,
    evidenceChecklist: [
      { id: 'c3-1', label: 'Peraturan Kepala Daerah mengenai Satu Data / Manajemen Data', required: true },
      { id: 'c3-2', label: 'SK Penunjukan Walidata dan Produsen Data', required: true },
      { id: 'c3-3', label: 'SOP Manajemen Data dan Penyusunan Metadata', required: false },
      { id: 'c3-4', label: 'Bukti integrasi dengan Portal SDI Nasional', required: false }
    ],
    tips: 'Pastikan terdapat SK pembentukan Forum Satu Data tingkat instansi.'
  },
  {
    id: 'ind-04',
    number: 4,
    code: 'IND-04',
    name: 'Kebijakan Internal Keamanan Informasi Pemerintahan Digital',
    domainId: 'domain-1',
    domainName: 'Kebijakan Pemerintahan Digital',
    aspectId: 'asp-01',
    aspectName: 'Kebijakan Tata Kelola',
    description: 'Menilai regulasi internal terkait penerapan Sistem Manajemen Keamanan Informasi (SMKI), pembentukan CSIRT, dan penanganan insiden siber.',
    criteria: {
      1: 'Belum terdapat aturan formal mengenai keamanan informasi digital.',
      2: 'Instruksi keamanan baru sebatas password policy atau himbauan parsial.',
      3: 'Telah ditetapkan Peraturan / Keputusan Kepala Instansi mengenai Kebijakan Keamanan Informasi dan Standar Operasional Prosedur (SOP) Keamanan Siber.',
      4: 'Kebijakan keamanan telah diadopsi berbasis ISO/IEC 27001 / Indeks KAMI BSSN dan terintegrasi dengan CSIRT Nasional.',
      5: 'Kebijakan keamanan diuji berkala melalui simulasi latihan krisis siber dan audit kerentanan berkala.'
    },
    evidenceNarration: `Bukti wajib yang harus disajikan:
1. Peraturan Pimpinan Instansi tentang Tata Kelola Keamanan Informasi SPBE.
2. Surat Keputusan (SK) Tim Tanggap Insiden Keamanan Siber (CSIRT) yang terdaftar di BSSN.
3. SOP Penanganan Insiden Keamanan Informasi, Manajemen Akses, dan Penanganan Kerentanan (VAPT).
4. Surat Tanda Registrasi CSIRT dari BSSN.`,
    evidenceChecklist: [
      { id: 'c4-1', label: 'Peraturan Pimpinan tentang Kebijakan Keamanan Informasi SPBE', required: true },
      { id: 'c4-2', label: 'SK Pembentukan Tim CSIRT Instansi', required: true },
      { id: 'c4-3', label: 'SOP Penanganan Insiden Siber & Pelaporan', required: true },
      { id: 'c4-4', label: 'Surat Tanda Registrasi BSSN untuk CSIRT', required: false }
    ],
    tips: 'Pastikan SK CSIRT masih dalam masa berlaku dan melampirkan struktur Incident Commander.'
  },

  // ================= DOMAIN 2: TATA KELOLA PEMERINTAHAN DIGITAL =================
  {
    id: 'ind-05',
    number: 5,
    code: 'IND-05',
    name: 'Keterpaduan Pusat Data & Infrastruktur Komputasi Awan (Cloud)',
    domainId: 'domain-2',
    domainName: 'Tata Kelola Pemerintahan Digital',
    aspectId: 'asp-02',
    aspectName: 'Infrastruktur TIK',
    description: 'Menilai efisiensi dan konsolidasi pusat data instansi dengan memanfaatkan Pusat Data Nasional (PDN) atau cloud terpadu.',
    criteria: {
      1: 'Setiap unit kerja masih mengoperasikan server fisik masing-masing secara terpisah.',
      2: 'Sebagian besar server telah dipindahkan ke Data Center Diskominfo/TIK instansi.',
      3: 'Telah menggunakan Pusat Data terpadu instansi yang memenuhi standar keamanan tier/ISO dan terkoneksi Jaringan Intra Pemerintah.',
      4: 'Sebagian besar sistem utama instansi telah termigrasi dan memanfaatkan layanan Pusat Data Nasional (PDN).',
      5: 'Seluruh sistem telah terintegrasi optimal di PDN/Cloud tersertifikasi dengan Disaster Recovery Center (DRC) yang teruji berkala.'
    },
    evidenceNarration: `Dokumen bukti pendukung:
1. Topologi Infrastruktur Pusat Data dan Ruang Server (Data Center).
2. Perjanjian Kerja Sama (PKS) atau Berita Acara Pemanfaatan PDN dengan Kementerian Komdigi.
3. Dokumen SOP Pengoperasian Pusat Data dan Standar Backup Data.
4. Laporan simulasi Business Continuity Plan (BCP) & Disaster Recovery Center (DRC).
5. Tangkapan layar konsol cloud/dashboard alokasi sumber daya komputasi.`,
    evidenceChecklist: [
      { id: 'c5-1', label: 'Dokumen Topologi Jaringan & Pusat Data Terkini', required: true },
      { id: 'c5-2', label: 'Surat/BA Pengajuan atau Pemanfaatan Layanan PDN', required: true },
      { id: 'c5-3', label: 'SOP Pemeliharaan Server dan Jadwal Backup Data Rutin', required: true },
      { id: 'c5-4', label: 'Dokumen Disaster Recovery Plan (DRP) & Hasil Uji Coba DRC', required: false }
    ],
    tips: 'Bukti migrasi ke PDN memberikan poin maksimal pada evaluasi tata kelola infrastruktur.'
  },
  {
    id: 'ind-06',
    number: 6,
    code: 'IND-06',
    name: 'Jaringan Intra Pemerintah & Akses Internet Terpadu',
    domainId: 'domain-2',
    domainName: 'Tata Kelola Pemerintahan Digital',
    aspectId: 'asp-02',
    aspectName: 'Infrastruktur TIK',
    description: 'Menilai penggelaran jaringan kabel optik/VPN tertutup yang menghubungkan seluruh gedung perangkat daerah secara aman dan efisien.',
    criteria: {
      1: 'Masing-masing kantor berlangganan internet sendiri tanpa jaringan tertutup intra pemerintah.',
      2: 'Jaringan intra pemerintah baru menghubungkan gedung-gedung di sekitar pusat pemerintahan.',
      3: 'Jaringan intra pemerintah telah menghubungkan lebih dari 80% OPD/kantor dinas melalui fiber optic/metro ethernet/VPN tertutup.',
      4: 'Jaringan intra instansi telah terhubung secara aman dengan Jaringan Intra Pemerintah Nasional (JIPN).',
      5: 'Jaringan intra dilengkapi Network Operations Center (NOC) dengan monitoring otomatis 24/7 dan QoS terjamin.'
    },
    evidenceNarration: `Data dukung evaluasi meliputi:
1. Peta Topologi Jaringan Fiber Optic / VPN Intra Pemerintah antar-kantor dinas/kecamatan.
2. Kontrak / SLA Jaringan Terpadu satu pintu melalui Diskominfo/Unit TIK.
3. Tangkapan layar dashboard monitoring jaringan (MRTG/Zabbix/Grafana) yang aktif.
4. Laporan utilisasi bandwidth dan penanganan gangguan jaringan tahunan.`,
    evidenceChecklist: [
      { id: 'c6-1', label: 'Dokumen Peta Topologi WAN / Jaringan Intra Pemerintah', required: true },
      { id: 'c6-2', label: 'Bukti kontrak bandwidth/ISP terpusat satu pintu', required: true },
      { id: 'c6-3', label: 'Tangkapan layar Dashboard Monitoring Bandwidth/NOC', required: true },
      { id: 'c6-4', label: 'Laporan rekapitulasi uptime dan penanganan tiket gangguan', required: false }
    ],
    tips: 'Pastikan ada bukti bahwa pengadaan internet tidak lagi dilakukan secara terpisah-pisah oleh masing-masing dinas.'
  },
  {
    id: 'ind-07',
    number: 7,
    code: 'IND-07',
    name: 'Sistem Penghubung Layanan Pemerintah (SPLP) / Interoperabilitas API',
    domainId: 'domain-2',
    domainName: 'Tata Kelola Pemerintahan Digital',
    aspectId: 'asp-03',
    aspectName: 'Aplikasi & Integrasi',
    description: 'Menilai pemanfaatan Enterprise Service Bus (ESB) atau API Gateway resmi untuk pertukaran data antar-aplikasi tanpa duplikasi input.',
    criteria: {
      1: 'Pertukaran data antar-sistem masih manual (ekspor file Excel/USB flashdisk).',
      2: 'Pertukaran data menggunakan API ad-hoc point-to-point tanpa platform penghubung standar.',
      3: 'Telah mengimplementasikan Platform Integrasi / SPLP Tingkat Instansi dengan katalog API terdaftar.',
      4: 'SPLP instansi telah terhubung dengan SPLP Nasional untuk pertukaran data lintas kementerian/lembaga.',
      5: 'Pertukaran data melalui SPLP berjalan otomatis dengan pemantauan audit trail akses data secara real-time.'
    },
    evidenceNarration: `Dokumen bukti:
1. Bukti implementasi platform SPLP / Web Service Gateway di instansi.
2. Buku Katalog API dan dokumentasi spesifikasi teknis pertukaran data (Swagger/Postman doc).
3. Berita Acara / Surat Permohonan Integrasi Data antar-perangkat daerah atau ke SPLP Nasional.
4. Log transaksi pertukaran data (API request/response counter dan timestamp audit trail).`,
    evidenceChecklist: [
      { id: 'c7-1', label: 'Tangkapan layar dashboard Sistem Penghubung Layanan (SPLP)', required: true },
      { id: 'c7-2', label: 'Katalog API / Dokumentasi Endpoint Service yang aktif', required: true },
      { id: 'c7-3', label: 'Perjanjian Kerja Sama / NDA Pertukaran Data Elektronik', required: false },
      { id: 'c7-4', label: 'Log transaksi pertukaran data pada API gateway', required: true }
    ],
    tips: 'Tunjukkan diagram arsitektur integrasi yang membuktikan tidak ada lagi duplikasi input data antar aplikasi.'
  },

  // ================= DOMAIN 3: MANAJEMEN PEMERINTAHAN DIGITAL =================
  {
    id: 'ind-08',
    number: 8,
    code: 'IND-08',
    name: 'Penerapan Manajemen Risiko Pemerintahan Digital',
    domainId: 'domain-3',
    domainName: 'Manajemen Pemerintahan Digital',
    aspectId: 'asp-04',
    aspectName: 'Manajemen SPBE',
    description: 'Menilai pelaksanaan identifikasi, analisis, evaluasi, dan mitigasi risiko terkait keamanan, kegagalan sistem, dan tata kelola digital.',
    criteria: {
      1: 'Belum dilakukan identifikasi risiko TIK secara sistematis.',
      2: 'Identifikasi risiko baru dilakukan pada satu atau dua aplikasi kritikal.',
      3: 'Telah disusun Register Risiko SPBE / Pemerintahan Digital di seluruh instansi sesuai pedoman PermenPANRB.',
      4: 'Rencana mitigasi risiko telah dijalankan dan dipantau berkala dalam laporan triwulanan/semesteran.',
      5: 'Manajemen risiko telah terintegrasi dengan Manajemen Risiko Organisasi terpadu dan dievaluasi efektivitasnya.'
    },
    evidenceNarration: `Data dukung pembuktian:
1. Dokumen Profil Risiko SPBE dan Dokumen Penilaian Risiko (Risk Assessment).
2. Matriks Rencana Perlakuan Risiko (Risk Mitigation Plan) beserta target mitigasi.
3. SK Tim Pengelola Risiko Pemerintahan Digital / SPBE.
4. Laporan Pemantauan dan Evaluasi Pelaksanaan Rencana Perlakuan Risiko.`,
    evidenceChecklist: [
      { id: 'c8-1', label: 'Dokumen Formulir Register Risiko SPBE Terisi Lengkap', required: true },
      { id: 'c8-2', label: 'Dokumen Rencana Perlakuan Risiko (Mitigasi) & PIC Pelaksana', required: true },
      { id: 'c8-3', label: 'SK Tim Manajemen Risiko / Tim Asesor Risiko', required: false },
      { id: 'c8-4', label: 'Laporan Hasil Evaluasi dan Mitigasi Risiko SPBE Tahunan', required: true }
    ],
    tips: 'Sertakan risiko-risiko spesifik seperti kegagalan ransomware, kegagalan listrik data center, kebocoran data, dan pergantian SDM programmer.'
  },
  {
    id: 'ind-09',
    number: 9,
    code: 'IND-09',
    name: 'Pelaksanaan Audit Keamanan Informasi & Penetrasi Siber (VAPT)',
    domainId: 'domain-3',
    domainName: 'Manajemen Pemerintahan Digital',
    aspectId: 'asp-05',
    aspectName: 'Audit TIK',
    description: 'Menilai pelaksanaan audit kepatuhan keamanan informasi dan uji penetrasi kerentanan terhadap aplikasi serta infrastruktur digital.',
    criteria: {
      1: 'Belum pernah dilakukan audit keamanan sistem informasi.',
      2: 'Uji kerentanan baru dilakukan mandiri secara tidak terstruktur.',
      3: 'Telah dilakukan Vulnerability Assessment and Penetration Testing (VAPT) oleh auditor independen/BSSN/lembaga tersertifikasi pada sistem utama.',
      4: 'Temuan hasil audit keamanan telah ditindaklanjuti (patching/remediasi) dan diverifikasi ulang.',
      5: 'Audit keamanan dilakukan berkala minimal 1 tahun sekali dan instansi mengantongi sertifikasi ISO 27001 pada sistem prioritas.'
    },
    evidenceNarration: `Bukti wajib:
1. Laporan Resmi Hasil Audit Keamanan Informasi / Laporan VAPT dari BSSN atau Auditor Tersertifikasi (CISA/CEH/CISSP).
2. Matriks Lembar Hasil Tindak Lanjut (LHTL) temuan kerentanan (bukti patching bug/kerentanan).
3. Sertifikat ISO/IEC 27001 (jika ada) untuk ruang lingkup pusat data atau aplikasi prioritas.
4. Surat rekomendasi keamanan dari BSSN atau pihak berwenang.`,
    evidenceChecklist: [
      { id: 'c9-1', label: 'Laporan Hasil Penetrasi Siber (VAPT Report) bertanggal resmi', required: true },
      { id: 'c9-2', label: 'Matriks Tindak Lanjut Perbaikan Kerentanan (Remediation Sheet)', required: true },
      { id: 'c9-3', label: 'Sertifikat ISO 27001 atau Surat Keterangan Audit Keamanan dari BSSN', required: false },
      { id: 'c9-4', label: 'Bukti pengujian ulang (re-test) pasca penutupan celah keamanan', required: false }
    ],
    tips: 'Pastikan laporan VAPT mencantumkan metode pengujian (OWASP Top 10) dan bukti penutupan celah dengan status "Closed/Patched".'
  },

  // ================= DOMAIN 4: LAYANAN PEMERINTAHAN DIGITAL =================
  {
    id: 'ind-10',
    number: 10,
    code: 'IND-10',
    name: 'Layanan Naskah Dinas Elektronik & Tanda Tangan Elektronik (TTE)',
    domainId: 'domain-4',
    domainName: 'Layanan Pemerintahan Digital',
    aspectId: 'asp-06',
    aspectName: 'Layanan Administrasi',
    description: 'Menilai pemanfaatan aplikasi persuratan digital (seperti SRIKANDI atau e-Office instansi) yang terintegrasi TTE bersertifikasi BSrE BSSN.',
    criteria: {
      1: 'Surat dinas masih diproses secara cetak fisik manual.',
      2: 'Surat dibuat digital namun hanya dikirim melalui pesan chat/email biasa tanpa tanda tangan tersertifikasi.',
      3: 'Telah menggunakan aplikasi naskah dinas elektronik berstandar dengan TTE tersertifikasi BSrE untuk seluruh pejabat struktural.',
      4: 'Aplikasi naskah dinas telah terintegrasi dengan SRIKANDI Nasional dan sistem kearsipan dinamis.',
      5: 'Seluruh proses persuratan internal dan eksternal 100% paperless, dipantau waktu respon disposisi secara real-time, dan terus disempurnakan.'
    },
    evidenceNarration: `Dokumen bukti evaluasi:
1. Tangkapan layar antarmuka aplikasi persuratan (SRIKANDI / e-Office) yang aktif digunakan.
2. Contoh dokumen naskah dinas resmi ber-barcode TTE yang tervalidasi di portal verification BSrE (tanda tangan elektronik sah).
3. Laporan statistik transaksi surat masuk, surat keluar, dan disposisi elektronik selama 1 tahun terakhir.
4. SK / Perjanjian Kerja Sama pemanfaatan Sertifikat Elektronik dengan Balai Sertifikasi Elektronik (BSrE) BSSN.`,
    evidenceChecklist: [
      { id: 'c10-1', label: 'SK / PKS Pemanfaatan Sertifikat Elektronik dengan BSrE BSSN', required: true },
      { id: 'c10-2', label: 'Tangkapan layar dashboard aplikasi naskah dinas (SRIKANDI)', required: true },
      { id: 'c10-3', label: 'Sampel naskah dinas terverifikasi TTE BSrE (file PDF & QR Code)', required: true },
      { id: 'c10-4', label: 'Laporan rekapitulasi volume surat elektronik per bulan', required: false }
    ],
    tips: 'Pastikan sampel surat yang diunggah menunjukkan status "Valid" saat dicek di situs https://tte.komdigi.go.id atau verifikasi BSrE.'
  },
  {
    id: 'ind-11',
    number: 11,
    code: 'IND-11',
    name: 'Layanan Manajemen ASN & Kepegawaian Berbasis Elektronik',
    domainId: 'domain-4',
    domainName: 'Layanan Pemerintahan Digital',
    aspectId: 'asp-06',
    aspectName: 'Layanan Administrasi',
    description: 'Menilai keterpaduan SIMPEG instansi dengan SIASN BKN untuk cuti, kenaikan pangkat, pensiun, dan penilaian kinerja pegawai.',
    criteria: {
      1: 'Administrasi kepegawaian masih menggunakan berkas fisik dan pencatatan manual.',
      2: 'Telah ada SIMPEG lokal namun belum terhubung dengan sistem BKN atau sistem presensi.',
      3: 'SIMPEG telah mengakomodir seluruh modul (presensi GPS/biometrik, e-Kinerja, cuti online) secara terpusat.',
      4: 'SIMPEG instansi telah terintegrasi secara API dua arah dengan SIASN BKN Nasional (Single Sign-On ASN).',
      5: 'Penerapan talent management system berbasis AI / predictive analytics untuk pengembangan karier ASN berkelanjutan.'
    },
    evidenceNarration: `Data dukung pembuktian:
1. Tangkapan layar sistem SIMPEG instansi yang menunjukkan modul mutasi, kenaikan pangkat, dan e-Kinerja.
2. Bukti integrasi API web service dengan SIASN BKN (log pertukaran data NIP, SK Pangkat, Cuti).
3. SOP Pengelolaan Data Kepegawaian Elektronik.
4. Laporan statistik pemanfaatan layanan kepegawaian oleh seluruh ASN instansi.`,
    evidenceChecklist: [
      { id: 'c11-1', label: 'Tangkapan layar modul SI-ASN / SIMPEG terpadu', required: true },
      { id: 'c11-2', label: 'Log integrasi API antara SIMPEG lokal dengan SIASN BKN', required: true },
      { id: 'c11-3', label: 'SOP pengajuan layanan kepegawaian daring (Cuti, KGB, Pensiun)', required: false },
      { id: 'c11-4', label: 'Laporan kepuasan pengguna ASN terhadap layanan SIMPEG', required: false }
    ],
    tips: 'Fokuskan pada bukti sinkronisasi otomatis ke SIASN BKN untuk mendapatkan skor level 4.'
  },
  {
    id: 'ind-12',
    number: 12,
    code: 'IND-12',
    name: 'Portal Pelayanan Publik Digital Terpadu (Super-App / MPP Digital)',
    domainId: 'domain-4',
    domainName: 'Layanan Pemerintahan Digital',
    aspectId: 'asp-07',
    aspectName: 'Layanan Publik',
    description: 'Menilai penyediaan satu pintu portal pelayanan publik (Portal Terpadu / MPP Digital) tanpa mengharuskan masyarakat menginstal puluhan aplikasi berbeda.',
    criteria: {
      1: 'Layanan publik masih didominasi loket tatap muka manual.',
      2: 'Terdapat banyak aplikasi publik yang dibuat terpisah-pisah oleh tiap dinas (silo system).',
      3: 'Telah tersedia portal web / aplikasi mobile terpadu (Super-App / MPP Digital) yang mengonsolidasi layanan perizinan, kependudukan, dan retribusi.',
      4: 'Portal layanan publik terpadu telah terhubung dengan INA Digital / Portal Nasional dan payment gateway QRIS.',
      5: 'Layanan publik digital telah menyediakan tracking proses real-time, survei kepuasan masyarakat (SKM) otomatis, dan dioptimalkan berdasar masukan publik.'
    },
    evidenceNarration: `Dokumen bukti evaluasi:
1. URL dan tangkapan layar Portal Layanan Publik Terpadu / Super-App / MPP Digital.
2. Bukti integrasi Single Sign-On (Identitas Kependudukan Digital / IKD) dan integrasi payment gateway.
3. Laporan Survei Kepuasan Masyarakat (SKM) elektronik yang diumumkan ke publik.
4. Laporan statistik jumlah transaksi layanan publik dan kecepatan durasi penyelesaian layanan.`,
    evidenceChecklist: [
      { id: 'c12-1', label: 'Tangkapan layar dan URL resmi Portal Layanan Publik Terpadu', required: true },
      { id: 'c12-2', label: 'Bukti integrasi autentikasi tunggal (SSO) atau IKD', required: true },
      { id: 'c12-3', label: 'Bukti integrasi kanal pembayaran elektronik (QRIS/VA)', required: false },
      { id: 'c12-4', label: 'Laporan Hasil Survei Kepuasan Masyarakat (SKM) Elektronik', required: true }
    ],
    tips: 'Hindari menampilkan bukti yang masih berupa aplikasi terpisah-pisah. Tunjukkan konsolidasi layanan dalam satu wadah/antarmuka terpadu.'
  }
];

export const SUMMARY_STATS = {
  totalIndicators: 12, // Curated full core indicators
  totalDomains: 4,
  targetMaturityDefault: 3.5
};
