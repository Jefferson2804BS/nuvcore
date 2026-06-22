/*
 * NUVCORE — Founder Section
 * Apresenta Jefferson Basílio Soares e sua visão
 */

import { Lightbulb, Target, Users } from "lucide-react";

export default function FounderSection() {
  return (
    <section
      className="py-20 md:py-32 relative overflow-hidden"
      style={{ backgroundColor: "#0F0F12" }}
    >
      <div className="container max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left: Founder Info */}
          <div className="fade-left">
            <span
              className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-6"
              style={{
                backgroundColor: "rgba(37, 99, 235, 0.1)",
                color: "#2563EB",
                fontFamily: "'Inter', sans-serif",
              }}
            >
              Sobre o Fundador
            </span>

            <h2
              className="text-4xl md:text-5xl font-bold mb-6"
              style={{
                color: "#F2F2F2",
                fontFamily: "'Space Grotesk', sans-serif",
                lineHeight: "1.2",
              }}
            >
              Jefferson Basílio Soares
            </h2>

            <p
              className="text-lg mb-6"
              style={{
                color: "rgba(242, 242, 242, 0.7)",
                fontFamily: "'Inter', sans-serif",
              }}
            >
              Founder & Digital Strategy Architect
            </p>

            <p
              className="text-base mb-8"
              style={{
                color: "rgba(242, 242, 242, 0.6)",
                fontFamily: "'Inter', sans-serif",
                lineHeight: "1.8",
              }}
            >
              Jefferson criou a NUVCORE com uma visão clara: ajudar empresas a construir presença digital estratégica. Ele percebeu que a maioria das agências entrega sites bonitos, mas sem propósito real.
            </p>

            <p
              className="text-base mb-8"
              style={{
                color: "rgba(242, 242, 242, 0.6)",
                fontFamily: "'Inter', sans-serif",
                lineHeight: "1.8",
              }}
            >
              Seu diferencial: combinar design estratégico com desenvolvimento técnico de ponta. Cada projeto NUVCORE é uma estrutura digital pensada para posicionar a marca e gerar resultados reais.
            </p>

            <div className="space-y-4">
              <div className="flex gap-4 items-start">
                <Lightbulb size={24} style={{ color: "#C41B2C", flexShrink: 0 }} />
                <div>
                  <h4
                    className="font-bold mb-1"
                    style={{
                      color: "#F2F2F2",
                      fontFamily: "'Space Grotesk', sans-serif",
                    }}
                  >
                    Estratégia Primeiro
                  </h4>
                  <p
                    style={{
                      color: "rgba(242, 242, 242, 0.6)",
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "14px",
                    }}
                  >
                    Antes de qualquer código, define-se a estratégia
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <Target size={24} style={{ color: "#2563EB", flexShrink: 0 }} />
                <div>
                  <h4
                    className="font-bold mb-1"
                    style={{
                      color: "#F2F2F2",
                      fontFamily: "'Space Grotesk', sans-serif",
                    }}
                  >
                    Foco em Resultados
                  </h4>
                  <p
                    style={{
                      color: "rgba(242, 242, 242, 0.6)",
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "14px",
                    }}
                  >
                    Cada projeto é medido por conversão e crescimento
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <Users size={24} style={{ color: "#C41B2C", flexShrink: 0 }} />
                <div>
                  <h4
                    className="font-bold mb-1"
                    style={{
                      color: "#F2F2F2",
                      fontFamily: "'Space Grotesk', sans-serif",
                    }}
                  >
                    Parceria Contínua
                  </h4>
                  <p
                    style={{
                      color: "rgba(242, 242, 242, 0.6)",
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "14px",
                    }}
                  >
                    Não entrega e desaparece. Acompanha e evolui
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Visual */}
          <div
            className="fade-right relative h-96 rounded-lg overflow-hidden border"
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.05)",
              borderColor: "rgba(255, 255, 255, 0.1)",
            }}
          >
            <div
              className="absolute inset-0 flex items-center justify-center"
              style={{
                background: "linear-gradient(135deg, rgba(196, 27, 44, 0.1) 0%, rgba(37, 99, 235, 0.1) 100%)",
              }}
            >
              <div className="text-center">
                <div
                  className="w-24 h-24 rounded-full mx-auto mb-4 flex items-center justify-center"
                  style={{
                    backgroundColor: "rgba(196, 27, 44, 0.2)",
                    border: "2px solid #C41B2C",
                  }}
                >
                  <span
                    style={{
                      fontSize: "48px",
                      fontWeight: "bold",
                      color: "#C41B2C",
                      fontFamily: "'Space Grotesk', sans-serif",
                    }}
                  >
                    JB
                  </span>
                </div>
                <p
                  style={{
                    color: "rgba(242, 242, 242, 0.5)",
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "14px",
                  }}
                >
                  Jefferson Basílio Soares
                </p>
                <p
                  style={{
                    color: "#C41B2C",
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: "12px",
                    marginTop: "8px",
                  }}
                >
                  Founder & Digital Strategy Architect
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
