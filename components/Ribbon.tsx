'use client';

import { useEffect, useRef } from 'react';

/*
  Fita 3D verde-menta (inspirada na referência) que atravessa a tela duas vezes:
  - no começo do conteúdo, da direita para a esquerda;
  - perto do final, voltando da esquerda para a direita.
  Cada passagem é desenhada conforme o scroll chega nela. O desenho é feito num canvas fixo
  do tamanho da tela; a fita fica por cima do fundo dos painéis e por baixo de textos e
  cartões (ver redesign.css).
  Visual: fita lisa de largura constante, com um degradê suave através da largura e
  levemente mais clara onde a curva vira para a luz. Sem torção nem pulsação.
*/

type Pt = { x: number; y: number };
type Strip = { samples: Pt[]; cum: number[]; normals: Pt[]; shown: number };
// Pontos de uma passagem: x em larguras de tela, y em alturas do bloco âncora.
type Pass = { anchor: string; points: [number, number][] };

// Menta lisa como a referência: base, sombra suave e brilho suave.
const SHADE = [38, 196, 156];
const BASE = [84, 234, 196];
const LIGHT = [160, 252, 226];

// y em alturas do bloco âncora (0 = topo, 1 = fim). Os trajetos evitam os textos:
// a 1ª passagem desce ao lado do título e some por trás dos cartões de tecnologia;
// a 2ª atravessa os cartões de Serviços por trás, aparecendo só nos vãos entre eles.
const PASSES: Pass[] = [
  { anchor: '.tech-stack', points: [[1.2, -0.35], [0.9, 0.08], [0.74, 0.36], [0.6, 0.7], [0.38, 1.0], [0.12, 1.1], [-0.25, 1.16]] },
  { anchor: '.capability-list', points: [[-0.25, -0.2], [0.04, 0.1], [0.3, 0.42], [0.5, 0.52], [0.7, 0.6], [0.96, 0.92], [1.25, 1.2]] },
];

const mix = (a: number[], b: number[], t: number) => a.map((v, i) => Math.round(v + (b[i] - v) * t));
const rgb = (c: number[]) => `rgb(${c[0]},${c[1]},${c[2]})`;

function catmullRom(points: Pt[], step: number): Pt[] {
  const out: Pt[] = [];
  for (let i = 0; i < points.length - 1; i++) {
    const p0 = points[Math.max(0, i - 1)], p1 = points[i], p2 = points[i + 1], p3 = points[Math.min(points.length - 1, i + 2)];
    const n = Math.max(2, Math.ceil(Math.hypot(p2.x - p1.x, p2.y - p1.y) / step));
    for (let j = 0; j < n; j++) {
      const t = j / n, t2 = t * t, t3 = t2 * t;
      out.push({
        x: 0.5 * (2 * p1.x + (-p0.x + p2.x) * t + (2 * p0.x - 5 * p1.x + 4 * p2.x - p3.x) * t2 + (-p0.x + 3 * p1.x - 3 * p2.x + p3.x) * t3),
        y: 0.5 * (2 * p1.y + (-p0.y + p2.y) * t + (2 * p0.y - 5 * p1.y + 4 * p2.y - p3.y) * t2 + (-p0.y + 3 * p1.y - 3 * p2.y + p3.y) * t3),
      });
    }
  }
  out.push(points[points.length - 1]);
  return out;
}

function makeStrip(pts: Pt[]): Strip {
  const samples = catmullRom(pts, 5);
  const cum = [0];
  const normals: Pt[] = [];
  for (let i = 0; i < samples.length; i++) {
    const a = samples[Math.max(0, i - 1)], b = samples[Math.min(samples.length - 1, i + 1)];
    const dx = b.x - a.x, dy = b.y - a.y, l = Math.hypot(dx, dy) || 1;
    normals.push({ x: -dy / l, y: dx / l });
    if (i > 0) cum.push(cum[i - 1] + Math.hypot(samples[i].x - samples[i - 1].x, samples[i].y - samples[i - 1].y));
  }
  return { samples, cum, normals, shown: 0 };
}

export function Ribbon() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');

    let strips: Strip[] = [];
    let ribbonW = 80, dpr = 1, frame = 0, visible = true;

    const build = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      const vw = window.innerWidth, vh = window.innerHeight;
      canvas.width = Math.round(vw * dpr); canvas.height = Math.round(vh * dpr);
      canvas.style.width = `${vw}px`; canvas.style.height = `${vh}px`;
      const mobile = vw <= 720;
      ribbonW = mobile ? 46 : Math.min(110, Math.max(64, vw * 0.062));

      strips = PASSES.flatMap((pass) => {
        const el = document.querySelector<HTMLElement>(pass.anchor);
        if (!el) return [];
        const top = el.getBoundingClientRect().top + window.scrollY;
        const h = el.offsetHeight;
        return [makeStrip(pass.points.map(([fx, fy]) => ({ x: fx * vw, y: top + fy * h })))];
      });
    };

    const drawStrip = (st: Strip, sy: number, vh: number) => {
      const { samples, cum, normals } = st;
      // A passagem vai sendo desenhada conforme o scroll chega nela.
      const reveal = sy + vh * 0.9;
      let target = 0;
      while (target < samples.length - 1 && samples[target].y < reveal) target++;
      st.shown = reduce.matches ? target : st.shown + (target - st.shown) * 0.07;
      const last = Math.min(samples.length - 1, Math.floor(st.shown));
      if (last < 2) return;

      const lx = -0.45, ly = -0.89; // luz vindo de cima/esquerda
      const total = cum[last];
      // largura constante; só a ponta que está "chegando" é arredondada enquanto a fita é desenhada
      const head = (k: number) => (last >= samples.length - 1 ? 1 : Math.min(1, (total - cum[k]) / 60 + 0.25));

      // sombra projetada, um traço desfocado
      ctx.save();
      ctx.filter = 'blur(24px)';
      ctx.strokeStyle = 'rgba(0,0,0,.45)';
      ctx.lineWidth = ribbonW * 0.8; ctx.lineCap = 'round'; ctx.lineJoin = 'round';
      ctx.beginPath();
      let started = false;
      for (let i = 0; i <= last; i += 2) {
        const y = samples[i].y - sy + 28;
        if (y < -300 || y > vh + 300) { started = false; continue; }
        if (!started) { ctx.moveTo(samples[i].x + 14, y); started = true; } else ctx.lineTo(samples[i].x + 14, y);
      }
      ctx.stroke();
      ctx.restore();

      // faixa lisa: um degradê suave através da largura, levemente mais clara onde a curva vira para a luz
      for (let i = 0; i < last; i++) {
        const a = samples[i], b = samples[i + 1];
        const ya = a.y - sy, yb = b.y - sy;
        if ((ya < -160 && yb < -160) || (ya > vh + 160 && yb > vh + 160)) continue;
        const wa = (ribbonW * head(i)) / 2, wb = (ribbonW * head(i + 1)) / 2;
        const na = normals[i], nb = normals[i + 1];
        const facing = 0.5 + 0.5 * Math.abs(na.x * lx + na.y * ly);
        const base = mix(SHADE, BASE, 0.45 + facing * 0.55);
        const g = ctx.createLinearGradient(a.x + na.x * wa, ya + na.y * wa, a.x - na.x * wa, ya - na.y * wa);
        g.addColorStop(0, rgb(mix(base, SHADE, 0.35)));
        g.addColorStop(0.4, rgb(mix(base, LIGHT, 0.35 * facing)));
        g.addColorStop(1, rgb(mix(base, SHADE, 0.2)));
        ctx.fillStyle = g; ctx.strokeStyle = g; ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(a.x + na.x * wa, ya + na.y * wa);
        ctx.lineTo(b.x + nb.x * wb, yb + nb.y * wb);
        ctx.lineTo(b.x - nb.x * wb, yb - nb.y * wb);
        ctx.lineTo(a.x - na.x * wa, ya - na.y * wa);
        ctx.closePath(); ctx.fill(); ctx.stroke();
      }
    };

    const draw = () => {
      const vh = window.innerHeight, sy = window.scrollY;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      strips.forEach((st) => drawStrip(st, sy, vh));
    };

    const loop = () => {
      if (visible) draw();
      frame = requestAnimationFrame(loop);
    };

    let resizeTimer = 0;
    const onResize = () => { window.clearTimeout(resizeTimer); resizeTimer = window.setTimeout(build, 120); };
    const onVisibility = () => { visible = !document.hidden; };

    build();
    const ro = new ResizeObserver(onResize);
    ro.observe(document.body);
    frame = requestAnimationFrame(loop);
    window.addEventListener('resize', onResize);
    document.addEventListener('visibilitychange', onVisibility);
    return () => {
      cancelAnimationFrame(frame); ro.disconnect(); window.clearTimeout(resizeTimer);
      window.removeEventListener('resize', onResize);
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, []);

  return <canvas ref={canvasRef} className="ribbon-canvas" aria-hidden="true" />;
}
