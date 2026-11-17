import Link from 'next/link';
import { Container } from '@/components/ui';

export default function NotFound() {
  return (
    <Container className="py-32 text-center">
      <p className="tabular font-heading text-7xl font-semibold italic text-primary-text">404</p>
      <h1 className="mt-4 text-3xl">That page is not here</h1>
      <p className="mt-3 text-text-secondary">It may have moved, or the link may be mistyped.</p>
      <Link
        href="/"
        className="mt-8 inline-block rounded-full bg-primary px-6 py-3 font-bold text-on-primary hover:opacity-90"
      >
        Back to home
      </Link>
    </Container>
  );
}
