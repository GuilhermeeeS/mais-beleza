import { waAgendar } from "@/lib/site";
import { Logo } from "@/components/logo";

const navItems = [
  { label: "Serviços", href: "#servicos" },
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Dúvidas", href: "#faq" },
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <a href="#top" aria-label="Mais Beleza">
        <Logo white height={54} />
      </a>
      <nav className="nav">
        {navItems.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
      <a className="pill pill-gold" href={waAgendar} target="_blank" rel="noopener noreferrer">
        Agendar
      </a>
    </header>
  );
}
