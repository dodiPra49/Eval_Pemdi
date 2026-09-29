import { getDbPool } from '../config/db.js';

const DEFAULT_ADMIN = {
  username: 'dodi',
  password: 'agusri',
  nama_lengkap: 'Dodi Agusri, S.Kom',
  email: 'dodi.agusri@pemdi.go.id',
  role: 'superadmin'
};

/**
 * POST /api/auth/login
 * Memvalidasi kredensial administrator
 */
export async function login(req, res) {
  try {
    const { username, password } = req.body || {};
    const cleanUser = (username || '').trim().toLowerCase();
    const cleanPass = (password || '').trim();

    if (!cleanUser || !cleanPass) {
      return res.status(400).json({
        success: false,
        message: 'Username dan password wajib diisi.'
      });
    }

    const pool = getDbPool();
    let authenticatedUser = null;

    // 1. Coba periksa pada tabel admins di MariaDB
    try {
      const [rows] = await pool.query(
        `SELECT id, username, password_hash, nama_lengkap, email, role, is_active 
         FROM admins 
         WHERE LOWER(username) = ? AND is_active = TRUE 
         LIMIT 1`,
        [cleanUser]
      );

      if (rows && rows.length > 0) {
        const adminRow = rows[0];
        // Password hash check (plain text check or default)
        if (adminRow.password_hash === cleanPass || cleanPass === DEFAULT_ADMIN.password) {
          authenticatedUser = {
            id: adminRow.id,
            username: adminRow.username,
            nama_lengkap: adminRow.nama_lengkap || DEFAULT_ADMIN.nama_lengkap,
            email: adminRow.email || DEFAULT_ADMIN.email,
            role: adminRow.role || 'superadmin'
          };

          // Update waktu login terakhir
          await pool.query(
            `UPDATE admins SET last_login_at = CURRENT_TIMESTAMP WHERE id = ?`,
            [adminRow.id]
          ).catch((e) => console.warn('Could not update last_login_at:', e.message));
        }
      }
    } catch (dbErr) {
      console.warn('Pengecekan tabel admins di database dilewati:', dbErr.message);
    }

    // 2. Fallback: Kredensial default admin.md (dodi / agusri)
    if (!authenticatedUser) {
      if (cleanUser === DEFAULT_ADMIN.username && cleanPass === DEFAULT_ADMIN.password) {
        authenticatedUser = {
          id: 'admin-default-001',
          username: DEFAULT_ADMIN.username,
          nama_lengkap: DEFAULT_ADMIN.nama_lengkap,
          email: DEFAULT_ADMIN.email,
          role: DEFAULT_ADMIN.role
        };
      }
    }

    if (!authenticatedUser) {
      return res.status(401).json({
        success: false,
        message: 'Kombinasi username atau password administrator tidak valid!'
      });
    }

    // Pembangkitan token sesi sederhana
    const token = `adm_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;

    return res.json({
      success: true,
      message: 'Login berhasil!',
      user: {
        ...authenticatedUser,
        token,
        loginAt: new Date().toISOString()
      }
    });
  } catch (error) {
    console.error('Error login controller:', error);
    return res.status(500).json({
      success: false,
      message: 'Terjadi kesalahan sistem saat memproses login.',
      error: error.message
    });
  }
}
