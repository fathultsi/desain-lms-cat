# LMS-CAT — Design Specification v1.0

Dokumen serah-terima desain untuk AI agent programmer. Fokus: **antarmuka**, bukan backend.
Empat halaman: Landing, Masuk, Daftar, Antarmuka Ujian CAT.

- Design system: [`design-system.md`](./design-system.md)
- Alur pengguna: [`user-flow.md`](./user-flow.md)
- Prototipe: `landing-page/index.html`, `login/index.html`, `register/index.html`, `exam-interface/index.html`

---

## 1. Tujuan produk

LMS-CAT adalah platform tryout berbasis **Computer Assisted Test (CAT)** yang menjual satu hal:
**pemahaman atas penyebab skor**, bukan jumlah soal.

| Tujuan bisnis | Terjemahan ke desain |
|---|---|
| Konversi pengunjung → akun | CTA “Daftar” selalu terlihat, hero menyatakan masalah nyata, hambatan daftar 4 kolom |
| Diferensiasi vs tryout lain | Analisis materi + jejak waktu ditampilkan sebagai produk nyata (UI asli, bukan ilustrasi) |
| Kesiapan monetisasi | Komponen paket sudah ada dengan placeholder harga yang jelas |
| Ekspansi program | Struktur kartu program siap menampung sekolah kedinasan & seleksi lain |
| Kepercayaan | Tanpa testimoni palsu, tanpa angka pengguna, tanpa janji kelulusan |

**Non-goals tahap ini:** dashboard penuh, halaman pembayaran, halaman hasil tryout lengkap, verifikasi email, login sosial.

---

## 2. Target pengguna

### Persona utama — “Rani, 22”
- Lulusan D3/S1, sedang mempersiapkan SKD CPNS 2027, mengakses 80% dari smartphone.
- Sudah ikut 3–5 tryout gratis. Skor stagnan di kisaran yang sama.
- Frustrasi bukan karena kurang soal, tapi karena tidak tahu apa yang salah.
- Kebutuhan: kejelasan langkah berikutnya, bukan konten tambahan.
- Perilaku: scroll cepat, membaca judul & angka, meninggalkan halaman jika tidak paham dalam ~5 detik.

### Persona sekunder — “Dimas, 19”
- Pelajar kelas 12, mempertimbangkan sekolah kedinasan.
- Belum tahu struktur ujian. Butuh bahasa yang tidak teknis dan gambaran hasil.
- Saat ini hanya melihat halaman program (belum ada modul) — desain harus jujur soal status “disiapkan”.

### Konteks pemakaian
- Malam hari, kuota terbatas, sering sambil melakukan hal lain.
- Saat ujian: fokus tunggal, cemas soal waktu, sering memakai satu tangan.

Implikasi desain: mobile-first, ukuran teks besar, kontras tinggi, tanpa animasi yang memperlambat, informasi penting tidak boleh bergantung pada hover.

---

## 3. Positioning & pesan

**Positioning:** LMS-CAT bukan tempat mengerjakan tryout, tapi tempat memahami kelemahan, memperbaiki strategi, dan meningkatkan kesiapan.

**Pesan utama (hierarki):**

1. **Hook** — “Nilai tryout mandek. Bukan karena kurang soal.”
2. **Janji** — LMS-CAT membedah jawaban *dan* waktu pengerjaan, lalu menyusun prioritas belajar.
3. **Bukti** — peta materi, jejak waktu, rencana latihan (ditampilkan sebagai UI).
4. **Aksi** — Mulai Tryout Gratis.

**Nada bicara:** langsung, tenang, tanpa hiperbola. Kalimat pendek. Tidak memakai kata “revolusioner”, “terbaik”, “dijamin”.

**Kata yang dipakai:** bocor, prioritas, jejak waktu, peta materi, kesiapan.
**Kata yang dihindari:** jaminan lulus, ranking nasional, prediksi kelulusan, “pasti”.

**Batasan klaim (wajib dipatuhi implementasi):**

- Tidak ada testimoni, jumlah pengguna, atau tingkat kelulusan.
- Semua angka pada contoh analisis diberi label “Data ilustratif”.
- Passing grade dan jadwal seleksi tidak dicantumkan.
- Harga memakai placeholder `Rp [—]` dengan catatan eksplisit.

---

## 4. Landing page

File: `landing-page/index.html`

### 4.1 Urutan seksi & peran

| # | Seksi | Peran | Anchor |
|---|---|---|---|
| 1 | Navbar | Orientasi + akses masuk/daftar | — |
| 2 | Hero | Menyatakan masalah + janji + bukti visual | `#beranda` |
| 3 | Ticker | Jeda ritmis, menanam istilah kunci | — |
| 4 | Masalah (gelap) | Empati: 5 keluhan nyata → solusi | `#masalah` |
| 5 | Keunggulan | 3 pembeda dengan UI konkret | `#fitur` |
| 6 | Cara kerja | 6 langkah siklus | `#cara-kerja` |
| 7 | Preview analisis (gelap) | Bukti produk: 3 tab analisis | `#analisis` |
| 8 | Program | Konteks CPNS 2027 + roadmap | `#program` |
| 9 | Paket | Struktur monetisasi | `#paket` |
| 10 | FAQ | Menghapus keraguan terakhir | `#faq` |
| 11 | CTA band | Konversi terakhir | — |
| 12 | Footer | Legal, navigasi, identitas | — |

Ritme terang–gelap: paper → gelap → paper → paper-100 → gelap → paper → paper-100 → lime → gelap.
Tujuannya memecah scroll panjang dan memberi penekanan pada dua seksi bukti.

### 4.2 Navbar

- Tinggi 68px, sticky, latar `#FAF8F1`, tanpa blur.
- Kiri: logo. Tengah-kiri: Beranda, Fitur, Cara Kerja, Paket Tryout. Kanan: “Masuk” (ghost) + “Daftar” (primary, 38px).
- Tautan aktif ditandai garis lime 2px di bawah, diperbarui saat scroll (`IntersectionObserver` atau perhitungan `offsetTop`).
- Saat scroll > 8px: muncul border bawah + shadow halus.
- < 940px: tautan & aksi disembunyikan, muncul tombol burger 44×44. Menu buka-tutup full width di bawah navbar, tautan 56px, dua tombol di bawah.
- Menu mobile menutup otomatis saat tautan diklik.

### 4.3 Hero

**Hierarki:** eyebrow → H1 (3 baris) → subjudul → CTA → meta.

- Eyebrow: `SIMULASI CAT · SKD CPNS 2027` (mono 11px uppercase, kotak lime 7px).
- H1: “Nilai tryout mandek.” / “Bukan karena” / “kurang soal.” — baris ketiga memakai `.mark` (highlighter lime).
  - Patah baris **disengaja** dengan `<br>`; jangan dibiarkan wrap otomatis karena highlight akan terpecah.
- Subjudul: 1 kalimat nilai + 1 kalimat penegasan. Maks 44ch.
- CTA primer “Mulai Tryout Gratis” (56px, dengan panah) → `register/index.html`.
- CTA sekunder “Lihat contoh analisis” (outline) → `#analisis`.
- Meta: tiga label mono (TWK·TIU·TKP / Analisis per soal / Riwayat progres) dengan titik lime.

**Visual produk (kolom kanan):** kartu hasil tryout asli dalam HTML, bukan gambar.

| Elemen | Isi | Catatan |
|---|---|---|
| Header kartu | `SIMULASI #4 · SKD` + badge “Data ilustratif” | Badge wajib, jangan dihapus |
| Skor | Ring 104px, 412, label “SKOR TOTAL” | `stroke-dashoffset` = 79 untuk 75% |
| Delta | `+38 poin` (chip hijau) | Arah naik memakai hijau + ikon panah, bukan warna saja |
| Bar kategori | TWK 95/150, TIU 112/175, TKP 205/225 | Jumlah = 412 (konsisten) |
| Materi bocor | 3 chip rose dengan persentase | — |
| Kartu mengambang 1 | “Rekomendasi berikutnya · Deret angka · Prioritas 1” | Di atas kartu, `top:-60px` |
| Kartu mengambang 2 | “Jejak waktu · Soal 27 · 3m 12s” + sparkline | Di bawah kartu, `bottom:-40px` |

Perilaku responsif: < 1080px kartu rekomendasi disembunyikan; < 960px layout 1 kolom, visual maks 520px; < 560px kartu waktu disembunyikan, CTA full width.

Latar: grid 64px dengan mask radial + glow lime lembut di kanan atas. Opasitas rendah agar teks tetap dominan.

### 4.4 Seksi masalah (gelap)

- Judul dua baris + lead di kanan (grid split).
- 5 baris bernomor `01–05`, masing-masing: nomor mono lime → pertanyaan (display 20–23px) → jawaban dengan label kecil “LMS-CAT”.
- Baris dipisah garis `#2C3142`; hover memberi latar 2.5% putih (isyarat bahwa ini daftar, bukan paragraf).
- < 820px: nomor 36px, jawaban pindah ke bawah pertanyaan.

### 4.5 Seksi keunggulan

Tiga blok bergantian kiri-kanan (`--rev` membalik urutan visual di desktop).

Setiap blok: badge kategori → judul → 1 paragraf → 3 poin ceklis → panel UI.

| Blok | Panel yang ditampilkan |
|---|---|
| Peta materi | Daftar kategori TWK dengan bar penguasaan + tag (`PERLU LATIHAN`, `PRIORITAS`) + kesimpulan otomatis |
| Jejak waktu | 30 batang durasi (2 batang disorot amber/merah), 3 stat (rata-rata, terlama, efisiensi), temuan |
| Rencana latihan | 3 item prioritas bernomor; item pertama memakai shadow keras + tombol MULAI |

Aturan: setiap panel harus menampilkan **data**, bukan ikon. Jika data belum tersedia di backend, pakai state kosong yang jujur, bukan angka palsu tanpa label.

### 4.6 Cara kerja

6 langkah dalam satu baris bergaris atas, masing-masing punya titik biru di garis, nomor mono, judul, satu kalimat.
Responsif: 6 → 3 (≤1000px) → 2 kolom (≤640px).

### 4.7 Preview analisis (gelap)

- Tab: Analisis materi / Manajemen waktu / Strategi kelulusan. Tab aktif lime.
- Panel kiri: kartu data. Panel kanan: 2–3 kartu insight dengan label mono lime.
- Tab 1: 5 bar kategori + heatmap 20×6 (sel 12px) + legenda lemah→kuat.
- Tab 2: waktu per bagian + 30 batang durasi + 3 stat + strategi pembagian waktu.
- Tab 3: rencana 4 minggu (3 item) + dasar rekomendasi + batasan (“tidak ada prediksi kelulusan”).
- Semua tab wajib tetap ada di DOM dengan `hidden` agar mudah diimplementasikan sebagai tab server-side.

### 4.8 Program

3 kartu: SKD CPNS 2027 (aktif, shadow keras, badge lime), Sekolah Kedinasan (Disiapkan), Seleksi lainnya (Disiapkan).
Tanpa tanggal, tanpa passing grade. Kartu aktif memakai border ink + shadow keras; kartu lain datar.

### 4.9 Paket

- Notice kuning: penjelasan placeholder (jangan dihapus sebelum harga final).
- 3 tier: Latihan / Intensif (gelap, badge “Paling dipilih”) / Prioritas.
- Setiap tier: nama, deskripsi, harga `Rp [—]` + `/paket`, catatan “Harga placeholder”, 4 baris fitur (ceklis atau silang), CTA.
- Tier tengah memakai `.btn--lime`; lainnya outline.
- Harga final: ganti `Rp [—]`, `[—] simulasi`, dan `[—] fitur tambahan`.

### 4.10 FAQ

6 item, accordion native, lebar maks 820px, satu kolom.
Pertanyaan sesuai brief; jawaban 2–3 kalimat, tanpa klaim.

### 4.11 CTA band & footer

- Band lime penuh, judul 2 baris, satu paragraf, dua tombol vertikal (primary + outline), dekorasi bulatan jawaban 22% opasitas.
- Footer gelap 4 kolom: identitas + tagline, Navigasi, Bantuan, Legal. Baris bawah: hak cipta + disclaimer data ilustratif.

### 4.12 Elemen konversi

| Elemen | Alasan |
|---|---|
| “Daftar” di navbar (selalu terlihat) | Akses konstan tanpa scroll |
| CTA ganda di hero (primary + proof) | Menangkap pengunjung yang belum siap daftar |
| Sticky CTA bawah di mobile (muncul setelah 620px) | Menjaga jalur konversi saat scroll panjang |
| “Lihat contoh analisis” | Menurunkan risiko dengan menunjukkan produk dulu |
| CTA band sebelum footer | Titik keputusan terakhir |

---

## 5. Halaman masuk

File: `login/index.html`

### 5.1 Layout

- Desktop ≥ 980px: dua kolom — form (1fr, maks 408px, rata tengah vertikal) + panel visual gelap (1.02fr).
- Mobile: hanya form. Panel visual **disembunyikan** (bukan ditumpuk) agar pengguna langsung bisa mengetik.
- Panel visual berisi: label mono, pernyataan 2 baris, paragraf, kartu progres mini, 3 poin nilai. Semua `aria-hidden` karena dekoratif.

### 5.2 Struktur form

1. Logo + tautan “Beranda”.
2. Eyebrow “Akun peserta”, H1 “Masuk untuk melanjutkan.”, subjudul 1 baris.
3. Alert global (tersembunyi default).
4. Email — `type=email`, `autocomplete=email`, `inputmode=email`.
5. Kata sandi — dengan tombol tampil/sembunyi 40×40, `aria-pressed`.
6. Baris: checkbox “Ingat saya” + tautan “Lupa kata sandi?”.
7. Tombol “Masuk” (primary, 56px, block).
8. Catatan persetujuan (12px) dengan tautan legal.
9. “Belum punya akun? Daftar gratis”.
10. Footer kecil (hak cipta, bantuan, privasi).

### 5.3 Perilaku & state

| State | Perilaku |
|---|---|
| Default | Tanpa pesan error. Placeholder saja. |
| Validasi blur | Email kosong/format salah → pesan di bawah field, `aria-invalid`, fokus tidak dipindah |
| Submit invalid | Validasi semua field, fokus ke field salah pertama |
| Kredensial salah | Alert di atas form: “Email atau kata sandi tidak cocok. Periksa kembali.” — jangan mengungkap field mana yang salah |
| Loading | Tombol `.is-loading` + `aria-busy`, input tetap bisa dibaca tapi tombol disabled |
| Sukses | Alert hijau + redirect (prototipe: pesan “Mengalihkan…”) |

Pesan error spesifik: “Email belum diisi.” / “Format email belum benar. Contoh: nama@email.com” / “Kata sandi belum diisi.” / “Kata sandi minimal 8 karakter.”

Catatan implementasi: **jangan** menambahkan login Google/OTP sebelum fitur tersedia di backend.

---

## 6. Halaman daftar

File: `register/index.html`

### 6.1 Prinsip

Empat field saja. Tidak ada kuesioner, tidak ada nomor telepon, tidak ada asal instansi. Setiap field tambahan harus punya alasan kuat.

### 6.2 Struktur

1. Nama lengkap (placeholder: “Sesuai nama di kartu ujian”).
2. Email.
3. Kata sandi + indikator kekuatan 4 segmen.
4. Konfirmasi kata sandi + penanda “Kata sandi cocok”.
5. Checkbox persetujuan Syarat & Kebijakan (tautan inline).
6. Tombol “Buat akun”.
7. “Sudah punya akun? Masuk”.

Panel kanan: “Yang kamu dapat begitu akun aktif” + 4 manfaat bernomor (simulasi CAT, analisis materi, jejak waktu, riwayat progres).

### 6.3 Indikator kekuatan

| Skor | Label | Warna |
|---|---|---|
| 0 | — | track kosong |
| 1 | Lemah | `#D93A2B` |
| 2 | Sedang | `#D98200` |
| 3 | Kuat | `#7FBF3F` |
| 4 | Sangat kuat | `#0F8A5F` |

Perhitungan: +1 jika ≥8 karakter, +1 jika ≥12, +1 jika ada angka **dan** huruf, +1 jika ada simbol. Jika 1–7 karakter → paksa skor 1.
Indikator bersifat bantuan, **bukan** penghalang: validasi hanya mensyaratkan ≥8 karakter.
Nilai kekuatan diumumkan lewat `aria-live="polite"` (teks tersembunyi).

### 6.4 State

Sama seperti login, ditambah:
- Konfirmasi tidak cocok → error saat blur/submit; saat cocok tampilkan penanda hijau dan sembunyikan error.
- Checkbox persetujuan belum dicentang → error di bawah checkbox, bukan alert global.
- Sukses → form diganti panel sukses (bukan modal): ikon centang lime, “Selamat, akunmu siap.”, 3 langkah berikutnya, CTA “Mulai simulasi pertama”, catatan bahwa tombol mengarah ke pemilihan paket/daftar simulasi.

Jangan mengasumsikan verifikasi email ada. Jika nanti ditambahkan, tambahkan state “Cek email” sebagai layar terpisah.

---

## 7. Antarmuka ujian CAT

File: `exam-interface/index.html`

Ini layar paling kritis. Tujuan tunggal: **konsentrasi**. Tidak ada navigasi ke halaman lain, tidak ada dekorasi yang bergerak selain timer.

### 7.1 Anatomi desktop

```
┌──────────────────────────────────────────────────────────────┐
│ [logo] Judul ujian · Bagian 1/3     SISA WAKTU    [Akhiri]   │ 62px, ink
│        TWK                          01:32:47                 │
├──────────────────────────────────────────────────────────────┤ progres 3px lime
│ 01 TWK 19/30 │ 🔒 02 TIU 0/35 │ 🔒 03 TKP 0/45                │ 46px, paper
├───────────────────────────────────┬──────────────────────────┤
│ 27 / 30  [TWK] [Konten contoh]  ⚑ │ Navigasi soal   19/30    │
│                                   │ ● dijawab ● ragu ● aktif │
│ Teks soal …                       │ ┌──┬──┬──┬──┬──┐         │
│                                   │ │1 │2 │3 │… │  │         │
│ Ⓐ opsi …                          │ └──┴──┴──┴──┴──┘         │
│ Ⓑ opsi …                          │ 19    11     2           │
│ Ⓒ opsi …                          │ [Akhiri ujian]           │
│ Ⓓ opsi …                          │                          │
│ Ⓔ opsi …                          │                          │
├───────────────────────────────────┤                          │
│ ← Sebelumnya        [Berikutnya →] │                          │
└───────────────────────────────────┴──────────────────────────┘
```

- Baris atas: 3 kolom (`1fr auto 1fr`) — timer selalu tepat di tengah agar mata menemukannya dengan cepat.
- Progres: garis 3px lime di bawah header, lebar = terjawab/total bagian.
- Tab bagian: bagian aktif bergaris bawah ink; bagian terkunci memakai ikon gembok + `aria-disabled="true"` + tooltip. **Jika aturan ujian membolehkan pindah bagian, hapus state terkunci** — struktur grid sudah mendukung 3+ bagian.
- Kartu soal: min-height `calc(100dvh - 200px)` agar footer tidak “melompat” antar soal.
- Sidebar 312px, sticky `top:130px`, `max-height: calc(100dvh - 160px)`, grid nomor bisa di-scroll sendiri.

### 7.2 Anatomi mobile (≤1080px)

- Header 56px: kiri “SOAL 27/30”, tengah timer, kanan “Akhiri ujian” (label tetap terlihat).
- Tab bagian tetap, bisa di-scroll horizontal.
- Kartu soal full width; opsi min-height 58px, jarak 10px.
- Bar bawah fixed 3 kolom: `←` (46px) · “19/30” (buka navigator) · “Berikutnya” (primary).
- Footer kartu disembunyikan (digantikan bar bawah).
- Navigator menjadi **bottom sheet** (bukan drawer samping): radius atas 16px, handle, judul + tombol tutup, legend, grid 6 kolom, `max-height: 82dvh`, backdrop, `Esc` menutup.
- Body diberi `padding-bottom: 96px` agar konten tidak tertutup bar.

### 7.3 Interaksi wajib

| Aksi | Perilaku |
|---|---|
| Pilih opsi | Simpan jawaban, perbarui navigator + statistik + progres, tanpa reload |
| Tandai ragu-ragu | Toggle; tombol berubah label “Ditandai”, `aria-pressed`, titik amber di grid |
| Sebelumnya / Berikutnya | Pindah soal; di soal pertama/terakhir tombol dinonaktifkan (bukan disembunyikan) |
| Klik nomor di grid | Pindah soal, tutup sheet di mobile, scroll ke atas |
| Pintasan 1–5 | Pilih opsi A–E |
| Pintasan ← → | Navigasi soal |
| Pintasan F | Toggle ragu-ragu |
| Akhiri ujian | Modal konfirmasi dengan ringkasan (dijawab/belum/ragu) |
| Timer ≤ 5 menit | Header timer berubah amber, `aria-live` sekali |
| Timer ≤ 1 menit | Merah + pulse |
| Timer 0 | Modal konfirmasi terbuka otomatis |
| Konfirmasi akhir | Layar “Ujian terkirim” dengan ringkasan + CTA ke analisis |

### 7.4 Aturan tampilan soal

- Teks soal 17px/1.72, maks 70ch, `letter-spacing: -0.003em`.
- Stimulus/bacaan: blok terpisah, latar `#F5F2E9`, border kiri 3px, label mono “BACAAN”. Harus tetap terbaca saat soal panjang (tidak dipotong, tidak di-scroll internal).
- Opsi selalu 5 (A–E) untuk TWK/TIU; TKP juga 5. Jika jumlah opsi berbeda, layout tetap (grid gap 10px, min-height 56px).
- Huruf opsi memakai bulatan 26px — konsisten dengan motif answer sheet.
- Jangan menampilkan benar/salah selama ujian berlangsung.

### 7.5 Yang tidak boleh diubah tanpa keputusan produk

- Komposisi bagian (TWK/TIU/TKP) dan jumlah soal per bagian → ambil dari konfigurasi backend.
- Aturan penilaian (termasuk skoring TKP 1–5) → tidak divisualisasikan di UI ujian.
- Perpindahan antar bagian → ikuti aturan ujian yang berlaku.
- Durasi total → dari konfigurasi, bukan hardcode.

---

## 8. Spesifikasi responsif ringkas

| Halaman | 360px | 768px | 1280px |
|---|---|---|---|
| Landing | 1 kolom, CTA full width, sticky CTA bawah, burger menu, visual hero tanpa kartu mengambang | 2 kolom untuk fitur, nav masih burger (<940) | Nav penuh, hero 2 kolom, 3 tier sejajar |
| Masuk | Form saja, panel visual disembunyikan | Form saja | 2 kolom |
| Daftar | Form saja, indikator kekuatan full width | Form saja | 2 kolom |
| Ujian | Bar bawah + sheet, header 56px | Sama (sheet), kartu full width | Sidebar 312px, footer kartu terlihat |

Tidak boleh ada horizontal scroll di 360px. Tabel/heatmap harus mengecil atau di-scroll di dalam kontainernya sendiri.

---

## 9. Aset & ikon

- **Tidak ada gambar raster.** Semua visual produk dibuat dari HTML/SVG agar tajam dan mudah diimplementasikan.
- Logo: SVG inline 32×32.
- Ikon: outline 16/20/24, stroke 1.5–1.8, `currentColor`.
- Grafik: SVG/CSS (ring, bar, sparkline, heatmap). Tidak memakai library chart agar bundle kecil; jika perlu interaktif, gunakan Recharts/Chart.js dengan warna dari token `--dv-*`.
- Font: self-hosted di `assets/fonts/`.

---

## 10. Catatan implementasi untuk programmer

1. **Jangan** mengubah `tokens.css` secara ad-hoc. Tambah token baru jika perlu, lalu dokumentasikan.
2. Struktur komponen yang disarankan: `Button`, `Input`, `Field`, `Badge`, `Card`, `Panel`, `ProgressBar`, `Tabs`, `Modal`, `Sheet`, `QuestionNav`, `OptionRow`, `Timer`.
3. Semua state interaktif memakai kelas `is-*` + atribut ARIA. Jangan mengandalkan `:hover` untuk informasi penting.
4. Timer: hitung dari `ends_at` server, bukan `setInterval` kumulatif (drift). Sinkronkan ulang setiap 30 detik.
5. Jawaban: autosave per perubahan (debounce 400ms) + indikator “tersimpan” yang tenang (tanpa toast).
6. Fokus: setelah pindah soal, fokuskan opsi pertama dengan `preventScroll`, kecuali pengguna memakai mouse.
7. Aksesibilitas: `role="radiogroup"` + `aria-labelledby` untuk opsi; `role="group"` untuk grid nomor.
8. Jangan menaruh `autofocus` pada input saat halaman ujian dimuat (mengganggu pembaca layar); fokuskan ke judul soal.
9. Data ilustratif pada landing **wajib** diberi label; saat data nyata tersedia, hapus label dan ganti sumbernya.
10. Komponen paket: harga, jumlah simulasi, dan fitur harus datang dari API — jangan hardcode.

---

## 11. Evaluasi mandiri terhadap kriteria

| # | Kriteria | Hasil | Bukti |
|---|---|---|---|
| 1 | Keunggulan dipahami dalam 5 detik | ✅ | H1 menyatakan masalah + penyangkalan asumsi umum; visual langsung memperlihatkan skor, materi bocor, dan waktu |
| 2 | Menarik untuk Gen Z, tetap profesional | ✅ | Bricolage + highlighter + angka mono; tanpa ilustrasi kekanak-kanakan |
| 3 | CTA pendaftaran mudah ditemukan | ✅ | Navbar, hero, paket, CTA band, sticky mobile |
| 4 | Analisis hasil sebagai pembeda | ✅ | 3 blok fitur + 3 tab preview, semuanya UI nyata |
| 5 | Manajemen waktu divisualisasikan jelas | ✅ | Trace batang per soal, stat rata-rata/terlama/efisiensi, rekomendasi pembagian waktu |
| 6 | Login & daftar mudah | ✅ | 2 dan 4 field, validasi inline, state loading/sukses, panel manfaat |
| 7 | Antarmuka ujian mendukung konsentrasi | ✅ | Satu aksi dominan per area, timer tetap di tengah, warna terbatas, tanpa animasi mengganggu |
| 8 | Mobile setara | ✅ | Layout khusus < 1080px, bottom sheet, bar aksi 46px, target sentuh ≥ 46px |
| 9 | Dapat diimplementasikan tanpa menebak | ✅ | Token lengkap, spesifikasi state, ukuran eksplisit, kode acuan |
| 10 | Mendukung ekspansi bisnis | ✅ | Kartu program generik, tab bagian ujian fleksibel, komponen paket berbasis data |

**Perbaikan yang dilakukan setelah evaluasi:** ukuran H1 hero diturunkan (60px) agar tidak memecah highlight; kartu mengambang dipindah agar tidak menutupi data; heatmap diperkecil ke sel 12px; `[hidden]` dipaksa `display:none` agar state form tidak bocor; brand dipindah ke `base.css` agar konsisten antar halaman; label “Akhiri ujian” dipertahankan di mobile.
