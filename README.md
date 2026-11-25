# Portfólio — Breno Silveira

Portfólio pessoal com projetos de desenvolvimento web, inteligência artificial e automação. O site apresenta os projetos em destaque, com filtro por área e busca, uma página para cada projeto e um currículo que pode ser baixado em PDF.

**Site no ar:** [brenosilveira.vercel.app](https://brenosilveira.vercel.app)

## Tecnologias

- Next.js 16 e React 19
- TypeScript
- CSS puro (um único arquivo de estilos, sem framework de UI)
- Vinext e Vite para desenvolvimento e build
- View Transitions API para as transições entre páginas
- Playwright (Python) para gerar o PDF do currículo

## Pré-requisitos

- Node.js 22.13 ou superior
- npm

## Executar localmente

```bash
npm install
npm run dev
```

Abra o endereço local exibido no terminal. Para gerar e iniciar a versão de produção:

```bash
npm run build
npm run start
```

Para verificar o código:

```bash
npm run lint
```

## Estrutura principal

```text
app/          Rotas, layout e estilos globais (app/site.css)
  work/[slug]   Página de cada projeto
  curriculo/    Currículo em duas folhas A4
components/   Componentes da interface
data/         Conteúdo dos projetos, do site e do currículo
public/       Imagens, vídeos, PDF do currículo e outros arquivos públicos
scripts/      Script que gera o PDF do currículo
```

## Mesmo visual em qualquer tela

O site foi desenhado numa tela de **1360 px de largura**. Em telas de computador (mais largas que 1100 px e na horizontal), a página inteira é desenhada sempre nessa largura e ampliada ou reduzida proporcionalmente para caber na janela. Assim, a composição, os tamanhos de texto e as quebras de linha ficam iguais num notebook, num monitor Full HD ou numa TV 4K.

Em celulares e tablets na vertical o zoom fica desligado e vale o layout responsivo normal.

Como funciona:

- Um script curto no `<head>` (`app/layout.tsx`) calcula o zoom (`largura da janela ÷ 1360`) e liga a classe `fit` no `<html>`. O cálculo é refeito quando a janela muda de tamanho.
- Em `app/site.css`, `html.fit` aplica o `zoom`. As medidas que dependem da janela usam as variáveis `--vw` e `--vh` no lugar de `vw`/`vh`, para não serem escaladas duas vezes. Ao criar um estilo novo, use `calc(N * var(--vw))` em vez de `Nvw`.
- Para mudar a tela de referência, altere `B=1360` no script do `app/layout.tsx`.
- Na impressão (PDF do currículo) o zoom é desligado.

## Projetos e transições

Os dados dos projetos ficam em `data/projects.ts`, e os cartões são montados pelos componentes em `components/`. As páginas de projeto usam a rota `/work/[slug]`.

Ao clicar num projeto, a imagem do cartão se transforma na capa da página do projeto, enquanto o resto da tela sai e a nova entra. O efeito usa a View Transitions API, controlada por `components/TransitionLink.tsx`. Use esse componente no lugar de `next/link` para links internos. Em navegadores sem suporte, a tela atual some com um fade e a próxima abre normalmente. Quem ativa "reduzir movimento" no sistema vê a troca sem animação.

Alguns cartões exibem vídeos de prévia: a imagem de capa é o primeiro frame do vídeo; ao passar o mouse, o vídeo começa sem mostrar um frame vazio, toca em loop enquanto o cursor permanece sobre o cartão e volta à capa quando o cursor sai. As capas e os vídeos ficam em `public/images/projects/` e `public/videos/`.

## Currículo

O currículo fica em `data/resume.ts` e aparece em `/curriculo` (com botões de baixar PDF e compartilhar link). Os botões "Currículo" do site apontam para essa página.

O currículo é dividido em duas folhas A4 (listas `PAGE_1` e `PAGE_2` em `app/curriculo/page.tsx`); se adicionar conteúdo e uma folha transbordar, mova uma seção para a outra lista.

O PDF (`public/curriculo-breno-silveira.pdf`) é gerado a partir da própria página. Depois de editar o currículo, com o site rodando (`npm run dev`), gere de novo:

```bash
pip install playwright && playwright install chromium
python scripts/gerar_curriculo_pdf.py http://localhost:5173
```

Use o endereço que o `npm run dev` mostrar no terminal, se for outra porta.
