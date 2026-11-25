import type { Metadata } from 'next';
import { resume, resumeLabels } from '@/data/resume';
import { ResumeDocument } from '@/components/ResumeDocument';

export const metadata: Metadata = {
  title: 'Currículo — Breno Silveira Leal',
  description: 'Currículo de Breno Silveira Leal: Desenvolvedor Full Stack | IA & Automação. Graduado em Ciência da Computação. Visualize online ou baixe em PDF.',
  alternates: { languages: { en: '/resume' } },
};

export default function CurriculoPage() {
  return <ResumeDocument r={resume} t={resumeLabels} />;
}
