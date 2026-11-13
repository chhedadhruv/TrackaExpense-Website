import type { Metadata } from 'next';
import { SITE } from './site';

export function pageMeta(title: string, description: string, path: string): Metadata {
  const url = `${SITE.url}${path}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, siteName: SITE.name, type: 'website', images: ['/og.png'] },
    twitter: { card: 'summary_large_image', title, description, images: ['/og.png'] },
  };
}
