import Image from "next/image";
import { Reveal } from "./reveal";

const fotos = [
  { src: "/fotos/evento-sorriso.jpeg", alt: "Cliente sorrindo durante atendimento em evento" },
  { src: "/fotos/massagem-deck.jpeg", alt: "Massagem relaxante em um deck ao ar livre" },
  { src: "/fotos/atendimento-evento.jpeg", alt: "Quick massage em ação corporativa" },
  { src: "/fotos/estrutura-cadeira.jpeg", alt: "Estrutura de atendimento montada na natureza" },
  { src: "/fotos/duas-terapeutas.png", alt: "Duas massoterapeutas atendendo clientes" },
  { src: "/fotos/evento-banner.jpeg", alt: "Equipe da Mais Beleza atendendo em um evento" },
];

export function Galeria() {
  return (
    <section className="section-full scroll-mt-24 py-20 md:py-28">
      <div className="mx-auto max-w-360 px-6 lg:px-12">
        <Reveal>
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-xl">
              <p className="eyebrow">Na prática</p>
              <h2 className="mt-5 font-serif text-4xl font-medium leading-tight tracking-tight text-cafe text-balance md:text-5xl">
                Momentos Mais Beleza
              </h2>
            </div>
            <p className="max-w-sm text-neutro">
              De eventos e ações corporativas a experiências ao ar livre, o
              bem-estar acontece onde as pessoas estão.
            </p>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-12 columns-2 gap-4 md:columns-3 [&>*]:mb-4">
            {fotos.map((f) => (
              <div
                key={f.src}
                className="group relative overflow-hidden rounded-2xl shadow-soft break-inside-avoid"
              >
                <Image
                  src={f.src}
                  alt={f.alt}
                  width={600}
                  height={800}
                  sizes="(max-width: 768px) 45vw, 30vw"
                  className="h-auto w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-cafe/0 transition-colors duration-500 group-hover:bg-cafe/10" />
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
