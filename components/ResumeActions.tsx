'use client';

import Link from 'next/link';
import { useState } from 'react';
import type { ResumeLabels } from '@/data/resume';

export function ResumeActions({ t }: { t: ResumeLabels }) {
  const [copied, setCopied] = useState(false);

  const share = async () => {
    const url = `${window.location.origin}${t.path}`;
    if (navigator.share) {
      try { await navigator.share({ title: t.shareTitle, url }); return; } catch { /* cancelado */ }
    }
    await navigator.clipboard.writeText(url);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2200);
  };

  return <header className="nav is-scrolled cv-toolbar">
    <Link className="nav-logo nav-brand" href="/" aria-label="Breno Silveira">
      <span className="nav-brand-content" aria-hidden="true">
        <span className="nav-brand-word"><span className="nav-brand-initial nav-brand-b">B</span><span className="nav-brand-rest"><span>reno</span></span></span>
        <span className="nav-brand-word nav-brand-s"><span className="nav-brand-initial">S</span><span className="nav-brand-rest"><span>ilveira</span></span></span>
      </span>
    </Link>
    <div className="cv-actions">
      <Link className="cv-back" href="/">{t.back}</Link>
      <Link className="cv-back" href={t.other.href} hrefLang={t.lang === 'en' ? 'pt-BR' : 'en'}>{t.other.label}</Link>
      <button type="button" className="btn btn-ghost" onClick={share}>{copied ? t.copied : t.share}</button>
      <a className="btn btn-solid" href={t.pdf} download={t.pdfName}>{t.download} <span aria-hidden="true">↓</span></a>
    </div>
  </header>;
}
