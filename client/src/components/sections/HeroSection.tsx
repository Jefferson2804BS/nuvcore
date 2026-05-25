/*
 * NUVCORE — Hero Section
 * Design: "Precision Dark" — fullscreen background image, centered content overlay
 * Colors: Tech Black overlay | Soft White text | Red CTA
 */

import { ArrowRight } from "lucide-react";
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
      className="relative w-full flex items-center justify-center overflow-hidden"
      style={{
        minHeight: "100vh",
        height: "100vh",
        backgroundImage: `url('${HERO_ILLUSTRATION}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
        marginTop: "0",
        paddingTop: "0",
      }}
    >
      {/* Watermark Logo */}
      <img
        src={LOGO_URL}
        alt=""
        className="nv-watermark nv-watermark-lg absolute"
        style={{ bottom: "10%", right: "-5%", zIndex: 1 }}
      />

      {/* Minimal Dark Overlay - Only on left side for text readability */}
      <div
        className="absolute inset-0 z-5"
        style={{
          background: "linear-gradient(to right, rgba(15,15,18,0.7) 0%, rgba(15,15,18,0.4) 35%, transparent 60%)",
        }}
      />

      {/* Subtle bottom gradient overlay */}
      <div
        className="absolute inset-0 z-5"
        style={{
          background: "linear-gradient(to bottom, transparent 0%, transparent 70%, rgba(15,15,18,0.3) 100%)",
        }}
      />

      {/* Content Container - Centered */}
      <div className="container relative z-10 flex items-center justify-center w-full h-full" style={{ padding: "40px 24px", maxWidth: "100%" }}>
        <div className="w-full max-w-6xl">
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
                color: "rgba(242,242,242,0.85)",
                fontFamily: "'Inter', sans-serif",
                maxWidth: "560px",
              }}
            >
              Não crio apenas sites bonitos. Desenvolvo presença digital estratégica para startups e pequenos negócios que querem crescer com consistência.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 mb-6 fade-up delay-300">
              <a
                href="https://wa.me/5511912830541"
                target="_blank"
                rel="noopener noreferrer"
                className="nv-btn-primary text-base inline-flex items-center gap-2"
                style={{
                  backgroundColor: "#E5001B",
                  color: "#F2EFE9",
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: "700",
                  border: "2px solid #E5001B",
                  padding: "12px 24px",
                  borderRadius: "8px",
                  textDecoration: "none",
                }}
              >
                Solicitar Diagnóstico Gratuito
                <ArrowRight size={18} />
              </a>
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
                    style={{ color: "rgba(242,242,242,0.65)", fontFamily: "'Inter', sans-serif" }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
