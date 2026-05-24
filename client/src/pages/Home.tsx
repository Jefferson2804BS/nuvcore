/*
 * NUVCORE — Home Page
 * Design: "Precision Dark" — Dark SaaS Modernism
 * Structure: 9 Strategic Sections (Hero → Tension → Solution → How → Services → Proof → Authority → Final CTA → Footer)
 */

import { useEffect } from "react";
import { useAuth } from "@/_core/hooks/useAuth";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import TensionSection from "@/components/sections/TensionSection";
import SolutionSection from "@/components/sections/SolutionSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ProofSection from "@/components/sections/ProofSection";
import AuthoritySection from "@/components/sections/AuthoritySection";
import FinalCTASection from "@/components/sections/FinalCTASection";
import Footer from "@/components/Footer";

export default function Home() {
  const { user, loading, error, isAuthenticated, logout } = useAuth();

  useEffect(() => {
    const timer = setTimeout(() => {
      const elements = document.querySelectorAll(".fade-up, .fade-left, .fade-right, .scale-in, .section-fade");
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("visible");
            }
          });
        },
        { threshold: 0.08, rootMargin: "0px 0px -20px 0px" }
      );
      elements.forEach((el) => observer.observe(el));
      return () => observer.disconnect();
    }, 80);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#0A0A0A" }}>
      <Navbar />
      <main>
        <HeroSection />
        <TensionSection />
        <SolutionSection />
        <HowItWorksSection />
        <ServicesSection />
        <ProofSection />
        <AuthoritySection />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  );
}
