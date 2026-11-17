import type { MetadataRoute } from 'next';
import { SITE } from '@/lib/site';

export const dynamic = 'force-static';

const PATHS = [
  '',
  '/features',
  '/roadmap',
  '/changelog',
  '/faq',
  '/about',
  '/contact',
  '/privacy',
  '/terms',
  '/delete-account',
];

export default function sitemap(): MetadataRoute.Sitemap {
  return PATHS.map((p) => ({ url: `${SITE.url}${p}`, changeFrequency: 'monthly' }));
}
