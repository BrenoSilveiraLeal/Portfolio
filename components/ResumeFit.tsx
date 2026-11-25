'use client';

import { useLayoutEffect } from 'react';

// Largura de uma folha A4 (210mm) em px CSS.
const A4_PX = 793.7;
// Escala máxima no desktop (como um leitor de PDF em ~120%).
const MAX = 1.2;

// Ajusta a escala das folhas (--cv-s) à largura disponível, como um leitor de PDF:
// o layout interno da folha nunca muda, só o tamanho em que ela é exibida.
export const fitScript = `(function(){var d=document.querySelector('.cv-doc');if(!d)return;var w=d.clientWidth;if(w)d.style.setProperty('--cv-s',String(Math.min(${MAX},w/${A4_PX})))})()`;

export function ResumeFit() {
  useLayoutEffect(() => {
    const doc = document.querySelector<HTMLElement>('.cv-doc');
    if (!doc) return;
    const fit = () => {
      const w = doc.clientWidth;
      if (w) doc.style.setProperty('--cv-s', String(Math.min(MAX, w / A4_PX)));
    };
    fit();
    const ro = new ResizeObserver(fit);
    ro.observe(doc);
    return () => ro.disconnect();
  }, []);
  return null;
}
