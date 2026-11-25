'use client';

import Link from 'next/link';
import { useState } from 'react';
import { resumePdf } from '@/data/resume';

export function ResumeActions() {
  const [copied, setCopied] = useState(false);

  const share = async () => {
    const url = `${window.location.origin}/curriculo`;
    if (navigator.share) {
      try { await navigator.share({ title: 'Currículo — Breno Silveira', url }); return; } catch { /* cancelado */ }
    }
    await navigator.clipboard.writeText(url);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2200);
  };

  return <header className="nav is-scrolled cv-toolbar">
    <Link className="nav-logo nav-brand" href="/" aria-label="Breno Silveira, início">
      <span className="nav-brand-mark" aria-hidden="true">BS</span>
      <span className="nav-brand-full" aria-hidden="true"><span>Breno</span><span className="nav-brand-accent">Silveira</span></span>
    </Link>
    <div className="cv-actions">
      <Link className="cv-back" href="/">← Portfólio</Link>
      <button type="button" className="btn btn-ghost" onClick={share}>{copied ? 'Link copiado ✓' : 'Compartilhar link'}</button>
      <a className="btn btn-solid" href={resumePdf} download="Curriculo-Breno-Silveira.pdf">Baixar PDF <span aria-hidden="true">↓</span></a>
    </div>
  </header>;
}
