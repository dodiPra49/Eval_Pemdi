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
    evidenceByLevel: {
      1: `Dokumen Bukti untuk Level 1 (Rintisan):
1. Draft awal atau konsep naskah akademis / telaahan staf mengenai urgensi penyusunan Arsitektur SPBE Instansi.
2. Undangan, daftar hadir, dan notula rapat inisiasi pembentukan tim penyusun arsitektur.
3. Dokumen rancangan awal arsitektur yang belum disahkan pimpinan.`,
      2: `Dokumen Bukti untuk Level 2 (Terkelola):
1. Surat Edaran (SE) atau Instruksi Pimpinan Instansi mengenai penyusunan arsitektur TIK/SPBE di sebagian unit kerja.
2. Dokumen arsitektur parsial yang baru mencakup 1-3 domain (misal: hanya domain aplikasi dan infrastruktur).
3. Laporan kemajuan penyusunan arsitektur tingkat sektoral / perangkat daerah percontohan.`,
      3: `Dokumen Bukti untuk Level 3 (Terstandarisasi):
1. Salinan resmi Peraturan Kepala Daerah (Perbup/Perwal/Pergub) atau Peraturan Pimpinan Instansi yang telah diundangkan dan memuat ketentuan lengkap Arsitektur SPBE.
2. Lampiran utuh dokumen Arsitektur SPBE yang mencakup 6 Domain (Proses Bisnis, Data/Informasi, Aplikasi, Infrastruktur, Keamanan Informasi, dan Layanan).
3. Berita acara sosialisasi regulasi arsitektur ke seluruh unit kerja / OPD di lingkungan instansi.`,
      4: `Dokumen Bukti untuk Level 4 (Terpadu / Terintegrasi):
1. Bukti integrasi dan penyelarasan Arsitektur SPBE Instansi dengan Sistem Informasi Arsitektur (SIA) SPBE Nasional.
2. Tangkapan layar dashboard SIA-SPBE Nasional yang menunjukkan seluruh domain telah terpetakan dan berstatus tervalidasi.
3. Rekomendasi/keterangan dari Kementerian PANRB atau Tim Koordinasi SPBE Nasional mengenai keselarasan arsitektur instansi.`,
      5: `Dokumen Bukti untuk Level 5 (Optimum / Berkelanjutan):
1. Laporan Resmi Hasil Evaluasi dan Reviu Berkala Kebijakan Arsitektur SPBE (minimal 1 kali dalam 2 tahun).
2. Bukti perubahan/adendum kebijakan arsitektur yang mengakomodir inovasi teknologi terkini (seperti AI, interoperabilitas data nasional).
3. Matriks tindak lanjut hasil evaluasi dan rekomendasi perbaikan berkelanjutan yang disahkan oleh Kepala Instansi.`
    },
    evidenceNarration: `Untuk memenuhi evaluasi indikator ini pada tingkat kematangan maksimal (Level 3-5), instansi wajib menyajikan salinan Peraturan Resmi, lampiran 6 domain, integrasi SIA-SPBE Nasional, dan laporan reviu berkala.`,
    evidenceChecklist: [
      { id: 'c1-1', label: 'Salinan Peraturan Pimpinan Instansi (Perbup/Perwal/Pergub/Permen) tentang Arsitektur SPBE', required: true, minLevel: 3 },
      { id: 'c1-2', label: 'Lampiran 6 Domain Arsitektur SPBE lengkap dan tervalidasi', required: true, minLevel: 3 },
      { id: 'c1-3', label: 'Tangkapan layar akun instansi pada aplikasi SIA-SPBE Nasional', required: true, minLevel: 4 },
      { id: 'c1-4', label: 'Daftar hadir dan notula rapat penyusunan/reviu kebijakan', required: false, minLevel: 1 },
      { id: 'c1-5', label: 'Dokumen evaluasi berkala dan perbaikan kebijakan arsitektur', required: false, minLevel: 5 }
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
    evidenceByLevel: {
      1: `Dokumen Bukti untuk Level 1 (Rintisan):
1. Dokumen draft kasar roadmap/peta jalan TIK yang belum terstruktur sesuai format SPBE.
2. Notula rapat awal identifikasi inisiatif digital antar-bidang.
3. Kerangka acuan kerja (KAK) penyusunan peta rencana SPBE.`,
      2: `Dokumen Bukti untuk Level 2 (Terkelola):
1. Dokumen Peta Rencana TIK/SPBE yang disusun oleh Dinas Kominfo/Unit TIK namun baru berupa draft final tanpa pengesahan kepala daerah.
2. Rencana program digital sektoral yang masih berjalan sendiri-sendiri di masing-masing OPD.`,
      3: `Dokumen Bukti untuk Level 3 (Terstandarisasi):
1. Peraturan Kepala Daerah / Surat Keputusan Pimpinan Instansi tentang Penetapan Peta Rencana SPBE 5 Tahunan.
2. Matriks Rencana Aksi 5 Tahunan lengkap (Nama Inisiatif, Target Capaian, Estimasi Anggaran, Unit Penanggung Jawab).
3. Bukti keterpaduan dan penyelarasan dengan dokumen RPJMD dan Renstra Instansi.`,
      4: `Dokumen Bukti untuk Level 4 (Terpadu / Terintegrasi):
1. Bukti penjabaran Peta Rencana SPBE ke dalam Rencana Kerja (Renja) tahunan seluruh Perangkat Daerah.
2. Dokumen DPA / RKA yang menunjukkan alokasi anggaran riil pada sub-kegiatan implementasi SPBE di APBD/APBN.
3. Sistem aplikasi e-Planning / SIPD yang memuat tagging program prioritas SPBE.`,
      5: `Dokumen Bukti untuk Level 5 (Optimum / Berkelanjutan):
1. Laporan Monitoring dan Evaluasi Tahunan pelaksanaan Peta Rencana SPBE.
2. Berita acara penyesuaian/revisi matriks rencana aksi berdasarkan hasil audit realisasi anggaran dan dinamika teknologi.
3. Rekomendasi pimpinan terhadap optimalisasi program digital tahun berjalan.`
    },
    evidenceNarration: `Dokumen bukti mencakup Keputusan/Peraturan Penetapan Peta Rencana 5 Tahunan, Matriks Action Plan, bukti alokasi anggaran di DPA/RKA, dan laporan evaluasi tahunan.`,
    evidenceChecklist: [
      { id: 'c2-1', label: 'Dokumen Regulasi Peta Rencana SPBE 5 Tahunan bertanda tangan basah / TTE resmi', required: true, minLevel: 3 },
      { id: 'c2-2', label: 'Matriks Action Plan tahunan beserta indikator capaian', required: true, minLevel: 3 },
      { id: 'c2-3', label: 'Bukti sinkronisasi program SPBE dalam DPA/RKA SKPD', required: false, minLevel: 4 },
      { id: 'c2-4', label: 'Laporan Evaluasi Tahunan pelaksanaan Peta Rencana SPBE', required: false, minLevel: 5 }
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
    evidenceByLevel: {
      1: `Dokumen Bukti untuk Level 1 (Rintisan):
1. Nota dinas atau konsep awal pengusulan regulasi Satu Data.
2. Bukti pengumpulan data sektoral secara manual via spreadsheet antar-dinas.`,
      2: `Dokumen Bukti untuk Level 2 (Terkelola):
1. Surat Edaran Sekda mengenai penyampaian data sektoral tahunan.
2. Pedoman pengelolaan data yang berlaku sepihak di Bappeda atau Diskominfo tanpa SK penunjukan Walidata resmi.`,
      3: `Dokumen Bukti untuk Level 3 (Terstandarisasi):
1. Salinan Peraturan Kepala Daerah (Perbup/Perwal/Pergub) tentang Penyelenggaraan Satu Data Indonesia di Tingkat Daerah.
2. SK Kepala Daerah tentang Penunjukan Forum Satu Data, Pembina Data (BPS/Bappeda), Walidata (Diskominfo), dan Produsen Data (Seluruh OPD).
3. Dokumen Pedoman Standar Data, Metadata Statistik/Spasial, dan Kode Referensi.`,
      4: `Dokumen Bukti untuk Level 4 (Terpadu / Terintegrasi):
1. Bukti interkoneksi Portal Satu Data Daerah dengan Portal Satu Data Indonesia Nasional (data.go.id via API).
2. Berita Acara Rekomendasi Statistik dari BPS untuk dataset prioritas daerah.
3. Bukti publikasi berkala Daftar Data dan Rencana Aksi Data tahunan di portal resmi.`,
      5: `Dokumen Bukti untuk Level 5 (Optimum / Berkelanjutan):
1. Laporan Hasil Evaluasi Kualitas Data (Data Quality Assessment / Data Cleansing) berkala.
2. Bukti pemanfaatan dataset Satu Data untuk perumusan kebijakan pimpinan (evidence-based policy dashboard).
3. Laporan audit kepatuhan metadata dan tindak lanjut perbaikan data sektoral.`
    },
    evidenceNarration: `Data dukung pembuktian meliputi Perbup/Perwal Satu Data, SK Walidata & Produsen Data, pedoman standar data/metadata, dan bukti integrasi data.go.id.`,
    evidenceChecklist: [
      { id: 'c3-1', label: 'Peraturan Kepala Daerah mengenai Satu Data / Manajemen Data', required: true, minLevel: 3 },
      { id: 'c3-2', label: 'SK Penunjukan Walidata dan Produsen Data', required: true, minLevel: 3 },
      { id: 'c3-3', label: 'SOP Manajemen Data dan Penyusunan Metadata', required: false, minLevel: 3 },
      { id: 'c3-4', label: 'Bukti integrasi dengan Portal SDI Nasional', required: false, minLevel: 4 }
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
    evidenceByLevel: {
      1: `Dokumen Bukti untuk Level 1 (Rintisan):
1. Himbauan tertulis atau surat edaran sederhana terkait kerahasiaan password email dinas.
2. Catatan insiden peretasan/kebocoran website tanpa adanya SOP penanganan formal.`,
      2: `Dokumen Bukti untuk Level 2 (Terkelola):
1. Draft SOP Keamanan Informasi yang dibuat oleh pengelola server/TIK.
2. Instruksi internal Diskominfo mengenai backup dan pembaruan antivirus di lingkungan ruang server.`,
      3: `Dokumen Bukti untuk Level 3 (Terstandarisasi):
1. Peraturan Kepala Daerah / Keputusan Kepala Instansi tentang Kebijakan Sistem Manajemen Keamanan Informasi (SMKI).
2. Surat Keputusan (SK) Tim Tanggap Insiden Siber (Computer Security Incident Response Team / CSIRT) Instansi.
3. SOP Manajemen Hak Akses, SOP Pengelolaan Sandi, dan SOP Penanganan Insiden Keamanan Siber Resmi.`,
      4: `Dokumen Bukti untuk Level 4 (Terpadu / Terintegrasi):
1. Surat Tanda Registrasi (STR) CSIRT dari Badan Siber dan Sandi Negara (BSSN).
2. Dokumen Hasil Evaluasi Indeks Keamanan Informasi (Indeks KAMI) BSSN dengan status Kesiapan Baik.
3. Bukti interkoneksi kanal pelaporan insiden dengan Pusat Operasi Keamanan Siber Nasional (Gov-CSIRT).`,
      5: `Dokumen Bukti untuk Level 5 (Optimum / Berkelanjutan):
1. Laporan Pelaksanaan Simulasi Tanggap Krisis Siber (Cyber Drill / Cyber Range Exercise) tahunan.
2. Laporan Audit Keamanan Berkala dan Sertifikat ISO/IEC 27001 yang masih berlaku aktif.
3. Laporan evaluasi berkala dan pembaruan kebijakan keamanan informasi pasca penanganan insiden siber.`
    },
    evidenceNarration: `Bukti wajib: Peraturan Kebijakan SMKI, SK Tim CSIRT terdaftar BSSN, SOP Penanganan Insiden Siber, Hasil Indeks KAMI, dan laporan simulasi krisis siber.`,
    evidenceChecklist: [
      { id: 'c4-1', label: 'Peraturan Pimpinan tentang Kebijakan Keamanan Informasi SPBE', required: true, minLevel: 3 },
      { id: 'c4-2', label: 'SK Pembentukan Tim CSIRT Instansi', required: true, minLevel: 3 },
      { id: 'c4-3', label: 'SOP Penanganan Insiden Siber & Pelaporan', required: true, minLevel: 3 },
      { id: 'c4-4', label: 'Surat Tanda Registrasi BSSN untuk CSIRT', required: false, minLevel: 4 }
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
    evidenceByLevel: {
      1: `Dokumen Bukti untuk Level 1 (Rintisan):
1. Daftar inventaris server fisik yang tersebar di ruang kerja masing-masing perangkat daerah.
2. Bukti pembelian/sewa hosting web secara mandiri oleh dinas-dinas terpisah.`,
      2: `Dokumen Bukti untuk Level 2 (Terkelola):
1. Berita acara penarikan/konsolidasi server OPD ke ruang server bersama Diskominfo.
2. Dokumentasi foto ruang server terpusat dan catatan pemeliharaan perangkat keras.`,
      3: `Dokumen Bukti untuk Level 3 (Terstandarisasi):
1. Dokumen Topologi Data Center Instansi dan SOP Pengoperasian Pusat Data Terpadu.
2. Bukti pemenuhan standar fasilitas ruang server (UPS, PAC pendingin, Fire Suppression System, CCTV, Access Control).
3. Jadwal dan log pelaksanaan backup data rutin berkala secara offsite.`,
      4: `Dokumen Bukti untuk Level 4 (Terpadu / Terintegrasi):
1. Berita Acara / Surat Permohonan dan Pemanfaatan Layanan Pusat Data Nasional (PDN) dari Kementerian Komdigi.
2. Tangkapan layar dashboard alokasi resource komputasi di cloud PDN (vCPU, RAM, Storage).
3. Daftar aplikasi strategis instansi yang telah live beroperasi di infrastruktur PDN.`,
      5: `Dokumen Bukti untuk Level 5 (Optimum / Berkelanjutan):
1. Dokumen Disaster Recovery Plan (DRP) dan Business Continuity Plan (BCP) yang teruji.
2. Laporan Hasil Simulasi Uji Alih Beban (Failover Test) ke Disaster Recovery Center (DRC) berkala.
3. Laporan efisiensi anggaran belanja server dan listrik pasca konsolidasi menyeluruh ke PDN.`
    },
    evidenceNarration: `Dokumen bukti pendukung: Topologi Pusat Data, Berita Acara Pemanfaatan PDN Komdigi, SOP Backup Data, Dokumen DRC & Hasil Simulasi Failover.`,
    evidenceChecklist: [
      { id: 'c5-1', label: 'Dokumen Topologi Jaringan & Pusat Data Terkini', required: true, minLevel: 3 },
      { id: 'c5-2', label: 'Surat/BA Pengajuan atau Pemanfaatan Layanan PDN', required: true, minLevel: 4 },
      { id: 'c5-3', label: 'SOP Pemeliharaan Server dan Jadwal Backup Data Rutin', required: true, minLevel: 3 },
      { id: 'c5-4', label: 'Dokumen Disaster Recovery Plan (DRP) & Hasil Uji Coba DRC', required: false, minLevel: 5 }
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
    evidenceByLevel: {
      1: `Dokumen Bukti untuk Level 1 (Rintisan):
1. Tagihan rekening langganan internet terpisah dari berbagai ISP di masing-masing dinas.
2. Tidak ada keterhubungan jaringan lokal antar gedung kantor dinas.`,
      2: `Dokumen Bukti untuk Level 2 (Terkelola):
1. Peta kabel jaringan LAN di lingkungan kantor bupati/walikota/kantor gubernur.
2. Sambungan wireless point-to-point sederhana ke beberapa dinas terdekat.`,
      3: `Dokumen Bukti untuk Level 3 (Terstandarisasi):
1. Dokumen Peta Topologi Wide Area Network (WAN) Jaringan Intra Pemerintah Daerah.
2. Surat Perjanjian Kontrak Pengadaan Bandwidth Internet dan Metro-E / Fiber Optic Terpusat Satu Pintu melalui Diskominfo.
3. Berita Acara instalasi jaringan tertutup (VPN IP / FO) yang mencakup >80% kantor dinas dan kecamatan.`,
      4: `Dokumen Bukti untuk Level 4 (Terpadu / Terintegrasi):
1. Dokumen konfigurasi interkoneksi aman dengan Jaringan Intra Pemerintah Nasional (JIPN).
2. Laporan uji keamanan routing jaringan intra dan penerapan segmentasi VLAN antar-layanan.
3. Surat Keterangan keterhubungan jaringan dari Kementerian Komdigi.`,
      5: `Dokumen Bukti untuk Level 5 (Optimum / Berkelanjutan):
1. Tangkapan layar Dashboard Network Operations Center (NOC) aktif (Zabbix/Grafana/PRTG) pemantauan 24/7.
2. Laporan kepatuhan Service Level Agreement (SLA Uptime > 99.5%) dan log penanganan insiden jaringan tahunan.
3. Evaluasi berkala kapasitas bandwidth berbasis utilisasi riil (Quality of Service monitoring).`
    },
    evidenceNarration: `Data dukung evaluasi: Peta Topologi WAN/FO, Kontrak Bandwidth Satu Pintu, Dashboard NOC Monitoring Bandwidth, dan Bukti interkoneksi ke JIPN.`,
    evidenceChecklist: [
      { id: 'c6-1', label: 'Dokumen Peta Topologi WAN / Jaringan Intra Pemerintah', required: true, minLevel: 3 },
      { id: 'c6-2', label: 'Bukti kontrak bandwidth/ISP terpusat satu pintu', required: true, minLevel: 3 },
      { id: 'c6-3', label: 'Tangkapan layar Dashboard Monitoring Bandwidth/NOC', required: true, minLevel: 5 },
      { id: 'c6-4', label: 'Laporan rekapitulasi uptime dan penanganan tiket gangguan', required: false, minLevel: 5 }
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
    evidenceByLevel: {
      1: `Dokumen Bukti untuk Level 1 (Rintisan):
1. Bukti pengiriman berkas rekap data lewat email / flashdisk antar-bidang.
2. Belum ada API web service yang dibangun.`,
      2: `Dokumen Bukti untuk Level 2 (Terkelola):
1. Dokumentasi script API point-to-point antara dua aplikasi spesifik (misal: absensi ke penggajian).
2. Tidak ada sentralisasi gateway atau standar otorisasi token API bersama.`,
      3: `Dokumen Bukti untuk Level 3 (Terstandarisasi):
1. Tangkapan layar antarmuka Sistem Penghubung Layanan Pemerintah (SPLP) / API Gateway Instansi.
2. Buku Dokumen Katalog Layanan Berbagi Pakai (API Catalog / Swagger Documentation).
3. SOP Permohonan dan Pembukaan Akses Web Service Interoperabilitas Data.`,
      4: `Dokumen Bukti untuk Level 4 (Terpadu / Terintegrasi):
1. Surat persetujuan / Berita Acara Interkoneksi dengan SPLP Nasional (Kementerian Komdigi).
2. Contoh transaksi data antar-instansi (misal: validasi NIK dengan Dukcapil Kemendagri melalui SPLP).
3. Tangkapan layar konsol SPLP Nasional yang mencatat instansi sebagai Consumer/Provider aktif.`,
      5: `Dokumen Bukti untuk Level 5 (Optimum / Berkelanjutan):
1. Log audit trail transaksi data melalui SPLP (Timestamp, IP, Endpoint, Status HTTP 200, Volume).
2. Laporan pemantauan utilisasi API dan deteksi anomali akses secara otomatis.
3. Evaluasi efisiensi waktu pemrosesan layanan publik pasca penerapan integrasi data otomatis.`
    },
    evidenceNarration: `Dokumen bukti: Dashboard SPLP Instansi, Katalog API/Endpoint Service, PKS Berbagi Pakai Data, Surat Keterhubungan SPLP Nasional, dan Audit Trail Log.`,
    evidenceChecklist: [
      { id: 'c7-1', label: 'Tangkapan layar dashboard Sistem Penghubung Layanan (SPLP)', required: true, minLevel: 3 },
      { id: 'c7-2', label: 'Katalog API / Dokumentasi Endpoint Service yang aktif', required: true, minLevel: 3 },
      { id: 'c7-3', label: 'Perjanjian Kerja Sama / NDA Pertukaran Data Elektronik', required: false, minLevel: 3 },
      { id: 'c7-4', label: 'Log transaksi pertukaran data pada API gateway', required: true, minLevel: 4 }
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
    evidenceByLevel: {
      1: `Dokumen Bukti untuk Level 1 (Rintisan):
1. Notulen rapat pembahasan kendala teknis sistem server down tanpa formulir risiko formal.
2. Laporan kronologis insiden perangkat rusak yang bersifat reaktif.`,
      2: `Dokumen Bukti untuk Level 2 (Terkelola):
1. Matriks risiko parsial yang hanya dibuat oleh tim programmer untuk aplikasi tertentu.
2. Belum mencakup risiko tata kelola, SDM, kepatuhan regulasi, maupun infrastruktur fisik.`,
      3: `Dokumen Bukti untuk Level 3 (Terstandarisasi):
1. Surat Keputusan (SK) Tim Pengelola Manajemen Risiko SPBE Instansi.
2. Dokumen Profil Risiko SPBE dan Formulir Register Risiko SPBE lengkap seluruh kategori (Negatif & Positif).
3. Dokumen Rencana Perlakuan Risiko (Risk Mitigation Plan) beserta target waktu dan PIC pelaksana.`,
      4: `Dokumen Bukti untuk Level 4 (Terpadu / Terintegrasi):
1. Laporan Pemantauan dan Evaluasi Pelaksanaan Perlakuan Risiko secara triwulanan/semesteran.
2. Bukti penurunan tingkat dampak atau kemungkinan risiko pasca pelaksanaan mitigasi.
3. Bukti integrasi register risiko SPBE ke dalam Sistem Informasi Manajemen Risiko Instansi / Inspektorat.`,
      5: `Dokumen Bukti untuk Level 5 (Optimum / Berkelanjutan):
1. Laporan Reviu Efektivitas Penerapan Manajemen Risiko SPBE Tahunan yang ditandatangani Inspektur Daerah / Kepala Instansi.
2. Bukti perbaikan kebijakan atau SOP berdasarkan evaluasi sisa risiko (residual risk).
3. Benchmarking risiko digital dan adopsi mitigasi proaktif terhadap ancaman siber mutakhir.`
    },
    evidenceNarration: `Data dukung pembuktian: Dokumen Profil Risiko SPBE, Matriks Rencana Perlakuan Risiko (Mitigasi), SK Tim Pengelola Risiko, dan Laporan Evaluasi Triwulanan.`,
    evidenceChecklist: [
      { id: 'c8-1', label: 'Dokumen Formulir Register Risiko SPBE Terisi Lengkap', required: true, minLevel: 3 },
      { id: 'c8-2', label: 'Dokumen Rencana Perlakuan Risiko (Mitigasi) & PIC Pelaksana', required: true, minLevel: 3 },
      { id: 'c8-3', label: 'SK Tim Manajemen Risiko / Tim Asesor Risiko', required: false, minLevel: 3 },
      { id: 'c8-4', label: 'Laporan Hasil Evaluasi dan Mitigasi Risiko SPBE Tahunan', required: true, minLevel: 4 }
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
    evidenceByLevel: {
      1: `Dokumen Bukti untuk Level 1 (Rintisan):
1. Hasil scan antivirus pada komputer kerja atau server lokal.
2. Tidak ada pengujian penetrasi keamanan (penetration test) resmi.`,
      2: `Dokumen Bukti untuk Level 2 (Terkelola):
1. Laporan uji mandiri kerentanan website menggunakan tools open-source oleh staf internal.
2. Catatan penutupan bug sederhana tanpa metodologi pengujian standar internasional.`,
      3: `Dokumen Bukti untuk Level 3 (Terstandarisasi):
1. Laporan Resmi Hasil Vulnerability Assessment & Penetration Testing (VAPT Report) dari BSSN atau Auditor Independen tersertifikasi (CISA/CEH).
2. Surat Perintah Kerja / Kerangka Acuan Kerja (KAK) pelaksanaan audit keamanan TIK.
3. Matriks daftar temuan kerentanan (Severity High, Medium, Low) sesuai standar OWASP.`,
      4: `Dokumen Bukti untuk Level 4 (Terpadu / Terintegrasi):
1. Lembar Hasil Tindak Lanjut (LHTL) atau Bukti Perbaikan Kerentanan (Remediation Report).
2. Berita Acara Uji Ulang (Re-Testing / Retest Sign-off) yang menyatakan celah keamanan kritikal telah berhasil ditutup (Status: Resolved/Patched).
3. Surat rekomendasi keamanan dari Direktorat Keamanan Siber Pemerintah BSSN.`,
      5: `Dokumen Bukti untuk Level 5 (Optimum / Berkelanjutan):
1. Sertifikat ISO/IEC 27001 Sistem Manajemen Keamanan Informasi yang masih aktif dengan ruang lingkup data center/layanan prioritas.
2. Jadwal rutin dan laporan audit keamanan berkala (minimal 1 tahun sekali).
3. Penerapan sistem pemantauan Security Information and Event Management (SIEM) otomatis.`
    },
    evidenceNarration: `Bukti wajib: Laporan Resmi VAPT Auditor Tersertifikasi/BSSN, Matriks Tindak Lanjut Remidiasi Bug, Berita Acara Retest Sign-off, dan Sertifikat ISO 27001.`,
    evidenceChecklist: [
      { id: 'c9-1', label: 'Laporan Hasil Penetrasi Siber (VAPT Report) bertanggal resmi', required: true, minLevel: 3 },
      { id: 'c9-2', label: 'Matriks Tindak Lanjut Perbaikan Kerentanan (Remediation Sheet)', required: true, minLevel: 4 },
      { id: 'c9-3', label: 'Sertifikat ISO 27001 atau Surat Keterangan Audit Keamanan dari BSSN', required: false, minLevel: 5 },
      { id: 'c9-4', label: 'Bukti pengujian ulang (re-test) pasca penutupan celah keamanan', required: false, minLevel: 4 }
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
    evidenceByLevel: {
      1: `Dokumen Bukti untuk Level 1 (Rintisan):
1. Dokumen surat dinas yang dipindai (scan PDF) kemudian dikirim lewat WhatsApp atau email pribadi.
2. Masih menggunakan stempel basah dan tanda tangan manual pena pada dokumen fisik.`,
      2: `Dokumen Bukti untuk Level 2 (Terkelola):
1. Aplikasi persuratan lokal sederhana yang hanya digunakan di Bagian Umum/Sekretariat.
2. Tanda tangan digital masih berupa gambar scan tanda tangan tempelan (bukan TTE tersertifikasi kriptografis).`,
      3: `Dokumen Bukti untuk Level 3 (Terstandarisasi):
1. Perjanjian Kerja Sama (PKS) pemanfaatan Sertifikat Elektronik antara Kepala Instansi dengan Balai Sertifikasi Elektronik (BSrE) BSSN.
2. Tangkapan layar sistem aplikasi naskah dinas elektronik yang telah terpasang modul TTE BSrE.
3. Sampel berkas Surat Dinas Resmi yang memuat QR-Code TTE dan berstatus valid saat dicek pada portal verifikasi BSrE/Komdigi.`,
      4: `Dokumen Bukti untuk Level 4 (Terpadu / Terintegrasi):
1. Surat Keputusan atau Berita Acara Penerapan Aplikasi SRIKANDI (Sistem Informasi Kearsipan Dinamis Terintegrasi) Nasional.
2. Tangkapan layar integrasi alur persuratan lintas instansi secara elektronik tanpa kirim berkas fisik.
3. Laporan volume penggunaan TTE oleh seluruh kepala OPD, camat, dan lurah secara menyeluruh.`,
      5: `Dokumen Bukti untuk Level 5 (Optimum / Berkelanjutan):
1. Laporan statistik pemrosesan persuratan digital dengan tracking SLA disposisi rata-rata (misal: disposisi surat < 2 jam).
2. Laporan penghematan anggaran belanja kertas dan jasa pos pengiriman berkas fisik (100% paperless).
3. Evaluasi kepuasan ASN pengguna sistem persuratan elektronik dan pembaruan fitur mobile notification.`
    },
    evidenceNarration: `Dokumen bukti evaluasi: PKS dengan BSrE BSSN, Tangkapan Layar Aplikasi SRIKANDI / e-Office, Sampel Naskah Dinas Terverifikasi TTE (PDF & QR), dan Laporan Statistik Volume Surat.`,
    evidenceChecklist: [
      { id: 'c10-1', label: 'SK / PKS Pemanfaatan Sertifikat Elektronik dengan BSrE BSSN', required: true, minLevel: 3 },
      { id: 'c10-2', label: 'Tangkapan layar dashboard aplikasi naskah dinas (SRIKANDI)', required: true, minLevel: 3 },
      { id: 'c10-3', label: 'Sampel naskah dinas terverifikasi TTE BSrE (file PDF & QR Code)', required: true, minLevel: 3 },
      { id: 'c10-4', label: 'Laporan rekapitulasi volume surat elektronik per bulan', required: false, minLevel: 4 }
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
    evidenceByLevel: {
      1: `Dokumen Bukti untuk Level 1 (Rintisan):
1. Buku agenda pencatatan berkas kenaikan pangkat dan berkas cuti pegawai di lemari arsip BKPSDM.
2. Pengisian daftar hadir pegawai masih menggunakan tanda tangan di kertas absensi.`,
      2: `Dokumen Bukti untuk Level 2 (Terkelola):
1. Aplikasi SIMPEG sederhana untuk pendataan biodata PNS, namun belum ada layanan transaksi cuti atau presensi.
2. Penginputan data masih harus diulang manual saat mengurus kenaikan pangkat ke BKN.`,
      3: `Dokumen Bukti untuk Level 3 (Terstandarisasi):
1. Tangkapan layar SIMPEG Daerah yang memuat modul terintegrasi: Presensi Online Berbasis GPS/Wajah, e-Kinerja, Pengajuan Cuti, dan Kenaikan Gaji Berkala (KGB).
2. SOP Pelayanan Administrasi Kepegawaian secara Elektronik.
3. Laporan rekapitulasi kehadiran dan penilaian kinerja bulanan yang dihitung otomatis oleh sistem.`,
      4: `Dokumen Bukti untuk Level 4 (Terpadu / Terintegrasi):
1. Log transaksi pertukaran data web service API antara SIMPEG Instansi dengan SIASN BKN (Kenaikan Pangkat, Penetapan NIP, Pensiun Otomatis).
2. Surat Keterangan / Piagam Integrasi Layanan Kepegawaian dari Badan Kepegawaian Negara (BKN).
3. Penerapan Single Sign-On (SSO) akun ASN terintegrasi akun MyASN BKN.`,
      5: `Dokumen Bukti untuk Level 5 (Optimum / Berkelanjutan):
1. Modul Manajemen Talenta (Nine-Box Matrix Talent Management) yang terisi otomatis berdasarkan performa e-kinerja dan kompetensi.
2. Laporan pemanfaatan analitik data kepegawaian untuk penempatan jabatan dan promosi objektif (merit system).
3. Survei kepuasan pegawai terhadap kecepatan proses layanan mutasi dan promosi digital.`
    },
    evidenceNarration: `Data dukung pembuktian: Tangkapan Layar SIMPEG/SIASN, Log Integrasi API dengan SIASN BKN, SOP Layanan Kepegawaian Daring, dan Laporan Kinerja Terpadu.`,
    evidenceChecklist: [
      { id: 'c11-1', label: 'Tangkapan layar modul SI-ASN / SIMPEG terpadu', required: true, minLevel: 3 },
      { id: 'c11-2', label: 'Log integrasi API antara SIMPEG lokal dengan SIASN BKN', required: true, minLevel: 4 },
      { id: 'c11-3', label: 'SOP pengajuan layanan kepegawaian daring (Cuti, KGB, Pensiun)', required: false, minLevel: 3 },
      { id: 'c11-4', label: 'Laporan kepuasan pengguna ASN terhadap layanan SIMPEG', required: false, minLevel: 5 }
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
    evidenceByLevel: {
      1: `Dokumen Bukti untuk Level 1 (Rintisan):
1. Foto loket pelayanan kantor dinas yang masih menggunakan formulir kertas fotokopi.
2. Brosur informasi persyaratan layanan fisik di meja resepsionis.`,
      2: `Dokumen Bukti untuk Level 2 (Terkelola):
1. Daftar link aplikasi layanan publik yang dibuat terpisah-pisah oleh masing-masing dinas (misal: Disdukcapil buat sendiri, DPMPTSP buat sendiri, RSUD buat sendiri).
2. Masyarakat harus membuat banyak akun login berbeda untuk setiap layanan.`,
      3: `Dokumen Bukti untuk Level 3 (Terstandarisasi):
1. URL resmi dan tangkapan layar Portal Pelayanan Publik Terpadu (Single Sign-On Super-App / MPP Digital Instansi).
2. Regulasi Kepala Daerah tentang Penyelenggaraan Pelayanan Publik Terpadu Satu Pintu secara Elektronik.
3. Standar Pelayanan (SP) dan Maklumat Pelayanan yang tercantum jelas di dalam portal.`,
      4: `Dokumen Bukti untuk Level 4 (Terpadu / Terintegrasi):
1. Bukti integrasi portal daerah dengan INA Digital / Portal Pelayanan Publik Nasional dan Mal Pelayanan Publik (MPP) Digital Kementerian PANRB.
2. Bukti integrasi identitas kependudukan digital (IKD Dukcapil Kemendagri) untuk autentikasi warga.
3. Bukti integrasi kanal pembayaran retribusi/pajak daerah non-tunai melalui QRIS / Virtual Account bank.`,
      5: `Dokumen Bukti untuk Level 5 (Optimum / Berkelanjutan):
1. Fitur real-time tracking posisi berkas dan estimasi jam penyelesaian layanan yang dikirim via SMS/WhatsApp gateway.
2. Laporan Hasil Survei Kepuasan Masyarakat (SKM) elektronik yang dipublikasikan secara transparan di portal.
3. Rekomendasi penyempurnaan fitur layanan berdasarkan analisis ulasan dan rating pengguna masyarakat.`
    },
    evidenceNarration: `Dokumen bukti evaluasi: URL & Tangkapan Layar Portal Terpadu/Super-App, Bukti Integrasi SSO/IKD, Integrasi Payment Gateway QRIS, dan Laporan Hasil SKM Elektronik.`,
    evidenceChecklist: [
      { id: 'c12-1', label: 'Tangkapan layar dan URL resmi Portal Layanan Publik Terpadu', required: true, minLevel: 3 },
      { id: 'c12-2', label: 'Bukti integrasi autentikasi tunggal (SSO) atau IKD', required: true, minLevel: 4 },
      { id: 'c12-3', label: 'Bukti integrasi kanal pembayaran elektronik (QRIS/VA)', required: false, minLevel: 4 },
      { id: 'c12-4', label: 'Laporan Hasil Survei Kepuasan Masyarakat (SKM) Elektronik', required: true, minLevel: 5 }
    ],
    tips: 'Hindari menampilkan bukti yang masih berupa aplikasi terpisah-pisah. Tunjukkan konsolidasi layanan dalam satu wadah/antarmuka terpadu.'
  }
];

export const SUMMARY_STATS = {
  totalIndicators: 12,
  totalDomains: 4,
  targetMaturityDefault: 3.5
};
