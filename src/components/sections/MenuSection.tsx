"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import { menuData, type MenuCategory } from "@/data/menu";

function CategoryTab({
  cat,
  isActive,
  onClick,
}: {
  cat: MenuCategory;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`shrink-0 px-4 py-2 text-xs md:text-sm tracking-wider uppercase rounded-sm transition-all duration-300 whitespace-nowrap ${
        isActive
          ? "bg-gold text-dark font-medium"
          : "border border-white/10 text-silver/70 hover:border-gold/50 hover:text-gold"
      }`}
    >
      {cat.name}
    </motion.button>
  );
}

export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState(menuData[0].id);
  const scrollRef = useRef<HTMLDivElement>(null);

  const activeCat = menuData.find((c) => c.id === activeCategory)!;
  const isCombo = activeCategory === "combo";

  // Combo has 3 pages
  const comboImages = [
    "/images/menu-pages/08-combo-1.jpg",
    "/images/menu-pages/09-combo-2.jpg",
    "/images/menu-pages/10-combo-3.jpg",
  ];

  const scrollTabs = (dir: "left" | "right") => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: dir === "left" ? -200 : 200,
        behavior: "smooth",
      });
    }
  };

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

        {/* Category Tabs with scroll */}
        <AnimatedSection className="relative mb-8">
          <button
            onClick={() => scrollTabs("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 bg-dark-light/90 border border-white/10 rounded-full flex items-center justify-center text-silver/60 hover:text-gold hover:border-gold/50 transition-all md:hidden"
          >
            <ChevronLeft size={16} />
          </button>
          <div
            ref={scrollRef}
            className="flex gap-2 overflow-x-auto scrollbar-hide px-8 md:px-0 md:flex-wrap md:justify-center"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {menuData.map((cat) => (
              <CategoryTab
                key={cat.id}
                cat={cat}
                isActive={activeCategory === cat.id}
                onClick={() => setActiveCategory(cat.id)}
              />
            ))}
          </div>
          <button
            onClick={() => scrollTabs("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 bg-dark-light/90 border border-white/10 rounded-full flex items-center justify-center text-silver/60 hover:text-gold hover:border-gold/50 transition-all md:hidden"
          >
            <ChevronRight size={16} />
          </button>
        </AnimatedSection>

        {/* Menu Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col items-center gap-6">
              {isCombo ? (
                comboImages.map((src, i) => (
                  <div key={src} className="relative w-full max-w-2xl rounded-xl overflow-hidden shadow-2xl shadow-black/50">
                    <Image
                      src={src}
                      alt={`Combo menu page ${i + 1}`}
                      width={800}
                      height={1100}
                      className="w-full h-auto"
                      quality={90}
                    />
                  </div>
                ))
              ) : activeCat.image ? (
                <div className="relative w-full max-w-2xl rounded-xl overflow-hidden shadow-2xl shadow-black/50">
                  <Image
                    src={activeCat.image}
                    alt={`${activeCat.name} menu`}
                    width={800}
                    height={1100}
                    className="w-full h-auto"
                    quality={90}
                  />
                </div>
              ) : null}
            </div>
          </motion.div>
        </AnimatePresence>

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
