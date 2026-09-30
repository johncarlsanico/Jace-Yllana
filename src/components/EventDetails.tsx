'use client';

import { CalendarDays, Church, MapPin, Utensils } from 'lucide-react';
import { motion } from 'motion/react';
import { invitation } from '@/data/invitation';
import { formatEventDate, formatEventTime } from '@/lib/date';
import { Section } from '@/components/Section';

const cards = [
  {
    icon: Church,
    title: invitation.church.name,
    subtitle: 'Church Information',
    lines: [invitation.church.address],
    time: invitation.church.time,
  },
  {
    icon: Utensils,
    title: invitation.reception.name,
    subtitle: 'Reception Information',
    lines: [invitation.reception.address],
    time: invitation.reception.time,
  },
];

export function EventDetails() {
  return (
    <Section id="details" eyebrow="Event Details" title="Celebration Details" description="Here are the ceremony and reception details for Jace Yllana's Christening.">
      <div className="grid gap-5 lg:grid-cols-2">
        {cards.map((card, index) => (
          <motion.article
            key={card.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.28 }}
            transition={{ duration: 0.55, delay: index * 0.08 }}
            className="glass-card rounded-[2.1rem] p-6 sm:p-8"
          >
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-primary/12 bg-white/80 text-primary shadow-[0_16px_32px_rgba(130,95,28,0.08)]">
              <card.icon className="h-6 w-6" />
            </div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-primary/80">{card.subtitle}</p>
            <h3 className="mt-3 text-2xl font-semibold text-foreground">{card.title}</h3>
            <div className="mt-6 space-y-4 text-sm leading-7 text-muted-foreground">
              {card.lines.map((line) => (
                <p key={line} className="flex items-start gap-3">
                  <MapPin className="mt-1 h-4 w-4 flex-none text-primary" />
                  <span>{line}</span>
                </p>
              ))}
              <p className="flex items-start gap-3">
                <CalendarDays className="mt-1 h-4 w-4 flex-none text-primary" />
                <span>{formatEventDate(invitation.eventDate)}</span>
              </p>
              <p className="flex items-start gap-3">
                <ClockIcon />
                <span>{card.time}</span>
              </p>
            </div>
          </motion.article>
        ))}
      </div>
      <div className="mt-6 rounded-[1.9rem] border border-primary/12 bg-[linear-gradient(180deg,rgba(255,252,247,0.92),rgba(246,233,212,0.7))] px-5 py-4 text-center text-sm text-muted-foreground shadow-[0_18px_50px_rgba(108,77,22,0.06)] sm:text-base">
        The church ceremony begins at {formatEventTime(invitation.eventDate)} followed by a joyful reception.
      </div>
    </Section>
  );
}

function ClockIcon() {
  return <span aria-hidden className="mt-1 h-4 w-4 flex-none rounded-full border-2 border-primary/80" />;
}