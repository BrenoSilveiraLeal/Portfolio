'use client';

import { useEffect, useRef, useState } from 'react';

const capabilities = [
  { number: '01', title: <>Desenvolvimento<br />Web</>, description: 'Sites e aplicações modernas, responsivas e focadas em experiência.' },
  { number: '02', title: <>IA &amp;<br />Automação</>, description: 'IA aplicada ao desenvolvimento, prototipação e automação de processos.' },
  { number: '03', title: <>Soluções &amp;<br />Integrações</>, description: 'APIs, dados e serviços conectados para criar produtos funcionais.' },
  { number: '04', title: <>Tecnologia<br />Criativa</>, description: 'Código, design e interação para criar experiências digitais diferenciadas.' },
];

export function CapabilitiesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setVisible(true); observer.disconnect(); }
    }, { threshold: 0.16 });
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return <section ref={sectionRef} className={`capabilities-section ${visible ? 'is-visible' : ''}`} aria-labelledby="capabilities-title">
    <div className="capabilities-header" data-motion="section"><p id="capabilities-title" className="section-label">Meus Serviços</p><span>Como posso ajudar o seu negócio?</span></div>
    <div className="capability-list">{capabilities.map((item) => <article data-motion="capability" className="capability-card" key={item.number}>
      <div className="capability-topline"><span className="capability-number">{item.number}</span><span className="capability-mark" aria-hidden="true">↗</span></div>
      <div className="capability-rule" />
      <h3>{item.title}</h3>
      <p>{item.description}</p>
    </article>)}</div>
  </section>;
}
