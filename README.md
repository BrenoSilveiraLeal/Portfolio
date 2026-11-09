# Portfólio — Breno Silveira

Portfólio pessoal com projetos de desenvolvimento web, inteligência artificial e experiências digitais. O site apresenta os projetos em destaque, suas áreas e tecnologias, além de páginas individuais com mais informações.

## Tecnologias

- Next.js 16 e React 19
- TypeScript
- CSS
- Vinext e Vite para desenvolvimento e build

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

## Projetos e prévias

Os dados dos projetos ficam em `data/projects.ts`, e os cartões são montados pelos componentes em `components/`. As páginas de projeto usam a rota `/work/[slug]`.

Alguns cartões exibem vídeos de prévia: a imagem de capa é o primeiro frame do vídeo; ao passar o mouse, o vídeo começa sem mostrar um frame vazio, toca em loop enquanto o cursor permanece sobre o cartão e volta à capa quando o cursor sai. As capas e os vídeos ficam em `public/images/projects/` e `public/videos/`.

## Estrutura principal

```text
app/          Rotas, layout e estilos globais
components/   Componentes da interface
data/         Conteúdo dos projetos
public/       Imagens, vídeos e outros arquivos públicos
```
