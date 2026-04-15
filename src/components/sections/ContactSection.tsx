"use client";

import { MapPin, Phone, Clock, Mail } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import { restaurant } from "@/data/restaurant";

const contactInfo = [
  {
    icon: MapPin,
    title: "Địa chỉ",
    lines: [restaurant.address],
  },
  {
    icon: Phone,
    title: "Điện thoại",
    lines: [restaurant.phone],
    href: `tel:${restaurant.phone.replace(/\./g, "")}`,
  },
  {
    icon: Clock,
    title: "Giờ mở cửa",
    lines: [`T2 - T6: ${restaurant.hours.weekday}`, `T7 - CN: ${restaurant.hours.weekend}`],
  },
  {
    icon: Mail,
    title: "Email",
    lines: [restaurant.email],
    href: `mailto:${restaurant.email}`,
  },
];

export default function ContactSection() {
  return (
    <section id="contact" className="py-14 sm:py-20 md:py-28 bg-dark-light">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <SectionHeading
          subtitle="Liên hệ"
          title="Đến Với Chúng Tôi"
          description="Ghé thăm BIN SUSHI ngay hôm nay"
        />

        <div className="grid lg:grid-cols-2 gap-8 mt-12">
          {/* Map */}
          <AnimatedSection direction="left" className="rounded-xl overflow-hidden h-[300px] sm:h-[400px] lg:h-full min-h-[280px] sm:min-h-[350px]">
            <iframe
              src={restaurant.googleMapsEmbed}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="BIN SUSHI Location"
              className="w-full h-full grayscale-[30%] contrast-[1.1]"
            />
          </AnimatedSection>

          {/* Contact Info */}
          <AnimatedSection direction="right" className="space-y-6">
            {contactInfo.map((info) => (
              <div
                key={info.title}
                className="glass-card rounded-lg p-4 sm:p-5 flex items-start gap-3 sm:gap-4 hover:border-gold/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center shrink-0">
                  <info.icon className="text-gold" size={22} />
                </div>
                <div>
                  <h4 className="text-cream font-medium text-sm mb-1">{info.title}</h4>
                  {info.lines.map((line) =>
                    info.href ? (
                      <a
                        key={line}
                        href={info.href}
                        className="block text-silver/70 text-sm hover:text-gold transition-colors"
                      >
                        {line}
                      </a>
                    ) : (
                      <p key={line} className="text-silver/70 text-sm">
                        {line}
                      </p>
                    )
                  )}
                </div>
              </div>
            ))}

            {/* Social */}
            <div className="glass-card rounded-lg p-5">
              <h4 className="text-cream font-medium text-sm mb-3">Theo dõi chúng tôi</h4>
              <div className="flex gap-3">
                {[
                  { name: "Facebook", href: restaurant.social.facebook },
                  { name: "Instagram", href: restaurant.social.instagram },
                  { name: "TikTok", href: restaurant.social.tiktok },
                ].map((s) => (
                  <a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 border border-white/10 rounded-sm text-silver/60 text-xs tracking-wider uppercase hover:border-gold hover:text-gold transition-all duration-300"
                  >
                    {s.name}
                  </a>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
