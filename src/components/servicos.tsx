import Image from "next/image";
import { servicos, whatsappLink } from "@/lib/site";
import { SectionHeader } from "./section-header";
import { Reveal } from "./reveal";

function Card({ index }: { index: number }) {
  const s = servicos[index];
  return (
    <a
      href={whatsappLink(`Olá! Tenho interesse no serviço "${s.titulo}" da Mais Beleza.`)}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block aspect-4/3 overflow-hidden rounded-[1.75rem] shadow-soft ring-1 ring-linha/50 transition-all duration-500 hover:shadow-lift"
    >
      {/* Mídia (altura fixa — nada empurra a página) */}
      <Image
        src={s.imagem}
        alt={s.alt}
        fill
        sizes="(max-width: 768px) 100vw, 44vw"
        className="object-cover transition-transform duration-900 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
      />

      {/* Véus: base sempre + escurecimento geral no hover */}
      <div className="absolute inset-0 bg-linear-to-t from-cafe via-cafe/25 to-transparent transition-opacity duration-500 group-hover:from-cafe group-hover:via-cafe/55" />

      {/* Badge de categoria (surge no hover) */}
      <span className="absolute right-4 top-4 -translate-y-1 rounded-full bg-porcelana/85 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-cafe opacity-0 backdrop-blur-sm transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
        {s.tag}
      </span>

      {/* Conteúdo ancorado na base — cresce para dentro, sem alterar o card */}
      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6">
        <div className="min-w-0">
          <h3 className="text-xl font-medium leading-tight text-porcelana [text-shadow:0_1px_12px_rgba(42,36,29,0.55)] md:text-2xl">
            {s.titulo}
          </h3>
          {/* Descrição: revela na altura, mas ancorada na base = expande para cima */}
          <div className="grid grid-rows-[0fr] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:mt-2 group-hover:grid-rows-[1fr]">
            <p className="overflow-hidden text-sm leading-relaxed text-porcelana/85 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
              {s.descricao}
            </p>
          </div>
        </div>

        {/* Seta que vira botão preenchido */}
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-porcelana/40 text-porcelana backdrop-blur-sm transition-all duration-500 group-hover:rotate-45 group-hover:border-bronze group-hover:bg-bronze">
          <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
            <path d="M7 17 17 7M9 7h8v8" />
          </svg>
        </span>
      </div>
    </a>
  );
}

export function Servicos() {
  return (
    <section id="servicos" className="section-full scroll-mt-24 py-24 md:py-32">
      <div className="mx-auto w-full max-w-360 px-6 lg:px-12">
        <SectionHeader
          eyebrow="O que oferecemos"
          title="Experiências de bem-estar sob medida"
          subtitle="Cada serviço é pensado para relaxar o corpo e caber na sua rotina, onde e quando você precisar."
        />

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {servicos.map((_, i) => (
            <Reveal key={i} variant="blur" delay={i * 90}>
              <Card index={i} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
