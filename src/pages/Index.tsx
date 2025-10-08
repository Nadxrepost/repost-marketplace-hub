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
    "description": "Solution SaaS pour gérer vos ventes sur les plateformes de seconde main. Centralisez vos stocks, automatisez vos publications et mesurez vos performances.",
    "operatingSystem": "Web"
  };

  return (
    <div className="min-h-screen">
      <SEO 
        title="Repost - Solution SaaS pour Vendre en Seconde Main"
        description="Gérez toutes vos ventes seconde main depuis une seule plateforme. Synchronisation automatique avec Vinted, Leboncoin, et plus encore. Essai gratuit."
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
