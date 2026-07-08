"use client";

import { useState } from "react";
import { faq } from "@/lib/site";
import { SectionHeader } from "./section-header";

export function Faq() {
  const [aberto, setAberto] = useState<number | null>(0);

  return (
    <section id="faq" className="section-full scroll-mt-24 bg-areia/40 py-24 md:py-32">
      <div className="mx-auto grid w-full max-w-360 gap-14 px-6 lg:px-12 md:grid-cols-[0.85fr_1.15fr]">
        <div className="md:sticky md:top-28 md:self-start">
          <SectionHeader
            align="left"
            eyebrow="Dúvidas frequentes"
            title="Tudo que você precisa saber"
            subtitle="Não achou sua dúvida? Fale com a gente pelo WhatsApp que respondemos rapidinho."
          />
        </div>

        <div className="flex flex-col">
          {faq.map((item, i) => {
            const isOpen = aberto === i;
            return (
              <div key={item.pergunta} className="border-b border-linha">
                <button
                  type="button"
                  onClick={() => setAberto(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-lg font-medium text-cafe">
                    {item.pergunta}
                  </span>
                  <span
                    className={`flex h-7 w-7 flex-none items-center justify-center rounded-full border border-linha text-bronze transition-transform ${
                      isOpen ? "rotate-45" : ""
                    }`}
                    aria-hidden
                  >
                    +
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ${
                    isOpen ? "grid-rows-[1fr] pb-5" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="leading-relaxed text-neutro">{item.resposta}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
