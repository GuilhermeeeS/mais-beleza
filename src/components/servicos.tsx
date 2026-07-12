import Image from "next/image";
import { site, waAgendar } from "@/lib/site";

const servicos = [
  {
    num: "01",
    title: "Atendimento corporativo",
    desc: "Quick massage e bem-estar para a sua equipe, no escritório ou no seu evento. Menos estresse, mais ânimo e produtividade.",
    img: "/fotos/slot-servicos-corporativo.webp",
  },
  {
    num: "02",
    title: "Spa Day individual e a dois",
    desc: "Um dia de spa completo no conforto da sua casa: massagens, cuidados e relaxamento — sozinha ou a dois.",
    img: "/fotos/slot-servicos-spa.webp",
  },
];

export function Servicos() {
  return (
    <section className="section" id="servicos">
      <div className="container">
        <div className="stack center" style={{ gap: 16 }}>
          <span className="eyebrow">Serviços</span>
          <h2 className="display-lg reveal">Experiências de cuidado para cada momento</h2>
          <p className="lead center">
            Levamos massagem, spa e estética até você — em casa, na empresa ou no seu evento.
          </p>
        </div>

        <div className="rows">
          {servicos.map((s) => (
            <article className="item-card" key={s.num}>
              <div className="rbody">
                <div className="rnum">{s.num}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
              <div className="slot">
                {s.img ? (
                  <Image
                    src={s.img}
                    alt={s.title}
                    fill
                    sizes="(max-width: 900px) 100vw, 560px"
                    style={{ objectFit: "cover" }}
                  />
                ) : (
                  <span>foto · {s.title.toLowerCase()}</span>
                )}
              </div>
            </article>
          ))}

          <article className="item-card dark">
            <div className="rbody">
              <div className="rnum">03</div>
              <h3>Momentos de bem-estar que ficam</h3>
              <p>
                Sozinho, a dois ou em grupo — a gente monta uma pausa de
                relaxamento onde você estiver, pra virar memória boa.
              </p>
              <div className="apps">
                <a className="pill pill-gold" href={waAgendar} target="_blank" rel="noopener noreferrer">
                  Agendar
                </a>
                <a className="pill pill-ghost" href={site.instagramUrl} target="_blank" rel="noopener noreferrer">
                  Ver no Instagram
                </a>
              </div>
            </div>
            <div className="slot dark">
              <Image
                src="/fotos/slot-servicos-momentos.webp"
                alt="Momentos de bem-estar que ficam"
                fill
                sizes="(max-width: 900px) 100vw, 560px"
                style={{ objectFit: "cover" }}
              />
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
