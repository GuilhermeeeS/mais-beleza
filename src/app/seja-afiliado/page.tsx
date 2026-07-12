"use client";

import { useState } from "react";
import { whatsappLink } from "@/lib/site";
import { Logo } from "@/components/logo";

type Form = {
  nome: string;
  whatsapp: string;
  cidade: string;
  estrutura: string;
  experiencia: string;
};

const empty: Form = { nome: "", whatsapp: "", cidade: "", estrutura: "", experiencia: "" };

export default function SejaAfiliado() {
  const [form, setForm] = useState<Form>(empty);

  const update =
    (key: keyof Form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setForm((prev) => ({ ...prev, [key]: e.target.value }));

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // TODO: salvar candidatura no Supabase antes de seguir pro WhatsApp.
    const msg = [
      "Olá! Quero me candidatar como afiliada da Mais Beleza.",
      "",
      `Nome: ${form.nome}`,
      `WhatsApp: ${form.whatsapp}`,
      `Cidade: ${form.cidade}`,
      `Estrutura própria: ${form.estrutura || "não informado"}`,
      "",
      "Formação e experiência:",
      form.experiencia,
    ].join("\n");
    window.open(whatsappLink(msg), "_blank", "noopener,noreferrer");
  }

  return (
    <main>
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 24,
          padding: "22px var(--pad)",
          maxWidth: 1440,
          margin: "0 auto",
          width: "100%",
        }}
      >
        <a href="/" aria-label="Mais Beleza">
          <Logo height={52} />
        </a>
        <a href="/" className="pill pill-light">
          Voltar ao site
        </a>
      </header>

      <section className="container" style={{ paddingBlock: "clamp(32px, 6vw, 72px)" }}>
        <div style={{ maxWidth: 640, marginInline: "auto" }}>
          <div className="stack" style={{ gap: 16, alignItems: "flex-start", marginBottom: 36 }}>
            <span className="eyebrow">Seja afiliado</span>
            <h1 className="display-md">Atenda com a Mais Beleza</h1>
            <p className="lead">
              É massoterapeuta ou profissional de estética? Candidate-se para fazer
              parte da nossa rede. Preencha os dados e a conversa segue no WhatsApp.
            </p>
          </div>

          <form className="stack" style={{ gap: 20 }} onSubmit={handleSubmit}>
            <div className="form-field">
              <label htmlFor="nome">Nome completo</label>
              <input id="nome" required value={form.nome} onChange={update("nome")} placeholder="Seu nome" />
            </div>

            <div className="form-field">
              <label htmlFor="whatsapp">WhatsApp</label>
              <input
                id="whatsapp"
                required
                inputMode="tel"
                value={form.whatsapp}
                onChange={update("whatsapp")}
                placeholder="(00) 00000-0000"
              />
            </div>

            <div className="form-field">
              <label htmlFor="cidade">Cidade</label>
              <input id="cidade" required value={form.cidade} onChange={update("cidade")} placeholder="Onde você atende" />
            </div>

            <div className="form-field">
              <label htmlFor="estrutura">Você já atende com estrutura própria?</label>
              <select id="estrutura" value={form.estrutura} onChange={update("estrutura")}>
                <option value="">Selecione</option>
                <option value="Sim">Sim</option>
                <option value="Não">Não</option>
              </select>
            </div>

            <div className="form-field">
              <label htmlFor="experiencia">Formação e experiência</label>
              <textarea
                id="experiencia"
                value={form.experiencia}
                onChange={update("experiencia")}
                placeholder="Conte um pouco da sua formação, especialidades e tempo de experiência."
              />
            </div>

            <button type="submit" className="pill pill-dark" style={{ alignSelf: "flex-start" }}>
              Enviar candidatura
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
