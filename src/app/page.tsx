import { SiteHeader } from "@/components/site-header";
import { Hero } from "@/components/hero";
import { Stats } from "@/components/stats";
import { Servicos } from "@/components/servicos";
import { Diferenciais } from "@/components/diferenciais";
import { Statement } from "@/components/statement";
import { ComoFunciona } from "@/components/como-funciona";
import { Faq } from "@/components/faq";
import { CtaFinal } from "@/components/cta-final";
import { SiteFooter } from "@/components/site-footer";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <Hero />
      <Stats />
      <Servicos />
      <Diferenciais />
      <Statement />
      <ComoFunciona />
      <Faq />
      <CtaFinal />
      <SiteFooter />
    </>
  );
}
