// DATASET LENGKAP 20 INDIKATOR EVALUASI KINERJA PEMERINTAH DIGITAL (PERMENPANRB NOMOR 8 TAHUN 2026)
export const INDICATORS = [
  // ================= ASPEK 1: TATA KELOLA DAN MANAJEMEN (BOBOT 10%) =================
  {
    id: 'ind-01',
    number: 1,
    code: 'IND-01',
    name: 'Tingkat Kematangan Tata Kelola Pemerintah Digital',
    domainId: 'aspek-1',
    domainName: 'Tata Kelola dan Manajemen',
    aspectName: 'Tata Kelola Pemdi',
    weight: 5,
    description: 'Menilai kelembagaan, arsitektur pemerintah digital, dan peta rencana strategis yang memadukan seluruh proses digitalisasi di lingkungan instansi.',
    criteria: {
      1: 'Kebijakan tata kelola pemerintah digital baru dirumuskan atau belum ditetapkan secara resmi.',
      2: 'Kebijakan tata kelola telah ditetapkan sebagian dan belum memuat keterpaduan arsitektur digital menyeluruh.',
      3: 'Telah ditetapkan Peraturan Kepala Instansi tentang Arsitektur dan Peta Rencana Pemerintah Digital yang selaras dengan Arsitektur Nasional.',
      4: 'Tata kelola digital diterapkan secara terpadu di seluruh unit kerja dan diselaraskan secara elektronik dengan SIA-SPBE Nasional.',
      5: 'Tata kelola digital telah dievaluasi berkala minimal sekali dalam 2 tahun dan adaptif terhadap arah kebijakan transformasi digital nasional.'
    },
    evidenceByLevel: {
      1: `Dokumen Bukti Level 1 (Rintisan):
1. Draft awal dokumen konsep tata kelola digital / arsitektur TIK instansi.
2. Undangan dan notula rapat inisiasi pembentukan tim penyusun tata kelola digital.`,
      2: `Dokumen Bukti Level 2 (Terkelola):
1. Surat Edaran atau instruksi pimpinan terkait tata kelola digital di unit percontohan.
2. Draft dokumen arsitektur dan peta rencana yang belum disahkan Kepala Daerah/Menteri.`,
      3: `Dokumen Bukti Level 3 (Terstandarisasi):
1. Peraturan Kepala Daerah / Pimpinan Instansi tentang Arsitektur dan Peta Rencana Pemerintah Digital.
2. Lampiran utuh 6 domain arsitektur pemerintah digital (Probis, Data, Aplikasi, Infrastruktur, Keamanan, Layanan).
3. Berita acara sosialisasi ke seluruh unit kerja instansi.`,
      4: `Dokumen Bukti Level 4 (Terpadu):
1. Bukti integrasi dan pemetaan Arsitektur Instansi ke dalam platform SIA-SPBE Nasional.
2. Tangkapan layar status validasi arsitektur dari Kementerian PANRB.
3. Sinkronisasi rencana program digital dalam dokumen perencanaan anggaran (Renja/DPA).`,
      5: `Dokumen Bukti Level 5 (Optimum):
1. Laporan Resmi Evaluasi dan Reviu Berkala Tata Kelola Pemerintah Digital.
2. Dokumen adendum/penyesuaian kebijakan berdasarkan hasil audit dan dinamika regulasi terbaru.
3. Matriks tindak lanjut rekomendasi perbaikan tata kelola yang disahkan Kepala Instansi.`
    },
    evidenceNarration: `Bukti wajib mencakup salinan Peraturan Resmi Tata Kelola/Arsitektur Digital, lampiran 6 domain, bukti integrasi SIA-SPBE Nasional, dan laporan reviu berkala.`,
    evidenceChecklist: [
      { id: 'c1-1', label: 'Peraturan Kepala Daerah/Instansi tentang Arsitektur & Peta Rencana Digital', required: true, minLevel: 3 },
      { id: 'c1-2', label: 'Lampiran 6 Domain Arsitektur Pemerintah Digital lengkap', required: true, minLevel: 3 },
      { id: 'c1-3', label: 'Tangkapan layar akun instansi di SIA-SPBE Nasional tervalidasi', required: true, minLevel: 4 },
      { id: 'c1-4', label: 'Laporan Evaluasi & Reviu Berkala Tata Kelola Digital', required: false, minLevel: 5 }
    ],
    tips: 'Pastikan regulasi arsitektur telah diundangkan secara formal dan terhubung ke SIA-SPBE Nasional.'
  },
  {
    id: 'ind-02',
    number: 2,
    code: 'IND-02',
    name: 'Tingkat Kematangan Manajemen Layanan Digital Pemerintah',
    domainId: 'aspek-1',
    domainName: 'Tata Kelola dan Manajemen',
    aspectName: 'Manajemen Layanan',
    weight: 5,
    description: 'Menilai penerapan manajemen risiko, manajemen perubahan, manajemen aset TIK, dan service desk manajemen layanan digital berstandar.',
    criteria: {
      1: 'Manajemen layanan digital dilakukan secara ad-hoc tanpa prosedur terdokumentasi.',
      2: 'Telah ada pedoman manajemen layanan di beberapa unit kerja tertentu namun belum seragam.',
      3: 'Telah ditetapkan SOP Manajemen Layanan Digital, SOP Manajemen Risiko Digital, dan SOP Manajemen Perubahan di seluruh instansi.',
      4: 'Manajemen layanan digital terintegrasi dalam Service Desk terpusat dan Register Risiko dimonitoring secara berkala.',
      5: 'Manajemen layanan digital telah diaudit berkala sesuai standar ISO 20000 / ISO 31000 dan terus ditingkatkan kinerjanya.'
    },
    evidenceByLevel: {
      1: `Dokumen Bukti Level 1 (Rintisan):
1. Catatan penanganan kendala server atau aplikasi yang bersifat reaktif.
2. Belum memiliki formulir register risiko digital.`,
      2: `Dokumen Bukti Level 2 (Terkelola):
1. Draft panduan service desk atau penanganan gangguan yang dibuat oleh unit TIK.
2. Matriks identifikasi risiko pada 1-2 aplikasi prioritas.`,
      3: `Dokumen Bukti Level 3 (Terstandarisasi):
1. Dokumen SOP Manajemen Layanan Digital & Service Desk Resmi Instansi.
2. Formulir Register Risiko Pemerintah Digital terisi lengkap beserta Rencana Mitigasi (Risk Treatment Plan).
3. SK Tim Pengelola Manajemen Risiko dan Tim Manajemen Perubahan Digital.`,
      4: `Dokumen Bukti Level 4 (Terpadu):
1. Tangkapan layar sistem Service Management / Ticketing Helpdesk terpadu.
2. Laporan pemantauan dan mitigasi risiko digital triwulanan/semesteran.
3. Rekapitulasi pemenuhan SLA layanan penanganan insiden digital.`,
      5: `Dokumen Bukti Level 5 (Optimum):
1. Laporan Reviu Efektivitas Manajemen Layanan dan Risiko oleh Inspektorat/Auditor Eksternal.
2. Sertifikat ISO 20000 / ISO 31000 pada operasional pusat data/layanan utama.
3. Bukti continual service improvement (CSI) berdasarkan umpan balik berkala.`
    },
    evidenceNarration: `Data dukung meliputi SOP Manajemen Layanan, Dokumen Register Risiko Digital, Laporan Pemantauan Triwulanan, dan Sertifikat ISO 20000/31000.`,
    evidenceChecklist: [
      { id: 'c2-1', label: 'Dokumen SOP Manajemen Layanan & Service Desk Digital Resmi', required: true, minLevel: 3 },
      { id: 'c2-2', label: 'Dokumen Formulir Register Risiko Digital & Rencana Mitigasi', required: true, minLevel: 3 },
      { id: 'c2-3', label: 'Laporan Pemantauan Pelaksanaan Mitigasi Risiko Triwulanan', required: true, minLevel: 4 },
      { id: 'c2-4', label: 'Laporan Hasil Audit/Reviu Efektivitas Manajemen Layanan Digital', required: false, minLevel: 5 }
    ],
    tips: 'Sertakan risiko-risiko mutakhir seperti insiden ransomware, kebocoran data pribadi, dan kegagalan migrasi cloud.'
  },

  // ================= ASPEK 2: PENYELENGGARA (BOBOT 10%) =================
  {
    id: 'ind-03',
    number: 3,
    code: 'IND-03',
    name: 'Tingkat Kematangan Sumber Daya Manusia Pemerintah Digital',
    domainId: 'aspek-2',
    domainName: 'Penyelenggara',
    aspectName: 'SDM Pemdi & AI',
    weight: 5,
    description: 'Menilai perencanaan, kompetensi, literasi digital ASN, serta adopsi kecerdasan buatan (AI) dan analisis data mutakhir.',
    criteria: {
      1: 'Pengembangan kompetensi digital ASN belum terencana dan bersifat insidental.',
      2: 'Telah dilakukan pelatihan TIK dasar bagi sebagian staf pengelola sistem.',
      3: 'Telah ditetapkan Analisis Kebutuhan Pelatihan (TNA) digital dan program sertifikasi kompetensi keahlian TIK ASN.',
      4: 'ASN memanfaatkan teknologi mutakhir (AI, big data analytics) dalam pekerjaan dan telah bersertifikasi keahlian spesifik.',
      5: 'Penerapan Digital Talent Management berkelanjutan dan inovasi AI yang dievaluasi dampak efisiensinya terhadap produktivitas organisasi.'
    },
    evidenceByLevel: {
      1: `Dokumen Bukti Level 1 (Rintisan):
1. Daftar staf pengelola IT tanpa rincian sertifikasi kompetensi.
2. Belum ada alokasi anggaran pelatihan digital khusus.`,
      2: `Dokumen Bukti Level 2 (Terkelola):
1. Sertifikat pelatihan aplikasi atau bimbingan teknis dasar untuk operator OPD.
2. Usulan kebutuhan diklat TIK dari unit teknis.`,
      3: `Dokumen Bukti Level 3 (Terstandarisasi):
1. Dokumen Training Needs Analysis (TNA) Keahlian Digital ASN Instansi.
2. Salinan Sertifikat Kompetensi BNSP / Sertifikasi Internasional ASN (Network, Security, Cloud, Data Analyst).
3. Bukti alokasi anggaran pengembangan SDM digital dalam DPA/RKA.`,
      4: `Dokumen Bukti Level 4 (Terpadu):
1. Bukti implementasi pemanfaatan Artificial Intelligence (AI) atau analitik data mutakhir oleh ASN dalam perumusan kebijakan.
2. Laporan peningkatan indeks literasi digital ASN instansi.
3. Surat Keputusan pembentukan Tim Pengembang Digital (In-house Software Engineer / Data Scientist).`,
      5: `Dokumen Bukti Level 5 (Optimum):
1. Laporan evaluasi berkala dampak pemanfaatan AI terhadap efisiensi jam kerja birokrasi.
2. Sistem Talent Pool ASN Digital dengan jenjang karier berbasis merit system teruji.
3. Publikasi karya inovasi teknologi atau hak cipta solusi digital yang dihasilkan ASN instansi.`
    },
    evidenceNarration: `Data dukung meliputi Dokumen TNA Digital ASN, Sertifikat Kompetensi Profesional TIK, Bukti Pemanfaatan AI / Analitik Data dalam Pekerjaan, dan Evaluasi Efisiensi SDM.`,
    evidenceChecklist: [
      { id: 'c3-1', label: 'Dokumen Analisis Kebutuhan Diklat (TNA) Digital ASN', required: true, minLevel: 3 },
      { id: 'c3-2', label: 'Salinan Sertifikat Kompetensi Profesional TIK ASN (BNSP/Global)', required: true, minLevel: 3 },
      { id: 'c3-3', label: 'Dokumen / Laporan Pemanfaatan AI dan Analitik Data oleh ASN', required: true, minLevel: 4 },
      { id: 'c3-4', label: 'Laporan Evaluasi Dampak Produktivitas SDM Digital', required: false, minLevel: 5 }
    ],
    tips: 'PermenPANRB 8/2026 secara eksplisit menilai pemanfaatan AI dan analitik data mutakhir sebagai pengungkit skor Level 4 & 5.'
  },
  {
    id: 'ind-04',
    number: 4,
    code: 'IND-04',
    name: 'Tingkat Kematangan Kolaborasi Pemerintah Digital',
    domainId: 'aspek-2',
    domainName: 'Penyelenggara',
    aspectName: 'Kolaborasi Digital',
    weight: 5,
    description: 'Menilai sinergi, kemitraan strategis, dan berbagi pakai kapabilitas dengan instansi lain, akademisi, BUMN/swasta, dan komunitas digital.',
    criteria: {
      1: 'Inisiatif digital berjalan sendiri-sendiri tanpa kolaborasi eksternal.',
      2: 'Kolaborasi bersifat ad-hoc tanpa didukung perjanjian kerja sama formal.',
      3: 'Telah ditetapkan Perjanjian Kerja Sama (PKS) atau MoU kolaborasi digital lintas sektor (Quadruple Helix).',
      4: 'Kolaborasi berjalan aktif melalui platform bersama, pertukaran keahlian, dan co-creation solusi digital.',
      5: 'Kolaborasi dievaluasi berkala dan menghasilkan efisiensi biaya serta perluasan adopsi layanan digital.'
    },
    evidenceByLevel: {
      1: `Dokumen Bukti Level 1 (Rintisan):
1. Diskusi penjajakan kerja sama awal tanpa naskah kesepakatan resmi.`,
      2: `Dokumen Bukti Level 2 (Terkelola):
1. Naskah nota kesepahaman (MoU) umum yang belum ditindaklanjuti dengan PKS operasional.`,
      3: `Dokumen Bukti Level 3 (Terstandarisasi):
1. Salinan Perjanjian Kerja Sama (PKS) kolaborasi digital dengan perguruan tinggi, BUMN/BUMD, atau Pemda lain.
2. Kerangka Acuan Kerja (KAK) dan rencana aksi kemitraan digital.
3. SK Tim Kerja Bersama Pelaksana Kolaborasi Digital.`,
      4: `Dokumen Bukti Level 4 (Terpadu):
1. Laporan pelaksanaan program kolaborasi digital aktif (misal: Digital Innovation Lab, Hackathon, sharing infrastruktur).
2. Bukti adopsi bersama solusi digital hasil kemitraan antardaerah/antarinstansi.`,
      5: `Dokumen Bukti Level 5 (Optimum):
1. Laporan Evaluasi Kemitraan Digital yang memuat analisis cost-benefit dan efisiensi anggaran belanja TIK.
2. Model replikasi solusi digital oleh instansi lain tingkat nasional.
3. Testimoni dan pengakuan publik/penghargaan atas keberhasilan kolaborasi digital.`
    },
    evidenceNarration: `Data dukung meliputi Naskah PKS Kolaborasi Digital Resmi, Bukti Kegiatan Co-creation / Sharing Infrastruktur, dan Laporan Evaluasi Efisiensi Anggaran Kemitraan.`,
    evidenceChecklist: [
      { id: 'c4-1', label: 'Salinan Perjanjian Kerja Sama (PKS) Kolaborasi Digital', required: true, minLevel: 3 },
      { id: 'c4-2', label: 'Laporan Pelaksanaan Program Bersama Kemitraan Digital', required: true, minLevel: 4 },
      { id: 'c4-3', label: 'Laporan Evaluasi Efisiensi dan Dampak Kolaborasi Digital', required: false, minLevel: 5 }
    ],
    tips: 'Tunjukkan kerja sama berbagi pakai kode sumber aplikasi (open source) atau replikasi sistem antardaerah.'
  },

  // ================= ASPEK 3: DATA (BOBOT 15%) =================
  {
    id: 'ind-05',
    number: 5,
    code: 'IND-05',
    name: 'Tingkat Kematangan Tata Kelola Data',
    domainId: 'aspek-3',
    domainName: 'Data',
    aspectName: 'Satu Data Indonesia',
    weight: 5,
    description: 'Menilai implementasi Satu Data Indonesia: peran Walidata, Produsen Data, penegakan standar data, metadata, dan kode referensi.',
    criteria: {
      1: 'Data dikelola secara parsial di masing-masing unit tanpa Walidata resmi.',
      2: 'Sudah ada penunjukan Walidata tetapi belum ada pedoman standar data dan metadata baku.',
      3: 'Telah ditetapkan Peraturan Kepala Instansi tentang Tata Kelola Satu Data dan SOP Manajemen Data resmi.',
      4: 'Seluruh dataset prioritas telah tervalidasi memenuhi standar data, memiliki metadata baku, dan terhubung ke Portal SDI Nasional (data.go.id).',
      5: 'Telah dilakukan evaluasi berkala dan pembersihan data (data cleansing) otomatis dengan pengawasan forum satu data.'
    },
    evidenceByLevel: {
      1: `Dokumen Bukti Level 1 (Rintisan):
1. Rekapitulasi data tabel di spreadsheet lokal masing-masing dinas.`,
      2: `Dokumen Bukti Level 2 (Terkelola):
1. SK Penunjukan Walidata di Diskominfo tanpa penetapan struktur Produsen Data dan Forum Satu Data.`,
      3: `Dokumen Bukti Level 3 (Terstandarisasi):
1. Peraturan Kepala Daerah / Pimpinan Instansi tentang Penyelenggaraan Satu Data Indonesia Daerah.
2. SK Penetapan Forum Satu Data, Pembina Data, Walidata, dan Produsen Data.
3. Pedoman Standar Data, Struktur Metadata, dan Kode Referensi Resmi.`,
      4: `Dokumen Bukti Level 4 (Terpadu):
1. Bukti interkoneksi API Portal Satu Data Daerah dengan Portal Satu Data Indonesia Nasional (data.go.id).
2. Daftar Data dan Rencana Aksi Data tahunan yang disahkan Forum Satu Data.
3. Rekomendasi Statistik resmi dari Pembina Data (BPS) atas dataset prioritas daerah.`,
      5: `Dokumen Bukti Level 5 (Optimum):
1. Laporan Evaluasi Kualitas Data (Data Quality Assessment / Cleansing) berkala.
2. Bukti pemanfaatan dataset Satu Data sebagai dasar analitik pengambilan kebijakan pimpinan (Dashboard Eksekutif).`
    },
    evidenceNarration: `Data dukung meliputi Peraturan Satu Data Daerah, SK Forum Satu Data, Daftar Data Resmi, Bukti Sinkronisasi data.go.id, dan Laporan Kualitas Data.`,
    evidenceChecklist: [
      { id: 'c5-1', label: 'Peraturan Kepala Daerah tentang Penyelenggaraan Satu Data', required: true, minLevel: 3 },
      { id: 'c5-2', label: 'SK Penunjukan Walidata, Pembina Data, dan Produsen Data', required: true, minLevel: 3 },
      { id: 'c5-3', label: 'Bukti Keterhubungan API dengan Portal data.go.id Nasional', required: true, minLevel: 4 },
      { id: 'c5-4', label: 'Laporan Pemantauan Kualitas Data & Pemanfaatan Kebijakan', required: false, minLevel: 5 }
    ],
    tips: 'Pastikan seluruh dataset yang dipublikasikan telah memiliki lembar metadata standar XML/JSON.'
  },
  {
    id: 'ind-06',
    number: 6,
    code: 'IND-06',
    name: 'Tingkat Kematangan Penyelenggaraan Informasi Geospasial',
    domainId: 'aspek-3',
    domainName: 'Data',
    aspectName: 'Informasi Geospasial / JIGN',
    weight: 3,
    description: 'Menilai penyelenggaraan simpul jaringan informasi geospasial (peta digital/GIS) yang terhubung ke Jaringan Informasi Geospasial Nasional (JIGN) BIG.',
    criteria: {
      1: 'Peta digital masih berupa file gambar/CAD lepas tanpa georeferensi standar.',
      2: 'Sudah ada peta GIS di unit tertentu namun belum terintegrasi dalam simpul jaringan.',
      3: 'Telah ditetapkan SK Pengelola Simpul Jaringan Geospasial dan Geoportal Instansi yang aktif beroperasi.',
      4: 'Simpul Jaringan Geospasial telah terhubung secara operasional dengan JIGN Badan Informasi Geospasial (BIG).',
      5: 'Informasi Geospasial dimanfaatkan optimal untuk tata ruang (RDTR), mitigasi bencana, dan dievaluasi kualitas tematiknya.'
    },
    evidenceByLevel: {
      1: `Dokumen Bukti Level 1 (Rintisan):
1. File peta format image (JPG/PNG) atau PDF tanpa metadata geospasial baku.`,
      2: `Dokumen Bukti Level 2 (Terkelola):
1. Shapefile (SHP) peta tata ruang di Bappeda atau Dinas PUPR tanpa geoportal terbuka.`,
      3: `Dokumen Bukti Level 3 (Terstandarisasi):
1. SK Kepala Instansi tentang Pembentukan Simpul Jaringan Informasi Geospasial Daerah.
2. URL dan tangkapan layar Geoportal resmi instansi berbasis Web-GIS (MapServer/GeoServer).
3. Metadata spasial standar ISO 19115 pada layer tematik peta.`,
      4: `Dokumen Bukti Level 4 (Terpadu):
1. Surat Keputusan / Piagam Keterhubungan Simpul Jaringan dari Badan Informasi Geospasial (BIG).
2. Tangkapan layar integrasi katalog peta ke Portal JIGN Nasional (tanahair.indonesia.go.id).
3. Layanan web map service (WMS/WFS) aktif yang dapat diakses publik.`,
      5: `Dokumen Bukti Level 5 (Optimum):
1. Penghargaan Bhumandala Award atau Laporan Kinerja Simpul Jaringan Terbaik.
2. Bukti pemanfaatan peta geospasial real-time untuk perizinan tata ruang (KKPR) dan mitigasi risiko bencana.`
    },
    evidenceNarration: `Data dukung meliputi SK Simpul Jaringan Geospasial, Tangkapan Layar Geoportal Web-GIS, Surat Keterhubungan JIGN BIG, dan WMS/WFS Service.`,
    evidenceChecklist: [
      { id: 'c6-1', label: 'SK Penetapan Simpul Jaringan Geospasial Instansi', required: true, minLevel: 3 },
      { id: 'c6-2', label: 'Tangkapan layar dan URL Geoportal Web-GIS Instansi', required: true, minLevel: 3 },
      { id: 'c6-3', label: 'Piagam / Surat Keterhubungan dengan Portal JIGN BIG', required: true, minLevel: 4 },
      { id: 'c6-4', label: 'Bukti pemanfaatan analitik geospasial dalam layanan perizinan/bencana', required: false, minLevel: 5 }
    ],
    tips: 'Keterhubungan aktif dengan status "Operasional Penuh" di monitoring JIGN BIG memberikan skor Level 4.'
  },
  {
    id: 'ind-07',
    number: 7,
    code: 'IND-07',
    name: 'Tingkat Kematangan Pembangunan Statistik',
    domainId: 'aspek-3',
    domainName: 'Data',
    aspectName: 'Statistik Sektoral',
    weight: 3,
    description: 'Menilai penyelenggaraan statistik sektoral: perolehan rekomendasi kegiatan statistik dari BPS dan penyusunan metadata statistik baku.',
    criteria: {
      1: 'Pengumpulan data statistik dilakukan tanpa koordinasi dengan Pembina Data (BPS).',
      2: 'Kegiatan statistik ada di beberapa OPD namun belum mengajukan rekomendasi statistik.',
      3: 'Telah ditetapkan SOP Penyelenggaraan Statistik Sektoral dan seluruh OPD mengajukan rekomendasi statistik ke BPS.',
      4: 'Telah memperoleh Surat Rekomendasi Statistik BPS (Romantik) dan metadata statistik terbit di portal resmi.',
      5: 'Evaluasi Penyelenggaraan Statistik Sektoral (EPSS) mencapai predikat "Baik" / "Sangat Baik" dari BPS secara berkelanjutan.'
    },
    evidenceByLevel: {
      1: `Dokumen Bukti Level 1 (Rintisan):
1. Buku publikasi angka statistik tahunan tanpa verifikasi metodologi BPS.`,
      2: `Dokumen Bukti Level 2 (Terkelola):
1. Formulir survei statistik sektoral yang baru dibuat mandiri oleh OPD pelaksana.`,
      3: `Dokumen Bukti Level 3 (Terstandarisasi):
1. SOP Pengusulan Rekomendasi Kegiatan Statistik Sektoral ke BPS.
2. Dokumen Kerangka Acuan Kerja (KAK) survei statistik sektoral yang memuat rancangan sampel dan kuesioner.`,
      4: `Dokumen Bukti Level 4 (Terpadu):
1. Surat Rekomendasi Statistik dari BPS (Persetujuan Aplikasi Romantik BPS).
2. Dokumen Metadata Statistik Kegiatan (MS-Keg), Metadata Variabel (MS-Var), dan Indikator (MS-Ind).
3. Publikasi dataset statistik sektoral yang telah tervalidasi di portal Satu Data.`,
      5: `Dokumen Bukti Level 5 (Optimum):
1. Sertifikat Hasil Evaluasi Penyelenggaraan Statistik Sektoral (EPSS) dengan Indeks Pembangunan Statistik (IPS) Predikat Baik/Sangat Baik.
2. Pemanfaatan data statistik prediktif untuk perencanaan pengentasan kemiskinan dan stunting.`
    },
    evidenceNarration: `Data dukung meliputi Surat Rekomendasi Statistik Romantik BPS, Lembar Metadata Statistik (MS-Keg/Var/Ind), dan Sertifikat Nilai IPS dari BPS.`,
    evidenceChecklist: [
      { id: 'c7-1', label: 'SOP Tata Cara Pengusulan Rekomendasi Statistik ke BPS', required: true, minLevel: 3 },
      { id: 'c7-2', label: 'Surat Tanda Bukti Rekomendasi Statistik (Romantik) dari BPS', required: true, minLevel: 4 },
      { id: 'c7-3', label: 'Dokumen Metadata Statistik Baku (MS-Keg, MS-Var, MS-Ind)', required: true, minLevel: 4 },
      { id: 'c7-4', label: 'Piagam / Nilai Evaluasi Penyelenggaraan Statistik Sektoral (EPSS)', required: false, minLevel: 5 }
    ],
    tips: 'Lampirkan bukti tangkapan layar akun instansi pada aplikasi Romantik Online BPS.'
  },
  {
    id: 'ind-08',
    number: 8,
    code: 'IND-08',
    name: 'Tingkat Kematangan Pelindungan Data Pribadi (PDP)',
    domainId: 'aspek-3',
    domainName: 'Data',
    aspectName: 'Kepatuhan UU PDP',
    weight: 4,
    description: 'Menilai kepatuhan terhadap UU No. 27/2022 tentang Pelindungan Data Pribadi: penunjukan Pejabat PDP/DPO, SOP pemrosesan data, dan tata kelola persetujuan warga.',
    criteria: {
      1: 'Belum ada langkah perlindungan data pribadi dan belum ada kebijakan formal.',
      2: 'Telah ada klausul persetujuan (consent) parsial di beberapa form pendaftaran aplikasi publik.',
      3: 'Telah ditetapkan SK Pejabat/Petugas Pelindung Data Pribadi (Data Protection Officer) dan SOP Pemrosesan Data Pribadi resmi.',
      4: 'Penerapan prinsip PDP terintegrasi dalam siklus hidup data (DPIA / Analisis Dampak PDP, enkripsi data sensitif, hak subjek data).',
      5: 'Pelindungan Data Pribadi diaudit berkala, zero data breach, dan memiliki mekanisme ganti rugi/notifikasi insiden transparan.'
    },
    evidenceByLevel: {
      1: `Dokumen Bukti Level 1 (Rintisan):
1. Belum terdapat klausul kerahasiaan data pribadi pada formulir pengumpulan data warga.`,
      2: `Dokumen Bukti Level 2 (Terkelola):
1. Ketentuan syarat dan ketentuan (Terms & Conditions) sederhana pada website instansi.`,
      3: `Dokumen Bukti Level 3 (Terstandarisasi):
1. Keputusan Kepala Instansi tentang Penunjukan Pejabat Pelindung Data Pribadi (DPO / Data Protection Officer).
2. Dokumen Kebijakan & SOP Pemrosesan, Penyimpanan, dan Penghapusan Data Pribadi.
3. Format Lembar Persetujuan (Explicit Consent Form) pada seluruh aplikasi layanan masyarakat.`,
      4: `Dokumen Bukti Level 4 (Terpadu):
1. Dokumen Penilaian Dampak Pelindungan Data Pribadi (Data Protection Impact Assessment / DPIA) pada sistem kritikal.
2. Bukti teknis enkripsi data pribadi (NIK, Rekam Medis, Biometrik) pada basis data (Data-at-rest & Data-in-transit).
3. Fitur permohonan penghapusan/perbaikan data oleh subjek data (Hak Pemilik Data).`,
      5: `Dokumen Bukti Level 5 (Optimum):
1. Laporan Audit Kepatuhan PDP Eksternal independen tahunan.
2. SOP dan simulasi notifikasi kebocoran data pribadi (maksimal 3x24 jam ke otoritas PDP dan subjek data).
3. Sertifikasi personel DPO dari lembaga tersertifikasi nasional/internasional.`
    },
    evidenceNarration: `Data dukung meliputi SK Penunjukan DPO, SOP Pemrosesan Data Pribadi, Dokumen DPIA, Bukti Enkripsi Database NIK/KTP, dan SOP Notifikasi Kebocoran PDP.`,
    evidenceChecklist: [
      { id: 'c8-1', label: 'SK Penunjukan Pejabat Pelindung Data Pribadi (DPO) Instansi', required: true, minLevel: 3 },
      { id: 'c8-2', label: 'Dokumen SOP Tata Kelola Pemrosesan dan Retensi Data Pribadi', required: true, minLevel: 3 },
      { id: 'c8-3', label: 'Laporan Penilaian Dampak Pelindungan Data Pribadi (DPIA)', required: true, minLevel: 4 },
      { id: 'c8-4', label: 'Laporan Audit Kepatuhan PDP dan Sertifikasi Petugas DPO', required: false, minLevel: 5 }
    ],
    tips: 'PermenPANRB 8/2026 sangat mengedepankan aspek PDP sejalan dengan berlakunya penuh sanksi UU No. 27 Tahun 2022.'
  },

  // ================= ASPEK 4: KEAMANAN PEMERINTAH DIGITAL (BOBOT 15%) =================
  {
    id: 'ind-09',
    number: 9,
    code: 'IND-09',
    name: 'Tingkat Kematangan Pelaksanaan Audit Keamanan Pemerintah Digital dan Teknologi',
    domainId: 'aspek-4',
    domainName: 'Keamanan Pemerintah Digital',
    aspectName: 'Audit Keamanan & VAPT',
    weight: 4,
    description: 'Menilai pelaksanaan audit kepatuhan keamanan dan uji penetrasi kerentanan (Vulnerability Assessment & Penetration Testing) pada aplikasi dan server.',
    criteria: {
      1: 'Belum pernah dilakukan audit keamanan dan uji penetrasi pada sistem digital instansi.',
      2: 'Uji kerentanan dilakukan internal secara ad-hoc tanpa metodologi standar.',
      3: 'Telah dilakukan VAPT secara resmi oleh auditor tersertifikasi / BSSN pada seluruh sistem informasi utama instansi.',
      4: 'Temuan kerentanan (vulnerability) telah ditindaklanjuti secara tuntas (remediasi/patching) dan lolos uji ulang (re-test).',
      5: 'Audit keamanan dilakukan berkala terjadwal (minimal setahun sekali) dan instansi memiliki sertifikasi ISO 27001 aktif.'
    },
    evidenceByLevel: {
      1: `Dokumen Bukti Level 1 (Rintisan):
1. Log antivirus pada workstation tanpa audit sistem terpusat.`,
      2: `Dokumen Bukti Level 2 (Terkelola):
1. Hasil scan otomatis menggunakan tools scanner gratisan oleh programmer internal tanpa laporan formal.`,
      3: `Dokumen Bukti Level 3 (Terstandarisasi):
1. Laporan Resmi Hasil Vulnerability Assessment & Penetration Testing (VAPT Report) dari BSSN atau Auditor Bersertifikat (CISA/CEH).
2. Surat Perintah Tugas / Kontrak Kerja pelaksanaan audit keamanan TIK.
3. Matriks klasifikasi temuan kerentanan berdasarkan tingkat keparahan (Critical, High, Medium, Low).`,
      4: `Dokumen Bukti Level 4 (Terpadu):
1. Lembar Hasil Tindak Lanjut (LHTL) atau Laporan Remidiasi Penutupan Celah Keamanan.
2. Berita Acara Re-Test Sign-off yang menyatakan seluruh celah kategori Critical dan High telah ditutup (Status: Closed/Patched).
3. Surat Rekomendasi Keamanan dari Direktorat Keamanan Siber Pemerintah BSSN.`,
      5: `Dokumen Bukti Level 5 (Optimum):
1. Sertifikat ISO/IEC 27001 Sistem Manajemen Keamanan Informasi yang masih berlaku aktif.
2. Laporan audit surveilans ISO tahunan dan audit kepatuhan regulasi keamanan siber.
3. Penerapan automated security testing (DevSecOps) pada siklus pengembangan aplikasi.`
    },
    evidenceNarration: `Bukti wajib: Laporan VAPT Resmi Auditor/BSSN, Matriks Remediasi Kerentanan, Berita Acara Retest Sign-off, dan Sertifikat ISO 27001.`,
    evidenceChecklist: [
      { id: 'c9-1', label: 'Laporan Resmi Hasil VAPT dari BSSN atau Auditor Tersertifikasi', required: true, minLevel: 3 },
      { id: 'c9-2', label: 'Matriks Lembar Hasil Tindak Lanjut (LHTL) Penutupan Bug', required: true, minLevel: 4 },
      { id: 'c9-3', label: 'Berita Acara Uji Ulang (Re-test Sign-off) Bebas Kerentanan Kritis', required: true, minLevel: 4 },
      { id: 'c9-4', label: 'Sertifikat ISO/IEC 27001 yang aktif berlaku', required: false, minLevel: 5 }
    ],
    tips: 'Pastikan laporan VAPT mencantumkan metode pengujian (OWASP Top 10) dan bukti penutupan celah dengan status "Closed/Patched".'
  },
  {
    id: 'ind-10',
    number: 10,
    code: 'IND-10',
    name: 'Tingkat Kematangan Keamanan Pemerintah Digital',
    domainId: 'aspek-4',
    domainName: 'Keamanan Pemerintah Digital',
    aspectName: 'SMKI & Indeks KAMI',
    weight: 4,
    description: 'Menilai implementasi Sistem Manajemen Keamanan Informasi (SMKI) dan tingkat kesiapan keamanan informasi berdasarkan Indeks KAMI BSSN.',
    criteria: {
      1: 'Belum menerapkan kerangka kerja sistem manajemen keamanan informasi.',
      2: 'Penerapan keamanan sebatas pengaturan firewall dasar dan antivirus.',
      3: 'Telah ditetapkan Peraturan Pimpinan tentang Kebijakan Keamanan Informasi dan dilakukan Asesmen Indeks KAMI BSSN.',
      4: 'Hasil evaluasi Indeks KAMI BSSN mencapai status "Baik" / "Cukup Tinggi" dan diterapkan di seluruh unit kerja.',
      5: 'Penerapan SMKI dievaluasi berkala, zero major security incident, dan adaptif terhadap model zero-trust architecture.'
    },
    evidenceByLevel: {
      1: `Dokumen Bukti Level 1 (Rintisan):
1. Tidak ada dokumen kebijakan keamanan tertulis.`,
      2: `Dokumen Bukti Level 2 (Terkelola):
1. Himbauan pergantian password email berkala di lingkungan kantor.`,
      3: `Dokumen Bukti Level 3 (Terstandarisasi):
1. Peraturan Pimpinan Instansi tentang Kebijakan Sistem Manajemen Keamanan Informasi (SMKI).
2. Dokumen Hasil Pengisian dan Asesmen Indeks Keamanan Informasi (Indeks KAMI) BSSN.
3. SOP Pengelolaan Hak Akses, SOP Backup Data, dan SOP Pengamanan Fisik Ruang Server.`,
      4: `Dokumen Bukti Level 4 (Terpadu):
1. Piagam / Sertifikat Hasil Penilaian Indeks KAMI dari BSSN dengan status "Kesiapan Baik".
2. Bukti penerapan segmentasi jaringan zona aman dan Multi-Factor Authentication (MFA) pada seluruh akses admin.`,
      5: `Dokumen Bukti Level 5 (Optimum):
1. Dokumen Arsitektur Keamanan Zero Trust (ZTA) yang diimplementasikan penuh.
2. Laporan reviu manajemen tahunan SMKI dan peningkatan skor Indeks KAMI secara konsisten.`
    },
    evidenceNarration: `Data dukung meliputi Peraturan Kebijakan SMKI, Laporan Hasil Indeks KAMI BSSN, SOP Hak Akses & MFA, dan Piagam Sertifikasi Kesiapan Keamanan BSSN.`,
    evidenceChecklist: [
      { id: 'c10-1', label: 'Peraturan Pimpinan Instansi tentang Kebijakan SMKI', required: true, minLevel: 3 },
      { id: 'c10-2', label: 'Dokumen Asesmen Lengkap Indeks KAMI BSSN', required: true, minLevel: 3 },
      { id: 'c10-3', label: 'Piagam Hasil Evaluasi Indeks KAMI dari BSSN (Kesiapan Baik)', required: true, minLevel: 4 },
      { id: 'c10-4', label: 'Laporan Audit Kepatuhan SMKI dan Zero Trust Implementation', required: false, minLevel: 5 }
    ],
    tips: 'Skor Indeks KAMI yang tervalidasi BSSN adalah bukti terkuat untuk indikator ini.'
  },
  {
    id: 'ind-11',
    number: 11,
    code: 'IND-11',
    name: 'Tingkat Kematangan Penerapan Kriptografi untuk Keamanan Data',
    domainId: 'aspek-4',
    domainName: 'Keamanan Pemerintah Digital',
    aspectName: 'Kriptografi & TTE BSrE',
    weight: 3,
    description: 'Menilai pemanfaatan algoritma enkripsi, modul keamanan perangkat keras (HSM), dan pemanfaatan Tanda Tangan Elektronik (TTE) tersertifikasi Balai Sertifikasi Elektronik (BSrE) BSSN.',
    criteria: {
      1: 'Pertukaran data dan persuratan belum menggunakan enkripsi dan masih menggunakan tanda tangan manual.',
      2: 'Tanda tangan digital baru berupa scan barcode/gambar tempelan tanpa sertifikat kriptografis.',
      3: 'Telah menandatangani PKS pemanfaatan Sertifikat Elektronik dengan BSrE BSSN dan menerbitkan TTE pada seluruh pejabat struktural.',
      4: 'TTE BSrE telah terpasang secara API di seluruh aplikasi layanan (e-Office, Perizinan, SIMPEG, Pajak) dan data sensitif terenkripsi TLS 1.3/AES-256.',
      5: 'Penerapan Hardware Security Module (HSM) tersertifikasi dan evaluasi berkala kepatuhan siklus hidup sertifikat elektronik.'
    },
    evidenceByLevel: {
      1: `Dokumen Bukti Level 1 (Rintisan):
1. Scan tanda tangan pulpen dalam format gambar JPG yang ditempel di dokumen Microsoft Word.`,
      2: `Dokumen Bukti Level 2 (Terkelola):
1. Barcode QR code sederhana yang hanya mengarahkan ke link website tanpa sertifikat digital tersertifikasi.`,
      3: `Dokumen Bukti Level 3 (Terstandarisasi):
1. Perjanjian Kerja Sama (PKS) pemanfaatan Sertifikat Elektronik antara Kepala Instansi dengan Balai Sertifikasi Elektronik (BSrE) BSSN.
2. Surat Keputusan penunjukan Pengelola Sertifikat Elektronik Instansi.
3. Sampel Surat Dinas Resmi bertanda tangan TTE yang tervalidasi sah di portal verifikasi BSrE/Komdigi.`,
      4: `Dokumen Bukti Level 4 (Terpadu):
1. Tangkapan layar integrasi modul API TTE BSrE ke dalam aplikasi layanan publik, perizinan, persuratan, dan kepegawaian.
2. Bukti implementasi protokol enkripsi TLS 1.3 dengan sertifikat SSL/TLS valid grade A.
3. Laporan statistik volume penandatanganan TTE bulanan oleh seluruh pejabat instansi.`,
      5: `Dokumen Bukti Level 5 (Optimum):
1. Bukti penggunaan Hardware Security Module (HSM) untuk pengamanan private key instansi.
2. SOP otomatisasi audit masa kedaluwarsa sertifikat dan zero unencrypted sensitive data transmission.`
    },
    evidenceNarration: `Data dukung meliputi PKS dengan BSrE BSSN, Sampel Dokumen Sah Terverifikasi TTE (PDF & QR), Bukti Enkripsi TLS 1.3, dan Laporan Rekapitulasi TTE.`,
    evidenceChecklist: [
      { id: 'c11-1', label: 'PKS Pemanfaatan Sertifikat Elektronik dengan BSrE BSSN', required: true, minLevel: 3 },
      { id: 'c11-2', label: 'Sampel Dokumen Resmi bertanda tangan TTE BSrE tervalidasi', required: true, minLevel: 3 },
      { id: 'c11-3', label: 'Log integrasi API TTE BSrE pada multi-aplikasi instansi', required: true, minLevel: 4 },
      { id: 'c11-4', label: 'Dokumen arsitektur enkripsi data-at-rest dan HSM utilization', required: false, minLevel: 5 }
    ],
    tips: 'Pastikan sampel PDF yang disiapkan berstatus "Signature Valid" saat dicek di situs https://tte.komdigi.go.id.'
  },
  {
    id: 'ind-12',
    number: 12,
    code: 'IND-12',
    name: 'Tingkat Kematangan Kapabilitas Penanganan Insiden Siber',
    domainId: 'aspek-4',
    domainName: 'Keamanan Pemerintah Digital',
    aspectName: 'CSIRT & Penanganan Krisis',
    weight: 4,
    description: 'Menilai kesiapsiagaan Tim Tanggap Insiden Siber (CSIRT), Surat Tanda Registrasi BSSN, SOP penanganan insiden, dan pelaksanaan simulasi latihan krisis siber (Cyber Drill).',
    criteria: {
      1: 'Belum ada tim atau prosedur formal saat terjadi serangan siber / kebocoran data.',
      2: 'Penanganan insiden dilakukan parsial oleh programmer saat server diserang tanpa prosedur mitigasi baku.',
      3: 'Telah ditetapkan SK Tim CSIRT Instansi dan SOP Penanganan Insiden Keamanan Siber Resmi.',
      4: 'Tim CSIRT telah resmi mengantongi Surat Tanda Registrasi (STR) dari BSSN dan terhubung ke Gov-CSIRT Nasional.',
      5: 'Rutin melaksanakan simulasi krisis siber tahunan (Cyber Drill Exercise) dan memiliki laporan evaluasi post-incident review berkala.'
    },
    evidenceByLevel: {
      1: `Dokumen Bukti Level 1 (Rintisan):
1. Catatan perbaikan web defacement secara mandiri tanpa laporan insiden resmi.`,
      2: `Dokumen Bukti Level 2 (Terkelola):
1. Nomor kontak darurat staf pengelola server jika terjadi insiden down.`,
      3: `Dokumen Bukti Level 3 (Terstandarisasi):
1. Surat Keputusan (SK) Kepala Daerah / Pimpinan Instansi tentang Pembentukan Tim CSIRT Instansi.
2. SOP Penanganan Insiden Siber, SOP Triase Laporan, dan SOP Forensik Digital Sederhana.
3. Portal atau kanal resmi pelaporan insiden siber instansi (csirt.daerah.go.id).`,
      4: `Dokumen Bukti Level 4 (Terpadu):
1. Surat Tanda Registrasi (STR) CSIRT resmi yang diterbitkan oleh Badan Siber dan Sandi Negara (BSSN).
2. Bukti interoperabilitas dan pelaporan berkala ke Pusat Operasi Keamanan Siber Nasional BSSN.
3. Laporan penanganan tiket insiden siber yang diselesaikan sesuai target waktu tanggap (Mean Time to Respond).`,
      5: `Dokumen Bukti Level 5 (Optimum):
1. Laporan Pelaksanaan Cyber Drill / Simulasi Krisis Siber gabungan dengan BSSN.
2. Dokumen Post-Incident Review (PIR) dan bukti hardening sistem pasca insiden.
3. Program Cyber Security Awareness berkala bagi seluruh pegawai instansi.`
    },
    evidenceNarration: `Data dukung meliputi SK Tim CSIRT Instansi, Surat Tanda Registrasi (STR) BSSN, SOP Penanganan Insiden, Laporan Tiket Insiden, dan Laporan Simulasi Cyber Drill.`,
    evidenceChecklist: [
      { id: 'c12-1', label: 'SK Pembentukan Tim Tanggap Insiden Siber (CSIRT) Instansi', required: true, minLevel: 3 },
      { id: 'c12-2', label: 'Surat Tanda Registrasi (STR) CSIRT dari BSSN', required: true, minLevel: 4 },
      { id: 'c12-3', label: 'SOP Penanganan Insiden Siber & Kanal Aduan Resmi', required: true, minLevel: 3 },
      { id: 'c12-4', label: 'Laporan Pelaksanaan Simulasi Tanggap Krisis Siber (Cyber Drill)', required: false, minLevel: 5 }
    ],
    tips: 'STR dari BSSN adalah bukti kunci agar indikator ini lolos penilaian asesor di Level 4.'
  },

  // ================= ASPEK 5: TEKNOLOGI PEMERINTAH DIGITAL (BOBOT 10%) =================
  {
    id: 'ind-13',
    number: 13,
    code: 'IND-13',
    name: 'Tingkat Kematangan Aplikasi Pemerintah Digital',
    domainId: 'aspek-5',
    domainName: 'Teknologi Pemerintah Digital',
    aspectName: 'Arsitektur & Pengembangan Aplikasi',
    weight: 5,
    description: 'Menilai tata kelola siklus pengembangan aplikasi (SDLC), dokumentasi software, standardisasi microservice/API, dan pencegahan duplikasi aplikasi baru.',
    criteria: {
      1: 'Pembangunan aplikasi dilakukan tanpa standar arsitektur dan tanpa dokumentasi kode sumber.',
      2: 'Aplikasi dibangun oleh masing-masing unit kerja secara terisolasi (silo application).',
      3: 'Telah ditetapkan Pedoman Standar Pembangunan Aplikasi, kepatuhan arsitektur terbuka, dan inventarisasi repositori kode sumber instansi.',
      4: 'Aplikasi dibangun modular berbasis arsitektur microservices/cloud-native dengan API terbuka dan bebas duplikasi fungsi.',
      5: 'Penerapan pipeline otomatisasi CI/CD, uji keamanan otomatis, dan reviu efektivitas aplikasi berkala untuk pembersihan aplikasi usang.'
    },
    evidenceByLevel: {
      1: `Dokumen Bukti Level 1 (Rintisan):
1. Aplikasi dibuat oleh pihak ketiga tanpa serah terima kode sumber dan dokumentasi teknis.`,
      2: `Dokumen Bukti Level 2 (Terkelola):
1. Manual book panduan pengguna (User Guide) pada aplikasi-aplikasi yang berdiri sendiri.`,
      3: `Dokumen Bukti Level 3 (Terstandarisasi):
1. Peraturan / Pedoman Pimpinan tentang Standar Pembangunan dan Pengembangan Aplikasi Pemerintah Digital.
2. Dokumen Software Architecture Document (SAD), Entity Relationship Diagram (ERD), dan API Documentation.
3. Buku Inventaris dan Registrasi Aplikasi Resmi Instansi.`,
      4: `Dokumen Bukti Level 4 (Terpadu):
1. Repositori kode sumber terpusat (GitLab/GitHub instansi) dengan manajemen versi teratur.
2. Bukti audit kliring aplikasi oleh Diskominfo untuk mencegah duplikasi aplikasi baru di OPD.
3. Arsitektur aplikasi berbasis REST API / microservices yang siap diinterkoneksikan.`,
      5: `Dokumen Bukti Level 5 (Optimum):
1. Laporan Evaluasi Efektivitas Aplikasi Tahunan (Aplikasi yang dipertahankan, dimerger, atau dipensiunkan).
2. Penerapan otomatisasi Continuous Integration & Continuous Deployment (CI/CD) teruji.
3. Bukti integrasi ke katalog kode sumber nasional atau berbagi pakai kode dengan daerah lain.`
    },
    evidenceNarration: `Data dukung meliputi Pedoman Pembangunan Aplikasi, Dokumen Arsitektur Teknis & API Spec, Registrasi Aplikasi Instansi, dan Laporan Kliring Aplikasi Usang.`,
    evidenceChecklist: [
      { id: 'c13-1', label: 'Pedoman Standar Siklus Pembangunan Aplikasi Digital Instansi', required: true, minLevel: 3 },
      { id: 'c13-2', label: 'Buku Inventaris & Dokumentasi Spesifikasi Teknis API Aplikasi', required: true, minLevel: 3 },
      { id: 'c13-3', label: 'Bukti Pelaksanaan Kliring Aplikasi (Pencegahan Duplikasi)', required: true, minLevel: 4 },
      { id: 'c13-4', label: 'Laporan Monitoring utilisasi dan konsolidasi aplikasi berkala', required: false, minLevel: 5 }
    ],
    tips: 'Tunjukkan proses kliring aplikasi: tidak ada lagi dinas yang boleh memesan aplikasi baru tanpa persetujuan tim SPBE/Kominfo.'
  },
  {
    id: 'ind-14',
    number: 14,
    code: 'IND-14',
    name: 'Tingkat Kematangan Infrastruktur Pemerintah Digital',
    domainId: 'aspek-5',
    domainName: 'Teknologi Pemerintah Digital',
    aspectName: 'Pusat Data & Komputasi Awan (PDN)',
    weight: 5,
    description: 'Menilai konsolidasi ruang server ke Pusat Data Nasional (PDN) / Cloud tersertifikasi, topologi jaringan tertutup intra pemerintah, dan Disaster Recovery Plan.',
    criteria: {
      1: 'Setiap dinas mengoperasikan server fisik sendiri di ruang kerja tanpa standar pusat data.',
      2: 'Server OPD telah dipindahkan ke ruang server bersama Diskominfo namun belum terstandar tier.',
      3: 'Telah menggunakan Data Center terpadu instansi dengan standar pengamanan listrik, pendingin, dan SOP backup teratur.',
      4: 'Aplikasi dan basis data utama telah dimigrasikan dan memanfaatkan layanan Pusat Data Nasional (PDN) Kementerian Komdigi.',
      5: 'Seluruh sistem beroperasi terpadu di cloud PDN dengan Disaster Recovery Center (DRC) aktif dan teruji failover berkala.'
    },
    evidenceByLevel: {
      1: `Dokumen Bukti Level 1 (Rintisan):
1. Foto server PC desktop yang diletakkan di bawah meja kerja dinas.`,
      2: `Dokumen Bukti Level 2 (Terkelola):
1. Berita acara pemindahan server fisik dinas ke rak server Diskominfo.`,
      3: `Dokumen Bukti Level 3 (Terstandarisasi):
1. Dokumen Topologi Pusat Data dan Jaringan Fiber Optic Intra Pemerintah Daerah.
2. SOP Operasional Data Center, Pengaturan Suhu Ruang Server, dan Jadwal Backup Data Rutin.
3. Bukti fasilitas keamanan fisik (UPS terpusat, Fire Suppression FM200, Akses Biometrik, CCTV).`,
      4: `Dokumen Bukti Level 4 (Terpadu):
1. Surat Keputusan / Berita Acara Pemanfaatan Layanan Pusat Data Nasional (PDN) dari Kementerian Komdigi.
2. Tangkapan layar alokasi cloud resources (vCPU, RAM, Cloud Storage) pada portal PDN.
3. Daftar aplikasi strategis instansi yang telah live beroperasi di infrastruktur PDN.`,
      5: `Dokumen Bukti Level 5 (Optimum):
1. Dokumen Disaster Recovery Plan (DRP) dan Business Continuity Plan (BCP) tervalidasi.
2. Laporan Hasil Simulasi Uji Alih Beban (Failover Simulation Test) ke Disaster Recovery Center (DRC).
3. Laporan efisiensi anggaran belanja server dan listrik pasca migrasi penuh ke PDN.`
    },
    evidenceNarration: `Data dukung meliputi Topologi Data Center & Jaringan, Berita Acara Pemanfaatan PDN Komdigi, SOP Backup Data, Dokumen DRC, dan Laporan Uji Failover.`,
    evidenceChecklist: [
      { id: 'c14-1', label: 'Dokumen Topologi Jaringan & Pusat Data Terpadu Terkini', required: true, minLevel: 3 },
      { id: 'c14-2', label: 'Berita Acara / Surat Penetapan Pemanfaatan Layanan PDN Komdigi', required: true, minLevel: 4 },
      { id: 'c14-3', label: 'SOP Pemeliharaan Pusat Data dan Jadwal Backup Rutin Terjadwal', required: true, minLevel: 3 },
      { id: 'c14-4', label: 'Dokumen Disaster Recovery Plan & Laporan Hasil Uji Coba DRC', required: false, minLevel: 5 }
    ],
    tips: 'Pemanfaatan PDN Komdigi adalah faktor utama perolehan skor Level 4 pada indikator infrastruktur.'
  },

  // ================= ASPEK 6: KETERPADUAN LAYANAN DIGITAL PEMERINTAH (BOBOT 15%) =================
  {
    id: 'ind-15',
    number: 15,
    code: 'IND-15',
    name: 'Keterpaduan Proses Bisnis Pemerintah Digital Lintas Unit dan Instansi',
    domainId: 'aspek-6',
    domainName: 'Keterpaduan Layanan Digital',
    aspectName: 'Proses Bisnis Terpadu',
    weight: 4,
    description: 'Menilai penyusunan dan penyelarasan peta proses bisnis instansi yang terintegrasi lintas sektor dan diselaraskan dengan Proses Bisnis Nasional.',
    criteria: {
      1: 'Proses bisnis masih berjalan manual di masing-masing seksi tanpa peta alur formal.',
      2: 'Peta probis telah dibuat di beberapa unit namun belum terhubung antar-perangkat daerah.',
      3: 'Telah ditetapkan Peraturan Kepala Instansi tentang Peta Proses Bisnis Instansi yang mencakup seluruh urusan pemerintahan.',
      4: 'Peta probis telah terintegrasi lintas unit kerja dan diselaraskan dengan Arsitektur Probis SPBE Nasional (tidak ada tumpang tindih alur).',
      5: 'Proses bisnis telah dievaluasi berkala, disederhanakan (business process re-engineering), dan adaptif memangkas birokrasi berbelit.'
    },
    evidenceByLevel: {
      1: `Dokumen Bukti Level 1 (Rintisan):
1. Uraian tugas fungsi staf dalam format teks tanpa diagram alur proses bisnis.`,
      2: `Dokumen Bukti Level 2 (Terkelola):
1. Diagram flowchart SOP teknis pada beberapa bidang terpisah.`,
      3: `Dokumen Bukti Level 3 (Terstandarisasi):
1. Peraturan Kepala Daerah / Pimpinan Instansi tentang Peta Proses Bisnis Instansi.
2. Lampiran Diagram Peta Proses Bisnis Level 0, Level 1, dan Level 2 (Core, Management, Support).
3. Berita acara penelaahan probis bersama Bagian Organisasi / Tata Laksana.`,
      4: `Dokumen Bukti Level 4 (Terpadu):
1. Bukti penyelarasan Peta Probis Instansi dengan Peta Probis Tematik Nasional di SIA-SPBE.
2. Matriks integrasi alur kerja lintas OPD (misal: keterpaduan probis perizinan DPMPTSP dengan rekomendasi teknis PUPR dan Dinkes).`,
      5: `Dokumen Bukti Level 5 (Optimum):
1. Laporan Hasil Reviu dan Penyederhanaan Proses Bisnis (Business Process Reengineering).
2. Bukti pemangkasan tahapan birokrasi dan percepatan durasi siklus layanan publik.`
    },
    evidenceNarration: `Data dukung meliputi Peraturan Peta Proses Bisnis Instansi, Diagram Probis Level 0-2 lengkap, Matriks Penyelarasan Probis Lintas OPD, dan Laporan Re-engineering.`,
    evidenceChecklist: [
      { id: 'c15-1', label: 'Peraturan Pimpinan Instansi tentang Peta Proses Bisnis Instansi', required: true, minLevel: 3 },
      { id: 'c15-2', label: 'Lampiran Diagram Peta Probis Level 0 s.d. Level 2 Lengkap', required: true, minLevel: 3 },
      { id: 'c15-3', label: 'Matriks Integrasi Proses Bisnis Lintas Perangkat Daerah', required: true, minLevel: 4 },
      { id: 'c15-4', label: 'Laporan Reviu dan Penyederhanaan Alur Birokrasi Probis', required: false, minLevel: 5 }
    ],
    tips: 'Diagram alur proses bisnis harus menggunakan notasi standar (BPMN) dan menunjukkan eliminasi bottleneck.'
  },
  {
    id: 'ind-16',
    number: 16,
    code: 'IND-16',
    name: 'Integrasi Aplikasi dan Sistem Layanan',
    domainId: 'aspek-6',
    domainName: 'Keterpaduan Layanan Digital',
    aspectName: 'Integrasi Sistem Layanan',
    weight: 4,
    description: 'Menilai keterpaduan aplikasi administrasi pemerintahan (persuratan SRIKANDI, kepegawaian SIASN, keuangan SIPD) dan integrasi layanan publik.',
    criteria: {
      1: 'Aplikasi berjalan sendiri-sendiri tanpa pertukaran data otomatis.',
      2: 'Integrasi aplikasi baru dilakukan parsial secara manual melalui ekspor impor data Excel.',
      3: 'Telah terintegrasi aplikasi administrasi pemerintahan internal (e-Office/SRIKANDI, SIMPEG, e-Kinerja, Penganggaran).',
      4: 'Aplikasi internal telah terintegrasi secara otomatis via API dengan sistem aplikasi umum nasional (SIPD Kemendagri, SIASN BKN, SRIKANDI ANRI).',
      5: 'Integrasi aplikasi menyeluruh secara end-to-end dengan pemantauan otomatis performa sistem dan audit trail tanpa jeda manual.'
    },
    evidenceByLevel: {
      1: `Dokumen Bukti Level 1 (Rintisan):
1. Pengguna harus menginput ulang data yang sama di berbagai aplikasi yang berbeda.`,
      2: `Dokumen Bukti Level 2 (Terkelola):
1. Bukti script import database periodik secara semi-manual antar dua sistem.`,
      3: `Dokumen Bukti Level 3 (Terstandarisasi):
1. Bukti integrasi sistem persuratan dinas dengan tanda tangan elektronik (TTE).
2. Integrasi data presensi pegawai langsung ke perhitungan tunjangan kinerja di aplikasi e-Kinerja instansi.
3. SOP integrasi sistem informasi di lingkungan pemerintah daerah.`,
      4: `Dokumen Bukti Level 4 (Terpadu):
1. Log integrasi web service antara SIMPEG lokal dengan SIASN BKN Nasional.
2. Bukti sinkronisasi data perencanaan penganggaran ke SIPD-RI Kemendagri.
3. Pemanfaatan aplikasi SRIKANDI Nasional untuk seluruh naskah dinas keluar-masuk lintas instansi.`,
      5: `Dokumen Bukti Level 5 (Optimum):
1. Laporan pemantauan utilisasi integrasi sistem secara real-time dan dashboard status sinkronisasi.
2. Zero data entry duplication pada seluruh rantai layanan administrasi pemerintahan.`
    },
    evidenceNarration: `Data dukung meliputi Bukti Integrasi Internal Instansi, Log API dengan Sistem Nasional (SIASN, SIPD, SRIKANDI), dan Laporan Efisiensi Integrasi.`,
    evidenceChecklist: [
      { id: 'c16-1', label: 'Tangkapan layar keterpaduan aplikasi administrasi pemerintahan', required: true, minLevel: 3 },
      { id: 'c16-2', label: 'Log integrasi API dengan sistem aplikasi umum nasional (SIPD/SIASN/SRIKANDI)', required: true, minLevel: 4 },
      { id: 'c16-3', label: 'SOP tata kelola integrasi data antar-aplikasi operasional', required: true, minLevel: 3 },
      { id: 'c16-4', label: 'Laporan monitoring kinerja integrasi sistem dan efisiensi waktu', required: false, minLevel: 5 }
    ],
    tips: 'Tunjukkan bukti log transaksi sinkronisasi dua arah yang aktif dan berjalan tanpa error.'
  },
  {
    id: 'ind-17',
    number: 17,
    code: 'IND-17',
    name: 'Portal Layanan Digital Pemerintah',
    domainId: 'aspek-6',
    domainName: 'Keterpaduan Layanan Digital',
    aspectName: 'Portal Terpadu / Super-App',
    weight: 4,
    description: 'Menilai penyediaan satu pintu akses layanan digital terpadu (Portal Tunggal / Super-App / Mal Pelayanan Publik Digital) bagi ASN dan masyarakat.',
    criteria: {
      1: 'Layanan digital masih tersebar di puluhan website dan aplikasi terpisah yang membingungkan masyarakat.',
      2: 'Terdapat website induk yang hanya memuat kumpulan tautan (link repository) tanpa integrasi login.',
      3: 'Telah tersedia Portal Layanan Publik Terpadu / Super-App dengan Single Sign-On (SSO) akun tunggal.',
      4: 'Portal layanan telah terintegrasi dengan Portal Pelayanan Publik Nasional (INA Digital) dan autentikasi Identitas Kependudukan Digital (IKD).',
      5: 'Portal digital adaptif berbasis kecerdasan buatan, aksesibilitas disabilitas (WCAG compliant), dan pelacakan proses layanan real-time.'
    },
    evidenceByLevel: {
      1: `Dokumen Bukti Level 1 (Rintisan):
1. Masing-masing dinas menyebarkan aplikasi masing-masing di PlayStore tanpa portal payung.`,
      2: `Dokumen Bukti Level 2 (Terkelola):
1. Portal website pemerintah daerah yang hanya berisi banner gambar tautan ke web OPD lain.`,
      3: `Dokumen Bukti Level 3 (Terstandarisasi):
1. URL resmi dan tangkapan layar Portal Layanan Terpadu (Super-App / MPP Digital Instansi).
2. Penerapan Single Sign-On (SSO) bagi masyarakat sehingga satu akun dapat mengakses seluruh layanan.
3. Regulasi Kepala Daerah tentang Penyelenggaraan Portal Satu Pintu Layanan Digital.`,
      4: `Dokumen Bukti Level 4 (Terpadu):
1. Bukti integrasi portal instansi dengan INA Digital / Portal Nasional Kementerian PANRB.
2. Integrasi sistem login dengan Identitas Kependudukan Digital (IKD Ditjen Dukcapil).
3. Integrasi pembayaran non-tunai melalui payment gateway terpadu (QRIS/VA).`,
      5: `Dokumen Bukti Level 5 (Optimum):
1. Fitur pelacakan status layanan (tracking proses) real-time via WhatsApp/SMS notification.
2. Pemenuhan standar aksesibilitas bagi disabilitas (fitur pembaca suara, kontras tinggi).
3. Laporan evaluasi peningkatan jumlah pengguna aktif harian (Daily Active Users) portal.`
    },
    evidenceNarration: `Data dukung meliputi URL & Tangkapan Layar Portal Terpadu/Super-App, Regulasi Penyelenggaraan Portal, Bukti Integrasi IKD/INA Digital, dan Fitur Tracking Real-Time.`,
    evidenceChecklist: [
      { id: 'c17-1', label: 'URL resmi dan tangkapan layar Portal Layanan Digital Terpadu', required: true, minLevel: 3 },
      { id: 'c17-2', label: 'Regulasi Kepala Daerah tentang Penyelenggaraan Portal Terpadu', required: true, minLevel: 3 },
      { id: 'c17-3', label: 'Bukti integrasi Single Sign-On dengan IKD / Portal INA Digital', required: true, minLevel: 4 },
      { id: 'c17-4', label: 'Bukti pemenuhan standar aksesibilitas disabilitas dan tracking layanan', required: false, minLevel: 5 }
    ],
    tips: 'Hindari portal yang hanya sekadar link landing page. Harus ada sistem autentikasi tunggal (SSO) yang mengonsolidasikan layanan.'
  },
  {
    id: 'ind-18',
    number: 18,
    code: 'IND-18',
    name: 'Interoperabilitas Data dan Layanan',
    domainId: 'aspek-6',
    domainName: 'Keterpaduan Layanan Digital',
    aspectName: 'SPLP / Interoperabilitas API',
    weight: 3,
    description: 'Menilai pemanfaatan Sistem Penghubung Layanan Pemerintah (SPLP) atau API Gateway resmi untuk pertukaran data antar-sistem secara otomatis.',
    criteria: {
      1: 'Pertukaran data antar-sistem masih manual (ekspor file Excel/flashdisk).',
      2: 'Pertukaran data menggunakan API point-to-point ad-hoc tanpa katalog dan gateway terstandar.',
      3: 'Telah mengoperasikan Sistem Penghubung Layanan Pemerintah (SPLP) / API Gateway instansi dengan Katalog API resmi.',
      4: 'SPLP instansi telah terhubung secara operasional dengan SPLP Nasional Kementerian Komdigi untuk pertukaran data lintas K/L/D.',
      5: 'Pertukaran data melalui SPLP berjalan otomatis dengan audit trail log lengkap, pemantauan trafik 24/7, dan enkripsi payload.'
    },
    evidenceByLevel: {
      1: `Dokumen Bukti Level 1 (Rintisan):
1. Berkas rekap data dikirimkan melalui lampiran pesan email atau flashdisk.`,
      2: `Dokumen Bukti Level 2 (Terkelola):
1. Dokumentasi script API point-to-point antara dua aplikasi tanpa gateway bersama.`,
      3: `Dokumen Bukti Level 3 (Terstandarisasi):
1. Tangkapan layar antarmuka dashboard Sistem Penghubung Layanan Pemerintah (SPLP) Instansi.
2. Dokumen Buku Katalog Layanan Berbagi Pakai (API Registry / Swagger Documentation).
3. SOP Permohonan dan Integrasi Layanan Berbagi Pakai melalui SPLP.`,
      4: `Dokumen Bukti Level 4 (Terpadu):
1. Surat persetujuan dan Berita Acara Interkoneksi dengan SPLP Nasional Kementerian Komdigi.
2. Contoh transaksi data antar-instansi melalui SPLP (misal: verifikasi NIK Dukcapil via SPLP).
3. Perjanjian Kerja Sama (PKS) Berbagi Pakai Data Elektronik dengan instansi mitra.`,
      5: `Dokumen Bukti Level 5 (Optimum):
1. Log audit trail transaksi data SPLP lengkap (Timestamp, IP, Endpoint, Status Code 200, Latensi ms).
2. Laporan pemantauan trafik dan kepatuhan SLA ketersediaan API (> 99.8%).
3. Evaluasi berkala efisiensi waktu pemrosesan layanan publik pasca penerapan integrasi SPLP.`
    },
    evidenceNarration: `Data dukung meliputi Dashboard SPLP Instansi, Buku Katalog Layanan API, Berita Acara Interkoneksi SPLP Nasional, PKS Berbagi Pakai Data, dan Log Audit Trail.`,
    evidenceChecklist: [
      { id: 'c18-1', label: 'Tangkapan layar dashboard Sistem Penghubung Layanan (SPLP)', required: true, minLevel: 3 },
      { id: 'c18-2', label: 'Dokumen Buku Katalog Layanan Berbagi Pakai (API Registry)', required: true, minLevel: 3 },
      { id: 'c18-3', label: 'Surat Penetapan / Keterhubungan dengan SPLP Nasional Komdigi', required: true, minLevel: 4 },
      { id: 'c18-4', label: 'Log Audit Trail Transaksi dan Laporan Kinerja SLA Interoperabilitas', required: true, minLevel: 5 }
    ],
    tips: 'Gunakan template dokumen SOP, PKS, Katalog API, dan Log Audit Trail yang telah disediakan di aplikasi.'
  },

  // ================= ASPEK 7: KEPUASAN PENGGUNA LAYANAN DIGITAL PEMERINTAH (BOBOT 25%) =================
  {
    id: 'ind-19',
    number: 19,
    code: 'IND-19',
    name: 'Fasilitas Dukungan Pengguna Layanan Digital Pemerintah',
    domainId: 'aspek-7',
    domainName: 'Kepuasan Pengguna Layanan',
    aspectName: 'Helpdesk & Aksesibilitas',
    weight: 10,
    description: 'Menilai penyediaan kanal pusat bantuan pengguna (Contact Center, Live Chat AI, Panduan FAQ, Aksesibilitas Disabilitas) yang responsif menyelesaikan kendala pengguna.',
    criteria: {
      1: 'Belum ada kanal bantuan resmi bagi pengguna layanan digital.',
      2: 'Kanal bantuan hanya berupa nomor telepon kantor yang hanya aktif pada jam kerja tertentu.',
      3: 'Telah tersedia Helpdesk Layanan Digital multi-kanal (WhatsApp bot, live chat, ticketing system) dengan SOP penanganan keluhan resmi.',
      4: 'Fasilitas dukungan terintegrasi dengan asisten cerdas berbasis AI yang beroperasi 24/7 dan memenuhi standar aksesibilitas inklusif disabilitas.',
      5: 'Kinerja fasilitas dukungan pengguna dievaluasi berkala dengan Response Time < 15 menit dan First Contact Resolution Rate > 90%.'
    },
    evidenceByLevel: {
      1: `Dokumen Bukti Level 1 (Rintisan):
1. Tidak ada kontak bantuan pengguna yang tercantum di aplikasi layanan.`,
      2: `Dokumen Bukti Level 2 (Terkelola):
1. Nomor WhatsApp staf operator yang dicantumkan sebagai narahubung darurat.`,
      3: `Dokumen Bukti Level 3 (Terstandarisasi):
1. Tangkapan layar Helpdesk / Service Desk Layanan Digital Resmi Instansi.
2. SOP Penanganan Keluhan Pengguna Layanan Digital dan Eskalasi Tiket Gangguan.
3. Ketersediaan panduan pengguna (FAQ, Video Tutorial, Manual Book) yang mudah diakses di portal.`,
      4: `Dokumen Bukti Level 4 (Terpadu):
1. Pemanfaatan Asisten Virtual Cerdas / Chatbot AI yang dapat merespons pertanyaan pengguna secara otomatis 24/7.
2. Bukti pemenuhan fitur aksesibilitas bagi penyandang disabilitas (Voice Screen Reader, Text-to-Speech, Pilihan Kontras).
3. Laporan rekapitulasi penanganan tiket bantuan dengan pencapaian SLA waktu respon.`,
      5: `Dokumen Bukti Level 5 (Optimum):
1. Laporan Evaluasi Kinerja Helpdesk berkala dengan First Contact Resolution (FCR) > 90%.
2. Analisis sentimen percakapan pengguna berbasis analitik AI untuk pencegahan kendala berulang.
3. Penghargaan atau pengakuan pelayanan prima dukungan pengguna dari lembaga berwenang.`
    },
    evidenceNarration: `Data dukung meliputi Tangkapan Layar Helpdesk Multi-Kanal, SOP Penanganan Keluhan, Chatbot AI Asisten 24/7, Fitur Aksesibilitas Disabilitas, dan Laporan Kinerja SLA Helpdesk.`,
    evidenceChecklist: [
      { id: 'c19-1', label: 'Tangkapan layar kanal Helpdesk / Contact Center resmi layanan digital', required: true, minLevel: 3 },
      { id: 'c19-2', label: 'SOP Penanganan Bantuan Pengguna dan Standar Waktu Respon', required: true, minLevel: 3 },
      { id: 'c19-3', label: 'Bukti implementasi Chatbot AI 24/7 dan Aksesibilitas Disabilitas', required: true, minLevel: 4 },
      { id: 'c19-4', label: 'Laporan Kinerja Helpdesk (First Contact Resolution & Waktu Penyelesaian)', required: false, minLevel: 5 }
    ],
    tips: 'PermenPANRB 8/2026 memberikan bobot 10% penuh pada indikator ini. Pastikan ada kanal chatbot interaktif dan fitur disabilitas.'
  },
  {
    id: 'ind-20',
    number: 20,
    code: 'IND-20',
    name: 'Tingkat Pengelolaan Kepuasan Pengguna Layanan Digital Pemerintah',
    domainId: 'aspek-7',
    domainName: 'Kepuasan Pengguna Layanan',
    aspectName: 'Survei Kepuasan Elektronik (e-SKM)',
    weight: 15,
    description: 'Indikator berbobot tertinggi (15%): Menilai pengukuran kepuasan pengguna secara elektronik (e-SKM) otomatis pasca layanan, transparansi publikasi indeks kepuasan, dan tindak lanjut perbaikan.',
    criteria: {
      1: 'Belum dilakukan pengukuran kepuasan pengguna layanan digital.',
      2: 'Survei kepuasan dilakukan manual setahun sekali secara parsial di loket kantor.',
      3: 'Telah diterapkan instrumen Survei Kepuasan Masyarakat Elektronik (e-SKM) otomatis pasca transaksi layanan digital sesuai PermenPANRB.',
      4: 'Hasil Indeks Kepuasan Pengguna Layanan Digital dipublikasikan secara real-time dan terbuka kepada masyarakat di portal resmi.',
      5: 'Hasil kepuasan dianalisis berkala, seluruh masukan/kritik ditindaklanjuti dengan rencana perbaikan nyata (Continuous Service Improvement), dan meraih predikat "Sangat Memuaskan".'
    },
    evidenceByLevel: {
      1: `Dokumen Bukti Level 1 (Rintisan):
1. Belum ada instrumen survei kepuasan digital.`,
      2: `Dokumen Bukti Level 2 (Terkelola):
1. Kuesioner kepuasan format Google Form yang disebarkan tidak terstruktur.`,
      3: `Dokumen Bukti Level 3 (Terstandarisasi):
1. Fitur kuesioner e-SKM otomatis yang muncul pada layar pengguna tepat setelah menyelesaikan layanan digital.
2. Peraturan / SOP Pelaksanaan Survei Kepuasan Masyarakat Berbasis Elektronik sesuai pedoman PermenPANRB.
3. Dokumen Laporan Hasil Survei Kepuasan Masyarakat (SKM) Elektronik Tahunan.`,
      4: `Dokumen Bukti Level 4 (Terpadu):
1. Tangkapan layar widget nilai Indeks Kepuasan Masyarakat (IKM) yang tampil secara real-time dan transparan di beranda portal layanan publik.
2. Integrasi sistem survei kepuasan dengan platform nasional (SIPN / SP4N-LAPOR!).
3. Rekapitulasi nilai kepuasan pengguna mencapai kategori "Sangat Baik" (> 3.50 dari skala 4.00 atau > 88.00).`,
      5: `Dokumen Bukti Level 5 (Optimum):
1. Dokumen Rencana Aksi Tindak Lanjut Perbaikan Layanan berdasarkan ulasan dan komplain masyarakat.
2. Laporan Pembuktian Perbaikan Fitur / Kebijakan Layanan pasca menerima masukan pengguna.
3. Tren kenaikan nilai kepuasan pengguna secara konsisten dalam 3 tahun evaluasi berturut-turut.`
    },
    evidenceNarration: `Data dukung meliputi Tangkapan Layar Fitur e-SKM Otomatis, Laporan Resmi Hasil Survei Kepuasan Masyarakat, Tampilan Widget Nilai Kepuasan Real-Time di Portal, dan Dokumen Tindak Lanjut Perbaikan Layanan.`,
    evidenceChecklist: [
      { id: 'c20-1', label: 'Tangkapan layar fitur modul e-SKM otomatis pasca transaksi layanan', required: true, minLevel: 3 },
      { id: 'c20-2', label: 'Dokumen Laporan Resmi Hasil Survei Kepuasan Pengguna Digital', required: true, minLevel: 3 },
      { id: 'c20-3', label: 'Publikasi terbuka nilai Indeks Kepuasan Masyarakat (IKM) di portal', required: true, minLevel: 4 },
      { id: 'c20-4', label: 'Dokumen Matriks Tindak Lanjut dan Realisasi Perbaikan Layanan Berkelanjutan', required: false, minLevel: 5 }
    ],
    tips: 'Indikator ini berbobot 15% (terbesar dalam PermenPANRB 8/2026). Pastikan ada bukti widget skor kepuasan yang tampil publik dan laporan tindak lanjut perbaikan fitur.'
  }
];

export const SUMMARY_STATS = {
  totalIndicators: 20,
  totalDomains: 7,
  totalWeight: 100,
  targetMaturityDefault: 3.5
};
