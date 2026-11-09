# Lívia Ramos Nutrição — site demonstrativo

Case de portfólio da **Runa Web** ([runaweb.com.br](https://runaweb.com.br)): site de uma página de uma nutricionista fictícia, com planos e valores, calculadora de água e agendamento pelo WhatsApp.

Feito com **TanStack Start (React 19)**, hospedado no **Cloudflare Workers**. Não usa banco de dados.

> **Usando um agente de IA (Cline, Antigravity, Claude, Gemini, DeepSeek…)?**
> Ele deve ler primeiro o [`AGENTS.md`](./AGENTS.md).

## Começando

```bash
npm install
npm run images:baixar   # fotos placeholder do Unsplash (precisa de internet)
npm run dev             # http://localhost:3000
```

Antes de cada commit: `npm run check` (tipos + lint + testes).

## Publicar

Veja [`docs/02-deploy.md`](./docs/02-deploy.md). Resumo:

```bash
npx wrangler login
npm run deploy          # → https://livia-ramos-nutricao.<sua-conta>.workers.dev
```

## O que é placeholder

| Item                                          | Onde trocar                                                 |
| --------------------------------------------- | ----------------------------------------------------------- |
| Nome, CRN, WhatsApp, e-mail, endereço         | `src/content/site.ts` (SITE)                                |
| Áreas de atendimento, etapas, planos e preços | `src/content/site.ts` (AREAS, STEPS, PLANS)                 |
| Depoimentos e perguntas frequentes            | `src/content/site.ts` (TESTIMONIALS, FAQ)                   |
| Fotos                                         | `public/images/` (prompts em `public/images/PROMPTS-IA.md`) |
| Logo                                          | `src/components/Logo.tsx` e `public/favicon.svg`            |
| Cores e fontes                                | `src/styles/base.css` e `src/routes/__root.tsx`             |

## Documentação

| Arquivo                                                | Conteúdo                              |
| ------------------------------------------------------ | ------------------------------------- |
| [AGENTS.md](./AGENTS.md)                               | Mapa do projeto e regras para agentes |
| [docs/01-especificacao.md](./docs/01-especificacao.md) | Objetivo, páginas, identidade visual  |
| [docs/02-deploy.md](./docs/02-deploy.md)               | Publicação no Cloudflare e domínio    |
| [public/images/LEIA-ME.md](./public/images/LEIA-ME.md) | Como baixar e trocar as fotos         |

---

Desenvolvido por **[Runa Web](https://runaweb.com.br)**.
