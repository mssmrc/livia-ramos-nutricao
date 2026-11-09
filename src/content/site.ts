import type { ImageKey } from './images'

/**
 * Dados gerais (FICTÍCIOS — troque pelos dados reais da cliente).
 * Tudo que aparece em mais de uma parte do site fica aqui.
 */

export const SITE = {
  name: 'Lívia Ramos Nutrição',
  professional: 'Lívia Ramos',
  title: 'Nutricionista',
  register: 'CRN-3 00000',
  tagline: 'Nutrição comportamental, sem dieta da moda e sem lista de proibidos.',
  description:
    'Nutricionista em Campinas e online. Acompanhamento para reeducação alimentar, nutrição esportiva, gestantes e intolerâncias, com plano feito para a sua rotina.',
  whatsapp: '(19) 99999-0000',
  whatsappNumber: '5519999990000',
  email: 'contato@exemplo.com.br',
  instagram: '@livia.nutri',
  address: {
    street: 'Rua Exemplo, 456 — sala 12',
    district: 'Cambuí',
    city: 'Campinas — SP',
  },
  hours: 'Seg a sex, 8h às 19h · Online também aos sábados',
} as const

/** Texto obrigatório nos sites de case. */
export const DEMO_NOTICE = 'Site demonstrativo. Profissional, depoimentos e contatos são fictícios.'
export const DEV_CREDIT = {
  name: 'Runa Web',
  text: 'Desenvolvido por',
  /** Site da empresa que assina o projeto (link do rodapé). */
  url: 'https://runaweb.com.br',
} as const

export const NAV = [
  { href: '#sobre', label: 'Sobre' },
  { href: '#atendimento', label: 'Atendimento' },
  { href: '#como-funciona', label: 'Como funciona' },
  { href: '#planos', label: 'Planos' },
  { href: '#dicas', label: 'Dicas' },
  { href: '#duvidas', label: 'Dúvidas' },
] as const

/** Capa (topo da página): apresentação ao lado do retrato. */
export const HERO = {
  title: 'Comer bem sem viver de dieta.',
  lead: 'Um plano feito com a sua rotina, a sua comida e o seu ritmo. Atendimento presencial em Campinas e online para todo o Brasil.',
  caption: 'Lívia Ramos atende no Cambuí desde 2015.',
}

/** Bloco de consulta online, em destaque logo depois da capa. */
export const ONLINE = {
  title: 'Consulta online, com o mesmo cuidado do consultório.',
  text: 'Para quem mora longe de Campinas, viaja muito ou prefere não sair de casa. O plano, os retornos e o valor são os mesmos.',
  points: [
    'Chamada de vídeo de 60 minutos, pelo computador ou pelo celular',
    'Guia para tirar as medidas em casa, no lugar da bioimpedância',
    'Plano alimentar, lista de compras e receitas no seu e-mail',
    'Dúvidas pelo WhatsApp entre uma consulta e outra',
  ],
}

/** Apresentação da seção "Sobre". */
export const ABOUT = {
  quote:
    'Dieta que começa na segunda e acaba na quinta não é falta de força de vontade. É um plano que não cabia na sua vida.',
  paragraphs: [
    'Passei anos vendo pacientes começarem dietas na segunda e desistirem na quinta. Por isso trabalho com nutrição comportamental: entender por que você come do jeito que come antes de mudar o que vai no prato.',
    'No consultório e no online, a consulta é uma conversa. Você sai com um plano possível, que cabe na marmita do trabalho, no almoço de domingo e na viagem de férias.',
  ],
}

export const CREDENTIALS = [
  'Nutricionista pela Unicamp, CRN-3 00000',
  'Pós-graduada em Nutrição Comportamental',
  'Especialização em Nutrição Esportiva',
  'Atende desde 2015, presencial e online',
]

export const AREAS: { title: string; text: string }[] = [
  {
    title: 'Reeducação alimentar',
    text: 'Para quem já tentou várias dietas e quer comer melhor sem cortar o que gosta. O foco é o hábito, não a balança.',
  },
  {
    title: 'Nutrição esportiva',
    text: 'Plano para treino de força, corrida ou ciclismo, com ajuste de energia e proteína para o seu objetivo e calendário.',
  },
  {
    title: 'Gestação e amamentação',
    text: 'Acompanhamento do pré-natal ao pós-parto, junto com a sua obstetra, para cuidar de você e do bebê.',
  },
  {
    title: 'Intolerâncias e saúde intestinal',
    text: 'Lactose, glúten, intestino preso ou estufamento. Investigamos a causa com calma, sem cortar tudo de uma vez.',
  },
]

export const STEPS: { title: string; text: string }[] = [
  {
    title: 'Primeira consulta',
    text: '60 minutos para entender sua rotina, histórico, exames e o que você gosta de comer.',
  },
  {
    title: 'Avaliação corporal',
    text: 'Bioimpedância e medidas no presencial. No online, você recebe um guia para medir em casa.',
  },
  {
    title: 'Plano alimentar',
    text: 'Em até 3 dias úteis, com opções de troca, lista de compras e receitas simples.',
  },
  {
    title: 'Retornos e ajustes',
    text: 'Retorno a cada 30 dias e dúvidas pelo WhatsApp entre as consultas.',
  },
]

export type Plan = { name: string; price: string; detail: string; items: string[]; featured?: boolean }

export const PLANS: Plan[] = [
  {
    name: 'Consulta única',
    price: 'R$ 290',
    detail: 'pagamento único',
    items: [
      'Consulta de 60 minutos',
      'Plano alimentar personalizado',
      'Lista de compras e receitas',
      '15 dias de dúvidas pelo WhatsApp',
    ],
  },
  {
    name: 'Acompanhamento trimestral',
    price: '3x R$ 250',
    detail: 'R$ 750 no total',
    items: [
      'Consulta inicial + 2 retornos',
      'Plano ajustado a cada retorno',
      'Bioimpedância em todas as consultas',
      'WhatsApp durante os 3 meses',
    ],
    featured: true,
  },
  {
    name: 'Acompanhamento semestral',
    price: '6x R$ 220',
    detail: 'R$ 1.320 no total',
    items: [
      'Consulta inicial + 5 retornos',
      'Plano ajustado a cada retorno',
      'Bioimpedância em todas as consultas',
      'WhatsApp durante os 6 meses',
    ],
  },
]

/** Depoimentos ILUSTRATIVOS para o case. Substitua por avaliações reais (com autorização). */
export const TESTIMONIALS = [
  {
    text: 'Pela primeira vez não senti que estava de dieta. Continuo comendo pão no café da manhã e aprendi a montar um almoço que me sustenta até a noite.',
    name: 'Fernanda L.',
    detail: 'Reeducação alimentar',
  },
  {
    text: 'Completei minha primeira meia maratona sem aquela quebra no km 15. O ajuste do pré-treino fez toda a diferença.',
    name: 'Rodrigo M.',
    detail: 'Nutrição esportiva',
  },
  {
    text: 'Fiz o acompanhamento durante a gestação toda. A Lívia conversava com a minha médica e eu me senti cuidada do começo ao fim.',
    name: 'Patrícia A.',
    detail: 'Gestação',
  },
]

export const FAQ: [string, string][] = [
  [
    'A consulta online funciona tão bem quanto a presencial?',
    'Sim. A conversa, o plano e os retornos são iguais. A diferença é a avaliação corporal: no presencial uso bioimpedância; no online, você recebe um guia para tirar as medidas em casa.',
  ],
  [
    'Vou receber uma dieta com horários e gramas?',
    'Só se você quiser. O mais comum é um plano com opções de refeições e trocas, para você montar o prato com o que tem em casa.',
  ],
  [
    'Atende plano de saúde?',
    'O atendimento é particular. Emito recibo com CRN para você pedir reembolso ao seu plano, se ele oferecer.',
  ],
  [
    'Preciso levar exames?',
    'Se tiver exames de sangue dos últimos 6 meses, envie antes da consulta. Se não tiver, posso solicitar os que forem necessários.',
  ],
  [
    'Posso remarcar a consulta?',
    'Pode, com até 24 horas de antecedência, sem custo. É só avisar pelo WhatsApp.',
  ],
]

/**
 * Dicas e receitas (blog da página inicial). Os textos abrem na própria página.
 * `image` é uma chave de src/content/images.json. O primeiro item aparece em destaque.
 */
export type Post = {
  tag: 'Receita' | 'Dica' | 'Mito ou verdade'
  image: ImageKey
  title: string
  excerpt: string
  minutes: number
  list?: { title: string; items: string[] }
  body: string[]
}

export const POSTS: Post[] = [
  {
    tag: 'Receita',
    image: 'bowl',
    title: 'Tigela de arroz com legumes assados e ovo',
    excerpt: 'Um almoço de 25 minutos que vai bem na marmita e aproveita o que sobrou na geladeira.',
    minutes: 4,
    list: {
      title: 'Ingredientes para 2 porções',
      items: [
        '1 xícara de arroz integral cozido',
        '2 xícaras de legumes em cubos (abóbora, cenoura, abobrinha)',
        '1 colher de sopa de azeite',
        '2 ovos',
        'Cheiro-verde, limão e sal a gosto',
      ],
    },
    body: [
      'Asse os legumes com o azeite e uma pitada de sal a 200 °C por 20 minutos, mexendo na metade.',
      'Enquanto isso, frite ou cozinhe os ovos do jeito que você gosta.',
      'Monte a tigela com arroz, legumes e ovo. Termine com limão e cheiro-verde.',
      'Para a marmita, leve o ovo cozido inteiro e monte na hora de comer.',
    ],
  },
  {
    tag: 'Dica',
    image: 'prato',
    title: 'Como montar um prato que segura até o jantar',
    excerpt: 'Sem balança: metade de vegetais, um quarto de proteína e um quarto de carboidrato.',
    minutes: 3,
    body: [
      'Comece pela metade do prato com vegetais crus e cozidos. Quanto mais cores, mais variedade de fibras e vitaminas.',
      'Um quarto vai para a proteína: feijão, ovo, frango, peixe ou carne. É ela que segura a fome da tarde.',
      'O outro quarto é do carboidrato: arroz, batata, mandioca ou macarrão. Não precisa tirar, só dar o espaço certo.',
      'Se a fome volta às 16h, o ajuste costuma estar na proteína do almoço.',
    ],
  },
  {
    tag: 'Dica',
    image: 'feira',
    title: 'Lista de feira da semana em 15 minutos',
    excerpt: 'Saia da feira com o que vai virar refeição, e não com o que vai estragar na gaveta.',
    minutes: 2,
    list: {
      title: 'O que levar',
      items: [
        '2 tipos de folha (alface, couve ou rúcula)',
        '3 legumes para assar ou refogar',
        '2 para comer crus, como tomate e pepino',
        'Frutas para 5 dias, umas maduras e outras ainda verdes',
        'Ervas e limão para dar sabor com menos sal',
      ],
    },
    body: [
      'Antes de sair, abra a geladeira e pense em três almoços da semana.',
      'Use primeiro o que estraga rápido, como folhas e frutas maduras, e deixe os legumes mais firmes para o fim da semana.',
    ],
  },
  {
    tag: 'Mito ou verdade',
    image: 'frutas',
    title: 'Fruta à noite engorda?',
    excerpt: 'Não. O que muda o resultado é o total do dia, não o horário no relógio.',
    minutes: 2,
    body: [
      'Nenhum alimento engorda por causa do horário. O corpo responde ao que você come ao longo do dia e da semana.',
      'Fruta à noite pode ser uma boa sobremesa: tem fibra e água e fecha o jantar sem o doce de pacote.',
      'Quem tem refluxo pode sentir desconforto com frutas ácidas perto de deitar. Nesse caso, prefira banana, mamão ou maçã.',
    ],
  },
]

export const POSTS_NOTE = 'Conteúdo educativo. Ele não substitui a consulta individual.'
