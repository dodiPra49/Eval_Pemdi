# Panduan CI/CD GitHub Actions ke VPS Linux

Panduan ini menjelaskan konfigurasi dan alur CI/CD otomatis untuk proyek **Eval Pemdi** dari repository GitHub ke server VPS Linux Anda menggunakan **Docker** dan **GitHub Actions**.

---

## 1. Informasi Server VPS

- **IP Server**: `206.237.98.71`
- **User**: `root`
- **Target Folder di VPS**: `/var/www/eval_pemdi`
- **Port Aplikasi**: `80` (Dapat diakses langsung via browser: `http://206.237.98.71`)

---

## 2. Pengaturan GitHub Secrets

Masuk ke repository GitHub proyek Anda:
`https://github.com/dodiPra49/Eval_Pemdi` -> **Settings** -> **Secrets and variables** -> **Actions** -> klik **New repository secret**.

Tambahkan secret berikut satu per satu:

| Nama Secret | Nilai (Value) | Keterangan |
|---|---|---|
| `VPS_HOST` | `206.237.98.71` | IP server VPS |
| `VPS_USERNAME` | `root` | Username SSH VPS |
| `VPS_PASSWORD` | `DodiPra56` | Password SSH root |
| `VPS_PORT` | `22` | Port SSH |
| `TARGET_DIR` | `/var/www/eval_pemdi` | Direktori penempatan project di VPS |
| `APP_PORT` | `80` | Port publik aplikasi di VPS |
| `VITE_GEMINI_API_KEY` | *(Salin dari file .env lokal)* | API Key Google Gemini |
| `VITE_SUPABASE_URL` | `https://esgkyrsvnhepvhwuvpuf.supabase.co` | URL Supabase |
| `VITE_SUPABASE_ANON_KEY` | *(Salin dari file .env lokal)* | Anon Key Supabase |

---

## 3. File yang Telah Dibuat

1. **`Dockerfile`**: Menggunakan *multi-stage build* (Node.js 20 Alpine untuk build aset Vite, lalu Nginx Alpine ultra-ringan untuk menjalankan aplikasi secara efisien).
2. **`nginx.conf`**: Konfigurasi server Nginx dengan dukungan routing SPA (*Single Page Application*) agar tidak error 404 saat navigasi halaman / refresh.
3. **`docker-compose.yml`**: Orkestrasi kontainer Docker `eval_pemdi_app` yang berjalan otomatis di background dan *auto-restart* jika server VPS reboot.
4. **`.dockerignore`**: Mengabaikan folder `node_modules`, log, dan file sensitif lokal agar proses build cepat.
5. **`.github/workflows/deploy.yml`**: Workflow CI/CD otomatis yang berjalan setiap kali Anda melakukan `git push` ke branch `master` atau `main`.

---

## 4. Cara Menjalankan Deployment Pertama Kali

Lakukan commit dan push file-file baru ini ke GitHub:

```bash
git add .
git commit -m "feat: setup CI/CD GitHub Actions to VPS with Docker"
git push origin master
```

Setelah di-push:
1. Buka tab **Actions** di GitHub repository Anda.
2. Anda akan melihat workflow **Deploy Eval Pemdi to VPS** berjalan secara otomatis.
3. Setelah tanda hijau centang (sukses), buka browser Anda di:
   ```
   http://206.237.98.71
   ```

---

## 5. Perintah Berguna di VPS (Opsional)

Jika Anda ingin memantau kontainer secara langsung dari terminal VPS:

```bash
# Cek kontainer yang sedang berjalan
docker ps

# Lihat log aplikasi Eval Pemdi
docker logs -f eval_pemdi_app

# Restart kontainer secara manual
cd /var/www/eval_pemdi && docker compose restart
```
