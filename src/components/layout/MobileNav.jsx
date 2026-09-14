import React from 'react';
import { LayoutGrid, Sparkles, FolderDown, ShieldCheck } from 'lucide-react';

export default function MobileNav({ activeTab, setActiveTab, onOpenAi, isAdminLoggedIn, onOpenAdminLogin }) {
  const handleAdminClick = () => {
    if (isAdminLoggedIn) {
      setActiveTab('admin');
    } else {
      onOpenAdminLogin();
    }
  };

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-lg border-t border-slate-200 px-3 py-1.5 shadow-lg">
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
          <span className="text-[10px]">Katalog</span>
        </button>

        {/* Tab Template */}
        <button
          onClick={() => setActiveTab('templates')}
          className={`flex flex-col items-center gap-1 py-1 px-3 rounded-xl transition-all ${
            activeTab === 'templates'
              ? 'text-indigo-600 font-bold'
              : 'text-slate-500 hover:text-slate-800'
          }`}
        >
          <FolderDown className="w-5 h-5 text-indigo-600" />
          <span className="text-[10px]">Template</span>
        </button>

        {/* Tab Admin */}
        <button
          onClick={handleAdminClick}
          className={`flex flex-col items-center gap-1 py-1 px-3 rounded-xl transition-all ${
            activeTab === 'admin'
              ? 'text-slate-900 font-bold'
              : 'text-slate-500 hover:text-slate-800'
          }`}
        >
          <ShieldCheck className={`w-5 h-5 ${isAdminLoggedIn ? 'text-emerald-600' : 'text-slate-600'}`} />
          <span className="text-[10px]">Admin</span>
        </button>

        {/* AI Assistant Quick Trigger */}
        <button
          onClick={onOpenAi}
          className="flex flex-col items-center gap-1 py-1 px-3 rounded-xl text-purple-600 font-bold hover:scale-105 transition-transform"
        >
          <div className="w-6 h-6 rounded-full bg-gradient-to-r from-brand-600 to-purple-600 flex items-center justify-center text-white shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-sunshine-300" />
          </div>
          <span className="text-[10px]">AI Asisten</span>
        </button>

      </div>
    </div>
  );
}
