'use client';

import * as React from 'react';
import gsap from 'gsap';

import { cn } from '@/lib/utils';
import GhostFibers from '@/components/GhostFibers';

import { ArrowUpRight, onAnchorClick, RingLink } from './primitives';

const NAV_LINKS = [
  { label: 'Home', href: '#home', id: 'home' },
  { label: 'Projects', href: '#work', id: 'work' },
  { label: 'About', href: '#about', id: 'about' },
  { label: 'Contact', href: '#contact', id: 'contact' },
];
const ROLES = ['Mobile Developer', 'Web Developer', 'UI/UX Enthusiast'];
const ROLE_INTERVAL = 2000;
const INTRO_COPY = 'Bachelor of Science in Information Technology, specializing in Mobile Development.\nI create responsive, user-friendly web and mobile experiences with a focus on accessibility, thoughtful design, and practical problem solving.';

const Logo = () => {
  return (
    <a
      href="#home"
      aria-label="Home"
      onClick={(e) => onAnchorClick(e, '#home')}
      className="group relative flex size-9 shrink-0 items-center justify-center rounded-full transition-transform duration-300 hover:scale-110"
    >
      <span className="accent-gradient absolute inset-0 rounded-full" />
      <span className="absolute inset-0 rounded-full bg-[linear-gradient(270deg,#4169e1_0%,#afc6ff_100%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <span className="absolute inset-[1.5px] rounded-full bg-[hsl(var(--bg))]" />
        <span className="font-display relative text-[13px] leading-none italic">FR</span>
    </a>
  );
};

export const Navbar = () => {
  const [scrolled, setScrolled] = React.useState(false);
  const [active, setActive] = React.useState('home');
  const [menuOpen, setMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 },
    );
    for (const link of NAV_LINKS) {
      const el = document.getElementById(link.id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (event: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    onAnchorClick(event, href);
    setMenuOpen(false);
  };

  const linkClass = (id: string) =>
    cn(
      'rounded-full px-3 py-2 text-sm transition-colors duration-200 sm:px-4',
      active === id
        ? 'bg-[hsl(var(--stroke))]/50 text-[hsl(var(--text))]'
        : 'text-[hsl(var(--muted))] hover:bg-[hsl(var(--stroke))]/50 hover:text-[hsl(var(--text))]',
    );

  return (
    <nav aria-label="Main navigation" className="fixed inset-x-0 top-0 z-[100] flex justify-center px-3 pt-3 sm:px-4 sm:pt-4 md:pt-6">
      <div
        className={cn(
          'relative flex w-full max-w-[680px] items-center justify-between rounded-full border border-[hsl(var(--accent))]/25 bg-[hsl(var(--surface))]/90 px-2 py-2 shadow-lg shadow-black/20 backdrop-blur-xl transition-[border-radius,background-color,box-shadow] duration-300 sm:inline-flex sm:w-auto sm:justify-start',
          scrolled && 'border-[hsl(var(--accent))]/40 bg-[hsl(var(--bg))]/95 shadow-xl shadow-black/30',
          menuOpen && 'rounded-2xl sm:rounded-full',
        )}
      >
        <Logo />
        <span className="mx-1 hidden h-5 w-px bg-[hsl(var(--stroke))] sm:block" />
        <div className="hidden items-center gap-0.5 sm:flex">
          {NAV_LINKS.map((link) => {
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                aria-current={active === link.id ? 'page' : undefined}
                className={linkClass(link.id)}
              >
                {link.label}
              </a>
            );
          })}
        </div>
        <span className="mx-1 hidden h-5 w-px bg-[hsl(var(--stroke))] sm:block" />
        <RingLink
          href="/resume.pdf"
          outerClassName="hidden sm:inline-flex"
          innerClassName="bg-[hsl(var(--surface))] px-3 py-2 text-sm text-[hsl(var(--text))] backdrop-blur-md sm:px-4"
        >
          Resume
          <ArrowUpRight className="size-3 rtl:-scale-x-100" />
        </RingLink>
        <button
          type="button"
          className="flex size-10 shrink-0 items-center justify-center rounded-full text-[hsl(var(--text))] transition-colors hover:bg-[hsl(var(--stroke))]/50 sm:hidden"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? (
            <svg aria-hidden="true" viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
              <path d="m6 6 12 12M18 6 6 18" />
            </svg>
          ) : (
            <svg aria-hidden="true" viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          )}
        </button>
        {menuOpen && (
          <div id="mobile-navigation" className="absolute inset-x-0 top-[calc(100%+0.5rem)] flex flex-col gap-1 rounded-2xl border border-[hsl(var(--accent))]/20 bg-[hsl(var(--bg))]/95 p-2 shadow-xl shadow-black/30 backdrop-blur-xl sm:hidden">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                aria-current={active === link.id ? 'page' : undefined}
                className={linkClass(link.id)}
              >
                {link.label}
              </a>
            ))}
            <a href="/resume.pdf" className="mt-1 flex items-center justify-between rounded-xl border border-[hsl(var(--stroke))] px-3 py-2.5 text-sm text-[hsl(var(--text))] transition-colors hover:bg-[hsl(var(--stroke))]/40">
              Resume <ArrowUpRight className="size-3 rtl:-scale-x-100" />
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

interface HeroProps {
  start?: boolean;
}

export const Hero = ({ start = true }: HeroProps) => {
  const rootRef = React.useRef<HTMLElement>(null);
  const [roleIndex, setRoleIndex] = React.useState(0);
  const [typedIntro, setTypedIntro] = React.useState('');

  React.useEffect(() => {
    const id = setInterval(() => setRoleIndex((i) => (i + 1) % ROLES.length), ROLE_INTERVAL);

    return () => clearInterval(id);
  }, []);

  React.useEffect(() => {
    if (!start) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setTypedIntro(INTRO_COPY);
      return;
    }
    setTypedIntro('');
    let position = 0;
    const timer = window.setInterval(() => {
      position += 1;
      setTypedIntro(INTRO_COPY.slice(0, position));
      if (position >= INTRO_COPY.length) window.clearInterval(timer);
    }, 14);
    return () => window.clearInterval(timer);
  }, [start]);

  React.useEffect(() => {
    if (!start) return;
    const ctx = gsap.context(() => {
      const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (reduce) {
        gsap.set(['.name-reveal', '.lead-rise', '.blur-in'], {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
        });

        return;
      }
      // The name and lead only slide: text that starts at opacity 0 holds back Largest Contentful Paint.
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
      tl.fromTo('.name-reveal', { y: 50 }, { y: 0, duration: 1.2, delay: 0.1 })
        .fromTo('.lead-rise', { y: 20 }, { y: 0, duration: 1, stagger: 0.1 }, 0.3)
        .fromTo(
          '.blur-in',
          { opacity: 0, y: 20, filter: 'blur(10px)' },
          {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            duration: 1,
            stagger: 0.1,
          },
          0.3,
        );
    }, rootRef);

    return () => ctx.revert();
  }, [start]);

  return (
    <section
      ref={rootRef}
      id="home"
      className="relative isolate flex h-dvh w-full flex-col items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <GhostFibers
          lineColor="#AFC6FF"
          glowColor="#4169E1"
          speed={0.18}
          scale={2.2}
          layers={4}
          waveAmplitude={0.015}
          waveFrequency={3}
          waveSpeed={0.15}
          layerSpeed={0.08}
          twist={0.1}
          twistFrequency={5}
          twistSpeed={1.2}
          lineFrequency={5}
          lineSpacing={2}
          lineSharpness={16}
          glowFalloff={10}
          glowIntensity={1.6}
          brightness={1.6}
          blueBoost={1.25}
          vignette={0.75}
          grain={0.035}
          dpr={1}
          fps={45}
          className="h-full w-full"
        />
        <div className="hero-tint absolute inset-0" />
      </div>

      <div className="relative z-10 flex flex-col items-center px-6 text-center">
        <img src="/images/Ramales.jpeg" alt="Florence Dhaniel R. Ramales" className="profile-image mb-7 size-32 rounded-full object-cover sm:size-40" />
        <span className="mb-4 text-xs tracking-[0.3em] text-[hsl(var(--muted))] uppercase opacity-0 blur-in">
          Portfolio &middot; 2026
        </span>
        <h1 className="name-reveal font-display mb-5 [transform:translateY(50px)] text-5xl leading-[0.95] tracking-tight motion-reduce:[transform:none] sm:text-6xl md:text-8xl">
          Florence Dhaniel R. Ramales
        </h1>
        <p className="lead-rise mb-3 [transform:translateY(20px)] text-lg text-[hsl(var(--text))] motion-reduce:[transform:none] sm:text-xl">
          <span
            key={roleIndex}
            className="animate-role-fade-in font-display inline-block text-[hsl(var(--text))] italic"
          >
            {ROLES[roleIndex]}
          </span>
        </p>
        <p aria-label={INTRO_COPY} aria-live="off" className="hero-description lead-rise mb-10 min-h-16 max-w-2xl whitespace-pre-line [transform:translateY(20px)] text-sm leading-7 text-white motion-reduce:[transform:none] md:text-base">
          {typedIntro}<span aria-hidden="true" className="typing-cursor">|</span>
        </p>
        <div className="inline-flex flex-wrap items-center justify-center gap-4 opacity-0 blur-in">
          <RingLink
            href="#work"
            outerClassName="transition-transform duration-300 hover:scale-105"
            innerClassName="bg-[hsl(var(--text))] px-7 py-3.5 text-sm text-[hsl(var(--bg))] group-hover:bg-[hsl(var(--bg))] group-hover:text-[hsl(var(--text))]"
          >
            View Projects
          </RingLink>
          <RingLink
            href="#contact"
            outerClassName="transition-transform duration-300 hover:scale-105"
            innerClassName="border-2 border-[hsl(var(--stroke))] bg-[hsl(var(--bg))] px-7 py-3.5 text-sm text-[hsl(var(--text))] group-hover:border-transparent"
          >
            Get In Touch
          </RingLink>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-3">
        <span className="text-xs tracking-[0.2em] text-[hsl(var(--muted))] uppercase">Scroll</span>
        <span className="relative block h-10 w-px overflow-hidden bg-[hsl(var(--stroke))]">
          <span className="accent-gradient animate-scroll-down absolute inset-x-0 top-0 block h-1/2 w-full" />
        </span>
      </div>
    </section>
  );
};
