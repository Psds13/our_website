import Link from "next/link";

const Services = () => {
  return (
    <section id="servicos" className="bg-gray-100 py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 text-gray-800">
          O que nós trabalhamos
        </h2>
        <p className="text-lg text-gray-600 mb-12 text-justify">
          A <strong>Ynnothivix Software Technology</strong> é uma empresa dedicada ao desenvolvimento de soluções tecnológicas que impulsionam o crescimento e a presença digital de negócios modernos. Atuamos com foco em qualidade, inovação e resultado, entregando projetos sob medida para cada cliente.
        </p>

        <div className="grid md:grid-cols-3 gap-8 text-left">
          {/* Desenvolvimento Web */}
          <div className="bg-white shadow-lg p-6 rounded-lg">
            <img
              src="https://images.pexels.com/photos/374074/pexels-photo-374074.jpeg"
              alt="Desenvolvimento Web"
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-2xl font-semibold mb-3 text-blue-600">Desenvolvimento Web</h3>
            <p className="text-gray-700 text-lg text-justify">
              Nossa equipe é especializada na criação de aplicações web modernas, rápidas e seguras. Utilizamos as melhores tecnologias do mercado como React, Next.js e TypeScript para garantir uma performance superior, escalabilidade e excelente experiência do usuário.
            </p>
          </div>

          {/* Soluções Inovadoras */}
          <div className="bg-white shadow-lg p-6 rounded-lg">
            <img
              src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg"
              alt="Soluções Inovadoras"
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-2xl font-semibold mb-3 text-blue-600">Soluções Inovadoras</h3>
            <p className="text-gray-700 text-lg text-justify">
              Criamos soluções digitais que se adaptam à necessidade de cada cliente. Se você possui uma ideia, um problema ou um processo que deseja digitalizar, nossa equipe está pronta para transformar isso em uma plataforma tecnológica funcional.
            </p>
          </div>

          {/* Criação de Websites Profissionais */}
          <div className="bg-white shadow-lg p-6 rounded-lg">
            <img
              src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg"
              alt="Criação de Websites"
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-2xl font-semibold mb-3 text-blue-600">Criação de Websites Profissionais</h3>
            <p className="text-gray-700 text-lg text-justify">
              Um site bem desenvolvido é essencial para consolidar a presença digital de qualquer empresa. Na Ynnothivix, desenvolvemos websites profissionais com identidade visual personalizada, foco em conversão e excelente experiência para o usuário.
            </p>
          </div>

          {/* Modernização de Sistemas */}
          <div className="bg-white shadow-lg p-6 rounded-lg">
            <img
              src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg"
              alt="Modernização de Sistemas"
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-2xl font-semibold mb-3 text-blue-600">Modernização de Sistemas</h3>
            <p className="text-gray-700 text-lg text-justify">
              Transformamos sistemas legados em soluções modernas, seguras e eficientes. A Ynnothivix trabalha com refatoração de código, redesign de interfaces antigas e migração para arquiteturas mais performáticas, como microsserviços ou aplicações baseadas em componentes.
            </p>
          </div>

          {/* Prototipagem e MVPs */}
          <div className="bg-white shadow-lg p-6 rounded-lg">
            <img
              src="https://images.pexels.com/photos/3810787/pexels-photo-3810787.jpeg"
              alt="Prototipagem e MVPs"
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-2xl font-semibold mb-3 text-blue-600">Prototipagem e MVPs</h3>
            <p className="text-gray-700 text-lg text-justify">
              Ajudamos startups e empresas a tirarem suas ideias do papel de forma rápida e eficiente. Desenvolvemos protótipos funcionais e MVPs (Produto Mínimo Viável) para validar hipóteses com usuários reais e investidores.
            </p>
          </div>
        </div>

        {/* Botão "Voltar para a Home" fora da grid e centralizado */}
        <div className="flex justify-center mt-12">
          <Link
            href="/"
            className="bg-orange-500 text-white px-6 py-3 rounded-full font-medium hover:bg-orange-600 transition"
          >
            Voltar para a Home
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
