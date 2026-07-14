import { SiteHeader } from "@/components/site-header";
import { Hero } from "@/components/hero";
import { Beneficios } from "@/components/beneficios";
import { QuemSomos } from "@/components/quem-somos";
import { Experiencias } from "@/components/experiencias";
import { ComoFunciona } from "@/components/como-funciona";
import { CarrosselVideos } from "@/components/carrossel-videos";
import { Faq } from "@/components/faq";
import { CtaFinal } from "@/components/cta-final";
import { SiteFooter } from "@/components/site-footer";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <Hero />
      <Beneficios />
      <QuemSomos />
      <Experiencias />
      <ComoFunciona />
      <CarrosselVideos />
      <Faq />
      <CtaFinal />
      <SiteFooter />
    </>
  );
}
