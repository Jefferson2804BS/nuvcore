/*
 * NUVCORE — Portfolio Section
 * Design: "Precision Dark" — Stripe-inspired case study cards
 * Content: Placeholder projects with structured layout
 */

import { ArrowUpRight } from "lucide-react";

const PORTFOLIO_MOCKUP = "https://private-us-east-1.manuscdn.com/sessionFile/3ZwnxAvCGCsvjvmdSPvTyk/sandbox/qRCAK89su30SRUWxSWtIm7-img-5_1772158118000_na1fn_bnV2Y29yZS1wb3J0Zm9saW8tbW9ja3Vw.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvM1p3bnhBdkNHQ3N2anZtZFNQdlR5ay9zYW5kYm94L3FSQ0FLODlzdTMwU1JVV3hTV3RJbTctaW1nLTVfMTc3MjE1ODExODAwMF9uYTFmbl9iblYyWTI5eVpTMXdiM0owWm05c2FXOHRiVzlqYTNWdy5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=H-Z-Y4lUIJrZtyO8fahrqRWOR0Ppa0HyOfWEWhe8qPEjpJo-Z5xPENCMnz3W3Jduu0BEztNO1fKJXDAGbEPeJrsvo-oIHczD0bLqt3Us~hB-uvljdXKk-VoUhQ2nrBRG58gMg8ME9TJpV~AJ5VA-bfTBWnlSQBW77Bd-o3VBZM3mYuLOJXXMPVF~K~GsZ-GRPEsPVf55EnJs3J4H73i1P~4lZXWVsX9q5urBzKIFUdV2GWH2LgDR2HMlcGP4B1lXCSH~5fIFaDmNlbb3B3M6t~7sMaS5ypmU9p5zGhzedr3MrmKTf7iZYrn0dAh3s06L77nv0AgZWUIXthp46fmlsA__";

const projects = [
  {
    id: "01",
    category: "Startup SaaS",
    title: "Plataforma de Gestão Financeira",
    description:
      "Site institucional e landing page para startup de fintech. Foco em conversão de leads qualificados e comunicação clara do produto.",
    tags: ["Landing Page", "Fintech", "Conversão"],
    metrics: [
      { label: "Aumento em leads", value: "+180%" },
      { label: "Taxa de conversão", value: "4.2%" },
    ],
    color: "#C41B2C",
    featured: true,
  },
  {
    id: "02",
    category: "Pequeno Negócio",
    title: "Consultoria de Marketing Digital",
    description:
      "Estrutura digital completa para consultoria. Posicionamento de autoridade, captação de clientes e portfólio de cases.",
    tags: ["Site Institucional", "Marketing", "B2B"],
    metrics: [
      { label: "Novos clientes/mês", value: "+8" },
      { label: "Tempo de carregamento", value: "0.9s" },
    ],
    color: "#2563EB",
    featured: false,
  },
  {
    id: "03",
    category: "E-commerce",
    title: "Loja de Produtos Artesanais",
    description:
      "Otimização completa de site existente. Melhoria de performance, UX e estratégia de SEO para aumentar tráfego orgânico.",
    tags: ["Otimização", "E-commerce", "SEO"],
    metrics: [
      { label: "Tráfego orgânico", value: "+220%" },
      { label: "Score de performance", value: "96/100" },
    ],
    color: "#C41B2C",
    featured: false,
  },
];

export default function PortfolioSection() {
  return (
    <section
      id="portfolio"
      className="nv-section"
      style={{ backgroundColor: "#16161A" }}
    >
      <div className="container">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6 fade-up">
          <span className="nv-divider" />
          <span className="nv-label">Portfólio</span>
        </div>
        <div className="grid lg:grid-cols-2 gap-8 items-end mb-16">
          <h2
            className="text-4xl lg:text-5xl font-bold text-white leading-tight fade-up delay-100"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Projetos que{" "}
            <span style={{ color: "#C41B2C" }}>geram resultado</span>
          </h2>
          <p
            className="text-base leading-relaxed fade-up delay-200"
            style={{
              color: "rgba(242,242,242,0.6)",
              fontFamily: "'Inter', sans-serif",
            }}
          >
            Cada projeto aqui representa uma solução estratégica real. Não mostro apenas o design — mostro o impacto gerado.
          </p>
        </div>

        {/* Featured project */}
        <div
          className="nv-card overflow-hidden mb-6 fade-up"
          style={{ borderColor: "rgba(196,27,44,0.2)" }}
        >
          <div className="grid lg:grid-cols-2">
            <div className="p-8 lg:p-10 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span
                    className="text-xs font-semibold px-3 py-1 rounded-full"
                    style={{
                      backgroundColor: "rgba(196,27,44,0.12)",
                      color: "#e85a6a",
                      border: "1px solid rgba(196,27,44,0.25)",
                      fontFamily: "'Inter', sans-serif",
                    }}
                  >
                    Destaque
                  </span>
                  <span
                    className="text-xs"
                    style={{ color: "rgba(242,242,242,0.4)", fontFamily: "'Inter', sans-serif" }}
                  >
                    {projects[0].category}
                  </span>
                </div>

                <h3
                  className="text-2xl lg:text-3xl font-bold text-white mb-4"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {projects[0].title}
                </h3>
                <p
                  className="text-sm leading-relaxed mb-6"
                  style={{ color: "rgba(242,242,242,0.6)", fontFamily: "'Inter', sans-serif" }}
                >
                  {projects[0].description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {projects[0].tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 rounded-full"
                      style={{
                        backgroundColor: "rgba(255,255,255,0.05)",
                        color: "rgba(242,242,242,0.6)",
                        border: "1px solid rgba(255,255,255,0.08)",
                        fontFamily: "'Inter', sans-serif",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-2 gap-4">
                {projects[0].metrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="p-4 rounded-lg"
                    style={{ backgroundColor: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }}
                  >
                    <div
                      className="text-2xl font-bold mb-1"
                      style={{ color: "#C41B2C", fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      {metric.value}
                    </div>
                    <div
                      className="text-xs"
                      style={{ color: "rgba(242,242,242,0.5)", fontFamily: "'Inter', sans-serif" }}
                    >
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual */}
            <div
              className="relative overflow-hidden"
              style={{ minHeight: "300px" }}
            >
              <img
                src={PORTFOLIO_MOCKUP}
                alt="Portfolio mockup"
                className="w-full h-full object-cover"
                style={{ opacity: 0.85 }}
              />
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(to right, rgba(22,22,26,0.8) 0%, transparent 50%)",
                }}
              />
            </div>
          </div>
        </div>

        {/* Other projects */}
        <div className="grid lg:grid-cols-2 gap-6">
          {projects.slice(1).map((project, i) => (
            <div
              key={project.id}
              className={`nv-card p-8 fade-up delay-${(i + 1) * 100}`}
            >
              <div className="flex items-start justify-between mb-4">
                <span
                  className="text-xs"
                  style={{ color: "rgba(242,242,242,0.4)", fontFamily: "'Inter', sans-serif" }}
                >
                  {project.category}
                </span>
                <span
                  className="text-4xl font-bold opacity-10"
                  style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#F2F2F2" }}
                >
                  {project.id}
                </span>
              </div>

              <h3
                className="text-xl font-bold text-white mb-3"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                {project.title}
              </h3>
              <p
                className="text-sm leading-relaxed mb-5"
                style={{ color: "rgba(242,242,242,0.6)", fontFamily: "'Inter', sans-serif" }}
              >
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 rounded-full"
                    style={{
                      backgroundColor: "rgba(255,255,255,0.05)",
                      color: "rgba(242,242,242,0.6)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      fontFamily: "'Inter', sans-serif",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-2 gap-3">
                {project.metrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="p-3 rounded-lg"
                    style={{ backgroundColor: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }}
                  >
                    <div
                      className="text-lg font-bold mb-0.5"
                      style={{ color: project.color, fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      {metric.value}
                    </div>
                    <div
                      className="text-xs"
                      style={{ color: "rgba(242,242,242,0.45)", fontFamily: "'Inter', sans-serif" }}
                    >
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12 fade-up">
          <p
            className="text-sm mb-4"
            style={{ color: "rgba(242,242,242,0.5)", fontFamily: "'Inter', sans-serif" }}
          >
            Quer ver seu projeto aqui?
          </p>
          <button
            onClick={() => document.querySelector("#contato")?.scrollIntoView({ behavior: "smooth" })}
            className="nv-btn-outline"
          >
            Vamos conversar
            <ArrowUpRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
