/*
 * NUVCORE — About Section
 * Design: "Precision Dark" — asymmetric two-column layout
 * Content: Founder statement, Mission, Vision, Values, Manifesto
 */

const ABOUT_VISUAL = "https://private-us-east-1.manuscdn.com/sessionFile/3ZwnxAvCGCsvjvmdSPvTyk/sandbox/qRCAK89su30SRUWxSWtIm7-img-2_1772158105000_na1fn_bnV2Y29yZS1hYm91dC12aXN1YWw.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvM1p3bnhBdkNHQ3N2anZtZFNQdlR5ay9zYW5kYm94L3FSQ0FLODlzdTMwU1JVV3hTV3RJbTctaW1nLTJfMTc3MjE1ODEwNTAwMF9uYTFmbl9iblYyWTI5eVpTMWhZbTkxZEMxMmFYTjFZV3cucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=MyQmhxmFN7Ph~ntmtya45eq2lBQ2W5R~aqL7bBplLyDuLIeLCnnM3R52ZOs~SjArW3IX2IxMi-ZzRpK1p7xvMH-Mv5jTbi5YoUrDHY1Xc5I5qUj21Kq0XVbrd4CjlIENeuKJTp1TfxSO-yAzrX-c6HcI-JBEEFneEnXV-pCsdBAzyqTcu-I6SeJzW34ceD~eD7bAj0ZAxxldShMfFXqwN9nC6nOcv7eUtTgjCuHDhd8q54OiaBCBHdx-6gOyjuhsrNZCeBVNJDOzNy~tI1QIN-kl75KqnwIJcqEnpm0E79hahXilj4A-JQyBDa4xECcelHGEW4zfKgMHjyE1ekj7qA__";
const LOGO_URL = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663387028892/RLWfTMXfVFnGSRxy.png";

const values = [
  {
    title: "Clareza",
    description: "Comunicação direta, sem jargões desnecessários. Eu falo o que precisa ser dito.",
  },
  {
    title: "Estratégia",
    description: "Cada decisão de design e desenvolvimento tem um propósito claro de negócio.",
  },
  {
    title: "Excelência Técnica",
    description: "Código limpo, performance real e estrutura que escala com o crescimento.",
  },
  {
    title: "Proximidade",
    description: "Trabalho diretamente com cada cliente. Sem intermediários, sem processos burocráticos.",
  },
];

export default function AboutSection() {
  return (
    <section
      id="sobre"
      className="nv-section relative"
      style={{ backgroundColor: "#0F0F12" }}
    >
      {/* Watermark Logo */}
      <img
        src={LOGO_URL}
        alt=""
        className="nv-watermark nv-watermark-lg"
        style={{ top: "20%", left: "-10%" }}
      />
      <div className="container relative z-10">
        {/* Section header */}
        <div className="flex items-center gap-3 mb-16 fade-up">
          <span className="nv-divider" />
          <span className="nv-label">Sobre a NUVCORE</span>
        </div>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-24">
          {/* Left: Text */}
          <div>
            <h2
              className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-6 fade-up"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Eu acredito que um bom site é uma{" "}
              <span style={{ color: "#C41B2C" }}>estrutura de negócio</span>, não apenas um cartão de visitas.
            </h2>

            <div className="space-y-5 fade-up delay-100">
              <p
                className="text-base leading-relaxed"
                style={{ color: "rgba(242,242,242,0.7)", fontFamily: "'Inter', sans-serif" }}
              >
                A NUVCORE nasceu da minha convicção de que a maioria dos negócios digitais falha não por falta de produto, mas por falta de presença estratégica. Um site mal estruturado não comunica, não converte e não posiciona.
              </p>
              <p
                className="text-base leading-relaxed"
                style={{ color: "rgba(242,242,242,0.7)", fontFamily: "'Inter', sans-serif" }}
              >
                Por isso, eu não começo pelo design. Começo pela estratégia. Entendo o negócio, o público, os objetivos — e só então construo a estrutura digital que vai trabalhar por você.
              </p>
            </div>

            {/* Mission & Vision */}
            <div className="grid grid-cols-2 gap-6 mt-10 fade-up delay-200">
              <div
                className="p-5 rounded-lg"
                style={{ backgroundColor: "#16161A", border: "1px solid rgba(255,255,255,0.07)" }}
              >
                <div className="nv-label mb-3">Missão</div>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "rgba(242,242,242,0.75)", fontFamily: "'Inter', sans-serif" }}
                >
                  Transformar presença digital em vantagem competitiva real para startups e pequenos negócios.
                </p>
              </div>
              <div
                className="p-5 rounded-lg"
                style={{ backgroundColor: "#16161A", border: "1px solid rgba(255,255,255,0.07)" }}
              >
                <div className="nv-label mb-3">Visão</div>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "rgba(242,242,242,0.75)", fontFamily: "'Inter', sans-serif" }}
                >
                  Ser referência em desenvolvimento web estratégico para negócios que constroem o futuro.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Visual */}
          <div className="fade-right">
            <div
              className="relative rounded-2xl overflow-hidden"
              style={{ border: "1px solid rgba(255,255,255,0.08)" }}
            >
              <img
                src={ABOUT_VISUAL}
                alt="NUVCORE — Estrutura digital estratégica"
                className="w-full h-auto"
                style={{ display: "block" }}
              />
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(to bottom, transparent 60%, rgba(15,15,18,0.8) 100%)",
                }}
              />
            </div>
          </div>
        </div>

        {/* Values */}
        <div>
          <h3
            className="text-2xl font-bold text-white mb-10 fade-up"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Valores que guiam cada projeto
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => (
              <div
                key={value.title}
                className={`nv-card p-6 fade-up delay-${(i + 1) * 100}`}
              >
                <div
                  className="w-8 h-0.5 mb-4"
                  style={{ backgroundColor: "#C41B2C" }}
                />
                <h4
                  className="text-lg font-bold text-white mb-3"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {value.title}
                </h4>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "rgba(242,242,242,0.6)", fontFamily: "'Inter', sans-serif" }}
                >
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Manifesto */}
        <div
          className="mt-20 p-8 lg:p-12 rounded-2xl fade-up"
          style={{
            backgroundColor: "#16161A",
            border: "1px solid rgba(255,255,255,0.07)",
            borderLeft: "3px solid #C41B2C",
          }}
        >
          <div className="nv-label mb-4">Manifesto</div>
          <blockquote
            className="text-xl lg:text-2xl font-medium leading-relaxed text-white"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            "Eu acredito que todo negócio merece uma presença digital que o represente com verdade e inteligência. Não aceito mediocridade técnica, não entrego projetos sem propósito e não trabalho com quem não acredita no próprio produto. A NUVCORE existe para construir junto com quem está comprometido com o crescimento."
          </blockquote>
        </div>
      </div>
    </section>
  );
}
