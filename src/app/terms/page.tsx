import { Accordion } from '@/components/Accordion';
import { PolicyBody } from '@/components/PolicyBody';
import { Container, PageHero } from '@/components/ui';
import { pageMeta } from '@/lib/metadata';
import { TERMS_LAST_UPDATED, TERMS_SECTIONS } from '@/lib/terms';

export const metadata = pageMeta(
  'Terms of use',
  'The terms for using the TrackaExpense app and website.',
  '/terms',
);

export default function TermsPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Terms of use" lead={`Last updated ${TERMS_LAST_UPDATED}.`} />
      <Container className="max-w-3xl">
        <Accordion items={TERMS_SECTIONS.map((s) => ({ q: s.title, a: <PolicyBody body={s.body} /> }))} />
      </Container>
    </>
  );
}
