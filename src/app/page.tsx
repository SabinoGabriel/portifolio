// Caminho do arquivo: src/app/page.tsx

import Header from '@/components/sections/Header';
import Hero from '@/components/sections/Hero';
import Projects from '@/components/sections/Projects';
import Contact from '@/components/sections/Contacts';

export default function Home() {
  return (
    <div className="px-[10%] bg-white dark:bg-black min-h-screen transition-colors duration-300">
      <Header />
      <main>
        <Hero />
        <Projects />
        <Contact />
      </main>
      <footer className='py-8 text-center text-gray-500 dark:text-gray-400 bg-white dark:bg-black'>
        <p className='text-sm'>© 2026 Gabriel Sabino Leite. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
