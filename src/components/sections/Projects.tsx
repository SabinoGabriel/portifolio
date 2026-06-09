// Caminho: src/components/sections/Projects.tsx

type ProjectProps = {
  title: string;
  description: string;
  projectUrl: string;
  competencies: string[];
};

const projectsData: ProjectProps[] = [
  {
    title: 'Sistema Web Psicólogos no Nordeste',
    description: 'Desenvolvimento do front-end de uma plataforma web completa para agendamento de consultas psicológicas gratuitas. Focado em alta performance, responsividade e consumo de APIs utilizando React, Next.js e TypeScript.',
    projectUrl: 'https://github.com/SabinoGabriel',
    competencies: ['React.js', 'Next.js', 'TypeScript', 'APIs'],
  },
  {
    title: 'Projeto Final Data Science PRO (Infinity School)',
    description: 'Pipeline completo de análise de dados e modelagem preditiva utilizando Python, Pandas, NumPy, bibliotecas gráficas e Machine Learning. 🏆 1º lugar no ranking de alunos.',
    projectUrl: 'https://github.com/SabinoGabriel/infinity_projetos',
    competencies: ['Python', 'Pandas', 'Análise de dados'],
  },
  {
    title: 'Gerenciador de Pensamentos com Gamificação (UFRPE)',
    description: 'Sistema desenvolvido em Python com foco em arquitetura modular, lógica estruturada e aplicação de conceitos de gamificação para gerenciar pensamentos diários.',
    projectUrl: 'https://github.com/SabinoGabriel/pisi1',
    competencies: ['Python', 'Gamificação', 'Design de sistemas'],
  },
];

const ProjectCard = ({ title, description, projectUrl }: ProjectProps) => (
  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden flex flex-col">
    <div className="p-6 flex-grow">
      <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">{title}</h3>
      <p className="text-gray-700 dark:text-gray-300 mb-4">{description}</p>
    </div>
    <div className="p-6 pt-0">
      <a
        href={projectUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-pink-500 text-white font-semibold px-4 py-2 rounded-lg hover:bg-pink-600 transition-colors"
      >
        Repositório no GitHub
      </a>
    </div>
  </div>
);

const Projects = () => {
  return (
    <section id="projetos" className="py-20 px-4 bg-white dark:bg-black">
      <div>
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-gray-100">PROJETOS</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
