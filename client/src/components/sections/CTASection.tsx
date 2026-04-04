/*
 * NUVCORE — CTA Section
 * Design: "Precision Dark" — bold red accent, strong invitation
 * Content: Invitation to request a free diagnosis
 */

import { ExternalLink } from "lucide-react";

const CTA_BG = "https://private-us-east-1.manuscdn.com/sessionFile/3ZwnxAvCGCsvjvmdSPvTyk/sandbox/qRCAK89su30SRUWxSWtIm7-img-4_1772158110000_na1fn_bnV2Y29yZS1jdGEtYmc.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvM1p3bnhBdkNHQ3N2anZtZFNQdlR5ay9zYW5kYm94L3FSQ0FLODlzdTMwU1JVV3hTV3RJbTctaW1nLTRfMTc3MjE1ODExMDAwMF9uYTFmbl9iblYyWTI5eVpTMWpkR0V0WW1jLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=Ap0eA5o1owDKHV-Dap4jIodmvjtOlTSPXdB~nMcvafyiek2bnheUXdB2MA2ue0XWOVHHwBzfP5fN0djZoLsciiX9QVNaLAICFFc6eEzWyUhR9im3jhBB3MPH77OFbd7ejbS2QlXhL9i41SRm0hkepyw-Ryg4gaz9CcC0sHLValJRDP1RxQx-oHTrWaNf2OMnsLEeY1ItgCp7kljOnpxLfg1Pgu~mqmEcXxxe3Hbgb7RBZzog3QyY2o7UjcLw3PnKdFFsSsjmYmZJtvtHh~KQKzsDGCE~ASX7xK2wqI7CTvEbTpNqZLw~FyqS9eNHcYV5y84EmxyxzpZGhsh49Ng__";

export default function CTASection() {
  const handleBriefingClick = () => {
    window.open("https://forms.gle/JK1cLA8zbAJRe2uz9", "_blank");
  };

  return (
    <section
      className="relative overflow-hidden py-24 lg:py-32"
      style={{ backgroundColor: "#0F0F12" }}
    >
      {/* Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${CTA_BG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.5,
        }}
      />
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "linear-gradient(135deg, rgba(15,15,18,0.9) 0%, rgba(15,15,18,0.6) 50%, rgba(15,15,18,0.9) 100%)",
        }}
      />

      <div className="container relative z-10 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-8 fade-up">
            <span className="nv-divider mx-auto" style={{ width: "2rem" }} />
            <span className="nv-label">Diagnóstico Gratuito</span>
            <span className="nv-divider mx-auto" style={{ width: "2rem" }} />
          </div>

          <h2
            className="text-4xl lg:text-6xl font-bold text-white leading-tight mb-6 fade-up delay-100"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Pronto para construir sua{" "}
            <span style={{ color: "#C41B2C" }}>estrutura digital estratégica</span>?
          </h2>

          <p
            className="text-lg leading-relaxed mb-10 fade-up delay-200"
            style={{
              color: "rgba(242,242,242,0.7)",
              fontFamily: "'Inter', sans-serif",
            }}
          >
            Agende um diagnóstico gratuito de 30 minutos. Vou analisar sua presença digital atual, identificar oportunidades e apresentar um caminho claro para o crescimento.
          </p>

          <div className="fade-up delay-300 max-w-2xl mx-auto mb-10">
            <div
              className="p-8 rounded-lg border transition-all duration-300"
              style={{
                backgroundColor: "rgba(196, 27, 44, 0.05)",
                borderColor: "rgba(196, 27, 44, 0.2)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(196, 27, 44, 0.1)";
                e.currentTarget.style.borderColor = "rgba(196, 27, 44, 0.4)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(196, 27, 44, 0.05)";
                e.currentTarget.style.borderColor = "rgba(196, 27, 44, 0.2)";
              }}
            >
              <h3
                className="text-2xl font-bold text-white mb-3"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Preencha seu Briefing
              </h3>
              <p
                className="text-base mb-6"
                style={{ color: "rgba(242,242,242,0.7)", fontFamily: "'Inter', sans-serif", lineHeight: "1.6" }}
              >
                Para entendermos melhor sua necessidade, pedimos que você preencha um briefing rápido. Isso nos ajuda a criar uma solução mais estratégica e personalizada para você.
              </p>
              <button
                onClick={handleBriefingClick}
                className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300"
                style={{
                  backgroundColor: "#C41B2C",
                  color: "#F2F2F2",
                  fontFamily: "'Inter', sans-serif",
                  border: "none",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#A01622";
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow = "0 8px 16px rgba(196, 27, 44, 0.3)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#C41B2C";
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                Preencher Briefing
                <ExternalLink size={18} />
              </button>
            </div>
          </div>

          <p
            className="text-sm mt-6 fade-up delay-400"
            style={{ color: "rgba(242,242,242,0.35)", fontFamily: "'Inter', sans-serif" }}
          >
            Sem compromisso. Sem pressão. Apenas clareza sobre o próximo passo.
          </p>
        </div>
      </div>
    </section>
  );
}
