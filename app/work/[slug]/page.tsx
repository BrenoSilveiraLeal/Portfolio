import { notFound } from 'next/navigation';
import { getProject, projects } from '@/data/projects';
import { ProjectVisual } from '@/components/ProjectVisual';
import { TransitionLink } from '@/components/TransitionLink';

export function generateStaticParams() { return projects.map(({ slug }) => ({ slug })); }

export default async function CasePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  const projectIndex = projects.findIndex((item) => item.slug === project.slug);
  const nextProject = projects[(projectIndex + 1) % projects.length];
  const isRepo = project.liveUrl?.includes('github.com');

  return <main className="site case">
    <header className="nav is-scrolled">
      <TransitionLink className="nav-logo nav-brand" href="/" aria-label="Breno Silveira, início">
        <span className="nav-brand-content" aria-hidden="true">
          <span className="nav-brand-word"><span className="nav-brand-b">B</span><span className="nav-brand-rest">reno</span></span>
          <span className="nav-brand-word nav-brand-s"><span>S</span><span className="nav-brand-rest">ilveira</span></span>
        </span>
      </TransitionLink>
      <TransitionLink className="nav-cta" href="/#work">← Todos os projetos</TransitionLink>
    </header>

    <section className="case-hero">
      <p className="label"><b>{project.id}</b> / {project.category}</p>
      <h1 className="display">{project.name}<i>.</i></h1>
      <div className="case-intro">
        <p>{project.detail}</p>
        {project.liveUrl && <a className="btn btn-solid" href={project.liveUrl} target="_blank" rel="noreferrer">{isRepo ? 'Ver no GitHub' : 'Visitar projeto ao vivo'} <span aria-hidden="true">↗</span></a>}
      </div>
    </section>

    <section className="case-art"><ProjectVisual project={project} /></section>

    <section className="case-story">
      <div><h2 className="col-title">Sobre o projeto</h2><p>{project.description}</p></div>
      <div><h2 className="col-title">Minha atuação</h2><p>{project.role}.</p></div>
      <div><h2 className="col-title">Tecnologias e áreas</h2><ul className="chips">{project.stack.map((s) => <li key={s}>{s}</li>)}</ul></div>
    </section>

    <TransitionLink className="case-next" href={`/work/${nextProject.slug}`}>
      <span className="label">Próximo projeto · {nextProject.id}</span>
      <span className="display">{nextProject.name} <i>→</i></span>
    </TransitionLink>

    <footer className="footer">
      <TransitionLink className="footer-logo" href="/">Breno Silveira<i>.</i></TransitionLink>
      <p className="label">© 2026 Breno Silveira</p>
      <nav className="footer-links" aria-label="Navegação"><TransitionLink href="/#work">Projetos</TransitionLink><TransitionLink href="/#contact">Contato</TransitionLink></nav>
    </footer>
  </main>;
}
