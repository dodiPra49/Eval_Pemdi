import React, { useState, useMemo } from 'react';
import { 
  Search, 
  Filter, 
  Sparkles, 
  Layers, 
  CheckCircle, 
  FileText, 
  Smartphone, 
  ChevronRight,
  TrendingUp,
  ShieldCheck,
  Zap,
  Info
} from 'lucide-react';

import Navbar from './components/layout/Navbar';
import MobileNav from './components/layout/MobileNav';
import IndicatorCard from './components/indicators/IndicatorCard';
import IndicatorDetailModal from './components/indicators/IndicatorDetailModal';
import GeminiAssistantModal from './components/ai/GeminiAssistantModal';
import EvidenceReviewerModal from './components/ai/EvidenceReviewerModal';
import ApiKeyModal from './components/indicators/ApiKeyModal';
import SummaryDashboard from './components/checklist/SummaryDashboard';

import { DOMAINS, MATURITY_LEVELS } from './data/domainsData';
import { INDICATORS } from './data/indicatorsData';
import { useChecklist } from './hooks/useChecklist';

export default function App() {
  const { data, toggleCheckItem, updateIndicatorState, resetAllData, stats } = useChecklist();

  // Navigation state: 'indicators' | 'dashboard'
  const [activeTab, setActiveTab] = useState('indicators');

  // Filter & Search states
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDomain, setSelectedDomain] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all'); // 'all' | 'incomplete' | 'complete'

  // Modals state
  const [selectedIndicatorForDetail, setSelectedIndicatorForDetail] = useState(null);
  const [selectedIndicatorForReview, setSelectedIndicatorForReview] = useState(null);
  const [contextIndicatorForAi, setContextIndicatorForAi] = useState(null);
  const [isAiModalOpen, setIsAiModalOpen] = useState(false);
  const [isApiKeyModalOpen, setIsApiKeyModalOpen] = useState(false);

  // Filtering indicators
  const filteredIndicators = useMemo(() => {
    return INDICATORS.filter(ind => {
      // Domain filter
      if (selectedDomain !== 'all' && ind.domainId !== selectedDomain) {
        return false;
      }

      // Search query filter (matches code, name, description, or aspectName)
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchCode = ind.code.toLowerCase().includes(q);
        const matchName = ind.name.toLowerCase().includes(q);
        const matchDesc = ind.description.toLowerCase().includes(q);
        const matchAspect = ind.aspectName.toLowerCase().includes(q);
        const matchEvidence = ind.evidenceNarration.toLowerCase().includes(q);

        if (!matchCode && !matchName && !matchDesc && !matchAspect && !matchEvidence) {
          return false;
        }
      }

      // Status filter (based on checklist progress)
      if (selectedStatus !== 'all') {
        const indState = data[ind.id];
        const checklist = ind.evidenceChecklist || [];
        const total = checklist.length;
        let checkedCount = 0;
        if (indState?.checkedItems) {
          checklist.forEach(item => {
            if (indState.checkedItems[item.id]) checkedCount++;
          });
        }

        if (selectedStatus === 'complete' && checkedCount < total) return false;
        if (selectedStatus === 'incomplete' && checkedCount === total) return false;
      }

      return true;
    });
  }, [searchQuery, selectedDomain, selectedStatus, data]);

  const handleOpenAiWithContext = (indicator) => {
    setContextIndicatorForAi(indicator);
    setIsAiModalOpen(true);
  };

  const handleOpenAiGeneral = () => {
    setContextIndicatorForAi(null);
    setIsAiModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col text-slate-900 pb-20 md:pb-8">
      
      {/* Navbar */}
      <Navbar
        stats={stats}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenAi={handleOpenAiGeneral}
        onOpenApiKey={() => setIsApiKeyModalOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8 w-full">
        
        {/* Banner Hero (Hanya tampil di tab Indikator) */}
        {activeTab === 'indicators' && (
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-brand-700 via-indigo-600 to-teal-500 text-white p-6 sm:p-8 md:p-10 mb-8 shadow-xl shadow-brand-500/10">
            {/* Background decorative glow */}
            <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white/10 blur-2xl pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-sunshine-400/20 blur-2xl pointer-events-none" />

            <div className="relative z-10 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-white/20 backdrop-blur-md mb-4 border border-white/25">
                <Zap className="w-3.5 h-3.5 text-sunshine-300" />
                <span>PermenPANRB Nomor 8 Tahun 2026</span>
              </div>

              <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-3 sm:mb-4 leading-tight">
                Evaluasi Pemerintahan Digital Terpadu
              </h1>

              <p className="text-sm sm:text-base text-brand-50/90 leading-relaxed font-normal mb-6">
                Eksplorasi seluruh indikator evaluasi, pelajari narasi dokumen bukti wajib per tingkat kematangan, dan manfaatkan asisten cerdas <strong>Google Gemini AI</strong> untuk memastikan instansi Anda siap meraih predikat tertinggi.
              </p>

              {/* Quick Highlight Stats Pills */}
              <div className="flex flex-wrap gap-3 text-xs sm:text-sm font-semibold">
                <div className="bg-white/15 backdrop-blur-md px-3.5 py-2 rounded-xl border border-white/20 flex items-center gap-2">
                  <FileText className="w-4 h-4 text-sunshine-300" />
                  <span>20 Indikator Kinerja Pemdi</span>
                </div>
                <div className="bg-white/15 backdrop-blur-md px-3.5 py-2 rounded-xl border border-white/20 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-300" />
                  <span>{stats.completionPercentage}% Dokumen Siap</span>
                </div>
                <div className="bg-white/15 backdrop-blur-md px-3.5 py-2 rounded-xl border border-white/20 flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-cyan-200" />
                  <span>Indeks Pemdi: {stats.averageMaturityIndex}</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 1: KATALOG INDIKATOR */}
        {activeTab === 'indicators' ? (
          <div>
            
            {/* Filter & Search Bar */}
            <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm mb-6 space-y-4">
              
              {/* Search & Domain Filter Row */}
              <div className="flex flex-col sm:flex-row gap-3">
                
                {/* Search Input */}
                <div className="relative flex-1">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Cari indikator, kata kunci bukti (contoh: PDP, Geospasial, Statistik, SPLP, AI, Kriptografi)..."
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:ring-2 focus:ring-brand-500 focus:outline-hidden"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery('')}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-700 font-bold"
                    >
                      Clear
                    </button>
                  )}
                </div>

                {/* Status Filter */}
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-slate-500 hidden lg:inline">Status:</span>
                  <select
                    value={selectedStatus}
                    onChange={(e) => setSelectedStatus(e.target.value)}
                    className="text-xs sm:text-sm py-2.5 px-3 rounded-xl border border-slate-300 bg-white font-medium text-slate-700 cursor-pointer focus:ring-2 focus:ring-brand-500 focus:outline-hidden"
                  >
                    <option value="all">Semua Status</option>
                    <option value="incomplete">Belum Lengkap</option>
                    <option value="complete">100% Lengkap</option>
                  </select>
                </div>

              </div>

              {/* Aspek Filter Pills */}
              <div className="flex items-center gap-2 overflow-x-auto pb-1">
                <button
                  onClick={() => setSelectedDomain('all')}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all shrink-0 ${
                    selectedDomain === 'all'
                      ? 'bg-slate-900 text-white shadow-xs'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  Semua Aspek ({INDICATORS.length})
                </button>

                {DOMAINS.map(domain => {
                  const count = INDICATORS.filter(ind => ind.domainId === domain.id).length;
                  const isSelected = selectedDomain === domain.id;
                  return (
                    <button
                      key={domain.id}
                      onClick={() => setSelectedDomain(domain.id)}
                      className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all shrink-0 flex items-center gap-1.5 ${
                        isSelected
                          ? 'bg-brand-600 text-white shadow-xs'
                          : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                      }`}
                    >
                      <span>{domain.code}: {domain.name} ({domain.weight}%)</span>
                      <span className={`px-1.5 py-0.2 rounded-full text-[10px] ${
                        isSelected ? 'bg-white/20' : 'bg-slate-200 text-slate-700'
                      }`}>
                        {count}
                      </span>
                    </button>
                  );
                })}
              </div>

            </div>

            {/* Indicator Cards Grid */}
            {filteredIndicators.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {filteredIndicators.map(indicator => (
                  <IndicatorCard
                    key={indicator.id}
                    indicator={indicator}
                    indicatorState={data[indicator.id]}
                    onOpenDetail={(ind) => setSelectedIndicatorForDetail(ind)}
                    onOpenReviewAi={(ind) => setSelectedIndicatorForReview(ind)}
                    onAskAi={(ind) => handleOpenAiWithContext(ind)}
                    onUpdateLevel={(id, lvl) => updateIndicatorState(id, { selfLevel: lvl })}
                  />
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-3xl p-12 text-center border border-slate-200 shadow-sm">
                <Info className="w-12 h-12 text-slate-400 mx-auto mb-3" />
                <h3 className="font-bold text-slate-800 text-lg mb-1">
                  Tidak ada indikator yang sesuai
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mb-4">
                  Coba sesuaikan kata kunci pencarian atau filter domain yang Anda gunakan.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedDomain('all');
                    setSelectedStatus('all');
                  }}
                  className="px-4 py-2 rounded-xl bg-brand-600 text-white text-xs font-bold"
                >
                  Reset Filter
                </button>
              </div>
            )}

          </div>
        ) : (
          /* TAB 2: STATISTIK & PROGRES */
          <SummaryDashboard
            stats={stats}
            checklistData={data}
            onResetAll={resetAllData}
            onOpenAi={handleOpenAiGeneral}
          />
        )}

      </main>

      {/* Mobile Bottom Navigation Bar (Visible on phone/tablet) */}
      <MobileNav
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenAi={handleOpenAiGeneral}
        onOpenApiKey={() => setIsApiKeyModalOpen(true)}
        stats={stats}
      />

      {/* MODAL 1: Detail Indikator & Narasi Dokumen Bukti */}
      <IndicatorDetailModal
        indicator={selectedIndicatorForDetail}
        indicatorState={selectedIndicatorForDetail ? data[selectedIndicatorForDetail.id] : null}
        onClose={() => setSelectedIndicatorForDetail(null)}
        onToggleCheck={toggleCheckItem}
        onUpdateState={updateIndicatorState}
        onOpenReviewAi={(ind) => setSelectedIndicatorForReview(ind)}
        onAskAi={(ind) => handleOpenAiWithContext(ind)}
      />

      {/* MODAL 2: Reviewer Kelayakan Dokumen Bukti dengan Gemini */}
      <EvidenceReviewerModal
        isOpen={!!selectedIndicatorForReview}
        onClose={() => setSelectedIndicatorForReview(null)}
        indicator={selectedIndicatorForReview}
      />

      {/* MODAL 3: Asisten AI Interaktif Regulasi */}
      <GeminiAssistantModal
        isOpen={isAiModalOpen}
        onClose={() => setIsAiModalOpen(false)}
        contextIndicator={contextIndicatorForAi}
      />

      {/* MODAL 4: Pengaturan Kunci Google Gemini API */}
      <ApiKeyModal
        isOpen={isApiKeyModalOpen}
        onClose={() => setIsApiKeyModalOpen(false)}
      />

    </div>
  );
}
