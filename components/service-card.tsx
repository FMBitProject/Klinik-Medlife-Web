import Link from "next/link";
import type { Service } from "@/content/site";
import { Icon } from "./icons";

/** Kartu layanan. `tone` membuat ritme warna kartu (putih / abu / aksen) seperti Aurea. */
export function ServiceCard({ service, tone = "white" }: { service: Service; tone?: "white" | "muted" | "accent" }) {
  const tones = {
    white: "border border-ink-100 bg-white text-ink-900",
    muted: "border border-ink-100 bg-ink-50 text-ink-900",
    accent: "border border-brand-600 bg-brand-600 text-white",
  };
  const sub = tone === "accent" ? "text-brand-50" : "text-ink-600";
  const iconBg = tone === "accent" ? "bg-white/15 text-white" : "bg-brand-50 text-brand-700";

  return (
    <Link
      href={`/layanan/${service.slug}`}
      className={`group flex h-full flex-col rounded-lg p-6 transition-shadow hover:shadow-lg hover:shadow-black/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600 ${tones[tone]}`}
    >
      <span className={`grid size-11 place-items-center rounded-[6px] ${iconBg}`}>
        <Icon name={service.icon} />
      </span>
      <h3 className="mt-5 text-xl font-medium">{service.name}</h3>
      <p className={`mt-2 flex-1 ${sub}`}>{service.summary}</p>
      <span className={`mt-5 inline-flex items-center gap-1 text-sm font-medium ${tone === "accent" ? "text-white" : "text-brand-700"}`}>
        Selengkapnya <Icon name="arrow" className="size-4 transition-transform group-hover:translate-x-1" />
      </span>
    </Link>
  );
}
