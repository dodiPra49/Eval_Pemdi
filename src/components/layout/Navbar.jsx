import React from 'react';
import { Sparkles, FolderDown } from 'lucide-react';

export default function Navbar({ onOpenAi, activeTab, setActiveTab }) {
  return (
    <header className="sticky top-0 z-30 bg-white/90 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Logo & Title */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-tr from-brand-600 via-tealAccent-500 to-sunshine-400 flex items-center justify-center shadow-md shadow-brand-500/20">
              <span className="text-white font-extrabold text-lg sm:text-xl tracking-tight">EP</span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-slate-900 tracking-tight text-base sm:text-xl">
                  EVAL<span className="text-brand-600">-PEMDI</span>
                </span>
                <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800 border border-emerald-200">
                  PermenPANRB 8/2026
                </span>
              </div>
              <p className="text-xs text-slate-500 line-clamp-1">
                Pedoman & Template Bukti Dukung PermenPANRB 8/2026
              </p>
            </div>
          </div>

          {/* Desktop / Tablet Navigation Pills */}
          <div className="hidden md:flex items-center gap-1 bg-slate-100/90 p-1.5 rounded-2xl border border-slate-200">
            <button
              onClick={() => setActiveTab('indicators')}
              className={`px-3.5 py-2 rounded-xl text-sm font-semibold transition-all ${
                activeTab === 'indicators'
                  ? 'bg-white text-brand-700 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Katalog Indikator
            </button>
            <button
              onClick={() => setActiveTab('templates')}
              className={`px-3.5 py-2 rounded-xl text-sm font-semibold transition-all flex items-center gap-1.5 ${
                activeTab === 'templates'
                  ? 'bg-white text-indigo-700 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <FolderDown className="w-4 h-4 text-indigo-600" />
              <span>Template Bukti</span>
              <span className="px-1.5 py-0.2 rounded-full text-[10px] font-bold bg-indigo-100 text-indigo-800">
                20 Berkas
              </span>
            </button>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* AI Assistant Button */}
            <button
              onClick={onOpenAi}
              className="relative inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-brand-600 via-indigo-600 to-purple-600 hover:from-brand-700 hover:to-purple-700 shadow-md shadow-brand-500/25 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <Sparkles className="w-4 h-4 text-sunshine-400 animate-pulse" />
              <span className="hidden xs:inline">Asisten AI</span>
              <span className="xs:hidden">AI</span>
            </button>
          </div>

        </div>
      </div>
    </header>
  );
}
