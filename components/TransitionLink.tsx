'use client';

import Link, { type LinkProps } from 'next/link';
import { useRouter } from 'next/navigation';
import { useRef, type AnchorHTMLAttributes, type ReactNode } from 'react';

type Props = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> & {
  href: string;
  children: ReactNode;
} & Pick<LinkProps, 'prefetch' | 'replace' | 'scroll'>;

type ViewTransitionDocument = Document & {
  startViewTransition?: (update: () => Promise<void>) => { finished: Promise<void> };
};

// Assinatura da página atual: o React reaproveita o mesmo <main> entre rotas,
// então comparamos a classe dele e o título <h1> para saber se a tela trocou.
function pageSignature() {
  const main = document.querySelector('main');
  return `${main?.className}|${main?.querySelector('h1')?.textContent}`;
}

// Espera a nova página aparecer no DOM antes de liberar a View Transition tirar
// a "foto" do estado novo. Tem limite de tempo para nunca travar a navegação.
function waitForNewPage(oldSignature: string, path: string) {
  return new Promise<void>((resolve) => {
    const started = performance.now();
    const check = () => {
      const ready = location.pathname === path && pageSignature() !== oldSignature;
      if (ready || performance.now() - started > 1500) {
        // Um instante extra para o React terminar de pintar a página nova.
        window.setTimeout(resolve, ready ? 30 : 0);
        return;
      }
      // setTimeout (e não requestAnimationFrame): durante a View Transition o
      // navegador pausa a renderização, então rAF não roda.
      window.setTimeout(check, 16);
    };
    check();
  });
}

export function TransitionLink({ href, children, ...props }: Props) {
  const router = useRouter();
  const linkRef = useRef<HTMLAnchorElement>(null);

  return <Link
    ref={linkRef}
    href={href}
    {...props}
    onNavigate={(event) => {
      event.preventDefault();
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        router.push(href);
        return;
      }

      const target = new URL(href, location.href);
      const doc = document as ViewTransitionDocument;

      // Navegadores com View Transitions: a imagem do projeto clicado "voa" do
      // card até a capa da página do projeto, e o resto da tela faz um cruzamento.
      if (doc.startViewTransition && target.pathname !== location.pathname) {
        const card = linkRef.current?.closest('.card')?.querySelector<HTMLElement>('.card-media');
        if (card) card.style.viewTransitionName = 'project-media';
        const oldSignature = pageSignature();
        document.documentElement.classList.add('vt-running');
        const transition = doc.startViewTransition(() => {
          router.push(href);
          return waitForNewPage(oldSignature, target.pathname);
        });
        transition.finished.finally(() => {
          if (card) card.style.viewTransitionName = '';
          document.documentElement.classList.remove('vt-running');
        });
        return;
      }

      // Sem suporte: some a tela atual e abre a próxima.
      document.documentElement.classList.add('route-leaving');
      window.setTimeout(() => {
        document.documentElement.classList.remove('route-leaving');
        router.push(href);
      }, 170);
    }}
  >{children}</Link>;
}
