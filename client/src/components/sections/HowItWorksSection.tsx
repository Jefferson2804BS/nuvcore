const steps = [
  {
    number: '01',
    title: 'Briefing & Análise',
    description:
      'Entendo profundamente seu negócio, seu público e seus objetivos. Essa clareza é o alicerce de tudo.',
    time: '1–2 dias',
  },
  {
    number: '02',
    title: 'Estratégia & Estrutura',
    description:
      'Defino a arquitetura digital, a jornada do usuário e o posicionamento que vai trabalhar por você.',
    time: '3–5 dias',
  },
  {
    number: '03',
    title: 'Desenvolvimento & Entrega',
    description:
      'Construo com precisão, testando cada detalhe. Você recebe um site pronto para crescer.',
    time: '7–14 dias',
  },
];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="bg-[#101010] py-24 px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold text-[#F2EFE9] mb-16 text-center font-space-grotesk">
          Como funciona
        </h2>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {steps.map((step, idx) => (
            <div key={idx} className="text-center">
              <div className="text-8xl font-bold text-[#E5001B] opacity-30 mb-4 font-space-grotesk leading-none">
                {step.number}
              </div>
              <h3 className="text-2xl font-bold text-[#F2EFE9] mb-3 font-space-grotesk">
                {step.title}
              </h3>
              <p className="text-[#9A9490] mb-4 leading-relaxed">
                {step.description}
              </p>
              <span className="text-xs uppercase text-[#E5001B] font-medium">
                {step.time}
              </span>
            </div>
          ))}

          {/* Connecting Line */}
          <svg
            className="absolute top-20 left-0 right-0 w-full h-1 hidden md:block"
            style={{ pointerEvents: 'none' }}
            viewBox="0 0 100 2"
            preserveAspectRatio="none"
          >
            <line
              x1="0"
              y1="1"
              x2="100"
              y2="1"
              stroke="#E5001B"
              strokeWidth="2"
              strokeDasharray="5,5"
              opacity="0.3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
