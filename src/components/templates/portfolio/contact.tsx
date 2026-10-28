'use client';

import * as React from 'react';
import gsap from 'gsap';
import { motion } from 'motion/react';

import { cn } from '@/lib/utils';

import { ArrowUpRight, RingLink } from './primitives';

const EMAIL = 'florence.dhaniel.reusora.ramales@gmail.com';

const SOCIALS = [
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/enzo.ramales',
    path: 'M13.5 21v-8h2.7l.4-3.1h-3.1V8c0-.9.3-1.5 1.6-1.5h1.7V3.7c-.3 0-1.4-.1-2.6-.1-2.6 0-4.4 1.6-4.4 4.5v1.8H7V13h2.8v8h3.7z',
  },
];

const Marquee = () => {
  const trackRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) return;
    const ctx = gsap.context(() => {
      gsap.to(trackRef.current, {
        xPercent: -50,
        duration: 40,
        ease: 'none',
        repeat: -1,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="flex overflow-hidden" aria-hidden="true">
      <div ref={trackRef} className="flex w-max shrink-0">
        {Array.from({ length: 2 }).map((_, group) => (
          <div key={group} className="flex shrink-0">
            {Array.from({ length: 10 }).map((_, i) => (
              <span
                key={i}
                className="font-display px-6 text-4xl tracking-tight whitespace-nowrap text-[hsl(var(--text))]/90 uppercase italic md:text-6xl"
              >
                Building the future
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export const Contact = () => {
  return (
    <footer id="contact" className="contact-footer relative overflow-hidden bg-[hsl(var(--bg))] pt-16 pb-8 md:pt-20 md:pb-12">
      <div className="contact-glow absolute inset-0 -z-10" />

      <Marquee />

      <div className="mx-auto max-w-[1200px] px-6 md:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center py-16 text-center md:py-24"
        >
          <span className="mb-6 text-xs tracking-[0.3em] text-[hsl(var(--muted))] uppercase">
            Have a question or want to collaborate?
          </span>
          <RingLink
            href={`mailto:${EMAIL}`}
            outerClassName="transition-transform duration-300 hover:scale-105"
            innerClassName="border border-[hsl(var(--stroke))] bg-[hsl(var(--bg))]/70 px-6 py-4 font-display text-2xl italic text-[hsl(var(--text))] backdrop-blur-md group-hover:border-transparent sm:text-3xl md:text-4xl"
          >
            Email Florence
            <ArrowUpRight className="size-5 rtl:-scale-x-100" />
          </RingLink>
          <p className="mt-5 text-sm text-[hsl(var(--muted))]">I typically respond to emails within 24–48 hours.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="flex flex-col gap-6 border-t border-[hsl(var(--stroke))] pt-6 sm:flex-row sm:items-center sm:justify-between"
        >
          <div className="flex items-center gap-2.5">
            <span className="relative flex size-2.5">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-success/70" />
              <span className="relative inline-flex size-2.5 rounded-full bg-success" />
            </span>
            <span className="text-sm text-[hsl(var(--muted))]">Open to conversation</span>
          </div>

          <div className="flex items-center gap-2">
            {SOCIALS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
                className={cn(
                  'flex size-9 items-center justify-center rounded-full border border-[hsl(var(--stroke))] text-[hsl(var(--muted))] transition-colors duration-300',
                  'hover:border-white/15 hover:bg-[hsl(var(--surface))] hover:text-[hsl(var(--text))]',
                )}
              >
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="size-4">
                  <path d={social.path} />
                </svg>
              </a>
            ))}
          </div>

          <span className="text-xs text-[hsl(var(--muted))]">&copy; 2026 Florence Dhaniel R. Ramales</span>
        </motion.div>
      </div>
    </footer>
  );
};
