# Panduan CI/CD GitHub Actions ke VPS Linux (Docker & MariaDB)

Panduan ini menjelaskan konfigurasi dan alur CI/CD otomatis untuk proyek **Eval Pemdi** dari repository GitHub ke server VPS Linux Anda menggunakan arsitektur **Docker Multi-Container** (Frontend Nginx SPA, Backend Express API, dan Basis Data MariaDB 10.11 LTS).

---

## 1. Informasi Server VPS

- **IP Server**: `206.237.98.71`
- **User**: `root`
- **Target Direktori di VPS**: `/var/www/eval_pemdi`
- **Port Aplikasi**: `80` (Dapat diakses langsung via browser: `http://206.237.98.71`)

---

## 2. Pengaturan GitHub Secrets

Masuk ke repository GitHub proyek Anda:
`https://github.com/dodiPra49/Eval_Pemdi` -> **Settings** -> **Secrets and variables** -> **Actions** -> klik **New repository secret**.

Tambahkan repository secrets berikut satu per satu:

| Nama Secret | Nilai (Value) | Keterangan |
|---|---|---|
| `VPS_HOST` | `206.237.98.71` | Alamat IP atau domain VPS Anda (Wajib) |
| `VPS_USERNAME` | `root` | Username SSH VPS (Wajib) |
| `VPS_PASSWORD` | Password SSH baru yang kuat | Password SSH VPS Anda (Wajib) |
| `VPS_PORT` | `22` | Port SSH (default: 22) |
| `TARGET_DIR` | `/var/www/eval_pemdi` | Direktori target penempatan aplikasi di VPS |
| `APP_PORT` | `80` | Port HTTP publik aplikasi |
| `DB_ROOT_PASSWORD` | *(Password rahasia kuat)* | Password root MariaDB 10.11 |
| `DB_USER` | `evalpemdi_user` | Akun database aplikasi |
| `DB_PASSWORD` | *(Password rahasia user)* | Password database aplikasi |
| `DB_NAME` | `EvalPemdi` | Nama database utama |
| `JWT_SECRET` | *(Kunci rahasia acak)* | Kunci enkripsi autentikasi sesi admin |
| `VITE_GEMINI_API_KEY` | API Key Gemini dari Google AI Studio | Digunakan untuk fitur konsultasi AI |

> **Catatan Keamanan:** Seluruh rahasia database dan JWT terlindungi di server internal dan tidak bocor ke publik. Port MariaDB (3306) hanya terhubung di dalam jaringan internal Docker (`eval_pemdi_net`) dan tidak diekspos ke internet publik.

---

## 3. Komponen Arsitektur Kontainer

1. **`web` (`eval_pemdi_app`)**: Frontend SPA berbasis React 18 & Vite yang dibungkus Nginx Alpine, menangani routing SPA tanpa error 404, serta me-reverse-proxy rute `/api/` dan `/uploads/` ke backend.
2. **`api` (`eval_pemdi_api`)**: Layanan Node.js Express REST API yang melayani upload dokumen bukti PDF (hingga 50MB via Multer), validasi PDF, dan autentikasi admin.
3. **`database` (`eval_pemdi_db`)**: Kontainer MariaDB 10.11 LTS yang otomatis menginisialisasi skema `schema_mariadb.sql`, data awal `seed_data.sql`, dan akun superadmin (`dodi` / `agusri`).
4. **Volume Docker Persisten**:
   - `eval_pemdi_mariadb_data`: Menjamin data tabel dan reviu evaluasi tetap utuh meski container diperbarui.
   - `eval_pemdi_evidence_uploads`: Menyimpan berkas fisik PDF bukti dukung di disk fisik VPS.

---

## 4. Cara Menjalankan Deployment Pertama Kali

Lakukan commit dan push file-file baru ini ke GitHub:

```bash
git add .
git commit -m "feat: implementasi docker multi-container, mariadb, dan deployment vps linux"
git push origin master
```

Setelah di-push:
1. Buka tab **Actions** di GitHub repository Anda.
2. Anda akan melihat workflow **Deploy Eval Pemdi to VPS** berjalan secara otomatis.
3. Setelah proses selesai (centang hijau), buka browser Anda di:
   ```
   http://206.237.98.71
   ```

---

## 5. Perintah Berguna di Terminal VPS

Jika Anda ingin memantau kontainer secara langsung dari terminal VPS Linux:

```bash
# 1. Cek status 3 kontainer yang sedang berjalan
docker ps

# 2. Pantau log backend API
docker logs -f eval_pemdi_api

# 3. Pantau log basis data MariaDB
docker logs -f eval_pemdi_db

# 4. Masuk ke console MariaDB di dalam kontainer
docker exec -it eval_pemdi_db mariadb -uevalpemdi_user -p EvalPemdi

# 5. Cek penggunaan resource memori dan CPU
docker stats
```
