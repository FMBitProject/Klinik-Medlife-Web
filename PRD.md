# PRD — Website Klinik & Apotek Medlife (Tangerang)

> **Status:** Draft v0.3 · 13 Nov 2026 · Disusun untuk Ferel (pembuat website)
> **Perubahan v0.3:** jawaban interview Ferel dimasukkan (Bagian 13, sumber [S14]); scope diubah menjadi **frontend saja, tanpa Sanity CMS** (keputusan Ferel [S14]); keputusan booking, hosting, bahasa, branding, harga, BPJS, dan parkir diperbarui; pertanyaan yang belum terjawab ditandai untuk ditanyakan ke pemilik klinik.
> **Aturan dokumen:** setiap fakta diberi kode sumber `[S#]` (daftar di akhir). Hal yang **tidak ada di sumber** ditandai **BELUM DIKETAHUI → Q#**. Bagian berlabel **Rekomendasi** adalah usulan desain, bukan fakta.

---

## 1. Ringkasan

Klinik & Apotek Medlife adalah klinik di Aniva Junction, Pagedangan, Kab. Tangerang (area Gading Serpong) [S1]; Ferel mengonfirmasi bahwa Medlife yang dimaksud adalah yang di Tangerang [S13]. Di Google Maps klinik berating 5,0 dari 818 ulasan [S1], tetapi **belum memiliki website**: listing Maps masih menampilkan "Add website" [S1][S2]. Kehadiran online saat ini: Google Maps, Instagram (3.075 pengikut), TikTok, dan Linktree [S1][S3][S4][S7].

Tujuan PRD: mendefinisikan website resmi yang mengubah reputasi Google yang kuat menjadi kunjungan dan janji temu lewat informasi layanan yang jelas dan kontak WhatsApp yang mudah. **Hanya frontend** yang dibangun, mengacu pada tampilan dan struktur template 21st.dev "Sanity + Next.js Personal Website" [S10]; bagian CMS (Sanity) tidak dipakai [S14].

## 2. Profil Bisnis (fakta terverifikasi)

| Item | Data | Sumber |
|---|---|---|
| Nama untuk website | **Klinik & Apotek Medlife** (nama di Google Maps) | [S1]; dipilih Ferel [S14] |
| Nama di Instagram | Klinik Pratama Medlife | [S3] |
| Alamat | Aniva Junction, Blok I No. 17, Medang, Kec. Pagedangan, Kab. Tangerang, Banten 15334 | [S1] |
| Koordinat | -6.2715018, 106.6219387 | [S1] (URL Maps) |
| Telepon / WhatsApp | 0878-1820-0060 | [S1][S2][S4] |
| Jam buka | **Setiap hari 09.00–21.00 (Senin–Minggu, Rabu buka)** | [S1][S4]; dikonfirmasi Ferel [S14] |
| Rating | 5,0 (818 ulasan Google) | [S1] |
| Tagline | "Your Medical Partner" | [S4][S7] |
| Instagram | 3.075 pengikut, 127 kiriman | [S3] |
| Mitra asuransi | BCA Life (mitra MEDLIFE CLINIC – Tangerang) | [S5] |
| BPJS | **Tidak diterima** | Ferel [S14]; belum diverifikasi ke pemilik |
| Parkir | **Ada** (detail lokasi/kapasitas belum diketahui) | Ferel [S14]; belum diverifikasi ke pemilik |
| Terdaftar resmi | Tercatat sebagai klinik di Kab. Tangerang pada daftar SATUSEHAT (cuplikan aibiz.id; halaman penuh belum dibuka) | [S8] |
| Fasilitas | Kursi roda dapat masuk, toilet, toilet netral gender, ruang menyusui; janji temu diperlukan | [S1] |
| Pembayaran | Kartu kredit, kartu debit, NFC mobile payments | [S1] |

**Konflik data (selesai):** unggahan Instagram pihak ketiga berumur ±3 tahun menyebut "kecuali Rabu libur" [S6]; Maps dan Linktree menampilkan buka setiap hari [S1][S4], dan Ferel memilih jam tersebut [S14].

**Peringatan entitas:** jangan memakai data Medlife Wellness Clinic Mataram (Lombok) [S2] atau domain `medlifeclinic.com` yang saat dicek menampilkan halaman HugeDomains, bukan situs klinik ini [S9].

## 3. Layanan yang Terdokumentasi

Dari profil Instagram resmi [S3] dan cuplikan media sosial [S2][S6]:

1. Konsultasi / praktek dokter [S3][S6]
2. Farmasi / apotek [S3][S6]
3. Vaksinasi anak dan dewasa [S3][S6]
4. Laboratorium [S3][S6]
5. Infusion treatment [S3][S6]
6. Homecare / home service [S3][S6]
7. Corporate services / MCU Corporate [S3]
8. Suntikan vitamin dan perawatan luka (deskripsi bisnis di Google) [S2]
9. Pemesanan alat medis dengan pengiriman — disebut di ulasan pelanggan, **bukan** klaim resmi klinik [S1]

**BELUM DIKETAHUI:** daftar rinci layanan (jenis vaksin, pemeriksaan lab, infus, wilayah homecare) → **Q8**; isi paket MCU → **Q7**; arti sorotan Instagram "Boomesport", "St. Laurensius", "Boston Village" [S3] → **Q9**; daftar harga (website akan menampilkan harga [S14], datanya belum ada) → **Q5**.

## 4. Analisis Situasi

### 4.1 Kekuatan
- Reputasi Google 5,0 dari 818 ulasan [S1].
- Tema ulasan: dokter ramah (170 sebutan), perawat ramah (50), penjelasan dokter (43), tindak lanjut via WhatsApp (12) [S1].
- Pemilik membalas ulasan [S1].

### 4.2 Celah
- Tidak ada website; tidak ada halaman milik sendiri untuk dicari atau dibagikan [S1][S2].
- Informasi tersebar di bio Instagram, Linktree, TikTok [S3][S4][S7].
- Tombol kontak di Maps mengarah ke whatsapp.com [S1].
- Nama klinik bersaing dengan Medlife di kota lain di hasil Google [S2].

### 4.3 Kompetitor terdekat
Dari "People also search for" Google Maps [S1]: Klinik Alvadent Gading Serpong (5,0 / 203), Klinik Guna Ardi Medika (5,0 / 142), Klinik Bela Medika (3,7 / 431), Klinik Kimia Farma Mendrisio Tangerang (3,8 / 106), PROLIFE Gading Serpong (apotek, 3,8 / 19). Audit website kompetitor **belum dilakukan** (Bagian 12).

### 4.4 Pemetaan masalah
Pemetaan masalah sebaiknya dilengkapi **Pareto** (pertanyaan/layanan paling sering), **tree diagram** (penyebab pasien tidak jadi booking), dan **value stream mapping** (daftar → dokter → apotek). Datanya belum ada → **Q14–Q16**.

## 5. Sasaran dan Non-Goals

### Sasaran
1. Menjadi sumber informasi resmi klinik (alamat, jam, layanan, harga, kontak) yang ditemukan di pencarian Google.
2. Memudahkan janji temu **via WhatsApp** [S14]; Maps menyatakan janji temu diperlukan dan kontaknya WhatsApp [S1].
3. Menampilkan kepercayaan yang sudah ada (rating, ulasan, tim) [S1]; pemakaian foto dan kutipan ulasan diizinkan menurut Ferel [S14].
4. Membuka kanal B2B untuk layanan korporat/MCU dan mitra asuransi [S3][S5].

### Non-goals versi 1
- **Tanpa CMS/Sanity di versi 1; Sanity ditunda ke fase berikutnya** (keputusan Ferel [S14]; upload gambar/file oleh staf lewat Studio baru dimungkinkan saat Sanity ditambahkan [S15]). Konsekuensi: perubahan konten dilakukan di kode lalu deploy ulang oleh Ferel; staf klinik tidak dapat mengedit sendiri (lihat Q20).
- Tanpa formulir janji temu; booking WhatsApp saja [S14].
- Tanpa versi bahasa Inggris [S14].
- Rekam medis elektronik, pembayaran online, telemedicine, jual obat resep online (Rekomendasi: tidak ada bukti kebutuhan di sumber dan menyangkut aturan data pasien/farmasi → Q12).

## 6. Target Pengguna

Disimpulkan dari layanan [S3] dan lokasi [S1]; data demografi pasien **belum ada** → **Q10b**.

| Persona | Kebutuhan utama | Dasar |
|---|---|---|
| Pasien umum Gading Serpong/Pagedangan | Cek jam, lokasi, layanan, harga, chat WA | [S1][S4] |
| Orang tua (vaksin anak) | Info vaksin dan jadwal | [S3][S6] |
| Pasien rutin obat | Cek ketersediaan obat | [S6] (cuplikan IG lama) |
| HRD / perusahaan | Paket MCU, kontak B2B | [S3] |
| Peserta BCA Life | Konfirmasi klinik mitra | [S5] |
| Pasien BPJS | Perlu tahu klinik **tidak** menerima BPJS | [S14] |

## 7. Acuan Frontend: Template 21st.dev "Sanity + Next.js Personal Website"

### 7.1 Frontend vs CMS pada template
README menyatakan template memakai **Next.js untuk frontend** dan **Sanity untuk mengelola konten** [S12]. Karena Ferel hanya membutuhkan frontend [S14], yang diambil adalah lapisan Next.js + Tailwind + tampilan; lapisan Sanity dibuang.

| Aspek | Temuan pada template | Dipakai? | Sumber |
|---|---|---|---|
| Frontend | Next.js (Cache Components), TypeScript, Tailwind CSS | **Ya** | [S12] |
| Tampilan | Header "Personal Website" + "About"; judul besar rata tengah; daftar proyek berupa kartu (judul, deskripsi, tag #…); footer; blok "Next steps" | **Ya** (disesuaikan) | [S11] |
| Tipografi | Inter (sans) dan PT Serif | Ya, boleh diganti | [S11] (pembacaan CSS preview) |
| Rute | `/`, `/about`, `/projects/[slug]` | Ya, diganti nama (`/layanan/[slug]`) | [S11][S12] |
| CMS | Sanity Studio di `/studio`, dokumen Page dan Project, Sanity Live, draft mode, route `/api/revalidate` | **Tidak** | [S12] |
| Hosting | README memakai Vercel + GitHub | **Ya, Vercel** | [S12][S14] |
| Hapus blok "Next steps" | Hapus komponen `IntroTemplate` di `/app/(website)/layout.tsx` | Ya | [S12] |
| Lisensi | Tidak ditemukan: path `LICENSE` di branch `main` mengembalikan 404 (dicek 13 Nov 2026); `package.json` dan metadata repo belum dibaca | **Perlu dicek** → Q19 | [S12] |

### 7.2 Pekerjaan membuang Sanity (Rekomendasi)
Berdasarkan daftar file di README [S12], bagian berikut terkait Sanity dan perlu dilepas atau diganti: `sanity.config.ts`, `sanity.cli.ts`, `/app/studio`, `/app/api/draft-mode`, `/app/api/revalidate`, `/sanity/*`, `/functions`, `sanity.blueprint.ts`, workflow `blueprints.yml`, serta pengambilan data lewat `sanityFetch` di layout dan halaman. Gantinya: file data bertipe di repo (misalnya `content/site.ts`) berisi nama klinik, kontak, jam, layanan, harga, dan tim. Detail kode **belum diperiksa** (hanya README yang dibaca); estimasi usaha sebaiknya dinilai setelah repo dibuka.
Alternatif yang dipertimbangkan: memulai proyek Next.js + Tailwind baru dan hanya meniru tata letak, sehingga tidak ada sisa dependensi Sanity.

### 7.3 Yang **tidak terlihat** di template dan harus dibangun (Rekomendasi)
Berdasarkan preview [S11]:

1. Tombol CTA WhatsApp (header dan melayang) dengan pesan awal terisi.
2. Blok jam operasional dan alamat; peta tertanam dengan tombol petunjuk arah; info parkir.
3. Komponen harga layanan.
4. Komponen bukti sosial (rating dan kutipan ulasan).
5. Halaman Korporat & MCU (tanpa formulir; kontak WA).
6. Metadata SEO lokal dan data terstruktur (LocalBusiness/MedicalClinic).
7. Penyesuaian visual ke identitas klinik: logo dan warna diambil dari Instagram/Maps [S14] (aset belum diunduh/diverifikasi).
8. Penghapusan teks contoh dan blok "Next steps" [S11][S12].

## 8. Ruang Lingkup Fitur

Prioritas = Rekomendasi (MoSCoW).

| # | Fitur | Prioritas | Dasar / Catatan |
|---|---|---|---|
| F1 | Beranda: nama, tagline, CTA WhatsApp, jam, alamat | Must | [S1][S4] |
| F2 | Tombol WhatsApp melayang, pesan awal terisi | Must | Kontak WA [S1][S4]; booking WA saja [S14]; isi pesan awal belum ditentukan |
| F3 | Halaman daftar Layanan + detail per layanan (data di file) | Must | [S3]; pola dari template [S11] |
| F4 | Lokasi: peta tertanam, petunjuk arah, info parkir | Must | [S1]; parkir ada [S14]; detail → Q11b |
| F5 | Jam operasional 09.00–21.00 setiap hari | Must | [S1][S4][S14] |
| F6 | Tautan IG dan TikTok | Must | [S3][S7] |
| F7 | Harga layanan | Must | Ferel: tampilkan harga [S14]; daftar harga belum ada → Q5 |
| F8 | Bukti sosial: rating 5,0 / 818 ulasan + kutipan | Should | [S1]; izin pakai diberikan [S14] |
| F9 | Halaman Korporat & MCU (kontak WA) | Should | [S3]; isi paket → Q7 |
| F10 | Info asuransi/mitra (BCA Life) + pernyataan tidak menerima BPJS | Should | [S5][S14]; mitra lain → Q6b |
| F11 | Profil dokter dan tim | Should | Ferel: ya, tampilkan [S14]; foto tim ada di Maps [S1]; nama, foto, spesialisasi, nomor izin → Q2 |
| F12 | Galeri fasilitas | Could | Foto di Maps/IG [S1][S3]; izin pakai diberikan [S14] |
| F13 | Blog/edukasi kesehatan | Could | Belum ada bukti kebutuhan; putuskan setelah Q14 |
| ~~F14~~ | ~~Formulir janji temu~~ | Dibatalkan | Booking WA saja [S14] |
| ~~F15~~ | ~~Akses CMS/Studio untuk staf~~ | Dibatalkan | Tanpa Sanity [S14] |

## 9. Struktur Informasi (Rekomendasi)

```
/                    Beranda
/layanan             Daftar layanan + harga
  /layanan/[slug]    Konsultasi · Apotek · Vaksinasi · Laboratorium · Infusion · Homecare
/korporat            Korporat & MCU
/tentang             Tentang klinik, tim dokter
/lokasi              Lokasi, jam, parkir
```

## 10. Kebutuhan Teknis

**Stack:** Next.js, TypeScript, Tailwind CSS, konten dalam file data di repo, repo di GitHub (mengikuti sisi frontend template [S12]).
**Hosting:** Vercel [S14]. Domain, email, dan siapa yang membayar langganan → Q17b.
**Non-fungsional (Rekomendasi):**
- Mobile-first: lalu lintas diperkirakan dari Instagram/TikTok/Maps [S1][S3][S7].
- Bahasa Indonesia saja [S3][S4][S14].
- SEO lokal: NAP (nama, alamat, telepon) identik dengan listing Google [S1]; tautkan website ke Google Business Profile.
- Aksesibilitas: kontras dan ukuran teks memadai; cantumkan fasilitas aksesibel sesuai Maps [S1].
- Privasi: tanpa formulir pengumpulan data pasien; aturan konten promosi layanan kesehatan → Q12.
- Operasional: jangan menyimpan kunci API atau token di PRD maupun repo publik.
- Pembaruan konten: lewat Ferel (edit file lalu deploy ulang); hindari harga/jam hard-coded tersebar, pusatkan di satu file data.

## 11. Metrik Keberhasilan

Tidak ada baseline di sumber → target angka **BELUM DIKETAHUI → Q15**. Metrik yang dilacak: klik tombol WhatsApp, klik petunjuk arah, kunjungan organik vs IG/TikTok, klik di halaman Korporat & MCU, posisi kata kunci "klinik Gading Serpong" (perlu riset kata kunci).

## 12. Risiko dan Langkah Lanjutan

| Risiko | Mitigasi |
|---|---|
| Daftar harga, layanan rinci, dokter belum ada | Ambil dari pemilik (Q2, Q5, Q7, Q8) sebelum konten final |
| Staf klinik tidak bisa mengedit sendiri (tanpa CMS) | Disepakati dengan pemilik; Ferel menerima permintaan perubahan; struktur data dibuat rapi agar mudah ditambah CMS nanti |
| Klaim medis/promosi | Teks disetujui dokter penanggung jawab; hindari klaim yang tidak terbukti |
| Jawaban Ferel belum diverifikasi pemilik (BPJS, parkir, izin foto/ulasan) | Konfirmasi singkat ke pemilik sebelum rilis |
| Lisensi template tidak jelas | Cek lisensi sebelum memakai kode template secara komersial (Q19) |
| Sisa dependensi Sanity di repo | Pertimbangkan proyek baru yang meniru layout (7.2) |
| Salah entitas | Pakai hanya S1–S5 |

**Riset yang belum dilakukan:** audit website kompetitor (4.3); buka penuh halaman aibiz.id/SATUSEHAT [S8] dan halaman mitra BCA Life [S5]; baca kode repo template dan lisensinya [S12]; cek ketersediaan domain.

## 13. Status Pertanyaan Interview

Jawaban "Ferel" berasal dari kuesioner di chat sesi ini [S14] dan belum diverifikasi ke pemilik klinik kecuali dinyatakan.

### Sudah dijawab
| # | Pertanyaan | Jawaban | Sumber |
|---|---|---|---|
| Q1 | Nama untuk website | Klinik & Apotek Medlife | [S14] |
| Q2 | Tampilkan profil dokter? | Ya (nama, foto, spesialisasi, nomor izin menyusul) | [S14] |
| Q3 | Jam resmi | Setiap hari 09.00–21.00 | [S14] |
| Q4 | Alur booking | WhatsApp saja | [S14] |
| Q5 | Tampilkan harga? | Ya (daftar harga belum ada → **Q5b**) | [S14] |
| Q6 | Terima BPJS? | Tidak | [S14] |
| Q10 | Bahasa | Indonesia saja | [S14] |
| Q11 | Parkir | Ada (detail → **Q11b**) | [S14] |
| Q13 | Izin foto dan kutipan ulasan | Boleh, sudah izin pemilik | [S14] |
| Q17 | Hosting | Vercel | [S14] |
| Q18 | Logo dan warna | Ambil dari Instagram/Maps | [S14] |
| Q21 | Tenggat | Secepatnya; Ferel membuat sendiri | [S14] |
| (baru) | Pakai Sanity/CMS? | Tidak, frontend saja | [S14] |

### Perlu dikonfirmasi: konflik jawaban
- **Q20 (editor konten).** Ferel menjawab "staf klinik" **sebelum** memutuskan tanpa Sanity. Tanpa CMS, staf tidak bisa mengedit sendiri. Perlu ditegaskan: perubahan konten lewat Ferel, atau CMS ditambahkan nanti.

### Belum terjawab — tanyakan ke pemilik klinik
- **Q5b.** Daftar harga tiap layanan.
- **Q2b.** Nama, foto, spesialisasi, dan nomor izin praktik tiap dokter yang ditampilkan.
- **Q6b.** Perusahaan/asuransi mitra selain BCA Life [S5].
- **Q7.** Isi paket MCU korporat, minimal peserta, dan kontak B2B.
- **Q8.** Daftar vaksin, pemeriksaan lab, jenis infus/suntik vitamin, dan wilayah homecare.
- **Q9.** Arti sorotan Instagram "Boomesport", "St. Laurensius", "Boston Village" [S3]: kerja sama atau cabang?
- **Q10b.** Siapa pasien terbanyak (usia, domisili, keluhan)?
- **Q11b.** Detail parkir dan akses di Aniva Junction (kapasitas, biaya, petunjuk).
- **Q12.** Ketentuan hukum/izin untuk konten promosi dan data pasien yang harus dipenuhi.
- **Q14.** Lima pertanyaan pasien paling sering lewat WA/DM, dan layanan berpendapatan terbesar (bahan Pareto).
- **Q15.** Jumlah pasien/hari dan booking WA/bulan sekarang; target dari website.
- **Q16.** Alur pasien dari datang sampai ambil obat; tahap tersulit (bahan VSM).
- **Q17b.** Domain/email yang sudah ada, siapa membayar domain dan langganan, anggaran.

### Untuk developer (bukan pertanyaan ke klien)
- **Q19.** Lisensi template: belum diketahui (Bagian 7.1). Cek `package.json`, README bagian lisensi, atau halaman Sanity Exchange sebelum memakai kode.

---

## Daftar Sumber

Semua diakses 13 Nov 2026.

- **[S1]** Google Maps — Klinik & Apotek Medlife: https://www.google.com/maps/place/Klinik+%26+Apotek+Medlife/@-6.2715018,106.6219387,835m/
- **[S2]** Hasil pencarian Google "medlife clinic": https://www.google.com/search?q=medlife+clinic
- **[S3]** Instagram Klinik Pratama Medlife: https://www.instagram.com/klinik_medlife/
- **[S4]** Linktree @Klinik_Medlife: https://linktr.ee/clinicmedlife
- **[S5]** BCA Life, mitra klinik — hanya cuplikan hasil Google; halaman penuh belum terbuka: https://www.bcalife.co.id
- **[S6]** Cuplikan Instagram pihak ketiga (gadingserpongupdate, info_gading_serpong, alsut.update), ±3 tahun lalu — indikasi layanan saja, bukan data terkini.
- **[S7]** TikTok medlifeklinik (cuplikan hasil Google).
- **[S8]** AIBIZ.ID "Klinik Medlife – Lokasi & Info di Kab. Tangerang", 3 Sep 2026 — cuplikan; halaman penuh belum dibuka.
- **[S9]** medlifeclinic.com — halaman HugeDomains dengan verifikasi bot; bukan situs klinik ini.
- **[S10]** 21st.dev, "Sanity + Next.Js Personal Website": https://21st.dev/@larsen66/templates/vercel-sanity-nextjs-personal-website
- **[S11]** Preview live template: https://template-nextjs-personal-website.sanity.build/ (dialihkan ke https://nextjs-personal-website.sanity.dev/)
- **[S12]** README repo template: https://github.com/sanity-io/template-nextjs-personal-website (cek `LICENSE` di `main`: 404)
- **[S13]** Pesan Ferel di chat sesi ini (13 Nov 2026): Medlife yang dimaksud ada di Tangerang; template [S10] sebagai acuan frontend.
- **[S15]** Dokumentasi Sanity, "Assets": https://www.sanity.io/docs/content-lake/assets (upload dari Studio; video disimpan sebagai file tanpa streaming, opsi Mux/Media Library).
- **[S14]** Jawaban Ferel pada kuesioner interview di chat sesi ini (13 Nov 2026), termasuk keputusan frontend saja tanpa Sanity. Belum diverifikasi ke pemilik klinik.
