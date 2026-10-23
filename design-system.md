# LMS-CAT — Design System v2.0 · “Navy & Gold”

Satu sumber kebenaran untuk warna, tipografi, spasi, dan komponen.
Semua nilai di sini sudah diimplementasikan di `assets/tokens.css` dan `assets/base.css`.
Jangan menulis warna atau ukuran langsung di halaman — selalu lewat token.

> v1.0 memakai arah “Signal & Structure” (kertas + ultramarine + lime). Arah itu sudah diganti
> atas keputusan produk. Eksplorasi empat arah tersimpan di `directions/index.html` sebagai arsip.

---

## 0. Arah desain

**Biru dongker memberi wibawa; emas memberi arah.** Emas dipakai sebagai aksen tunggal — bukan hiasan.

Tiga prinsip:

1. **Navy = struktur.** Header, hero, seksi penekanan, footer. Tempat data dan otoritas.
2. **Emas = keputusan.** Hanya untuk satu hal per layar: CTA utama, timer, penanda prioritas.
   Kalau emas muncul di mana-mana, tidak ada lagi yang menonjol.
3. **Putih/krem = membaca.** Semua permukaan baca panjang (soal ujian, form, artikel) tetap terang.

Yang dihindari: gradien ungu-biru, glassmorphism di semua tempat, sudut 0px ala brutalist,
bayangan keras, dan emas sebagai latar kartu penuh.

---

## 1. Logo

| Elemen | Spesifikasi |
|---|---|
| Mark | Kotak 32×32, radius 10px, latar `#F5B700`, titik tengah 10px `#231A00` |
| Wordmark | “LMS·CAT”, Plus Jakarta Sans 800, 16px, tracking −0.02em |
| Titik tengah | `#C99100` di atas putih, `#FFD34D` di atas navy |
| Ruang aman | 0.5× tinggi mark |
| Ukuran minimum | Mark 24px |

Mark di atas navy: latar `#F5B700` tetap, titik `#231A00`.

---

## 2. Warna

### 2.1 Navy (permukaan gelap)

| Token | HEX | Pakai |
|---|---|---|
| `--navy-950` | `#04121F` | Topbar, footer |
| `--navy-900` | `#061A2F` | Header, hero, kartu gelap |
| `--navy-800` | `#0A2540` | Gradien kartu, tier populer |
| `--navy-700` | `#123B60` | Hover, tautan |
| `--navy-600` | `#1B4E78` | — |

### 2.2 Gold (aksen tunggal)

| Token | HEX | Pakai | Aturan |
|---|---|---|---|
| `--gold-500` | `#F5B700` | CTA utama, timer, progres | Teks di atasnya wajib `#231A00` |
| `--gold-400` | `#FFD34D` | Aksen di latar gelap | — |
| `--gold-600` | `#C99100` | Teks emas di atas putih | Hanya untuk label kecil |
| `--gold-100` | `#FEF4DE` | Latar chip/notice | — |

### 2.3 Netral

| Token | HEX | Pakai |
|---|---|---|
| `--ink` | `#0D1B2A` | Judul, teks utama |
| `--body` | `#48596B` | Body |
| `--muted` | `#7A8B9C` | Meta, placeholder |
| `--line` | `#E4EAF1` | Border kartu |
| `--line-strong` | `#CFD9E4` | Border input, tombol outline |
| `--cream` | `#F6F8FB` | Seksi alternatif |
| `--white` | `#FFFFFF` | Kartu, seksi utama |

### 2.4 Semantik

| Token | HEX | Latar tint | Pakai |
|---|---|---|---|
| `--green-500` | `#0F9D58` | `#E4F6EC` | Materi kuat, jawaban benar |
| `--amber-500` | `#C99100` | `#FEF4DE` | Perlu latihan, ragu-ragu |
| `--red-500` | `#D64545` | `#FBE7E7` | Prioritas, error |
| `--blue-500` | `#1B6FB5` | `#E8F1FA` | Fokus keyboard, “sudah dijawab” |

### 2.5 Kontras terukur

| Kombinasi | Rasio | Status |
|---|---|---|
| `#0D1B2A` di `#FFFFFF` | 16.1:1 | AAA |
| `#48596B` di `#FFFFFF` | 7.4:1 | AAA |
| `#7A8B9C` di `#FFFFFF` | 3.9:1 | hanya ≥14px bold / ikon |
| `#FFFFFF` di `#061A2F` | 15.8:1 | AAA |
| `#A9C0D4` di `#061A2F` | 8.2:1 | AAA |
| `#231A00` di `#F5B700` | 10.9:1 | AAA |
| `#FFD34D` di `#061A2F` | 11.4:1 | AAA |
| `#C99100` di `#FFFFFF` | 3.5:1 | **hanya** label ≥12px bold |
| `#D64545` di `#FBE7E7` | 4.6:1 | AA |

Aturan: `--muted` tidak untuk paragraf. Untuk body selalu `--body`.

---

## 3. Tipografi

**Satu keluarga: Plus Jakarta Sans** (400 / 500 / 600 / 700 / 800), self-hosted di `assets/fonts/`.
Tidak ada font display terpisah — bobot 800 yang membentuk hierarki.

| Peran | Token | Ukuran | Line-height | Tracking |
|---|---|---|---|---|
| Display (hero) | `--text-display` | `clamp(27px, 3.1vw, 42px)` | 1.16 | −0.03em |
| H2 seksi | `--text-h2` | `clamp(25px, 3.1vw, 40px)` | 1.18 | −0.03em |
| H3 kartu | `--text-h3` | `clamp(17px, 1.5vw, 20px)` | 1.2 | −0.02em |
| Lead | `--text-lead` | `clamp(16px, 1.35vw, 17px)` | 1.7 | 0 |
| Body | `--text-base` | 16px | 1.7 | 0 |
| Teks soal | `--text-md` | 17px | 1.72 | −0.003em |
| Label form | `--text-sm` | 13.5px | 1.5 | 0 |
| Meta | `--text-xs` | 12px | 1.5 | 0 |
| Badge | `--text-2xs` | 11px | 1 | +0.1em (uppercase) |

Aturan:

- Body minimum 16px; teks soal 17px.
- Angka data (skor, timer, persentase) selalu `font-variant-numeric: tabular-nums`.
- Judul pakai `text-wrap: balance`, paragraf `text-wrap: pretty`.
- Label uppercase maksimal 12px dengan tracking 0.1–0.14em; jangan untuk kalimat.

---

## 4. Spasi & layout

Skala 4px: `4 · 8 · 12 · 16 · 24 · 32 · 40 · 48 · 64 · 96`.

| Properti | Nilai |
|---|---|
| Lebar konten | 1120px (`--wrap`) |
| Konten sempit (FAQ) | 820px |
| Gutter | 20px |
| Padding seksi | `clamp(56px, 7vw, 92px)` |
| Jarak antar kartu | 18px |
| Gap grid 2 kolom | `clamp(28px, 4vw, 52px)` |

**Breakpoint:** 360 (xs) · 480 (sm) · 768 (md) · 1024 (lg) · 1280 (xl).
Mobile-first saat implementasi; prototipe ditulis desktop-first dengan `max-width`.

---

## 5. Bentuk, bayangan, gerak

| Token | Nilai | Pakai |
|---|---|---|
| `--r-sm` | 12px | Chip, kartu kecil, notice |
| `--r-md` | 18px | Kartu, panel |
| `--r-lg` | 26px | Kartu besar, tier, modal |
| `--r-pill` | 999px | **Semua tombol**, badge, tab |

| Shadow | Nilai | Pakai |
|---|---|---|
| `--shadow-sm` | `0 1px 2px rgba(9,25,43,.06), 0 4px 14px rgba(9,25,43,.06)` | Kartu default |
| `--shadow-md` | `0 10px 30px rgba(9,25,43,.10)` | Kartu hover, panel |
| `--shadow-lg` | `0 24px 60px rgba(4,18,31,.18)` | Mockup, modal, tier populer |
| `--shadow-gold` | `0 10px 24px rgba(245,183,0,.32)` | CTA emas |

Gerak: `--dur-1 180ms`, `--dur-2 300ms`, `--ease cubic-bezier(.22,.61,.36,1)`.
Hanya `transform`, `opacity`, `background-color`, `box-shadow`. Hover tombol: `translateY(-2px)`.

---

## 6. Ikon

- Outline, stroke 2–2.4px, `viewBox="0 0 24 24"`, `currentColor`.
- Ukuran: 14 (inline), 16–18 (tombol), 22 (kartu fitur).
- `aria-hidden="true"` bila ada label teks.

---

## 7. Komponen

### 7.1 Button — selalu pil

```html
<a class="btn" href="…">Daftar</a>
```

| Varian | Latar | Teks | Pakai |
|---|---|---|---|
| default (`.btn`) | `#F5B700` + glow | `#231A00` | Aksi utama |
| `.btn--navy` | `#061A2F` | putih | Aksi utama di dalam kartu terang |
| `.btn--outline` | transparan | `#0D1B2A` | Aksi sekunder di terang |
| `.btn--ghost` | transparan | putih, border 1.5px | Aksi sekunder di navy |
| `.btn--danger` | `#B33737` | putih | Konfirmasi destruktif |

| Ukuran | Padding | Font |
|---|---|---|
| `.btn--sm` | 11px 18px | 13.5px |
| default | 18px 28px | 17px |
| `.btn--lg` | 19px 30px | 17px |

State: hover `translateY(-2px)` + glow naik, active turun, focus-visible outline 3px `#1B6FB5`,
disabled opacity .45, loading `.is-loading` (teks transparan + spinner).

**Aturan emas:** satu tombol emas per layar. Kalau ada dua aksi setara, salah satunya outline.

### 7.2 Input

| Properti | Nilai |
|---|---|
| Tinggi | 52px |
| Radius | 14px |
| Border | 1.5px `#CFD9E4` |
| Focus | border `#1B6FB5` + ring 4px `rgba(27,111,181,.14)` |
| Error | border `#D64545` + latar `#FFFAFA` |

### 7.3 Checkbox

21×21px, radius 7px. Tercentang: latar `#061A2F`, centang `#FFD34D`.
Area klik = seluruh baris label (`.check`).

### 7.4 Badge

Font 11px/800, uppercase, tracking .1em, radius 7px.
`default` (navy + gold) · `--gold` · `--soft` (gold-100) · `--green` · `--red` · `--outline` · `--invert`.

### 7.5 Kartu

`.card` — putih, border 1px `--line`, radius 18px, `--shadow-sm`.
`.card--lg` untuk tier/panel besar (26px).
Di atas navy: latar `rgba(255,255,255,.045)`, border `rgba(255,255,255,.12)`.

### 7.6 Tab

Pil, padding 11×20, border 1.5px. Aktif: latar `#061A2F`, teks putih.
Wajib `role="tablist"` + navigasi panah.

### 7.7 Accordion

`<details>` native. Summary 20px padding, ikon +/− 28px radius 9px.
Terbuka: border emas, ikon `−` berlatar emas.

### 7.8 Notifikasi (`.notice`)

Latar `#FEF4DE`, border `rgba(245,183,0,.45)`, radius 12px, teks `#6B4A00`, ikon 18px.
Dipakai untuk placeholder harga — **jangan dihapus sebelum harga final ada.**

### 7.9 Komponen ujian

**Tombol nomor (`.qbtn`)** — 1:1, radius 10px.

| State | Latar | Border | Teks |
|---|---|---|---|
| Belum | putih | `#CFD9E4` | `#48596B` |
| Sudah dijawab | `#E8F1FA` | `#1B6FB5` | `#16588C` |
| Ragu-ragu | `#FEF4DE` | `#F5B700` | `#8A6100` + titik emas |
| Sedang dikerjakan | `#061A2F` | `#061A2F` | putih + ring ganda |
| Terkunci | — | — | opacity .35 |

**Opsi jawaban (`.opt`)** — min-height 56px (mobile 58), radius 14px, bulatan huruf 27px.
Terpilih: border `#061A2F` 1.5px + inset 1px + latar `#F1F5FA` + bulatan navy.

**Timer** — 22px/800 tabular. Normal `#FFD34D`; `is-warn` ≤5 menit (latar emas 12%);
`is-crit` ≤1 menit (latar merah 16%, teks `#FF8A80`, pulse).

---

## 8. State sistem

| State | Perlakuan |
|---|---|
| Loading | Skeleton radius sama; tombol `.is-loading` |
| Empty | Ikon 24px + satu kalimat + satu aksi |
| Error | Pesan spesifik + tindakan pemulihan |
| Success | Konfirmasi singkat; halaman penuh hanya untuk daftar/ujian |

Validasi: per-field saat blur, ringkasan saat submit, fokus ke field salah pertama.

---

## 9. Aksesibilitas

- Kontras ≥4.5:1 untuk teks; `--muted` hanya untuk meta ≥14px bold.
- Target sentuh ≥44px; di ujian 46–58px.
- Focus ring 3px, offset 2px; di navy pakai `#FFD34D`.
- `prefers-reduced-motion` mematikan reveal, pulse, dan transisi.
- Timer tidak diumumkan tiap detik; hanya sekali saat melewati ambang 5 menit.
- Status tidak boleh hanya warna: state soal memakai warna + titik/ring, form memakai ikon + teks.

---

## 10. Struktur file

```
design/
├── assets/
│   ├── fonts.css / fonts/*.woff2     Plus Jakarta Sans (+ arsip arah lama)
│   ├── tokens.css                    semua token
│   └── base.css                      reset + tipografi + komponen dasar
├── landing-page/index.html
├── login/index.html
├── register/index.html
├── exam-interface/index.html
├── directions/index.html             arsip 4 arah eksplorasi
└── *.md
```

Aturan: impor `fonts.css` → `tokens.css` → `base.css` → CSS halaman.
Nama kelas `block__element--modifier`; state `is-*` + atribut ARIA.
