import type { Project } from '@/data/projects';
import Image from 'next/image';

export function ProjectVisual({ project }: { project: Project }) {
  return <div className={`project-visual project-visual-${project.visual}`}>
    {project.cover ? <Image src={project.cover} alt={`Captura de tela do projeto ${project.name}`} fill sizes="(max-width: 800px) 92vw, 80vw" /> : <div className="project-asset-needed"><span>Captura do projeto</span><strong>{project.name}</strong><small>Imagem em preparação</small></div>}
    <div className="preview-overlay"><span>{project.category}</span><span>Ver projeto ↗</span></div>
  </div>;
}
