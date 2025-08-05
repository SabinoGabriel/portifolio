'use client';
import { useState, useEffect } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem('theme');
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      setDark(true);
    }
  }, []);

  function handleToggle() {
    if (dark) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
    setDark(!dark);
  }

  return (
    <button onClick={handleToggle} className="p-2 rounded-full bg-gray-200 dark:bg-gray-700" aria-label="Alternar tema claro/escuro">
      {dark ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-gray-800" />}
    </button>
  );
}

export default ThemeToggle;
