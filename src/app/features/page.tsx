import { PhoneFrame } from '@/components/PhoneFrame';
import { StoreButtons } from '@/components/StoreButtons';
import { Container, PageHero } from '@/components/ui';
import { pageMeta } from '@/lib/metadata';

export const metadata = pageMeta(
  'Features',
  'Everything TrackaExpense does today: expense and income tracking, statistics, group splits, IOUs, savings goals, tags and receipts.',
  '/features',
);

const GROUPS = [
  {
    title: 'Track every rupee, dollar or euro',
    image: '/screens/phone-2.jpg',
    alt: 'Add expense screen with a receipt photo',
    points: [
      'Add, edit and delete expenses and income',
      'Category suggestions as you type',
      'Receipt photos from the camera or gallery, viewable full screen',
      'Tags, with search and filters by period, text or tag',
      'Export your transactions as a CSV file',
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
      'Groups with email invitations',
      'Even or percentage splits that always sum to the total',
      'Suggested settle-up payments, recorded for both people',
      'Split history and a friends and balances overview',
      'IOUs for one-off loans',
      'Push notifications for group activity',
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
