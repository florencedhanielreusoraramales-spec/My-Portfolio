'use client';

import * as React from 'react';
import { MotionConfig } from 'motion/react';

import { cn } from '@/lib/utils';

import { About } from './about';
import { Contact } from './contact';
import { inter, instrumentSerif } from './fonts';
import { Hero, Navbar } from './hero';
import { SelectedWorks } from './selected-works';
import { Stats } from './stats';
import { PORTFOLIO_STYLES } from './styles';

const Portfolio = () => {
  return (
    <div
      data-slot="portfolio"
      className={cn(
        inter.variable,
        instrumentSerif.variable,
        'min-h-svh bg-[hsl(var(--bg))] text-[hsl(var(--text))] antialiased',
      )}
    >
      <style dangerouslySetInnerHTML={{ __html: PORTFOLIO_STYLES }} />

      <MotionConfig reducedMotion="user">
        <Navbar />
        <Hero />
        <SelectedWorks />
        <About />
        <Stats />
        <Contact />
      </MotionConfig>
    </div>
  );
};

export default Portfolio;
