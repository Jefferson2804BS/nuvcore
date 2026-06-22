export default function PricingSection() {
  const developmentCards = [
    {
      title: "Landing Page",
      price: "597",
      features: ["1 página", "copy estratégico", "WhatsApp", "entrega 5 dias"],
    },
    {
      title: "Site Institucional",
      price: "997",
      features: ["Até 5 páginas completas", "entrega 7 dias"],
    },
    {
      title: "Site com Cardápio/Loja",
      price: "1.497",
      features: ["Cardápio interativo ou carrinho", "entrega 10 dias"],
    },
    {
      title: "Vale-Presente Digital",
      price: "397",
      features: ["Link personalizado com animação", "CTA WhatsApp"],
    },
  ];

  const maintenanceCards = [
    {
      title: "Básico",
      price: "97",
      features: ["1 atualização/mês", "gerenciamento técnico"],
      highlighted: false,
    },
    {
      title: "Profissional",
      price: "197",
      features: ["3 alterações/mês", "suporte WhatsApp", "prioridade"],
      highlighted: true,
      tag: "MAIS ESCOLHIDO",
    },
    {
      title: "Premium",
      price: "397",
      features: ["Alterações ilimitadas", "relatório mensal", "prioridade total"],
      highlighted: false,
    },
  ];

  const packageCards = [
    {
      title: "Presença Digital",
      price: "1.197",
      tag: "ECONOMIA DE R$ 288",
      features: ["Site Institucional", "+ 3 meses manutenção Básica"],
    },
    {
      title: "Negócio no Digital",
      price: "1.797",
      tag: "MAIS COMPLETO",
      features: ["Site Institucional", "+ Vale-Presente", "+ 3 meses Profissional"],
    },
  ];

  const observations = [
    {
      title: "Domínio",
      description: "contratado pelo cliente, ~R$40-70/ano, configuração pela NUVCORE sem custo extra",
    },
    {
      title: "Revisões",
      description: "2 rodadas inclusas em todos os projetos, adicional R$ 97/rodada",
    },
    {
      title: "Pagamento",
      description: "50% sinal, 50% na entrega",
    },
  ];

  return (
    <section id="pricing" className="bg-[#080808] py-24 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16 text-center">
          <p className="text-sm uppercase tracking-widest text-[#E5001B] font-medium mb-6">
            INVESTIMENTO
          </p>
          <h2 className="text-5xl md:text-6xl font-bold text-[#F2EFE9] font-space-grotesk leading-tight">
            Transparência total. Sem surpresas.
          </h2>
        </div>

        {/* BLOCK 1: DESENVOLVIMENTO */}
        <div className="mb-24">
          <h3 className="text-2xl font-bold text-[#F2EFE9] mb-12 font-space-grotesk">
            DESENVOLVIMENTO
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {developmentCards.map((card, idx) => (
              <div
                key={idx}
                className="bg-[#101010] border border-[#1E1E1E] rounded-lg p-8 transition-all duration-300 hover:border-[#E5001B] hover:scale-102 cursor-pointer"
              >
                <h4 className="text-xl font-bold text-[#F2EFE9] mb-4">{card.title}</h4>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-[#E5001B]">R$ {card.price}</span>
                </div>
                <ul className="space-y-3">
                  {card.features.map((feature, fidx) => (
                    <li key={fidx} className="text-[#9A9490] text-sm flex items-start">
                      <span className="text-[#E5001B] mr-3 mt-1">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* BLOCK 2: MANUTENÇÃO MENSAL */}
        <div className="mb-24">
          <h3 className="text-2xl font-bold text-[#F2EFE9] mb-12 font-space-grotesk">
            MANUTENÇÃO MENSAL
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {maintenanceCards.map((card, idx) => (
              <div
                key={idx}
                className={`bg-[#101010] rounded-lg p-8 transition-all duration-300 ${
                  card.highlighted
                    ? "border-2 border-[#E5001B] relative"
                    : "border border-[#1E1E1E] hover:border-[#E5001B]"
                } hover:scale-102 cursor-pointer`}
              >
                {card.tag && (
                  <div className="absolute -top-4 left-8 bg-[#E5001B] text-[#080808] px-4 py-1 rounded text-xs font-bold uppercase">
                    {card.tag}
                  </div>
                )}
                <h4 className="text-xl font-bold text-[#F2EFE9] mb-4">{card.title}</h4>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-[#E5001B]">R$ {card.price}</span>
                  <span className="text-[#9A9490] text-sm">/mês</span>
                </div>
                <ul className="space-y-3">
                  {card.features.map((feature, fidx) => (
                    <li key={fidx} className="text-[#9A9490] text-sm flex items-start">
                      <span className="text-[#E5001B] mr-3 mt-1">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Aviso de Hospedagem */}
          <div className="bg-[#161616] border-l-4 border-[#E5001B] p-6 rounded">
            <p className="text-[#9A9490] text-sm leading-relaxed">
              A hospedagem não é cobrada pela NUVCORE. O cliente contrata diretamente na plataforma de sua preferência (Hostinger, HostGator, etc). A configuração é feita pela NUVCORE sem custo adicional.
            </p>
          </div>
        </div>

        {/* BLOCK 3: PACOTES */}
        <div className="mb-24">
          <h3 className="text-2xl font-bold text-[#F2EFE9] mb-12 font-space-grotesk">
            PACOTES
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {packageCards.map((card, idx) => (
              <div
                key={idx}
                className="bg-[#101010] border border-[#1E1E1E] rounded-lg p-8 transition-all duration-300 hover:border-[#E5001B] hover:scale-102 cursor-pointer relative"
              >
                <div className="absolute top-6 right-6 bg-[#E5001B] text-[#080808] px-4 py-2 rounded text-xs font-bold uppercase">
                  {card.tag}
                </div>
                <h4 className="text-2xl font-bold text-[#F2EFE9] mb-4 pr-32">{card.title}</h4>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-[#E5001B]">R$ {card.price}</span>
                </div>
                <ul className="space-y-3">
                  {card.features.map((feature, fidx) => (
                    <li key={fidx} className="text-[#9A9490] text-sm flex items-start">
                      <span className="text-[#E5001B] mr-3 mt-1">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* BLOCK 4: OBSERVAÇÕES */}
        <div className="mb-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {observations.map((obs, idx) => (
              <div key={idx} className="text-center md:text-left">
                <h4 className="text-lg font-bold text-[#F2EFE9] mb-3">{obs.title}</h4>
                <p className="text-[#9A9490] text-sm leading-relaxed">{obs.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA FINAL */}
        <div className="text-center">
          <p className="text-lg text-[#9A9490] mb-8">
            Dúvida sobre qual serviço faz sentido para você?
          </p>
          <a
            href="https://wa.me/5511912830541?text=Olá%C3%A1%2C%20quero%20entender%20qual%20servi%C3%A7o%20faz%20sentido%20para%20meu%20neg%C3%B3cio."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#E5001B] text-[#ffffff] px-8 py-4 rounded font-bold hover:bg-[#F5001B] transition-all"
          >
            Falar com a NUVCORE agora
          </a>
        </div>
      </div>
    </section>
  );
}
