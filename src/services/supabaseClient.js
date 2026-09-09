import { createClient } from '@supabase/supabase-js';

// Kredensial default Supabase Cloud EvalPemdi
const DEFAULT_SUPABASE_URL = 'https://esgkyrsvnhepvhwuvpuf.supabase.co';
const DEFAULT_SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVzZ2t5cnN2bmhlcHZod3V2cHVmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODg5MzgyOTMsImV4cCI6MjEwNDUxNDI5M30.32kkUj3m-nXBU8PSY9cR6XBpI__t5Nh064-wyB13ryo';

const rawUrl = import.meta.env.VITE_SUPABASE_URL || DEFAULT_SUPABASE_URL;
// Sanitasi URL jika terdapat akhiran /rest/v1 atau trailing slash
const supabaseUrl = rawUrl.replace(/\/rest\/v1\/?$/i, '').replace(/\/+$/, '');
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || DEFAULT_SUPABASE_ANON_KEY;

// Cek apakah kredensial Supabase sudah diisi dengan valid
export const isSupabaseConfigured = Boolean(
  supabaseUrl && 
  supabaseAnonKey && 
  !supabaseUrl.includes('your-project-id')
);

export const supabase = isSupabaseConfigured
  ? createClient(supabaseUrl, supabaseAnonKey, {
      auth: {
        persistSession: true,
        autoRefreshToken: true
      }
    })
  : null;

