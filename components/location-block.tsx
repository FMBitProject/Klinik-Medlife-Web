import { directionsLink, mapEmbedSrc, site } from "@/content/site";
import { Icon } from "./icons";
import { Reveal } from "./reveal";
import { SecondaryLink } from "./ui";

export function LocationBlock() {
  return (
    <div className="grid gap-6 lg:grid-cols-5">
      <Reveal className="overflow-hidden rounded-lg border border-ink-100 bg-ink-50 lg:col-span-3">
        <iframe
          src={mapEmbedSrc}
          title={`Peta lokasi ${site.name}`}
          className="h-80 w-full lg:h-full lg:min-h-[28rem]"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </Reveal>
      <Reveal delay={100} className="divide-y divide-ink-100 rounded-lg border border-ink-100 bg-white lg:col-span-2">
        <Row icon="pin" title="Alamat">
          <address className="not-italic">{site.address.full}</address>
        </Row>
        <Row icon="clock" title="Jam operasional">
          Setiap hari (Senin–Minggu), {site.hours.open}–{site.hours.close}
          <span className="mt-1 block text-sm">Janji temu diperlukan, hubungi via WhatsApp.</span>
        </Row>
        <Row icon="phone" title="Telepon / WhatsApp">
          <a href={`tel:${site.phoneTel}`} className="font-medium text-brand-700 hover:underline">
            {site.phoneDisplay}
          </a>
        </Row>
        <Row icon="home" title="Parkir">
          {site.parking ?? "Tersedia area parkir."}
        </Row>
        <div className="p-5">
          <SecondaryLink href={directionsLink} external className="w-full">
            <Icon name="pin" className="size-5" /> Petunjuk arah (Google Maps)
          </SecondaryLink>
        </div>
      </Reveal>
    </div>
  );
}

function Row({ icon, title, children }: { icon: "pin" | "clock" | "phone" | "home"; title: string; children: React.ReactNode }) {
  return (
    <div className="flex gap-4 p-5">
      <Icon name={icon} className="mt-0.5 size-5 shrink-0 text-brand-700" />
      <div>
        <p className="font-medium text-ink-900">{title}</p>
        <div className="mt-1 text-ink-600">{children}</div>
      </div>
    </div>
  );
}
