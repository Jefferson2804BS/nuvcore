import { useState } from 'react';

const services = [
  {
    id: 1,
    title: 'Desenvolvimento Web & Design',
    description:
      'Eu desenvolvo sites institucionais e plataformas digitais com foco em performance, posicionamento e conversão. Cada linha de código tem um propósito.',
    deliverables: [
      'HTML, CSS & JavaScript',
      'Código limpo e otimizado',
      'SEO técnico',
      'Responsivo',
    ],
  },
  {
    id: 2,
    title: 'Landing Pages de Alta Conversão',
    description:
      'Páginas construídas para converter visitantes em clientes. Estrutura de copywriting, hierarquia visual e CTA estratégicos integrados ao design.',
    deliverables: [
      'Copywriting estratégico',
      'A/B ready',
      'Carregamento rápido',
      'Integração com CRM',
    ],
  },
  {
    id: 3,
    title: 'Planejamento de Estrutura Digital',
    description:
      'Antes de construir, eu planejo. Análise de mercado, arquitetura de informação e definição de jornada do usuário para garantir que o projeto nasce certo.',
    deliverables: [
      'Arquitetura de informação',
      'Jornada do usuário',
      'Análise competitiva',
      'Wireframes estratégicos',
    ],
  },
  {
    id: 4,
    title: 'Otimização de Sites Existentes',
    description:
      'Diagnóstico técnico e estratégico do seu site atual. Identifico gargalos de performance, problemas de conversão e oportunidades de melhoria.',
    deliverables: [
      'Auditoria técnica',
      'Core Web Vitals',
      'Otimização de conversão',
      'Relatório detalhado',
    ],
  },
];

export default function ServicesAccordion() {
  const [activeId, setActiveId] = useState<number | null>(1);

  const toggleAccordion = (id: number) => {
    // Se clicar no item aberto, fecha; se clicar em outro, abre
    setActiveId(activeId === id ? null : id);
  };

  return (
    <section id="services" className="bg-[#080808] py-24 px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold text-[#F2EFE9] mb-16 text-center font-space-grotesk">
          O que eu construo para você
        </h2>

        <div className="space-y-0 border border-[#1E1E1E] rounded">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`border-b border-[#1E1E1E] last:border-b-0 ${
                activeId === service.id ? 'bg-[#101010]' : 'bg-[#080808]'
              }`}
            >
              <button
                onClick={() => toggleAccordion(service.id)}
                className="w-full px-8 py-6 flex justify-between items-center hover:bg-[#101010] transition-colors"
              >
                <h3 className="text-2xl font-bold text-[#F2EFE9] text-left font-space-grotesk">
                  {service.title}
                </h3>
                <div
                  className={`w-6 h-6 border-2 border-[#9A9490] rounded flex items-center justify-center transition-all ${
                    activeId === service.id
                      ? 'border-[#E5001B] bg-[#E5001B]'
                      : ''
                  }`}
                >
                  <span
                    className={`text-sm font-bold transition-colors ${
                      activeId === service.id
                        ? 'text-[#080808]'
                        : 'text-[#9A9490]'
                    }`}
                  >
                    {activeId === service.id ? '−' : '+'}
                  </span>
                </div>
              </button>

              {activeId === service.id && (
                <div className="bg-[#101010] px-8 py-8 border-t border-[#1E1E1E] animate-in fade-in duration-300">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-2xl font-bold text-[#F2EFE9] mb-4 font-space-grotesk">
                        {service.title}
                      </h3>
                      <p className="text-[#9A9490] mb-6 leading-relaxed">
                        {service.description}
                      </p>
                      <div className="space-y-3">
                        {service.deliverables.map((item, idx) => (
                          <div key={idx} className="flex items-center gap-3">
                            <span className="text-[#E5001B] font-bold">✓</span>
                            <span className="text-[#9A9490] text-sm">
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="bg-[#161616] border-l-4 border-[#E5001B] p-8 flex items-center justify-center min-h-80 relative overflow-hidden">
                      <div className="absolute text-8xl font-bold text-[#E5001B] opacity-10 font-space-grotesk">
                        {String(index + 1).padStart(2, '0')}
                      </div>
                      <div className="relative z-10 text-center">
                        <p className="text-[#9A9490] text-sm">Serviço</p>
                        <p className="text-[#F2EFE9] text-lg font-bold mt-2">
                          {service.title}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
