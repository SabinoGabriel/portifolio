// Caminho do arquivo: src/app/page.tsx

import Header from '@/components/seed-a-bit/Header';
import Hero from '@/components/seed-a-bit/Hero'; // 1. Importe o Hero

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero /> {/* 2. Adicione o Hero aqui */}
        {/* O resto dos nossos componentes virá abaixo */}
        <div className="container mx-auto p-6">
        </div>
      </main>
    </>
  );
}