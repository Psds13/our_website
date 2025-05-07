'use client'; // Adicione esta linha no topo do arquivo

import React, { useState } from 'react';
import Link from 'next/link';
import { FiCheck, FiZap, FiBriefcase, FiUsers, FiStar, FiClock, FiShield, FiGlobe, FiLayers } from 'react-icons/fi';

const PricingSection = () => {
  const [annualBilling, setAnnualBilling] = useState(false);
  const [hoveredPlan, setHoveredPlan] = useState<string | null>(null);

  const plans = {
    free: {
      name: "Gratuito",
      price: annualBilling ? "R$0" : "R$0",
      period: annualBilling ? "/ano" : "/mês",
      description: "Ideal para experimentar e aprender os recursos básicos.",
      features: [
        { text: "Acesso ao chat básico", icon: <FiCheck className="text-green-500" /> },
        { text: "50 interações por mês", icon: <FiClock className="text-blue-500" /> },
        { text: "Suporte por e-mail", icon: <FiUsers className="text-purple-500" /> },
        { text: "Acesso a modelos básicos", icon: <FiLayers className="text-yellow-500" /> }
      ],
      cta: "Começar agora",
      ctaLink: "/cadastro",
      popular: false
    },
    premium: {
      name: "Premium",
      price: annualBilling ? "R$499,99" : "R$49,99",
      period: annualBilling ? "/ano" : "/mês",
      description: "Para usuários regulares e pequenas equipes que precisam de mais recursos.",
      features: [
        { text: "Acesso completo ao chat", icon: <FiCheck className="text-green-500" /> },
        { text: "2.000 interações por mês", icon: <FiClock className="text-blue-500" /> },
        { text: "Respostas 2x mais rápidas", icon: <FiZap className="text-red-500" /> },
        { text: "Suporte prioritário", icon: <FiStar className="text-yellow-500" /> },
        { text: "Acesso a modelos avançados", icon: <FiLayers className="text-yellow-500" /> }
      ],
      cta: "Teste grátis por 7 dias",
      ctaLink: "/pagamento",
      popular: true
    },
    advanced: {
      name: "Avançado",
      price: annualBilling ? "R$949,99" : "R$99,99",
      period: annualBilling ? "/ano" : "/mês",
      description: "Para profissionais que exigem alto desempenho e recursos avançados.",
      features: [
        { text: "Modelos de última geração", icon: <FiCheck className="text-green-500" /> },
        { text: "10.000 interações por mês", icon: <FiClock className="text-blue-500" /> },
        { text: "Integrações com APIs", icon: <FiGlobe className="text-indigo-500" /> },
        { text: "Suporte via chat 24/5", icon: <FiUsers className="text-purple-500" /> },
        { text: "Prioridade na fila", icon: <FiStar className="text-yellow-500" /> },
        { text: "Segurança avançada", icon: <FiShield className="text-gray-500" /> }
      ],
      cta: "Teste grátis por 7 dias",
      ctaLink: "/pagamento",
      popular: false
    },
    enterprise: {
      name: "Empresarial",
      price: "Sob consulta",
      period: "",
      description: "Soluções personalizadas para empresas com necessidades específicas.",
      features: [
        { text: "Suporte dedicado 24/7", icon: <FiUsers className="text-purple-500" /> },
        { text: "Consultoria personalizada", icon: <FiBriefcase className="text-blue-500" /> },
        { text: "Integração total com sistemas", icon: <FiGlobe className="text-indigo-500" /> },
        { text: "Treinamento para equipes", icon: <FiStar className="text-yellow-500" /> },
        { text: "SLA garantido", icon: <FiShield className="text-gray-500" /> },
        { text: "Modelos customizados", icon: <FiLayers className="text-yellow-500" /> }
      ],
      cta: "Fale com nosso time",
      ctaLink: "/contato",
      popular: false
    }
  };

  const toggleBilling = () => {
    setAnnualBilling(!annualBilling);
  };

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Planos que se adaptam ao seu crescimento
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Comece gratuitamente e evolua conforme suas necessidades. Economize 15% com o plano anual.
          </p>
          
          <div className="mt-8 flex items-center justify-center">
            <span className={`mr-4 font-medium ${!annualBilling ? 'text-gray-900' : 'text-gray-500'}`}>
              Cobrança mensal
            </span>
            <button
              onClick={toggleBilling}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ${annualBilling ? 'bg-indigo-600' : 'bg-gray-200'}`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${annualBilling ? 'translate-x-6' : 'translate-x-1'}`}
              />
            </button>
            <span className={`ml-4 font-medium ${annualBilling ? 'text-gray-900' : 'text-gray-500'}`}>
              Cobrança anual
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(plans).map(([key, plan]) => (
            <div 
              key={key}
              onMouseEnter={() => setHoveredPlan(key)}
              onMouseLeave={() => setHoveredPlan(null)}
              className={`relative border rounded-xl shadow-sm transition-all duration-300 ${plan.popular ? 'border-indigo-500 ring-2 ring-indigo-200' : 'border-gray-200'} ${hoveredPlan === key ? 'transform hover:scale-105' : ''}`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                  Mais popular
                </div>
              )}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                
                <div className="mb-6">
                  <span className="text-4xl font-extrabold text-gray-900">{plan.price}</span>
                  {plan.period && (
                    <span className="text-lg font-medium text-gray-500">{plan.period}</span>
                  )}
                  {annualBilling && key !== 'free' && key !== 'enterprise' && (
                    <span className="block text-sm text-green-600 mt-1">Economize 15%</span>
                  )}
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="mr-2 mt-0.5">{feature.icon}</span>
                      <span className="text-gray-700">{feature.text}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-6">
                  <Link href={plan.ctaLink}>
                    <button
                      className={`w-full py-3 px-4 border rounded-md text-lg font-medium transition-colors duration-300 ${plan.popular ? 'bg-indigo-600 text-white hover:bg-indigo-700' : 'bg-white text-indigo-600 border-indigo-600 hover:bg-indigo-50'}`}
                    >
                      {plan.cta}
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Comparação de planos */}
        <div className="mt-20 bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Compare todos os recursos</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">Recurso</th>
                  <th scope="col" className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">Free</th>
                  <th scope="col" className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">Premium</th>
                  <th scope="col" className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">Advanced</th>
                  <th scope="col" className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">Enterprise</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Interações/mês</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">50</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2.000</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">10.000</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Ilimitadas*</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Velocidade de resposta</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Padrão</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2x mais rápida</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">3x mais rápida</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Prioridade máxima</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Modelos disponíveis</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Básico</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Avançado</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Premium</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Customizados</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Suporte</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">E-mail (48h)</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">E-mail (24h)</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Chat 24/5</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Dedicado 24/7</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Integrações</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">-</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Básicas</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Completas</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Customizadas</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Perguntas frequentes */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Perguntas frequentes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Posso mudar de plano a qualquer momento?</h3>
              <p className="text-gray-600">Sim, você pode atualizar ou reduzir seu plano a qualquer momento. As alterações serão aplicadas no próximo ciclo de faturamento.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Há cobrança por interações não utilizadas?</h3>
              <p className="text-gray-600">Não, suas interações não utilizadas não são acumulativas e não haverá cobrança adicional por não utilizá-las.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Qual a diferença entre os modelos?</h3>
              <p className="text-gray-600">Os modelos mais avançados oferecem respostas mais precisas, capacidade de lidar com contextos complexos e maior velocidade de processamento.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Oferecem teste gratuito?</h3>
              <p className="text-gray-600">Sim, os planos Premium e Advanced incluem 7 dias gratuitos para você testar todos os recursos antes de se comprometer.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;