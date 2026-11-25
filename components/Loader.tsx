'use client';

import { useEffect, useState } from 'react';
import { DragCursor } from './DragCursor';

const MIN_MS = 1700;
const MAX_MS = 4000;

// Tela de carregamento da abertura do site. O contador e a barra sobem só com CSS
// (variável --p em app/site.css), então já animam antes do JavaScript carregar;
// aqui o JS só espera fontes + foto e fecha a tela. Aparece uma vez por sessão.
export function Loader() {
  const [phase, setPhase] = useState<'loading' | 'done' | 'leaving' | 'gone'>('loading');

  useEffect(() => {
    const root = document.documentElement;
    if (root.classList.contains('skip-loader')) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const timers: number[] = [];
    let closed = false;

    const close = () => {
      if (closed) return;
      closed = true;
      setPhase('done');
      timers.push(window.setTimeout(() => {
        setPhase('leaving');
        root.classList.add('is-loaded');
        try { sessionStorage.setItem('bs-loaded', '1'); } catch { /* sem storage */ }
      }, reduce ? 0 : 450));
      timers.push(window.setTimeout(() => setPhase('gone'), reduce ? 50 : 1450));
    };

    const img = new Image();
    img.src = '/images/hero-breno.png?v=8';
    const assets = Promise.all([document.fonts?.ready ?? Promise.resolve(), img.decode().catch(() => undefined)]);
    // performance.now() conta desde o início da navegação, não desde a hidratação.
    const wait = (ms: number) => new Promise((r) => timers.push(window.setTimeout(r, Math.max(0, ms - performance.now()))));
    Promise.race([Promise.all([assets, wait(reduce ? 0 : MIN_MS)]), wait(MAX_MS)]).then(close);

    return () => timers.forEach((t) => window.clearTimeout(t));
  }, []);

  if (phase === 'gone') return null;

  return <div className={`loader is-${phase}`} role="status" aria-label="Carregando o portfólio">
    <div className="loader-top">
      <span className="nav-logo">Breno<i>.</i></span>
      <span className="label">Portfólio · 2026</span>
    </div>
    <div className="loader-mid">
      <p className="label"><i aria-hidden="true" /><span className="loader-step" /></p>
    </div>
    <div className="loader-bottom">
      <span className="loader-count" aria-hidden="true"><small>%</small></span>
      <div className="loader-bar" aria-hidden="true">
        <span><DragCursor label="Breno" className="loader-cursor" /></span>
      </div>
    </div>
  </div>;
}
