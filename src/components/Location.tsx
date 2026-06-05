'use client';

import { MapPinned } from 'lucide-react';
import { motion } from 'motion/react';
import { invitation } from '@/data/invitation';
import { formatGoogleMapsUrl } from '@/lib/date';
import { Section } from '@/components/Section';

function LocationCard({ title, name, address }: { title: string; name: string; address: string }) {
  const mapsUrl = formatGoogleMapsUrl(`${name} ${address}`);

  return (
    <div className="glass-card rounded-[2rem] p-6 sm:p-7">
      <p className="text-xs font-semibold uppercase tracking-[0.35em] text-primary/80">{title}</p>
      <h3 className="mt-3 text-2xl font-semibold text-foreground">{name}</h3>
      <p className="mt-4 text-sm leading-7 text-muted-foreground">{address}</p>
      <a href={mapsUrl} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 rounded-full border border-primary/14 bg-white/76 px-5 py-3 text-sm font-semibold text-foreground transition duration-300 hover:-translate-y-0.5 hover:bg-white">
        Open in Google Maps
        <MapPinned className="h-4 w-4" />
      </a>
    </div>
  );
}

export function Location() {
  return (
    <Section id="location" eyebrow="Locations" title="Event Locations" description="Tap a button below to open the location in Google Maps.">
      <div className="grid gap-5 lg:grid-cols-2">
        <motion.div initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }}>
          <LocationCard title="Church Location" name={invitation.church.name} address={invitation.church.address} />
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }}>
          <LocationCard title="Reception Location" name={invitation.reception.name} address={invitation.reception.address} />
        </motion.div>
      </div>
    </Section>
  );
}