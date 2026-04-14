"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/cn";

const navLinks = [
  { href: "#home", label: "Trang chủ" },
  { href: "#about", label: "Giới thiệu" },
  { href: "#menu", label: "Thực đơn" },
  { href: "#gallery", label: "Hình ảnh" },
  { href: "#testimonials", label: "Đánh giá" },
  { href: "#reservation", label: "Đặt bàn" },
  { href: "#contact", label: "Liên hệ" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-dark/95 backdrop-blur-md shadow-lg shadow-black/20 py-2"
          : "bg-transparent py-4"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2.5">
          <div className="relative w-10 h-10 md:w-11 md:h-11 rounded-full overflow-hidden ring-1 ring-gold/20 bg-dark-light shrink-0">
            <Image
              src="/images/logo.png"
              alt="BIN SUSHI"
              fill
              className="object-cover scale-[1.45] translate-y-[-4%] mix-blend-lighten"
            />
          </div>
          <div className="hidden sm:block">
            <h1 className="font-heading text-base md:text-lg font-bold leading-none tracking-[0.15em]">
              <span className="text-cream">BIN</span>{" "}
              <span className="text-gold">SUSHI</span>
            </h1>
            <p className="text-silver/40 text-[9px] tracking-[0.25em] uppercase mt-0.5">Ái Nghĩa</p>
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-silver/80 text-sm tracking-wider uppercase hover:text-gold transition-colors duration-300 relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* CTA + Mobile Toggle */}
        <div className="flex items-center gap-4">
          <a
            href="tel:0707797797"
            className="hidden md:flex items-center gap-2 text-gold text-sm hover:text-gold-light transition-colors"
          >
            <Phone size={16} />
            <span>0707.797.797</span>
          </a>
          <a
            href="#reservation"
            className="hidden md:inline-flex px-5 py-2.5 bg-primary text-white text-xs tracking-widest uppercase rounded-sm hover:bg-primary-light transition-all duration-300 shadow-lg shadow-primary/20"
          >
            Đặt bàn
          </a>
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="lg:hidden text-cream p-2"
            aria-label="Toggle menu"
          >
            {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-dark-light/98 backdrop-blur-md border-t border-gold/10"
          >
            <div className="px-4 sm:px-6 py-4 sm:py-6 flex flex-col gap-3 sm:gap-4">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="text-silver/80 text-sm tracking-wider uppercase hover:text-gold transition-colors py-2 border-b border-white/5"
                >
                  {link.label}
                </motion.a>
              ))}
              <a
                href="tel:0707797797"
                className="flex items-center gap-2 text-gold text-sm mt-2"
              >
                <Phone size={16} />
                0707.797.797
              </a>
              <a
                href="#reservation"
                onClick={() => setIsMobileOpen(false)}
                className="mt-2 text-center px-5 py-3 bg-primary text-white text-xs tracking-widest uppercase rounded-sm"
              >
                Đặt bàn ngay
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
