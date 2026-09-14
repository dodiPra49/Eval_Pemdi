/**
 * Service Autentikasi Modul Administrator Evaluasi Pemdi
 * Sesuai spesifikasi: admin.md
 * Kredensial default:
 *   Username: dodi
 *   Password: agusri
 */

import { supabase, isSupabaseConfigured } from './supabaseClient';

const STORAGE_KEY = 'eval_pemdi_admin_session';

const DEFAULT_ADMIN = {
  username: 'dodi',
  password: 'agusri',
  nama_lengkap: 'Dodi Agusri, S.Kom',
  email: 'dodi.agusri@pemdi.go.id',
  role: 'superadmin'
};

/**
 * Melakukan proses login administrator
 * @param {string} username 
 * @param {string} password 
 * @returns {Promise<{success: boolean, user: Object}>}
 */
export async function loginAdmin(username, password) {
  const cleanUser = (username || '').trim().toLowerCase();
  const cleanPass = (password || '').trim();

  if (!cleanUser || !cleanPass) {
    throw new Error('Username dan password wajib diisi.');
  }

  let authenticatedUser = null;

  // 1. Coba verifikasi dengan tabel admins di Supabase Cloud (jika tersedia)
  if (isSupabaseConfigured && supabase) {
    try {
      const { data, error } = await supabase
        .from('admins')
        .select('id, username, password_hash, nama_lengkap, email, role, is_active')
        .eq('username', cleanUser)
        .eq('is_active', true)
        .maybeSingle();

      if (!error && data) {
        // Cek kecocokan password (plain text atau default)
        if (data.password_hash === cleanPass || cleanPass === DEFAULT_ADMIN.password) {
          authenticatedUser = {
            id: data.id,
            username: data.username,
            nama_lengkap: data.nama_lengkap || 'Administrator Pemdi',
            email: data.email || `${data.username}@pemdi.go.id`,
            role: data.role || 'superadmin'
          };

          // Update last_login_at secara non-blocking
          supabase
            .from('admins')
            .update({ last_login_at: new Date().toISOString() })
            .eq('id', data.id)
            .then(() => {})
            .catch(() => {});
        }
      }
    } catch (err) {
      console.warn('Supabase admins check bypassed:', err.message);
    }
  }

  // 2. Verifikasi Fallback: Kredensial Default sesuai spesifikasi admin.md (dodi / agusri)
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

  // Jika tidak cocok sama sekali
  if (!authenticatedUser) {
    throw new Error('Kombinasi username atau password administrator tidak valid!');
  }

  // Simpan sesi ke localStorage
  const sessionData = {
    ...authenticatedUser,
    loginAt: new Date().toISOString(),
    token: `adm_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`
  };

  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(sessionData));
  } catch (e) {
    console.error('Gagal menyimpan sesi admin ke localStorage:', e);
  }

  return {
    success: true,
    user: sessionData
  };
}

/**
 * Mengambil sesi administrator saat ini
 * @returns {Object|null}
 */
export function getAdminSession() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch (e) {
    return null;
  }
}

/**
 * Mengecek apakah administrator sedang login
 * @returns {boolean}
 */
export function isAdminAuthenticated() {
  const session = getAdminSession();
  return Boolean(session && session.username);
}

/**
 * Logout administrator dan hapus sesi
 */
export function logoutAdmin() {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (e) {
    console.error('Gagal menghapus sesi admin:', e);
  }
}
