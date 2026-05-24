const projects = [
  {
    id: 1,
    name: 'Gersinho',
    category: 'Professor de Violino',
    title: 'Gersinho o Aprendiz',
    description:
      'Website desenvolvido para um professor de violino que apresenta seu trabalho, sua história e as aulas que oferece.',
    url: '#',
  },
  {
    id: 2,
    name: 'Blue',
    category: 'Academia',
    title: 'Blue Fit',
    description:
      'Site institucional desenvolvido para academia com foco em apresentar estrutura, serviços e incentivar novos alunos.',
    url: '#',
  },
  {
    id: 3,
    name: 'Odonto',
    category: 'Clínica Odontológica',
    title: 'Odonto Max',
    description:
      'Website desenvolvido para clínica odontológica com objetivo de apresentar os serviços oferecidos.',
    url: '#',
  },
  {
    id: 4,
    name: 'Vila',
    category: 'Marcenaria',
    title: 'Vila Real Planejados',
    description:
      'Marcenaria especializada em móveis planejados. Site desenvolvido para apresentar portfólio de trabalhos.',
    url: '#',
  },
  {
    id: 5,
    name: 'Burger',
    category: 'Restaurante',
    title: 'Nuvcore Hamburgueria',
    description:
      'Hamburgueria com sistema de carrinho e cálculo de frete. Plataforma completa para pedidos online.',
    url: '#',
  },
];

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="bg-[#080808] py-24 px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold text-[#F2EFE9] mb-16 text-center font-space-grotesk">
          Projetos desenvolvidos
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <a
              key={project.id}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group ${
                idx === 0 ? 'md:col-span-2 lg:col-span-2 md:row-span-2' : ''
              } bg-[#101010] border border-[#1E1E1E] rounded p-8 hover:border-[#E5001B] transition-all duration-300`}
            >
              <div className="mb-4">
                <p className="text-xs uppercase tracking-widest text-[#9A9490] font-medium mb-2">
                  {project.category}
                </p>
                <h3 className="text-2xl font-bold text-[#F2EFE9] font-space-grotesk">
                  {project.title}
                </h3>
              </div>

              <p className="text-[#9A9490] leading-relaxed mb-6">
                {project.description}
              </p>

              <div className="flex items-center gap-2 text-[#E5001B] font-medium text-sm group-hover:gap-3 transition-all">
                <span>VISITAR SITE</span>
                <span>→</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
