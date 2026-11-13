import type { Metadata } from "next";
import { corporate, site } from "@/content/site";
import { Icon } from "@/components/icons";
import { Reveal } from "@/components/reveal";
import { CtaBand, PageHeader, PriceTag, WaButton } from "@/components/ui";

export const metadata: Metadata = {
  title: "Korporat & MCU",
  description: "Layanan Medical Check-Up (MCU) karyawan dan corporate health services di Klinik & Apotek Medlife, Gading Serpong.",
};

export default function KorporatPage() {
  return (
    <>
      <PageHeader eyebrow="Untuk perusahaan" title={corporate.title} intro={corporate.summary} />

      <div className="mx-auto grid max-w-6xl gap-6 px-4 pb-6 sm:px-6 lg:grid-cols-2">
        <Reveal className="rounded-lg border border-ink-100 bg-white p-6 sm:p-8">
          <h2 className="text-2xl font-normal tracking-tight text-ink-900">Layanan untuk perusahaan</h2>
          <ul className="mt-6 space-y-3">
            {corporate.items.map((item) => (
              <li key={item} className="flex items-start gap-3 text-lg text-ink-800">
                <Icon name="check" className="mt-1.5 size-4 shrink-0 text-brand-700" />
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-8 border-t border-ink-100 pt-6 text-ink-600">
            Mitra asuransi: <span className="font-medium text-ink-900">{site.insurancePartners.join(", ")}</span>
          </p>
        </Reveal>

        <Reveal delay={120} className="rounded-lg bg-brand-600 p-6 text-white sm:p-8">
          <Icon name="building" className="size-9" />
          <h2 className="mt-4 text-2xl font-normal tracking-tight">Diskusikan kebutuhan perusahaan Anda</h2>
          <p className="mt-3 text-brand-50">
            Ceritakan jumlah karyawan dan jenis pemeriksaan yang dibutuhkan. Tim kami akan menyiapkan penawaran.
          </p>
          <WaButton message={corporate.waMessage} className="mt-8">
            Hubungi tim korporat
          </WaButton>
        </Reveal>
      </div>

      {corporate.packages.length > 0 && (
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
          <h2 className="text-2xl font-normal tracking-tight text-ink-900">Paket MCU</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {corporate.packages.map((p) => (
              <Reveal key={p.name} className="rounded-lg border border-ink-100 p-6">
                <p className="text-lg font-medium text-ink-900">{p.name}</p>
                <ul className="mt-4 space-y-2 text-ink-600">
                  {p.includes.map((i) => (
                    <li key={i}>• {i}</li>
                  ))}
                </ul>
                <p className="mt-4">
                  <PriceTag price={p.price} />
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      )}

      <CtaBand title="Butuh MCU untuk karyawan?" text="Hubungi kami via WhatsApp untuk informasi paket dan jadwal." message={corporate.waMessage} />
    </>
  );
}
