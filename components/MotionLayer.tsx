'use client';

import { useEffect } from 'react';

export function MotionLayer() {
  useEffect(() => {
    const root = document.documentElement;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    root.classList.add('motion-ready');

    const reveal = () => {
      document.querySelectorAll<HTMLElement>('[data-motion]').forEach((element) => {
        element.classList.add('is-visible');
      });
    };

    if (reduceMotion.matches || !('IntersectionObserver' in window)) {
      reveal();
      return () => root.classList.remove('motion-ready');
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });

    document.querySelectorAll<HTMLElement>('[data-motion]').forEach((element) => observer.observe(element));
    return () => {
      observer.disconnect();
      root.classList.remove('motion-ready');
    };
  }, []);

  return null;
}
