import type { ReactNode } from 'react';
import type { Resume, ResumeLabels } from '@/data/resume';
import { ResumeActions } from './ResumeActions';

// Coluna única e seções com nomes padrão para leitura correta por sistemas ATS.
// O currículo é dividido em duas folhas A4: o que aparece no site é exatamente o que sai no PDF.
// Para mudar onde a página quebra, mova seções entre PAGE_1 e PAGE_2.
const PAGE_1 = ['resumo', 'formacao', 'competencias', 'experiencia', 'hackathons'];
const PAGE_2 = ['projetos', 'cursos', 'atividades', 'comportamentais', 'idiomas'];

export function ResumeDocument({ r, t }: { r: Resume; t: ResumeLabels }) {
  const sections: Record<string, ReactNode> = {
    resumo: <section key="resumo">
      <h2>{t.summary}</h2>
      <p>{r.summary}</p>
    </section>,

    competencias: <section key="competencias">
      <h2>{t.skills}</h2>
      <ul className="cv-skills">{r.skills.map((s) => <li key={s.group}><strong>{s.group}:</strong> {s.items}</li>)}</ul>
    </section>,

    experiencia: <section key="experiencia">
      <h2>{t.experience}</h2>
      {r.experience.map((e) => <div className="cv-item" key={e.role}>
        <div className="cv-row"><h3>{e.role} – {e.org}</h3><span>{e.period}</span></div>
        <p className="cv-meta">{e.place}</p>
        <ul className="cv-list">{e.bullets.map((b) => <li key={b}>{b}</li>)}</ul>
      </div>)}
    </section>,

    projetos: <section key="projetos">
      <h2>{t.projects}</h2>
      {r.projects.map((p) => <div className="cv-item" key={p.name}>
        <div className="cv-row"><h3>{p.name}</h3><a href={p.href}>{p.url}</a></div>
        <p className="cv-meta">{t.tech}: {p.stack}</p>
        <ul className="cv-list">{p.bullets.map((b) => <li key={b}>{b}</li>)}</ul>
      </div>)}
      <p className="cv-more">{r.moreProjects.text} <a href={r.moreProjects.href}>{r.moreProjects.url}</a>.</p>
    </section>,

    hackathons: <section key="hackathons">
      <h2>{t.hackathons}</h2>
      <ul className="cv-list">{r.hackathons.map((h) => <li key={h.name}><strong>{h.name} ({h.period})</strong> – {h.text}</li>)}</ul>
    </section>,

    formacao: <section key="formacao">
      <h2>{t.education}</h2>
      {r.education.map((e) => <div className="cv-row cv-edu" key={e.title}><h3>{e.title} – {e.org}</h3><span>{e.period}</span></div>)}
    </section>,

    cursos: <section key="cursos">
      <h2>{t.courses}</h2>
      <ul className="cv-list">{r.courses.map((c) => <li key={c}>{c}</li>)}</ul>
    </section>,

    atividades: <section key="atividades">
      <h2>{t.activities}</h2>
      <ul className="cv-list">{r.activities.map((a) => <li key={a}>{a}</li>)}</ul>
    </section>,

    comportamentais: <section key="comportamentais">
      <h2>{t.softSkills}</h2>
      <p>{r.softSkills}</p>
    </section>,

    idiomas: <section key="idiomas">
      <h2>{t.languages}</h2>
      <p>{r.languages}</p>
    </section>,
  };

  return <main className="cv-page" lang={t.lang}>
    <ResumeActions t={t} />

    <article className="cv-doc" aria-label={t.docLabel}>
      <div className="cv-paper cv-sheet">
        <header className="cv-head">
          <h1>{r.name}</h1>
          <p className="cv-role">{r.role}</p>
          <p className="cv-contact">
            {r.contact.map((c, i) => <span key={c}>{i > 0 && ' | '}{c}</span>)}
            <br />
            {r.links.map((l, i) => <span key={l.label}>{i > 0 && ' | '}{l.label}: <a href={l.href}>{l.value}</a></span>)}
          </p>
        </header>
        {PAGE_1.map((k) => sections[k])}
        <span className="cv-folio" aria-hidden="true">1 / 2</span>
      </div>

      <div className="cv-paper cv-sheet">
        {PAGE_2.map((k) => sections[k])}
        <span className="cv-folio" aria-hidden="true">2 / 2</span>
      </div>
    </article>
  </main>;
}
