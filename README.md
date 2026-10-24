# LMS-CAT — Pratinjau Desain

Repositori ini menampung **pratinjau statis** antarmuka LMS-CAT, platform tryout
berbasis Computer Assisted Test (CAT) untuk persiapan SKD CPNS 2027. Tidak ada
backend di sini; halaman hanya untuk ditinjau bersama tim.

## Alamat

| Halaman | Alamat | Isi |
|---|---|---|
| **Landing page (terbaru)** | [`/app/`](https://fathultsi.github.io/desain-lms-cat/app/) | Ekspor statis dari aplikasi Laravel: hero, keunggulan, peluang & target, contoh laporan, paket, FAQ |
| Prototipe lama | [`/app-prototipe/`](https://fathultsi.github.io/desain-lms-cat/app-prototipe/) | Prototipe HTML/CSS/JS (localStorage) untuk landing, masuk, daftar, ujian, hasil |
| Arah desain | [`/directions/`](https://fathultsi.github.io/desain-lms-cat/directions/) | Eksplorasi arah visual |

## Tentang `/app/`

Halaman di `/app/` **dihasilkan otomatis** dari aplikasi LMS-CAT
(`node scripts/export-static.mjs`), bukan ditulis tangan. Yang perlu diketahui saat meninjau:

- Tampilan, tipografi, animasi, dan interaksi (tab laporan, menu ponsel, FAQ) berjalan
  sama seperti di aplikasi.
- Seluruh tautan menuju pendaftaran/masuk dinonaktifkan (`#`) karena tidak ada
  backend di balik pratinjau ini.
- **Katalog paket berasal dari basis data pengembangan**, sehingga masih memuat entri
  uji. Harga dan nama paket belum final.
- Semua angka pada contoh laporan diberi label **“Data ilustratif”** dan bukan data
  pengguna nyata.

Jangan menyunting berkas di `/app/` secara langsung — perubahan akan tertimpa pada
ekspor berikutnya. Perbaikan dilakukan di repositori aplikasi, lalu diekspor ulang.

## Dokumentasi desain

- [`design-spec.md`](design-spec.md) — tujuan, persona, struktur halaman, perilaku
- [`design-system.md`](design-system.md) — token warna, tipografi, spasi, komponen
- `assets/` — token dan CSS dasar yang dipakai halaman arah desain

## Catatan

- Prototipe di `/app-prototipe/` disimpan sebagai arsip; isinya sudah digantikan oleh
  implementasi sebenarnya di `/app/`.
- Panel “Pratinjau state prototipe” dan chip demo di dalam arsip itu adalah alat bantu
  presentasi, bukan bagian produk.
