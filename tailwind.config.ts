import type { Config } from 'tailwindcss';

const token = (name: string) => `rgb(var(--${name}) / <alpha-value>)`;

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        bg: token('bg'),
        surface: token('surface'),
        'surface-muted': token('surface-muted'),
        border: token('border'),
        text: token('text'),
        'text-secondary': token('text-secondary'),
        primary: token('primary'),
        'primary-text': token('primary-text'),
        'on-primary': token('on-primary'),
        income: token('income'),
        expense: token('expense'),
        warning: token('warning'),
      },
      fontFamily: {
        sans: ['var(--font-lato)', 'system-ui', 'sans-serif'],
        heading: ['var(--font-kufam)', 'var(--font-lato)', 'serif'],
      },
      borderRadius: { card: '16px' },
      boxShadow: {
        card: '0 1px 2px rgb(var(--shadow) / 0.06), 0 8px 24px rgb(var(--shadow) / 0.06)',
        phone: '0 30px 60px -20px rgb(var(--shadow) / 0.35)',
      },
    },
  },
  plugins: [],
};

export default config;
