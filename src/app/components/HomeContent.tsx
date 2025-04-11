import Link from "next/link";

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
              image: "https://cdn-icons-png.flaticon.com/512/1006/1006360.png",
            },
            {
              title: "Modernização de Sistemas",
              desc: "Refatoração e redesign de sistemas legados com tecnologias modernas.",
              image: "https://cdn-icons-png.flaticon.com/512/4228/4228700.png",
            },
            {
              title: "Prototipagem e MVPs",
              desc: "Valide sua ideia com agilidade por meio de protótipos funcionais.",
              image: "https://cdn-icons-png.flaticon.com/512/2306/2306154.png",
            },
            {
              title: "Soluções Inovadoras",
              desc: "Plataformas digitais e ferramentas inteligentes que resolvem desafios reais com criatividade e tecnologia de ponta.",
              image: "https://cdn-icons-png.flaticon.com/512/8090/8090406.png",
            },
            {
              title: "Criação de Websites Profissionais",
              desc: "Sites institucionais, landing pages, blogs e portfólios modernos com foco em conversão e presença online.",
              image: "https://cdn-icons-png.flaticon.com/512/3039/3039436.png",
            },
          ].map((item, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded-xl shadow-md text-center">
              <img src={item.image} alt={item.title} className="w-20 h-20 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-700">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <Link href="/servicos" passHref>
            <span className="inline-block bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition font-medium cursor-pointer">
              Ver detalhadamente nossos serviços
            </span>
          </Link>
        </div>
      </section>

      {/* Nosso Processo */}
      <section id="processo" className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Nosso Processo</h2>
        <div className="grid gap-10 md:grid-cols-3 text-center">
          {[
            {
              step: "1. Entendimento",
              desc: "Reuniões com o cliente para entender o problema e as necessidades do projeto.",
              image: "https://cdn-icons-png.flaticon.com/512/4149/4149649.png",
            },
            {
              step: "2. Prototipação",
              desc: "Desenhamos e validamos interfaces antes do desenvolvimento.",
              image: "https://cdn-icons-png.flaticon.com/512/4839/4839908.png",
            },
            {
              step: "3. Entrega e Suporte",
              desc: "Implementação completa com acompanhamento técnico e suporte contínuo.",
              image: "https://cdn-icons-png.flaticon.com/512/3050/3050525.png",
            },
          ].map((item, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded-xl shadow-md">
              <img src={item.image} alt={item.step} className="w-20 h-20 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">{item.step}</h3>
              <p className="text-gray-700">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <Link href="/processo" passHref>
            <span className="inline-block bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition font-medium cursor-pointer">
              Ver nosso processo completo
            </span>
          </Link>
        </div>
      </section>

      {/* Portfólios */}
      <section id="portfolios" className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Nossos Portfólios</h2>

        <div className="mb-6">
          <img
            src="https://images.pexels.com/photos/3184451/pexels-photo-3184451.jpeg"
            alt="Projetos e Portfólios"
            className="w-full h-64 object-cover rounded-xl shadow-md mx-auto mb-6"
          />
          <p className="text-gray-700 text-lg text-justify max-w-3xl mx-auto">
            Nossa galeria de portfólios mostra a essência do que fazemos de melhor: transformar ideias em experiências digitais impactantes. 
            Cada projeto representa uma jornada única de colaboração, estratégia e criatividade, desde o planejamento até a entrega final. 
            Através de interfaces bem pensadas, soluções tecnológicas modernas e foco nos objetivos do cliente, criamos websites e plataformas que realmente fazem a diferença.
          </p>
        </div>

        <div className="flex justify-center mt-6">
          <Link href="/portfolios" passHref>
            <span className="inline-block bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition font-medium cursor-pointer">
              Ver Portfólios
            </span>
          </Link>
        </div>
      </section>

    </main>
  );
};

export default HomeContent;
