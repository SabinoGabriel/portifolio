'use client';

import { useEffect, useSyncExternalStore } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

const themeChangeEvent = 'themechange';

const subscribeToTheme = (onStoreChange: () => void) => {
  window.addEventListener('storage', onStoreChange);
  window.addEventListener(themeChangeEvent, onStoreChange);

  return () => {
    window.removeEventListener('storage', onStoreChange);
    window.removeEventListener(themeChangeEvent, onStoreChange);
  };
};

const getThemeSnapshot = () => localStorage.getItem('theme') === 'dark';
const getServerSnapshot = () => false;

function ThemeToggle() {
  const dark = useSyncExternalStore(subscribeToTheme, getThemeSnapshot, getServerSnapshot);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
  }, [dark]);

  function handleToggle() {
    localStorage.setItem('theme', dark ? 'light' : 'dark');
    window.dispatchEvent(new Event(themeChangeEvent));
  }

  return (
    <button onClick={handleToggle} className="p-2 rounded-full bg-gray-200 dark:bg-gray-700" aria-label="Alternar tema claro/escuro">
      {dark ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-gray-800" />}
    </button>
  );
}

export default ThemeToggle;
