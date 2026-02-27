/*
 * NUVCORE — Contact Section
 * Design: "Precision Dark" — two-column: info + form
 * Contact: nuvcore.agency@gmail.com | @nuvcore
 */

import { useState } from "react";
import { Mail, Instagram, Send, CheckCircle } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    business: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate form submission
    await new Promise((res) => setTimeout(res, 1200));
    setLoading(false);
    setSubmitted(true);
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
            <span style={{ color: "#C41B2C" }}>juntos</span>
          </h2>
          <p
            className="text-base fade-up delay-200"
            style={{ color: "rgba(242,242,242,0.6)", fontFamily: "'Inter', sans-serif", maxWidth: "520px" }}
          >
            Preencha o formulário ou entre em contato diretamente. Respondo em até 24 horas.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Left: Info */}
          <div className="lg:col-span-2 space-y-8 fade-left">
            {/* Contact info */}
            <div className="space-y-5">
              <a
                href="mailto:nuvcore.agency@gmail.com"
                className="flex items-start gap-4 group"
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors"
                  style={{ backgroundColor: "rgba(196,27,44,0.12)", border: "1px solid rgba(196,27,44,0.25)" }}
                >
                  <Mail size={18} style={{ color: "#C41B2C" }} />
                </div>
                <div>
                  <div
                    className="text-xs font-semibold mb-1"
                    style={{ color: "rgba(242,242,242,0.4)", fontFamily: "'Inter', sans-serif", letterSpacing: "0.08em", textTransform: "uppercase" }}
                  >
                    E-mail
                  </div>
                  <div
                    className="text-sm font-medium transition-colors"
                    style={{ color: "#F2F2F2", fontFamily: "'Inter', sans-serif" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#C41B2C")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#F2F2F2")}
                  >
                    nuvcore.agency@gmail.com
                  </div>
                </div>
              </a>

              <a
                href="https://instagram.com/nuvcore"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 group"
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ backgroundColor: "rgba(37,99,235,0.12)", border: "1px solid rgba(37,99,235,0.25)" }}
                >
                  <Instagram size={18} style={{ color: "#2563EB" }} />
                </div>
                <div>
                  <div
                    className="text-xs font-semibold mb-1"
                    style={{ color: "rgba(242,242,242,0.4)", fontFamily: "'Inter', sans-serif", letterSpacing: "0.08em", textTransform: "uppercase" }}
                  >
                    Instagram
                  </div>
                  <div
                    className="text-sm font-medium transition-colors"
                    style={{ color: "#F2F2F2", fontFamily: "'Inter', sans-serif" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#2563EB")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#F2F2F2")}
                  >
                    @nuvcore
                  </div>
                </div>
              </a>
            </div>

            {/* What to expect */}
            <div
              className="p-6 rounded-xl"
              style={{ backgroundColor: "#0F0F12", border: "1px solid rgba(255,255,255,0.07)" }}
            >
              <h4
                className="text-sm font-bold text-white mb-4"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                O que acontece depois?
              </h4>
              <ol className="space-y-3">
                {[
                  "Respondo em até 24 horas",
                  "Agendamos uma conversa de 30 min",
                  "Apresento um diagnóstico gratuito",
                  "Você decide se quer avançar",
                ].map((step, i) => (
                  <li
                    key={step}
                    className="flex items-start gap-3 text-sm"
                    style={{ color: "rgba(242,242,242,0.6)", fontFamily: "'Inter', sans-serif" }}
                  >
                    <span
                      className="w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5"
                      style={{ backgroundColor: "rgba(196,27,44,0.15)", color: "#C41B2C", fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      {i + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-3 fade-right">
            {submitted ? (
              <div
                className="flex flex-col items-center justify-center text-center p-12 rounded-2xl h-full"
                style={{ backgroundColor: "#0F0F12", border: "1px solid rgba(196,27,44,0.2)" }}
              >
                <CheckCircle size={48} style={{ color: "#4ade80" }} className="mb-4" />
                <h3
                  className="text-2xl font-bold text-white mb-3"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  Mensagem enviada!
                </h3>
                <p
                  className="text-sm"
                  style={{ color: "rgba(242,242,242,0.6)", fontFamily: "'Inter', sans-serif" }}
                >
                  Obrigado pelo contato. Responderei em até 24 horas.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      className="block text-xs font-semibold mb-2"
                      style={{ color: "rgba(242,242,242,0.5)", fontFamily: "'Inter', sans-serif", letterSpacing: "0.06em", textTransform: "uppercase" }}
                    >
                      Nome
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Seu nome completo"
                      className="nv-input"
                    />
                  </div>
                  <div>
                    <label
                      className="block text-xs font-semibold mb-2"
                      style={{ color: "rgba(242,242,242,0.5)", fontFamily: "'Inter', sans-serif", letterSpacing: "0.06em", textTransform: "uppercase" }}
                    >
                      E-mail
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="seu@email.com"
                      className="nv-input"
                    />
                  </div>
                </div>

                <div>
                  <label
                    className="block text-xs font-semibold mb-2"
                    style={{ color: "rgba(242,242,242,0.5)", fontFamily: "'Inter', sans-serif", letterSpacing: "0.06em", textTransform: "uppercase" }}
                  >
                    Tipo de Projeto
                  </label>
                  <select
                    name="business"
                    value={formData.business}
                    onChange={handleChange}
                    required
                    className="nv-input"
                    style={{ cursor: "pointer" }}
                  >
                    <option value="" disabled>Selecione o tipo de projeto</option>
                    <option value="site-institucional">Site Institucional</option>
                    <option value="landing-page">Landing Page</option>
                    <option value="otimizacao">Otimização de Site Existente</option>
                    <option value="planejamento">Planejamento de Estrutura Digital</option>
                    <option value="outro">Outro</option>
                  </select>
                </div>

                <div>
                  <label
                    className="block text-xs font-semibold mb-2"
                    style={{ color: "rgba(242,242,242,0.5)", fontFamily: "'Inter', sans-serif", letterSpacing: "0.06em", textTransform: "uppercase" }}
                  >
                    Mensagem
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Conte sobre seu negócio e o que você precisa..."
                    className="nv-input resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="nv-btn-primary w-full justify-center text-base py-4"
                  style={{ opacity: loading ? 0.7 : 1 }}
                >
                  {loading ? (
                    <>
                      <span className="animate-spin inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      Enviar Mensagem
                      <Send size={16} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
