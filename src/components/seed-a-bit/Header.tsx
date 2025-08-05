import Link from 'next/link';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full p-6 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Gabriel Sabino Leite</h1>
          <p className="text-sm text-gray-600 dark:text-gray-300">Analista de Projetos da Seed a Bit</p>
        </div>
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="#sobre-mim" className="hover:text-pink-500 transition-colors">Sobre mim</Link>
          <Link href="#projetos" className="hover:text-pink-500 transition-colors">Projetos</Link>
          <Link href="#contato" className="hover:text-pink-500 transition-colors">Contato</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;