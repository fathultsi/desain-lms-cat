# LMS-CAT — Interface Design v1.0

Prototipe antarmuka untuk **LMS-CAT**, platform tryout berbasis Computer Assisted Test (CAT)
untuk persiapan SKD CPNS 2027.

Semua layar dibuat dengan HTML, CSS, dan SVG — tidak ada gambar raster — sehingga bisa
langsung dibaca, di-resize, dan diimplementasikan oleh programmer.

## Lihat desainnya

Buka **[`index.html`](index.html)** (halaman hub), lalu pilih salah satu layar:

| Layar | File | Isi |
|---|---|---|
| Landing page | `landing-page/index.html` | Hero, masalah pengguna, 3 keunggulan, cara kerja, preview analisis bertab, program, paket, FAQ |
| Masuk | `login/index.html` | Form + panel visual, validasi, loading, error kredensial |
| Daftar | `register/index.html` | 4 field, indikator kekuatan kata sandi, layar sukses |
| Ujian CAT | `exam-interface/index.html` | Timer hidup, navigasi 30 soal, penanda ragu-ragu, modal konfirmasi |

Setiap halaman responsif: 360px (mobile) sampai 1280px+ (desktop).
Untuk melihat versi mobile, perkecil jendela browser ke ±390px atau pakai device mode di DevTools.

## Dokumentasi

- [`design-spec.md`](design-spec.md) — tujuan, persona, struktur tiap halaman, perilaku, catatan implementasi
- [`design-system.md`](design-system.md) — token warna, tipografi, spasi, komponen, aksesibilitas
- [`user-flow.md`](user-flow.md) — enam alur utama, percabangan, edge case

## Struktur

```
├── index.html              hub / daftar layar
├── landing-page/           index.html
├── login/                  index.html
├── register/               index.html
├── exam-interface/         index.html
├── assets/
│   ├── tokens.css          semua design token
│   ├── base.css            reset + komponen dasar
│   ├── fonts.css           @font-face
│   └── fonts/*.woff2       Bricolage Grotesque, Plus Jakarta Sans, JetBrains Mono
└── *.md                    dokumentasi
```

## Catatan

- Semua angka pada contoh analisis bersifat **ilustratif** dan diberi label.
- Harga paket memakai placeholder `Rp [—]` sampai keputusan bisnis ditetapkan.
- Panel “Pratinjau state prototipe” (login/daftar) dan chip “Demo sisa …” (ujian) adalah
  alat bantu demo — hapus sebelum produksi.
