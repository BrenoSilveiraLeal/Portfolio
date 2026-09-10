'use client';

import { useEffect, useState } from 'react';

export function PageLoader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const timer = window.setTimeout(() => setVisible(false), reduceMotion ? 100 : 900);
    return () => window.clearTimeout(timer);
  }, []);

  return <div className={`page-loader ${visible ? 'is-visible' : 'is-hidden'}`} aria-hidden="true"><strong>BS</strong><span /></div>;
}
