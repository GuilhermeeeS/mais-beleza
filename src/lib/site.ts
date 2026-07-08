// Dados centrais da marca Mais Beleza, usados na LP e nos formulários.

export const site = {
  nome: "Mais Beleza",
  tagline: "Bem estar e Estética",
  telefone: "(12) 99105-1164",
  // Número em formato internacional para o wa.me (Brasil = 55)
  whatsapp: "5512991051164",
  instagram: "esp.maisbeleza",
  instagramUrl: "https://instagram.com/esp.maisbeleza",
  email: "contato@maisbeleza.com.br",
} as const;

// Monta um link de WhatsApp com mensagem pré-escrita.
export function whatsappLink(mensagem: string) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(mensagem)}`;
}

// Mensagem padrão para agendar um atendimento (contato direto via WhatsApp).
export const mensagemAgendar =
  "Olá! Gostaria de agendar um atendimento com a Mais Beleza.";

export const servicos = [
  {
    titulo: "Atendimento corporativo",
    tag: "Empresas",
    descricao:
      "Quick massage para colaboradores e clientes em empresas, eventos e ações. Bem-estar que valoriza o seu time.",
    imagem: "/fotos/atendimento-evento.jpeg",
    alt: "Atendimento de quick massage em ação corporativa",
  },
  {
    titulo: "Spa Day individual e a dois",
    tag: "Relax",
    descricao:
      "Uma experiência de relaxamento pensada para o seu momento, sozinho ou a dois, onde você quiser.",
    imagem: "/fotos/massagem-deck.jpeg",
    alt: "Massagem relaxante ao ar livre em um deck cercado de natureza",
  },
  {
    titulo: "Dia da Noiva",
    tag: "Noiva",
    descricao:
      "Cuidado e serenidade para o dia mais especial, para a noiva e para quem ela ama.",
    imagem: "/fotos/atendimento-vista.png",
    alt: "Cliente relaxando durante atendimento com vista para as montanhas",
  },
  {
    titulo: "Beleza de alto nível",
    tag: "Estética",
    descricao:
      "Procedimentos avançados de beleza e um processo consciente e multidisciplinar de emagrecimento.",
    imagem: "/fotos/estrutura-cadeira.jpeg",
    alt: "Estrutura de atendimento da Mais Beleza montada na natureza",
  },
] as const;

// Contextos onde a Mais Beleza leva o atendimento (não temos loja fixa).
export const onde = [
  {
    titulo: "Empresas",
    descricao: "Quick massage para colaboradores e clientes.",
    imagem: "/fotos/atendimento-evento.jpeg",
    alt: "Atendimento de quick massage dentro de uma empresa",
  },
  {
    titulo: "Eventos e ações",
    descricao: "Estrutura completa para o seu evento.",
    imagem: "/fotos/evento-banner.jpeg",
    alt: "Equipe da Mais Beleza atendendo em um evento",
  },
  {
    titulo: "Spa Day",
    descricao: "Relaxamento onde você quiser, a sós ou a dois.",
    imagem: "/fotos/massagem-deck.jpeg",
    alt: "Massagem relaxante ao ar livre em um deck",
  },
  {
    titulo: "Dia da Noiva",
    descricao: "Cuidado e serenidade no dia mais especial.",
    imagem: "/fotos/atendimento-vista.png",
    alt: "Cliente relaxando durante atendimento com vista para as montanhas",
  },
] as const;

export const passos = [
  {
    numero: "01",
    titulo: "Você entra em contato",
    descricao:
      "Conte o que precisa: um atendimento individual, um evento ou uma ação na sua empresa.",
  },
  {
    numero: "02",
    titulo: "Montamos a experiência",
    descricao:
      "Definimos formato, data e local. A Mais Beleza leva toda a estrutura até você.",
  },
  {
    numero: "03",
    titulo: "Nós vamos até você",
    descricao:
      "Nossa equipe chega com tudo pronto. Você só precisa relaxar e aproveitar.",
  },
  {
    numero: "04",
    titulo: "Bem-estar de verdade",
    descricao:
      "Cuidado com propósito, para o corpo, para a mente e para a sua rotina.",
  },
] as const;

export const depoimentos = [
  {
    texto:
      "Levaram a quick massage para o nosso evento e foi o ponto alto do dia. Os convidados amaram e a estrutura era impecável.",
    nome: "Carolina M.",
    contexto: "Ação corporativa",
  },
  {
    texto:
      "Atendimento humano e profissional do começo ao fim. Saí renovada, foi muito mais do que uma massagem.",
    nome: "Renata S.",
    contexto: "Spa Day",
  },
  {
    texto:
      "Contratamos para o dia da noiva e foi perfeito. Cuidaram de todos os detalhes com muito carinho.",
    nome: "Juliana P.",
    contexto: "Dia da Noiva",
  },
] as const;

export const faq = [
  {
    pergunta: "Vocês têm um espaço fixo?",
    resposta:
      "Não. A Mais Beleza atende por demanda: levamos toda a estrutura até você, seja em casa, na empresa ou no seu evento.",
  },
  {
    pergunta: "Quais regiões vocês atendem?",
    resposta:
      "Atendemos sob agendamento. Fale com a gente pelo WhatsApp e confirmamos a disponibilidade para a sua região e data.",
  },
  {
    pergunta: "Dá para contratar para eventos e empresas?",
    resposta:
      "Sim. Atendimentos corporativos e experienciais são uma das nossas especialidades, para colaboradores, clientes e convidados.",
  },
  {
    pergunta: "Como faço para agendar?",
    resposta:
      "É simples: preencha o formulário rápido no botão “Agendar atendimento” e a conversa segue direto no WhatsApp.",
  },
] as const;
