import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

let pool = null;

export function getDbPool() {
  if (!pool) {
    const config = {
      host: process.env.DB_HOST || 'database',
      port: Number(process.env.DB_PORT) || 3306,
      user: process.env.DB_USER || 'evalpemdi_user',
      password: process.env.DB_PASSWORD || 'evalpemdi_password',
      database: process.env.DB_NAME || 'EvalPemdi',
      waitForConnections: true,
      connectionLimit: 15,
      queueLimit: 0,
      charset: 'utf8mb4',
      timezone: '+07:00' // WIB (Waktu Indonesia Barat)
    };

    pool = mysql.createPool(config);
  }
  return pool;
}

export async function testConnection() {
  try {
    const p = getDbPool();
    const [rows] = await p.query('SELECT 1 + 1 AS result');
    return { success: true, message: 'Database MariaDB connected successfully', rows };
  } catch (error) {
    console.error('❌ Gagal terhubung ke MariaDB:', error.message);
    return { success: false, error: error.message };
  }
}
