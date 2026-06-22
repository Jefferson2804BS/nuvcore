/*
 * NUVCORE — Contact Section
 * Design: "Precision Dark" — Briefing section with Google Form
 * Contact: nuvcore.oficial@gmail.com | @nuvcore
 */

import { Mail, Instagram, ExternalLink } from "lucide-react";

export default function ContactSection() {
  const handleBriefingClick = () => {
    window.open("https://forms.gle/JK1cLA8zbAJRe2uz9", "_blank");
  };

  return (
    <section
      id="contato"
      className="nv-section"
      style={{ backgroundColor: "#16161A" }}
    >
      <div className="container">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6 fade-up">
          <span className="nv-divider" />
          <span className="nv-label">Contato</span>
        </div>
        <div className="mb-16">
          <h2
            className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-4 fade-up delay-100"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Vamos construir algo{" "}
            <span style={{ color: "#C41B2C" }}>extraordinário</span> juntos.
          </h2>
          <p
            className="text-lg fade-up delay-200"
            style={{ color: "rgba(242,242,242,0.55)", fontFamily: "'Inter', sans-serif", maxWidth: "600px" }}
          >
            Tenho interesse em projetos que desafiam o status quo. Se você quer crescer com estratégia e precisão, vamos conversar.
          </p>
        </div>

        {/* Contact Info */}
        <div className="fade-up delay-300 max-w-2xl">
            <div className="space-y-8">
              {/* Email */}
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <Mail size={20} style={{ color: "#C41B2C" }} />
                  <span
                    className="text-sm font-semibold"
                    style={{ color: "rgba(242,242,242,0.4)", fontFamily: "'Inter', sans-serif", letterSpacing: "0.05em", textTransform: "uppercase" }}
                  >
                    E-mail
                  </span>
                </div>
                <a
                  href="mailto:nuvcore.oficial@gmail.com"
                  className="text-lg font-medium transition-colors duration-200"
                  style={{ color: "#F2F2F2", fontFamily: "'Inter', sans-serif", textDecoration: "none" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#C41B2C")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#F2F2F2")}
                >
                  nuvcore.oficial@gmail.com
                </a>
              </div>

              {/* Instagram */}
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <Instagram size={20} style={{ color: "#C41B2C" }} />
                  <span
                    className="text-sm font-semibold"
                    style={{ color: "rgba(242,242,242,0.4)", fontFamily: "'Inter', sans-serif", letterSpacing: "0.05em", textTransform: "uppercase" }}
                  >
                    Instagram
                  </span>
                </div>
                <a
                  href="https://instagram.com/nuvcore"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-medium transition-colors duration-200"
                  style={{ color: "#F2F2F2", fontFamily: "'Inter', sans-serif", textDecoration: "none" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#C41B2C")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#F2F2F2")}
                >
                  @nuvcore
                </a>
              </div>

              {/* Response time */}
              <div
                className="p-4 rounded-lg"
                style={{ backgroundColor: "rgba(196, 27, 44, 0.08)", borderLeft: "3px solid #C41B2C" }}
              >
                <p
                  className="text-sm"
                  style={{ color: "rgba(242,242,242,0.7)", fontFamily: "'Inter', sans-serif" }}
                >
                  Respondo todas as mensagens em até 24 horas. Se for urgente, me chama no Instagram.
                </p>
              </div>
            </div>
          </div>
      </div>
    </section>
  );
}
