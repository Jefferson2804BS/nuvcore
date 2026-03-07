/*
 * NUVCORE — Solution Section
 * Apresenta a solução NUVCORE para os problemas do mercado
 */

import { CheckCircle2, Lightbulb, Zap, TrendingUp } from "lucide-react";

const solutions = [
  {
    icon: Lightbulb,
    title: "Estratégia Primeiro",
    description: "Antes de qualquer código, definimos sua estratégia digital. Qual é seu diferencial? Quem é seu cliente ideal? Como você cresce?",
  },
  {
    icon: CheckCircle2,
    title: "Estrutura Coerente",
    description: "Criamos uma presença digital alinhada. Marca, mensagem, design e tecnologia trabalham juntos para um objetivo claro.",
  },
  {
    icon: Zap,
    title: "Performance & Conversão",
    description: "Sites rápidos, otimizados e construídos para converter. Cada elemento tem um propósito. Cada clique leva a um resultado.",
  },
  {
    icon: TrendingUp,
    title: "Crescimento Sustentável",
    description: "Não entregamos um site e desaparecemos. Acompanhamos, otimizamos e evoluímos sua presença digital continuamente.",
  },
];

export default function SolutionSection() {
  return (
    <section
      className="py-20 md:py-32 relative overflow-hidden"
      style={{ backgroundColor: "#0F0F12" }}
    >
      <div className="container max-w-6xl">
        {/* Header */}
        <div className="mb-16 fade-up">
          <span
            className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-6"
            style={{
              backgroundColor: "rgba(37, 99, 235, 0.1)",
              color: "#2563EB",
              fontFamily: "'Inter', sans-serif",
            }}
          >
            A Solução
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{
              color: "#F2F2F2",
              fontFamily: "'Space Grotesk', sans-serif",
              lineHeight: "1.2",
            }}
          >
            NUVCORE: <span style={{ color: "#C41B2C" }}>Estratégia Digital</span> que Funciona
          </h2>
          <p
            className="text-lg max-w-2xl"
            style={{
              color: "rgba(242, 242, 242, 0.7)",
              fontFamily: "'Inter', sans-serif",
            }}
          >
            Nós construímos presença digital com propósito. Cada projeto é uma estrutura estratégica que posiciona sua marca e gera resultados reais.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <div
                key={index}
                className="fade-up group"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex gap-4">
                  <div
                    className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-300"
                    style={{
                      backgroundColor: "rgba(196, 27, 44, 0.1)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "rgba(196, 27, 44, 0.2)";
                      e.currentTarget.style.transform = "scale(1.1)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "rgba(196, 27, 44, 0.1)";
                      e.currentTarget.style.transform = "scale(1)";
                    }}
                  >
                    <Icon size={24} style={{ color: "#C41B2C" }} />
                  </div>
                  <div>
                    <h3
                      className="text-xl font-bold mb-2"
                      style={{
                        color: "#F2F2F2",
                        fontFamily: "'Space Grotesk', sans-serif",
                      }}
                    >
                      {solution.title}
                    </h3>
                    <p
                      style={{
                        color: "rgba(242, 242, 242, 0.6)",
                        fontFamily: "'Inter', sans-serif",
                        lineHeight: "1.6",
                      }}
                    >
                      {solution.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>


      </div>
    </section>
  );
}
