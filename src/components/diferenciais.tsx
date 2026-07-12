import Image from "next/image";

const diferenciais = [
  {
    num: "01",
    title: "Vamos até você",
    desc: "Casa, empresa, evento ou hotel: levamos toda a estrutura e montamos no local.",
  },
  {
    num: "02",
    title: "Terapeutas certificadas",
    desc: "Profissionais qualificadas em massoterapia e estética, com técnica e cuidado.",
  },
  {
    num: "03",
    title: "Estrutura completa",
    desc: "Cadeira de quick massage, macas e materiais próprios, higienizados a cada atendimento.",
  },
  {
    num: "04",
    title: "Flexível e sob medida",
    desc: "Do atendimento individual ao evento com dezenas de pessoas, montamos o formato ideal.",
  },
  {
    num: "05",
    title: "Simples do início ao fim",
    desc: "Do primeiro contato no WhatsApp ao pós-atendimento, tudo sem burocracia.",
  },
];

export function Diferenciais() {
  return (
    <section className="section" id="diferenciais">
      <div className="container">
        <div className="tools-card">
          <div className="tools-left">
            <span className="eyebrow">Diferenciais</span>
            <h2 className="display-md">Por que escolher a Mais Beleza</h2>
            <p className="lead" style={{ marginTop: 18 }}>
              Cuidado profissional, estrutura completa e a comodidade de receber
              tudo onde você estiver.
            </p>
            <div className="tools-list">
              {diferenciais.map((d) => (
                <div className="tool-card" key={d.num}>
                  <div className="tool-ic" aria-hidden>◇</div>
                  <div className="tool-head">
                    <span className="tname">{d.title}</span>
                    <span className="tnum">{d.num}</span>
                  </div>
                  <div className="tool-desc">{d.desc}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="tools-right">
            <div className="slot">
              <Image
                src="/fotos/slot-diferenciais.webp"
                alt="Equipe da Mais Beleza"
                fill
                sizes="(max-width: 900px) 100vw, 560px"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
