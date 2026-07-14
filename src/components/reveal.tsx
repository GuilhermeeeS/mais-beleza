"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

// Lembra, durante a sessão, quais reveals já apareceram.
// Persiste entre navegações (é módulo, não estado de componente); só zera num reload real.
const revealed = new Set<string>();

/** Revela os títulos (h1/h2) devagar, com blur, ao entrarem na tela. */
export function Reveal() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const els = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            el.classList.add("is-visible");
            if (el.dataset.revealKey) revealed.add(el.dataset.revealKey);
            io.unobserve(el);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );

    els.forEach((el, i) => {
      const key = `${pathname}#${i}`;
      el.dataset.revealKey = key;
      if (revealed.has(key)) {
        // já apareceu antes: mostra na hora, sem re-animar
        el.classList.add("is-visible", "reveal-instant");
      } else {
        // ainda não apareceu: segue o fluxo normal (anima ao rolar)
        el.classList.remove("reveal-instant");
        io.observe(el);
      }
    });

    return () => io.disconnect();
  }, [pathname]);

  return null;
}
