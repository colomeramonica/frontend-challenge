'use client';
import { Moon, Sun } from 'lucide-react';
import { useState } from 'react';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div
      className={`bg-slate-300 dark:bg-slate-900 font-[family-name:var(--font-geist-sans)] gap-16 grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 sm:p-20 ${
        darkMode ? 'dark' : ''
      }`}
    >
      <button
        onClick={toggleDarkMode}
        className="bg-gray-200 p-2 rounded self-end"
      >
        {darkMode ? <Sun /> : <Moon />}
      </button>
    </div>
  );
}
