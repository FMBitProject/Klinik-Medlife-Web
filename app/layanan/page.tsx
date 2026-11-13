import type { Metadata } from "next";
import { ServiceShowcase } from "@/components/service-showcase";
import { CtaBand, PageHeader, TextLink } from "@/components/ui";

export const metadata: Metadata = {
  title: "Layanan",
  description:
    "Layanan Klinik & Apotek Medlife: konsultasi dokter, apotek, vaksinasi, laboratorium, infusion, dan homecare di Gading Serpong.",
};

export default function LayananPage() {
  return (
    <>
      <PageHeader
        eyebrow="Layanan"
        title="Layanan Klinik & Apotek Medlife"
        intro="Dari konsultasi sampai tebus obat, di satu tempat. Untuk harga terbaru dan jadwal, hubungi kami via WhatsApp."
      />
      <div className="mx-auto max-w-6xl px-4 pb-6 sm:px-6">
        <ServiceShowcase headingLevel="h2" />
        <div className="mt-16">
          <TextLink href="/#harga">Lihat tabel harga</TextLink>
        </div>
      </div>
      <CtaBand title="Ada pertanyaan soal layanan?" text="Tanyakan harga, jadwal, atau ketersediaan langsung ke tim kami." />
    </>
  );
}
