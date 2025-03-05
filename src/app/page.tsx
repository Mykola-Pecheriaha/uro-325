import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Uro-325 | Головна',
  description: 'Професійні послуги з урології.',
};

export default function Home() {
  return (
    <main>
      <h1>Ласкаво просимо до Uro-325</h1>
      <p>Професійні послуги уролога.</p>
    </main>
  );
}
