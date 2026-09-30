'use client';

import { ArrowDownRight, Cross, MapPinned } from 'lucide-react';
import { motion } from 'motion/react';
import { invitation } from '@/data/invitation';
import { formatEventDate, formatEventTime } from '@/lib/date';
import { useCountdown } from '@/components/Countdown';

function CounterBadge({ label, value }: { label: string; value: number }) {
  return (
    <div className="rounded-[1.5rem] border border-primary/12 bg-white/72 px-4 py-4 text-center shadow-[0_18px_40px_rgba(118,84,23,0.08)] backdrop-blur-md">
      <div className="text-3xl font-semibold text-foreground">{String(value).padStart(2, '0')}</div>
      <div className="mt-1 text-[0.65rem] font-semibold uppercase tracking-[0.32em] text-muted-foreground">{label}</div>
    </div>
  );
}

export function Hero() {
  const countdown = useCountdown(invitation.eventDate);

  return (
    <section className="relative min-h-[100svh] overflow-hidden pt-4 sm:pt-6">
      <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-5 z-10 -translate-x-1/2 text-primary/55">
        <Cross className="h-8 w-8" strokeWidth={1} />
        <span className="absolute left-1/2 top-full h-5 w-px -translate-x-1/2 bg-primary/30" />
      </div>
      <div className="absolute inset-x-0 top-0 h-[38rem] bg-[radial-gradient(circle_at_top,_rgba(239,174,194,0.28),_transparent_62%)]" />
      <div className="absolute left-1/2 top-12 h-48 w-48 -translate-x-1/2 rounded-full bg-primary/12 blur-3xl" />
      <div className="absolute right-[6%] top-[16%] hidden h-40 w-40 rounded-full border border-primary/10 bg-white/30 backdrop-blur-xl lg:block" />
      <div className="absolute inset-y-0 right-0 hidden w-[46%] bg-[linear-gradient(180deg,rgba(255,250,252,0.1),rgba(244,218,226,0.34))] lg:block" />

      <div className="section-shell relative flex min-h-[100svh] items-center py-10 sm:py-14 lg:py-16">
        <div className="grid w-full gap-8 lg:grid-cols-[1.04fr_0.96fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative max-w-3xl overflow-hidden rounded-[2.6rem] border border-primary/12 bg-[linear-gradient(180deg,rgba(255,252,253,0.96),rgba(255,240,245,0.9))] p-6 shadow-[0_28px_90px_rgba(86,42,57,0.12)] sm:p-8 lg:p-10"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(239,174,194,0.2),_transparent_32%),radial-gradient(circle_at_bottom_right,_rgba(217,149,168,0.15),_transparent_28%)]" />
            <div className="relative">
              <p className="text-xs font-semibold uppercase tracking-[0.48em] text-primary/80">Christening Invitation</p>
              <p className="mt-4 text-sm font-medium uppercase tracking-[0.28em] text-muted-foreground">For the christening of</p>
              <h1 className="mt-3 text-balance text-5xl font-semibold leading-[0.92] text-foreground sm:text-6xl lg:text-7xl">{invitation.babyName}</h1>
              <p className="mt-6 max-w-2xl text-pretty text-base leading-8 text-secondary-foreground sm:text-lg">{invitation.greeting}</p>

              <div className="mt-7 flex flex-wrap gap-3 text-sm text-secondary-foreground">
                <div className="rounded-full border border-primary/12 bg-white/72 px-4 py-2.5 shadow-[0_12px_30px_rgba(118,84,23,0.06)]">{formatEventDate(invitation.eventDate)}</div>
                <div className="rounded-full border border-primary/12 bg-white/72 px-4 py-2.5 shadow-[0_12px_30px_rgba(118,84,23,0.06)]">{formatEventTime(invitation.eventDate)}</div>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
                <CounterBadge label="Days" value={countdown.days} />
                <CounterBadge label="Hours" value={countdown.hours} />
                <CounterBadge label="Minutes" value={countdown.minutes} />
                <CounterBadge label="Seconds" value={countdown.seconds} />
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#details" className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition duration-300 hover:-translate-y-0.5 hover:bg-primary/90">
                  View Details
                  <ArrowDownRight className="h-4 w-4" />
                </a>
                <a href="#location" className="inline-flex items-center gap-2 rounded-full border border-primary/14 bg-white/70 px-5 py-3 text-sm font-semibold text-foreground transition duration-300 hover:-translate-y-0.5 hover:bg-white/90">
                  View Location
                  <MapPinned className="h-4 w-4" />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 34, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
            className="relative mx-auto w-full max-w-[34rem]"
          >
            <div className="absolute -left-6 top-16 hidden h-[78%] w-full rounded-[2.4rem] border border-primary/10 bg-white/35 shadow-[0_24px_80px_rgba(126,90,25,0.08)] backdrop-blur-xl sm:block" />
            <div className="relative overflow-hidden rounded-[2.6rem] border border-primary/12 bg-[linear-gradient(180deg,rgba(255,253,254,0.94),rgba(250,230,237,0.86))] p-4 shadow-[0_32px_100px_rgba(86,42,57,0.14)] sm:p-5">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(239,174,194,0.28),_transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.2),rgba(255,255,255,0))]" />
              <div className="relative rounded-[2rem] border border-white/65 bg-[#fff5f7] p-4 sm:p-5">
                <div className="rounded-[1.7rem] bg-[linear-gradient(180deg,#fffdfd,#f8e7ec)] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.7)]">
                  <div className="overflow-hidden rounded-[1.5rem] border border-primary/10 bg-white/60">
                    <img src={invitation.heroImage} alt={invitation.heroImageAlt} className="aspect-[4/5] w-full object-cover object-center" />
                  </div>
                  <div className="mt-4 grid gap-3 sm:grid-cols-[1fr_auto] sm:items-center">
                    <div>
                      <div className="text-xs font-semibold uppercase tracking-[0.34em] text-primary/80">Celebration Date</div>
                      <div className="mt-2 text-2xl font-semibold leading-tight text-foreground">{formatEventDate(invitation.eventDate)}</div>
                      <div className="mt-1 text-sm leading-6 text-muted-foreground">{invitation.church.time} at {invitation.church.name}</div>
                    </div>
                    <div className="rounded-[1.4rem] border border-primary/12 bg-white/75 px-4 py-3 text-center shadow-[0_16px_40px_rgba(118,84,23,0.08)]">
                      <div className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-muted-foreground">Venue</div>
                      <div className="mt-2 text-lg font-semibold text-foreground">Singson Village Mandaue City (CLUB HOUSE)</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}