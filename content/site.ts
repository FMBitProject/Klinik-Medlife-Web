/**
 * Semua konten website ada di file ini (PRD §7.2 & §10: pusatkan data, tanpa CMS).
 * Nilai `null` / daftar kosong = data BELUM DIKETAHUI (lihat PRD §13). Isi setelah
 * dikonfirmasi pemilik klinik, lalu deploy ulang.
 */

export const site = {
  name: "Klinik & Apotek Medlife",
  shortName: "Medlife",
  tagline: "Your Medical Partner",
  description:
    "Klinik & Apotek Medlife di Aniva Junction, Pagedangan, Gading Serpong — konsultasi dokter, apotek, vaksinasi, laboratorium, infus, dan homecare. Buka setiap hari 09.00–21.00.",
  url: "https://klinik-medlife.vercel.app", // TODO Q17b: ganti dengan domain final

  phoneDisplay: "0878-1820-0060",
  phoneTel: "+6287818200060",
  whatsappNumber: "6287818200060",

  address: {
    street: "Aniva Junction, Blok I No. 17, Medang",
    district: "Kec. Pagedangan",
    city: "Kab. Tangerang",
    region: "Banten",
    postalCode: "15334",
    full: "Aniva Junction, Blok I No. 17, Medang, Kec. Pagedangan, Kab. Tangerang, Banten 15334",
  },
  geo: { lat: -6.2715018, lng: 106.6219387 },

  hours: {
    label: "Setiap hari",
    open: "09.00",
    close: "21.00",
    opens24: "09:00",
    closes24: "21:00",
  },

  rating: { value: "5,0", count: 818 },

  social: {
    instagram: "https://www.instagram.com/klinik_medlife/",
    tiktok: "https://www.tiktok.com/@medlifeklinik",
    linktree: "https://linktr.ee/clinicmedlife",
    googleMaps:
      "https://www.google.com/maps/place/Klinik+%26+Apotek+Medlife/@-6.2715018,106.6219387,17z/data=!4m6!3m5!1s0x2e69fdb1c795f9db:0x70d8d72ba9e4267b!8m2!3d-6.2715018!4d106.6219387!16s%2Fg%2F11tx6gg7rs",
  },

  insurancePartners: ["BCA Life"], // TODO Q6b: mitra lain
  acceptsBpjs: false,

  facilities: [
    "Akses kursi roda",
    "Toilet & toilet netral gender",
    "Ruang menyusui",
    "Area parkir",
  ],
  payments: ["Kartu kredit", "Kartu debit", "Pembayaran NFC / mobile"],

  parking: null as string | null, // TODO Q11b: detail parkir (kapasitas, biaya, petunjuk)
} as const;

/**
 * Template pesan WhatsApp untuk janji temu.
 * - Per baris satu kolom berlabel, dikelompokkan dengan judul tebal (*...* = bold di WhatsApp),
 *   agar mudah diisi pasien dan mudah dibaca/disalin admin.
 * - Nomor HP tidak diminta karena sudah terlihat dari WhatsApp.
 * - `layanan` diisi otomatis bila tombol diklik dari halaman layanan tertentu.
 */
export function bookingMessage(layanan?: string) {
  return [
    "Halo Klinik Medlife, saya ingin membuat janji temu.",
    "",
    "*Data Pasien*",
    "Nama lengkap: ",
    "Tempat/tanggal lahir: ",
    "Email (opsional): ",
    "",
    "*Janji Temu*",
    `Layanan: ${layanan ?? ""}`,
    "Keluhan: ",
    "Tanggal & jam yang diinginkan: ",
    "",
    "*Pembayaran*",
    "Pribadi / Asuransi (sebutkan nama asuransinya): ",
    "",
    "Terima kasih.",
  ].join("\n");
}

export const waLink = (message: string = bookingMessage()) =>
  `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;

export const directionsLink = `https://www.google.com/maps/dir/?api=1&destination=${site.geo.lat},${site.geo.lng}`;
export const mapEmbedSrc = `https://www.google.com/maps?q=${site.geo.lat},${site.geo.lng}&z=17&output=embed`;

export type Service = {
  slug: string;
  name: string;
  icon: IconName;
  summary: string;
  description: string;
  items: string[];
  /** Harga dalam teks, mis. "Mulai Rp150.000". null = belum ada data (Q5b). */
  price: string | null;
};

export type IconName =
  | "stethoscope"
  | "pill"
  | "syringe"
  | "flask"
  | "drip"
  | "home"
  | "building";

export const services: Service[] = [
  {
    slug: "konsultasi",
    name: "Konsultasi Dokter",
    icon: "stethoscope",
    summary: "Praktek dokter umum untuk keluhan sehari-hari, dengan penjelasan yang jelas.",
    description:
      "Konsultasi dengan dokter untuk pemeriksaan dan penanganan keluhan kesehatan. Janji temu diperlukan — hubungi kami via WhatsApp untuk mengatur jadwal.",
    items: ["Pemeriksaan dokter umum", "Perawatan luka", "Tindak lanjut via WhatsApp"],
    price: null,
  },
  {
    slug: "apotek",
    name: "Apotek",
    icon: "pill",
    summary: "Farmasi di dalam klinik — tebus resep langsung setelah konsultasi.",
    description:
      "Apotek Medlife menyediakan obat sesuai resep dokter dan kebutuhan kesehatan harian. Tanyakan ketersediaan obat via WhatsApp sebelum datang.",
    items: ["Tebus resep dokter", "Cek ketersediaan obat via WhatsApp"],
    price: null,
  },
  {
    slug: "vaksinasi",
    name: "Vaksinasi",
    icon: "syringe",
    summary: "Vaksinasi untuk anak dan dewasa.",
    description:
      "Layanan vaksinasi untuk anak dan dewasa. Hubungi kami untuk informasi jenis vaksin yang tersedia dan jadwalnya.",
    items: ["Vaksinasi anak", "Vaksinasi dewasa"], // TODO Q8: daftar jenis vaksin
    price: null,
  },
  {
    slug: "laboratorium",
    name: "Laboratorium",
    icon: "flask",
    summary: "Pemeriksaan laboratorium untuk menunjang diagnosis.",
    description:
      "Pemeriksaan laboratorium di klinik untuk mendukung diagnosis dokter. Hubungi kami untuk daftar pemeriksaan dan persiapan sebelum tes.",
    items: ["Pemeriksaan laboratorium dasar"], // TODO Q8: daftar pemeriksaan lab
    price: null,
  },
  {
    slug: "infusion",
    name: "Infusion & Suntik Vitamin",
    icon: "drip",
    summary: "Infusion treatment dan suntikan vitamin.",
    description:
      "Layanan infusion treatment dan suntikan vitamin yang dilakukan oleh tenaga medis. Konsultasikan dulu dengan dokter untuk menentukan kebutuhan Anda.",
    items: ["Infusion treatment", "Suntik vitamin"], // TODO Q8: jenis infus/vitamin
    price: null,
  },
  {
    slug: "homecare",
    name: "Homecare",
    icon: "home",
    summary: "Layanan kesehatan di rumah Anda.",
    description:
      "Tenaga medis Medlife datang ke rumah Anda. Hubungi kami via WhatsApp untuk mengecek wilayah layanan dan jadwal.",
    items: ["Home service tenaga medis"], // TODO Q8: wilayah homecare
    price: null,
  },
];

export const corporate = {
  title: "Korporat & MCU",
  summary:
    "Layanan kesehatan untuk perusahaan, termasuk Medical Check-Up (MCU) karyawan.",
  items: [
    "Medical Check-Up (MCU) karyawan",
    "Corporate health services",
    "Klinik mitra BCA Life",
  ],
  packages: [] as { name: string; includes: string[]; price: string | null }[], // TODO Q7
  waMessage:
    "Halo Klinik Medlife, saya dari perusahaan ... ingin menanyakan layanan MCU / korporat untuk sekitar ... karyawan.",
};

/**
 * TODO Q2b: ganti placeholder dengan nama, foto (taruh di /public/tim/...), spesialisasi,
 * dan nomor SIP asli. Hapus `placeholder: true` setelah diisi.
 */
export type Doctor = { name: string; role: string; photo?: string; license?: string; placeholder?: boolean };
export const doctors: Doctor[] = [
  { name: "dr. Nama Dokter", role: "Dokter Umum", placeholder: true },
  { name: "dr. Nama Dokter", role: "Dokter Umum", placeholder: true },
  { name: "dr. Nama Dokter", role: "Dokter Umum", placeholder: true },
  { name: "Nama Perawat", role: "Perawat", placeholder: true },
];

/** Tema ulasan Google (jumlah sebutan) — dari ringkasan ulasan Google Maps. */
export const reviewThemes = [
  { label: "Dokter ramah", count: 170 },
  { label: "Perawat ramah", count: 50 },
  { label: "Penjelasan dokter", count: 43 },
  { label: "Tindak lanjut via WhatsApp", count: 12 },
];

/**
 * Ulasan Google asli (bintang 5), disalin apa adanya dari Google Maps pada 13 Nov 2026.
 * Izin pemakaian dari pemilik: PRD Q13. Nama disingkat untuk privasi pengulas.
 * Tanda "…" berarti teks terpotong di Google.
 */
export const testimonials: { quote: string; author: string }[] = [
  {
    quote:
      "Klinik dan apotek terbaik di Gading serpong. Dokter kompeten semua, biaya ga mahal dan semua staff ramah dan sangat membantu dan care juga.",
    author: "Lidya W.",
  },
  {
    quote:
      "staff dan dokternya ramah banget huhu, penjelasannya detail dan kasih arahan yang jelas soal keluhanku, obat yg diresepin juga works well for me too, plus biayanya juga affordable 🫰🏻 …",
    author: "Beerty A.",
  },
  {
    quote:
      "Pelayanan terbaik, respon cepat dan sangat komunikatif, bahkan di hubungi untuk menanyakan perkembangan kondisi kesehatan bbrp setelah periksa, pokoknya top pelayanan memuaskan",
    author: "Lukas W. N.",
  },
  {
    quote:
      "Baikk banget dokternya friendly, suster nya juga pada ramah, sempet ketinggalan surat sakitnyaa tp dibantuin photoo dikirimin jugaa, sukaa bangett. Dan harganyaa juga jujur ga ada upselling, bener2 di saranin sesuai kebutuhan, baguss bgt klinik ini🥹❤️",
    author: "Azhra S.",
  },
  {
    quote:
      "Dokternya gercep n ramah, informative.. semua timnya jg gercep, dari proses dftar sampe ketemu dokter n ambil obat. Semuanya mudah.  Seneng ketemu klinik ini😍😍 …",
    author: "Arra H.",
  },
  {
    quote: "Pelayanan bagus,dokternya sangat teliti dan obat yg diresepkan sesuai dg keluhan jd pasien cpt sembuh.",
    author: "Selly M.",
  },
  {
    quote:
      "Saya Sangat puas dengan pelayanan diapotek medlife clinic.tempatnya bersih, steril, dan protokolnya terjaga dengan baik. Terima kasih untuk dokter²nya yang sangat profesional, ramah, dan mendengarkan keluhan pasien dengan sabar. Jd teman² jika ada keluhan sakit tempat ini sangat direkomendasikan🙏 …",
    author: "Athen M.",
  },
  {
    quote:
      "Tmptnya bersih dan nyaman. Pelayanan memuaskan baik dokter, perawat dan tim pendukung lainnya. Ramah dan helpfull serta informatif. Sangat puasss....",
    author: "Agustinnus H.",
  },
];

export const nav = [
  { href: "/layanan", label: "Layanan" },
  { href: "/#tim", label: "Tim" },
  { href: "/#harga", label: "Harga" },
  { href: "/korporat", label: "Korporat & MCU" },
  { href: "/lokasi", label: "Lokasi" },
  { href: "/#faq", label: "FAQ" },
];

/**
 * Alur kunjungan. TODO Q16: sesuaikan dengan alur nyata klinik
 * (apa yang dibawa, berapa lama balasan WA).
 */
export const visitSteps = [
  {
    title: "Chat WhatsApp",
    text: "Klik tombol WhatsApp, lalu lengkapi format yang sudah terisi: data pasien, layanan, keluhan, jadwal, dan metode pembayaran.",
  },
  {
    title: "Konfirmasi jadwal",
    text: "Tim kami membalas untuk mengonfirmasi jadwal janji temu Anda.",
  },
  {
    title: "Datang ke klinik",
    text: "Datang ke Aniva Junction Blok I No. 17 sesuai jadwal. Setelah konsultasi, obat bisa langsung ditebus di apotek kami.",
  },
];

/**
 * FAQ — sementara disusun dari fakta yang sudah terverifikasi di PRD.
 * TODO Q14: ganti/tambah dengan pertanyaan nyata yang paling sering masuk lewat WA/DM.
 */
export const faq = [
  {
    q: "Apakah Medlife menerima BPJS?",
    a: "Saat ini Klinik & Apotek Medlife tidak melayani BPJS. Kami adalah klinik mitra BCA Life.",
  },
  {
    q: "Apakah perlu membuat janji temu dulu?",
    a: "Ya, janji temu diperlukan. Hubungi kami via WhatsApp di 0878-1820-0060 untuk mengatur jadwal.",
  },
  {
    q: "Jam berapa klinik buka?",
    a: "Setiap hari, Senin sampai Minggu, pukul 09.00–21.00.",
  },
  {
    q: "Metode pembayaran apa saja yang diterima?",
    a: "Kartu kredit, kartu debit, dan pembayaran NFC / mobile.",
  },
  {
    q: "Apakah ada tempat parkir?",
    a: "Ada, tersedia area parkir di lokasi klinik di Aniva Junction, Pagedangan.",
  },
  {
    q: "Apakah bisa dilayani di rumah?",
    a: "Bisa. Kami punya layanan homecare. Hubungi kami via WhatsApp untuk mengecek wilayah dan jadwal.",
  },
];
