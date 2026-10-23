# LMS-CAT — Design System v1.0

Satu sumber kebenaran untuk warna, tipografi, spasi, dan komponen.
Semua nilai di dokumen ini sudah diimplementasikan di `assets/tokens.css` dan `assets/base.css`.
Jangan menulis nilai warna/ukuran langsung di halaman — selalu pakai token.

---

## 0. Arah desain

**Nama arah: “Signal & Structure”.**

Dua referensi yang digabung:

1. **Kertas ujian** — permukaan paper hangat, garis tipis, nomor urut mono, bulatan jawaban (answer sheet).
2. **Instrumen data** — grafik, heatmap, jejak waktu, angka tabular.

Hasilnya: produk terasa seperti alat ukur, bukan seperti dashboard admin. Kesan yang dituju:
tenang, presisi, jujur, dan tetap energik lewat satu aksen highlighter.

**Yang membuatnya mudah dikenali:**

- Aksen **lime highlighter** yang dipakai seperti stabilo di buku catatan (bukan sebagai warna dekoratif).
- **Bulatan jawaban** sebagai motif logo, langkah, dan navigasi soal.
- **Angka mono tabular** untuk semua data (skor, waktu, persentase).
- **Garis rambut 1px** dan sudut kecil (4–12px), bukan kartu bulat dengan shadow besar.

**Yang sengaja dihindari:** gradien ungu-biru, glassmorphism, sudut 24px di semua elemen, ikon besar di atas judul, ilustrasi orang tanpa makna, dashboard gelap dengan neon.

---

## 1. Logo

| Elemen | Spesifikasi |
|---|---|
| Mark | Kotak 32×32, radius 9px, latar `#12141C`, berisi grid 3×3 bulatan `#FAF8F1` opasitas 34%, satu bulatan `#D9F24B` di kanan bawah |
| Wordmark | “LMS·CAT”, Bricolage Grotesque 700, 17px, tracking −0.02em, titik tengah `#2F3BE8` |
| Versi terang | Mark dibalik: latar `#FAF8F1`, bulatan `#12141C` 30%, aksen `#2F3BE8` |
| Ruang aman | Minimal 0.5× tinggi mark di semua sisi |
| Ukuran minimum | Mark 24px, wordmark 14px |

SVG logo tersedia inline di setiap halaman (cari `viewBox="0 0 32 32"`). Untuk implementasi, ekstrak menjadi `Logo.jsx` / partial.

---

## 2. Warna

### 2.1 Primitif

| Token | HEX | Peran |
|---|---|---|
| `--paper-000` | `#FFFDF8` | Kartu, panel, permukaan terang |
| `--paper-050` | `#FAF8F1` | Latar halaman utama |
| `--paper-100` | `#F5F2E9` | Seksi alternatif, latar input pasif |
| `--paper-200` | `#EDE9DC` | Track progress, chip netral |
| `--paper-300` | `#E1DCCA` | Border default |
| `--paper-400` | `#CFC9B4` | Border kuat, placeholder kuat |
| `--ink-900` | `#12141C` | Teks utama, permukaan terbalik |
| `--ink-800` | `#191C27` | Panel di dalam seksi gelap |
| `--ink-700` | `#232734` | Teks sekunder kuat |
| `--ink-600` | `#343949` | Teks sekunder |
| `--ink-500` | `#4C5265` | Teks sekunder (body kecil) |
| `--ink-400` | `#666C7F` | Teks muted, placeholder, label mono |
| `--ink-300` | `#8C92A5` | Ikon nonaktif |
| `--ink-200` | `#B6BBC8` | Garis pada latar gelap |
| `--ink-100` | `#DDE0E8` | — |

### 2.2 Brand & aksen

| Token | HEX | Peran | Aturan pakai |
|---|---|---|---|
| `--blue-600` | `#2F3BE8` | **Aksi utama**, tautan, seleksi | Hanya untuk 1 aksi primer per layar |
| `--blue-700` | `#1E27B8` | Hover/pressed aksi | — |
| `--blue-100` | `#E7E9FD` | Latar chip/badge biru | — |
| `--blue-050` | `#F1F2FE` | Latar opsi terpilih | — |
| `--lime-500` | `#D9F24B` | **Aksen highlighter**: progres, penanda, CTA di latar gelap | Teks di atasnya wajib `#12141C` |
| `--lime-100` | `#F7FDDF` | Glow lembut, halo | — |

### 2.3 Semantik

| Token | HEX | Latar tint | Pakai untuk |
|---|---|---|---|
| `--green-500` | `#0F8A5F` | `#DFF3EA` | Materi kuat, jawaban benar, progres naik |
| `--amber-500` | `#D98200` | `#FCEFD3` | Ragu-ragu, waktu hampir habis, perlu latihan |
| `--rose-500` | `#D93A2B` | `#FBE4E0` | Materi prioritas, error, waktu kritis |
| `--violet-500` | `#7B3FE4` | `#F0E8FD` | Seri data ke-3 |
| `--teal-500` | `#0E8C8C` | `#DCF2F2` | Seri data ke-2 |

### 2.4 Data-viz

`--dv-1 #2F3BE8` · `--dv-2 #0E8C8C` · `--dv-3 #7B3FE4` · `--dv-4 #D98200` · `--dv-5 #0F8A5F` · track `#E4DFCF`

Urutan ini aman untuk deuteranopia (biru → teal → ungu → amber → hijau tua). **Jangan** memakai merah–hijau sebagai pembeda utama; selalu tambahkan label atau pola.

### 2.5 Kontras (terukur)

| Kombinasi | Rasio | Status |
|---|---|---|
| `#12141C` di `#FAF8F1` | 16.5:1 | AAA |
| `#4C5265` di `#FAF8F1` | 6.9:1 | AA+ |
| `#666C7F` di `#FAF8F1` | 4.9:1 | AA (teks ≥12px) |
| `#FFFFFF` di `#2F3BE8` | 7.8:1 | AAA |
| `#2F3BE8` di `#FAF8F1` | 7.0:1 | AAA |
| `#12141C` di `#D9F24B` | 14.6:1 | AAA |
| `#D93A2B` di `#FBE4E0` | 4.7:1 | AA |
| `#A86200` di `#FCEFD3` | 5.4:1 | AA |
| `#0C7A55` di `#DFF3EA` | 4.9:1 | AA |

Aturan: **jangan** memakai `--ink-300` untuk teks isi; hanya ikon dekoratif dan placeholder non-esensial.

---

## 3. Tipografi

### 3.1 Keluarga font

| Peran | Font | Fallback |
|---|---|---|
| Display / judul | **Bricolage Grotesque** (300–800, variable) | Plus Jakarta Sans, system-ui |
| Body / UI | **Plus Jakarta Sans** (400–800) | system-ui, Segoe UI |
| Angka, label, timer | **JetBrains Mono** (400/500/700) | ui-monospace, Menlo |

Self-hosted di `assets/fonts/` (latin + latin-ext, `font-display: swap`). Tidak ada dependensi ke Google Fonts saat runtime.

Alasan pemilihan: Bricolage memberi karakter editorial yang tidak dimiliki sans-serif default; Plus Jakarta Sans dibuat untuk konteks Indonesia dan sangat terbaca di ukuran kecil; JetBrains Mono memastikan angka tidak “menari” saat timer berjalan.

### 3.2 Skala

**Marketing (fluid, `clamp`)**

| Token | Ukuran | Line-height | Tracking | Pakai |
|---|---|---|---|---|
| `--text-display` | `clamp(36px, 4.4vw, 60px)` | 1.02 | −0.035em | H1 hero |
| `--text-h2` | `clamp(28px, 3.1vw, 44px)` | 1.08 | −0.035em | Judul seksi |
| `--text-h3` | `clamp(20px, 1.9vw, 26px)` | 1.2 | −0.02em | Judul kartu fitur |
| `--text-lead` | `clamp(17px, 1.35vw, 20px)` | 1.55 | 0 | Paragraf pembuka |

**Produk (fixed — login, daftar, ujian)**

| Token | px | Pakai |
|---|---|---|
| `--text-2xs` | 11 | Label mono, legend |
| `--text-xs` | 12 | Hint, pesan error, meta |
| `--text-sm` | 14 | Label form, teks sekunder |
| `--text-base` | 16 | Body minimum |
| `--text-md` | 18 | Teks soal ujian |
| `--text-lg` | 22 | Judul kartu |
| `--text-xl` | 28 | Judul halaman |
| `--text-2xl` | 36 | Skor besar |
| `--text-3xl` | 46 | — |

Aturan:

- Body tidak pernah < 16px. Teks soal 17–18px dengan line-height 1.72.
- Panjang baris: 62–70ch untuk body, 44ch untuk lead.
- Angka data selalu `font-variant-numeric: tabular-nums`.
- Label mono selalu uppercase dengan tracking 0.08–0.14em.

---

## 4. Spasi & layout

### 4.1 Skala spasi (basis 4px)

`--sp-1 4` · `--sp-2 8` · `--sp-3 12` · `--sp-4 16` · `--sp-5 24` · `--sp-6 32` · `--sp-7 40` · `--sp-8 48` · `--sp-9 64` · `--sp-10 96` · `--sp-11 128`

Ritme vertikal mengikuti line box body 16/1.62 ≈ 26px; jarak antar blok teks memakai 8/12/16/24 agar tetap harmonis.

### 4.2 Grid

| Properti | Nilai |
|---|---|
| Lebar maksimum konten | 1240px |
| Gutter | `clamp(20px, 4.2vw, 48px)` |
| Padding seksi vertikal | `clamp(64px, 8.5vw, 120px)` |
| Kolom | 12 (CSS Grid), mayoritas layout 2 kolom 1fr/1fr atau 1.1fr/0.9fr |
| Jarak antar kolom | `clamp(32px, 4vw, 56px)` |

### 4.3 Breakpoint

| Nama | Lebar | Perubahan utama |
|---|---|---|
| `xs` | 360–479 | 1 kolom, CTA full width, navigasi soal jadi bottom sheet |
| `sm` | 480–767 | 1 kolom, kartu mengisi lebar |
| `md` | 768–1023 | 2 kolom untuk fitur, tabel tetap |
| `lg` | 1024–1279 | Layout desktop penuh, sidebar ujian muncul |
| `xl` | ≥1280 | Maksimum 1240px konten |

Mobile-first: semua CSS dasar untuk 360px, lalu `min-width` untuk menaikkan kompleksitas. Halaman prototipe memakai `max-width` karena ditulis desktop-first — **saat implementasi, balik ke mobile-first**.

---

## 5. Radius, border, elevasi

| Token | Nilai | Pakai |
|---|---|---|
| `--r-4` | 4px | Chip kecil, tag |
| `--r-6` | 6px | Tombol kecil, input action |
| `--r-8` | 8px | **Tombol**, input, opsi jawaban |
| `--r-12` | 12px | Kartu, panel |
| `--r-16` | 16px | Modal, bottom sheet |
| `--r-full` | 999px | Badge, pill, bulatan jawaban |

Border default `1px solid var(--line)` (`#E1DCCA`). Di latar gelap `1px solid var(--line-invert)` (`#2C3142`).

| Shadow | Nilai | Pakai |
|---|---|---|
| `--shadow-xs` | `0 1px 2px rgba(18,20,28,.06)` | Kartu datar |
| `--shadow-sm` | `0 2px 8px -2px rgba(18,20,28,.10)` | Tombol primer |
| `--shadow-md` | `0 16px 40px -18px rgba(18,20,28,.22)` | Panel mengambang |
| `--shadow-lg` | `0 40px 80px -32px rgba(18,20,28,.30)` | Mockup hero |
| `--shadow-hard` | `5px 5px 0 0 #12141C` | Kartu “ditekan” (khusus penekanan) |

`--shadow-hard` adalah tanda tangan visual. Pakai maksimal **satu** per layar.

---

## 6. Ikon

- Gaya: **outline**, stroke 1.5–1.8px, `stroke-linecap: round`, tanpa fill (kecuali state aktif seperti flag).
- Grid: `viewBox="0 0 16 16"` untuk 16px, `0 0 20 20` untuk 18–20px, `0 0 24 24` untuk 24px.
- Warna: `currentColor` — jangan hardcode.
- Ukuran: 14 (inline teks), 16 (tombol), 18 (input action), 22 (modal).
- Ikon wajib `aria-hidden="true"` bila ada label teks; beri `aria-label` bila berdiri sendiri.

Set ikon yang sudah dipakai: chevron kiri/kanan, check, close, eye/eye-off, flag, lock, grid, warning-circle, square (stop), arrow-right.

---

## 7. Komponen

### 7.1 Button

```html
<button class="btn btn--primary btn--lg">Mulai Tryout</button>
```

| Varian | Latar | Teks | Border | Pakai |
|---|---|---|---|---|
| `btn--primary` | `#2F3BE8` | putih | — | Aksi utama (1 per layar) |
| `btn--lime` | `#D9F24B` | `#12141C` | — | Aksi utama di latar gelap |
| `btn--outline` | transparan | `#12141C` | `#12141C` | Aksi sekunder |
| `btn--ghost` | transparan | `#12141C` | — | Aksi tersier |
| `btn--invert-outline` | transparan | `#FAF8F1` | `#3B4155` | Sekunder di latar gelap |
| `btn--danger` | `#C22D1F` | putih | — | Konfirmasi destruktif |

| Ukuran | Tinggi | Padding-x | Font |
|---|---|---|---|
| `btn--sm` | 38px | 16px | 14px/700 |
| default | 46px | 24px | 15px/700 |
| `btn--lg` | 56px | 32px | 16px/700 |

State: hover (warna 1 langkah lebih gelap), active (`translateY(1px)`), focus-visible (outline 2px `#2F3BE8`, offset 2px; di latar gelap `#D9F24B`), disabled (opacity .45, `cursor:not-allowed`), loading (`.is-loading` — teks transparan + spinner 18px di tengah, `aria-busy="true"`).

Aturan: teks tombol berupa kata kerja (“Mulai Tryout Gratis”, bukan “Submit”). Jangan dua tombol primer berdampingan.

### 7.2 Input

| Properti | Nilai |
|---|---|
| Tinggi | 52px |
| Radius | 8px |
| Border | 1px `#CFC9B4` |
| Font | 16px/500 |
| Placeholder | `#666C7F` (4.9:1) |
| Focus | border `#2F3BE8` + ring `0 0 0 3px #E7E9FD` |
| Error | border `#D93A2B` + latar `#FFFAF9` + ring `#FBE4E0` |
| Sukses | border `#0F8A5F` |

Struktur wajib: `<label for>` → input → pesan. Pesan error memakai `.msg.msg--error` dengan ikon 12px, `aria-describedby` pada input, dan `aria-invalid="true"`.

### 7.3 Checkbox

20×20px, radius 4px, border 1.5px `#8C92A5`. Tercentang: latar `#2F3BE8` + centang putih. Area klik = seluruh baris label (`.check`), tinggi minimum 44px.

### 7.4 Badge

Tinggi 26px, radius full, font mono 11px uppercase, gap 6px, padding 0 10px.

`badge--blue` (informasi kategori) · `badge--lime` (penanda utama/“paling dipilih”) · `badge--amber` (ragu-ragu) · `badge--rose` (prioritas) · `badge--green` (kuat) · `badge--outline` (netral) · `badge--invert` (di latar gelap).

### 7.5 Kartu & panel

```html
<div class="card card--pad">…</div>
```

Latar `--surface`, border 1px `--line`, radius 12px, padding `clamp(20px, 2.4vw, 28px)`. Varian `.card--hard` (shadow keras), `.card--raised`, `.card--flush` (tanpa padding untuk header).

**Panel data** (`.panel`) menambahkan header dengan judul + aksi (`seg`, badge) dan body berpadding 16px. Di seksi gelap pakai `.panel--dark`.

### 7.6 Bar progres

Track 6px radius full `#E1DCCA`; isi `#2F3BE8`. Varian `is-ok` (hijau) dan `is-warn` (amber). Untuk data materi, warna mengikuti tingkat penguasaan:

| Penguasaan | Warna |
|---|---|
| ≥ 80% | `#0F8A5F` |
| 60–79% | `#2F3BE8` |
| 45–59% | `#D98200` |
| < 45% | `#D93A2B` |

### 7.7 Tab

Pill, tinggi 38px, radius full, border `#3B4155` di latar gelap. Terpilih: latar `#D9F24B`, teks `#12141C`. Wajib `role="tablist"`, `role="tab"`, `aria-selected`, `aria-controls`, dan navigasi panah kiri/kanan + Home/End.

### 7.8 Accordion (FAQ)

`<details>/<summary>` native. Tinggi baris ≥ 60px, judul 17px/600, ikon plus-minus 22px yang berputar 90° saat terbuka. Satu item terbuka secara default tidak diperlukan — biarkan pengguna memilih.

### 7.9 Modal

Overlay `rgba(18,20,28,.55)`, panel maks 452px, radius 16px, padding 26px. Wajib: `role="dialog"`, `aria-modal="true"`, `aria-labelledby`, fokus awal ke tombol aman (“Lanjut mengerjakan”), `Esc` menutup, focus trap, dan mengembalikan fokus ke pemicu.

### 7.10 Komponen khusus ujian

**Tombol nomor soal (`.qbtn`)** — 1:1, radius 6px, font mono 11.5px.

| State | Latar | Border | Teks | Penanda |
|---|---|---|---|---|
| Belum dijawab | `#FFFDF8` | `#CFC9B4` | `#4C5265` | — |
| Sudah dijawab | `#F1F2FE` | `#8F97F6` | `#1E27B8` | — |
| Ragu-ragu | `#FCEFD3` | `#D98200` | `#A86200` | titik 5px kanan atas |
| Sedang dikerjakan | `#12141C` | `#12141C` | `#FAF8F1` | ring ganda 3px + 5px |
| Terkunci | — | — | — | opacity .35 |

**Baris opsi jawaban (`.opt`)** — min-height 56px (mobile 58px), radius 8px, bulatan huruf 26px. Terpilih: border `#2F3BE8` + inset 1px + latar `#F1F2FE` + bulatan terisi. Fokus keyboard: outline 2px.

**Timer** — mono 22px/700 tabular. State: normal (teks `#FAF8F1`), `is-warn` ≤ 5 menit (latar `#3A2A12`, teks `#FFC24B`), `is-crit` ≤ 1 menit (latar `#3B1512`, teks `#FF7A6A`, pulse 1.6s).

---

## 8. State sistem

Setiap permukaan data wajib punya empat state:

| State | Perlakuan |
|---|---|
| **Loading** | Skeleton dengan radius sama seperti konten, tanpa spinner di tengah kartu. Tombol memakai `.is-loading`. |
| **Empty** | Ikon 24px + satu kalimat penjelas + satu aksi. Contoh: “Belum ada simulasi. Mulai yang pertama untuk melihat analisis.” |
| **Error** | Pesan spesifik + tindakan pemulihan (“Coba lagi”, “Periksa koneksi”). Jangan hanya “Terjadi kesalahan”. |
| **Success** | Konfirmasi singkat, bukan halaman penuh, kecuali untuk alur pendaftaran/ujian. |

Validasi form: per-field saat blur, ringkasan di atas form saat submit, fokus otomatis ke field pertama yang salah.

---

## 9. Aksesibilitas

- Kontras minimum 4.5:1 untuk teks, 3:1 untuk border ikon dan kontrol.
- Target sentuh minimum **44×44px**; di ujian 46–56px.
- Focus ring selalu terlihat (2px, offset 2px). Jangan `outline: none` tanpa pengganti.
- `prefers-reduced-motion` mematikan marquee, reveal, dan pulse.
- Timer **tidak** diumumkan setiap detik; hanya sekali saat melewati ambang 5 menit.
- Jangan menyampaikan status hanya lewat warna: state soal memakai warna + titik/ring, state form memakai ikon + teks.
- `lang="id"` pada `<html>`, `viewport` tanpa `user-scalable=no`.

---

## 10. Struktur file

```
design/
├── assets/
│   ├── fonts.css        @font-face self-hosted
│   ├── fonts/*.woff2
│   ├── tokens.css       semua token (warna, tipe, spasi, radius, shadow, motion)
│   └── base.css         reset + tipografi + komponen dasar (btn, field, card, badge, …)
├── landing-page/index.html
├── login/index.html
├── register/index.html
└── exam-interface/index.html
```

Aturan untuk programmer:

1. Impor `fonts.css` → `tokens.css` → `base.css` → CSS halaman.
2. Jangan menambah warna baru tanpa memperbarui `tokens.css`.
3. Nama kelas mengikuti pola BEM-ringan: `.block__element--modifier` (`.qcard__head`, `.tier--pop`).
4. State memakai kelas `is-*` (`.is-loading`, `.is-open`, `.is-answered`) dan atribut ARIA untuk pembaca layar.
