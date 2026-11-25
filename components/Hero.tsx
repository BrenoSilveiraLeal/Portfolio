import { DragCursor } from './DragCursor';
import { projects } from '@/data/projects';
import { contact, projectGroups, tools } from '@/data/site';

const stats = [
  { value: String(projects.length), label: <>Projetos<br />publicados</> },
  { value: String(projectGroups.length), label: <>Frentes de<br />trabalho</> },
  { value: String(tools.length), label: <>Tecnologias<br />na stack</> },
];

export function Hero() {
  return <section className="hero" id="top" aria-labelledby="hero-title">
    <div className="hero-stage">
    <div className="hero-rule" aria-hidden="true" />

    <div className="hero-portrait">
      <div className="hero-word" aria-hidden="true">Portfólio<DragCursor label="Breno" className="drag-cursor-hero" /></div>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/images/hero-breno.png?v=8" alt="Breno Silveira" fetchPriority="high" />
    </div>

    <div className="hero-left">
      <p className="label hero-kicker">Full Stack<br />IA · Automação</p>
      <p className="hero-hello">Olá, eu sou</p>
      <h1 id="hero-title" className="hero-name">Breno<br />Silveira<i>.</i></h1>
      <p className="hero-role">Full Stack Developer<br />&amp; Creative Technologist</p>
      <p className="hero-copy">Desenvolvo sites, aplicações e automações de ponta a ponta — do primeiro rascunho ao produto no ar, com IA onde ela resolve de verdade.</p>
      <div className="hero-actions">
        <a className="btn btn-solid" href="#work">Ver projetos <span aria-hidden="true">↓</span></a>
        <a className="btn btn-ghost" href={contact.resume} target="_blank" rel="noreferrer">Currículo <span aria-hidden="true">↗</span></a>
      </div>
      <p className="label hero-place"><i aria-hidden="true" />Remoto · Brasil</p>
    </div>

    <div className="hero-right">
      <p className="status"><i aria-hidden="true" />Disponível para projetos</p>
      <p className="hero-quote"><span aria-hidden="true">✳</span>Uma ideia por vez.<br />Do rascunho ao ar.</p>
      <dl className="hero-stats">
        {stats.map((s) => <div key={s.value + String(s.label)}><dt className="label">{s.label}</dt><dd>{s.value}</dd></div>)}
      </dl>
    </div>
    </div>

    <div className="hero-bar">
      <a className="label" href="#work"><span className="hero-scroll" aria-hidden="true" />Role para ver os projetos</a>
      <span className="label">Projetos selecionados · 2026</span>
    </div>
  </section>;
}
