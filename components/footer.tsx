import Link from "next/link";
import { directionsLink, services, site, waLink } from "@/content/site";
import { InstagramIcon, TikTokIcon, WhatsAppIcon } from "./icons";

const social = "grid size-10 place-items-center rounded-[4px] border border-ink-200 bg-white text-ink-900 hover:border-ink-900";

export function Footer() {
  return (
    <footer className="border-t border-ink-100 bg-ink-50">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4">
        <div className="md:col-span-2">
          <p className="text-lg font-medium text-ink-900">{site.name}</p>
          <p className="text-sm text-ink-600">{site.tagline}</p>
          <address className="mt-4 max-w-sm not-italic text-ink-600">{site.address.full}</address>
          <p className="mt-2 text-ink-600">
            Buka setiap hari, {site.hours.open}–{site.hours.close}
          </p>
          <p className="mt-2">
            <a href={`tel:${site.phoneTel}`} className="font-medium text-ink-900 hover:text-brand-700">
              {site.phoneDisplay}
            </a>
          </p>
          <div className="mt-5 flex gap-2">
            <a href={waLink()} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className={social}>
              <WhatsAppIcon />
            </a>
            <a href={site.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className={social}>
              <InstagramIcon />
            </a>
            <a href={site.social.tiktok} target="_blank" rel="noopener noreferrer" aria-label="TikTok" className={social}>
              <TikTokIcon />
            </a>
          </div>
        </div>

        <div>
          <p className="text-sm font-medium text-ink-900">Layanan</p>
          <ul className="mt-4 space-y-2">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/layanan/${s.slug}`} className="text-ink-600 hover:text-ink-900">
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-medium text-ink-900">Klinik</p>
          <ul className="mt-4 space-y-2">
            <li><Link href="/#tim" className="text-ink-600 hover:text-ink-900">Tim dokter</Link></li>
            <li><Link href="/#harga" className="text-ink-600 hover:text-ink-900">Harga</Link></li>
            <li><Link href="/korporat" className="text-ink-600 hover:text-ink-900">Korporat & MCU</Link></li>
            <li><Link href="/lokasi" className="text-ink-600 hover:text-ink-900">Lokasi & parkir</Link></li>
            <li><Link href="/#faq" className="text-ink-600 hover:text-ink-900">FAQ</Link></li>
            <li>
              <a href={directionsLink} target="_blank" rel="noopener noreferrer" className="text-ink-600 hover:text-ink-900">
                Petunjuk arah
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-ink-100">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-6 text-sm text-ink-600 sm:flex-row sm:justify-between sm:px-6">
          <p>© {site.name}. Informasi di website ini bukan pengganti konsultasi medis.</p>
          <Link href="/privasi" className="hover:text-ink-900">Kebijakan privasi</Link>
        </div>
      </div>
    </footer>
  );
}
