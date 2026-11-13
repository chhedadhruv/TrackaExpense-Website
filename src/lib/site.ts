export const SITE = {
  name: 'TrackaExpense',
  url: 'https://trackaexpense.dhruvchheda.com',
  email: 'me@dhruvchheda.com',
  tagline: 'Track expenses. Split bills. Reach your goals.',
  description:
    'TrackaExpense is an expense tracker with group bill splitting, savings goals and clear statistics, for Android.',
  version: '1.5.1',
} as const;

export const STORE_LINKS = {
  play: 'https://play.google.com/store/apps/details?id=com.trackaexpense',
  appStore: 'https://apps.apple.com/us/app/trackaexpense/id6752925670',
} as const;

export const SOCIAL = {
  github: 'https://github.com/chhedadhruv',
  linkedin: 'https://www.linkedin.com/in/dhruv-chheda',
  x: 'https://x.com/ChhedaDhruv4',
} as const;

export const NAV_LINKS = [
  { href: '/features', label: 'Features' },
  { href: '/roadmap', label: 'Roadmap' },
  { href: '/changelog', label: 'Changelog' },
  { href: '/faq', label: 'FAQ' },
  { href: '/about', label: 'About' },
] as const;
