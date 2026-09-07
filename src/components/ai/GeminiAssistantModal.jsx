import React, { useState } from 'react';
import { X, Sparkles, Send, Bot, User, Loader2, AlertCircle } from 'lucide-react';
import { askGeminiConsultant } from '../../services/geminiService';

export default function GeminiAssistantModal({ isOpen, onClose, contextIndicator }) {
  if (!isOpen) return null;

  const [inputQuery, setInputQuery] = useState('');
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      text: contextIndicator
        ? `Halo! Saya Konsultan AI Evaluasi Pemerintahan Digital (PermenPANRB 8/2026). Ada yang ingin Anda tanyakan mengenai indikator **${contextIndicator.code} - ${contextIndicator.name}**?`
        : `Halo! Saya Asisten AI Evaluasi Pemerintahan Digital (PermenPANRB No. 8 Tahun 2026). Tanyakan apa saja seputar regulasi, kriteria kematangan, atau dokumen bukti evaluasi digital.`
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);

  const quickQuestions = contextIndicator ? [
    `Apa saja syarat bukti dukung wajib untuk indikator ini?`,
    `Bagaimana cara agar indikator ini bisa mencapai Level 4 atau Level 5?`,
    `Berikan contoh format dokumen bukti (SK / SOP) yang benar untuk indikator ini.`
  ] : [
    `Apa perbedaan kriteria Level 3 dan Level 4 dalam evaluasi pemerintahan digital?`,
    `Apa saja dokumen bukti wajib untuk Domain Tata Kelola SPBE?`,
    `Bagaimana cara instansi daerah menghubungkan layanan ke INA Digital / PDN?`
  ];

  const handleSend = async (queryToSend = null) => {
    const text = (queryToSend || inputQuery).trim();
    if (!text || isLoading) return;

    setErrorMsg(null);
    const newMessages = [...messages, { role: 'user', text }];
    setMessages(newMessages);
    setInputQuery('');
    setIsLoading(true);

    try {
      const reply = await askGeminiConsultant(text, contextIndicator);
      setMessages([...newMessages, { role: 'assistant', text: reply }]);
    } catch (err) {
      setErrorMsg(err.message || "Gagal mendapatkan respon dari AI.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 md:p-6 animate-fadeIn">
      <div className="bg-white w-full max-w-3xl rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col h-[85vh] max-h-[750px]">
        
        {/* Header */}
        <div className="p-4 sm:p-5 bg-gradient-to-r from-brand-600 via-indigo-600 to-purple-600 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-white/15 backdrop-blur-md flex items-center justify-center border border-white/20">
              <Sparkles className="w-5 h-5 text-sunshine-300 animate-pulse" />
            </div>
            <div>
              <h3 className="font-extrabold text-base sm:text-lg flex items-center gap-2">
                Asisten AI Regulasi SPBE
              </h3>
              <p className="text-xs text-brand-100 line-clamp-1">
                {contextIndicator 
                  ? `Konteks: ${contextIndicator.code} - ${contextIndicator.name}` 
                  : 'Konsultasi PermenPANRB No. 8 Tahun 2026'}
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

        {/* Chat Message List */}
        <div className="flex-1 p-4 sm:p-5 overflow-y-auto space-y-4 bg-slate-50/50">
          {messages.map((m, idx) => (
            <div
              key={idx}
              className={`flex gap-3 ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {m.role === 'assistant' && (
                <div className="w-8 h-8 rounded-full bg-brand-600 text-white flex items-center justify-center shrink-0 mt-1 shadow-xs">
                  <Bot className="w-4 h-4" />
                </div>
              )}

              <div
                className={`max-w-[85%] rounded-2xl p-3.5 sm:p-4 text-xs sm:text-sm leading-relaxed ${
                  m.role === 'user'
                    ? 'bg-brand-600 text-white rounded-tr-xs shadow-md'
                    : 'bg-white text-slate-800 border border-slate-200/80 rounded-tl-xs shadow-xs whitespace-pre-line'
                }`}
              >
                {m.text}
              </div>

              {m.role === 'user' && (
                <div className="w-8 h-8 rounded-full bg-slate-800 text-white flex items-center justify-center shrink-0 mt-1">
                  <User className="w-4 h-4" />
                </div>
              )}
            </div>
          ))}

          {isLoading && (
            <div className="flex gap-3 items-center text-slate-500 text-xs">
              <div className="w-8 h-8 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center">
                <Loader2 className="w-4 h-4 animate-spin" />
              </div>
              <span className="animate-pulse font-medium">Asisten AI sedang menyusun jawaban regulasi...</span>
            </div>
          )}

          {errorMsg && (
            <div className="p-3 bg-rose-50 border border-rose-200 text-rose-700 text-xs rounded-xl flex items-start gap-2">
              <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
              <div>{errorMsg}</div>
            </div>
          )}
        </div>

        {/* Quick Suggestion Chips */}
        <div className="px-4 py-2 bg-slate-100/70 border-t border-slate-200 overflow-x-auto flex gap-2">
          {quickQuestions.map((q, i) => (
            <button
              key={i}
              onClick={() => handleSend(q)}
              disabled={isLoading}
              className="shrink-0 text-xs bg-white hover:bg-brand-50 hover:text-brand-700 text-slate-700 font-medium py-1 px-3 rounded-full border border-slate-200 transition-colors"
            >
              {q}
            </button>
          ))}
        </div>

        {/* Input Bar */}
        <div className="p-3 sm:p-4 bg-white border-t border-slate-200">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="flex items-center gap-2"
          >
            <input
              type="text"
              placeholder="Ketik pertanyaan terkait evaluasi atau dokumen bukti..."
              value={inputQuery}
              onChange={(e) => setInputQuery(e.target.value)}
              disabled={isLoading}
              className="flex-1 text-xs sm:text-sm p-3 rounded-2xl border border-slate-300 focus:ring-2 focus:ring-brand-500 focus:outline-hidden"
            />
            <button
              type="submit"
              disabled={!inputQuery.trim() || isLoading}
              className="p-3 rounded-2xl bg-brand-600 hover:bg-brand-700 disabled:opacity-50 text-white transition-all shadow-md shadow-brand-500/20"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}
