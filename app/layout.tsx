import type { Metadata, Viewport } from 'next';
import './globals.css';
import './curtain-hero.css';
import './redesign.css';

export const metadata: Metadata = {
  title: 'Breno Silveira - Full Stack Developer & Creative Technologist',
  description: 'Portfólio de Breno Silveira: tecnologia, IA, automação e experiências digitais.',
  icons: {
    icon: '/favicon.jfif',
    apple: '/favicon.jfif',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0b0d0f',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR">
    <head>
      <script dangerouslySetInnerHTML={{ __html: `
        (() => {
          const navigation = performance.getEntriesByType('navigation')[0];
          if (navigation?.type === 'reload') {
            history.scrollRestoration = 'manual';
            const goToTop = () => window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
            goToTop();
            window.addEventListener('pageshow', () => {
              goToTop();
              history.scrollRestoration = 'auto';
            }, { once: true });
          }
        })();
      ` }} />
    </head>
    <body>{children}</body>
  </html>;
}
