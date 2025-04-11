"use client";

import { motion } from "framer-motion";

interface Collaborator {
  name: string;
  role: string;
  bio: string;
  github: string;
  avatar: string;
  projects: {
    title: string;
    link: string;
    description?: string;
    techs?: string[];
  }[];
}

const collaborators: Collaborator[] = [
  {
    name: "Edmilson Oliveira",
    role: "Desenvolvedor Front-End",
    bio: "Apaixonado por interfaces modernas e experiências digitais com React e Next.js.",
    github: "https://github.com/Psds13",
    avatar: "/eusinho.jpg",
    projects: [
      {
        title: "Gerenciador de Tarefas",
        link: "https://github.com/Psds13/Gerenciador-de-Tarefas",
        description: "Aplicação para organizar tarefas com PHP e usando o banco de dados PostgreSQL.",
        techs: ["PHP", "PostgreSQL"],
      },
      {
        title: "Meu Carrinho",
        link: "https://github.com/prof-freedson/pi-meu-carrinho",
        description: "Simulação de carrinho para facilitar nas compras em site.",
        techs: ["Express.js","Javascript", "Styles CSS and HTML"],
      },
    ],
  },
  // Adicione mais colaboradores aqui...
];

export default function PortfoliosPage() {
  return (
    <section id="cards" className="bg-white py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-10 text-gray-900">
          Portfólios dos Colaboradores
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {collaborators.map((colab, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`p-6 rounded-lg shadow-md hover:shadow-lg transition ${
                index % 2 === 0 ? "bg-gray-100" : "bg-white border border-gray-200"
              }`}
            >
              <img
                src={colab.avatar}
                alt={colab.name}
                className="w-24 h-24 rounded-full object-cover mx-auto mb-4 transition-transform duration-300 hover:scale-105"
              />
              <h2 className="text-xl font-semibold text-center">{colab.name}</h2>
              <p className="text-sm text-gray-600 text-center">{colab.role}</p>
              <p className="text-gray-700 mt-4 text-center">{colab.bio}</p>

              <ul className="mt-4 space-y-4">
                {colab.projects.map((project, i) => (
                  <li key={i} className="text-center">
                    <a
                      href={project.link}
                      target="_blank"
                      className="text-blue-600 hover:underline text-sm font-medium"
                    >
                      🔗 {project.title}
                    </a>
                    {project.description && (
                      <p className="text-xs text-gray-500 mt-1">{project.description}</p>
                    )}
                    {project.techs && (
                      <div className="flex justify-center gap-2 mt-1 flex-wrap">
                        {project.techs.map((tech, j) => (
                          <span
                            key={j}
                            className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </li>
                ))}
              </ul>

              <div className="mt-4 text-center">
                <a
                  href={colab.github}
                  target="_blank"
                  className="text-orange-500 hover:underline text-sm"
                >
                  Ver GitHub
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
