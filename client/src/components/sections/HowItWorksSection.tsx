export default function HowItWorksSection() {
  const steps = [
    {
      number: "1",
      title: "Análise estratégica",
      description: "Entendo seu negócio, seu público e seus objetivos. Análise de mercado, arquitetura de informação e definição de jornada do usuário.",
    },
    {
      number: "2",
      title: "Estrutura e design",
      description: "Construo a estrutura digital com foco em performance, posicionamento e conversão. Cada elemento tem um propósito claro.",
    },
    {
      number: "3",
      title: "Resultado e crescimento",
      description: "Você tem uma presença digital que comunica, converte e posiciona seu negócio como referência no mercado.",
    },
  ];

  return (
    <section className="py-20 md:py-32 px-4 md:px-6" style={{ backgroundColor: "#0A0A0A" }}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 md:mb-20" style={{ color: "#F0EDE8" }}>
          Como funciona
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {steps.map((step, index) => (
            <div key={index} className="fade-up text-center">
              {/* Step Number */}
              <div
                className="w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center mx-auto mb-6 font-bold text-white text-lg md:text-xl"
                style={{ backgroundColor: "#E5001B" }}
              >
                {step.number}
              </div>

              {/* Title */}
              <h3 className="text-lg md:text-xl font-bold mb-4" style={{ color: "#F0EDE8" }}>
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-sm md:text-base leading-relaxed" style={{ color: "rgba(240, 237, 232, 0.7)" }}>
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
