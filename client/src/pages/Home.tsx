/*
 * NUVCORE — Home Page
 * Design: "Precision Dark" — Dark SaaS Modernism
 * All sections: Hero, About, Services, Process, Portfolio, Why, CTA, Contact
 */

import { useEffect } from "react";
import { useAuth } from "@/_core/hooks/useAuth";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import ProblemSection from "@/components/sections/ProblemSection";
import SolutionSection from "@/components/sections/SolutionSection";
import FrameworkSection from "@/components/sections/FrameworkSection";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ProcessSection from "@/components/sections/ProcessSection";
import FounderSection from "@/components/sections/FounderSection";
import PortfolioSection from "@/components/sections/PortfolioSection";
import AuthoritySection from "@/components/sections/AuthoritySection";
import WhySection from "@/components/sections/WhySection";
import CTASection from "@/components/sections/CTASection";
import ContactSection from "@/components/sections/ContactSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import DiferenciaisSection from "@/components/sections/DiferenciaisSection";
import Footer from "@/components/Footer";

export default function Home() {
  // The userAuth hooks provides authentication state
  // To implement login/logout functionality, simply call logout() or redirect to getLoginUrl()
  const { user, loading, error, isAuthenticated, logout } = useAuth();

  useEffect(() => {
    const timer = setTimeout(() => {
      const elements = document.querySelectorAll(".fade-up, .fade-left, .fade-right, .scale-in");
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
    <div
      className="min-h-screen"
      style={{ backgroundColor: "#0F0F12" }}
    >
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ProjectsSection />
        <DiferenciaisSection />
        <CTASection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
