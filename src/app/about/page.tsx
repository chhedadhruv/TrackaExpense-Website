import Link from 'next/link';
import { Container, PageHero, Prose } from '@/components/ui';
import { StoreButtons } from '@/components/StoreButtons';
import { pageMeta } from '@/lib/metadata';
import { SOCIAL } from '@/lib/site';

export const metadata = pageMeta(
  'About',
  'TrackaExpense is built and maintained by Dhruv Chheda, an independent developer.',
  '/about',
);

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="A small app, made carefully"
        lead="TrackaExpense is built and maintained by one person, for people who want a clear view of their money."
      />
      <Container className="max-w-3xl space-y-10">
        <Prose>
          <h2>Why it exists</h2>
          <p>
            Most expense apps either do too little or bury you in features. TrackaExpense aims for the
            useful middle: quick to log, honest about where money went, and fair when money is shared
            with friends.
          </p>
          <h2>How it is built</h2>
          <ul>
            <li>Amounts are stored in whole minor units, so splits and balances add up exactly.</li>
            <li>Settlements and invitations are handled on the server so both sides stay consistent.</li>
            <li>The app asks only for the permissions it needs.</li>
          </ul>
          <h2>The person behind it</h2>
          <p>
            I am Dhruv Chheda, an independent developer. I read every message sent through the{' '}
            <Link href="/contact">contact page</Link>. You can also find me on{' '}
            <a href={SOCIAL.github}>GitHub</a>, <a href={SOCIAL.linkedin}>LinkedIn</a> and{' '}
            <a href={SOCIAL.x}>X</a>.
          </p>
        </Prose>
        <StoreButtons />
      </Container>
    </>
  );
}
