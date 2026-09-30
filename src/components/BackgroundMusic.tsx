'use client';

import { useEffect, useRef, useState } from 'react';
import { Music2 } from 'lucide-react';

export function BackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (audioRef.current) audioRef.current.volume = 0.3;
  }, []);

  async function togglePlayback() {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      try {
        await audio.play();
      } catch {
        setIsPlaying(false);
      }
    } else {
      audio.pause();
    }
  }

  const label = isPlaying ? 'Pause music' : 'Play music';

  return (
    <>
      <audio
        ref={audioRef}
        src="/audio/music3.mp3"
        loop
        preload="none"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />
      <button
        type="button"
        onClick={togglePlayback}
        aria-label={label}
        aria-pressed={isPlaying}
        title={label}
        className="fixed bottom-5 right-5 z-40 inline-flex min-h-12 items-center gap-2 rounded-full border border-white/65 bg-primary px-4 text-sm font-semibold text-primary-foreground shadow-[0_16px_40px_rgba(105,48,67,0.2)] transition hover:-translate-y-0.5 hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
      >
        <Music2 className="h-4 w-4" aria-hidden="true" />
        {label}
      </button>
    </>
  );
}