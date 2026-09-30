import { Countdown } from '@/components/Countdown';
import { BackgroundMusic } from '@/components/BackgroundMusic';
import { EventDetails } from '@/components/EventDetails';
import { Footer } from '@/components/Footer';
import { Gallery } from '@/components/Gallery';
import { GiftMessage } from '@/components/GiftMessage';
import { Godparents } from '@/components/Godparents';
import { Hero } from '@/components/Hero';
import { Location } from '@/components/Location';
import { Parents } from '@/components/Parents';
import { Rsvp } from '@/components/Rsvp';

export default function Home() {
  return (
    <main className="relative overflow-hidden bg-background text-foreground">
      <div className="pointer-events-none absolute inset-0 grain-overlay opacity-30" />
      <div aria-hidden="true" className="floral-backdrop pointer-events-none absolute inset-0 opacity-45" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[44rem] bg-[radial-gradient(circle_at_top,_rgba(226,158,180,0.25),_transparent_58%),linear-gradient(180deg,_rgba(255,244,247,0.78),_rgba(255,255,255,0))]" />
      <div className="pointer-events-none absolute left-[-8rem] top-[42rem] h-[18rem] w-[18rem] rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute right-[-10rem] top-[68rem] h-[22rem] w-[22rem] rounded-full bg-accent/14 blur-3xl" />
      <div className="relative">
        <Hero />
        <Countdown />
        <EventDetails />
        <Parents />
        <Godparents />
        <Gallery />
        <Location />
        <GiftMessage />
        <Rsvp />
        <Footer />
      </div>
      <BackgroundMusic />
    </main>
  );
}