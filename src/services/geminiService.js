import { GoogleGenerativeAI } from '@google/generative-ai';

// API Key diambil dari environment variable (.env / Netlify) atau input user di LocalStorage
const DEFAULT_KEY = import.meta.env.VITE_GEMINI_API_KEY || '';

export const getApiKey = () => {
  return localStorage.getItem('EVAL_PEMDI_GEMINI_KEY') || DEFAULT_KEY;
};

export const setApiKey = (newKey) => {
  if (newKey) {
    localStorage.setItem('EVAL_PEMDI_GEMINI_KEY', newKey.trim());
  } else {
    localStorage.removeItem('EVAL_PEMDI_GEMINI_KEY');
  }
};

// Daftar model Flash yang didukung oleh Gemini API dengan mekanisme fallback otomatis
export const SUPPORTED_MODELS = [
  'gemini-flash-latest',
  'gemini-3.5-flash',
  'gemini-3.5-flash-lite',
  'gemini-3.1-flash-lite'
];

/**
 * Helper untuk melakukan generateContent dengan fallback otomatis jika model tertentu tidak tersedia (404/deprecated)
 */
async function generateContentWithFallback(genAI, modelParams, prompt) {
  let lastError = null;

  for (const modelName of SUPPORTED_MODELS) {
    try {
      const model = genAI.getGenerativeModel({
        ...modelParams,
        model: modelName
      });
      const result = await model.generateContent(prompt);
      const response = await result.response;
      return response.text();
    } catch (error) {
      lastError = error;
      console.warn(`[Gemini API] Model "${modelName}" gagal:`, error.message);
      // Jika kunci API tidak valid / permission ditolak, hentikan looping fallback
      if (
        error.message?.includes('API_KEY_INVALID') ||
        error.message?.includes('API key not valid') ||
        error.message?.includes('401') ||
        error.message?.includes('403')
      ) {
        break;
      }
    }
  }

  if (lastError) {
    console.error("Gemini API Final Error:", lastError);
    if (
      lastError.message?.includes('API_KEY_INVALID') ||
      lastError.message?.includes('API key not valid') ||
      lastError.message?.includes('400')
    ) {
      throw new Error(`Format API Key perlu diverifikasi. Silakan periksa Google AI Studio API Key Anda di menu Pengaturan API. (Detail: ${lastError.message})`);
    } else if (lastError.message?.includes('429') || lastError.message?.includes('RESOURCE_EXHAUSTED')) {
      throw new Error("Batas kuota gratis Gemini tercapai untuk sementara waktu. Silakan coba kembali sesaat lagi.");
    }
    throw lastError;
  }
}

/**
 * Konsultasi umum seputar indikator PermenPANRB No. 8 Tahun 2026
 */
export async function askGeminiConsultant(userQuestion, contextIndicator = null) {
  const apiKey = getApiKey();
  if (!apiKey) {
    throw new Error("Kunci API Gemini belum dikonfigurasi.");
  }

  const genAI = new GoogleGenerativeAI(apiKey);
  const systemInstruction = `Anda adalah Konsultan Ahli Evaluasi Pemerintahan Digital (SPBE) Kementerian PANRB dan Kemkomdigi RI berdasarkan PermenPANRB Nomor 8 Tahun 2026.
Tugas Anda:
1. Menjelaskan maksud dan tujuan indikator evaluasi dengan lugas, santun, dan aplikatif.
2. Membimbing instansi pemerintah daerah / kementerian / lembaga dalam menyusun bukti dukung (evidence) yang valid untuk mencapai tingkat kematangan target (Level 3, 4, atau 5).
3. Menjelaskan perbedaan tingkatan kematangan (Level 1: Rintisan, Level 2: Terkelola, Level 3: Terstandarisasi, Level 4: Terpadu, Level 5: Optimum).
4. Berikan format jawaban terstruktur dengan poin-poin jelas dan rekomendasi konkret (seperti contoh nama SK, SOP, atau jenis log sistem).`;

  let prompt = userQuestion;
  if (contextIndicator) {
    prompt = `[KONTEKS INDIKATOR EVALUASI]:
Kode & Nama: ${contextIndicator.code} - ${contextIndicator.name}
Domain: ${contextIndicator.domainName}
Aspek: ${contextIndicator.aspectName}
Definisi: ${contextIndicator.description}
Kriteria Level 3: ${contextIndicator.criteria[3]}
Kriteria Level 4: ${contextIndicator.criteria[4]}
Kriteria Level 5: ${contextIndicator.criteria[5]}

[PERTANYAAN PENGGUNA]:
${userQuestion}`;
  }

  return await generateContentWithFallback(genAI, { systemInstruction }, prompt);
}

/**
 * Fitur Reviewer Dokumen Bukti (Evidence Gap Analysis)
 */
export async function reviewEvidenceDocument(indicator, documentSummary, targetLevel = 3) {
  const apiKey = getApiKey();
  if (!apiKey) {
    throw new Error("Kunci API Gemini belum dikonfigurasi.");
  }

  const genAI = new GoogleGenerativeAI(apiKey);
  const systemInstruction = `Anda adalah Asesor / Evaluator Resmi Evaluasi Pemerintahan Digital (PermenPANRB No. 8 Tahun 2026).
Tugas Anda adalah melakukan Gap Analysis terhadap deskripsi dokumen bukti yang diajukan oleh pengguna untuk suatu indikator tertentu.`;

  const prompt = `Lakukan evaluasi kelayakan data dukung berikut:
[INDIKATOR YANG DINILAI]:
- Kode: ${indicator.code}
- Nama: ${indicator.name}
- Target Level Kematangan yang diinginkan: Level ${targetLevel}
- Kriteria Resmi Level ${targetLevel}: ${indicator.criteria[targetLevel]}
- Rekomendasi Dokumen Bukti Ideal: 
${indicator.evidenceNarration}

[RINGKASAN DOKUMEN BUKTI YANG DIMILIKI PENGGUNA SAAT INI]:
"""
${documentSummary}
"""

Berikan output dengan format Markdown terstruktur berikut:
### 1. Prediksi Kelayakan
(Sebutkan apakah dokumen ini sudah memenuhi Level ${targetLevel}, atau masih di Level sebelumnya)

### 2. Kelebihan Dokumen yang Ada
(Poin-poin dokumen yang sudah tepat)

### 3. Kekurangan / Gap Dokumen Bukti
(Dokumen penting apa yang masih kurang, misalnya: belum ada TTE resmi, belum ada notula, belum mencakup seluruh unit, atau belum ada laporan evaluasi)

### 4. Rekomendasi Tindakan Cepat
(3-4 langkah aksi konkrit bagi instansi agar bukti dukungnya lolos verifikasi tim asesor pusat)
`;

  return await generateContentWithFallback(genAI, { systemInstruction }, prompt);
}
