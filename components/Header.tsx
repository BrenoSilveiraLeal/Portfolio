'use client';
import { useEffect, useRef, useState } from 'react';

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const sentinelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // O menu fica abaixo da cortina: a animação BS → Breno Silveira dispara quando ele gruda no topo,
    // medido por um marcador logo acima dele (e não pelo scroll da página inteira).
    const updateHeader = () => {
      const sentinel = sentinelRef.current;
      setScrolled(sentinel ? sentinel.getBoundingClientRect().top < 0 : window.scrollY > 24);
    };
    updateHeader();
    window.addEventListener('scroll', updateHeader, { passive: true });
    return () => window.removeEventListener('scroll', updateHeader);
  }, []);

  return <><div ref={sentinelRef} className="site-header-sentinel" aria-hidden="true" /><header className={`site-header${scrolled ? ' is-scrolled' : ''}`}>
    <a className="wordmark brand-logo" href="#top" aria-label="Breno Silveira, início">
      <span className="brand-b">B</span><span className="brand-b-rest" aria-hidden="true">reno </span><span className="brand-s">S</span><span className="brand-s-rest" aria-hidden="true">ilveira</span>
    </a>
    <nav className={open ? 'main-nav is-open' : 'main-nav'} aria-label="Navegação principal">
      <a href="#top" onClick={() => setOpen(false)}>INÍCIO</a><a href="#skills" onClick={() => setOpen(false)}>HABILIDADES</a><a href="#work" onClick={() => setOpen(false)}>PROJETOS</a><a href="#about" onClick={() => setOpen(false)}>SOBRE</a><a href="#contact" onClick={() => setOpen(false)}>CONTATO</a>
    </nav>
    <div className="header-socials"><a href="https://github.com/BrenoSilveiraLeal" target="_blank" rel="noreferrer">GitHub</a><a href="https://www.linkedin.com/in/breno-silveira-leal/" target="_blank" rel="noreferrer">LinkedIn</a><a href="https://drive.google.com/file/d/1Ndul6LeKdTYOTpgyiEN-W4yCvnD1IWnM/view?usp=sharing" target="_blank" rel="noreferrer">Currículo</a></div>
    <button className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-label={open ? 'Fechar menu' : 'Abrir menu'}><span /> <span /></button>
  </header></>;
}
