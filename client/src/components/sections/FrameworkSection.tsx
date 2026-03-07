/*
 * NUVCORE — Framework Section
 * Apresenta o NUVCORE FRAMEWORK™ com 5 pilares estratégicos
 */

import { Database, Layout, Palette, Zap, TrendingUp } from "lucide-react";
import { useState } from "react";

const frameworkPillars = [
  {
    icon: Database,
    number: "01",
    title: "NUVCORE Identity Core™",
    description: "Definição profunda da identidade da marca. Quem você é? Qual é seu diferencial? Como você se posiciona no mercado?",
    color: "#C41B2C",
  },
  {
    icon: Layout,
    number: "02",
    title: "NUVCORE Structure System™",
    description: "Arquitetura digital estratégica. Informação organizada, navegação intuitiva, jornada do usuário otimizada.",
    color: "#2563EB",
  },
  {
    icon: Palette,
    number: "03",
    title: "NUVCORE Visual Layer™",
    description: "Design que comunica. Tipografia estratégica, cores com propósito, composição visual que guia a atenção.",
    color: "#C41B2C",
  },
  {
    icon: Zap,
    number: "04",
    title: "NUVCORE Interaction Engine™",
    description: "Experiência interativa. Animações elegantes, transições suaves, feedback claro em cada ação do usuário.",
    color: "#2563EB",
  },
  {
    icon: TrendingUp,
    number: "05",
    title: "NUVCORE Growth Layer™",
    description: "Otimização contínua. Analytics, testes A/B, iteração baseada em dados para crescimento sustentável.",
    color: "#C41B2C",
  },
];

export default function FrameworkSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section
      className="py-20 md:py-32 relative overflow-hidden"
      style={{ backgroundColor: "#0F0F12" }}
    >
      <div className="container max-w-6xl">
        {/* Header */}
        <div className="mb-20 text-center fade-up">
          <span
            className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-6"
            style={{
              backgroundColor: "rgba(196, 27, 44, 0.1)",
              color: "#C41B2C",
              fontFamily: "'Inter', sans-serif",
            }}
          >
            Nossa Metodologia
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{
              color: "#F2F2F2",
              fontFamily: "'Space Grotesk', sans-serif",
              lineHeight: "1.2",
            }}
          >
            NUVCORE FRAMEWORK™
          </h2>
          <p
            className="text-lg max-w-2xl mx-auto"
            style={{
              color: "rgba(242, 242, 242, 0.7)",
              fontFamily: "'Inter', sans-serif",
            }}
          >
            5 pilares estratégicos que transformam sua presença digital em um ativo de negócio real.
          </p>
        </div>

        {/* Framework Pillars */}
        <div className="space-y-6">
          {frameworkPillars.map((pillar, index) => {
            const Icon = pillar.icon;
            const isHovered = hoveredIndex === index;

            return (
              <div
                key={index}
                className="fade-up group cursor-pointer transition-all duration-300"
                style={{
                  transitionDelay: `${index * 80}ms`,
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div
                  className="p-8 rounded-lg border transition-all duration-300"
                  style={{
                    backgroundColor: isHovered ? "rgba(255, 255, 255, 0.08)" : "rgba(255, 255, 255, 0.03)",
                    borderColor: isHovered ? pillar.color : "rgba(255, 255, 255, 0.1)",
                    transform: isHovered ? "translateX(8px)" : "translateX(0)",
                  }}
                >
                  <div className="flex gap-6 items-start">
                    {/* Icon */}
                    <div
                      className="flex-shrink-0 w-16 h-16 rounded-lg flex items-center justify-center transition-all duration-300"
                      style={{
                        backgroundColor: isHovered ? `${pillar.color}20` : "rgba(255, 255, 255, 0.05)",
                      }}
                    >
                      <Icon size={32} style={{ color: pillar.color }} />
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-baseline gap-3 mb-2">
                        <span
                          style={{
                            color: pillar.color,
                            fontSize: "24px",
                            fontWeight: "bold",
                            fontFamily: "'Space Grotesk', sans-serif",
                          }}
                        >
                          {pillar.number}
                        </span>
                        <h3
                          className="text-2xl font-bold"
                          style={{
                            color: "#F2F2F2",
                            fontFamily: "'Space Grotesk', sans-serif",
                          }}
                        >
                          {pillar.title}
                        </h3>
                      </div>
                      <p
                        style={{
                          color: "rgba(242, 242, 242, 0.6)",
                          fontFamily: "'Inter', sans-serif",
                          lineHeight: "1.6",
                          fontSize: "16px",
                        }}
                      >
                        {pillar.description}
                      </p>
                    </div>

                    {/* Arrow */}
                    <div
                      className="flex-shrink-0 transition-all duration-300"
                      style={{
                        transform: isHovered ? "translateX(4px)" : "translateX(0)",
                        color: pillar.color,
                      }}
                    >
                      →
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center fade-up">
          <p
            className="text-lg mb-6"
            style={{
              color: "rgba(242, 242, 242, 0.7)",
              fontFamily: "'Inter', sans-serif",
            }}
          >
            Quer ver o NUVCORE FRAMEWORK™ em ação?
          </p>
          <a
            href="https://wa.me/5511912830541?text=Ol%C3%A1!%20Encontrei%20o%20site%20da%20NUVCORE%20e%20gostaria%20de%20conversar%20com%20um%20especialista%20sobre%20o%20desenvolvimento%20de%20um%20projeto%20para%20minha%20empresa."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 rounded-lg font-semibold transition-all duration-300"
            style={{
              backgroundColor: "transparent",
              color: "#C41B2C",
              border: "2px solid #C41B2C",
              fontFamily: "'Inter', sans-serif",
              textDecoration: "none",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#C41B2C";
              e.currentTarget.style.color = "#F2F2F2";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.color = "#C41B2C";
            }}
          >
            Falar com Especialista
          </a>
        </div>
      </div>
    </section>
  );
}
