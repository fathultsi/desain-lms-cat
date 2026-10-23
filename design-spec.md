# LMS-CAT — Design Specification v2.0

Dokumen serah-terima desain untuk AI agent programmer. Fokus: **antarmuka**, bukan backend.
Arah visual: **Navy & Gold** (lihat `design-system.md`).

- Prototipe: `landing-page/`, `login/`, `register/`, `exam-interface/`
- Alur: `user-flow.md`
- Arsip eksplorasi 4 arah: `directions/index.html`

---

## 1. Tujuan produk

LMS-CAT adalah platform tryout berbasis **Computer Assisted Test (CAT)** yang menjual satu hal:
**pemahaman atas penyebab skor**, bukan jumlah soal.

| Tujuan bisnis | Terjemahan ke desain |
|---|---|
| Konversi pengunjung → akun | CTA “Daftar” selalu terlihat; hero menyatakan masalah nyata; daftar 4 kolom |
| Diferensiasi | Analisis materi + jejak waktu ditampilkan sebagai UI nyata, bukan ilustrasi |
| Kesiapan monetisasi | Tiga tier dengan placeholder harga yang jelas |
| Ekspansi program | Kartu program siap menampung kedinasan & seleksi lain |
| Kepercayaan | Tanpa testimoni, tanpa jumlah pengguna, tanpa janji kelulusan |

**Non-goals:** dashboard penuh, pembayaran, halaman hasil lengkap, verifikasi email, login sosial.

---

## 2. Target pengguna

**Rani, 22** — lulusan D3/S1, menyiapkan SKD CPNS 2027, 80% mengakses dari smartphone.
Sudah ikut 3–5 tryout gratis, skor stagnan. Frustrasi bukan karena kurang soal, tapi tidak tahu apa yang salah.

**Dimas, 19** — pelajar kelas 12, mempertimbangkan sekolah kedinasan. Belum tahu struktur ujian,
butuh bahasa yang tidak teknis. Saat ini hanya melihat halaman program (belum ada modul).

Konteks: malam hari, kuota terbatas, sering sambil melakukan hal lain. Saat ujian: fokus tunggal,
cemas soal waktu, sering satu tangan.

---

## 3. Positioning & pesan

**Positioning:** LMS-CAT bukan tempat mengerjakan tryout, tapi tempat memahami kelemahan,
memperbaiki strategi, dan meningkatkan kesiapan.

**Hierarki pesan:**

1. **Hook** — “Nilai tryout mandek. Bukan karena kurang soal.”
2. **Janji** — membedah jawaban *dan* waktu, lalu menyusun prioritas.
3. **Bukti** — peta materi, jejak waktu, rencana latihan (sebagai UI).
4. **Aksi** — Mulai Tryout Gratis.

**Nada:** langsung, tenang, tanpa hiperbola. Kata yang dipakai: bocor, prioritas, jejak waktu,
kesiapan. Kata yang dihindari: jaminan lulus, ranking nasional, prediksi kelulusan, “pasti”.

**Batasan klaim (wajib):**

- Tidak ada testimoni, jumlah alumni, tingkat kelulusan, atau garansi.
- Semua angka contoh diberi label “Data ilustratif”.
- Passing grade dan jadwal seleksi tidak dicantumkan.
- Harga memakai `Rp [—]` dengan catatan placeholder.

---

## 4. Landing page

File: `landing-page/index.html` — 13 seksi, ritme terang/gelap berselang.

| # | Seksi | Latar | Peran |
|---|---|---|---|
| 1 | Topbar | navy-950 | Pengumuman singkat + titik emas berdenyut |
| 2 | Header | navy-900 | Logo, 5 tautan, Masuk (ghost), Daftar (emas) |
| 3 | Hero | navy + glow | Masalah, janji, CTA, kartu hasil |
| 4 | Masalah | cream | 3 kartu keluhan + kutipan |
| 5 | Solusi | putih | Konsep + mock laporan analisis |
| 6 | Fitur | navy | 3 kartu keunggulan |
| 7 | Contoh analisis | cream | Tab materi / waktu / strategi |
| 8 | Untuk siapa | putih | Cocok vs belum cocok |
| 9 | Cara kerja | cream | 6 langkah |
| 10 | Program | putih | SKD aktif + 2 disiapkan |
| 11 | Paket | cream | 3 tier + notice placeholder |
| 12 | FAQ | putih | 6 accordion |
| 13 | CTA penutup | navy | Ajakan terakhir |
| — | Footer | navy-950 | Navigasi, legal, disclaimer |

### 4.1 Header

- Sticky 68px, navy-900, border bawah 1px putih 8%. Saat scroll: shadow.
- Tautan 14px/600 warna `#A9C0D4`, hover putih + latar 7%.
- “Daftar” = pil emas `.btn--sm`; “Masuk” = ghost dengan border 24% putih.
- ≤960px: tautan & aksi disembunyikan, burger 44px, menu turun dengan dua tombol di bawah.

### 4.2 Hero

**Hierarki:** eyebrow pil emas → H1 2 baris → subjudul → CTA → baris trust.

- H1: “Nilai tryout mandek.” / “Bukan karena **kurang soal**.” — frasa terakhir emas + garis bawah emas.
  Patah baris disengaja dengan `<br>`; ukuran `clamp(27px, 3.1vw, 42px)` supaya tetap 2 baris.
- CTA: “Mulai Tryout Gratis →” (emas) + “Lihat contoh analisis” (ghost) → anchor `#analisis`.
- Trust: 3 item dengan centang emas (kapabilitas produk, bukan klaim sosial).
- Latar: gradien navy + radial emas kanan atas + grid 58px dengan mask radial.

**Kartu hasil (kanan):** kartu gelap semi-transparan dengan blur.

| Elemen | Isi |
|---|---|
| Header | `SIMULASI #4 · SKD` + badge “Data ilustratif” |
| Skor | Ring 92px emas, 412, label “SKOR” |
| Delta | `+38 poin` (chip hijau) |
| 4 kotak | TWK 95 · TIU 112 · TKP 205 · MENIT 94 — meniru ritme kotak timer referensi |
| Chip | Deret angka 41% · Silogisme 48% |

≤960px: satu kolom, kartu di bawah teks, lebar maksimum 520px.

### 4.3 Masalah

Kicker pil + H2 2 baris + lead. Tiga kartu putih (ikon emas 44px, judul 17px, isi 14.5px).
Di bawahnya kutipan dengan border kiri emas 4px + penjelasan kecil.

### 4.4 Solusi

Dua kolom: kiri teks + 3 pilar bernomor (kotak navy 36px, angka emas); kanan mock laporan
gelap dengan 3 bar (emas / biru / hijau) dan footer “Prioritas berikutnya”.

### 4.5 Fitur (navy)

Tiga kartu kaca `rgba(255,255,255,.045)`, ikon dalam kotak emas 46px, judul putih, isi `#AFC4D6`.
Hover: naik 3px + border emas 45%.

### 4.6 Contoh analisis

Tab pil (aktif navy). Panel kiri putih dengan bar penguasaan + heatmap 20×6; panel kanan 3 kartu
insight dengan label emas. Tiga panel: materi, waktu, strategi — semua ada di DOM, `hidden` untuk
yang tidak aktif.

### 4.7 Untuk siapa

Dua kartu: hijau (cocok, 4 poin) dan netral (belum cocok, 3 poin). Tujuannya menurunkan salah target,
bukan menakut-nakuti.

### 4.8 Cara kerja

6 kartu bernomor dalam grid 3 kolom (2 baris). Nomor kotak navy + angka emas.

### 4.9 Program

3 kartu. SKD CPNS 2027 = aktif (border emas + glow), dua lainnya outline “Disiapkan”.

### 4.10 Paket

- Notice emas: penjelasan placeholder — jangan dihapus.
- 3 tier: Latihan (putih) / Intensif (navy, badge “Paling dipilih”) / Prioritas (putih).
- Harga `Rp [—]` + “Harga placeholder”. CTA: outline / emas / outline.

### 4.11 FAQ & CTA penutup

FAQ: 6 accordion, lebar maks 820px, ikon +/− yang berubah emas saat terbuka.
CTA penutup: navy + glow, H2 maks 20em, satu tombol emas 56px, micro-copy 13px.

### 4.12 Konversi

| Elemen | Alasan |
|---|---|
| Topbar pengumuman | Menandai produk hidup tanpa klaim palsu |
| Daftar di header | Akses konstan |
| CTA ganda di hero | Menangkap yang belum siap daftar |
| Floating CTA mobile (setelah 560px) | Menjaga jalur konversi saat scroll panjang |
| “Lihat contoh analisis” | Menurunkan risiko dengan bukti |

---

## 5. Halaman masuk

- Desktop ≥980px: dua kolom — form (maks 410px, tengah vertikal) + panel navy.
- Mobile: panel visual **disembunyikan**, form langsung.
- Form: email, kata sandi (tombol tampil 42px), “Ingat saya”, “Lupa kata sandi?”, tombol emas block,
  catatan legal, tautan daftar, footer kecil.
- Panel kanan: label mono, pernyataan 2 baris, paragraf, kartu progres (3 bar), 3 poin nilai. `aria-hidden`.

State: default · validasi blur · kredensial salah (alert generik di atas form) · loading (`.is-loading`) ·
sukses (alert hijau). Panel “Pratinjau state prototipe” hanya untuk demo — hapus saat produksi.

---

## 6. Halaman daftar

Empat field: nama, email, kata sandi, konfirmasi + checkbox persetujuan.
Indikator kekuatan 4 segmen (merah → emas → hijau limau → hijau), hanya bantuan; validasi tetap ≥8 karakter.
Sukses: panel menggantikan form (bukan modal) dengan 3 langkah berikutnya + CTA ke simulasi.
Panel kanan: 4 manfaat bernomor.

---

## 7. Antarmuka ujian CAT

Tujuan tunggal: **konsentrasi**. Emas hanya untuk timer, penanda ragu-ragu, dan aksi utama.

### 7.1 Desktop

```
┌──────────────────────────────────────────────────────────────┐
│ [mark] Judul ujian · Bagian 1/3      SISA WAKTU   [Akhiri]   │ 64px navy
│                                     01:32:47                 │
├──────────────────────────────────────────────────────────────┤ rail emas 3px
│ 01 TWK 19/30 │ 🔒 02 TIU 0/35 │ 🔒 03 TKP 0/45                │ 46px putih
├───────────────────────────────────┬──────────────────────────┤
│ 27 / 30 [TWK] [Konten contoh]  ⚑  │ Navigasi soal   19/30    │
│ Teks soal …                       │ legend                   │
│ Ⓐ opsi …                          │ grid 5 kolom             │
│ …                                 │ 19 · 11 · 2              │
├───────────────────────────────────┤ [Akhiri ujian]           │
│ ← Sebelumnya        [Berikutnya →] │                          │
└───────────────────────────────────┴──────────────────────────┘
```

- Timer selalu di tengah (grid `1fr auto 1fr`).
- Rail emas = terjawab/total bagian.
- Kartu soal min-height `calc(100dvh - 210px)` agar footer tidak melompat.
- Sidebar 316px, sticky `top:132px`.

### 7.2 Mobile ≤1080px

Header 58px (soal / timer / akhiri), tab bagian bisa di-scroll, kartu penuh,
bar bawah 3 slot (`←` · `19/30` · `Berikutnya`), navigator menjadi bottom sheet 6 kolom
dengan handle + backdrop, `max-height 82dvh`.

### 7.3 Interaksi

| Aksi | Perilaku |
|---|---|
| Pilih opsi | Simpan, perbarui grid + statistik + rail |
| Tandai | Toggle, `aria-pressed`, titik emas di grid |
| Sebelumnya/Berikutnya | Pindah; nonaktif di ujung |
| Klik nomor | Pindah, tutup sheet, scroll atas |
| `1–5` / `←` `→` / `F` | Pilih opsi / navigasi / tandai |
| Akhiri | Modal dengan ringkasan 3 angka |
| ≤5 menit | Timer emas + satu pengumuman ARIA |
| ≤1 menit | Timer merah + pulse |
| Konfirmasi | Layar “Ujian terkirim” + ringkasan |

### 7.4 Aturan tampilan soal

- Teks 17px/1.72, maks 70ch.
- Stimulus: blok krem, border kiri emas 3px, label “BACAAN”, tumbuh tanpa scroll internal.
- Opsi selalu 5 (A–E); layout tetap jika jumlah berbeda.
- Jangan menampilkan benar/salah selama ujian.

### 7.5 Yang tidak boleh diubah tanpa keputusan produk

Komposisi bagian, jumlah soal, aturan penilaian (termasuk skoring TKP), perpindahan antar bagian,
dan durasi total — semuanya dari konfigurasi backend, bukan hardcode.

---

## 8. Responsif

| Halaman | 360px | 768px | 1280px |
|---|---|---|---|
| Landing | 1 kolom, CTA penuh, floating CTA, burger | 2 kolom kartu | Header penuh, hero 2 kolom, 3 tier sejajar |
| Masuk | Form saja | Form saja | 2 kolom |
| Daftar | Form saja | Form saja | 2 kolom |
| Ujian | Bar bawah + sheet | Sheet, kartu penuh | Sidebar 316px |

Tidak boleh ada horizontal scroll di 360px.

---

## 9. Aset & ikon

- Tidak ada gambar raster. Semua visual dari HTML/SVG.
- Ikon outline 24px, stroke 2–2.4, `currentColor`.
- Font self-hosted: Plus Jakarta Sans (400–800).
- Grafik: CSS/SVG (ring, bar, trace, heatmap). Warna dari `--dv-*`.

---

## 10. Catatan implementasi

1. Jangan menambah warna di luar token.
2. Komponen: `Button`, `Input`, `Field`, `Badge`, `Card`, `Panel`, `Tabs`, `Modal`, `Sheet`,
   `QuestionNav`, `OptionRow`, `Timer`.
3. State `is-*` + ARIA. Jangan andalkan `:hover` untuk informasi penting.
4. Timer dari `ends_at` server, sinkron tiap 30 detik (jangan akumulasi `setInterval`).
5. Autosave jawaban per perubahan (debounce 400ms), indikator tenang tanpa toast.
6. Fokus opsi pertama hanya saat navigasi keyboard.
7. `role="radiogroup"` untuk opsi, `role="group"` untuk grid nomor.
8. Jangan `autofocus` saat halaman ujian dimuat.
9. Angka ilustratif wajib berlabel; harga & fasilitas dari API.
10. Hapus panel “Pratinjau state prototipe” dan chip “Demo sisa …” sebelum produksi.

---

## 11. Evaluasi mandiri

| # | Kriteria | Hasil | Bukti |
|---|---|---|---|
| 1 | Keunggulan dipahami 5 detik | ✅ | H1 + kartu hasil langsung menyatakan masalah & solusi |
| 2 | Menarik, tetap profesional | ✅ | Navy/emas berwibawa; emas dibatasi |
| 3 | CTA mudah ditemukan | ✅ | Header, hero, paket, CTA penutup, floating mobile |
| 4 | Analisis sebagai pembeda | ✅ | 3 kartu fitur + 3 tab contoh analisis |
| 5 | Manajemen waktu jelas | ✅ | Trace per soal, 3 stat, rekomendasi pembagian waktu |
| 6 | Login & daftar mudah | ✅ | 2 dan 4 field, validasi inline, state lengkap |
| 7 | Ujian mendukung konsentrasi | ✅ | Emas minimal, timer tetap, satu aksi dominan per area |
| 8 | Mobile setara | ✅ | Bottom sheet, bar 46px, target sentuh ≥46px |
| 9 | Dapat diimplementasikan | ✅ | Token lengkap, spesifikasi state, kode acuan |
| 10 | Mendukung ekspansi | ✅ | Kartu program generik, tab bagian fleksibel, tier berbasis data |

**Perbaikan setelah evaluasi v2:** ukuran H1 diturunkan agar tetap 2 baris (42px desktop, 27px mobile);
kartu kaca di hero dibuat lebih pekat agar grid tidak mengganggu keterbacaan bar; emas dikeluarkan
dari state “sudah dijawab” (diganti biru) supaya hanya dipakai untuk perhatian.
