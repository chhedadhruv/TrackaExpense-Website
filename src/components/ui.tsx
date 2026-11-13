import type { ReactNode } from 'react';

export function Container({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-6xl px-4 sm:px-6 ${className}`}>{children}</div>;
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="mb-3 text-xs font-bold uppercase tracking-[0.14em] text-primary-text">{children}</p>
  );
}

export function PageHero({
  eyebrow,
  title,
  lead,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
}) {
  return (
    <Container className="pb-10 pt-16 sm:pt-24">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h1 className="max-w-3xl text-4xl sm:text-5xl">{title}</h1>
      {lead && <p className="mt-5 max-w-2xl text-lg text-text-secondary">{lead}</p>}
    </Container>
  );
}

export function Prose({ children }: { children: ReactNode }) {
  return (
    <div className="space-y-4 text-base leading-relaxed text-text-secondary [&_a]:font-bold [&_a]:text-primary-text [&_a]:underline [&_h2]:mt-10 [&_h2]:text-2xl [&_h2]:text-text [&_h3]:mt-6 [&_h3]:text-lg [&_h3]:text-text [&_li]:ml-5 [&_li]:list-disc [&_strong]:text-text">
      {children}
    </div>
  );
}
