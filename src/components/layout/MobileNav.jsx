import React from 'react';
import { LayoutGrid, BarChart3, Sparkles, KeyRound } from 'lucide-react';

export default function MobileNav({ activeTab, setActiveTab, onOpenAi, onOpenApiKey, stats }) {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-lg border-t border-slate-200 px-3 py-2 shadow-lg">
      <div className="flex items-center justify-around">
        
        {/* Tab Indikator */}
        <button
          onClick={() => setActiveTab('indicators')}
          className={`flex flex-col items-center gap-1 py-1 px-3 rounded-xl transition-all ${
            activeTab === 'indicators'
              ? 'text-brand-600 font-bold'
              : 'text-slate-500 hover:text-slate-800'
          }`}
        >
          <LayoutGrid className="w-5 h-5" />
          <span className="text-[11px]">Indikator</span>
        </button>

        {/* Tab Dashboard / Progres */}
        <button
          onClick={() => setActiveTab('dashboard')}
          className={`flex flex-col items-center gap-1 py-1 px-3 rounded-xl transition-all ${
            activeTab === 'dashboard'
              ? 'text-brand-600 font-bold'
              : 'text-slate-500 hover:text-slate-800'
          }`}
        >
          <div className="relative">
            <BarChart3 className="w-5 h-5" />
            <span className="absolute -top-1 -right-2 bg-emerald-500 text-white text-[9px] font-extrabold px-1 rounded-full">
              {stats.completionPercentage}%
            </span>
          </div>
          <span className="text-[11px]">Progres</span>
        </button>

        {/* AI Assistant Quick Trigger */}
        <button
          onClick={onOpenAi}
          className="flex flex-col items-center gap-1 py-1 px-3 rounded-xl text-purple-600 font-bold hover:scale-105 transition-transform"
        >
          <div className="w-7 h-7 rounded-full bg-gradient-to-r from-brand-600 to-purple-600 flex items-center justify-center text-white shadow-xs">
            <Sparkles className="w-4 h-4 text-sunshine-300" />
          </div>
          <span className="text-[11px]">AI Asisten</span>
        </button>

        {/* API Key Modal Trigger */}
        <button
          onClick={onOpenApiKey}
          className="flex flex-col items-center gap-1 py-1 px-3 rounded-xl text-slate-500 hover:text-slate-800 transition-all"
        >
          <KeyRound className="w-5 h-5 text-amber-500" />
          <span className="text-[11px]">API Key</span>
        </button>

      </div>
    </div>
  );
}
