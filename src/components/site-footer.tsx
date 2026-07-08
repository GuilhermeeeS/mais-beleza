import { site, whatsappLink } from "@/lib/site";

const nav = [
  { href: "/#sobre", label: "Sobre" },
  { href: "/#servicos", label: "Serviços" },
  { href: "/#como-funciona", label: "Como funciona" },
  { href: "/#afiliado", label: "Seja afiliado" },
  { href: "/#faq", label: "Dúvidas" },
];

function IconInstagram() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function IconWhatsApp() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden>
      <path d="M12.04 2c-5.46 0-9.9 4.44-9.9 9.9 0 1.74.46 3.44 1.33 4.94L2 22l5.3-1.39a9.86 9.86 0 0 0 4.73 1.2h.01c5.46 0 9.9-4.44 9.9-9.9 0-2.64-1.03-5.13-2.9-7A9.82 9.82 0 0 0 12.04 2Zm5.8 14.13c-.24.68-1.42 1.32-1.95 1.36-.5.05-.97.24-3.27-.68-2.76-1.09-4.5-3.94-4.64-4.13-.13-.19-1.11-1.48-1.11-2.82 0-1.34.7-2 .95-2.27.24-.27.53-.34.71-.34.18 0 .36 0 .51.01.16.01.39-.06.6.46.24.58.82 2 .89 2.14.07.14.12.31.02.5-.09.19-.14.31-.28.48-.14.16-.29.36-.42.48-.14.14-.28.29-.12.57.16.27.71 1.17 1.53 1.9 1.05.94 1.94 1.23 2.21 1.37.27.14.43.12.59-.07.16-.19.68-.79.86-1.06.18-.27.36-.22.6-.13.24.09 1.55.73 1.82.86.27.14.45.2.51.31.07.11.07.63-.17 1.31Z" />
    </svg>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-linha bg-areia/40">
      <div className="mx-auto max-w-360 px-6 lg:px-12 pt-16">
        {/* Nav centralizada */}
        <nav className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {nav.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-cafe/75 transition-colors hover:text-bronze"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Wordmark gigante (embossed) */}
        <div className="mt-12 text-center">
          <span
            className="wordmark block whitespace-nowrap bg-clip-text pb-[0.08em] text-transparent"
            style={{
              fontSize: "clamp(1.9rem, 12vw, 10rem)",
              fontWeight: 600,
              lineHeight: 1.05,
              letterSpacing: "0.02em",
              backgroundImage:
                "linear-gradient(180deg, rgba(138,98,48,0.9), rgba(169,123,60,0.45))",
            }}
          >
            MAIS BELEZA
          </span>
          <span className="wordmark-script mt-2 block text-2xl text-bronze/80">
            {site.tagline}
          </span>
        </div>
      </div>

      {/* Linha + rodapé inferior */}
      <div className="mt-14 border-t border-linha/70">
        <div className="mx-auto flex max-w-360 flex-col gap-4 px-6 lg:px-12 py-6 text-sm text-neutro sm:flex-row sm:items-center sm:justify-between">
          <span>
            © {new Date().getFullYear()} {site.nome}. Todos os direitos
            reservados.
          </span>

          <div className="flex items-center gap-5">
            <a href={whatsappLink("Olá! Vim pelo site da Mais Beleza.")} className="hover:text-bronze">
              {site.telefone}
            </a>
            <div className="flex items-center gap-3">
              <a
                href={site.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram da Mais Beleza"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-linha text-cafe/70 transition-colors hover:border-bronze hover:text-bronze"
              >
                <IconInstagram />
              </a>
              <a
                href={whatsappLink("Olá! Vim pelo site da Mais Beleza.")}
                aria-label="WhatsApp da Mais Beleza"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-linha text-cafe/70 transition-colors hover:border-bronze hover:text-bronze"
              >
                <IconWhatsApp />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
