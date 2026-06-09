import Header from '@/components/sections/Header';
import Hero from '@/components/sections/Hero';
import Projects from '@/components/sections/Projects';
import Contact from '@/components/sections/Contacts';

export default function Home() {
  return (
    <div className="bg-white dark:bg-black min-h-screen transition-colors duration-300">
      <Header />
      <main className="px-[10%] pt-[88px]">
        <Hero />
        <Projects />
        <Contact />
      </main>
      <footer className="px-[10%] py-8 text-center text-gray-500 dark:text-gray-400 bg-white dark:bg-black">
        <p className="text-sm">© 2026 Gabriel Sabino Leite. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
