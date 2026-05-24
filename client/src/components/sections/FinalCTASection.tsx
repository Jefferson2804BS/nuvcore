export default function FinalCTASection() {
  return (
    <section className="py-20 md:py-32 px-4 md:px-6" style={{ backgroundColor: "#F5F0E8" }}>
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 md:mb-8" style={{ color: "#0A0A0A" }}>
          Pronto para construir sua estrutura digital <span style={{ color: "#E5001B" }}>estratégica?</span>
        </h2>

        <p className="text-base md:text-lg leading-relaxed mb-10 md:mb-12" style={{ color: "rgba(10, 10, 10, 0.75)" }}>
          Agende um diagnóstico gratuito de 30 minutos. Vou analisar sua presença digital atual, identificar oportunidades e apresentar um caminho claro para o crescimento. Sem compromisso. Sem pressão. Apenas clareza sobre o próximo passo.
        </p>

        <a
          href="https://forms.gle/JK1cLA8zbAJRe2uz9"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 md:px-12 py-4 md:py-5 rounded-sm font-bold text-white transition-all duration-300 hover:scale-105 text-base md:text-lg"
          style={{ backgroundColor: "#E5001B" }}
        >
          Preencher Briefing
        </a>
      </div>
    </section>
  );
}
