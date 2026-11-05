import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Platforms from '@/components/Platforms';
import BusinessSection from '@/components/BusinessSection';
import InventorySection from '@/components/InventorySection';
import SyncSection from '@/components/SyncSection';
import RevenueCalculator from '@/components/RevenueCalculator';
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
    "description": "Repost est une solution qui permet aux revendeurs seconde main de gérer leurs stocks sur les plateformes de revente.",
    "operatingSystem": "Web"
  };

  return (
    <div className="min-h-screen">
      <SEO 
        title="Repost | Vendez la seconde main sur plusieurs plateformes, sans complexité"
        description="Repost est une solution qui permet aux revendeurs seconde main de gérer leurs stocks sur les plateformes de revente."
        structuredData={structuredData}
      />
      <Header />
      <Hero />
      <Platforms />
      <Features />
      <BusinessSection />
      <InventorySection />
      <SyncSection />
      <RevenueCalculator />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
