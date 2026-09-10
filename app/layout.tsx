import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Breno Silveira — Desenvolvedor & Creative Technologist',
  description: 'Portfólio de Breno Silveira: tecnologia, IA, educação e experiências digitais.',
  metadataBase: new URL('https://insidely.vercel.app'),
  openGraph: { title: 'Breno Silveira — Desenvolvedor & Creative Technologist', description: 'Tecnologia, IA, educação e experiências digitais.', type: 'website' },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}
