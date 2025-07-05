
import { useState } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import HowItWorks from '@/components/HowItWorks';
import Platforms from '@/components/Platforms';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';

const Index = () => {
  const [showContactForm, setShowContactForm] = useState(false);

  const handleContactClick = () => {
    setShowContactForm(true);
    // Scroll to contact section
    setTimeout(() => {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="min-h-screen">
      <Header onContactClick={handleContactClick} />
      <Hero />
      <Features />
      <HowItWorks />
      <Platforms />
      <Testimonials />
      <Footer showContactForm={showContactForm} />
    </div>
  );
};

export default Index;
