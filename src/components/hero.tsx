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
        <h1 className="display-xl reveal">Aliviamos as tensões que a vida acumula.</h1>
        <p className="lead reveal" style={{ transitionDelay: "0.14s" }}>
          Terapias manuais especializadas para aliviar dores, reduzir o estresse e
          proporcionar bem‑estar, no conforto da sua casa.
        </p>
        <div className="hero-actions reveal" style={{ transitionDelay: "0.28s" }}>
          <a className="pill pill-gold" href={waAgendar} target="_blank" rel="noopener noreferrer">
            Agendar pelo WhatsApp
          </a>
        </div>
        <div className="hero-proof reveal" style={{ transitionDelay: "0.42s" }}>
          <span className="hero-stars" aria-hidden>★★★★★</span>
          <span>Mais de 1 mil atendimentos realizados</span>
        </div>
      </div>
    </section>
  );
}
