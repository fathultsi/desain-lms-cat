/* ============================================================================
   LMS-CAT · Bank soal demo — 30 soal TWK, 5 kategori, 6 soal per kategori
   Skor: 5 poin per jawaban benar (maks 150). Tanpa penalti salah.
   Data ini contoh untuk demonstrasi alur; bukan bank soal produksi.
   ========================================================================== */
(function () {
  "use strict";

  var CATEGORIES = [
    { id: "nas", name: "Nasionalisme", short: "NAS" },
    { id: "int", name: "Integritas", short: "INT" },
    { id: "bel", name: "Bela Negara", short: "BEL" },
    { id: "pil", name: "Pilar Negara", short: "PIL" },
    { id: "bhs", name: "Bahasa Negara", short: "BHS" }
  ];

  var QUESTIONS = [
    /* ---------------------------- NASIONALISME ---------------------------- */
    {
      id: 1, cat: "nas",
      text: "Pancasila sebagai dasar negara mengandung konsekuensi bahwa setiap penyelenggaraan negara harus berlandaskan nilai-nilainya. Pernyataan yang paling tepat menggambarkan konsekuensi tersebut adalah…",
      opts: [
        "Pancasila menjadi sumber hukum tertinggi yang menjiwai seluruh peraturan perundang-undangan.",
        "Pancasila hanya menjadi pedoman moral bagi penyelenggara negara, bukan bagi masyarakat.",
        "Pancasila dapat diubah sewaktu-waktu mengikuti perkembangan politik.",
        "Pancasila berlaku hanya pada masa pemerintahan tertentu.",
        "Pancasila menjadi simbol negara tanpa keterkaitan dengan kebijakan publik."
      ],
      correct: 0
    },
    {
      id: 2, cat: "nas",
      text: "Sila pertama Pancasila menegaskan bahwa negara berdasar atas Ketuhanan Yang Maha Esa. Penerapan nilai tersebut dalam kehidupan bernegara paling tepat ditunjukkan oleh…",
      opts: [
        "Negara menetapkan satu agama resmi bagi seluruh warga negara.",
        "Negara menjamin kemerdekaan setiap penduduk untuk memeluk agama dan beribadah menurut agamanya.",
        "Negara melarang kegiatan keagamaan yang tidak diakui pemerintah.",
        "Negara menyerahkan seluruh urusan keagamaan kepada organisasi keagamaan tanpa pengaturan.",
        "Negara mewajibkan setiap warga mengikuti upacara keagamaan tertentu."
      ],
      correct: 1
    },
    {
      id: 3, cat: "nas",
      text: "Sikap nasionalisme yang paling relevan di era globalisasi adalah…",
      opts: [
        "Menolak seluruh produk dan budaya asing.",
        "Mengutamakan produk dalam negeri sekaligus meningkatkan daya saingnya.",
        "Menghindari kerja sama internasional agar tidak terpengaruh.",
        "Menganggap budaya daerah lebih rendah daripada budaya global.",
        "Membatasi akses informasi dari luar negeri."
      ],
      correct: 1
    },
    {
      id: 4, cat: "nas",
      text: "Ancaman terhadap ideologi Pancasila yang paling perlu diwaspadai pada era digital adalah…",
      opts: [
        "Meningkatnya jumlah partai politik peserta pemilu.",
        "Penyebaran paham yang menolak keberagaman melalui media sosial.",
        "Bertambahnya jumlah bahasa daerah yang terdokumentasi.",
        "Peningkatan jumlah organisasi kemasyarakatan.",
        "Perubahan kurikulum pendidikan kewarganegaraan."
      ],
      correct: 1
    },
    {
      id: 5, cat: "nas",
      text: "Cinta tanah air dalam kehidupan sehari-hari paling tepat diwujudkan oleh seorang pelajar melalui…",
      opts: [
        "Menghafal seluruh lagu daerah tanpa memahami maknanya.",
        "Menjaga nama baik bangsa dengan berprestasi dan menaati aturan.",
        "Menolak semua bentuk pertukaran pelajar ke luar negeri.",
        "Mengikuti seluruh tren budaya asing tanpa penyaringan.",
        "Menghindari kegiatan sosial yang melibatkan masyarakat luas."
      ],
      correct: 1
    },
    {
      id: 6, cat: "nas",
      text: "Nilai persatuan dalam sila ketiga Pancasila paling tepat diwujudkan dalam masyarakat majemuk melalui…",
      opts: [
        "Menyeragamkan budaya daerah menjadi satu budaya nasional.",
        "Mengedepankan kepentingan kelompok sendiri dalam musyawarah.",
        "Menghormati perbedaan agama dan budaya sambil menjaga kepentingan bersama.",
        "Menolak keberadaan budaya asing di lingkungan sekitar.",
        "Membatasi kegiatan budaya daerah agar tidak menimbulkan konflik."
      ],
      correct: 2
    },

    /* ----------------------------- INTEGRITAS ------------------------------ */
    {
      id: 7, cat: "int",
      text: "Seorang pegawai layanan publik menerima imbalan dari pengguna jasa agar berkasnya diproses lebih cepat. Sikap yang paling mencerminkan nilai integritas adalah…",
      opts: [
        "Menerima imbalan karena jumlahnya kecil dan tidak merugikan siapa pun.",
        "Menolak imbalan dan tetap memproses berkas sesuai urutan yang berlaku.",
        "Menerima imbalan lalu membagikannya kepada rekan kerja.",
        "Menunda proses berkas agar pengguna menambah imbalan.",
        "Menerima imbalan hanya jika pengguna menawarkannya lebih dulu."
      ],
      correct: 1
    },
    {
      id: 8, cat: "int",
      text: "Gratifikasi yang diterima seorang ASN wajib dilaporkan kepada unit pengendali gratifikasi dalam tenggat waktu yang ditentukan. Dasar pertimbangan aturan tersebut adalah…",
      opts: [
        "Agar ASN memperoleh tambahan penghasilan resmi.",
        "Agar penerimaan yang berpotensi memengaruhi keputusan dapat dicegah sedini mungkin.",
        "Agar seluruh pemberian kepada ASN dilarang tanpa pengecualian.",
        "Agar ASN dapat memilih pemberian yang layak diterima.",
        "Agar pemberi hadiah memperoleh perlindungan hukum."
      ],
      correct: 1
    },
    {
      id: 9, cat: "int",
      text: "Seorang anggota panitia pengadaan mengetahui bahwa salah satu rekanannya menerima fasilitas dari calon penyedia. Tindakan yang paling tepat adalah…",
      opts: [
        "Diam saja karena bukan kewenangannya.",
        "Menegur secara pribadi lalu tidak melaporkan agar tidak menimbulkan konflik.",
        "Melaporkan melalui saluran resmi yang tersedia disertai bukti yang dimiliki.",
        "Menyebarkan informasi tersebut di media sosial terlebih dahulu.",
        "Menunggu hingga proses pengadaan selesai sebelum memutuskan."
      ],
      correct: 2
    },
    {
      id: 10, cat: "int",
      text: "Situasi yang paling jelas menggambarkan konflik kepentingan bagi seorang pejabat publik adalah…",
      opts: [
        "Mengikuti rapat koordinasi lintas instansi.",
        "Menandatangani kontrak dengan perusahaan yang sahamnya dimiliki keluarganya.",
        "Menerima kunjungan kerja dari instansi lain.",
        "Menghadiri seminar yang diselenggarakan universitas.",
        "Menggunakan kendaraan dinas untuk keperluan tugas."
      ],
      correct: 1
    },
    {
      id: 11, cat: "int",
      text: "Nilai integritas dalam penyusunan laporan kinerja paling tepat ditunjukkan melalui…",
      opts: [
        "Menyajikan capaian sebaik mungkin agar penilaian meningkat.",
        "Menyusun laporan sesuai data yang dapat diverifikasi, termasuk capaian yang belum optimal.",
        "Menunda pelaporan hingga seluruh target tercapai.",
        "Menyerahkan penyusunan laporan kepada pihak ketiga.",
        "Menghilangkan bagian laporan yang dinilai kurang baik."
      ],
      correct: 1
    },
    {
      id: 12, cat: "int",
      text: "Seorang ASN diminta atasannya memproses suatu permohonan di luar prosedur dengan alasan mendesak. Sikap yang paling tepat adalah…",
      opts: [
        "Menolak secara terbuka di depan umum agar tidak diulang.",
        "Menjalankan perintah karena atasan memiliki kewenangan penuh.",
        "Meminta dasar dan prosedur yang berlaku secara tertulis sebelum memproses.",
        "Memproses sebagian permohonan tanpa mencatat alasannya.",
        "Menyerahkan keputusan kepada rekan kerja lain."
      ],
      correct: 2
    },

    /* ----------------------------- BELA NEGARA ---------------------------- */
    {
      id: 13, cat: "bel",
      text: "Bagi seorang aparatur sipil negara, upaya bela negara paling relevan diwujudkan melalui…",
      opts: [
        "Mengikuti pelatihan militer secara wajib setiap tahun.",
        "Menjaga kerahasiaan data negara dan menjalankan tugas sesuai aturan.",
        "Menghindari kritik terhadap kebijakan pemerintah.",
        "Mendahulukan kepentingan pribadi dalam pengambilan keputusan.",
        "Menolak kerja sama dengan pihak asing dalam segala bentuk."
      ],
      correct: 1
    },
    {
      id: 14, cat: "bel",
      text: "Pasal 27 ayat (3) UUD 1945 menyatakan bahwa setiap warga negara berhak dan wajib ikut serta dalam upaya pembelaan negara. Makna yang paling tepat dari ketentuan tersebut adalah…",
      opts: [
        "Bela negara hanya kewajiban aparat keamanan.",
        "Bela negara merupakan hak sekaligus kewajiban setiap warga negara.",
        "Bela negara hanya berlaku pada masa perang.",
        "Bela negara hanya diwujudkan melalui dinas militer.",
        "Bela negara merupakan kewajiban pemerintah pusat."
      ],
      correct: 1
    },
    {
      id: 15, cat: "bel",
      text: "Sistem pertahanan dan keamanan rakyat semesta (Sishankamrata) menempatkan rakyat sebagai…",
      opts: [
        "Pihak yang hanya menerima perlindungan dari aparat.",
        "Kekuatan pendukung yang bersifat sementara.",
        "Komponen pendukung pertahanan bersama TNI dan Polri.",
        "Pengganti utama kekuatan pertahanan negara.",
        "Pihak yang dikecualikan dari tanggung jawab pertahanan."
      ],
      correct: 2
    },
    {
      id: 16, cat: "bel",
      text: "Ancaman siber terhadap data kependudukan paling tepat dikategorikan sebagai ancaman…",
      opts: [
        "Militer konvensional.",
        "Nonmiliter yang menyasar kedaulatan informasi negara.",
        "Ekonomi yang tidak berkaitan dengan keamanan negara.",
        "Sosial budaya yang hanya berdampak pada individu.",
        "Politik yang hanya terjadi pada masa pemilu."
      ],
      correct: 1
    },
    {
      id: 17, cat: "bel",
      text: "Wujud bela negara yang paling sesuai bagi seorang mahasiswa adalah…",
      opts: [
        "Meninggalkan pendidikan untuk mengikuti kegiatan keamanan.",
        "Menguasai ilmu pengetahuan dan menerapkannya bagi kepentingan bangsa.",
        "Menolak seluruh informasi yang berasal dari luar negeri.",
        "Menghindari organisasi kemahasiswaan agar tidak terlibat konflik.",
        "Membatasi pergaulan hanya dengan kelompok yang sama."
      ],
      correct: 1
    },
    {
      id: 18, cat: "bel",
      text: "Pendidikan kewarganegaraan memiliki peran penting dalam bela negara karena…",
      opts: [
        "Menjadi syarat administratif untuk mendaftar sebagai ASN.",
        "Menumbuhkan kesadaran hak dan kewajiban warga negara terhadap bangsa.",
        "Menggantikan pelatihan dasar kemiliteran.",
        "Menjadi satu-satunya mata pelajaran yang wajib diikuti.",
        "Membatasi ruang gerak warga negara dalam berpendapat."
      ],
      correct: 1
    },

    /* ----------------------------- PILAR NEGARA --------------------------- */
    {
      id: 19, cat: "pil",
      text: "Undang-Undang Dasar Negara Republik Indonesia Tahun 1945 berkedudukan sebagai hukum dasar. Konsekuensi kedudukan tersebut adalah…",
      opts: [
        "Seluruh peraturan perundang-undangan tidak boleh bertentangan dengannya.",
        "UUD hanya mengikat lembaga negara, tidak mengikat warga negara.",
        "UUD dapat diubah melalui keputusan presiden.",
        "UUD hanya berlaku selama satu periode pemerintahan.",
        "UUD memiliki kedudukan setara dengan undang-undang."
      ],
      correct: 0
    },
    {
      id: 20, cat: "pil",
      text: "Lembaga negara yang berwenang menguji undang-undang terhadap Undang-Undang Dasar adalah…",
      opts: ["Mahkamah Agung", "Komisi Yudisial", "Mahkamah Konstitusi", "Dewan Perwakilan Rakyat", "Badan Pemeriksa Keuangan"],
      correct: 2
    },
    {
      id: 21, cat: "pil",
      text: "Semboyan Bhinneka Tunggal Ika menegaskan bahwa keberagaman bukan penghalang persatuan. Penerapan nilai tersebut paling tepat ditunjukkan oleh…",
      opts: [
        "Menyeragamkan budaya daerah agar tercipta keseragaman nasional.",
        "Mengedepankan kepentingan kelompok sendiri dalam musyawarah.",
        "Menghormati perbedaan agama dan budaya sambil menjaga kepentingan bersama.",
        "Menolak keberadaan budaya asing di lingkungan sekitar.",
        "Membatasi kegiatan budaya daerah agar tidak menimbulkan konflik."
      ],
      correct: 2
    },
    {
      id: 22, cat: "pil",
      text: "Negara Kesatuan Republik Indonesia menganut asas desentralisasi dalam penyelenggaraan pemerintahan daerah. Tujuan utama penerapan asas tersebut adalah…",
      opts: [
        "Memperkuat kekuasaan pemerintah pusat atas daerah.",
        "Mempercepat pelayanan publik sesuai kebutuhan dan potensi daerah.",
        "Mengurangi jumlah pegawai pemerintah pusat.",
        "Menyerahkan seluruh urusan pemerintahan kepada daerah.",
        "Menyeragamkan kebijakan di seluruh daerah."
      ],
      correct: 1
    },
    {
      id: 23, cat: "pil",
      text: "Berdasarkan UUD 1945, kekuasaan membentuk undang-undang berada pada…",
      opts: [
        "Presiden bersama Dewan Perwakilan Rakyat.",
        "Mahkamah Konstitusi.",
        "Majelis Permusyawaratan Rakyat.",
        "Dewan Perwakilan Daerah.",
        "Komisi Yudisial."
      ],
      correct: 0
    },
    {
      id: 24, cat: "pil",
      text: "Pasal 28C ayat (1) UUD 1945 menjamin hak setiap orang untuk mengembangkan diri melalui pemenuhan kebutuhan dasar serta memperoleh manfaat dari ilmu pengetahuan dan teknologi. Makna yang paling tepat adalah…",
      opts: [
        "Hak yang hanya dapat dipenuhi oleh negara tanpa peran individu.",
        "Hak setiap orang meningkatkan kualitas hidup melalui pendidikan dan penguasaan ilmu pengetahuan.",
        "Kewajiban negara menyediakan lapangan kerja bagi seluruh warga negara.",
        "Hak yang hanya berlaku bagi warga negara berpendidikan tinggi.",
        "Kebebasan tanpa batas dalam mengembangkan diri di segala bidang."
      ],
      correct: 1
    },

    /* ----------------------------- BAHASA NEGARA -------------------------- */
    {
      id: 25, cat: "bhs",
      text: "Penggunaan bahasa Indonesia dalam forum resmi kenegaraan merupakan wujud…",
      opts: [
        "Nasionalisme dalam sila ketiga Pancasila.",
        "Persatuan dalam keberagaman bahasa daerah.",
        "Kedaulatan rakyat dalam sistem demokrasi.",
        "Bahasa negara sebagai identitas dan pemersatu bangsa.",
        "Kebebasan berekspresi tanpa aturan kebahasaan."
      ],
      correct: 3
    },
    {
      id: 26, cat: "bhs",
      text: "Kedudukan bahasa Indonesia sebagai bahasa negara tercantum dalam…",
      opts: [
        "Pasal 36 UUD Negara Republik Indonesia Tahun 1945.",
        "Pasal 28 UUD Negara Republik Indonesia Tahun 1945.",
        "Pasal 18 UUD Negara Republik Indonesia Tahun 1945.",
        "Pasal 31 UUD Negara Republik Indonesia Tahun 1945.",
        "Pasal 33 UUD Negara Republik Indonesia Tahun 1945."
      ],
      correct: 0
    },
    {
      id: 27, cat: "bhs",
      text: "Penulisan kata baku yang tepat terdapat pada kalimat…",
      opts: [
        "Panitia telah menyiapkan daftar hadir peserta.",
        "Panitia telah menyiapkan daftar hadir peserta-peserta.",
        "Panitia telah mempersiapkan daftar kehadiran para peserta.",
        "Panitia sudah siapkan daftar hadir peserta.",
        "Panitia telah menyiapkan daftar hadir daripada peserta."
      ],
      correct: 0
    },
    {
      id: 28, cat: "bhs",
      text: "Fungsi bahasa Indonesia sebagai bahasa pemersatu paling tampak dalam situasi…",
      opts: [
        "Rapat internal yang dihadiri satu suku bangsa.",
        "Komunikasi antardaerah yang memiliki bahasa berbeda.",
        "Percakapan keluarga di rumah.",
        "Upacara adat di daerah tertentu.",
        "Kegiatan perdagangan antarwarga satu kampung."
      ],
      correct: 1
    },
    {
      id: 29, cat: "bhs",
      text: "Undang-Undang Nomor 24 Tahun 2009 mengatur tentang…",
      opts: [
        "Bendera, Bahasa, dan Lambang Negara, serta Lagu Kebangsaan.",
        "Sistem Pendidikan Nasional.",
        "Kepegawaian Aparatur Sipil Negara.",
        "Pemerintahan Daerah.",
        "Keterbukaan Informasi Publik."
      ],
      correct: 0
    },
    {
      id: 30, cat: "bhs",
      text: "Penggunaan bahasa asing dalam acara resmi kenegaraan sebaiknya…",
      opts: [
        "Diutamakan agar terkesan modern.",
        "Dihindari, kecuali untuk istilah yang belum ada padanannya dalam bahasa Indonesia.",
        "Dilarang sepenuhnya dalam segala kondisi.",
        "Diserahkan sepenuhnya kepada pembicara.",
        "Digunakan bergantian tanpa memperhatikan konteks."
      ],
      correct: 1
    }
  ];

  window.LMSExamData = {
    categories: CATEGORIES,
    questions: QUESTIONS,
    config: {
      title: "Simulasi SKD CPNS 2027 · Tryout #1",
      section: "TWK",
      sectionNo: 1,
      sectionCount: 3,
      durationSec: 30 * 60,
      pointsPerCorrect: 5,
      maxScore: QUESTIONS.length * 5
    },
    categoryById: function (id) {
      for (var i = 0; i < CATEGORIES.length; i++) if (CATEGORIES[i].id === id) return CATEGORIES[i];
      return null;
    }
  };
})();
