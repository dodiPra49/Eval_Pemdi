import React, { useState, useEffect, useMemo } from 'react';
import { 
  ShieldCheck, 
  LogOut, 
  FileText, 
  Download, 
  Trash2, 
  RefreshCw, 
  Search, 
  Filter, 
  CheckCircle2, 
  AlertTriangle, 
  FolderDown, 
  ExternalLink,
  ChevronDown,
  ChevronUp,
  Clock,
  ArrowLeft,
  FileCheck,
  AlertCircle
} from 'lucide-react';

import { DOMAINS } from '../../data/domainsData';
import { INDICATORS } from '../../data/indicatorsData';
import { getEvidenceList, deleteEvidence } from '../../services/evidenceService';

export default function AdminDashboard({ adminUser, onLogout, onBackToPublic }) {
  const [evidenceList, setEvidenceList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [fetchError, setFetchError] = useState(null);

  // Filters
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDomain, setSelectedDomain] = useState('all');
  const [filterWithEvidenceOnly, setFilterWithEvidenceOnly] = useState(false);

  // Expanded cards state (keep all open or collapsible)
  const [expandedIndicators, setExpandedIndicators] = useState({});

  // Deletion modal state
  const [deletingDoc, setDeletingDoc] = useState(null);
  const [isDeleting, setIsDeleting] = useState(false);
  const [actionSuccessMsg, setActionSuccessMsg] = useState('');

  // Load all evidence documents
  const loadAllEvidence = async () => {
    setIsLoading(true);
    setFetchError(null);
    try {
      const data = await getEvidenceList({});
      setEvidenceList(data || []);
    } catch (err) {
      console.error('Gagal mengambil daftar bukti dukung:', err);
      setFetchError(err.message || 'Gagal memuat dokumen bukti dukung dari basis data.');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadAllEvidence();
  }, []);

  // Map evidence list by indicator_id
  const evidenceByIndicator = useMemo(() => {
    const map = {};
    evidenceList.forEach(doc => {
      const key = doc.indicator_id?.toLowerCase() || '';
      if (!map[key]) {
        map[key] = [];
      }
      map[key].push(doc);
    });
    return map;
  }, [evidenceList]);

  // Filtered indicators list
  const filteredIndicators = useMemo(() => {
    return INDICATORS.filter(ind => {
      // Domain filter
      if (selectedDomain !== 'all' && ind.domainId !== selectedDomain) {
        return false;
      }

      const docs = evidenceByIndicator[ind.id.toLowerCase()] || [];

      // Filter with evidence only
      if (filterWithEvidenceOnly && docs.length === 0) {
        return false;
      }

      // Search query filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchCode = ind.code.toLowerCase().includes(q);
        const matchName = ind.name.toLowerCase().includes(q);
        const matchAspect = ind.aspectName.toLowerCase().includes(q);
        const matchDocs = docs.some(d => 
          (d.judul_dokumen && d.judul_dokumen.toLowerCase().includes(q)) ||
          (d.nomor_surat_resmi && d.nomor_surat_resmi.toLowerCase().includes(q)) ||
          (d.file_name_original && d.file_name_original.toLowerCase().includes(q))
        );

        if (!matchCode && !matchName && !matchAspect && !matchDocs) {
          return false;
        }
      }

      return true;
    });
  }, [selectedDomain, filterWithEvidenceOnly, searchQuery, evidenceByIndicator]);

  // Statistics calculation
  const totalIndicators = INDICATORS.length;
  const totalDocs = evidenceList.length;
  const indicatorsWithDocsCount = useMemo(() => {
    const uniqueInds = new Set(evidenceList.map(d => d.indicator_id?.toLowerCase()));
    return uniqueInds.size;
  }, [evidenceList]);

  // Toggle accordion expand
  const toggleExpand = (indId) => {
    setExpandedIndicators(prev => ({
      ...prev,
      [indId]: !prev[indId]
    }));
  };

  // Expand / Collapse all
  const handleExpandAll = () => {
    const all = {};
    INDICATORS.forEach(ind => {
      all[ind.id] = true;
    });
    setExpandedIndicators(all);
  };

  const handleCollapseAll = () => {
    setExpandedIndicators({});
  };

  // Delete handler
  const confirmDelete = (doc, indicatorName) => {
    setDeletingDoc({ ...doc, indicatorName });
  };

  const handleExecuteDelete = async () => {
    if (!deletingDoc) return;
    setIsDeleting(true);
    try {
      await deleteEvidence(deletingDoc.id, deletingDoc.file_path_storage);
      
      // Update local state
      setEvidenceList(prev => prev.filter(item => item.id !== deletingDoc.id));
      
      setActionSuccessMsg(`Dokumen "${deletingDoc.judul_dokumen || deletingDoc.file_name_original}" berhasil dihapus.`);
      setTimeout(() => setActionSuccessMsg(''), 4000);
      setDeletingDoc(null);
    } catch (err) {
      alert(`Gagal menghapus dokumen: ${err.message}`);
    } finally {
      setIsDeleting(false);
    }
  };

  const formatFileSize = (bytes) => {
    if (!bytes || bytes === 0) return '0 B';
    const k = 1024;
    const sizes = ['B', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
  };

  const formatDate = (isoString) => {
    if (!isoString) return '-';
    try {
      const date = new Date(isoString);
      return date.toLocaleDateString('id-ID', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });
    } catch (e) {
      return isoString;
    }
  };

  return (
    <div className="space-y-6 animate-fadeIn pb-16">
      
      {/* Top Banner Dashboard Admin */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-800 relative overflow-hidden">
        <div className="absolute right-0 top-0 translate-x-1/4 -translate-y-1/4 w-80 h-80 bg-brand-500/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-brand-500/20 text-brand-300 border border-brand-400/30">
              <ShieldCheck className="w-4 h-4 text-brand-400" />
              <span>Modul Pengelolaan Administrator</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Dashboard Evaluasi Pemerintahan Digital
            </h1>
            <p className="text-sm text-slate-300 max-w-2xl">
              Kelola seluruh indikator evaluasi PermenPANRB No. 8/2026, pantau berkas bukti dukung PDF yang diunggah, serta lakukan unduhan maupun penghapusan dokumen.
            </p>
            <div className="pt-1 flex items-center gap-3 text-xs text-slate-400">
              <span>Admin: <strong className="text-white font-semibold">{adminUser?.nama_lengkap || 'Dodi Agusri, S.Kom'}</strong> ({adminUser?.role || 'superadmin'})</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            <button
              onClick={onBackToPublic}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-white/10 hover:bg-white/20 text-white border border-white/15 backdrop-blur-xs transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Lihat Katalog Publik</span>
            </button>
            <button
              onClick={onLogout}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-rose-600/90 hover:bg-rose-600 text-white shadow-md shadow-rose-900/30 transition-all"
            >
              <LogOut className="w-4 h-4" />
              <span>Keluar (Logout)</span>
            </button>
          </div>
        </div>
      </div>

      {/* Success Notification */}
      {actionSuccessMsg && (
        <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm flex items-center justify-between shadow-xs animate-fadeIn">
          <div className="flex items-center gap-2.5">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
            <span>{actionSuccessMsg}</span>
          </div>
          <button 
            onClick={() => setActionSuccessMsg('')}
            className="text-xs font-semibold text-emerald-700 hover:text-emerald-900 px-2 py-1 rounded-md"
          >
            Tutup
          </button>
        </div>
      )}

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
        <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100">
            <FileText className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Total Indikator</span>
            <div className="text-2xl font-black text-slate-900">{totalIndicators} Indikator</div>
            <p className="text-[11px] text-slate-400">PermenPANRB No. 8/2026</p>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0 border border-indigo-100">
            <FolderDown className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Total Dokumen PDF</span>
            <div className="text-2xl font-black text-indigo-600">{totalDocs} Berkas</div>
            <p className="text-[11px] text-slate-400">Tersimpan di Penyimpanan</p>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-100">
            <FileCheck className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Indikator Berdokumen</span>
            <div className="text-2xl font-black text-emerald-600">
              {indicatorsWithDocsCount} / {totalIndicators}
            </div>
            <p className="text-[11px] text-slate-400">{Math.round((indicatorsWithDocsCount / totalIndicators) * 100)}% Terpenuhi bukti dukung</p>
          </div>
        </div>
      </div>

      {/* Filter and Search Controls */}
      <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200 shadow-xs space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
          
          {/* Search Box */}
          <div className="relative flex-1">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
              <Search className="w-4 h-4" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari indikator, aspek, atau judul dokumen bukti PDF..."
              className="w-full pl-10 pr-4 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-xl focus:ring-2 focus:ring-brand-500 focus:border-brand-500 focus:bg-white transition-all outline-hidden text-slate-900"
            />
          </div>

          {/* Domain Filter Dropdown */}
          <div className="flex items-center gap-2">
            <select
              value={selectedDomain}
              onChange={(e) => setSelectedDomain(e.target.value)}
              className="py-2.5 pl-3 pr-8 text-xs sm:text-sm font-medium bg-slate-50 border border-slate-300 rounded-xl focus:ring-2 focus:ring-brand-500 focus:border-brand-500 focus:bg-white transition-all outline-hidden text-slate-800"
            >
              <option value="all">Semua Aspek (7 Aspek)</option>
              {DOMAINS.map(d => (
                <option key={d.id} value={d.id}>{d.name}</option>
              ))}
            </select>

            {/* Refresh Button */}
            <button
              onClick={loadAllEvidence}
              disabled={isLoading}
              title="Segarkan data dokumen"
              className="p-2.5 rounded-xl border border-slate-300 bg-slate-50 hover:bg-slate-100 text-slate-700 transition-colors shrink-0 disabled:opacity-50"
            >
              <RefreshCw className={`w-4 h-4 ${isLoading ? 'animate-spin text-brand-600' : ''}`} />
            </button>
          </div>
        </div>

        {/* Second Row: Checkbox Filter and Accordion toggles */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-slate-100 text-xs">
          <label className="inline-flex items-center gap-2 cursor-pointer select-none">
            <input
              type="checkbox"
              checked={filterWithEvidenceOnly}
              onChange={(e) => setFilterWithEvidenceOnly(e.target.checked)}
              className="rounded-md border-slate-300 text-brand-600 focus:ring-brand-500 w-4 h-4"
            />
            <span className="text-slate-700 font-medium">Hanya tampilkan indikator yang memiliki berkas PDF</span>
          </label>

          <div className="flex items-center gap-2">
            <button
              onClick={handleExpandAll}
              className="text-brand-700 hover:text-brand-800 font-semibold px-2 py-1 rounded hover:bg-brand-50"
            >
              Buka Semua
            </button>
            <span className="text-slate-300">|</span>
            <button
              onClick={handleCollapseAll}
              className="text-slate-600 hover:text-slate-800 font-semibold px-2 py-1 rounded hover:bg-slate-100"
            >
              Tutup Semua
            </button>
          </div>
        </div>
      </div>

      {/* Indicators & PDF Management List */}
      {fetchError && (
        <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-800 text-sm flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <div>
            <h4 className="font-bold">Pemberitahuan Sistem</h4>
            <p className="text-xs mt-0.5">{fetchError}</p>
          </div>
        </div>
      )}

      {isLoading ? (
        <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center space-y-3">
          <div className="w-8 h-8 border-3 border-brand-500 border-t-transparent rounded-full animate-spin mx-auto" />
          <p className="text-sm font-semibold text-slate-700">Memuat data indikator dan dokumen bukti dukung...</p>
        </div>
      ) : filteredIndicators.length === 0 ? (
        <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center space-y-3">
          <FileText className="w-10 h-10 text-slate-300 mx-auto" />
          <p className="text-base font-bold text-slate-700">Tidak ada indikator yang sesuai kriteria pencarian</p>
          <p className="text-xs text-slate-500">Coba ubah kata kunci atau hapus filter indikator.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {filteredIndicators.map((ind) => {
            const docs = evidenceByIndicator[ind.id.toLowerCase()] || [];
            const isExpanded = expandedIndicators[ind.id] ?? (docs.length > 0);

            return (
              <div 
                key={ind.id}
                className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden transition-all"
              >
                {/* Indicator Header Bar */}
                <div 
                  onClick={() => toggleExpand(ind.id)}
                  className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 cursor-pointer hover:bg-slate-50/80 select-none"
                >
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-700 font-black text-sm flex items-center justify-center border border-brand-100 shrink-0">
                      {ind.code}
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <span className="text-[11px] font-bold text-brand-700 bg-brand-50 px-2.5 py-0.5 rounded-full border border-brand-100">
                          {ind.aspectName}
                        </span>
                        <span className="text-[11px] font-medium text-slate-500">
                          Bobot: {ind.aspectWeight}%
                        </span>
                      </div>
                      <h3 className="text-base font-bold text-slate-900 leading-snug">
                        {ind.name}
                      </h3>
                    </div>
                  </div>

                  <div className="flex items-center justify-between sm:justify-end gap-3 shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-slate-100">
                    <div className={`px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1.5 ${
                      docs.length > 0
                        ? 'bg-indigo-50 text-indigo-700 border border-indigo-200'
                        : 'bg-slate-100 text-slate-500'
                    }`}>
                      <FileText className="w-3.5 h-3.5" />
                      <span>{docs.length} Dokumen PDF</span>
                    </div>

                    <button 
                      type="button"
                      className="p-1 text-slate-400 hover:text-slate-600 rounded-lg"
                      aria-label="Toggle accordion"
                    >
                      {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </button>
                  </div>
                </div>

                {/* Expanded Section: List of PDF Documents */}
                {isExpanded && (
                  <div className="border-t border-slate-100 bg-slate-50/50 p-4 sm:p-6 space-y-3">
                    {docs.length === 0 ? (
                      <div className="p-4 rounded-xl bg-white border border-dashed border-slate-200 text-center text-xs text-slate-500">
                        Belum ada dokumen PDF bukti dukung yang diunggah untuk indikator ini. Pengguna dapat mengunggah bukti melalui form checklist di katalog utama.
                      </div>
                    ) : (
                      <div className="space-y-2.5">
                        <div className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center justify-between">
                          <span>Daftar Berkas PDF Bukti Dukung ({docs.length})</span>
                          <span className="text-[11px] text-slate-500 font-normal">Aksi: Unduh Langsung / Hapus Berkas</span>
                        </div>

                        <div className="grid grid-cols-1 gap-3">
                          {docs.map((doc) => {
                            const downloadUrl = doc.external_url || `/uploads/evidence/${doc.file_name_system || doc.file_name_original}`;
                            
                            return (
                              <div
                                key={doc.id}
                                className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-2xs hover:shadow-xs transition-shadow flex flex-col md:flex-row md:items-center justify-between gap-4"
                              >
                                {/* Document Info */}
                                <div className="flex items-start gap-3 flex-1 min-w-0">
                                  <div className="w-10 h-10 rounded-xl bg-rose-50 border border-rose-100 text-rose-600 flex items-center justify-center shrink-0">
                                    <FileText className="w-5 h-5" />
                                  </div>
                                  <div className="min-w-0 flex-1">
                                    <h4 className="text-sm font-bold text-slate-900 truncate">
                                      {doc.judul_dokumen || doc.file_name_original}
                                    </h4>
                                    
                                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-500 mt-1">
                                      {doc.nomor_surat_resmi && (
                                        <span>No: <strong className="text-slate-700 font-medium">{doc.nomor_surat_resmi}</strong></span>
                                      )}
                                      {doc.tahun_terbit && (
                                        <span>Tahun: <strong className="text-slate-700 font-medium">{doc.tahun_terbit}</strong></span>
                                      )}
                                      <span>Ukuran: <strong className="text-slate-700 font-medium">{formatFileSize(doc.file_size_bytes)}</strong></span>
                                      <span className="flex items-center gap-1 text-[11px]">
                                        <Clock className="w-3 h-3" />
                                        {formatDate(doc.created_at)}
                                      </span>
                                    </div>

                                    {doc.deskripsi_singkat && (
                                      <p className="text-xs text-slate-600 mt-1.5 italic line-clamp-1">
                                        "{doc.deskripsi_singkat}"
                                      </p>
                                    )}
                                  </div>
                                </div>

                                {/* Actions: Download & Delete */}
                                <div className="flex items-center gap-2 shrink-0 self-end md:self-center">
                                  {/* Download Link */}
                                  <a
                                    href={downloadUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    download={doc.file_name_original || 'bukti_dukung.pdf'}
                                    className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold text-brand-700 bg-brand-50 hover:bg-brand-100 border border-brand-200 transition-colors shadow-2xs"
                                  >
                                    <Download className="w-4 h-4" />
                                    <span>Unduh PDF</span>
                                  </a>

                                  {/* Delete Button */}
                                  <button
                                    type="button"
                                    onClick={() => confirmDelete(doc, ind.name)}
                                    className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold text-rose-700 bg-rose-50 hover:bg-rose-100 border border-rose-200 transition-colors shadow-2xs"
                                    title="Hapus berkas bukti dukung ini"
                                  >
                                    <Trash2 className="w-4 h-4" />
                                    <span>Hapus</span>
                                  </button>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

      {/* Confirmation Modal for Deletion */}
      {deletingDoc && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
          <div 
            className="bg-white w-full max-w-md rounded-2xl shadow-2xl border border-slate-200 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6 space-y-4">
              <div className="w-12 h-12 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center mx-auto">
                <AlertTriangle className="w-6 h-6" />
              </div>

              <div className="text-center space-y-1.5">
                <h3 className="text-lg font-bold text-slate-900">
                  Hapus Dokumen Bukti Dukung?
                </h3>
                <p className="text-xs text-slate-600">
                  Tindakan ini akan menghapus berkas PDF secara permanen dari database dan penyimpanan. Dokumen tidak dapat dipulihkan kembali.
                </p>
              </div>

              <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200 text-xs space-y-1">
                <div className="font-semibold text-slate-800">
                  {deletingDoc.judul_dokumen || deletingDoc.file_name_original}
                </div>
                <div className="text-slate-500">
                  Indikator: {deletingDoc.indicatorName || deletingDoc.indicator_id}
                </div>
                <div className="text-slate-500">
                  Ukuran: {formatFileSize(deletingDoc.file_size_bytes)}
                </div>
              </div>

              <div className="flex items-center gap-3 pt-2">
                <button
                  type="button"
                  disabled={isDeleting}
                  onClick={() => setDeletingDoc(null)}
                  className="flex-1 py-2.5 px-4 rounded-xl border border-slate-300 text-slate-700 text-xs font-bold hover:bg-slate-50 transition-colors"
                >
                  Batal
                </button>
                <button
                  type="button"
                  disabled={isDeleting}
                  onClick={handleExecuteDelete}
                  className="flex-1 py-2.5 px-4 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold shadow-md shadow-rose-600/20 transition-colors flex items-center justify-center gap-1.5"
                >
                  {isDeleting ? (
                    <>
                      <div className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Menghapus...</span>
                    </>
                  ) : (
                    <>
                      <Trash2 className="w-4 h-4" />
                      <span>Ya, Hapus Berkas</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
