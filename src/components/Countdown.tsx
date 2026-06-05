'use client';

import { useEffect, useMemo, useState } from 'react';
import { motion } from 'motion/react';
import { invitation } from '@/data/invitation';
import { formatEventDate } from '@/lib/date';
import { Section } from '@/components/Section';

type CountdownState = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  hasStarted: boolean;
};

const initialCountdownState: CountdownState = {
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
  hasStarted: false,
};

const timeParts = [
  { key: 'days', label: 'Days' },
  { key: 'hours', label: 'Hours' },
  { key: 'minutes', label: 'Minutes' },
  { key: 'seconds', label: 'Seconds' },
] as const;

function getCountdown(targetDate: string): CountdownState {
  const difference = new Date(targetDate).getTime() - new Date().getTime();

  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, hasStarted: true };
  }

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((difference / (1000 * 60)) % 60);
  const seconds = Math.floor((difference / 1000) % 60);

  return { days, hours, minutes, seconds, hasStarted: false };
}

export function useCountdown(targetDate: string) {
  const [countdown, setCountdown] = useState<CountdownState>(initialCountdownState);

  useEffect(() => {
    setCountdown(getCountdown(targetDate));

    const timer = window.setInterval(() => {
      setCountdown(getCountdown(targetDate));
    }, 1000);

    return () => window.clearInterval(timer);
  }, [targetDate]);

  return countdown;
}

export function Countdown() {
  const countdown = useCountdown(invitation.eventDate);

  const displayParts = useMemo(
    () =>
      timeParts.map((part) => ({
        ...part,
        value: countdown[part.key],
      })),
    [countdown],
  );

  return (
    <Section
      id="countdown"
      eyebrow="Countdown"
      title="The celebration begins soon"
      description={`Save the date for ${formatEventDate(invitation.eventDate)}.`}
      className="bg-[linear-gradient(180deg,rgba(248,244,238,0.85),rgba(255,255,255,0.98))]"
    >
      <div className="glass-card rounded-[2rem] p-5 sm:p-8">
        {countdown.hasStarted ? (
          <div className="rounded-[1.5rem] border border-primary/20 bg-white/90 px-6 py-10 text-center">
            <p className="text-2xl font-semibold text-foreground sm:text-3xl">The celebration has begun!</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {displayParts.map((part, index) => (
              <motion.div
                key={part.label}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.45 }}
                className="rounded-[1.4rem] border border-primary/15 bg-white px-4 py-6 text-center shadow-[0_16px_40px_rgba(212,175,55,0.08)]"
              >
                <div className="text-3xl font-semibold text-foreground sm:text-4xl">{String(part.value).padStart(2, '0')}</div>
                <div className="mt-2 text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">{part.label}</div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </Section>
  );
}