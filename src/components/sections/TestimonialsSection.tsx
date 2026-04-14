"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import { testimonials } from "@/data/restaurant";

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  return (
    <section id="testimonials" className="py-14 sm:py-20 md:py-28 bg-dark-light relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/3 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto px-4 md:px-6 relative z-10">
        <SectionHeading
          subtitle="Đánh giá"
          title="Khách Hàng Nói Gì"
          description="Những trải nghiệm thực tế từ khách hàng yêu quý"
        />

        {/* Carousel */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className="glass-card rounded-xl p-5 sm:p-8 md:p-12 text-center"
            >
              <Quote className="w-8 h-8 sm:w-10 sm:h-10 text-gold/30 mx-auto mb-4 sm:mb-6" />

              {/* Stars */}
              <div className="flex justify-center gap-1 mb-6">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className={
                      i < testimonials[current].rating
                        ? "text-gold fill-gold"
                        : "text-white/20"
                    }
                  />
                ))}
              </div>

              {/* Text */}
              <p className="text-cream/90 text-sm sm:text-base md:text-lg leading-relaxed italic max-w-2xl mx-auto">
                &ldquo;{testimonials[current].text}&rdquo;
              </p>

              {/* Author */}
              <div className="mt-5 sm:mt-8">
                <div className="w-14 h-14 rounded-full bg-gold/20 border-2 border-gold/30 mx-auto mb-3 flex items-center justify-center">
                  <span className="text-gold font-heading text-xl font-bold">
                    {testimonials[current].name.charAt(0)}
                  </span>
                </div>
                <p className="text-cream font-medium">{testimonials[current].name}</p>
                <p className="text-silver/50 text-sm mt-1">{testimonials[current].date}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-6 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-silver/60 hover:border-gold hover:text-gold transition-all"
            >
              <ChevronLeft size={18} />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === current ? "w-8 bg-gold" : "w-2 bg-white/20"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-silver/60 hover:border-gold hover:text-gold transition-all"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
