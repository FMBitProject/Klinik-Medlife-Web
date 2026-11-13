"use client";

import { useEffect, useRef, useState } from "react";

/** Satu IntersectionObserver bersama untuk semua elemen Reveal. */
const callbacks = new WeakMap<Element, () => void>();
let shared: IntersectionObserver | null = null;
function getObserver() {
  if (!shared) {
    shared = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            callbacks.get(e.target)?.();
            callbacks.delete(e.target);
            shared?.unobserve(e.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px" },
    );
  }
  return shared;
}

/**
 * Elemen yang muncul halus saat masuk layar. Status `data-visible` dikelola React
 * (bukan dimutasi langsung di DOM) agar tidak terjadi hydration mismatch.
 */
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
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = getObserver();
    callbacks.set(el, () => setVisible(true));
    io.observe(el);
    return () => {
      callbacks.delete(el);
      io.unobserve(el);
    };
  }, []);

  return (
    <Tag
      ref={ref as React.Ref<never>}
      data-reveal=""
      data-visible={visible ? "" : undefined}
      className={className}
      style={{ "--reveal-delay": `${delay}ms` } as React.CSSProperties}
    >
      {children}
    </Tag>
  );
}
