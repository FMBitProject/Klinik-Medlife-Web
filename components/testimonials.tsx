"use client";

import { useRef } from "react";
import { site, testimonials } from "@/content/site";
import { Icon } from "./icons";

/** Penggeser horizontal dengan tombol & navigasi keyboard (pola Aurea, FRONTEND-REFERENCE §3). */
export function Testimonials() {
  const track = useRef<HTMLDivElement>(null);
  const remaining = site.rating.count - testimonials.length;

  const scroll = (dir: 1 | -1) => {
    const el = track.current;
    if (!el) return;
    const card = el.querySelector("figure");
    el.scrollBy({ left: dir * ((card?.clientWidth ?? 320) + 16), behavior: "smooth" });
  };

  return (
    <div>
      <div
        ref={track}
        role="region"
        aria-roledescription="carousel"
        aria-label="Ulasan pasien dari Google. Gunakan tombol panah kiri/kanan untuk menggeser."
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "ArrowRight") {
            e.preventDefault();
            scroll(1);
          } else if (e.key === "ArrowLeft") {
            e.preventDefault();
            scroll(-1);
          }
        }}
        className="no-scrollbar -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-600 sm:mx-0 sm:px-0"
      >
        {testimonials.map((t, i) => (
          <figure
            key={t.author}
            aria-label={`Ulasan ${i + 1} dari ${testimonials.length}`}
            className="flex w-[85%] shrink-0 snap-start flex-col rounded-lg border border-ink-100 bg-white p-6 sm:w-[calc(50%-8px)] lg:w-[calc(33.333%-11px)]"
          >
            <div className="flex text-amber-600" role="img" aria-label="5 dari 5 bintang">
              {Array.from({ length: 5 }).map((_, k) => (
                <Icon key={k} name="star" className="size-4 fill-current" />
              ))}
            </div>
            <blockquote className="mt-4 flex-1 text-ink-800">“{t.quote}”</blockquote>
            <figcaption className="mt-5 text-sm">
              <span className="font-medium text-ink-900">{t.author}</span>
              <span className="text-ink-600"> · Ulasan Google</span>
            </figcaption>
          </figure>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
        <a
          href={site.social.googleMaps}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 font-medium text-brand-700 underline-offset-4 hover:underline"
        >
          Baca {remaining}+ ulasan lainnya di Google <Icon name="arrow" className="size-4" />
        </a>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => scroll(-1)}
            aria-label="Ulasan sebelumnya"
            className="grid size-10 place-items-center rounded-[4px] border border-ink-200 bg-white text-ink-900 hover:border-ink-900"
          >
            <Icon name="arrow" className="size-4 rotate-180" />
          </button>
          <button
            type="button"
            onClick={() => scroll(1)}
            aria-label="Ulasan berikutnya"
            className="grid size-10 place-items-center rounded-[4px] border border-ink-200 bg-white text-ink-900 hover:border-ink-900"
          >
            <Icon name="arrow" className="size-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
