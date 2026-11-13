import Image from "next/image";
import Link from "next/link";
import { services } from "@/content/site";
import { Icon } from "./icons";
import { Reveal } from "./reveal";

/**
 * Daftar layanan bergaya editorial, menyamping (zig-zag):
 * - kiri/kanan: label "—— LAYANAN 01", judul besar tipis, satu kalimat, tombol panah bulat
 * - sisi lain: foto dalam bingkai garis tipis dengan aksen sudut
 * Saat di-scroll, teks dan foto masuk dari arah berlawanan. Di ponsel: foto di atas, teks di bawah.
 */
export function ServiceShowcase({ headingLevel = "h3" }: { headingLevel?: "h2" | "h3" }) {
  const Heading = headingLevel;
  return (
    // overflow-x-clip: elemen yang sedang beranimasi masuk dari samping tidak membuat halaman bisa digeser horizontal
    <div className="space-y-20 overflow-x-clip sm:space-y-32">
      {services.map((s, i) => {
        const imageRight = i % 2 === 0;
        const num = String(i + 1).padStart(2, "0");
        return (
          <article
            key={s.slug}
            className={`grid items-center gap-10 md:gap-16 ${imageRight ? "md:grid-cols-[5fr_7fr]" : "md:grid-cols-[7fr_5fr]"}`}
          >
            {/* Foto berbingkai */}
            <Reveal
              from={imageRight ? "right" : "left"}
              className={`border border-ink-200 p-3 sm:p-6 ${imageRight ? "md:order-2" : "md:order-1"}`}
            >
              <div className="relative overflow-hidden bg-ink-100">
                <Image
                  src={s.image.src}
                  alt={s.image.alt}
                  width={1200}
                  height={900}
                  sizes="(min-width: 1152px) 600px, (min-width: 768px) 55vw, 100vw"
                  className="aspect-[4/3] w-full object-cover md:aspect-[6/5]"
                />
                {/* Aksen sudut */}
                <span aria-hidden className="pointer-events-none absolute left-4 top-4 size-7 border-l-2 border-t-2 border-white/90" />
                <span aria-hidden className="pointer-events-none absolute bottom-4 right-4 size-7 border-b-2 border-r-2 border-white/90" />
              </div>
            </Reveal>

            {/* Keterangan */}
            <Reveal
              from={imageRight ? "left" : "right"}
              delay={150}
              className={imageRight ? "md:order-1" : "md:order-2 md:pl-4"}
            >
              <p className="flex items-center gap-4 text-xs font-medium uppercase tracking-[0.3em] text-ink-900">
                <span aria-hidden className="h-px w-12 bg-ink-900" />
                Layanan {num}
              </p>
              <Heading className="mt-6 text-4xl font-light leading-[1.05] tracking-tight text-ink-900 sm:text-5xl lg:text-6xl">
                {s.name}
              </Heading>
              <p className="mt-6 max-w-sm text-lg text-ink-700">{s.summary}</p>
              <Link
                href={`/layanan/${s.slug}`}
                className="group mt-10 inline-flex items-center gap-4 text-sm font-medium uppercase tracking-[0.2em] text-ink-700 hover:text-ink-900"
              >
                <span className="grid size-14 place-items-center rounded-full border border-ink-700 transition-colors group-hover:bg-ink-900 group-hover:text-white">
                  <Icon name="arrow" className="size-5 transition-transform group-hover:translate-x-0.5" />
                </span>
                Selengkapnya
                <span className="sr-only"> tentang {s.name}</span>
              </Link>
            </Reveal>
          </article>
        );
      })}
    </div>
  );
}
