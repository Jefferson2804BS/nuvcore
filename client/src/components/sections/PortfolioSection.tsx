const projects = [
  {
    id: 1,
    number: '01',
    name: 'Gersinho Aprendiz',
    segment: 'Educação Musical',
    description:
      'Website para professor de violino apresentando sua história, trabalho e aulas oferecidas.',
    url: 'https://gersinhooaprendiz.lovable.app/',
  },
  {
    id: 2,
    number: '02',
    name: 'Vila Real Planejados',
    segment: 'Móveis Planejados',
    description:
      'Site institucional para marcenaria especializada em móveis planejados.',
    url: 'https://vilarealplanejados.lovable.app/',
  },
  {
    id: 3,
    number: '03',
    name: 'Nuvcore Hamburgueria',
    segment: 'Food & Delivery',
    description:
      'Site para hamburgueria com modelo de cardápio, carrinho de pedidos e cálculo de frete.',
    url: 'https://nuvcorehaburgeriateste.lovable.app/',
  },
  {
    id: 4,
    number: '04',
    name: 'Bluefit Academia',
    segment: 'Fitness & Saúde',
    description:
      'Site institucional para academia com foco em apresentar estrutura, serviços e captar novos alunos.',
    url: 'https://bluefit-fit.lovable.app/',
  },
  {
    id: 5,
    number: '05',
    name: 'Odonto Max',
    segment: 'Odontologia',
    description:
      'Website para clínica odontológica apresentando serviços e facilitando contato com novos pacientes.',
    url: 'https://odontomax.lovable.app/',
  },
];

export default function PortfolioSection() {
  return (
    <section className="bg-[#080808] py-[120px] px-5 md:px-8 lg:px-8">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="mb-16 text-center">
          <p className="text-xs uppercase tracking-[0.14em] text-[#E5001B] font-medium mb-6">
            Trabalhos Entregues
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#F2EFE9] font-space-grotesk leading-tight">
            Sites criados pela NUVCORE
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {projects.map((project) => (
            <a
              key={project.id}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group border border-[#1E1E1E] rounded overflow-hidden hover:border-[#E5001B] transition-all duration-250 hover:scale-[1.02]"
            >
              {/* Top Block */}
              <div className="bg-[#161616] h-40 flex items-center justify-center relative overflow-hidden">
                <div className="text-9xl font-bold text-[#F2EFE9] opacity-6 font-space-grotesk">
                  {project.number}
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-[#E5001B] to-transparent opacity-0 group-hover:opacity-15 transition-opacity duration-250" />
              </div>

              {/* Bottom Block */}
              <div className="bg-[#101010] p-6">
                <p className="text-xs uppercase tracking-[0.14em] text-[#E5001B] font-medium mb-2">
                  {project.segment}
                </p>
                <h3 className="text-xl font-bold text-[#F2EFE9] font-space-grotesk mb-3">
                  {project.name}
                </h3>
                <p className="text-sm text-[#9A9490] leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex items-center gap-2 text-[#E5001B] font-medium text-sm group-hover:gap-3 transition-all">
                  <span>Ver projeto</span>
                  <span>→</span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-sm text-[#9A9490] mb-4">
            Quer um site como esses para o seu negócio?
          </p>
          <button
            onClick={() =>
              window.open(
                'https://wa.me/5511912830541?text=Ol%C3%A1%2C%20quero%20o%20diagn%C3%B3stico%20gratuito%20do%20meu%20site',
                '_blank'
              )
            }
            className="bg-[#E5001B] text-[#080808] px-8 py-3 rounded font-bold hover:bg-[#BF0016] transition-all"
          >
            Quero meu diagnóstico gratuito →
          </button>
        </div>
      </div>
    </section>
  );
}
