# 📋 Rencana Implementasi (Implementation Planning): EVAL-PEMDI
## Migrasi ke Arsitektur Docker Multi-Container, Database MariaDB, dan Deployment VPS Linux

**Nomor Dokumen:** IP-EVAL-PEMDI-2026-002  
**Nama Berkas:** `docker_vps.md`  
**Target Aplikasi:** Evaluasi Pemerintahan Digital (PermenPANRB No. 8 Tahun 2026)  
**Versi Dokumen:** 2.0 (Production-Grade Architecture)  
**Tanggal Penyusunan:** September 2026  
**Status:** Ready for Implementation  

---

## 1. Ringkasan Eksekutif & Tujuan Migrasi

Proyek **EVAL-PEMDI** sebelumnya dirancang dengan arsitektur Jamstack/Serverless yang mengandalkan platform pihak ketiga (Netlify Functions & Supabase Cloud PostgreSQL/Storage). Untuk memenuhi standar kedaulatan data instansi pemerintah, kepatuhan audit keamanan informasi, efisiensi biaya, serta performa maksimal, dilakukan pembaruan arsitektur menyeluruh:

1. **Implementasi Docker & Container Orchestration**: Mengemas seluruh lapisan aplikasi (Frontend Nginx SPA, Backend REST API, dan Database) ke dalam kontainer mandiri yang terisolasi, portabel, dan seragam antara lingkungan lokal maupun produksi.
2. **Migrasi Database ke MariaDB**: Menggantikan ketergantungan database cloud Supabase dengan **MariaDB 10.11 LTS** (*self-hosted*), menggunakan skema relasional yang dioptimalkan untuk 20 Indikator PermenPANRB No. 8/2026 dan penyimpanan berkas bukti dukung lokal.
3. **Deployment Mandiri ke VPS Linux**: Mengalihkan target hosting ke server privat virtual (VPS Linux Ubuntu/Debian) yang dikelola penuh, diamankan dengan firewall dan SSL HTTPS, serta dilengkapi pipeline otomatisasi **CI/CD GitHub Actions**.

---

## 2. Perbandingan Arsitektur: Eksisting vs Target Baru

| Komponen | Arsitektur Lama (Eksisting) | Arsitektur Baru (Target) | Manfaat Perubahan |
| :--- | :--- | :--- | :--- |
| **Frontend Serving** | Netlify CDN / Docker Single Stage awal | **Nginx Alpine (Multi-stage Docker)** | Sangat ringan (<30MB), caching aset statis efisien, routing SPA tanpa 404. |
| **Backend / API** | Netlify Serverless Functions (`/api/evidence`) | **Node.js Express REST API Container** | Tidak ada batasan durasi execution serverless, upload berkas hingga 50MB, koneksi database persistent pool. |
| **Basis Data** | Supabase Cloud (PostgreSQL) / Remote | **MariaDB 10.11 LTS Container** | Kedaulatan data instansi penuh (*on-premise/self-hosted*), performa kueri lokal cepat, bebas biaya langganan bulanan tier cloud. |
| **Storage Bukti PDF** | Supabase Storage Bucket | **Docker Persistent Named Volume (`evidence_uploads`)** | Berkas PDF tersimpan aman di disk VPS, backup berkas terintegrasi dengan backup server. |
| **Infrastruktur Hosting** | Netlify PaaS | **Linux VPS (Ubuntu 22.04/24.04 LTS)** | Kendali penuh sistem operasi, resource komputasi terdedikasi, port dan konfigurasi fleksibel. |
| **CI/CD & Otomasi** | Netlify Git Hook | **GitHub Actions via SSH Docker Compose** | Otomasi build, push, database migration check, dan zero-downtime rolling restart. |

```
                              [ ALUR ARSITEKTUR BARU DI VPS LINUX ]
                              
       +-------------------------------------------------------------------+
       |                       KLIEN / BROWSER PENGGUNA                    |
       +-------------------------------------------------------------------+
                                         |
                                (Port 80 / 443 HTTPS)
                                         v
       +-------------------------------------------------------------------+
       |                   REVERSE PROXY & HOST FIREWALL                   |
       |                   (Nginx Host / Certbot Let's Encrypt)            |
       +-------------------------------------------------------------------+
                                         |
                                   (Internal Port)
                                         v
   =========================== DOCKER NETWORK (eval_pemdi_net) ===========================
   |                                                                                     |
   |   +-----------------------+              +--------------------------------------+   |
   |   |   CONTAINER FRONTEND  |              |          CONTAINER BACKEND           |   |
   |   |     (eval_pemdi_web)  |              |           (eval_pemdi_api)           |   |
   |   |-----------------------|              |--------------------------------------|   |
   |   | • Nginx Alpine        |              | • Node.js Express                    |   |
   |   | • React 18/Vite SPA   |              | • REST API Endpoints                 |   |
   |   | • Reverse Proxy /api  | === HTTP ==> | • Multer (Upload Bukti PDF)          |   |
   |   +-----------------------+  (Port 5000) | • Admin Authentication               |   |
   |                                          | • Gemini AI Proxy Service            |   |
   |                                          +--------------------------------------+   |
   |                                                             |                       |
   |                                                      (MySQL Pool 3306)              |
   |                                                             v                       |
   |                                              +--------------------------------------+   |
   |                                              |          CONTAINER DATABASE          |   |
   |                                              |           (eval_pemdi_db)            |   |
   |                                              |--------------------------------------|   |
   |                                              | • MariaDB 10.11 LTS                  |   |
   |                                              | • Database: EvalPemdi                |   |
   |                                              | • Auto-init SQL Scripts              |   |
   |                                              +--------------------------------------+   |
   =======================================================================================
                                      |                                  |
                                      v                                  v
                        [ Volume: evidence_uploads ]           [ Volume: mariadb_data ]
                        (/var/lib/docker/volumes/...)          (/var/lib/docker/volumes/...)
```

---

## 3. Komponen 1: Implementasi Docker Multi-Container

Untuk memisahkan *concern* antara penyajian antarmuka (frontend), komputasi bisnis/logika penyimpanan (backend), dan database secara bersih, sistem menggunakan 3 kontainer utama yang dikendalikan melalui `docker-compose.yml`.

### A. Struktur File & Konfigurasi Docker Baru

```text
EVAL_PEMDI/
├── backend/                        # [BARU] Layanan REST API & Upload Server
│   ├── src/
│   │   ├── config/db.js            # Koneksi pool MariaDB via mysql2/promise
│   │   ├── controllers/            # Controller evidence, auth, indikator
│   │   ├── routes/                 # Routing endpoint /api/*
│   │   └── server.js               # Entry point Express API
│   ├── uploads/                    # Folder mount penyimpanan file PDF
│   ├── package.json
│   └── Dockerfile                  # Dockerfile untuk backend Node.js
├── src/                            # Kode React Frontend Vite
├── public/                         # Aset publik statis
├── nginx.conf                      # Konfigurasi Nginx untuk Frontend & Reverse Proxy
├── Dockerfile                      # Multi-stage Dockerfile untuk Frontend SPA
├── docker-compose.yml              # Orkestrasi seluruh service (Web, API, DB)
├── .dockerignore                   # Menghindari pengiriman artefak lokal ke konteks build
└── schema_mariadb.sql              # Skema database siap eksekusi otomatis MariaDB
```

### B. Spesifikasi `docker-compose.yml` (Produksi)

File orkestrasi menghubungkan ketiga komponen dalam satu private network terisolasi:

```yaml
version: '3.8'

services:
  # 1. DATABASE SERVICE: MariaDB 10.11 LTS
  database:
    image: mariadb:10.11
    container_name: eval_pemdi_db
    restart: always
    environment:
      MARIADB_ROOT_PASSWORD: ${DB_ROOT_PASSWORD}
      MARIADB_DATABASE: ${DB_NAME:-EvalPemdi}
      MARIADB_USER: ${DB_USER:-evalpemdi_user}
      MARIADB_PASSWORD: ${DB_PASSWORD}
    volumes:
      - mariadb_data:/var/lib/mysql
      - ./schema_mariadb.sql:/docker-entrypoint-initdb.d/01_schema.sql:ro
      - ./seed_data.sql:/docker-entrypoint-initdb.d/02_seed.sql:ro
      - ./admin_migration.sql:/docker-entrypoint-initdb.d/03_admin.sql:ro
    networks:
      - eval_pemdi_net
    healthcheck:
      test: ["CMD", "healthcheck.sh", "--connect", "--innodb_initialized"]
      interval: 10s
      timeout: 5s
      retries: 5

  # 2. BACKEND API SERVICE: Node.js Express
  api:
    build:
      context: ./backend
      dockerfile: Dockerfile
    container_name: eval_pemdi_api
    restart: always
    depends_on:
      database:
        condition: service_healthy
    environment:
      NODE_ENV: production
      PORT: 5000
      DB_HOST: database
      DB_PORT: 3306
      DB_USER: ${DB_USER:-evalpemdi_user}
      DB_PASSWORD: ${DB_PASSWORD}
      DB_NAME: ${DB_NAME:-EvalPemdi}
      JWT_SECRET: ${JWT_SECRET}
      GEMINI_API_KEY: ${GEMINI_API_KEY}
    volumes:
      - evidence_uploads:/app/uploads
    networks:
      - eval_pemdi_net

  # 3. FRONTEND SERVICE: React SPA + Nginx
  web:
    build:
      context: .
      dockerfile: Dockerfile
      args:
        VITE_APP_TITLE: "Evaluasi Pemerintahan Digital"
    container_name: eval_pemdi_app
    restart: always
    depends_on:
      - api
    ports:
      - "${PORT:-80}:80"
    networks:
      - eval_pemdi_net

volumes:
  mariadb_data:
    name: eval_pemdi_mariadb_data
  evidence_uploads:
    name: eval_pemdi_evidence_uploads

networks:
  eval_pemdi_net:
    name: eval_pemdi_network
    driver: bridge
```

### C. Spesifikasi Multi-Stage `Dockerfile` (Frontend)

Menggunakan dua tahap (*builder* dan *runner*) untuk menghasilkan ukuran image minimal (<25MB) dan keamanan maksimal (kode sumber tidak tersimpan di runtime):

```dockerfile
# Tahap 1: Build React Vite SPA
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci --prefer-offline --no-audit
COPY . .
RUN npm run build

# Tahap 2: Runtime Nginx Ultra-Ringan
FROM nginx:alpine
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=builder /app/dist .
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
STOPSIGNAL SIGQUIT
CMD ["nginx", "-g", "daemon off;"]
```

### D. Konfigurasi `nginx.conf` (Routing SPA & Reverse Proxy API)

Nginx dikonfigurasi untuk:
1. Menyajikan bundle statis HTML/CSS/JS dengan fallback ke `index.html` (mencegah pesan error 404 saat URL di-refresh).
2. Mem-proxy permintaan `/api/` secara transparan ke container backend `http://api:5000`.
3. Membuka batas upload berkas PDF hingga **50 MB** (`client_max_body_size 50M;`).

---

## 4. Komponen 2: Migrasi & Implementasi Database MariaDB

### A. Alasan Pemilihan MariaDB
- **Kompatibilitas MySQL**: Kompatibel 100% dengan driver `mysql2/promise` yang telah terpasang di proyek.
- **Efisiensi Memori**: MariaDB mengonsumsi RAM lebih hemat daripada MySQL 8 standar pada VPS berspesifikasi 2GB–4GB RAM.
- **Kestabilan LTS**: MariaDB 10.11 merupakan versi *Long Term Support* yang didukung pembaruan stabilitas dan keamanan hingga tahun 2028.
- **Inisialisasi Otomatis**: Folder bawaan `/docker-entrypoint-initdb.d/` mengeksekusi skrip SQL secara urut saat pertama kali kontainer dijalankan.

### B. Validasi & Penyesuaian Skema (`schema_mariadb.sql`)
Skema relasional yang telah disiapkan pada `schema_mysql.sql` disempurnakan untuk MariaDB:
1. **Pembangkitan UUID**:
   - MariaDB 10.7+ telah mendukung fungsi bawaan `UUID()` pada nilai default:
     ```sql
     id CHAR(36) PRIMARY KEY DEFAULT (UUID())
     ```
2. **Karakter Set & Collation**:
   - Standar `utf8mb4` dengan collation `utf8mb4_unicode_ci` untuk menjamin konsistensi teks aksara dan simbol.
3. **Kolom Terhitung (Generated Columns)**:
   - Rumus bobot nilai otomatis:
     ```sql
     weighted_score DECIMAL(6,3) GENERATED ALWAYS AS (self_level * 5.0) STORED
     ```
4. **Tabel Master & Transaksi Inti**:
   - `instansi` & `unit_kerja`: Profil instansi & OPD PIC indikator.
   - `users`: Akun admin, PIC, dan asesor internal.
   - `evaluation_periods`: Tahun evaluasi (misal 2026).
   - `indicators`: 20 Indikator PermenPANRB No. 8/2026.
   - `indicator_levels`: Kriteria detail Level 1 s.d. 5.
   - `indicator_checklists`: Butir checklist bukti dukung.
   - `self_assessments`: Nilai mandiri dan progres kesiapan per indikator.
   - `evidence_documents`: Metadata berkas PDF bukti terunggah dan path fisik file.
   - `evidence_reviews`: Hasil telaah bukti dukung oleh Asesor maupun AI Gemini.
   - `audit_logs`: Jejak rekam aktivitas pembaruan dokumen.

### C. Alur Migrasi Data dari Supabase ke MariaDB
Bila terdapat data eksisting di Supabase Cloud yang perlu dipindahkan:
1. **Ekspor Data Supabase**: Jalankan utilitas dump SQL table `evidence_documents` dan `admins` dari Supabase.
2. **Transformasi Format**: Sesuaikan tipe kolom `timestamp with time zone` (PostgreSQL) menjadi `TIMESTAMP` (MariaDB).
3. **Impor ke MariaDB**: Masukkan ke file seed lokal `seed_data.sql`.

---

## 5. Komponen 3: Konfigurasi & Strategi Deployment ke VPS Linux

### A. Rekomendasi Spesifikasi Server VPS
- **Sistem Operasi**: Ubuntu 22.04 LTS atau Ubuntu 24.04 LTS (64-bit).
- **CPU**: Minimal 2 vCPU.
- **RAM**: Minimal 2 GB (Disarankan 4 GB untuk keleluasaan build Node.js & cache MariaDB).
- **Penyimpanan (Disk)**: Minimal 30 GB SSD/NVMe (untuk menampung OS, Docker image, database, dan arsip PDF bukti).
- **Jaringan**: Port 22 (SSH), Port 80 (HTTP), dan Port 443 (HTTPS) terbuka.

### B. Tahapan Persiapan Server VPS Linux (Sekali di Awal)

Jalankan perintah berikut di terminal VPS Linux Anda sebelum deployment pertama:

```bash
# 1. Update paket sistem
sudo apt update && sudo apt upgrade -y

# 2. Instal dependensi dasar & Curl
sudo apt install -y curl wget git ufw htop ca-certificates gnupg lsb-release

# 3. Setup Swap Memory 2GB (Sangat disarankan bila RAM VPS 2GB)
sudo fallocate -l 2G /swapfile
sudo chmod 600 /swapfile
sudo mkswap /swapfile
sudo swapon /swapfile
echo '/swapfile none swap sw 0 0' | sudo tee -a /etc/fstab

# 4. Instal Docker Engine & Docker Compose Plugin Resmi
sudo mkdir -p /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \
  $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

sudo apt update
sudo apt install -y docker-ce docker-ce-cli containerd.io docker-compose-plugin

# 5. Aktifkan & jalankan layanan Docker
sudo systemctl enable docker
sudo systemctl start docker

# 6. Konfigurasi Firewall UFW
sudo ufw allow OpenSSH
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp
sudo ufw --force enable
```

### C. Alur Otomasi CI/CD dengan GitHub Actions

Setiap kali pengembang melakukan `git push origin master`, workflow `.github/workflows/deploy.yml` akan terpicu secara otomatis untuk melakukan:
1. Koneksi aman via SSH ke VPS Linux.
2. Sinkronisasi repositori git di direktori `/var/www/eval_pemdi`.
3. Pembaruan file environment `.env`.
4. Eksekusi `docker compose up -d --build` dengan zero-downtime rolling restart.
5. Pembersihan image lama yang tidak terpakai (`docker image prune -f`).

#### Daftar GitHub Secrets yang Wajib Didaftarkan:
Masuk ke menu: **Settings -> Secrets and variables -> Actions -> New repository secret**:

| Nama Secret | Deskripsi / Contoh Nilai |
| :--- | :--- |
| `VPS_HOST` | Alamat IP Publik VPS Anda (contoh: `206.237.98.71`) |
| `VPS_USERNAME` | Akun SSH (biasanya `root` atau `ubuntu`) |
| `VPS_PASSWORD` | Password SSH VPS yang kuat (atau gunakan `VPS_SSH_KEY`) |
| `VPS_PORT` | Port SSH (default: `22`) |
| `TARGET_DIR` | Direktori aplikasi di VPS (default: `/var/www/eval_pemdi`) |
| `APP_PORT` | Port akses publik (default: `80`) |
| `DB_ROOT_PASSWORD` | Password root aman untuk MariaDB |
| `DB_PASSWORD` | Password akun user aplikasi MariaDB |
| `JWT_SECRET` | Kunci enkripsi token autentikasi sesi admin |
| `GEMINI_API_KEY` | Kunci API Google AI Studio untuk asisten cerdas |

---

## 6. Prosedur Backup & Pemeliharaan Database MariaDB

Untuk menjamin keamanan data evaluasi SPBE instansi, diterapkan prosedur pencadangan otomatis harian menggunakan utilitas `mariadb-dump`.

### A. Skrip Backup Otomatis (`/root/backup_evalpemdi.sh`)
```bash
#!/bin/bash
BACKUP_DIR="/var/backups/eval_pemdi"
TIMESTAMP=$(date +"%Y%m%d_%H%M%S")
CONTAINER_NAME="eval_pemdi_db"
DB_NAME="EvalPemdi"
DB_USER="root"
DB_PASS="<DB_ROOT_PASSWORD>"

mkdir -p "$BACKUP_DIR"

# Dump database langsung dari dalam container
docker exec $CONTAINER_NAME mariadb-dump -u$DB_USER -p$DB_PASS $DB_NAME | gzip > "$BACKUP_DIR/evalpemdi_$TIMESTAMP.sql.gz"

# Hapus backup yang lebih tua dari 14 hari
find "$BACKUP_DIR" -type f -name "*.sql.gz" -mtime +14 -exec rm {} +

echo "[$(date)] Backup MariaDB EvalPemdi sukses disimpan: $BACKUP_DIR/evalpemdi_$TIMESTAMP.sql.gz"
```

### B. Menjadwalkan Cron Job di VPS
Jalankan `crontab -e` pada VPS dan tambahkan jadwal pencadangan setiap pukul 02:00 dini hari:
```bash
0 2 * * * /bin/bash /root/backup_evalpemdi.sh >> /var/log/evalpemdi_backup.log 2>&1
```

---

## 7. Rencana Kerja Pelaksanaan (Action Plan)

| Tahap | Aktivitas | Estimasi Durasi | Deliverables |
| :---: | :--- | :---: | :--- |
| **1** | **Persiapan Kode Backend REST API**<br>• Membuat struktur direktori `/backend`<br>• Implementasi endpoint CRUD bukti dukung & autentikasi admin via MariaDB<br>• Konfigurasi upload berkas PDF menggunakan `multer` | 1 Hari | Direktori `backend/` siap pakai, pengujian endpoint API lokal sukses. |
| **2** | **Penyesuaian Skema & Driver MariaDB**<br>• Menstandarkan file `schema_mariadb.sql`<br>• Menyiapkan skrip inisialisasi awal admin default (`dodi`/`agusri`)<br>• Uji coba pembuatan tabel & relasi di container MariaDB 10.11 | 0.5 Hari | Skema database tervalidasi 100% kompatibel MariaDB. |
| **3** | **Refactor Frontend Service**<br>• Mengalihkan `src/services/evidenceService.js` dari Supabase ke backend lokal `/api/evidence`<br>• Mengalihkan `src/services/adminAuthService.js` ke backend `/api/auth`<br>• Mengamankan panggilan API Gemini | 0.5 Hari | Frontend terhubung penuh ke backend internal tanpa dependensi Supabase. |
| **4** | **Penyusunan Docker & Orkestrasi**<br>• Pembaruan `Dockerfile` frontend & pembuatan `backend/Dockerfile`<br>• Penyusunan `docker-compose.yml` multi-service<br>• Uji coba orkestrasi `docker compose up --build` lokal | 0.5 Hari | Seluruh service berjalan lancar di lingkungan Docker lokal. |
| **5** | **Konfigurasi VPS Linux & Pipeline CI/CD**<br>• Hardening server VPS (UFW, Docker, Swap)<br>• Konfigurasi GitHub Actions Workflow `.github/workflows/deploy.yml`<br>• Input seluruh GitHub Secrets | 0.5 Hari | Pipeline CI/CD siap meluncurkan aplikasi otomatis saat push ke GitHub. |
| **6** | **Pengujian Akhir & UAT di VPS**<br>• Uji coba login superadmin (`dodi`/`agusri`)<br>• Uji coba unggah berkas PDF bukti dukung (hingga 25-50MB)<br>• Uji konsultasi Gemini AI & simulasi skor kematangan<br>• Uji kestabilan container restart otomatis setelah reboot server | 0.5 Hari | Aplikasi berstatus stabil dan siap digunakan instansi. |

---

## 8. Matriks Risiko & Mitigasi

| Potensi Risiko | Tingkat | Dampak | Strategi Mitigasi |
| :--- | :---: | :---: | :--- |
| **Kehabisan RAM saat Build di VPS** | Sedang | Container build gagal / SSH hang | Tambahkan **Swap Memory minimal 2GB–4GB** di VPS Linux sebelum proses build pertama. |
| **Berkas Bukti PDF Hilang saat Restart Container** | Tinggi | Kehilangan data dokumen instansi | Gunakan **Docker Named Volume terdedikasi (`evidence_uploads`)** yang tersimpan di disk fisik VPS secara persisten. |
| **Error 413 (Payload Too Large) saat Upload PDF** | Sedang | User gagal mengunggah bukti ukuran besar | Atur direktif `client_max_body_size 50M;` pada Nginx dan `limits.fileSize: 50 * 1024 * 1024` pada Multer backend. |
| **Akses Port Database Terbuka ke Publik** | Kritis | Kerentanan keamanan serangan brute-force | Jangan mengekspos port 3306 MariaDB ke host publik di `docker-compose.yml`. Database hanya boleh diakses melalui jaringan internal Docker `eval_pemdi_net`. |
| **Error 404 pada Halaman SPA saat Refresh** | Rendah | Tampilan error Nginx bawaan | Pastikan konfigurasi Nginx memuat baris: `try_files $uri $uri/ /index.html;`. |

---

## 9. Lembar Pengesahan Rencana Implementasi

Rencana implementasi ini telah disusun dan siap dieksekusi sesuai arahan perubahan arsitektur sistem:

| Peran | Nama | Status | Tanda Tangan |
| :--- | :--- | :---: | :---: |
| **Lead Developer** | Dodi Agusri, S.Kom | Disetujui | *[Signed]* |
| **DevOps & Infrastructure** | Tim Implementasi EVAL-PEMDI | Terjadwal | *[Pending Execution]* |

---
*Dokumen ini merupakan acuan resmi pelaksanaan migrasi sistem EVAL-PEMDI ke Docker, MariaDB, dan VPS Linux.*
