import AboutSection from "@/components/sections/AboutSection";
import PhilosophySection from "@/components/sections/PhilosophySection";
import ContactSection from "@/components/sections/ContactSection";
import HeroSection from "@/components/sections/HeroSection";
import MenuSection from "@/components/sections/MenuSection";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen top-[50px] md:top-[0px]">

      {/* --- 1. HERO SECTION (Главный экран) --- */}
      <section id="hero" className="scroll-mt-24">
        <HeroSection/>
      </section>

      {/* --- 2. FEATURES SECTION (Преимущества) --- */}
      <section id="about" className="scroll-mt-24">
        <AboutSection />
      </section>

      {/* Секция "Меню" */}
      <section id="menu" className="scroll-mt-24">
        <MenuSection />
      </section>

      {/* Секция "Философия" */}
      <section className="scroll-mt-24">
        <PhilosophySection />
      </section>

      {/* Секция "Контакты" */}
      <section id="contact" className="scroll-mt-24">
        <ContactSection />
      </section>
    </main>
  );
}