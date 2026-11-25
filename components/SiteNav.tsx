'use client';

import { useEffect, useState } from 'react';
import { contact } from '@/data/site';

const links = [
  { href: '#work', id: 'work', label: 'Projetos' },
  { href: '#process', id: 'process', label: 'Processo' },
  { href: '#about', id: 'about', label: 'Sobre' },
  { href: '#contact', id: 'contact', label: 'Contato' },
];

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    const sections = links.map((l) => document.getElementById(l.id)).filter(Boolean) as HTMLElement[];
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => { if (entry.isIntersecting) setActive(entry.target.id); });
    }, { rootMargin: '-45% 0px -50% 0px' });
    sections.forEach((s) => observer.observe(s));
    return () => { window.removeEventListener('scroll', onScroll); observer.disconnect(); };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
  }, [open]);

  return <header className={`nav${scrolled ? ' is-scrolled' : ''}${open ? ' is-open' : ''}`}>
    <a className="nav-logo nav-brand" href="#top" aria-label="Breno Silveira, início" onClick={() => setOpen(false)}>
      <span className="nav-brand-content" aria-hidden="true">
        <span className="nav-brand-word"><span className="nav-brand-initial nav-brand-b">B</span><span className="nav-brand-rest">reno</span></span>
        <span className="nav-brand-word nav-brand-s"><span className="nav-brand-initial">S</span><span className="nav-brand-rest">ilveira</span></span>
      </span>
    </a>
    <nav className="nav-links" aria-label="Navegação principal">
      {links.map((l) => <a key={l.id} href={l.href} className={active === l.id ? 'is-active' : ''} onClick={() => setOpen(false)}>{l.label}</a>)}
    </nav>
    <a className="nav-cta" href={contact.whatsapp} target="_blank" rel="noreferrer">Vamos conversar <span aria-hidden="true">↗</span></a>
    <button className="nav-toggle" type="button" onClick={() => setOpen(!open)} aria-expanded={open} aria-label={open ? 'Fechar menu' : 'Abrir menu'}><span /><span /></button>
  </header>;
}
