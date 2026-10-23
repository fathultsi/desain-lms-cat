# Product Review & Design Audit — LMS-CAT Landing Page

**Tanggal:** 24 Oktober 2026
**Objek:** `design/landing-page/index.html` (v2.0, arah “Navy & Gold”)
**Reviewer:** Konsultan produk independen — product discovery, UI/UX, EdTech, CRO
**Sifat:** Audit. Tidak ada perubahan kode yang dilakukan dalam proses ini.

---

## 1. Ringkasan eksekutif

Landing page ini secara **struktur dan komunikasi sudah di atas rata-rata** untuk kategori tryout CPNS. Ia berhasil melakukan tiga hal yang jarang dilakukan kompetitor: menyatakan masalah pengguna lebih dulu daripada daftar fitur, memakai satu diferensiasi yang tajam (analisis penyebab, bukan skor), dan berani menulis bagian “belum cocok kalau kamu…” yang menurunkan salah target.

Namun ada satu temuan yang menaungi seluruh temuan lain: **tidak ada kode aplikasi dalam lingkup yang diperiksa.** Workspace hanya berisi prototipe statis (`design/`), tanpa backend, tanpa basis data, tanpa test. Artinya seluruh klaim fungsional — analisis per butir, jejak waktu, riwayat progres, rekomendasi otomatis — berstatus **belum terverifikasi**, bukan “tidak ada”. Halaman ini belum boleh dipublikasikan sebagai produk yang berfungsi; ia masih layak dipakai sebagai *design prototype* dan materi internal.

Tiga risiko terbesar bila dipublikasikan hari ini:

1. **Klaim fungsional tanpa bukti implementasi** (P0) — risiko kepercayaan dan, bila ada pembayaran, risiko konsumen.
2. **“Paling dipilih” pada paket Intensif** (P0) — klaim popularitas pada produk yang belum punya pengguna.
3. **Angka contoh yang tidak konsisten secara aritmetika** (P1) — khususnya skor TIU 112 yang mustahil di bawah aturan 5 poin/soal. Justru audiens target (peserta SKD) yang paling cepat menemukannya.

Yang sudah benar dan perlu dipertahankan: penandaan “Data ilustratif”, notice placeholder harga, penolakan terhadap testimoni palsu, konsistensi 110 soal / 94 menit, serta kualitas implementasi mobile pada antarmuka ujian.

**Putusan:** *Belum siap publikasi.* Layak masuk tahap “closed beta” setelah P0 dan P1 ditutup.

---

## 2. Ruang lingkup dan keterbatasan pemeriksaan

### Yang diperiksa

| Objek | Metode |
|---|---|
| `design/landing-page/index.html` (1.010 baris) | Baca kode menyeluruh, inventarisasi section, ekstraksi klaim |
| `design/login/`, `design/register/`, `design/exam-interface/` | Baca kode untuk menilai konsistensi sistem dan klaim |
| `design/assets/tokens.css`, `base.css` | Verifikasi token, kontras, aturan tipografi |
| `design/design-spec.md`, `design-system.md`, `user-flow.md` | Pembanding antara klaim dokumen dan implementasi |
| Render visual | Chromium headless, viewport 1440×900 dan 390×844, halaman lokal + situs live GitHub Pages |
| Aritmetika angka | Perhitungan ulang manual seluruh angka yang tampil |

### Yang TIDAK dilakukan — dan karena itu tidak diklaim

- **Tidak ada pengujian fungsional aplikasi**, karena tidak ada aplikasi yang dapat dijalankan di lingkup ini.
- **Tidak ada usability testing dengan pengguna nyata.** Semua temuan UX berasal dari inspeksi heuristik dan render visual, bukan dari perilaku pengguna terukur.
- **Tidak ada pengukuran konversi.** Tidak ada analytics terpasang (`grep` untuk `gtag|analytics|pixel|fbq` → nol hasil), sehingga setiap pernyataan tentang konversi di laporan ini adalah **hipotesis yang dapat diuji**, bukan hasil.
- **Tidak ada pengujian pembaca layar nyata** (NVDA/TalkBack). Temuan aksesibilitas berasal dari analisis kode dan rasio kontras terhitung.
- **Tidak ada akses ke repositori aplikasi.** Bila aplikasi LMS-CAT ada di repositori lain, temuan P0-01 perlu diverifikasi ulang di sana.

### Batasan struktural yang memengaruhi bobot temuan

Landing page adalah **prototipe desain**. Beberapa “cacat” di bawah (mis. harga placeholder) adalah keputusan sadar yang sudah didokumentasikan, bukan kelalaian. Laporan ini membedakan keduanya secara eksplisit pada kolom *Status verifikasi*.

---

## 3. Inventarisasi section yang ditemukan

Terdapat **11 section** di dalam `<main>`, ditambah topbar, header, dan footer — total 14 blok. Semua tersedia; tidak ada yang diasumsikan.

| # | Section | `id` | Baris | Latar |
|---|---|---|---|---|
| 0a | Topbar pengumuman | — | 408 | navy-950 |
| 0b | Header (sticky) | — | 416 | navy-900 |
| 1 | Hero + kartu hasil | `atas` | 417 | navy + glow |
| 2 | Masalah | `masalah` | 464 | cream |
| 3 | Solusi + mock laporan | `solusi` | 506 | putih |
| 4 | Fitur | `fitur` | 552 | navy |
| 5 | Contoh analisis (3 tab) | `analisis` | 588 | cream |
| 6 | Untuk siapa | `untuk-siapa` | 755 | putih |
| 7 | Cara kerja | `cara-kerja` | 788 | cream |
| 8 | Program | `program` | 808 | putih |
| 9 | Paket | `paket` | 846 | cream |
| 10 | FAQ | `faq` | 906 | putih |
| 11 | CTA penutup | — | 943 | navy |
| 12 | Footer | — | 962 | navy-950 |
| 13 | Floating CTA (mobile) | `fcta` | 986 | navy |

Elemen interaktif yang ditemukan: menu mobile (burger), 5 tautan anchor, 3 tab analisis, 6 accordion FAQ, floating CTA, dan 6 tombol menuju `/register` atau `/login`.

---

## 4. Evaluasi per section

Format ringkas: tujuan → kontribusi positioning → kelemahan → keputusan.

### 4.1 Topbar

- **Tujuan:** menandai produk hidup dan mengarahkan perhatian.
- **Kontribusi:** rendah, tapi menambah kesan “produk berjalan”.
- **Kelemahan:** kalimat “Analisis materi & jejak waktu tersedia di setiap simulasi” memakai kata **“tersedia”** — klaim ketersediaan yang belum terbukti (lihat P0-01). Titik emas berdenyut adalah satu-satunya animasi di atas lipatan; biayanya kecil, manfaatnya kecil.
- **Keputusan: revisi** — ganti “tersedia” menjadi frasa yang tidak mengklaim implementasi, atau hapus topbar sampai fitur terbukti. Section ini bukan penentu keputusan.

### 4.2 Header

- **Tujuan:** orientasi + akses konversi.
- **Kontribusi:** tinggi — “Daftar” emas selalu terlihat.
- **Kelemahan:** item menu **“Masalah”** bukan tujuan navigasi yang dicari pengguna (pengguna mencari “Fitur”, “Harga”, “Cara kerja”). Lima tautan + dua tombol pada 1024–1100px berpotensi sesak.
- **Keputusan: revisi** — ganti “Masalah” dengan “Harga” atau hapus; pertahankan empat tautan lain.

### 4.3 Hero

- **Tujuan:** menyatakan masalah + janji + bukti visual.
- **Kontribusi:** **tertinggi di halaman.** Headline “Nilai tryout mandek. Bukan karena kurang soal.” langsung menyerang asumsi umum dan membedakan produk dalam satu kalimat.
- **Kekuatan:** CTA ganda (aksi + bukti), baris trust berisi kapabilitas (bukan klaim sosial), kartu hasil yang menampilkan angka nyata alih-alih ilustrasi.
- **Kelemahan:** (a) klaim “Mulai Tryout Gratis” mengandaikan tersedianya percobaan gratis — keputusan bisnis yang belum tercatat; (b) kartu hasil memakai `role="img"` sehingga seluruh isinya tidak terbaca pembaca layar (P2-05); (c) tiga chip materi di kartu (TIU: deret angka, silogisme) sementara skor yang ditampilkan mencakup tiga bagian — hubungan “materi terlemah” ke “skor” tidak dijelaskan.
- **Keputusan: pertahankan, revisi minor.**

### 4.4 Masalah

- **Tujuan:** empati + kualifikasi masalah.
- **Kontribusi:** tinggi — membuat pengguna merasa “ini saya”.
- **Kelemahan:** tiga kartu menutupi 3 dari 5 keluhan yang didokumentasikan di `design-spec.md`; dua lainnya (bingung prioritas, tidak tahu progres) dipadatkan jadi satu kutipan. Tidak ada kelemahan serius.
- **Keputusan: pertahankan.**

### 4.5 Solusi

- **Tujuan:** mengubah keluhan menjadi kerangka solusi.
- **Kontribusi:** tinggi — “Bukan tryout biasa. Ini laporan diagnostik.” adalah kalimat positioning terbaik di halaman setelah headline.
- **Kelemahan:** mock laporan di kanan menampilkan 3 bar (TWK/TIU/TKP) tanpa label “data ilustratif” — satu-satunya blok angka di halaman yang **tidak** diberi penanda, meski angkanya identik dengan kartu hero yang diberi penanda.
- **Keputusan: revisi** — tambahkan penanda yang sama.

### 4.6 Fitur (navy)

- **Tujuan:** tiga pembeda.
- **Kontribusi:** tinggi, tapi **redundan dengan section 3 dan 5**. Section 3 menyebut tiga pilar (peta materi, jejak waktu, rencana latihan); section 4 mengulang tiga hal yang sama dengan kalimat berbeda; section 5 memperlihatkannya lagi.
- **Kelemahan:** pengulangan tiga kali berturut-turut melemahkan, bukan menguatkan — pembaca merasa sudah paham sebelum melihat bukti.
- **Keputusan: gabungkan.** Hapus section 4 sebagai section mandiri; jadikan tiga kartunya sebagai isi section 3 (solusi), lalu langsung menuju bukti di section 5. Ini memendekkan halaman ±1 layar tanpa kehilangan informasi.

### 4.7 Contoh analisis

- **Tujuan:** bukti produk (menggantikan testimoni).
- **Kontribusi:** **tertinggi kedua.** Ini yang membedakan LMS-CAT dari halaman jualan biasa.
- **Kelemahan:** (a) panel berlabel “Peta penguasaan · 110 soal” hanya menampilkan 5 kategori TWK — label menjanjikan seluruh ujian, isi hanya satu bagian (P1-03); (b) heatmap “Sebaran jawaban per butir” berisi 65 sel untuk 110 soal (P2-01); (c) angka TIU tidak konsisten (P1-01, P1-02).
- **Keputusan: pertahankan, perbaiki data.** Section ini adalah aset terbesar halaman; jangan dikurangi.

### 4.8 Untuk siapa

- **Tujuan:** kualifikasi dua arah.
- **Kontribusi:** tinggi untuk kepercayaan — mengakui siapa yang **tidak** cocok adalah sinyal kejujuran yang jarang.
- **Kelemahan:** tidak ada. Ini section paling “murah” dengan dampak kepercayaan tertinggi.
- **Keputusan: pertahankan.**

### 4.9 Cara kerja

- **Tujuan:** menjelaskan siklus.
- **Kontribusi:** sedang. Enam langkah adalah informasi yang dicari pengguna sebelum mendaftar.
- **Kelemahan:** langkah 4–6 (“Lihat analisis”, “Pelajari rekomendasi”, “Latihan & evaluasi”) mengulang janji section 5 tanpa menambah pemahaman baru.
- **Keputusan: revisi** — padatkan menjadi 4 langkah (Daftar → Kerjakan → Lihat analisis → Latihan ulang), atau pindahkan ke posisi setelah bukti.

### 4.10 Program

- **Tujuan:** menunjukkan fokus dan roadmap.
- **Kontribusi:** sedang — menjawab “apakah ini relevan untuk saya?”.
- **Kelemahan:** dua kartu “Disiapkan” menempati ruang visual setara dengan satu kartu aktif, padahal keduanya belum bisa dipakai. Berpotensi menimbulkan pertanyaan “jadi yang bisa dipakai apa?”.
- **Keputusan: revisi** — kecilkan dua kartu nonaktif atau ubah menjadi satu baris catatan roadmap.

### 4.11 Paket

- **Tujuan:** menyiapkan monetisasi.
- **Kontribusi:** belum dapat dinilai — tanpa harga, section ini tidak dapat menggerakkan keputusan.
- **Kelemahan:** tiga temuan sekaligus: “Gratis” + “Rp [—]” dalam satu kartu (P1-05), “Paling dipilih” tanpa pengguna (P0-02), dan seluruh tier memakai `[—]`.
- **Keputusan: revisi sebelum publikasi.** Struktur komponennya sudah benar dan siap diisi.

### 4.12 FAQ

- **Tujuan:** menghapus keraguan terakhir.
- **Kontribusi:** sedang-tinggi.
- **Kelemahan:** enam pertanyaan menjawab “apa” dan “bagaimana”, tetapi **tidak satu pun** menjawab keberatan komersial: berapa harganya, berapa lama aksesnya, apakah bisa dari HP, apa yang terjadi setelah mendaftar, apakah ada percobaan gratis. Untuk halaman yang menjual, ini celah besar (P2-04).
- **Keputusan: revisi** — tambah 3–4 pertanyaan komersial setelah harga ditetapkan.

### 4.13 CTA penutup & Footer

- **Kontribusi:** CTA penutup kuat secara retoris (“Satu tryout lagi tidak akan mengubah apa pun”).
- **Kelemahan:** micro-copy “Tanpa data pembayaran untuk mencoba” adalah **janji kebijakan** yang belum ada dasarnya (P1-06). Footer memuat tautan mati (`#`) untuk Pusat Bantuan, Hubungi Kami, Kebijakan Privasi, dan Syarat & Ketentuan — empat tautan legal yang belum ada isinya. Untuk produk yang akan meminta data pribadi, ini masalah kepatuhan, bukan estetika (P1-07).
- **Keputusan: revisi.**

### 4.14 Floating CTA (mobile)

- **Kontribusi:** tinggi di mobile.
- **Kelemahan:** muncul pada `scrollY > 560`; pada layar 390×844 ia menutupi bagian bawah konten selama scroll panjang. Sudah dikompensasi `padding-bottom:104px` pada footer, jadi tidak menutupi konten permanen.
- **Keputusan: pertahankan.**

---

## 5. Matriks klaim pemasaran dan bukti implementasi

| # | Klaim di halaman | Lokasi | Bukti yang tersedia | Status |
|---|---|---|---|---|
| K1 | “Analisis per butir soal” | trust hero | Tidak ada kode aplikasi; hanya panel statis | **Belum terverifikasi** |
| K2 | “Jejak waktu per soal” | trust hero, fitur | Tidak ada pencatatan waktu; hanya grafik statis | **Belum terverifikasi** |
| K3 | “Riwayat progres” | trust hero, FAQ | Tidak ada penyimpanan; tidak ada model data | **Belum terverifikasi** |
| K4 | “Rekomendasi latihan berurutan” | fitur, tab strategi | Teks statis; tidak ada mesin rekomendasi | **Belum terverifikasi** |
| K5 | “Peta penguasaan per kategori” | tab materi | Statis, dan tidak konsisten (P1-03) | **Tidak konsisten** |
| K6 | “Timer sesuai aturan ujian” | fitur | Timer prototipe berjalan; aturan ujian tidak dapat diperiksa | **Belum terverifikasi** |
| K7 | “Simulasi penuh tiga bagian” | program | UI menampilkan 3 bagian, hanya TWK dapat diakses | **Belum terverifikasi** |
| K8 | “Analisis materi & jejak waktu **tersedia**” | topbar | Sama dengan K1/K2 | **Tidak konsisten** (klaim ketersediaan) |
| K9 | “Mulai Tryout Gratis” / “Daftar Gratis” | hero, CTA | Keputusan bisnis belum tercatat | **Belum terverifikasi** |
| K10 | “Tanpa data pembayaran untuk mencoba” | CTA penutup | Kebijakan belum ada | **Belum terverifikasi** |
| K11 | “Paling dipilih” | paket Intensif | Tidak ada pengguna; tidak ada data | **Tidak konsisten** (klaim sosial) |
| K12 | “Data ilustratif” pada kartu hero | hero | Benar — angka memang contoh | **Terverifikasi** (positif) |
| K13 | “Semua angka di bawah adalah data ilustratif” | tab analisis | Benar untuk section itu | **Terverifikasi** (positif) |
| K14 | “Analisis bersifat diagnostik, bukan prediksi kelulusan” | tab materi | Benar dan penting | **Terverifikasi** (positif) |
| K15 | “Belum tersedia” untuk sekolah kedinasan | FAQ | Konsisten dengan kartu program | **Terverifikasi** (positif) |

**Pola:** tiga klaim positif (K12–K14) menunjukkan tim sudah punya kebiasaan pelabelan yang baik. Masalahnya bukan niat, melainkan **kata kerja**: “tersedia”, “paling dipilih”, “gratis” menyatakan fakta, sementara yang dimiliki saat ini baru rancangan.

---

## 6. Hasil audit konsistensi angka

Semua angka dihitung ulang dari kode. Asumsi yang dipakai: aturan skor SKD yang umum (TWK 30×5=150, TIU 35×5=175, TKP 45×(1–5)=225, total 550).

### 6.1 Yang konsisten ✅

| Pemeriksaan | Hasil |
|---|---|
| Total skor 95 + 112 + 205 | **412** ✓ sesuai kartu hero |
| Jumlah soal 30 + 35 + 45 | **110** ✓ sesuai label panel |
| Waktu 21 + 41 + 32 menit | **94** ✓ sesuai “Total 94 menit” dan sisa 6 menit |
| TIU 41 menit ÷ 35 soal | **70,3 detik** ✓ sesuai narasi “70 detik per soal” |
| Soal 3:12 + 3:41 | **6 menit 53 detik = 6,9 menit** ✓ |
| Bar TKP 205/225 | **91,1%** ✓ sesuai lebar 91% |
| Bar TWK 95/150 | **63,3%** ✓ sesuai lebar 63% |
| Bar TIU 112/175 | **64,0%** ✓ sesuai lebar 64% |
| Prioritas 45 + 30 soal | **75 soal** ✓ sesuai “Minggu 1 · 75 soal” |
| Timer ujian 01:32:47 + “terpakai 07:13” | **100 menit** ✓ konsisten |

Konsistensi ini bukan kebetulan kecil — ini menunjukkan angka contoh dibangun dari satu skenario, bukan ditempel acak. Pertahankan pendekatan ini.

### 6.2 Yang tidak konsisten ❌

**(a) Skor TIU 112 mustahil.** TIU bernilai 5 poin per jawaban benar; 112 ÷ 5 = **22,4 soal** — bukan bilangan bulat. Di bawah aturan resmi, skor TIU hanya bisa kelipatan 5 (110 atau 115). Pembaca target — peserta SKD — akan menghitung ini dalam beberapa detik.

**(b) “7 dari 9 kesalahan TIU” bertentangan dengan skor.** 35 − 9 = 26 benar → 26 × 5 = **130 poin**, bukan 112. Jika skornya 112, jumlah salah seharusnya 12–13 soal.

**(c) Rata-rata penguasaan TWK tidak menjumlah ke skor.** Lima kategori TWK: 88, 84, 71, 52, 47 → rata-rata **68,4%**. Skor 95/150 menyiratkan **63,3%** (19 dari 30 benar). Selisih ~5 poin persentase setara ~1,5 soal.

**(d) Heatmap “per butir” berisi 65 sel untuk 110 soal.** 65 sel tidak dapat merepresentasikan 110 butir. Label “Sebaran jawaban per butir” tidak akurat.

**(e) Label panel vs isi.** “Peta penguasaan · 110 soal” hanya menampilkan 5 kategori TWK (yang totalnya 30 soal).

### 6.3 Rekomendasi perbaikan data (tanpa mengubah daya tarik visual)

Gunakan satu skenario yang konsisten dan bulat:

| Komponen | Nilai usulan | Alasan |
|---|---|---|
| TWK | **95** (19/30) | sudah bulat |
| TIU | **110** (22/35) | kelipatan 5; mengubah 112 → 110 |
| TKP | **205** | sudah valid |
| Total | **410** | 95+110+205 |
| Salah TIU | **13 soal** (bukan 9) | konsisten dengan 110 |
| Rata-rata penguasaan TWK | **63%** (bukan 68,4%) | sesuaikan 5 kategori agar berbobot 63 |
| Heatmap | **110 sel** (22×5) | sesuai jumlah soal |

---

## 7. Temuan UI/UX dan responsivitas

Metode: render Chromium headless pada 1440×900 dan 390×844, halaman lokal dan situs live. **Bukan** usability testing.

### 7.1 Yang berfungsi baik

- **Hierarki hero** kuat: eyebrow → H1 dua baris → subjudul → CTA → trust. Mata bergerak turun tanpa hambatan.
- **Mobile:** menu burger, CTA penuh, floating CTA, dan kartu hasil bertumpuk rapi di 390px. Tidak ada horizontal scroll.
- **Antarmuka ujian** adalah bagian terbaik dari seluruh paket: timer tetap di tengah, navigator bottom sheet, target sentuh 46–58px, dan pintasan keyboard (`1–5`, `← →`, `F`).
- **`prefers-reduced-motion`** dihormati; tidak ada animasi yang memblokir interaksi.
- **Kontras teks utama** aman: `#0D1B2A` di putih 16,1:1; `#48596B` di putih 7,4:1.

### 7.2 Temuan

**A11Y-01 — Teks muted di bawah ambang kontras.**
`--muted` = `#7A8B9C` pada putih = **3,9:1** (gagal AA untuk teks <18,66px bold). Dipakai pada ukuran 9,5–13,5px di: `.stat span` (10px), `.axis` (10px), `.pcard__foot` (11px), `.tier__note` (11px), `.heat__lg` (11px), `.plan__s` (11,5px), `.side__count` (11px), `.sstat span` (9,5px), `.modal__stat span` (9,5px). Dokumen `design-system.md` sendiri menyatakan `--muted` hanya untuk “≥14px bold / ikon” — jadi ini pelanggaran terhadap aturan internal, bukan sekadar selera. **P2.**

**A11Y-02 — Data hero tidak terbaca pembaca layar.**
`.rcard` memakai `role="img"` + `aria-label` ringkas (baris 437). Konsekuensinya seluruh isi kartu (412, 95, 112, 205, 94) dibacakan sebagai satu label, bukan sebagai data terstruktur. Untuk produk yang menjual data, ini kehilangan makna. **P2.**

**A11Y-03 — Target sentuh 42px.**
`.input-action` (tombol tampil sandi) 42×42px, di bawah 44px. **P3.**

**UX-01 — Item navigasi “Masalah”.**
Bukan tujuan yang dicari pengguna saat memindai menu. **P2.**

**UX-02 — Tiga section berurutan menyampaikan hal yang sama.**
Solusi (3 pilar) → Fitur (3 kartu) → Contoh analisis (3 tab). Pembaca melihat janji yang sama tiga kali sebelum melihat bukti. **P2.**

**UX-03 — FAQ tidak menjawab keberatan komersial.**
Tidak ada pertanyaan tentang harga, durasi akses, perangkat, atau cara pembayaran. **P2.**

**UX-04 — Dua tautan legal mati di footer** (`#`). Untuk produk yang meminta email dan kata sandi, ini masalah kepatuhan. **P1.**

### 7.3 Yang belum dapat dinilai

Kualitas *copy* mikro pada state error/loading, performa nyata (LCP/CLS), dan perilaku pada perangkat low-end — tidak diukur dalam audit ini.

---

## 8. Temuan strategi produk dan konversi

### 8.1 Kekuatan strategi

1. **Diferensiasi tajam.** “Bukan skor, tapi penyebab” adalah posisi yang bisa dipertahankan dan sulit ditiru cepat.
2. **Kualifikasi jujur.** Bagian “Untuk siapa” menurunkan biaya akuisisi buruk (pengguna salah target) — dampaknya ke retensi lebih besar daripada ke konversi.
3. **Bukti menggantikan testimoni.** Mengganti testimoni palsu dengan contoh analisis adalah keputusan yang benar secara etis maupun strategis: produk yang menjual analisis seharusnya mendemonstrasikan analisis.

### 8.2 Celah konversi (hipotesis, bukan klaim)

| Celah | Mengapa berpotensi menahan | Cara menguji |
|---|---|---|
| Harga tidak ada di halaman | Pengguna tidak bisa menilai keterjangkauan; mereka keluar untuk mencari, lalu tidak kembali | Uji dua varian: harga tampil vs “lihat paket”; ukur klik CTA paket |
| Tidak ada bukti sosial sah | Kategori ini sangat dipengaruhi rekomendasi teman/grup Telegram | Uji kredensial penyusun soal, jumlah soal terverifikasi, atau sampel laporan PDF |
| Tidak ada jalur untuk yang belum siap daftar | 100% trafik dingin dipaksa memilih daftar atau pergi | Uji penangkapan email (“contoh laporan PDF”) |
| Tidak ada OG/Twitter Card | Link yang dibagikan di WhatsApp tampil tanpa judul/gambar | Periksa pratinjau link sebelum kampanye |
| Tidak ada analytics | Tidak ada dasar untuk menyimpulkan apa pun tentang konversi | Pasang pengukuran sebelum uji apa pun |

**Penting:** kelima baris di atas adalah **hipotesis**. Tidak ada data yang mendukung klaim bahwa perbaikan tertentu akan menaikkan konversi sekian persen.

---

## 9. Daftar masalah berdasarkan prioritas

### P0 — Kritis

---

**ID temuan:** P0-01
**Lokasi:** Seluruh landing page; terutama trust hero (baris 431–433), section `#fitur` (552–586), `#analisis` (588–753), topbar (408–412)
**Status verifikasi:** Belum terverifikasi
**Kondisi saat ini:** Halaman menyatakan kapabilitas analisis sebagai fakta. Dalam lingkup yang diperiksa tidak ditemukan kode aplikasi, backend, model data, maupun test.
**Bukti:** `find` pada workspace hanya menghasilkan `design/` (HTML/CSS/woff2/MD). Tidak ada `package.json`, `.js`, `.py`, `.sql`, atau direktori server. Tidak ada berkas test.
**Dampak:** Bila dipublikasikan, pengguna mendaftar dengan ekspektasi yang belum tentu terpenuhi → churn, keluhan, dan risiko konsumen bila ada pembayaran. Bagi bisnis: kredibilitas sulit dipulihkan.
**Rekomendasi:** Jangan publikasikan sebagai produk berfungsi. Petakan setiap klaim (K1–K7) ke fitur yang benar-benar ada; bila belum ada, ubah kata kerja menjadi bentuk rancangan (“dirancang untuk”, “sedang dikembangkan”) atau tahan halaman. Bila aplikasi berada di repositori lain, verifikasi ulang di sana sebelum menutup temuan ini.
**Prioritas:** **P0**

---

**ID temuan:** P0-02
**Lokasi:** `landing-page/index.html:875` — badge pada tier Intensif
**Status verifikasi:** Tidak konsisten
**Kondisi saat ini:** Badge berbunyi **“Paling dipilih”**.
**Bukti:** Tidak ada pengguna, tidak ada data pemilihan paket, dan produk belum diluncurkan. Klaim ini tidak mungkin benar pada saat halaman dibuat.
**Dampak:** Klaim sosial palsu adalah jenis informasi menyesatkan yang paling mudah diperiksa dan paling merusak kepercayaan bila ketahuan.
**Rekomendasi:** Ganti menjadi **“Direkomendasikan”** (pendapat, bukan statistik) atau hapus badge. Bila kelak ada data, baru gunakan “paling banyak dipilih” dengan angka.
**Prioritas:** **P0**

---

### P1 — Tinggi

---

**ID temuan:** P1-01
**Lokasi:** `landing-page/index.html:451` (kartu hero), `:539` (mock laporan), `:639` (insight)
**Status verifikasi:** Tidak konsisten
**Kondisi saat ini:** Skor TIU = **112** dari 175.
**Bukti:** TIU 35 soal × 5 poin = 175. 112 ÷ 5 = **22,4** — bukan bilangan bulat, sehingga mustahil dihasilkan aturan skor SKD.
**Dampak:** Audiens target adalah peserta SKD yang memahami aturan skor. Angka yang mustahil langsung menurunkan kredibilitas seluruh analisis di halaman.
**Rekomendasi:** Ubah 112 → **110** (22 benar) dan total 412 → **410**. Sesuaikan bar (63%) dan mock laporan.
**Prioritas:** **P1**

---

**ID temuan:** P1-02
**Lokasi:** `landing-page/index.html:639` — kartu insight “Pola kesalahan”
**Status verifikasi:** Tidak konsisten
**Kondisi saat ini:** “**7 dari 9** kesalahan TIU…”
**Bukti:** 35 − 9 = 26 benar → 26 × 5 = **130 poin**, bukan 112. Bila skor 110, jumlah salah = **13**.
**Dampak:** Sama seperti P1-01 — narasi dan angka saling membantah dalam satu layar.
**Rekomendasi:** Ubah menjadi “**9 dari 13** kesalahan TIU…” atau sesuaikan skor.
**Prioritas:** **P1**

---

**ID temuan:** P1-03
**Lokasi:** `landing-page/index.html:607` — judul panel tab “Analisis materi”
**Status verifikasi:** Tidak konsisten
**Kondisi saat ini:** Panel berlabel “Peta penguasaan · **110 soal**”, isinya 5 kategori **TWK** saja (30 soal).
**Bukti:** Lima baris: Bahasa negara, Nasionalisme, Integritas, Bela negara, Pilar negara — semuanya kategori TWK.
**Dampak:** Pengguna yang teliti menyimpulkan analisis tidak selengkap yang dijanjikan; mengurangi kepercayaan pada produk yang justru menjual kelengkapan analisis.
**Rekomendasi:** Ubah label menjadi “Peta penguasaan · **TWK (30 soal)**”, atau tambahkan tab per bagian (TWK/TIU/TKP) di dalam panel.
**Prioritas:** **P1**

---

**ID temuan:** P1-04
**Lokasi:** `landing-page/index.html:846–904` — section `#paket`
**Status verifikasi:** Terverifikasi (placeholder disengaja)
**Kondisi saat ini:** Tiga tier, semua harga `Rp [—]`, plus notice kuning yang menjelaskan placeholder.
**Bukti:** Baris 863, 877, 891. Notice di baris 850–854 sudah menjelaskan statusnya.
**Dampak:** Jalur konversi berbayar belum dapat dijalankan maupun diuji. Pengunjung tidak punya cukup informasi untuk memutuskan.
**Rekomendasi:** Isi harga dan fasilitas sebelum publikasi. Struktur komponennya sudah siap — tidak perlu desain ulang.
**Prioritas:** **P1**

---

**ID temuan:** P1-05
**Lokasi:** `landing-page/index.html:861–864` — tier “Latihan”
**Status verifikasi:** Tidak konsisten
**Kondisi saat ini:** Badge **“Gratis”** berdampingan dengan **“Rp [—]/paket”** dan “Harga placeholder” dalam satu kartu.
**Bukti:** Baris 861 (badge), 863 (harga), 864 (catatan).
**Dampak:** Dua pernyataan yang saling meniadakan dalam satu komponen. Pengguna tidak tahu apakah paket ini gratis atau berbayar.
**Rekomendasi:** Putuskan: (a) benar-benar gratis → hapus baris harga, ganti dengan “Tanpa biaya”; atau (b) berbayar → hapus badge “Gratis”.
**Prioritas:** **P1**

---

**ID temuan:** P1-06
**Lokasi:** `landing-page/index.html:949` — micro-copy CTA penutup
**Status verifikasi:** Belum terverifikasi
**Kondisi saat ini:** “**Tanpa data pembayaran untuk mencoba.** Analisis langsung tersedia setelah simulasi selesai.”
**Bukti:** Tidak ada dokumen kebijakan, tidak ada definisi “mencoba”, dan tidak ada tier gratis yang ditetapkan (lihat P1-05).
**Dampak:** Ini janji kebijakan, bukan copy. Bila implementasi berbeda, pengguna berhak merasa ditipu.
**Rekomendasi:** Konfirmasi ke pemilik produk, lalu tulis hanya bila sudah menjadi keputusan resmi.
**Prioritas:** **P1**

---

**ID temuan:** P1-07
**Lokasi:** `landing-page/index.html:968–975` — tautan footer
**Status verifikasi:** Terverifikasi
**Kondisi saat ini:** “Pusat Bantuan”, “Hubungi Kami”, “Kebijakan Privasi”, “Syarat & Ketentuan” semuanya `href="#"`.
**Bukti:** Empat tautan tanpa tujuan.
**Dampak:** Produk meminta email dan kata sandi. Tanpa kebijakan privasi yang dapat dibaca, ada masalah kepatuhan (UU PDP) dan kepercayaan.
**Rekomendasi:** Terbitkan minimal Kebijakan Privasi dan Syarat & Ketentuan sebelum formulir pendaftaran dibuka untuk publik.
**Prioritas:** **P1**

---

**ID temuan:** P1-08
**Lokasi:** `landing-page/index.html:1–10` — `<head>`
**Status verifikasi:** Terverifikasi
**Kondisi saat ini:** Hanya `title`, `description`, `theme-color`. Tidak ada `og:*` maupun `twitter:card`.
**Bukti:** `grep -c "og:"` → **0**.
**Dampak:** Kanal distribusi utama di Indonesia adalah WhatsApp/Telegram. Tanpa OG tag, link tampil sebagai teks polos tanpa judul dan gambar — menurunkan rasio klik berbagi.
**Rekomendasi:** Tambahkan `og:title`, `og:description`, `og:image` (1200×630), `og:url`, dan `twitter:card`.
**Prioritas:** **P1**

---

**ID temuan:** P1-09
**Lokasi:** `landing-page/index.html` — seluruh halaman
**Status verifikasi:** Terverifikasi
**Kondisi saat ini:** Tidak ada instrumentasi analytics.
**Bukti:** `grep -i "gtag|analytics|pixel|fbq"` → nol hasil.
**Dampak:** Tidak ada dasar untuk mengevaluasi konversi, tidak ada data untuk keputusan berikutnya. Setiap uji A/B mustahil diukur.
**Rekomendasi:** Pasang pengukuran minimal (page view, klik CTA per lokasi, submit form) sebelum kampanye apa pun.
**Prioritas:** **P1**

---

### P2 — Menengah

---

**ID temuan:** P2-01
**Lokasi:** `landing-page/index.html:618–629` — heatmap
**Status verifikasi:** Tidak konsisten
**Kondisi saat ini:** Label “Sebaran jawaban **per butir**”, berisi **65 sel**.
**Bukti:** `grep -o 'data-l="[0-9]"' | wc -l` → 65. Jumlah soal 110.
**Dampak:** Visual yang mengklaim per-butir tetapi tidak memetakan 1:1 melemahkan kesan presisi.
**Rekomendasi:** Jadikan 110 sel (22×5) atau ubah label menjadi “Sebaran jawaban per kelompok soal”.
**Prioritas:** **P2**

---

**ID temuan:** P2-02
**Lokasi:** `landing-page/index.html:610–615` — bar penguasaan TWK
**Status verifikasi:** Tidak konsisten
**Kondisi saat ini:** 88 / 84 / 71 / 52 / 47 → rata-rata **68,4%**, sementara skor TWK 95/150 = **63,3%**.
**Bukti:** Perhitungan ulang; selisih ~1,5 soal.
**Dampak:** Pembaca yang menjumlahkan angka menemukan dua kebenaran yang berbeda dalam satu panel.
**Rekomendasi:** Sesuaikan kelima persentase agar berbobot 63% (mis. 82 / 78 / 66 / 48 / 41).
**Prioritas:** **P2**

---

**ID temuan:** P2-03
**Lokasi:** `assets/tokens.css` (`--muted:#7A8B9C`) dipakai di `landing-page:202,217,230,236,244,275,297`; `exam-interface:76,85,123,133,151,177`
**Status verifikasi:** Tidak konsisten (terhadap `design-system.md` sendiri)
**Kondisi saat ini:** Teks 9,5–13,5px memakai `--muted` dengan kontras **3,9:1**.
**Bukti:** Rasio terhitung; aturan di `design-system.md §2.5` menyatakan `--muted` hanya untuk ≥14px bold atau ikon.
**Dampak:** Label kecil (legend, sumbu grafik, catatan tier) sulit dibaca, terutama di layar HP di bawah cahaya terang — konteks pemakaian utama.
**Rekomendasi:** Untuk teks <14px gunakan `--body` (#48596B, 7,4:1) atau gelapkan `--muted` menjadi ±#63707F.
**Prioritas:** **P2**

---

**ID temuan:** P2-04
**Lokasi:** `landing-page/index.html:906–941` — FAQ
**Status verifikasi:** Terverifikasi
**Kondisi saat ini:** Enam pertanyaan, semuanya tentang konsep produk.
**Bukti:** Tidak ada pertanyaan tentang harga, durasi akses, perangkat, atau pembayaran.
**Dampak:** Keberatan komersial tidak terjawab; pengguna harus mendaftar untuk mengetahui hal paling dasar.
**Rekomendasi:** Tambah 3–4 pertanyaan setelah harga ditetapkan: “Berapa harganya?”, “Berapa lama aksesnya?”, “Bisa diakses dari HP?”, “Apa yang terjadi setelah saya mendaftar?”.
**Prioritas:** **P2**

---

**ID temuan:** P2-05
**Lokasi:** `landing-page/index.html:437` — `.rcard`
**Status verifikasi:** Terverifikasi
**Kondisi saat ini:** `role="img"` + `aria-label` ringkas pada kartu berisi 5 angka.
**Bukti:** Atribut pada baris 437.
**Dampak:** Pengguna pembaca layar kehilangan data utama halaman — ironis untuk produk yang menjual data.
**Rekomendasi:** Hapus `role="img"`; jadikan kartu sebagai `<dl>` atau tabel semantik dengan angka sebagai teks.
**Prioritas:** **P2**

---

**ID temuan:** P2-06
**Lokasi:** `landing-page/index.html:420–426` — navigasi header
**Status verifikasi:** Terverifikasi
**Kondisi saat ini:** Item pertama menu adalah “Masalah”.
**Bukti:** Tautan `#masalah`.
**Dampak:** Menu adalah peta isi; “Masalah” bukan tujuan yang dicari pengguna dan memakan satu dari lima slot.
**Rekomendasi:** Ganti dengan “Harga” (tujuan komersial) atau hapus.
**Prioritas:** **P2**

---

**ID temuan:** P2-07
**Lokasi:** `landing-page/index.html:506–550` dan `552–586`
**Status verifikasi:** Terverifikasi
**Kondisi saat ini:** Section “Solusi” (3 pilar) dan “Fitur” (3 kartu) menyampaikan tiga hal yang identik.
**Bukti:** Pilar 01–03 = kartu 1–3 (peta materi, jejak waktu, rencana latihan).
**Dampak:** Pengulangan menambah panjang ±1 layar tanpa informasi baru; pengguna melihat bukti lebih lambat.
**Rekomendasi:** Gabungkan — jadikan tiga kartu fitur sebagai isi section solusi, hapus section fitur mandiri.
**Prioritas:** **P2**

---

**ID temuan:** P2-08
**Lokasi:** `landing-page/index.html:535–542` — mock laporan pada section solusi
**Status verifikasi:** Tidak konsisten
**Kondisi saat ini:** Menampilkan 412 / 95 / 112 / 205 **tanpa** penanda “data ilustratif”, padahal kartu hero dengan angka sama diberi penanda.
**Bukti:** Baris 437 punya badge; baris 535–542 tidak.
**Dampak:** Inkonsistensi pelabelan melemahkan justifikasi etis yang sudah dibangun di hero.
**Rekomendasi:** Tambahkan penanda yang sama.
**Prioritas:** **P2**

---

### P3 — Rendah

---

**ID temuan:** P3-01
**Lokasi:** `design/directions/index.html` (live di `/directions/`)
**Status verifikasi:** Terverifikasi
**Kondisi saat ini:** Halaman arsip eksplorasi masih publik dan berisi bagian “Rekomendasi saya: **A — Midnight Instrument**”, sementara produk sekarang memakai **D**.
**Bukti:** Bagian `.pick` pada halaman directions.
**Dampak:** Siapa pun yang menemukan URL ini (tidak ditautkan, tetapi dapat diakses) melihat rekomendasi yang bertentangan dengan keputusan final.
**Rekomendasi:** Tambahkan banner “Arsip — arah D yang dipilih” atau hapus dari publikasi.
**Prioritas:** **P3**

---

**ID temuan:** P3-02
**Lokasi:** `login/index.html` (`.vcard`), `register/index.html` (panel manfaat)
**Status verifikasi:** Terverifikasi
**Kondisi saat ini:** Menampilkan “Progres · 4 simulasi”, “+38”, 95/112/205 tanpa label ilustratif.
**Bukti:** Panel `aria-hidden="true"` (dekoratif), tetapi tetap terlihat secara visual.
**Dampak:** Angka yang sama dengan halaman utama muncul tanpa penanda; pembaca yang teliti bisa menganggapnya data nyata.
**Rekomendasi:** Tambahkan “Contoh” kecil pada kartu, atau ganti dengan ilustrasi non-angka.
**Prioritas:** **P3**

---

**ID temuan:** P3-03
**Lokasi:** `assets/base.css` — `.input-action`
**Status verifikasi:** Terverifikasi
**Kondisi saat ini:** 42×42px.
**Bukti:** Deklarasi `width:42px;height:42px`.
**Dampak:** Di bawah target sentuh 44px; menyulitkan di layar kecil.
**Rekomendasi:** 44×44px.
**Prioritas:** **P3**

---

**ID temuan:** P3-04
**Lokasi:** `exam-interface/index.html` — `.qcard__head .badge--outline`
**Status verifikasi:** Terverifikasi
**Kondisi saat ini:** Badge “Konten contoh” disembunyikan pada ≤520px.
**Bukti:** `@media (max-width:520px){ .qcard__head .badge--outline{display:none} }`.
**Dampak:** Penanda kejujuran justru hilang di perangkat yang paling banyak dipakai.
**Rekomendasi:** Pindahkan penanda ke bawah teks soal, jangan disembunyikan.
**Prioritas:** **P3**

---

## 10. Rekomendasi struktur landing page

Urutan usulan — **lebih pendek, bukan lebih panjang**. Tidak ada section baru.

| Usulan | Section | Perubahan dari sekarang |
|---|---|---|
| 1 | Header + hero | Pertahankan; perbaiki angka (P1-01/02) |
| 2 | Masalah | Pertahankan |
| 3 | **Solusi + 3 kartu fitur** | **Gabungkan** section solusi dan fitur (P2-07) |
| 4 | Contoh analisis | Pertahankan; perbaiki label + heatmap (P1-03, P2-01) |
| 5 | Untuk siapa | Pertahankan — jangan dipindah ke bawah |
| 6 | Cara kerja | **Padatkan** 6 → 4 langkah |
| 7 | Program | **Kecilkan** dua kartu nonaktif |
| 8 | Paket | Isi harga (P1-04), hapus “Paling dipilih” (P0-02), selesaikan “Gratis” (P1-05) |
| 9 | FAQ | Tambah 3–4 pertanyaan komersial (P2-04) |
| 10 | CTA penutup | Hapus janji kebijakan yang belum ada (P1-06) |
| 11 | Footer | Isi tautan legal (P1-07) |

**Dihapus:** section “Fitur” sebagai section mandiri (digabung), topbar (bila klaim belum bisa diverifikasi).
**Tidak ditambahkan:** testimoni, garansi, hitungan pengguna — sampai ada data sah.

---

## 11. Keputusan yang memerlukan persetujuan pemilik produk

| # | Keputusan | Mengapa harus pemilik | Dampak bila ditunda |
|---|---|---|---|
| D1 | Apakah aplikasi sudah mengimplementasikan analisis per butir, jejak waktu, dan riwayat progres? | Hanya pemilik yang tahu status repositori aplikasi | P0-01 tidak bisa ditutup; publikasi tertahan |
| D2 | Apakah ada paket gratis? Berapa batasnya? | Keputusan bisnis, bukan desain | P1-05 dan P1-06 menggantung |
| D3 | Harga final tiga paket + fasilitasnya | Keputusan komersial | Section paket tidak dapat diluncurkan |
| D4 | Model skor yang dipakai (5 poin/soal atau lain) | Menentukan validitas seluruh contoh angka | P1-01/P1-02 tidak bisa diperbaiki dengan benar |
| D5 | Bolehkah menampilkan bukti pihak ketiga (kredensial penyusun, sampel laporan)? | Menyangkut klaim dan legal | Celah kepercayaan tetap terbuka |
| D6 | Siapa yang menandatangani “siap publikasi”? | Akuntabilitas | Risiko rilis tanpa penanggung jawab |

---

## 12. Checklist kesiapan publikasi

| # | Item | Status | Catatan |
|---|---|---|---|
| 1 | Semua klaim fungsional terpetakan ke fitur yang ada | ❌ | P0-01 |
| 2 | Tidak ada klaim sosial tanpa data | ❌ | P0-02 |
| 3 | Angka contoh konsisten secara aritmetika | ❌ | P1-01, P1-02, P2-01, P2-02 |
| 4 | Harga dan fasilitas final terisi | ❌ | P1-04 |
| 5 | Kebijakan Privasi & Syarat terbit | ❌ | P1-07 |
| 6 | OG/Twitter Card terpasang | ❌ | P1-08 |
| 7 | Analytics terpasang & terverifikasi | ❌ | P1-09 |
| 8 | Kontras teks kecil ≥4.5:1 | ❌ | P2-03 |
| 9 | Uji fungsional form daftar → akun aktif | ⚠️ | Tidak dapat diuji (tidak ada backend) |
| 10 | Uji ujian end-to-end (timer, autosave, submit) | ⚠️ | Tidak dapat diuji |
| 11 | Render desktop & mobile tanpa cacat layout | ✅ | Diperiksa 1440×900 & 390×844 |
| 12 | Penandaan data ilustratif konsisten | ⚠️ | Sebagian; P2-08, P3-02 |
| 13 | Tidak ada testimoni/klaim kelulusan palsu | ✅ | Tidak ditemukan |
| 14 | Navigasi keyboard pada ujian berfungsi | ✅ | `1–5`, `← →`, `F` terpasang |
| 15 | `prefers-reduced-motion` dihormati | ✅ | Terpasang |

**Skor kesiapan: 4 ✅ · 2 ⚠️ · 9 ❌ — belum siap publikasi.**

---

## Lampiran A — Hal yang sebaiknya tidak diubah

Kritik di atas mudah membuat tim melakukan redesign. Jangan. Yang berikut sudah benar dan berisiko rusak bila diubah:

1. **Headline hero.** “Nilai tryout mandek. Bukan karena kurang soal.” menyatakan masalah, membantah asumsi umum, dan membedakan produk dalam 9 kata.
2. **Bagian “Untuk siapa”.** Mengakui siapa yang tidak cocok adalah pembeda kepercayaan yang murah dan langka.
3. **Penandaan “Data ilustratif”.** Pertahankan dan perluas (P2-08), jangan dihapus saat angka asli masuk.
4. **Penggantian testimoni dengan bukti produk.** Ini keputusan strategis yang benar.
5. **Antarmuka ujian.** Timer di tengah, navigator bottom sheet, target sentuh besar, pintasan keyboard — jangan disederhanakan.

---

## Lampiran B — Urutan eksekusi yang disarankan

1. **Minggu 1 — tutup P0.** Verifikasi status implementasi (D1). Ganti “Paling dipilih”. Petakan klaim.
2. **Minggu 1 — perbaiki data.** Terapkan skenario angka konsisten (§6.3). Ini pekerjaan beberapa jam dan langsung menaikkan kredibilitas.
3. **Minggu 2 — infrastruktur.** OG tag, analytics, tautan legal.
4. **Minggu 2 — keputusan bisnis.** Harga (D3), paket gratis (D2).
5. **Minggu 3 — pengayaan bukti.** Sampel laporan PDF, kredensial penyusun (D5).
6. **Minggu 3 — aksesibilitas.** Kontras teks kecil, `role="img"`, target sentuh.
7. **Sebelum rilis.** Checklist §12 harus ≥13 ✅.

---

*Laporan ini tidak mengubah kode apa pun. Perubahan menunggu persetujuan pemilik produk.*
