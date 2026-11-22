import { Container, PageHero } from '@/components/ui';
import { pageMeta } from '@/lib/metadata';

export const metadata = pageMeta(
  'Changelog',
  'Release notes for TrackaExpense, newest first.',
  '/changelog',
);

const RELEASES = [
  {
    version: 'In development',
    status: 'Not released yet',
    notes: [
      'Use without an account: choose Continue without an account and your expenses, income, budgets, cards and savings goals stay on your phone. Nothing is sent to a server, and analytics, error reports and notifications stay off. Splits need an account. You can sign in later, or erase everything on the phone from Profile.',
      'Offline saves: add, edit and delete a transaction without a connection; it is saved on the phone and syncs when you are back online. A banner shows when you are offline.',
      'Bank messages from your inbox (Android): after you accept an explanation and allow the permission, the app finds bank payments in your messages and offers to fill in an expense or income. Messages are read on the phone and go nowhere, and nothing is saved until you confirm it. This depends on Google Play approving SMS access.',
      'A Usage analytics switch under Privacy on the Profile screen, so you can turn usage statistics off.',
    ],
  },
  {
    version: '1.6.0',
    status: 'Released',
    notes: [
      'Custom categories: add your own expense and income categories with an icon, hide built-in ones and reorder each list, from Profile or from inside the category picker. Renaming a category moves your past entries, recurring rules and budgets with it.',
      'Custom categories for savings goals, in a Goals tab next to the others.',
      'Smarter category suggestions: the app matches whole words and learns from your own past titles, with a Suggested row and search in the picker.',
      'Title autocomplete: past titles that match what you type appear as chips; pick one to fill the title and the category you used last time. Works on expenses, income, recurring transactions and splits.',
      'Group invite links now open straight in the app on Android.',
      'A themed icon for Android 13 and newer.',
      'Fix: the settle-up reminder now uses each person\'s overall balance across groups.',
    ],
  },
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
      'Credit cards: add a card with its statement and due days, choose Paid with when you add an expense, and see what each card owes for the billing period. A card purchase leaves your balance alone until you mark the bill paid, and the payment is not counted as spending again.',
      'Cards work across the app: recurring expenses, group splits and settle-up, a Paid with filter on Transactions, a Payment Method column in the CSV export and a By payment method view in Statistics. A bank message for a card payment picks the matching card.',
      'Card bill reminders: a notification three days before and on the day a bill is due, and a list of bills to pay on Home.',
      'Fix my balance: after a long gap, say what your balance really is and one Balance adjustment is added for the difference, without changing your income and expense totals. Home asks when splits have changed your balance for a while.',
      'Notification settings: under Notifications on the Profile screen you can switch the evening reminder, a short nudge to log your spending, and the card bill reminders on or off.',
      'Notifications at your local time: the app now keeps your phone\'s time zone on your profile, so the weekly and monthly summaries and the reminders arrive at the right hour wherever you are.',
      'Receipt scanning for currencies without decimals: Scan receipt now reads whole-number amounts when your currency is Japanese yen or Korean won.',
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
