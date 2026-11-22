import { PhoneFrame } from '@/components/PhoneFrame';
import { StoreButtons } from '@/components/StoreButtons';
import { Container, PageHero } from '@/components/ui';
import { pageMeta } from '@/lib/metadata';

export const metadata = pageMeta(
  'Features',
  'Everything TrackaExpense does today: expense and income tracking, budgets, recurring transactions, statistics, group splits, IOUs, savings goals, tags and receipt scanning.',
  '/features',
);

const GROUPS = [
  {
    title: 'Track every rupee, dollar or euro',
    image: '/screens/phone-2.jpg',
    alt: 'Add expense screen with a receipt photo',
    points: [
      'Add, edit and delete expenses and income',
      'Category suggestions as you type, learned from your own past titles',
      'Title autocomplete from your past entries, which also offers the category you used last time',
      'Your own categories for expenses, income and savings goals, with an icon; hide, reorder and rename them',
      'Receipt photos from the camera or gallery, viewable full screen',
      'Tags, with search and filters by period, text or tag',
      'Scan a receipt to fill in the amount, date and shop, then check it before saving; works with currencies that have no decimals, such as yen and won',
      'Paste a bank message to fill in an expense or income, confirmed by you before anything is saved',
      'Credit cards: pick Paid with, see what a card owes each billing period, and mark the bill paid without counting it as spending twice',
      'Card bill due-date reminders, and cards in recurring expenses, splits and settle-up',
      'Fix my balance after a long gap with one adjustment that keeps your income and expense totals true',
      'Budgets with alerts at 50, 80, 100 and 120 percent',
      'Recurring transactions for rent, subscriptions and salary',
      'Export your transactions as a CSV file with exact amounts, currency, tags and payment method',
      'Over 20 currencies; INR is the default',
    ],
  },
  {
    title: 'Statistics that explain themselves',
    image: '/screens/phone-3.jpg',
    alt: 'Statistics with trend chart and category breakdown',
    points: [
      'Spending trend over time',
      'Category donut with an Others slice',
      'Top merchants',
      'Calendar heatmap of busy days',
      'Last 7 days, 30 days, all time or a custom range',
      'Every chart adds up to the same total',
    ],
  },
  {
    title: 'Shared expenses without the maths',
    image: '/screens/phone-5.jpg',
    alt: 'Group split and settle-up',
    points: [
      'Groups with email invitations or a shareable invite link',
      'Even or percentage splits that always sum to the total',
      'Suggested settle-up payments, recorded for both people',
      'Split history and a friends and balances overview',
      'IOUs for one-off loans',
      'Push notifications for group activity, a weekly and monthly summary, and settle-up reminders, timed to your own time zone',
      'Switch the evening reminder and the card bill reminders on or off from Profile',
      'Group splits export as a CSV file',
      'Invite links open straight in the app on Android',
    ],
  },
  {
    title: 'Savings goals that stay in view',
    image: '/screens/phone-4.jpg',
    alt: 'Savings goals with progress bars',
    points: [
      'Multiple goals with a target and a monthly amount',
      'Deposit and withdraw, with a full history',
      'Months-left estimate at your current pace',
      'Optional reminders',
      'A notification when you reach a goal',
    ],
  },
];

export default function FeaturesPage() {
  return (
    <>
      <PageHero
        eyebrow="Features"
        title="What TrackaExpense does today"
        lead="Only things that are in the app now. What is still being built lives on the roadmap."
      />
      <Container className="space-y-24 pb-8">
        {GROUPS.map((g, i) => (
          <section key={g.title} className="grid items-center gap-10 md:grid-cols-2">
            <div className={i % 2 ? 'md:order-2' : ''}>
              <h2 className="text-3xl">{g.title}</h2>
              <ul className="mt-6 space-y-3">
                {g.points.map((p) => (
                  <li key={p} className="flex gap-3 text-text-secondary">
                    <span aria-hidden className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-primary" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
            <div className={i % 2 ? 'md:order-1' : ''}>
              <PhoneFrame src={g.image} alt={g.alt} />
            </div>
          </section>
        ))}

        <section className="rounded-card border border-border bg-surface p-8 shadow-card">
          <h2 className="text-3xl">Coming soon</h2>
          <p className="mt-3 text-text-secondary">Built and being tested, not in the store release yet.</p>
          <ul className="mt-5 space-y-3 text-text-secondary">
            <li>Continue without an account: keep expenses, income, budgets, cards and goals only on your phone, with nothing sent to a server</li>
            <li>Add, edit and delete transactions offline, synced when you reconnect</li>
            <li>Read bank messages from your inbox on Android, only with your permission and only on your phone</li>
            <li>A Usage analytics switch in Profile</li>
          </ul>
        </section>

        <section className="rounded-card border border-border bg-surface p-8 shadow-card">
          <h2 className="text-3xl">And the basics, done properly</h2>
          <ul className="mt-5 grid gap-3 text-text-secondary sm:grid-cols-2">
            <li>Sign in with email or Google</li>
            <li>Light, dark or follow-the-phone theme</li>
            <li>Works with your last data when you are offline</li>
            <li>Account and data deletion from inside the app</li>
          </ul>
          <div className="mt-8">
            <StoreButtons />
          </div>
        </section>
      </Container>
    </>
  );
}
