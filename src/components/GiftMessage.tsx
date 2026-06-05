'use client';

import { Gift } from 'lucide-react';
import { motion } from 'motion/react';
import { invitation } from '@/data/invitation';
import { Section } from '@/components/Section';

export function GiftMessage() {
  if (!invitation.giftMessage) return null;

  return (
    <Section id="gift" eyebrow="Gift Message" title="Message from the Family" description="">
      <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.55 }} className="glass-card rounded-[2rem] p-6 text-center sm:p-8">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl border border-primary/12 bg-white/82 text-primary shadow-[0_16px_32px_rgba(118,84,23,0.08)]">
          <Gift className="h-6 w-6" />
        </div>
        <p className="text-balance text-base leading-8 text-foreground sm:text-lg">{invitation.giftMessage}</p>
      </motion.div>
    </Section>
  );
}