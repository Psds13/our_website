"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FiArrowRight, FiCheckCircle } from "react-icons/fi";

const ProcessoPage = () => {
  const etapas = [
    {
      title: "1. Entendimento",
      desc: "Realizamos reuniões e análises aprofundadas para entender suas dores, metas e expectativas. Aqui nascem as soluções certas.",
      features: ["Briefing detalhado", "Análise de mercado", "Definição de escopo"]
    },
    {
      title: "2. Prototipação",
      desc: "Transformamos ideias em protótipos visuais navegáveis. Validamos com você antes de começar o desenvolvimento real.",
      features: ["Wireframes interativos", "Testes de usabilidade", "Validação de conceito"]
    },
    {
      title: "3. Desenvolvimento",
      desc: "Implementação do projeto com metodologias ágeis, entregas parciais e validações constantes para garantir qualidade.",
      features: ["Sprints quinzenais", "Testes automatizados", "Deploy contínuo"]
    },
    {
      title: "4. Entrega e Suporte",
      desc: "Depois do lançamento, seguimos com você oferecendo suporte técnico, melhorias e atualizações contínuas.",
      features: ["Treinamento da equipe", "Monitoramento 24/7", "Otimizações contínuas"]
    },
  ];

  return (
    <main className="bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 px-6 max-w-7xl mx-auto overflow-hidden">
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://preview.redd.it/4fxx7s8xb0q61.png?auto=webp&s=9a9a09f5a8b4b5c5f5a5e5d5c5b5a5a5e5d5c5b')] bg-repeat bg-[length:300px]"></div>
        </div>
        
        <motion.div 
          className="relative text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block mb-4 text-orange-500 font-medium bg-orange-50 px-4 py-1 rounded-full">
            Metodologia
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Nosso Processo de <span className="text-orange-500">Desenvolvimento</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Um fluxo de trabalho transparente e eficiente que garante resultados excepcionais em cada projeto.
          </p>
        </motion.div>
      </section>

      {/* Process Timeline */}
      <section className="py-16 px-6 max-w-4xl mx-auto">
        <div className="space-y-12">
          {etapas.map((etapa, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-xl font-bold text-gray-900 mb-3">{etapa.title}</h2>
              <p className="text-gray-600 mb-4">{etapa.desc}</p>
              
              <ul className="space-y-2">
                {etapa.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <FiCheckCircle className="text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Highlight Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Por que nosso processo funciona?</h2>
          <p className="text-xl mb-8 opacity-90">
            Combinamos metodologias ágeis com anos de experiência para entregar projetos que superam expectativas. Cada etapa é cuidadosamente planejada para maximizar eficiência e qualidade.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="opacity-90">Projetos Entregues</div>
            </div>
            <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="opacity-90">Suporte Contínuo</div>
            </div>
            <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
              <div className="text-4xl font-bold mb-2">30+</div>
              <div className="opacity-90">Clientes Satisfeitos</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white p-10 rounded-2xl shadow-xl"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Pronto para começar seu projeto?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Nosso processo comprovado garante que sua visão se torne realidade com qualidade e eficiência.
          </p>
          <Link
            href="/contatos"
            className="inline-flex items-center bg-orange-500 text-white px-8 py-3 rounded-full font-medium hover:bg-orange-600 transition shadow-lg hover:shadow-xl"
          >
            Fale com nossos especialistas
            <FiArrowRight className="ml-2" />
          </Link>
        </motion.div>
      </section>

      {/* Back Button */}
      <div className="pb-16 px-6 flex justify-center">
        <Link
          href="/"
          className="inline-flex items-center border border-gray-300 text-gray-700 px-6 py-3 rounded-full font-medium hover:bg-gray-50 transition"
        >
          Voltar para a Home
        </Link>
      </div>
    </main>
  );
};

export default ProcessoPage;