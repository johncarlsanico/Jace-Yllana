'use client';

import { MessageCircle, Phone } from 'lucide-react';
import { motion } from 'motion/react';
import { invitation } from '@/data/invitation';
import { Section } from '@/components/Section';

export function Rsvp() {
  return (
    <Section id="rsvp" eyebrow="RSVP" title="Please Confirm Your Attendance" description="Please contact us using the details below." className="bg-[linear-gradient(180deg,rgba(250,243,233,0.8),rgba(255,251,246,1))]">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.55 }} className="glass-card rounded-[2rem] p-6 sm:p-8">
        <p className="text-center text-sm leading-7 text-muted-foreground sm:text-base">Kindly confirm your attendance by contacting the parents.</p>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="rounded-[1.7rem] border border-primary/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.9),rgba(247,237,221,0.72))] p-5 text-center shadow-[0_16px_40px_rgba(118,84,23,0.06)]">
            <div className="text-xs font-semibold uppercase tracking-[0.35em] text-primary/80">Phone Number</div>
            <div className="mt-3 text-xl font-semibold text-foreground">{invitation.contact.phone}</div>
            <a href={`tel:${invitation.contact.phone.replace(/\s+/g, '')}`} className="mt-5 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-primary/90">
              Call Parents
              <Phone className="h-4 w-4" />
            </a>
          </div>

          <div className="rounded-[1.7rem] border border-primary/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.9),rgba(247,237,221,0.72))] p-5 text-center shadow-[0_16px_40px_rgba(118,84,23,0.06)]">
            <div className="text-xs font-semibold uppercase tracking-[0.35em] text-primary/80">Messenger</div>
            <div className="mt-3 text-xl font-semibold text-foreground">{invitation.contact.messengerLabel}</div>
            <a href={invitation.contact.messengerUrl} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 rounded-full border border-primary/18 bg-white/70 px-5 py-3 text-sm font-semibold text-foreground transition duration-300 hover:-translate-y-0.5 hover:bg-white">
              Send Message
              <MessageCircle className="h-4 w-4" />
            </a>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}