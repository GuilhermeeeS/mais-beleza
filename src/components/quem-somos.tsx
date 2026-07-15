import Image from "next/image";

export function QuemSomos() {
  return (
    <section className="section alt" id="quem-somos">
      <div className="container quem-grid">
        <div className="quem-media">
          <Image
            src="/fotos/slot-diferenciais.webp"
            alt="Equipe da Mais Beleza"
            fill
            sizes="(max-width: 900px) 100vw, 520px"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="quem-text">
          <span className="eyebrow">Quem somos</span>
          <h2 className="display-md reveal" style={{ marginTop: 16 }}>
            Cuidar de pessoas é o que nos move
          </h2>
          <p className="lead" style={{ marginTop: 16 }}>
            Olá, sou a Mariane, especialista em terapias manuais.
          </p>
          <p className="quem-p">
            A Mais Beleza está há 6 anos no mercado cuidando e impactando pessoas por onde
            passa. Acreditamos profundamente que o cuidado vai muito além de uma massagem:
            cada atendimento é pensado para aliviar dores, reduzir tensões e proporcionar
            uma experiência completa de acolhimento, respeito e bem‑estar, seja em sua casa,
            empresa ou evento.
          </p>
          <p className="quem-p">
            Nosso time é treinado e qualificado em terapias manuais, atuando com técnicas
            especializadas e um atendimento humanizado para que cada pessoa se sinta cuidada
            de forma única. Seguimos firmes em nossa missão de cuidar com excelência, porque
            acreditamos que aliviar a dor também é uma forma de transformar vidas.
          </p>
          <a className="pill pill-dark" href="#experiencias">
            Conheça nossos atendimentos
          </a>
        </div>
      </div>
    </section>
  );
}
