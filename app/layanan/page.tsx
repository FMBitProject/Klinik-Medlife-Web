import type { Metadata } from "next";
import { services } from "@/content/site";
import { Reveal } from "@/components/reveal";
import { ServiceCard } from "@/components/service-card";
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
        intro="Pilih layanan untuk melihat detailnya. Untuk harga terbaru dan jadwal, hubungi kami via WhatsApp."
      />
      <div className="mx-auto max-w-6xl px-4 pb-6 sm:px-6">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 3) * 80}>
              <ServiceCard service={s} tone={i === 0 ? "accent" : i % 2 === 1 ? "muted" : "white"} />
            </Reveal>
          ))}
        </div>
        <div className="mt-8">
          <TextLink href="/#harga">Lihat tabel harga</TextLink>
        </div>
      </div>
      <CtaBand title="Ada pertanyaan soal layanan?" text="Tanyakan harga, jadwal, atau ketersediaan langsung ke tim kami." />
    </>
  );
}
