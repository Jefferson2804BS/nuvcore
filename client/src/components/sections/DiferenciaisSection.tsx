import { useEffect, useRef, useState } from "react";
import { Palette, Zap, Target, Users } from "lucide-react";

interface Diferencial {
  id: number;
  title: string;
  icon: React.ReactNode;
}

const diferenciais: Diferencial[] = [
  {
    id: 1,
    title: "Design moderno e responsivo",
    icon: <Palette className="w-8 h-8" />,
  },
  {
    id: 2,
    title: "Desenvolvimento rápido e eficiente",
    icon: <Zap className="w-8 h-8" />,
  },
  {
    id: 3,
    title: "Soluções digitais personalizadas",
    icon: <Target className="w-8 h-8" />,
  },
  {
    id: 4,
    title: "Experiência focada no usuário",
    icon: <Users className="w-8 h-8" />,
  },
];

export default function DiferenciaisSection() {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const itemRefs = useRef<Map<number, HTMLDivElement | null>>(new Map());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const itemId = parseInt(
              (entry.target as HTMLElement).getAttribute("data-item-id") || "0"
            );
            setVisibleItems((prev) => {
              const newSet = new Set(prev);
              newSet.add(itemId);
              return newSet;
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      itemRefs.current.forEach((ref) => {
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
          left: "-10%",
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
            Nossos <span style={{ color: "#C41B2C" }}>Diferenciais</span>
          </h2>
          <p
            className="text-lg max-w-2xl mx-auto"
            style={{
              color: "rgba(242, 242, 242, 0.7)",
              fontFamily: "'Inter', sans-serif",
            }}
          >
            Desenvolvemos soluções digitais modernas focadas em desempenho,
            design e experiência do usuário.
          </p>
        </div>

        {/* Diferenciais Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {diferenciais.map((diferencial) => (
            <div
              key={diferencial.id}
              ref={(el) => {
                if (el) itemRefs.current.set(diferencial.id, el);
              }}
              data-item-id={diferencial.id}
              className="group"
              style={{
                opacity: visibleItems.has(diferencial.id) ? 1 : 0,
                transform: visibleItems.has(diferencial.id)
                  ? "translateY(0)"
                  : "translateY(30px)",
                transition: `all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) ${
                  diferencial.id * 0.1
                }s`,
              }}
            >
              <div
                className="p-8 rounded-xl h-full flex flex-col items-center text-center"
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
                  card.style.boxShadow = "0 20px 40px rgba(196, 27, 44, 0.15)";
                }}
                onMouseLeave={(e) => {
                  const card = e.currentTarget;
                  card.style.backgroundColor = "rgba(255, 255, 255, 0.05)";
                  card.style.borderColor = "rgba(196, 27, 44, 0.2)";
                  card.style.transform = "translateY(0)";
                  card.style.boxShadow = "none";
                }}
              >
                {/* Icon */}
                <div
                  className="mb-4 flex justify-center"
                  style={{
                    transition: "transform 0.3s ease",
                    color: "#C41B2C",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.transform =
                      "scale(1.2) rotate(10deg)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.transform =
                      "scale(1) rotate(0deg)";
                  }}
                >
                  {diferencial.icon}
                </div>

                {/* Title */}
                <h3
                  className="text-lg font-bold"
                  style={{
                    color: "#F2F2F2",
                    fontFamily: "'Space Grotesk', sans-serif",
                  }}
                >
                  {diferencial.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
