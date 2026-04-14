import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import MenuSection from "@/components/sections/MenuSection";
import GallerySection from "@/components/sections/GallerySection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import ReservationSection from "@/components/sections/ReservationSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/layout/Footer";
import MusicPlayer from "@/components/ui/MusicPlayer";

export default function Home() {
  return (
    <>
      <Navbar />
      <MusicPlayer />
      <main>
        <HeroSection />
        <AboutSection />
        <MenuSection />
        <GallerySection />
        <TestimonialsSection />
        <ReservationSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
