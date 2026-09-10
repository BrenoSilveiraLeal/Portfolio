import type { Project } from '@/data/projects';
import { ProjectVisual } from './ProjectVisual';

export function ProjectFeature({ project }: { project: Project }) {
  return <article data-motion="project" className={`project-feature project-feature-${project.visual}`}>
    {project.liveUrl ? <a href={project.liveUrl} target="_blank" rel="noreferrer" className="project-art-link" aria-label={`Abrir site do projeto ${project.name}`}><ProjectVisual project={project} /></a> : <div className="project-art-link"><ProjectVisual project={project} /></div>}
    <div className="project-heading"><div><p className="project-category">{project.category}</p><h3>{project.name}</h3>{project.status && <span className="project-status">{project.status}</span>}</div>{project.liveUrl ? <a className="project-arrow" href={project.liveUrl} target="_blank" rel="noreferrer" aria-label={`Abrir site do projeto ${project.name}`}>↗</a> : <span className="project-arrow project-arrow-disabled">—</span>}</div>
    <p className="project-description">{project.description}</p>
    <div className="project-meta">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
  </article>;
}
