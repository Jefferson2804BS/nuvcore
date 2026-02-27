/*
 * NUVCORE — Hero Section
 * Design: "Precision Dark" — asymmetric layout, strong typography, animated visual
 * Colors: Tech Black bg | Soft White text | Red CTA | Blue accent
 */

import { ArrowRight, ChevronDown } from "lucide-react";

const HERO_BG = "https://private-us-east-1.manuscdn.com/sessionFile/3ZwnxAvCGCsvjvmdSPvTyk/sandbox/qRCAK89su30SRUWxSWtIm7-img-1_1772158112000_na1fn_bnV2Y29yZS1oZXJvLWJn.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvM1p3bnhBdkNHQ3N2anZtZFNQdlR5ay9zYW5kYm94L3FSQ0FLODlzdTMwU1JVV3hTV3RJbTctaW1nLTFfMTc3MjE1ODExMjAwMF9uYTFmbl9iblYyWTI5eVpTMW9aWEp2TFdKbi5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=NMupaura2BXffR-xOSmhzso93KY9t~XKVf7bntd5ghTuL~MML-ajzO0DSAD4gFuNJ5XMWYhvLBkzRlVwrOkjeDdyJ8ywt8GIZ67eszZuyHL1Qb~SHPYeGFhQBA2OlpHgxrX2JbDj3t~wa3vspZiJIvqBPRq6PDUyHhu0Ty6tWuGWP-IArJQ8a5qLUwAVa6uF7T0EaHuFTKtBdkzbgigCrfhZfAr9IYNmjv3UE7ZIjVwK-wPRUIVgwX7s1SAmhPkKXenlud927~pNb26b02MBSJ1fcQMATrwKwKfKn2vVgn1uL-KL59U~9Nr41sreScfcEQksN7CdzolFssLxm3Amxg__";

export default function HeroSection() {
  const scrollToContact = () => {
    document.querySelector("#contato")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToAbout = () => {
    document.querySelector("#sobre")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ backgroundColor: "#0F0F12" }}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${HERO_BG})`,
          backgroundSize: "cover",
          backgroundPosition: "center right",
          opacity: 0.35,
        }}
      />

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
      <div className="container relative z-10 pt-24 pb-16">
        <div className="max-w-3xl">
          {/* Label */}
          <div className="flex items-center gap-3 mb-8 fade-up">
            <span className="nv-divider" />
            <span className="nv-label">Desenvolvimento Web Estratégico</span>
          </div>

          {/* Headline */}
          <h1
            className="text-5xl lg:text-7xl font-bold leading-[1.05] tracking-tight text-white mb-6 fade-up delay-100"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Eu construo{" "}
            <span style={{ color: "#C41B2C" }}>estruturas digitais</span>
            {" "}que posicionam e crescem.
          </h1>

          {/* Subheadline */}
          <p
            className="text-lg lg:text-xl leading-relaxed mb-10 fade-up delay-200"
            style={{
              color: "rgba(242,242,242,0.65)",
              fontFamily: "'Inter', sans-serif",
              maxWidth: "560px",
            }}
          >
            Não crio apenas sites bonitos. Desenvolvo presença digital estratégica para startups e pequenos negócios que querem crescer com consistência.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 fade-up delay-300">
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
          <div className="flex flex-wrap gap-8 mt-16 fade-up delay-400">
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
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 opacity-50 hover:opacity-80 transition-opacity"
        aria-label="Rolar para baixo"
      >
        <span className="text-xs tracking-widest uppercase" style={{ color: "#F2F2F2", fontFamily: "'Inter', sans-serif" }}>
          Scroll
        </span>
        <ChevronDown size={18} className="text-white animate-bounce" />
      </button>
    </section>
  );
}
