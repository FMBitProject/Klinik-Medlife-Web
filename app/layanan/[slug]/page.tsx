import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { bookingMessage, services } from "@/content/site";
import { Icon } from "@/components/icons";
import { Reveal } from "@/components/reveal";
import { CtaBand, PriceTag, WaButton } from "@/components/ui";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps<"/layanan/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  return { title: service.name, description: service.summary };
}

/**
 * Halaman ini boleh "blocking" saat membaca params. Tanpa ini, Cache Components meminta
 * params dibungkus <Suspense>, tetapi itu membuat slug yang salah mengembalikan status 200
 * (soft 404) alih-alih 404. Enam slug di generateStaticParams tetap di-prerender penuh.
 */
export const instant = false;

export default async function ServicePage({ params }: PageProps<"/layanan/[slug]">) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const message = bookingMessage(service.name);
  const others = services.filter((s) => s.slug !== slug);

  return (
    <>
      <div className="mx-auto max-w-6xl px-4 pt-10 sm:px-6 sm:pt-14">
        <Link href="/layanan" className="inline-flex items-center gap-1 text-sm text-ink-600 hover:text-ink-900">
          <Icon name="arrow" className="size-4 rotate-180" /> Semua layanan
        </Link>
      </div>

      <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 pt-8 sm:px-6 md:grid-cols-2 md:gap-14">
        <Reveal from="left">
          <span className="grid size-12 place-items-center rounded-[6px] bg-brand-50 text-brand-700">
            <Icon name={service.icon} />
          </span>
          <h1 className="mt-5 text-4xl font-normal tracking-tight text-ink-900 sm:text-5xl">{service.name}</h1>
          <p className="mt-4 text-lg text-ink-600">{service.summary}</p>
        </Reveal>
        <Reveal from="right" delay={120} className="overflow-hidden rounded-lg bg-ink-100">
          <Image
            src={service.image.src}
            alt={service.image.alt}
            width={1200}
            height={900}
            priority
            sizes="(min-width: 1152px) 548px, (min-width: 768px) 50vw, 100vw"
            className="aspect-[4/3] w-full object-cover"
          />
        </Reveal>
      </div>

      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-3">
        <Reveal className="lg:col-span-2">
          <p className="text-lg text-ink-800">{service.description}</p>
          <h2 className="mt-10 text-xl font-medium text-ink-900">Yang tersedia</h2>
          <ul className="mt-4 space-y-3">
            {service.items.map((item) => (
              <li key={item} className="flex items-start gap-3 text-ink-800">
                <Icon name="check" className="mt-1 size-4 shrink-0 text-brand-700" />
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={120} className="h-fit rounded-lg border border-ink-100 bg-ink-50 p-6 lg:sticky lg:top-24">
          <p className="text-sm text-ink-600">Harga</p>
          <p className="mt-1 text-lg">
            <PriceTag price={service.price} />
          </p>
          <WaButton message={message} className="mt-6 w-full">
            Buat janji via WhatsApp
          </WaButton>
          <p className="mt-4 text-sm text-ink-600">Janji temu diperlukan. Tidak melayani BPJS.</p>
        </Reveal>
      </div>

      <div className="mx-auto max-w-6xl px-4 pb-6 sm:px-6">
        <h2 className="text-xl font-medium text-ink-900">Layanan lainnya</h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {others.map((s) => (
            <Link
              key={s.slug}
              href={`/layanan/${s.slug}`}
              className="rounded-[4px] border border-ink-200 px-4 py-2 text-sm text-ink-800 hover:border-ink-900"
            >
              {s.name}
            </Link>
          ))}
        </div>
      </div>

      <CtaBand message={message} />
    </>
  );
}
