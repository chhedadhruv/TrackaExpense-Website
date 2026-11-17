import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'TrackaExpense',
    short_name: 'TrackaExpense',
    description: 'Track expenses, split bills and reach your savings goals.',
    start_url: '/',
    display: 'standalone',
    background_color: '#F4F6FA',
    theme_color: '#677CD2',
    icons: [{ src: '/icon-512.png', sizes: '512x512', type: 'image/png' }],
  };
}
