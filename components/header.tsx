"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { nav, site, waLink } from "@/content/site";
import { Icon, WhatsAppIcon } from "./icons";

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2" aria-label={`${site.name} — Beranda`}>
      {/* TODO Q18: ganti dengan logo resmi dari Instagram/Maps (taruh di /public/logo.svg) */}
      <span className="grid size-8 place-items-center rounded-[6px] bg-brand-600 text-white">
        <svg viewBox="0 0 24 24" className="size-4" fill="currentColor" aria-hidden>
          <path d="M9 3h6v6h6v6h-6v6H9v-6H3V9h6V3Z" />
        </svg>
      </span>
      <span className="text-[15px] font-medium leading-tight text-ink-900">
        Klinik & Apotek <span className="text-brand-700">Medlife</span>
      </span>
    </Link>
  );
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Bar info: jam & telepon terlihat di setiap halaman (FRONTEND-REFERENCE §4.4) */}
      <div className="bg-ink-50 text-sm text-ink-600">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-2 sm:px-6">
          <span className="inline-flex items-center gap-1.5">
            <Icon name="clock" className="size-4 text-brand-700" />
            Buka setiap hari {site.hours.open}–{site.hours.close}
          </span>
          <a href={`tel:${site.phoneTel}`} className="hidden items-center gap-1.5 hover:text-ink-900 sm:inline-flex">
            <Icon name="phone" className="size-4 text-brand-700" />
            {site.phoneDisplay}
          </a>
        </div>
      </div>

      <header className="sticky top-3 z-40 px-3 sm:px-6">
        <div className="mx-auto max-w-6xl rounded-lg border border-ink-100 bg-white/90 shadow-sm shadow-black/5 backdrop-blur">
          <div className="flex h-14 items-center justify-between pl-3 pr-2 sm:pl-4">
            <Logo />

            <nav className="hidden items-center lg:flex" aria-label="Navigasi utama">
              {nav.map((item) => {
                const active = !item.href.includes("#") && pathname.startsWith(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`rounded-[4px] px-3 py-2 text-sm transition-colors ${
                      active ? "font-medium text-ink-900" : "text-ink-600 hover:text-ink-900"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            <div className="flex items-center gap-1">
              <a
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
                data-track="whatsapp"
                className="inline-flex items-center gap-2 rounded-[4px] bg-ink-900 px-3 py-2 text-sm font-medium text-white hover:bg-ink-700"
              >
                <WhatsAppIcon className="size-4" />
                <span className="hidden sm:inline">Chat WhatsApp</span>
                <span className="sm:hidden">Chat</span>
              </a>
              <button
                type="button"
                onClick={() => setOpen((v) => !v)}
                className="grid size-10 place-items-center rounded-[4px] text-ink-900 hover:bg-ink-50 lg:hidden"
                aria-expanded={open}
                aria-controls="mobile-nav"
                aria-label={open ? "Tutup menu" : "Buka menu"}
              >
                <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" aria-hidden>
                  {open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 8h16M4 16h16" />}
                </svg>
              </button>
            </div>
          </div>

          {open && (
            <nav id="mobile-nav" className="border-t border-ink-100 px-4 pb-3 lg:hidden" aria-label="Navigasi seluler">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-ink-100 py-3 text-base text-ink-900 last:border-0"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          )}
        </div>
      </header>
    </>
  );
}
