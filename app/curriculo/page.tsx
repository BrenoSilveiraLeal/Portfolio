import type { Metadata } from 'next';
import { resume as r } from '@/data/resume';
import { ResumeActions } from '@/components/ResumeActions';

export const metadata: Metadata = {
  title: 'Currículo — Breno Silveira Leal',
  description: 'Currículo de Breno Silveira Leal: Desenvolvedor Full Stack | IA & Automação. Graduado em Ciência da Computação. Visualize online ou baixe em PDF.',
};

// Coluna única e seções com nomes padrão para leitura correta por sistemas ATS.
export default function CurriculoPage() {
  return <main className="cv-page">
    <ResumeActions />

    <article className="cv-paper" aria-label="Currículo de Breno Silveira Leal">
      <header className="cv-head">
        <h1>{r.name}</h1>
        <p className="cv-role">{r.role}</p>
        <p className="cv-contact">
          {r.contact.map((c, i) => <span key={c}>{i > 0 && ' | '}{c}</span>)}
          <br />
          {r.links.map((l, i) => <span key={l.label}>{i > 0 && ' | '}{l.label}: <a href={l.href}>{l.value}</a></span>)}
        </p>
      </header>

      <section>
        <h2>Resumo profissional</h2>
        <p>{r.summary}</p>
      </section>

      <section>
        <h2>Competências técnicas</h2>
        <ul className="cv-skills">{r.skills.map((s) => <li key={s.group}><strong>{s.group}:</strong> {s.items}</li>)}</ul>
      </section>

      <section>
        <h2>Experiência profissional</h2>
        {r.experience.map((e) => <div className="cv-item" key={e.role}>
          <div className="cv-row"><h3>{e.role} – {e.org}</h3><span>{e.period}</span></div>
          <p className="cv-meta">{e.place}</p>
          <ul className="cv-list">{e.bullets.map((b) => <li key={b}>{b}</li>)}</ul>
        </div>)}
      </section>

      <section>
        <h2>Projetos</h2>
        {r.projects.map((p) => <div className="cv-item" key={p.name}>
          <div className="cv-row"><h3>{p.name}</h3><a href={p.href}>{p.url}</a></div>
          <p className="cv-meta">Tecnologias: {p.stack}</p>
          <ul className="cv-list">{p.bullets.map((b) => <li key={b}>{b}</li>)}</ul>
        </div>)}
        <p className="cv-more">{r.moreProjects.text} <a href={r.moreProjects.href}>{r.moreProjects.url}</a>.</p>
      </section>

      <section>
        <h2>Hackathons</h2>
        <ul className="cv-list">{r.hackathons.map((h) => <li key={h.name}><strong>{h.name} ({h.period})</strong> – {h.text}</li>)}</ul>
      </section>

      <section>
        <h2>Formação acadêmica</h2>
        {r.education.map((e) => <div className="cv-row cv-edu" key={e.title}><h3>{e.title} – {e.org}</h3><span>{e.period}</span></div>)}
      </section>

      <section>
        <h2>Cursos e certificações</h2>
        <ul className="cv-list">{r.courses.map((c) => <li key={c}>{c}</li>)}</ul>
      </section>

      <section>
        <h2>Atividades complementares</h2>
        <ul className="cv-list">{r.activities.map((a) => <li key={a}>{a}</li>)}</ul>
      </section>

      <section>
        <h2>Idiomas</h2>
        <p>{r.languages}</p>
      </section>
    </article>
  </main>;
}
