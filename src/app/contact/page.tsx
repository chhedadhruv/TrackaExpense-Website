import { Mail } from 'lucide-react';
import { ContactForm } from '@/components/ContactForm';
import { Container, PageHero } from '@/components/ui';
import { pageMeta } from '@/lib/metadata';
import { SITE } from '@/lib/site';

export const metadata = pageMeta(
  'Contact',
  'Get in touch about TrackaExpense: questions, bug reports, ideas or data requests.',
  '/contact',
);

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Say hello"
        lead="Questions, bug reports, ideas or a data request. Every message is read."
      />
      <Container className="grid gap-10 lg:grid-cols-[1fr_1.3fr]">
        <div>
          <a
            href={`mailto:${SITE.email}`}
            className="flex items-center gap-3 rounded-card border border-border bg-surface p-5 shadow-card"
          >
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-surface-muted text-primary-text">
              <Mail size={22} />
            </span>
            <span>
              <span className="block text-sm text-text-secondary">Email</span>
              <span className="font-bold">{SITE.email}</span>
            </span>
          </a>
          <p className="mt-6 text-sm text-text-secondary">
            For account deletion see the delete account page. For bugs, please mention your phone model
            and app version (Profile screen).
          </p>
        </div>
        <div className="rounded-card border border-border bg-surface p-6 shadow-card sm:p-8">
          <ContactForm />
        </div>
      </Container>
    </>
  );
}
