// hooks/useDarkMode.ts
import { useEffect, useState } from 'react';

export default function useDarkMode(): [boolean, () => void] {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (saved === 'dark' || (!saved && prefersDark)) {
      document.documentElement.classList.add('dark');
      setIsDark(true);
    } else {
      document.documentElement.classList.remove('dark');
      setIsDark(false);
    }
  }, []);

  const toggleDarkMode = () => {
    const html = document.documentElement;
    const currentlyDark = html.classList.toggle('dark');
    localStorage.setItem('theme', currentlyDark ? 'dark' : 'light');
    setIsDark(currentlyDark);
  };

  return [isDark, toggleDarkMode];
}