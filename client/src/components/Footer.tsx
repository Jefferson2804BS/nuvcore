/*
 * NUVCORE — Footer Component
 * Design: "Precision Dark" — minimal, structured, social links
 * Logo: Official NUVCORE logo
 */

import { Mail, Instagram } from "lucide-react";

const LOGO_URL = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663387028892/RLWfTMXfVFnGSRxy.png";

const navLinks = [
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Processo", href: "#processo" },
  { label: "Portfólio", href: "#portfolio" },
  { label: "Contato", href: "#contato" },
];

export default function Footer() {
  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer
      style={{ backgroundColor: "#0F0F12", borderTop: "1px solid rgba(255,255,255,0.06)" }}
    >
      <div className="container py-12">
        <div className="grid lg:grid-cols-3 gap-10 items-start mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
            <img
              src={LOGO_URL}
              alt="NUVCORE Logo"
              className="w-10 h-10 object-contain"
            />
              <span
                className="text-white font-bold text-lg tracking-tight"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                NUVCORE
              </span>
            </div>
            <p
              className="text-sm leading-relaxed"
              style={{ color: "rgba(242,242,242,0.45)", fontFamily: "'Inter', sans-serif", maxWidth: "260px" }}
            >
              Desenvolvimento web estratégico para startups e pequenos negócios que constroem o futuro.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <div
              className="text-xs font-semibold mb-4"
              style={{ color: "rgba(242,242,242,0.35)", fontFamily: "'Inter', sans-serif", letterSpacing: "0.1em", textTransform: "uppercase" }}
            >
              Navegação
            </div>
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left text-sm transition-colors duration-200"
                  style={{
                    color: "rgba(242,242,242,0.5)",
                    fontFamily: "'Inter', sans-serif",
                    background: "none",
                    border: "none",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#F2F2F2")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(242,242,242,0.5)")}
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <div
              className="text-xs font-semibold mb-4"
              style={{ color: "rgba(242,242,242,0.35)", fontFamily: "'Inter', sans-serif", letterSpacing: "0.1em", textTransform: "uppercase" }}
            >
              Contato
            </div>
            <div className="space-y-3">
              <a
                href="mailto:nuvcore.oficial@gmail.com"
                className="flex items-center gap-3 text-sm transition-colors duration-200"
                style={{ color: "rgba(242,242,242,0.5)", fontFamily: "'Inter', sans-serif", textDecoration: "none" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#F2F2F2")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(242,242,242,0.5)")}
              >
                <Mail size={14} />
                nuvcore.oficial@gmail.com
              </a>
              <a
                href="https://instagram.com/nuvcore"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm transition-colors duration-200"
                style={{ color: "rgba(242,242,242,0.5)", fontFamily: "'Inter', sans-serif", textDecoration: "none" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#F2F2F2")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(242,242,242,0.5)")}
              >
                <Instagram size={14} />
                @nuvcore
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8"
          style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
        >
          <p
            className="text-xs"
            style={{ color: "rgba(242,242,242,0.25)", fontFamily: "'Inter', sans-serif" }}
          >
            © {new Date().getFullYear()} NUVCORE. Todos os direitos reservados.
          </p>
          <p
            className="text-xs"
            style={{ color: "rgba(242,242,242,0.2)", fontFamily: "'Inter', sans-serif" }}
          >
            Desenvolvido com estratégia e precisão.
          </p>
        </div>
      </div>
    </footer>
  );
}
