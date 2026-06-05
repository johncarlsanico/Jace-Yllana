'use client';

import { motion } from 'motion/react';
import { invitation } from '@/data/invitation';
import { Section } from '@/components/Section';

function NameChip({ name, index }: { name: string; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
      className="rounded-full border border-primary/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(248,238,223,0.78))] px-4 py-3 text-center text-sm font-medium text-foreground shadow-[0_12px_28px_rgba(112,80,24,0.06)]"
    >
      {name}
    </motion.div>
  );
}

function Column({ title, names }: { title: string; names: readonly string[] }) {
  return (
    <div className="glass-card rounded-[2rem] p-6 sm:p-7">
      <h3 className="text-2xl font-semibold text-foreground">{title}</h3>
      <div className="mt-5 grid gap-3">
        {names.map((name, index) => (
          <NameChip key={name} name={name} index={index} />
        ))}
      </div>
    </div>
  );
}

export function Godparents() {
  return (
    <Section id="godparents" eyebrow="Godparents" title="Ninongs and Ninangs" description="The godparents who will guide and support Gezylle.">
      <div className="grid gap-5 lg:grid-cols-2">
        <Column title="Ninongs" names={invitation.ninongs} />
        <Column title="Ninangs" names={invitation.ninangs} />
      </div>
    </Section>
  );
}