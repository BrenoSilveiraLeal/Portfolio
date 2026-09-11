import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getProject, projects } from '@/data/projects';
import { ProjectVisual } from '@/components/ProjectVisual';

export function generateStaticParams() { return projects.map(({ slug }) => ({ slug })); }

export default async function CasePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const project = getProject(slug); if (!project) notFound();
  const nextProject = projects.find((item) => item.slug !== project.slug)!;
  return <main className={`case-page case-page-${project.visual}`}><header className="case-header"><Link href="/" className="wordmark">BS</Link><Link href="/">← All work</Link></header><section className="case-hero"><p className="section-label">{project.id} / {project.category}</p><h1>{project.name}</h1><p className="case-intro">{project.detail}</p><div className="case-actions"><a className="solid-link" href={project.liveUrl} target="_blank" rel="noreferrer">Visitar projeto ao vivo ↗</a><span>{project.role}</span></div></section><section className="case-art"><ProjectVisual project={project} /></section><section className="case-story"><div><p className="section-label">Overview</p><p>{project.description}</p></div><div><p className="section-label">My role</p><p>{project.role}. O trabalho equilibra contexto, interface e implementação para transformar uma ideia em uma experiência navegável.</p></div><div><p className="section-label">Stack</p><p>{project.stack.join(' · ')}</p></div></section><section className="case-note"><span>01</span><p>Este case apresenta a experiência e as decisões visíveis do projeto. Detalhes proprietários e lógica sensível permanecem fora da publicação.</p></section><footer className="case-footer"><Link href="/">← Back to index</Link><Link href={`/work/${nextProject.slug}`}>Next case ↗</Link></footer></main>;
}
