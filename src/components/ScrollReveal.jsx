'use client';

import { useEffect, useMemo, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './ScrollReveal.css';

gsap.registerPlugin(ScrollTrigger);

export default function ScrollReveal({
  children,
  scrollContainerRef = null,
  enableBlur = true,
  baseOpacity = 0.12,
  baseRotation = 2,
  blurStrength = 3,
  className = '',
  rotationEnd = 'bottom bottom',
  wordAnimationEnd = 'bottom bottom',
}) {
  const containerRef = useRef(null);
  const words = useMemo(
    () => (typeof children === 'string' ? children.split(/(\s+)/) : []),
    [children],
  );

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducedMotion) return;

    const scroller = scrollContainerRef?.current || window;
    const context = gsap.context(() => {
      gsap.fromTo(
        element,
        { transformOrigin: '0% 50%', rotate: baseRotation },
        {
          rotate: 0,
          ease: 'none',
          scrollTrigger: { trigger: element, scroller, start: 'top bottom', end: rotationEnd, scrub: true },
        },
      );

      const wordElements = element.querySelectorAll('.scroll-reveal-word');
      gsap.fromTo(
        wordElements,
        { opacity: baseOpacity, willChange: 'opacity' },
        {
          opacity: 1,
          ease: 'none',
          stagger: 0.04,
          scrollTrigger: { trigger: element, scroller, start: 'top bottom-=15%', end: wordAnimationEnd, scrub: true },
        },
      );

      if (enableBlur) {
        gsap.fromTo(
          wordElements,
          { filter: `blur(${blurStrength}px)` },
          {
            filter: 'blur(0px)',
            ease: 'none',
            stagger: 0.04,
            scrollTrigger: { trigger: element, scroller, start: 'top bottom-=15%', end: wordAnimationEnd, scrub: true },
          },
        );
      }
    }, element);

    return () => context.revert();
  }, [scrollContainerRef, enableBlur, baseRotation, baseOpacity, rotationEnd, wordAnimationEnd, blurStrength]);

  return (
    <span ref={containerRef} className={`scroll-reveal ${className}`}>
      {words.map((word, index) =>
        /^\s+$/.test(word) ? word : <span className="scroll-reveal-word" key={index}>{word}</span>,
      )}
    </span>
  );
}
