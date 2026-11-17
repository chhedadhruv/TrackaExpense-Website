export function Accordion({ items }: { items: { q: string; a: React.ReactNode }[] }) {
  return (
    <div className="divide-y divide-border rounded-card border border-border bg-surface">
      {items.map((it) => (
        <details key={it.q} className="group px-5 py-4">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold">
            {it.q}
            <span aria-hidden className="text-primary-text transition group-open:rotate-45">
              +
            </span>
          </summary>
          <div className="mt-3 text-text-secondary">{it.a}</div>
        </details>
      ))}
    </div>
  );
}
