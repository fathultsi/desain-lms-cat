# LMS-CAT — Implementasi Frontend v1

Aplikasi berjalan dari desain v2.0 (arah **Navy & Gold**). Tanpa backend, tanpa build step.
Semua state disimpan di `localStorage` perangkat.

> Ini **implementasi desain**, bukan produk produksi. Lihat “Yang belum ada” di bawah.

---

## Menjalankan

Aplikasi memakai `fetch`/`localStorage`; buka lewat server lokal, jangan `file://`.

```bash
cd design
python -m http.server 4173 --bind 127.0.0.1
```

Lalu buka **http://127.0.0.1:4173/app/**

Versi terbit: `https://fathultsi.github.io/desain-lms-cat/app/`

---

## Rute

| Rute | Isi |
|---|---|
| `app/` | Landing page (dari desain v2, tanpa perubahan visual) |
| `app/daftar/` | Form pendaftaran → menyimpan sesi → layar sukses |
| `app/masuk/` | Form masuk → menyimpan sesi → langsung ke ujian |
| `app/ujian/` | Ujian CAT: 30 soal TWK, timer 30 menit, autosave |
| `app/hasil/` | Analisis hasil yang **dihitung dari jawaban nyata** |

---

## Alur yang berfungsi

1. **Daftar** → validasi per field, indikator kekuatan sandi, sesi tersimpan.
2. **Ujian** → soal, opsi, navigator 30 nomor, tandai ragu-ragu, pintasan `1–5` / `←` `→` / `F`.
3. **Timer** → berbasis `endsAt`, jadi tetap benar setelah refresh. Berubah amber ≤5 menit, merah ≤1 menit.
4. **Autosave** → setiap jawaban & setiap 5 detik waktu berjalan. Tutup tab, buka lagi, jawaban tetap ada.
5. **Lanjutkan** → membuka ujian yang belum selesai menampilkan banner dan sisa waktu sebenarnya.
6. **Akhiri** → modal ringkasan (dijawab / belum / ragu) → layar terkirim → halaman hasil.
7. **Hasil** → skor, benar/salah/kosong, waktu, peta 5 kategori, heatmap 30 butir, jejak waktu per soal, 3 soal paling lambat, 2 rekomendasi prioritas.
8. **Ulangi** → menghapus percobaan dan memulai ujian baru.

### Rumus penilaian

```
skor = jumlah benar × 5          (maks 150 untuk 30 soal)
persentase kategori = benar / total soal kategori
rata-rata waktu = total detik / jumlah soal terjawab
rekomendasi = 2 kategori dengan persentase terendah
```

---

## Yang belum ada (penting)

| Kebutuhan | Status |
|---|---|
| Backend, akun nyata, sesi server | ❌ Tidak ada. Sesi hanya di perangkat. |
| Bank soal produksi | ❌ 30 soal contoh TWK, bukan soal resmi. |
| Bagian TIU & TKP | ❌ Tab bagian terkunci; hanya TWK. |
| Penilaian TKP (skor 1–5 per opsi) | ❌ Belum diimplementasikan. |
| Pembayaran / paket | ❌ Belum ada. |
| Sinkronisasi lintas perangkat | ❌ Tidak ada. |

**Autentikasi di halaman masuk adalah simulasi**: email + sandi apa pun yang formatnya valid akan diterima, karena tidak ada server untuk memverifikasi. Jangan dipakai untuk data nyata.

---

## Mode demo

| URL | Efek |
|---|---|
| `/app/ujian/?dev=1` | Menyiapkan sesi contoh + tombol “Isi jawaban contoh & kirim” |
| `/app/ujian/?dev=1&auto=1` | Mengisi & mengirim otomatis — untuk menampilkan alur hasil tanpa mengerjakan 30 soal |

Keduanya **hanya untuk demo/QA**. Hapus blok `devMode` di `assets/js/exam.js` sebelum produksi.

---

## Struktur

```
app/
├── index.html            landing
├── masuk/index.html      login
├── daftar/index.html     register
├── ujian/index.html      ujian CAT
├── hasil/index.html      hasil & analisis
└── assets/
    ├── tokens.css        design token (sama dengan folder design)
    ├── base.css          komponen dasar
    ├── fonts.css + fonts/
    └── js/
        ├── store.js      sesi & percobaan (localStorage)
        ├── exam-data.js  30 soal + konfigurasi
        ├── exam.js       mesin ujian (timer, autosave, submit)
        └── result.js     perhitungan & render analisis
```

Semua skrip berupa *classic script* (bukan ES module) supaya tetap jalan saat dibuka langsung dari disk.

---

## Kontrak backend yang dibutuhkan

Agar bisa naik ke produksi, empat endpoint ini sudah cukup menggantikan `store.js`:

```
POST /api/auth/register   { name, email, password }      -> { token, user }
POST /api/auth/login      { email, password }            -> { token, user }
GET  /api/exams/:id                                      -> { config, questions[] }
POST /api/attempts        { examId }                     -> { attemptId, endsAt }
PATCH /api/attempts/:id   { answers, flagged }           -> 204
POST /api/attempts/:id/submit                            -> { score, analysis }
```

Yang perlu diputuskan backend:

1. **Skor TKP** — 1–5 per opsi, bukan 0/5. `result.js` saat ini mengasumsikan 5 poin per jawaban benar.
2. **Timer** — kirim `endsAt` dari server, jangan percaya jam perangkat.
3. **Aturan pindah bagian** — TWK/TIU/TKP saat ini dikunci berurutan di UI.
4. **Autosave** — debounce 400ms di klien, idempoten di server.

---

## Catatan: temuan audit belum diterapkan

`design/review-landing-page.md` mencatat P0/P1 pada landing page. Sesuai instruksi, **tidak ada perubahan desain** yang diterapkan pada implementasi ini — landing disalin apa adanya (hanya path tautan yang disesuaikan).

Yang masih terbuka dan menunggu keputusan:

- Skor TIU **112** pada kartu contoh tidak mungkin di bawah aturan 5 poin/soal (harus 110) — P1-01.
- Badge **“Paling dipilih”** pada paket Intensif — P0-02.
- Tier **“Gratis”** berdampingan dengan **“Rp [—]”** — P1-05.
- Heatmap contoh **65 sel** untuk 110 soal — P2-01.
- Label **“Peta penguasaan · 110 soal”** padahal isinya 5 kategori TWK — P1-03.

Perbaikan ini hanya menyentuh teks dan atribut; tidak mengubah struktur visual.
