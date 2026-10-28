'use client';

import { motion } from 'motion/react';

import { SectionHeader } from './primitives';

const PROJECTS = [
  {
    title: 'Animal Website Design',
    image: '/images/R.png',
    description: 'A responsive animal-themed website with engaging species imagery, clear categories, and an organized image gallery.',
    tools: 'Figma',
    date: '2026',
    href: 'https://www.figma.com/design/fOHCjfwqhUq5Kk9O3S0Qi4/Untitled?t=sDQyRUsuRbJazFkD-1',
    features: ['Responsive layout for desktop, tablet, and mobile', 'Interactive image gallery and animal categories', 'Card-based profiles with smooth transitions'],
    span: 'md:col-span-6',
  },
  {
    title: 'Pokedex',
    image: '/images/r2.png',
    description: 'A Pokémon search app that retrieves live data from a public API and presents useful information in a clean interface.',
    tools: 'Flutter, Dart, Firebase',
    date: '2026',
    href: 'https://flutlab.io/editor/825ffbd0-92d7-4e5b-bf05-9b4da0ec0e6a',
    features: ['Search Pokémon by name and view details', 'Displays types, abilities, images, and stats', 'Handles invalid searches and adapts to mobile'],
    span: 'md:col-span-6',
  },
  {
    title: 'Forgot Password UI Flow',
    image: '/images/wow.png',
    description: 'A mobile-first account recovery interface guiding users from a reset request through OTP verification to a success confirmation.',
    tools: 'Figma',
    date: '2025',
    href: 'https://www.figma.com/design/sOfET7BxZtbNmj9o7WVe0Z/Forget-Password-Screens--User-Friendly-Recovery-Flow--Community-?t=sDQyRUsuRbJazFkD-1',
    features: ['User ID input and multi-digit OTP verification', 'Resend code, password validation, and visibility toggle', 'Success confirmation with a clear next step'],
    span: 'md:col-span-6',
  },
  {
    title: 'Additional Project',
    image: '/images/cool.png',
    description: 'More work is in development as I continue expanding my portfolio with new web and mobile projects.',
    tools: 'In development',
    date: 'Coming soon',
    href: '#contact',
    features: ['New projects will be added as they are ready'],
    span: 'md:col-span-6',
  },
];

export const SelectedWorks = () => (
  <section id="work" className="bg-[hsl(var(--bg))] py-16 md:py-24">
    <div className="mx-auto max-w-[1200px] px-6 md:px-10 lg:px-16">
      <SectionHeader
        eyebrow="Portfolio"
        lead="Featured"
        accent="projects"
        subtext="Web, mobile, and interface design work from concept through implementation."
        className="mb-10 md:mb-14"
      />
      <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
        {PROJECTS.map((project, index) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-70px' }}
            transition={{ duration: 0.6, delay: index * 0.06 }}
            className={`project-card group overflow-hidden rounded-3xl border border-[hsl(var(--stroke))] bg-[hsl(var(--surface))] ${project.span}`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={project.image} alt={project.title} loading="lazy" className="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-[1.025]" />
            <div className="p-6 sm:p-7">
              <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
                <span className="text-xs tracking-[0.18em] text-[hsl(var(--muted))] uppercase">{project.date}</span>
                <span className="rounded-full border border-[hsl(var(--stroke))] px-3 py-1 text-xs text-[hsl(var(--muted))]">{project.tools}</span>
              </div>
              <h3 className="font-display mb-2 text-2xl sm:text-3xl">{project.title}</h3>
              <p className="mb-4 text-sm leading-6 text-[hsl(var(--muted))]">{project.description}</p>
              <ul className="mb-5 space-y-2 text-sm text-[hsl(var(--muted))]">
                {project.features.map((feature) => <li key={feature} className="flex gap-2"><span className="text-[hsl(var(--accent))]">✦</span><span>{feature}</span></li>)}
              </ul>
              <a href={project.href} target={project.href.startsWith('http') ? '_blank' : undefined} rel={project.href.startsWith('http') ? 'noreferrer' : undefined} className="inline-flex items-center gap-2 text-sm font-medium text-[hsl(var(--text))] hover:opacity-70">
                {project.href.startsWith('http') ? 'View project' : 'Get notified'} <span aria-hidden="true">↗</span>
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);
