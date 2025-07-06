
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import HowItWorks from '@/components/HowItWorks';
import Platforms from '@/components/Platforms';
import BusinessSection from '@/components/BusinessSection';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <HowItWorks />
      <Platforms />
      <BusinessSection />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
