import { Container, PageHero } from '@/components/ui';
import { pageMeta } from '@/lib/metadata';

export const metadata = pageMeta(
  'Changelog',
  'Release notes for TrackaExpense, newest first.',
  '/changelog',
);

const RELEASES = [
  {
    version: '1.5.1 updates',
    status: 'Delivered in the app',
    notes: [
      'Budgets: set a monthly or custom-period limit, in total or for one category, with alerts at 50, 80, 100 and 120 percent that you can switch on or off one by one.',
      'Recurring transactions: rent, subscriptions and salary are logged on schedule, and you get a notification when one is added.',
      'Group invite links: share a link to a group; the person sees the group and chooses to join, so a link never adds anyone by itself.',
      'Savings goals are kept in one place, with a notification when you reach a goal.',
      'Better CSV export: exact amounts, the currency and your tags in every row, and the export now covers everything that matches your filters, not only the newest rows. Group splits export as a proper CSV file too.',
      'New notifications: a weekly summary on Sunday mornings, a monthly summary on the 1st, and a reminder when you have money to settle up.',
      'Receipt scanning: add a receipt photo to an expense and tap Scan receipt to fill in the amount, date and shop. You check the details and add the expense yourself; nothing is saved automatically.',
      'Bank message import: paste a message from your bank on the Profile screen to fill in an expense or income. The message is read on your phone and you confirm it before anything is saved.',
    ],
  },
  {
    version: '1.5.1',
    status: 'Released',
    notes: [
      'Group settle-up now shows every suggested payment.',
      'Adds the update channel so future fixes can reach the app without a full store update.',
    ],
  },
  {
    version: '1.5.0',
    status: 'Released',
    notes: [
      'Dark mode, with a System, Light or Dark setting on the Profile screen.',
      'Tags on transactions, with search and filters.',
      'Rebuilt Statistics: spending trend, category donut, top merchants and a heatmap.',
      'Faster starts: the app remembers your last data, also offline.',
      'New icons and a refreshed look throughout; native date picker.',
      'Smoother long lists and clearer loading, empty and error states.',
    ],
  },
  {
    version: '1.4.0',
    status: 'Released',
    notes: [
      'Receipt photos from the gallery and the camera.',
      'Settle-up and its reversal are recorded safely on the server.',
      'Amounts are handled in whole minor units, so splits add up exactly.',
      'Group invitations and push notifications moved to a more secure path.',
      'Keyboard fixes on Edit Transaction and Edit Profile.',
    ],
  },
];

export default function ChangelogPage() {
  return (
    <>
      <PageHero eyebrow="Changelog" title="Release notes" lead="What changed in each version, newest first." />
      <Container>
        <ol className="space-y-6">
          {RELEASES.map((r) => (
            <li key={r.version} className="rounded-card border border-border bg-surface p-6 shadow-card">
              <div className="flex flex-wrap items-baseline gap-3">
                <h2 className="tabular text-2xl">{r.version}</h2>
                <span className="rounded-full bg-surface-muted px-3 py-1 text-xs font-bold text-primary-text">
                  {r.status}
                </span>
              </div>
              <ul className="mt-4 space-y-2 text-text-secondary">
                {r.notes.map((n) => (
                  <li key={n} className="flex gap-3">
                    <span aria-hidden className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-primary" />
                    {n}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </Container>
    </>
  );
}
