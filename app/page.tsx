import Link from 'next/link';
import { SiteNav } from '@/components/SiteNav';
import { Hero } from '@/components/Hero';
import { ProjectGrid } from '@/components/ProjectGrid';
import { DraftToLive } from '@/components/DraftToLive';
import { MotionLayer } from '@/components/MotionLayer';
import { Loader } from '@/components/Loader';
import { DragCursor } from '@/components/DragCursor';
import { contact, tools } from '@/data/site';

const formation = [
  { title: 'Ciência da Computação', meta: 'Graduado', text: 'Graduado em Ciência da Computação, com base em algoritmos, sistemas e engenharia de software.' },
  { title: 'Educação tecnológica', meta: 'Atuação', text: 'Programação, robótica e inclusão digital no dia a dia.' },
  { title: 'IA aplicada', meta: 'Foco', text: 'IA como ferramenta de criação, pesquisa, prototipação e desenvolvimento.' },
];

const services = ['Sites & landing pages', 'Aplicações web', 'IA & automação', 'Integrações & APIs', 'Dashboards'];

const process = [
  { title: 'Diagnóstico', text: 'Entender o problema, quem vai usar e o que precisa funcionar no primeiro dia.' },
  { title: 'Desenho', text: 'Estrutura, conteúdo e interface definidos antes da primeira linha de código.' },
  { title: 'Construção', text: 'Front-end, back-end, dados e IA onde ela faz diferença de verdade.' },
  { title: 'No ar', text: 'Publicar, acompanhar o uso real e iterar a partir do que aparecer.' },
];

const Icon = ({ d }: { d: string }) => <svg viewBox="0 0 24 24" aria-hidden="true"><path d={d} /></svg>;

const channels = [
  { label: 'E-mail', value: contact.email, href: contact.emailHref, icon: 'M3 6h18v12H3zM3 7l9 6 9-6' },
  { label: 'WhatsApp', value: 'Mandar uma mensagem', href: contact.whatsapp, icon: 'M4 20l1.3-4A8 8 0 1 1 8 18.7zM9 9.5c.5 2.5 2.5 4.5 5 5' },
  { label: 'LinkedIn', value: 'in/breno-silveira-leal', href: contact.linkedin, icon: 'M4 4h16v16H4zM8 10v6M8 7.5v.01M12 16v-6M12 13a2 2 0 0 1 4 0v3' },
  { label: 'GitHub', value: 'BrenoSilveiraLeal', href: contact.github, icon: 'M9 19c-4 1.3-4-2-6-2.5M15 21v-3.5a3 3 0 0 0-.8-2.3c2.7-.3 5.5-1.3 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.3 4.3 0 0 0-.1-3.2s-1-.3-3.4 1.3a11.6 11.6 0 0 0-6 0C6.5 2.5 5.4 2.8 5.4 2.8a4.3 4.3 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.2c0 4.6 2.8 5.6 5.5 6a3 3 0 0 0-.8 2.3V21' },
  { label: 'Currículo', value: 'Ver online ou baixar PDF', href: contact.resume, icon: 'M6 3h9l4 4v14H6zM14 3v5h5M9 13h7M9 17h5' },
  { label: 'Instagram', value: '@bsl_silveira', href: contact.instagram, icon: 'M4 4h16v16H4zM12 8.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zM17 7v.01' },
];

export default function Home() {
  return <main className="site">
    <Loader />
    <MotionLayer />
    <SiteNav />
    <Hero />

    <section id="work" className="section" aria-labelledby="work-title">
      <div className="section-head" data-motion="pull">
        <div className="pull-anchor">
          <DragCursor label="Breno" />
          <p className="label"><b>01</b> / Projetos selecionados</p>
          <h2 id="work-title" className="display">Trabalho que<br />vai pro ar<i>.</i></h2>
        </div>
        <p className="section-intro">Produtos, lojas, sites e sistemas publicados. Passe o mouse para ver cada um em movimento — ou abra o projeto ao vivo.</p>
      </div>
      <div data-motion="up"><ProjectGrid /></div>

      <div className="tools" data-motion="up">
        <p className="label">Feito com<br /><b>as ferramentas de sempre.</b></p>
        <div className="tools-track" aria-label="Tecnologias">
          <div className="tools-row">{[...tools, ...tools].map((t, i) => <span key={t + i} aria-hidden={i >= tools.length}>{t}</span>)}</div>
        </div>
      </div>
    </section>

    <section id="process" className="section draft" aria-labelledby="draft-title">
      <div className="draft-copy pull-anchor" data-motion="pull">
        <DragCursor label="Design" tone="light" />
        <p className="label">Por baixo do capô</p>
        <h2 id="draft-title" className="display">Do rascunho<br /><em>ao ar.</em></h2>
        <p>Todo projeto começa como caixas cinzas e anotações. Arraste o controle para ver o rascunho da Insidely virar a página que está publicada hoje.</p>
        <p className="label">Insidely · Plataforma de carreira · Produto, UX/UI e desenvolvimento</p>
        <Link className="link" href="/work/insidely">Ver o case completo <span aria-hidden="true">↗</span></Link>
      </div>
      <div data-motion="up"><DraftToLive /></div>
    </section>

    <section id="about" className="section" aria-labelledby="about-title">
      <div className="section-head" data-motion="pull">
        <div className="pull-anchor">
          <DragCursor label="IA" tone="light" />
          <p className="label"><b>02</b> / Por trás do código</p>
          <h2 id="about-title" className="display">Mais que código<i>.</i><br /><em>Soluções que funcionam.</em></h2>
        </div>
        <p className="section-intro">Sou <strong>Breno Silveira</strong>, graduado em Ciência da Computação e profissional de tecnologia. Trabalho com desenvolvimento web, educação tecnológica e soluções digitais — e uso IA para transformar ideias e problemas em produtos úteis, funcionais e bem construídos.</p>
      </div>

      <div className="about-grid">
        <div className="about-col" data-motion="up">
          <h3 className="col-title">Formação &amp; foco</h3>
          <ul className="facts">{formation.map((f) => <li key={f.title}><div><strong>{f.title}</strong><span className="label">{f.meta}</span></div><p>{f.text}</p></li>)}</ul>
          <h3 className="col-title col-title-sm">Serviços</h3>
          <ul className="chips">{services.map((s) => <li key={s}>{s}</li>)}</ul>
        </div>

        <div className="about-col" data-motion="up">
          <h3 className="col-title">Do diagnóstico ao ar</h3>
          <ol className="steps">{process.map((p, i) => <li key={p.title}><span className="step-n">{String(i + 1).padStart(2, '0')}</span><div><strong>{p.title}</strong><p>{p.text}</p></div></li>)}</ol>
        </div>

        <figure className="quote-card" data-motion="up">
          <span className="quote-mark" aria-hidden="true">“</span>
          <blockquote>Tecnologia boa é a que resolve um problema real — e continua funcionando depois do lançamento.</blockquote>
          <figcaption><span className="signature">Breno</span><a className="label" href="#contact">Vamos construir o seu? ↗</a></figcaption>
        </figure>
      </div>
    </section>

    <section id="contact" className="section contact" aria-labelledby="contact-title">
      <div className="contact-lead pull-anchor" data-motion="pull">
        <DragCursor label="Você" />
        <p className="label"><b>03</b> / Seu próximo projeto</p>
        <h2 id="contact-title" className="display">Me conta o<br />que você quer<br /><em>construir.</em></h2>
        <p>Uma ideia, um problema no processo ou uma vaga aberta — me manda uma mensagem e a gente vê junto o melhor caminho.</p>
        <a className="btn btn-solid" href={contact.whatsapp} target="_blank" rel="noreferrer">Começar uma conversa <span aria-hidden="true">↗</span></a>
      </div>
      <ul className="channels" data-motion="up">
        {channels.map((c) => <li key={c.label}><a href={c.href} target="_blank" rel="noreferrer">
          <span className="channel-icon"><Icon d={c.icon} /></span>
          <span className="channel-text"><span className="label">{c.label}</span><span>{c.value}</span></span>
          <span className="channel-arrow" aria-hidden="true">↗</span>
        </a></li>)}
        <li className="channel-static"><span className="channel-icon"><Icon d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21zM12 7.5a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" /></span><span className="channel-text"><span className="label">Onde</span><span>Remoto · Brasil</span></span></li>
      </ul>
    </section>

    <footer className="footer">
      <a className="footer-logo" href="#top">Breno Silveira<i>.</i></a>
      <p className="label">© 2026 Breno Silveira · Desenvolvido com Next.js</p>
      <nav className="footer-links" aria-label="Redes">
        <a href={contact.github} target="_blank" rel="noreferrer">GitHub</a>
        <a href={contact.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
        <a href={contact.instagram} target="_blank" rel="noreferrer">Instagram</a>
        <a href="#top" aria-label="Voltar ao topo">Topo ↑</a>
      </nav>
    </footer>
  </main>;
}
