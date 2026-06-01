import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';

const LivreBlanc = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Livre blanc | Repost"
        description="Téléchargez nos livres blancs sur la revente d'articles de 2nde main et les tendances du marché."
      />
      <Header />
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-dark mb-6">
            Livre blanc
          </h1>
          <p className="text-lg text-gray-600">
            Retrouvez bientôt ici nos livres blancs et analyses approfondies.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LivreBlanc;
