// src/app/page.tsx

'use client'; // <-- PENTING: Tambahkan ini untuk menggunakan Framer Motion

import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import ExperienceSection from "@/components/ExperienceSection";
import HeroSection from "@/components/HeroSection";
import PortfolioSection from "@/components/PortfolioSection";
import { motion } from 'framer-motion'; // <-- IMPORT motion

export default function Home() {
  // Definisikan varian animasi untuk konsistensi
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="flex min-h-screen flex-col">
      {/* HeroSection tidak perlu animasi scroll karena sudah terlihat pertama kali */}
      <HeroSection />

      {/* Bungkus setiap section di bawah ini dengan motion.div */}
      
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }} // Animasi hanya berjalan sekali
        transition={{ duration: 0.8, ease: "easeOut" }}
        variants={sectionVariants}
      >
        <AboutSection />
      </motion.div>
      
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        variants={sectionVariants}
      >
        <ExperienceSection />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        variants={sectionVariants}
      >
        <PortfolioSection />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        variants={sectionVariants}
      >
        <ContactSection />
      </motion.div>
    </div>
  );
}