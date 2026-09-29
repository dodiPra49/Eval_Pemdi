import express from 'express';
import cors from 'cors';
import path from 'path';
import dotenv from 'dotenv';
import { UPLOADS_DIR } from './controllers/evidenceController.js';
import evidenceRoutes from './routes/evidenceRoutes.js';
import authRoutes from './routes/authRoutes.js';
import healthRoutes from './routes/healthRoutes.js';
import { testConnection } from './config/db.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// CORS setup
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'Accept']
}));

// Body parser dengan batasan payload 50MB
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

// Static serving untuk berkas berkas bukti PDF yang diunggah
app.use('/uploads', express.static(UPLOADS_DIR, {
  setHeaders: (res, filePath) => {
    if (filePath.endsWith('.pdf')) {
      res.setHeader('Content-Type', 'application/pdf');
    }
  }
}));

// Routing API
app.use('/api/health', healthRoutes);
app.use('/api/evidence', evidenceRoutes);
app.use('/api/auth', authRoutes);

// Root greeting
app.get('/', (req, res) => {
  res.json({
    name: 'EVAL-PEMDI API Backend',
    version: '1.0.0',
    description: 'REST API & Upload Server untuk Evaluasi Pemerintahan Digital (MariaDB)',
    endpoints: {
      health: '/api/health',
      evidence: '/api/evidence',
      auth: '/api/auth'
    }
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Unhandled server error:', err);
  res.status(500).json({
    success: false,
    message: err.message || 'Terjadi kesalahan internal server.',
    error: process.env.NODE_ENV === 'development' ? err.stack : undefined
  });
});

// Jalankan Server
app.listen(PORT, async () => {
  console.log(`🚀 EVAL-PEMDI Backend API aktif di port ${PORT}`);
  console.log(`📁 Direktori uploads bukti: ${UPLOADS_DIR}`);
  
  // Tes koneksi basis data awal
  const dbCheck = await testConnection();
  if (dbCheck.success) {
    console.log('✅ Koneksi ke MariaDB berhasil diverifikasi.');
  } else {
    console.warn('⚠️ Menunggu database MariaDB siap...');
  }
});
