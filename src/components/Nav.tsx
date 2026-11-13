'use client';

import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { NAV_LINKS, STORE_LINKS } from '@/lib/site';
import { ThemeToggle } from './ThemeToggle';

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-bg/85 backdrop-blur">
      <nav
        aria-label="Main"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6"
      >
        <Link href="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <Image src="/icon-512.png" alt="" width={32} height={32} className="rounded-lg" />
          <span className="font-heading text-lg font-semibold italic">TrackaExpense</span>
        </Link>

        <ul className="hidden items-center gap-7 md:flex">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="text-sm font-bold text-text-secondary hover:text-text">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a
            href={STORE_LINKS.play}
            className="hidden rounded-full bg-primary px-4 py-2 text-sm font-bold text-on-primary hover:opacity-90 sm:inline-block"
          >
            Get the app
          </a>
          <button
            type="button"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
            className="grid h-10 w-10 place-items-center rounded-full border border-border bg-surface md:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-border bg-bg px-4 pb-4 md:hidden">
          <ul className="flex flex-col py-2">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-base font-bold"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <a
            href={STORE_LINKS.play}
            className="block rounded-full bg-primary py-3 text-center font-bold text-on-primary"
          >
            Get the app
          </a>
        </div>
      )}
    </header>
  );
}
