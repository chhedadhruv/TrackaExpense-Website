import { Mail } from 'lucide-react';
import { Container, PageHero } from '@/components/ui';
import { pageMeta } from '@/lib/metadata';
import { SITE } from '@/lib/site';

export const metadata = pageMeta(
  'Delete your account',
  'How to permanently delete your TrackaExpense account and data, in the app or by email.',
  '/delete-account',
);

const STEPS = [
  { t: 'Open TrackaExpense', d: 'Launch the app on your phone and sign in.' },
  { t: 'Go to Profile, then Account Actions, then Delete Account', d: 'You will find it in the Profile tab.' },
  { t: 'Confirm', d: 'Confirm that you want to permanently delete your account.' },
];

const EFFECTS = [
  'All your income and expense records',
  'Receipts and other files you uploaded',
  'Your group memberships and the shared expenses you created',
  'Your email address and profile from our systems',
];

export default function DeleteAccountPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Delete your account"
        lead="You can permanently delete your TrackaExpense account and its data yourself, in the app, or ask us to do it."
      />
      <Container className="max-w-3xl space-y-12 pb-8">
        <section>
          <h2 className="text-2xl">In the app</h2>
          <ol className="mt-5 space-y-3">
            {STEPS.map((s, i) => (
              <li key={s.t} className="flex gap-4 rounded-card border border-border bg-surface p-5">
                <span className="tabular font-heading text-3xl font-semibold italic text-primary-text">
                  {i + 1}
                </span>
                <div>
                  <p className="font-bold">{s.t}</p>
                  <p className="mt-1 text-text-secondary">{s.d}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section>
          <h2 className="text-2xl">Cannot open the app?</h2>
          <p className="mt-3 text-text-secondary">
            Email us from the address on your account with the subject &ldquo;Delete my account&rdquo;. We
            will confirm and delete the account. We typically respond within 24 hours on business days.
          </p>
          <a
            href={`mailto:${SITE.email}?subject=Delete%20my%20account`}
            className="mt-4 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 font-bold text-on-primary hover:opacity-90"
          >
            <Mail size={18} /> {SITE.email}
          </a>
        </section>

        <section>
          <h2 className="text-2xl">What is deleted</h2>
          <ul className="mt-4 space-y-2 text-text-secondary">
            {EFFECTS.map((e) => (
              <li key={e} className="flex gap-3">
                <span aria-hidden className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-primary" />
                {e}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-card border border-border bg-surface-muted p-6">
          <h2 className="text-xl">Good to know</h2>
          <ul className="mt-3 space-y-2 text-text-secondary">
            <li>Deletion is permanent and cannot be undone.</li>
            <li>Backups are deleted within 30 days and cannot be recovered after that.</li>
          </ul>
        </section>
      </Container>
    </>
  );
}
