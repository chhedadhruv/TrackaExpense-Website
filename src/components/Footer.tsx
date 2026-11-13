import Image from 'next/image';
import Link from 'next/link';
import { SITE, SOCIAL } from '@/lib/site';

const COLUMNS = [
  {
    title: 'Product',
    links: [
      { href: '/features', label: 'Features' },
      { href: '/roadmap', label: 'Roadmap' },
      { href: '/changelog', label: 'Changelog' },
      { href: '/faq', label: 'FAQ' },
    ],
  },
  {
    title: 'Company',
    links: [
      { href: '/about', label: 'About' },
      { href: '/contact', label: 'Contact' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { href: '/privacy', label: 'Privacy policy' },
      { href: '/terms', label: 'Terms of use' },
      { href: '/delete-account', label: 'Delete account' },
    ],
  },
];

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-surface">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.4fr_repeat(3,1fr)]">
        <div>
          <div className="flex items-center gap-2.5">
            <Image src="/icon-512.png" alt="" width={32} height={32} className="rounded-lg" />
            <span className="font-heading text-lg font-semibold italic">TrackaExpense</span>
          </div>
          <p className="mt-3 max-w-xs text-sm text-text-secondary">{SITE.tagline}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {[
              { href: `mailto:${SITE.email}`, label: 'Email' },
              { href: SOCIAL.github, label: 'GitHub' },
              { href: SOCIAL.linkedin, label: 'LinkedIn' },
              { href: SOCIAL.x, label: 'X' },
            ].map(({ href, label }) => (
              <a
                key={label}
                href={href}
                className="rounded-full border border-border px-3.5 py-1.5 text-sm font-bold text-text-secondary hover:text-text"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
        {COLUMNS.map((c) => (
          <div key={c.title}>
            <h2 className="mb-3 font-sans text-sm font-bold not-italic tracking-normal text-text">
              {c.title}
            </h2>
            <ul className="space-y-2">
              {c.links.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-text-secondary hover:text-text">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-border py-5 text-center text-xs text-text-secondary">
        &copy; {new Date().getFullYear()} TrackaExpense. Made by Dhruv Chheda.
      </div>
    </footer>
  );
}
