# EVAL-PEMDI: Aplikasi Evaluasi Pemerintahan Digital (PermenPANRB No. 8 Tahun 2026)

Aplikasi berbasis web modern yang dibangun dengan **React.js**, **Tailwind CSS**, dan didukung oleh **Google Gemini AI** untuk membantu instansi pemerintah (Kementerian, Lembaga, Pemerintah Daerah) dalam melakukan self-assessment, memahami seluruh indikator evaluasi pemerintahan digital, serta menyiapkan narasi dokumen bukti (*evidence*) yang dipersyaratkan.

---

## 🌟 Fitur Utama

1. **Katalog Indikator Komprehensif (PermenPANRB No. 8 Tahun 2026):**
   - Menampilkan 4 Domain Utama (Kebijakan, Tata Kelola, Manajemen, dan Layanan).
   - Rincian kriteria penilaian tingkat kematangan (Level 1: Rintisan s.d. Level 5: Optimum).
2. **Narasi Lengkap Dokumen Bukti (*Evidence Requirement*):**
   - Setiap indikator dilengkapi narasi eksplisit jenis dokumen bukti yang diperlukan (SK Tim, Regulasi/Perda, SOP, Topologi Jaringan, Hasil VAPT/Audit, Tangkapan Layar, Log Transaksi, dll).
   - Checklist interaktif dengan penyimpanan otomatis ke LocalStorage.
3. **Asisten AI Cerdas (Google Gemini API):**
   - **Konsultasi Regulasi:** Tanya jawab interaktif seputar pemenuhan indikator.
   - **Evidence Reviewer (Gap Analysis):** Analisis kelayakan deskripsi dokumen bukti yang dimiliki instansi dengan saran perbaikan konkrit.
4. **Desain Ceria, Modern & Mobile-Friendly:**
   - Palet warna cerah (*vibrant blue, emerald, amber, purple*).
   - Dilengkapi *Bottom Navigation Bar* khusus ponsel dan tablet untuk kemudahan akses jempol (*thumb-friendly*).
5. **Auto-Deploy ke Netlify via GitHub:**
   - Dilengkapi file konfigurasi `netlify.toml` untuk otomatisasi build dan deploy setiap kali melakukan push kode ke GitHub.

---

## 🚀 Cara Menjalankan Secara Lokal

1. **Clone repositori:**
   ```bash
   git clone https://github.com/dodiPra49/Eval_Pemdi.git
   cd Eval_Pemdi
   ```

2. **Install dependensi:**
   ```bash
   npm install
   ```

3. **Jalankan server pengembangan (Dev Server):**
   ```bash
   npm run dev
   ```
   Aplikasi akan terbuka di browser pada alamat `http://localhost:3000`.

---

## 🌐 Cara Auto-Deploy ke Netlify via GitHub

1. **Inisialisasi dan Push ke GitHub:**
   ```bash
   git add .
   git commit -m "feat: complete EVAL-PEMDI React app with Gemini AI and PermenPANRB 8/2026 indicators"
   git branch -M master
   git remote add origin https://github.com/dodiPra49/Eval_Pemdi.git
   git push -u origin master
   ```

2. **Hubungkan ke Netlify:**
   - Buka [Netlify Dashboard](https://app.netlify.com/).
   - Klik **"Add new site"** > **"Import an existing project"**.
   - Pilih **GitHub**, lalu cari repositori `Eval_Pemdi`.
   - Konfigurasi build akan otomatis terdeteksi dari file `netlify.toml`:
     - **Build command:** `npm run build`
     - **Publish directory:** `dist`

3. **Konfigurasi Variabel Lingkungan (Environment Variable):**
   - Di Netlify Dashboard, buka menu **Site configuration > Environment variables**.
   - Tambahkan variabel baru:
     - **Key:** `VITE_GEMINI_API_KEY`
     - **Value:** `your_gemini_api_key_here` (Kunci API Google Gemini Anda).
   - Klik **Deploy site**.
   - Setiap kali Anda melakukan `git push` ke branch `master`, Netlify akan otomatis melakukan build dan deploy versi terbaru secara langsung!

---

## 🛠️ Stack Teknologi

- **Frontend:** React 18, Vite
- **Styling:** Tailwind CSS, PostCSS, Autoprefixer
- **Ikon:** Lucide React
- **AI Engine:** Google Generative AI (`@google/generative-ai`)
- **Visual Effect:** Canvas Confetti
- **Hosting & CI/CD:** Netlify + GitHub
