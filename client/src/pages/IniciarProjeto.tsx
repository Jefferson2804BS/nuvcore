/*
 * NUVCORE — Iniciar Projeto
 * Página com formulário profissional para novos projetos
 */

import { useState } from "react";
import { useLocation } from "wouter";
import { trpc } from "@/lib/trpc";
import { CheckCircle2 } from "lucide-react";

export default function IniciarProjeto() {
  const [, navigate] = useLocation();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    whatsapp: "",
    empresa: "",
    cargo: "",
    segmento: "",
    temSite: "",
    urlSite: "",
    tipoProjeto: "",
    objetivo: "",
    orcamento: "",
    prazo: "",
    informacoes: "",
  });

  const submitContact = trpc.contact.submitDiagnostic.useMutation();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const messageDetails = `Cargo: ${formData.cargo}
Segmento: ${formData.segmento}
Tem Site: ${formData.temSite}
URL Site: ${formData.urlSite}
Tipo Projeto: ${formData.tipoProjeto}
Objetivo: ${formData.objetivo}
Orçamento: ${formData.orcamento}
Prazo: ${formData.prazo}
Informações Adicionais: ${formData.informacoes}`;

      await submitContact.mutateAsync({
        name: formData.nome,
        email: formData.email,
        phone: formData.whatsapp,
        company: formData.empresa,
        message: messageDetails,
      });

      setSubmitted(true);
    } catch (error) {
      console.error("Erro ao enviar formulário:", error);
      alert("Erro ao enviar o formulário. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div
        className="min-h-screen flex items-center justify-center py-20"
        style={{ backgroundColor: "#0F0F12" }}
      >
        <div className="max-w-md text-center px-4">
          <CheckCircle2 size={64} style={{ color: "#C41B2C", margin: "0 auto 24px" }} />
          <h1
            className="text-3xl font-bold mb-4"
            style={{
              color: "#F2F2F2",
              fontFamily: "'Space Grotesk', sans-serif",
            }}
          >
            Solicitação Enviada com Sucesso!
          </h1>
          <p
            className="text-lg mb-8"
            style={{
              color: "rgba(242, 242, 242, 0.7)",
              fontFamily: "'Inter', sans-serif",
              lineHeight: "1.6",
            }}
          >
            Obrigado por entrar em contato com a NUVCORE. Nossa equipe analisará seu projeto e retornará em breve.
          </p>
          <button
            onClick={() => navigate("/")}
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
            Voltar para o Site
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen py-20"
      style={{ backgroundColor: "#0F0F12" }}
    >
      <div className="container max-w-2xl px-4">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1
            className="text-4xl font-bold mb-4"
            style={{
              color: "#F2F2F2",
              fontFamily: "'Space Grotesk', sans-serif",
            }}
          >
            Iniciar Projeto com a NUVCORE
          </h1>
          <p
            className="text-lg"
            style={{
              color: "rgba(242, 242, 242, 0.7)",
              fontFamily: "'Inter', sans-serif",
              lineHeight: "1.6",
            }}
          >
            Preencha as informações abaixo para que possamos entender melhor seu projeto. Após o envio, nossa equipe analisará sua solicitação e entrará em contato em breve.
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="space-y-6 p-8 rounded-lg border"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.03)",
            borderColor: "rgba(255, 255, 255, 0.1)",
          }}
        >
          {/* Nome */}
          <div>
            <label
              className="block text-sm font-semibold mb-2"
              style={{
                color: "#F2F2F2",
                fontFamily: "'Inter', sans-serif",
              }}
            >
              Nome Completo *
            </label>
            <input
              type="text"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border transition-all duration-300"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                borderColor: "rgba(255, 255, 255, 0.1)",
                color: "#F2F2F2",
                fontFamily: "'Inter', sans-serif",
              }}
              onFocus={(e) => {
                e.currentTarget.style.borderColor = "#C41B2C";
                e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.08)";
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.1)";
                e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.05)";
              }}
            />
          </div>

          {/* Email */}
          <div>
            <label
              className="block text-sm font-semibold mb-2"
              style={{
                color: "#F2F2F2",
                fontFamily: "'Inter', sans-serif",
              }}
            >
              Email *
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border transition-all duration-300"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                borderColor: "rgba(255, 255, 255, 0.1)",
                color: "#F2F2F2",
                fontFamily: "'Inter', sans-serif",
              }}
              onFocus={(e) => {
                e.currentTarget.style.borderColor = "#C41B2C";
                e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.08)";
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.1)";
                e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.05)";
              }}
            />
          </div>

          {/* WhatsApp */}
          <div>
            <label
              className="block text-sm font-semibold mb-2"
              style={{
                color: "#F2F2F2",
                fontFamily: "'Inter', sans-serif",
              }}
            >
              WhatsApp *
            </label>
            <input
              type="tel"
              name="whatsapp"
              value={formData.whatsapp}
              onChange={handleChange}
              required
              placeholder="(11) 99999-9999"
              className="w-full px-4 py-3 rounded-lg border transition-all duration-300"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                borderColor: "rgba(255, 255, 255, 0.1)",
                color: "#F2F2F2",
                fontFamily: "'Inter', sans-serif",
              }}
              onFocus={(e) => {
                e.currentTarget.style.borderColor = "#C41B2C";
                e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.08)";
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.1)";
                e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.05)";
              }}
            />
          </div>

          {/* Empresa */}
          <div>
            <label
              className="block text-sm font-semibold mb-2"
              style={{
                color: "#F2F2F2",
                fontFamily: "'Inter', sans-serif",
              }}
            >
              Empresa ou Marca *
            </label>
            <input
              type="text"
              name="empresa"
              value={formData.empresa}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border transition-all duration-300"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                borderColor: "rgba(255, 255, 255, 0.1)",
                color: "#F2F2F2",
                fontFamily: "'Inter', sans-serif",
              }}
              onFocus={(e) => {
                e.currentTarget.style.borderColor = "#C41B2C";
                e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.08)";
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.1)";
                e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.05)";
              }}
            />
          </div>

          {/* Cargo */}
          <div>
            <label
              className="block text-sm font-semibold mb-2"
              style={{
                color: "#F2F2F2",
                fontFamily: "'Inter', sans-serif",
              }}
            >
              Cargo na Empresa *
            </label>
            <input
              type="text"
              name="cargo"
              value={formData.cargo}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border transition-all duration-300"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                borderColor: "rgba(255, 255, 255, 0.1)",
                color: "#F2F2F2",
                fontFamily: "'Inter', sans-serif",
              }}
              onFocus={(e) => {
                e.currentTarget.style.borderColor = "#C41B2C";
                e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.08)";
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.1)";
                e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.05)";
              }}
            />
          </div>

          {/* Segmento */}
          <div>
            <label
              className="block text-sm font-semibold mb-2"
              style={{
                color: "#F2F2F2",
                fontFamily: "'Inter', sans-serif",
              }}
            >
              Segmento da Empresa *
            </label>
            <select
              name="segmento"
              value={formData.segmento}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border transition-all duration-300"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                borderColor: "rgba(255, 255, 255, 0.1)",
                color: "#F2F2F2",
                fontFamily: "'Inter', sans-serif",
              }}
            >
              <option value="">Selecione um segmento</option>
              <option value="E-commerce">E-commerce</option>
              <option value="Serviços">Serviços</option>
              <option value="Tecnologia">Tecnologia</option>
              <option value="Educação">Educação</option>
              <option value="Saúde">Saúde</option>
              <option value="Outro">Outro</option>
            </select>
          </div>

          {/* Tem Site */}
          <div>
            <label
              className="block text-sm font-semibold mb-2"
              style={{
                color: "#F2F2F2",
                fontFamily: "'Inter', sans-serif",
              }}
            >
              Sua Empresa Já Possui Site? *
            </label>
            <select
              name="temSite"
              value={formData.temSite}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border transition-all duration-300"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                borderColor: "rgba(255, 255, 255, 0.1)",
                color: "#F2F2F2",
                fontFamily: "'Inter', sans-serif",
              }}
            >
              <option value="">Selecione uma opção</option>
              <option value="Sim">Sim</option>
              <option value="Não">Não</option>
              <option value="Em desenvolvimento">Em desenvolvimento</option>
            </select>
          </div>

          {/* URL Site */}
          {formData.temSite === "Sim" && (
            <div>
              <label
                className="block text-sm font-semibold mb-2"
                style={{
                  color: "#F2F2F2",
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                URL do Site
              </label>
              <input
                type="url"
                name="urlSite"
                value={formData.urlSite}
                onChange={handleChange}
                placeholder="https://exemplo.com"
                className="w-full px-4 py-3 rounded-lg border transition-all duration-300"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.05)",
                  borderColor: "rgba(255, 255, 255, 0.1)",
                  color: "#F2F2F2",
                  fontFamily: "'Inter', sans-serif",
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = "#C41B2C";
                  e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.08)";
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.1)";
                  e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.05)";
                }}
              />
            </div>
          )}

          {/* Tipo Projeto */}
          <div>
            <label
              className="block text-sm font-semibold mb-2"
              style={{
                color: "#F2F2F2",
                fontFamily: "'Inter', sans-serif",
              }}
            >
              Tipo de Projeto *
            </label>
            <select
              name="tipoProjeto"
              value={formData.tipoProjeto}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border transition-all duration-300"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                borderColor: "rgba(255, 255, 255, 0.1)",
                color: "#F2F2F2",
                fontFamily: "'Inter', sans-serif",
              }}
            >
              <option value="">Selecione um tipo</option>
              <option value="Website institucional">Website institucional</option>
              <option value="Landing page">Landing page</option>
              <option value="Redesign de site">Redesign de site</option>
              <option value="Otimização de site">Otimização de site</option>
              <option value="Estrutura completa de presença digital">Estrutura completa de presença digital</option>
            </select>
          </div>

          {/* Objetivo */}
          <div>
            <label
              className="block text-sm font-semibold mb-2"
              style={{
                color: "#F2F2F2",
                fontFamily: "'Inter', sans-serif",
              }}
            >
              Objetivo Principal do Projeto *
            </label>
            <textarea
              name="objetivo"
              value={formData.objetivo}
              onChange={handleChange}
              required
              rows={3}
              placeholder="Descreva o objetivo principal do seu projeto..."
              className="w-full px-4 py-3 rounded-lg border transition-all duration-300"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                borderColor: "rgba(255, 255, 255, 0.1)",
                color: "#F2F2F2",
                fontFamily: "'Inter', sans-serif",
                resize: "vertical",
              }}
              onFocus={(e) => {
                e.currentTarget.style.borderColor = "#C41B2C";
                e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.08)";
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.1)";
                e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.05)";
              }}
            />
          </div>

          {/* Orçamento */}
          <div>
            <label
              className="block text-sm font-semibold mb-2"
              style={{
                color: "#F2F2F2",
                fontFamily: "'Inter', sans-serif",
              }}
            >
              Orçamento Estimado *
            </label>
            <select
              name="orcamento"
              value={formData.orcamento}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border transition-all duration-300"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                borderColor: "rgba(255, 255, 255, 0.1)",
                color: "#F2F2F2",
                fontFamily: "'Inter', sans-serif",
              }}
            >
              <option value="">Selecione uma faixa</option>
              <option value="Até R$1.000">Até R$1.000</option>
              <option value="R$1.000–R$2.000">R$1.000–R$2.000</option>
              <option value="R$2.000–R$5.000">R$2.000–R$5.000</option>
              <option value="Acima de R$5.000">Acima de R$5.000</option>
              <option value="Prefiro discutir">Prefiro discutir</option>
            </select>
          </div>

          {/* Prazo */}
          <div>
            <label
              className="block text-sm font-semibold mb-2"
              style={{
                color: "#F2F2F2",
                fontFamily: "'Inter', sans-serif",
              }}
            >
              Prazo Desejado *
            </label>
            <select
              name="prazo"
              value={formData.prazo}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border transition-all duration-300"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                borderColor: "rgba(255, 255, 255, 0.1)",
                color: "#F2F2F2",
                fontFamily: "'Inter', sans-serif",
              }}
            >
              <option value="">Selecione um prazo</option>
              <option value="O mais rápido possível">O mais rápido possível</option>
              <option value="1–2 semanas">1–2 semanas</option>
              <option value="1 mês">1 mês</option>
              <option value="Sem prazo definido">Sem prazo definido</option>
            </select>
          </div>

          {/* Informações Adicionais */}
          <div>
            <label
              className="block text-sm font-semibold mb-2"
              style={{
                color: "#F2F2F2",
                fontFamily: "'Inter', sans-serif",
              }}
            >
              Informações Adicionais Sobre o Projeto
            </label>
            <textarea
              name="informacoes"
              value={formData.informacoes}
              onChange={handleChange}
              rows={4}
              placeholder="Compartilhe detalhes adicionais que possam ajudar nossa equipe..."
              className="w-full px-4 py-3 rounded-lg border transition-all duration-300"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                borderColor: "rgba(255, 255, 255, 0.1)",
                color: "#F2F2F2",
                fontFamily: "'Inter', sans-serif",
                resize: "vertical",
              }}
              onFocus={(e) => {
                e.currentTarget.style.borderColor = "#C41B2C";
                e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.08)";
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.1)";
                e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.05)";
              }}
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full px-8 py-4 rounded-lg font-semibold transition-all duration-300"
            style={{
              backgroundColor: loading ? "rgba(196, 27, 44, 0.5)" : "#C41B2C",
              color: "#F2F2F2",
              fontFamily: "'Inter', sans-serif",
              cursor: loading ? "not-allowed" : "pointer",
            }}
            onMouseEnter={(e) => {
              if (!loading) {
                e.currentTarget.style.backgroundColor = "#A01624";
                e.currentTarget.style.transform = "scale(1.02)";
              }
            }}
            onMouseLeave={(e) => {
              if (!loading) {
                e.currentTarget.style.backgroundColor = "#C41B2C";
                e.currentTarget.style.transform = "scale(1)";
              }
            }}
          >
            {loading ? "Enviando..." : "Enviar Solicitação"}
          </button>
        </form>
      </div>
    </div>
  );
}
