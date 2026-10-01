// DATASET RESMI 20 INDIKATOR EVALUASI KINERJA PEMERINTAH DIGITAL
// SUMBER ACUAN TUNGGAL: PERMENPANRB NOMOR 8 TAHUN 2026 TENTANG EVALUASI KINERJA PENYELENGGARAAN PEMERINTAHAN DIGITAL
// MENGGANTIKAN DAN TIDAK MENGGUNAKAN KERANGKA SPBE PERPRES 95/98 TAHUN 2018

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
    description: 'Menilai kelembagaan, arsitektur pemerintah digital, dan peta rencana strategis transformasi digital yang memadukan seluruh proses digitalisasi di lingkungan instansi pemerintah sesuai PermenPANRB No. 8 Tahun 2026.',
    criteria: {
      1: 'Kebijakan tata kelola pemerintah digital belum diatur atau baru berupa inisiatif terfragmentasi tanpa kerangka arsitektur terpadu.',
      2: 'Telah disusun rancangan/draf kebijakan tata kelola dan arsitektur pemerintah digital instansi, namun belum ditetapkan secara resmi atau baru diuji coba pada unit percontohan.',
      3: 'Telah ditetapkan secara resmi melalui Peraturan Pimpinan Instansi (Peraturan Menteri/Kepala Lembaga/Peraturan Kepala Daerah) tentang Tata Kelola dan Arsitektur Pemerintah Digital serta Peta Rencana Strategis yang berlaku di seluruh unit kerja.',
      4: 'Arsitektur pemerintah digital instansi telah terpadu dan diselaraskan secara penuh dengan Platform Arsitektur Pemerintah Digital Nasional (INA Digital), serta diintegrasikan ke dalam dokumen perencanaan dan penganggaran (Renstra/Renja/DPA).',
      5: 'Tata kelola pemerintah digital dievaluasi secara berkala (minimal 1 kali dalam 2 tahun) berbasis audit kinerja, dilakukan perbaikan berkelanjutan, dan adaptif terhadap arah kebijakan transformasi digital nasional.'
    },
    evidenceByLevel: {
      1: `Dokumen Bukti Level 1 (Merintis) - Acuan PermenPANRB No. 8/2026:
1. [Dokumen Inisiasi] Draf konsep awal tata kelola digital atau kerangka arsitektur teknologi informasi instansi.
2. [Dokumen Administratif] Undangan, daftar hadir, dan notula rapat inisiasi pembahasan tata kelola digital internal unit TIK.
3. [Kondisi Faktual] Catatan inventarisasi inisiatif digital eksisting yang masih tersebar di unit-unit kerja tanpa keselarasan arsitektur.`,
      2: `Dokumen Bukti Level 2 (Membangun) - Acuan PermenPANRB No. 8/2026:
1. [Naskah Regulasi] Draf naskah rancangan Peraturan Pimpinan Instansi tentang Tata Kelola dan Arsitektur Pemerintah Digital Instansi.
2. [Proses Harmonisasi] Nota dinas pengajuan telaah/harmonisasi draf kebijakan ke Biro Hukum / Bagian Hukum instansi.
3. [Uji Coba Terbatas] Surat edaran atau laporan pelaksanaan uji coba tata kelola digital pada unit kerja percontohan (pilot project).`,
      3: `Dokumen Bukti Level 3 (Berkembang) - Acuan PermenPANRB No. 8/2026:
1. [Regulasi Formal] Salinan Berita Daerah / Lembaran Resmi penetapan Peraturan Pimpinan Instansi (Peraturan Menteri/Kepala Lembaga/Peraturan Kepala Daerah) tentang Tata Kelola, Arsitektur, dan Peta Rencana Pemerintah Digital.
2. [Buku Arsitektur 6 Domain] Dokumen Lampiran Utuh 6 Domain Arsitektur Pemerintah Digital (Domain Proses Bisnis, Data & Informasi, Layanan Digital, Aplikasi, Infrastruktur, dan Keamanan).
3. [SK Kelembagaan] Surat Keputusan (SK) Tim Penyelenggara Transformasi Digital Instansi yang disahkan pimpinan.
4. [Bukti Sosialisasi] Berita acara, daftar hadir, dan materi sosialisasi regulasi ke seluruh perangkat daerah / unit kerja.`,
      4: `Dokumen Bukti Level 4 (Melembaga) - Acuan PermenPANRB No. 8/2026:
1. [Keterpaduan Nasional] Bukti keterpaduan dan penyelarasan Arsitektur Instansi ke dalam Platform Arsitektur Pemerintah Digital Nasional (INA Digital).
2. [Surat Rekomendasi/Validasi] Tangkapan layar status validasi dan surat persetujuan arsitektur digital dari Kementerian PANRB.
3. [Integrasi Anggaran] Dokumen penjabaran program dan alokasi anggaran transformasi digital dalam Renstra, Renja, dan Dokumen Pelaksanaan Anggaran (DPA/RKA).`,
      5: `Dokumen Bukti Level 5 (Unggul) - Acuan PermenPANRB No. 8/2026:
1. [Laporan Evaluasi Berkala] Laporan Resmi Hasil Evaluasi dan Kaji Ulang Berkala Tata Kelola Pemerintah Digital (minimal 1 kali dalam 2 tahun) berbasis audit kinerja.
2. [Adendum Kebijakan] Dokumen adendum atau penyesuaian regulasi tata kelola berdasarkan hasil audit dan perkembangan kebijakan transformasi digital nasional.
3. [Matriks Perbaikan] Matriks tindak lanjut rekomendasi perbaikan tata kelola yang disahkan dan ditandatangani Pimpinan Instansi.`
    },
    evidenceNarration: `Data dukung wajib meliputi salinan Peraturan Resmi Kepala Daerah/Menteri tentang Tata Kelola & Arsitektur Pemerintah Digital (termasuk lampiran 6 domain), SK Tim Transformasi Digital, bukti penyelarasan ke Platform Arsitektur Nasional INA Digital, dan Laporan Evaluasi Berkala sesuai PermenPANRB No. 8 Tahun 2026.`,
    evidenceChecklist: [
      { id: 'c1-1', label: 'Peraturan Pimpinan Instansi tentang Arsitektur & Peta Rencana Pemerintah Digital', required: true, minLevel: 3 },
      { id: 'c1-2', label: 'Dokumen Lampiran 6 Domain Arsitektur Pemerintah Digital lengkap', required: true, minLevel: 3 },
      { id: 'c1-3', label: 'SK Tim Penyelenggara Transformasi Digital Instansi', required: true, minLevel: 3 },
      { id: 'c1-4', label: 'Bukti Validasi Penyelarasan pada Platform Arsitektur Digital Nasional (INA Digital)', required: true, minLevel: 4 },
      { id: 'c1-5', label: 'Laporan Evaluasi dan Reviu Berkala Tata Kelola Pemerintah Digital', required: false, minLevel: 5 }
    ],
    tips: 'Sesuai PermenPANRB 8/2026, pastikan regulasi telah resmi diundangkan dan telah tervalidasi pada Platform Arsitektur Pemerintah Digital Nasional (INA Digital).'
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
    description: 'Menilai penerapan manajemen risiko, manajemen perubahan, manajemen aset digital, dan service desk operasional layanan digital pemerintah berbasis standar sesuai PermenPANRB No. 8 Tahun 2026.',
    criteria: {
      1: 'Manajemen layanan digital (risiko, perubahan, aset, gangguan) dilakukan secara reaktif dan ad-hoc tanpa prosedur terdokumentasi.',
      2: 'Telah ada rancangan SOP manajemen layanan dan identifikasi risiko digital, namun penerapannya masih parsial dan belum seragam di seluruh unit kerja.',
      3: 'Telah ditetapkan Keputusan/Peraturan Pimpinan Instansi tentang SOP Manajemen Layanan Digital, Register Risiko Digital beserta Rencana Penanganan (Risk Treatment Plan), dan SOP Manajemen Perubahan Sistem di seluruh lingkungan instansi.',
      4: 'Manajemen layanan digital telah diterapkan secara terpadu melalui Service Desk terintegrasi, pemantauan mitigasi risiko dilakukan periodik, dan pemenuhan Service Level Agreement (SLA) terpantau sistem.',
      5: 'Manajemen layanan digital telah melalui audit efektivitas berkala (standar ISO 20000 / ISO 31000), dilakukan perbaikan berkesinambungan (Continual Service Improvement), dan memiliki ketahanan operasional tinggi.'
    },
    evidenceByLevel: {
      1: `Dokumen Bukti Level 1 (Merintis) - Acuan PermenPANRB No. 8/2026:
1. [Catatan Operasional] Catatan penanganan kendala server atau aplikasi yang bersifat insidental dan reaktif.
2. [Pencatatan Insiden] Log pencatatan gangguan manual pada buku agenda tanpa format standar dan tanpa mitigasi risiko formal.`,
      2: `Dokumen Bukti Level 2 (Membangun) - Acuan PermenPANRB No. 8/2026:
1. [Draf Pedoman] Draf panduan service desk atau rancangan SOP penanganan insiden layanan digital yang disusun unit TIK.
2. [Identifikasi Risiko Awal] Matriks identifikasi risiko digital awal pada 1-2 sistem/aplikasi prioritas instansi.
3. [Notula Pembahasan] Notula rapat penyusunan manajemen risiko dan tata kelola perubahan sistem internal.`,
      3: `Dokumen Bukti Level 3 (Berkembang) - Acuan PermenPANRB No. 8/2026:
1. [SOP Resmi] Dokumen Keputusan/Peraturan SOP Manajemen Layanan Digital & Service Desk Resmi Instansi.
2. [Register Risiko Lengkap] Formulir Register Risiko Pemerintah Digital terisi lengkap beserta Rencana Mitigasi (Risk Treatment Plan) sesuai standar ISO 31000.
3. [Manajemen Perubahan & Aset] SOP Manajemen Perubahan Sistem (Request for Change / RFC) dan SOP Manajemen Aset Digital.
4. [SK Tim Manajemen Risiko] Surat Keputusan (SK) Tim Pengelola Manajemen Risiko dan Tim Manajemen Perubahan Digital Instansi.`,
      4: `Dokumen Bukti Level 4 (Melembaga) - Acuan PermenPANRB No. 8/2026:
1. [Tangkapan Layar Sistem] Tangkapan layar sistem Service Management / Ticketing Helpdesk terpadu instansi yang aktif beroperasi.
2. [Laporan Pemantauan Risiko] Laporan pemantauan pelaksanaan mitigasi risiko digital periodik (triwulanan / semesteran).
3. [Rekapitulasi SLA] Rekapitulasi pemenuhan Service Level Agreement (SLA) waktu penyelesaian insiden layanan digital terpantau otomatis oleh sistem.`,
      5: `Dokumen Bukti Level 5 (Unggul) - Acuan PermenPANRB No. 8/2026:
1. [Laporan Audit Efektivitas] Laporan Resmi Hasil Reviu / Audit Efektivitas Manajemen Layanan dan Risiko oleh Inspektorat atau Auditor Eksternal Independen.
2. [Sertifikasi Standar] Sertifikat kesesuaian standar ISO/IEC 20000 (Service Management) atau ISO 31000 (Risk Management) yang aktif berlaku.
3. [Continual Service Improvement] Bukti implementasi perbaikan berkesinambungan (CSI) dan laporan ketahanan operasional tinggi dari kegagalan sistem (zero unplanned downtime).`
    },
    evidenceNarration: `Data dukung meliputi Dokumen SOP Manajemen Layanan Digital, Register Risiko Digital & Rencana Mitigasi, Laporan Pemantauan Risiko Periodik, dan Laporan Hasil Audit Kinerja Layanan sesuai PermenPANRB No. 8 Tahun 2026.`,
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
    description: 'Menilai perencanaan, kompetensi, literasi digital ASN, serta adopsi kecerdasan buatan (Artificial Intelligence) dan analisis data mutakhir dalam penyelenggaraan pemerintahan digital sesuai PermenPANRB No. 8 Tahun 2026.',
    criteria: {
      1: 'Peningkatan kompetensi digital ASN belum terencana dan bersifat sporadis tanpa analisis kebutuhan kompetensi.',
      2: 'Pelatihan digital telah diselenggarakan untuk sebagian staf pengelola teknis, namun belum didukung peta kompetensi terstruktur.',
      3: 'Telah ditetapkan dokumen Analisis Kebutuhan Pelatihan (Training Needs Analysis / TNA) Digital ASN, program sertifikasi kompetensi resmi (BNSP/Global), serta alokasi anggaran pengembangan SDM digital yang tertera dalam DPA.',
      4: 'ASN memanfaatkan teknologi mutakhir (Artificial Intelligence, big data analytics) dalam perumusan kebijakan/layanan, memiliki talent pool digital bersertifikasi keahlian khusus, dan program literasi digital merata.',
      5: 'Diterapkan Digital Talent Management berkelanjutan berbasis merit sistem, dilakukan evaluasi berkala dampak pemanfaatan AI terhadap efisiensi dan produktivitas birokrasi, serta melahirkan karya inovasi digital ASN.'
    },
    evidenceByLevel: {
      1: `Dokumen Bukti Level 1 (Merintis) - Acuan PermenPANRB No. 8/2026:
            1.Peta Kompetensi untuk pelaksanaan Pemerintah Digital
            2.Bukti menggunaaan aplikasi dasar dan sistem kerja digital internal
            3.Dokumentasi pelaksanaan komunitas belajar
            4.Laporan penggunaan microlearning internal(modul singkat,video e-learning sederhana .`,
      2: `Dokumen Bukti Level 2 (Membangun) - Acuan PermenPANRB No. 8/2026:
1. [Sertifikat Bimtek] Sertifikat keikutsertaan bimbingan teknis / pelatihan dasar aplikasi bagi operator perangkat daerah.
2. [Usulan Pelatihan] Formulir usulan kebutuhan pelatihan teknologi informasi dari unit kerja teknis.`,
      3: `Dokumen Bukti Level 3 (Berkembang) - Acuan PermenPANRB No. 8/2026:
1. [Dokumen TNA Digital] Dokumen Training Needs Analysis (TNA) Keahlian Digital ASN Instansi (memetakan 4 klaster ASN: Pimpinan, Teknis, Pelaksana, Pengguna).
2. [Sertifikasi Profesi] Salinan Sertifikat Kompetensi Profesi BNSP atau Sertifikasi Global (Cloud, Cyber Security, Data Science, Software Engineering) milik ASN.
3. [Alokasi DPA] Lembar Dokumen Pelaksanaan Anggaran (DPA/RKA) yang memuat alokasi anggaran pengembangan SDM digital.`,
      4: `Dokumen Bukti Level 4 (Melembaga) - Acuan PermenPANRB No. 8/2026:
1. [Laporan Adopsi AI/Data] Laporan implementasi pemanfaatan Artificial Intelligence (AI) dan data analytics oleh ASN dalam perumusan kebijakan dan layanan operasional.
2. [SK Tim Digital Squad] Surat Keputusan (SK) Tim Pengembang Digital (In-house Software Engineer / Data Analyst / Digital Squad / AI Lab).
3. [Indeks Literasi Digital] Laporan pengukuran Indeks Literasi Digital ASN instansi yang menunjukkan pencapaian merata.`,
      5: `Dokumen Bukti Level 5 (Unggul) - Acuan PermenPANRB No. 8/2026:
1. [Evaluasi Dampak AI] Laporan evaluasi berkala efisiensi jam kerja dan peningkatan produktivitas birokrasi pasca adopsi AI dan data analytics.
2. [Sistem Merit ASN Digital] Sistem Digital Talent Management berbasis merit system dengan jenjang karier ASN bidang digital.
3. [Karya Inovasi Mandiri] Portofolio karya inovasi teknologi digital yang dikembangkan secara mandiri (in-house) oleh ASN instansi.`
    },
    evidenceNarration: `Data dukung meliputi Dokumen TNA Digital ASN, Sertifikat Kompetensi Keahlian Profesi, Bukti Pemanfaatan Artificial Intelligence / Data Analytics oleh ASN, dan Evaluasi Produktivitas SDM Digital sesuai PermenPANRB No. 8 Tahun 2026.`,
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
    description: 'Menilai sinergi, kemitraan strategis, dan berbagi pakai kapabilitas dengan instansi pemerintah lain, akademisi/perguruan tinggi, BUMN/swasta, dan komunitas digital sesuai PermenPANRB No. 8 Tahun 2026.',
    criteria: {
      1: 'Inisiatif digital berjalan terkotak-kotak (silo) tanpa adanya kemitraan eksternal.',
      2: 'Terdapat inisiasi kerja sama digital dengan pihak eksternal, namun belum dituangkan dalam naskah perjanjian kerja sama formal yang mengikat.',
      3: 'Telah ditetapkan naskah Perjanjian Kerja Sama (PKS) atau MoU kolaborasi digital lintas sektor (antarinstansi pemerintah, perguruan tinggi/akademisi, BUMN/swasta, atau komunitas) yang memuat hak, kewajiban, dan rencana aksi konkret.',
      4: 'Kolaborasi digital berjalan aktif melalui pemanfaatan platform bersama, co-creation solusi layanan digital, pertukaran keahlian, atau berbagi pakai infrastruktur digital antardaerah/antarlembaga.',
      5: 'Kolaborasi dievaluasi kinerjanya secara berkala, menghasilkan efisiensi belanja teknologi dan replikasi solusi secara nasional, serta adaptif terhadap ekosistem inovasi terbuka (open government ecosystem).'
    },
    evidenceByLevel: {
      1: `Dokumen Bukti Level 1 (Merintis) - Acuan PermenPANRB No. 8/2026:
1. [Catatan Internal] Notula rapat diskusi internal penjajakan kerja sama awal tanpa naskah tertulis dengan pihak eksternal.
2. [Kondisi Faktual] Dokumentasi sistem yang masih beroperasi terisolasi (silo) di internal instansi.`,
      2: `Dokumen Bukti Level 2 (Membangun) - Acuan PermenPANRB No. 8/2026:
1. [MoU Umum] Naskah nota kesepahaman (MoU) umum / surat minat kemitraan (Letter of Intent) yang belum dilengkapi rincian PKS teknis operasional.
2. [Notula Diskusi Mitra] Notula rapat bersama pihak eksternal (kampus/BUMN/instansi lain) tentang rencana kerja sama digital.`,
      3: `Dokumen Bukti Level 3 (Berkembang) - Acuan PermenPANRB No. 8/2026:
1. [Naskah PKS Resmi] Salinan resmi Perjanjian Kerja Sama (PKS) Kolaborasi Digital lintas sektor yang sah ditandatangani para pihak.
2. [KAK & Rencana Aksi] Dokumen Kerangka Acuan Kerja (KAK) dan rencana aksi kemitraan digital bersama yang memuat hak, kewajiban, dan timeline implementasi.
3. [SK Tim Kerja Bersama] Surat Keputusan (SK) Tim Kerja Bersama Pelaksana Kolaborasi Digital.`,
      4: `Dokumen Bukti Level 4 (Melembaga) - Acuan PermenPANRB No. 8/2026:
1. [Laporan Pelaksanaan Program] Laporan pelaksanaan program kolaborasi digital aktif (misal: Digital Innovation Lab, co-development aplikasi, sharing infrastruktur antardaerah).
2. [Bukti Adopsi Bersama] Bukti adopsi bersama solusi digital hasil kemitraan atau pemanfaatan platform bersama antardaerah/antarinstansi.
3. [Transfer of Knowledge] Dokumentasi alih pengetahuan dan workshop peningkatan kapasitas antar-mitra kerja sama.`,
      5: `Dokumen Bukti Level 5 (Unggul) - Acuan PermenPANRB No. 8/2026:
1. [Laporan Evaluasi Dampak] Laporan Resmi Evaluasi Kemitraan Digital yang memuat analisis cost-benefit dan efisiensi anggaran belanja TIK.
2. [Model Replikasi Nasional] Model replikasi solusi digital kolaboratif yang diadopsi oleh instansi pemerintah lain pada tingkat nasional.
3. [Pengakuan Publik] Piagam penghargaan atau pengakuan publik atas keberhasilan inovasi kolaboratif berbasis ekosistem terbuka (open government ecosystem).`
    },
    evidenceNarration: `Data dukung meliputi Naskah PKS Kolaborasi Digital Resmi, Bukti Kegiatan Co-creation / Sharing Solusi Digital, dan Laporan Evaluasi Efisiensi Anggaran Kemitraan sesuai PermenPANRB No. 8 Tahun 2026.`,
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
    description: 'Menilai implementasi tata kelola data: peran Walidata, Produsen Data, penegakan prinsip Satu Data (standar data, metadata, interoperabilitas, kode referensi), serta keterhubungan ke Portal Data Nasional sesuai PermenPANRB No. 8 Tahun 2026.',
    criteria: {
      1: 'Pengelolaan data dilakukan secara terpisah di masing-masing perangkat daerah tanpa struktur kelembagaan Satu Data.',
      2: 'Telah ada penunjukan Walidata, namun belum memiliki pedoman standar data, struktur metadata, dan forum satu data formal.',
      3: 'Telah ditetapkan Peraturan Pimpinan Instansi tentang Penyelenggaraan Satu Data, SK Forum Satu Data (Pembina Data, Walidata, Produsen Data), serta petunjuk teknis Standar Data, Metadata Baku, dan Interoperabilitas Data.',
      4: 'Seluruh dataset prioritas instansi telah tervalidasi memenuhi prinsip Satu Data Indonesia, terhubung secara otomatis via API dengan Portal Satu Data Indonesia Nasional (data.go.id), dan memiliki Daftar Data resmi yang disahkan Forum Satu Data.',
      5: 'Diterapkan tata kelola pembersihan data (data cleansing) otomatis secara berkala, audit kualitas data (Data Quality Assessment), serta pemanfaatan data terpadu untuk analitik preskriptif dan kebijakan berbasis bukti (Evidence-Based Policymaking).'
    },
    evidenceByLevel: {
      1: `Dokumen Bukti Level 1 (Merintis) - Acuan PermenPANRB No. 8/2026:
1. [Data Spreadsheet Terpisah] Kumpulan rekapitulasi data format spreadsheet (.xlsx/.csv) lokal di masing-masing unit kerja tanpa keterpaduan.
2. [Kondisi Faktual] Belum ada kelembagaan pengelola data resmi (Walidata / Forum Data) di instansi.`,
      2: `Dokumen Bukti Level 2 (Membangun) - Acuan PermenPANRB No. 8/2026:
1. [SK Penunjukan Awal] SK Penunjukan Walidata (Dinas Kominfo/Biro Terkait) tanpa penetapan Produsen Data dan Forum Satu Data.
2. [Draf Standar Data] Draf awal rancangan pedoman standar data instansi yang belum diresmikan.`,
      3: `Dokumen Bukti Level 3 (Berkembang) - Acuan PermenPANRB No. 8/2026:
1. [Regulasi Satu Data] Salinan Berita Daerah / Lembaran Resmi Peraturan Pimpinan Instansi tentang Penyelenggaraan Satu Data.
2. [SK Forum Data] SK Penetapan Forum Satu Data Instansi yang memuat susunan Pembina Data, Walidata, dan Produsen Data.
3. [Pedoman Standar & Metadata] Dokumen Pedoman Standar Data, Struktur Metadata Baku (ISO 11179), dan Kode Referensi Resmi Instansi.`,
      4: `Dokumen Bukti Level 4 (Melembaga) - Acuan PermenPANRB No. 8/2026:
1. [Interkoneksi API Nasional] Bukti keterhubungan otomatis via API antara Portal Satu Data Instansi dengan Portal Satu Data Indonesia Nasional (data.go.id).
2. [Daftar Data Resmi] Dokumen Daftar Data Resmi dan Rencana Aksi Data tahunan yang disahkan dalam Berita Acara Forum Satu Data.
3. [Rekomendasi Statistik] Surat Rekomendasi Statistik resmi dari Pembina Data atas seluruh dataset prioritas instansi.`,
      5: `Dokumen Bukti Level 5 (Unggul) - Acuan PermenPANRB No. 8/2026:
1. [Data Quality Assessment] Laporan Pelaksanaan Pembersihan Data (Data Cleansing) dan Audit Kualitas Data (Data Quality Assessment) berkala.
2. [Evidence-Based Policy] Bukti pemanfaatan dataset Satu Data untuk analitik preskriptif dan kebijakan berbasis bukti (Executive Dashboard / Big Data Analytics).
3. [Tunggal Sumber Data] Penurunan tingkat inkonsistensi dan duplikasi data antarperangkat daerah hingga 0% (single source of truth).`
    },
    evidenceNarration: `Data dukung meliputi Peraturan Satu Data, SK Forum Satu Data, Daftar Data Resmi, Bukti Sinkronisasi data.go.id, dan Laporan Kualitas Data sesuai PermenPANRB No. 8 Tahun 2026.`,
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
    description: 'Menilai penyelenggaraan simpul jaringan informasi geospasial (peta digital/GIS) yang terhubung ke Jaringan Informasi Geospasial Nasional (JIGN) Badan Informasi Geospasial (BIG) sesuai PermenPANRB No. 8 Tahun 2026.',
    criteria: {
      1: 'Data geospasial berupa peta gambar statis/CAD tanpa sistem koordinat standar dan tanpa georeferensi.',
      2: 'Terdapat data spasial (Shapefile/GeoJSON) di unit tertentu namun belum terintegrasi ke dalam simpul jaringan geospasial resmi.',
      3: 'Telah ditetapkan SK Tim Simpul Jaringan Informasi Geospasial Instansi, tersedianya Geoportal Web-GIS resmi instansi yang aktif, dan metadata spasial memenuhi standar ISO 19115.',
      4: 'Simpul Jaringan Geospasial instansi telah berstatus Operasional Penuh dan terhubung secara terintegrasi dengan Jaringan Informasi Geospasial Nasional (JIGN) Badan Informasi Geospasial (BIG) melalui layanan Web Map Service (WMS/WFS).',
      5: 'Informasi geospasial dimanfaatkan optimal untuk kebijakan tata ruang digital (RDTR/KKPR), monitoring pajak daerah, mitigasi bencana terintegrasi sensor IoT, dan meraih penghargaan kinerja simpul jaringan (Bhumandala).'
    },
    evidenceByLevel: {
      1: `Dokumen Bukti Level 1 (Merintis) - Acuan PermenPANRB No. 8/2026:
1. [Peta Statis] Contoh berkas peta format gambar (JPG/PNG/PDF) atau CAD tanpa sistem koordinat georeferensi standar (WGS 84 / SRGI).
2. [Kondisi Faktual] Berkas peta lokal tanpa metadata geospasial baku.`,
      2: `Dokumen Bukti Level 2 (Membangun) - Acuan PermenPANRB No. 8/2026:
1. [Berkas Spasial Parsial] Kumpulan file Shapefile (.shp) atau GeoJSON pada dinas teknis (PUPR/Bappeda) yang belum terpublikasi pada geoportal terpusat.
2. [Draf Telaah Simpul] Draf telaah pembentukan simpul jaringan informasi geospasial instansi.`,
      3: `Dokumen Bukti Level 3 (Berkembang) - Acuan PermenPANRB No. 8/2026:
1. [SK Tim Simpul Jaringan] Surat Keputusan (SK) Pimpinan Instansi tentang Pembentukan Tim Simpul Jaringan Informasi Geospasial Instansi.
2. [Geoportal Aktif] URL resmi dan tangkapan layar Geoportal Web-GIS instansi yang aktif beroperasi (MapServer / GeoServer).
3. [Metadata Spasial ISO] Dokumen Metadata Spasial berstandar ISO 19115 pada seluruh layer peta tematik instansi.
4. [SOP Pengelolaan Spasial] SOP Pengelolaan dan Pemutakhiran Simpul Jaringan Informasi Geospasial.`,
      4: `Dokumen Bukti Level 4 (Melembaga) - Acuan PermenPANRB No. 8/2026:
1. [Keterhubungan JIGN BIG] Piagam / Surat Keterangan Keterhubungan Simpul Jaringan dari Badan Informasi Geospasial (BIG) berstatus "Operasional Penuh".
2. [Sinkronisasi Katalog Peta] Tangkapan layar status sinkronisasi katalog peta ke Portal Jaringan Informasi Geospasial Nasional (JIGN) (tanahair.indonesia.go.id).
3. [Layanan WMS/WFS Publik] Layanan Web Map Service (WMS) dan Web Feature Service (WFS) aktif yang dapat diakses publik dan antar-instansi.`,
      5: `Dokumen Bukti Level 5 (Unggul) - Acuan PermenPANRB No. 8/2026:
1. [Penghargaan Bhumandala] Piagam Penghargaan Bhumandala Award atau Laporan Evaluasi Kinerja Simpul Jaringan Kategori Terbaik dari BIG.
2. [Pemanfaatan Nyata Tata Ruang] Bukti pemanfaatan informasi geospasial real-time untuk perizinan tata ruang digital (RDTR/KKPR), monitoring PAD, serta mitigasi bencana terpadu IoT.
3. [Akurasi & Pemutakhiran] Laporan evaluasi pemutakhiran data spasial berkala dengan tingkat akurasi tinggi.`
    },
    evidenceNarration: `Data dukung meliputi SK Simpul Jaringan Geospasial, Tangkapan Layar Geoportal Web-GIS, Piagam Keterhubungan JIGN BIG, dan Layanan WMS/WFS Aktif sesuai PermenPANRB No. 8 Tahun 2026.`,
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
    description: 'Menilai penyelenggaraan statistik sektoral: perolehan rekomendasi kegiatan statistik dari BPS, penyusunan metadata statistik baku, dan hasil Evaluasi Penyelenggaraan Statistik Sektoral (EPSS) sesuai PermenPANRB No. 8 Tahun 2026.',
    criteria: {
      1: 'Pengumpulan data statistik sektoral dilakukan secara mandiri oleh dinas tanpa koordinasi dengan Pembina Data Statistik (BPS).',
      2: 'Kegiatan statistik sektoral telah direncanakan di beberapa unit, namun belum mengajukan permohonan rekomendasi statistik kepada BPS.',
      3: 'Telah ditetapkan SOP Penyelenggaraan Statistik Sektoral di lingkungan instansi, dan seluruh produsen data mengajukan rancangan kegiatan statistik sektoral kepada BPS.',
      4: 'Telah memperoleh Surat Rekomendasi Kegiatan Statistik dari BPS (melalui aplikasi Romantik BPS), menyusun Metadata Statistik lengkap (MS-Keg, MS-Var, MS-Ind), dan mempublikasikan data statistik tervalidasi di portal resmi.',
      5: 'Hasil Evaluasi Penyelenggaraan Statistik Sektoral (EPSS) meraih predikat "Baik" atau "Sangat Baik" dari BPS, dan data statistik dimanfaatkan untuk pemodelan prediktif pengentasan kemiskinan dan stunting.'
    },
    evidenceByLevel: {
      1: `Dokumen Bukti Level 1 (Merintis) - Acuan PermenPANRB No. 8/2026:
1. [Publikasi Tanpa Rekomendasi] Dokumen buku publikasi angka statistik sektoral tahunan yang disusun mandiri tanpa metodologi standar BPS.
2. [Kondisi Faktual] Formulir pengumpulan data mentah dinas tanpa verifikasi statistik resmi.`,
      2: `Dokumen Bukti Level 2 (Membangun) - Acuan PermenPANRB No. 8/2026:
1. [Rancangan Survei Mandiri] Rancangan survei statistik sektoral yang baru dibuat unit kerja teknis.
2. [Draf KAK Statistik] Draf Kerangka Acuan Kerja (KAK) kegiatan statistik sektoral yang belum diajukan rekomendasinya ke BPS.`,
      3: `Dokumen Bukti Level 3 (Berkembang) - Acuan PermenPANRB No. 8/2026:
1. [SOP Statistik Sektoral] Dokumen SOP Penyelenggaraan Statistik Sektoral di lingkungan instansi yang disahkan pimpinan.
2. [Bukti Pengajuan Romantik] Berkas tanda bukti pengajuan usulan rekomendasi kegiatan statistik sektoral kepada BPS melalui aplikasi Romantik Online BPS.
3. [KAK Survei Lengkap] Kerangka Acuan Kerja (KAK) survei statistik sektoral yang memuat rancangan metodologi, populasi, sampel, dan kuesioner.`,
      4: `Dokumen Bukti Level 4 (Melembaga) - Acuan PermenPANRB No. 8/2026:
1. [Surat Rekomendasi BPS] Salinan Surat Rekomendasi Kegiatan Statistik Resmi yang diterbitkan oleh BPS (Persetujuan Aplikasi Romantik BPS).
2. [Metadata Statistik Lengkap] Dokumen Metadata Statistik Lengkap yang disahkan BPS: Metadata Kegiatan (MS-Keg), Metadata Variabel (MS-Var), dan Metadata Indikator (MS-Ind).
3. [Publikasi Tervalidasi] Bukti publikasi dataset statistik sektoral tervalidasi pada Portal Satu Data / Website Resmi Instansi.`,
      5: `Dokumen Bukti Level 5 (Unggul) - Acuan PermenPANRB No. 8/2026:
1. [Sertifikat Nilai IPS Baik] Sertifikat Hasil Evaluasi Penyelenggaraan Statistik Sektoral (EPSS) dengan Indeks Pembangunan Statistik (IPS) berpredikat "Baik" (skor >= 2.6) atau "Sangat Baik" (skor >= 3.5) dari BPS.
2. [Pemodelan Analitik Prediktif] Bukti dokumen pemanfaatan data statistik sektoral untuk pemodelan analitik prediktif penanganan kemiskinan ekstrem, penurunan stunting, atau perencanaan makro daerah.
3. [Evaluasi Kualitas Data] Laporan evaluasi kualitas data statistik sektoral tahunan.`
    },
    evidenceNarration: `Data dukung meliputi Surat Rekomendasi Statistik Romantik BPS, Lembar Metadata Statistik (MS-Keg/Var/Ind), dan Sertifikat Nilai IPS dari BPS sesuai PermenPANRB No. 8 Tahun 2026.`,
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
    description: 'Menilai kepatuhan terhadap regulasi Pelindungan Data Pribadi: penunjukan Pejabat Pelindung Data Pribadi (DPO), SOP pemrosesan data, persetujuan eksplisit warga, dan audit kepatuhan PDP sesuai PermenPANRB No. 8 Tahun 2026.',
    criteria: {
      1: 'Belum terdapat kebijakan pelindungan data pribadi dan belum ada langkah pengamanan data subjek pada sistem informasi.',
      2: 'Telah ada klausul persetujuan (consent) sederhana pada formulir digital tertentu, namun belum ada tata kelola pemrosesan data pribadi yang komprehensif.',
      3: 'Telah ditetapkan Keputusan Pimpinan Instansi tentang Penunjukan Pejabat/Petugas Pelindung Data Pribadi (Data Protection Officer / DPO), SOP Tata Kelola Pemrosesan dan Retensi Data Pribadi, serta Lembar Persetujuan Eksplisit (Explicit Consent Form) pada seluruh aplikasi layanan.',
      4: 'Diterapkannya Penilaian Dampak Pelindungan Data Pribadi (Data Protection Impact Assessment / DPIA) pada sistem informasi strategis, enkripsi data pribadi sensitif (data-at-rest dan data-in-transit), serta pemenuhan hak-hak subjek data (akses, koreksi, dan penghapusan).',
      5: 'Dilakukan audit kepatuhan PDP berkala oleh auditor independen, SOP dan simulasi penanganan insiden kebocoran data pribadi (notifikasi maks 3x24 jam), serta sertifikasi resmi bagi pejabat DPO.'
    },
    evidenceByLevel: {
      1: `Dokumen Bukti Level 1 (Merintis) - Acuan PermenPANRB No. 8/2026:
1. [Formulir Tanpa Consent] Formulir digital pendaftaran layanan warga tanpa klausul persetujuan pemrosesan data pribadi.
2. [Kondisi Faktual] Basis data pengguna tanpa pemisahan kolom data sensitif dan tanpa enkripsi data pribadi.`,
      2: `Dokumen Bukti Level 2 (Membangun) - Acuan PermenPANRB No. 8/2026:
1. [Klausul Sederhana] Klausul syarat dan ketentuan (Terms of Service) sederhana pada beranda website instansi.
2. [Draf Consent Form] Draf naskah formulir persetujuan (consent form) yang sedang disusun unit TIK.`,
      3: `Dokumen Bukti Level 3 (Berkembang) - Acuan PermenPANRB No. 8/2026:
1. [SK Pejabat DPO] Keputusan Pimpinan Instansi tentang Penunjukan Pejabat / Petugas Pelindung Data Pribadi (Data Protection Officer / DPO) Instansi.
2. [SOP Pemrosesan PDP] Dokumen Pedoman dan SOP Tata Kelola Pemrosesan, Penyimpanan, dan Retensi Data Pribadi.
3. [Explicit Consent Form] Format Lembar Persetujuan Eksplisit (Explicit Consent Form) yang aktif diterapkan pada seluruh aplikasi layanan masyarakat.
4. [Inventaris Data RoPA] Record of Processing Activities (RoPA) inventarisasi seluruh data pribadi yang dikelola instansi.`,
      4: `Dokumen Bukti Level 4 (Melembaga) - Acuan PermenPANRB No. 8/2026:
1. [Dokumen DPIA] Dokumen Laporan Penilaian Dampak Pelindungan Data Pribadi (Data Protection Impact Assessment / DPIA) pada sistem informasi strategis/kritikal.
2. [Bukti Enkripsi Database] Bukti teknis enkripsi data pribadi spesifik (NIK, Rekam Medis, Data Keuangan, Biometrik) pada basis data (Data-at-rest & Data-in-transit).
3. [Fitur Hak Subjek Data] Fitur layanan hak subjek data (hak akses, perbaikan, penarikan persetujuan, dan penghapusan data pribadi) pada portal layanan.`,
      5: `Dokumen Bukti Level 5 (Unggul) - Acuan PermenPANRB No. 8/2026:
1. [Laporan Audit Eksternal] Laporan Resmi Hasil Audit Kepatuhan PDP Eksternal Independen Tahunan dengan predikat patuh.
2. [Simulasi Notifikasi Kebocoran] SOP dan Berita Acara Simulasi Penanganan Insiden Kebocoran Data Pribadi (notifikasi maks 3x24 jam ke lembaga otoritas PDP dan subjek data).
3. [Sertifikasi Profesi DPO] Sertifikat Kompetensi Profesi DPO resmi yang diakui secara nasional/internasional bagi pejabat DPO instansi.`
    },
    evidenceNarration: `Data dukung meliputi SK Penunjukan DPO, Dokumen SOP Pemrosesan Data Pribadi, Laporan DPIA, Bukti Enkripsi Database NIK/KTP, dan SOP Notifikasi Kebocoran PDP sesuai PermenPANRB No. 8 Tahun 2026.`,
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
    description: 'Menilai pelaksanaan audit kepatuhan keamanan dan uji penetrasi kerentanan (Vulnerability Assessment & Penetration Testing / VAPT) pada aplikasi dan server pemerintah digital sesuai PermenPANRB No. 8 Tahun 2026.',
    criteria: {
      1: 'Belum pernah dilakukan audit keamanan sistem informasi maupun uji kerentanan pada aplikasi dan infrastruktur digital.',
      2: 'Uji kerentanan dilakukan secara mandiri oleh tim teknis internal tanpa metodologi standar dan tanpa sertifikasi auditor.',
      3: 'Telah dilaksanakan audit keamanan dan Vulnerability Assessment & Penetration Testing (VAPT) secara resmi oleh BSSN atau Auditor Tersertifikasi (CISA/CEH) terhadap seluruh aplikasi strategis instansi.',
      4: 'Seluruh temuan kerentanan (vulnerability) kategori Critical dan High telah diselesaikan secara tuntas (remediasi/patching) dan dibuktikan dengan Berita Acara Uji Ulang (Re-test Sign-off) yang berstatus bebas celah kritis.',
      5: 'Audit keamanan dilaksanakan secara berkala terjadwal (minimal setahun sekali), instansi memiliki Sertifikat ISO/IEC 27001 yang aktif berlaku, dan mengintegrasikan automated security testing (DevSecOps) dalam siklus rilis aplikasi.'
    },
    evidenceByLevel: {
      1: `Dokumen Bukti Level 1 (Merintis) - Acuan PermenPANRB No. 8/2026:
1. [Catatan Antivirus] Catatan instalasi antivirus atau firewall lokal pada workstation staf pengelola.
2. [Kondisi Faktual] Belum pernah ada laporan uji penetrasi atau audit keamanan TIK resmi pada sistem instansi.`,
      2: `Dokumen Bukti Level 2 (Membangun) - Acuan PermenPANRB No. 8/2026:
1. [Hasil Scanning Mandiri] Rekapitulasi hasil pemindaian (scanning) otomatis menggunakan tools scanner gratisan oleh staf teknis internal tanpa sertifikasi.
2. [Notula Pembahasan Keamanan] Notula rapat pembahasan rencana pengujian keamanan aplikasi prioritas.`,
      3: `Dokumen Bukti Level 3 (Berkembang) - Acuan PermenPANRB No. 8/2026:
1. [Laporan Resmi VAPT] Laporan Resmi Hasil Vulnerability Assessment & Penetration Testing (VAPT Report) dari BSSN atau Auditor Eksternal Bersertifikat (CISA/CEH/OSCP).
2. [Surat Perintah / Kontrak] Surat Perintah Tugas / Perjanjian Kerja Pelaksanaan Audit Keamanan Sistem Informasi Instansi.
3. [Matriks Temuan OWASP] Matriks klasifikasi temuan kerentanan berstandar OWASP Top 10 lengkap dengan tingkat risiko (Critical, High, Medium, Low).`,
      4: `Dokumen Bukti Level 4 (Melembaga) - Acuan PermenPANRB No. 8/2026:
1. [Laporan Remediasi LHTL] Lembar Hasil Tindak Lanjut (LHTL) atau Laporan Remediasi Penutupan Celah Keamanan yang memuat bukti perbaikan kode/server.
2. [Berita Acara Retest Sign-off] Berita Acara Re-Test Sign-off dari Auditor/BSSN yang menyatakan seluruh celah kategori Critical dan High telah ditutup (Status: Closed/Patched).
3. [Rekomendasi BSSN] Surat Rekomendasi Keamanan Sistem Informasi dari BSSN.`,
      5: `Dokumen Bukti Level 5 (Unggul) - Acuan PermenPANRB No. 8/2026:
1. [Sertifikat ISO 27001] Salinan Sertifikat ISO/IEC 27001 (Sistem Manajemen Keamanan Informasi) yang masih aktif berlaku dari lembaga sertifikasi terakreditasi KAN.
2. [Surveilans ISO Tahunan] Laporan audit surveilans tahunan ISO 27001 dan audit kepatuhan regulasi keamanan siber.
3. [Automated DevSecOps] Bukti integrasi automated security testing (SAST/DAST - DevSecOps) dalam pipeline continuous deployment aplikasi.`
    },
    evidenceNarration: `Bukti wajib: Laporan VAPT Resmi Auditor/BSSN, Matriks Remediasi Kerentanan, Berita Acara Retest Sign-off bebas bug kritis, dan Sertifikat ISO 27001 sesuai PermenPANRB No. 8 Tahun 2026.`,
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
    description: 'Menilai implementasi Sistem Manajemen Keamanan Informasi (SMKI) dan tingkat kesiapan keamanan informasi berdasarkan Indeks Keamanan Informasi (Indeks KAMI) BSSN sesuai PermenPANRB No. 8 Tahun 2026.',
    criteria: {
      1: 'Belum memiliki kerangka kerja manajemen keamanan informasi dan pengamanan hanya sebatas firewall bawaan.',
      2: 'Telah ada himbauan keamanan dan pengaturan kata sandi, namun belum dituangkan dalam regulasi formal yang komprehensif.',
      3: 'Telah ditetapkan Peraturan Pimpinan Instansi tentang Kebijakan Sistem Manajemen Keamanan Informasi (SMKI), SOP Manajemen Hak Akses, serta telah melaksanakan Asesmen Indeks Keamanan Informasi (Indeks KAMI) BSSN.',
      4: 'Hasil evaluasi Indeks KAMI BSSN mencapai status tingkat kesiapan "Baik" / "Tinggi", diterapkan segmentasi jaringan zona aman, dan pengamanan autentikasi Multi-Factor Authentication (MFA) pada seluruh akses administrator sistem.',
      5: 'Kebijakan SMKI dievaluasi berkala, penerapan arsitektur keamanan Zero Trust (Zero Trust Architecture / ZTA), nihil insiden keamanan mayor (zero major incident), dan peningkatan berkelanjutan skor Indeks KAMI.'
    },
    evidenceByLevel: {
      1: `Dokumen Bukti Level 1 (Merintis) - Acuan PermenPANRB No. 8/2026:
1. [Pengaturan Firewall Dasar] Pengaturan default firewall bawaan sistem operasi server tanpa konfigurasi pengamanan khusus.
2. [Kondisi Faktual] Belum ada dokumen kebijakan tertulis mengenai keamanan informasi instansi.`,
      2: `Dokumen Bukti Level 2 (Membangun) - Acuan PermenPANRB No. 8/2026:
1. [Surat Edaran Password] Surat Edaran atau himbauan internal berkala tentang pergantian kata sandi dan kewaspadaan email phishing.
2. [Draf Kebijakan Keamanan] Draf rancangan kebijakan keamanan informasi yang disusun unit TIK.`,
      3: `Dokumen Bukti Level 3 (Berkembang) - Acuan PermenPANRB No. 8/2026:
1. [Regulasi SMKI Resmi] Salinan Peraturan Pimpinan Instansi tentang Kebijakan Sistem Manajemen Keamanan Informasi (SMKI) Instansi.
2. [Dokumen Asesmen KAMI] Dokumen Lembar Kerja Asesmen Lengkap Indeks Keamanan Informasi (Indeks KAMI) BSSN terisi lengkap.
3. [SOP Keamanan Operasional] SOP Pengelolaan Hak Akses Pengguna, SOP Pencadangan Data (Backup), dan SOP Pengamanan Fisik Ruang Server.`,
      4: `Dokumen Bukti Level 4 (Melembaga) - Acuan PermenPANRB No. 8/2026:
1. [Piagam Indeks KAMI BSSN] Piagam / Surat Hasil Penilaian Resmi Indeks KAMI dari BSSN dengan status tingkat kesiapan "Baik" / "Tinggi".
2. [Segmentasi Zona Aman DMZ] Bukti teknis implementasi segmentasi jaringan zona aman (Demilitarized Zone / DMZ) pada arsitektur jaringan.
3. [Implementasi MFA/2FA] Bukti penerapan autentikasi Multi-Factor Authentication (MFA/2FA) pada seluruh akses dashboard administrator sistem dan server.`,
      5: `Dokumen Bukti Level 5 (Unggul) - Acuan PermenPANRB No. 8/2026:
1. [Zero Trust Architecture] Dokumen Arsitektur Keamanan Zero Trust (Zero Trust Architecture / ZTA) yang telah diimplementasikan penuh.
2. [Reviu Manajemen SMKI] Laporan reviu manajemen tahunan SMKI dan grafik tren peningkatan skor Indeks KAMI secara konsisten.
3. [Zero Major Incident] Rekam jejak nihil insiden keamanan mayor (zero major cybersecurity incident) selama minimal 2 tahun terakhir.`
    },
    evidenceNarration: `Data dukung meliputi Peraturan Kebijakan SMKI, Dokumen Asesmen Indeks KAMI BSSN, SOP Hak Akses & MFA, dan Piagam Sertifikasi Kesiapan Keamanan BSSN sesuai PermenPANRB No. 8 Tahun 2026.`,
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
    description: 'Menilai pemanfaatan algoritma enkripsi data sensitif, modul keamanan perangkat keras (HSM), dan pemanfaatan Tanda Tangan Elektronik (TTE) tersertifikasi Balai Sertifikasi Elektronik (BSrE) BSSN sesuai PermenPANRB No. 8 Tahun 2026.',
    criteria: {
      1: 'Pertukaran dokumen dan persuratan dinas masih menggunakan tanda tangan basah manual tanpa penerapan kriptografi.',
      2: 'Pemanfaatan tanda tangan digital baru sebatas scan barcode/QR code gambar tanpa sertifikat digital kriptografis resmi.',
      3: 'Telah menandatangani Perjanjian Kerja Sama (PKS) pemanfaatan Sertifikat Elektronik dengan Balai Sertifikasi Elektronik (BSrE) BSSN, SK Pejabat Pengelola Sertifikat Elektronik, dan penerbitan Tanda Tangan Elektronik (TTE) bagi pejabat instansi.',
      4: 'Modul API TTE BSrE telah terintegrasi secara otomatis pada seluruh aplikasi administrasi dan layanan publik (e-Office, SIMPEG, Perizinan, Pengesahan Dokumen), serta data sensitif dienkripsi menggunakan protokol TLS 1.3 / AES-256.',
      5: 'Pemanfaatan modul keamanan perangkat keras (Hardware Security Module / HSM) tersertifikasi, otomatisasi pemantauan masa berlaku sertifikat, dan kepatuhan penuh siklus kriptografi tanpa kebocoran kunci privat.'
    },
    evidenceByLevel: {
      1: `Dokumen Bukti Level 1 (Merintis) - Acuan PermenPANRB No. 8/2026:
1. [Tanda Tangan Basah Scan] Sampel berkas persuratan dinas dengan tanda tangan manual basah menggunakan pulpen yang di-scan sebagai berkas gambar.
2. [Kondisi Faktual] Belum ada kerja sama pemanfaatan sertifikat digital resmi di instansi.`,
      2: `Dokumen Bukti Level 2 (Membangun) - Acuan PermenPANRB No. 8/2026:
1. [QR Code Gambar Statis] Sampel dokumen dinas ber-QR code gambar sederhana yang hanya mengarahkan ke link website tanpa sertifikat digital tersertifikasi.
2. [Surat Penjajakan BSrE] Surat permohonan penjajakan kerja sama pemanfaatan sertifikat elektronik ke BSrE BSSN.`,
      3: `Dokumen Bukti Level 3 (Berkembang) - Acuan PermenPANRB No. 8/2026:
1. [PKS dengan BSrE BSSN] Salinan Perjanjian Kerja Sama (PKS) pemanfaatan Sertifikat Elektronik antara Kepala Instansi dengan Balai Sertifikasi Elektronik (BSrE) BSSN.
2. [SK Pengelola TTE] Surat Keputusan (SK) Kepala Instansi tentang Penunjukan Pengelola / Administrator Sertifikat Elektronik Instansi.
3. [Sampel TTE Sah] Sampel Dokumen Resmi bertanda tangan TTE yang tervalidasi sah ("Signature Valid") pada portal verifikasi BSrE / Komdigi (tte.komdigi.go.id).
4. [SOP Sertifikat Elektronik] SOP Penerbitan, Penggunaan, dan Pencabutan Sertifikat Elektronik Instansi.`,
      4: `Dokumen Bukti Level 4 (Melembaga) - Acuan PermenPANRB No. 8/2026:
1. [Integrasi API TTE Multi-Aplikasi] Tangkapan layar dan dokumentasi integrasi modul API TTE BSrE secara otomatis pada multi-aplikasi (e-Office, SIMPEG/SIASN, Perizinan, Pengesahan Dokumen Kependudukan).
2. [Enkripsi TLS 1.3 Grade A] Bukti implementasi protokol enkripsi TLS 1.3 dengan sertifikat SSL/TLS valid grade A pada seluruh portal web instansi.
3. [Statistik Pemanfaatan TTE] Laporan rekapitulasi volume penandatanganan naskah dinas berbasis TTE bulanan oleh seluruh pejabat struktural.`,
      5: `Dokumen Bukti Level 5 (Unggul) - Acuan PermenPANRB No. 8/2026:
1. [Pemanfaatan Hardware HSM] Bukti pemanfaatan Hardware Security Module (HSM) tersertifikasi FIPS 140-2 Level 3 untuk pengamanan private key instansi.
2. [Otomatisasi Masa Berlaku] SOP dan dashboard otomatisasi audit masa kedaluwarsa sertifikat elektronik (zero certificate expiry outage).
3. [Kepatuhan Kriptografi Penuh] Laporan kepatuhan penuh siklus kriptografi tanpa ada insiden kebocoran kunci privat (zero private key compromise).`
    },
    evidenceNarration: `Data dukung meliputi PKS dengan BSrE BSSN, Sampel Dokumen Sah Terverifikasi TTE (PDF & QR), Bukti Enkripsi TLS 1.3, dan Laporan Rekapitulasi TTE sesuai PermenPANRB No. 8 Tahun 2026.`,
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
    description: 'Menilai kesiapsiagaan Tim Tanggap Insiden Siber (Computer Security Incident Response Team / CSIRT), Surat Tanda Registrasi BSSN, SOP penanganan insiden, dan pelaksanaan simulasi latihan krisis siber (Cyber Drill) sesuai PermenPANRB No. 8 Tahun 2026.',
    criteria: {
      1: 'Belum ada tim tanggap insiden dan belum ada prosedur formal saat terjadi serangan siber, peretasan, atau kelumpuhan sistem.',
      2: 'Penanganan insiden dilakukan secara parsial oleh staf teknis tanpa prosedur mitigasi baku dan tanpa koordinasi eksternal.',
      3: 'Telah ditetapkan Keputusan Pimpinan Instansi tentang Pembentukan Tim Tanggap Insiden Siber (Computer Security Incident Response Team / CSIRT), SOP Penanganan dan Penanggulangan Insiden Siber, serta tersedianya kanal resmi pelaporan insiden.',
      4: 'Tim CSIRT Instansi telah mengantongi Surat Tanda Registrasi (STR) resmi dari BSSN, terhubung dan aktif berkoordinasi dengan Gov-CSIRT Nasional BSSN, serta menyelesaikan tiket aduan insiden sesuai batas waktu penanganan (Mean Time to Remediate).',
      5: 'Rutin melaksanakan simulasi penanganan krisis siber (Cyber Drill Exercise) bersama BSSN, memiliki dokumen Post-Incident Review (PIR) dan penguatan sistem berkelanjutan, serta program kesadaran keamanan siber bagi seluruh pegawai.'
    },
    evidenceByLevel: {
      1: `Dokumen Bukti Level 1 (Merintis) - Acuan PermenPANRB No. 8/2026:
1. [Catatan Perbaikan Defacement] Catatan perbaikan mandiri saat terjadi website defacement atau kendala malware tanpa laporan resmi insiden.
2. [Kondisi Faktual] Belum ada unit atau tim khusus penanganan insiden siber.`,
      2: `Dokumen Bukti Level 2 (Membangun) - Acuan PermenPANRB No. 8/2026:
1. [Kontak Darurat Server] Daftar kontak darurat staf pengelola server jika terjadi insiden sistem down.
2. [Draf Panduan Insiden] Draf panduan penanganan insiden yang baru disusun oleh unit pengelola infrastruktur.`,
      3: `Dokumen Bukti Level 3 (Berkembang) - Acuan PermenPANRB No. 8/2026:
1. [SK Pembentukan CSIRT] Surat Keputusan (SK) Pimpinan Instansi tentang Pembentukan Tim Tanggap Insiden Siber (CSIRT) Instansi.
2. [Profil RFC 2350] Dokumen Profil CSIRT (RFC 2350) yang dipublikasikan secara resmi.
3. [SOP Penanganan Insiden] Dokumen SOP Penanganan Insiden Siber, SOP Triase Pelaporan, dan SOP Penyelamatan Bukti Digital.
4. [Kanal Pengaduan Resmi] URL dan tangkapan layar portal resmi kanal aduan insiden siber instansi (csirt.instansi.go.id).`,
      4: `Dokumen Bukti Level 4 (Melembaga) - Acuan PermenPANRB No. 8/2026:
1. [STR Resmi BSSN] Salinan Surat Tanda Registrasi (STR) CSIRT resmi yang diterbitkan oleh Badan Siber dan Sandi Negara (BSSN).
2. [Interoperabilitas Gov-CSIRT] Bukti koordinasi, interoperabilitas, dan pelaporan rutin ke Pusat Operasi Keamanan Siber Nasional (Gov-CSIRT BSSN).
3. [Penyelesaian Tiket SLA] Laporan penanganan tiket insiden siber yang diselesaikan sesuai target waktu tanggap (Mean Time to Respond < 2 jam, Mean Time to Remediate < 24 jam).`,
      5: `Dokumen Bukti Level 5 (Unggul) - Acuan PermenPANRB No. 8/2026:
1. [Simulasi Cyber Drill] Laporan Pelaksanaan Simulasi Penanganan Krisis Siber (Cyber Drill / Tabletop Exercise) gabungan dengan BSSN.
2. [Post-Incident Review] Dokumen Post-Incident Review (PIR) dan bukti hardening sistem berkelanjutan pasca insiden.
3. [Cyber Security Awareness] Laporan pelaksanaan program Cyber Security Awareness secara berkala bagi seluruh ASN instansi.`
    },
    evidenceNarration: `Data dukung meliputi SK Tim CSIRT Instansi, Surat Tanda Registrasi (STR) BSSN, SOP Penanganan Insiden, Laporan Tiket Insiden, dan Laporan Simulasi Cyber Drill sesuai PermenPANRB No. 8 Tahun 2026.`,
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
    description: 'Menilai tata kelola siklus pengembangan aplikasi, standarisasi arsitektur modular/API terbuka, dokumentasi kode sumber, dan mekanisme kliring untuk mencegah duplikasi aplikasi pemerintah digital sesuai PermenPANRB No. 8 Tahun 2026.',
    criteria: {
      1: 'Pembangunan aplikasi dilakukan secara sporadis oleh masing-masing unit kerja tanpa standar arsitektur dan tanpa dokumentasi kode sumber.',
      2: 'Aplikasi dibangun oleh pihak ketiga atau unit internal namun terisolasi (silo), minim integrasi, dan belum ada mekanisme inventarisasi terpusat.',
      3: 'Telah ditetapkan Pedoman Standar Pengembangan Aplikasi Pemerintah Digital, tersedianya Buku Inventaris Aplikasi Resmi, dan kepemilikan repositori kode sumber serta dokumentasi teknis (Software Architecture Document / SAD, API Spec).',
      4: 'Aplikasi dibangun modular berbasis arsitektur microservices/cloud-native dengan API terbuka, terbebas dari duplikasi fungsi melalui mekanisme kliring aplikasi terpusat oleh Diskominfo, dan manajemen repositori terkelola di GitLab/GitHub instansi.',
      5: 'Diterapkannya otomatisasi Continuous Integration & Continuous Deployment (CI/CD), evaluasi efektivitas utilisasi aplikasi tahunan untuk konsolidasi dan penonaktifan aplikasi usang, serta kontribusi kode pada katalog berbagi pakai nasional.'
    },
    evidenceByLevel: {
      1: `Dokumen Bukti Level 1 (Merintis) - Acuan PermenPANRB No. 8/2026:
1. [Serah Terima Tanpa Source Code] Berita acara serah terima aplikasi dari pihak ketiga tanpa kepemilikan kode sumber dan tanpa dokumentasi arsitektur teknis.
2. [Kondisi Faktual] Pembangunan aplikasi berjalan sporadis di tiap unit kerja tanpa koordinasi terpusat.`,
      2: `Dokumen Bukti Level 2 (Membangun) - Acuan PermenPANRB No. 8/2026:
1. [User Guide Parsial] Buku petunjuk penggunaan (User Guide / Manual Book) pada aplikasi-aplikasi yang berdiri sendiri.
2. [Inventarisasi Awal] Daftar inventarisasi awal aplikasi pada unit kerja teknis.`,
      3: `Dokumen Bukti Level 3 (Berkembang) - Acuan PermenPANRB No. 8/2026:
1. [Pedoman SDLC Aplikasi] Peraturan / Pedoman Pimpinan Instansi tentang Standar Siklus Pengembangan Aplikasi Pemerintah Digital (SDLC).
2. [Dokumentasi Arsitektur SAD] Dokumen Software Architecture Document (SAD), Entity Relationship Diagram (ERD), dan API Documentation (Swagger/OpenAPI).
3. [Buku Inventaris Aplikasi] Buku Induk Inventarisasi dan Registrasi Seluruh Aplikasi Resmi Instansi.
4. [Penguasaan Kode Sumber] Repositori kode sumber resmi yang sepenuhnya dikuasai oleh instansi pemerintah.`,
      4: `Dokumen Bukti Level 4 (Melembaga) - Acuan PermenPANRB No. 8/2026:
1. [Repositori Terpusat Versioning] Tangkapan layar repositori kode sumber terpusat (GitLab/GitHub resmi instansi) dengan tata kelola versioning teratur.
2. [Bukti Kliring Aplikasi] Bukti pelaksanaan kliring aplikasi oleh Diskominfo / Tim Digital (notula verifikasi pencegahan duplikasi aplikasi baru di perangkat daerah).
3. [Arsitektur Microservices API] Arsitektur aplikasi modular berbasis REST API / microservices yang siap diintegrasikan antarsistem.`,
      5: `Dokumen Bukti Level 5 (Unggul) - Acuan PermenPANRB No. 8/2026:
1. [Laporan Utilisasi & Konsolidasi] Laporan Evaluasi Efektivitas dan Utilisasi Aplikasi Tahunan (daftar aplikasi yang dipertahankan, dikonsolidasikan, atau didekomisi/dinonaktifkan).
2. [Pipeline Otomatisasi CI/CD] Bukti penerapan pipeline otomatisasi Continuous Integration & Continuous Deployment (CI/CD) yang aktif berjalan.
3. [Katalog Berbagi Pakai] Bukti kontribusi kode sumber pada katalog repositori berbagi pakai nasional atau kerja sama replikasi sistem antardaerah.`
    },
    evidenceNarration: `Data dukung meliputi Pedoman Pembangunan Aplikasi, Dokumen Arsitektur Teknis & API Spec, Registrasi Aplikasi Instansi, Bukti Kliring Aplikasi, dan Laporan Konsolidasi Aplikasi Usang sesuai PermenPANRB No. 8 Tahun 2026.`,
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
    description: 'Menilai konsolidasi ruang server ke Pusat Data Nasional (PDN) / Cloud tersertifikasi, topologi jaringan tertutup intra pemerintah, dan Disaster Recovery Plan sesuai PermenPANRB No. 8 Tahun 2026.',
    criteria: {
      1: 'Infrastruktur server dikelola masing-masing dinas secara fisik di ruang kerja tanpa standar keamanan dan pendingin pusat data.',
      2: 'Server perangkat daerah telah dikonsolidasikan di ruang server bersama Diskominfo, namun belum memenuhi standar teknis keandalan dan redundansi listrik.',
      3: 'Pengoperasian Pusat Data terpadu instansi dengan standar keandalan tinggi (pendingin presisi, fire suppression, genset cadangan, UPS terpusat), topologi jaringan tertutup intra pemerintah, dan SOP backup data terjadwal.',
      4: 'Aplikasi dan basis data strategis instansi telah dimigrasikan dan memanfaatkan layanan komputasi awan Pusat Data Nasional (PDN) Kementerian Komdigi sesuai arsitektur infrastruktur digital nasional.',
      5: 'Seluruh sistem kritis beroperasi di ekosistem komputasi awan dengan Disaster Recovery Plan (DRP) teruji, simulasi failover ke Disaster Recovery Center (DRC) berkala, serta efisiensi belanja infrastruktur terukur.'
    },
    evidenceByLevel: {
      1: `Dokumen Bukti Level 1 (Merintis) - Acuan PermenPANRB No. 8/2026:
1. [Server Ruang Kerja] Foto fisik server PC desktop yang ditempatkan di ruang kerja dinas tanpa ruang server khusus dan tanpa pendingin presisi.
2. [Kondisi Faktual] Jaringan internet terpisah di masing-masing perangkat daerah tanpa interkoneksi terpusat.`,
      2: `Dokumen Bukti Level 2 (Membangun) - Acuan PermenPANRB No. 8/2026:
1. [Berita Acara Relokasi] Berita acara konsolidasi pemindahan server fisik perangkat daerah ke ruang server bersama Diskominfo.
2. [Draf Perencanaan Jaringan] Draf perencanaan penataan jaringan intra pemerintah daerah.`,
      3: `Dokumen Bukti Level 3 (Berkembang) - Acuan PermenPANRB No. 8/2026:
1. [Topologi Jaringan Terpadu] Dokumen Topologi Pusat Data Terpadu dan Jaringan Intra Pemerintah Daerah (Fiber Optic / VPN IP).
2. [SOP DC & Jadwal Backup] SOP Operasional Data Center, SOP Pemeliharaan Ruang Server, dan Jadwal Pencadangan Data Rutin Terjadwal.
3. [Fasilitas Keamanan Fisik] Bukti fasilitas keamanan fisik ruang server (UPS tersentralisasi, genset otomatis, pendingin presisi PAC, sistem pemadam FM-200, CCTV, dan akses biometrik).`,
      4: `Dokumen Bukti Level 4 (Melembaga) - Acuan PermenPANRB No. 8/2026:
1. [Penetapan Layanan PDN] Salinan Surat Keputusan / Berita Acara Pemanfaatan Layanan Pusat Data Nasional (PDN) dari Kementerian Komdigi.
2. [Tangkapan Layar Resource PDN] Tangkapan layar alokasi dan utilisasi cloud resources (vCPU, RAM, Storage) pada portal resmi PDN Komdigi.
3. [Daftar Sistem Live PDN] Daftar seluruh aplikasi dan basis data strategis instansi yang telah live beroperasi pada infrastruktur komputasi awan PDN.`,
      5: `Dokumen Bukti Level 5 (Unggul) - Acuan PermenPANRB No. 8/2026:
1. [Dokumen DRP/BCP Disahkan] Dokumen Disaster Recovery Plan (DRP) dan Business Continuity Plan (BCP) yang telah diuji dan disahkan pimpinan.
2. [Laporan Simulasi Failover DRC] Laporan Hasil Simulasi Uji Alih Beban (Failover Simulation Test) berkala ke Disaster Recovery Center (DRC) dengan target RTO < 4 jam dan RPO < 1 jam.
3. [Analisis Efisiensi Belanja] Laporan analisis efisiensi anggaran belanja pengadaan server fisik dan efisiensi energi listrik pasca migrasi penuh ke PDN.`
    },
    evidenceNarration: `Data dukung meliputi Topologi Data Center & Jaringan, Berita Acara Pemanfaatan PDN Komdigi, SOP Backup Data, Dokumen DRC, dan Laporan Uji Failover sesuai PermenPANRB No. 8 Tahun 2026.`,
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
    description: 'Menilai penyusunan dan penyelarasan peta proses bisnis instansi yang terintegrasi lintas sektor dan diselaraskan dengan Proses Bisnis Tematik Nasional sesuai PermenPANRB No. 8 Tahun 2026.',
    criteria: {
      1: 'Proses bisnis operasional instansi belum dipetakan secara formal dan alur kerja masih berjalan manual terkotak-kotak di tiap seksi.',
      2: 'Telah disusun diagram alur kerja atau SOP teknis di beberapa bidang, namun belum terintegrasi menjadi peta proses bisnis instansi yang utuh.',
      3: 'Telah ditetapkan Peraturan Pimpinan Instansi tentang Peta Proses Bisnis Instansi yang mencakup seluruh urusan pemerintahan (Proses Inti/Core, Manajemen, dan Pendukung/Support) dengan diagram level 0, 1, dan 2 berstandar BPMN.',
      4: 'Peta proses bisnis telah terintegrasi lintas unit kerja dan diselaraskan secara penuh dengan Proses Bisnis Tematik Nasional (KemenPANRB), menghilangkan tumpang tindih birokrasi dan memudahkan layanan terpadu lintas sektor.',
      5: 'Telah dilakukan reviu dan penyederhanaan proses bisnis (Business Process Reengineering / BPR) berkala, pemangkasan tahapan birokrasi berbasis evaluasi digital, dan terbukti mempercepat waktu pemrosesan layanan publik.'
    },
    evidenceByLevel: {
      1: `Dokumen Bukti Level 1 (Merintis) - Acuan PermenPANRB No. 8/2026:
1. [Uraian Tugas Tertulis] Uraian tugas dan fungsi staf pada SK jabatan tanpa diagram alur proses kerja.
2. [Kondisi Faktual] Alur kerja operasional masih berjalan manual tanpa standarisasi proses bisnis.`,
      2: `Dokumen Bukti Level 2 (Membangun) - Acuan PermenPANRB No. 8/2026:
1. [Flowchart Parsial] Diagram flowchart SOP teknis pada beberapa bidang terpisah di unit kerja.
2. [Draf Peta Probis] Draf awal rancangan peta proses bisnis yang baru mencakup sebagian fungsi instansi.`,
      3: `Dokumen Bukti Level 3 (Berkembang) - Acuan PermenPANRB No. 8/2026:
1. [Regulasi Peta Probis] Salinan Berita Daerah / Lembaran Resmi Peraturan Pimpinan Instansi tentang Peta Proses Bisnis Instansi.
2. [Diagram BPMN Level 0-2] Dokumen Lampiran Utuh Diagram Peta Proses Bisnis Level 0, Level 1, dan Level 2 (Proses Inti, Manajemen, dan Pendukung) menggunakan notasi standar BPMN (Business Process Model and Notation).
3. [Berita Acara Asistensi] Berita acara penelaahan dan asistensi peta proses bisnis bersama Bagian Organisasi / Tata Laksana.`,
      4: `Dokumen Bukti Level 4 (Melembaga) - Acuan PermenPANRB No. 8/2026:
1. [Penyelarasan Probis Tematik] Bukti penyelarasan Peta Proses Bisnis Instansi dengan Proses Bisnis Tematik Nasional Kementerian PANRB (Pengentasan Kemiskinan, Penurunan Stunting, Investasi, dsb).
2. [Matriks Integrasi Lintas OPD] Matriks integrasi alur proses bisnis lintas perangkat daerah yang menghilangkan duplikasi tahapan dan persetujuan.
3. [Keterkaitan Aplikasi & Data] Keterkaitan antara peta probis dengan arsitektur aplikasi dan arsitektur data instansi.`,
      5: `Dokumen Bukti Level 5 (Unggul) - Acuan PermenPANRB No. 8/2026:
1. [Laporan BPR Berkala] Laporan Resmi Hasil Reviu dan Penyederhanaan Proses Bisnis (Business Process Reengineering / BPR) berkala.
2. [Matriks Pemangkasan Tahapan] Matriks komparasi pemangkasan tahapan birokrasi (sebelum vs sesudah simplifikasi probis digital).
3. [Percepatan Durasi Layanan] Data kuantitatif percepatan durasi siklus penyelesaian layanan publik (SLA layanan terpangkas signifikan).`
    },
    evidenceNarration: `Data dukung meliputi Peraturan Peta Proses Bisnis Instansi, Diagram Probis Level 0-2 lengkap, Matriks Penyelarasan Probis Lintas OPD, dan Laporan Re-engineering sesuai PermenPANRB No. 8 Tahun 2026.`,
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
    description: 'Menilai keterpaduan aplikasi administrasi pemerintahan (persuratan SRIKANDI, kepegawaian SIASN, keuangan SIPD) dan integrasi sistem layanan publik terpadu sesuai PermenPANRB No. 8 Tahun 2026.',
    criteria: {
      1: 'Aplikasi berjalan sendiri-sendiri tanpa pertukaran data otomatis.',
      2: 'Integrasi aplikasi baru dilakukan parsial secara manual melalui ekspor impor data spreadsheet.',
      3: 'Telah terintegrasi aplikasi administrasi pemerintahan internal (e-Office, kepegawaian, e-Kinerja, penganggaran) via web service/API.',
      4: 'Aplikasi internal telah terintegrasi secara otomatis via API dengan sistem aplikasi umum nasional (SIPD Kemendagri, SIASN BKN, SRIKANDI ANRI).',
      5: 'Integrasi aplikasi menyeluruh secara end-to-end dengan pemantauan otomatis performa sistem dan audit trail tanpa jeda manual.'
    },
    evidenceByLevel: {
      1: `Dokumen Bukti Level 1 (Merintis) - Acuan PermenPANRB No. 8/2026:
1. [Input Ganda Manual] Dokumentasi alur kerja di mana pegawai harus menginput ulang data yang sama pada beberapa aplikasi berbeda.
2. [Kondisi Faktual] Belum ada mekanisme pertukaran data otomatis antar-sistem.`,
      2: `Dokumen Bukti Level 2 (Membangun) - Acuan PermenPANRB No. 8/2026:
1. [Ekspor Impor CSV] Bukti pelaksanaan ekspor-impor file spreadsheet (.csv/.xlsx) secara berkala untuk memindahkan data antar dua sistem.
2. [Skrip Impor Semi-Manual] Skrip impor database semi-manual yang dijalankan berkala oleh staf teknis.`,
      3: `Dokumen Bukti Level 3 (Berkembang) - Acuan PermenPANRB No. 8/2026:
1. [Integrasi Internal API] Tangkapan layar dan dokumentasi integrasi API antarsistem administrasi internal instansi (e-Office/persuratan dengan TTE BSrE, data presensi pegawai langsung mengalir ke perhitungan tunjangan kinerja e-Kinerja).
2. [SOP Integrasi Data] Dokumen SOP Tata Kelola Integrasi Sistem Informasi di lingkungan instansi.
3. [Arsitektur Integrasi Internal] Skema arsitektur integrasi sistem informasi internal instansi.`,
      4: `Dokumen Bukti Level 4 (Melembaga) - Acuan PermenPANRB No. 8/2026:
1. [Integrasi SIASN BKN] Log transaksi web service / API aktif antara sistem kepegawaian daerah dengan SIASN BKN Nasional.
2. [Sinkronisasi SIPD-RI] Bukti sinkronisasi data perencanaan dan penganggaran daerah ke aplikasi SIPD-RI Kemendagri.
3. [Implementasi SRIKANDI] Pemanfaatan penuh aplikasi SRIKANDI Nasional oleh seluruh perangkat daerah untuk naskah dinas keluar-masuk lintas instansi.`,
      5: `Dokumen Bukti Level 5 (Unggul) - Acuan PermenPANRB No. 8/2026:
1. [Dashboard Real-Time Monitoring] Dashboard monitoring utilisasi integrasi sistem secara real-time yang memantau latensi dan keberhasilan transmisi data 24/7.
2. [Audit Trail End-to-End] Rekam jejak audit trail lengkap pada seluruh alur pertukaran data end-to-end tanpa ada intervensi manual (zero data re-entry).
3. [Evaluasi Efisiensi Waktu] Laporan evaluasi efisiensi waktu pemrosesan layanan administrasi pasca integrasi menyeluruh.`
    },
    evidenceNarration: `Data dukung meliputi Bukti Integrasi Internal Instansi, Log API dengan Sistem Nasional (SIASN, SIPD, SRIKANDI), dan Laporan Efisiensi Integrasi sesuai PermenPANRB No. 8 Tahun 2026.`,
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
    description: 'Menilai penyediaan satu pintu akses layanan digital terpadu (Portal Tunggal / Super-App / Mal Pelayanan Publik Digital) bagi ASN dan masyarakat sesuai PermenPANRB No. 8 Tahun 2026.',
    criteria: {
      1: 'Layanan digital masih tersebar di puluhan website dan aplikasi terpisah yang membingungkan masyarakat.',
      2: 'Terdapat website induk yang hanya memuat kumpulan tautan (link repository) tanpa integrasi login.',
      3: 'Telah tersedia Portal Layanan Publik Terpadu / Super-App dengan Single Sign-On (SSO) akun tunggal.',
      4: 'Portal layanan telah terintegrasi dengan Portal Pelayanan Publik Nasional (INA Digital) dan autentikasi Identitas Kependudukan Digital (IKD).',
      5: 'Portal digital adaptif berbasis kecerdasan buatan, aksesibilitas disabilitas (WCAG compliant), dan pelacakan proses layanan real-time.'
    },
    evidenceByLevel: {
      1: `Dokumen Bukti Level 1 (Merintis) - Acuan PermenPANRB No. 8/2026:
1. [Tautan Terpisah Sporadis] Rekapitulasi tautan puluhan website dinas dan aplikasi mobile terpisah yang diunduh mandiri oleh warga tanpa portal payung.
2. [Kondisi Faktual] Tidak ada sistem autentikasi terpusat; masyarakat harus mengingat banyak akun berbeda.`,
      2: `Dokumen Bukti Level 2 (Membangun) - Acuan PermenPANRB No. 8/2026:
1. [Link Repository Saja] Tangkapan layar website induk instansi yang hanya berisi banner tautan statis ke web dinas lain tanpa login terpadu.
2. [Login Parsial] Warga masih harus membuat akun berbeda pada setiap sistem perizinan/layanan.`,
      3: `Dokumen Bukti Level 3 (Berkembang) - Acuan PermenPANRB No. 8/2026:
1. [Portal Terpadu / Super-App] URL resmi dan tangkapan layar Portal Layanan Publik Terpadu (Super-App / MPP Digital Instansi).
2. [Single Sign-On SSO] Bukti implementasi Single Sign-On (SSO) akun tunggal bagi warga untuk mengakses seluruh perizinan dan layanan publik instansi.
3. [Regulasi Portal Satu Pintu] Salinan Peraturan Pimpinan Instansi tentang Penyelenggaraan Portal Satu Pintu Layanan Digital Instansi.`,
      4: `Dokumen Bukti Level 4 (Melembaga) - Acuan PermenPANRB No. 8/2026:
1. [Integrasi INA Digital Nasional] Bukti integrasi portal layanan instansi dengan Portal Pelayanan Publik Nasional (INA Digital) Kementerian PANRB.
2. [Autentikasi IKD Dukcapil] Bukti integrasi modul autentikasi login dengan Identitas Kependudukan Digital (IKD Ditjen Dukcapil Kemendagri).
3. [Payment Gateway Non-Tunai] Integrasi payment gateway terpadu pembayaran retribusi/pajak non-tunai (QRIS / Virtual Account bank).`,
      5: `Dokumen Bukti Level 5 (Unggul) - Acuan PermenPANRB No. 8/2026:
1. [Real-Time Tracking Notifikasi] Fitur pelacakan status permohonan layanan (real-time service tracking) dengan notifikasi otomatis via WhatsApp/SMS/Email.
2. [Aksesibilitas WCAG 2.1] Pemenuhan standar aksesibilitas bagi penyandang disabilitas (fitur Voice Screen Reader, teks kontras tinggi, navigasi ramah disabilitas berstandar WCAG 2.1).
3. [Evaluasi DAU & Kepuasan] Laporan evaluasi peningkatan pengguna aktif harian (Daily Active Users) dan kepuasan aksesibilitas portal.`
    },
    evidenceNarration: `Data dukung meliputi URL & Tangkapan Layar Portal Terpadu/Super-App, Regulasi Penyelenggaraan Portal, Bukti Integrasi IKD/INA Digital, dan Fitur Tracking Real-Time sesuai PermenPANRB No. 8 Tahun 2026.`,
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
    description: 'Menilai pemanfaatan Sistem Penghubung Layanan Pemerintah (SPLP) atau API Gateway resmi untuk pertukaran data antar-sistem secara otomatis sesuai PermenPANRB No. 8 Tahun 2026.',
    criteria: {
      1: 'Pertukaran data antar-sistem masih manual (ekspor file Excel/flashdisk).',
      2: 'Pertukaran data menggunakan API point-to-point ad-hoc tanpa katalog dan gateway terstandar.',
      3: 'Telah mengoperasikan Sistem Penghubung Layanan Pemerintah (SPLP) / API Gateway instansi dengan Katalog API resmi.',
      4: 'SPLP instansi telah terhubung secara operasional dengan SPLP Nasional Kementerian Komdigi untuk pertukaran data lintas K/L/D.',
      5: 'Pertukaran data melalui SPLP berjalan otomatis dengan audit trail log lengkap, pemantauan trafik 24/7, dan enkripsi payload.'
    },
    evidenceByLevel: {
      1: `Dokumen Bukti Level 1 (Merintis) - Acuan PermenPANRB No. 8/2026:
1. [Pertukaran Manual] Dokumentasi pengiriman data rekapitulasi antar-unit kerja menggunakan lampiran email atau media penyimpanan fisik (flashdisk/harddisk).
2. [Kondisi Faktual] Belum ada antarmuka API terstandar antar-aplikasi.`,
      2: `Dokumen Bukti Level 2 (Membangun) - Acuan PermenPANRB No. 8/2026:
1. [API Point-to-Point Ad-hoc] Dokumentasi script endpoint API point-to-point antar 2 sistem tanpa menggunakan API Gateway bersama.
2. [Kondisi Faktual] Belum ada buku katalog layanan berbagi pakai resmi instansi.`,
      3: `Dokumen Bukti Level 3 (Berkembang) - Acuan PermenPANRB No. 8/2026:
1. [Dashboard SPLP Instansi] Tangkapan layar antarmuka dashboard Sistem Penghubung Layanan Pemerintah (SPLP) / API Gateway resmi instansi.
2. [Katalog Layanan API] Dokumen Buku Katalog Layanan Berbagi Pakai (API Registry / Swagger Documentation) yang memuat spesifikasi endpoint, parameter, dan skema respons.
3. [SOP Interoperabilitas SPLP] Dokumen SOP Pengajuan, Pengujian, dan Integrasi Layanan Berbagi Pakai melalui SPLP.`,
      4: `Dokumen Bukti Level 4 (Melembaga) - Acuan PermenPANRB No. 8/2026:
1. [Interkoneksi SPLP Nasional] Salinan Berita Acara Interkoneksi dan Surat Penetapan Keterhubungan dengan Sistem Penghubung Layanan Pemerintah (SPLP) Nasional Kementerian Komdigi.
2. [Payload Transaksi Nyata] Sampel payload transaksi pertukaran data aktif antar-instansi pemerintah (misal: verifikasi NIK via Web Service Dukcapil melalui SPLP).
3. [PKS Berbagi Pakai Data] Naskah Perjanjian Kerja Sama (PKS) Berbagi Pakai Data Elektronik antar-instansi.`,
      5: `Dokumen Bukti Level 5 (Unggul) - Acuan PermenPANRB No. 8/2026:
1. [Audit Trail Lengkap] Log audit trail transaksi data SPLP lengkap dan otomatis (mencakup Timestamp, Source IP, Target Endpoint, Status Code 200 OK, Latensi respons ms, dan Enkripsi Payload TLS 1.3).
2. [Pemantauan Trafik & SLA] Laporan pemantauan trafik API dan pemenuhan Service Level Agreement (SLA ketersediaan gateway > 99.8%).
3. [Evaluasi Percepatan Layanan] Evaluasi berkala efisiensi waktu pemrosesan layanan publik antardaerah/antarlembaga pasca penerapan interoperabilitas SPLP.`
    },
    evidenceNarration: `Data dukung meliputi Dashboard SPLP Instansi, Buku Katalog Layanan API, Berita Acara Interkoneksi SPLP Nasional, PKS Berbagi Pakai Data, dan Log Audit Trail sesuai PermenPANRB No. 8 Tahun 2026.`,
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
    description: 'Menilai penyediaan kanal pusat bantuan pengguna (Contact Center, Live Chat AI, Panduan FAQ, Aksesibilitas Disabilitas) yang responsif menyelesaikan kendala pengguna sesuai PermenPANRB No. 8 Tahun 2026.',
    criteria: {
      1: 'Belum ada kanal bantuan resmi bagi pengguna layanan digital.',
      2: 'Kanal bantuan hanya berupa nomor telepon kantor yang hanya aktif pada jam kerja tertentu.',
      3: 'Telah tersedia Helpdesk Layanan Digital multi-kanal (WhatsApp bot, live chat, ticketing system) dengan SOP penanganan keluhan resmi.',
      4: 'Fasilitas dukungan terintegrasi dengan asisten cerdas berbasis AI yang beroperasi 24/7 dan memenuhi standar aksesibilitas inklusif disabilitas.',
      5: 'Kinerja fasilitas dukungan pengguna dievaluasi berkala dengan Response Time < 15 menit dan First Contact Resolution Rate > 90%.'
    },
    evidenceByLevel: {
      1: `Dokumen Bukti Level 1 (Merintis) - Acuan PermenPANRB No. 8/2026:
1. [Tanpa Menu Bantuan] Tangkapan layar antarmuka aplikasi layanan yang menunjukkan belum tersedianya menu bantuan atau kontak pengaduan pengguna.
2. [Kondisi Faktual] Belum ada sistem pencatatan keluhan pengguna layanan.`,
      2: `Dokumen Bukti Level 2 (Membangun) - Acuan PermenPANRB No. 8/2026:
1. [Kontak Telepon Terbatas] Tangkapan layar halaman kontak layanan yang hanya memuat nomor telepon kantor kabel atau nomor seluler darurat tanpa sistem tiket.
2. [Buku Catatan Manual] Buku register catatan aduan telepon yang dicatat manual pada buku tulis.`,
      3: `Dokumen Bukti Level 3 (Berkembang) - Acuan PermenPANRB No. 8/2026:
1. [Helpdesk Multi-Kanal] Tangkapan layar antarmuka Helpdesk / Service Desk Layanan Digital Resmi Multi-Kanal (WhatsApp Bot, Live Chat portal, dan Ticketing System).
2. [SOP Penanganan Keluhan] Dokumen SOP Penanganan Keluhan Pengguna Layanan Digital, Tingkat Eskalasi Gangguan, dan Batas Waktu Respon.
3. [Panduan Pengguna Mandiri] Ketersediaan materi panduan pengguna mandiri yang mudah diakses (FAQ interaktif, Panduan Pengguna PDF, Video Tutorial animasi).`,
      4: `Dokumen Bukti Level 4 (Melembaga) - Acuan PermenPANRB No. 8/2026:
1. [Chatbot AI Asisten 24/7] Bukti implementasi Asisten Virtual Cerdas / Chatbot AI yang mampu merespons pertanyaan pengguna secara otomatis 24 jam sehari, 7 hari seminggu.
2. [Fitur Aksesibilitas Disabilitas] Bukti pemenuhan fitur aksesibilitas bantuan bagi penyandang disabilitas (fitur Text-to-Speech, pembaca layar audio, dan antarmuka ramah disabilitas).
3. [Laporan Rekapitulasi SLA] Laporan rekapitulasi penanganan tiket keluhan dengan pemenuhan target Service Level Agreement (SLA) waktu respon.`,
      5: `Dokumen Bukti Level 5 (Unggul) - Acuan PermenPANRB No. 8/2026:
1. [Evaluasi Kinerja FCR > 90%] Laporan Resmi Evaluasi Kinerja Helpdesk berkala yang membuktikan pencapaian Response Time rata-rata < 15 menit dan First Contact Resolution (FCR) > 90%.
2. [Analisis Sentimen AI] Laporan hasil analisis sentimen percakapan pengguna berbasis AI untuk deteksi dini permasalahan sistem dan perbaikan fitur layanan.
3. [Pengakuan Pelayanan Prima] Piagam penghargaan atau pengakuan pelayanan prima dukungan pengguna dari lembaga pengawas independen / kementerian terkait.`
    },
    evidenceNarration: `Data dukung meliputi Tangkapan Layar Helpdesk Multi-Kanal, SOP Penanganan Keluhan, Chatbot AI Asisten 24/7, Fitur Aksesibilitas Disabilitas, dan Laporan Kinerja SLA Helpdesk sesuai PermenPANRB No. 8 Tahun 2026.`,
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
    description: 'Indikator berbobot tertinggi (15%): Menilai pengukuran kepuasan pengguna secara elektronik (e-SKM) otomatis pasca layanan, transparansi publikasi indeks kepuasan, dan tindak lanjut perbaikan sesuai PermenPANRB No. 8 Tahun 2026.',
    criteria: {
      1: 'Belum dilakukan pengukuran kepuasan pengguna layanan digital.',
      2: 'Survei kepuasan dilakukan manual setahun sekali secara parsial di loket kantor.',
      3: 'Telah diterapkan instrumen Survei Kepuasan Masyarakat Elektronik (e-SKM) otomatis pasca transaksi layanan digital sesuai PermenPANRB.',
      4: 'Hasil Indeks Kepuasan Pengguna Layanan Digital dipublikasikan secara real-time dan terbuka kepada masyarakat di portal resmi.',
      5: 'Hasil kepuasan dianalisis berkala, seluruh masukan/kritik ditindaklanjuti dengan rencana perbaikan nyata (Continuous Service Improvement), dan meraih predikat "Sangat Memuaskan".'
    },
    evidenceByLevel: {
      1: `Dokumen Bukti Level 1 (Merintis) - Acuan PermenPANRB No. 8/2026:
1. [Tanpa Instrumen SKM] Dokumen operasional layanan yang membuktikan belum tersedianya instrumen pengukuran kepuasan pengguna secara digital pasca transaksi.
2. [Kondisi Faktual] Evaluasi kepuasan hanya berupa asumsi internal tanpa kuesioner terstandar.`,
      2: `Dokumen Bukti Level 2 (Membangun) - Acuan PermenPANRB No. 8/2026:
1. [Kuesioner Manual / Google Form] Berkas kuesioner kertas survei kepuasan tahunan atau formulir Google Form mandiri yang disebarkan sporadis tanpa keterikatan sistem transaksi layanan.
2. [Rekapitulasi Parsial] Rekapitulasi survei kepuasan manual per tahun yang tidak mencerminkan respon riil tiap layanan digital.`,
      3: `Dokumen Bukti Level 3 (Berkembang) - Acuan PermenPANRB No. 8/2026:
1. [Modul e-SKM Otomatis] Tangkapan layar fitur modul Survei Kepuasan Masyarakat Elektronik (e-SKM) yang muncul secara otomatis (pop-up/redirect) pada layar pengguna tepat setelah menyelesaikan transaksi layanan digital.
2. [Regulasi e-SKM Resmi] Salinan Peraturan / SOP Pimpinan Instansi tentang Pelaksanaan Survei Kepuasan Masyarakat Berbasis Elektronik sesuai pedoman PermenPANRB No. 8 Tahun 2026.
3. [Laporan Resmi SKM Tahunan] Dokumen Laporan Resmi Hasil Survei Kepuasan Masyarakat (SKM) Elektronik Tahunan yang memuat analisis 9 unsur pelayanan.`,
      4: `Dokumen Bukti Level 4 (Melembaga) - Acuan PermenPANRB No. 8/2026:
1. [Widget IKM Real-Time Publik] Tangkapan layar widget nilai Indeks Kepuasan Masyarakat (IKM) yang tampil secara real-time, otomatis terbarui, dan terbuka untuk publik pada beranda portal layanan instansi.
2. [Integrasi SP4N-LAPOR!] Bukti integrasi sistem survei kepuasan dengan platform pengelolaan pengaduan pelayanan publik nasional (SP4N-LAPOR!).
3. [Predikat Nilai Sangat Baik] Rekapitulasi nilai indeks kepuasan pengguna yang mencapai kategori "Sangat Baik" (skor konversi IKM > 88.00 atau > 3.50 pada skala 4.00).`,
      5: `Dokumen Bukti Level 5 (Unggul) - Acuan PermenPANRB No. 8/2026:
1. [Rencana Aksi Perbaikan CSI] Dokumen Rencana Aksi Tindak Lanjut Perbaikan Layanan (Continuous Service Improvement) yang disusun berdasarkan ulasan kritik dan saran pengguna e-SKM.
2. [Realisasi Perbaikan Nyata] Laporan Pembuktian Realisasi Perbaikan Fitur, Tata Kelola, atau Regulasi Layanan yang telah selesai diimplementasikan pasca masukan masyarakat.
3. [Tren Kenaikan Konsisten] Data tren kenaikan nilai indeks kepuasan masyarakat secara konsisten dalam 3 tahun evaluasi berturut-turut dengan predikat "Sangat Memuaskan".`
    },
    evidenceNarration: `Data dukung meliputi Tangkapan Layar Fitur e-SKM Otomatis, Laporan Resmi Hasil Survei Kepuasan Masyarakat, Tampilan Widget Nilai Kepuasan Real-Time di Portal, dan Dokumen Tindak Lanjut Perbaikan Layanan sesuai PermenPANRB No. 8 Tahun 2026.`,
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
