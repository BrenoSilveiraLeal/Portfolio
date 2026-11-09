'use client';

import { useEffect, useRef } from 'react';

const clamp = (v: number, min = 0, max = 1) => Math.min(max, Math.max(min, v));
const smooth = (t: number) => t * t * (3 - 2 * t);
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

const navLinks = [
  { href: '#skills', label: 'Habilidades' },
  { href: '#work', label: 'Projetos' },
  { href: '#about', label: 'Sobre' },
  { href: '#contact', label: 'Contato' },
];

const Arrow = () => <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>;

export function CurtainHero() {
  const trackRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const portalRef = useRef<HTMLDivElement>(null);
  const portalHeadRef = useRef<HTMLDivElement>(null);
  const card1Ref = useRef<HTMLElement>(null);
  const card2Ref = useRef<HTMLElement>(null);
  const charRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const mobileMq = window.matchMedia('(max-width: 720px)');
    const reduceMq = window.matchMedia('(prefers-reduced-motion: reduce)');

    let target = 0;
    let current = 0;
    let frame = 0;

    // Progress is measured against the hero track only, so the rest of the page scrolls normally afterwards.
    const measure = () => {
      const rect = track.getBoundingClientRect();
      const travel = track.offsetHeight - window.innerHeight;
      target = travel > 0 ? clamp(-rect.top / travel) : 0;
    };

    const revealCard = (el: HTMLElement | null, p: number, start: number) => {
      if (!el) return;
      const t = smooth(clamp((p - start) / 0.3));
      el.style.opacity = String(t);
      el.style.transform = `translate3d(0, ${lerp(42, 0, t)}px, 0) scale(${lerp(0.96, 1, t)})`;
      el.style.filter = t >= 1 ? 'none' : `blur(${lerp(16, 0, t)}px)`;
    };

    const render = (p: number) => {
      const mobile = mobileMq.matches;
      const curtain = smooth(clamp(p / 0.55));
      if (leftRef.current) leftRef.current.style.transform = `translate3d(${-110 * curtain}vw, 0, 0)`;
      if (rightRef.current) rightRef.current.style.transform = `translate3d(${110 * curtain}vw, 0, 0)`;
      if (heroRef.current) {
        heroRef.current.style.pointerEvents = curtain > 0.4 ? 'none' : '';
        heroRef.current.style.visibility = curtain > 0.98 ? 'hidden' : '';
      }

      const zoom = smooth(clamp(p / 0.58));
      if (portalRef.current) {
        portalRef.current.style.transform = `scale(${lerp(0.9, 1, zoom)})`;
        portalRef.current.style.opacity = String(Math.min(zoom * 1.4, 1));
        portalRef.current.style.pointerEvents = zoom > 0.6 ? 'auto' : 'none';
      }

      const head = smooth(clamp((p - 0.24) / 0.28));
      if (portalHeadRef.current) {
        portalHeadRef.current.style.opacity = String(head);
        portalHeadRef.current.style.transform = `translate3d(0, ${lerp(36, 0, head)}px, 0)`;
      }
      revealCard(card1Ref.current, p, 0.42);
      revealCard(card2Ref.current, p, 0.5);

      if (charRef.current) {
        const scale = mobile ? 1 - 0.06 * p : 1 - 0.04 * p;
        const y = (mobile ? 8 : 10) * p;
        charRef.current.style.transform = `translate3d(-50%, ${y}px, 0) scale(${scale})`;
      }
      if (glowRef.current) glowRef.current.style.setProperty('--glow-alpha', String(lerp(0.32, 0.5, p)));
    };

    const loop = () => {
      const factor = reduceMq.matches ? 1 : 0.085;
      current += (target - current) * factor;
      if (Math.abs(target - current) < 0.0005) current = target;
      render(current);
      frame = requestAnimationFrame(loop);
    };

    measure();
    current = target;
    render(current);
    frame = requestAnimationFrame(loop);

    window.addEventListener('scroll', measure, { passive: true });
    window.addEventListener('resize', measure);
    window.addEventListener('orientationchange', measure);
    window.visualViewport?.addEventListener('resize', measure);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', measure);
      window.removeEventListener('resize', measure);
      window.removeEventListener('orientationchange', measure);
      window.visualViewport?.removeEventListener('resize', measure);
    };
  }, []);

  const openCurtain = (event: React.MouseEvent<HTMLAnchorElement>) => {
    const track = trackRef.current;
    if (!track) return;
    event.preventDefault();
    const travel = track.offsetHeight - window.innerHeight;
    const top = track.getBoundingClientRect().top + window.scrollY + travel * 0.75;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top, behavior: reduce ? 'auto' : 'smooth' });
  };

  return <div className="curtain-track" ref={trackRef} id="top">
    <div className="curtain-stage">
      {/* Cena 2: portal escuro */}
      <div className="curtain-portal" ref={portalRef}>
        <div className="curtain-portal-ambient" aria-hidden="true" />
        <div className="curtain-portal-inner">
          <div className="curtain-portal-head" ref={portalHeadRef}>
            <h2>Tecnologia aplicada<br /><span>a problemas reais.</span></h2>
            <p>Desenvolvo aplicações e soluções digitais de ponta a ponta, combinando desenvolvimento web, inteligência artificial, automação e experiências interativas.</p>
          </div>
          <div className="curtain-portal-grid">
            <article className="curtain-card" ref={card1Ref}>
              <h3>Full Stack de ponta a ponta.</h3>
              <p>Do front-end ao back-end, com pensamento de produto e cuidado de interface em cada detalhe.</p>
            </article>
            <div className="curtain-portal-spacer" aria-hidden="true" />
            <article className="curtain-card" ref={card2Ref}>
              <h3>IA &amp; automação aplicadas.</h3>
              <p>IA como ferramenta de criação, prototipação e desenvolvimento para transformar ideias em soluções úteis.</p>
            </article>
          </div>
          <a className="curtain-portal-next" href="#work">Ver projetos <span aria-hidden="true">↓</span></a>
        </div>
      </div>

      {/* Cena 1: cortina clara */}
      <div className="curtain-hero" ref={heroRef}>
        <div className="curtain-panel curtain-panel-left" ref={leftRef}>
          <div className="curtain-top">
            <a className="curtain-logo" href="#top" aria-label="Breno Silveira, início">B<span>S</span></a>
            <nav className="curtain-nav" aria-label="Navegação da apresentação">
              {navLinks.map((link) => <a key={link.href} href={link.href}>{link.label}</a>)}
            </nav>
          </div>
          <div className="curtain-left-content">
            <p className="curtain-eyebrow">Olá, eu sou</p>
            <h1 id="hero-title">Breno<br /><span>Silveira</span></h1>
            <div className="curtain-mobile-sub">
              <p className="curtain-eyebrow">Full Stack Developer &amp; Creative Technologist</p>
              <p>Web, IA, automação e experiências digitais.</p>
            </div>
            <a className="curtain-cta" href="#work" onClick={openCurtain}>
              <span>Conheça meu trabalho</span>
              <i><Arrow /></i>
            </a>
          </div>
        </div>
        <div className="curtain-panel curtain-panel-right" ref={rightRef}>
          <div className="curtain-socials">
            <a href="https://github.com/BrenoSilveiraLeal" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/breno-silveira-leal/" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="https://drive.google.com/file/d/1Ndul6LeKdTYOTpgyiEN-W4yCvnD1IWnM/view?usp=sharing" target="_blank" rel="noreferrer">Currículo</a>
          </div>
          <div className="curtain-right-copy">
            <p className="curtain-role">Full Stack Developer &amp;<br /><span>Creative Technologist</span></p>
            <p className="curtain-eyebrow">Web · IA · Automação</p>
            <p>Estudante de Ciência da Computação em fase final, transformando ideias e problemas em soluções úteis, funcionais e bem construídas.</p>
          </div>
        </div>
      </div>

      {/* Personagem contínuo entre as duas cenas */}
      <div className="curtain-character" ref={charRef}>
        <div className="curtain-character-glow" ref={glowRef} aria-hidden="true" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="curtain-character-img" src="/images/hero-breno.png?v=8" alt="Breno Silveira" fetchPriority="high" />
      </div>
    </div>
  </div>;
}
