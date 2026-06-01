import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';

const CahiersDeTendances = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Cahiers de tendances | Repost"
        description="Découvrez nos cahiers de tendances sur la mode de 2nde main et le marché de la revente."
      />
      <Header />
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-dark mb-6">
            Cahiers de tendances
          </h1>
          <p className="text-lg text-gray-600">
            Retrouvez bientôt ici nos cahiers de tendances.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CahiersDeTendances;
