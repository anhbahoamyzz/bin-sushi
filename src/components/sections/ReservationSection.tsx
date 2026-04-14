"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, Users, User, Phone, CheckCircle, Loader2 } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";

const TELEGRAM_BOT_TOKEN = "8606713263:AAFXdik2ouLxkk6TWrwfeVBWHHrVa1UbchQ";
const TELEGRAM_CHAT_ID = "5607683708";

export default function ReservationSection() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = formData.get("name") as string;
    const phone = formData.get("phone") as string;
    const date = formData.get("date") as string;
    const time = formData.get("time") as string;
    const people = formData.get("people") as string;
    const note = formData.get("note") as string;

    const text = `🔥 <b>ĐẶT BÀN MỚI</b>
👤 Tên: ${name}
📞 <a href="tel:${phone}">${phone}</a>
📅 Ngày: ${date}
🕐 Giờ: ${time}
👥 Số khách: ${people}${note ? `\n📝 Ghi chú: ${note}` : ""}

📲 <a href="tel:${phone}">GỌI NGAY</a>`;

    try {
      const res = await fetch(
        `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            chat_id: TELEGRAM_CHAT_ID,
            parse_mode: "HTML",
            text,
          }),
        }
      );

      if (res.ok) {
        setSubmitted(true);
        form.reset();
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        setError("Gửi thất bại. Vui lòng gọi trực tiếp 0707.797.797");
      }
    } catch {
      setError("Lỗi kết nối. Vui lòng gọi trực tiếp 0707.797.797");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="reservation" className="py-14 sm:py-20 md:py-28 bg-dark relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/images/reservation-bg.jpg')] bg-cover bg-center opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark/95 to-dark" />
      </div>

      <div className="max-w-4xl mx-auto px-4 md:px-6 relative z-10">
        <SectionHeading
          subtitle="Đặt bàn"
          title="Đặt Bàn Trước"
          description="Đảm bảo chỗ ngồi tốt nhất cho bữa ăn của bạn"
        />

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="glass-card rounded-xl p-12 text-center"
          >
            <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
            <h3 className="font-heading text-2xl text-cream font-semibold mb-2">
              Đặt bàn thành công!
            </h3>
            <p className="text-silver/70">
              Chúng tôi sẽ liên hệ xác nhận trong thời gian sớm nhất.
            </p>
          </motion.div>
        ) : (
          <AnimatedSection>
            <form onSubmit={handleSubmit} className="glass-card rounded-xl p-4 sm:p-6 md:p-10">
              <div className="grid md:grid-cols-2 gap-3 sm:gap-5">
                {/* Name */}
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gold/50" size={18} />
                  <input
                    name="name"
                    type="text"
                    placeholder="Họ và tên *"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-sm pl-12 pr-4 py-3.5 text-cream text-sm placeholder:text-silver/40 focus:border-gold/50 focus:outline-none transition-colors"
                  />
                </div>

                {/* Phone */}
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gold/50" size={18} />
                  <input
                    name="phone"
                    type="tel"
                    placeholder="Số điện thoại *"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-sm pl-12 pr-4 py-3.5 text-cream text-sm placeholder:text-silver/40 focus:border-gold/50 focus:outline-none transition-colors"
                  />
                </div>

                {/* Date */}
                <div className="relative">
                  <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-gold/50" size={18} />
                  <input
                    name="date"
                    type="date"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-sm pl-12 pr-4 py-3.5 text-cream text-sm focus:border-gold/50 focus:outline-none transition-colors [color-scheme:dark]"
                  />
                </div>

                {/* Time */}
                <div className="relative">
                  <Clock className="absolute left-4 top-1/2 -translate-y-1/2 text-gold/50" size={18} />
                  <select
                    name="time"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-sm pl-12 pr-4 py-3.5 text-cream text-sm focus:border-gold/50 focus:outline-none transition-colors appearance-none [color-scheme:dark]"
                  >
                    <option value="" className="bg-dark-light">Chọn giờ *</option>
                    <option value="10:00" className="bg-dark-light">10:00</option>
                    <option value="11:00" className="bg-dark-light">11:00</option>
                    <option value="12:00" className="bg-dark-light">12:00</option>
                    <option value="13:00" className="bg-dark-light">13:00</option>
                    <option value="14:00" className="bg-dark-light">14:00</option>
                    <option value="17:00" className="bg-dark-light">17:00</option>
                    <option value="18:00" className="bg-dark-light">18:00</option>
                    <option value="19:00" className="bg-dark-light">19:00</option>
                    <option value="20:00" className="bg-dark-light">20:00</option>
                    <option value="21:00" className="bg-dark-light">21:00</option>
                  </select>
                </div>

                {/* Guests */}
                <div className="relative md:col-span-2">
                  <Users className="absolute left-4 top-1/2 -translate-y-1/2 text-gold/50" size={18} />
                  <select
                    name="people"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-sm pl-12 pr-4 py-3.5 text-cream text-sm focus:border-gold/50 focus:outline-none transition-colors appearance-none [color-scheme:dark]"
                  >
                    <option value="" className="bg-dark-light">Số người *</option>
                    <option value="1 người" className="bg-dark-light">1 người</option>
                    <option value="2 người" className="bg-dark-light">2 người</option>
                    <option value="3 người" className="bg-dark-light">3 người</option>
                    <option value="4 người" className="bg-dark-light">4 người</option>
                    <option value="5 người" className="bg-dark-light">5 người</option>
                    <option value="6-8 người" className="bg-dark-light">6-8 người</option>
                    <option value="10+ người" className="bg-dark-light">10+ người</option>
                  </select>
                </div>

                {/* Note */}
                <div className="md:col-span-2">
                  <textarea
                    name="note"
                    placeholder="Ghi chú thêm (yêu cầu đặc biệt, dị ứng...)"
                    rows={3}
                    className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3.5 text-cream text-sm placeholder:text-silver/40 focus:border-gold/50 focus:outline-none transition-colors resize-none"
                  />
                </div>
              </div>

              {/* Error */}
              {error && (
                <p className="text-red-400 text-sm text-center mt-4">{error}</p>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="w-full mt-6 py-4 bg-primary text-white text-sm tracking-widest uppercase rounded-sm hover:bg-primary-light transition-all duration-300 shadow-lg shadow-primary/20 font-medium disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    Đang gửi...
                  </>
                ) : (
                  "Xác nhận đặt bàn"
                )}
              </button>

              <div className="mt-6 overflow-hidden">
                <p className="text-center text-silver/50 text-sm mb-2">Hoặc gọi trực tiếp</p>
                <div className="relative py-3 border-t border-b border-gold/15">
                  <div className="flex animate-marquee whitespace-nowrap">
                    {[...Array(4)].map((_, i) => (
                      <a
                        key={i}
                        href="tel:0707797797"
                        className="flex items-center gap-3 mx-8 text-gold font-heading text-xl sm:text-2xl font-bold tracking-wider hover:text-gold-light transition-colors"
                      >
                        <Phone size={20} className="shrink-0" />
                        0707.797.797
                        <span className="text-gold/30 text-sm">✦</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </form>
          </AnimatedSection>
        )}
      </div>
    </section>
  );
}
