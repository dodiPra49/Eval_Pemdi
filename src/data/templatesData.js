/**
 * KATALOG LENGKAP TEMPLATE BUKTI DUKUNG EVALUASI PEMERINTAHAN DIGITAL
 * PermenPANRB Nomor 8 Tahun 2026
 * 
 * Meliputi seluruh 20 Indikator (IND-01 s.d. IND-20) dalam format MS Word (.docx) & MS Excel (.xlsx)
 * Total: 52 Berkas Dokumen Siap Pakai
 */

export const TEMPLATES_DATA = [
  // IND-01
  {
    indicatorId: 'ind-01',
    indicatorCode: 'IND-01',
    indicatorName: 'Tingkat Kematangan Tata Kelola Pemerintah Digital',
    domain: 'Aspek 1: Tata Kelola dan Manajemen',
    badgeColor: 'bg-blue-100 text-blue-800 border-blue-200',
    files: [
      {
        name: 'Peraturan Kepala Daerah/Instansi tentang Arsitektur & Peta Rencana Pemdi',
        desc: 'Regulasi formal penetapan 6 domain arsitektur SPBE instansi dan inisiatif strategis 5 tahunan.',
        level: 'Standar Level 3 (Terstandarisasi)',
        format: 'DOCX',
        url: '/templates/ind_01/Template_Peraturan_Arsitektur_dan_Peta_Rencana_Pemdi_Indikator01.docx'
      },
      {
        name: 'Matriks Penyelarasan 6 Domain Arsitektur ke SIA-SPBE Nasional',
        desc: 'Kertas kerja pemetaan referensi arsitektur instansi ke platform arsitektur nasional KemenPANRB.',
        level: 'Standar Level 4 (Terpadu Nasional)',
        format: 'XLSX',
        url: '/templates/ind_01/Template_Matriks_Penyelarasan_Arsitektur_SIA_SPBE_Indikator01.xlsx'
      }
    ]
  },

  // IND-02
  {
    indicatorId: 'ind-02',
    indicatorCode: 'IND-02',
    indicatorName: 'Tingkat Kematangan Manajemen Layanan Digital Pemerintah',
    domain: 'Aspek 1: Tata Kelola dan Manajemen',
    badgeColor: 'bg-blue-100 text-blue-800 border-blue-200',
    files: [
      {
        name: 'SOP Manajemen Layanan Digital & Service Desk Terpadu',
        desc: 'Prosedur penanganan gangguan (incident), permintaan layanan, perubahan sistem (RFC) & pemenuhan SLA.',
        level: 'Standar Level 3 (Terstandarisasi)',
        format: 'DOCX',
        url: '/templates/ind_02/Template_SOP_Manajemen_Layanan_dan_Service_Desk_Indikator02.docx'
      },
      {
        name: 'Formulir Register Risiko SPBE & Rencana Mitigasi Dampak',
        desc: 'Identifikasi ancaman, kerentanan sistem, kalkulasi tingkat kemungkinan/dampak dan mitigasi ISO 31000.',
        level: 'Standar Level 3 & 4 (Terpadu)',
        format: 'XLSX',
        url: '/templates/ind_02/Template_Register_Risiko_Pemerintah_Digital_Indikator02.xlsx'
      }
    ]
  },

  // IND-03 (Lengkap 5 Berkas)
  {
    indicatorId: 'ind-03',
    indicatorCode: 'IND-03',
    indicatorName: 'Tingkat Kematangan Sumber Daya Manusia Pemerintah Digital',
    domain: 'Aspek 2: Penyelenggara (SDM & Kolaborasi)',
    badgeColor: 'bg-purple-100 text-purple-800 border-purple-200',
    files: [
      {
        name: 'Dokumen TNA & Rencana Pengembangan SDM Digital ASN',
        desc: 'Analisis Kebutuhan Pelatihan 4 klaster ASN, standar SKKNI & alokasi DPA anggaran.',
        level: 'Standar Level 3 (Terstandarisasi)',
        format: 'DOCX',
        url: '/templates/ind_03/Template_TNA_dan_Rencana_Pengembangan_SDM_Digital_Indikator03.docx'
      },
      {
        name: 'SK Tim Pengembang Digital Squad & AI Lab',
        desc: 'Surat Keputusan pimpinan pembentukan tim in-house Software Engineer, Data Scientist, AI & DevSecOps.',
        level: 'Standar Level 4 (Terpadu)',
        format: 'DOCX',
        url: '/templates/ind_03/Template_SK_Tim_Pengembang_Digital_Squad_Indikator03.docx'
      },
      {
        name: 'Laporan Pemanfaatan AI & Evaluasi Efisiensi ASN',
        desc: 'Portofolio use case GenAI naskah dinas, kalkulasi jam kerja dihemat & kepatuhan etika AI/UU PDP.',
        level: 'Standar Level 4 & 5 (Optimum)',
        format: 'DOCX',
        url: '/templates/ind_03/Template_Laporan_Pemanfaatan_AI_dan_Evaluasi_Efisiensi_Indikator03.docx'
      },
      {
        name: 'Matriks Inventarisasi Sertifikasi & Gap Kompetensi SDM',
        desc: 'Buku kerja 3 sheet: Database sertifikasi BNSP/Global, analisis gap jabatan & talent pool merit.',
        level: 'Standar Level 3 & 4',
        format: 'XLSX',
        url: '/templates/ind_03/Template_Matriks_Inventarisasi_Sertifikasi_dan_Gap_Kompetensi_SDM_Indikator03.xlsx'
      },
      {
        name: 'Monitoring Adopsi AI & Kuantifikasi Jam Kerja Efektif',
        desc: 'Pemantauan tools AI sektoral, formula matematis efisiensi waktu & audit kepatuhan etika AI.',
        level: 'Standar Level 4 & 5',
        format: 'XLSX',
        url: '/templates/ind_03/Template_Monitoring_Pemanfaatan_AI_dan_Produktivitas_ASN_Indikator03.xlsx'
      }
    ]
  },

  // IND-04
  {
    indicatorId: 'ind-04',
    indicatorCode: 'IND-04',
    indicatorName: 'Kolaborasi Penerapan Pemerintah Digital',
    domain: 'Aspek 2: Penyelenggara (SDM & Kolaborasi)',
    badgeColor: 'bg-purple-100 text-purple-800 border-purple-200',
    files: [
      {
        name: 'Nota Kesepahaman (MoU) & Kerangka Kolaborasi Pemdi Lintas Sektor',
        desc: 'Dokumen kerja sama resmi penerapan sistem terpadu, cloud sharing & capacity building antar lembaga.',
        level: 'Standar Level 3 & 4 (Terpadu)',
        format: 'DOCX',
        url: '/templates/ind_04/Template_MoU_dan_Kerangka_Kolaborasi_Digital_Indikator04.docx'
      },
      {
        name: 'Matriks Pemetaan Stakeholder & Agenda Kolaborasi Quadruple Helix',
        desc: 'Katalog mitra pemerintah, akademisi perguruan tinggi, BUMD/perbankan, dan komunitas pegiat digital.',
        level: 'Standar Level 4 & 5 (Optimum)',
        format: 'XLSX',
        url: '/templates/ind_04/Template_Matriks_Agenda_Kolaborasi_Lintas_Sektor_Indikator04.xlsx'
      }
    ]
  },

  // IND-05
  {
    indicatorId: 'ind-05',
    indicatorCode: 'IND-05',
    indicatorName: 'Satu Data Indonesia (SDI)',
    domain: 'Aspek 3: Data & Informasi',
    badgeColor: 'bg-amber-100 text-amber-800 border-amber-200',
    files: [
      {
        name: 'Surat Keputusan Forum Satu Data Indonesia & Sekretariat Daerah',
        desc: 'Penetapan Pembina Data (BPS), Walidata (Diskominfo), Walidata Pendukung & Produsen Data (OPD).',
        level: 'Standar Level 3 (Terstandarisasi)',
        format: 'DOCX',
        url: '/templates/ind_05/Template_Pedoman_dan_SK_Forum_Satu_Data_Indikator05.docx'
      },
      {
        name: 'Buku Induk Daftar Data Prioritas & Metadata Statistik SDI',
        desc: 'Katalog standar data, nama variabel, definisi operasional, klasifikasi, kode referensi & format API.',
        level: 'Standar Level 3 & 4 (Terpadu)',
        format: 'XLSX',
        url: '/templates/ind_05/Template_Buku_Induk_Daftar_Data_dan_Metadata_SDI_Indikator05.xlsx'
      }
    ]
  },

  // IND-06
  {
    indicatorId: 'ind-06',
    indicatorCode: 'IND-06',
    indicatorName: 'Penyelenggaraan Informasi Geospasial',
    domain: 'Aspek 3: Data & Informasi',
    badgeColor: 'bg-amber-100 text-amber-800 border-amber-200',
    files: [
      {
        name: 'SOP Operasionalisasi Simpul Jaringan Informasi Geospasial',
        desc: 'Prosedur pemeliharaan geoportal daerah terhubung ke Jaringan Informasi Geospasial Nasional (JIGN-BIG).',
        level: 'Standar Level 3 (Terstandarisasi)',
        format: 'DOCX',
        url: '/templates/ind_06/Template_SOP_Simpul_Jaringan_Informasi_Geospasial_Indikator06.docx'
      },
      {
        name: 'Katalog Unsur Geospasial KUGI & Status Integrasi JIGN BIG',
        desc: 'Daftar layer peta tematik (RTRW, rawan bencana, faskes, industri) dengan layanan WMS/WFS aktif.',
        level: 'Standar Level 4 & 5 (Optimum)',
        format: 'XLSX',
        url: '/templates/ind_06/Template_Katalog_Unsur_Geografis_dan_Node_Geoportal_Indikator06.xlsx'
      }
    ]
  },

  // IND-07 (Lengkap 5 Berkas)
  {
    indicatorId: 'ind-07',
    indicatorCode: 'IND-07',
    indicatorName: 'Keterpaduan Sistem Penghubung Layanan Pemerintah (SPLP)',
    domain: 'Aspek 4: Infrastruktur (Interoperabilitas Data)',
    badgeColor: 'bg-indigo-100 text-indigo-800 border-indigo-200',
    files: [
      {
        name: 'SOP Integrasi Layanan Sistem Penghubung Layanan Pemerintah (SPLP)',
        desc: 'Standar baku permohonan API, verifikasi keamanan transmisi data & SLA ketersediaan.',
        level: 'Standar Level 3 (Terstandarisasi)',
        format: 'DOCX',
        url: '/templates/ind_07/Template_SOP_Integrasi_Layanan_SPLP_Indikator07.docx'
      },
      {
        name: 'Naskah Perjanjian Kerja Sama (PKS) & NDA Pertukaran Data',
        desc: 'Format resmi PKS berbagi pakai data elektronik lintas instansi/OPD dengan klausul UU PDP.',
        level: 'Standar Level 3 & 4 (Terpadu)',
        format: 'DOCX',
        url: '/templates/ind_07/Template_PKS_Pertukaran_Data_Elektronik_SPLP_Indikator07.docx'
      },
      {
        name: 'Laporan Evaluasi Kinerja & Utilisasi SPLP Berkala',
        desc: 'Laporan reviu triwulanan/semesteran performa SPLP, throughput transaksi & ketersediaan sistem.',
        level: 'Standar Level 5 (Optimum / Monev)',
        format: 'DOCX',
        url: '/templates/ind_07/Template_Laporan_Evaluasi_Kinerja_SPLP_Indikator07.docx'
      },
      {
        name: 'Buku Katalog Layanan API & Service Registry SPLP',
        desc: 'Daftar lengkap endpoint API, parameter query, schema payload JSON & data consumer aktif.',
        level: 'Standar Level 3 & 4',
        format: 'XLSX',
        url: '/templates/ind_07/Template_Buku_Katalog_Layanan_API_SPLP_Indikator07.xlsx'
      },
      {
        name: 'Log Audit Trail Transaksi & Rekapitulasi Trafik Bulanan',
        desc: 'Pencatatan real-time HTTP response time, tracking error code & kepatuhan SLA 99.5%.',
        level: 'Standar Level 4 & 5',
        format: 'XLSX',
        url: '/templates/ind_07/Template_Log_Audit_Trail_Transaksi_SPLP_Indikator07.xlsx'
      }
    ]
  },

  // IND-08
  {
    indicatorId: 'ind-08',
    indicatorCode: 'IND-08',
    indicatorName: 'Perlindungan Data Pribadi (PDP)',
    domain: 'Aspek 3: Data & Informasi',
    badgeColor: 'bg-amber-100 text-amber-800 border-amber-200',
    files: [
      {
        name: 'Dokumen Penilaian Dampak Pelindungan Data Pribadi (DPIA)',
        desc: 'Pedoman mitigasi risiko pemrosesan data pribadi pada sistem layanan publik sesuai amanat UU No. 27/2022.',
        level: 'Standar Level 3 & 4 (Terpadu)',
        format: 'DOCX',
        url: '/templates/ind_08/Template_Kebijakan_dan_DPIA_Pelindungan_Data_Pribadi_Indikator08.docx'
      },
      {
        name: 'Matriks Record of Processing Activities (RoPA) Data Pribadi',
        desc: 'Inventarisasi kegiatan pemrosesan data, dasar hukum, kategori subjek data, retensi, dan enkripsi.',
        level: 'Standar Level 4 & 5 (Optimum)',
        format: 'XLSX',
        url: '/templates/ind_08/Template_Record_of_Processing_Activities_RoPA_PDP_Indikator08.xlsx'
      }
    ]
  },

  // IND-09
  {
    indicatorId: 'ind-09',
    indicatorCode: 'IND-09',
    indicatorName: 'Penerapan Audit Teknologi Informasi dan Komunikasi',
    domain: 'Aspek 4: Keamanan Pemerintah Digital',
    badgeColor: 'bg-rose-100 text-rose-800 border-rose-200',
    files: [
      {
        name: 'Kerangka Acuan Kerja (KAK) & Laporan Audit TIK / VAPT',
        desc: 'Panduan uji penetrasi kerentanan (VAPT), audit infrastruktur dan audit aplikasi berstandar BSSN.',
        level: 'Standar Level 3 & 4 (Terpadu)',
        format: 'DOCX',
        url: '/templates/ind_09/Template_KAK_dan_Laporan_Audit_TIK_Indikator09.docx'
      },
      {
        name: 'Matriks Temuan Audit TIK & Monitoring Tindak Lanjut',
        desc: 'Daftar temuan kerentanan (Critical/High/Med/Low), rekomendasi teknis dan verifikasi closed audit.',
        level: 'Standar Level 4 & 5 (Optimum)',
        format: 'XLSX',
        url: '/templates/ind_09/Template_Matriks_Temuan_dan_Tindak_Lanjut_Audit_TIK_Indikator09.xlsx'
      }
    ]
  },

  // IND-10
  {
    indicatorId: 'ind-10',
    indicatorCode: 'IND-10',
    indicatorName: 'Penerapan Sistem Manajemen Keamanan Informasi (SMKI)',
    domain: 'Aspek 4: Keamanan Pemerintah Digital',
    badgeColor: 'bg-rose-100 text-rose-800 border-rose-200',
    files: [
      {
        name: 'Kebijakan Sistem Manajemen Keamanan Informasi (ISO 27001)',
        desc: 'Dokumen kebijakan keamanan informasi, kontrol akses multi-faktor (MFA), sandi & penanganan insiden.',
        level: 'Standar Level 3 (Terstandarisasi)',
        format: 'DOCX',
        url: '/templates/ind_10/Template_Kebijakan_Keamanan_Informasi_dan_SOP_Insiden_Indikator10.docx'
      },
      {
        name: 'Checklist Evaluasi Kepatuhan SMKI & Indeks KAMI BSSN',
        desc: 'Kertas kerja audit internal evaluasi klausul ISO 27001:2022 dan skor tingkat kematangan Indeks KAMI.',
        level: 'Standar Level 4 & 5 (Optimum)',
        format: 'XLSX',
        url: '/templates/ind_10/Template_Checklist_Evaluasi_Kepatuhan_SMKI_ISO27001_Indikator10.xlsx'
      }
    ]
  },

  // IND-11 (Lengkap 5 Berkas)
  {
    indicatorId: 'ind-11',
    indicatorCode: 'IND-11',
    indicatorName: 'Layanan Kepegawaian Pemerintah Digital',
    domain: 'Aspek 5: Aplikasi & Layanan Kepegawaian',
    badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-200',
    files: [
      {
        name: 'SOP Layanan Kepegawaian Elektronik Instansi',
        desc: 'SOP standar pengusulan kenaikan pangkat, KGB, mutasi, dan pensiun digital.',
        level: 'Standar Level 3 (Terstandarisasi)',
        format: 'DOCX',
        url: '/templates/ind_11/Template_SOP_Layanan_Kepegawaian_Elektronik_Indikator11.docx'
      },
      {
        name: 'Berita Acara Integrasi SIMPEG Daerah dengan SIASN BKN',
        desc: 'Dokumen bukti resmi sinkronisasi web service API dua arah dengan portal BKN Pusat.',
        level: 'Standar Level 4 (Terpadu Nasional)',
        format: 'DOCX',
        url: '/templates/ind_11/Template_BA_Integrasi_SIMPEG_SIASN_BKN_Indikator11.docx'
      },
      {
        name: 'Laporan Evaluasi dan Reviu Penerapan Manajemen Talenta ASN',
        desc: 'Laporan periodik efektivitas layanan kepegawaian digital dan pemanfaatan sistem merit.',
        level: 'Standar Level 5 (Optimum)',
        format: 'DOCX',
        url: '/templates/ind_11/Template_Laporan_Evaluasi_Talenta_ASN_Indikator11.docx'
      },
      {
        name: 'Pemetaan Manajemen Talenta ASN (Nine-Box Grid Matrix)',
        desc: 'Format Excel matriks 9 kotak kinerja vs potensi talenta ASN daerah.',
        level: 'Standar Level 4 & 5',
        format: 'XLSX',
        url: '/templates/ind_11/Template_Pemetaan_Manajemen_Talenta_NineBox_Indikator11.xlsx'
      },
      {
        name: 'Rekapitulasi Layanan Kepegawaian & Log Transaksi SIASN',
        desc: 'Dashboard rekapitulasi usulan layanan ASN yang berhasil diproses secara otomatis via web service.',
        level: 'Standar Level 4 & 5',
        format: 'XLSX',
        url: '/templates/ind_11/Template_Rekapitulasi_Layanan_Kepegawaian_SIASN_Indikator11.xlsx'
      }
    ]
  },

  // IND-12
  {
    indicatorId: 'ind-12',
    indicatorCode: 'IND-12',
    indicatorName: 'Tanggap Insiden Siber (CSIRT)',
    domain: 'Aspek 4: Keamanan Pemerintah Digital',
    badgeColor: 'bg-rose-100 text-rose-800 border-rose-200',
    files: [
      {
        name: 'Surat Keputusan Tim CSIRT & Dokumen Profil Resmi (RFC 2350)',
        desc: 'Penetapan gugus tugas penanganan insiden keamanan siber, PGP key, kontak darurat & eskalasi BSSN.',
        level: 'Standar Level 3 (Terstandarisasi)',
        format: 'DOCX',
        url: '/templates/ind_12/Template_SK_Tim_CSIRT_dan_Profil_RFC2350_Indikator12.docx'
      },
      {
        name: 'Log Register Penanganan Insiden Siber & Respon Triase CSIRT',
        desc: 'Rekapitulasi penanganan serangan defacement, malware, brute-force dan pencapaian RTO/RPO pemulihan.',
        level: 'Standar Level 4 & 5 (Optimum)',
        format: 'XLSX',
        url: '/templates/ind_12/Template_Log_Register_Insiden_Keamanan_Siber_CSIRT_Indikator12.xlsx'
      }
    ]
  },

  // IND-13
  {
    indicatorId: 'ind-13',
    indicatorCode: 'IND-13',
    indicatorName: 'Keterpaduan Aplikasi SPBE',
    domain: 'Aspek 5: Teknologi (Aplikasi & PDN)',
    badgeColor: 'bg-cyan-100 text-cyan-800 border-cyan-200',
    files: [
      {
        name: 'Pedoman Standarisasi Pembangunan & Rasionalisasi Aplikasi',
        desc: 'Standar arsitektur microservices, REST API, secure coding OWASP dan moratorium pembuatan aplikasi silo.',
        level: 'Standar Level 3 (Terstandarisasi)',
        format: 'DOCX',
        url: '/templates/ind_13/Template_Pedoman_Standarisasi_dan_Rasionalisasi_Aplikasi_Indikator13.docx'
      },
      {
        name: 'Katalog Inventarisasi, Arsitektur & Rasionalisasi Aplikasi',
        desc: 'Database seluruh sistem elektronik instansi, kategori umum/khusus, status API dan rencana integrasi.',
        level: 'Standar Level 3 & 4 (Terpadu)',
        format: 'XLSX',
        url: '/templates/ind_13/Template_Katalog_Inventarisasi_Aplikasi_Instansi_Indikator13.xlsx'
      }
    ]
  },

  // IND-14
  {
    indicatorId: 'ind-14',
    indicatorCode: 'IND-14',
    indicatorName: 'Pusat Data Nasional (PDN) & Infrastruktur Terpadu',
    domain: 'Aspek 5: Teknologi (Aplikasi & PDN)',
    badgeColor: 'bg-cyan-100 text-cyan-800 border-cyan-200',
    files: [
      {
        name: 'Rencana Kerja & Tahapan Migrasi Cloud ke Pusat Data Nasional',
        desc: 'Strategi konsolidasi server OPD ke komputasi awan PDN Kemenkominfo dan skenario Disaster Recovery (DRC).',
        level: 'Standar Level 3 & 4 (Terpadu)',
        format: 'DOCX',
        url: '/templates/ind_14/Template_Rencana_Migrasi_Cloud_ke_PDN_Indikator14.docx'
      },
      {
        name: 'Daftar Aset Server, Alokasi Virtual Machine (VM) & Utilisasi PDN',
        desc: 'Inventarisasi resource vCPU, RAM, Storage NVMe, IP publik dan status operasional cloud instansi.',
        level: 'Standar Level 4 & 5 (Optimum)',
        format: 'XLSX',
        url: '/templates/ind_14/Template_Daftar_Aset_Server_VM_dan_Utilisasi_PDN_Indikator14.xlsx'
      }
    ]
  },

  // IND-15
  {
    indicatorId: 'ind-15',
    indicatorCode: 'IND-15',
    indicatorName: 'Integrasi Proses Bisnis Layanan Digital',
    domain: 'Aspek 6: Keterpaduan Layanan Digital',
    badgeColor: 'bg-indigo-100 text-indigo-800 border-indigo-200',
    files: [
      {
        name: 'Dokumen Peta Proses Bisnis (BPMN) Layanan Digital Terpadu',
        desc: 'Pemetaan proses bisnis Level 0 s.d. Level 2, integrasi lintas unit kerja dan Business Process Reengineering.',
        level: 'Standar Level 3 & 4 (Terpadu)',
        format: 'DOCX',
        url: '/templates/ind_15/Template_Dokumen_Peta_Proses_Bisnis_Terintegrasi_Indikator15.docx'
      },
      {
        name: 'Matriks Silang Hubungan Proses Bisnis dan Layanan Digital',
        desc: 'Pemetaan keterhubungan aplikasi dan layanan publik dengan mandat urusan OPD serta KPI capaian waktu.',
        level: 'Standar Level 4 & 5 (Optimum)',
        format: 'XLSX',
        url: '/templates/ind_15/Template_Matriks_Silang_Layanan_dan_Proses_Bisnis_Indikator15.xlsx'
      }
    ]
  },

  // IND-16 (Lengkap 5 Berkas)
  {
    indicatorId: 'ind-16',
    indicatorCode: 'IND-16',
    indicatorName: 'Integrasi Layanan Publik & Administrasi Pemerintahan',
    domain: 'Aspek 6: Keterpaduan Layanan Digital',
    badgeColor: 'bg-indigo-100 text-indigo-800 border-indigo-200',
    files: [
      {
        name: 'SOP Tata Kelola Integrasi Aplikasi dan Sistem Layanan',
        desc: 'Standar baku alur permohonan API, penelaahan arsitektur, testing sandbox & SLA.',
        level: 'Standar Level 3 (Terstandarisasi)',
        format: 'DOCX',
        url: '/templates/ind_16/Template_SOP_Tata_Kelola_Integrasi_Aplikasi_dan_Sistem_Indikator16.docx'
      },
      {
        name: 'Dokumen Arsitektur & Topologi Integrasi Sistem Terpadu',
        desc: 'Arsitektur koneksi API Gateway menghubungkan sistem internal ke SIASN, SIPD, SRIKANDI & TTE BSrE.',
        level: 'Standar Level 3 & 4 (Terpadu)',
        format: 'DOCX',
        url: '/templates/ind_16/Template_Dokumen_Arsitektur_dan_Topologi_Integrasi_Sistem_Indikator16.docx'
      },
      {
        name: 'Laporan Monitoring Kinerja Integrasi, Utilisasi API & Efisiensi',
        desc: 'Laporan resmi reviu SLA uptime 99.88%, eliminasi input manual ganda (Zero Data Duplication).',
        level: 'Standar Level 4 & 5 (Optimum)',
        format: 'DOCX',
        url: '/templates/ind_16/Template_Laporan_Monitoring_Kinerja_Integrasi_dan_Evaluasi_Efisiensi_Indikator16.docx'
      },
      {
        name: 'Matriks Pemetaan Integrasi Aplikasi & Kamus Data API',
        desc: 'Buku kerja 3 sheet: Pemetaan 12+ sistem produsen/konsumen, inventarisasi payload & aplikasi nasional.',
        level: 'Standar Level 3 & 4',
        format: 'XLSX',
        url: '/templates/ind_16/Template_Matriks_Pemetaan_Integrasi_Aplikasi_dan_Kamus_Data_API_Indikator16.xlsx'
      },
      {
        name: 'Log Transaksi API, Dashboard SLA & Audit Zero Data Duplication',
        desc: 'Catatan audit trail transaksi real-time, formula kepatuhan SLA 99.5% & rumus kuantifikasi jam kerja dihemat.',
        level: 'Standar Level 4 & 5',
        format: 'XLSX',
        url: '/templates/ind_16/Template_Log_Transaksi_API_Monitoring_SLA_dan_Audit_Trail_Indikator16.xlsx'
      }
    ]
  },

  // IND-17
  {
    indicatorId: 'ind-17',
    indicatorCode: 'IND-17',
    indicatorName: 'Penerapan Portal Satu Data & Super-App Layanan Terpadu',
    domain: 'Aspek 6: Keterpaduan Layanan Digital',
    badgeColor: 'bg-indigo-100 text-indigo-800 border-indigo-200',
    files: [
      {
        name: 'Spesifikasi Kebutuhan Sistem Super-App & Portal Pelayanan Terpadu',
        desc: 'Arsitektur satu pintu portal warga (Citizen Portal), integrasi SSO NIK/IKD dan standar UI/UX modern.',
        level: 'Standar Level 3 & 4 (Terpadu)',
        format: 'DOCX',
        url: '/templates/ind_17/Template_Spesifikasi_Kebutuhan_SuperApp_dan_Portal_Indikator17.docx'
      },
      {
        name: 'Daftar Layanan Terkonsolidasi dalam Single Sign-On (SSO) Portal',
        desc: 'Katalog modul layanan kesehatan, perizinan, perpajakan, adminduk dan trafik pengguna bulanan.',
        level: 'Standar Level 4 & 5 (Optimum)',
        format: 'XLSX',
        url: '/templates/ind_17/Template_Daftar_Layanan_Single_Sign_On_SSO_Portal_Indikator17.xlsx'
      }
    ]
  },

  // IND-18
  {
    indicatorId: 'ind-18',
    indicatorCode: 'IND-18',
    indicatorName: 'Penerapan Kriptografi & Tanda Tangan Elektronik (TTE) Tersertifikasi',
    domain: 'Aspek 4: Keamanan Pemerintah Digital',
    badgeColor: 'bg-rose-100 text-rose-800 border-rose-200',
    files: [
      {
        name: 'SOP Pemanfaatan Sertifikat Elektronik & TTE BSrE BSSN',
        desc: 'Alur pendaftaran, verifikasi identitas pejabat, penerbitan sertifikat digital dan penandatanganan SK.',
        level: 'Standar Level 3 (Terstandarisasi)',
        format: 'DOCX',
        url: '/templates/ind_18/Template_SOP_Pemanfaatan_TTE_Tersertifikasi_BSrE_Indikator18.docx'
      },
      {
        name: 'Log Penerbitan Sertifikat & Rekapitulasi Utilisasi TTE Naskah Dinas',
        desc: 'Pencatatan volume tanda tangan elektronik bulanan per pejabat dan status audit trail keabsahan hukum.',
        level: 'Standar Level 4 & 5 (Optimum)',
        format: 'XLSX',
        url: '/templates/ind_18/Template_Log_Penerbitan_dan_Utilisasi_TTE_Naskah_Dinas_Indikator18.xlsx'
      }
    ]
  },

  // IND-19
  {
    indicatorId: 'ind-19',
    indicatorCode: 'IND-19',
    indicatorName: 'Penyelenggaraan Helpdesk Terpadu Layanan Digital 24/7',
    domain: 'Aspek 7: Kepuasan Pengguna Layanan',
    badgeColor: 'bg-teal-100 text-teal-800 border-teal-200',
    files: [
      {
        name: 'SOP Penyelenggaraan Layanan Bantuan (Helpdesk) Multikanal 24/7',
        desc: 'Standar penanganan via Call Center 112, WhatsApp Bot, Web Chat, sistem tiket dan eskalasi petugas shift.',
        level: 'Standar Level 3 & 4 (Terpadu)',
        format: 'DOCX',
        url: '/templates/ind_19/Template_SOP_Helpdesk_Multikanal_dan_Eskalasi_Tiket_Indikator19.docx'
      },
      {
        name: 'Laporan Monitoring Tiket Gangguan & Pencapaian SLA Helpdesk',
        desc: 'Rekapitulasi waktu respon awal (<5 menit), durasi penyelesaian tiket dan tingkat kepuasan pemohon.',
        level: 'Standar Level 4 & 5 (Optimum)',
        format: 'XLSX',
        url: '/templates/ind_19/Template_Laporan_Monitoring_Tiket_dan_SLA_Helpdesk_Indikator19.xlsx'
      }
    ]
  },

  // IND-20
  {
    indicatorId: 'ind-20',
    indicatorCode: 'IND-20',
    indicatorName: 'Evaluasi Kepuasan Pengguna (e-SKM) & Tindak Lanjut',
    domain: 'Aspek 7: Kepuasan Pengguna Layanan',
    badgeColor: 'bg-teal-100 text-teal-800 border-teal-200',
    files: [
      {
        name: 'Laporan Hasil Evaluasi Survei Kepuasan Masyarakat Elektronik (e-SKM)',
        desc: 'Laporan periodik 9 unsur pelayanan publik PermenPANRB No. 14/2017 dan matriks rencana tindak lanjut.',
        level: 'Standar Level 3 & 4 (Terpadu)',
        format: 'DOCX',
        url: '/templates/ind_20/Template_Laporan_Hasil_Survei_Kepuasan_Masyarakat_eSKM_Indikator20.docx'
      },
      {
        name: 'Rekapitulasi Kuesioner 9 Unsur & Kalkulasi Nilai IKM Layanan Digital',
        desc: 'Kertas kerja perhitungan Nilai Rata-rata Tertimbang, mutu pelayanan (A/B/C) dan tabulasi responden.',
        level: 'Standar Level 4 & 5 (Optimum)',
        format: 'XLSX',
        url: '/templates/ind_20/Template_Rekapitulasi_Kuesioner_dan_Indeks_Kepuasan_SKM_Indikator20.xlsx'
      }
    ]
  }
];

/**
 * Mendapatkan daftar file template untuk indikator tertentu
 * @param {string} indicatorIdOrCode - e.g. 'ind-01' atau 'IND-01'
 * @returns {Array} List file template
 */
export function getTemplatesForIndicator(indicatorIdOrCode) {
  if (!indicatorIdOrCode) return [];
  const query = indicatorIdOrCode.toLowerCase();
  const group = TEMPLATES_DATA.find(t => 
    t.indicatorId.toLowerCase() === query || 
    t.indicatorCode.toLowerCase() === query
  );
  return group ? group.files : [];
}

/**
 * Menghitung total seluruh file template yang tersedia
 */
export function getTotalTemplateCount() {
  return TEMPLATES_DATA.reduce((acc, curr) => acc + curr.files.length, 0);
}
