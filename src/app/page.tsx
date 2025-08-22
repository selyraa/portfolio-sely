import AboutSection from "../components/AboutSection";
import ContactSection from "../components/ContactSection";
import ExperienceSection from "@/components/ExperienceSection"; 
import HeroSection from "../components/HeroSection";
import PortfolioSection from "../components/PortfolioSection";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <PortfolioSection />
      <ContactSection />
    </div>
  );
}