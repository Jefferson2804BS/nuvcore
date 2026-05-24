import { useEffect, useState, useRef } from 'react';
import HeroSection from '@/components/sections/HeroSection';
import TensionSection from '@/components/sections/TensionSection';
import SolutionSection from '@/components/sections/SolutionSection';
import ServicesAccordion from '@/components/sections/ServicesAccordion';
import HowItWorksSection from '@/components/sections/HowItWorksSection';
import PortfolioSection from '@/components/sections/PortfolioSection';
import MetricsSection from '@/components/sections/MetricsSection';
import FinalCTASection from '@/components/sections/FinalCTASection';
import Footer from '@/components/Footer';

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Navbar scroll effect
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    window.addEventListener('scroll', handleScroll);

    // Intersection Observer for animations
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.12 }
    );

    // Observe all sections
    document.querySelectorAll('section').forEach((section) => {
      observerRef.current?.observe(section);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observerRef.current?.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#080808] text-[#F2EFE9]">
      {/* Navigation */}
      <header
        className={`fixed top-0 left-0 right-0 z-1000 transition-all duration-300 ${
          scrolled
            ? 'bg-[#080808] border-b border-[#1E1E1E]'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <nav className="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto w-full">
          <a href="#" className="text-2xl font-bold text-[#F2EFE9]">
            NUVCORE
          </a>
          <ul className="hidden md:flex gap-12 list-none">
            <li>
              <a
                href="#about"
                className="text-sm text-[#9A9490] hover:text-[#E5001B] transition-colors"
              >
                Sobre
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="text-sm text-[#9A9490] hover:text-[#E5001B] transition-colors"
              >
                Serviços
              </a>
            </li>
            <li>
              <a
                href="#how-it-works"
                className="text-sm text-[#9A9490] hover:text-[#E5001B] transition-colors"
              >
                Processo
              </a>
            </li>
            <li>
              <a
                href="#portfolio"
                className="text-sm text-[#9A9490] hover:text-[#E5001B] transition-colors"
              >
                Portfólio
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-sm text-[#9A9490] hover:text-[#E5001B] transition-colors"
              >
                Contato
              </a>
            </li>
          </ul>
          <button
            onClick={() =>
              window.open(
                'https://wa.me/5585987654321?text=Quero%20um%20diagnóstico%20gratuito',
                '_blank'
              )
            }
            className="hidden md:block bg-transparent border border-[#E5001B] text-[#E5001B] px-6 py-3 rounded text-sm font-medium hover:bg-[#E5001B] hover:text-[#080808] transition-all"
          >
            Diagnóstico
          </button>
        </nav>
      </header>

      <main>
        {/* Section 1: Hero */}
        <HeroSection />

        {/* Section 2: Marquee Strip */}
        <section className="bg-[#101010] py-12 overflow-hidden">
          <div className="marquee flex gap-16 animate-scroll w-fit">
            <div className="marquee-item flex-shrink-0 text-lg font-medium text-[#9A9490] whitespace-nowrap">
              150+ Projetos Entregues
            </div>
            <div className="marquee-item flex-shrink-0 text-lg font-medium text-[#9A9490] whitespace-nowrap">
              80+ Clientes Satisfeitos
            </div>
            <div className="marquee-item flex-shrink-0 text-lg font-medium text-[#9A9490] whitespace-nowrap">
              7 Dias Entrega Média
            </div>
            <div className="marquee-item flex-shrink-0 text-lg font-medium text-[#9A9490] whitespace-nowrap">
              98% Taxa de Satisfação
            </div>
            <div className="marquee-item flex-shrink-0 text-lg font-medium text-[#9A9490] whitespace-nowrap">
              150+ Projetos Entregues
            </div>
            <div className="marquee-item flex-shrink-0 text-lg font-medium text-[#9A9490] whitespace-nowrap">
              80+ Clientes Satisfeitos
            </div>
          </div>
        </section>

        {/* Section 3: Tension */}
        <TensionSection />

        {/* Section 4: Services Accordion */}
        <ServicesAccordion />

        {/* Section 5: How It Works */}
        <HowItWorksSection />

        {/* Section 6: Portfolio */}
        <PortfolioSection />

        {/* Section 7: Metrics */}
        <MetricsSection />

        {/* Section 8: Final CTA */}
        <FinalCTASection />
      </main>

      {/* Section 9: Footer */}
      <Footer />

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/5585987654321?text=Quero%20um%20diagnóstico%20gratuito"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 w-14 h-14 bg-[#E5001B] rounded-full flex items-center justify-center z-999 hover:scale-110 transition-transform shadow-lg hover:shadow-xl"
        title="Fale conosco no WhatsApp"
      >
        <svg
          className="w-7 h-7 fill-white"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a6.963 6.963 0 00-6.961 6.961 6.968 6.968 0 006.961 6.968c1.858 0 3.601-.723 4.907-2.029a6.976 6.976 0 002.054-4.939 6.977 6.977 0 00-6.961-6.961zM12.001 0C5.383 0 .001 5.383.001 12s5.382 12 11.999 12c2.821 0 5.465-.899 7.708-2.545l4.192 1.097-1.097-4.192A11.981 11.981 0 0024 12c0-6.617-5.383-12-12-12z" />
        </svg>
      </a>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 30s linear infinite;
        }

        .marquee:hover {
          animation-play-state: paused;
        }

        section {
          opacity: 0;
          transform: translateY(32px);
          transition: opacity 600ms cubic-bezier(0.22, 1, 0.36, 1),
            transform 600ms cubic-bezier(0.22, 1, 0.36, 1);
        }

        section.visible {
          opacity: 1;
          transform: translateY(0);
        }

        @media (max-width: 768px) {
          nav {
            padding: 1rem;
          }

          .marquee-item {
            font-size: 14px;
            gap: 2rem;
          }
        }
      `}</style>
    </div>
  );
}
