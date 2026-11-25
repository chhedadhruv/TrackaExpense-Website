import Link from 'next/link';
import { Accordion } from '@/components/Accordion';
import { Container, PageHero } from '@/components/ui';
import { pageMeta } from '@/lib/metadata';
import { SITE } from '@/lib/site';

export const metadata = pageMeta(
  'FAQ',
  'Answers about platforms, data, offline use, categories, currencies, group splits and deleting your account.',
  '/faq',
);

const ITEMS = [
  {
    q: 'Which platforms does TrackaExpense support?',
    a: 'Android and iPhone. Get it on Google Play or the App Store.',
  },
  {
    q: 'How do I sign in?',
    a: 'With an email and password, or with your Google account.',
  },
  {
    q: 'Can I use it without an account?',
    a: 'Soon. A coming update adds Continue without an account: your expenses, income, budgets, cards and savings goals stay on your phone and nothing is sent to a server. Groups and splits still need an account, and you can sign in later.',
  },
  {
    q: 'Does it work offline?',
    a: 'You can open the app and see your last data without a connection. Adding, editing and deleting transactions offline, synced when you reconnect, is in development.',
  },
  {
    q: 'Does the app read my text messages?',
    a: 'Not today. You can paste a bank message to fill in a transaction. A coming Android update can find bank payments in your inbox, but only after an explanation and your permission, and the messages are read on your phone and never sent anywhere.',
  },
  {
    q: 'Can I add my own categories?',
    a: 'Yes. Add expense, income and savings goal categories with an icon from Profile or the category picker, and hide or reorder the built-in ones.',
  },
  {
    q: 'Where is my data stored?',
    a: (
      <>
        In your account on Google Firebase, protected by security rules. See the{' '}
        <Link className="font-bold text-primary-text underline" href="/privacy">
          privacy policy
        </Link>{' '}
        for the services we use.
      </>
    ),
  },
  {
    q: 'Which currencies are supported?',
    a: 'More than 20, including INR, USD, EUR, GBP, JPY, AUD, CAD and AED. INR is the default and you can change it in your profile.',
  },
  {
    q: 'How do group splits work?',
    a: 'Create a group, invite people by email, and add a split with an even or percentage share. The shares always add up to the total. When you settle up, both people get the matching transaction.',
  },
  {
    q: 'Can I export my data?',
    a: 'Yes, as a CSV file from the app.',
  },
  {
    q: 'How do I delete my account?',
    a: (
      <>
        From Profile in the app, or by email if you cannot open it. Full steps are on the{' '}
        <Link className="font-bold text-primary-text underline" href="/delete-account">
          delete account page
        </Link>
        .
      </>
    ),
  },
  {
    q: 'I found a bug or have an idea.',
    a: (
      <>
        Please tell us through the{' '}
        <Link className="font-bold text-primary-text underline" href="/contact">
          contact page
        </Link>{' '}
        or at {SITE.email}.
      </>
    ),
  },
];

export default function FaqPage() {
  return (
    <>
      <PageHero eyebrow="FAQ" title="Frequently asked questions" />
      <Container className="max-w-3xl">
        <Accordion items={ITEMS} />
      </Container>
    </>
  );
}
