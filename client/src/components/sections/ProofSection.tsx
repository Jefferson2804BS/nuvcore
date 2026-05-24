export default function ProofSection() {
  const projects = [
    {
      category: "Professor de Violino",
      title: "Gersinho o Aprendiz",
      description: "Website desenvolvido para um professor de violino que apresenta seu trabalho, sua história e as aulas que oferece.",
      link: "https://gersinhooaprendiz.lovable.app/",
    },
    {
      category: "Academia",
      title: "Blue Fit",
      description: "Site institucional desenvolvido para academia com foco em apresentar estrutura, serviços e incentivar novos alunos a conhecer o espaço.",
      link: "#",
    },
    {
      category: "Clínica Odontológica",
      title: "Odonto Max",
      description: "Website desenvolvido para clínica odontológica com objetivo de apresentar os serviços oferecidos e facilitar o contato com novos pacientes.",
      link: "#",
    },
    {
      category: "Marcenaria",
      title: "Vila Real Planejados",
      description: "Marcenaria especializada em móveis planejados. Site desenvolvido para apresentar portfólio de trabalhos e facilitar contato com clientes.",
      link: "#",
    },
    {
      category: "Restaurante",
      title: "Nuvcore Hamburgueria",
      description: "Hamburgueria com sistema de carrinho e cálculo de frete. Plataforma completa para pedidos online com integração de pagamento.",
      link: "#",
    },
  ];

  return (
    <section className="py-20 md:py-32 px-4 md:px-6" style={{ backgroundColor: "#F5F0E8" }}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 md:mb-20" style={{ color: "#0A0A0A" }}>
          Projetos desenvolvidos
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="fade-up p-6 md:p-8 rounded-sm border transition-all duration-300 hover:border-red-600"
              style={{
                backgroundColor: "rgba(229, 0, 27, 0.05)",
                borderColor: "rgba(229, 0, 27, 0.1)",
              }}
            >
              {/* Category */}
              <div className="text-xs md:text-sm font-bold uppercase tracking-wider mb-3" style={{ color: "#E5001B" }}>
                {project.category}
              </div>

              {/* Title */}
              <h3 className="text-lg md:text-xl font-bold mb-3" style={{ color: "#0A0A0A" }}>
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: "rgba(10, 10, 10, 0.7)" }}>
                {project.description}
              </p>

              {/* Link */}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm md:text-base font-bold transition-colors duration-300 hover:text-red-700"
                style={{ color: "#E5001B" }}
              >
                Visitar Site →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
