/*
 * NUVCORE — Process Section
 * Design: "Precision Dark" — numbered steps, horizontal flow
 * Steps: Discovery, Strategy, Development, Delivery
 */

import { Search, Map, Code, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Descoberta",
    description:
      "Mergulho fundo no seu negócio. Entendo o mercado, o público, os concorrentes e os objetivos reais antes de escrever uma linha de código.",
    details: ["Briefing estratégico", "Análise de mercado", "Definição de objetivos", "Mapeamento de público"],
  },
  {
    number: "02",
    icon: Map,
    title: "Estratégia",
    description:
      "Com base no diagnóstico, defino a arquitetura ideal: estrutura de páginas, jornada do usuário, hierarquia de informação e estratégia de conversão.",
    details: ["Arquitetura de informação", "Wireframes", "Estratégia de conteúdo", "Definição de KPIs"],
  },
  {
    number: "03",
    icon: Code,
    title: "Desenvolvimento",
    description:
      "Construção com código limpo, performance otimizada e atenção obsessiva aos detalhes. Cada componente é pensado para funcionar e escalar.",
    details: ["Design system", "Desenvolvimento React", "Otimização de performance", "Testes de qualidade"],
  },
  {
    number: "04",
    icon: Rocket,
    title: "Entrega",
    description:
      "Lançamento estruturado, com treinamento, documentação e suporte pós-entrega. Não entrego e desapareço — acompanho os primeiros resultados.",
    details: ["Deploy e configuração", "Treinamento", "Documentação", "Suporte pós-lançamento"],
  },
];

export default function ProcessSection() {
  return (
    <section
      id="processo"
      className="nv-section"
      style={{ backgroundColor: "#0F0F12" }}
    >
      <div className="container">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6 fade-up">
          <span className="nv-divider" />
          <span className="nv-label">Processo de Trabalho</span>
        </div>
        <div className="grid lg:grid-cols-2 gap-8 items-end mb-16">
          <h2
            className="text-4xl lg:text-5xl font-bold text-white leading-tight fade-up delay-100"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Como eu trabalho,{" "}
            <span style={{ color: "#2563EB" }}>passo a passo</span>
          </h2>
          <p
            className="text-base leading-relaxed fade-up delay-200"
            style={{
              color: "rgba(242,242,242,0.6)",
              fontFamily: "'Inter', sans-serif",
            }}
          >
            Meu processo é transparente e colaborativo. Você sabe exatamente o que está acontecendo em cada etapa do projeto.
          </p>
        </div>

        {/* Steps */}
        <div className="grid lg:grid-cols-4 gap-6">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className={`relative fade-up delay-${(i + 1) * 100}`}
              >
                {/* Connector line */}
                {i < steps.length - 1 && (
                  <div
                    className="hidden lg:block absolute top-10 left-full w-full h-px z-0"
                    style={{
                      background: "linear-gradient(to right, rgba(196,27,44,0.4), rgba(196,27,44,0.1))",
                      width: "calc(100% - 3rem)",
                      left: "calc(100% - 1.5rem)",
                    }}
                  />
                )}

                <div
                  className="nv-card p-6 h-full relative z-10"
                >
                  {/* Number */}
                  <div className="flex items-center gap-3 mb-5">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center"
                      style={{ backgroundColor: "rgba(196,27,44,0.12)", border: "1px solid rgba(196,27,44,0.25)" }}
                    >
                      <Icon size={18} style={{ color: "#C41B2C" }} />
                    </div>
                    <span
                      className="text-sm font-bold"
                      style={{ color: "#C41B2C", fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      {step.number}
                    </span>
                  </div>

                  <h3
                    className="text-lg font-bold text-white mb-3"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed mb-5"
                    style={{ color: "rgba(242,242,242,0.6)", fontFamily: "'Inter', sans-serif" }}
                  >
                    {step.description}
                  </p>

                  {/* Details */}
                  <ul className="space-y-2">
                    {step.details.map((detail) => (
                      <li
                        key={detail}
                        className="flex items-center gap-2 text-xs"
                        style={{ color: "rgba(242,242,242,0.5)", fontFamily: "'Inter', sans-serif" }}
                      >
                        <span
                          className="w-1 h-1 rounded-full flex-shrink-0"
                          style={{ backgroundColor: "#C41B2C" }}
                        />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
