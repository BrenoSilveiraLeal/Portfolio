const technologyGroups = [
  { label: 'Frontend', items: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React', 'Next.js'] },
  { label: 'Backend & dados', items: ['Python', 'Node.js', 'PostgreSQL', 'Supabase'] },
  { label: 'Ferramentas', items: ['Git', 'GitHub', 'Vercel', 'AI / LLMs'] },
];

export function TechMarquee() {
  return <section id="skills" className="tech-stack" aria-label="Habilidades e tecnologias"><div className="tech-stack-heading" data-motion="section"><p><span className="tech-heading-accent">Habilidades</span> <span className="tech-heading-rest">&amp; Tecnologias</span></p></div><div className="tech-stack-grid" data-motion="stack">{technologyGroups.map((group) => <div className="tech-stack-group" key={group.label}><h3>{group.label}</h3><div className="tech-stack-items">{group.items.map((technology) => <span key={technology}>{technology}</span>)}</div></div>)}</div></section>;
}
