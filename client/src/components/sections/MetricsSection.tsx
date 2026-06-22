import { useEffect, useState, useRef } from 'react';

const metrics = [
  { label: 'PROJETOS ENTREGUES', value: 40, suffix: '+' },
  { label: 'CLIENTES SATISFEITOS', value: 20, suffix: '+' },
  { label: 'ENTREGA MÉDIA', value: 7, suffix: ' dias' },
  { label: 'TAXA DE SATISFAÇÃO', value: 98, suffix: '%' },
];

export default function MetricsSection() {
  const [counts, setCounts] = useState<Record<number, number>>({});
  const sectionRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;
            animateCounters();
          }
        });
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const animateCounters = () => {
    metrics.forEach((metric, idx) => {
      let current = 0;
      const increment = metric.value / 50;
      const timer = setInterval(() => {
        current += increment;
        if (current >= metric.value) {
          setCounts((prev) => ({ ...prev, [idx]: metric.value }));
          clearInterval(timer);
        } else {
          setCounts((prev) => ({ ...prev, [idx]: Math.floor(current) }));
        }
      }, 30);
    });
  };

  return (
    <section
      ref={sectionRef}
      className="bg-[#101010] py-24 px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-12 pb-12 border-b border-[#1E1E1E]">
          {metrics.map((metric, idx) => (
            <div key={idx} className="text-center">
              <div className="text-6xl md:text-7xl font-bold text-[#F2EFE9] font-space-grotesk mb-2">
                <span>{counts[idx] || 0}</span>
                <span className="text-[#E5001B]">{metric.suffix}</span>
              </div>
              <p className="text-xs uppercase text-[#9A9490] font-medium tracking-wider">
                {metric.label}
              </p>
            </div>
          ))}
        </div>

        <p className="text-[#9A9490] leading-relaxed text-center max-w-3xl mx-auto">
          A NUVCORE nasceu da convicção de que a maioria dos negócios digitais
          falha não por falta de produto, mas por falta de presença estratégica.
          Transformamos presença digital em vantagem competitiva real para
          startups e pequenos negócios que constroem o futuro.
        </p>
      </div>
    </section>
  );
}
