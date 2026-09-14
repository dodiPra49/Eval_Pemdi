import React, { useState, useMemo } from 'react';
import { Download, FileText, CheckCircle2, FolderDown, ArrowRight, Search } from 'lucide-react';
import { TEMPLATES_DATA, getTotalTemplateCount } from '../../data/templatesData';

export const TEMPLATE_DATA = TEMPLATES_DATA;

export default function TemplatesView({ onOpenIndicatorDetail }) {
  const [formatFilter, setFormatFilter] = useState('all'); // 'all' | 'docx' | 'xlsx'
  const [selectedInd, setSelectedInd] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredGroups = useMemo(() => {
    return TEMPLATES_DATA.filter(group => {
      if (selectedInd !== 'all' && group.indicatorCode !== selectedInd) return false;
      return true;
    }).map(group => {
      const files = group.files.filter(f => {
        // Format filter
        if (formatFilter !== 'all' && f.format.toLowerCase() !== formatFilter.toLowerCase()) {
          return false;
        }
        // Search query filter
        if (searchQuery.trim()) {
          const q = searchQuery.toLowerCase();
          const matchFileName = f.name.toLowerCase().includes(q);
          const matchFileDesc = f.desc.toLowerCase().includes(q);
          const matchIndCode = group.indicatorCode.toLowerCase().includes(q);
          const matchIndName = group.indicatorName.toLowerCase().includes(q);
          const matchDomain = group.domain.toLowerCase().includes(q);
          if (!matchFileName && !matchFileDesc && !matchIndCode && !matchIndName && !matchDomain) {
            return false;
          }
        }
        return true;
      });
      return { ...group, files };
    }).filter(group => group.files.length > 0);
  }, [selectedInd, formatFilter, searchQuery]);

  const totalFilesAvailable = getTotalTemplateCount();

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
            Katalog Berkas Bukti Dukung Siap Pakai (20 Indikator)
          </h1>

          <p className="text-sm sm:text-base text-brand-50/95 leading-relaxed font-normal mb-6">
            Unduh langsung template format resmi <strong>Microsoft Word (.docx)</strong> dan <strong>Microsoft Excel (.xlsx)</strong> untuk seluruh 20 indikator evaluasi PermenPANRB No. 8/2026 guna mempercepat penyusunan bukti dukung instansi.
          </p>

          <div className="flex flex-wrap gap-3 text-xs sm:text-sm font-semibold">
            <div className="bg-white/15 backdrop-blur-md px-3.5 py-2 rounded-xl border border-white/20 flex items-center gap-2">
              <FileText className="w-4 h-4 text-sunshine-300" />
              <span>{totalFilesAvailable} Berkas Template Resmi</span>
            </div>
            <div className="bg-white/15 backdrop-blur-md px-3.5 py-2 rounded-xl border border-white/20 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-300" />
              <span>Lengkap 20 Indikator Kinerja Pemdi</span>
            </div>
          </div>
        </div>
      </div>

      {/* Filter & Search Toolbar */}
      <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/90 shadow-xs space-y-3">
        
        {/* Row 1: Search & Format Filter */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
          <div className="relative flex-1">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
              <Search className="w-4 h-4" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari nama dokumen, SOP, SK, matriks, atau kode indikator (misal: IND-05)..."
              className="w-full pl-10 pr-4 py-2 text-sm bg-slate-50 border border-slate-300 rounded-xl focus:ring-2 focus:ring-brand-500 focus:border-brand-500 focus:bg-white transition-all outline-hidden text-slate-900"
            />
          </div>

          <div className="flex items-center gap-2 shrink-0">
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

        {/* Row 2: Pills Indikator (Scrollable / Wrap) */}
        <div className="pt-2 border-t border-slate-100">
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="text-xs font-bold text-slate-500 mr-1">Indikator:</span>
            <button
              onClick={() => setSelectedInd('all')}
              className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all ${
                selectedInd === 'all'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              Semua ({totalFilesAvailable})
            </button>
            {TEMPLATES_DATA.map(item => (
              <button
                key={item.indicatorCode}
                onClick={() => setSelectedInd(item.indicatorCode)}
                className={`px-2 py-1 rounded-lg text-xs font-bold transition-all ${
                  selectedInd === item.indicatorCode
                    ? 'bg-brand-600 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {item.indicatorCode}
              </button>
            ))}
          </div>
        </div>

      </div>

      {/* Grid of Indicator Template Groups */}
      <div className="space-y-8">
        {filteredGroups.length === 0 ? (
          <div className="bg-white rounded-3xl border border-slate-200 p-12 text-center space-y-3">
            <FolderDown className="w-10 h-10 text-slate-300 mx-auto" />
            <p className="text-base font-bold text-slate-700">Tidak ada template yang cocok dengan pencarian</p>
            <p className="text-xs text-slate-500">Coba ubah kata kunci pencarian atau reset filter indikator.</p>
          </div>
        ) : (
          filteredGroups.map(group => (
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
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-600 hover:text-brand-700 bg-brand-50 hover:bg-brand-100 px-3 py-1.5 rounded-xl transition-colors cursor-pointer"
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
          ))
        )}
      </div>

    </div>
  );
}
