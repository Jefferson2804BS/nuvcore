/*
 * NUVCORE — Hero Section
 * Design: "Precision Dark" — asymmetric layout, strong typography, animated visual
 * Colors: Tech Black bg | Soft White text | Red CTA | Blue accent
 */

import { ArrowRight, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";

const HERO_ILLUSTRATION = "/manus-storage/file_0000000075d871f5969fb0e76d8395dc_c4818c85.png";
const LOGO_URL = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663387028892/RLWfTMXfVFnGSRxy.png";

export default function HeroSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const scrollToContact = () => {
    document.querySelector("#contato")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToAbout = () => {
    document.querySelector("#sobre")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: "#080808", marginTop: "0", paddingTop: "0" }}
    >
      {/* Watermark Logo */}
      <img
        src={LOGO_URL}
        alt=""
        className="nv-watermark nv-watermark-lg"
        style={{ bottom: "10%", right: "-5%" }}
      />

      {/* Background Image - removed */}

      {/* Gradient overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "linear-gradient(to right, #0F0F12 45%, rgba(15,15,18,0.7) 70%, rgba(15,15,18,0.3) 100%)",
        }}
      />
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "linear-gradient(to top, #0F0F12 0%, transparent 40%)",
        }}
      />

      {/* Content */}
      <div className="container relative z-10" style={{ padding: "24px 24px", maxWidth: "100%", marginTop: "0", paddingTop: "0" }}>
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center justify-items-center">
          <div className="max-w-2xl">
          {/* Label */}
          <div className="flex items-center gap-3 mb-4 fade-up">
            <span className="nv-divider" />
            <span className="nv-label">Desenvolvimento Web & Design</span>
          </div>

          {/* Headline */}
          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-[1.05] tracking-tight text-white mb-3 fade-up delay-100"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Eu construo{" "}
            <span style={{ color: "#E5001B" }}>estruturas digitais</span>
            {" "}que posicionam e crescem.
          </h1>

          {/* Subheadline */}
          <p
            className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed mb-6 fade-up delay-200"
            style={{
              color: "rgba(242,242,242,0.65)",
              fontFamily: "'Inter', sans-serif",
              maxWidth: "560px",
            }}
          >
            Não crio apenas sites bonitos. Desenvolvo presença digital estratégica para startups e pequenos negócios que querem crescer com consistência.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 mb-6 fade-up delay-300">
            <button onClick={scrollToContact} className="nv-btn-primary text-base">
              Solicitar Diagnóstico Gratuito
              <ArrowRight size={18} />
            </button>
            <button
              onClick={() => document.querySelector("#servicos")?.scrollIntoView({ behavior: "smooth" })}
              className="nv-btn-outline text-base"
            >
              Ver Serviços
            </button>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-8 mt-8 fade-up delay-400">
            {[
              { value: "100%", label: "Foco em resultados" },
              { value: "Estratégia", label: "Antes de código" },
              { value: "Startups", label: "& Pequenos negócios" },
            ].map((stat) => (
              <div key={stat.label}>
                <div
                  className="text-2xl font-bold text-white mb-1"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {stat.value}
                </div>
                <div
                  className="text-sm"
                  style={{ color: "rgba(242,242,242,0.45)", fontFamily: "'Inter', sans-serif" }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

          {/* Hero Illustration - Right side desktop, below mobile */}
          <div className="relative flex justify-center items-center w-full" style={{ marginTop: "5px", paddingTop: "0" }}>
            <div
              className="relative w-full"
              style={{
                background: "radial-gradient(ellipse 60% 70% at 65% 50%, rgba(229,0,27,0.12) 0%, transparent 70%)",
                maxWidth: "900px",
                marginTop: "0",
                paddingTop: "0",
              }}
            >
              <img
                src={HERO_ILLUSTRATION}
                alt="NUVCORE Hero Illustration"
                className="w-full h-auto object-contain"
                loading="lazy"
                style={{
                  filter: "drop-shadow(0 0 50px rgba(229,0,27,0.2))",
                  maxWidth: "100%",
                  marginTop: "0",
                  paddingTop: "0",
                }}
              />
            </div>
          </div>
        </div>
      </div>


    </section>
  );
}
