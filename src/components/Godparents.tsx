'use client';

import { motion } from 'motion/react';
import { Shirt } from 'lucide-react';
import { Section } from '@/components/Section';

function GreetingCard({ title, index }: { title: string; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
      className="glass-card rounded-[2rem] p-6 text-center sm:p-8"
    >
      <h3 className="text-3xl font-semibold text-foreground">{title}</h3>
      <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-muted-foreground sm:text-base">
        As Mom and Dad&apos;s favorite people, you have always been a blessing in my life. I would love to celebrate my christening with you.
      </p>
    </motion.div>
  );
}

export function Godparents() {
  return (
    <Section id="godparents" eyebrow="A Christening Blessing" title="Dear Titos & Titas">
      <div className="grid gap-5 lg:grid-cols-2">
        <GreetingCard title="Dear Titos" index={0} />
        <GreetingCard title="Dear Titas" index={1} />
      </div>
      <div className="glass-card mx-auto mt-5 max-w-3xl rounded-[2rem] px-6 py-7 text-center sm:px-8">
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-primary">Dress Code</p>
        <div className="mt-5 flex flex-wrap justify-center gap-4">
          <div className="flex min-w-36 flex-col items-center gap-2 rounded-2xl border border-border bg-white/70 px-6 py-4">
            <Shirt aria-hidden="true" className="h-10 w-10 text-slate-500" strokeWidth={1.5} />
            <span className="text-sm font-semibold text-foreground">White Shirt</span>
          </div>
          <div className="flex min-w-36 flex-col items-center gap-2 rounded-2xl border border-border bg-[#8b5e3c]/10 px-6 py-4">
            <Shirt aria-hidden="true" className="h-10 w-10 text-[#8b5e3c]" strokeWidth={1.5} />
            <span className="text-sm font-semibold text-foreground">Brown Shirt</span>
          </div>
        </div>
        <p className="mt-2 text-sm leading-6 text-muted-foreground">If you don&apos;t have either, that&apos;s okay. Come as you are.</p>
      </div>
    </Section>
  );
}