const Hero = () => {
  return (
    <section
      id="hero"
      className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white min-h-screen flex items-center justify-center"
    >
      <div className="max-w-4xl px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
          Soluções Web Inteligentes para o seu Negócio
        </h1>

        <p className="text-lg md:text-xl text-gray-300 mb-10">
          A <strong className="text-white">Ynnothivix</strong> desenvolve produtos digitais modernos,
          escaláveis e sob medida. Transformamos ideias em plataformas de alta performance.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#servicos"
            className="bg-blue-600 text-white px-6 py-3 rounded-full text-lg hover:bg-blue-700 transition"
          >
            Nossos Serviços
          </a>
          <a
            href="#contact"
            className="border border-white px-6 py-3 rounded-full text-lg hover:bg-white hover:text-gray-900 transition"
          >
            Entre em Contato
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
