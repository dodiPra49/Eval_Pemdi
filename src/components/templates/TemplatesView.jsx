import React, { useState } from 'react';
import { Download, FileText, Table, CheckCircle2, Sparkles, FolderDown, ArrowRight, Layers, ShieldCheck, Zap } from 'lucide-react';

export const TEMPLATE_DATA = [
  {
    indicatorId: 'ind-03',
    indicatorCode: 'IND-03',
    indicatorName: 'Tingkat Kematangan Sumber Daya Manusia Pemerintah Digital',
    domain: 'Aspek 2: Penyelenggara (SDM & AI)',
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
  {
    indicatorId: 'ind-16',
    indicatorCode: 'IND-16',
    indicatorName: 'Integrasi Aplikasi dan Sistem Layanan',
    domain: 'Aspek 6: Keterpaduan Layanan Digital',
    badgeColor: 'bg-cyan-100 text-cyan-800 border-cyan-200',
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
  }
];

export default function TemplatesView({ onOpenIndicatorDetail }) {
  const [formatFilter, setFormatFilter] = useState('all'); // 'all' | 'docx' | 'xlsx'
  const [selectedInd, setSelectedInd] = useState('all');

  const filteredGroups = TEMPLATE_DATA.filter(group => {
    if (selectedInd !== 'all' && group.indicatorCode !== selectedInd) return false;
    return true;
  }).map(group => {
    const files = group.files.filter(f => {
      if (formatFilter !== 'all' && f.format.toLowerCase() !== formatFilter.toLowerCase()) return false;
      return true;
    });
    return { ...group, files };
  }).filter(group => group.files.length > 0);

  const totalFilesAvailable = TEMPLATE_DATA.reduce((acc, curr) => acc + curr.files.length, 0);

  return (
    <div className="space-y-6 pb-12 animate-fadeIn">
      
      {/* Banner Header */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-indigo-700 via-brand-600 to-cyan-600 text-white p-6 sm:p-8 md:p-10 shadow-xl shadow-brand-500/10">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white/10 blur-2xl pointer-events-none" />
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-white/20 backdrop-blur-md mb-4 border border-white/25">
            <FolderDown className="w-3.5 h-3.5 text-sunshine-300" />
            <span>Pusat Template Resmi PermenPANRB 8/2026</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight mb-3">
            Katalog Berkas Bukti Dukung Siap Pakai
          </h1>

          <p className="text-sm sm:text-base text-brand-50/95 leading-relaxed font-normal mb-6">
            Unduh langsung template format resmi <strong>Microsoft Word (.docx)</strong> dan <strong>Microsoft Excel (.xlsx)</strong> yang telah diselaraskan dengan indikator evaluasi PermenPANRB No. 8/2026 untuk mempermudah instansi menyiapkan bukti audit asesor eksternal.
          </p>

          <div className="flex flex-wrap gap-3 text-xs sm:text-sm font-semibold">
            <div className="bg-white/15 backdrop-blur-md px-3.5 py-2 rounded-xl border border-white/20 flex items-center gap-2">
              <FileText className="w-4 h-4 text-sunshine-300" />
              <span>{totalFilesAvailable} Dokumen Siap Unduh</span>
            </div>
            <div className="bg-white/15 backdrop-blur-md px-3.5 py-2 rounded-xl border border-white/20 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-300" />
              <span>Standar Level 3, 4, dan 5</span>
            </div>
          </div>
        </div>
      </div>

      {/* Filter Toolbar */}
      <div className="bg-white p-4 rounded-2xl border border-slate-200/90 shadow-xs flex flex-wrap items-center justify-between gap-4">
        
        {/* Filter Indikator */}
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-xs font-bold text-slate-500">Pilih Indikator:</span>
          <button
            onClick={() => setSelectedInd('all')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
              selectedInd === 'all'
                ? 'bg-slate-900 text-white shadow-xs'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            Semua ({totalFilesAvailable} Berkas)
          </button>
          {TEMPLATE_DATA.map(item => (
            <button
              key={item.indicatorCode}
              onClick={() => setSelectedInd(item.indicatorCode)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                selectedInd === item.indicatorCode
                  ? 'bg-brand-600 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {item.indicatorCode}
            </button>
          ))}
        </div>

        {/* Filter Format File */}
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-slate-500">Format:</span>
          <div className="inline-flex bg-slate-100 p-1 rounded-xl border border-slate-200">
            <button
              onClick={() => setFormatFilter('all')}
              className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                formatFilter === 'all' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600'
              }`}
            >
              Semua
            </button>
            <button
              onClick={() => setFormatFilter('docx')}
              className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                formatFilter === 'docx' ? 'bg-blue-600 text-white shadow-xs' : 'text-slate-600'
              }`}
            >
              Word (.docx)
            </button>
            <button
              onClick={() => setFormatFilter('xlsx')}
              className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                formatFilter === 'xlsx' ? 'bg-emerald-600 text-white shadow-xs' : 'text-slate-600'
              }`}
            >
              Excel (.xlsx)
            </button>
          </div>
        </div>

      </div>

      {/* Grid of Indicator Template Groups */}
      <div className="space-y-8">
        {filteredGroups.map(group => (
          <div key={group.indicatorCode} className="bg-white rounded-3xl border border-slate-200/90 p-5 sm:p-7 shadow-xs space-y-4">
            
            {/* Group Header */}
            <div className="flex items-start justify-between flex-wrap gap-3 pb-3 border-b border-slate-100">
              <div>
                <div className="flex items-center gap-2 flex-wrap mb-1">
                  <span className="font-mono text-xs font-black px-2.5 py-1 rounded-lg bg-slate-900 text-white">
                    {group.indicatorCode}
                  </span>
                  <span className={`text-xs font-bold px-2 py-0.5 rounded-md border ${group.badgeColor}`}>
                    {group.domain}
                  </span>
                  <span className="text-xs font-bold text-slate-400">
                    • {group.files.length} Berkas Siap Unduh
                  </span>
                </div>
                <h2 className="text-lg sm:text-xl font-extrabold text-slate-900">
                  {group.indicatorName}
                </h2>
              </div>

              {onOpenIndicatorDetail && (
                <button
                  onClick={() => onOpenIndicatorDetail(group.indicatorId)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-600 hover:text-brand-700 bg-brand-50 hover:bg-brand-100 px-3 py-1.5 rounded-xl transition-colors"
                >
                  <span>Buka Kriteria & Checklist</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* List of Files in Group */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 pt-1">
              {group.files.map((file, idx) => (
                <div
                  key={idx}
                  className="flex items-start justify-between gap-3 p-3.5 sm:p-4 rounded-2xl bg-slate-50/70 hover:bg-indigo-50/50 border border-slate-200/80 hover:border-indigo-200 transition-all group"
                >
                  <div className="flex items-start gap-3 min-w-0">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-black text-xs shrink-0 shadow-xs ${
                      file.format === 'DOCX' 
                        ? 'bg-blue-100 text-blue-700' 
                        : 'bg-emerald-100 text-emerald-700'
                    }`}>
                      {file.format}
                    </div>
                    <div className="min-w-0">
                      <h4 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-indigo-600 line-clamp-1">
                        {file.name}
                      </h4>
                      <p className="text-[11px] text-slate-500 line-clamp-2 mt-0.5 leading-relaxed">
                        {file.desc}
                      </p>
                      <div className="mt-2 inline-flex items-center text-[10px] font-bold px-2 py-0.5 rounded-md bg-slate-200/80 text-slate-700">
                        {file.level}
                      </div>
                    </div>
                  </div>

                  <a
                    href={file.url}
                    download
                    className="inline-flex items-center gap-1 shrink-0 p-2.5 rounded-xl bg-white group-hover:bg-indigo-600 text-slate-700 group-hover:text-white border border-slate-200 group-hover:border-indigo-600 shadow-xs transition-all hover:scale-105 active:scale-95"
                    title={`Unduh ${file.name}`}
                  >
                    <Download className="w-4 h-4" />
                    <span className="text-xs font-bold hidden sm:inline">Unduh</span>
                  </a>
                </div>
              ))}
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}
