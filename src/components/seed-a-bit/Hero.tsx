// Caminho: src/components/seed-a-bit/Hero.tsx
import Image from 'next/image';

const TechIcon = ({ src, alt, position }: { src: string; alt: string; position: string }) => (
  <div className={`absolute ${position} animate-float hidden md:block`}>
    <Image src={src} alt={alt} width={50} height={50} className="opacity-80" />
  </div>
);

const Hero = () => {
  return (
    <section id="sobre-mim" className="w-full py-20 px-4 flex flex-col md:flex-row items-center justify-center bg-white dark:bg-gray-900 transition-colors duration-300">

      {/* Coluna de Texto */}
      <div className="md:w-1/2 text-center md:text-left z-10">
        <h2 className="text-sm font-bold uppercase text-pink-500">
          Analista de Projetos | Desenvolvedor Web
        </h2>
        <h1 className="text-4xl md:text-5xl font-bold mt-2 text-gray-900 dark:text-gray-100">
          Gabriel Sabino Leite
        </h1>
        {/* O container do parágrafo agora permite que o texto cresça livremente */}
        <p className="mt-4 text-base md:text-lg text-gray-600 dark:text-gray-300">
          Sou Analista de Projetos na Seed a Bit Tecnologia e graduando em Sistemas de Informação pela UFRPE. Tenho experiência em desenvolvimento front-end, design de sistemas, gestão de projetos e metodologias ágeis (Scrum). Atuo com tecnologias como React.js, Next.js, HTML, CSS, Python e ferramentas de versionamento como Git e GitHub. Participo ativamente de eventos e comunidades de tecnologia, buscando sempre inovar e entregar soluções de impacto.
        </p>
        <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center md:justify-start"> {/* Botões em coluna no mobile, linha no desktop */}
          <a href="#projetos" className="bg-pink-500 text-white font-bold py-3 px-6 rounded hover:bg-pink-600 transition-colors text-center">
            PROJETOS
          </a>
          <a href="https://www.linkedin.com/in/gabriel-sabino-leite-198a04100/" target="_blank" rel="noopener noreferrer" className="bg-gray-700 text-white font-bold py-3 px-6 rounded hover:bg-gray-800 transition-colors text-center">
            LINKEDIN
          </a>
        </div>
      </div>

      {/* Coluna da Imagem */}
      <div className="md:w-1/2 flex justify-center items-center mt-12 md:mt-0">
        <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px]">
          <TechIcon src="/images/html.svg" alt="HTML5" position="top-0 left-10" />
          <TechIcon src="/images/css.svg" alt="CSS3" position="top-20 right-0" />
          <TechIcon src="/images/python.svg" alt="Python" position="bottom-0 right-10" />
          <TechIcon src="/images/notion.svg" alt="Notion" position="bottom-0 left-10" />

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