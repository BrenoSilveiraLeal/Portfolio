import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Breno Silveira — Technology, AI & Digital Experiences',
  description: 'Portfólio de Breno Silveira: tecnologia, IA, automação e experiências digitais.',
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="pt-BR"><body>{children}</body></html>; }
