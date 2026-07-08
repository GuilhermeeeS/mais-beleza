import Link from "next/link";
import Image from "next/image";
import { whatsappLink, mensagemAgendar } from "@/lib/site";
import { Reveal } from "./reveal";

export function CtaFinal() {
  return (
    <section className="scroll-mt-24 px-4 pb-6 pt-8 sm:px-6">
      <div className="relative mx-auto min-h-[80svh] w-full overflow-hidden rounded-[2.5rem] bg-cafe">
        <Image
          src="/fotos/massagem-deck.jpeg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-linear-to-t from-cafe via-cafe/85 to-cafe/60" />
        <div className="grain-layer" aria-hidden />
        <div
          className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-bronze/25 blur-3xl"
          aria-hidden
        />

        <Reveal className="relative z-10">
          <div className="mx-auto flex min-h-[80svh] max-w-2xl flex-col items-center justify-center px-6 py-24 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-bronze">
              Seu momento
            </p>
            <h2 className="mt-6 text-4xl leading-[1.05] tracking-tight text-porcelana text-balance md:text-6xl">
              Pronto para relaxar{" "}
              <span className="italic text-bronze">de verdade</span>?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-porcelana/75">
              Agende um atendimento hoje e traga mais bem-estar para o seu dia,
              sua equipe ou o seu evento.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <a
                href={whatsappLink(mensagemAgendar)}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-bronze px-7 py-3.5 text-sm font-medium text-porcelana shadow-lift transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:bg-porcelana hover:text-cafe"
              >
                Agendar pelo WhatsApp
              </a>
              <Link
                href="/seja-afiliado"
                className="rounded-full border border-porcelana/25 px-7 py-3.5 text-sm font-medium text-porcelana transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:border-porcelana"
              >
                Seja um afiliado
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
