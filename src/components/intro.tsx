import Link from "next/link";
import { Reveal } from "./reveal";
import { SplitWords } from "./split-words";

export function Intro() {
  return (
    <section id="sobre" className="section-full scroll-mt-24 py-24 md:py-32">
      <div className="mx-auto w-full max-w-5xl px-6 text-center lg:px-12">
        <Reveal variant="blur">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-neutro">
            Conheça a Mais Beleza
          </p>
        </Reveal>

        <p className="mt-10 text-4xl leading-[1.12] tracking-tight text-cafe text-balance sm:text-5xl md:text-6xl lg:text-[4.25rem] lg:leading-[1.08]">
          <SplitWords
            text="Levamos relaxamento, beleza e cuidado até onde a vida acontece."
            highlight="Sem loja fixa, com presença de verdade."
            step={45}
          />
        </p>

        <Reveal delay={160}>
          <div className="mt-14">
            <Link
              href="/#servicos"
              className="group inline-flex items-center gap-2 rounded-full border border-linha px-7 py-3.5 text-sm font-medium text-cafe transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:border-bronze hover:text-bronze"
            >
              Conheça nossos atendimentos
              <span className="transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
