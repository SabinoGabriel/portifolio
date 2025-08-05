// Caminho: src/components/seed-a-bit/Header.tsx
'use client'; // Necessário para usar o useState
import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full p-4 md:p-6 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm shadow-md">
      <div className="w-full flex justify-between items-center">
        {/* Logo / Nome */}
        <div>
          <h1 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-gray-100">Gabriel Sabino Leite</h1>
          <p className="text-xs md:text-sm text-gray-700 dark:text-gray-300">Analista de Projetos da Seed a Bit</p>
        </div>

        {/* Navegação Desktop */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="#sobre-mim" className="text-gray-900 dark:text-gray-100 hover:text-pink-500 dark:hover:text-pink-400 transition-colors">Sobre mim</Link>
          <Link href="#projetos" className="text-gray-900 dark:text-gray-100 hover:text-pink-500 dark:hover:text-pink-400 transition-colors">Projetos</Link>
          <Link href="#contato" className="text-gray-900 dark:text-gray-100 hover:text-pink-500 dark:hover:text-pink-400 transition-colors">Contato</Link>
          <ThemeToggle />
        </nav>

        {/* Botão Hamburger (Aparece só no Mobile) */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Menu Mobile (Aparece quando o botão é clicado) */}
      {isOpen && (
        <div className="md:hidden mt-4">
          <nav className="flex flex-col items-center space-y-4">
            <Link href="#sobre-mim" className="text-gray-900 dark:text-gray-100 hover:text-pink-500 dark:hover:text-pink-400 transition-colors" onClick={() => setIsOpen(false)}>Sobre mim</Link>
            <Link href="#projetos" className="text-gray-900 dark:text-gray-100 hover:text-pink-500 dark:hover:text-pink-400 transition-colors" onClick={() => setIsOpen(false)}>Projetos</Link>
            <Link href="#contato" className="text-gray-900 dark:text-gray-100 hover:text-pink-500 dark:hover:text-pink-400 transition-colors" onClick={() => setIsOpen(false)}>Contato</Link>
            <ThemeToggle />
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;