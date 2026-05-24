export default function FinalCTASection() {
  return (
    <section id="contact" className="bg-[#101010] py-24 px-8">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-sm uppercase tracking-widest text-[#E5001B] font-medium mb-6">
            PRÓXIMO PASSO
          </p>
          <h2 className="text-5xl md:text-6xl font-bold text-[#F2EFE9] mb-6 font-space-grotesk leading-tight">
            Pronto para transformar sua presença digital?
          </h2>
          <p className="text-xl text-[#9A9490] mb-8 leading-relaxed">
            Vamos conversar sobre seu negócio, seus desafios e as oportunidades que você está deixando passar.
          </p>

          <div className="space-y-4">
            <button
              onClick={() =>
                window.open(
                  'https://wa.me/5585987654321?text=Quero%20um%20diagnóstico%20gratuito',
                  '_blank'
                )
              }
              className="w-full bg-[#E5001B] text-[#080808] px-8 py-4 rounded font-bold hover:bg-[#F5001B] transition-all"
            >
              Quero diagnóstico gratuito
            </button>
            <a
              href="https://forms.gle/JK1cLA8zbAJRe2uz9"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-transparent border border-[#E5001B] text-[#E5001B] px-8 py-4 rounded font-bold hover:bg-[#E5001B] hover:text-[#080808] transition-all text-center"
            >
              Preencher Briefing
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="bg-[#161616] border-l-4 border-[#E5001B] p-12 rounded">
            <p className="text-[#9A9490] text-sm mb-4">
              "Eu acredito que todo negócio merece uma presença digital que o
              represente com verdade e inteligência. Não aceito mediocridade
              técnica, não entrego projetos sem propósito e não trabalho com
              quem não acredita no próprio produto."
            </p>
            <div>
              <p className="text-[#F2EFE9] font-bold">NUVCORE</p>
              <p className="text-[#9A9490] text-sm">
                Desenvolvimento Web Estratégico
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
