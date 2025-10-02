import { Check, X } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import repostappInterface from '@/assets/pricing-main.png';
const Pricing = () => {
  const features = ["Configuration rapide et facile, gérée par notre équipe", "Mapping de données personnalisé adapté à vos besoins", "Intégration personnalisée avec notre équipe support", "Gestionnaire de compte dédié pour un accompagnement continu", "Assistance à la configuration des comptes marketplace"];
  return <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-24 md:py-32">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 md:mb-16">
            Plans d'abonnement mensuels
          </h1>

          {/* Pricing Card */}
          <div className="bg-background border-2 border-primary/30 rounded-3xl p-8 md:p-12 mb-16 transition-all duration-300 hover:border-primary/60 hover:shadow-xl hover:shadow-primary/10">
            <div className="text-center max-w-xl mx-auto">
              <p className="text-lg mb-4 text-muted-foreground">À partir de</p>
              <div className="mb-2">
                <span className="text-5xl md:text-6xl font-bold">39€</span>
                <span className="text-2xl text-muted-foreground">/mois</span>
              </div>
              
              <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-xl mx-auto">Nos tarifs sont adaptés à tous les profils d'entreprises. 
Notre tarification est basée sur le volume de produit à mettre en stock.</p>
              <Button size="lg" onClick={() => window.open('https://airtable.com/appMT60uGxIwVBPMZ/pagZPAJ5iNbpaQfLp/form', '_blank', 'noopener,noreferrer')} className="px-12">
                COMMENCER AVEC REPOST
              </Button>
            </div>
          </div>

          {/* Features Section */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <img src={repostappInterface} alt="Interface RepostApp - Sélection des canaux de publication" className="w-full h-auto object-contain" loading="lazy" />
                </div>
              </div>
            </div>
            
            <div className="order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                Tous les plans incluent
              </h2>
              <div className="space-y-4">
                {features.map((feature, index) => <div key={index} className="flex items-start gap-3">
                    <div className="rounded-full bg-primary/10 p-1 mt-1">
                      <Check className="w-5 h-5 text-primary" />
                    </div>
                    <p className="text-base md:text-lg text-foreground/80">
                      {feature}
                    </p>
                  </div>)}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>;
};
export default Pricing;