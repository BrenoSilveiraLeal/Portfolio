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
      <button type="button" className="btn btn-ghost cv-icon-action" onClick={share} aria-label={copied ? t.copied : t.share} title={copied ? t.copied : t.share}>
        <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="m8.7 10.7 6.6-4.4M8.7 13.3l6.6 4.4"/></svg><span className="cv-action-label">{copied ? t.copied : t.share}</span>
      </button>
      <a className="btn btn-solid cv-icon-action" href={t.pdf} download={t.pdfName} aria-label={t.download} title={t.download}>
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3v12m0 0 5-5m-5 5-5-5M5 20h14"/></svg><span className="cv-action-label">{t.download}</span>
      </a>
    </div>
  </header>;
}
