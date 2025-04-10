// app/components/About.tsx

export default function About() {
    return (
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h1 className="text-5xl font-extrabold text-center mb-12 text-gray-900">
          Sobre a Ynnothivix Software Technology
        </h1>
  
        <div className="flex flex-col-reverse md:flex-row items-center gap-10">
          {/* Texto */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-3xl font-semibold mb-4 text-gray-800">
              Soluções em TI com foco em desenvolvimento web
            </h2>
            <p className="text-lg text-gray-600 mb-4">
              A <strong>Ynnothivix Software Technology</strong> é especializada em criar soluções digitais
              modernas, responsivas e de alta performance. Transformamos ideias em experiências web
              inovadoras para empresas de todos os tamanhos.
            </p>
            <p className="text-lg text-gray-600">
              Nossa missão é entregar qualidade, inovação e eficiência em cada linha de código, utilizando
              as melhores práticas e tecnologias do mercado.
            </p>
          </div>
  
          {/* Imagem */}
          <div className="flex-1">
            <img
              src="/ynnothivix.jpg" // Troque isso para o caminho da imagem da sua empresa
              alt="Imagem institucional da Ynnothivix"
              className="w-full h-auto rounded-2xl shadow-xl object-cover"
            />
          </div>
        </div>
      </section>
    );
  }
  