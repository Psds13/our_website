// app/portfolios/page.tsx

"use client";

interface Collaborator {
  name: string;
  role: string;
  bio: string;
  github: string;
  avatar: string;
  projects: {
    title: string;
    link: string;
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
      },
      {
        title: "Meu Carrinho",
        link: "https://github.com/prof-freedson/pi-meu-carrinho",
      },
    ],
  },
  // Adicione mais colaboradores aqui...
];

export default function PortfoliosPage() {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-10 text-gray-900">
          Portfólios dos Colaboradores
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {collaborators.map((colab, index) => (
            <div
              key={index}
              className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition"
            >
              <img
                src={colab.avatar}
                alt={colab.name}
                className="w-24 h-24 rounded-full object-cover mx-auto mb-4"
              />
              <h2 className="text-xl font-semibold text-center">{colab.name}</h2>
              <p className="text-sm text-gray-600 text-center">{colab.role}</p>
              <p className="text-gray-700 mt-4 text-center">{colab.bio}</p>
              <ul className="mt-4 space-y-2">
                {colab.projects.map((project, i) => (
                  <li key={i}>
                    <a
                      href={project.link}
                      target="_blank"
                      className="text-blue-600 hover:underline text-sm block text-center"
                    >
                      🔗 {project.title}
                    </a>
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
