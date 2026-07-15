export type Bloco = { titulo: string; itens: string[] };

export type Experiencia = {
  slug: string;
  nome: string;
  cardTexto: string;
  cardFoto: string;
  cardImg?: string;
  eyebrow: string;
  titulo: string;
  subtitulo?: string;
  intro: string[];
  foto: string;
  img?: string;
  blocos: Bloco[];
  fecho?: string;
  ctaLabel: string;
};

export const experiencias: Experiencia[] = [
  {
    slug: "home-spa",
    nome: "Home Spa",
    cardTexto:
      "Transformamos a sua casa num verdadeiro refúgio de bem‑estar, sem você precisar sair de casa.",
    cardFoto: "Foto do Home Spa (ambiente montado em casa) aqui",
    cardImg: "/fotos/slot-statement.webp",
    eyebrow: "Home Spa",
    titulo: "Transformamos a sua casa em um verdadeiro refúgio de bem‑estar.",
    intro: [
      "Imagine chegar em casa e encontrar um ambiente preparado especialmente para você. Aromas suaves, música relaxante, toalhas organizadas, iluminação acolhedora e terapeutas prontas para proporcionar momentos de cuidado e renovação.",
      "Na Mais Beleza, levamos muito mais do que terapias: levamos uma experiência completa de Home Spa, montando toda a estrutura necessária para que você viva um momento de relaxamento sem precisar sair de casa.",
      "Você escolhe o local. Nós cuidamos de todos os detalhes.",
    ],
    foto: "Foto do Home Spa (você recebendo massagem em casa) aqui",
    img: "/fotos/slot-statement.webp",
    blocos: [
      {
        titulo: "Para diferentes ocasiões",
        itens: [
          "Um momento de autocuidado",
          "Casais que desejam viver uma experiência especial",
          "Mãe e filha",
          "Amigas",
          "Aniversários",
          "Chá de panela, chá de lingerie e despedida de solteira",
          "Celebrações e momentos especiais",
        ],
      },
      {
        titulo: "O que preparamos para você",
        itens: [
          "Montagem completa do ambiente",
          "Maca profissional",
          "Aromaterapia",
          "Música ambiente relaxante",
          "Toalhas e materiais higienizados",
          "Terapias personalizadas de acordo com a sua necessidade",
          "Atendimento realizado por terapeutas treinadas e qualificadas",
        ],
      },
      {
        titulo: "Benefícios da experiência",
        itens: [
          "Alívio das tensões musculares",
          "Redução do estresse e da ansiedade",
          "Sensação profunda de relaxamento",
          "Renovação das energias",
          "Momento exclusivo de autocuidado",
          "Conforto de viver tudo isso sem sair de casa",
        ],
      },
    ],
    fecho:
      "Mais do que um atendimento, proporcionamos uma experiência cuidadosamente preparada para que você desacelere, recupere suas energias e transforme o seu lar em um verdadeiro spa.",
    ctaLabel: "Quero viver essa experiência",
  },
  {
    slug: "quick-massage",
    nome: "Quick Massage",
    cardTexto:
      "Alívio imediato para o corpo e a mente em poucos minutos, na cadeira e sem tirar a roupa. Ideal para empresas e eventos.",
    cardFoto: "Foto da Quick Massage (pessoa sentada na cadeira, empresa) aqui",
    cardImg: "/fotos/slot-servicos-corporativo.webp",
    eyebrow: "Quick Massage",
    titulo: "Quick Massage Terapêutica Relaxante",
    subtitulo: "Alívio imediato para o corpo e a mente, em apenas alguns minutos.",
    intro: [
      "A Quick Massage é uma terapia realizada em cadeira ergonômica, sem a necessidade de retirar a roupa, ideal para quem busca aliviar tensões musculares, reduzir o estresse e recuperar a disposição durante a rotina.",
    ],
    foto: "Foto da Quick Massage (atendimento na cadeira) aqui",
    img: "/fotos/slot-servicos-momentos.webp",
    blocos: [
      {
        titulo: "Benefícios",
        itens: [
          "Alívio das tensões no pescoço, ombros e costas",
          "Redução do estresse físico e mental",
          "Diminuição das dores provocadas por longos períodos sentado",
          "Relaxamento muscular imediato",
          "Melhora da circulação sanguínea",
          "Sensação de leveza e bem‑estar",
          "Aumento da disposição e da concentração",
          "Auxílio na redução da fadiga física e mental",
          "Melhora da produtividade e do foco",
          "Atendimento rápido, prático e sem necessidade de trocar de roupa",
        ],
      },
      {
        titulo: "Ideal para",
        itens: [
          "Empresas",
          "Eventos corporativos",
          "Casamentos",
          "Festas e confraternizações",
          "Atendimento residencial",
        ],
      },
    ],
    ctaLabel: "Agendar Quick Massage",
  },
  {
    slug: "day-spa",
    nome: "Day Spa",
    cardTexto:
      "Um dia inteiro de cuidado numa mansão exclusiva em Campos do Jordão, cercada pela natureza da Serra da Mantiqueira.",
    cardFoto: "Foto do Day Spa em Campos do Jordão (ambiente / vista) aqui",
    cardImg: "/fotos/slot-servicos-spa.webp",
    eyebrow: "Day Spa em Campos do Jordão",
    titulo: "Day Spa Exclusivo em Campos do Jordão",
    subtitulo:
      "Um dia inteiro para desacelerar, renovar as energias e cuidar de quem mais importa: você.",
    intro: [
      "Imagine viver uma experiência de relaxamento em uma mansão exclusiva no alto do Capivari, cercada pela natureza, pelo clima acolhedor de Campos do Jordão e por uma atmosfera de tranquilidade que convida você a desacelerar.",
      "Nosso Day Spa foi criado para quem deseja fazer uma pausa da rotina e viver momentos de cuidado, equilíbrio e bem‑estar em um ambiente sofisticado, reservado e preparado para proporcionar uma experiência inesquecível.",
    ],
    foto: "Foto do Day Spa em Campos do Jordão (mansão / vista da serra) aqui",
    img: "/fotos/slot-servicos-spa.webp",
    blocos: [
      {
        titulo: "Uma experiência para compartilhar ou viver do seu jeito",
        itens: [
          "Individual, para um momento exclusivo de autocuidado",
          "Mãe e filha, fortalecendo laços em uma experiência única",
          "Casal, para celebrar o relacionamento com conexão e relaxamento",
          "Amigas, transformando um dia especial em uma lembrança inesquecível",
        ],
      },
      {
        titulo: "Benefícios da experiência",
        itens: [
          "Alívio das tensões musculares e do estresse acumulado",
          "Relaxamento profundo do corpo e da mente",
          "Redução da ansiedade e da sobrecarga da rotina",
          "Sensação de leveza, renovação e bem‑estar",
          "Momento exclusivo de autocuidado em um ambiente de alto padrão",
          "Atendimento personalizado realizado por terapeutas qualificadas",
          "Uma experiência memorável em um dos destinos mais encantadores da Serra da Mantiqueira",
        ],
      },
    ],
    fecho:
      "As experiências são realizadas mediante agendamento e de acordo com a disponibilidade de datas. Fale com a nossa equipe para conhecer as opções de pacotes e reservar o seu Day Spa em Campos do Jordão.",
    ctaLabel: "Consultar datas disponíveis",
  },
  {
    slug: "dia-da-noiva",
    nome: "Dia da Noiva",
    cardTexto:
      "O cuidado que antecede um dos momentos mais importantes da sua vida, levado até o local escolhido pela noiva.",
    cardFoto: "Foto do Dia da Noiva (noiva em preparação) aqui",
    cardImg: "/fotos/dia-da-noiva.webp",
    eyebrow: "Dia da Noiva",
    titulo: "O cuidado que antecede um dos momentos mais importantes da sua vida.",
    intro: [
      "Sabemos que o dia do casamento é repleto de emoções. Por isso, somos especialistas em proporcionar experiências completas e inesquecíveis para noivas, cuidando de cada detalhe para que esse momento seja vivido com tranquilidade, leveza e muito bem‑estar.",
      "Levamos toda a estrutura até o local escolhido pela noiva, oferecendo uma experiência personalizada que pode ser realizada em casa, em hotéis, no local da cerimônia, em chácaras, sítios ou espaços de eventos.",
    ],
    foto: "Foto do Dia da Noiva (noiva relaxando antes do casamento) aqui",
    img: "/fotos/dia-da-noiva.webp",
    blocos: [
      {
        titulo: "O que oferecemos",
        itens: [
          "Massagens relaxantes e terapêuticas",
          "Escalda-pés",
          "Aromaterapia",
          "Reflexologia",
          "Terapias personalizadas",
          "Atendimento individual ou para madrinhas e familiares",
          "Estrutura completa montada no local",
        ],
      },
    ],
    fecho:
      "Nosso propósito é fazer com que a noiva desacelere, alivie as tensões e aproveite cada instante antes de dizer “sim”, criando uma lembrança tão especial quanto o próprio casamento.",
    ctaLabel: "Quero viver esse momento",
  },
];

export function getExperiencia(slug: string) {
  return experiencias.find((e) => e.slug === slug);
}
