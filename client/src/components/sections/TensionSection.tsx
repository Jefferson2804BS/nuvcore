export default function TensionSection() {
  return (
    <section className="py-20 md:py-32 px-4 md:px-6" style={{ backgroundColor: "#0A0A0A" }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Block 1 */}
          <div className="fade-up border-l-2 border-red-600 pl-6 md:pl-8">
            <h3 className="text-xl md:text-2xl font-bold mb-4" style={{ color: "#F0EDE8" }}>
              Seu site não comunica
            </h3>
            <p className="text-sm md:text-base leading-relaxed" style={{ color: "rgba(240, 237, 232, 0.7)" }}>
              Um site mal estruturado não comunica com clareza. Visitantes chegam, mas não entendem o que você oferece ou por que deveriam escolher você.
            </p>
          </div>

          {/* Block 2 */}
          <div className="fade-up border-l-2 border-red-600 pl-6 md:pl-8">
            <h3 className="text-xl md:text-2xl font-bold mb-4" style={{ color: "#F0EDE8" }}>
              Você investe em tráfego, mas ninguém converte
            </h3>
            <p className="text-sm md:text-base leading-relaxed" style={{ color: "rgba(240, 237, 232, 0.7)" }}>
              Sem hierarquia visual, copywriting estratégico e CTAs claros, até o melhor tráfego se perde. Visitantes chegam, mas não viram clientes.
            </p>
          </div>

          {/* Block 3 */}
          <div className="fade-up border-l-2 border-red-600 pl-6 md:pl-8">
            <h3 className="text-xl md:text-2xl font-bold mb-4" style={{ color: "#F0EDE8" }}>
              Você não sabe o próximo passo
            </h3>
            <p className="text-sm md:text-base leading-relaxed" style={{ color: "rgba(240, 237, 232, 0.7)" }}>
              Falta clareza sobre como estruturar sua presença digital. Você precisa de alguém que entenda seu negócio e construa a solução certa.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
