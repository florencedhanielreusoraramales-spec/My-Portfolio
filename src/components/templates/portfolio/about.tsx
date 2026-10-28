'use client';

import dynamic from 'next/dynamic';
import { motion } from 'motion/react';
import ScrollReveal from '@/components/ScrollReveal';
import ShinyText from '@/components/ShinyText';

import { SectionHeader } from './primitives';

const Lanyard = dynamic(() => import('@/components/Lanyard'), {
  ssr: false,
  loading: () => <div className="about-lanyard-placeholder" aria-hidden="true" />,
});

const SKILLS = [
  ['HTML5 & Semantic Markup', 95],
  ['CSS3 (Flexbox, Grid, Animations)', 90],
  ['Responsive Web Design', 92],
  ['JavaScript (ES6+)', 85],
  ['Web Accessibility (WCAG)', 88],
  ['Version Control (Git/GitHub)', 90],
  ['Web Performance Optimization', 82],
  ['Cross-browser Compatibility', 87],
] as const;

const TOOLS = ['VS Code', 'Git & GitHub', 'Chrome DevTools', 'Figma', 'Terminal / Command Line', 'Browser Testing Tools', 'W3C Validators'];
const FACTS = ['IT Student', 'Web Developer', 'UI/UX Enthusiast', 'Mobile-First Mindset', 'Accessibility Advocate', 'Continuous Learner'];
const SKILL_GROUPS = [
  { title: 'Frontend Development', items: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'] },
  { title: 'Mobile Development', items: ['Flutter'] },
  { title: 'Backend & Cloud Services', items: ['Firebase'] },
  { title: 'Web Standards', items: ['Semantic HTML', 'WCAG Accessibility', 'Web APIs'] },
  { title: 'Tools & Workflows', items: ['Git / GitHub', 'VS Code', 'Chrome DevTools', 'Terminal / Command Line', 'Browser Testing Tools', 'W3C Validators'] },
  { title: 'Design', items: ['Figma', 'UI/UX Principles', 'Mobile-first Approach'] },
];

export const About = () => (
  <section id="about" className="bg-[hsl(var(--surface))] py-16 md:py-24">
    <div className="mx-auto max-w-[1200px] px-6 md:px-10 lg:px-16">
      <SectionHeader
        eyebrow={<ScrollReveal>A little about me</ScrollReveal>}
        lead={<ScrollReveal>About</ScrollReveal>}
        accent={<ShinyText text="Florence" color="#afc6ff" shineColor="#ffffff" speed={3} className="font-display font-normal italic" />}
        subtext={<ScrollReveal>A mobile development student who cares about useful, accessible, and thoughtfully designed digital experiences.</ScrollReveal>}
        className="mb-10 md:mb-14"
      />
      <div className="grid gap-8 lg:grid-cols-[1.5fr_.8fr]">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.12 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="about-panel rounded-3xl border border-[hsl(var(--stroke))] p-6 sm:p-8">
            <h3 className="font-display mb-4 text-2xl"><ScrollReveal>Personal Background</ScrollReveal></h3>
            <p className="mb-4 text-sm leading-7 text-[hsl(var(--muted))]"><ScrollReveal>Hello! I&apos;m </ScrollReveal>Florence<ScrollReveal> Dhaniel R. Ramales, a passionate Mobile Development student dedicated to creating beautiful, functional, and user-centered mobile experiences. With a strong foundation in front-end development, I love solving problems through code and design.</ScrollReveal></p>
            <p className="mb-0 text-sm leading-7 text-[hsl(var(--muted))]"><ScrollReveal>I am committed to continuous learning and staying updated with the latest mobile technologies and best practices. My goal is to build mobile applications that are not only visually appealing but also highly accessible and performant.</ScrollReveal></p>
          </div>
          <div className="about-panel mt-5 rounded-3xl border border-[hsl(var(--stroke))] p-6 sm:p-8">
            <h3 className="font-display mb-2 text-2xl"><ScrollReveal>Education</ScrollReveal></h3>
            <p className="mb-1 font-medium text-[hsl(var(--text))]"><ScrollReveal>Bachelor of Science in Information Technology</ScrollReveal></p>
            <p className="mb-0 text-sm text-[hsl(var(--muted))]"><ScrollReveal>Currently pursuing a degree with focus on mobile development and computer fundamentals.</ScrollReveal></p>
          </div>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {SKILL_GROUPS.map((group, index) => (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                className="about-panel rounded-2xl border border-[hsl(var(--stroke))] p-5"
              >
                <h3 className="mb-3 text-base font-semibold text-[hsl(var(--accent))]"><ScrollReveal>{group.title}</ScrollReveal></h3>
                <ul className="space-y-1 text-sm text-[hsl(var(--muted))]">{group.items.map((item) => <li key={item}><ScrollReveal>{item}</ScrollReveal></li>)}</ul>
              </motion.div>
            ))}
          </div>
          <div className="about-panel mt-5 rounded-3xl border border-[hsl(var(--stroke))] p-6 sm:p-8">
            <h3 className="font-display mb-6 text-2xl"><ScrollReveal>Core Skills</ScrollReveal></h3>
            <div className="space-y-5">
              {SKILLS.map(([name, level]) => (
                <div key={name}>
                  <div className="mb-2 flex justify-between gap-3 text-sm"><span className="font-medium text-[hsl(var(--text))]"><ScrollReveal>{name}</ScrollReveal></span><span className="text-[hsl(var(--accent))]"><ScrollReveal>{`${level}%`}</ScrollReveal></span></div>
                  <div className="h-2 overflow-hidden rounded-full bg-[hsl(var(--stroke))]"><div className="skill-bar h-full rounded-full" style={{ width: `${level}%` }} /></div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
        <motion.aside
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.12 }}
          transition={{ duration: 0.65, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-5"
        >
          <div className="about-panel rounded-3xl border border-[hsl(var(--stroke))] p-6 sm:p-8">
            <h3 className="font-display mb-5 text-2xl"><ScrollReveal>Tools &amp; Technologies</ScrollReveal></h3>
            <ul className="space-y-3 text-sm text-[hsl(var(--muted))]">{TOOLS.map((tool) => <li key={tool} className="flex items-center gap-3"><span className="text-[hsl(var(--accent))]">✦</span><ScrollReveal>{tool}</ScrollReveal></li>)}</ul>
          </div>
          <div className="about-panel rounded-3xl border border-[hsl(var(--stroke))] p-6 sm:p-8">
            <h3 className="font-display mb-5 text-2xl"><ScrollReveal>Quick Facts</ScrollReveal></h3>
            <ul className="space-y-3 text-sm text-[hsl(var(--muted))]">{FACTS.map((fact) => <li key={fact} className="flex items-center gap-3"><span className="text-[hsl(var(--accent))]">✦</span><ScrollReveal>{fact}</ScrollReveal></li>)}</ul>
          </div>
          <a href="/resume.pdf" download className="resume-button inline-flex w-full items-center justify-center rounded-full px-6 py-4 text-sm font-medium transition hover:opacity-80"><ScrollReveal>Download My Resume ↗</ScrollReveal></a>
          <div className="mx-auto mt-2 h-[360px] w-full max-w-[440px] sm:h-[420px] md:h-[460px]" role="group" aria-label="Interactive photo ID card hanging from a lanyard">
            <Lanyard
              position={[0, 0, 14]}
              fov={18}
              gravity={[0, -35, 0]}
              frontImage="/images/Ramales.jpeg"
              backImage="/images/Ramales.jpeg"
              imageFit="cover"
            />
          </div>
        </motion.aside>
      </div>
    </div>
  </section>
);
