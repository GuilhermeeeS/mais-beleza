"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { whatsappLink, mensagemAgendar } from "@/lib/site";
import { Wordmark } from "./wordmark";

const links = [
  { href: "/#sobre", label: "Sobre" },
  { href: "/#servicos", label: "Serviços" },
  { href: "/#como-funciona", label: "Como funciona" },
  { href: "/#afiliado", label: "Seja afiliado" },
  { href: "/#faq", label: "Dúvidas" },
];

export function SiteHeader({ overlay = false }: { overlay?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Texto claro apenas quando sobreposto ao hero e ainda no topo.
  const light = overlay && !scrolled;
  const solid = scrolled || !overlay;

  return (
    <header
      className={`${
        overlay ? "fixed" : "sticky"
      } top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        solid
          ? "border-b border-linha bg-porcelana/90 backdrop-blur"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-360 items-center justify-between px-6 lg:px-12 py-4">
        <Link
          href="/"
          aria-label="Mais Beleza, início"
          className={light ? "text-porcelana" : "text-cafe"}
        >
          <Wordmark size="sm" />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-sm transition-colors duration-300 ${
                light
                  ? "text-porcelana/85 hover:text-porcelana"
                  : "text-cafe/80 hover:text-bronze"
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href={whatsappLink(mensagemAgendar)}
            target="_blank"
            rel="noopener noreferrer"
            className={`rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 ${
              light
                ? "bg-porcelana text-cafe hover:bg-bronze hover:text-porcelana"
                : "bg-cafe text-porcelana hover:bg-bronze"
            }`}
          >
            Agendar
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className={`-mr-1 p-2 md:hidden ${light ? "text-porcelana" : "text-cafe"}`}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
        >
          <span className="block h-px w-6 bg-current" />
          <span className="mt-1.5 block h-px w-6 bg-current" />
          <span className="mt-1.5 block h-px w-6 bg-current" />
        </button>
      </div>

      {open && (
        <div className="border-t border-linha bg-porcelana md:hidden">
          <nav className="mx-auto flex max-w-360 flex-col px-6 lg:px-12 py-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="border-b border-linha/60 py-3 text-cafe/85"
              >
                {l.label}
              </a>
            ))}
            <a
              href={whatsappLink(mensagemAgendar)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-4 rounded-full bg-cafe px-5 py-3 text-center font-medium text-porcelana"
            >
              Agendar pelo WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
