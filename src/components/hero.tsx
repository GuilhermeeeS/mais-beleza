import Link from "next/link";
import Image from "next/image";
import { whatsappLink, mensagemAgendar } from "@/lib/site";
import { Reveal } from "./reveal";
import { SplitWords } from "./split-words";

export function Hero() {
  return (
    <section className="relative min-h-svh w-full overflow-hidden">
      {/* Imagem full-bleed */}
      <Image
        src="/fotos/hero.png"
        alt="Massoterapeuta da Mais Beleza atendendo uma cliente em um deck com vista para as montanhas"
        fill
        priority
        quality={92}
        sizes="100vw"
        className="object-cover object-[26%_center] md:object-center"
      />

      {/* Scrim para leitura à esquerda + base */}
      <div className="absolute inset-0 bg-linear-to-r from-cafe/80 via-cafe/35 to-transparent" />
      <div className="absolute inset-0 bg-linear-to-t from-cafe/50 via-transparent to-cafe/10" />

      {/* Conteúdo */}
      <div className="relative z-10 mx-auto flex min-h-svh max-w-360 flex-col justify-center px-6 pb-20 pt-32 lg:px-12">
        <div className="max-w-2xl">
          <Reveal variant="blur">
            <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-cafe">
              <span className="h-1.5 w-1.5 rounded-full bg-bronze" />
              Bem-estar por demanda
            </span>
          </Reveal>

          <h1 className="mt-6 font-serif text-6xl leading-[1.02] tracking-tight text-porcelana text-balance drop-shadow-sm md:text-8xl">
            <SplitWords text="Bem-estar que vai até você." step={70} start={150} />
          </h1>

          <Reveal delay={160} variant="blur">
            <p className="mt-7 max-w-md text-lg leading-relaxed text-porcelana/85">
              Quick massage, spa day e experiências de beleza sem loja fixa.
              Levamos o cuidado até você, sua empresa ou seu evento.
            </p>
          </Reveal>

          <Reveal delay={240} variant="blur">
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href={whatsappLink(mensagemAgendar)}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full bg-bronze px-7 py-3.5 text-sm font-medium text-porcelana shadow-lift transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:bg-bronze-escuro hover:shadow-soft"
              >
                Agendar pelo WhatsApp
                <span className="transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1">
                  →
                </span>
              </a>
              <Link
                href="/seja-afiliado"
                className="rounded-full border border-porcelana/40 bg-porcelana/10 px-7 py-3.5 text-sm font-medium text-porcelana backdrop-blur transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:bg-porcelana hover:text-cafe"
              >
                Seja um afiliado
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
