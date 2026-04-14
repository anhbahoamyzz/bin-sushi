"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronDown, Phone } from "lucide-react";

/* ── Sakura petal SVG ── */
function SakuraPetal() {
  return (
    <svg viewBox="0 0 32 32" fill="none" className="w-full h-full">
      <path
        d="M16 2C16 2 10 8 10 14C10 18 12.5 20 16 20C19.5 20 22 18 22 14C22 8 16 2 16 2Z"
        fill="currentColor"
      />
      <path
        d="M16 2C16 2 22 7 24 12C25 15 23 18 20 19C17 20 14.5 18 14 15C13 10 16 2 16 2Z"
        fill="currentColor"
        opacity="0.6"
      />
      <path
        d="M16 2C16 2 10 7 8 12C7 15 9 18 12 19C15 20 17.5 18 18 15C19 10 16 2 16 2Z"
        fill="currentColor"
        opacity="0.6"
      />
    </svg>
  );
}

function FloatingSakura({
  delay,
  x,
  size,
  drift,
}: {
  delay: number;
  x: string;
  size: number;
  drift: number;
}) {
  return (
    <motion.div
      initial={{ y: -40, opacity: 0 }}
      animate={{
        y: ["0vh", "110vh"],
        x: [0, drift, -drift * 0.6, drift * 1.2, 0],
        opacity: [0, 0.8, 0.7, 0.4, 0],
        rotate: [0, 120, 240, 360, 480],
      }}
      transition={{
        duration: 14 + Math.random() * 6,
        delay,
        repeat: Infinity,
        ease: "linear",
      }}
      className="absolute top-0 pointer-events-none text-pink-400/40"
      style={{ left: x }}
    >
      <div style={{ width: size, height: size }}>
        <SakuraPetal />
      </div>
    </motion.div>
  );
}

export default function HeroSection() {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {/* === JAPANESE VINTAGE BACKGROUND === */}
      <div className="absolute inset-0 bg-[#1a1510]">
        {/* Warm vintage base gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(212,168,83,0.08)_0%,_rgba(139,90,43,0.04)_40%,_transparent_70%)]" />

        {/* Top warm glow - like paper lantern */}
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[radial-gradient(ellipse,_rgba(212,168,83,0.06)_0%,_transparent_70%)]" />

        {/* Corner accents - crimson red Japanese style */}
        <div className="absolute -top-20 -right-20 w-[400px] h-[400px] bg-[radial-gradient(circle,_rgba(180,40,50,0.1)_0%,_transparent_60%)]" />
        <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-[radial-gradient(circle,_rgba(180,40,50,0.06)_0%,_transparent_60%)]" />

        {/* Seigaiha (青海波) - Japanese wave pattern - prominent */}
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='40' viewBox='0 0 80 40'%3E%3Cpath d='M0 40 C0 17.9 17.9 0 40 0 C62.1 0 80 17.9 80 40' stroke='%23d4a853' fill='none' stroke-width='0.6'/%3E%3Cpath d='M-40 40 C-40 17.9 -22.1 0 0 0 C22.1 0 40 17.9 40 40' stroke='%23d4a853' fill='none' stroke-width='0.6'/%3E%3Cpath d='M40 40 C40 17.9 57.9 0 80 0 C102.1 0 120 17.9 120 40' stroke='%23d4a853' fill='none' stroke-width='0.6'/%3E%3C/svg%3E")`,
            backgroundSize: "80px 40px",
          }}
        />

        {/* Asanoha (麻の葉) - hemp leaf pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Cg stroke='%23c0a060' fill='none' stroke-width='0.4'%3E%3Cpath d='M30 0 L30 30 L0 15 Z'/%3E%3Cpath d='M30 0 L30 30 L60 15 Z'/%3E%3Cpath d='M0 15 L30 30 L0 45 Z'/%3E%3Cpath d='M60 15 L30 30 L60 45 Z'/%3E%3Cpath d='M30 60 L30 30 L0 45 Z'/%3E%3Cpath d='M30 60 L30 30 L60 45 Z'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: "60px 60px",
          }}
        />

        {/* Vertical gold bamboo-style lines */}
        <motion.div
          animate={{ opacity: [0.04, 0.1, 0.04] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute left-[12%] top-0 w-px h-full bg-gradient-to-b from-transparent via-gold/60 to-transparent"
        />
        <motion.div
          animate={{ opacity: [0.04, 0.1, 0.04] }}
          transition={{ duration: 5, repeat: Infinity, delay: 2.5 }}
          className="absolute right-[12%] top-0 w-px h-full bg-gradient-to-b from-transparent via-gold/60 to-transparent"
        />
        <div className="absolute left-[12.3%] top-0 w-px h-full bg-gradient-to-b from-transparent via-gold/20 to-transparent" />
        <div className="absolute right-[12.3%] top-0 w-px h-full bg-gradient-to-b from-transparent via-gold/20 to-transparent" />

        {/* Horizontal decorative lines top & bottom */}
        <div className="absolute top-[15%] left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/15 to-transparent" />
        <div className="absolute bottom-[15%] left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/15 to-transparent" />

        {/* Vintage paper texture noise - hidden on mobile for performance */}
        <div className="absolute inset-0 opacity-[0.05] hidden sm:block" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='256' height='256' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E")`,
        }} />

        {/* Corner ornaments - Japanese cloud motif */}
        <svg className="absolute top-6 left-6 w-20 h-20 md:w-28 md:h-28 text-gold/[0.08]" viewBox="0 0 100 100" fill="none">
          <path d="M10 80 Q10 50 30 40 Q20 30 30 15 Q45 5 55 20 Q60 10 75 15 Q90 20 85 40 Q95 50 90 70" stroke="currentColor" strokeWidth="1" />
        </svg>
        <svg className="absolute bottom-6 right-6 w-20 h-20 md:w-28 md:h-28 text-gold/[0.08] rotate-180" viewBox="0 0 100 100" fill="none">
          <path d="M10 80 Q10 50 30 40 Q20 30 30 15 Q45 5 55 20 Q60 10 75 15 Q90 20 85 40 Q95 50 90 70" stroke="currentColor" strokeWidth="1" />
        </svg>

        {/* Torii gate silhouette - faint decorative element */}
        <svg className="absolute bottom-[8%] left-1/2 -translate-x-1/2 w-60 md:w-80 text-gold/[0.04]" viewBox="0 0 200 120" fill="none">
          <rect x="30" y="20" width="8" height="100" fill="currentColor" />
          <rect x="162" y="20" width="8" height="100" fill="currentColor" />
          <rect x="15" y="10" width="170" height="8" rx="4" fill="currentColor" />
          <rect x="25" y="30" width="150" height="5" fill="currentColor" />
          <path d="M10 10 Q100 -10 190 10" stroke="currentColor" strokeWidth="6" fill="none" />
        </svg>
      </div>

      {/* ── Floating sakura petals ── */}
      <FloatingSakura delay={0} x="5%" size={28} drift={50} />
      <FloatingSakura delay={2} x="15%" size={22} drift={35} />
      <FloatingSakura delay={4} x="30%" size={32} drift={45} />
      <FloatingSakura delay={1} x="45%" size={20} drift={30} />
      <FloatingSakura delay={6} x="55%" size={36} drift={55} />
      <FloatingSakura delay={3} x="65%" size={24} drift={40} />
      <FloatingSakura delay={8} x="78%" size={30} drift={50} />
      <FloatingSakura delay={5} x="88%" size={26} drift={35} />
      <FloatingSakura delay={10} x="95%" size={20} drift={25} />
      <FloatingSakura delay={7} x="40%" size={18} drift={30} />

      {/* === CONTENT === */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-5 sm:px-6 text-center">
        {/* Logo */}
        <div className="hero-logo mb-4 sm:mb-6 relative">
          {/* Outer rotating ring */}
          <div
            className="hero-ring absolute -inset-2.5 sm:-inset-3 md:-inset-4 rounded-full"
            style={{
              background:
                "conic-gradient(from 0deg, transparent, rgba(192,192,192,0.15), transparent, rgba(212,168,83,0.1), transparent)",
            }}
          />
          {/* Static border ring */}
          <div className="absolute -inset-1 sm:-inset-1.5 md:-inset-2 rounded-full border border-gold/15" />

          {/* Logo image */}
          <div className="relative w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-44 lg:h-44 rounded-full overflow-hidden ring-1 ring-silver/20">
            <Image
              src="/images/logo.png"
              alt="BIN SUSHI Logo"
              fill
              className="object-cover scale-[1.45] translate-y-[-4%] mix-blend-lighten"
              priority
            />
          </div>

          {/* Glow */}
          <div className="absolute inset-0 rounded-full shadow-[0_0_40px_rgba(212,168,83,0.08)]" />
        </div>

        {/* Title */}
        <h1 className="hero-title font-heading text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold tracking-[0.15em] sm:tracking-[0.2em] relative">
          <span className="text-gradient-silver">BIN SUSHI</span>
        </h1>

        {/* Tagline */}
        <div className="hero-tagline mt-2 sm:mt-3 flex items-center gap-3 sm:gap-4">
          <div className="flex items-center gap-1 sm:gap-1.5">
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rotate-45 border border-gold/40" />
            <span className="w-8 sm:w-10 md:w-16 h-px bg-gradient-to-r from-transparent to-gold/50" />
          </div>
          <p className="text-gold text-xs sm:text-sm md:text-base tracking-[0.4em] sm:tracking-[0.5em] uppercase font-light">
            Ái Nghĩa
          </p>
          <div className="flex items-center gap-1 sm:gap-1.5">
            <span className="w-8 sm:w-10 md:w-16 h-px bg-gradient-to-l from-transparent to-gold/50" />
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rotate-45 border border-gold/40" />
          </div>
        </div>

        {/* Slogan */}
        <p className="hero-slogan mt-3 sm:mt-5 text-silver/60 text-sm sm:text-base md:text-lg lg:text-xl font-light tracking-wider italic">
          Tinh hoa ẩm thực Nhật Bản
        </p>

        {/* CTA Buttons */}
        <div className="hero-cta mt-7 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto px-4 sm:px-0">
          <button
            onClick={() => {
              const el = document.getElementById("menu");
              if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
            className="group relative px-6 sm:px-8 py-3 sm:py-3.5 bg-primary text-white text-xs sm:text-sm tracking-widest uppercase rounded-sm overflow-hidden shadow-lg shadow-primary/20 text-center cursor-pointer"
          >
            <span className="relative z-10">Xem thực đơn</span>
            <span className="absolute inset-0 bg-primary-light translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </button>
          <a
            href="#reservation"
            className="group relative px-6 sm:px-8 py-3 sm:py-3.5 border border-gold/50 text-gold text-xs sm:text-sm tracking-widest uppercase rounded-sm overflow-hidden text-center"
          >
            <span className="relative z-10 group-hover:text-dark transition-colors duration-300">
              Đặt bàn ngay
            </span>
            <span className="absolute inset-0 bg-gold translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </a>
        </div>

        {/* Contact info */}
        <div className="hero-contact mt-6 sm:mt-10 flex flex-col items-center gap-1.5 sm:gap-2 px-4">
          <p className="text-silver/35 text-[11px] sm:text-xs md:text-sm tracking-wide leading-relaxed">
            153 Huỳnh Thúc Kháng, TT Ái Nghĩa, H. Đại Lộc, Quảng Nam
          </p>
          <p className="text-gold/40 text-[10px] sm:text-xs tracking-[0.15em] uppercase mt-0.5">
            ✦ Nghỉ cố định ngày Rằm & Mồng 1 hằng tháng ✦
          </p>
          <a
            href="tel:0707797797"
            className="flex items-center gap-1.5 text-gold/50 hover:text-gold text-xs sm:text-sm transition-colors"
          >
            <Phone size={13} />
            0707.797.797
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="hero-scroll absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <a
          href="#about"
          className="text-gold/30 hover:text-gold transition-colors"
        >
          <ChevronDown size={24} className="sm:w-7 sm:h-7" />
        </a>
      </motion.div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-20 sm:h-32 bg-gradient-to-t from-dark to-transparent z-[5]" />
    </section>
  );
}
