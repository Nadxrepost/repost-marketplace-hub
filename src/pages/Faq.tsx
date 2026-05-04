import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FAQ from '@/components/FAQ';
import SEO from '@/components/SEO';

const FaqPage = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="FAQ | Repost"
        description="Toutes les réponses à vos questions sur Repost : plateformes compatibles, fonctionnement, tarifs et intégrations."
      />
      <Header />
      <div className="pt-20">
        <FAQ />
      </div>
      <Footer />
    </div>
  );
};

export default FaqPage;