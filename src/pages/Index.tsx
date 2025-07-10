
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

const Index = () => {
  return (
    <div className="min-h-screen">
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
