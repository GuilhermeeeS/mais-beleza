import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Hero } from "@/components/hero";
import { Intro } from "@/components/intro";
import { Servicos } from "@/components/servicos";
import { ComoFunciona } from "@/components/como-funciona";
import { Faq } from "@/components/faq";
import { Afiliado } from "@/components/afiliado";
import { Depoimentos } from "@/components/depoimentos";
import { CtaFinal } from "@/components/cta-final";

export default function Home() {
  return (
    <>
      <SiteHeader overlay />
      <main className="flex-1">
        <Hero />
        <Intro />
        <Servicos />
        <ComoFunciona />
        <Faq />
        <Afiliado />
        <Depoimentos />
        <CtaFinal />
      </main>
      <SiteFooter />
    </>
  );
}
