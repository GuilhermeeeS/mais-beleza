import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { waAgendar } from "@/lib/site";
import type { Experiencia } from "@/lib/experiencias";

export function ExperienciaPage({ exp }: { exp: Experiencia }) {
  return (
    <>
      <SiteHeader />
      <main className="exp-page">
        <section className="exp-hero">
          <div className="container exp-hero-inner">
            <div className="exp-hero-text">
              <Link href="/#experiencias" className="exp-back">
                ← Todas as experiências
              </Link>
              <span className="eyebrow">{exp.eyebrow}</span>
              <h1 className="display-lg">{exp.titulo}</h1>
              {exp.subtitulo && <p className="lead">{exp.subtitulo}</p>}
              {exp.intro.map((p, i) => (
                <p className="exp-p" key={i}>
                  {p}
                </p>
              ))}
              <a className="pill pill-gold" href={waAgendar} target="_blank" rel="noopener noreferrer">
                {exp.ctaLabel}
              </a>
            </div>
            <div className="exp-hero-media">
              <span className="foto-ph">{exp.foto}</span>
            </div>
          </div>
        </section>

        <section className="exp-lists">
          <div className="container">
            <div className="exp-blocks">
              {exp.blocos.map((b) => (
                <div className="exp-block" key={b.titulo}>
                  <h3>{b.titulo}</h3>
                  <ul>
                    {b.itens.map((it) => (
                      <li key={it}>{it}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            {exp.fecho && <p className="exp-fecho">{exp.fecho}</p>}
            <div className="exp-cta">
              <a className="pill pill-gold" href={waAgendar} target="_blank" rel="noopener noreferrer">
                {exp.ctaLabel}
              </a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
