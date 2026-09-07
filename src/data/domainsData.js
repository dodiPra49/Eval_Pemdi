export const DOMAINS = [
  {
    id: 'domain-1',
    code: 'D1',
    name: 'Kebijakan Pemerintahan Digital',
    description: 'Menilai keberadaan dan kekuatan dasar hukum internal (Peraturan/SK) terkait tata kelola dan layanan digital.',
    color: 'from-blue-500 to-indigo-600',
    badgeColor: 'bg-blue-100 text-blue-800 border-blue-200',
    icon: 'FileText'
  },
  {
    id: 'domain-2',
    code: 'D2',
    name: 'Tata Kelola Pemerintahan Digital',
    description: 'Menilai kelembagaan, arsitektur, peta rencana, keterpaduan infrastruktur pusat data, dan jaringan.',
    color: 'from-emerald-500 to-teal-600',
    badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-200',
    icon: 'Network'
  },
  {
    id: 'domain-3',
    code: 'D3',
    name: 'Manajemen Pemerintahan Digital',
    description: 'Menilai penerapan manajemen risiko, keamanan informasi, data terpadu, aset TIK, serta audit berkala.',
    color: 'from-amber-500 to-orange-600',
    badgeColor: 'bg-amber-100 text-amber-800 border-amber-200',
    icon: 'ShieldCheck'
  },
  {
    id: 'domain-4',
    code: 'D4',
    name: 'Layanan Pemerintahan Digital',
    description: 'Menilai kualitas keterpaduan layanan administrasi pemerintahan dan layanan publik berbasis elektronik.',
    color: 'from-purple-500 to-pink-600',
    badgeColor: 'bg-purple-100 text-purple-800 border-purple-200',
    icon: 'Cpu'
  }
];

export const MATURITY_LEVELS = [
  { level: 1, name: 'Rintisan', short: 'L1', description: 'Kegiatan penerapan belum teratur, ad-hoc, atau baru inisiatif perorangan/unit kerja tertentu.', color: 'bg-rose-500 text-white' },
  { level: 2, name: 'Terkelola', short: 'L2', description: 'Kegiatan penerapan telah terorganisasi dan memiliki pedoman internal namun belum seragam di seluruh unit.', color: 'bg-amber-500 text-white' },
  { level: 3, name: 'Terstandarisasi', short: 'L3', description: 'Penerapan telah memiliki standar baku, regulasi formal, dan diterapkan serentak di seluruh instansi.', color: 'bg-blue-500 text-white' },
  { level: 4, name: 'Terpadu', short: 'L4', description: 'Penerapan telah terintegrasi secara elektronik antar-unit kerja atau lintas instansi pemerintah.', color: 'bg-teal-500 text-white' },
  { level: 5, name: 'Optimum', short: 'L5', description: 'Penerapan telah dievaluasi berkala, adaptif terhadap inovasi baru, dan terus ditingkatkan kinerjanya.', color: 'bg-indigo-600 text-white' }
];
