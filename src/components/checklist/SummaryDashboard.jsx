import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';
import { Award, CheckCircle, BarChart2, ShieldCheck, FileText, AlertCircle, RotateCcw, Sparkles } from 'lucide-react';
import { DOMAINS, MATURITY_LEVELS } from '../../data/domainsData';
import { INDICATORS } from '../../data/indicatorsData';

export default function SummaryDashboard({ stats, checklistData, onResetAll, onOpenAi }) {
  const { completionPercentage, averageMaturityIndex, totalCheckedItems, totalChecklistItems } = stats;

  useEffect(() => {
    if (completionPercentage >= 80) {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    }
  }, [completionPercentage]);

  // Evaluasi Predikat SPBE berdasarkan Indeks
  const indexNum = parseFloat(averageMaturityIndex);
  let predikat = "Kurang";
  let predikatColor = "bg-rose-100 text-rose-800 border-rose-200";
  if (indexNum >= 4.2) {
    predikat = "Memuaskan (Optimum)";
    predikatColor = "bg-indigo-100 text-indigo-800 border-indigo-200";
  } else if (indexNum >= 3.5) {
    predikat = "Sangat Baik (Terpadu)";
    predikatColor = "bg-emerald-100 text-emerald-800 border-emerald-200";
  } else if (indexNum >= 2.6) {
    predikat = "Baik (Terstandarisasi)";
    predikatColor = "bg-blue-100 text-blue-800 border-blue-200";
  } else if (indexNum >= 1.8) {
    predikat = "Cukup (Terkelola)";
    predikatColor = "bg-amber-100 text-amber-800 border-amber-200";
  }

  return (
    <div className="space-y-6 pb-12 animate-fadeIn">
      
      {/* Top Banner Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        
        {/* Card 1: Estimated SPBE Maturity Score */}
        <div className="bg-gradient-to-br from-brand-600 via-indigo-600 to-purple-700 rounded-3xl p-6 text-white shadow-xl flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-200">
              Estimasi Indeks Kematangan
            </span>
            <div className="p-2 rounded-xl bg-white/10">
              <Award className="w-5 h-5 text-sunshine-300" />
            </div>
          </div>

          <div className="my-4">
            <div className="text-4xl sm:text-5xl font-black tracking-tight flex items-baseline gap-2">
              {averageMaturityIndex}
              <span className="text-lg text-brand-200 font-normal">/ 5.00</span>
            </div>
            <div className="mt-2 inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-white/20 backdrop-blur-md">
              Predikat: {predikat}
            </div>
          </div>

          <p className="text-xs text-brand-100/90 leading-relaxed">
            Berdasarkan penetapan target mandiri pada 12 indikator evaluasi.
          </p>
        </div>

        {/* Card 2: Kelengkapan Dokumen Bukti (Checklist) */}
        <div className="bg-gradient-to-br from-emerald-500 via-teal-600 to-cyan-600 rounded-3xl p-6 text-white shadow-xl flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-100">
              Kesiapan Bukti Dukung (Evidence)
            </span>
            <div className="p-2 rounded-xl bg-white/10">
              <CheckCircle className="w-5 h-5 text-emerald-200" />
            </div>
          </div>

          <div className="my-4">
            <div className="text-4xl sm:text-5xl font-black tracking-tight">
              {completionPercentage}%
            </div>
            <div className="mt-2 text-xs font-semibold text-emerald-100">
              {totalCheckedItems} dari {totalChecklistItems} item bukti fisik/digital siap
            </div>
            <div className="w-full bg-white/20 h-2.5 rounded-full overflow-hidden mt-3">
              <div 
                className="bg-white h-full rounded-full transition-all duration-500"
                style={{ width: `${completionPercentage}%` }}
              />
            </div>
          </div>

          <p className="text-xs text-emerald-100/90 leading-relaxed">
            {completionPercentage === 100 
              ? 'Luar biasa! Seluruh dokumen bukti telah siap diverifikasi.' 
              : 'Lengkapi dokumen bukti bertanda [Wajib] untuk memastikan lolos asesmen.'}
          </p>
        </div>

        {/* Card 3: AI Quick Consultation */}
        <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xl flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Asisten AI PermenPANRB
            </span>
            <div className="p-2 rounded-xl bg-purple-50 text-purple-600">
              <Sparkles className="w-5 h-5" />
            </div>
          </div>

          <div className="my-3">
            <h4 className="font-bold text-slate-900 text-base mb-1">
              Optimasi Bukti & Gap Analysis
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Manfaatkan Google Gemini untuk menganalisis kesesuaian draf SK, SOP, dan format laporan sebelum diserahkan ke asesor pusat.
            </p>
          </div>

          <button
            onClick={onOpenAi}
            className="w-full py-2.5 px-4 rounded-xl text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 transition-colors flex items-center justify-center gap-2"
          >
            <Sparkles className="w-4 h-4 text-sunshine-400" />
            Buka Konsultasi Asisten AI
          </button>
        </div>

      </div>

      {/* Domain / Aspek Breakdown Progress */}
      <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-md">
        <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
          <div>
            <h3 className="text-base sm:text-lg font-black text-slate-900 flex items-center gap-2">
              <BarChart2 className="w-5 h-5 text-brand-600" />
              Kesiapan Dokumen Berdasarkan 7 Aspek Utama
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Instrumen Evaluasi Kinerja Pemerintah Digital (PermenPANRB No. 8 Tahun 2026)
            </p>
          </div>
          <span className="text-xs font-bold px-3 py-1 bg-brand-50 text-brand-700 rounded-full border border-brand-200">
            Total Bobot: 100% | 20 Indikator
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {DOMAINS.map(domain => {
            const domainIndicators = INDICATORS.filter(ind => ind.domainId === domain.id);
            let domainTotalChecks = 0;
            let domainDoneChecks = 0;

            domainIndicators.forEach(ind => {
              const checklist = ind.evidenceChecklist || [];
              domainTotalChecks += checklist.length;
              const indState = checklistData[ind.id];
              if (indState?.checkedItems) {
                checklist.forEach(item => {
                  if (indState.checkedItems[item.id]) domainDoneChecks++;
                });
              }
            });

            const percent = domainTotalChecks > 0 ? Math.round((domainDoneChecks / domainTotalChecks) * 100) : 0;

            return (
              <div 
                key={domain.id}
                className="bg-slate-50 border border-slate-200 rounded-2xl p-4 flex flex-col justify-between hover:bg-white hover:shadow-md transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-1.5">
                      <span className="font-mono text-xs font-black px-2 py-0.5 rounded-md bg-slate-900 text-white shadow-xs">
                        {domain.code}
                      </span>
                      <span className="text-[11px] font-bold px-1.5 py-0.5 rounded-md bg-amber-100 text-amber-800 border border-amber-200">
                        Bobot {domain.weight}%
                      </span>
                    </div>
                    <span className="text-xs font-bold text-slate-700">
                      {percent}%
                    </span>
                  </div>
                  <h4 className="font-bold text-xs sm:text-sm text-slate-900 mb-1">
                    {domain.name}
                  </h4>
                  <p className="text-[11px] text-slate-500 line-clamp-2 mb-3">
                    {domain.description}
                  </p>
                </div>

                <div>
                  <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                    <div 
                      className="bg-brand-600 h-full rounded-full transition-all duration-300"
                      style={{ width: `${percent}%` }}
                    />
                  </div>
                  <div className="mt-2 flex justify-between text-[10px] text-slate-500">
                    <span>{domainDoneChecks}/{domainTotalChecks} Dokumen</span>
                    <span>{domainIndicators.length} Indikator</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Reset & Clean Data Action */}
      <div className="flex justify-between items-center bg-slate-100/70 p-4 rounded-2xl border border-slate-200">
        <div className="text-xs text-slate-600">
          Status checklist tersimpan otomatis di peramban (LocalStorage) perangkat ini.
        </div>
        <button
          onClick={() => {
            if (window.confirm("Apakah Anda yakin ingin mengatur ulang semua checklist dan nilai mandiri?")) {
              onResetAll();
            }
          }}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold text-rose-700 bg-rose-50 hover:bg-rose-100 border border-rose-200 transition-colors"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          Reset Progres
        </button>
      </div>

    </div>
  );
}
