"use client";

import { motion } from "framer-motion";
import { FiAward, FiCode, FiTrendingUp } from "react-icons/fi";

export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Cabeçalho */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="inline-block mb-4 text-orange-500 font-medium bg-orange-50 px-4 py-1 rounded-full">
            Sobre Nós
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Tecnologia com <span className="text-orange-500">Propósito</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transformando desafios em soluções digitais inovadoras
          </p>
        </motion.div>

        {/* Conteúdo Principal */}
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Imagem */}
          <motion.div 
            className="lg:w-1/2 relative"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img
              src="/ynnothivix.jpg"
              alt="Equipe Ynnothivix"
              className="w-full rounded-2xl shadow-xl object-cover border-8 border-white"
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg border border-gray-100">
              <div className="flex items-center gap-2">
                <div className="bg-orange-100 p-2 rounded-full">
                  <FiAward className="text-orange-500 text-xl" />
                </div>
                <span className="font-semibold text-gray-800">+50 Projetos</span>
              </div>
            </div>
          </motion.div>

          {/* Texto */}
          <motion.div 
            className="lg:w-1/2 space-y-8"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900">
              Ynnothivix Software Technology
            </h2>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              Especialistas em <strong className="text-gray-800">desenvolvimento web moderno</strong>, criamos soluções digitais que combinam performance, design intuitivo e tecnologia de ponta para impulsionar seu negócio.
            </p>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="bg-blue-100 p-3 rounded-lg text-blue-600">
                  <FiCode className="text-2xl" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Código de Qualidade</h3>
                  <p className="text-gray-600">Desenvolvimento seguindo as melhores práticas e padrões do mercado</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="bg-purple-100 p-3 rounded-lg text-purple-600">
                  <FiTrendingUp className="text-2xl" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Resultados Mensuráveis</h3>
                  <p className="text-gray-600">Soluções que realmente impactam seus indicadores de negócio</p>
                </div>
              </div>
            </div>
            
            <div className="pt-4">
              <div className="flex flex-wrap gap-4">
                <span className="px-4 py-2 bg-orange-100 text-orange-800 rounded-full font-medium">
                  Next.js
                </span>
                <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full font-medium">
                  Node.js
                </span>
                <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full font-medium">
                  UX Design
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}