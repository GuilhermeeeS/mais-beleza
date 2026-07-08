import Link from "next/link";
import Image from "next/image";
import { Reveal } from "./reveal";

const beneficios = [
  "Faça parte de uma marca de bem-estar em crescimento",
  "Trilha de treinamento completa para você começar com segurança",
  "Atenda por demanda, com flexibilidade de agenda",
];

export function Afiliado() {
  return (
    <section id="afiliado" className="section-full scroll-mt-24 px-4 py-8 sm:px-6">
      <Reveal className="w-full">
        <div className="relative mx-auto flex min-h-[80svh] w-full items-center overflow-hidden rounded-[2.5rem] bg-cafe shadow-lift">
          <Image
            src="/fotos/duas-terapeutas.png"
            alt="Duas massoterapeutas da Mais Beleza atendendo clientes ao ar livre"
            fill
            sizes="100vw"
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-linear-to-r from-cafe via-cafe/90 to-cafe/30" />
          <div className="grain-layer" aria-hidden />

          <div className="relative z-10 max-w-xl px-8 py-14 md:px-14 md:py-20">
            <p className="eyebrow text-bronze">Trabalhe com a gente</p>
            <h2 className="mt-5 text-4xl font-medium leading-tight tracking-tight text-porcelana text-balance md:text-5xl">
              Seja um afiliado Mais Beleza
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-porcelana/80">
              É massoterapeuta e quer crescer com uma marca séria? Candidate-se,
              passe pela nossa entrevista e ganhe acesso a treinamentos e
              oportunidades de atendimento.
            </p>

            <ul className="mt-8 flex flex-col gap-3">
              {beneficios.map((b) => (
                <li key={b} className="flex items-start gap-3 text-porcelana/90">
                  <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-bronze" />
                  <span className="leading-relaxed">{b}</span>
                </li>
              ))}
            </ul>

            <Link
              href="/seja-afiliado"
              className="mt-10 inline-block rounded-full bg-bronze px-7 py-3.5 text-sm font-medium text-porcelana shadow-soft transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:bg-porcelana hover:text-cafe hover:shadow-lift"
            >
              Quero me afiliar
            </Link>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
