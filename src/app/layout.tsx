import type { Metadata, Viewport } from 'next';
import localFont from 'next/font/local';
import { Analytics } from '@vercel/analytics/next';
import { Footer } from '@/components/Footer';
import { Nav } from '@/components/Nav';
import { SITE } from '@/lib/site';
import './globals.css';

const lato = localFont({
  variable: '--font-lato',
  display: 'swap',
  src: [
    { path: '../../public/fonts/Lato-Regular.ttf', weight: '400', style: 'normal' },
    { path: '../../public/fonts/Lato-Italic.ttf', weight: '400', style: 'italic' },
    { path: '../../public/fonts/Lato-Bold.ttf', weight: '700', style: 'normal' },
  ],
});

const kufam = localFont({
  variable: '--font-kufam',
  display: 'swap',
  src: [{ path: '../../public/fonts/Kufam-SemiBoldItalic.ttf', weight: '600', style: 'italic' }],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: 'TrackaExpense: expense tracker and bill splitter', template: '%s | TrackaExpense' },
  description: SITE.description,
  applicationName: SITE.name,
  authors: [{ name: 'Dhruv Chheda' }],
  icons: { icon: '/icon-512.png', apple: '/icon-512.png' },
  manifest: '/manifest.webmanifest',
  alternates: { canonical: SITE.url },
  openGraph: {
    siteName: SITE.name,
    type: 'website',
    url: SITE.url,
    title: 'TrackaExpense: expense tracker and bill splitter',
    description: SITE.description,
    images: ['/og.png'],
  },
  twitter: { card: 'summary_large_image', images: ['/og.png'] },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#F4F6FA' },
    { media: '(prefers-color-scheme: dark)', color: '#121316' },
  ],
};

const themeScript = `try{var t=localStorage.getItem('theme');if(t==='dark'||t==='light'){document.documentElement.dataset.theme=t}}catch(e){}`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${lato.variable} ${kufam.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-on-primary"
        >
          Skip to content
        </a>
        <Nav />
        <main id="main">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
