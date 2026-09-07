import React, { useState } from 'react';
import { X, FileSearch, Sparkles, Loader2, AlertCircle, CheckCircle2, ArrowRight } from 'lucide-react';
import { reviewEvidenceDocument } from '../../services/geminiService';

export default function EvidenceReviewerModal({ isOpen, onClose, indicator }) {
  if (!isOpen || !indicator) return null;

  const [targetLevel, setTargetLevel] = useState(3);
  const [docSummary, setDocSummary] = useState('');
  const [reviewResult, setReviewResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);

  const handleReview = async () => {
    if (!docSummary.trim() || isLoading) return;

    setIsLoading(true);
    setErrorMsg(null);
    setReviewResult(null);

    try {
      const resultText = await reviewEvidenceDocument(indicator, docSummary, targetLevel);
      setReviewResult(resultText);
    } catch (err) {
      setErrorMsg(err.message || "Gagal melakukan review dokumen bukti.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 md:p-6 animate-fadeIn">
      <div className="bg-white w-full max-w-3xl rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="p-5 sm:p-6 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/20">
              <FileSearch className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="font-extrabold text-base sm:text-lg">
                Review Kelayakan Dokumen Bukti (AI Asesor)
              </h3>
              <p className="text-xs text-emerald-100 line-clamp-1">
                {indicator.code} - {indicator.name}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-5">
          
          {/* Form Input */}
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Target Tingkat Kematangan yang Ingin Dicapai:
              </label>
              <div className="flex gap-2 flex-wrap">
                {[1, 2, 3, 4, 5].map(lvl => (
                  <button
                    key={lvl}
                    type="button"
                    onClick={() => setTargetLevel(lvl)}
                    className={`py-1.5 px-3 rounded-xl text-xs font-bold transition-all ${
                      targetLevel === lvl
                        ? 'bg-emerald-600 text-white shadow-xs'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    Level {lvl}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Deskripsikan Dokumen Bukti yang Anda Miliki Saat Ini:
              </label>
              <textarea
                rows={4}
                value={docSummary}
                onChange={(e) => setDocSummary(e.target.value)}
                placeholder="Contoh: Kami memiliki SK Kepala Daerah tahun 2024 tentang arsitektur SPBE, tetapi lampiran 6 domain arsitektur belum disinkronkan ke SIA-SPBE nasional. Kami juga punya notula rapat pembahasan..."
                className="w-full text-xs sm:text-sm p-3.5 rounded-2xl border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:outline-hidden"
              />
              <p className="text-[11px] text-slate-500 mt-1">
                AI akan mencocokkan dokumen Anda dengan standar PermenPANRB 8/2026 dan memberitahukan gap kekurangannya.
              </p>
            </div>

            <button
              onClick={handleReview}
              disabled={!docSummary.trim() || isLoading}
              className="w-full py-3 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 disabled:opacity-50 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md shadow-emerald-600/20 transition-all"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Sedang Menganalisis Dokumen...</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4 text-sunshine-300" />
                  <span>Analisis Kesiapan Dokumen Sekarang</span>
                </>
              )}
            </button>
          </div>

          {errorMsg && (
            <div className="p-3.5 bg-rose-50 border border-rose-200 text-rose-700 text-xs rounded-xl flex items-start gap-2">
              <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
              <div>{errorMsg}</div>
            </div>
          )}

          {/* AI Gap Result */}
          {reviewResult && (
            <div className="p-5 bg-gradient-to-br from-emerald-50/70 via-white to-teal-50/70 border border-emerald-200 rounded-2xl shadow-xs space-y-3">
              <div className="flex items-center gap-2 font-black text-emerald-950 text-sm sm:text-base border-b border-emerald-200/60 pb-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                Hasil Analisis & Rekomendasi Asesor AI:
              </div>
              <div className="prose prose-sm max-w-none text-slate-800 text-xs sm:text-sm whitespace-pre-line leading-relaxed">
                {reviewResult}
              </div>
            </div>
          )}

        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl text-xs font-bold text-slate-700 hover:bg-slate-200 transition-colors"
          >
            Tutup
          </button>
        </div>

      </div>
    </div>
  );
}
