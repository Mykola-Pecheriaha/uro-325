import Portfolio from '@/components/Portfolio/Portfolio';
import GalleryPortfolio from '@/components/GalleryPortfolio/GalleryPortfolio';

export default function PortfolioPage() {
  return (
    <main>
      <Portfolio backgroundColor="#F8FAFC" />
      <div className="container mx-auto px-4 py-4">
        <h2 className="text-2xl font-bold text-center mb-6"></h2>
      </div>
      <GalleryPortfolio backgroundColor="#439AF1FF" />
    </main>
  );
}
