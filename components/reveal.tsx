"use client";

import { useEffect } from "react";

/** Mengamati semua elemen [data-reveal] dan menandainya saat masuk layar. Dipasang sekali di layout. */
export function RevealObserver() {
  useEffect(() => {
    const observe = () => {
      const els = document.querySelectorAll<HTMLElement>("[data-reveal]:not([data-visible])");
      const io = new IntersectionObserver(
        (entries) => {
          for (const e of entries) {
            if (e.isIntersecting) {
              e.target.setAttribute("data-visible", "");
              io.unobserve(e.target);
            }
          }
        },
        { rootMargin: "0px 0px -8% 0px" },
      );
      els.forEach((el) => io.observe(el));
      return io;
    };

    let io = observe();
    // Navigasi client-side menambah elemen baru; amati ulang saat DOM berubah.
    const mo = new MutationObserver(() => {
      io.disconnect();
      io = observe();
    });
    mo.observe(document.body, { childList: true, subtree: true });
    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, []);

  return null;
}

export function Reveal({
  children,
  delay = 0,
  className = "",
  as: Tag = "div",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "li" | "article";
}) {
  return (
    <Tag data-reveal className={className} style={{ "--reveal-delay": `${delay}ms` } as React.CSSProperties}>
      {children}
    </Tag>
  );
}
