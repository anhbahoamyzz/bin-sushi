"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import { aboutStats, restaurant } from "@/data/restaurant";

function CounterStat({ number, label, delay }: { number: string; label: string; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!isInView) return;
    const numericPart = number.replace(/[^0-9.]/g, "");
    const suffix = number.replace(/[0-9.]/g, "");
    const target = parseFloat(numericPart);
    const isDecimal = numericPart.includes(".");
    const duration = 1500;
    const steps = 40;
    const increment = target / steps;
    let current = 0;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      current = Math.min(current + increment, target);
      setDisplay(
        (isDecimal ? current.toFixed(1) : Math.round(current).toString()) + suffix
      );
      if (step >= steps) {
        setDisplay(number);
        clearInterval(timer);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isInView, number]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="text-center"
    >
      <p className="font-heading text-3xl md:text-4xl font-bold text-gradient-gold">{display}</p>
      <p className="text-silver/70 text-xs md:text-sm mt-1 tracking-wide">{label}</p>
    </motion.div>
  );
}

export default function AboutSection() {
  return (
    <section id="about" className="py-14 sm:py-20 md:py-28 bg-dark-light relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/3 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/3 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-4 md:px-6 relative z-10">
        <SectionHeading
          subtitle="Về chúng tôi"
          title="Câu Chuyện BIN SUSHI"
          description="Quán sushi chuẩn Nhật – tươi ngon mỗi ngày tại Ái Nghĩa"
        />

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center mt-8 sm:mt-12">
          {/* Image Side */}
          <AnimatedSection direction="left" className="relative">
            <motion.div
              className="relative aspect-[4/5] rounded-lg overflow-hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
            >
              <Image
                src="/images/about.jpg"
                alt="BIN SUSHI không gian"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/40 to-transparent" />
            </motion.div>
            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
              className="absolute -bottom-4 -right-2 sm:-bottom-6 sm:-right-4 md:right-8 glass-card rounded-lg p-3 sm:p-5 text-center"
            >
              <p className="font-heading text-3xl font-bold text-gold">5+</p>
              <p className="text-silver/70 text-xs mt-1">Năm kinh nghiệm</p>
            </motion.div>
          </AnimatedSection>

          {/* Text Side */}
          <AnimatedSection direction="right" className="space-y-6">
            <h3 className="font-heading text-2xl md:text-3xl font-bold text-cream">
              Chào mừng đến với{" "}
              <span className="text-gradient-gold">BIN SUSHI</span>
            </h3>

            <p className="text-silver/80 leading-relaxed text-sm md:text-base">
              {restaurant.description}
            </p>

            <p className="text-silver/80 leading-relaxed text-sm md:text-base">
              Với không gian ấm cúng mang đậm phong cách Nhật Bản, BIN SUSHI là điểm đến lý tưởng
              cho những bữa ăn gia đình, hẹn hò lãng mạn hay tiệc họp mặt bạn bè. Hãy để chúng
              tôi phục vụ bạn với tấm lòng và sự tận tâm nhất.
            </p>

            {/* Signature */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="pt-4 border-t border-white/10"
            >
              <p className="text-gold font-heading text-lg italic">&quot;Mỗi miếng sushi, một câu chuyện&quot;</p>
              <p className="text-silver/60 text-sm mt-1">— Đội ngũ BIN SUSHI</p>
            </motion.div>

            <motion.a
              href="#menu"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex px-6 py-3 border border-gold text-gold text-sm tracking-widest uppercase rounded-sm hover:bg-gold hover:text-dark transition-all duration-300"
            >
              Khám phá thực đơn
            </motion.a>
          </AnimatedSection>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 mt-12 sm:mt-20 pt-8 sm:pt-12 border-t border-white/5">
          {aboutStats.map((stat, i) => (
            <CounterStat key={stat.label} number={stat.number} label={stat.label} delay={i * 0.15} />
          ))}
        </div>
      </div>
    </section>
  );
}
