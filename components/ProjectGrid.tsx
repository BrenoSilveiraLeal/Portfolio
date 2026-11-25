'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import { featuredProjects, projects, type Project } from '@/data/projects';
import { groupBySlug, projectGroups, type ProjectGroup } from '@/data/site';
import { ProjectVisual } from './ProjectVisual';

type Filter = 'destaques' | 'todos' | ProjectGroup;

const normalize = (s: string) => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();

function ProjectCard({ project }: { project: Project }) {
  return <article className="card">
    <Link href={`/work/${project.slug}`} className="card-media" aria-label={`Ver detalhes do projeto ${project.name}`}>
      <ProjectVisual project={project} />
    </Link>
    <div className="card-body">
      <span className="card-number" aria-hidden="true">{project.id}</span>
      <div className="card-text">
        <h3><Link href={`/work/${project.slug}`}>{project.name}</Link></h3>
        <p className="label">{project.category}</p>
      </div>
    </div>
    <p className="card-desc">{project.description}</p>
    <div className="card-links">
      <Link href={`/work/${project.slug}`}>Conhecer o projeto <span aria-hidden="true">→</span></Link>
      {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noreferrer">{project.liveUrl.includes('github.com') ? 'Ver no GitHub' : 'Abrir site'} <span aria-hidden="true">↗</span></a>}
    </div>
  </article>;
}

export function ProjectGrid() {
  const [filter, setFilter] = useState<Filter>('destaques');
  const [query, setQuery] = useState('');

  const list = useMemo(() => {
    const q = normalize(query.trim());
    const base = q ? projects
      : filter === 'destaques' ? featuredProjects
      : filter === 'todos' ? projects
      : projects.filter((p) => groupBySlug[p.slug] === filter);
    if (!q) return base;
    return base.filter((p) => normalize(`${p.name} ${p.category} ${p.description} ${p.stack.join(' ')}`).includes(q));
  }, [filter, query]);

  const tabs: { id: Filter; label: string; count: number }[] = [
    { id: 'destaques', label: 'Destaques', count: featuredProjects.length },
    { id: 'todos', label: 'Todos', count: projects.length },
    ...projectGroups.map((g) => ({ id: g.id as Filter, label: g.label, count: projects.filter((p) => groupBySlug[p.slug] === g.id).length })),
  ];

  const choose = (id: Filter) => { setFilter(id); setQuery(''); };

  return <>
    <div className="toolbar">
      <div className="tabs" role="tablist" aria-label="Filtrar projetos">
        {tabs.map((t) => <button key={t.id} type="button" role="tab" aria-selected={!query && filter === t.id} className={!query && filter === t.id ? 'is-active' : ''} onClick={() => choose(t.id)}>
          {t.label}<sup>{t.count}</sup>
        </button>)}
      </div>
      <label className="search">
        <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" /></svg>
        <span className="sr-only">Buscar projeto</span>
        <input type="search" placeholder="Buscar nome ou área" value={query} onChange={(e) => setQuery(e.target.value)} />
      </label>
    </div>

    {list.length ? <div className="grid" aria-live="polite">{list.map((p) => <ProjectCard key={p.slug} project={p} />)}</div>
      : <p className="empty">Nenhum projeto encontrado para “{query}”. <button type="button" onClick={() => setQuery('')}>Limpar busca</button></p>}

    {!query && filter === 'destaques' && <div className="more">
      <button type="button" className="btn btn-ghost" onClick={() => choose('todos')}>Ver todos os {projects.length} projetos <span aria-hidden="true">→</span></button>
    </div>}
  </>;
}
