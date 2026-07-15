import Image from "next/image";

const passos = [
  {
    title: "Fale com a gente",
    desc: "Chame no WhatsApp e conte o que precisa: data, local e tipo de atendimento.",
    active: true,
  },
  {
    title: "Preparamos uma proposta personalizada",
    desc: "Sugerimos o formato ideal e alinhamos todos os detalhes com você.",
  },
  {
    title: "Vamos até você",
    desc: "No dia marcado, chegamos com toda a estrutura e montamos no local.",
  },
  {
    title: "É só relaxar",
    desc: "Você aproveita a experiência; a gente cuida de todo o resto.",
  },
];

export function ComoFunciona() {
  return (
    <section className="section alt" id="como-funciona">
      <div className="container">
        <div className="grow-card">
          <div className="grow-head">
            <span className="eyebrow">Como funciona</span>
            <h2 className="display-md">Simples do começo ao fim</h2>
            <p className="lead center">Do primeiro contato ao relaxamento, em 4 passos.</p>
          </div>
          <div className="grow-grid">
            <div className="steps">
              {passos.map((p) => (
                <div className={`step${p.active ? " active" : ""}`} key={p.title}>
                  <div className="sicon" aria-hidden>◇</div>
                  <h4>{p.title}</h4>
                  <p>{p.desc}</p>
                </div>
              ))}
            </div>
            <div className="slot">
              <Image
                src="/fotos/slot-como-funciona.webp"
                alt="Estrutura da Mais Beleza montada para o atendimento"
                fill
                sizes="(max-width: 900px) 100vw, 620px"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
