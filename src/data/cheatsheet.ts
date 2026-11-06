export interface CheatSheetSection {
  id: string;
  title: string;
  icon: string;
  items: {
    label: string;
    value: string;
    note?: string;
  }[];
}

export const CHEAT_SHEET: CheatSheetSection[] = [
  {
    id: 'kemranjen_banyumas',
    title: 'Profil Lokal Kwarran Kemranjen & Banyumas 2026',
    icon: 'Compass',
    items: [
      { label: 'Ketua Kwarran Kemranjen', value: 'Kak Maskuri' },
      { label: 'Ka Mabiran (Camat Kemranjen)', value: 'Ibu Ika Suprihatin, S.STP' },
      { label: 'Kantor / Sanggar Bakti', value: 'Jl. Raya Wijahan No. 22 / Kompleks Kantor Kecamatan Kemranjen' },
      { label: 'Jalur Vital Kemranjen', value: 'Jalur Banyumas–Kroya & Banyumas–Buntu' },
      { label: 'Prestasi Kwarcab Banyumas', value: 'Kwarcab Tergiat berkelanjutan di Kwarda Jawa Tengah' },
      { label: 'Hari Pramuka ke-65 (14 Agt 2026)', value: '"Memantapkan Langkah Organisasi Mendukung Swasembada Pangan Menuju Indonesia Emas 2045"' },
      { label: 'Jamnas XII 2026', value: 'Buperta Cibubur Jakarta Timur (Fokus: Pangan, Lingkungan, Literasi Digital)' },
      { label: 'HUT ke-81 RI (17 Agt 2026)', value: 'Konsolidasi kebangsaan, transformasi energi hijau & infrastruktur' },
      { label: 'Sumpah Pemuda ke-98 (28 Okt 2026)', value: 'Pemuda tangguh, adaptif AI (Kecerdasan Buatan), budi pekerti luhur' },
      { label: 'WOSM Dunia', value: 'Inisiatif Scouts for SDGs (Pengurangan emisi karbon & sampah plastik perairan)' },
    ],
  },
  {
    id: 'rumus_lapangan',
    title: 'Rumus Navigasi & Menaksir Medan',
    icon: 'Navigation',
    items: [
      { label: 'Back Azimuth (< 180°)', value: 'Sudut Bidik + 180°', note: 'Contoh: Bidik 65° -> Back Azimuth = 245°' },
      { label: 'Back Azimuth (> 180°)', value: 'Sudut Bidik - 180°', note: 'Contoh: Bidik 310° -> Back Azimuth = 130°' },
      { label: 'Menaksir Tinggi Pohon (Metode 11+1 Unit)', value: 'AB = 12 DE', note: 'A ke D = 11 unit tongkat 160cm, D ke C = 1 unit' },
      { label: 'Menaksir Lebar Sungai Sudut 90°', value: 'AB = 2 DE', note: 'BC = X langkah, CD = 1/2 X langkah' },
      { label: 'Menaksir Lebar Sungai Sudut 45°', value: 'AB = BC', note: 'Segitiga siku-siku sama kaki (sudut lancip 45°)' },
      { label: 'Menaksir Bayangan Tiang Listrik', value: 'Tinggi = (Panjang Bayangan Tiang / Bayangan Tongkat) x Tinggi Tongkat' },
    ],
  },
  {
    id: 'tali_dan_simpul',
    title: 'Katalog Simpul & Ikatan Lapangan',
    icon: 'Anchor',
    items: [
      { label: 'Simpul Mati', value: 'Menyambung 2 tali sama besar & TIDAK LICIN' },
      { label: 'Simpul Anyam', value: 'Menyambung 2 tali TIDAK SAMA BESAR & KERING' },
      { label: 'Simpul Anyam Berganda', value: 'Menyambung 2 tali TIDAK SAMA BESAR & BASAH' },
      { label: 'Simpul Kembar / Nelayan', value: 'Menyambung 2 tali SAMA BESAR & LICIN/BASAH' },
      { label: 'Simpul Kursi', value: 'Mengangkat / menurunkan orang pingsan / korban' },
      { label: 'Simpul Erat', value: 'Memendekkan tali tanpa pemotongan' },
      { label: 'Ikatan Pangkal', value: 'Mengikat tali pada tiang & memulai ikatan' },
      { label: 'Ikatan Jangkar', value: 'Mengikat benda ring & bentangan anak tandu dragbar' },
      { label: 'Ikatan Tiang', value: 'Mengikat hewan agar tidak tercekik (tetap longgar)' },
      { label: 'Ikatan Tambat', value: 'Menambatkan tali erat tapi mudah dilepas / seret balok' },
      { label: 'Ikatan Turki', value: 'Mengikat kacu / sapu lidi setangan leher' },
      { label: 'Tandu Darurat (Dragbar)', value: 'Kombinasi Ikatan Pangkal (pangkal bambu) + Ikatan Jangkar (anyaman tali)' },
    ],
  },
  {
    id: 'uu_bendera_24_2009',
    title: 'Ketentuan Bendera Merah Putih (UU 24/2009)',
    icon: 'Flag',
    items: [
      { label: 'Proporsi Resmi', value: 'Perbandingan Lebar : Panjang = 2 : 3' },
      { label: 'Lapangan Istana Kepresidenan', value: '200 cm x 300 cm' },
      { label: 'Lapangan Umum', value: '120 cm x 180 cm' },
      { label: 'Dalam Ruangan', value: '100 cm x 150 cm' },
      { label: 'Mobil Presiden & Wapres', value: '36 cm x 54 cm' },
      { label: 'Mobil Pejabat Negara', value: '30 cm x 45 cm' },
      { label: 'Kendaraan Umum', value: '20 cm x 30 cm' },
      { label: 'Kapal & Kereta Api', value: '100 cm x 150 cm' },
      { label: 'Pesawat Udara', value: '30 cm x 45 cm' },
      { label: 'Penggunaan di Meja', value: '10 cm x 15 cm' },
      { label: 'Pengibaran Setengah Tiang (Presiden/Wapres Wafat)', value: '3 hari berturut-turut di seluruh wilayah Indonesia' },
      { label: 'Penyimpanan Bendera Pusaka', value: 'Monumen Nasional (Monas) Jakarta' },
    ],
  },
  {
    id: 'sku_lingkungan_air',
    title: 'Teknik Penjernihan Air & Penghijauan',
    icon: 'Droplets',
    items: [
      { label: 'Susunan Filter Drum', value: 'Ijuk -> Pasir Halus -> Ijuk Tebal -> Arang Tempurung 10kg -> Kerikil -> Batu 2-3 cm' },
      { label: 'Posisi Kran Drum', value: 'Tinggi 5 cm dari dasar drum (agar endapan bawah tidak keluar)' },
      { label: 'Ukuran Lubang Tanam Pohon', value: '0.75 m (tinggi/dalam) x 0.90 m (lebar) x 0.90 m (panjang)' },
      { label: 'Pupuk Pohon NPK', value: '25 gram per lubang tiap 3 bulan sekali' },
      { label: 'Bibit Generatif', value: 'Berasal dari biji, memiliki akar tunggang kokoh dan tahan lama' },
      { label: 'Manfaat Orologis', value: 'Akar pohon mengikat tanah untuk mencegah erosi dan tanah longsor' },
      { label: 'Manfaat Edaphis', value: 'Menyediakan tempat dan habitat alami bagi satwa liar' },
      { label: 'Limbah Hitam (Blackwater)', value: 'Sampah cair toilet mengandung patogen berbahaya' },
    ],
  },
];
