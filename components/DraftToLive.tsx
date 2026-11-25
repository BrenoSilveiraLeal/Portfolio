'use client';

import Image from 'next/image';
import { useState } from 'react';

export function DraftToLive() {
  const [pos, setPos] = useState(58);

  return <div className="compare" style={{ '--pos': `${pos}%` } as React.CSSProperties}>
    <div className="compare-live">
      <Image src="/images/projects/insidely-preview-20261109.jpg" alt="Página inicial da Insidely publicada" fill sizes="(max-width: 900px) 92vw, 56vw" />
      <span className="compare-tag compare-tag-right label">No ar</span>
    </div>

    <div className="compare-draft" aria-hidden="true">
      <div className="wf">
        <div className="wf-nav"><b /><span /><span /><span /><em /></div>
        <div className="wf-hero">
          <div className="wf-copy">
            <span className="wf-line w60" />
            <span className="wf-title" />
            <span className="wf-title w80" />
            <span className="wf-line w90" />
            <span className="wf-line w70" />
            <div className="wf-btns"><span className="wf-btn is-solid" /><span className="wf-btn" /></div>
          </div>
          <div className="wf-media"><svg viewBox="0 0 100 60" preserveAspectRatio="none"><path d="M0 0 100 60M100 0 0 60" /></svg></div>
        </div>
        <div className="wf-cards"><span /><span /><span /></div>
        <p className="wf-note wf-note-a">título forte aqui ↓</p>
        <p className="wf-note wf-note-b">← CTA principal</p>
        <p className="wf-note wf-note-c">profissionais verificados</p>
      </div>
      <span className="compare-tag label">Rascunho</span>
    </div>

    <div className="compare-handle" aria-hidden="true"><span>‹ ›</span></div>
    <input className="compare-range" type="range" min={0} max={100} value={pos} onChange={(e) => setPos(Number(e.target.value))} aria-label="Arraste para comparar o rascunho com o site publicado" />
  </div>;
}
