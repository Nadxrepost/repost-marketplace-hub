import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import HowItWorks from '@/components/HowItWorks';
import Platforms from '@/components/Platforms';
import BusinessSection from '@/components/BusinessSection';
import InventorySection from '@/components/InventorySection';
import SyncSection from '@/components/SyncSection';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';

const Index = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Repost",
    "applicationCategory": "BusinessApplication",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "EUR"
    },
    "description": "Centralisez et pilotez la vente de vos produits de seconde main sur plusieurs plateformes. Repost aide les e-commerçants, retailers et marques, à gagner du temps, réduire les erreurs et structurer leur activité.",
    "operatingSystem": "Web"
  };

  return (
    <div className="min-h-screen">
      <SEO 
        title="Repost | Vendez la seconde main sur plusieurs plateformes, sans complexité"
        description="Centralisez et pilotez la vente de vos produits de seconde main sur plusieurs plateformes. Repost aide les e-commerçants, retailers et marques, à gagner du temps, réduire les erreurs et structurer leur activité."
        structuredData={structuredData}
      />
      <Header />
      <Hero />
      <Platforms />
      <Features />
      <BusinessSection />
      <InventorySection />
      <SyncSection />
      <HowItWorks />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
