// DATASET RESMI 20 INDIKATOR EVALUASI KINERJA PEMERINTAH DIGITAL
// SUMBER TUNGGAL: PERMENPANRB NOMOR 8 TAHUN 2026 TENTANG EVALUASI KINERJA PENYELENGGARAAN PEMERINTAHAN DIGITAL
// TIDAK MENGGUNAKAN KERANGKA SPBE PERPRES 95/98 TAHUN 2018

export const INDICATORS = [
  // ================= ASPEK 1: TATA KELOLA DAN MANAJEMEN (BOBOT 10%) =================
  {
    id: 'ind-01',
    number: 1,
    code: 'IND-01',
    name: 'Tingkat Kematangan Tata Kelola Pemerintah Digital',
    domainId: 'aspek-1',
    domainName: 'Tata Kelola dan Manajemen',
    aspectName: 'Tata Kelola Pemerintah Digital',
    weight: 5,
    description: 'Menilai kelembagaan, arsitektur pemerintah digital, dan peta rencana strategis transformasi digital yang memadukan seluruh proses digitalisasi di lingkungan instansi pemerintah.',
    criteria: {
      1: 'Kebijakan tata kelola pemerintah digital belum diatur atau baru berupa inisiatif terfragmentasi tanpa kerangka arsitektur terpadu.',
      2: 'Telah disusun rancangan/draf kebijakan tata kelola dan arsitektur pemerintah digital instansi, namun belum ditetapkan secara resmi atau baru diuji coba pada unit percontohan.',
      3: 'Telah ditetapkan secara resmi melalui Peraturan Pimpinan Instansi (Peraturan Menteri/Kepala Lembaga/Peraturan Kepala Daerah) tentang Tata Kelola dan Arsitektur Pemerintah Digital serta Peta Rencana Strategis yang berlaku di seluruh unit kerja.',
      4: 'Arsitektur pemerintah digital instansi telah terpadu dan diselaraskan secara penuh dengan Platform Arsitektur Pemerintah Digital Nasional (INA Digital), serta diintegrasikan ke dalam dokumen perencanaan dan penganggaran (Renstra/Renja/DPA).',
      5: 'Tata kelola pemerintah digital dievaluasi secara berkala (minimal 1 kali dalam 2 tahun) berbasis audit kinerja, dilakukan perbaikan berkelanjutan, dan adaptif terhadap arah kebijakan transformasi digital nasional.'
    },
    evidenceByLevel: {
      1: `Dokumen Bukti Level 1 (Rintisan):
1. Draf konsep awal tata kelola digital atau arsitektur teknologi informasi instansi.
2. Undangan dan notula rapat inisiasi pembahasan tata kelola digital internal unit TIK.`,
      2: `Dokumen Bukti Level 2 (Terkelola):
3. Naskah rancangan peraturan kepala daerah/menteri tentang arsitektur pemerintah digital instansi.
4. Nota dinas pengajuan harmonisasi regulasi ke Bagian Hukum/Biro Hukum.
5. Surat edaran pelaksanaan uji coba tata kelola digital pada unit kerja percontohan.`,
      3: `Dokumen Bukti Level 3 (Terstandarisasi):
1. Salinan Berita Daerah / Lembaran Resmi penetapan Peraturan Kepala Instansi tentang Arsitektur dan Peta Rencana Pemerintah Digital.
2. Dokumen Lampiran Utuh 6 Domain Arsitektur Pemerintah Digital (Domain Proses Bisnis, Data, Aplikasi, Infrastruktur, Keamanan, dan Layanan).
3. Surat Keputusan (SK) Tim Penyelenggara Transformasi Digital Instansi yang disahkan pimpinan.
4. Berita acara dan daftar hadir sosialisasi regulasi ke seluruh unit kerja/perangkat daerah.`,
      4: `Dokumen Bukti Level 4 (Terpadu):
1. Bukti keterpaduan dan penyelarasan Arsitektur Instansi ke dalam Platform Arsitektur Pemerintah Digital Nasional (INA Digital).
2. Tangkapan layar status validasi dan persetujuan arsitektur digital dari Kementerian PANRB.
3. Dokumen penjabaran program dan alokasi anggaran transformasi digital dalam Renja dan Dokumen Pelaksanaan Anggaran (DPA/RKA).`,
      5: `Dokumen Bukti Level 5 (Optimum):
1. Laporan Resmi Evaluasi dan Kaji Ulang Berkala Tata Kelola Pemerintah Digital (minimal 2 tahun sekali).
2. Dokumen adendum/penyesuaian kebijakan tata kelola berdasarkan hasil audit dan dinamika regulasi nasional.
3. Matriks tindak lanjut rekomendasi perbaikan tata kelola yang ditandatangani Pimpinan Instansi.`
    },
    evidenceNarration: `Data dukung wajib meliputi salinan Peraturan Resmi Kepala Daerah/Menteri tentang Tata Kelola & Arsitektur Pemerintah Digital (termasuk lampiran 6 domain), SK Tim Transformasi Digital, bukti penyelarasan ke Platform Arsitektur Nasional INA Digital, dan Laporan Evaluasi Berkala.`,
    evidenceChecklist: [
      { id: 'c1-1', label: 'Peraturan Pimpinan Instansi tentang Arsitektur & Peta Rencana Pemerintah Digital', required: true, minLevel: 3 },
      { id: 'c1-2', label: 'Dokumen Lampiran 6 Domain Arsitektur Pemerintah Digital lengkap', required: true, minLevel: 3 },
      { id: 'c1-3', label: 'SK Tim Penyelenggara Transformasi Digital Instansi', required: true, minLevel: 3 },
      { id: 'c1-4', label: 'Bukti Validasi Penyelarasan pada Platform Arsitektur Digital Nasional (INA Digital)', required: true, minLevel: 4 },
      { id: 'c1-5', label: 'Laporan Evaluasi dan Reviu Berkala Tata Kelola Pemerintah Digital', required: false, minLevel: 5 }
    ],
    tips: 'Sesuai PermenPANRB 8/2026, pastikan regulasi telah resmi diundangkan dan telah tervalidasi pada Platform Arsitektur Pemerintah Digital Nasional.'
  },
  {
    id: 'ind-02',
    number: 2,
    code: 'IND-02',
    name: 'Tingkat Kematangan Manajemen Layanan Digital Pemerintah',
    domainId: 'aspek-1',
    domainName: 'Tata Kelola dan Manajemen',
    aspectName: 'Manajemen Layanan Digital',
    weight: 5,
    description: 'Menilai penerapan manajemen risiko, manajemen perubahan, manajemen aset digital, dan service desk operasional layanan digital pemerintah berbasis standar.',
    criteria: {
      1: 'Manajemen layanan digital (risiko, perubahan, aset, gangguan) dilakukan secara reaktif dan ad-hoc tanpa prosedur terdokumentasi.',
      2: 'Telah ada rancangan SOP manajemen layanan dan identifikasi risiko digital, namun penerapannya masih parsial dan belum seragam di seluruh unit kerja.',
      3: 'Telah ditetapkan Keputusan/Peraturan Pimpinan Instansi tentang SOP Manajemen Layanan Digital, Register Risiko Digital beserta Rencana Penanganan (Risk Treatment Plan), dan SOP Manajemen Perubahan Sistem di seluruh lingkungan instansi.',
      4: 'Manajemen layanan digital telah diterapkan secara terpadu melalui Service Desk terintegrasi, pemantauan mitigasi risiko dilakukan periodik, dan pemenuhan Service Level Agreement (SLA) terpantau sistem.',
      5: 'Manajemen layanan digital telah melalui audit efektivitas berkala (standar ISO 20000 / ISO 31000), dilakukan perbaikan berkesinambungan (Continual Service Improvement), dan memiliki ketahanan operasional tinggi.'
    },
    evidenceByLevel: {
      1: `Dokumen Bukti Level 1 (Rintisan):
1. Catatan penanganan kendala server atau aplikasi yang bersifat insidental.
2. Belum memiliki formulir register risiko digital resmi.`,
      2: `Dokumen Bukti Level 2 (Terkelola):
1. Draf panduan service desk atau penanganan gangguan yang dibuat oleh unit TIK.
2. Matriks identifikasi risiko pada 1-2 aplikasi prioritas instansi.`,
      3: `Dokumen Bukti Level 3 (Terstandarisasi):
1. Dokumen SOP Manajemen Layanan Digital & Service Desk Resmi Instansi.
2. Formulir Register Risiko Pemerintah Digital terisi lengkap beserta Rencana Mitigasi (Risk Treatment Plan).
3. SK Tim Pengelola Manajemen Risiko dan Tim Manajemen Perubahan Digital Instansi.`,
      4: `Dokumen Bukti Level 4 (Terpadu):
1. Tangkapan layar sistem Service Management / Ticketing Helpdesk terpadu instansi.
2. Laporan pemantauan dan mitigasi risiko digital periodik (triwulanan/semesteran).
3. Rekapitulasi pemenuhan Service Level Agreement (SLA) penanganan insiden digital.`,
      5: `Dokumen Bukti Level 5 (Optimum):
1. Laporan Hasil Reviu/Audit Efektivitas Manajemen Layanan dan Risiko oleh Inspektorat/Auditor Eksternal.
2. Sertifikat kesesuaian standar ISO 20000 (Service Management) / ISO 31000 (Risk Management).
3. Bukti implementasi Continual Service Improvement (CSI) berdasarkan umpan balik berkala.`
    },
    evidenceNarration: `Data dukung meliputi Dokumen SOP Manajemen Layanan Digital, Register Risiko Digital & Rencana Mitigasi, Laporan Pemantauan Risiko Periodik, dan Laporan Hasil Audit Kinerja Layanan.`,
    evidenceChecklist: [
      { id: 'c2-1', label: 'Dokumen SOP Manajemen Layanan Digital & Service Desk Resmi Instansi', required: true, minLevel: 3 },
      { id: 'c2-2', label: 'Formulir Register Risiko Pemerintah Digital & Rencana Mitigasi', required: true, minLevel: 3 },
      { id: 'c2-3', label: 'Laporan Pemantauan Pelaksanaan Mitigasi Risiko Digital Periodik', required: true, minLevel: 4 },
      { id: 'c2-4', label: 'Laporan Reviu/Audit Efektivitas Manajemen Layanan dan Risiko Digital', required: false, minLevel: 5 }
    ],
    tips: 'PermenPANRB 8/2026 menekankan mitigasi risiko kegagalan layanan digital, kebocoran data, dan manajemen perubahan sistem saat pembaruan rilis aplikasi.'
  },

  // ================= ASPEK 2: PENYELENGGARA (BOBOT 10%) =================
  {
    id: 'ind-03',
    number: 3,
    code: 'IND-03',
    name: 'Tingkat Kematangan Sumber Daya Manusia Pemerintah Digital',
    domainId: 'aspek-2',
    domainName: 'Penyelenggara',
    aspectName: 'SDM Pemerintah Digital & AI',
    weight: 5,
    description: 'Menilai perencanaan, kompetensi, literasi digital ASN, serta adopsi kecerdasan buatan (Artificial Intelligence) dan analisis data mutakhir dalam penyelenggaraan pemerintahan digital.',
    criteria: {
      1: 'Peningkatan kompetensi digital ASN belum terencana dan bersifat sporadis tanpa analisis kebutuhan kompetensi.',
      2: 'Pelatihan digital telah diselenggarakan untuk sebagian staf pengelola teknis, namun belum didukung peta kompetensi terstruktur.',
      3: 'Telah ditetapkan dokumen Analisis Kebutuhan Pelatihan (Training Needs Analysis / TNA) Digital ASN, program sertifikasi kompetensi resmi (BNSP/Global), serta alokasi anggaran pengembangan SDM digital yang tertera dalam DPA.',
      4: 'ASN memanfaatkan teknologi mutakhir (Artificial Intelligence, big data analytics) dalam perumusan kebijakan/layanan, memiliki talent pool digital bersertifikasi keahlian khusus, dan program literasi digital merata.',
      5: 'Diterapkan Digital Talent Management berkelanjutan berbasis merit sistem, dilakukan evaluasi berkala dampak pemanfaatan AI terhadap efisiensi dan produktivitas birokrasi, serta melahirkan karya inovasi digital ASN.'
    },
    evidenceByLevel: {
      1: `Dokumen Bukti Level 1 (Rintisan):
1. Daftar staf pengelola IT tanpa rincian sertifikasi keahlian.
2. Belum ada alokasi anggaran pelatihan digital khusus dalam perencanaan.`,
      2: `Dokumen Bukti Level 2 (Terkelola):
1. Sertifikat keikutsertaan pelatihan aplikasi atau bimbingan teknis dasar bagi operator OPD.
2. Usulan kebutuhan pelatihan TIK dari unit kerja teknis.`,
      3: `Dokumen Bukti Level 3 (Terstandarisasi):
1. Dokumen Training Needs Analysis (TNA) Keahlian Digital ASN Instansi.
2. Salinan Sertifikat Kompetensi Profesi BNSP / Sertifikasi Internasional ASN (Cloud, Cyber Security, Data Science, Software Engineering).
3. Bukti alokasi anggaran pengembangan SDM digital dalam DPA/RKA instansi.`,
      4: `Dokumen Bukti Level 4 (Terpadu):
1. Laporan implementasi pemanfaatan Artificial Intelligence (AI) dan analitik data mutakhir oleh ASN dalam pekerjaan operasional dan perumusan kebijakan.
2. Surat Keputusan (SK) pembentukan Tim Pengembang Digital (In-house Software Engineer / Data Analyst).
3. Laporan pengukuran Indeks Literasi Digital ASN instansi.`,
      5: `Dokumen Bukti Level 5 (Optimum):
1. Laporan evaluasi berkala efisiensi jam kerja dan peningkatan produktivitas pasca pemanfaatan AI.
2. Sistem Talent Pool ASN Digital dengan jenjang karier berbasis merit system teruji.
3. Portofolio karya inovasi teknologi digital yang dihasilkan mandiri oleh ASN instansi.`
    },
    evidenceNarration: `Data dukung meliputi Dokumen TNA Digital ASN, Sertifikat Kompetensi Keahlian Profesi, Bukti Pemanfaatan Artificial Intelligence / Data Analytics oleh ASN, dan Evaluasi Produktivitas SDM Digital.`,
    evidenceChecklist: [
      { id: 'c3-1', label: 'Dokumen Analisis Kebutuhan Pelatihan (TNA) Digital ASN', required: true, minLevel: 3 },
      { id: 'c3-2', label: 'Salinan Sertifikat Kompetensi Profesional TIK ASN (BNSP/Global)', required: true, minLevel: 3 },
      { id: 'c3-3', label: 'Dokumen / Laporan Pemanfaatan AI dan Analitik Data oleh ASN', required: true, minLevel: 4 },
      { id: 'c3-4', label: 'Laporan Evaluasi Dampak Produktivitas dan Efisiensi SDM Digital', required: false, minLevel: 5 }
    ],
    tips: 'PermenPANRB 8/2026 secara eksplisit menguji adopsi kecerdasan buatan (AI) dan pemanfaatan data analytics oleh ASN sebagai pengungkit utama Level 4 dan 5.'
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
    description: 'Menilai sinergi, kemitraan strategis, dan berbagi pakai kapabilitas dengan instansi pemerintah lain, akademisi/perguruan tinggi, BUMN/swasta, dan komunitas digital.',
    criteria: {
      1: 'Inisiatif digital berjalan terkotak-kotak (silo) tanpa adanya kemitraan eksternal.',
      2: 'Terdapat inisiasi kerja sama digital dengan pihak eksternal, namun belum dituangkan dalam naskah perjanjian kerja sama formal yang mengikat.',
      3: 'Telah ditetapkan naskah Perjanjian Kerja Sama (PKS) atau MoU kolaborasi digital lintas sektor (antarinstansi pemerintah, perguruan tinggi/akademisi, BUMN/swasta, atau komunitas) yang memuat hak, kewajiban, dan rencana aksi konkret.',
      4: 'Kolaborasi digital berjalan aktif melalui pemanfaatan platform bersama, co-creation solusi layanan digital, pertukaran keahlian, atau berbagi pakai infrastruktur digital antardaerah/antarlembaga.',
      5: 'Kolaborasi dievaluasi kinerjanya secara berkala, menghasilkan efisiensi belanja teknologi dan replikasi solusi secara nasional, serta adaptif terhadap ekosistem inovasi terbuka (open government ecosystem).'
    },
    evidenceByLevel: {
      1: `Dokumen Bukti Level 1 (Rintisan):
1. Notula diskusi penjajakan kerja sama awal tanpa naskah kesepakatan tertulis.`,
      2: `Dokumen Bukti Level 2 (Terkelola):
1. Naskah nota kesepahaman (MoU) umum yang belum ditindaklanjuti dengan PKS operasional teknis.`,
      3: `Dokumen Bukti Level 3 (Terstandarisasi):
1. Salinan resmi Perjanjian Kerja Sama (PKS) Kolaborasi Digital dengan instansi mitra.
2. Kerangka Acuan Kerja (KAK) dan rencana aksi kemitraan digital bersama.
3. SK Tim Kerja Bersama Pelaksana Kolaborasi Digital.`,
      4: `Dokumen Bukti Level 4 (Terpadu):
1. Laporan pelaksanaan program kolaborasi digital aktif (misal: Digital Innovation Lab, co-development aplikasi, sharing infrastruktur antardaerah).
2. Bukti adopsi bersama solusi digital hasil kemitraan antardaerah/antarinstansi.`,
      5: `Dokumen Bukti Level 5 (Optimum):
1. Laporan Evaluasi Kemitraan Digital yang memuat analisis cost-benefit dan efisiensi anggaran belanja TIK.
2. Model replikasi solusi digital oleh instansi lain tingkat nasional.
3. Penghargaan atau pengakuan publik atas keberhasilan inovasi kolaboratif.`
    },
    evidenceNarration: `Data dukung meliputi Naskah PKS Kolaborasi Digital Resmi, Bukti Kegiatan Co-creation / Sharing Solusi Digital, dan Laporan Evaluasi Efisiensi Anggaran Kemitraan.`,
    evidenceChecklist: [
      { id: 'c4-1', label: 'Salinan Perjanjian Kerja Sama (PKS) Kolaborasi Digital Resmi', required: true, minLevel: 3 },
      { id: 'c4-2', label: 'Laporan Pelaksanaan Program Bersama Kemitraan Digital Aktif', required: true, minLevel: 4 },
      { id: 'c4-3', label: 'Laporan Evaluasi Efisiensi dan Dampak Kolaborasi Digital', required: false, minLevel: 5 }
    ],
    tips: 'Tunjukkan kerja sama berbagi pakai kode sumber aplikasi (open source), co-development, atau replikasi sistem antardaerah.'
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
    weight: 4,
    description: 'Menilai implementasi tata kelola data: peran Walidata, Produsen Data, penegakan prinsip Satu Data (standar data, metadata, interoperabilitas, kode referensi), serta keterhubungan ke Portal Data Nasional.',
    criteria: {
      1: 'Pengelolaan data dilakukan secara terpisah di masing-masing perangkat daerah tanpa struktur kelembagaan Satu Data.',
      2: 'Telah ada penunjukan Walidata, namun belum memiliki pedoman standar data, struktur metadata, dan forum satu data formal.',
      3: 'Telah ditetapkan Peraturan Pimpinan Instansi tentang Penyelenggaraan Satu Data, SK Forum Satu Data (Pembina Data, Walidata, Produsen Data), serta petunjuk teknis Standar Data, Metadata Baku, dan Interoperabilitas Data.',
      4: 'Seluruh dataset prioritas instansi telah tervalidasi memenuhi prinsip Satu Data Indonesia, terhubung secara otomatis via API dengan Portal Satu Data Indonesia Nasional (data.go.id), dan memiliki Daftar Data resmi yang disahkan Forum Satu Data.',
      5: 'Diterapkan tata kelola pembersihan data (data cleansing) otomatis secara berkala, audit kualitas data (Data Quality Assessment), serta pemanfaatan data terpadu untuk analitik preskriptif dan kebijakan berbasis bukti (Evidence-Based Policymaking).'
    },
    evidenceByLevel: {
      1: `Dokumen Bukti Level 1 (Rintisan):
1. Rekapitulasi data tabel di spreadsheet lokal masing-masing perangkat daerah.`,
      2: `Dokumen Bukti Level 2 (Terkelola):
1. SK Penunjukan Walidata di Diskominfo tanpa penetapan struktur Produsen Data dan Forum Satu Data.`,
      3: `Dokumen Bukti Level 3 (Terstandarisasi):
1. Salinan Peraturan Kepala Daerah / Pimpinan Instansi tentang Penyelenggaraan Satu Data.
2. SK Penetapan Forum Satu Data, Pembina Data, Walidata, dan Produsen Data.
3. Pedoman Standar Data, Struktur Metadata, dan Kode Referensi Resmi Instansi.`,
      4: `Dokumen Bukti Level 4 (Terpadu):
1. Bukti interkoneksi API Portal Satu Data Daerah dengan Portal Satu Data Indonesia Nasional (data.go.id).
2. Daftar Data dan Rencana Aksi Data tahunan yang disahkan Forum Satu Data.
3. Rekomendasi Statistik resmi dari Pembina Data atas dataset prioritas.`,
      5: `Dokumen Bukti Level 5 (Optimum):
1. Laporan Evaluasi Kualitas Data (Data Quality Assessment / Cleansing) berkala.
2. Bukti pemanfaatan dataset Satu Data sebagai dasar analitik pengambilan kebijakan pimpinan (Dashboard Eksekutif).`
    },
    evidenceNarration: `Data dukung meliputi Peraturan Satu Data, SK Forum Satu Data, Daftar Data Resmi, Bukti Sinkronisasi data.go.id, dan Laporan Kualitas Data.`,
    evidenceChecklist: [
      { id: 'c5-1', label: 'Peraturan Pimpinan Instansi tentang Penyelenggaraan Satu Data', required: true, minLevel: 3 },
      { id: 'c5-2', label: 'SK Penunjukan Forum Satu Data, Walidata, dan Produsen Data', required: true, minLevel: 3 },
      { id: 'c5-3', label: 'Bukti Keterhubungan API dengan Portal data.go.id Nasional', required: true, minLevel: 4 },
      { id: 'c5-4', label: 'Laporan Pemantauan Kualitas Data & Pemanfaatan Kebijakan', required: false, minLevel: 5 }
    ],
    tips: 'Pastikan seluruh dataset yang dipublikasikan telah memiliki lembar metadata standar dan terdaftar pada Portal Satu Data Nasional.'
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
    description: 'Menilai penyelenggaraan simpul jaringan informasi geospasial (peta digital/GIS) yang terhubung ke Jaringan Informasi Geospasial Nasional (JIGN) Badan Informasi Geospasial (BIG).',
    criteria: {
      1: 'Data geospasial berupa peta gambar statis/CAD tanpa sistem koordinat standar dan tanpa georeferensi.',
      2: 'Terdapat data spasial (Shapefile/GeoJSON) di unit tertentu namun belum terintegrasi ke dalam simpul jaringan geospasial resmi.',
      3: 'Telah ditetapkan SK Tim Simpul Jaringan Informasi Geospasial Instansi, tersedianya Geoportal Web-GIS resmi instansi yang aktif, dan metadata spasial memenuhi standar ISO 19115.',
      4: 'Simpul Jaringan Geospasial instansi telah berstatus Operasional Penuh dan terhubung secara terintegrasi dengan Jaringan Informasi Geospasial Nasional (JIGN) Badan Informasi Geospasial (BIG) melalui layanan Web Map Service (WMS/WFS).',
      5: 'Informasi geospasial dimanfaatkan optimal untuk kebijakan tata ruang digital (RDTR/KKPR), monitoring pajak daerah, mitigasi bencana terintegrasi sensor IoT, dan meraih penghargaan kinerja simpul jaringan (Bhumandala).'
    },
    evidenceByLevel: {
      1: `Dokumen Bukti Level 1 (Rintisan):
1. Berkas peta format gambar (JPG/PNG) atau PDF tanpa metadata geospasial baku.`,
      2: `Dokumen Bukti Level 2 (Terkelola):
1. Kumpulan shapefile (SHP) peta tata ruang di dinas teknis tanpa geoportal terbuka.`,
      3: `Dokumen Bukti Level 3 (Terstandarisasi):
1. SK Kepala Instansi tentang Pembentukan Simpul Jaringan Informasi Geospasial.
2. URL dan tangkapan layar Geoportal resmi instansi berbasis Web-GIS (MapServer/GeoServer).
3. Metadata spasial standar ISO 19115 pada layer tematik peta.`,
      4: `Dokumen Bukti Level 4 (Terpadu):
1. Piagam / Surat Keterhubungan Simpul Jaringan dari Badan Informasi Geospasial (BIG) berstatus Operasional Penuh.
2. Tangkapan layar integrasi katalog peta ke Portal JIGN Nasional (tanahair.indonesia.go.id).
3. Layanan web map service (WMS/WFS) aktif yang dapat diakses publik.`,
      5: `Dokumen Bukti Level 5 (Optimum):
1. Piagam Penghargaan Bhumandala Award atau Laporan Kinerja Simpul Jaringan Terbaik.
2. Bukti pemanfaatan peta geospasial real-time untuk perizinan tata ruang dan mitigasi risiko bencana.`
    },
    evidenceNarration: `Data dukung meliputi SK Simpul Jaringan Geospasial, Tangkapan Layar Geoportal Web-GIS, Piagam Keterhubungan JIGN BIG, dan Layanan WMS/WFS Aktif.`,
    evidenceChecklist: [
      { id: 'c6-1', label: 'SK Penetapan Simpul Jaringan Geospasial Instansi', required: true, minLevel: 3 },
      { id: 'c6-2', label: 'Tangkapan layar dan URL Geoportal Web-GIS Instansi', required: true, minLevel: 3 },
      { id: 'c6-3', label: 'Piagam / Surat Keterhubungan dengan Portal JIGN BIG (Operasional Penuh)', required: true, minLevel: 4 },
      { id: 'c6-4', label: 'Bukti pemanfaatan analitik geospasial dalam layanan perizinan/tata ruang', required: false, minLevel: 5 }
    ],
    tips: 'Keterhubungan aktif dengan status Operasional Penuh di monitoring JIGN BIG memberikan bukti valid untuk Level 4.'
  },
  {
    id: 'ind-07',
    number: 7,
    code: 'IND-07',
    name: 'Tingkat Kematangan Pembangunan Statistik',
    domainId: 'aspek-3',
    domainName: 'Data',
    aspectName: 'Statistik Sektoral',
    weight: 4,
    description: 'Menilai penyelenggaraan statistik sektoral: perolehan rekomendasi kegiatan statistik dari BPS, penyusunan metadata statistik baku, dan hasil Evaluasi Penyelenggaraan Statistik Sektoral (EPSS).',
    criteria: {
      1: 'Pengumpulan data statistik sektoral dilakukan secara mandiri oleh dinas tanpa koordinasi dengan Pembina Data Statistik (BPS).',
      2: 'Kegiatan statistik sektoral telah direncanakan di beberapa unit, namun belum mengajukan permohonan rekomendasi statistik kepada BPS.',
      3: 'Telah ditetapkan SOP Penyelenggaraan Statistik Sektoral di lingkungan instansi, dan seluruh produsen data mengajukan rancangan kegiatan statistik sektoral kepada BPS.',
      4: 'Telah memperoleh Surat Rekomendasi Kegiatan Statistik dari BPS (melalui aplikasi Romantik BPS), menyusun Metadata Statistik lengkap (MS-Keg, MS-Var, MS-Ind), dan mempublikasikan data statistik tervalidasi di portal resmi.',
      5: 'Hasil Evaluasi Penyelenggaraan Statistik Sektoral (EPSS) meraih predikat "Baik" atau "Sangat Baik" dari BPS, dan data statistik dimanfaatkan untuk pemodelan prediktif pengentasan kemiskinan dan stunting.'
    },
    evidenceByLevel: {
      1: `Dokumen Bukti Level 1 (Rintisan):
1. Buku publikasi angka statistik tahunan tanpa verifikasi metodologi BPS.`,
      2: `Dokumen Bukti Level 2 (Terkelola):
1. Formulir survei statistik sektoral yang baru dibuat mandiri oleh unit pelaksana.`,
      3: `Dokumen Bukti Level 3 (Terstandarisasi):
1. Dokumen SOP Pengusulan Rekomendasi Kegiatan Statistik Sektoral ke BPS.
2. Dokumen Kerangka Acuan Kerja (KAK) survei statistik sektoral yang memuat rancangan sampel dan kuesioner.`,
      4: `Dokumen Bukti Level 4 (Terpadu):
1. Surat Rekomendasi Statistik Resmi dari BPS (Persetujuan Aplikasi Romantik BPS).
2. Dokumen Metadata Statistik Lengkap: Metadata Kegiatan (MS-Keg), Metadata Variabel (MS-Var), dan Indikator (MS-Ind).
3. Publikasi dataset statistik sektoral yang telah tervalidasi di portal data.`,
      5: `Dokumen Bukti Level 5 (Optimum):
1. Sertifikat Hasil Evaluasi Penyelenggaraan Statistik Sektoral (EPSS) dengan Indeks Pembangunan Statistik (IPS) Predikat Baik/Sangat Baik.
2. Bukti pemanfaatan data statistik analitik dalam dokumen perencanaan pembangunan daerah.`
    },
    evidenceNarration: `Data dukung meliputi Surat Rekomendasi Statistik Romantik BPS, Lembar Metadata Statistik (MS-Keg/Var/Ind), dan Sertifikat Nilai IPS dari BPS.`,
    evidenceChecklist: [
      { id: 'c7-1', label: 'SOP Tata Cara Pengusulan Rekomendasi Statistik ke BPS', required: true, minLevel: 3 },
      { id: 'c7-2', label: 'Surat Tanda Bukti Rekomendasi Statistik (Romantik) dari BPS', required: true, minLevel: 4 },
      { id: 'c7-3', label: 'Dokumen Metadata Statistik Baku (MS-Keg, MS-Var, MS-Ind)', required: true, minLevel: 4 },
      { id: 'c7-4', label: 'Piagam / Nilai Evaluasi Penyelenggaraan Statistik Sektoral (EPSS)', required: false, minLevel: 5 }
    ],
    tips: 'Lampirkan bukti tangkapan layar akun instansi pada aplikasi Romantik Online BPS dan lembar metadata variabel.'
  },
  {
    id: 'ind-08',
    number: 8,
    code: 'IND-08',
    name: 'Tingkat Kematangan Pelindungan Data Pribadi (PDP)',
    domainId: 'aspek-3',
    domainName: 'Data',
    aspectName: 'Pelindungan Data Pribadi (UU PDP)',
    weight: 4,
    description: 'Menilai kepatuhan terhadap regulasi Pelindungan Data Pribadi: penunjukan Pejabat Pelindung Data Pribadi (DPO), SOP pemrosesan data, persetujuan eksplisit warga, dan audit kepatuhan PDP.',
    criteria: {
      1: 'Belum terdapat kebijakan pelindungan data pribadi dan belum ada langkah pengamanan data subjek pada sistem informasi.',
      2: 'Telah ada klausul persetujuan (consent) sederhana pada formulir digital tertentu, namun belum ada tata kelola pemrosesan data pribadi yang komprehensif.',
      3: 'Telah ditetapkan Keputusan Pimpinan Instansi tentang Penunjukan Pejabat/Petugas Pelindung Data Pribadi (Data Protection Officer / DPO), SOP Tata Kelola Pemrosesan dan Retensi Data Pribadi, serta Lembar Persetujuan Eksplisit (Explicit Consent Form) pada seluruh aplikasi layanan.',
      4: 'Diterapkannya Penilaian Dampak Pelindungan Data Pribadi (Data Protection Impact Assessment / DPIA) pada sistem informasi strategis, enkripsi data pribadi sensitif (data-at-rest dan data-in-transit), serta pemenuhan hak-hak subjek data (akses, koreksi, dan penghapusan).',
      5: 'Dilakukan audit kepatuhan PDP berkala oleh auditor independen, SOP dan simulasi penanganan insiden kebocoran data pribadi (notifikasi maks 3x24 jam), serta sertifikasi resmi bagi pejabat DPO.'
    },
    evidenceByLevel: {
      1: `Dokumen Bukti Level 1 (Rintisan):
1. Belum terdapat klausul kerahasiaan data pribadi pada formulir pengumpulan data warga.`,
      2: `Dokumen Bukti Level 2 (Terkelola):
1. Ketentuan syarat dan ketentuan (Terms & Conditions) sederhana pada website instansi tanpa rincian hak subjek data.`,
      3: `Dokumen Bukti Level 3 (Terstandarisasi):
1. Keputusan Pimpinan Instansi tentang Penunjukan Pejabat Pelindung Data Pribadi (DPO / Data Protection Officer).
2. Dokumen Kebijakan & SOP Pemrosesan, Penyimpanan, dan Penghapusan Data Pribadi.
3. Format Lembar Persetujuan (Explicit Consent Form) pada seluruh aplikasi layanan masyarakat.`,
      4: `Dokumen Bukti Level 4 (Terpadu):
1. Dokumen Penilaian Dampak Pelindungan Data Pribadi (Data Protection Impact Assessment / DPIA) pada sistem kritikal.
2. Bukti teknis enkripsi data pribadi (NIK, Rekam Medis, Biometrik) pada basis data (Data-at-rest & Data-in-transit).
3. Fitur permohonan penghapusan/perbaikan data oleh subjek data (Hak Pemilik Data).`,
      5: `Dokumen Bukti Level 5 (Optimum):
1. Laporan Audit Kepatuhan PDP Eksternal independen tahunan.
2. SOP dan simulasi notifikasi kebocoran data pribadi (maksimal 3x24 jam ke otoritas PDP dan subjek data).
3. Sertifikasi personel DPO dari lembaga tersertifikasi resmi.`
    },
    evidenceNarration: `Data dukung meliputi SK Penunjukan DPO, Dokumen SOP Pemrosesan Data Pribadi, Laporan DPIA, Bukti Enkripsi Database NIK/KTP, dan SOP Notifikasi Kebocoran PDP.`,
    evidenceChecklist: [
      { id: 'c8-1', label: 'SK Penunjukan Pejabat Pelindung Data Pribadi (DPO) Instansi', required: true, minLevel: 3 },
      { id: 'c8-2', label: 'Dokumen SOP Tata Kelola Pemrosesan dan Retensi Data Pribadi', required: true, minLevel: 3 },
      { id: 'c8-3', label: 'Laporan Penilaian Dampak Pelindungan Data Pribadi (DPIA)', required: true, minLevel: 4 },
      { id: 'c8-4', label: 'Laporan Audit Kepatuhan PDP dan Sertifikasi Petugas DPO', required: false, minLevel: 5 }
    ],
    tips: 'PermenPANRB 8/2026 sangat mengedepankan aspek PDP; pastikan SK DPO dan formulir explicit consent tersedia di seluruh portal layanan.'
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
    description: 'Menilai pelaksanaan audit kepatuhan keamanan dan uji penetrasi kerentanan (Vulnerability Assessment & Penetration Testing / VAPT) pada aplikasi dan server pemerintah digital.',
    criteria: {
      1: 'Belum pernah dilakukan audit keamanan sistem informasi maupun uji kerentanan pada aplikasi dan infrastruktur digital.',
      2: 'Uji kerentanan dilakukan secara mandiri oleh tim teknis internal tanpa metodologi standar dan tanpa sertifikasi auditor.',
      3: 'Telah dilaksanakan audit keamanan dan Vulnerability Assessment & Penetration Testing (VAPT) secara resmi oleh BSSN atau Auditor Tersertifikasi (CISA/CEH) terhadap seluruh aplikasi strategis instansi.',
      4: 'Seluruh temuan kerentanan (vulnerability) kategori Critical dan High telah diselesaikan secara tuntas (remediasi/patching) dan dibuktikan dengan Berita Acara Uji Ulang (Re-test Sign-off) yang berstatus bebas celah kritis.',
      5: 'Audit keamanan dilaksanakan secara berkala terjadwal (minimal setahun sekali), instansi memiliki Sertifikat ISO/IEC 27001 yang aktif berlaku, dan mengintegrasikan automated security testing (DevSecOps) dalam siklus rilis aplikasi.'
    },
    evidenceByLevel: {
      1: `Dokumen Bukti Level 1 (Rintisan):
1. Log antivirus pada workstation tanpa audit sistem terpusat.`,
      2: `Dokumen Bukti Level 2 (Terkelola):
1. Rekap hasil scan otomatis tools scanner gratisan oleh internal tanpa laporan formal dan tanda tangan auditor.`,
      3: `Dokumen Bukti Level 3 (Terstandarisasi):
1. Laporan Resmi Hasil Vulnerability Assessment & Penetration Testing (VAPT Report) dari BSSN atau Auditor Bersertifikat (CISA/CEH).
2. Surat Perintah Tugas / Kontrak Kerja pelaksanaan audit keamanan TIK.
3. Matriks klasifikasi temuan kerentanan berstandar OWASP Top 10.`,
      4: `Dokumen Bukti Level 4 (Terpadu):
1. Lembar Hasil Tindak Lanjut (LHTL) atau Laporan Remediasi Penutupan Celah Keamanan.
2. Berita Acara Re-Test Sign-off yang menyatakan seluruh celah kategori Critical dan High telah ditutup (Status: Closed/Patched).
3. Surat Rekomendasi Keamanan dari BSSN.`,
      5: `Dokumen Bukti Level 5 (Optimum):
1. Sertifikat ISO/IEC 27001 Sistem Manajemen Keamanan Informasi yang masih berlaku aktif.
2. Laporan audit surveilans ISO tahunan dan audit kepatuhan regulasi keamanan siber.
3. Penerapan automated security testing (DevSecOps) pada siklus pengembangan aplikasi.`
    },
    evidenceNarration: `Bukti wajib: Laporan VAPT Resmi Auditor/BSSN, Matriks Remediasi Kerentanan, Berita Acara Retest Sign-off bebas bug kritis, dan Sertifikat ISO 27001.`,
    evidenceChecklist: [
      { id: 'c9-1', label: 'Laporan Resmi Hasil VAPT dari BSSN atau Auditor Tersertifikasi', required: true, minLevel: 3 },
      { id: 'c9-2', label: 'Matriks Lembar Hasil Tindak Lanjut (LHTL) Penutupan Bug', required: true, minLevel: 4 },
      { id: 'c9-3', label: 'Berita Acara Uji Ulang (Re-test Sign-off) Bebas Kerentanan Kritis', required: true, minLevel: 4 },
      { id: 'c9-4', label: 'Sertifikat ISO/IEC 27001 yang aktif berlaku', required: false, minLevel: 5 }
    ],
    tips: 'Pastikan laporan VAPT mencantumkan metode pengujian (OWASP Top 10) dan bukti penutupan celah berstatus "Closed/Patched".'
  },
  {
    id: 'ind-10',
    number: 10,
    code: 'IND-10',
    name: 'Tingkat Kematangan Keamanan Pemerintah Digital',
    domainId: 'aspek-4',
    domainName: 'Keamanan Pemerintah Digital',
    aspectName: 'SMKI & Indeks KAMI BSSN',
    weight: 4,
    description: 'Menilai implementasi Sistem Manajemen Keamanan Informasi (SMKI) dan tingkat kesiapan keamanan informasi berdasarkan Indeks Keamanan Informasi (Indeks KAMI) BSSN.',
    criteria: {
      1: 'Belum memiliki kerangka kerja manajemen keamanan informasi dan pengamanan hanya sebatas firewall bawaan.',
      2: 'Telah ada himbauan keamanan dan pengaturan kata sandi, namun belum dituangkan dalam regulasi formal yang komprehensif.',
      3: 'Telah ditetapkan Peraturan Pimpinan Instansi tentang Kebijakan Sistem Manajemen Keamanan Informasi (SMKI), SOP Manajemen Hak Akses, serta telah melaksanakan Asesmen Indeks Keamanan Informasi (Indeks KAMI) BSSN.',
      4: 'Hasil evaluasi Indeks KAMI BSSN mencapai status tingkat kesiapan "Baik" / "Tinggi", diterapkan segmentasi jaringan zona aman, dan pengamanan autentikasi Multi-Factor Authentication (MFA) pada seluruh akses administrator sistem.',
      5: 'Kebijakan SMKI dievaluasi berkala, penerapan arsitektur keamanan Zero Trust (Zero Trust Architecture / ZTA), nihil insiden keamanan mayor (zero major incident), dan peningkatan berkelanjutan skor Indeks KAMI.'
    },
    evidenceByLevel: {
      1: `Dokumen Bukti Level 1 (Rintisan):
1. Tidak ada dokumen regulasi atau kebijakan keamanan tertulis.`,
      2: `Dokumen Bukti Level 2 (Terkelola):
1. Himbauan pergantian password berkala di lingkungan kantor.`,
      3: `Dokumen Bukti Level 3 (Terstandarisasi):
1. Salinan Peraturan Pimpinan Instansi tentang Kebijakan Sistem Manajemen Keamanan Informasi (SMKI).
2. Dokumen Hasil Pengisian dan Asesmen Indeks Keamanan Informasi (Indeks KAMI) BSSN.
3. SOP Pengelolaan Hak Akses, SOP Backup Data, dan SOP Pengamanan Fisik Ruang Server.`,
      4: `Dokumen Bukti Level 4 (Terpadu):
1. Piagam / Surat Hasil Penilaian Indeks KAMI dari BSSN dengan status "Kesiapan Baik".
2. Bukti penerapan segmentasi jaringan zona aman (DMZ) dan Multi-Factor Authentication (MFA) pada seluruh akses admin.`,
      5: `Dokumen Bukti Level 5 (Optimum):
1. Dokumen Arsitektur Keamanan Zero Trust (ZTA) yang diimplementasikan penuh.
2. Laporan reviu manajemen tahunan SMKI dan peningkatan skor Indeks KAMI secara konsisten.`
    },
    evidenceNarration: `Data dukung meliputi Peraturan Kebijakan SMKI, Dokumen Asesmen Indeks KAMI BSSN, SOP Hak Akses & MFA, dan Piagam Sertifikasi Kesiapan Keamanan BSSN.`,
    evidenceChecklist: [
      { id: 'c10-1', label: 'Peraturan Pimpinan Instansi tentang Kebijakan SMKI', required: true, minLevel: 3 },
      { id: 'c10-2', label: 'Dokumen Asesmen Lengkap Indeks KAMI BSSN', required: true, minLevel: 3 },
      { id: 'c10-3', label: 'Piagam Hasil Evaluasi Indeks KAMI dari BSSN (Kesiapan Baik)', required: true, minLevel: 4 },
      { id: 'c10-4', label: 'Laporan Audit Kepatuhan SMKI dan Zero Trust Implementation', required: false, minLevel: 5 }
    ],
    tips: 'Skor Indeks KAMI yang tervalidasi BSSN dengan predikat Kesiapan Baik adalah bukti kunci untuk mencapai Level 4.'
  },
  {
    id: 'ind-11',
    number: 11,
    code: 'IND-11',
    name: 'Tingkat Kematangan Penerapan Kriptografi untuk Keamanan Data',
    domainId: 'aspek-4',
    domainName: 'Keamanan Pemerintah Digital',
    aspectName: 'Kriptografi & TTE BSrE',
    weight: 4,
    description: 'Menilai pemanfaatan algoritma enkripsi data sensitif, modul keamanan perangkat keras (HSM), dan pemanfaatan Tanda Tangan Elektronik (TTE) tersertifikasi Balai Sertifikasi Elektronik (BSrE) BSSN.',
    criteria: {
      1: 'Pertukaran dokumen dan persuratan dinas masih menggunakan tanda tangan basah manual tanpa penerapan kriptografi.',
      2: 'Pemanfaatan tanda tangan digital baru sebatas scan barcode/QR code gambar tanpa sertifikat digital kriptografis resmi.',
      3: 'Telah menandatangani Perjanjian Kerja Sama (PKS) pemanfaatan Sertifikat Elektronik dengan Balai Sertifikasi Elektronik (BSrE) BSSN, SK Pejabat Pengelola Sertifikat Elektronik, dan penerbitan Tanda Tangan Elektronik (TTE) bagi pejabat instansi.',
      4: 'Modul API TTE BSrE telah terintegrasi secara otomatis pada seluruh aplikasi administrasi dan layanan publik (e-Office, SIMPEG, Perizinan, Pengesahan Dokumen), serta data sensitif dienkripsi menggunakan protokol TLS 1.3 / AES-256.',
      5: 'Pemanfaatan modul keamanan perangkat keras (Hardware Security Module / HSM) tersertifikasi, otomatisasi pemantauan masa berlaku sertifikat, dan kepatuhan penuh siklus kriptografi tanpa kebocoran kunci privat.'
    },
    evidenceByLevel: {
      1: `Dokumen Bukti Level 1 (Rintisan):
1. Contoh berkas surat dinas dengan tanda tangan pulpen yang di-scan format gambar.`,
      2: `Dokumen Bukti Level 2 (Terkelola):
1. Barcode QR code sederhana yang hanya mengarahkan ke link website tanpa sertifikat digital tersertifikasi.`,
      3: `Dokumen Bukti Level 3 (Terstandarisasi):
1. Perjanjian Kerja Sama (PKS) pemanfaatan Sertifikat Elektronik antara Kepala Instansi dengan Balai Sertifikasi Elektronik (BSrE) BSSN.
2. Surat Keputusan penunjukan Pengelola Sertifikat Elektronik Instansi.
3. Sampel Dokumen Resmi bertanda tangan TTE yang tervalidasi sah di portal verifikasi BSrE/Komdigi.`,
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
    aspectName: 'CSIRT & Penanganan Krisis Siber',
    weight: 3,
    description: 'Menilai kesiapsiagaan Tim Tanggap Insiden Siber (Computer Security Incident Response Team / CSIRT), Surat Tanda Registrasi BSSN, SOP penanganan insiden, dan pelaksanaan simulasi latihan krisis siber (Cyber Drill).',
    criteria: {
      1: 'Belum ada tim tanggap insiden dan belum ada prosedur formal saat terjadi serangan siber, peretasan, atau kelumpuhan sistem.',
      2: 'Penanganan insiden dilakukan secara parsial oleh staf teknis tanpa prosedur mitigasi baku dan tanpa koordinasi eksternal.',
      3: 'Telah ditetapkan Keputusan Pimpinan Instansi tentang Pembentukan Tim Tanggap Insiden Siber (Computer Security Incident Response Team / CSIRT), SOP Penanganan dan Penanggulangan Insiden Siber, serta tersedianya kanal resmi pelaporan insiden.',
      4: 'Tim CSIRT Instansi telah mengantongi Surat Tanda Registrasi (STR) resmi dari BSSN, terhubung dan aktif berkoordinasi dengan Gov-CSIRT Nasional BSSN, serta menyelesaikan tiket aduan insiden sesuai batas waktu penanganan (Mean Time to Remediate).',
      5: 'Rutin melaksanakan simulasi penanganan krisis siber (Cyber Drill Exercise) bersama BSSN, memiliki dokumen Post-Incident Review (PIR) dan penguatan sistem berkelanjutan, serta program kesadaran keamanan siber bagi seluruh pegawai.'
    },
    evidenceByLevel: {
      1: `Dokumen Bukti Level 1 (Rintisan):
1. Catatan perbaikan web defacement secara mandiri tanpa laporan insiden resmi.`,
      2: `Dokumen Bukti Level 2 (Terkelola):
1. Nomor kontak darurat staf pengelola server jika terjadi insiden down.`,
      3: `Dokumen Bukti Level 3 (Terstandarisasi):
1. Surat Keputusan (SK) Pimpinan Instansi tentang Pembentukan Tim CSIRT Instansi.
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
    aspectName: 'Arsitektur & Kliring Aplikasi',
    weight: 5,
    description: 'Menilai tata kelola siklus pengembangan aplikasi, standarisasi arsitektur modular/API terbuka, dokumentasi kode sumber, dan mekanisme kliring untuk mencegah duplikasi aplikasi pemerintah digital.',
    criteria: {
      1: 'Pembangunan aplikasi dilakukan secara sporadis oleh masing-masing unit kerja tanpa standar arsitektur dan tanpa dokumentasi kode sumber.',
      2: 'Aplikasi dibangun oleh pihak ketiga atau unit internal namun terisolasi (silo), minim integrasi, dan belum ada mekanisme inventarisasi terpusat.',
      3: 'Telah ditetapkan Pedoman Standar Pengembangan Aplikasi Pemerintah Digital, tersedianya Buku Inventaris Aplikasi Resmi, dan kepemilikan repositori kode sumber serta dokumentasi teknis (Software Architecture Document / SAD, API Spec).',
      4: 'Aplikasi dibangun modular berbasis arsitektur microservices/cloud-native dengan API terbuka, terbebas dari duplikasi fungsi melalui mekanisme kliring aplikasi terpusat oleh Diskominfo, dan manajemen repositori terkelola di GitLab/GitHub instansi.',
      5: 'Diterapkannya otomatisasi Continuous Integration & Continuous Deployment (CI/CD), evaluasi efektivitas utilisasi aplikasi tahunan untuk konsolidasi dan penonaktifan aplikasi usang, serta kontribusi kode pada katalog berbagi pakai nasional.'
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
2. Bukti audit kliring aplikasi oleh Diskominfo untuk mencegah duplikasi aplikasi baru di perangkat daerah.
3. Arsitektur aplikasi berbasis REST API / microservices yang siap diinterkoneksikan.`,
      5: `Dokumen Bukti Level 5 (Optimum):
1. Laporan Evaluasi Efektivitas Aplikasi Tahunan (Aplikasi yang dipertahankan, dikonsolidasikan, atau dinonaktifkan).
2. Penerapan otomatisasi Continuous Integration & Continuous Deployment (CI/CD) teruji.
3. Bukti integrasi ke katalog kode sumber nasional atau berbagi pakai kode dengan instansi lain.`
    },
    evidenceNarration: `Data dukung meliputi Pedoman Pembangunan Aplikasi, Dokumen Arsitektur Teknis & API Spec, Registrasi Aplikasi Instansi, Bukti Kliring Aplikasi, dan Laporan Konsolidasi Aplikasi Usang.`,
    evidenceChecklist: [
      { id: 'c13-1', label: 'Pedoman Standar Siklus Pembangunan Aplikasi Digital Instansi', required: true, minLevel: 3 },
      { id: 'c13-2', label: 'Buku Inventaris & Dokumentasi Spesifikasi Teknis API Aplikasi', required: true, minLevel: 3 },
      { id: 'c13-3', label: 'Bukti Pelaksanaan Kliring Aplikasi (Pencegahan Duplikasi)', required: true, minLevel: 4 },
      { id: 'c13-4', label: 'Laporan Monitoring utilisasi dan konsolidasi aplikasi berkala', required: false, minLevel: 5 }
    ],
    tips: 'Tunjukkan proses kliring aplikasi: tidak ada lagi dinas yang boleh memesan aplikasi baru tanpa persetujuan tim transformasi digital.'
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
      1: 'Infrastruktur server dikelola masing-masing dinas secara fisik di ruang kerja tanpa standar keamanan dan pendingin pusat data.',
      2: 'Server perangkat daerah telah dikonsolidasikan di ruang server bersama Diskominfo, namun belum memenuhi standar teknis keandalan dan redundansi listrik.',
      3: 'Pengoperasian Pusat Data terpadu instansi dengan standar keandalan tinggi (pendingin presisi, fire suppression, genset cadangan, UPS terpusat), topologi jaringan tertutup intra pemerintah, dan SOP backup data terjadwal.',
      4: 'Aplikasi dan basis data strategis instansi telah dimigrasikan dan memanfaatkan layanan komputasi awan Pusat Data Nasional (PDN) Kementerian Komdigi sesuai arsitektur infrastruktur digital nasional.',
      5: 'Seluruh sistem kritis beroperasi di ekosistem komputasi awan dengan Disaster Recovery Plan (DRP) teruji, simulasi failover ke Disaster Recovery Center (DRC) berkala, serta efisiensi belanja infrastruktur terukur.'
    },
    evidenceByLevel: {
      1: `Dokumen Bukti Level 1 (Rintisan):
1. Foto server PC desktop yang diletakkan di ruang kerja dinas.`,
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
    tips: 'Pemanfaatan PDN Komdigi adalah faktor utama perolehan skor Level 4 pada indikator infrastruktur pemerintah digital.'
  },

  // ================= ASPEK 6: KETERPADUAN LAYANAN DIGITAL (BOBOT 15%) =================
  {
    id: 'ind-15',
    number: 15,
    code: 'IND-15',
    name: 'Keterpaduan Proses Bisnis Pemerintah Digital Lintas Unit dan Instansi',
    domainId: 'aspek-6',
    domainName: 'Keterpaduan Layanan Digital',
    aspectName: 'Proses Bisnis Terpadu',
    weight: 4,
    description: 'Menilai penyusunan dan penyelarasan peta proses bisnis instansi yang terintegrasi lintas sektor dan diselaraskan dengan Proses Bisnis Tematik Nasional.',
    criteria: {
      1: 'Proses bisnis operasional instansi belum dipetakan secara formal dan alur kerja masih berjalan manual terkotak-kotak di tiap seksi.',
      2: 'Telah disusun diagram alur kerja atau SOP teknis di beberapa bidang, namun belum terintegrasi menjadi peta proses bisnis instansi yang utuh.',
      3: 'Telah ditetapkan Peraturan Pimpinan Instansi tentang Peta Proses Bisnis Instansi yang mencakup seluruh urusan pemerintahan (Proses Inti/Core, Manajemen, dan Pendukung/Support) dengan diagram level 0, 1, dan 2 berstandar BPMN.',
      4: 'Peta proses bisnis telah terintegrasi lintas unit kerja dan diselaraskan secara penuh dengan Proses Bisnis Tematik Nasional (KemenPANRB), menghilangkan tumpang tindih birokrasi dan memudahkan layanan terpadu lintas sektor.',
      5: 'Telah dilakukan reviu dan penyederhanaan proses bisnis (Business Process Reengineering / BPR) berkala, pemangkasan tahapan birokrasi berbasis evaluasi digital, dan terbukti mempercepat waktu pemrosesan layanan publik.'
    },
    evidenceByLevel: {
      1: `Dokumen Bukti Level 1 (Rintisan):
1. Uraian tugas fungsi staf dalam format teks tanpa diagram alur proses bisnis.`,
      2: `Dokumen Bukti Level 2 (Terkelola):
1. Diagram flowchart SOP teknis pada beberapa bidang terpisah tanpa keterpaduan lintas unit.`,
      3: `Dokumen Bukti Level 3 (Terstandarisasi):
1. Salinan Peraturan Pimpinan Instansi tentang Peta Proses Bisnis Instansi.
2. Lampiran Diagram Peta Proses Bisnis Level 0, Level 1, dan Level 2 (Core, Management, Support) berstandar BPMN.
3. Berita acara penelaahan probis bersama Bagian Organisasi / Tata Laksana.`,
      4: `Dokumen Bukti Level 4 (Terpadu):
1. Bukti penyelarasan Peta Probis Instansi dengan Proses Bisnis Tematik Nasional KemenPANRB.
2. Matriks integrasi alur kerja lintas perangkat daerah (misal: keterpaduan probis perizinan dengan dinas teknis terkait).`,
      5: `Dokumen Bukti Level 5 (Optimum):
1. Laporan Hasil Reviu dan Penyederhanaan Proses Bisnis (Business Process Reengineering).
2. Bukti perbandingan pemangkasan tahapan alur birokrasi dan data percepatan durasi siklus layanan publik.`
    },
    evidenceNarration: `Data dukung meliputi Peraturan Peta Proses Bisnis Instansi, Diagram Probis Level 0-2 lengkap, Matriks Penyelarasan Probis Lintas OPD, dan Laporan Re-engineering.`,
    evidenceChecklist: [
      { id: 'c15-1', label: 'Peraturan Pimpinan Instansi tentang Peta Proses Bisnis Instansi', required: true, minLevel: 3 },
      { id: 'c15-2', label: 'Lampiran Diagram Peta Probis Level 0 s.d. Level 2 Lengkap (BPMN)', required: true, minLevel: 3 },
      { id: 'c15-3', label: 'Matriks Integrasi Proses Bisnis Lintas Perangkat Daerah', required: true, minLevel: 4 },
      { id: 'c15-4', label: 'Laporan Reviu dan Penyederhanaan Alur Birokrasi Probis', required: false, minLevel: 5 }
    ],
    tips: 'Diagram alur proses bisnis harus menggunakan notasi standar (BPMN) dan menunjukkan eliminasi bottleneck birokrasi.'
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
    description: 'Menilai keterpaduan aplikasi administrasi pemerintahan (persuratan SRIKANDI, kepegawaian SIASN, keuangan SIPD) dan integrasi sistem layanan publik terpadu.',
    criteria: {
      1: 'Aplikasi berjalan sendiri-sendiri tanpa pertukaran data otomatis.',
      2: 'Integrasi aplikasi baru dilakukan parsial secara manual melalui ekspor impor data spreadsheet.',
      3: 'Telah terintegrasi aplikasi administrasi pemerintahan internal (e-Office, kepegawaian, e-Kinerja, penganggaran) via web service/API.',
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
3. SOP integrasi sistem informasi di lingkungan instansi.`,
      4: `Dokumen Bukti Level 4 (Terpadu):
1. Log integrasi web service antara sistem kepegawaian lokal dengan SIASN BKN Nasional.
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
    tips: 'Tunjukkan bukti log transaksi sinkronisasi dua arah yang aktif dan berjalan tanpa error dengan sistem nasional.'
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
1. Portal website instansi yang hanya berisi banner gambar tautan ke web dinas lain tanpa autentikasi tunggal.`,
      3: `Dokumen Bukti Level 3 (Terstandarisasi):
1. URL resmi dan tangkapan layar Portal Layanan Terpadu (Super-App / MPP Digital Instansi).
2. Penerapan Single Sign-On (SSO) bagi masyarakat sehingga satu akun dapat mengakses seluruh layanan.
3. Regulasi Pimpinan Instansi tentang Penyelenggaraan Portal Satu Pintu Layanan Digital.`,
      4: `Dokumen Bukti Level 4 (Terpadu):
1. Bukti integrasi portal instansi dengan Platform Portal Pelayanan Publik Nasional (INA Digital).
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
      { id: 'c17-2', label: 'Regulasi Pimpinan Instansi tentang Penyelenggaraan Portal Terpadu', required: true, minLevel: 3 },
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
    tips: 'Sertakan dokumentasi endpoint API (Swagger) dan bukti Berita Acara keterhubungan dengan SPLP Nasional.'
  },

  // ================= ASPEK 7: KEPUASAN PENGGUNA LAYANAN (BOBOT 25%) =================
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
1. Nomor WhatsApp staf operator yang dicantumkan sebagai narahubung darurat tanpa sistem pencatatan tiket.`,
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
2. Integrasi sistem survei kepuasan dengan platform aduan nasional (SP4N-LAPOR!).
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
