'use client';

import { motion } from 'motion/react';
import { invitation } from '@/data/invitation';
import { Section } from '@/components/Section';

function ParentCard({ name, role, photo }: { name: string; role: string; photo?: string }) {
  const initials = name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className="glass-card rounded-[2rem] p-6 sm:p-7">
      <div className="flex items-center gap-4">
        <div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-2xl border border-primary/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.88),rgba(244,231,210,0.86))] text-xl font-semibold text-primary shadow-[0_16px_36px_rgba(116,84,24,0.08)]">
          {photo ? <img src={photo} alt={name} className="h-full w-full object-cover" /> : <span>{initials}</span>}
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary/80">{role}</p>
          <h3 className="mt-2 text-2xl font-semibold text-foreground">{name}</h3>
        </div>
      </div>
    </div>
  );
}

export function Parents() {
  return (
    <Section id="parents" eyebrow="Parents" title="Parents" description="With love from Gezylle's parents.">
      <div className="grid gap-5 md:grid-cols-2">
        <motion.div initial={{ opacity: 0, x: -18 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <ParentCard name={invitation.parents.father} role="Father" photo={invitation.parents.photos.father || undefined} />
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 18 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <ParentCard name={invitation.parents.mother} role="Mother" photo={invitation.parents.photos.mother || undefined} />
        </motion.div>
      </div>
    </Section>
  );
}