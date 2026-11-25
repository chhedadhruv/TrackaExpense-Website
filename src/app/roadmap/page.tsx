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
      { t: 'Budgets', d: 'Monthly or custom periods, with alerts at 50, 80, 100 and 120 percent of the limit.' },
      { t: 'Recurring transactions', d: 'Rent, subscriptions and salary logged on schedule.' },
      { t: 'Group invite links', d: 'Join a group from a link instead of an email invitation.' },
      { t: 'Savings goal upgrades', d: 'A single place for goals and a notification when you reach one.' },
      { t: 'Better CSV export', d: 'Exact amounts, currency and tags, covering everything your filters match.' },
      { t: 'Summary and reminder notifications', d: 'A weekly and a monthly summary, and a reminder to settle up.' },
      { t: 'Receipt scanning', d: 'Photograph a receipt and review the amount, date and shop before anything is saved. Works with currencies that have no decimals, such as yen and won.' },
      { t: 'Bank message import', d: 'Paste a bank SMS to fill in an expense or income. It is read on your phone and you confirm it before anything is saved.' },
      { t: 'Credit cards', d: 'Track what each card owes per billing period, pay a bill without counting it twice, and get due-date reminders. Works in recurring, splits and settle-up.' },
      { t: 'Fix my balance', d: 'Match the app to your real balance after a long gap, without changing your income and expense totals.' },
      { t: 'Custom categories', d: 'Your own expense, income and savings goal categories, with hiding, reordering and renaming that carries your history along.' },
      { t: 'Faster entry', d: 'Smarter category suggestions and title autocomplete from your own past entries.' },
      { t: 'Invite links open in the app', d: 'On Android, a shared group link opens straight in TrackaExpense.' },
      { t: 'Reminder switches', d: 'Turn the evening reminder and the card bill reminders on or off from Profile.' },
    ],
  },
  {
    label: 'Next',
    note: 'Built or in progress, not released yet',
    items: [
      { t: 'Use without an account', d: 'Keep expenses, income, budgets, cards and goals only on your phone, with nothing sent to a server. Splits will still need an account.' },
      { t: 'Offline saves', d: 'Add, edit and delete transactions without a connection and sync later. Settle-up, card bill payments and receipt photos offline come after that.' },
      { t: 'Bank messages from your inbox (Android)', d: 'Find bank payments in your messages and fill in an expense, only with your permission and read on your phone. This depends on Google Play approving SMS access.' },
      { t: 'Usage analytics switch', d: 'Turn usage statistics off from Profile.' },
      { t: 'More notification settings', d: 'Choose which summaries and reminders you receive. Today you can switch the evening reminder and the card bill reminders on or off.' },
      { t: 'Card bill from a message', d: 'Paste a card statement message to fill in the total due and the due date.' },
      { t: 'Credit limit view', d: 'See how much of each card\'s limit you have used.' },
    ],
  },
  {
    label: 'Later',
    note: 'Ideas we intend to explore',
    items: [
      { t: 'PDF export', d: 'A tidy report alongside the CSV export.' },
      { t: 'Android home-screen widget', d: 'Your balance at a glance.' },    ],
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
