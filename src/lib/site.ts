export const site = {
  name: "Mais Beleza",
  tagline: "Bem estar e Estética",
  phone: "(12) 99105-1164",
  whatsapp: "5512991051164",
  instagram: "esp.maisbeleza",
  instagramUrl: "https://instagram.com/esp.maisbeleza",
};

/** Monta um link wa.me com mensagem pré-escrita. */
export function whatsappLink(message: string): string {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}

/** CTA padrão de agendamento (abre o WhatsApp direto, sem formulário). */
export const waAgendar = whatsappLink(
  "Olá! Vim pelo site da Mais Beleza e gostaria de agendar um atendimento."
);

/** CTA de dúvidas gerais. */
export const waDuvidas = whatsappLink(
  "Olá! Vim pelo site da Mais Beleza e tenho uma dúvida."
);
