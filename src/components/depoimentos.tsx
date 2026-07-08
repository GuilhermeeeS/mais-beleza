import { depoimentos } from "@/lib/site";
import { SectionHeader } from "./section-header";
import { Reveal } from "./reveal";

function Estrelas() {
  return (
    <div className="flex gap-0.5 text-bronze" aria-label="5 estrelas">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 24 24" width="15" height="15" fill="currentColor" aria-hidden>
          <path d="m12 2 2.9 6.3 6.9.7-5.1 4.6 1.4 6.8L12 17.8 5.9 20.4l1.4-6.8L2.2 9l6.9-.7L12 2Z" />
        </svg>
      ))}
    </div>
  );
}

export function Depoimentos() {
  return (
    <section id="depoimentos" className="section-full scroll-mt-24 py-24 md:py-32">
      <div className="mx-auto w-full max-w-360 px-6 lg:px-12">
        <SectionHeader
          eyebrow="Quem viveu, recomenda"
          title="Histórias de quem relaxou com a gente"
        />

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {depoimentos.map((d, i) => (
            <Reveal key={d.nome} delay={i * 90}>
              <figure className="flex h-full flex-col justify-between rounded-[1.75rem] bg-porcelana p-8 shadow-soft ring-1 ring-linha/70">
                <div>
                  <Estrelas />
                  <blockquote className="mt-5 text-lg leading-relaxed text-cafe">
                    “{d.texto}”
                  </blockquote>
                </div>
                <figcaption className="mt-8 flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-bronze/15 text-lg text-bronze">
                    {d.nome.charAt(0)}
                  </span>
                  <span>
                    <span className="block text-sm font-medium text-cafe">{d.nome}</span>
                    <span className="block text-xs text-neutro">{d.contexto}</span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
