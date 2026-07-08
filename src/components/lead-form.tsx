"use client";

import { useState } from "react";
import { whatsappLink } from "@/lib/site";

type Variant = "agendar" | "afiliado";

const inputClass =
  "w-full rounded-xl border border-linha bg-porcelana px-4 py-3 text-cafe placeholder:text-neutro/70 outline-none transition-colors focus:border-bronze";

const labelClass = "mb-1.5 block text-sm font-medium text-cafe";

export function LeadForm({ variant }: { variant: Variant }) {
  const [enviando, setEnviando] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setEnviando(true);

    const data = new FormData(e.currentTarget);
    const nome = String(data.get("nome") ?? "");
    const telefone = String(data.get("telefone") ?? "");
    const cidade = String(data.get("cidade") ?? "");
    const detalhe = String(data.get("detalhe") ?? "");
    const mensagem = String(data.get("mensagem") ?? "");

    // TODO(backend): antes de redirecionar, salvar o lead no Supabase
    // (tabela `applications` para afiliado / `leads` para cliente).

    let texto: string;
    if (variant === "agendar") {
      texto =
        `Olá! Quero agendar um atendimento com a Mais Beleza.\n\n` +
        `*Nome:* ${nome}\n` +
        `*Telefone:* ${telefone}\n` +
        `*Cidade:* ${cidade}\n` +
        `*Tipo de atendimento:* ${detalhe}\n` +
        (mensagem ? `*Detalhes:* ${mensagem}` : "");
    } else {
      texto =
        `Olá! Quero me tornar afiliado(a) da Mais Beleza.\n\n` +
        `*Nome:* ${nome}\n` +
        `*Telefone:* ${telefone}\n` +
        `*Cidade:* ${cidade}\n` +
        `*Experiência:* ${detalhe}\n` +
        (mensagem ? `*Sobre mim:* ${mensagem}` : "");
    }

    window.location.href = whatsappLink(texto);
  }

  const isAgendar = variant === "agendar";

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="nome" className={labelClass}>
            Nome completo
          </label>
          <input id="nome" name="nome" required className={inputClass} placeholder="Seu nome" />
        </div>
        <div>
          <label htmlFor="telefone" className={labelClass}>
            WhatsApp
          </label>
          <input
            id="telefone"
            name="telefone"
            required
            inputMode="tel"
            className={inputClass}
            placeholder="(00) 00000-0000"
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="cidade" className={labelClass}>
            Cidade
          </label>
          <input id="cidade" name="cidade" required className={inputClass} placeholder="Sua cidade" />
        </div>
        <div>
          <label htmlFor="detalhe" className={labelClass}>
            {isAgendar ? "Tipo de atendimento" : "Você já é massoterapeuta?"}
          </label>
          <select id="detalhe" name="detalhe" required defaultValue="" className={inputClass}>
            <option value="" disabled>
              Selecione
            </option>
            {isAgendar ? (
              <>
                <option>Atendimento corporativo</option>
                <option>Spa Day (individual)</option>
                <option>Spa Day (casal)</option>
                <option>Dia da Noiva</option>
                <option>Beleza / emagrecimento</option>
                <option>Ainda não sei</option>
              </>
            ) : (
              <>
                <option>Sim, com experiência</option>
                <option>Sim, em formação</option>
                <option>Ainda não, quero aprender</option>
              </>
            )}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="mensagem" className={labelClass}>
          {isAgendar ? "Conte mais sobre o que precisa (opcional)" : "Fale um pouco sobre você (opcional)"}
        </label>
        <textarea
          id="mensagem"
          name="mensagem"
          rows={4}
          className={inputClass}
          placeholder={
            isAgendar
              ? "Data, local, número de pessoas..."
              : "Sua experiência, região onde atende, disponibilidade..."
          }
        />
      </div>

      <button
        type="submit"
        disabled={enviando}
        className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-bronze px-7 py-3.5 font-medium text-porcelana transition-colors hover:bg-bronze-escuro disabled:opacity-70"
      >
        {enviando ? "Abrindo o WhatsApp..." : "Enviar pelo WhatsApp"}
      </button>

      <p className="text-center text-xs text-neutro">
        Ao enviar, você será direcionado ao WhatsApp com sua mensagem pronta.
      </p>
    </form>
  );
}
