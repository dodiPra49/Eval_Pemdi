import React, { useState, useEffect } from 'react';
import { X, CheckSquare, Square, FileText, Sparkles, ExternalLink, Lightbulb, ShieldAlert, Award, ArrowRight } from 'lucide-react';
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

          {/* Link Bukti & Catatan Mandiri */}
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
