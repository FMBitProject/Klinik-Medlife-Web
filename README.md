# Klinik-Medlife-Web

Website landing page **Klinik & Apotek Medlife** (Gading Serpong, Tangerang), dibuat dengan Next.js + TypeScript + Tailwind CSS. Hanya frontend, tanpa CMS. Spesifikasi lengkap ada di [PRD.md](PRD.md).

## Menjalankan

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build produksi
```

Deploy: hubungkan repo GitHub ke Vercel (tanpa konfigurasi tambahan).

## Mengubah konten

Semua konten (nama, kontak, jam, alamat, layanan, harga, dokter, ulasan) ada di **`content/site.ts`**. Edit file itu lalu deploy ulang.
Data yang belum diketahui ditandai `TODO Q#` (nomor pertanyaan di PRD §13):

- `price: null`: harga per layanan (Q5b). Selama kosong, tampil "tanyakan via WhatsApp"
- `doctors`: profil dokter (Q2b). Foto taruh di `public/tim/`
- `testimonials`: kutipan ulasan Google
- `corporate.packages`: paket MCU (Q7)
- `parking`: detail parkir (Q11b)
- `url`: domain final (Q17b)
- Logo & warna brand (Q18): `components/header.tsx` dan `app/globals.css`

- `visitSteps` (alur kunjungan, Q16) dan `faq` (Q14): sementara disusun dari fakta PRD

## Halaman

`/` (beranda 12 bagian sesuai [FRONTEND-REFERENCE.md](FRONTEND-REFERENCE.md) §5) · `/layanan` · `/layanan/[slug]` · `/korporat` · `/lokasi` · `/privasi` (+ `sitemap.xml`, `robots.txt`, data terstruktur MedicalClinic). `/tentang` dialihkan ke `/#tim`.

Gaya visual mengikuti FRONTEND-REFERENCE §3b dan §4: satu font (Geist Sans), palet netral dengan satu aksen biru, tombol bersudut 4px, header tipis melayang, dan animasi muncul halus saat scroll (nonaktif bila pengguna memilih *reduced motion*).
