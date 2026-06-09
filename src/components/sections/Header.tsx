'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const isScrollingDown = currentScrollY > lastScrollY && currentScrollY > 80;

      setIsHidden(isScrollingDown);
      if (isScrollingDown) {
        setIsOpen(false);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full bg-white/80 dark:bg-black/80 backdrop-blur-sm shadow-md transition-transform duration-300 ${
        isHidden ? '-translate-y-full' : 'translate-y-0'
      }`}
    >
      <div className="flex justify-between items-center h-[88px] px-[10%]">
        <div>
          <h1 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-gray-100">Gabriel Sabino Leite</h1>
        </div>

        <nav className="hidden md:flex items-center space-x-6">
          <Link href="#sobre-mim" className="text-gray-900 dark:text-gray-100 hover:text-pink-500 dark:hover:text-pink-400 transition-colors">Sobre mim</Link>
          <Link href="#projetos" className="text-gray-900 dark:text-gray-100 hover:text-pink-500 dark:hover:text-pink-400 transition-colors">Projetos</Link>
          <Link href="#contato" className="text-gray-900 dark:text-gray-100 hover:text-pink-500 dark:hover:text-pink-400 transition-colors">Contato</Link>
          <ThemeToggle />
        </nav>

        <div className="md:hidden flex items-center gap-4">
          <ThemeToggle />
          <button
            type="button"
            aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} className="text-gray-900 dark:text-white" /> : <Menu size={24} className="text-gray-900 dark:text-white" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden py-4 absolute w-full bg-white dark:bg-black">
          <nav className="flex flex-col items-center space-y-4">
            <Link href="#sobre-mim" className="text-gray-900 dark:text-white hover:text-pink-500 dark:hover:text-pink-400 transition-colors" onClick={() => setIsOpen(false)}>Sobre mim</Link>
            <Link href="#projetos" className="text-gray-900 dark:text-white hover:text-pink-500 dark:hover:text-pink-400 transition-colors" onClick={() => setIsOpen(false)}>Projetos</Link>
            <Link href="#contato" className="text-gray-900 dark:text-white hover:text-pink-500 dark:hover:text-pink-400 transition-colors" onClick={() => setIsOpen(false)}>Contato</Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
