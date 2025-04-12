'use client';

import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Vamos conversar?</h2>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-6">
          Fale com a <span className="text-blue-400 font-semibold">Ynnothivix</span> e descubra como podemos ajudar sua empresa a crescer com tecnologia e inovação.
        </p>

        {/* Formulário de Contato - fundo chocolate */}
        <form
          onSubmit={(e) => e.preventDefault()}
          aria-label="Formulário de contato"
          className="max-w-2xl mx-auto p-6 rounded-xl shadow-lg text-left space-y-6"
          style={{ backgroundColor: '#7B3F00' }}
        >
          <div>
            <label htmlFor="name" className="block mb-2 font-medium text-white">Nome</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Digite seu nome"
              required
              className="w-full px-4 py-3 rounded-lg bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-2 font-medium text-white">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="seuemail@exemplo.com"
              required
              className="w-full px-4 py-3 rounded-lg bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          <div>
            <label htmlFor="message" className="block mb-2 font-medium text-white">Mensagem</label>
            <textarea
              id="message"
              name="message"
              rows={4}
              placeholder="Escreva sua mensagem aqui..."
              required
              className="w-full px-4 py-3 rounded-lg bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-400"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white text-lg px-6 py-3 rounded-full transition font-medium"
          >
            Enviar mensagem
          </button>
        </form>

        {/* Email para contato - após formulário */}
        <div className="mt-10">
          <h3 className="text-xl font-semibold mb-3">Você pode entrar em contato com o nosso e-mail</h3>
          <a
            href="mailto:contato@ynnothivix.com.br"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-3 rounded-full transition"
          >
            contato@ynnothivix.com.br
          </a>
        </div>

        {/* Redes sociais */}
        <div className="mt-12">
          <p className="text-sm text-gray-400 mb-4">Ou acompanhe a Ynnothivix nas redes:</p>
          <div className="flex justify-center gap-6">
            <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition">
              <FaInstagram className="text-2xl" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition">
              <FaGithub className="text-2xl" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition">
              <FaLinkedin className="text-2xl" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
