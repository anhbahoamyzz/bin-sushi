"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";

const menuPages = [
  { src: "/images/menu-pages/01-salat.jpg", alt: "Salat" },
  { src: "/images/menu-pages/02-sashimi.jpg", alt: "Sashimi" },
  { src: "/images/menu-pages/03-sushi.jpg", alt: "Sushi" },
  { src: "/images/menu-pages/04-sushi-khe-lua.jpg", alt: "Sushi Khè Lửa" },
  { src: "/images/menu-pages/05-maki.jpg", alt: "Maki" },
  { src: "/images/menu-pages/06-cuon-phu.jpg", alt: "Cuộn Phủ (Roll)" },
  { src: "/images/menu-pages/07-tempura.jpg", alt: "Tempura" },
  { src: "/images/menu-pages/08-combo-1.jpg", alt: "Combo 1" },
  { src: "/images/menu-pages/09-combo-2.jpg", alt: "Combo 2" },
  { src: "/images/menu-pages/10-combo-3.jpg", alt: "Combo 3" },
  { src: "/images/menu-pages/11-com.jpg", alt: "Cơm" },
  { src: "/images/menu-pages/12-udon.jpg", alt: "Udon" },
  { src: "/images/menu-pages/13-teppan-lau.jpg", alt: "Teppan & Lẩu" },
  { src: "/images/menu-pages/14-trang-mieng.jpg", alt: "Tráng Miệng" },
  { src: "/images/menu-pages/15-drinks.jpg", alt: "Drinks" },
];

export default function MenuSection() {
  return (
    <section id="menu" className="py-14 sm:py-20 md:py-28 bg-dark-light relative overflow-hidden">
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d4a853' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="max-w-5xl mx-auto px-4 md:px-6 relative z-10">
        <SectionHeading
          subtitle="Thực đơn"
          title="Menu BIN SUSHI"
          description="Rất hân hạnh phục vụ Quý khách!"
        />

        {/* Menu - 1 image per row */}
        <div className="flex flex-col gap-4 sm:gap-6 max-w-2xl mx-auto">
          {menuPages.map((page, i) => (
            <AnimatedSection
              key={page.src}
              delay={i < 4 ? i * 0.05 : 0}
              className="relative rounded-xl overflow-hidden shadow-xl shadow-black/40"
            >
              <Image
                src={page.src}
                alt={page.alt}
                width={800}
                height={1100}
                className="w-full h-auto"
                loading={i < 4 ? "eager" : "lazy"}
              />
            </AnimatedSection>
          ))}
        </div>

        {/* CTA */}
        <AnimatedSection className="text-center mt-12">
          <p className="text-silver/50 text-sm mb-4">
            Giá chưa bao gồm VAT · Menu có thể thay đổi theo mùa
          </p>
          <motion.a
            href="tel:0707797797"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex px-8 py-3.5 bg-primary text-white text-sm tracking-widest uppercase rounded-sm hover:bg-primary-light transition-all duration-300 shadow-lg shadow-primary/20"
          >
            Gọi đặt món: 0707.797.797
          </motion.a>
        </AnimatedSection>
      </div>
    </section>
  );
}
