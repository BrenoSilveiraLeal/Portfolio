import type { Metadata } from 'next';
import { resumeEn, resumeEnLabels } from '@/data/resume.en';
import { ResumeDocument } from '@/components/ResumeDocument';

export const metadata: Metadata = {
  title: 'Resume — Breno Silveira Leal',
  description: 'Resume of Breno Silveira Leal: Full Stack Developer | AI & Automation. B.Sc. in Computer Science. View online or download as PDF.',
  alternates: { languages: { 'pt-BR': '/curriculo' } },
};

export default function ResumePage() {
  return <ResumeDocument r={resumeEn} t={resumeEnLabels} />;
}
