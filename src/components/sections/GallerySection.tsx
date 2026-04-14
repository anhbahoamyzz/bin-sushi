"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, ZoomIn } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import { galleryImages } from "@/data/restaurant";

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // First image is featured (exterior), rest are supporting
  const featured = galleryImages[0];
  const others = galleryImages.slice(1);

  return (
    <section id="gallery" className="py-14 sm:py-20 md:py-28 bg-dark relative">
      {/* Subtle background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gold/3 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-4 md:px-6 relative z-10">
        <SectionHeading
          subtitle="Khoảnh khắc"
          title="Không Gian BIN SUSHI"
          description="Nơi hội tụ phong cách Nhật Bản giữa lòng Ái Nghĩa"
        />

        {/* Featured + Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-4">
          {/* Featured image - exterior shot, spans left side */}
          <AnimatedSection
            delay={0}
            className="md:col-span-7 relative overflow-hidden rounded-xl cursor-pointer group"
          >
            <div className="relative aspect-[3/4] sm:aspect-[4/5] md:aspect-[3/4]">
              <Image
                src={featured.src}
                alt={featured.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent" />
              {/* Label */}
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                <p className="text-gold text-xs tracking-[0.2em] uppercase mb-1">BIN SUSHI</p>
                <p className="text-cream font-heading text-lg sm:text-xl font-semibold">
                  153 Huỳnh Thúc Kháng, Ái Nghĩa
                </p>
              </div>
              {/* Hover zoom */}
              <div className="absolute inset-0 bg-dark/0 group-hover:bg-dark/30 transition-all duration-500 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button
                    onClick={() => setSelectedImage(featured.src)}
                    className="w-14 h-14 rounded-full bg-gold/20 backdrop-blur-sm border border-gold/30 flex items-center justify-center text-gold"
                  >
                    <ZoomIn size={22} />
                  </button>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Right side - 3x2 grid of interior shots */}
          <div className="md:col-span-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 gap-3 sm:gap-4">
            {others.map((img, i) => (
              <AnimatedSection
                key={img.src}
                delay={0.1 + i * 0.08}
                className="relative overflow-hidden rounded-xl cursor-pointer group"
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-dark/0 group-hover:bg-dark/40 transition-all duration-500 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <button
                        onClick={() => setSelectedImage(img.src)}
                        className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gold/20 backdrop-blur-sm border border-gold/30 flex items-center justify-center text-gold"
                      >
                        <ZoomIn size={18} />
                      </button>
                    </div>
                  </div>
                  {/* Subtle bottom gradient for depth */}
                  <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-dark/40 to-transparent pointer-events-none" />
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-dark/95 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-4xl max-h-[85vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage}
                alt="Gallery preview"
                width={1200}
                height={800}
                className="w-full h-auto max-h-[85vh] object-contain rounded-lg"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 w-10 h-10 rounded-full bg-dark-light border border-gold/30 flex items-center justify-center text-gold hover:bg-primary hover:text-white hover:border-primary transition-all"
              >
                <X size={18} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
