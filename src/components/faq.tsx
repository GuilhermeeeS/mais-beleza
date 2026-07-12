"use client";

import { useState } from "react";
import { waDuvidas } from "@/lib/site";

const faqs = [
  {
    q: "Vocês atendem em qual região?",
    a: "Atendemos a região do Vale do Paraíba e cidades próximas. Chame no WhatsApp com o local do atendimento que confirmamos a disponibilidade.",
  },
  {
    q: "Preciso ter estrutura no local?",
    a: "Não. Levamos cadeira, macas e todo o material. Só precisamos de um espaço tranquilo para montar.",
  },
  {
    q: "Como funciona para empresas e eventos?",
    a: "Montamos um formato sob medida pelo tempo do evento e pelo número de pessoas. Peça um orçamento no WhatsApp.",
  },
  {
    q: "Quais as formas de pagamento?",
    a: "Combinamos no fechamento (Pix, cartão ou transferência), tudo alinhado antes do atendimento.",
  },
  {
    q: "Com quanta antecedência devo agendar?",
    a: "Quanto antes melhor, principalmente para datas especiais e eventos. Mas fale com a gente que damos um jeito.",
  },
  {
    q: "A equipe é certificada?",
    a: "Sim. Nossa equipe é formada por profissionais qualificadas em massoterapia e estética.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="section" id="faq">
      <div className="container">
        <div className="faq-grid">
          <div>
            <span className="eyebrow">Dúvidas</span>
            <h2 className="display-md reveal" style={{ marginTop: 16 }}>
              Perguntas frequentes
            </h2>
            <p className="lead" style={{ marginTop: 16 }}>
              O que as pessoas mais perguntam antes de agendar.
            </p>
            <div className="faq-help">
              <h4>Ficou com outra dúvida?</h4>
              <p>Chama a gente no WhatsApp que respondemos rapidinho.</p>
              <a className="pill pill-dark" href={waDuvidas} target="_blank" rel="noopener noreferrer">
                Falar no WhatsApp
              </a>
            </div>
          </div>
          <div className="accordion">
            {faqs.map((f, i) => (
              <div
                className="qa reveal"
                data-open={open === i}
                style={{ transitionDelay: `${i * 0.07}s` }}
                key={f.q}
              >
                <button
                  className="q"
                  onClick={() => setOpen(open === i ? null : i)}
                  aria-expanded={open === i}
                >
                  {f.q}
                  <span className="ic" aria-hidden>
                    {open === i ? "–" : "+"}
                  </span>
                </button>
                <div className="a-wrap">
                  <div className="a">{f.a}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
