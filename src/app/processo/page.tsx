"use client";

import Link from "next/link";

const ProcessoPage = () => {
  const etapas = [
    {
      title: "1. Entendimento",
      desc: "Realizamos reuniões e análises aprofundadas para entender suas dores, metas e expectativas. Aqui nascem as soluções certas.",
      image: "https://cdn-icons-png.flaticon.com/512/9909/9909765.png", // ícone de análise
    },
    {
      title: "2. Prototipação",
      desc: "Transformamos ideias em protótipos visuais navegáveis. Validamos com você antes de começar o desenvolvimento real.",
      image: "https://cdn-icons-png.flaticon.com/512/10885/10885676.png", // ícone de wireframe/protótipo
    },
    {
      title: "3. Entrega e Suporte",
      desc: "Depois do lançamento, seguimos com você oferecendo suporte técnico, melhorias e atualizações contínuas.",
      image: "https://cdn-icons-png.flaticon.com/512/9511/9511499.png", // ícone de suporte/entrega
    },
  ];

  return (
    <main className="px-6 md:px-12 py-16 max-w-6xl mx-auto space-y-16">
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-4">Nosso Processo</h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Entenda como transformamos ideias em experiências digitais completas e eficientes.
        </p>
      </section>

      <section className="grid gap-10 md:grid-cols-3">
        {etapas.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg p-6 text-center border border-gray-100 hover:shadow-xl transition"
          >
            <img src={item.image} alt={item.title} className="w-24 h-24 mx-auto mb-4" />
            <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
            <p className="text-gray-700">{item.desc}</p>
          </div>
        ))}
      </section>

      <div className="flex justify-center">
        <Link
          href="/"
          className="bg-orange-500 text-white px-6 py-3 rounded-full font-medium hover:bg-orange-600 transition"
        >
          Voltar para a Home
        </Link>
      </div>
    </main>
  );
};

export default ProcessoPage;
