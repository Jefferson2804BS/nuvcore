/*
 * NUVCORE — Contact Section
 * Design: "Precision Dark" — two-column: info + form
 * Contact: nuvcore.oficial@gmail.com | @nuvcore
 * Backend: tRPC integration for form submission with notifications
 */

import { useState } from "react";
import { Mail, Instagram, Send, CheckCircle, AlertCircle } from "lucide-react";
import { trpc } from "@/lib/trpc";
import { useNotification } from "@/contexts/NotificationContext";

export default function ContactSection() {
  const { addToast } = useNotification();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const submitDiagnostic = trpc.contact.submitDiagnostic.useMutation({
    onSuccess: () => {
      setSubmitted(true);
      setFormData({ name: "", email: "", phone: "", company: "", message: "" });
      setError(null);
      
      // Add success toast notification
      addToast({
        type: "success",
        title: "Solicitação Enviada!",
        message: "Seu pedido de diagnóstico foi recebido. Entraremos em contato em breve.",
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000);
    },
    onError: (err) => {
      const errorMessage = err.message || "Erro ao enviar formulário. Tente novamente.";
      setError(errorMessage);
      
      // Add error toast notification
      addToast({
        type: "error",
        title: "Erro ao Enviar",
        message: errorMessage,
      });
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    // Validação básica
    if (!formData.name || !formData.email || !formData.message) {
      setError("Preencha todos os campos obrigatórios");
      addToast({
        type: "warning",
        title: "Campos Obrigatórios",
        message: "Preencha todos os campos obrigatórios",
      });
      return;
    }

    submitDiagnostic.mutate({
      name: formData.name,
      email: formData.email,
      phone: formData.phone || undefined,
      company: formData.company || undefined,
      message: formData.message,
    });
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

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left: Info */}
          <div className="fade-up delay-300">
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

          {/* Right: Form */}
          <div className="fade-up delay-400">
            {submitted ? (
              <div
                className="flex flex-col items-center justify-center p-8 rounded-lg text-center"
                style={{ backgroundColor: "rgba(196, 27, 44, 0.1)", border: "1px solid rgba(196, 27, 44, 0.3)" }}
              >
                <CheckCircle size={48} style={{ color: "#C41B2C", marginBottom: "16px" }} />
                <h3 className="text-xl font-bold text-white mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  Obrigado!
                </h3>
                <p style={{ color: "rgba(242,242,242,0.6)", fontFamily: "'Inter', sans-serif" }}>
                  Sua solicitação foi enviada com sucesso. Entraremos em contato em breve.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {error && (
                  <div
                    className="flex items-center gap-3 p-3 rounded-lg"
                    style={{ backgroundColor: "rgba(196, 27, 44, 0.15)", border: "1px solid rgba(196, 27, 44, 0.4)" }}
                  >
                    <AlertCircle size={18} style={{ color: "#C41B2C", flexShrink: 0 }} />
                    <p style={{ color: "#F2F2F2", fontFamily: "'Inter', sans-serif", fontSize: "14px" }}>
                      {error}
                    </p>
                  </div>
                )}

                {/* Name */}
                <div>
                  <label
                    className="block text-sm font-medium mb-2"
                    style={{ color: "rgba(242,242,242,0.7)", fontFamily: "'Inter', sans-serif" }}
                  >
                    Nome *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Seu nome"
                    className="w-full px-4 py-2 rounded-lg border transition-colors duration-200"
                    style={{
                      backgroundColor: "rgba(255,255,255,0.05)",
                      borderColor: "rgba(255,255,255,0.1)",
                      color: "#F2F2F2",
                      fontFamily: "'Inter', sans-serif",
                    }}
                    onFocus={(e) => (e.currentTarget.style.borderColor = "#C41B2C")}
                    onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)")}
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    className="block text-sm font-medium mb-2"
                    style={{ color: "rgba(242,242,242,0.7)", fontFamily: "'Inter', sans-serif" }}
                  >
                    E-mail *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="seu@email.com"
                    className="w-full px-4 py-2 rounded-lg border transition-colors duration-200"
                    style={{
                      backgroundColor: "rgba(255,255,255,0.05)",
                      borderColor: "rgba(255,255,255,0.1)",
                      color: "#F2F2F2",
                      fontFamily: "'Inter', sans-serif",
                    }}
                    onFocus={(e) => (e.currentTarget.style.borderColor = "#C41B2C")}
                    onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)")}
                  />
                </div>

                {/* Phone */}
                <div>
                  <label
                    className="block text-sm font-medium mb-2"
                    style={{ color: "rgba(242,242,242,0.7)", fontFamily: "'Inter', sans-serif" }}
                  >
                    Telefone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(11) 99999-9999"
                    className="w-full px-4 py-2 rounded-lg border transition-colors duration-200"
                    style={{
                      backgroundColor: "rgba(255,255,255,0.05)",
                      borderColor: "rgba(255,255,255,0.1)",
                      color: "#F2F2F2",
                      fontFamily: "'Inter', sans-serif",
                    }}
                    onFocus={(e) => (e.currentTarget.style.borderColor = "#C41B2C")}
                    onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)")}
                  />
                </div>

                {/* Company */}
                <div>
                  <label
                    className="block text-sm font-medium mb-2"
                    style={{ color: "rgba(242,242,242,0.7)", fontFamily: "'Inter', sans-serif" }}
                  >
                    Empresa
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Nome da sua empresa"
                    className="w-full px-4 py-2 rounded-lg border transition-colors duration-200"
                    style={{
                      backgroundColor: "rgba(255,255,255,0.05)",
                      borderColor: "rgba(255,255,255,0.1)",
                      color: "#F2F2F2",
                      fontFamily: "'Inter', sans-serif",
                    }}
                    onFocus={(e) => (e.currentTarget.style.borderColor = "#C41B2C")}
                    onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)")}
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    className="block text-sm font-medium mb-2"
                    style={{ color: "rgba(242,242,242,0.7)", fontFamily: "'Inter', sans-serif" }}
                  >
                    Mensagem *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Conte-me sobre seu projeto..."
                    rows={5}
                    className="w-full px-4 py-2 rounded-lg border transition-colors duration-200 resize-none"
                    style={{
                      backgroundColor: "rgba(255,255,255,0.05)",
                      borderColor: "rgba(255,255,255,0.1)",
                      color: "#F2F2F2",
                      fontFamily: "'Inter', sans-serif",
                    }}
                    onFocus={(e) => (e.currentTarget.style.borderColor = "#C41B2C")}
                    onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)")}
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={submitDiagnostic.isPending}
                  className="w-full nv-btn-primary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {submitDiagnostic.isPending ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      Enviar Solicitação
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
