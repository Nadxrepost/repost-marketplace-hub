import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';

const Ressources = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Ressources | Repost"
        description="Guides, conseils et ressources pour optimiser la revente de vos articles de 2nde main sur Repost."
      />
      <Header />
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-dark mb-6">
            Ressources
          </h1>
          <p className="text-lg text-gray-600">
            Retrouvez bientôt ici nos guides, conseils et ressources pour tirer le
            meilleur parti de Repost.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Ressources;