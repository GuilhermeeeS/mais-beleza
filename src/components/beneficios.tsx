import { waAgendar } from "@/lib/site";

const svg = (d: string, extra?: React.ReactNode) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d={d} />
    {extra}
  </svg>
);

const beneficios = [
  { label: "Alívio de dores", icon: svg("M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z") },
  { label: "Redução do estresse", icon: svg("M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z", <path d="M2 21c0-3 1.85-5.36 5.08-6" />) },
  { label: "Sono melhor", icon: svg("M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z") },
  { label: "Menos tensão muscular", icon: svg("M22 12h-4l-3 9L9 3l-3 9H2") },
  { label: "Mais disposição", icon: svg("M13 2 3 14h9l-1 8 10-12h-9l1-8z") },
  {
    label: "Bem‑estar físico e emocional",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <circle cx="12" cy="12" r="10" />
        <path d="M8 14s1.5 2 4 2 4-2 4-2" />
        <path d="M9 9h.01M15 9h.01" />
      </svg>
    ),
  },
];

export function Beneficios() {
  return (
    <section className="section" id="beneficios">
      <div className="container">
        <span className="eyebrow">Benefícios</span>
        <h2 className="display-md reveal" style={{ marginTop: 16 }}>
          O que o cuidado faz por você
        </h2>
        <div className="benef-grid">
          {beneficios.map((b) => (
            <div className="benef-card" key={b.label}>
              <span className="benef-ic">{b.icon}</span>
              <h4>{b.label}</h4>
            </div>
          ))}
        </div>
        <div className="benef-cta">
          <a className="pill pill-gold" href={waAgendar} target="_blank" rel="noopener noreferrer">
            Quero viver essa experiência
          </a>
        </div>
      </div>
    </section>
  );
}
