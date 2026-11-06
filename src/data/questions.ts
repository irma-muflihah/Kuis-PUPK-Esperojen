import { Question } from '../types/quiz';

export const CATEGORIES = [
  {
    "id": "all",
    "label": "Semua Materi"
  },
  {
    "id": "fundamental",
    "label": "Fundamental & Kode Kehormatan"
  },
  {
    "id": "tali_ikatan",
    "label": "Tali Temali & Pionering"
  },
  {
    "id": "sandi_komunikasi",
    "label": "Sandi, Morse & Semaphore"
  },
  {
    "id": "kompas_menaksir",
    "label": "Kompas, Navigasi & Menaksir"
  },
  {
    "id": "kebangsaan",
    "label": "Kenegaraan & Sejarah Nasional"
  },
  {
    "id": "sku_ramu",
    "label": "Materi SKU Penggalang Ramu"
  },
  {
    "id": "kemranjen_2026",
    "label": "PUPK Kemranjen, Banyumas & Isu 2026"
  }
] as const;

export const POS_STATIONS = [
  {
    "pos": 1,
    "title": "Pos 1: Fundamental, Trisatya & Dasa Darma",
    "desc": "Filosofi tingkatan Penggalang, kiasan Sumpah Pemuda, struktur regu, dan 10 Dasa Darma",
    "category": "fundamental"
  },
  {
    "pos": 2,
    "title": "Pos 2: Tali Temali, Ikatan & Tandu Darurat",
    "desc": "Simpul mati, anyam, kembar, kursi, ikatan pangkal, tiang, dragbar, dan tripod",
    "category": "tali_ikatan"
  },
  {
    "pos": 3,
    "title": "Pos 3: Sandi, Morse & Semaphore",
    "desc": "Isyarat morse, bendera semaphore 8 arah mata angin, sandi kotak, dan sandi rumput",
    "category": "sandi_komunikasi"
  },
  {
    "pos": 4,
    "title": "Pos 4: Kompas, Menaksir & Navigasi",
    "desc": "Azimut & Back-Azimut, menaksir tinggi pohon (AB = 12 DE), lebar sungai, dan peta pita",
    "category": "kompas_menaksir"
  },
  {
    "pos": 5,
    "title": "Pos 5: Kebangsaan, Lingkungan & SKU Ramu",
    "desc": "UU 24/2009 bendera & lambang, penjernihan air, pemilahan sampah, dan materi SKU",
    "category": "kebangsaan"
  },
  {
    "pos": 6,
    "title": "Pos 6: Kwarran Kemranjen & Wawasan 2026",
    "desc": "Profil tokoh Kemranjen/Banyumas, Hari Pramuka ke-65, Jamnas XII 2026, dan WOSM SDGs",
    "category": "kemranjen_2026"
  }
];

export const QUESTIONS: Question[] = [
  {
    "id": "fund-1",
    "category": "fundamental",
    "categoryLabel": "Fundamental & Kode Kehormatan",
    "posNumber": 1,
    "question": "Berapakah rentang usia anggota Gerakan Pramuka yang tergolong dalam tingkatan Penggalang?",
    "options": [
      "21 hingga 25 tahun",
      "7 hingga 10 tahun",
      "16 hingga 20 tahun",
      "11 hingga 15 tahun"
    ],
    "correctIndex": 3,
    "explanation": "Sesuai dengan ketentuan Gerakan Pramuka dan dokumen PUPK 2026, golongan Penggalang beranggotakan remaja berusia 11 hingga 15 tahun.",
    "sourceDoc": "PANDUAN MATERI PUPK Lomba Galang Tangguh Kemranjen 2026",
    "difficulty": "Mudah"
  },
  {
    "id": "fund-2",
    "category": "fundamental",
    "categoryLabel": "Fundamental & Kode Kehormatan",
    "posNumber": 1,
    "question": "Istilah \"Penggalang\" dalam kepramukaan mengambil kiasan dasar dari peristiwa bersejarah bangsa Indonesia yaitu...",
    "options": [
      "Momentum Sumpah Pemuda 28 Oktober 1928 ketika menggalang persatuan dan kesatuan",
      "Peristiwa Kebangkitan Nasional 20 Mei 1908",
      "Pertempuran Surabaya 10 November 1945",
      "Proklamasi Kemerdekaan 17 Agustus 1945"
    ],
    "correctIndex": 0,
    "explanation": "Istilah \"Penggalang\" mengambil kiasan dasar dari masa perjuangan bangsa Indonesia ketika mulai menggalang persatuan dan kesatuan pemuda melalui momentum bersejarah Sumpah Pemuda pada 28 Oktober 1928.",
    "sourceDoc": "PANDUAN MATERI PUPK Lomba Galang Tangguh Kemranjen 2026",
    "difficulty": "Mudah"
  },
  {
    "id": "fund-3",
    "category": "fundamental",
    "categoryLabel": "Fundamental & Kode Kehormatan",
    "posNumber": 1,
    "question": "Urutan tingkatan Syarat Kecakapan Umum (SKU) bagi Pramuka Penggalang yang benar dari awal hingga tertinggi adalah...",
    "options": [
      "Bantara, Laksana, Pandega",
      "Purwa, Madya, Utama",
      "Ramu, Rakit, Terap, Garuda",
      "Mula, Bantu, Tata, Garuda"
    ],
    "correctIndex": 2,
    "explanation": "Tingkatan SKU Penggalang terdiri dari Penggalang Ramu, Penggalang Rakit, dan Penggalang Terap, dengan predikat tertinggi Penggalang Garuda.",
    "sourceDoc": "PANDUAN MATERI PUPK Lomba Galang Tangguh Kemranjen 2026",
    "difficulty": "Mudah"
  },
  {
    "id": "fund-4",
    "category": "fundamental",
    "categoryLabel": "Fundamental & Kode Kehormatan",
    "posNumber": 1,
    "question": "Apa makna kiasan dasar dan filosofi dari tingkatan \"Penggalang Ramu\"?",
    "options": [
      "Mengkiaskan tahap kematangan dan teladan paripurna",
      "Mengkiaskan tahap meramu atau mengumpulkan bahan, informasi, serta potensi dasar persatuan",
      "Mengkiaskan penerapan atau pengamalan ilmu di tengah masyarakat luas",
      "Mengkiaskan tahap merakit dan menyusun kekuatan yang ada"
    ],
    "correctIndex": 1,
    "explanation": "Penggalang Ramu mengkiaskan tahap meramu atau mengumpulkan bahan, informasi, serta potensi dasar persatuan untuk bekal membangun kekuatan.",
    "sourceDoc": "PANDUAN MATERI PUPK Lomba Galang Tangguh Kemranjen 2026",
    "difficulty": "Sedang"
  },
  {
    "id": "fund-5",
    "category": "fundamental",
    "categoryLabel": "Fundamental & Kode Kehormatan",
    "posNumber": 1,
    "question": "Apa perbedaan bunyi butir kedua Trisatya antara golongan Penggalang dengan golongan Penegak/Pandega?",
    "options": [
      "Penggalang: \"mempersiapkan diri membangun masyarakat\", Penegak: \"ikut serta membangun masyarakat\"",
      "Penggalang: \"ikut serta membangun masyarakat\", Penegak: \"mempersiapkan diri membangun masyarakat\"",
      "Penggalang berjanji pada Dwisatya, sedangkan Penegak pada Trisatya",
      "Penggalang tidak membaca Dasa Darma, sedangkan Penegak membaca Dasa Darma"
    ],
    "correctIndex": 0,
    "explanation": "Pada butir kedua Trisatya Penggalang berbunyi \"menolong sesama hidup dan mempersiapkan diri membangun masyarakat\", sedangkan untuk Penegak dan Pandega berbunyi \"...dan ikut serta membangun masyarakat\".",
    "sourceDoc": "PANDUAN MATERI PUPK Lomba Galang Tangguh Kemranjen 2026",
    "difficulty": "Sedang"
  },
  {
    "id": "fund-6",
    "category": "fundamental",
    "categoryLabel": "Fundamental & Kode Kehormatan",
    "posNumber": 1,
    "question": "Dasa Darma Pramuka ke-5 berbunyi...",
    "options": [
      "Rela menolong dan tabah",
      "Patuh dan suka bermusyawarah",
      "Rajin, terampil dan gembira",
      "Patriot yang sopan dan ksatria"
    ],
    "correctIndex": 0,
    "explanation": "Urutan Dasa Darma: 1. Taqwa pada Tuhan Yang Maha Esa; 2. Cinta alam & kasih sayang sesama manusia; 3. Patriot yang sopan & ksatria; 4. Patuh & suka bermusyawarah; 5. Rela menolong & tabah.",
    "sourceDoc": "PEMBAHASAN SKU PENGGALANG RAMU",
    "difficulty": "Mudah"
  },
  {
    "id": "fund-7",
    "category": "fundamental",
    "categoryLabel": "Fundamental & Kode Kehormatan",
    "posNumber": 1,
    "question": "Berapakah jumlah ideal anggota dalam satu Regu Penggalang, dan bagaimana aturan pemberian namanya?",
    "options": [
      "6–8 orang; Regu putra menggunakan nama hewan, Regu putri menggunakan nama tumbuhan/bunga",
      "10–12 orang; dinamai berdasarkan nama pulau di Indonesia",
      "4–6 orang; bebas menggunakan nama pahlawan",
      "8–10 orang; dinamai berdasarkan nama warna"
    ],
    "correctIndex": 0,
    "explanation": "Satuan terkecil Penggalang adalah Regu (beranggotakan 6–8 orang). Regu putra dinamai hewan, dan regu putri dinamai tumbuhan/bunga.",
    "sourceDoc": "PANDUAN MATERI PUPK Lomba Galang Tangguh Kemranjen 2026",
    "difficulty": "Mudah"
  },
  {
    "id": "fund-8",
    "category": "fundamental",
    "categoryLabel": "Fundamental & Kode Kehormatan",
    "posNumber": 1,
    "question": "Pemimpin Regu Penggalang disebut Pinru dan didampingi Wapinru. Gabungan dari 3 sampai 4 regu penggalang membentuk...",
    "options": [
      "Pasukan Penggalang",
      "Perindukan Penggalang",
      "Ambalan Penggalang",
      "Racana Penggalang"
    ],
    "correctIndex": 0,
    "explanation": "Gabungan dari 3–4 regu membentuk Pasukan Penggalang (beranggotakan 18–32 orang) dipimpin oleh seorang Pembina Penggalang didampingi Pembantu Pembina.",
    "sourceDoc": "PANDUAN MATERI PUPK Lomba Galang Tangguh Kemranjen 2026",
    "difficulty": "Mudah"
  },
  {
    "id": "fund-9",
    "category": "fundamental",
    "categoryLabel": "Fundamental & Kode Kehormatan",
    "posNumber": 1,
    "question": "Apa bunyi Dasa Darma Pramuka ke-2?",
    "options": [
      "Cinta alam dan kasih sayang sesama manusia",
      "Disiplin, berani dan setia",
      "Hemat, cermat dan bersahaja",
      "Takwa kepada Tuhan Yang Maha Esa"
    ],
    "correctIndex": 0,
    "explanation": "Dasa Darma ke-2 adalah \"Cinta alam dan kasih sayang sesama manusia\".",
    "sourceDoc": "PEMBAHASAN SKU PENGGALANG RAMU",
    "difficulty": "Mudah"
  },
  {
    "id": "fund-10",
    "category": "fundamental",
    "categoryLabel": "Fundamental & Kode Kehormatan",
    "posNumber": 1,
    "question": "Kesanggupan anggota dewasa Gerakan Pramuka untuk mengantarkan kaum muda ke masa depan yang lebih baik dinyatakan dengan...",
    "options": [
      "Trisatya Penegak",
      "Dasa Darma",
      "Dwisatya",
      "Ikrar Pembina"
    ],
    "correctIndex": 3,
    "explanation": "Berdasarkan materi SKU Penggalang butir 12, kesanggupan anggota dewasa untuk mengantarkan kaum muda Indonesia ke masa depan yang lebih baik dinyatakan dengan IKRAR.",
    "sourceDoc": "PEMBAHASAN SKU PENGGALANG RAMU",
    "difficulty": "Sedang"
  },
  {
    "id": "tali-1",
    "category": "tali_ikatan",
    "categoryLabel": "Tali Temali & Pionering",
    "posNumber": 2,
    "question": "Dalam kepramukaan, apa perbedaan mendasar antara tali, simpul, dan ikatan?",
    "options": [
      "Tali adalah simpul yang telah dianyam",
      "Semuanya sama dan hanya beda istilah daerah",
      "Tali adalah bendanya; Simpul adalah hubungan tali dengan tali; Ikatan adalah hubungan tali dengan benda lain (kayu/tongkat)",
      "Simpul digunakan untuk kayu, sedangkan ikatan digunakan untuk menyambung dua tali"
    ],
    "correctIndex": 2,
    "explanation": "Tali adalah bendanya. Simpul adalah hubungan antara tali dengan tali. Ikatan adalah hubungan antara tali dengan benda lainnya, misalnya kayu, balok, bambu, dan sebagainya.",
    "sourceDoc": "PEMBAHASAN SKU PENGGALANG RAMU",
    "difficulty": "Mudah"
  },
  {
    "id": "tali-2",
    "category": "tali_ikatan",
    "categoryLabel": "Tali Temali & Pionering",
    "posNumber": 2,
    "question": "Simpul yang berguna untuk menyambung 2 utas tali yang sama besar dan dalam keadaan TIDAK LICIN adalah...",
    "options": [
      "Simpul Tiang",
      "Simpul Kembar (Nelayan)",
      "Simpul Anyam",
      "Simpul Mati"
    ],
    "correctIndex": 3,
    "explanation": "Simpul Mati digunakan untuk menyambung 2 utas tali yang sama besar dan tidak licin. Jika licin digunakan Simpul Kembar.",
    "sourceDoc": "PEMBAHASAN SKU PENGGALANG RAMU",
    "difficulty": "Mudah"
  },
  {
    "id": "tali-3",
    "category": "tali_ikatan",
    "categoryLabel": "Tali Temali & Pionering",
    "posNumber": 2,
    "question": "Untuk menyambung dua utas tali yang TIDAK SAMA BESAR dan dalam keadaan KERING, simpul yang tepat digunakan adalah...",
    "options": [
      "Simpul Mati",
      "Simpul Anyam",
      "Simpul Anyam Berganda",
      "Simpul Erat"
    ],
    "correctIndex": 1,
    "explanation": "Simpul Anyam gunanya untuk menyambung 2 utas tali yang tidak sama besarnya dan dalam keadaan kering. Bila dalam keadaan basah digunakan Simpul Anyam Berganda.",
    "sourceDoc": "PEMBAHASAN SKU PENGGALANG RAMU",
    "difficulty": "Sedang"
  },
  {
    "id": "tali-4",
    "category": "tali_ikatan",
    "categoryLabel": "Tali Temali & Pionering",
    "posNumber": 2,
    "question": "Jika dua utas tali yang TIDAK SAMA BESAR disambung dalam keadaan BASAH, maka simpul yang digunakan adalah...",
    "options": [
      "Simpul Anyam Berganda",
      "Simpul Pangkal",
      "Simpul Mati",
      "Simpul Kembar"
    ],
    "correctIndex": 0,
    "explanation": "Simpul Anyam Berganda gunanya untuk menyambung 2 utas tali yang tidak sama besarnya dan dalam keadaan basah.",
    "sourceDoc": "PEMBAHASAN SKU PENGGALANG RAMU",
    "difficulty": "Sedang"
  },
  {
    "id": "tali-5",
    "category": "tali_ikatan",
    "categoryLabel": "Tali Temali & Pionering",
    "posNumber": 2,
    "question": "Simpul yang digunakan untuk mengangkat atau menurunkan benda atau orang pingsan saat evakuasi darurat adalah...",
    "options": [
      "Simpul Laso",
      "Simpul Kursi",
      "Simpul Ujung Tali",
      "Simpul Penarik"
    ],
    "correctIndex": 1,
    "explanation": "Simpul Kursi gunanya untuk mengangkat atau menurunkan benda atau orang pingsan pada saat pertolongan darurat.",
    "sourceDoc": "PEMBAHASAN SKU PENGGALANG RAMU",
    "difficulty": "Sedang"
  },
  {
    "id": "tali-6",
    "category": "tali_ikatan",
    "categoryLabel": "Tali Temali & Pionering",
    "posNumber": 2,
    "question": "Untuk membuat tandu darurat (dragbar) pada uji lapangan Galang Tangguh, kombinasi simpul/ikatan yang wajib dikuasai adalah...",
    "options": [
      "Simpul Anyam dan Ikatan Silang",
      "Ikatan Pangkal dan Ikatan Jangkar",
      "Simpul Mati dan Ikatan Canggah",
      "Simpul Kembar dan Ikatan Kaki Tiga"
    ],
    "correctIndex": 1,
    "explanation": "Dalam aplikasi lapangan pembuatan dragbar/tandu darurat, digunakan kombinasi ikatan pangkal (pada awal dan akhir) serta ikatan jangkar (pada bentangan anak tandu).",
    "sourceDoc": "PANDUAN MATERI PUPK Lomba Galang Tangguh Kemranjen 2026",
    "difficulty": "Sedang"
  },
  {
    "id": "tali-7",
    "category": "tali_ikatan",
    "categoryLabel": "Tali Temali & Pionering",
    "posNumber": 2,
    "question": "Simpul yang berfungsi untuk memendekkan tali tanpa harus memotong tali tersebut dinamakan...",
    "options": [
      "Simpul Tambat",
      "Simpul Ujung Tali",
      "Simpul Erat",
      "Simpul Tiang"
    ],
    "correctIndex": 2,
    "explanation": "Simpul Erat gunanya untuk memendekkan tali tanpa pemotongan.",
    "sourceDoc": "PEMBAHASAN SKU PENGGALANG RAMU",
    "difficulty": "Sedang"
  },
  {
    "id": "tali-8",
    "category": "tali_ikatan",
    "categoryLabel": "Tali Temali & Pionering",
    "posNumber": 2,
    "question": "Ikatan yang digunakan untuk mengikat sesuatu sehingga benda atau leher hewan yang diikat tetap dapat bergerak leluasa dan tidak tercekik adalah...",
    "options": [
      "Ikatan Turki",
      "Ikatan Tiang",
      "Ikatan Canggah",
      "Ikatan Pangkal"
    ],
    "correctIndex": 1,
    "explanation": "Ikatan Tiang gunanya untuk mengikat sesuatu sehingga yang diikat masih dapat bergerak leluasa, misalnya untuk mengikat leher binatang supaya tidak tercekik.",
    "sourceDoc": "PEMBAHASAN SKU PENGGALANG RAMU",
    "difficulty": "Sedang"
  },
  {
    "id": "tali-9",
    "category": "tali_ikatan",
    "categoryLabel": "Tali Temali & Pionering",
    "posNumber": 2,
    "question": "Ikatan yang khusus digunakan untuk mengikat cincin sapu lidi setangan leher (hasduk) Pramuka adalah...",
    "options": [
      "Ikatan Kaki Tiga",
      "Ikatan Jangkar",
      "Ikatan Palang",
      "Ikatan Turki"
    ],
    "correctIndex": 3,
    "explanation": "Ikatan Turki gunanya untuk membuat cincin atau mengikat sapu lidi cincin setangan leher (kacu leher).",
    "sourceDoc": "PEMBAHASAN SKU PENGGALANG RAMU",
    "difficulty": "Mudah"
  },
  {
    "id": "tali-10",
    "category": "tali_ikatan",
    "categoryLabel": "Tali Temali & Pionering",
    "posNumber": 2,
    "question": "Ikatan yang berfungsi menambatkan tali pada kayu/tiang dengan erat namun sangat mudah untuk dilepaskan kembali serta sering digunakan untuk menyeret balok adalah...",
    "options": [
      "Ikatan Silang",
      "Ikatan Tambat",
      "Ikatan Palang",
      "Ikatan Canggah"
    ],
    "correctIndex": 1,
    "explanation": "Ikatan Tambat gunanya untuk menambatkan tali pada tiang/kayu dengan erat, tetapi mudah untuk melepaskannya kembali, serta digunakan untuk menyeret balok kayu.",
    "sourceDoc": "PEMBAHASAN SKU PENGGALANG RAMU",
    "difficulty": "Sedang"
  },
  {
    "id": "tali-11",
    "category": "tali_ikatan",
    "categoryLabel": "Tali Temali & Pionering",
    "posNumber": 2,
    "question": "Untuk menyambung dua tongkat secara lurus memanjang agar menjadi lebih tinggi/panjang, ikatan yang digunakan adalah...",
    "options": [
      "Ikatan Canggah (Menyambung Tongkat)",
      "Ikatan Silang",
      "Ikatan Turki",
      "Ikatan Palang"
    ],
    "correctIndex": 0,
    "explanation": "Ikatan Canggah digunakan untuk menyambung dua buah tongkat atau tiang secara sejajar/lurus.",
    "sourceDoc": "PEMBAHASAN SKU PENGGALANG RAMU",
    "difficulty": "Sedang"
  },
  {
    "id": "sandi-1",
    "category": "sandi_komunikasi",
    "categoryLabel": "Sandi, Morse & Semaphore",
    "posNumber": 3,
    "question": "Siapakah tokoh penemu kode morse yang menggunakan kombinasi sinyal titik dan garis?",
    "options": [
      "Lord Baden Powell",
      "Samuel Finley Breese Morse",
      "Guglielmo Marconi",
      "Alexander Graham Bell"
    ],
    "correctIndex": 1,
    "explanation": "Kode Morse ditemukan oleh Samuel Finley Breese Morse (kebangsaan Amerika Serikat) pada abad ke-19.",
    "sourceDoc": "PANDUAN MATERI PUPK Lomba Galang Tangguh Kemranjen 2026",
    "difficulty": "Mudah"
  },
  {
    "id": "sandi-2",
    "category": "sandi_komunikasi",
    "categoryLabel": "Sandi, Morse & Semaphore",
    "posNumber": 3,
    "question": "Dalam kode Morse standar internasional, huruf \"P\", \"R\", \"A\", \"M\", \"U\", \"K\", \"A\" masing-masing memiliki sandi...",
    "options": [
      "P: .--. ; R: .-. ; A: .- ; M: -- ; U: ..- ; K: -.- ; A: .-",
      "P: --.. ; R: .-. ; A: -.. ; M: -- ; U: ...- ; K: -.- ; A: .-",
      "P: ... ; R: --- ; A: .- ; M: -.. ; U: .-- ; K: -.- ; A: .-",
      "P: .--. ; R: -.. ; A: .- ; M: -- ; U: ..- ; K: --- ; A: .-"
    ],
    "correctIndex": 0,
    "explanation": "Kode Morse: P (.--.), R (.-.), A (.-), M (--), U (..-), K (-.-), A (.-).",
    "sourceDoc": "PANDUAN MATERI PUPK Lomba Galang Tangguh Kemranjen 2026",
    "difficulty": "Sedang"
  },
  {
    "id": "sandi-3",
    "category": "sandi_komunikasi",
    "categoryLabel": "Sandi, Morse & Semaphore",
    "posNumber": 3,
    "question": "Isyarat Semaphore mengandalkan posisi sepasang bendera dengan memanfaatkan pola...",
    "options": [
      "Gerakan vertikal atas-bawah saja",
      "Hanya arah mata angin pokok (4 arah)",
      "Derajat lingkaran 360 derajat bebas",
      "Sudut putaran 8 arah mata angin (sudut 45° kelipatan)"
    ],
    "correctIndex": 3,
    "explanation": "Pengiriman pesan Semaphore memanfaatkan posisi 2 bendera dengan 8 titik sudut utama yang mengacu pada 8 arah mata angin dengan interval 45 derajat.",
    "sourceDoc": "PANDUAN MATERI PUPK Lomba Galang Tangguh Kemranjen 2026",
    "difficulty": "Mudah"
  },
  {
    "id": "sandi-4",
    "category": "sandi_komunikasi",
    "categoryLabel": "Sandi, Morse & Semaphore",
    "posNumber": 3,
    "question": "Berapakah ukuran standar bendera semaphore dan tongkat pegangannya yang lazim digunakan dalam lomba kepramukaan?",
    "options": [
      "20 cm x 20 cm, tongkat 30 cm",
      "30 cm x 30 cm, tongkat 40 cm",
      "45 cm x 45 cm, tongkat 50–55 cm",
      "80 cm x 80 cm, tongkat 100 cm"
    ],
    "correctIndex": 2,
    "explanation": "Standar bendera Semaphore berukuran 45 cm x 45 cm dengan warna kombinasi merah dan kuning diagonal, serta panjang tongkat 50–55 cm.",
    "sourceDoc": "PANDUAN MATERI PUPK Lomba Galang Tangguh Kemranjen 2026",
    "difficulty": "Sedang"
  },
  {
    "id": "sandi-5",
    "category": "sandi_komunikasi",
    "categoryLabel": "Sandi, Morse & Semaphore",
    "posNumber": 3,
    "question": "Dalam Sandi Kotak 1, kunci huruf dibagi menjadi bagan palang segi empat (9 kotak) dan bagan silang (X). Setiap kotak memuat...",
    "options": [
      "3 huruf (huruf kedua 1 titik, huruf ketiga 2 titik)",
      "4 huruf dengan tanda angka",
      "1 huruf tanpa titik",
      "2 huruf (huruf kedua ditandai dengan satu titik)"
    ],
    "correctIndex": 3,
    "explanation": "Pada Sandi Kotak 1, tiap kotak memuat 2 huruf. Huruf pertama tidak diberi titik, sedangkan huruf kedua diberi sebuah tanda titik di tengah ruangannya. Pada bagian silang (W, X, Y, Z) berlaku sama.",
    "sourceDoc": "PANDUAN MATERI PUPK Lomba Galang Tangguh Kemranjen 2026",
    "difficulty": "Sedang"
  },
  {
    "id": "sandi-6",
    "category": "sandi_komunikasi",
    "categoryLabel": "Sandi, Morse & Semaphore",
    "posNumber": 3,
    "question": "Pada Sandi Rumput, bagaimana representasi titik (.) dan garis (-) kode morse diwujudkan?",
    "options": [
      "Titik digambar garis lurus, garis digambar lengkungan",
      "Titik digambar bunga, garis digambar daun",
      "Titik digambar rumput pendek, garis digambar rumput tinggi",
      "Titik digambar rumput tinggi, garis digambar rumput pendek"
    ],
    "correctIndex": 2,
    "explanation": "Sandi Rumput merupakan turunan dari sandi Morse. Isyarat titik (.) diwujudkan sebagai rumput berundak pendek/rendah, sedangkan isyarat garis (-) diwujudkan sebagai rumput tinggi.",
    "sourceDoc": "PANDUAN MATERI PUPK Lomba Galang Tangguh Kemranjen 2026",
    "difficulty": "Sedang"
  },
  {
    "id": "sandi-7",
    "category": "sandi_komunikasi",
    "categoryLabel": "Sandi, Morse & Semaphore",
    "posNumber": 3,
    "question": "Dalam Sandi AN (kunci A berpasangan dengan N), huruf apakah yang menjadi pengganti huruf \"P\"?",
    "options": [
      "B",
      "C",
      "C",
      "O"
    ],
    "correctIndex": 1,
    "explanation": "Kunci sandi AN: baris atas A B C D E F G H I J K L M, baris bawah N O P Q R S T U V W X Y Z. Pasangan dari P adalah C (A-N, B-O, C-P).",
    "sourceDoc": "PANDUAN MATERI PUPK Lomba Galang Tangguh Kemranjen 2026",
    "difficulty": "Sedang"
  },
  {
    "id": "sandi-8",
    "category": "sandi_komunikasi",
    "categoryLabel": "Sandi, Morse & Semaphore",
    "posNumber": 3,
    "question": "Sandi Morse untuk panggilan bahaya dan pertolongan internasional yang paling terkenal di dunia adalah...",
    "options": [
      "... --- ... (SOS)",
      "--- ... --- (OSO)",
      "..- ..- (UU)",
      ".-. .-. (RR)"
    ],
    "correctIndex": 0,
    "explanation": "Isyarat darurat internasional adalah SOS yang terdiri dari 3 titik (S), 3 garis (O), dan 3 titik (S): ... --- ...",
    "sourceDoc": "PANDUAN MATERI PUPK Lomba Galang Tangguh Kemranjen 2026",
    "difficulty": "Mudah"
  },
  {
    "id": "kompas-1",
    "category": "kompas_menaksir",
    "categoryLabel": "Kompas, Navigasi & Menaksir",
    "posNumber": 4,
    "question": "Apakah rumus menentukan Sasaran Balik (Back Azimuth) yang baku dalam navigasi medan?",
    "options": [
      "Selalu ditambah 90° dalam semua kondisi sudut",
      "Jika azimut bidik < 180° dikurangi 180°; jika > 180° ditambah 180°",
      "Selalu dikurangi 360° dari sudut bidik",
      "Jika azimut bidik < 180° ditambah 180°; jika > 180° dikurangi 180°"
    ],
    "correctIndex": 3,
    "explanation": "Rumus Sasaran Balik (Back Azimuth): Apabila sudut sasaran bidik kurang dari 180°, maka TAMBAHKAN dengan 180°. Apabila sudut sasaran bidik lebih dari 180°, maka KURANGI dengan 180°.",
    "sourceDoc": "PEMBAHASAN SKU PENGGALANG RAMU & PUPK 2026",
    "difficulty": "Sedang"
  },
  {
    "id": "kompas-2",
    "category": "kompas_menaksir",
    "categoryLabel": "Kompas, Navigasi & Menaksir",
    "posNumber": 4,
    "question": "Jika seorang Penggalang membidik sasaran dengan sudut azimut 65°, berapakah sudut Back Azimuth untuk kembali ke titik semula?",
    "options": [
      "265°",
      "205°",
      "115°",
      "245°"
    ],
    "correctIndex": 3,
    "explanation": "Karena sudut bidik 65° (< 180°), maka rumusnya ditambah 180°: 65° + 180° = 245°.",
    "sourceDoc": "PEMBAHASAN SKU PENGGALANG RAMU & PUPK 2026",
    "difficulty": "Sedang"
  },
  {
    "id": "kompas-3",
    "category": "kompas_menaksir",
    "categoryLabel": "Kompas, Navigasi & Menaksir",
    "posNumber": 4,
    "question": "Jika sasaran bidik menunjukkan sudut azimut 310°, berapakah sudut Back Azimuth-nya?",
    "options": [
      "180°",
      "110°",
      "210°",
      "130°"
    ],
    "correctIndex": 3,
    "explanation": "Karena sudut bidik 310° (> 180°), maka dikurangi 180°: 310° - 180° = 130°.",
    "sourceDoc": "PEMBAHASAN SKU PENGGALANG RAMU & PUPK 2026",
    "difficulty": "Sedang"
  },
  {
    "id": "kompas-4",
    "category": "kompas_menaksir",
    "categoryLabel": "Kompas, Navigasi & Menaksir",
    "posNumber": 4,
    "question": "Kompas dibagi menjadi 2 jenis utama, yaitu kompas magnetik dan gyrocompass. Kompas magnetik bekerja berdasarkan...",
    "options": [
      "Sinyal satelit GPS digital",
      "Pantulan cahaya laser pembidik",
      "Aliran cairan alkohol dan air",
      "Jarum magnet yang mengarah pada kutub magnet bumi (Kutub Utara)"
    ],
    "correctIndex": 3,
    "explanation": "Kompas magnetik adalah kompas dengan jarum magnet yang mengarahkan pada kutub utara magnet bumi. Sedangkan gyrocompass adalah kompas yang mengandung gasing/cairan dari alkohol dan air.",
    "sourceDoc": "PEMBAHASAN SKU PENGGALANG RAMU",
    "difficulty": "Mudah"
  },
  {
    "id": "kompas-5",
    "category": "kompas_menaksir",
    "categoryLabel": "Kompas, Navigasi & Menaksir",
    "posNumber": 4,
    "question": "Bagian kompas bidik yang berupa permukaan piringan tempat tertera angka dan huruf seperti pada jam disebut...",
    "options": [
      "Visir",
      "Dial",
      "Tutup dial",
      "Kaca pembesar"
    ],
    "correctIndex": 1,
    "explanation": "Dial adalah permukaan dimana tertera angka / huruf seperti pada jam.",
    "sourceDoc": "PEMBAHASAN SKU PENGGALANG RAMU",
    "difficulty": "Mudah"
  },
  {
    "id": "kompas-6",
    "category": "kompas_menaksir",
    "categoryLabel": "Kompas, Navigasi & Menaksir",
    "posNumber": 4,
    "question": "Bagian kompas yang berfungsi sebagai kawat atau celah tipis pembidik sasaran disebut...",
    "options": [
      "Jam petunjuk",
      "Dial",
      "Visir",
      "Alat penggantung"
    ],
    "correctIndex": 2,
    "explanation": "Visir adalah pembidik sasaran pada kompas bidik (kompas prisma).",
    "sourceDoc": "PEMBAHASAN SKU PENGGALANG RAMU",
    "difficulty": "Mudah"
  },
  {
    "id": "kompas-7",
    "category": "kompas_menaksir",
    "categoryLabel": "Kompas, Navigasi & Menaksir",
    "posNumber": 4,
    "question": "Dalam rumus menaksir tinggi pohon dengan metode perbandingan 11 unit (A ke D) dan 1 unit (D ke C) dengan tongkat di titik D, rumus akhir tinggi pohon AB adalah...",
    "options": [
      "AB = 12 DE",
      "AB = 10 DE",
      "AB = 11 DE",
      "AB = 16 DE"
    ],
    "correctIndex": 0,
    "explanation": "Berdasarkan metode perbandingan kesebangunan segitiga pada materi SKU Penggalang: Panjang AC = 11 + 1 = 12 unit, DC = 1 unit. Karena AC : DC = 12 : 1, maka AB = 12 DE.",
    "sourceDoc": "PEMBAHASAN SKU PENGGALANG RAMU",
    "difficulty": "Sedang"
  },
  {
    "id": "kompas-8",
    "category": "kompas_menaksir",
    "categoryLabel": "Kompas, Navigasi & Menaksir",
    "posNumber": 4,
    "question": "Jika sebuah tongkat setinggi 160 cm menghasilkan bayangan sepanjang 20 cm, lalu bayangan sebuah tiang listrik adalah 120 cm (1,2 m), berapakah tinggi sebenarnya tiang listrik tersebut?",
    "options": [
      "8,4 meter",
      "7,2 meter",
      "12,0 meter",
      "9,6 meter"
    ],
    "correctIndex": 3,
    "explanation": "Perbandingan bayangan = 20 : 160 = 1 : 8. Panjang bayangan tiang listrik = 120 cm. Maka tinggi tiang listrik = 120 cm x 8 = 960 cm = 9,6 meter.",
    "sourceDoc": "PEMBAHASAN SKU PENGGALANG RAMU",
    "difficulty": "Sedang"
  },
  {
    "id": "kompas-9",
    "category": "kompas_menaksir",
    "categoryLabel": "Kompas, Navigasi & Menaksir",
    "posNumber": 4,
    "question": "Dalam menaksir lebar sungai dengan cara membuat sudut 45 derajat (proyeksi titik A ke titik C berhadapan sudut 45°), maka kesimpulan lebar sungai AB adalah...",
    "options": [
      "AB = BC (karena segitiga sama kaki sudut 45°)",
      "AB = 2 BC",
      "AB = 3 BC",
      "AB = 1/2 BC"
    ],
    "correctIndex": 0,
    "explanation": "Dalam segitiga siku-siku ABC, jika salah satu sudut lancipnya adalah 45 derajat, maka segitiga tersebut adalah segitiga siku-siku sama kaki, sehingga panjang sisi AB = BC.",
    "sourceDoc": "PEMBAHASAN SKU PENGGALANG RAMU",
    "difficulty": "Sedang"
  },
  {
    "id": "kompas-10",
    "category": "kompas_menaksir",
    "categoryLabel": "Kompas, Navigasi & Menaksir",
    "posNumber": 4,
    "question": "Dalam menaksir lebar sungai dengan metode sudut 90° di mana langkah B-C adalah X dan C-D adalah 1/2 X, maka rumus lebar sungai AB terhadap DE adalah...",
    "options": [
      "AB = 4 DE",
      "AB = 1/2 DE",
      "AB = 2 DE",
      "AB = DE"
    ],
    "correctIndex": 2,
    "explanation": "Karena rasio BC : CD = X : (1/2 X) = 2 : 1, maka perbandingan segitiga sebangun menghasilkan lebar sungai AB = 2 DE.",
    "sourceDoc": "PEMBAHASAN SKU PENGGALANG RAMU",
    "difficulty": "Tantangan"
  },
  {
    "id": "kompas-11",
    "category": "kompas_menaksir",
    "categoryLabel": "Kompas, Navigasi & Menaksir",
    "posNumber": 4,
    "question": "Berapa besar derajat sudut mata angin arah Tenggara (SE) pada kompas 16 arah mata angin?",
    "options": [
      "225°",
      "180°",
      "90°",
      "135°"
    ],
    "correctIndex": 3,
    "explanation": "Utara = 0°/360°, Timur Laut = 45°, Timur = 90°, Tenggara = 135°, Selatan = 180°, Barat Daya = 225°, Barat = 270°, Barat Laut = 315°.",
    "sourceDoc": "PANDUAN MATERI PUPK Lomba Galang Tangguh Kemranjen 2026",
    "difficulty": "Sedang"
  },
  {
    "id": "neg-1",
    "category": "kebangsaan",
    "categoryLabel": "Kenegaraan & Sejarah Nasional",
    "posNumber": 5,
    "question": "Undang-Undang Republik Indonesia yang mengatur tentang Bendera, Bahasa, Lambang Negara, serta Lagu Kebangsaan adalah...",
    "options": [
      "UU No. 23 Tahun 2002",
      "UU No. 12 Tahun 2010",
      "UU No. 24 Tahun 2009",
      "UU No. 20 Tahun 2003"
    ],
    "correctIndex": 2,
    "explanation": "Ketentuan penggunaan dan kehormatan Bendera, Bahasa, Lambang Negara, serta Lagu Kebangsaan diatur secara resmi dalam UU RI No. 24 Tahun 2009.",
    "sourceDoc": "PEMBAHASAN SKU PENGGALANG RAMU",
    "difficulty": "Mudah"
  },
  {
    "id": "neg-2",
    "category": "kebangsaan",
    "categoryLabel": "Kenegaraan & Sejarah Nasional",
    "posNumber": 5,
    "question": "Berdasarkan Pasal 4 UU No. 24 Tahun 2009, rasio perbandingan ukuran lebar terhadap panjang Bendera Negara Sang Merah Putih adalah...",
    "options": [
      "2 banding 3 (2:3)",
      "3 banding 5 (3:5)",
      "3 banding 4 (3:4)",
      "1 banding 2 (1:2)"
    ],
    "correctIndex": 0,
    "explanation": "Bendera Negara Sang Merah Putih berbentuk empat persegi panjang dengan ukuran lebar 2/3 (dua pertiga) dari panjang.",
    "sourceDoc": "PEMBAHASAN SKU PENGGALANG RAMU",
    "difficulty": "Mudah"
  },
  {
    "id": "neg-3",
    "category": "kebangsaan",
    "categoryLabel": "Kenegaraan & Sejarah Nasional",
    "posNumber": 5,
    "question": "Berapakah ukuran bendera merah putih standar untuk penggunaan di LAPANGAN ISTANA KEPRESIDENAN menurut UU No. 24 Tahun 2009?",
    "options": [
      "100 cm x 150 cm",
      "120 cm x 180 cm",
      "36 cm x 54 cm",
      "200 cm x 300 cm"
    ],
    "correctIndex": 3,
    "explanation": "Ukuran bendera untuk Lapangan Istana Kepresidenan adalah 200 cm x 300 cm. Sedangkan untuk lapangan umum adalah 120 cm x 180 cm.",
    "sourceDoc": "PEMBAHASAN SKU PENGGALANG RAMU",
    "difficulty": "Sedang"
  },
  {
    "id": "neg-4",
    "category": "kebangsaan",
    "categoryLabel": "Kenegaraan & Sejarah Nasional",
    "posNumber": 5,
    "question": "Berapakah ukuran bendera merah putih untuk penggunaan di mobil dinas Presiden dan Wakil Presiden?",
    "options": [
      "30 cm x 45 cm",
      "10 cm x 15 cm",
      "20 cm x 30 cm",
      "36 cm x 54 cm"
    ],
    "correctIndex": 3,
    "explanation": "Menurut UU No. 24 Tahun 2009 Pasal 4 ayat (3) huruf d, ukuran bendera untuk mobil Presiden dan Wakil Presiden adalah 36 cm x 54 cm. (Untuk mobil pejabat negara adalah 30 cm x 45 cm).",
    "sourceDoc": "PEMBAHASAN SKU PENGGALANG RAMU",
    "difficulty": "Sedang"
  },
  {
    "id": "neg-5",
    "category": "kebangsaan",
    "categoryLabel": "Kenegaraan & Sejarah Nasional",
    "posNumber": 5,
    "question": "Kapan catatan sejarah tertua mencatat pengibaran bendera merah putih di nusantara dalam perang melawan Singosari?",
    "options": [
      "Tahun 1350 pada zaman Raja Hayam Wuruk",
      "Tahun 1928 pada Kongres Pemuda",
      "Tahun 1292 oleh tentara Jayakatwang melawan Kertanegara (tahun 1216 Saka)",
      "Tahun 1613 pada masa Sultan Agung Mataram"
    ],
    "correctIndex": 2,
    "explanation": "Dalam sejarah Indonesia terbukti bendera merah putih dikibarkan pada tahun 1292 oleh tentara Jayakatwang saat berperang melawan Kertanegara dari Singosari, termaktub dalam prasasti berbahasa Jawa Kuno tahun 1216 Saka (1294 M).",
    "sourceDoc": "PEMBAHASAN SKU PENGGALANG RAMU",
    "difficulty": "Sedang"
  },
  {
    "id": "neg-6",
    "category": "kebangsaan",
    "categoryLabel": "Kenegaraan & Sejarah Nasional",
    "posNumber": 5,
    "question": "Dalam kitab Tambo Alam Minangkabau (pusaka abad ke-14 era Maharaja Adityawarman), warna merah, putih, dan hitam masing-masing melambangkan...",
    "options": [
      "Merah: Rakyat biasa; Putih: Bangsawan; Hitam: Petani",
      "Merah: Alim Ulama; Putih: Penghulu Adat; Hitam: Hulubalang",
      "Merah: Keberanian; Putih: Kesucian; Hitam: Kedukaan",
      "Merah: Hulubalang; Putih: Alim Ulama; Hitam: Penghulu Adat"
    ],
    "correctIndex": 3,
    "explanation": "Dalam Tambo Alam Minangkabau: Merah adalah warna Hulubalang (yang menjalankan pemerintahan), Putih adalah warna Agama (Alim Ulama), dan Hitam adalah warna Adat Minangkabau (Penghulu Adat).",
    "sourceDoc": "PEMBAHASAN SKU PENGGALANG RAMU",
    "difficulty": "Sedang"
  },
  {
    "id": "neg-7",
    "category": "kebangsaan",
    "categoryLabel": "Kenegaraan & Sejarah Nasional",
    "posNumber": 5,
    "question": "Di manakah Bendera Pusaka Sang Saka Merah Putih yang dijahit Ibu Fatmawati disimpan dan dipelihara saat ini?",
    "options": [
      "Gedung Arsip Nasional",
      "Monumen Nasional (Monas) Jakarta",
      "Istana Kepresidenan Bogor",
      "Museum Fatahillah"
    ],
    "correctIndex": 1,
    "explanation": "Berdasarkan Pasal 5 ayat (2) UU No. 24 Tahun 2009, Bendera Pusaka Sang Saka Merah Putih disimpan dan dipelihara di Monumen Nasional (Monas) Jakarta.",
    "sourceDoc": "PEMBAHASAN SKU PENGGALANG RAMU",
    "difficulty": "Mudah"
  },
  {
    "id": "neg-8",
    "category": "kebangsaan",
    "categoryLabel": "Kenegaraan & Sejarah Nasional",
    "posNumber": 5,
    "question": "Jika Presiden atau Wakil Presiden Republik Indonesia wafat, pengibaran Bendera Negara setengah tiang dilakukan selama...",
    "options": [
      "7 hari berturut-turut",
      "2 hari berturut-turut",
      "3 hari berturut-turut",
      "1 hari"
    ],
    "correctIndex": 2,
    "explanation": "Apabila Presiden atau Wakil Presiden meninggal dunia, pengibaran Bendera Negara setengah tiang dilakukan selama tiga hari berturut-turut di seluruh wilayah NKRI dan kantor perwakilan di luar negeri (UU 24/2009 Pasal 12 ayat 6).",
    "sourceDoc": "PEMBAHASAN SKU PENGGALANG RAMU",
    "difficulty": "Sedang"
  },
  {
    "id": "neg-9",
    "category": "kebangsaan",
    "categoryLabel": "Kenegaraan & Sejarah Nasional",
    "posNumber": 5,
    "question": "Siapakah pencipta lagu kebangsaan Indonesia Raya, dan kapan lagu tersebut pertama kali diperdengarkan kepada publik?",
    "options": [
      "Ismail Marzuki pada tanggal 17 Agustus 1945",
      "Kusbini pada Kongres Pemuda I tanggal 2 Mei 1926",
      "Cornel Simanjuntak pada Sumpah Pemuda 1928",
      "Wage Rudolf Supratman pada Kongres Pemuda II tanggal 28 Oktober 1928 di Jakarta"
    ],
    "correctIndex": 3,
    "explanation": "Lagu kebangsaan Indonesia Raya diciptakan oleh komponis Wage Rudolf Supratman dan dipersembahkan pertama kali dengan gesekan biola pada Kongres Pemuda II, 28 Oktober 1928 di Gedung Indonesische Club, Jl. Kramat Raya 106 Jakarta.",
    "sourceDoc": "PEMBAHASAN SKU PENGGALANG RAMU",
    "difficulty": "Mudah"
  },
  {
    "id": "neg-10",
    "category": "kebangsaan",
    "categoryLabel": "Kenegaraan & Sejarah Nasional",
    "posNumber": 5,
    "question": "Peraturan Pemerintah yang secara khusus mengatur tentang penggunaan dan tata tertib Lagu Kebangsaan Indonesia Raya adalah...",
    "options": [
      "PP No. 66 Tahun 1951",
      "PP No. 24 Tahun 2009",
      "PP No. 44 Tahun 1958",
      "PP No. 19 Tahun 2005"
    ],
    "correctIndex": 2,
    "explanation": "Tata tertib dan penggunaan lagu kebangsaan Indonesia Raya diatur dalam PP No. 44 Tahun 1958 tentang Lagu Kebangsaan Indonesia Raya.",
    "sourceDoc": "PEMBAHASAN SKU PENGGALANG RAMU",
    "difficulty": "Sedang"
  },
  {
    "id": "neg-11",
    "category": "kebangsaan",
    "categoryLabel": "Kenegaraan & Sejarah Nasional",
    "posNumber": 5,
    "question": "Pada lambang negara Garuda Pancasila, berapakah jumlah bulu pada sayap, ekor, pangkal ekor, dan leher burung Garuda?",
    "options": [
      "Sayap 17, ekor 8, pangkal ekor 45, leher 19",
      "Sayap 45, ekor 17, pangkal ekor 8, leher 19",
      "Sayap 8, ekor 17, pangkal ekor 19, leher 45",
      "Sayap 17, ekor 8, pangkal ekor 19, leher 45"
    ],
    "correctIndex": 3,
    "explanation": "Jumlah helai bulu burung Garuda melambangkan tanggal kemerdekaan 17 Agustus 1945: 17 pada masing-masing sayap, 8 pada ekor, 19 pada pangkal ekor (di bawah perisai), dan 45 pada leher.",
    "sourceDoc": "PEMBAHASAN SKU PENGGALANG RAMU",
    "difficulty": "Mudah"
  },
  {
    "id": "neg-12",
    "category": "kebangsaan",
    "categoryLabel": "Kenegaraan & Sejarah Nasional",
    "posNumber": 5,
    "question": "Pada rantai emas sila kedua di perisai Garuda Pancasila, terdapat mata rantai berbentuk lingkaran dan persegi. Apakah maknanya?",
    "options": [
      "Lingkaran berjumlah 9 melambangkan wanita; persegi berjumlah 8 melambangkan pria; tersambung 17 mata rantai melambangkan persatuan generasi turun temurun",
      "Lingkaran melambangkan bumi; persegi melambangkan langit",
      "Lingkaran melambangkan suku Jawa; persegi melambangkan luar Jawa",
      "Lingkaran berjumlah 8 melambangkan pria; persegi berjumlah 9 melambangkan wanita"
    ],
    "correctIndex": 0,
    "explanation": "Mata rantai bulat berjumlah 9 melambangkan wanita, sedangkan mata rantai persegi berjumlah 8 melambangkan laki-laki. Jumlah 17 mata rantai yang bersambung tanpa putus melambangkan hubungan timbal balik antar sesama manusia secara turun-temurun.",
    "sourceDoc": "PEMBAHASAN SKU PENGGALANG RAMU",
    "difficulty": "Tantangan"
  },
  {
    "id": "sku-1",
    "category": "sku_ramu",
    "categoryLabel": "Materi SKU Penggalang Ramu",
    "posNumber": 5,
    "question": "Sebutan pemimpin umat beragama pada agama Buddha yang diakui di Indonesia antara lain adalah...",
    "options": [
      "Bhiksu (laki-laki) / Bhiksuni (perempuan), Pandita, dan Bante",
      "Pedanda dan Sulinggih",
      "Jiao Sheng dan Wen Shi",
      "Romo dan Uskup"
    ],
    "correctIndex": 0,
    "explanation": "Pemimpin agama Buddha disebut Bhiksu/Bhiksuni, Pandita, dan Bante. (Pedanda/Sulinggih untuk Hindu; Jiao Sheng/Wen Shi untuk Kong Hu Cu).",
    "sourceDoc": "PEMBAHASAN SKU PENGGALANG RAMU",
    "difficulty": "Sedang"
  },
  {
    "id": "sku-2",
    "category": "sku_ramu",
    "categoryLabel": "Materi SKU Penggalang Ramu",
    "posNumber": 5,
    "question": "Sebutan pemimpin umat dalam agama Kong Hu Cu yang bertugas sebagai pendeta agama adalah...",
    "options": [
      "Xue Shi",
      "Sulinggih",
      "Jiao Sheng",
      "Zhang Lao"
    ],
    "correctIndex": 0,
    "explanation": "Tingkatan pemimpin Kong Hu Cu: Jiao Sheng (Penebar Agama), Wen Shi (Guru Agama), Xue Shi (Pendeta), dan Zhang Lao (Tokoh Sesepuh).",
    "sourceDoc": "PEMBAHASAN SKU PENGGALANG RAMU",
    "difficulty": "Tantangan"
  },
  {
    "id": "sku-3",
    "category": "sku_ramu",
    "categoryLabel": "Materi SKU Penggalang Ramu",
    "posNumber": 5,
    "question": "Peringatan Maulid Nabi Muhammad SAW jatuh pada tanggal 12 Rabiul Awal. Menurut sejarah, perayaan ini pertama kali diperkenalkan oleh...",
    "options": [
      "Khalifah Harun Al-Rasyid dari Baghdad",
      "Abu Said al-Qakburi (Gubernur Irbil) pada masa pemerintahan Sultan Salahuddin Al-Ayyubi",
      "Ibnu Sina di Persia",
      "Sultan Agung Hanyokrokusumo di Mataram"
    ],
    "correctIndex": 1,
    "explanation": "Sejarah perayaan Maulid Nabi pertama kali diperkenalkan oleh Abu Said al-Qakburi (gubernur Irbil di Irak) pada masa Sultan Salahuddin Al-Ayyubi untuk membakar semangat juang kaum muslimin dalam Perang Salib.",
    "sourceDoc": "PEMBAHASAN SKU PENGGALANG RAMU",
    "difficulty": "Sedang"
  },
  {
    "id": "sku-4",
    "category": "sku_ramu",
    "categoryLabel": "Materi SKU Penggalang Ramu",
    "posNumber": 5,
    "question": "Berikut ini adalah rukun utama dalam pelaksanaan Mandi Wajib dalam ajaran Islam, KECUALI...",
    "options": [
      "Menghilangkan najis yang ada di badan",
      "Mewarnai rambut dengan daun pacar",
      "Membaca niat mandi wajib untuk mengangkat hadas besar",
      "Menyiram dan meratakan air ke seluruh tubuh dari ujung kepala hingga ujung kaki"
    ],
    "correctIndex": 1,
    "explanation": "Rukun mandi wajib hanya ada 3 hal utama: 1. Niat; 2. Menghilangkan najis dari badan (jika ada); 3. Menyiram dan meratakan air ke seluruh tubuh mulai dari kepala hingga ujung kaki.",
    "sourceDoc": "PEMBAHASAN SKU PENGGALANG RAMU",
    "difficulty": "Mudah"
  },
  {
    "id": "sku-5",
    "category": "sku_ramu",
    "categoryLabel": "Materi SKU Penggalang Ramu",
    "posNumber": 5,
    "question": "Menurut Daniel Goleman (2002), kata \"emosi\" berasal dari bahasa Latin \"emovere\" yang berarti...",
    "options": [
      "Menguasai diri",
      "Merasa tenang",
      "Berpikir mendalam",
      "Bergerak menjauh / dorongan untuk bertindak"
    ],
    "correctIndex": 3,
    "explanation": "Kata emosi berasal dari bahasa Latin \"emovere\" (e- = luar, movere = bergerak) yang berarti bergerak menjauh, menyiratkan bahwa emosi pada dasarnya adalah dorongan untuk bertindak.",
    "sourceDoc": "PEMBAHASAN SKU PENGGALANG RAMU",
    "difficulty": "Sedang"
  },
  {
    "id": "sku-6",
    "category": "sku_ramu",
    "categoryLabel": "Materi SKU Penggalang Ramu",
    "posNumber": 5,
    "question": "Secara biologis, pusat kendali semua emosi manusia berasal dari bagian otak yang berukuran sebesar kacang walnut, yaitu...",
    "options": [
      "Korteks Serebri",
      "Medula Oblongata",
      "Sistem Limbik",
      "Serebelum"
    ],
    "correctIndex": 2,
    "explanation": "Semua emosi berasal dari sistem limbik otak yang berukuran kira-kira sebesar sebuah kacang walnut dan terletak di batang otak.",
    "sourceDoc": "PEMBAHASAN SKU PENGGALANG RAMU",
    "difficulty": "Sedang"
  },
  {
    "id": "sku-7",
    "category": "sku_ramu",
    "categoryLabel": "Materi SKU Penggalang Ramu",
    "posNumber": 5,
    "question": "Manfaat penghijauan di mana akar pohon mengikat tanah dengan kokoh sehingga mampu MENCEGAH EROSI dan tanah longsor disebut...",
    "options": [
      "Manfaat Klimatologis",
      "Manfaat Orologis",
      "Manfaat Edaphis",
      "Manfaat Hidrologis"
    ],
    "correctIndex": 1,
    "explanation": "Akar pohon dengan tanah merupakan satu kesatuan yang kuat sehingga mampu mencegah erosi atau pengikisan tanah. Inilah yang disebut manfaat Orologis.",
    "sourceDoc": "PEMBAHASAN SKU PENGGALANG RAMU",
    "difficulty": "Sedang"
  },
  {
    "id": "sku-8",
    "category": "sku_ramu",
    "categoryLabel": "Materi SKU Penggalang Ramu",
    "posNumber": 5,
    "question": "Manfaat penghijauan yang berkaitan dengan penyediaan TEMPAT HIDUP ALAMI BAGI SATWA dan binatang liar disebut...",
    "options": [
      "Manfaat Hygienis",
      "Manfaat Edaphis",
      "Manfaat Estetis",
      "Manfaat Protektif"
    ],
    "correctIndex": 1,
    "explanation": "Manfaat Edaphis adalah manfaat dalam kaitannya dengan tempat hidup satwa/binatang. Satwa dapat hidup dengan tenang dalam lingkungan berpohon lebat.",
    "sourceDoc": "PEMBAHASAN SKU PENGGALANG RAMU",
    "difficulty": "Sedang"
  },
  {
    "id": "sku-9",
    "category": "sku_ramu",
    "categoryLabel": "Materi SKU Penggalang Ramu",
    "posNumber": 5,
    "question": "Berapakah ukuran standar lubang tanam pohon penghijauan menurut panduan teknik penanaman pohon SKU?",
    "options": [
      "0.50 m x 0.50 m x 0.50 m",
      "0.30 m x 0.30 m x 0.30 m",
      "1.50 m x 1.50 m x 1.50 m",
      "0.75 m (tinggi) x 0.90 m (lebar) x 0.90 m (panjang)"
    ],
    "correctIndex": 3,
    "explanation": "Ukuran standar lubang tanam pohon adalah 0.75 m (tinggi/kedalaman) x 0.90 m (lebar) x 0.90 m (panjang), dipersiapkan sedikitnya 1 minggu sebelum penanaman.",
    "sourceDoc": "PEMBAHASAN SKU PENGGALANG RAMU",
    "difficulty": "Sedang"
  },
  {
    "id": "sku-10",
    "category": "sku_ramu",
    "categoryLabel": "Materi SKU Penggalang Ramu",
    "posNumber": 5,
    "question": "Mengapa bibit generatif (berasal dari biji) lebih diutamakan untuk pohon penghijauan dibanding bibit vegetatif?",
    "options": [
      "Karena batangnya lentur dan mudah dipangkas",
      "Karena lebih cepat berbuah manis",
      "Karena daunnya berwarna lebih hijau mengkilap",
      "Karena mempunyai akar tunggang yang kuat, dalam, dan dapat hidup lebih lama"
    ],
    "correctIndex": 3,
    "explanation": "Bibit generatif (dari biji) mempunyai akar tunggang sehingga kokoh dan hidup lebih lama, sedangkan bibit vegetatif perakarannya dangkal sehingga mudah tumbang dan merusak trotoar.",
    "sourceDoc": "PEMBAHASAN SKU PENGGALANG RAMU",
    "difficulty": "Sedang"
  },
  {
    "id": "sku-11",
    "category": "sku_ramu",
    "categoryLabel": "Materi SKU Penggalang Ramu",
    "posNumber": 5,
    "question": "Dalam pemilahan jenis sampah cair, air limbah buangan yang berasal langsung dari toilet dan mengandung patogen berbahaya disebut...",
    "options": [
      "Limbah organik",
      "Limbah abu-abu (greywater)",
      "Limbah hitam (blackwater)",
      "Limbah industri"
    ],
    "correctIndex": 2,
    "explanation": "Limbah hitam adalah sampah cair yang dihasilkan dari toilet yang mengandung patogen berbahaya.",
    "sourceDoc": "PEMBAHASAN SKU PENGGALANG RAMU",
    "difficulty": "Mudah"
  },
  {
    "id": "sku-12",
    "category": "sku_ramu",
    "categoryLabel": "Materi SKU Penggalang Ramu",
    "posNumber": 5,
    "question": "Strategi Extended Producer Responsibility (EPR) dalam konsep pengelolaan sampah modern memiliki arti...",
    "options": [
      "Pemberian subsidi pupuk kompos bagi petani lokal",
      "Masyarakat wajib membayar denda bila tidak membuang sampah pada tempatnya",
      "Produsen/perusahaan bertanggung jawab atas siklus hidup produknya hingga pasca-konsumsi kemasannya di pasar",
      "Pemerintah menanggung seluruh biaya sampah masyarakat"
    ],
    "correctIndex": 2,
    "explanation": "EPR (Perpanjangan Tanggung Jawab Penghasil Sampah) adalah strategi yang mewajibkan perusahaan/produsen bertanggung jawab atas pengelolaan produk dan kemasannya sepanjang siklus hidup, termasuk fase pembuangan.",
    "sourceDoc": "PEMBAHASAN SKU PENGGALANG RAMU",
    "difficulty": "Tantangan"
  },
  {
    "id": "sku-13",
    "category": "sku_ramu",
    "categoryLabel": "Materi SKU Penggalang Ramu",
    "posNumber": 5,
    "question": "Pada teknik penjernihan air menggunakan drum saringan sederhana, pada ketinggian berapakah kran pembuangan air bersih dipasang dari dasar drum?",
    "options": [
      "15 cm",
      "5 cm",
      "1 cm",
      "25 cm"
    ],
    "correctIndex": 1,
    "explanation": "Kran pengeluaran air bersih dipasang pada ketinggian 5 cm dari dasar bak/drum agar endapan kotoran paling bawah tidak ikut teralirkan keluar.",
    "sourceDoc": "PEMBAHASAN SKU PENGGALANG RAMU",
    "difficulty": "Sedang"
  },
  {
    "id": "sku-14",
    "category": "sku_ramu",
    "categoryLabel": "Materi SKU Penggalang Ramu",
    "posNumber": 5,
    "question": "Bahan alami penyaring air yang berfungsi menyerap bau, gas, racun, dan partikel halus dalam drum penyaring adalah...",
    "options": [
      "Pasir beton",
      "Kerikil kasar",
      "Arang tempurung kelapa",
      "Batu kali"
    ],
    "correctIndex": 2,
    "explanation": "Arang tempurung kelapa berfungsi sebagai karbon aktif alami untuk menyerap bau tak sedap, zat pewarna, dan zat kimia/racun dalam air.",
    "sourceDoc": "PEMBAHASAN SKU PENGGALANG RAMU",
    "difficulty": "Mudah"
  },
  {
    "id": "sku-15",
    "category": "sku_ramu",
    "categoryLabel": "Materi SKU Penggalang Ramu",
    "posNumber": 5,
    "question": "Undang-Undang Republik Indonesia yang menjadi landasan hukum utama Perlindungan Hak Anak adalah...",
    "options": [
      "UU No. 12 Tahun 2010",
      "UU No. 23 Tahun 2002",
      "UU No. 14 Tahun 2005",
      "UU No. 24 Tahun 2009"
    ],
    "correctIndex": 1,
    "explanation": "Perlindungan Hak Anak di Indonesia dilandaskan pada Undang-Undang Nomor 23 Tahun 2002 tentang Perlindungan Anak.",
    "sourceDoc": "PEMBAHASAN SKU PENGGALANG RAMU",
    "difficulty": "Mudah"
  },
  {
    "id": "sku-16",
    "category": "sku_ramu",
    "categoryLabel": "Materi SKU Penggalang Ramu",
    "posNumber": 5,
    "question": "Masa remaja (usia 10–19 tahun) dibagi menjadi 3 tahapan. Rentang usia untuk Masa Remaja Tengah (Middle Adolescence) adalah...",
    "options": [
      "16–19 tahun",
      "10–12 tahun",
      "8–10 tahun",
      "13–15 tahun"
    ],
    "correctIndex": 3,
    "explanation": "Tahapan remaja menurut materi SKU: 1. Remaja awal (10–12 tahun); 2. Remaja tengah (13–15 tahun); 3. Remaja akhir (16–19 tahun).",
    "sourceDoc": "PEMBAHASAN SKU PENGGALANG RAMU",
    "difficulty": "Sedang"
  },
  {
    "id": "sku-17",
    "category": "sku_ramu",
    "categoryLabel": "Materi SKU Penggalang Ramu",
    "posNumber": 5,
    "question": "Tanda perubahan seks primer pada remaja laki-laki pada masa pubertas ditandai dengan...",
    "options": [
      "Suara bertambah berat",
      "Tumbuhnya jakun",
      "Dada bertambah bidang",
      "Mimpi basah (mengeluarkan sperma)"
    ],
    "correctIndex": 3,
    "explanation": "Tanda seks primer berhubungan langsung dengan fungsi reproduksi, yaitu mimpi basah pada laki-laki dan menstruasi (menarche) pada perempuan. Tumbuh jakun dan suara membesar merupakan tanda seks sekunder.",
    "sourceDoc": "PEMBAHASAN SKU PENGGALANG RAMU",
    "difficulty": "Mudah"
  },
  {
    "id": "lambang-1",
    "category": "fundamental",
    "categoryLabel": "Tanda Pengenal, Salam & Motto",
    "posNumber": 1,
    "question": "Gerakan Pramuka mengenal 3 macam salam. Manakah yang termasuk tiga macam salam Pramuka tersebut?",
    "options": [
      "Salam Siaga, Salam Penggalang, Salam Penegak",
      "Salam Pataka, Salam Panji, Salam Pusaka",
      "Salam Biasa, Salam Hormat, Salam Janji",
      "Salam Upacara, Salam Baris, Salam Jalan"
    ],
    "correctIndex": 2,
    "explanation": "Tiga macam salam Pramuka adalah: 1. Salam Biasa; 2. Salam Hormat; 3. Salam Janji.",
    "sourceDoc": "PEMBAHASAN SKU PENGGALANG RAMU",
    "difficulty": "Mudah"
  },
  {
    "id": "lambang-2",
    "category": "fundamental",
    "categoryLabel": "Tanda Pengenal, Salam & Motto",
    "posNumber": 1,
    "question": "Kapan Salam Janji wajib diberikan oleh seluruh anggota Gerakan Pramuka yang hadir?",
    "options": [
      "Saat bendera regu dipasang di tenda",
      "Saat menerima piala perlombaan",
      "Ketika mendengar pengucapan janji Trisatya diucapkan dalam suatu upacara pelantikan",
      "Setiap bertemu Pembina di jalan"
    ],
    "correctIndex": 2,
    "explanation": "Salam Janji dipergunakan seorang Pramuka dalam suatu upacara mendengarkan janji Trisatya diucapkan (\"Demi kehormatanku aku berjanji...\"). Semua Pramuka wajib memberi salam janji secara otomatis.",
    "sourceDoc": "PEMBAHASAN SKU PENGGALANG RAMU",
    "difficulty": "Sedang"
  },
  {
    "id": "lambang-3",
    "category": "fundamental",
    "categoryLabel": "Tanda Pengenal, Salam & Motto",
    "posNumber": 1,
    "question": "Motto Gerakan Pramuka yang menjadi semboyan tetap dan tunggal adalah...",
    "options": [
      "Ikhlas Bakti Bina Bangsa Berbudi Bawa Laksana",
      "Sekali di Udara Tetap di Udara",
      "Bhinneka Tunggal Ika",
      "Satyaku Kudarmakan Darmaku Kubaktikan"
    ],
    "correctIndex": 3,
    "explanation": "Motto Gerakan Pramuka adalah \"SATYAKU KUDARMAKAN DARMAKU KUBAKTIKAN\". (Sedangkan \"Ikhlas Bakti Bina Bangsa Berbudi Bawa Laksana\" adalah motto Pembina Pramuka).",
    "sourceDoc": "PEMBAHASAN SKU PENGGALANG RAMU",
    "difficulty": "Mudah"
  },
  {
    "id": "lambang-4",
    "category": "fundamental",
    "categoryLabel": "Tanda Pengenal, Salam & Motto",
    "posNumber": 1,
    "question": "Siapakah tokoh pencipta Lambang Silhouette Tunas Kelapa Gerakan Pramuka?",
    "options": [
      "KH Agus Salim",
      "Sunardjo Atmodipuro (Soenardjo Atmodipoerwo)",
      "Sri Sultan Hamengku Buwono IX",
      "Kyai Haji Ahmad Dahlan"
    ],
    "correctIndex": 1,
    "explanation": "Lambang Gerakan Pramuka diciptakan oleh RM Soenardjo Atmodipoerwo (almarhum), seorang Pembina Pramuka yang aktif bekerja sebagai Pegawai Tinggi Departemen Pertanian.",
    "sourceDoc": "PEMBAHASAN SKU PENGGALANG RAMU",
    "difficulty": "Mudah"
  },
  {
    "id": "lambang-5",
    "category": "fundamental",
    "categoryLabel": "Tanda Pengenal, Salam & Motto",
    "posNumber": 1,
    "question": "Sejak tanggal berapakah lambang Gerakan Pramuka resmi digunakan pada Panji-Panji Gerakan Pramuka yang dianugerahkan oleh Presiden RI Ir. Soekarno?",
    "options": [
      "10 November 1961",
      "14 Agustus 1961",
      "28 Oktober 1961",
      "20 Mei 1961"
    ],
    "correctIndex": 1,
    "explanation": "Lambang Tunas Kelapa digunakan sejak tanggal 14 Agustus 1961 pada Panji-Panji Gerakan Pramuka yang dianugerahkan kepada Gerakan Pramuka oleh Presiden Republik Indonesia, yang kemudian diperingati sebagai Hari Pramuka.",
    "sourceDoc": "PEMBAHASAN SKU PENGGALANG RAMU",
    "difficulty": "Mudah"
  },
  {
    "id": "lambang-6",
    "category": "fundamental",
    "categoryLabel": "Tanda Pengenal, Salam & Motto",
    "posNumber": 1,
    "question": "Mengapa buah kelapa dinamakan \"Tunas\" dan diibaratkan sebagai \"Cikal Bakal\" bangsa Indonesia?",
    "options": [
      "Karena buah kelapa bentuknya bulat sempurna",
      "Karena mengkiaskan tiap Pramuka merupakan inti bagi kelangsungan hidup Bangsa Indonesia (generasi penerus)",
      "Karena kelapa merupakan tanaman pangan utama",
      "Karena kelapa hanya dapat tumbuh di daerah pantai tropis"
    ],
    "correctIndex": 1,
    "explanation": "Buah kelapa dalam keadaan tumbuh dinamakan TUNAS, istilah \"cikal bakal\" mengkiaskan bahwa tiap Pramuka merupakan inti kelangsungan hidup Bangsa Indonesia dan menurunkan generasi baru.",
    "sourceDoc": "PEMBAHASAN SKU PENGGALANG RAMU",
    "difficulty": "Sedang"
  },
  {
    "id": "lambang-7",
    "category": "fundamental",
    "categoryLabel": "Tanda Pengenal, Salam & Motto",
    "posNumber": 1,
    "question": "Pohon kelapa dapat tumbuh menjulang lurus ke atas. Hal ini dalam kiasan lambang Pramuka melambangkan...",
    "options": [
      "Tiap Pramuka mempunyai cita-cita yang tinggi, lurus, mulia, jujur, serta tidak mudah diombang-ambingkan",
      "Pramuka mudah beradaptasi di segala cuaca",
      "Pramuka mempunyai sifat sombong dan membanggakan diri",
      "Pramuka harus suka memanjat pohon yang tinggi"
    ],
    "correctIndex": 0,
    "explanation": "Kelapa tumbuh lurus ke atas melambangkan bahwa tiap Pramuka mempunyai cita-cita yang tinggi dan lurus, yakni mulia dan jujur serta tegak tidak mudah diombang-ambingkan oleh sesuatu.",
    "sourceDoc": "PEMBAHASAN SKU PENGGALANG RAMU",
    "difficulty": "Sedang"
  },
  {
    "id": "lambang-8",
    "category": "fundamental",
    "categoryLabel": "Tanda Pengenal, Salam & Motto",
    "posNumber": 1,
    "question": "Tanda Pengenal Gerakan Pramuka dikelompokkan ke dalam 5 kelompok, yaitu Tanda Umum, Tanda Satuan, Tanda Jabatan, Tanda Kecakapan, dan...",
    "options": [
      "Tanda Kehormatan",
      "Tanda Khusus",
      "Tanda Wilayah",
      "Tanda Lencana"
    ],
    "correctIndex": 0,
    "explanation": "5 kelompok Tanda Pengenal Gerakan Pramuka: 1. Tanda Umum; 2. Tanda Satuan; 3. Tanda Jabatan; 4. Tanda Kecakapan; 5. Tanda Kehormatan.",
    "sourceDoc": "PEMBAHASAN SKU PENGGALANG RAMU",
    "difficulty": "Mudah"
  },
  {
    "id": "lambang-9",
    "category": "fundamental",
    "categoryLabel": "Tanda Pengenal, Salam & Motto",
    "posNumber": 1,
    "question": "Tanda Kecakapan Khusus (TKK) bagi golongan Pramuka Penggalang memiliki tingkatan yaitu...",
    "options": [
      "Hijau, Merah, dan Kuning",
      "Purwa (lingkaran), Madya (kotak/persegi), dan Utama (segi lima)",
      "Mula, Bantu, dan Tata",
      "Bantara dan Laksana"
    ],
    "correctIndex": 1,
    "explanation": "TKK Penggalang, Penegak, dan Pandega memiliki 3 tingkatan: Purwa (berbentuk lingkaran), Madya (berbentuk bujur sangkar/persegi), dan Utama (berbentuk segi lima beraturan). Untuk Siaga TKK tidak bertingkat (hanya segitiga).",
    "sourceDoc": "PEMBAHASAN SKU PENGGALANG RAMU",
    "difficulty": "Sedang"
  },
  {
    "id": "kem-1",
    "category": "kemranjen_2026",
    "categoryLabel": "PUPK Kemranjen, Banyumas & Isu 2026",
    "posNumber": 6,
    "question": "Kecamatan Kemranjen berada di jalur vital selatan Kabupaten Banyumas yang menghubungkan jalur...",
    "options": [
      "Banyumas–Kroya dan Banyumas–Buntu",
      "Cilacap–Sidareja dan Majenang–Wangon",
      "Purwokerto–Ajibarang dan Wangon–Lumbir",
      "Purbalingga–Bobotsari dan Sokaraja–Kalibagor"
    ],
    "correctIndex": 0,
    "explanation": "Kecamatan Kemranjen berada di jalur vital selatan Kabupaten Banyumas yang menghubungkan jalur strategis Banyumas–Kroya dan Banyumas–Buntu.",
    "sourceDoc": "PANDUAN MATERI PUPK Lomba Galang Tangguh Kemranjen 2026",
    "difficulty": "Sedang"
  },
  {
    "id": "kem-2",
    "category": "kemranjen_2026",
    "categoryLabel": "PUPK Kemranjen, Banyumas & Isu 2026",
    "posNumber": 6,
    "question": "Di manakah alamat Pusat Sanggar Bakti Kwartir Ranting (Kwarran) Kemranjen berada?",
    "options": [
      "Jl. Jenderal Soedirman No. 1, Purwokerto",
      "Jl. Raya Wijahan No. 22 / Kompleks Kantor Kecamatan Kemranjen, Banyumas",
      "Jl. Gatot Subroto No. 45, Buntu",
      "Kompleks Alun-Alun Banyumas"
    ],
    "correctIndex": 1,
    "explanation": "Pusat Kwarran Kemranjen beralamat di Sanggar Bakti Kwarran Kemranjen, Jl. Raya Wijahan No. 22 / Kompleks Kantor Kecamatan Kemranjen, Banyumas.",
    "sourceDoc": "PANDUAN MATERI PUPK Lomba Galang Tangguh Kemranjen 2026",
    "difficulty": "Mudah"
  },
  {
    "id": "kem-3",
    "category": "kemranjen_2026",
    "categoryLabel": "PUPK Kemranjen, Banyumas & Isu 2026",
    "posNumber": 6,
    "question": "Siapakah nama Ketua Kwartir Ranting (Ka Kwarran) Kemranjen saat ini yang memimpin pembinaan gugus depan?",
    "options": [
      "Kak Maskuri",
      "Kak Agus Nur Hadie",
      "Kak Achmad Husein",
      "Kak Suprihatin"
    ],
    "correctIndex": 0,
    "explanation": "Ketua Kwarran Kemranjen adalah Kak Maskuri, yang memimpin konsolidasi Rakeran dan pembinaan gugus depan se-Kecamatan Kemranjen.",
    "sourceDoc": "PANDUAN MATERI PUPK Lomba Galang Tangguh Kemranjen 2026",
    "difficulty": "Mudah"
  },
  {
    "id": "kem-4",
    "category": "kemranjen_2026",
    "categoryLabel": "PUPK Kemranjen, Banyumas & Isu 2026",
    "posNumber": 6,
    "question": "Siapakah nama Ketua Majelis Pembimbing Ranting (Ka Mabiran) Gerakan Pramuka Kecamatan Kemranjen?",
    "options": [
      "Bapak Hanung Cahyo Saputro",
      "Ibu Erna Sulistyawati",
      "Ibu Ika Suprihatin, S.STP (Camat Kemranjen)",
      "Bapak Sadewo Tri Lastiono"
    ],
    "correctIndex": 2,
    "explanation": "Ketua Majelis Pembimbing Ranting (Ka Mabiran) Kemranjen dijabat oleh Camat Kemranjen, yaitu Ibu Ika Suprihatin, S.STP.",
    "sourceDoc": "PANDUAN MATERI PUPK Lomba Galang Tangguh Kemranjen 2026",
    "difficulty": "Mudah"
  },
  {
    "id": "kem-5",
    "category": "kemranjen_2026",
    "categoryLabel": "PUPK Kemranjen, Banyumas & Isu 2026",
    "posNumber": 6,
    "question": "Apa reputasi dan prestasi membanggakan yang secara konsisten dipertahankan oleh Kwarcab Banyumas di tingkat Kwarda Jawa Tengah?",
    "options": [
      "Juara Umum Pesta Siaga Se-Indonesia",
      "Penyelenggara Jambore Terbesar se-Asia Tenggara",
      "Sebagai Kwarcab Tergiat di tingkat Kwarda Jawa Tengah",
      "Kwartir dengan jumlah anggota terbanyak di Pulau Jawa"
    ],
    "correctIndex": 2,
    "explanation": "Kwarcab Banyumas secara konsisten mempertahankan reputasi sebagai Kwarcab Tergiat di tingkat Kwarda Jawa Tengah berkat tata kelola pembinaan Pramuka Garuda yang solid dan giat prestasi berkelanjutan.",
    "sourceDoc": "PANDUAN MATERI PUPK Lomba Galang Tangguh Kemranjen 2026",
    "difficulty": "Mudah"
  },
  {
    "id": "kem-6",
    "category": "kemranjen_2026",
    "categoryLabel": "PUPK Kemranjen, Banyumas & Isu 2026",
    "posNumber": 6,
    "question": "Peringatan Hari Pramuka Nasional ke-65 pada tanggal 14 Agustus 2026 mengusung tema resmi...",
    "options": [
      "\"Kolaborasi Digital Pramuka Masa Depan\"",
      "\"Pramuka Berjiwa Pancasila Menjaga NKRI\"",
      "\"Satu Pramuka untuk Satu Indonesia\"",
      "\"Memantapkan Langkah Organisasi Mendukung Swasembada Pangan Menuju Indonesia Emas 2045\""
    ],
    "correctIndex": 3,
    "explanation": "Kwarnas Gerakan Pramuka mengusung tema resmi Hari Pramuka ke-65 (14 Agustus 2026): \"Memantapkan Langkah Organisasi Mendukung Swasembada Pangan Menuju Indonesia Emas 2045\".",
    "sourceDoc": "PANDUAN MATERI PUPK Lomba Galang Tangguh Kemranjen 2026",
    "difficulty": "Sedang"
  },
  {
    "id": "kem-7",
    "category": "kemranjen_2026",
    "categoryLabel": "PUPK Kemranjen, Banyumas & Isu 2026",
    "posNumber": 6,
    "question": "Agenda akbar Jambore Nasional (Jamnas) XII 2026 diselenggarakan bertempat di...",
    "options": [
      "Bumi Perkemahan Pramuka Cibubur, Jakarta Timur",
      "Bumi Perkemahan Jatinangor, Sumedang",
      "Bumi Perkemahan Kendalisada, Kalibagor Banyumas",
      "Bumi Perkemahan Candi Prambanan, Sleman"
    ],
    "correctIndex": 0,
    "explanation": "Pelaksanaan Jambore Nasional (Jamnas) XII tahun 2026 diselenggarakan di Bumi Perkemahan Pramuka Cibubur, Jakarta Timur, dengan fokus kemandirian pangan, ketahanan lingkungan, dan literasi digital.",
    "sourceDoc": "PANDUAN MATERI PUPK Lomba Galang Tangguh Kemranjen 2026",
    "difficulty": "Mudah"
  },
  {
    "id": "kem-8",
    "category": "kemranjen_2026",
    "categoryLabel": "PUPK Kemranjen, Banyumas & Isu 2026",
    "posNumber": 6,
    "question": "Pada tanggal 17 Agustus 2026, bangsa Indonesia memperingati Hari Ulang Tahun (HUT) Kemerdekaan RI yang ke...",
    "options": [
      "Ke-79 RI",
      "Ke-80 RI",
      "Ke-82 RI",
      "Ke-81 RI"
    ],
    "correctIndex": 3,
    "explanation": "Tahun 2026 adalah peringatan HUT Kemerdekaan RI yang ke-81 (1945–2026).",
    "sourceDoc": "PANDUAN MATERI PUPK Lomba Galang Tangguh Kemranjen 2026",
    "difficulty": "Mudah"
  },
  {
    "id": "kem-9",
    "category": "kemranjen_2026",
    "categoryLabel": "PUPK Kemranjen, Banyumas & Isu 2026",
    "posNumber": 6,
    "question": "Peringatan ke-98 Hari Sumpah Pemuda pada 28 Oktober 2026 menegaskan pilar kepemimpinan pemuda yang tangguh, berbudi pekerti luhur, dan...",
    "options": [
      "Mengutamakan kompetisi individu",
      "Mengurangi interaksi di dunia nyata",
      "Adaptif terhadap kemajuan kecerdasan buatan (Artificial Intelligence)",
      "Menolak perkembangan teknologi luar negeri"
    ],
    "correctIndex": 2,
    "explanation": "Peringatan ke-98 Sumpah Pemuda (28 Oktober 2026) menegaskan pilar kepemimpinan pemuda yang tangguh, adaptif terhadap kemajuan kecerdasan buatan, dan berkarakter budi pekerti luhur.",
    "sourceDoc": "PANDUAN MATERI PUPK Lomba Galang Tangguh Kemranjen 2026",
    "difficulty": "Sedang"
  },
  {
    "id": "kem-10",
    "category": "kemranjen_2026",
    "categoryLabel": "PUPK Kemranjen, Banyumas & Isu 2026",
    "posNumber": 6,
    "question": "Inisiatif kepanduan dunia (WOSM) dalam mendukung Sustainable Development Goals (SDGs) yang difokuskan pada penggalang dunia adalah...",
    "options": [
      "Eksplorasi roket luar angkasa",
      "Kompetisi e-sports internasional",
      "Scouts for SDGs: pengurangan emisi karbon dan penanganan sampah plastik di perairan",
      "Pembangunan pabrik energi nuklir"
    ],
    "correctIndex": 2,
    "explanation": "WOSM menggerakkan regu penggalang sedunia dalam inisiatif \"Scouts for SDGs\", khususnya aksi nyata pengurangan emisi karbon dan penanganan sampah plastik di perairan.",
    "sourceDoc": "PANDUAN MATERI PUPK Lomba Galang Tangguh Kemranjen 2026",
    "difficulty": "Sedang"
  },
  {
    "id": "kem-11",
    "category": "kemranjen_2026",
    "categoryLabel": "PUPK Kemranjen, Banyumas & Isu 2026",
    "posNumber": 6,
    "question": "Salah satu tips taktis menghadapi pos ujian PUPK Galang Tangguh dalam pembagian tugas anggota regu adalah...",
    "options": [
      "Menentukan spesialis sandi & morse, penguasa tokoh/sejarah kepramukaan, dan pembaca berita/pengetahuan umum",
      "Semua anggota regu mengerjakan soal yang sama dari nomor 1 sampai habis",
      "Menghafalkan soal tanpa perlu memahami rumus",
      "Hanya Pinru yang boleh menulis dan menjawab lembar jawaban"
    ],
    "correctIndex": 0,
    "explanation": "Tips menghadapi Pos Ujian PUPK: Bagi tugas regu secara efektif (1 orang spesialis sandi & morse, 1 orang penguasa nama tokoh/sejarah, 1 orang pembaca berita/umum).",
    "sourceDoc": "PANDUAN MATERI PUPK Lomba Galang Tangguh Kemranjen 2026",
    "difficulty": "Mudah"
  },
  {
    "id": "kem-12",
    "category": "kemranjen_2026",
    "categoryLabel": "PUPK Kemranjen, Banyumas & Isu 2026",
    "posNumber": 6,
    "question": "Dalam penulisan jawaban di lembar pos PUPK Galang Tangguh, mengapa kerapian dan ejaan baku sangat ditekankan?",
    "options": [
      "Agar kertas ujian bisa dipakai kembali tahun depan",
      "Soal teka-teki sandi dan nama pejabat lokal menuntut ketelitian huruf kapital dan ejaan baku agar tidak ambigu/salah nilai",
      "Karena dinilai berdasarkan kecepatan menggambar sketsa",
      "Karena juri tidak menerima tulisan tinta biru"
    ],
    "correctIndex": 1,
    "explanation": "Kerapian tulisan lembar jawaban sangat krusial karena soal teka-teki sandi dan nama pejabat lokal menuntut ketelitian huruf kapital dan ejaan baku yang presisi.",
    "sourceDoc": "PANDUAN MATERI PUPK Lomba Galang Tangguh Kemranjen 2026",
    "difficulty": "Mudah"
  },
  {
    "id": "p3k-1",
    "category": "tali_ikatan",
    "categoryLabel": "P3K & Pertolongan Pertama",
    "posNumber": 2,
    "question": "Kain pembalut berbentuk segitiga sama kaki yang sangat serbaguna dalam pertolongan pertama patah tulang atau luka disebut...",
    "options": [
      "Tourniquet",
      "Kasa steril",
      "Pembalut elastis (tensocrepe)",
      "Mitela"
    ],
    "correctIndex": 3,
    "explanation": "Mitela adalah kain pembalut berbentuk segitiga (biasanya berukuran panjang alas 90–120 cm) yang sangat serbaguna untuk pembalutan dan fiksasi bidai.",
    "sourceDoc": "PANDUAN MATERI PUPK Lomba Galang Tangguh Kemranjen 2026",
    "difficulty": "Mudah"
  },
  {
    "id": "p3k-2",
    "category": "tali_ikatan",
    "categoryLabel": "P3K & Pertolongan Pertama",
    "posNumber": 2,
    "question": "Prinsip utama dalam pemasangan bidai (spalk) pada korban yang mengalami patah tulang anggota gerak adalah...",
    "options": [
      "Bidai harus melewati minimal 2 persendian di antara tulang yang patah",
      "Cukup menggunakan 1 helai ikatan tepat di atas titik retak tulang",
      "Patah tulang harus ditarik dan diluruskan paksa terlebih dahulu",
      "Bidai diikat sekencang mungkin sampai aliran darah berhenti"
    ],
    "correctIndex": 0,
    "explanation": "Prinsip pembidaian fraktur/patah tulang: bidai harus melewati minimal dua sendi (sendi di atas dan di bawah tulang yang patah) untuk mencegah pergerakan tulang yang cedera.",
    "sourceDoc": "PANDUAN MATERI PUPK Lomba Galang Tangguh Kemranjen 2026",
    "difficulty": "Sedang"
  },
  {
    "id": "p3k-3",
    "category": "tali_ikatan",
    "categoryLabel": "P3K & Pertolongan Pertama",
    "posNumber": 2,
    "question": "Penanganan pertama yang tepat bagi seorang peserta kemah yang mengalami Hipotermia (kedinginan ekstrem) di lapangan adalah...",
    "options": [
      "Ganti pakaian basah dengan pakaian kering, hangatkan tubuh perlahan, selimuti, dan berikan minuman hangat manis jika sadar",
      "Memijat keras kaki dan tangannya yang membeku",
      "Menjemurnya langsung di terik matahari tanpa pakaian",
      "Memberikan air es dingin dan menyuruhnya mandi air dingin"
    ],
    "correctIndex": 0,
    "explanation": "Penanganan hipotermia: segera pindahkan ke tempat kering/hangat, ganti pakaian basah dengan kering, berikan selimut/sleeping bag hangat, dan beri minuman hangat manis jika korban sadar penuh.",
    "sourceDoc": "PANDUAN MATERI PUPK Lomba Galang Tangguh Kemranjen 2026",
    "difficulty": "Sedang"
  },
  {
    "id": "pbb-1",
    "category": "sku_ramu",
    "categoryLabel": "Baris-Berbaris (PBB)",
    "posNumber": 5,
    "question": "Dalam aba-aba baris berbaris di tempat, putaran badan ke arah belakang dengan poros tumit kaki kanan sebesar 180 derajat disebut gerakan...",
    "options": [
      "Hadap Kiri",
      "Setengah Lengan Hadap Kanan",
      "Balik Kanan",
      "Hadap Kanan"
    ],
    "correctIndex": 2,
    "explanation": "Gerakan memutar badan 180 derajat ke arah belakang adalah \"Balik Kanan\". Gerakan balik kiri tidak ada dalam peraturan baris berbaris resmi TNI/Pramuka.",
    "sourceDoc": "PEMBAHASAN SKU PENGGALANG RAMU",
    "difficulty": "Mudah"
  },
  {
    "id": "pbb-2",
    "category": "sku_ramu",
    "categoryLabel": "Baris-Berbaris (PBB)",
    "posNumber": 5,
    "question": "Aba-aba untuk meluruskan saf barisan dengan menolehkan kepala ke arah kanan sambil mengangkat tangan kanan ke pinggang atau pundak kawan kanan disebut...",
    "options": [
      "Lencang Depan",
      "Tegak Grak",
      "Lencang Kanan",
      "Istirahat di Tempat"
    ],
    "correctIndex": 2,
    "explanation": "Lencang Kanan dilakukan untuk meluruskan saf ke kanan, saf depan mengangkat tangan kanan bertumpu pada bahu kawan sebelah kanan dan kepala dipalingkan ke kanan.",
    "sourceDoc": "PEMBAHASAN SKU PENGGALANG RAMU",
    "difficulty": "Mudah"
  },
  {
    "id": "sku-18",
    "category": "sku_ramu",
    "categoryLabel": "Materi SKU Penggalang Ramu",
    "posNumber": 5,
    "question": "Berapakah waktu minimal yang dianjurkan untuk melakukan aktivitas fisik/olahraga bagi seorang Penggalang Ramu setiap harinya?",
    "options": [
      "5 menit",
      "15 menit",
      "2 jam tanpa henti",
      "Sedikitnya 30 menit"
    ],
    "correctIndex": 3,
    "explanation": "Sesuai butir 30 SKU Penggalang Ramu: \"Selalu melakukan aktivitas fisik tiap hari sedikitnya 30 menit dan dapat menunjukkan buktinya\".",
    "sourceDoc": "PEMBAHASAN SKU PENGGALANG RAMU",
    "difficulty": "Mudah"
  },
  {
    "id": "sku-19",
    "category": "sku_ramu",
    "categoryLabel": "Materi SKU Penggalang Ramu",
    "posNumber": 5,
    "question": "Pada perayaan Idul Adha, hari-hari di mana umat Islam diharamkan berpuasa dan diperbolehkan menyembelih hewan kurban pada tanggal 11, 12, dan 13 Zulhijjah disebut...",
    "options": [
      "Hari Arafah",
      "Hari Asyura",
      "Hari Tasyriq",
      "Hari Nifas"
    ],
    "correctIndex": 2,
    "explanation": "Tanggal 11, 12, dan 13 Zulhijjah disebut Hari Tasyriq. Bersama dengan hari raya 10 Zulhijjah, hari-hari ini adalah batas sah penyembelihan hewan kurban.",
    "sourceDoc": "PEMBAHASAN SKU PENGGALANG RAMU",
    "difficulty": "Sedang"
  },
  {
    "id": "sku-20",
    "category": "sku_ramu",
    "categoryLabel": "Materi SKU Penggalang Ramu",
    "posNumber": 5,
    "question": "Nama kitab suci agama Kong Hu Cu yang resmi diakui di Indonesia adalah...",
    "options": [
      "Weda",
      "Tri Pitaka",
      "Si Shu Wu Ching (Empat Kitab dan Lima Klasik)",
      "Taurat"
    ],
    "correctIndex": 2,
    "explanation": "Kitab suci agama Kong Hu Cu adalah Si Shu Wu Ching. (Weda untuk Hindu, Tri Pitaka untuk Buddha).",
    "sourceDoc": "PEMBAHASAN SKU PENGGALANG RAMU",
    "difficulty": "Sedang"
  },
  {
    "id": "fund-11",
    "category": "fundamental",
    "categoryLabel": "Kode Kehormatan Pramuka",
    "posNumber": 1,
    "question": "Berapakah jumlah janji dan ketentuan moral dalam kode kehormatan Pramuka Siaga?",
    "options": [
      "Satyaku dan Darmaku",
      "Dwisatya (2 janji) dan Dwidarma (2 ketentuan moral)",
      "Pancasila dan UUD 1945",
      "Trisatya dan Dasadarma"
    ],
    "correctIndex": 1,
    "explanation": "Kode kehormatan Pramuka Siaga terdiri atas Dwisatya (2 janji) dan Dwidarma (2 ketentuan moral: Siaga patuh pada ayah dan ibundanya, Siaga berani dan tidak putus asa).",
    "sourceDoc": "PEMBAHASAN SKU PENGGALANG RAMU",
    "difficulty": "Mudah"
  },
  {
    "id": "tali-12",
    "category": "tali_ikatan",
    "categoryLabel": "Tali Temali & Pionering",
    "posNumber": 2,
    "question": "Simpul yang berguna untuk menyambung dua utas tali yang sama besar dalam keadaan LICIN ATAU BASAH disebut...",
    "options": [
      "Simpul Nelayan / Simpul Kembar",
      "Simpul Mati",
      "Simpul Erat",
      "Simpul Laso"
    ],
    "correctIndex": 0,
    "explanation": "Simpul Kembar (sering juga disebut Simpul Nelayan / Fishermans Knot) digunakan untuk menyambung 2 utas tali yang sama besarnya dalam keadaan licin atau basah.",
    "sourceDoc": "PEMBAHASAN SKU PENGGALANG RAMU",
    "difficulty": "Mudah"
  },
  {
    "id": "tali-13",
    "category": "tali_ikatan",
    "categoryLabel": "Tali Temali & Pionering",
    "posNumber": 2,
    "question": "Ikatan yang digunakan untuk menalikan tiga buah tongkat yang berdiri menyatu pada satu tumpuan sehingga membentuk tripod (misalnya tiang bendera atau kaki tiga jemuran) adalah...",
    "options": [
      "Ikatan Canggah",
      "Ikatan Palang",
      "Ikatan Kaki Tiga",
      "Ikatan Silang"
    ],
    "correctIndex": 2,
    "explanation": "Ikatan Kaki Tiga (Tripod Lashing) digunakan untuk mengikat tiga batang kayu/tongkat menjadi satu dudukan tripod berpenyangga tiga.",
    "sourceDoc": "PANDUAN MATERI PUPK Lomba Galang Tangguh Kemranjen 2026",
    "difficulty": "Mudah"
  },
  {
    "id": "sandi-9",
    "category": "sandi_komunikasi",
    "categoryLabel": "Sandi, Morse & Semaphore",
    "posNumber": 3,
    "question": "Dalam sandi AZ (sandi bolak-balik alfabet), huruf \"P\", \"R\", \"A\" berturut-turut diganti menjadi...",
    "options": [
      "P menjadi K, R menjadi I, A menjadi Z",
      "P menjadi M, R menjadi N, A menjadi Z",
      "P menjadi O, R menjadi S, A menjadi Y",
      "P menjadi L, R menjadi J, A menjadi B"
    ],
    "correctIndex": 0,
    "explanation": "Pada sandi AZ: A berpasangan dengan Z, B-Y, C-X, ..., K-P (maka P adalah K), I-R (maka R adalah I), A adalah Z.",
    "sourceDoc": "PANDUAN MATERI PUPK Lomba Galang Tangguh Kemranjen 2026",
    "difficulty": "Sedang"
  },
  {
    "id": "kompas-12",
    "category": "kompas_menaksir",
    "categoryLabel": "Kompas, Navigasi & Menaksir",
    "posNumber": 4,
    "question": "Pada kompas, lensa kaca pembesar dan alat penggantung ibu jari digunakan saat posisi membidik sasaran untuk...",
    "options": [
      "Melihat angka/derajat pada piringan dial secara bersamaan saat membidik kawat visir dengan stabil",
      "Menahan jarum kompas agar tidak berputar",
      "Mengukur suhu udara di lokasi pengamatan",
      "Memperbesar ukuran pohon di kejauhan"
    ],
    "correctIndex": 0,
    "explanation": "Kaca pembesar digunakan untuk membaca derajat pembagian pada dial secara akurat bersamaan dengan membidik visir, sementara cincin jempol menyangkutkan ibu jari agar pegangan kompas kokoh dan seimbang.",
    "sourceDoc": "PEMBAHASAN SKU PENGGALANG RAMU",
    "difficulty": "Sedang"
  },
  {
    "id": "kem-13",
    "category": "kemranjen_2026",
    "categoryLabel": "PUPK Kemranjen, Banyumas & Isu 2026",
    "posNumber": 6,
    "question": "Tiga pilar fokus utama yang diusung dalam kegiatan Jambore Nasional (Jamnas) XII tahun 2026 di Cibubur adalah...",
    "options": [
      "Pameran teknologi mobil listrik, robot tempur, dan coding",
      "Lomba baris berbaris militer, parade drum band, dan karnaval kostum",
      "Perang tanding pionering, memasak rimba, dan panahan tradisional",
      "Kemandirian pangan, ketahanan lingkungan, dan literasi digital generasi muda"
    ],
    "correctIndex": 3,
    "explanation": "Fokus utama Jamnas XII 2026 di Cibubur adalah: kemandirian pangan, ketahanan lingkungan, dan literasi digital generasi muda.",
    "sourceDoc": "PANDUAN MATERI PUPK Lomba Galang Tangguh Kemranjen 2026",
    "difficulty": "Sedang"
  },
  {
    "id": "sku-21",
    "category": "sku_ramu",
    "categoryLabel": "Materi SKU Penggalang Ramu",
    "posNumber": 5,
    "question": "Di bawah ini merupakan contoh sampah non-biodegradable yang NON-RECYCLABLE (tidak memiliki nilai ekonomis dan tidak dapat diolah kembali) menurut SKU, yaitu...",
    "options": [
      "Botol kaca bekas sirup",
      "Tetra packs, kertas karbon (carbon paper), dan thermo coal (styrofoam)",
      "Kaleng minuman aluminium",
      "Kertas koran dan karton HVS"
    ],
    "correctIndex": 1,
    "explanation": "Dalam materi SKU Penggalang Ramu Butir 21: Sampah non-recyclable adalah sampah yang tidak memiliki nilai ekonomi dan tidak dapat diolah/diubah kembali seperti tetra packs, carbon paper, thermo coal dan sejenisnya.",
    "sourceDoc": "PEMBAHASAN SKU PENGGALANG RAMU",
    "difficulty": "Sedang"
  },
  {
    "id": "neg-13",
    "category": "kebangsaan",
    "categoryLabel": "Kenegaraan & Sejarah Nasional",
    "posNumber": 5,
    "question": "Berapakah ukuran standar Bendera Sang Merah Putih untuk penggunaan di dalam MEJA menurut UU No. 24 Tahun 2009 Pasal 4 ayat (3)?",
    "options": [
      "36 cm x 54 cm",
      "10 cm x 15 cm",
      "30 cm x 45 cm",
      "20 cm x 30 cm"
    ],
    "correctIndex": 1,
    "explanation": "Ukuran bendera merah putih untuk penggunaan di meja menurut UU 24/2009 adalah 10 cm x 15 cm.",
    "sourceDoc": "PEMBAHASAN SKU PENGGALANG RAMU",
    "difficulty": "Sedang"
  },
  {
    "id": "neg-14",
    "category": "kebangsaan",
    "categoryLabel": "Kenegaraan & Sejarah Nasional",
    "posNumber": 5,
    "question": "Berapakah ukuran bendera merah putih untuk penggunaan di DALAM RUANGAN menurut UU No. 24 Tahun 2009?",
    "options": [
      "100 cm x 150 cm",
      "80 cm x 120 cm",
      "120 cm x 180 cm",
      "200 cm x 300 cm"
    ],
    "correctIndex": 0,
    "explanation": "Ukuran bendera merah putih untuk penggunaan di ruangan adalah 100 cm x 150 cm (Pasal 4 ayat 3 huruf c).",
    "sourceDoc": "PEMBAHASAN SKU PENGGALANG RAMU",
    "difficulty": "Sedang"
  },
  {
    "id": "neg-15",
    "category": "kebangsaan",
    "categoryLabel": "Kenegaraan & Sejarah Nasional",
    "posNumber": 5,
    "question": "Jika Bendera Negara dipasang berdampingan dengan panji atau bendera organisasi, bagaimanakah posisi penempatan Bendera Negara yang benar?",
    "options": [
      "Bendera negara dipasang sama tinggi dan sama rendah tanpa pembeda",
      "Bendera negara ditempatkan di sebelah kanan (atau di depan tengah bila banyak barisan), dibuat lebih besar dan dipasang lebih tinggi",
      "Bendera negara dipasang bersilang di belakang bendera organisasi",
      "Bendera negara di sebelah kiri dan ukurannya lebih kecil"
    ],
    "correctIndex": 1,
    "explanation": "Berdasarkan Pasal 21 UU 24/2009: Bendera Negara dipasang di sebelah kanan atau di posisi tengah paling depan, dibuat lebih besar, dipasang lebih tinggi daripada bendera/panji organisasi, dan TIDAK BOLEH dipasang bersilang.",
    "sourceDoc": "PEMBAHASAN SKU PENGGALANG RAMU",
    "difficulty": "Tantangan"
  },
  {
    "id": "fund-12",
    "category": "fundamental",
    "categoryLabel": "Kode Kehormatan Pramuka",
    "posNumber": 1,
    "question": "Dasa Darma ke-7 berbunyi...",
    "options": [
      "Disiplin, berani dan setia",
      "Hemat, cermat dan bersahaja",
      "Rajin, terampil dan gembira",
      "Rela menolong dan tabah"
    ],
    "correctIndex": 1,
    "explanation": "Urutan Dasa Darma: 6. Rajin, terampil dan gembira; 7. Hemat, cermat dan bersahaja; 8. Disiplin, berani dan setia; 9. Bertanggung jawab dan dapat dipercaya; 10. Suci dalam pikiran, perkataan dan perbuatan.",
    "sourceDoc": "PEMBAHASAN SKU PENGGALANG RAMU",
    "difficulty": "Mudah"
  },
  {
    "id": "fund-13",
    "category": "fundamental",
    "categoryLabel": "Kode Kehormatan Pramuka",
    "posNumber": 1,
    "question": "Dasa Darma ke-9 berbunyi...",
    "options": [
      "Bertanggung jawab dan dapat dipercaya",
      "Patuh dan suka bermusyawarah",
      "Takwa pada Tuhan Yang Maha Esa",
      "Disiplin, berani dan setia"
    ],
    "correctIndex": 0,
    "explanation": "Dasa Darma ke-9 adalah \"Bertanggung jawab dan dapat dipercaya\".",
    "sourceDoc": "PEMBAHASAN SKU PENGGALANG RAMU",
    "difficulty": "Mudah"
  },
  {
    "id": "fund-14",
    "category": "fundamental",
    "categoryLabel": "Kode Kehormatan Pramuka",
    "posNumber": 1,
    "question": "Dasa Darma ke-10 berbunyi...",
    "options": [
      "Cinta alam dan kasih sayang sesama manusia",
      "Rela menolong dan tabah",
      "Suci dalam pikiran, perkataan dan perbuatan",
      "Patriot yang sopan dan ksatria"
    ],
    "correctIndex": 2,
    "explanation": "Dasa Darma ke-10 adalah \"Suci dalam pikiran, perkataan dan perbuatan\".",
    "sourceDoc": "PEMBAHASAN SKU PENGGALANG RAMU",
    "difficulty": "Mudah"
  },
  {
    "id": "sku-22",
    "category": "sku_ramu",
    "categoryLabel": "Materi SKU Penggalang Ramu",
    "posNumber": 5,
    "question": "Kitab suci agama Hindu yang diakui di Indonesia adalah...",
    "options": [
      "Tripitaka",
      "Taurat",
      "Weda",
      "Alkitab"
    ],
    "correctIndex": 2,
    "explanation": "Kitab suci agama Hindu adalah Weda.",
    "sourceDoc": "PEMBAHASAN SKU PENGGALANG RAMU",
    "difficulty": "Mudah"
  },
  {
    "id": "sku-23",
    "category": "sku_ramu",
    "categoryLabel": "Materi SKU Penggalang Ramu",
    "posNumber": 5,
    "question": "Nama tempat ibadah umat Kong Hu Cu di Indonesia adalah...",
    "options": [
      "Vihara",
      "Li Tang / Klenteng",
      "Gereja",
      "Pura"
    ],
    "correctIndex": 1,
    "explanation": "Tempat ibadah agama Kong Hu Cu adalah Li Tang atau Klenteng.",
    "sourceDoc": "PEMBAHASAN SKU PENGGALANG RAMU",
    "difficulty": "Mudah"
  },
  {
    "id": "sku-24",
    "category": "sku_ramu",
    "categoryLabel": "Materi SKU Penggalang Ramu",
    "posNumber": 5,
    "question": "Berikut adalah hari besar keagamaan umat Buddha, KECUALI...",
    "options": [
      "Asadha",
      "Waisak",
      "Kathina",
      "Nyepi"
    ],
    "correctIndex": 3,
    "explanation": "Nyepi adalah hari raya umat Hindu. Sedangkan Waisak, Asadha, dan Kathina adalah hari besar umat Buddha.",
    "sourceDoc": "PEMBAHASAN SKU PENGGALANG RAMU",
    "difficulty": "Mudah"
  },
  {
    "id": "sku-25",
    "category": "sku_ramu",
    "categoryLabel": "Materi SKU Penggalang Ramu",
    "posNumber": 5,
    "question": "Proses fotosintesis pada tumbuhan hijau menyerap gas karbondioksida (CO2) dan air dengan bantuan klorofil dan cahaya matahari untuk menghasilkan glukosa (C6H12O6) serta...",
    "options": [
      "Gas metana (CH4)",
      "Karbon monoksida (CO)",
      "Nitrogen (N2)",
      "Zat asam / Oksigen (O2)"
    ],
    "correctIndex": 3,
    "explanation": "Pada proses fotosintesis, tumbuhan menyerap CO2 dan melepaskan O2 (oksigen) yang sangat dibutuhkan oleh makhluk hidup untuk pernapasan.",
    "sourceDoc": "PEMBAHASAN SKU PENGGALANG RAMU",
    "difficulty": "Mudah"
  },
  {
    "id": "sku-26",
    "category": "sku_ramu",
    "categoryLabel": "Materi SKU Penggalang Ramu",
    "posNumber": 5,
    "question": "Berapa takaran pupuk NPK yang dianjurkan per lubang tanam pohon penghijauan setiap 3 bulan sekali menurut panduan SKU?",
    "options": [
      "25 gram",
      "500 gram",
      "100 gram",
      "5 gram"
    ],
    "correctIndex": 0,
    "explanation": "Dalam panduan perawatan pasca-tanam SKU: memupuk tanaman 3 bulan sekali dengan pupuk NPK sebanyak 25 gram per lubang.",
    "sourceDoc": "PEMBAHASAN SKU PENGGALANG RAMU",
    "difficulty": "Sedang"
  },
  {
    "id": "sku-27",
    "category": "sku_ramu",
    "categoryLabel": "Materi SKU Penggalang Ramu",
    "posNumber": 5,
    "question": "Dua prinsip yang harus dipegang teguh dalam mengaktualisasikan hak kemerdekaan menyampaikan pendapat di muka umum adalah...",
    "options": [
      "Kecepatan dan kekerasan",
      "Kerahasiaan dan provokasi",
      "Kebebasan dan tanggung jawab",
      "Kekuasaan dan kemenangan kelompok"
    ],
    "correctIndex": 2,
    "explanation": "Ada dua prinsip yang harus dipegang dalam menyampaikan pendapat di muka umum, yaitu prinsip Kebebasan (agar dapat dilaksanakan tanpa tekanan) dan prinsip Tanggung Jawab (sesuai aturan hukum, norma agama, kesusilaan, dan kesopanan).",
    "sourceDoc": "PEMBAHASAN SKU PENGGALANG RAMU",
    "difficulty": "Mudah"
  },
  {
    "id": "tali-14",
    "category": "tali_ikatan",
    "categoryLabel": "Tali Temali & Pionering",
    "posNumber": 2,
    "question": "Ikatan yang digunakan untuk menyatukan dua batang kayu/tongkat yang bersilangan tegak lurus membentuk sudut siku-siku (90°) dinamakan...",
    "options": [
      "Ikatan Silang",
      "Ikatan Palang",
      "Ikatan Tiang",
      "Ikatan Canggah"
    ],
    "correctIndex": 1,
    "explanation": "Ikatan Palang (Square Lashing) digunakan untuk mengikat dua tiang kayu yang bersilangan tegak lurus membentuk sudut 90 derajat.",
    "sourceDoc": "PEMBAHASAN SKU PENGGALANG RAMU & PUPK 2026",
    "difficulty": "Mudah"
  },
  {
    "id": "tali-15",
    "category": "tali_ikatan",
    "categoryLabel": "Tali Temali & Pionering",
    "posNumber": 2,
    "question": "Ikatan yang digunakan untuk mengikat dua batang kayu yang bersilangan TIDAK TEGAK LURUS (membentuk sudut miring/diagonal) dinamakan...",
    "options": [
      "Ikatan Turki",
      "Ikatan Silang (Diagonal Lashing)",
      "Ikatan Tambat",
      "Ikatan Palang"
    ],
    "correctIndex": 1,
    "explanation": "Ikatan Silang (Diagonal Lashing) digunakan untuk mengikat dua tiang kayu yang bersilangan diagonal dan tidak tegak lurus.",
    "sourceDoc": "PEMBAHASAN SKU PENGGALANG RAMU & PUPK 2026",
    "difficulty": "Sedang"
  },
  {
    "id": "sandi-10",
    "category": "sandi_komunikasi",
    "categoryLabel": "Sandi, Morse & Semaphore",
    "posNumber": 3,
    "question": "Dalam sandi Jam, jika kunci menunjukkan selang waktu 15 menit (01.00 = A, 01.15 = B, 01.30 = C, 01.45 = D, 02.00 = E), maka pukul 02.15 melambangkan huruf...",
    "options": [
      "E",
      "G",
      "F",
      "H"
    ],
    "correctIndex": 2,
    "explanation": "Pola kelipatan 15 menit: 01.00=A, 01.15=B, 01.30=C, 01.45=D, 02.00=E, 02.15=F.",
    "sourceDoc": "PANDUAN MATERI PUPK Lomba Galang Tangguh Kemranjen 2026",
    "difficulty": "Sedang"
  },
  {
    "id": "kem-14",
    "category": "kemranjen_2026",
    "categoryLabel": "PUPK Kemranjen, Banyumas & Isu 2026",
    "posNumber": 6,
    "question": "Dalam dinamika kebijakan iklim dan energi di wilayah Jawa Tengah bagian selatan pada periode akhir 2026, fokus utama yang ditekankan adalah...",
    "options": [
      "Penghentian total sektor pertanian",
      "Penguatan mitigasi bencana hidrometeorologi memasuki musim penghujan",
      "Pengalihan seluruh lahan menjadi pertambangan batu bara",
      "Pembangunan reaktor nuklir skala besar"
    ],
    "correctIndex": 1,
    "explanation": "Isu iklim 2026 di Jateng selatan menekankan penguatan mitigasi bencana hidrometeorologi menghadapi musim penghujan serta penataan regulasi transisi energi.",
    "sourceDoc": "PANDUAN MATERI PUPK Lomba Galang Tangguh Kemranjen 2026",
    "difficulty": "Sedang"
  },
  {
    "id": "fund-15",
    "category": "fundamental",
    "categoryLabel": "Kode Kehormatan Pramuka",
    "posNumber": 1,
    "question": "Kiasan dasar dari tingkatan \"Penggalang Terap\" adalah...",
    "options": [
      "Mengkiaskan penerapan atau pengamalan ilmu dan keahlian di lingkungan regu dan masyarakat luas",
      "Mengkiaskan keteladanan tertinggi seorang anggota",
      "Mengkiaskan tahap meramu potensi dasar persatuan",
      "Mengkiaskan tahap merakit dan memadukan kekuatan"
    ],
    "correctIndex": 0,
    "explanation": "Penggalang Terap mengkiaskan penerapan atau pengamalan ilmu dan keahlian kepramukaan di lingkungan regu dan masyarakat luas.",
    "sourceDoc": "PANDUAN MATERI PUPK Lomba Galang Tangguh Kemranjen 2026",
    "difficulty": "Sedang"
  },
  {
    "id": "fund-16",
    "category": "fundamental",
    "categoryLabel": "Kode Kehormatan Pramuka",
    "posNumber": 1,
    "question": "Dasa Darma ke-3 berbunyi...",
    "options": [
      "Takwa pada Tuhan Yang Maha Esa",
      "Patriot yang sopan dan ksatria",
      "Patuh dan suka bermusyawarah",
      "Rela menolong dan tabah"
    ],
    "correctIndex": 1,
    "explanation": "Dasa Darma ke-3 adalah \"Patriot yang sopan dan ksatria\".",
    "sourceDoc": "PEMBAHASAN SKU PENGGALANG RAMU",
    "difficulty": "Mudah"
  },
  {
    "id": "fund-17",
    "category": "fundamental",
    "categoryLabel": "Kode Kehormatan Pramuka",
    "posNumber": 1,
    "question": "Dasa Darma ke-4 berbunyi...",
    "options": [
      "Disiplin, berani dan setia",
      "Patriot yang sopan dan ksatria",
      "Patuh dan suka bermusyawarah",
      "Rajin, terampil dan gembira"
    ],
    "correctIndex": 2,
    "explanation": "Dasa Darma ke-4 adalah \"Patuh dan suka bermusyawarah\".",
    "sourceDoc": "PEMBAHASAN SKU PENGGALANG RAMU",
    "difficulty": "Mudah"
  },
  {
    "id": "fund-18",
    "category": "fundamental",
    "categoryLabel": "Kode Kehormatan Pramuka",
    "posNumber": 1,
    "question": "Dasa Darma ke-6 berbunyi...",
    "options": [
      "Rela menolong dan tabah",
      "Rajin, terampil dan gembira",
      "Hemat, cermat dan bersahaja",
      "Bertanggung jawab dan dapat dipercaya"
    ],
    "correctIndex": 1,
    "explanation": "Dasa Darma ke-6 adalah \"Rajin, terampil dan gembira\".",
    "sourceDoc": "PEMBAHASAN SKU PENGGALANG RAMU",
    "difficulty": "Mudah"
  },
  {
    "id": "fund-19",
    "category": "fundamental",
    "categoryLabel": "Kode Kehormatan Pramuka",
    "posNumber": 1,
    "question": "Dasa Darma ke-8 berbunyi...",
    "options": [
      "Suci dalam pikiran, perkataan dan perbuatan",
      "Hemat, cermat dan bersahaja",
      "Patriot yang sopan dan ksatria",
      "Disiplin, berani dan setia"
    ],
    "correctIndex": 3,
    "explanation": "Dasa Darma ke-8 adalah \"Disiplin, berani dan setia\".",
    "sourceDoc": "PEMBAHASAN SKU PENGGALANG RAMU",
    "difficulty": "Mudah"
  },
  {
    "id": "neg-16",
    "category": "kebangsaan",
    "categoryLabel": "Kenegaraan & Sejarah Nasional",
    "posNumber": 5,
    "question": "Berdasarkan Pasal 7 UU No. 24 Tahun 2009, pengibaran dan/atau pemasangan Bendera Negara secara umum dilakukan pada waktu...",
    "options": [
      "Tepat pukul 12.00 siang hingga 18.00 sore",
      "Selama 24 jam terus menerus tanpa penurunan",
      "Hanya pada saat upacara hari Senin",
      "Antara matahari terbit hingga matahari terbenam"
    ],
    "correctIndex": 3,
    "explanation": "Pengibaran dan/atau pemasangan Bendera Negara dilakukan pada waktu antara matahari terbit hingga matahari terbenam (Pasal 7 ayat 1).",
    "sourceDoc": "PEMBAHASAN SKU PENGGALANG RAMU",
    "difficulty": "Mudah"
  },
  {
    "id": "neg-17",
    "category": "kebangsaan",
    "categoryLabel": "Kenegaraan & Sejarah Nasional",
    "posNumber": 5,
    "question": "Bagaimanakah tata cara yang benar saat menaikkan Bendera Negara setengah tiang sebagai tanda berkabung?",
    "options": [
      "Langsung dinaikkan hingga setengah tiang lalu diikat",
      "Cukup diletakkan di samping tiang",
      "Dinaikkan hingga ke ujung tiang, dihentikan sebentar, baru diturunkan tepat setengah tiang",
      "Dinaikkan perlahan dan berhenti di sepertiga bawah tiang"
    ],
    "correctIndex": 2,
    "explanation": "Menurut Pasal 14 ayat (2) UU No. 24 Tahun 2009: Bendera Negara yang dikibarkan setengah tiang, dinaikkan terlebih dahulu hingga ke ujung tiang, dihentikan sebentar, dan kemudian diturunkan tepat setengah tiang.",
    "sourceDoc": "PEMBAHASAN SKU PENGGALANG RAMU",
    "difficulty": "Sedang"
  },
  {
    "id": "kompas-13",
    "category": "kompas_menaksir",
    "categoryLabel": "Kompas, Navigasi & Menaksir",
    "posNumber": 4,
    "question": "Dalam penjelajahan lintas alam (wide game), catatan laporan rute perjalanan yang dibuat dalam bentuk kolom berisi waktu, jarak/langkah, sudut bidik kompas (azimut), dan gambar peta kiri-kanan medan disebut...",
    "options": [
      "Peta Pita",
      "Peta Tematik",
      "Peta Kontur",
      "Peta Topografi"
    ],
    "correctIndex": 0,
    "explanation": "Peta Pita (Route Map) adalah peta laporan penjelajahan yang digambar memanjang seperti pita dengan memuat kolom waktu, arah azimut/kompas, jarak, dan simbol tanda medan di kiri-kanan lintasan.",
    "sourceDoc": "PANDUAN MATERI PUPK Lomba Galang Tangguh Kemranjen 2026",
    "difficulty": "Mudah"
  },
  {
    "id": "kem-15",
    "category": "kemranjen_2026",
    "categoryLabel": "PUPK Kemranjen, Banyumas & Isu 2026",
    "posNumber": 6,
    "question": "Tingkatan Pramuka Garuda bagi Penggalang merupakan tingkatan tertinggi yang mensyaratkan...",
    "options": [
      "Menyelesaikan SKU Penggalang Terap, memiliki TKK minimal (utama dan madya), penguasaan IT/bahasa, serta menjadi teladan pribadi",
      "Hanya cukup hadir 5 kali latihan tanpa uji keterampilan",
      "Membayar iuran bulanan tertinggi di gugus depan",
      "Menjadi juara 1 lomba tingkat nasional"
    ],
    "correctIndex": 0,
    "explanation": "Pramuka Garuda Penggalang adalah tingkatan tertinggi bagi penggalang yang telah menyelesaikan Terap, memenuhi syarat TKK minimal madya dan utama, menguasai teknologi informasi/bahasa, dan berakhlak teladan.",
    "sourceDoc": "PANDUAN MATERI PUPK Lomba Galang Tangguh Kemranjen 2026",
    "difficulty": "Sedang"
  }
];

/**
 * Utility function to dynamically shuffle options for any question at runtime
 */
export function shuffleQuestionOptions(q: Question): Question {
  const correctText = q.options[q.correctIndex];
  const indices = [0, 1, 2, 3];
  for (let i = indices.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [indices[i], indices[j]] = [indices[j], indices[i]];
  }
  const newOptions = indices.map(idx => q.options[idx]);
  const newCorrectIndex = newOptions.indexOf(correctText);
  return {
    ...q,
    options: newOptions,
    correctIndex: newCorrectIndex,
  };
}
