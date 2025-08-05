// Caminho do arquivo: src/app/page.tsx

import Header from '@/components/seed-a-bit/Header';
import Hero from '@/components/seed-a-bit/Hero'; 
import Projects from '@/components/seed-a-bit/Projects';
import Contact from '@/components/seed-a-bit/Contacts';

export default function Home() {
  return (
    <div className="px-[10%]">
      <Header />
      <main>
        <Hero />
        <Projects />
        <Contact />
      </main>
      <footer className='py-8 text-center text-gray-500 dark:text-gray-400 bg-white dark:bg-black'>
        <p className='text-sm'>© 2025 <a className='underline' href='https://seedabit.org.br' target='_blank' rel='noopener noreferrer'>Seed a Bit</a>. All rights reserved.</p>
      </footer>
    </div>
  );
}