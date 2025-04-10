const HomeContent = () => {
  return (
    <main className="px-6 md:px-10 py-16 space-y-24">

      {/* Hero / Proposta de Valor */}
      <section id="hero" className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Transformamos ideias em soluções web sob medida</h2>
        <p className="text-lg text-gray-700">
          Na <strong>Ynnothivix</strong>, unimos inovação, performance e design para criar produtos digitais que geram resultados reais.
          Entregamos experiências web modernas, eficientes e personalizadas para cada cliente.
        </p>
      </section>

      {/* Nossos Serviços */}
      <section id="servicos" className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Nossos Serviços</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              title: "Desenvolvimento Web",
              desc: "Soluções web escaláveis com foco em performance, segurança e usabilidade.",
            },
            {
              title: "Modernização de Sistemas",
              desc: "Refatoração e redesign de sistemas legados com tecnologias modernas.",
            },
            {
              title: "Prototipagem e MVPs",
              desc: "Valide sua ideia com agilidade por meio de protótipos funcionais.",
            },
          ].map((item, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded-xl shadow-md text-center">
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-700">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Nosso Processo */}
      <section id="processo" className="max-w-5xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-12">Nosso Processo</h2>
        <div className="grid gap-10 md:grid-cols-3 text-left">
          {[
            {
              step: "1. Entendimento",
              desc: "Reuniões com o cliente para entender o problema e as necessidades do projeto.",
            },
            {
              step: "2. Prototipação",
              desc: "Desenhamos e validamos interfaces antes do desenvolvimento.",
            },
            {
              step: "3. Entrega e Suporte",
              desc: "Implementação completa com acompanhamento técnico e suporte contínuo.",
            },
          ].map((item, index) => (
            <div key={index} className="p-4">
              <h3 className="font-bold text-lg mb-2">{item.step}</h3>
              <p className="text-gray-700">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Portfólios */}
      <section id="portfolios" className="max-w-6xl mx-auto text-center">
  <h2 className="text-2xl md:text-3xl font-bold mb-6">Nossos Portfólios</h2>
  <p className="text-gray-700 mb-6">Veja alguns dos nossos trabalhos recentes e os talentos por trás de cada projeto.</p>

  <div className="flex justify-center">
    <a
      href="/portfolios"
      className="inline-block bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition font-medium"
    >
      Ver Portfólios
    </a>
  </div>
</section>

    </main>
  );
};

export default HomeContent;
