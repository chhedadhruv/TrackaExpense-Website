import { STORE_LINKS } from '@/lib/site';

export function StoreButtons({ align = 'start' }: { align?: 'start' | 'center' }) {
  return (
    <div className={`flex flex-wrap gap-3 ${align === 'center' ? 'justify-center' : ''}`}>
      <a
        href={STORE_LINKS.play}
        className="inline-flex items-center rounded-full bg-primary px-6 py-3 font-bold text-on-primary shadow-card transition hover:opacity-90"
      >
        Get it on Google Play
      </a>
      <a
        href={STORE_LINKS.appStore}
        className="inline-flex items-center rounded-full border border-border bg-surface px-6 py-3 font-bold text-text transition hover:bg-surface-muted"
      >
        App Store
      </a>
    </div>
  );
}
