import React, { useState, useEffect } from 'react';
import { X, CheckSquare, Square, FileText, Sparkles, ExternalLink, Lightbulb, ShieldAlert, Award, ArrowRight, Download, FileSpreadsheet } from 'lucide-react';
import { MATURITY_LEVELS } from '../../data/domainsData';

export default function IndicatorDetailModal({
  indicator,
  indicatorState,
  onClose,
  onToggleCheck,
  onUpdateState,
  onOpenReviewAi,
  onAskAi
}) {
  if (!indicator) return null;

  // Level aktif yang sedang dilihat/dipilih oleh user (1 s.d. 5)
  const [activeLevel, setActiveLevel] = useState(indicatorState?.selfLevel || 3);
  const checkedItems = indicatorState?.checkedItems || {};
  const [localNotes, setLocalNotes] = useState(indicatorState?.notes || '');
  const [localLink, setLocalLink] = useState(indicatorState?.evidenceLink || '');

  // Sinkronisasi jika indikator berubah
  useEffect(() => {
    if (indicatorState?.selfLevel) {
      setActiveLevel(indicatorState.selfLevel);
    } else {
      setActiveLevel(3);
    }
    setLocalNotes(indicatorState?.notes || '');
    setLocalLink(indicatorState?.evidenceLink || '');
  }, [indicator?.id, indicatorState?.selfLevel]);

  const handleSelectLevel = (levelNumber) => {
    setActiveLevel(levelNumber);
    onUpdateState(indicator.id, { selfLevel: levelNumber });
  };

  const handleSaveNotes = () => {
    onUpdateState(indicator.id, {
      notes: localNotes,
      evidenceLink: localLink
    });
  };

  // Ambil narasi bukti yang spesifik untuk level yang sedang dipilih
  const currentEvidenceNarration = indicator.evidenceByLevel?.[activeLevel] || indicator.evidenceNarration;
  const activeLevelObj = MATURITY_LEVELS.find(l => l.level === activeLevel) || MATURITY_LEVELS[2];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 md:p-6 animate-fadeIn">
      
      {/* Modal Card */}
      <div className="bg-white w-full max-w-4xl rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Header with vibrant gradient accent */}
        <div className="relative p-5 sm:p-6 bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2 flex-wrap">
              <span className="font-mono text-xs font-bold px-2.5 py-1 rounded-md bg-brand-500 text-white shadow-xs">
                {indicator.code}
              </span>
              <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-white/10 text-slate-200">
                {indicator.domainName}
              </span>
              <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                {indicator.aspectName}
              </span>
              {indicator.weight && (
                <span className="text-xs font-bold px-2.5 py-1 rounded-md bg-amber-400 text-slate-900 shadow-xs">
                  Bobot: {indicator.weight}%
                </span>
              )}
            </div>
            <h2 className="text-lg sm:text-2xl font-black text-white tracking-tight">
              {indicator.name}
            </h2>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-6">
          
          {/* Definition */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5 flex items-center gap-1.5">
              <FileText className="w-3.5 h-3.5 text-brand-600" />
              Maksud & Tujuan Evaluasi
            </h4>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-medium">
              {indicator.description}
            </p>
          </div>

          {/* MATRIKS KRITERIA LEVEL KEMATANGAN (1-5) */}
          <div>
            <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
              <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                <Award className="w-4 h-4 text-sunshine-500" />
                Matriks Kriteria Level Kematangan
              </h4>
              <span className="text-xs text-brand-600 font-bold bg-brand-50 px-2.5 py-1 rounded-lg border border-brand-200">
                Level Terpilih: Lvl {activeLevel} ({activeLevelObj.name})
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-5 gap-2.5">
              {MATURITY_LEVELS.map(lvl => {
                const isSelected = activeLevel === lvl.level;
                return (
                  <button
                    key={lvl.level}
                    type="button"
                    onClick={() => handleSelectLevel(lvl.level)}
                    className={`p-3 rounded-xl border text-left transition-all relative ${
                      isSelected
                        ? 'border-brand-600 bg-brand-50/80 shadow-md ring-2 ring-brand-500/40'
                        : 'border-slate-200 hover:border-slate-300 bg-white hover:bg-slate-50'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span className={`text-xs font-black px-2 py-0.5 rounded-md ${lvl.color}`}>
                        {lvl.short}
                      </span>
                      {isSelected && (
                        <span className="text-[10px] font-bold text-brand-700 bg-brand-200/70 px-1.5 py-0.5 rounded-sm animate-pulse">
                          Aktif
                        </span>
                      )}
                    </div>
                    <div className="font-bold text-xs text-slate-900 mb-1">{lvl.name}</div>
                    <div className="text-[11px] text-slate-600 line-clamp-3 leading-tight">
                      {indicator.criteria[lvl.level]}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* NARASI DOKUMEN BUKTI BERUBAH DINAMIS SESUAI LEVEL TERPILIH */}
          <div className="bg-gradient-to-br from-amber-50/90 via-white to-orange-50/90 border-2 border-amber-300 rounded-2xl p-4 sm:p-5 shadow-md transition-all">
            
            <div className="flex items-center justify-between gap-2 mb-3 flex-wrap border-b border-amber-200/80 pb-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-amber-500 text-white flex items-center justify-center shadow-xs">
                  <FileText className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm sm:text-base font-black text-amber-950">
                    Narasi Dokumen Bukti yang Diperlukan (Evidence Requirement)
                  </h4>
                  <div className="text-xs text-amber-800 font-medium">
                    Kebutuhan bukti dukung khusus untuk target kematangan:
                  </div>
                </div>
              </div>

              {/* Badge Level Terpilih */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black shadow-xs bg-amber-500 text-white">
                <span>Level {activeLevel}: {activeLevelObj.name}</span>
              </div>
            </div>

            {/* Kriteria ringkas level ini */}
            <div className="mb-3 text-xs bg-amber-100/70 p-2.5 rounded-xl border border-amber-300/60 text-amber-900">
              <span className="font-bold">Kriteria Resmi Level {activeLevel}: </span>
              {indicator.criteria[activeLevel]}
            </div>

            {/* Konten Narasi Bukti Dinamis */}
            <div className="prose prose-sm max-w-none text-slate-800 text-xs sm:text-sm whitespace-pre-line leading-relaxed font-medium bg-white/95 p-4 rounded-xl border border-amber-200 shadow-inner">
              {currentEvidenceNarration}
            </div>

            {indicator.tips && (
              <div className="mt-3 flex items-start gap-2 text-xs text-amber-900 bg-amber-100/70 p-3 rounded-xl border border-amber-300/60">
                <Lightbulb className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold">Tips Asesor Evaluator: </span>
                  {indicator.tips}
                </div>
              </div>
            )}
          </div>

          {/* ========================================================================= */}
          {/* UNDUH TEMPLATE BUKTI KHUSUS (WORD & EXCEL) - TAMPIL DI BAGIAN ATAS MODAL */}
          {/* ========================================================================= */}

          {/* 1. INDIKATOR 03: SUMBER DAYA MANUSIA PEMERINTAH DIGITAL & AI */}
          {(indicator.id === 'ind-03' || indicator.code === 'IND-03') && (
            <div className="bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50 border-2 border-indigo-200 rounded-2xl p-4 sm:p-5 shadow-sm space-y-3">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-xl bg-indigo-600 text-white flex items-center justify-center shadow-xs">
                    <Download className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-black text-indigo-950">
                      Template Bukti Dukung Resmi SDM Pemerintah Digital (Word & Excel)
                    </h4>
                    <p className="text-xs text-indigo-700 font-medium">
                      Sesuai PermenPANRB No. 8/2026 Indikator 03 (TNA Digital, Sertifikasi BNSP, SK Tim Digital Squad, Pemanfaatan AI & Evaluasi Efisiensi)
                    </p>
                  </div>
                </div>
                <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-indigo-600 text-white shadow-xs">
                  5 Berkas Siap Pakai
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                
                {/* 1. TNA & Roadmap Pengembangan SDM Digital (Word) */}
                <a
                  href="/templates/ind_03/Template_TNA_dan_Rencana_Pengembangan_SDM_Digital_Indikator03.docx"
                  download
                  className="flex items-center justify-between p-3 rounded-xl bg-white hover:bg-indigo-50/80 border border-indigo-200 hover:border-indigo-300 transition-all group shadow-xs"
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center font-black text-xs shrink-0">
                      DOCX
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs font-bold text-slate-900 group-hover:text-indigo-600 truncate">
                        Dokumen TNA & Roadmap SDM Digital ASN
                      </div>
                      <div className="text-[10px] text-slate-500">Standar Level 3 (Analisis Gap Kompetensi, SKKNI & Alokasi DPA)</div>
                    </div>
                  </div>
                  <Download className="w-4 h-4 text-indigo-600 shrink-0 ml-2 group-hover:scale-110 transition-transform" />
                </a>

                {/* 2. SK Tim Pengembang Digital Squad (Word) */}
                <a
                  href="/templates/ind_03/Template_SK_Tim_Pengembang_Digital_Squad_Indikator03.docx"
                  download
                  className="flex items-center justify-between p-3 rounded-xl bg-white hover:bg-indigo-50/80 border border-indigo-200 hover:border-indigo-300 transition-all group shadow-xs"
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center font-black text-xs shrink-0">
                      DOCX
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs font-bold text-slate-900 group-hover:text-indigo-600 truncate">
                        SK Tim Pengembang Digital Squad & AI Lab
                      </div>
                      <div className="text-[10px] text-slate-500">Standar Level 4 (Tupoksi Data Scientist, AI Specialist & DevSecOps)</div>
                    </div>
                  </div>
                  <Download className="w-4 h-4 text-indigo-600 shrink-0 ml-2 group-hover:scale-110 transition-transform" />
                </a>

                {/* 3. Laporan Pemanfaatan AI & Efisiensi ASN (Word) */}
                <a
                  href="/templates/ind_03/Template_Laporan_Pemanfaatan_AI_dan_Evaluasi_Efisiensi_Indikator03.docx"
                  download
                  className="flex items-center justify-between p-3 rounded-xl bg-white hover:bg-indigo-50/80 border border-indigo-200 hover:border-indigo-300 transition-all group shadow-xs"
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center font-black text-xs shrink-0">
                      DOCX
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs font-bold text-slate-900 group-hover:text-indigo-600 truncate">
                        Laporan Pemanfaatan AI & Evaluasi Efisiensi
                      </div>
                      <div className="text-[10px] text-slate-500">Standar Level 4 & 5 (Use Cases GenAI, Jam Kerja & Etika AI)</div>
                    </div>
                  </div>
                  <Download className="w-4 h-4 text-indigo-600 shrink-0 ml-2 group-hover:scale-110 transition-transform" />
                </a>

                {/* 4. Matriks Inventarisasi Sertifikasi & Gap (Excel) */}
                <a
                  href="/templates/ind_03/Template_Matriks_Inventarisasi_Sertifikasi_dan_Gap_Kompetensi_SDM_Indikator03.xlsx"
                  download
                  className="flex items-center justify-between p-3 rounded-xl bg-white hover:bg-emerald-50/80 border border-emerald-200 hover:border-emerald-300 transition-all group shadow-xs"
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center font-black text-xs shrink-0">
                      XLSX
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs font-bold text-slate-900 group-hover:text-emerald-700 truncate">
                        Matriks Sertifikasi & Asesmen Gap SDM
                      </div>
                      <div className="text-[10px] text-slate-500">Standar Level 3 & 4 (Database BNSP/Global & Dashboard KPI)</div>
                    </div>
                  </div>
                  <Download className="w-4 h-4 text-emerald-600 shrink-0 ml-2 group-hover:scale-110 transition-transform" />
                </a>

                {/* 5. Monitoring AI & Efisiensi Jam Kerja (Excel) */}
                <a
                  href="/templates/ind_03/Template_Monitoring_Pemanfaatan_AI_dan_Produktivitas_ASN_Indikator03.xlsx"
                  download
                  className="flex items-center justify-between p-3 rounded-xl bg-white hover:bg-emerald-50/80 border border-emerald-200 hover:border-emerald-300 transition-all group shadow-xs sm:col-span-2"
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center font-black text-xs shrink-0">
                      XLSX
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs font-bold text-slate-900 group-hover:text-emerald-700 truncate">
                        Monitoring Inovasi AI & Kuantifikasi Jam Efektif Dihemat
                      </div>
                      <div className="text-[10px] text-slate-500">Standar Level 4 & 5 (Matriks Pengukuran Efisiensi Kerja & Digital Talent Pool)</div>
                    </div>
                  </div>
                  <Download className="w-4 h-4 text-emerald-600 shrink-0 ml-2 group-hover:scale-110 transition-transform" />
                </a>

              </div>
            </div>
          )}

          {/* 2. INDIKATOR 07 / 18: KETERPADUAN SISTEM PENGHUBUNG LAYANAN PEMERINTAH (SPLP) */}
          {(indicator.id === 'ind-18' || indicator.code === 'IND-18' || indicator.id === 'ind-07' || indicator.code === 'IND-07') && (
            <div className="bg-gradient-to-br from-indigo-50 via-sky-50 to-emerald-50 border-2 border-indigo-200 rounded-2xl p-4 sm:p-5 shadow-sm space-y-3">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-xl bg-indigo-600 text-white flex items-center justify-center shadow-xs">
                    <Download className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-black text-indigo-950">
                      Template Dokumen Bukti Dukung Resmi SPLP (Word & Excel)
                    </h4>
                    <p className="text-xs text-indigo-700 font-medium">
                      Format siap pakai sesuai standar evaluasi PermenPANRB No. 8/2026
                    </p>
                  </div>
                </div>
                <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-indigo-600 text-white shadow-xs">
                  5 Berkas Siap Pakai
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                
                {/* 1. SOP SPLP (Word) */}
                <a
                  href="/templates/ind_07/Template_SOP_Integrasi_Layanan_SPLP_Indikator07.docx"
                  download
                  className="flex items-center justify-between p-3 rounded-xl bg-white hover:bg-indigo-50/80 border border-indigo-200 hover:border-indigo-300 transition-all group shadow-xs"
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center font-black text-xs shrink-0">
                      DOCX
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs font-bold text-slate-900 group-hover:text-indigo-600 truncate">
                        SOP Integrasi Layanan SPLP
                      </div>
                      <div className="text-[10px] text-slate-500">Standar Level 3 (Terstandarisasi)</div>
                    </div>
                  </div>
                  <Download className="w-4 h-4 text-indigo-600 shrink-0 ml-2 group-hover:scale-110 transition-transform" />
                </a>

                {/* 2. PKS Pertukaran Data (Word) */}
                <a
                  href="/templates/ind_07/Template_PKS_Pertukaran_Data_Elektronik_SPLP_Indikator07.docx"
                  download
                  className="flex items-center justify-between p-3 rounded-xl bg-white hover:bg-indigo-50/80 border border-indigo-200 hover:border-indigo-300 transition-all group shadow-xs"
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center font-black text-xs shrink-0">
                      DOCX
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs font-bold text-slate-900 group-hover:text-indigo-600 truncate">
                        Naskah PKS / NDA Berbagi Pakai Data
                      </div>
                      <div className="text-[10px] text-slate-500">Standar Level 3 & 4 (Perjanjian Kerja Sama)</div>
                    </div>
                  </div>
                  <Download className="w-4 h-4 text-indigo-600 shrink-0 ml-2 group-hover:scale-110 transition-transform" />
                </a>

                {/* 3. Laporan Evaluasi SPLP (Word) */}
                <a
                  href="/templates/ind_07/Template_Laporan_Evaluasi_Kinerja_SPLP_Indikator07.docx"
                  download
                  className="flex items-center justify-between p-3 rounded-xl bg-white hover:bg-indigo-50/80 border border-indigo-200 hover:border-indigo-300 transition-all group shadow-xs"
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center font-black text-xs shrink-0">
                      DOCX
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs font-bold text-slate-900 group-hover:text-indigo-600 truncate">
                        Laporan Evaluasi Kinerja SPLP Berkala
                      </div>
                      <div className="text-[10px] text-slate-500">Standar Level 5 (Optimum / Monev)</div>
                    </div>
                  </div>
                  <Download className="w-4 h-4 text-indigo-600 shrink-0 ml-2 group-hover:scale-110 transition-transform" />
                </a>

                {/* 4. Buku Katalog API (Excel) */}
                <a
                  href="/templates/ind_07/Template_Buku_Katalog_Layanan_API_SPLP_Indikator07.xlsx"
                  download
                  className="flex items-center justify-between p-3 rounded-xl bg-white hover:bg-emerald-50/80 border border-emerald-200 hover:border-emerald-300 transition-all group shadow-xs"
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center font-black text-xs shrink-0">
                      XLSX
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs font-bold text-slate-900 group-hover:text-emerald-700 truncate">
                        Buku Katalog Layanan API & Registry
                      </div>
                      <div className="text-[10px] text-slate-500">Standar Level 3 & 4 (Daftar Endpoint & Consumer)</div>
                    </div>
                  </div>
                  <Download className="w-4 h-4 text-emerald-600 shrink-0 ml-2 group-hover:scale-110 transition-transform" />
                </a>

                {/* 5. Log Audit Trail SPLP (Excel) */}
                <a
                  href="/templates/ind_07/Template_Log_Audit_Trail_Transaksi_SPLP_Indikator07.xlsx"
                  download
                  className="flex items-center justify-between p-3 rounded-xl bg-white hover:bg-emerald-50/80 border border-emerald-200 hover:border-emerald-300 transition-all group shadow-xs sm:col-span-2"
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center font-black text-xs shrink-0">
                      XLSX
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs font-bold text-slate-900 group-hover:text-emerald-700 truncate">
                        Log Audit Trail Transaksi & Rekapitulasi Trafik Bulanan
                      </div>
                      <div className="text-[10px] text-slate-500">Standar Level 4 & 5 (Monitoring Real-time, SLA & Keamanan)</div>
                    </div>
                  </div>
                  <Download className="w-4 h-4 text-emerald-600 shrink-0 ml-2 group-hover:scale-110 transition-transform" />
                </a>

              </div>
            </div>
          )}

          {/* 3. INDIKATOR 11: LAYANAN KEPEGAWAIAN PEMERINTAH DIGITAL */}
          {(indicator.id === 'ind-11' || indicator.code === 'IND-11') && (
            <div className="bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 border-2 border-emerald-200 rounded-2xl p-4 sm:p-5 shadow-sm space-y-3">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-xl bg-emerald-600 text-white flex items-center justify-center shadow-xs">
                    <Download className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-black text-emerald-950">
                      Template Bukti Dukung Resmi Layanan Kepegawaian Digital (Word & Excel)
                    </h4>
                    <p className="text-xs text-emerald-700 font-medium">
                      Sesuai PermenPANRB No. 8/2026 Indikator 11 (SOP Kepegawaian, BA Integrasi SIASN BKN, Evaluasi Talenta, Matriks NineBox & Rekapitulasi)
                    </p>
                  </div>
                </div>
                <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-emerald-600 text-white shadow-xs">
                  5 Berkas Siap Pakai
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                
                {/* 1. SOP Kepegawaian (Word) */}
                <a
                  href="/templates/ind_11/Template_SOP_Layanan_Kepegawaian_Elektronik_Indikator11.docx"
                  download
                  className="flex items-center justify-between p-3 rounded-xl bg-white hover:bg-emerald-50/80 border border-emerald-200 hover:border-emerald-300 transition-all group shadow-xs"
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center font-black text-xs shrink-0">
                      DOCX
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs font-bold text-slate-900 group-hover:text-emerald-600 truncate">
                        SOP Layanan Kepegawaian Elektronik
                      </div>
                      <div className="text-[10px] text-slate-500">Standar Level 3 (Kenaikan Pangkat, KGB & Pensiun)</div>
                    </div>
                  </div>
                  <Download className="w-4 h-4 text-emerald-600 shrink-0 ml-2 group-hover:scale-110 transition-transform" />
                </a>

                {/* 2. BA Integrasi SIASN (Word) */}
                <a
                  href="/templates/ind_11/Template_BA_Integrasi_SIMPEG_SIASN_BKN_Indikator11.docx"
                  download
                  className="flex items-center justify-between p-3 rounded-xl bg-white hover:bg-emerald-50/80 border border-emerald-200 hover:border-emerald-300 transition-all group shadow-xs"
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center font-black text-xs shrink-0">
                      DOCX
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs font-bold text-slate-900 group-hover:text-emerald-600 truncate">
                        BA Integrasi SIMPEG dengan SIASN BKN
                      </div>
                      <div className="text-[10px] text-slate-500">Standar Level 4 (Web Service Dua Arah & UAT Valid)</div>
                    </div>
                  </div>
                  <Download className="w-4 h-4 text-emerald-600 shrink-0 ml-2 group-hover:scale-110 transition-transform" />
                </a>

                {/* 3. Laporan Evaluasi Talenta (Word) */}
                <a
                  href="/templates/ind_11/Template_Laporan_Evaluasi_Talenta_ASN_Indikator11.docx"
                  download
                  className="flex items-center justify-between p-3 rounded-xl bg-white hover:bg-emerald-50/80 border border-emerald-200 hover:border-emerald-300 transition-all group shadow-xs"
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center font-black text-xs shrink-0">
                      DOCX
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs font-bold text-slate-900 group-hover:text-emerald-600 truncate">
                        Laporan Evaluasi Penerapan Manajemen Talenta
                      </div>
                      <div className="text-[10px] text-slate-500">Standar Level 5 (Optimum / Reviu Berkala)</div>
                    </div>
                  </div>
                  <Download className="w-4 h-4 text-emerald-600 shrink-0 ml-2 group-hover:scale-110 transition-transform" />
                </a>

                {/* 4. Pemetaan Nine-Box Grid (Excel) */}
                <a
                  href="/templates/ind_11/Template_Pemetaan_Manajemen_Talenta_NineBox_Indikator11.xlsx"
                  download
                  className="flex items-center justify-between p-3 rounded-xl bg-white hover:bg-emerald-50/80 border border-emerald-200 hover:border-emerald-300 transition-all group shadow-xs"
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center font-black text-xs shrink-0">
                      XLSX
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs font-bold text-slate-900 group-hover:text-emerald-700 truncate">
                        Pemetaan Talenta Nine-Box Grid Matrix
                      </div>
                      <div className="text-[10px] text-slate-500">Standar Level 4 & 5 (Kinerja vs Potensi ASN)</div>
                    </div>
                  </div>
                  <Download className="w-4 h-4 text-emerald-600 shrink-0 ml-2 group-hover:scale-110 transition-transform" />
                </a>

                {/* 5. Rekapitulasi Layanan SIASN (Excel) */}
                <a
                  href="/templates/ind_11/Template_Rekapitulasi_Layanan_Kepegawaian_SIASN_Indikator11.xlsx"
                  download
                  className="flex items-center justify-between p-3 rounded-xl bg-white hover:bg-emerald-50/80 border border-emerald-200 hover:border-emerald-300 transition-all group shadow-xs sm:col-span-2"
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center font-black text-xs shrink-0">
                      XLSX
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs font-bold text-slate-900 group-hover:text-emerald-700 truncate">
                        Rekapitulasi Layanan Kepegawaian & Log Transaksi SIASN
                      </div>
                      <div className="text-[10px] text-slate-500">Standar Level 4 & 5 (Trafik Layanan Otomatis Bulanan)</div>
                    </div>
                  </div>
                  <Download className="w-4 h-4 text-emerald-600 shrink-0 ml-2 group-hover:scale-110 transition-transform" />
                </a>

              </div>
            </div>
          )}

          {/* 4. INDIKATOR 16: INTEGRASI APLIKASI DAN SISTEM LAYANAN */}
          {(indicator.id === 'ind-16' || indicator.code === 'IND-16') && (
            <div className="bg-gradient-to-br from-indigo-50 via-cyan-50 to-blue-50 border-2 border-indigo-200 rounded-2xl p-4 sm:p-5 shadow-sm space-y-3">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-xl bg-indigo-600 text-white flex items-center justify-center shadow-xs">
                    <Download className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-black text-indigo-950">
                      Template Bukti Dukung Resmi Integrasi Aplikasi & Sistem Layanan (Word & Excel)
                    </h4>
                    <p className="text-xs text-indigo-700 font-medium">
                      Sesuai PermenPANRB No. 8/2026 Indikator 16 (SOP Integrasi, Arsitektur SIASN/SIPD/SRIKANDI, Laporan Efisiensi, Matriks API & Log SLA)
                    </p>
                  </div>
                </div>
                <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-indigo-600 text-white shadow-xs">
                  5 Berkas Siap Pakai
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                
                {/* 1. SOP Integrasi Aplikasi & Sistem (Word) */}
                <a
                  href="/templates/ind_16/Template_SOP_Tata_Kelola_Integrasi_Aplikasi_dan_Sistem_Indikator16.docx"
                  download
                  className="flex items-center justify-between p-3 rounded-xl bg-white hover:bg-indigo-50/80 border border-indigo-200 hover:border-indigo-300 transition-all group shadow-xs"
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center font-black text-xs shrink-0">
                      DOCX
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs font-bold text-slate-900 group-hover:text-indigo-600 truncate">
                        SOP Tata Kelola Integrasi Aplikasi & Sistem
                      </div>
                      <div className="text-[10px] text-slate-500">Standar Level 3 (Alur Permohonan, Sandbox, Token & SLA)</div>
                    </div>
                  </div>
                  <Download className="w-4 h-4 text-indigo-600 shrink-0 ml-2 group-hover:scale-110 transition-transform" />
                </a>

                {/* 2. Arsitektur & Topologi Integrasi (Word) */}
                <a
                  href="/templates/ind_16/Template_Dokumen_Arsitektur_dan_Topologi_Integrasi_Sistem_Indikator16.docx"
                  download
                  className="flex items-center justify-between p-3 rounded-xl bg-white hover:bg-indigo-50/80 border border-indigo-200 hover:border-indigo-300 transition-all group shadow-xs"
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center font-black text-xs shrink-0">
                      DOCX
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs font-bold text-slate-900 group-hover:text-indigo-600 truncate">
                        Arsitektur & Topologi Integrasi Sistem
                      </div>
                      <div className="text-[10px] text-slate-500">Standar Level 3 & 4 (SIASN, SIPD-RI, SRIKANDI, TTE BSrE)</div>
                    </div>
                  </div>
                  <Download className="w-4 h-4 text-indigo-600 shrink-0 ml-2 group-hover:scale-110 transition-transform" />
                </a>

                {/* 3. Laporan Monitoring Kinerja & Efisiensi (Word) */}
                <a
                  href="/templates/ind_16/Template_Laporan_Monitoring_Kinerja_Integrasi_dan_Evaluasi_Efisiensi_Indikator16.docx"
                  download
                  className="flex items-center justify-between p-3 rounded-xl bg-white hover:bg-indigo-50/80 border border-indigo-200 hover:border-indigo-300 transition-all group shadow-xs"
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center font-black text-xs shrink-0">
                      DOCX
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs font-bold text-slate-900 group-hover:text-indigo-600 truncate">
                        Laporan Monitoring Integrasi & Efisiensi
                      </div>
                      <div className="text-[10px] text-slate-500">Standar Level 4 & 5 (Zero Data Duplication & Uptime SLA)</div>
                    </div>
                  </div>
                  <Download className="w-4 h-4 text-indigo-600 shrink-0 ml-2 group-hover:scale-110 transition-transform" />
                </a>

                {/* 4. Matriks Pemetaan Integrasi & Kamus Data (Excel) */}
                <a
                  href="/templates/ind_16/Template_Matriks_Pemetaan_Integrasi_Aplikasi_dan_Kamus_Data_API_Indikator16.xlsx"
                  download
                  className="flex items-center justify-between p-3 rounded-xl bg-white hover:bg-emerald-50/80 border border-emerald-200 hover:border-emerald-300 transition-all group shadow-xs"
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center font-black text-xs shrink-0">
                      XLSX
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs font-bold text-slate-900 group-hover:text-emerald-700 truncate">
                        Matriks Integrasi Sistem & Kamus Data API
                      </div>
                      <div className="text-[10px] text-slate-500">Standar Level 3 & 4 (Pemetaan Endpoint & Sistem Nasional)</div>
                    </div>
                  </div>
                  <Download className="w-4 h-4 text-emerald-600 shrink-0 ml-2 group-hover:scale-110 transition-transform" />
                </a>

                {/* 5. Log Transaksi API, SLA & Evaluasi Zero Duplikasi (Excel) */}
                <a
                  href="/templates/ind_16/Template_Log_Transaksi_API_Monitoring_SLA_dan_Audit_Trail_Indikator16.xlsx"
                  download
                  className="flex items-center justify-between p-3 rounded-xl bg-white hover:bg-emerald-50/80 border border-emerald-200 hover:border-emerald-300 transition-all group shadow-xs sm:col-span-2"
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center font-black text-xs shrink-0">
                      XLSX
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs font-bold text-slate-900 group-hover:text-emerald-700 truncate">
                        Log Transaksi API, Dashboard SLA & Audit Zero Data Duplication
                      </div>
                      <div className="text-[10px] text-slate-500">Standar Level 4 & 5 (Log Real-time, Kepatuhan SLA ≥ 99.5% & Rumus Penghematan Jam Kerja)</div>
                    </div>
                  </div>
                  <Download className="w-4 h-4 text-emerald-600 shrink-0 ml-2 group-hover:scale-110 transition-transform" />
                </a>

              </div>
            </div>
          )}

          {/* Interactive Checklist Bukti Dukung */}
          <div>
            <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
              <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                <CheckSquare className="w-4 h-4 text-brand-600" />
                Checklist Kelengkapan Dokumen Fisik / Digital
              </h4>
              <span className="text-xs text-slate-500">
                Centang bukti yang sudah Anda miliki di instansi
              </span>
            </div>

            <div className="space-y-2">
              {indicator.evidenceChecklist?.map(item => {
                const isChecked = !!checkedItems[item.id];
                const isItemRelevantForLevel = item.minLevel ? item.minLevel <= activeLevel : true;

                return (
                  <label
                    key={item.id}
                    onClick={() => onToggleCheck(indicator.id, item.id)}
                    className={`flex items-start gap-3 p-3 rounded-xl border transition-all cursor-pointer select-none ${
                      isChecked
                        ? 'bg-emerald-50/80 border-emerald-300 text-emerald-950'
                        : isItemRelevantForLevel
                          ? 'bg-white border-slate-200 hover:bg-slate-50 text-slate-800'
                          : 'bg-slate-50/50 border-slate-200/60 text-slate-400 opacity-80'
                    }`}
                  >
                    <div className="mt-0.5 shrink-0 text-brand-600">
                      {isChecked ? (
                        <CheckSquare className="w-5 h-5 text-emerald-600" />
                      ) : (
                        <Square className="w-5 h-5 text-slate-400" />
                      )}
                    </div>
                    <div className="text-xs sm:text-sm leading-relaxed flex-1">
                      <span className={isChecked ? 'line-through text-slate-500' : 'font-medium'}>
                        {item.label}
                      </span>
                      <div className="flex items-center gap-1.5 mt-1 flex-wrap">
                        {item.required && (
                          <span className="text-[10px] font-bold px-1.5 py-0.2 bg-rose-100 text-rose-700 rounded-sm">
                            Wajib
                          </span>
                        )}
                        {item.minLevel && (
                          <span className={`text-[10px] font-bold px-1.5 py-0.2 rounded-sm ${
                            activeLevel >= item.minLevel
                              ? 'bg-brand-100 text-brand-700'
                              : 'bg-slate-200 text-slate-600'
                          }`}>
                            Target Lvl {item.minLevel}+
                          </span>
                        )}
                      </div>
                    </div>
                  </label>
                );
              })}
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                Tautan Berkas Cloud / Google Drive Bukti:
              </label>
              <div className="flex gap-2">
                <input
                  type="url"
                  placeholder="https://drive.google.com/..."
                  value={localLink}
                  onChange={(e) => setLocalLink(e.target.value)}
                  onBlur={handleSaveNotes}
                  className="w-full text-xs p-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-brand-500 focus:outline-hidden"
                />
                {localLink && (
                  <a
                    href={localLink}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                Catatan Internal / Kendala Dokumen:
              </label>
              <textarea
                rows={2}
                placeholder="Misal: SK Tim sedang proses tanda tangan kepala dinas..."
                value={localNotes}
                onChange={(e) => setLocalNotes(e.target.value)}
                onBlur={handleSaveNotes}
                className="w-full text-xs p-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-brand-500 focus:outline-hidden resize-none"
              />
            </div>
          </div>

        </div>

        {/* Footer Actions */}
        <div className="p-4 sm:p-5 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                onClose();
                onOpenReviewAi(indicator);
              }}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold text-emerald-800 bg-emerald-100 hover:bg-emerald-200 border border-emerald-300 transition-all"
            >
              <Sparkles className="w-4 h-4 text-emerald-600" />
              <span>Review Kelayakan Bukti via AI</span>
            </button>

            <button
              onClick={() => {
                onClose();
                onAskAi(indicator);
              }}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold text-purple-800 bg-purple-100 hover:bg-purple-200 border border-purple-300 transition-all"
            >
              <Sparkles className="w-4 h-4 text-purple-600" />
              <span>Tanya Regulasi Indikator</span>
            </button>
          </div>

          <button
            onClick={() => {
              handleSaveNotes();
              onClose();
            }}
            className="px-5 py-2 rounded-xl text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 transition-all"
          >
            Tutup & Simpan
          </button>
        </div>

      </div>

    </div>
  );
}
