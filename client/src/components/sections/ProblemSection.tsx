/*
 * NUVCORE — Problem Section
 * Apresenta as dores do mercado que NUVCORE resolve
 */

import { AlertCircle, TrendingDown, Users, Zap } from "lucide-react";

const problems = [
  {
    icon: AlertCircle,
    title: "Sites sem Estratégia",
    description: "Muitas empresas criam sites bonitos, mas sem propósito claro. Resultado: visitantes, mas sem conversão.",
    color: "#C41B2C",
  },
  {
    icon: TrendingDown,
    title: "Presença Digital Fraca",
    description: "Falta de estrutura digital coerente. Marca desalinhada, mensagem confusa, sem diferencial claro.",
    color: "#2563EB",
  },
  {
    icon: Users,
    title: "Perda de Oportunidades",
    description: "Potenciais clientes visitam, mas não entendem sua proposta. Saem sem tomar ação.",
    color: "#C41B2C",
  },
  {
    icon: Zap,
    title: "Performance Ignorada",
    description: "Sites lentos, mal otimizados. Prejudicam a experiência do usuário e o SEO.",
    color: "#2563EB",
  },
];

export default function ProblemSection() {
  return (
    <section
      className="py-20 md:py-32 relative overflow-hidden"
      style={{ backgroundColor: "#0F0F12" }}
    >
      <div className="container max-w-6xl">
        {/* Header */}
        <div className="mb-16 text-center fade-up">
          <span
            className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-6"
            style={{
              backgroundColor: "rgba(196, 27, 44, 0.1)",
              color: "#C41B2C",
              fontFamily: "'Inter', sans-serif",
            }}
          >
            O Problema
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{
              color: "#F2F2F2",
              fontFamily: "'Space Grotesk', sans-serif",
              lineHeight: "1.2",
            }}
          >
            A maioria das empresas <span style={{ color: "#C41B2C" }}>não tem</span> uma estratégia digital real
          </h2>
          <p
            className="text-lg max-w-2xl mx-auto"
            style={{
              color: "rgba(242, 242, 242, 0.7)",
              fontFamily: "'Inter', sans-serif",
            }}
          >
            Elas constroem presença digital sem propósito. Resultado: investimento perdido e oportunidades desperdiçadas.
          </p>
        </div>

        {/* Problems Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <div
                key={index}
                className="p-8 rounded-lg border transition-all duration-300 hover:border-opacity-100 fade-up group"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.03)",
                  borderColor: "rgba(255, 255, 255, 0.1)",
                  transitionDelay: `${index * 100}ms`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.08)";
                  e.currentTarget.style.borderColor = problem.color;
                  e.currentTarget.style.transform = "translateY(-4px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.03)";
                  e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.1)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <Icon size={32} style={{ color: problem.color, marginBottom: "16px" }} />
                <h3
                  className="text-xl font-bold mb-3"
                  style={{
                    color: "#F2F2F2",
                    fontFamily: "'Space Grotesk', sans-serif",
                  }}
                >
                  {problem.title}
                </h3>
                <p
                  style={{
                    color: "rgba(242, 242, 242, 0.6)",
                    fontFamily: "'Inter', sans-serif",
                    lineHeight: "1.6",
                  }}
                >
                  {problem.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
