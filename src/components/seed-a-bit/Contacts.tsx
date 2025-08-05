// Caminho: src/components/seed-a-bit/Contact.tsx

import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contato" className="w-full py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="px-[10%] text-center">
        <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">CONTATO</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-8">
          Vamos nos conectar!Fique à vontade para me encontrar nas redes abaixo ou enviar um e-mail.
        </p>
        <div className="flex justify-center items-center space-x-8">
          <a
            href="https://github.com/SabinoGabriel"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-gray-500 dark:text-gray-400 hover:text-pink-500 dark:hover:text-pink-400 transition-colors text-4xl"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/gabriel-sabino-leite-198a04100/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-gray-500 dark:text-gray-400 hover:text-pink-500 dark:hover:text-pink-400 transition-colors text-4xl"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:gabrielsabinopinho@gmail.com"
            aria-label="Email"
            className="text-gray-500 dark:text-gray-400 hover:text-pink-500 dark:hover:text-pink-400 transition-colors text-4xl"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;