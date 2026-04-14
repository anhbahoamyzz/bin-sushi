"use client";

import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import Image from "next/image";
import { restaurant } from "@/data/restaurant";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-dark border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-8 sm:py-12">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/images/logo.png"
                alt="BIN SUSHI"
                width={40}
                height={40}
                className="w-10 h-10"
              />
              <div>
                <h3 className="text-gradient-silver font-heading text-lg font-bold">BIN SUSHI</h3>
                <p className="text-silver/50 text-[10px] tracking-[0.2em] uppercase">Ái Nghĩa</p>
              </div>
            </div>
            <p className="text-silver/50 text-sm leading-relaxed">
              Tinh hoa ẩm thực Nhật Bản giữa lòng Ái Nghĩa. Sushi, sashimi tươi ngon mỗi ngày.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-cream font-medium text-sm mb-4 tracking-wider uppercase">
              Liên kết
            </h4>
            <div className="space-y-2.5">
              {["Trang chủ", "Giới thiệu", "Thực đơn", "Hình ảnh", "Đặt bàn", "Liên hệ"].map(
                (link, i) => (
                  <motion.a
                    key={link}
                    href={`#${link === "Trang chủ" ? "home" : link === "Giới thiệu" ? "about" : link === "Thực đơn" ? "menu" : link === "Hình ảnh" ? "gallery" : link === "Đặt bàn" ? "reservation" : "contact"}`}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.05 }}
                    whileHover={{ x: 4, color: "#d4a853" }}
                    className="block text-silver/50 text-sm hover:text-gold transition-colors"
                  >
                    {link}
                  </motion.a>
                )
              )}
            </div>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-cream font-medium text-sm mb-4 tracking-wider uppercase">
              Liên hệ
            </h4>
            <div className="space-y-2.5 text-silver/50 text-sm">
              <p>{restaurant.address}</p>
              <p>
                <a href="tel:0707797797" className="hover:text-gold transition-colors">
                  {restaurant.phone}
                </a>
              </p>
              <p>
                <a href={`mailto:${restaurant.email}`} className="hover:text-gold transition-colors">
                  {restaurant.email}
                </a>
              </p>
              <div className="pt-3 flex gap-3">
                {Object.entries(restaurant.social).map(([name, href]) => (
                  <motion.a
                    key={name}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.15, borderColor: "#d4a853" }}
                    whileTap={{ scale: 0.9 }}
                    className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-silver/50 text-xs uppercase hover:border-gold hover:text-gold transition-all"
                  >
                    {name.charAt(0).toUpperCase()}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom */}
        <div className="mt-8 sm:mt-10 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-silver/30 text-xs">
            &copy; {new Date().getFullYear()} BIN SUSHI. All rights reserved.
          </p>
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.2, y: -3 }}
            whileTap={{ scale: 0.9 }}
            className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-silver/50 hover:border-gold hover:text-gold transition-all"
            aria-label="Back to top"
          >
            <ArrowUp size={16} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
