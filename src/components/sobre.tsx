import Image from "next/image";
import { Reveal } from "./reveal";
import { Counter } from "./counter";

export function Sobre() {
  return (
    <section
      id="sobre"
      className="section-full scroll-mt-24 border-t border-linha bg-areia/40 py-20 md:py-28"
    >
      <div className="mx-auto grid max-w-360 gap-16 px-6 lg:px-12 md:grid-cols-2 md:items-center">
        {/* Composição de imagens sobrepostas */}
        <Reveal className="relative">
          <div className="relative mx-auto max-w-md md:ml-0">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2.25rem] shadow-lift">
              <Image
                src="/fotos/dupla-estande.jpeg"
                alt="Equipe da Mais Beleza representando a marca em um evento"
                fill
                sizes="(max-width: 768px) 90vw, 40vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-5 hidden aspect-[3/4] w-40 overflow-hidden rounded-2xl border-4 border-areia shadow-lift sm:block lg:-right-12 lg:w-48">
              <Image
                src="/fotos/duas-terapeutas.png"
                alt="Massoterapeutas da Mais Beleza atendendo clientes ao ar livre"
                fill
                sizes="12rem"
                className="object-cover"
              />
            </div>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <p className="eyebrow">Quem somos</p>
            <h2 className="mt-5 font-serif text-4xl font-medium leading-tight tracking-tight text-cafe text-balance md:text-5xl">
              Bem-estar com propósito, feito por gente que cuida.
            </h2>
          </Reveal>

          <Reveal delay={80}>
            <p className="mt-6 text-lg leading-relaxed text-neutro">
              A Mais Beleza nasceu para levar relaxamento e cuidado até as
              pessoas, em empresas, eventos e nos momentos mais especiais. Sem loja fixa,
              com uma equipe que leva estrutura profissional e um atendimento
              humano onde você estiver.
            </p>
            <p className="mt-4 leading-relaxed text-neutro">
              Cuidar de pessoas é a nossa especialidade. Encantar é a nossa
              missão.
            </p>
          </Reveal>

          <Reveal delay={160}>
            <dl className="mt-10 grid grid-cols-3 gap-6 border-t border-linha pt-8">
              <div>
                <dt className="font-serif text-4xl font-medium text-bronze">
                  <Counter value={100} suffix="%" />
                </dt>
                <dd className="mt-1 text-sm leading-snug text-neutro">
                  atendimento por demanda
                </dd>
              </div>
              <div>
                <dt className="font-serif text-4xl font-medium text-bronze">
                  <Counter value={4} />
                </dt>
                <dd className="mt-1 text-sm leading-snug text-neutro">
                  experiências sob medida
                </dd>
              </div>
              <div>
                <dt className="font-serif text-4xl font-medium text-bronze">
                  <Counter value={5} prefix="+" />
                </dt>
                <dd className="mt-1 text-sm leading-snug text-neutro">
                  anos de estrada
                </dd>
              </div>
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
