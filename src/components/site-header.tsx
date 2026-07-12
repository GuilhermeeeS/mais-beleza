"use client";

import { useState, useEffect, useRef } from "react";
import { waAgendar } from "@/lib/site";
import { Logo } from "@/components/logo";

const navItems = [
  { label: "Serviços", href: "#servicos" },
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Dúvidas", href: "#faq" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const panelRef = useRef<HTMLElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // fecha ao clicar fora do painel (e no Esc)
  useEffect(() => {
    if (!open) return;
    const onDown = (e: PointerEvent) => {
      const t = e.target as Node;
      if (panelRef.current?.contains(t) || btnRef.current?.contains(t)) return;
      setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("pointerdown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className="site-header" data-scrolled={scrolled} data-open={open}>
      <a href="#top" aria-label="Mais Beleza" className="header-logo" onClick={close}>
        <Logo white height={54} />
      </a>

      <nav className="nav">
        {navItems.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>

      <a className="pill pill-gold header-cta" href={waAgendar} target="_blank" rel="noopener noreferrer">
        Agendar
      </a>

      <button
        ref={btnRef}
        type="button"
        className="hamburger"
        aria-label={open ? "Fechar menu" : "Abrir menu"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <span />
        <span />
        <span />
      </button>

      <div className="mobile-menu" data-open={open}>
        <nav ref={panelRef}>
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={close}>
              {item.label}
            </a>
          ))}
          <a
            className="pill pill-gold"
            href={waAgendar}
            target="_blank"
            rel="noopener noreferrer"
            onClick={close}
          >
            Agendar atendimento
          </a>
        </nav>
      </div>
    </header>
  );
}
