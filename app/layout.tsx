import type { Metadata, Viewport } from 'next';
import './site.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://brenosilveira.vercel.app'),
  title: 'Breno Silveira — Full Stack Developer & Creative Technologist',
  description: 'Portfólio de Breno Silveira: sites, aplicações, IA e automação — do rascunho ao produto no ar.',
  icons: {
    icon: '/favicon.jfif',
    apple: '/favicon.jfif',
  },
  openGraph: {
    title: 'Breno Silveira — Portfólio',
    description: 'Sites, aplicações, IA e automação — do rascunho ao produto no ar.',
    images: ['/images/hero-breno.png'],
    locale: 'pt_BR',
    type: 'website',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0b0b0c',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR" suppressHydrationWarning>
    <head>
      {/* Tela de referência: o site é desenhado para 1360px de largura. Em telas de
          computador (mais largas que 1100px e deitadas) a página inteira recebe um zoom
          proporcional, então fica idêntica em qualquer monitor. Celular e tablet em pé
          continuam com o layout responsivo. Ver html.fit em app/site.css. */}
      <script dangerouslySetInnerHTML={{ __html: "(function(){var B=1360,d=document.documentElement;function f(){var w=window.innerWidth,h=window.innerHeight,on=w>1100&&w>h;d.classList.toggle('fit',on);if(on){var z=w/B;d.style.setProperty('--fit-zoom',String(z));d.style.setProperty('--fit-vw',B/100+'px');d.style.setProperty('--fit-vh',h/z/100+'px')}}f();window.addEventListener('resize',f)})()" }} />
      {/* Pula a tela de carregamento se o visitante já viu nesta sessão. */}
      <script dangerouslySetInnerHTML={{ __html: "try{history.scrollRestoration='manual'}catch(e){}window.addEventListener('pageshow',()=>window.scrollTo(0,0),{once:true});try{if(sessionStorage.getItem('bs-loaded'))document.documentElement.classList.add('skip-loader','is-loaded')}catch(e){}" }} />
      <noscript><style>{'.loader{display:none!important}.hero *{animation-play-state:running!important}'}</style></noscript>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Anton&family=Caveat:wght@500;700&family=Archivo:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap" />
    </head>
    <body>{children}</body>
  </html>;
}
