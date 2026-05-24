/*
 * NUVCORE — Navbar Component
 * Design: "Precision Dark" — sticky, transparent → solid on scroll
 * Logo: Official NUVCORE logo
 */

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const LOGO_URL = "/manus-storage/file_00000000e508720e82e3a56520af3e8e_1b924e00.png";
const LOGO_ICON_URL = "/manus-storage/file_00000000e508720e82e3a56520af3e8e_febdde19.png";

const navLinks = [
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Processo", href: "#processo" },
  { label: "Portfólio", href: "#portfolio" },
  { label: "Contato", href: "#contato" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: "rgba(15, 15, 18, 0.98)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div className="container">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            className="flex items-center gap-2 group"
            style={{ display: "flex", alignItems: "center", gap: "10px" }}
          >
            <img
              src={LOGO_ICON_URL}
              alt="NUVCORE"
              style={{
                height: "32px",
                width: "auto",
                display: "inline-block",
                verticalAlign: "middle",
              }}
            />
            <span
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: "700",
                fontSize: "20px",
                color: "#F2EFE9",
                letterSpacing: "0.06em",
                verticalAlign: "middle",
              }}
            >
              NUVCORE
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-sm font-medium transition-colors duration-200"
                style={{
                  color: "rgba(242,242,242,0.7)",
                  fontFamily: "'Inter', sans-serif",
                  background: "none",
                  border: "none",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#F2F2F2")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(242,242,242,0.7)")}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="https://wa.me/5511912830541"
              target="_blank"
              rel="noopener noreferrer"
              className="nv-btn-primary text-sm"
            >
              Vamos Conversar
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div
            className="lg:hidden py-4 border-t"
            style={{ borderColor: "rgba(255,255,255,0.06)" }}
          >
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left py-3 px-2 text-sm font-medium transition-colors duration-200 rounded"
                  style={{
                    color: "rgba(242,242,242,0.8)",
                    fontFamily: "'Inter', sans-serif",
                    background: "none",
                    border: "none",
                  }}
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => handleNavClick("#contato")}
                className="nv-btn-primary mt-3 justify-center"
              >
                Solicitar Diagnóstico
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
