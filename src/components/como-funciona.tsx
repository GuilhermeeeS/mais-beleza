import { passos } from "@/lib/site";
import { SectionHeader } from "./section-header";
import { Reveal } from "./reveal";

export function ComoFunciona() {
  return (
    <section
      id="como-funciona"
      className="section-full scroll-mt-24 bg-areia/40 py-24 md:py-32"
    >
      <div className="mx-auto w-full max-w-360 px-6 lg:px-12">
        <SectionHeader
          eyebrow="Simples do início ao fim"
          title="Como funciona"
          subtitle="Do primeiro contato ao momento de relaxar, a gente cuida de tudo. Você não se preocupa com nada."
        />

        <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {passos.map((p, i) => (
            <Reveal key={p.numero} variant="blur" delay={i * 100}>
              <div className="relative">
                <span className="text-5xl font-medium text-bronze/30 tabular-nums md:text-6xl">
                  {p.numero}
                </span>
                <div className="mt-4 h-px w-10 bg-bronze/40" />
                <h3 className="mt-5 text-xl font-medium text-cafe">
                  {p.titulo}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-neutro">
                  {p.descricao}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
