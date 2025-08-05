// Caminho do arquivo: src/components/seed-a-bit/Hero.tsx

import Image from 'next/image';

// Este é um pequeno componente SÓ para os ícones, para manter o código limpo
const TechIcon = ({ src, alt, position }: { src: string; alt: string; position: string }) => (
  <div className={`absolute ${position} animate-float hidden md:block`}>
    <Image src={src} alt={alt} width={50} height={50} className="opacity-80" />
  </div>
);

const Hero = () => {
  return (
    <section id="sobre-mim" className="container mx-auto py-16 px-6 flex flex-col md:flex-row items-center justify-center min-h-[calc(100vh-88px)]">

      {/* Coluna de Texto (Esquerda no Desktop) */}
      <div className="md:w-1/2 text-center md:text-left z-10">
        <h2 className="text-sm font-bold uppercase text-pink-500">
          DESENVOLVEDOR WEB FULLSTACK
        </h2>
        <h1 className="text-4xl md:text-6xl font-bold mt-2">
          Olá, meu nome é Gabriel
        </h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Sou Gabriel Sabino Leite, Analista de Projetos na Seed a Bit Tecnologia e graduando em Sistemas de Informação pela UFRPE. Tenho experiência em desenvolvimento front e back, design de sistemas, gestão de projetos e metodologias ágeis (Scrum). Trabalho com tecnologias como React.js, Next.js, React Native, HTML, CSS, Python e ferramentas de versionamento como Git e GitHub. Estou sempre participando de eventos e comunidades de tecnologia, buscando inovar e entregar soluções de impacto.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <a href="#projetos" className="bg-pink-500 text-white font-bold py-3 px-6 rounded hover:bg-pink-600 transition-colors text-center">
            PROJETOS
          </a>
          <a href="https://www.linkedin.com/in/gabriel-sabino-leite-198a04100/" target="_blank" rel="noopener noreferrer" className="bg-gray-700 text-white font-bold py-3 px-6 rounded hover:bg-gray-800 transition-colors text-center">
            LINKEDIN
          </a>
        </div>
      </div>

      {/* Coluna da Imagem (Direita no Desktop) */}
      <div className="md:w-1/2 flex justify-center items-center mt-12 md:mt-0">
        <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px]">
          {/* Ícones Flutuantes (só aparecem em telas médias para cima) */}
          <TechIcon src="/images/html.svg" alt="HTML5" position="top-0 left-10" />
          <TechIcon src="/images/css.svg" alt="CSS3" position="top-20 right-0" />
          <TechIcon src="/images/python.svg" alt="Python" position="bottom-0 right-10" />
          <TechIcon src="/images/notion.svg" alt="Notion" position="top-1/2 -left-12" />

          {/* Sua Foto */}
          <div className="absolute inset-0 flex items-center justify-center">
            <Image
              src="/images/profile.jpg"
              alt="Foto de Gabriel Sabino Leite"
              width={300}
              height={300}
              className="rounded-full object-cover shadow-lg"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;