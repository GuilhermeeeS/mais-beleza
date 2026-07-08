"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Revela um texto palavra por palavra, com escalonamento, quando entra na tela.
 * Cada palavra sobe + desfoca → nítida. Ótimo para títulos-assinatura.
 * Passe `highlight` para pintar um trecho final em bronze (itálico).
 */
export function SplitWords({
  text,
  highlight,
  className = "",
  step = 55,
  start = 0,
}: {
  text: string;
  highlight?: string;
  className?: string;
  step?: number;
  start?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.25 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const base = text.split(" ").map((w) => ({ w, hi: false }));
  const hi = highlight
    ? highlight.split(" ").map((w) => ({ w, hi: true }))
    : [];
  const words = [...base, ...hi];

  return (
    <span ref={ref} className={className}>
      {words.map((item, i) => (
        <span
          key={i}
          className={`word-reveal ${visible ? "is-visible" : ""} ${
            item.hi ? "italic text-bronze" : ""
          }`}
          style={{ transitionDelay: `${start + i * step}ms` }}
        >
          {item.w}
          {i < words.length - 1 ? " " : ""}
        </span>
      ))}
    </span>
  );
}
