const problems = [
  {
    number: '01',
    title: 'Seu site não comunica com clareza',
    description:
      'Um site mal estruturado não comunica, não converte e não posiciona. Visitantes chegam, mas não entendem o que você oferece.',
  },
  {
    number: '02',
    title: 'Você investe em tráfego, mas ninguém converte',
    description:
      'Sem hierarquia visual, copywriting estratégico e CTAs claros, até o melhor tráfego se perde. Visitantes chegam, mas não viram clientes.',
  },
  {
    number: '03',
    title: 'Falta clareza sobre o próximo passo',
    description:
      'Você não sabe como estruturar sua presença digital. Precisa de alguém que entenda seu negócio e construa a solução certa.',
  },
];

export default function TensionSection() {
  return (
    <section id="about" className="bg-[#080808] py-24 px-8">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
        <div className="md:col-span-1">
          <h2 className="text-4xl md:text-5xl font-bold text-[#F2EFE9] mb-6 font-space-grotesk leading-tight">
            Por que a maioria dos sites falha
          </h2>
          <p className="text-[#9A9490] leading-relaxed">
            A realidade é que a maioria dos negócios digitais não fracassa por
            falta de produto, mas por falta de presença estratégica.
          </p>
        </div>

        <div className="md:col-span-2 space-y-8">
          {problems.map((problem, idx) => (
            <div
              key={idx}
              className="pb-8 border-b border-[#E5001B] border-opacity-30 last:border-b-0"
            >
              <div className="text-7xl font-bold text-[#E5001B] opacity-30 mb-3 font-space-grotesk leading-none">
                {problem.number}
              </div>
              <h3 className="text-2xl font-bold text-[#F2EFE9] mb-3 font-space-grotesk">
                {problem.title}
              </h3>
              <p className="text-[#9A9490] leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
