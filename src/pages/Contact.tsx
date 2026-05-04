import { useEffect } from 'react';
import Header from '@/components/Header';

const Contact = () => {
  useEffect(() => {
    // Charger le script Tally
    const script = document.createElement('script');
    script.src = 'https://tally.so/widgets/embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return <div className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto px-6 py-20 pt-24">
        <div className="max-w-7xl mx-auto">
          {/* Titre et sous-titre */}
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">Une question ?</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Que vous souhaitiez en savoir plus sur nos solutions, discuter d'un partenariat ou poser une question, notre équipe est à votre disposition.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {/* Formulaire Tally */}
            <div className="bg-card rounded-3xl shadow-2xl overflow-hidden border border-border">
              <iframe 
                data-tally-src="https://tally.so/r/w4eGEA?transparentBackground=1" 
                width="100%" 
                height="800" 
                frameBorder="0" 
                marginHeight={0} 
                marginWidth={0} 
                title="Une question ?"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default Contact;