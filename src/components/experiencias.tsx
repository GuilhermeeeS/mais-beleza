import Link from "next/link";
import Image from "next/image";
import { experiencias } from "@/lib/experiencias";

export function Experiencias() {
  return (
    <section className="section" id="experiencias">
      <div className="container">
        <span className="eyebrow">Experiências</span>
        <h2 className="display-lg reveal" style={{ marginTop: 16 }}>
          Escolha sua experiência
        </h2>
        <p className="lead" style={{ marginTop: 16, maxWidth: "48ch" }}>
          Do corporativo ao dia mais especial: cada experiência é montada por onde você estiver.
        </p>
        <div className="exp-grid">
          {experiencias.map((e) => (
            <Link href={`/experiencias/${e.slug}`} className="exp-card" key={e.slug}>
              <div className="exp-media">
                {e.cardImg ? (
                  <Image
                    src={e.cardImg}
                    alt={e.nome}
                    fill
                    sizes="(max-width: 900px) 100vw, 640px"
                    style={{ objectFit: "cover" }}
                  />
                ) : (
                  <span className="foto-ph">{e.cardFoto}</span>
                )}
              </div>
              <div className="exp-body">
                <h3>{e.nome}</h3>
                <p>{e.cardTexto}</p>
                <span className="exp-link">Quero esse atendimento →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
