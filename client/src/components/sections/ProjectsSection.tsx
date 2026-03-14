import { useEffect, useRef, useState } from "react";

interface Project {
  id: number;
  title: string;
  segment: string;
  description: string;
  url: string;
  image: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Gersinho o Aprendiz",
    segment: "Professor de Violino",
    description:
      "Website desenvolvido para um professor de violino que apresenta seu trabalho, sua história e as aulas que oferece.",
    url: "https://gersinhooaprendiz.lovable.app/",
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663387028892/g9wfxJ5VyEKEsr9ErzHzmc/Screenshot_2026-03-12-00-28-30-463_com.whatsapp-edit_ad1ae523.jpg",
  },
  {
    id: 2,
    title: "Blue Fit",
    segment: "Academia",
    description:
      "Site institucional desenvolvido para academia com foco em apresentar estrutura, serviços e incentivar novos alunos a conhecer o espaço.",
    url: "https://bluefit-fit.lovable.app/",
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663387028892/g9wfxJ5VyEKEsr9ErzHzmc/IMG_20260314_130820_426713cf.jpg",
  },
  {
    id: 3,
    title: "Odonto Max",
    segment: "Clínica Odontológica",
    description:
      "Website desenvolvido para clínica odontológica com objetivo de apresentar os serviços oferecidos e facilitar o contato com novos pacientes.",
    url: "https://odontomax.lovable.app/",
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663387028892/g9wfxJ5VyEKEsr9ErzHzmc/IMG_20260314_130846_e1889b5a.jpg",
  },
];

export default function ProjectsSection() {
  const [visibleProjects, setVisibleProjects] = useState<Set<number>>(
    new Set()
  );
  const projectRefs = useRef<Map<number, HTMLDivElement | null>>(new Map());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const projectId = parseInt(
              (entry.target as HTMLElement).getAttribute("data-project-id") ||
                "0"
            );
                setVisibleProjects((prev) => {
                  const newSet = new Set(prev);
                  newSet.add(projectId);
                  return newSet;
                });
          }
        });
      },
      { threshold: 0.1 }
    );

    projectRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      projectRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section
      className="py-20 px-4 md:px-8 lg:px-16"
      style={{
        backgroundColor: "#0F0F12",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background watermark */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          right: "-10%",
          width: "400px",
          height: "400px",
          backgroundImage:
            'url("https://cdn.jsdelivr.net/gh/nuvcore/assets/logo.svg")',
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          opacity: 0.03,
          transform: "translateY(-50%)",
          pointerEvents: "none",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div
            className="inline-block mb-4"
            style={{
              width: "60px",
              height: "2px",
              backgroundColor: "#C41B2C",
            }}
          />
          <h2
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{
              color: "#F2F2F2",
              fontFamily: "'Space Grotesk', sans-serif",
            }}
          >
            Projetos{" "}
            <span style={{ color: "#C41B2C" }}>Desenvolvidos</span>
          </h2>
          <p
            className="text-lg max-w-2xl mx-auto"
            style={{
              color: "rgba(242, 242, 242, 0.7)",
              fontFamily: "'Inter', sans-serif",
            }}
          >
            Conheça alguns dos projetos que desenvolvemos. Cada site representa
            uma solução digital criada para atender necessidades reais de
            clientes.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              ref={(el) => {
                if (el) projectRefs.current.set(project.id, el);
              }}
              data-project-id={project.id}
              className="group"
              style={{
                opacity: visibleProjects.has(project.id) ? 1 : 0,
                transform: visibleProjects.has(project.id)
                  ? "translateY(0)"
                  : "translateY(30px)",
                transition: "all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)",
              }}
            >
              <div
                className="rounded-xl overflow-hidden h-full flex flex-col"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.05)",
                  border: "1px solid rgba(196, 27, 44, 0.2)",
                  backdropFilter: "blur(10px)",
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  const card = e.currentTarget;
                  card.style.backgroundColor = "rgba(255, 255, 255, 0.08)";
                  card.style.borderColor = "rgba(196, 27, 44, 0.5)";
                  card.style.transform = "translateY(-8px)";
                  card.style.boxShadow =
                    "0 20px 40px rgba(196, 27, 44, 0.15)";
                }}
                onMouseLeave={(e) => {
                  const card = e.currentTarget;
                  card.style.backgroundColor = "rgba(255, 255, 255, 0.05)";
                  card.style.borderColor = "rgba(196, 27, 44, 0.2)";
                  card.style.transform = "translateY(0)";
                  card.style.boxShadow = "none";
                }}
              >
                {/* Image */}
                <div className="relative overflow-hidden h-48 bg-gradient-to-br from-gray-800 to-gray-900">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    style={{
                      transition: "transform 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      (e.target as HTMLImageElement).style.transform =
                        "scale(1.05)";
                    }}
                    onMouseLeave={(e) => {
                      (e.target as HTMLImageElement).style.transform =
                        "scale(1)";
                    }}
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(196, 27, 44, 0.1) 0%, transparent 100%)",
                    }}
                  />
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  {/* Segment */}
                  <div
                    className="inline-block mb-3 px-3 py-1 rounded-full text-xs font-semibold"
                    style={{
                      backgroundColor: "rgba(196, 27, 44, 0.2)",
                      color: "#C41B2C",
                      fontFamily: "'Inter', sans-serif",
                      width: "fit-content",
                    }}
                  >
                    {project.segment}
                  </div>

                  {/* Title */}
                  <h3
                    className="text-xl font-bold mb-2"
                    style={{
                      color: "#F2F2F2",
                      fontFamily: "'Space Grotesk', sans-serif",
                    }}
                  >
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="text-sm mb-6 flex-grow"
                    style={{
                      color: "rgba(242, 242, 242, 0.6)",
                      fontFamily: "'Inter', sans-serif",
                      lineHeight: "1.6",
                    }}
                  >
                    {project.description}
                  </p>

                  {/* Button */}
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-6 py-2 rounded-lg font-semibold text-center transition-all duration-300"
                    style={{
                      backgroundColor: "#C41B2C",
                      color: "#F2F2F2",
                      fontFamily: "'Inter', sans-serif",
                      textDecoration: "none",
                    }}
                    onMouseEnter={(e) => {
                      const btn = e.currentTarget;
                      btn.style.backgroundColor = "#A01624";
                      btn.style.transform = "scale(1.05)";
                    }}
                    onMouseLeave={(e) => {
                      const btn = e.currentTarget;
                      btn.style.backgroundColor = "#C41B2C";
                      btn.style.transform = "scale(1)";
                    }}
                  >
                    Visitar Site →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
