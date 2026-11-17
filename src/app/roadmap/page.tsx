import { Container, PageHero } from '@/components/ui';
import { pageMeta } from '@/lib/metadata';

export const metadata = pageMeta(
  'Roadmap',
  'What is shipping now, what is next and what comes later in TrackaExpense. Plans can change.',
  '/roadmap',
);

const COLUMNS = [
  {
    label: 'Now',
    note: 'Shipping in the current releases',
    items: [
      { t: 'Dark mode', d: 'System, light or dark, across every screen.' },
      { t: 'Tags and search', d: 'Tag transactions and filter by period, text or tag.' },
      { t: 'New Statistics', d: 'Trend, category donut, merchants and heatmap on a faster chart engine.' },
      { t: 'Faster and sturdier', d: 'Cached data for instant starts, smoother long lists, clearer loading and error states.' },
      { t: 'In-app update prompt', d: 'Get fixes without waiting for a full store update.' },
      { t: 'New app icon', d: 'A refreshed look on your home screen.' },
    ],
  },
  {
    label: 'Next',
    note: 'Planned, in design or early build',
    items: [
      { t: 'Budgets', d: 'Monthly or custom periods, with alerts at 50, 80, 100 and 120 percent of the limit.' },
      { t: 'Recurring transactions', d: 'Rent, subscriptions and salary logged on schedule.' },
      { t: 'Group invite links', d: 'Join a group from a link instead of an email invitation.' },
      { t: 'Savings goal upgrades', d: 'A single place for goals and a notification when you reach one.' },
    ],
  },
  {
    label: 'Later',
    note: 'Ideas we intend to explore',
    items: [
      { t: 'Receipt scanning', d: 'Photograph a receipt and review the details before anything is saved.' },
      { t: 'PDF export', d: 'A tidy report alongside the CSV export.' },
      { t: 'More notifications', d: 'Budget thresholds, split requests, settled payments and a weekly summary.' },
      { t: 'Offline queue', d: 'Add transactions without a connection and sync when you are back.' },
      { t: 'Android home-screen widget', d: 'Your balance at a glance.' },
      { t: 'iOS', d: 'An iPhone version is on hold until the build pipeline is ready.' },
    ],
  },
];

export default function RoadmapPage() {
  return (
    <>
      <PageHero
        eyebrow="Roadmap"
        title="Where TrackaExpense is going"
        lead="No dates on purpose. Plans can change, and anything here may shift, shrink or be dropped."
      />
      <Container>
        <div className="grid gap-6 lg:grid-cols-3">
          {COLUMNS.map((c) => (
            <section key={c.label} className="rounded-card border border-border bg-surface p-6 shadow-card">
              <h2 className="text-2xl">{c.label}</h2>
              <p className="mt-1 text-sm text-text-secondary">{c.note}</p>
              <ul className="mt-5 space-y-4">
                {c.items.map((it) => (
                  <li key={it.t} className="border-t border-border pt-4 first:border-0 first:pt-0">
                    <p className="font-bold">{it.t}</p>
                    <p className="mt-1 text-sm text-text-secondary">{it.d}</p>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
        <p className="mt-8 text-sm text-text-secondary">
          Have an idea or a need that is missing? Tell us on the contact page.
        </p>
      </Container>
    </>
  );
}
