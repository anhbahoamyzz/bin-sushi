"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const hasAutoPlayed = useRef(false);

  const startMusic = useCallback(() => {
    const audio = audioRef.current;
    if (!audio || hasAutoPlayed.current) return;
    hasAutoPlayed.current = true;

    audio.volume = 0.3;
    audio.play().then(() => {
      setPlaying(true);
    }).catch(() => {
      // Autoplay blocked, show tooltip to prompt user
      setShowTooltip(true);
      setTimeout(() => setShowTooltip(false), 4000);
    });
  }, []);

  // Auto-play on first user interaction
  useEffect(() => {
    const events = ["click", "touchstart", "scroll"] as const;
    const handler = () => {
      startMusic();
      events.forEach((e) => window.removeEventListener(e, handler));
    };
    events.forEach((e) => window.addEventListener(e, handler, { once: true, passive: true }));
    return () => {
      events.forEach((e) => window.removeEventListener(e, handler));
    };
  }, [startMusic]);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      audio.volume = 0.3;
      audio.play().then(() => setPlaying(true)).catch(() => {});
    }
    setShowTooltip(false);
  };

  return (
    <>
      <audio ref={audioRef} src="/audio/japanese-bg.mp3" loop preload="auto" />

      <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2">
        {/* Tooltip */}
        <AnimatePresence>
          {showTooltip && (
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              className="bg-dark-light/95 backdrop-blur-sm border border-gold/20 rounded-lg px-3 py-2 text-xs text-silver/70 whitespace-nowrap"
            >
              Bật nhạc nền
            </motion.div>
          )}
        </AnimatePresence>

        {/* Button */}
        <motion.button
          onClick={toggle}
          whileTap={{ scale: 0.9 }}
          className={`relative w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 ${
            playing
              ? "bg-gold/20 border border-gold/40 text-gold shadow-gold/10"
              : "bg-dark-light/90 backdrop-blur-sm border border-white/10 text-silver/50 hover:border-gold/30 hover:text-gold"
          }`}
          aria-label={playing ? "Tắt nhạc" : "Bật nhạc"}
        >
          {playing ? <Volume2 size={20} /> : <VolumeX size={20} />}

          {/* Sound wave animation when playing */}
          {playing && (
            <span className="absolute -inset-1 rounded-full border border-gold/20 animate-ping" />
          )}
        </motion.button>
      </div>
    </>
  );
}
