# Panduan CI/CD GitHub Actions ke VPS Linux (Docker, MariaDB, & phpMyAdmin)

Panduan ini menjelaskan konfigurasi dan alur CI/CD otomatis untuk proyek **Eval Pemdi** dari repository GitHub ke server VPS Linux Anda menggunakan arsitektur **Docker Multi-Container** (Frontend Nginx SPA, Backend Express API, Basis Data MariaDB 10.11 LTS, dan GUI phpMyAdmin).

---

## 1. Informasi Server VPS

- **IP Server**: `206.237.98.71`
- **User**: `root`
- **Target Direktori di VPS**: `/var/www/eval-pemdi`
- **Port Aplikasi Web**: `80` (Akses: `http://206.237.98.71`)
- **Port phpMyAdmin**: `8085` (Akses: `http://206.237.98.71:8085`)

---

## 2. Pengaturan GitHub Secrets

Masuk ke repository GitHub proyek Anda:
`https://github.com/dodiPra49/Eval_Pemdi` -> **Settings** -> **Secrets and variables** -> **Actions** -> klik **New repository secret**.

Tambahkan repository secrets berikut satu per satu:

| Nama Secret | Nilai (Value) | Keterangan |
|---|---|---|
| `VPS_HOST` | `206.237.98.71` | Alamat IP atau domain VPS Anda (Wajib) |
| `VPS_USERNAME` | `root` | Username SSH VPS (Wajib) |
| `VPS_PASSWORD` | Password SSH baru yang kuat | Password SSH VPS Anda (Wajib bila tidak pakai SSH Key) |
| `VPS_SSH_KEY` | *(Teks private key)* | Private key SSH (Sangat disarankan) |
| `VPS_PORT` | `22` | Port SSH (default: 22) |
| `TARGET_DIR` | `/var/www/eval-pemdi` | Direktori target penempatan aplikasi di VPS |
| `APP_PORT` | `80` | Port HTTP publik aplikasi web |
| `PMA_PORT` | `8085` | Port web phpMyAdmin untuk kelola database |
| `DB_ROOT_PASSWORD` | *(Password rahasia kuat)* | Password root MariaDB 10.11 |
| `DB_USER` | `evalpemdi_user` | Akun database aplikasi |
| `DB_PASSWORD` | *(Password rahasia user)* | Password database aplikasi |
| `DB_NAME` | `EvalPemdi` | Nama database utama |
| `JWT_SECRET` | *(Kunci rahasia acak)* | Kunci enkripsi autentikasi sesi admin |
| `VITE_GEMINI_API_KEY` | API Key Gemini dari Google AI Studio | Digunakan untuk fitur konsultasi AI |

---

## 3. Komponen Arsitektur Kontainer

1. **`web` (`eval_pemdi_app`)**: Frontend SPA berbasis React 18 & Vite disajikan oleh Nginx Alpine pada port 80.
2. **`api` (`eval_pemdi_api`)**: Layanan Node.js Express REST API melayani upload berkas bukti PDF hingga 50MB dan endpoint auth.
3. **`database` (`eval_pemdi_db`)**: MariaDB 10.11 LTS dengan inisialisasi skema otomatis `schema_mariadb.sql` dan `seed_data.sql`.
4. **`phpmyadmin` (`eval_pemdi_pma`)**: Web GUI phpMyAdmin di port 8085 untuk melihat, mengedit, dan mengekspor tabel MariaDB dengan mudah melalui browser.
5. **Volume Docker Persisten**:
   - `eval_pemdi_mariadb_data`: Data MariaDB tersimpan aman.
   - `eval_pemdi_evidence_uploads`: Berkas fisik PDF bukti dukung tersimpan di disk VPS.

---

## 4. Cara Akses phpMyAdmin

Buka browser di:
👉 **`http://206.237.98.71:8085`**

- **Server**: `database` *(otomatis terhubung)*
- **Username**: `evalpemdi_user` *(atau `root`)*
- **Password**: Nilai `DB_PASSWORD` *(atau `DB_ROOT_PASSWORD`)*

---

## 5. Perintah Berguna di Terminal VPS

```bash
# 1. Cek status 4 kontainer yang sedang berjalan
docker ps

# 2. Pantau log phpMyAdmin
docker logs -f eval_pemdi_pma

# 3. Pantau log backend API
docker logs -f eval_pemdi_api

# 4. Restart seluruh service di VPS
cd /var/www/eval-pemdi && docker compose restart
```
