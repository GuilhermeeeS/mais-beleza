import { site, waAgendar } from "@/lib/site";
import { Logo } from "@/components/logo";

const nav = [
  { label: "Serviços", href: "#servicos" },
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Dúvidas", href: "#faq" },
];

const servicos = [
  { label: "Atendimento corporativo", href: "#servicos" },
  { label: "Spa Day", href: "#servicos" },
  { label: "Estética & emagrecimento", href: "#servicos" },
];

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17" cy="7" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function WhatsappIcon() {
  return (
    <svg viewBox="0 0 24 24" width="17" height="17" fill="currentColor" aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.297-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}

export function SiteFooter() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="foot-brand-row">
          <div className="foot-brand">
            <Logo height={68} />
            <p>Bem estar e Estética levados até você, em casa, empresas e eventos.</p>
          </div>
          <div className="socials">
            <a href={site.instagramUrl} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <InstagramIcon />
            </a>
            <a href={waAgendar} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <WhatsappIcon />
            </a>
          </div>
        </div>

        <div className="foot-cols">
          <div className="foot-col">
            <h5>Navegação</h5>
            {nav.map((n) => (
              <a key={n.label} href={n.href}>
                {n.label}
              </a>
            ))}
          </div>
          <div className="foot-col">
            <h5>Atendimentos</h5>
            {servicos.map((s) => (
              <a key={s.label} href={s.href}>
                {s.label}
              </a>
            ))}
          </div>
          <div className="foot-col">
            <h5>Contato</h5>
            <a href={waAgendar} target="_blank" rel="noopener noreferrer">
              WhatsApp
            </a>
            <a href={site.instagramUrl} target="_blank" rel="noopener noreferrer">
              @{site.instagram}
            </a>
            <a href={`tel:+${site.whatsapp}`}>{site.phone}</a>
          </div>
          <div className="news">
            <h5>É massoterapeuta?</h5>
            <p>Candidate-se para atender com a Mais Beleza e faça parte da nossa rede.</p>
            <a className="pill pill-dark" href="/seja-afiliado">
              Quero ser afiliado
            </a>
          </div>
        </div>

        <div className="foot-bottom">
          <span>
            © {new Date().getFullYear()} {site.name} · {site.tagline}
          </span>
          <span>
            {site.phone} · @{site.instagram}
          </span>
        </div>
      </div>
    </footer>
  );
}
