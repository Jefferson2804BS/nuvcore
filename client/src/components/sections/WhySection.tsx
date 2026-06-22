/*
 * NUVCORE — Why Choose Section
 * Design: "Precision Dark" — comparison/differentials layout
 * Content: Strategic thinking, personalized approach, pricing, technical excellence
 */

import { Brain, User, DollarSign, Shield } from "lucide-react";

const differentials = [
  {
    icon: Brain,
    title: "Pensamento Estratégico",
    description:
      "Eu não executo tarefas — eu resolvo problemas. Cada projeto começa com um diagnóstico profundo do negócio, não com um template pronto.",
    highlight: "Estratégia antes de código",
    color: "#C41B2C",
  },
  {
    icon: User,
    title: "Abordagem Personalizada",
    description:
      "Trabalho diretamente com você, sem equipes de intermediários. Isso significa comunicação direta, decisões mais rápidas e resultado mais alinhado.",
    highlight: "Atendimento direto e próximo",
    color: "#2563EB",
  },
  {
    icon: DollarSign,
    title: "Preço Acessível",
    description:
      "Entrego qualidade de agência premium com a agilidade e o custo de um especialista independente. Sem overhead, sem burocracia.",
    highlight: "Qualidade premium, custo justo",
    color: "#C41B2C",
  },
  {
    icon: Shield,
    title: "Excelência Técnica",
    description:
      "Código limpo, performance real, acessibilidade e SEO técnico integrados desde o início. Não entrego sites que parecem bons — entrego sites que funcionam.",
    highlight: "Performance e qualidade comprovadas",
    color: "#2563EB",
  },
];

const comparisons = [
  { item: "Comunicação direta com o responsável", nuvcore: true, agency: false, freelancer: "parcial" },
  { item: "Estratégia antes do desenvolvimento", nuvcore: true, agency: "parcial", freelancer: false },
  { item: "Prazo ágil e previsível", nuvcore: true, agency: false, freelancer: "parcial" },
  { item: "Código limpo e documentado", nuvcore: true, agency: "parcial", freelancer: "parcial" },
  { item: "Suporte pós-entrega", nuvcore: true, agency: true, freelancer: false },
  { item: "Preço acessível", nuvcore: true, agency: false, freelancer: true },
];

function StatusIcon({ value }: { value: boolean | string }) {
  if (value === true) return <span style={{ color: "#4ade80" }}>✓</span>;
  if (value === false) return <span style={{ color: "rgba(242,242,242,0.25)" }}>✗</span>;
  return <span style={{ color: "#fbbf24" }}>~</span>;
}

export default function WhySection() {
  return (
    <section
      id="diferenciais"
      className="nv-section"
      style={{ backgroundColor: "#0F0F12" }}
    >
      <div className="container">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6 fade-up">
          <span className="nv-divider" />
          <span className="nv-label">Por que a NUVCORE</span>
        </div>
        <div className="grid lg:grid-cols-2 gap-8 items-end mb-16">
          <h2
            className="text-4xl lg:text-5xl font-bold text-white leading-tight fade-up delay-100"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            O que me diferencia{" "}
            <span style={{ color: "#C41B2C" }}>de todos os outros</span>
          </h2>
          <p
            className="text-base leading-relaxed fade-up delay-200"
            style={{
              color: "rgba(242,242,242,0.6)",
              fontFamily: "'Inter', sans-serif",
            }}
          >
            Existem muitas opções no mercado. Aqui está por que clientes que valorizam estratégia, qualidade e resultado escolhem a NUVCORE.
          </p>
        </div>

        {/* Differentials Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {differentials.map((diff, i) => {
            const Icon = diff.icon;
            return (
              <div
                key={diff.title}
                className={`nv-card p-6 fade-up delay-${(i + 1) * 100}`}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center mb-5"
                  style={{ backgroundColor: `${diff.color}15`, border: `1px solid ${diff.color}28` }}
                >
                  <Icon size={20} style={{ color: diff.color }} />
                </div>
                <h3
                  className="text-lg font-bold text-white mb-3"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {diff.title}
                </h3>
                <p
                  className="text-sm leading-relaxed mb-4"
                  style={{ color: "rgba(242,242,242,0.6)", fontFamily: "'Inter', sans-serif" }}
                >
                  {diff.description}
                </p>
                <div
                  className="text-xs font-semibold"
                  style={{ color: diff.color, fontFamily: "'Inter', sans-serif" }}
                >
                  → {diff.highlight}
                </div>
              </div>
            );
          })}
        </div>

        {/* Comparison Table */}
        <div className="fade-up">
          <h3
            className="text-2xl font-bold text-white mb-8 text-center"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            NUVCORE vs. Alternativas
          </h3>
          <div
            className="rounded-2xl overflow-hidden"
            style={{ border: "1px solid rgba(255,255,255,0.07)" }}
          >
            {/* Table header */}
            <div
              className="grid grid-cols-4 text-center py-4 px-6"
              style={{ backgroundColor: "#16161A", borderBottom: "1px solid rgba(255,255,255,0.07)" }}
            >
              <div
                className="text-left text-sm font-semibold"
                style={{ color: "rgba(242,242,242,0.5)", fontFamily: "'Inter', sans-serif" }}
              >
                Critério
              </div>
              <div
                className="text-sm font-bold"
                style={{ color: "#C41B2C", fontFamily: "'Space Grotesk', sans-serif" }}
              >
                NUVCORE
              </div>
              <div
                className="text-sm font-semibold"
                style={{ color: "rgba(242,242,242,0.4)", fontFamily: "'Inter', sans-serif" }}
              >
                Agência
              </div>
              <div
                className="text-sm font-semibold"
                style={{ color: "rgba(242,242,242,0.4)", fontFamily: "'Inter', sans-serif" }}
              >
                Freelancer
              </div>
            </div>

            {/* Table rows */}
            {comparisons.map((row, i) => (
              <div
                key={row.item}
                className="grid grid-cols-4 text-center py-4 px-6"
                style={{
                  backgroundColor: i % 2 === 0 ? "rgba(255,255,255,0.02)" : "transparent",
                  borderBottom: i < comparisons.length - 1 ? "1px solid rgba(255,255,255,0.04)" : "none",
                }}
              >
                <div
                  className="text-left text-sm"
                  style={{ color: "rgba(242,242,242,0.7)", fontFamily: "'Inter', sans-serif" }}
                >
                  {row.item}
                </div>
                <div className="text-lg font-bold">
                  <StatusIcon value={row.nuvcore} />
                </div>
                <div className="text-lg">
                  <StatusIcon value={row.agency} />
                </div>
                <div className="text-lg">
                  <StatusIcon value={row.freelancer} />
                </div>
              </div>
            ))}
          </div>
          <p
            className="text-xs text-center mt-3"
            style={{ color: "rgba(242,242,242,0.3)", fontFamily: "'Inter', sans-serif" }}
          >
            ~ = depende do profissional/agência
          </p>
        </div>
      </div>
    </section>
  );
}
