# LMS-CAT — User Flow v1.0

Cakupan: alur yang diminta brief (landing → daftar → masuk → mulai ujian → mengerjakan → mengakhiri).
Halaman dashboard, pembayaran, dan halaman hasil penuh **tidak** dirancang pada tahap ini; titik sambungnya ditandai `→ [di luar cakupan]`.

---

## 0. Peta alur

```
                    ┌─────────────────────────────┐
                    │   Landing page (/)          │
                    │   hero · fitur · paket      │
                    └──────┬───────────────┬──────┘
             "Daftar"      │               │      "Masuk"
                           ▼               ▼
                   ┌──────────────┐  ┌──────────────┐
                   │ /register    │◄─┤ /login       │
                   │ 4 field      │  │ email + sandi│
                   └──────┬───────┘  └──────┬───────┘
                    sukses│                 │ sukses
                          ▼                 ▼
                   ┌──────────────────────────────┐
                   │  Pemilihan simulasi          │ → [di luar cakupan]
                   │  (paket / daftar tryout)     │
                   └──────────────┬───────────────┘
                                  ▼
                   ┌──────────────────────────────┐
                   │  /exam  Antarmuka CAT        │
                   │  timer · soal · navigator    │
                   └──────────────┬───────────────┘
                        akhiri + konfirmasi
                                  ▼
                   ┌──────────────────────────────┐
                   │  Ujian terkirim              │
                   │  → Lihat analisis hasil      │ → [di luar cakupan]
                   └──────────────────────────────┘
```

---

## 1. Pengunjung membuka landing page

**Tujuan pengguna:** memutuskan dalam < 10 detik apakah produk ini relevan.
**Tujuan bisnis:** mengarahkan ke daftar, atau minimal ke bukti produk.

| Langkah | Yang dilihat | Keputusan |
|---|---|---|
| 1.1 | Navbar + hero | “Ini untuk SKD CPNS 2027?” |
| 1.2 | H1 + subjudul | “Ini menjawab masalah saya?” |
| 1.3 | Visual kartu hasil | “Produknya benar-benar ada?” |
| 1.4 | Pilih aksi | Daftar / lihat analisis / scroll |

**Percabangan:**

- **Yakin** → klik “Daftar” (navbar atau hero) → alur 2.
- **Ingin bukti dulu** → “Lihat contoh analisis” → seksi `#analisis` → tab materi/waktu/strategi → CTA di bawah.
- **Belum yakin** → scroll: masalah → keunggulan → cara kerja → program → paket → FAQ → CTA band.
- **Sudah punya akun** → “Masuk” → alur 3.

**State & tepi:**

- Font gagal dimuat → fallback system-ui, layout tidak berubah (tidak ada CLS karena `font-display: swap` + metrik mirip).
- `prefers-reduced-motion` → marquee berhenti, reveal langsung tampil.
- Tanpa JavaScript → semua seksi tetap terbaca; tab analisis menampilkan panel pertama; FAQ tetap berfungsi (`<details>`); menu mobile tidak bisa dibuka → sediakan tautan fallback di footer.
- Data ilustratif selalu berlabel; jika label dihapus, angka dianggap klaim palsu.

**Metrik yang relevan:** klik CTA hero, scroll depth 50/75%, klik “Lihat contoh analisis”, rasio daftar/lihat.

---

## 2. Pengunjung memilih daftar

**Tujuan pengguna:** membuat akun tanpa merasa sedang mengisi formulir panjang.

| Langkah | Layar | Detail |
|---|---|---|
| 2.1 | `/register` | Form tampil langsung; tidak ada modal, tidak ada langkah bertahap |
| 2.2 | Isi nama | Validasi saat blur: ≥ 3 karakter |
| 2.3 | Isi email | Validasi format saat blur |
| 2.4 | Isi kata sandi | Indikator kekuatan aktif; bantuan “Gunakan 8+ karakter” |
| 2.5 | Konfirmasi | Penanda “Kata sandi cocok” muncul saat sama |
| 2.6 | Centang persetujuan | Wajib; error muncul di bawah checkbox |
| 2.7 | Tekan “Buat akun” | Tombol `.is-loading`, input disabled secara visual |

**Percabangan:**

- **Ada field salah** → pesan per field + fokus ke field pertama yang salah. Tidak ada alert global kecuali lebih dari satu error.
- **Email sudah terdaftar** (nanti, dari API) → pesan di field email: “Email ini sudah terdaftar. Masuk atau gunakan email lain.” dengan tautan ke `/login`.
- **Berhasil** → form diganti panel sukses (bukan modal, bukan toast): centang lime, “Selamat, akunmu siap.”, 3 langkah berikutnya, CTA “Mulai simulasi pertama”.
- **Menutup tab di tengah** → tidak ada penyimpanan draf (data sensitif); biarkan kosong saat kembali.

**Keputusan desain:** tidak ada verifikasi email, tidak ada nomor telepon, tidak ada login sosial — karena belum tersedia di sistem. Jika nanti ditambahkan, tambahkan sebagai layar terpisah setelah sukses.

**Metrik:** completion rate form, error per field, waktu isi rata-rata.

---

## 3. Pengguna melakukan login

| Langkah | Layar | Detail |
|---|---|---|
| 3.1 | `/login` | Form fokus; di mobile panel visual disembunyikan |
| 3.2 | Isi email + sandi | Tombol mata untuk menampilkan sandi |
| 3.3 | Opsional “Ingat saya” | Mempersistenkan sesi (keputusan backend) |
| 3.4 | Tekan “Masuk” | Loading state, tombol disabled |
| 3.5 | Sukses | Redirect ke beranda akun `→ [di luar cakupan]` |

**Percabangan:**

- **Lupa sandi** → `→ [di luar cakupan]`; tautan tetap ada karena sudah menjadi ekspektasi pengguna.
- **Kredensial salah** → alert di atas form, pesan generik (tidak menyebut field mana yang salah, untuk keamanan).
- **Terlalu banyak percobaan** (nanti) → pesan dengan waktu tunggu, bukan captcha yang membingungkan.
- **Sudah login** → arahkan langsung ke beranda akun.

**State:** default, error validasi, error kredensial, loading, sukses. Semua dapat dipratinjau lewat panel “Pratinjau state prototipe” di prototipe (harus dihapus saat produksi).

---

## 4. Pengguna memulai ujian

| Langkah | Layar | Detail |
|---|---|---|
| 4.1 | Beranda akun | `→ [di luar cakupan]` — kartu simulasi tersedia |
| 4.2 | Pilih simulasi / paket | `→ [di luar cakupan]` — komponen paket dari landing dapat dipakai ulang |
| 4.3 | Layar persiapan ujian | **Disarankan** (belum dibuat): ringkasan aturan, jumlah soal, durasi, tombol “Mulai” |
| 4.4 | `/exam` | Timer mulai berjalan, soal pertama tampil |

**Prasyarat yang harus dipenuhi sebelum masuk ujian:**

- Sesi valid dan peserta terdaftar pada simulasi.
- Konfigurasi ujian tersedia (bagian, jumlah soal, durasi, aturan pindah bagian).
- Jika konfigurasi gagal dimuat → tampilkan layar error dengan “Coba lagi”, **jangan** mulai timer.

**Keputusan desain:** timer tidak boleh berjalan sebelum soal pertama berhasil dirender. Tampilkan skeleton soal, bukan timer kosong.

---

## 5. Pengguna mengerjakan soal

Ini alur dengan frekuensi tertinggi. Setiap iterasi harus terasa instan.

```
        ┌──────────────────────────────┐
        │  Soal N tampil               │
        │  timer berjalan              │
        └───────┬──────────────┬───────┘
                │              │
        pilih opsi        tandai ragu
                │              │
                ▼              ▼
        ┌──────────────────────────────┐
        │  State tersimpan otomatis    │
        │  navigator + progres update  │
        └───────┬──────────────────────┘
                │
      ┌─────────┼──────────┬─────────────┐
      ▼         ▼          ▼             ▼
  Berikutnya  Sebelumnya  Nomor soal   Akhiri ujian
      │         │          │             │
      └─────────┴──────────┴─────────────┘
                │                        ▼
             soal N±1            alur 6 (konfirmasi)
```

| Aksi | Respons yang diharapkan | Waktu |
|---|---|---|
| Pilih opsi | Opsi terpilih, nomor di navigator berubah biru, progres naik | < 100ms (optimistic) |
| Tandai | Tombol jadi “Ditandai”, titik amber di navigator | < 100ms |
| Pindah soal | Soal baru, fokus ke opsi pertama, scroll ke atas | < 150ms |
| Buka navigator (mobile) | Bottom sheet naik 380ms | instan secara persepsi |
| Timer ≤ 5 menit | Warna amber, satu pengumuman ARIA | tepat waktu |
| Timer ≤ 1 menit | Merah + pulse | — |
| Koneksi putus | Indikator tenang “Belum tersimpan”, coba ulang otomatis | — |

**Aturan UX:**

- Jangan pernah menampilkan benar/salah selama ujian.
- Jangan memblokir perpindahan soal dengan dialog.
- Konfirmasi hanya untuk aksi destruktif (akhiri ujian).
- Pintasan keyboard tidak boleh bentrok dengan input teks.
- Di mobile, semua aksi utama dalam jangkauan ibu jari (bar bawah).

**Tepi:**

- Soal dengan bacaan panjang → stimulus tumbuh, opsi tetap terlihat dengan scroll normal (bukan area scroll bertingkat).
- Jumlah opsi bukan 5 → layout tetap; bulatan huruf mengikuti jumlah.
- Pengguna menutup tab → jawaban terakhir yang tersimpan tetap ada saat kembali; tampilkan “Melanjutkan ujian” dengan sisa waktu yang benar.
- Waktu habis → modal konfirmasi otomatis, tanpa opsi “Lanjut mengerjakan”.

---

## 6. Pengguna mengakhiri ujian

| Langkah | Layar | Detail |
|---|---|---|
| 6.1 | Tekan “Akhiri ujian” | Modal konfirmasi |
| 6.2 | Modal | Judul “Akhiri ujian sekarang?”, penjelasan tidak bisa diubah, 3 angka: dijawab / belum / ragu |
| 6.3a | “Lanjut mengerjakan” | Modal tertutup, fokus kembali ke tombol pemicu, timer tetap berjalan |
| 6.3b | “Ya, akhiri ujian” | Timer berhenti, jawaban dikirim |
| 6.4 | Layar “Ujian terkirim” | Ringkasan: ujian, bagian, terjawab, ragu, waktu terpakai |
| 6.5 | “Lihat analisis hasil” | `→ [di luar cakupan]` (halaman hasil) |

**Peringatan di modal:**

- Jika ada jawaban kosong: sebutkan jumlahnya, jangan menghalangi.
- Jika ada soal ragu-ragu: sebutkan jumlahnya sebagai pengingat, bukan peringatan merah.
- Nada: netral dan informatif, bukan menakut-nakuti.

**Tepi:**

- Gagal kirim → modal tetap terbuka dengan pesan “Gagal mengirim. Periksa koneksi lalu coba lagi.” + tombol “Coba lagi”. Jangan menutup layar sebelum server mengonfirmasi.
- Kirim ganda → tombol disabled setelah klik pertama.
- Timer habis bersamaan dengan klik → server yang menentukan; UI menampilkan state terkirim.

---

## 7. Ringkasan state per layar

| Layar | Loading | Empty | Error | Success |
|---|---|---|---|---|
| Landing | Skeleton kartu hero (opsional) | — | — | — |
| Masuk | Tombol loading | — | Alert kredensial / error field | Alert hijau + redirect |
| Daftar | Tombol loading | — | Error per field | Panel sukses |
| Ujian | Skeleton soal sebelum timer | — | Layar “Gagal memuat ujian” + coba lagi | — |
| Akhiri ujian | Tombol “Mengirim…” | — | Modal error + coba lagi | Layar terkirim |

---

## 8. Yang sengaja belum dirancang

| Layar | Alasan | Titik sambung |
|---|---|---|
| Beranda akun / dashboard | Di luar cakupan brief | Setelah login sukses |
| Halaman hasil tryout lengkap | Hanya preview di landing | Tombol “Lihat analisis hasil” |
| Pembayaran | Metode belum ditetapkan | Tombol tier di seksi paket |
| Lupa kata sandi | Butuh keputusan backend (email/OTP) | Tautan di form masuk |
| Verifikasi email | Belum tersedia | — |
| Pengaturan profil | Belum dibutuhkan | Avatar di header ujian |
