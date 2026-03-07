/*
 * NUVCORE — Authority Section
 * Demonstra credibilidade e autoridade no mercado
 */

import { Award, Users, TrendingUp, Zap } from "lucide-react";

const stats = [
  {
    icon: TrendingUp,
    number: "150+",
    label: "Projetos Entregues",
    description: "Websites estratégicos que geraram resultados reais",
  },
  {
    icon: Users,
    number: "80+",
    label: "Clientes Satisfeitos",
    description: "De startups a empresas consolidadas",
  },
  {
    icon: Zap,
    number: "3.5x",
    label: "Aumento Médio de Conversão",
    description: "Resultado após implementação NUVCORE",
  },
  {
    icon: Award,
    number: "100%",
    label: "Taxa de Recomendação",
    description: "Clientes que recomendam NUVCORE",
  },
];

const testimonials = [
  {
    name: "Carlos Silva",
    role: "CEO, TechStartup",
    quote: "NUVCORE transformou nosso site em um ativo de negócio real. Conversões aumentaram 4x em 3 meses.",
  },
  {
    name: "Marina Costa",
    role: "Founder, Digital Agency",
    quote: "A estratégia FRAMEWORK™ é diferente de tudo que vi. Resultado imediato e mensurável.",
  },
  {
    name: "Roberto Mendes",
    role: "Director, E-commerce",
    quote: "Finalmente uma agência que entende que design sem estratégia é apenas arte.",
  },
];

export default function AuthoritySection() {
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
            Autoridade & Credibilidade
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{
              color: "#F2F2F2",
              fontFamily: "'Space Grotesk', sans-serif",
              lineHeight: "1.2",
            }}
          >
            Números que Falam por Si
          </h2>
          <p
            className="text-lg max-w-2xl mx-auto"
            style={{
              color: "rgba(242, 242, 242, 0.7)",
              fontFamily: "'Inter', sans-serif",
            }}
          >
            Resultados reais de projetos reais. NUVCORE não promete, entrega.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="p-8 rounded-lg border text-center transition-all duration-300 fade-up group hover:border-opacity-100"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.03)",
                  borderColor: "rgba(255, 255, 255, 0.1)",
                  transitionDelay: `${index * 100}ms`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.08)";
                  e.currentTarget.style.borderColor = "#C41B2C";
                  e.currentTarget.style.transform = "translateY(-8px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.03)";
                  e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.1)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <Icon
                  size={32}
                  style={{
                    color: "#C41B2C",
                    margin: "0 auto 16px",
                  }}
                />
                <div
                  className="text-4xl font-bold mb-2"
                  style={{
                    color: "#C41B2C",
                    fontFamily: "'Space Grotesk', sans-serif",
                  }}
                >
                  {stat.number}
                </div>
                <div
                  className="font-semibold mb-2"
                  style={{
                    color: "#F2F2F2",
                    fontFamily: "'Space Grotesk', sans-serif",
                  }}
                >
                  {stat.label}
                </div>
                <p
                  style={{
                    color: "rgba(242, 242, 242, 0.5)",
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "14px",
                  }}
                >
                  {stat.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Testimonials */}
        <div className="mb-20">
          <h3
            className="text-2xl font-bold text-center mb-12"
            style={{
              color: "#F2F2F2",
              fontFamily: "'Space Grotesk', sans-serif",
            }}
          >
            O Que Nossos Clientes Dizem
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="p-8 rounded-lg border fade-up"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.03)",
                  borderColor: "rgba(255, 255, 255, 0.1)",
                  transitionDelay: `${index * 100}ms`,
                }}
              >
                <div className="mb-4 flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} style={{ color: "#C41B2C", fontSize: "16px" }}>
                      ★
                    </span>
                  ))}
                </div>
                <p
                  className="mb-6 italic"
                  style={{
                    color: "rgba(242, 242, 242, 0.7)",
                    fontFamily: "'Inter', sans-serif",
                    lineHeight: "1.8",
                  }}
                >
                  "{testimonial.quote}"
                </p>
                <div>
                  <p
                    className="font-semibold"
                    style={{
                      color: "#F2F2F2",
                      fontFamily: "'Space Grotesk', sans-serif",
                    }}
                  >
                    {testimonial.name}
                  </p>
                  <p
                    style={{
                      color: "rgba(242, 242, 242, 0.5)",
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "14px",
                    }}
                  >
                    {testimonial.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center fade-up">
          <p
            className="text-lg mb-6"
            style={{
              color: "rgba(242, 242, 242, 0.7)",
              fontFamily: "'Inter', sans-serif",
            }}
          >
            Pronto para fazer parte dessa história de sucesso?
          </p>
          <button
            className="px-8 py-4 rounded-lg font-semibold transition-all duration-300"
            style={{
              backgroundColor: "#C41B2C",
              color: "#F2F2F2",
              fontFamily: "'Inter', sans-serif",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#A01624";
              e.currentTarget.style.transform = "scale(1.05)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#C41B2C";
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            Começar Projeto
          </button>
        </div>
      </div>
    </section>
  );
}
