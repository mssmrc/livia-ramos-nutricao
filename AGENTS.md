# AGENTS.md — Guia obrigatório para agentes de IA

> Vale para Cline, Antigravity, Claude, Gemini, DeepSeek e qualquer outro agente.
> **Leia este arquivo inteiro antes de alterar o código.** Detalhes em `docs/`.

---

## 1. O que é o projeto

1. Site **demonstrativo (case de portfólio)** de **Lívia Ramos Nutrição**, nutricionista autônoma **fictício(a)**.
2. Desenvolvido pela **Runa Web** (`https://runaweb.com.br`). O crédito "Desenvolvido por Runa Web" fica no rodapé,
   com link para o site (`DEV_CREDIT` em `src/content/site.ts`), e **não deve ser removido**.
3. Não há banco de dados, login nem pagamento. O agendamento monta uma mensagem e abre o WhatsApp do visitante.
4. Nomes, telefones, e-mails, endereços, preços e depoimentos são **placeholders**.

**Páginas:** Início (página única com seções) (`/`), Política de privacidade (`/privacidade`).

---

## 2. Stack

| Camada     | Tecnologia                                            |
| ---------- | ----------------------------------------------------- |
| Framework  | **TanStack Start** (React 19 + TanStack Router, SSR)  |
| Build      | **Vite 8**                                            |
| Hospedagem | **Cloudflare Workers** (deploy com `wrangler`)        |
| Estilo     | **Tailwind v4** + CSS de componentes em `src/styles/` |
| Testes     | **Vitest** · Qualidade: ESLint + Prettier             |

---

## 3. Comandos

```bash
npm install            # instalar dependências (uma vez)
npm run images:baixar  # baixar as fotos placeholder do Unsplash (uma vez)
npm run images:prompts # regenerar public/images/PROMPTS-IA.md após mudar images.json
npm run dev            # site local em http://localhost:3000
npm run check          # typecheck + lint + testes  ← RODE SEMPRE ANTES DE TERMINAR
npm run build          # build de produção
npm run deploy         # build + publicar no Cloudflare
```

---

## 4. Mapa de pastas

```
src/
├── routes/                 PÁGINAS (cada arquivo = uma URL)
│   ├── __root.tsx          layout geral (cabeçalho, rodapé, fontes)
│   ├── index.tsx             /  conteúdo em components/pages/HomePage.tsx
│   ├── privacidade.tsx       /privacidade
├── components/             peças reutilizáveis (Header, Footer, Logo, Photo, Faq, BookingForm, WaterCalculator, PostCard…)
├── content/                TEXTOS E DADOS (site.ts com dados, capa, áreas, etapas, planos, dicas, depoimentos e FAQ; legal.ts; images.json)
├── lib/                    regras puras (whatsapp.ts, water.ts)
├── styles/ + styles.css    estilos (cores em styles/base.css → :root)
├── server.ts               entrada do Worker (cabeçalhos de segurança e CSP)
└── test/                   testes automáticos
scripts/                    baixar-imagens.mjs · gerar-prompts.mjs
public/                     imagens, favicon, robots.txt
docs/                       especificação e deploy
```

---

## 5. Regras de ouro

| #   | Regra                                                                                   | Por quê                                     |
| --- | --------------------------------------------------------------------------------------- | ------------------------------------------- |
| 1   | **Não remova o crédito "Desenvolvido por Runa Web"** nem o aviso de site demonstrativo. | É um case de portfólio.                     |
| 2   | **Textos e dados ficam em `src/content/`**, não espalhados nas páginas.                 | Trocar o cliente = editar só essa pasta.    |
| 3   | **Imagens: lista única em `src/content/images.json`.** Use `<Photo k="nome" />`.        | O script e os prompts leem o mesmo arquivo. |
| 4   | **Cores e fontes só pelas variáveis CSS** de `src/styles/base.css`.                     | Mudar a identidade em um lugar só.          |
| 5   | **Novo domínio externo** (script, iframe, API) → inclua na CSP em `src/server.ts`.      | Senão o navegador bloqueia.                 |
| 6   | **Nunca `dangerouslySetInnerHTML`.**                                                    | Evita XSS.                                  |
| 7   | **Rode `npm run check` antes de concluir.**                                             | É a rede de segurança do projeto.           |

---

## 6. Convenções

- Textos de interface em **português do Brasil**; variáveis, funções e arquivos em **inglês**.
- Site de uma página: o menu usa âncoras (#sobre, #atendimento, #como-funciona, #planos, #dicas, #duvidas, #agendar). A marca visual é a capa de revista no topo: retrato em altura total (fixo no desktop) ao lado da apresentação e das especialidades.
- Commits pequenos, em português, dizendo o que mudou e por quê.

---

## 7. Receitas rápidas

- **Trocar preços ou planos:** `PLANS` em `src/content/site.ts`. Use `featured: true` no plano em destaque.
- **Trocar nome, CRN, contatos:** `SITE` em `src/content/site.ts`.
- **Mudar a regra da calculadora de água:** `src/lib/water.ts` (e o teste em `src/test/water.test.ts`).
- **Adicionar ou editar dicas e receitas:** `POSTS` em `src/content/site.ts` (o primeiro aparece em destaque).
- **Trocar uma foto:** salve o arquivo novo em `public/` com o mesmo nome (veja `public/images/LEIA-ME.md`).
- **Mudar cores:** variáveis do `:root` em `src/styles/base.css`.
