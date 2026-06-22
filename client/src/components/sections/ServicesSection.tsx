/*
 * NUVCORE — Services Section
 * Design: "Precision Dark" — structured grid, icon cards, hover effects
 * Services: Web Dev, Landing Pages, Digital Structure, Optimization
 */

import { Code2, Layers, BarChart3, Zap } from "lucide-react";

const SERVICES_BG = "https://private-us-east-1.manuscdn.com/sessionFile/3ZwnxAvCGCsvjvmdSPvTyk/sandbox/qRCAK89su30SRUWxSWtIm7-img-3_1772158107000_na1fn_bnV2Y29yZS1zZXJ2aWNlcy1iZw.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvM1p3bnhBdkNHQ3N2anZtZFNQdlR5ay9zYW5kYm94L3FSQ0FLODlzdTMwU1JVV3hTV3RJbTctaW1nLTNfMTc3MjE1ODEwNzAwMF9uYTFmbl9iblYyWTI5eVpTMXpaWEoyYVdObGN5MWlady5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=viOyEt4gHJlGkO3ePRS-Z6eqeXcy0BZTRMtofPnNf80EmJB1i047WN5EA~Lx1HRt6-xSvWZ97mtnQBSIR~Wq3XKLRSigBoSUKAgFWKZuWta2pFVm46sHg-L-l4RaotAFOgaoDkRVZIsVTb2So8utgQsUE23nr1B4J0Zf1YBAXH8p9TGKLc4yvGNzcPqgB6DSPThtqaBzwHmwrsbumvNCc5tV1CYXav6GX4BYR02mHZM8wCCWkQHvYqbYwA8GySJhkt-Ni75kP66gtTVbdims310PJaAFoPUikhYsx689fherFe4jnaZVAPZyfkiXiIPXtFK6HF3Jyfh~DtgpUf5k4w__";

const services = [
  {
    icon: Code2,
    number: "01",
    title: "Desenvolvimento Web & Design",
    description:
      "Eu desenvolvo sites institucionais e plataformas digitais com foco em performance, posicionamento e conversão. Cada linha de código tem um propósito.",
    highlights: ["React & Next.js", "Performance otimizada", "SEO técnico", "Responsivo"],
    accent: "#C41B2C",
  },
  {
    icon: Layers,
    number: "02",
    title: "Landing Pages de Alta Conversão",
    description:
      "Páginas construídas para converter visitantes em clientes. Estrutura de copywriting, hierarquia visual e CTA estratégicos integrados ao design.",
    highlights: ["Copywriting estratégico", "A/B ready", "Carregamento rápido", "Integração com CRM"],
    accent: "#2563EB",
  },
  {
    icon: BarChart3,
    number: "03",
    title: "Planejamento de Estrutura Digital",
    description:
      "Antes de construir, eu planejo. Análise de mercado, arquitetura de informação e definição de jornada do usuário para garantir que o projeto nasce certo.",
    highlights: ["Arquitetura de informação", "Jornada do usuário", "Análise competitiva", "Wireframes estratégicos"],
    accent: "#C41B2C",
  },
  {
    icon: Zap,
    number: "04",
    title: "Otimização de Sites Existentes",
    description:
      "Diagnóstico técnico e estratégico do seu site atual. Identifico gargalos de performance, problemas de conversão e oportunidades de melhoria.",
    highlights: ["Auditoria técnica", "Core Web Vitals", "Otimização de conversão", "Relatório detalhado"],
    accent: "#2563EB",
  },
];

export default function ServicesSection() {
  return (
    <section
      id="servicos"
      className="nv-section relative overflow-hidden"
      style={{ backgroundColor: "#16161A" }}
    >
      {/* Background texture */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${SERVICES_BG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.06,
        }}
      />

      <div className="container relative z-10">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6 fade-up">
          <span className="nv-divider" />
          <span className="nv-label">Serviços</span>
        </div>
        <div className="grid lg:grid-cols-2 gap-8 items-end mb-16">
          <h2
            className="text-4xl lg:text-5xl font-bold text-white leading-tight fade-up delay-100"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            O que eu construo{" "}
            <span style={{ color: "#C41B2C" }}>para você</span>
          </h2>
          <p
            className="text-base leading-relaxed fade-up delay-200"
            style={{
              color: "rgba(242,242,242,0.6)",
              fontFamily: "'Inter', sans-serif",
            }}
          >
            Cada serviço foi desenhado para resolver um problema real de negócio. Não ofereço pacotes genéricos — ofereço soluções construídas para o seu contexto específico.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <div
                key={service.number}
                className={`nv-card p-8 group fade-up delay-${(i + 1) * 100}`}
              >
                {/* Number + Icon */}
                <div className="flex items-start justify-between mb-6">
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: `${service.accent}18`, border: `1px solid ${service.accent}30` }}
                  >
                    <Icon size={22} style={{ color: service.accent }} />
                  </div>
                  <span
                    className="text-5xl font-bold opacity-10"
                    style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#F2F2F2" }}
                  >
                    {service.number}
                  </span>
                </div>

                {/* Content */}
                <h3
                  className="text-xl font-bold text-white mb-3"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {service.title}
                </h3>
                <p
                  className="text-sm leading-relaxed mb-6"
                  style={{ color: "rgba(242,242,242,0.6)", fontFamily: "'Inter', sans-serif" }}
                >
                  {service.description}
                </p>

                {/* Highlights */}
                <div className="flex flex-wrap gap-2">
                  {service.highlights.map((h) => (
                    <span
                      key={h}
                      className="text-xs px-3 py-1 rounded-full"
                      style={{
                        backgroundColor: `${service.accent}12`,
                        color: service.accent === "#C41B2C" ? "#e85a6a" : "#60a5fa",
                        border: `1px solid ${service.accent}25`,
                        fontFamily: "'Inter', sans-serif",
                        fontWeight: 500,
                      }}
                    >
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
