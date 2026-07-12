import Image from "next/image";
import { waAgendar } from "@/lib/site";

export function CtaFinal() {
  return (
    <section className="cta">
      <div className="cta-media" aria-hidden>
        <Image
          src="/fotos/slot-cta.webp"
          alt=""
          fill
          sizes="100vw"
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="cta-content">
        <h2 className="display-xl reveal">Seu momento de bem-estar começa agora</h2>
        <div className="cta-actions">
          <a className="pill pill-gold" href={waAgendar} target="_blank" rel="noopener noreferrer">
            Agendar atendimento
          </a>
        </div>
      </div>
    </section>
  );
}
