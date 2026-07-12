import Image from "next/image";

export function Statement() {
  return (
    <section className="bleed-dark">
      <div className="bd-media" aria-hidden>
        <Image
          src="/fotos/slot-statement.webp"
          alt=""
          fill
          sizes="100vw"
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="container">
        <div className="stack" style={{ gap: 24, maxWidth: "60%" }}>
          <span className="eyebrow">Mais Beleza</span>
          <h2 className="display-lg reveal">Relaxar não é luxo. É cuidado com você.</h2>
          <p className="lead">
            A gente cria uma pausa de bem‑estar no meio da sua rotina, no seu
            ritmo e no seu espaço.
          </p>
        </div>
      </div>
    </section>
  );
}
