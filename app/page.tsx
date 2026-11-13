import Image from "next/image";
import { corporate, directionsLink, doctors, faq, services, site, visitSteps, waLink } from "@/content/site";
import { Icon } from "@/components/icons";
import { Reveal } from "@/components/reveal";
import { ServiceCard } from "@/components/service-card";
import { Testimonials } from "@/components/testimonials";
import { LocationBlock } from "@/components/location-block";
import { CtaBand, PriceTag, Section, SecondaryLink, TextLink, WaButton } from "@/components/ui";

/** Susunan beranda mengikuti FRONTEND-REFERENCE §5. */
export default function Home() {
  return (
    <>
      <Hero />

      {/* 3. Layanan */}
      <Section
        id="layanan"
        eyebrow="Layanan"
        title="Dari konsultasi sampai tebus obat, di satu tempat"
        intro="Enam layanan yang bisa Anda dapatkan di Medlife. Pilih untuk melihat detailnya."
        action={<TextLink href="/layanan">Semua layanan</TextLink>}
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 3) * 80}>
              <ServiceCard service={s} tone={i === 0 ? "accent" : i % 2 === 1 ? "muted" : "white"} />
            </Reveal>
          ))}
        </div>
      </Section>

      {/* 4. Tim dokter */}
      <Section id="tim" eyebrow="Tim kami" title="Dokter & tenaga medis" tone="muted">
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {doctors.map((d, i) => (
            <Reveal key={`${d.name}-${i}`} delay={i * 80} className="overflow-hidden rounded-lg border border-ink-100 bg-white">
              {d.photo ? (
                <Image src={d.photo} alt={`Foto ${d.name}`} width={400} height={480} className="aspect-[5/6] w-full object-cover" />
              ) : (
                <div className="grid aspect-[5/6] w-full place-items-end bg-ink-100" role="img" aria-label="Foto menyusul">
                  <svg viewBox="0 0 100 100" className="mx-auto w-2/3 text-ink-200" fill="currentColor" aria-hidden>
                    <circle cx="50" cy="40" r="19" />
                    <path d="M12 100c0-23 17-37 38-37s38 14 38 37Z" />
                  </svg>
                </div>
              )}
              <div className="p-4">
                <p className="font-medium text-ink-900">{d.name}</p>
                <p className="text-sm text-ink-600">{d.role}</p>
                <p className="mt-1 text-xs text-ink-600">{d.license ? `SIP: ${d.license}` : d.placeholder ? "Profil segera hadir" : null}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* 5. Ulasan */}
      <Section
        id="ulasan"
        eyebrow="Kata pasien"
        title={`${site.rating.value} dari ${site.rating.count} ulasan Google`}
        intro="Pasien paling sering menyebut dokter yang ramah, perawat yang ramah, dan penjelasan dokter yang jelas."
      >
        <Reveal>
          <Testimonials />
        </Reveal>
      </Section>

      {/* 6. Alur kunjungan */}
      <Section id="alur" eyebrow="Kunjungan pertama" title="Cara membuat janji temu" tone="muted">
        <ol className="grid gap-4 md:grid-cols-3">
          {visitSteps.map((step, i) => (
            <Reveal as="li" key={step.title} delay={i * 100} className="rounded-lg border border-ink-100 bg-white p-6">
              <span className="grid size-9 place-items-center rounded-full bg-brand-600 text-sm font-medium text-white">{i + 1}</span>
              <h3 className="mt-5 text-lg font-medium text-ink-900">{step.title}</h3>
              <p className="mt-2 text-ink-600">{step.text}</p>
            </Reveal>
          ))}
        </ol>
        <Reveal className="mt-8">
          <WaButton>Mulai chat WhatsApp</WaButton>
        </Reveal>
      </Section>

      {/* 7. Harga */}
      <Section
        id="harga"
        eyebrow="Harga"
        title="Biaya layanan"
        intro="Harga dapat berbeda sesuai kebutuhan pemeriksaan. Tanyakan rincian terbaru lewat WhatsApp sebelum datang."
      >
        <Reveal className="overflow-hidden rounded-lg border border-ink-100">
          <table className="w-full text-left">
            <caption className="sr-only">Daftar harga layanan Klinik & Apotek Medlife</caption>
            <thead className="bg-ink-50 text-sm text-ink-600">
              <tr>
                <th scope="col" className="px-5 py-3 font-medium">Layanan</th>
                <th scope="col" className="px-5 py-3 font-medium">Harga</th>
                <th scope="col" className="hidden px-5 py-3 sm:table-cell"><span className="sr-only">Aksi</span></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-ink-100">
              {services.map((s) => (
                <tr key={s.slug}>
                  <th scope="row" className="px-5 py-4 font-medium text-ink-900">{s.name}</th>
                  <td className="px-5 py-4"><PriceTag price={s.price} /></td>
                  <td className="hidden px-5 py-4 text-right sm:table-cell">
                    <a
                      href={waLink(`Halo Klinik Medlife, saya ingin menanyakan harga layanan ${s.name}.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-brand-700 hover:underline"
                    >
                      Tanya harga
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>
      </Section>

      {/* 8. Korporat & MCU */}
      <Section id="korporat" eyebrow="Untuk perusahaan" title="Korporat & Medical Check-Up" tone="muted">
        <Reveal className="grid gap-6 rounded-lg border border-ink-100 bg-white p-6 sm:p-8 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <p className="max-w-xl text-lg text-ink-600">{corporate.summary}</p>
            <ul className="mt-4 grid gap-2 sm:grid-cols-3">
              {corporate.items.map((item) => (
                <li key={item} className="flex items-start gap-2 text-ink-800">
                  <Icon name="check" className="mt-1 size-4 shrink-0 text-brand-700" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <SecondaryLink href="/korporat">Info korporat</SecondaryLink>
        </Reveal>
      </Section>

      {/* 9. Lokasi */}
      <Section
        id="lokasi"
        eyebrow="Lokasi"
        title="Aniva Junction, Gading Serpong"
        action={<TextLink href={directionsLink} external>Petunjuk arah</TextLink>}
      >
        <LocationBlock />
      </Section>

      {/* 10. Pembayaran & asuransi */}
      <Section id="pembayaran" eyebrow="Pembayaran & asuransi" title="Sebelum Anda datang" tone="muted">
        <div className="grid gap-4 md:grid-cols-3">
          <InfoList title="Pembayaran" items={site.payments} />
          <InfoList title="Asuransi" items={site.insurancePartners.map((p) => `Klinik mitra ${p}`)} />
          <Reveal delay={160} className="rounded-lg border border-ink-200 bg-white p-6">
            <p className="font-medium text-ink-900">BPJS</p>
            <p className="mt-3 flex items-start gap-2 text-ink-800">
              <span aria-hidden className="mt-0.5 font-medium">✕</span>
              Saat ini kami tidak melayani BPJS.
            </p>
          </Reveal>
        </div>
        <Reveal className="mt-4 rounded-lg border border-ink-100 bg-white p-6">
          <p className="font-medium text-ink-900">Fasilitas</p>
          <ul className="mt-3 flex flex-wrap gap-2">
            {site.facilities.map((f) => (
              <li key={f} className="rounded-[4px] bg-ink-50 px-3 py-1.5 text-sm text-ink-800">{f}</li>
            ))}
          </ul>
        </Reveal>
      </Section>

      {/* 11. FAQ */}
      <Section id="faq" eyebrow="FAQ" title="Pertanyaan yang sering diajukan">
        <div className="divide-y divide-ink-100 border-y border-ink-100">
          {faq.map((item) => (
            <details key={item.q} className="group">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-lg text-ink-900 focus-visible:outline-2 focus-visible:outline-brand-600 [&::-webkit-details-marker]:hidden">
                {item.q}
                <span aria-hidden className="grid size-8 shrink-0 place-items-center rounded-full border border-ink-200 text-ink-600 transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="max-w-3xl pb-6 text-ink-600">{item.a}</p>
            </details>
          ))}
        </div>
      </Section>

      <CtaBand />
    </>
  );
}

function Hero() {
  return (
    <section className="bg-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 pb-16 pt-12 sm:px-6 sm:pt-20 lg:grid-cols-[1.3fr_1fr] lg:items-end lg:pb-24">
        <Reveal>
          <p className="text-sm font-medium text-brand-700">{site.name}</p>
          <h1 className="mt-3 text-4xl font-normal leading-[1.1] tracking-tight text-ink-900 sm:text-5xl lg:text-6xl">
            Klinik dan apotek di Gading Serpong, buka setiap hari {site.hours.open}–{site.hours.close}
          </h1>
          <p className="mt-5 max-w-xl text-lg text-ink-600">
            Konsultasi dokter, vaksinasi, laboratorium, infus, dan homecare, lalu tebus obat di apotek yang sama. Buat janji lewat WhatsApp.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <WaButton>Buat janji via WhatsApp</WaButton>
            <SecondaryLink href="/layanan">Lihat layanan</SecondaryLink>
          </div>
          <a
            href={site.social.googleMaps}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-3 text-ink-600 hover:text-ink-900"
          >
            <span className="flex text-amber-600" aria-hidden>
              {Array.from({ length: 5 }).map((_, i) => (
                <Icon key={i} name="star" className="size-4 fill-current" />
              ))}
            </span>
            <span>
              <strong className="font-medium text-ink-900">{site.rating.value}</strong> dari {site.rating.count} ulasan Google
            </span>
          </a>
        </Reveal>

        {/* Blok kontak (pola Aurea). TODO Q13: tambahkan foto asli klinik/fasilitas di sini bila sudah tersedia. */}
        <Reveal delay={150} className="rounded-lg border border-ink-100 bg-ink-50 p-6 sm:p-8">
          <dl className="space-y-5">
            <ContactRow icon="clock" label="Jam buka" value={`Setiap hari, ${site.hours.open}–${site.hours.close}`} />
            <ContactRow icon="pin" label="Alamat" value={site.address.full} />
            <ContactRow icon="phone" label="WhatsApp / Telepon" value={<a href={`tel:${site.phoneTel}`} className="hover:text-brand-700">{site.phoneDisplay}</a>} />
            <ContactRow icon="shield" label="Asuransi" value={`Mitra ${site.insurancePartners.join(", ")} · tidak melayani BPJS`} />
          </dl>
        </Reveal>
      </div>
    </section>
  );
}

function ContactRow({ icon, label, value }: { icon: "clock" | "pin" | "phone" | "shield"; label: string; value: React.ReactNode }) {
  return (
    <div className="flex gap-4">
      <Icon name={icon} className="mt-0.5 size-5 shrink-0 text-brand-700" />
      <div>
        <dt className="text-sm text-ink-600">{label}</dt>
        <dd className="mt-0.5 font-medium text-ink-900">{value}</dd>
      </div>
    </div>
  );
}

function InfoList({ title, items }: { title: string; items: readonly string[] }) {
  return (
    <Reveal className="rounded-lg border border-ink-100 bg-white p-6">
      <p className="font-medium text-ink-900">{title}</p>
      <ul className="mt-3 space-y-2">
        {items.map((i) => (
          <li key={i} className="flex items-start gap-2 text-ink-800">
            <Icon name="check" className="mt-1 size-4 shrink-0 text-brand-700" />
            {i}
          </li>
        ))}
      </ul>
    </Reveal>
  );
}
