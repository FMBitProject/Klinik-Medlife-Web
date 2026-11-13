import type { Metadata } from "next";
import { site } from "@/content/site";
import { LocationBlock } from "@/components/location-block";
import { CtaBand, PageHeader } from "@/components/ui";

export const metadata: Metadata = {
  title: "Lokasi & Jam Buka",
  description: `${site.address.full}. Buka setiap hari ${site.hours.open}–${site.hours.close}.`,
};

export default function LokasiPage() {
  return (
    <>
      <PageHeader
        eyebrow="Lokasi"
        title="Lokasi & jam buka"
        intro={`Kami berada di Aniva Junction, Pagedangan, area Gading Serpong. Buka setiap hari ${site.hours.open}–${site.hours.close}.`}
      />
      <div className="mx-auto max-w-6xl px-4 pb-6 sm:px-6">
        <LocationBlock />
      </div>
      <CtaBand title="Mau datang hari ini?" text="Janji temu diperlukan. Chat kami dulu agar tidak perlu menunggu lama." />
    </>
  );
}
