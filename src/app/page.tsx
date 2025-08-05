// Caminho do arquivo: src/app/page.tsx

import Header from '@/components/seed-a-bit/Header';
import Hero from '@/components/seed-a-bit/Hero'; 
import Projects from '@/components/seed-a-bit/Projects';
import Contact from '@/components/seed-a-bit/Contacts';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Projects />
        <Contact />
      </main>
      <footer className='w-full py-8 px-4 text-center text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-900 transition-colors duration-300'>
        <p>© 2025 <a href='https://seedabit.org.br' target='_blank' rel='noopener noreferrer' className='hover:underline'>Seed a Bit</a>. All rights reserved.</p>
      </footer>
    </>
  );
}