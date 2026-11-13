import { Accordion } from '@/components/Accordion';
import { PolicyBody } from '@/components/PolicyBody';
import { Container, PageHero } from '@/components/ui';
import { pageMeta } from '@/lib/metadata';
import { PRIVACY_LAST_UPDATED, PRIVACY_SECTIONS } from '@/lib/privacy';

export const metadata = pageMeta(
  'Privacy policy',
  'How TrackaExpense collects, uses, stores and protects your data, and the choices you have.',
  '/privacy',
);

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy policy"
        lead={`Last updated ${PRIVACY_LAST_UPDATED}. In short: we collect what the app needs to work, we never sell your data, and you can delete your account from inside the app.`}
      />
      <Container className="max-w-3xl">
        <Accordion
          items={PRIVACY_SECTIONS.map((s) => ({ q: s.title, a: <PolicyBody body={s.body} /> }))}
        />
      </Container>
    </>
  );
}
