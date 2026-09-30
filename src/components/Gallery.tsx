'use client';

import { useEffect, useMemo, useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { invitation } from '@/data/invitation';
import { Section } from '@/components/Section';

export function Gallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  const activeImage = activeIndex === null ? null : invitation.gallery[activeIndex];

  const closeLightbox = () => setActiveIndex(null);

  const nextImage = () => {
    if (activeIndex === null) return;
    setActiveIndex((activeIndex + 1) % invitation.gallery.length);
  };

  const previousImage = () => {
    if (activeIndex === null) return;
    setActiveIndex((activeIndex - 1 + invitation.gallery.length) % invitation.gallery.length);
  };

  useEffect(() => {
    if (activeIndex === null) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeLightbox();
      if (event.key === 'ArrowRight') nextImage();
      if (event.key === 'ArrowLeft') previousImage();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeIndex]);

  const masonryColumns = useMemo(() => invitation.gallery, []);

  return (
    <Section id="gallery" eyebrow="Gallery" title="Baby Jace Yllana Photo Gallery" description="Our baby's cutiephotos.">
      <div className="columns-1 gap-4 space-y-4 sm:columns-2 lg:columns-3">
        {masonryColumns.map((image, index) => (
          <motion.button
            key={image.src}
            type="button"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: index * 0.08, duration: 0.45 }}
            onClick={() => setActiveIndex(index)}
            className="group relative block w-full overflow-hidden rounded-[1.7rem] border border-primary/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(250,240,224,0.82))] shadow-[0_18px_44px_rgba(116,83,24,0.1)] break-inside-avoid"
          >
            <img src={image.src} alt={image.alt} loading="lazy" className="h-auto w-full object-cover transition duration-500 group-hover:scale-[1.03]" />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(17,17,17,0.48))] opacity-0 transition duration-300 group-hover:opacity-100" />
            <div className="absolute bottom-0 left-0 right-0 p-4 text-left text-white opacity-0 transition duration-300 group-hover:opacity-100">
              <div className="text-sm font-semibold">{image.caption}</div>
            </div>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {activeImage ? (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={activeImage.alt}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
            onClick={closeLightbox}
            onTouchStart={(event) => setTouchStartX(event.touches[0]?.clientX ?? null)}
            onTouchEnd={(event) => {
              if (touchStartX === null) return;

              const touchEndX = event.changedTouches[0]?.clientX ?? touchStartX;
              const delta = touchEndX - touchStartX;

              if (Math.abs(delta) > 50) {
                if (delta < 0) nextImage();
                else previousImage();
              }

              setTouchStartX(null);
            }}
          >
            <motion.div
              initial={{ scale: 0.96, y: 12 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.96, y: 12 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-4xl overflow-hidden rounded-[2rem] bg-[#111111] shadow-[0_30px_100px_rgba(0,0,0,0.35)]"
              onClick={(event) => event.stopPropagation()}
            >
              <img src={activeImage.src} alt={activeImage.alt} className="max-h-[78svh] w-full bg-black object-contain" />
              <div className="flex items-center justify-between gap-4 px-4 py-4 text-white sm:px-6">
                <div>
                  <p className="text-sm font-semibold">{activeImage.caption}</p>
                  <p className="mt-1 text-xs text-white/70">Swipe left or right on mobile</p>
                </div>
                <div className="flex items-center gap-2">
                  <button type="button" onClick={previousImage} className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/10 transition hover:bg-white/20" aria-label="Previous image">
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button type="button" onClick={nextImage} className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/10 transition hover:bg-white/20" aria-label="Next image">
                    <ChevronRight className="h-5 w-5" />
                  </button>
                  <button type="button" onClick={closeLightbox} className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/10 transition hover:bg-white/20" aria-label="Close gallery preview">
                    <X className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </Section>
  );
}