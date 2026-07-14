import Image from "next/image";
import { waAgendar } from "@/lib/site";

export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-media" aria-hidden>
        <Image
          src="/fotos/hero.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="hero-content">
        <h1 className="display-xl reveal">O bem‑estar que vai até você</h1>
        <p className="lead reveal" style={{ transitionDelay: "0.14s" }}>
          Levamos massagem, spa day e estética até sua casa, empresa ou evento,
          com profissionais certificadas e estrutura completa.
        </p>
        <div className="hero-actions reveal" style={{ transitionDelay: "0.28s" }}>
          <a className="pill pill-gold" href={waAgendar} target="_blank" rel="noopener noreferrer">
            Agendar atendimento
          </a>
        </div>
      </div>
    </section>
  );
}
