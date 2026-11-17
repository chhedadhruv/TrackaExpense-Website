import { ArrowRight, BarChart3, Moon, PiggyBank, Receipt, Tag, Users } from 'lucide-react';
import Link from 'next/link';
import { PhoneFrame } from '@/components/PhoneFrame';
import { StoreButtons } from '@/components/StoreButtons';
import { Container, Eyebrow } from '@/components/ui';
import { SITE } from '@/lib/site';

const TOUR = [
  {
    icon: Receipt,
    title: 'Log in seconds',
    body: 'Add an expense or income with a category, tags and a receipt photo from your camera or gallery.',
  },
  {
    icon: BarChart3,
    title: 'See where it goes',
    body: 'Spending trends, a category breakdown, top merchants and a calendar heatmap, over any date range.',
  },
  {
    icon: Users,
    title: 'Split with friends',
    body: 'Create groups, split bills evenly or by percentage, and settle up. Shares always add up to the exact total.',
  },
  {
    icon: PiggyBank,
    title: 'Save toward goals',
    body: 'Set targets, deposit and withdraw, and see how many months are left at your pace.',
  },
  {
    icon: Tag,
    title: 'Find anything',
    body: 'Tag transactions and search or filter by period, text or tag.',
  },
  {
    icon: Moon,
    title: 'Light and dark',
    body: 'Follows your phone, or pick a theme yourself. Over 20 currencies supported.',
  },
];

const STEPS = [
  { n: '1', title: 'Sign in', body: 'Use email or your Google account.' },
  { n: '2', title: 'Add your first expense', body: 'Pick a category, set an amount, attach a receipt if you like.' },
  { n: '3', title: 'Watch it add up', body: 'Statistics, balances and goals update as you go.' },
];

const NEXT = ['Budgets with alerts', 'Recurring transactions', 'Group invite links', 'Receipt scanning'];

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MobileApplication',
    name: SITE.name,
    operatingSystem: 'Android',
    applicationCategory: 'FinanceApplication',
    description: SITE.description,
    url: SITE.url,
    image: `${SITE.url}/icon-512.png`,
    author: { '@type': 'Person', name: 'Dhruv Chheda' },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className="overflow-hidden">
        <Container className="grid items-center gap-12 pb-20 pt-14 lg:grid-cols-[1.1fr_0.9fr] lg:pt-24">
          <div className="min-w-0">
            <Eyebrow>Expenses &middot; Splits &middot; Savings</Eyebrow>
            <h1 className="text-4xl leading-[1.08] sm:text-5xl lg:text-6xl">
              Know where your money goes. Split what you share.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-text-secondary">
              {SITE.name} tracks your spending, divides bills with friends down to the last paisa, and
              keeps your savings goals in view. One calm app, built to stay out of your way.
            </p>
            <div className="mt-8">
              <StoreButtons />
            </div>
            <p className="mt-4 text-sm text-text-secondary">Available on Android.</p>
          </div>
          <div className="relative min-w-0">
            <div
              aria-hidden
              className="absolute inset-x-6 top-10 -z-10 h-[80%] rounded-full bg-primary/20 blur-3xl"
            />
            <div className="grid grid-cols-2 items-center gap-4">
              <PhoneFrame src="/screens/phone-1.jpg" alt="Home screen showing balance, income and recent expenses" priority />
              <PhoneFrame
                src="/screens/phone-3.jpg"
                alt="Statistics screen with spending trend and category breakdown"
                className="translate-y-10"
              />
            </div>
          </div>
        </Container>
      </section>

      <section>
        <Container className="py-16">
          <Eyebrow>What it does</Eyebrow>
          <h2 className="max-w-2xl text-3xl sm:text-4xl">Everything for everyday money, nothing extra.</h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {TOUR.map(({ icon: Icon, title, body }) => (
              <div key={title} className="rounded-card border border-border bg-surface p-6 shadow-card">
                <div className="mb-4 grid h-11 w-11 place-items-center rounded-xl bg-surface-muted text-primary-text">
                  <Icon size={22} />
                </div>
                <h3 className="text-xl">{title}</h3>
                <p className="mt-2 text-text-secondary">{body}</p>
              </div>
            ))}
          </div>
          <Link
            href="/features"
            className="mt-8 inline-flex items-center gap-2 font-bold text-primary-text hover:underline"
          >
            See every feature <ArrowRight size={16} />
          </Link>
        </Container>
      </section>

      <section className="bg-surface">
        <Container className="grid items-center gap-12 py-20 lg:grid-cols-2">
          <div className="order-2 grid grid-cols-2 gap-4 lg:order-1">
            <PhoneFrame src="/screens/phone-5.jpg" alt="Group split and settle-up for a trip" />
            <PhoneFrame
              src="/screens/phone-4.jpg"
              alt="Savings goals with progress"
              className="translate-y-10"
            />
          </div>
          <div className="order-1 lg:order-2">
            <Eyebrow>Shared money, made fair</Eyebrow>
            <h2 className="text-3xl sm:text-4xl">Split the trip, not the friendship.</h2>
            <p className="mt-5 text-lg text-text-secondary">
              Money is divided in whole minor units, so the shares of a split always add up to the total.
              Settle up from suggested payments, and every settlement is recorded for both people.
            </p>
            <ul className="mt-6 space-y-2 text-text-secondary">
              <li>Even or percentage splits across a group</li>
              <li>Suggested settlements, with a history you can review</li>
              <li>IOUs for one-off loans between friends</li>
            </ul>
          </div>
        </Container>
      </section>

      <section>
        <Container className="py-20">
          <Eyebrow>How it works</Eyebrow>
          <h2 className="text-3xl sm:text-4xl">Up and running in a minute.</h2>
          <ol className="mt-10 grid gap-5 md:grid-cols-3">
            {STEPS.map((s) => (
              <li key={s.n} className="rounded-card border border-border bg-surface p-6">
                <span className="tabular font-heading text-4xl font-semibold italic text-primary-text">
                  {s.n}
                </span>
                <h3 className="mt-3 text-xl">{s.title}</h3>
                <p className="mt-2 text-text-secondary">{s.body}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section>
        <Container>
          <div className="grid gap-8 rounded-card border border-border bg-surface p-8 shadow-card md:grid-cols-2 md:p-12">
            <div>
              <Eyebrow>Your data</Eyebrow>
              <h2 className="text-3xl">Privacy is a feature.</h2>
              <p className="mt-4 text-text-secondary">
                Your transactions are stored in your own account, protected by security rules. The app
                asks only for the permissions it needs, and you can delete your account and data from
                inside the app.
              </p>
              <Link
                href="/privacy"
                className="mt-5 inline-flex items-center gap-2 font-bold text-primary-text hover:underline"
              >
                Read the privacy policy <ArrowRight size={16} />
              </Link>
            </div>
            <div>
              <Eyebrow>Coming next</Eyebrow>
              <h2 className="text-3xl">Where we are headed.</h2>
              <ul className="mt-4 space-y-2 text-text-secondary">
                {NEXT.map((n) => (
                  <li key={n} className="flex items-center gap-2">
                    <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-primary" />
                    {n}
                  </li>
                ))}
              </ul>
              <Link
                href="/roadmap"
                className="mt-5 inline-flex items-center gap-2 font-bold text-primary-text hover:underline"
              >
                View the roadmap <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <section>
        <Container className="py-20 text-center">
          <h2 className="mx-auto max-w-2xl text-3xl sm:text-4xl">Start tracking today.</h2>
          <p className="mx-auto mt-4 max-w-xl text-text-secondary">
            Download {SITE.name} and log your first expense.
          </p>
          <div className="mt-8">
            <StoreButtons align="center" />
          </div>
        </Container>
      </section>
    </>
  );
}
