# Especificação — Lívia Ramos Nutrição (case)

## Objetivo

Mostrar a profissionais autônomos da saúde como uma página única pode **apresentar o profissional,
mostrar preços com clareza e levar ao agendamento** pelo WhatsApp.

## Público do site

Adultos de 25 a 50 anos que já tentaram dietas restritivas, praticantes de esporte, gestantes e pessoas
com intolerâncias, em Campinas (presencial) e no Brasil todo (online).

## Seções (página única)

Layout de revista de saúde: a página abre como uma capa, com o retrato em altura total de um lado.

| Âncora           | Conteúdo                                                                         |
| ---------------- | -------------------------------------------------------------------------------- |
| topo (capa)      | Retrato em altura total (fixo no desktop), nome, CRN, título e chamadas          |
| `#atendimento`   | Quatro especialidades, ainda ao lado do retrato                                  |
| consulta online  | Faixa ameixa com o que muda (e o que não muda) no atendimento online             |
| `#sobre`         | Carta da Lívia: citação, apresentação, foto e formação                           |
| `#como-funciona` | Quatro etapas numeradas do acompanhamento                                        |
| `#planos`        | Planos em formato de cardápio + calculadora de água com copo que enche (`#agua`) |
| `#dicas`         | "Do caderno da Lívia": receita em destaque e três dicas que abrem na página      |
| depoimentos      | Três depoimentos ilustrativos                                                    |
| `#duvidas`       | Perguntas frequentes                                                             |
| `#agendar`       | Formulário que abre o WhatsApp, endereço e horários                              |

O bloco `#planos` é uma página dupla: planos sobre o verde-claro, calculadora sobre o azul-água. A divisão
das cores é uma linha do grid (não um gradiente), então acompanha a coluna da calculadora em qualquer
largura, e as duas colunas rolam juntas — não há `position: sticky` ali.

## Funcionalidades

- **Agendamento pelo WhatsApp** com objetivo e modalidade (online ou presencial).
- **Calculadora de água**: 35 ml por kg, mais 500 ml para quem treina, com aviso para casos especiais. Um copo
  desenhado (até 4 L) enche conforme o resultado.
- **Dicas e receitas**: lista `POSTS` em `src/content/site.ts`; o texto completo abre no próprio card.
- **Botão flutuante do WhatsApp** e menu fixo com âncoras.

## Identidade visual

| Token      | Valor     | Uso                                        |
| ---------- | --------- | ------------------------------------------ |
| `--leaf`   | `#f5f7ec` | Fundo                                      |
| `--ink`    | `#2e1a33` | Texto, faixa de planos, rodapé (berinjela) |
| `--citrus` | `#ee7b30` | Botões e destaques (laranja)               |
| `--sage`   | `#d3e0b5` | Seções de apoio (sálvia)                   |
| `--water`  | `#cfe6e4` | Bloco da calculadora de água (azul-água)   |
| `--olive`  | `#56652b` | Textos secundários e links                 |

- **Tipografia:** Newsreader (títulos e citações, serifada editorial) e Instrument Sans (texto).
- **Marca visual:** a capa de revista: retrato em altura total ao lado de um título serifado grande.
- Tom de voz: próximo, em primeira pessoa, sem prometer resultado e sem linguagem de dieta restritiva.
