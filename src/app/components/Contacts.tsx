'use client';

import { FaInstagram, FaGithub, FaLinkedin, FaPaperPlane, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="relative bg-gradient-to-b from-gray-900 to-gray-800 text-white py-20 overflow-hidden">
      {/* Elementos decorativos */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-20 left-10 w-40 h-40 bg-blue-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-60 h-60 bg-orange-500 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Cabeçalho */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-blue-400">
              Vamos conversar?
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Conecte-se com a <span className="text-blue-400 font-semibold">Ynnothivix</span> e descubra como podemos transformar suas ideias em realidade digital.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
          {/* Formulário de Contato */}
          <div className="lg:w-1/2">
            <div className="bg-gray-800 bg-opacity-50 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-gray-700">
              <div className="flex items-center gap-3 mb-6">
                <FaPaperPlane className="text-orange-400 text-2xl" />
                <h3 className="text-2xl font-bold">Envie sua mensagem</h3>
              </div>

              <form
                onSubmit={(e) => e.preventDefault()}
                aria-label="Formulário de contato"
                className="space-y-6"
              >
                <div className="space-y-1">
                  <label htmlFor="name" className="block text-gray-300 font-medium">Nome</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Seu nome completo"
                    required
                    className="w-full px-5 py-3 rounded-xl bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 border border-gray-600 transition"
                  />
                </div>

                <div className="space-y-1">
                  <label htmlFor="email" className="block text-gray-300 font-medium">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="seu@email.com"
                    required
                    className="w-full px-5 py-3 rounded-xl bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 border border-gray-600 transition"
                  />
                </div>

                <div className="space-y-1">
                  <label htmlFor="message" className="block text-gray-300 font-medium">Mensagem</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Como podemos ajudar você?"
                    required
                    className="w-full px-5 py-3 rounded-xl bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 border border-gray-600 transition"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold px-6 py-4 rounded-xl transition-all duration-300 transform hover:scale-[1.02] shadow-lg"
                >
                  Enviar Mensagem
                </button>
              </form>
            </div>
          </div>

          {/* Informações de Contato */}
          <div className="lg:w-1/2">
            <div className="h-full bg-gray-800 bg-opacity-50 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-gray-700 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <FaEnvelope className="text-blue-400 text-2xl" />
                  <h3 className="text-2xl font-bold">Outras formas de contato</h3>
                </div>

                <div className="space-y-8">
                  {/* Email principal */}
                  <div className="bg-gray-700 rounded-xl p-6 border border-gray-600">
                    <h4 className="text-lg font-semibold mb-3 text-gray-300">Email corporativo</h4>
                    <a
                      href="mailto:contato@ynnothivix.com.br"
                      className="inline-flex items-center gap-2 text-white text-xl hover:text-blue-400 transition"
                    >
                      <FaEnvelope className="text-blue-400" />
                      contato@ynnothivix.com.br
                    </a>
                    <p className="mt-3 text-gray-400">
                      Respondemos em até 24 horas durante dias úteis.
                    </p>
                  </div>

                  {/* Localização fictícia */}
                  <div className="bg-gray-700 rounded-xl p-6 border border-gray-600">
                    <h4 className="text-lg font-semibold mb-3 text-gray-300">Nossa localização</h4>
                    <div className="inline-flex items-center gap-2 text-gray-300">
                      <FaMapMarkerAlt className="text-red-400" />
                      São Luís - MA, Brasil
                    </div>
                    <p className="mt-3 text-gray-400">
                      Atendemos clientes em todo o Brasil de forma remota.
                    </p>
                  </div>
                </div>
              </div>

              {/* Redes sociais */}
              <div className="mt-12">
                <h4 className="text-lg font-semibold mb-4 text-center text-gray-300">Siga-nos nas redes</h4>
                <div className="flex justify-center gap-6">
                  <a 
                    href="#" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-12 h-12 flex items-center justify-center bg-gray-700 hover:bg-pink-600 rounded-full transition-all transform hover:scale-110"
                    aria-label="Instagram"
                  >
                    <FaInstagram className="text-xl" />
                  </a>
                  <a 
                    href="#" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-12 h-12 flex items-center justify-center bg-gray-700 hover:bg-gray-600 rounded-full transition-all transform hover:scale-110"
                    aria-label="GitHub"
                  >
                    <FaGithub className="text-xl" />
                  </a>
                  <a 
                    href="#" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-12 h-12 flex items-center justify-center bg-gray-700 hover:bg-blue-700 rounded-full transition-all transform hover:scale-110"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin className="text-xl" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;