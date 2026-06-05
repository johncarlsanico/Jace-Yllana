'use client';

import type { ReactNode } from 'react';
import { motion } from 'motion/react';
import { cn } from '@/lib/utils';

type SectionProps = {
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
};

export function Section({ id, eyebrow, title, description, children, className }: SectionProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.24 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className={cn('section-spacing', className)}
    >
      <div className="section-shell">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.4em] text-primary/80">{eyebrow}</p>
          <h2 className="text-balance text-4xl font-semibold leading-none text-foreground sm:text-5xl lg:text-6xl">{title}</h2>
          <div className="mx-auto mt-5 h-px w-24 bg-[linear-gradient(90deg,transparent,rgba(183,137,56,0.7),transparent)]" />
          {description ? <p className="mt-5 text-balance text-sm leading-7 text-muted-foreground sm:text-base">{description}</p> : null}
        </div>
        {children}
      </div>
    </motion.section>
  );
}