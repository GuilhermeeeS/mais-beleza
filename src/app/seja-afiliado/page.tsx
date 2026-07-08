import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { LeadForm } from "@/components/lead-form";

export const metadata: Metadata = {
  title: "Seja um afiliado · Mais Beleza",
  description:
    "Torne-se um afiliado da Mais Beleza. Candidate-se, passe pela entrevista e tenha acesso a treinamentos e oportunidades de atendimento.",
};

const etapas = [
  {
    numero: "01",
    titulo: "Candidatura",
    descricao: "Você preenche o formulário e conta um pouco sobre você.",
  },
  {
    numero: "02",
    titulo: "Entrevista",
    descricao: "Conversamos para nos conhecer e entender seu perfil.",
  },
  {
    numero: "03",
    titulo: "Onboarding",
    descricao: "Aprovado, você acessa a trilha de treinamento e começa.",
  },
];

export default function SejaAfiliadoPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <section className="mx-auto grid max-w-360 gap-14 px-6 lg:px-12 py-16 md:grid-cols-[0.9fr_1.1fr] md:py-24">
          <div className="md:pt-6">
            <Link href="/" className="text-sm text-neutro transition-colors hover:text-bronze">
              ← Voltar para o início
            </Link>
            <p className="eyebrow mt-8">Seja um afiliado</p>
            <h1 className="mt-4 text-4xl font-medium leading-tight tracking-tight text-cafe text-balance md:text-5xl">
              Cresça com a Mais Beleza.
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-neutro">
              Buscamos massoterapeutas que queiram fazer parte de uma marca séria
              de bem-estar. Preencha sua candidatura e o próximo passo é uma
              conversa com a nossa equipe.
            </p>

            <ol className="mt-10 flex flex-col">
              {etapas.map((e, i) => (
                <li
                  key={e.numero}
                  className={`flex gap-5 py-5 ${
                    i < etapas.length - 1 ? "border-b border-linha" : ""
                  }`}
                >
                  <span className="text-2xl font-medium text-bronze tabular-nums">
                    {e.numero}
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-cafe">{e.titulo}</h3>
                    <p className="mt-1 leading-relaxed text-neutro">
                      {e.descricao}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className="rounded-3xl border border-linha bg-areia/40 p-7 md:p-9">
            <LeadForm variant="afiliado" />
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
