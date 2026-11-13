'use client';

import { Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';

type Mode = 'light' | 'dark';

export function ThemeToggle() {
  const [mode, setMode] = useState<Mode>('light');

  useEffect(() => {
    setMode(document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light');
  }, []);

  const toggle = () => {
    const next: Mode = mode === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem('theme', next);
    } catch {}
    setMode(next);
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={mode === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
      className="grid h-10 w-10 place-items-center rounded-full border border-border bg-surface text-text-secondary transition hover:text-text"
    >
      {mode === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
