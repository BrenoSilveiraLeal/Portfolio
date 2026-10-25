import type { Project } from '@/data/projects';
import Image from 'next/image';

export function ProjectVisual({ project }: { project: Project }) {
  return <div className={`project-visual project-visual-${project.visual}`}>
    {project.cover ? <Image src={project.cover} alt={`Screenshot do projeto ${project.name}`} fill sizes="(max-width: 800px) 92vw, 80vw" /> : <div className="project-asset-needed"><span>Screenshot real do projeto</span><strong>{project.name}</strong><small>Asset local aguardando upload</small></div>}
    <div className="preview-overlay"><span>{project.category}</span><span>View case ↗</span></div>
  </div>;
}
