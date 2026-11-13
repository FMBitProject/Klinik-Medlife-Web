# Catatan Acuan Frontend — Website Klinik & Apotek Medlife

> Dibuat 13 Nov 2026 untuk repo website Klinik & Apotek Medlife (Tangerang). Pelengkap `PRD.md` (v0.3).
> **Cara baca:** fakta diberi kode sumber `[kode]` (daftar di akhir). Bagian berlabel **Rekomendasi** adalah usulan, bukan fakta. Hal yang tidak ditemukan ditulis "tidak tertulis".
> **Batas riset:** sebagian besar isi berasal dari pembacaan teks halaman. Preview **Aurea dental studio** sudah dilihat langsung di Chrome pada 13 Nov 2026 (bagian 3b, kode [A3]), pada lebar jendela sempit (tampilan mobile). Template lain (Healthpoint, Medicare, dll.) **belum dilihat tampilannya**.

---

## 1. Keputusan yang Sudah Ada (dari PRD)

Frontend saja, tanpa CMS (Sanity ditunda); Next.js + Tailwind; hosting Vercel; bahasa Indonesia; booking lewat WhatsApp saja; harga ditampilkan; jam 09.00–21.00 tiap hari; tidak menerima BPJS; logo dan warna diambil dari Instagram/Maps. Lihat `PRD.md` bagian 13.

## 2. Hasil Pencarian di 21st.dev

- 21st.dev tidak punya kategori khusus klinik/kesehatan manusia. Daftar kategori komponen tidak memuat "clinic", "medical", atau "healthcare", dan pencarian `?search=clinic` tidak memfilter hasil [A1].
- Sekitar 60 template gratis di halaman free tidak ada yang bertema klinik atau kesehatan [A1].
- Kandidat terdekat:

| Template | Isi (menurut halaman) | Catatan | Sumber |
|---|---|---|---|
| **Aurea dental studio** (@larsen66, pembuat template Sanity yang Ferel buka) | Situs praktik gigi: perawatan, tim, ulasan, harga, FAQ, kontak, halaman privacy dan terms; "Static, no backend needed" | Cocok dengan keputusan frontend saja. Unduh kode "bagian dari paket berbayar"; nama paket, harga, lisensi, dan stack **tidak tertulis** | [A1] |
| Veterinary Website Template (@8b) | Klinik hewan: layanan, dokter, daftar harga, formulir kunjungan | Untuk hewan, bukan klinik manusia. Halaman menulis "one HTML file, GSAP" sekaligus "React, Next.js and Tailwind" (bertentangan, belum dicek di repo). Sumber kode di GitHub dengan lisensi MIT | [A1] |
| YukoHealth storefront | Toko e-commerce wellness | Tidak relevan (butuh keranjang) | [A1] |

## 3. Pola yang Layak Ditiru dari "Aurea dental studio"

Urutan beranda satu halaman, diamati dari preview [A2]:

1. Header: logo + tombol "Make an appointment"
2. Hero: judul spesifik, dua tombol (janji temu, kenali tim), blok kontak
3. Perawatan sehari-hari (4 item, tanpa CTA)
4. Tim dokter (4 dokter)
5. Ulasan pasien (6 ulasan, penggeser horizontal dengan navigasi keyboard)
6. "Kunjungan pertama" (3 langkah)
7. Harga (tabel biaya + CTA)
8. Kontak (telepon, email, jam, alamat dengan tautan peta)
9. Pembayaran dan asuransi
10. FAQ (6 pertanyaan)
11. Footer (jam, alamat, kontak, tautan Privacy dan Terms)

Keterbatasan template itu untuk kasus Medlife [A2]: hanya satu halaman (tanpa halaman layanan terpisah), tombol kontak hanya telepon/email/peta **tanpa WhatsApp**, CTA hanya menggulung ke blok kontak, data masih placeholder (domain `.example`, nomor 555).

## 3b. Gaya Visual Aurea (dilihat langsung di Chrome) [A3]

Diamati dari preview pada lebar mobile, plus pembacaan CSS halaman:

- **Font:** satu keluarga, Geist Sans (sans-serif); judul hero berukuran 24px bobot 400, tanpa huruf tebal berlebihan.
- **Warna:** latar putih `#fff`, teks `#171717`, abu-abu netral berlapis (`#efefef`, `#f7f7f7`, `#535353`, `#606060`), satu aksen biru `#0071e3`; tombol utama di hero tampak gelap, sudut tombol 4px.
- **Foto:** hero memakai satu foto still-life yang tenang (sikat gigi, gelas, handuk, cahaya alami), bukan model tersenyum.
- **Ritme halaman:** bagian bergantian putih → abu muda → hitam (bagian tim berlatar gelap); kartu perawatan berbeda warna (putih, abu, satu kartu biru).
- **Motion:** teks dan gambar muncul bertahap saat scroll (judul "Meet our team" sempat tampak blur sebelum jelas; foto dokter memudar masuk). Library animasi tidak diketahui.
- **Header:** bar tipis melayang dengan logo, nama, dan menu; tetap terlihat saat scroll.
- **Catatan:** pada screenshot yang diambil, foto dokter ke-2 dan ke-3 masih berupa kotak abu-abu saat pertama terlihat (kemungkinan belum selesai dimuat); belum dipastikan.

Yang layak dipinjam untuk Medlife (Rekomendasi): satu font, palet netral dengan satu aksen, foto nyata, sedikit animasi halus, kontras tinggi. Yang tidak cocok: bagian tim berlatar hitam (artikel [B2] menyarankan menghindari tema gelap untuk situs pasien) dan teks abu-abu muda di atas latar abu muda (kontras rendah, bertentangan dengan [B2]).

## 4. Prinsip Anti "AI Slop" (berbasis sumber)

Dari tiga artikel praktik desain website klinik [B1][B2][B3]:

1. **Foto asli** staf dan fasilitas; foto stok model tersenyum dinilai klise dan merusak kepercayaan [B1][B2].
2. **Judul hero spesifik** (layanan, lokasi, alasan memilih), bukan slogan generik; bagian layar pertama langsung menjelaskan kecocokan dan satu langkah berikutnya [B2][B3].
3. **Satu aksi utama yang dominan**, tombol sekunder hanya untuk kebutuhan lain; hindari beberapa tombol dengan prioritas sama [B3].
4. **Kontak, alamat, jam** terlihat di header/footer setiap halaman; nomor bisa diketuk di ponsel [B1][B2].
5. **Elemen kepercayaan:** profil dokter dengan foto, gelar, spesialisasi; ulasan pasien; testimoni generik saja dianggap kurang [B1][B2][B3].
6. **Jelaskan proses:** apa yang terjadi saat booking, persiapan kunjungan, kapan dibalas; sebut juga apa yang tidak ditangani klinik [B3].
7. **Tipografi:** teks isi sans-serif, minimal 16px, line-height sekitar 1,5–1,6, maksimal dua font [B2].
8. **Warna:** biru sering dianggap paling tepercaya, hijau cocok untuk wellness/anak, latar putih atau abu muda dengan satu aksen; hindari merah agresif sebagai warna utama dan tema gelap untuk situs pasien [B2].
9. **Aksesibilitas:** target WCAG 2.1 AA (alt text, kontras, navigasi keyboard, jangan hanya mengandalkan warna), tanpa video autoplay bersuara; cek dengan WAVE dan Lighthouse [B2].
10. **Kecepatan:** target di bawah 3 detik di mobile; kompres gambar [B1][B2].
11. **Hindari:** info usang (jam, dokter), form intake panjang di kontak pertama, jargon medis berlebihan, pop-up layar penuh tanpa tombol tutup, headline generik [B1][B2][B3].

Catatan: ketiga artikel **tidak membahas WhatsApp** sebagai kanal booking [B1][B2][B3]. Desain tombol WhatsApp di bawah adalah rekomendasi, bukan temuan sumber.

## 5. Rekomendasi: Susunan Beranda Medlife

Mengadaptasi pola Aurea [A2] dan prinsip di atas dengan data klinik yang sudah terverifikasi di `PRD.md`:

| # | Section | Isi | Status data |
|---|---|---|---|
| 1 | Header | Nama "Klinik & Apotek Medlife", jam "Buka setiap hari 09.00–21.00", tombol **Chat WhatsApp** (0878-1820-0060) | Ada [S1][S4] |
| 2 | Hero | Judul spesifik, contoh: "Klinik dan apotek di Gading Serpong, buka setiap hari 09.00–21.00"; satu CTA WhatsApp; tombol sekunder "Lihat layanan" | Ada; foto asli → Q13 |
| 3 | Layanan | 6 layanan: konsultasi, apotek, vaksinasi, laboratorium, infusion, homecare | Daftar ada [S3]; rinci → Q8 |
| 4 | Tim dokter | Foto, nama, spesialisasi | Menunggu Q2b |
| 5 | Ulasan | Rating 5,0 dari 818 ulasan Google + 3 kutipan asli | Ada [S1]; izin dari Ferel |
| 6 | Alur kunjungan | Cara booking via WA, apa yang dibawa, waktu balasan | Menunggu Q16/Q4 |
| 7 | Harga | Tabel harga per layanan | Menunggu Q5b |
| 8 | Korporat & MCU | Info paket + kontak WA | Menunggu Q7 |
| 9 | Lokasi | Peta, alamat Aniva Junction Blok I No. 17, parkir ada, jam | Alamat ada [S1]; detail parkir → Q11b |
| 10 | Pembayaran & asuransi | Kartu kredit/debit/NFC [S1]; mitra BCA Life [S5]; **tidak menerima BPJS** | Ada; mitra lain → Q6b |
| 11 | FAQ | Pertanyaan nyata pasien | Menunggu Q14 |
| 12 | Footer | Nama, alamat, jam, WA, IG, TikTok, Privacy | Ada [S3][S7] |

Pilihan arsitektur (Rekomendasi): satu halaman beranda + halaman `/layanan/[slug]`, `/korporat`, dan `/lokasi` seperti di PRD, supaya setiap layanan punya URL sendiri untuk pencarian Google.

## 6. Pilihan Sumber Kode Frontend

| Opsi | Stack | Biaya / lisensi (seperti tertulis) | Catatan | Sumber |
|---|---|---|---|---|
| **Bangun sendiri** (Next.js + Tailwind), meniru struktur Aurea | Next.js, Tailwind | Tanpa biaya template | Tidak ada risiko lisensi; **disarankan** karena lisensi Aurea tidak tertulis dan unduhan berbayar | [A1] |
| Aurea dental studio | Tidak tertulis | Unduh = paket berbayar; harga dan lisensi tidak tertulis | Perlu tahu apakah Ferel punya paket 21st.dev | [A1] |
| HealthPoint Next.js (Craftwork) | Next.js + Tailwind | Harga tidak tertulis; lisensi Commercial/Extended, situs untuk klien diizinkan, menjual produk berisi template perlu Extended | Halaman: home, about, doctors, doctor detail, services, service detail, blog, contact; demo di Vercel | [C1] |
| Medicare / DentCare (PrebuiltUI) | Next.js (Tailwind tidak disebut) | "$29 $5"; lisensi tier tidak disebut di halaman template; repo publik untuk source template berbayar dilarang | Medicare: hero dengan booking, layanan dan dokter, langkah booking, fasilitas, FAQ | [C2] |
| MedTailor (gratis/Pro) | Tailwind 4 + AlpineJS (bukan Next.js) | Pro "$10"; lisensi tidak tertulis | Tidak sejalan dengan stack Next.js | [C3] |
| clinic-landing-page (GitHub) | Tailwind, HTML | Tidak ada file LICENSE | Jangan salin kode; cukup sebagai inspirasi | [C4] |

Catatan: ringkasan lisensi berasal dari teks halaman, bukan nasihat hukum. Untuk template berbayar, repo klinik sebaiknya **privat**.

## 7. Belum Diverifikasi / Perlu Keputusan

1. Tampilan Aurea sudah dilihat (bagian 3b), tetapi hanya pada lebar mobile; tampilan desktop dan template lain belum dilihat: Medicare https://medicare.prebuiltui.com, HealthPoint https://health-point-nextjs-pro.vercel.app/.
2. Apakah Ferel akan membayar paket 21st.dev untuk mengunduh Aurea, atau membangun sendiri?
3. Lisensi template Sanity yang dibuka Ferel sebelumnya masih belum diketahui (file `LICENSE` di `main` tidak ditemukan) [D1].
4. Logo dan warna Medlife belum diunduh dari Instagram/Maps; palet final menunggu aset itu (hindari merah sebagai warna utama dan cek kontras [B2]).
5. Isi privacy dan terms klinik (data pasien/formulir) belum ditentukan → PRD Q12.

---

## Sumber

Diakses 13 Nov 2026. Halaman dibaca lewat pembaca web dan diparafrase.

- **[A1]** 21st.dev: https://21st.dev/templates · https://21st.dev/community/templates/free · https://21st.dev/@larsen66/templates/dental-studio · https://21st.dev/@8b/templates/veterinary-website-template-for-vibe-coding-free-html-vet-clinic-site-with-price-list-ready-for-ai-agents · https://21st.dev/@larsen66/templates/yukohealth-storefront
- **[A2]** Preview Aurea dental studio: https://dental-studio-v1.21st.app/
- **[A3]** Pengamatan langsung Chrome pada https://dental-studio-v1.21st.app/ (screenshot dan pembacaan CSS), 13 Nov 2026.
- **[B1]** Nopio, "Clinic Website Design: Essential Features for 2026": https://www.nopio.com/blog/clinic-website-design/
- **[B2]** Spreadsimple, "Healthcare Website Design: Best Practices, Examples & Tips for 2026": https://spreadsimple.com/blog/healthcare-website-design-best-practices-examples-and-tips-for-2026/
- **[B3]** Unicorn Platform, "Medical Website Design in 2026": https://unicornplatform.com/blog/medical-website-designer/
- **[C1]** Craftwork, HealthPoint Next.js: https://craftwork.design/product/healthpoint-nextjs-template · https://craftwork.design/license
- **[C2]** PrebuiltUI: https://prebuiltui.com/nextjs-templates/healthcare-website-template · https://prebuiltui.com/nextjs-templates/dentcare-dental-clinic-landing-page · https://prebuiltui.com/policies/template-license
- **[C3]** MedTailor: https://dev.to/saim_t8/medtailor-free-medical-healthcare-tailwind-css-template-4oa3
- **[C4]** https://github.com/bernadettmarsalik/clinic-landing-page (halaman github.com/zafkiel45/clinic-website gagal dibuka)
- **[D1]** README template Sanity + Next.js: https://github.com/sanity-io/template-nextjs-personal-website
- **[S1]–[S7]** Kode sumber data klinik mengikuti daftar sumber di `PRD.md`.
