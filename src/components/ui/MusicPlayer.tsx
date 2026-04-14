"use client";

import { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);

  // Hide tooltip after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => setShowTooltip(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (playing) {
      audio.pause();
    } else {
      audio.volume = 0.3;
      audio.play();
    }
    setPlaying(!playing);
    setShowTooltip(false);
  };

  return (
    <>
      <audio ref={audioRef} src="/audio/japanese-bg.mp3" loop preload="none" />

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
          className={`w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 ${
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
