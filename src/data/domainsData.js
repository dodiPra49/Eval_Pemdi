// 7 ASPEK RESMI EVALUASI KINERJA PEMERINTAH DIGITAL (PERMENPANRB NO. 8 TAHUN 2026)
export const DOMAINS = [
  {
    id: 'aspek-1',
    code: 'A1',
    name: 'Tata Kelola dan Manajemen',
    weight: 10,
    indicatorsCount: 2,
    description: 'Menilai kematangan arsitektur, rencana aksi, dan proses manajemen layanan digital pemerintah.',
    color: 'from-blue-600 to-indigo-600',
    badgeColor: 'bg-blue-100 text-blue-800 border-blue-200',
    icon: 'FileText'
  },
  {
    id: 'aspek-2',
    code: 'A2',
    name: 'Penyelenggara',
    weight: 10,
    indicatorsCount: 2,
    description: 'Menilai kapabilitas SDM digital, pemanfaatan AI/analitik data, dan kolaborasi digital lintas sektor.',
    color: 'from-cyan-600 to-blue-600',
    badgeColor: 'bg-cyan-100 text-cyan-800 border-cyan-200',
    icon: 'Users'
  },
  {
    id: 'aspek-3',
    code: 'A3',
    name: 'Data',
    weight: 15,
    indicatorsCount: 4,
    description: 'Menilai tata kelola data (SDI), informasi geospasial (JIGN), statistik sektoral, dan kepatuhan UU PDP.',
    color: 'from-emerald-600 to-teal-600',
    badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-200',
    icon: 'Database'
  },
  {
    id: 'aspek-4',
    code: 'A4',
    name: 'Keamanan Pemerintah Digital',
    weight: 15,
    indicatorsCount: 4,
    description: 'Menilai audit keamanan TIK, SMKI (ISO 27001), kriptografi/TTE BSrE, dan kapabilitas tim CSIRT tanggap siber.',
    color: 'from-rose-600 to-red-600',
    badgeColor: 'bg-rose-100 text-rose-800 border-rose-200',
    icon: 'ShieldAlert'
  },
  {
    id: 'aspek-5',
    code: 'A5',
    name: 'Teknologi Pemerintah Digital',
    weight: 10,
    indicatorsCount: 2,
    description: 'Menilai standardisasi arsitektur aplikasi serta konsolidasi infrastruktur dan komputasi awan (PDN).',
    color: 'from-amber-600 to-orange-600',
    badgeColor: 'bg-amber-100 text-amber-800 border-amber-200',
    icon: 'Server'
  },
  {
    id: 'aspek-6',
    code: 'A6',
    name: 'Keterpaduan Layanan Digital',
    weight: 15,
    indicatorsCount: 4,
    description: 'Menilai keterpaduan probis, integrasi aplikasi terpadu, portal satu pintu (Super-App/MPP), dan interoperabilitas SPLP.',
    color: 'from-purple-600 to-indigo-700',
    badgeColor: 'bg-purple-100 text-purple-800 border-purple-200',
    icon: 'Layers'
  },
  {
    id: 'aspek-7',
    code: 'A7',
    name: 'Kepuasan Pengguna Layanan',
    weight: 25,
    indicatorsCount: 2,
    description: 'Aspek berbobot terbesar (25%): Menilai fasilitas dukungan helpdesk/AI serta survei kepuasan elektronik (e-SKM).',
    color: 'from-fuchsia-600 to-pink-600',
    badgeColor: 'bg-pink-100 text-pink-800 border-pink-200',
    icon: 'HeartHandshake'
  }
];

export const MATURITY_LEVELS = [
  { level: 1, name: 'Merintis', short: 'L1', description: 'Inisiatif baru dimulai, belum terorganisir secara sistematis, masih sporadis/ad-hoc, dan belum didukung komitmen serta kapasitas yang memadai.', color: 'bg-rose-500 text-white' },
  { level: 2, name: 'Membangun', short: 'L2', description: 'Telah mulai dibangun fondasi perencanaan, instrumen dasar, atau sistem awal pada sebagian unit kerja/sektor, namun belum terintegrasi.', color: 'bg-amber-500 text-white' },
  { level: 3, name: 'Berkembang', short: 'L3', description: 'Penerapan telah berjalan formal dan konsisten di seluruh instansi berpedoman pada standar dan regulasi baku resmi (Target baseline).', color: 'bg-blue-500 text-white' },
  { level: 4, name: 'Melembaga', short: 'L4', description: 'Penyelenggaraan telah melembaga dan terintegrasi penuh secara digital antarsektor/lintas instansi dan terhubung ke ekosistem nasional (INA Digital).', color: 'bg-teal-500 text-white' },
  { level: 5, name: 'Unggul', short: 'L5', description: 'Mencapai performa terbaik dengan perbaikan berkesinambungan berbasis data, adaptif inovasi AI/otomasi, serta berdampak nyata bagi kepuasan publik.', color: 'bg-indigo-600 text-white' }
];
