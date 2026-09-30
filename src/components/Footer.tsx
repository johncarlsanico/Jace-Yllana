'use client';

import { invitation } from '@/data/invitation';

export function Footer() {
  return (
    <footer className="border-t border-primary/10 bg-[linear-gradient(180deg,rgba(255,249,241,0.94),rgba(245,231,208,0.88))] py-12">
      <div className="section-shell text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.4em] text-primary/80">Thank You</p>
        <div className="mx-auto mt-4 h-px w-20 bg-[linear-gradient(90deg,transparent,rgba(183,137,56,0.7),transparent)]" />
        <p className="mx-auto mt-4 max-w-2xl text-balance text-lg leading-8 text-foreground sm:text-xl">Thank you for being part of Jace Yllana Christening.</p>
        <p className="mx-auto mt-5 max-w-2xl text-xs leading-6 text-muted-foreground">
          Created By: Juan Karlos Sanico
        </p>
      </div>
    </footer>
  );
}