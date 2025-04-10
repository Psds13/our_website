import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Vamos conversar?</h2>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-6">
          Fale com a <span className="text-blue-400 font-semibold">Ynnothivix</span> e descubra como podemos ajudar sua empresa a crescer com tecnologia e inovação.
        </p>

        <a
          href="mailto:contato@ynnothivix.com"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-3 rounded-full transition"
        >
          contato@ynnothivix.com
        </a>

        {/* Redes sociais */}
        <div className="mt-10">
          <p className="text-sm text-gray-400 mb-4">Ou acompanhe a Ynnothivix nas redes:</p>
          <div className="flex justify-center gap-6">
            <a href="#" target="_blank" className="hover:text-pink-500 transition">
              <FaInstagram className="text-2xl" />
            </a>
            <a href="#" target="_blank" className="hover:text-gray-300 transition">
              <FaGithub className="text-2xl" />
            </a>
            <a href="#" target="_blank" className="hover:text-blue-500 transition">
              <FaLinkedin className="text-2xl" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
