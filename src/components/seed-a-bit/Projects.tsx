// Caminho: src/components/seed-a-bit/Projects.tsx

type ProjectProps = {
  title: string;
  description: string;
  projectUrl: string;
  competencies: string[];
};

// Seus projetos já estão aqui!
const projectsData: ProjectProps[] = [
  {
    title: 'Landing Page "Raízes do Bem" (Seed a Bit)',
    description: 'Desenvolvimento de uma landing page para a ONG "Raízes do Bem" como desafio final do processo seletivo da Seed a Bit.',
    projectUrl: 'https://github.com/SabinoGabriel/landing-page-ONG-raizes-do-bem',
    competencies: ['Scrum', 'Front-end', 'Gestão de projetos']
  },
  {
    title: 'Gerenciador de Pensamentos com Gamificação (UFRPE)',
    description: 'Sistema em Python com arquitetura modular e gamificação para gerenciar pensamentos diários.',
    projectUrl: 'https://github.com/SabinoGabriel/pisi1',
    competencies: ['Python', 'Gamificação', 'Design de sistemas']
  },
  {
    title: 'Projeto Final Data Science PRO (Infinity School)',
    description: 'Pipeline completo de análise e modelagem preditiva utilizando Pandas, NumPy e Machine Learning.',
    projectUrl: 'https://github.com/SabinoGabriel/infinity_projetos',
    competencies: ['Python', 'Pandas', 'Análise de dados']
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
    <section id="projetos" className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-gray-100">PROJETOS</h2>
        {/* A mágica da responsividade acontece aqui */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> {/* <-- 1 coluna no mobile, 2 no tablet, 3 no desktop */}
          {projectsData.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;