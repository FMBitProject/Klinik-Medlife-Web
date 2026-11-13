import Link from "next/link";
import { site, waLink } from "@/content/site";
import { Icon, WhatsAppIcon } from "./icons";
import { Reveal } from "./reveal";

const focus = "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600";

/** Aksi utama di seluruh situs: satu tombol gelap yang dominan (FRONTEND-REFERENCE §4.3). */
export function WaButton({
  message,
  children = "Chat WhatsApp",
  className = "",
}: {
  message?: string;
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      href={waLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      data-track="whatsapp"
      className={`inline-flex items-center justify-center gap-2 rounded-[4px] bg-ink-900 px-5 py-3 text-base font-medium text-white transition-colors hover:bg-ink-700 ${focus} ${className}`}
    >
      <WhatsAppIcon />
      {children}
    </a>
  );
}

export function SecondaryLink({
  href,
  children,
  external = false,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  external?: boolean;
  className?: string;
}) {
  const cls = `inline-flex items-center justify-center gap-2 rounded-[4px] border border-ink-200 bg-white px-5 py-3 text-base font-medium text-ink-900 transition-colors hover:border-ink-900 ${focus} ${className}`;
  return external ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
      {children}
    </a>
  ) : (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}

export function TextLink({ href, children, external = false }: { href: string; children: React.ReactNode; external?: boolean }) {
  const cls = `inline-flex items-center gap-1 font-medium text-brand-700 underline-offset-4 hover:underline ${focus}`;
  const inner = (
    <>
      {children} <Icon name="arrow" className="size-4" />
    </>
  );
  return external ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
      {inner}
    </a>
  ) : (
    <Link href={href} className={cls}>
      {inner}
    </Link>
  );
}

export function Section({
  eyebrow,
  title,
  intro,
  children,
  tone = "white",
  id,
  action,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  children: React.ReactNode;
  tone?: "white" | "muted";
  id?: string;
  action?: React.ReactNode;
}) {
  return (
    <section id={id} className={`py-16 sm:py-24 ${tone === "muted" ? "bg-ink-50" : "bg-white"}`}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            {eyebrow && <p className="text-sm font-medium text-brand-700">{eyebrow}</p>}
            <h2 className="mt-2 text-3xl font-normal tracking-tight text-ink-900 sm:text-4xl">{title}</h2>
            {intro && <p className="mt-3 text-lg text-ink-600">{intro}</p>}
          </div>
          {action}
        </Reveal>
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}

export function PageHeader({ eyebrow, title, intro }: { eyebrow?: string; title: string; intro?: string }) {
  return (
    <div className="bg-white">
      <Reveal className="mx-auto max-w-6xl px-4 pb-10 pt-12 sm:px-6 sm:pb-14 sm:pt-20">
        {eyebrow && <p className="text-sm font-medium text-brand-700">{eyebrow}</p>}
        <h1 className="mt-2 max-w-3xl text-4xl font-normal tracking-tight text-ink-900 sm:text-5xl">{title}</h1>
        {intro && <p className="mt-4 max-w-2xl text-lg text-ink-600">{intro}</p>}
      </Reveal>
    </div>
  );
}

export function PriceTag({ price }: { price: string | null }) {
  return price ? <span className="font-medium text-ink-900">{price}</span> : <span className="text-ink-600">Tanyakan via WhatsApp</span>;
}

export function CtaBand({
  title = "Siap berkonsultasi?",
  text = `Chat kami di WhatsApp untuk membuat janji temu. Buka ${site.hours.label.toLowerCase()} ${site.hours.open}–${site.hours.close}.`,
  message,
}: {
  title?: string;
  text?: string;
  message?: string;
}) {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 sm:py-20">
      <Reveal className="mx-auto flex max-w-6xl flex-col items-start gap-6 rounded-lg bg-brand-50 px-6 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-12">
        <div>
          <h2 className="text-2xl font-normal tracking-tight text-ink-900 sm:text-3xl">{title}</h2>
          <p className="mt-2 max-w-xl text-ink-600">{text}</p>
        </div>
        <WaButton message={message} className="shrink-0" />
      </Reveal>
    </section>
  );
}
