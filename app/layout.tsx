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
      {/* Pula a tela de carregamento se o visitante já viu nesta sessão. */}
      <script dangerouslySetInnerHTML={{ __html: "try{if(sessionStorage.getItem('bs-loaded'))document.documentElement.classList.add('skip-loader','is-loaded')}catch(e){}" }} />
      <noscript><style>{'.loader{display:none!important}.hero *{animation-play-state:running!important}'}</style></noscript>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Anton&family=Caveat:wght@500;700&family=Archivo:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap" />
    </head>
    <body>{children}</body>
  </html>;
}
