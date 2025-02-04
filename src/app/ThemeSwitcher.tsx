'use client';
import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const toggleDarkMode = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className="absolute right-4 top-4">
      <button
        onClick={toggleDarkMode}
        className="bg-gray-100 p-2 rounded-full self-end"
      >
        {theme === 'dark' ? <Sun /> : <Moon />}
      </button>
    </div>
  );
};

export default ThemeSwitcher;
