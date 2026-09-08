import React, { useState } from 'react';
import { X, KeyRound, Check, RefreshCw, AlertCircle, Sparkles } from 'lucide-react';
import { getApiKey, setApiKey } from '../../services/geminiService';

export default function ApiKeyModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const [currentKey, setCurrentKeyState] = useState(getApiKey());
  const [isSaved, setIsSaved] = useState(false);

  const handleSave = (e) => {
    e.preventDefault();
    setApiKey(currentKey);
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 2500);
  };

  const handleResetDefault = () => {
    const envKey = import.meta.env.VITE_GEMINI_API_KEY || '';
    setCurrentKeyState(envKey);
    setApiKey(envKey);
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 animate-fadeIn">
      <div className="bg-white w-full max-w-lg rounded-3xl shadow-2xl border border-slate-200 overflow-hidden">
        
        {/* Header */}
        <div className="p-5 bg-gradient-to-r from-slate-900 to-indigo-950 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center">
              <KeyRound className="w-5 h-5 text-amber-400" />
            </div>
            <div>
              <h3 className="font-extrabold text-base sm:text-lg">Pengaturan Google Gemini API</h3>
              <p className="text-xs text-slate-300">Konfigurasi token kecerdasan buatan</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Form */}
        <form onSubmit={handleSave} className="p-5 sm:p-6 space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5">
              Google Gemini API Key:
            </label>
            <input
              type="text"
              value={currentKey}
              onChange={(e) => setCurrentKeyState(e.target.value)}
              placeholder="Masukkan kunci API Gemini..."
              className="w-full text-xs font-mono p-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-brand-500 focus:outline-hidden"
            />
            <p className="text-[11px] text-slate-500 mt-1.5 leading-relaxed">
              Kunci API ini digunakan untuk menjalankan konsultasi indikator dan reviewer kelayakan dokumen bukti melalui model <code>Gemini Flash (gemini-flash-latest)</code>.
            </p>
          </div>

          <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200 text-xs text-slate-600 space-y-1.5">
            <div className="font-bold text-slate-800 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-brand-600" />
              Untuk Netlify Deployment:
            </div>
            <p>
              Di dashboard Netlify, tambahkan environment variable <code>VITE_GEMINI_API_KEY</code> pada menu <strong>Site configuration &gt; Environment variables</strong> agar otomatis aktif saat di-deploy.
            </p>
          </div>

          {isSaved && (
            <div className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs rounded-xl flex items-center gap-2">
              <Check className="w-4 h-4 text-emerald-600" />
              <span>Kunci API berhasil disimpan!</span>
            </div>
          )}

          {/* Buttons */}
          <div className="flex items-center justify-between pt-2">
            <button
              type="button"
              onClick={handleResetDefault}
              className="text-xs text-slate-500 hover:text-slate-800 underline font-medium flex items-center gap-1"
            >
              <RefreshCw className="w-3 h-3" />
              Gunakan Default Key
            </button>

            <div className="flex gap-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-100"
              >
                Batal
              </button>
              <button
                type="submit"
                className="px-5 py-2 rounded-xl text-xs font-bold text-white bg-brand-600 hover:bg-brand-700 shadow-md shadow-brand-500/20"
              >
                Simpan Kunci
              </button>
            </div>
          </div>

        </form>

      </div>
    </div>
  );
}
