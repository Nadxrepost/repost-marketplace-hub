
import { Upload, Target, Zap, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const steps = [
  {
    number: 1,
    icon: Upload,
    title: "Téléchargez votre produit",
    description: "Ajoutez vos photos, description et prix en quelques clics"
  },
  {
    number: 2,
    icon: Target,
    title: "Sélectionnez vos marchés",
    description: "Choisissez sur quelles plateformes publier automatiquement"
  },
  {
    number: 3,
    icon: Zap,
    title: "Publication instantanée",
    description: "Repost diffuse votre annonce sur tous les marchés sélectionnés"
  },
  {
    number: 4,
    icon: TrendingUp,
    title: "Maximisez vos ventes",
    description: "Atteignez plus d'acheteurs et vendez plus rapidement"
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
            Comment ça marche ?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            En 4 étapes simples, transformez votre façon de vendre en ligne
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg text-center relative animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Step Number */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="w-8 h-8 bg-brand-purple rounded-full flex items-center justify-center text-white font-bold">
                  {step.number}
                </div>
              </div>

              {/* Icon */}
              <div className="mb-6 mt-4">
                <div className="w-16 h-16 bg-brand-yellow/20 rounded-full flex items-center justify-center mx-auto">
                  <step.icon className="w-8 h-8 text-brand-purple" />
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-brand-dark mb-4">
                {step.title}
              </h3>
              <p className="text-gray-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4">
            Prêt à multiplier vos ventes ?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Rejoignez des milliers de vendeurs qui utilisent déjà Repost pour maximiser leur présence en ligne.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-brand-purple hover:bg-brand-purple/90 text-white px-8 py-3 text-lg">
              Essai gratuit 14 jours
            </Button>
            <Button variant="outline" className="border-brand-purple text-brand-purple hover:bg-brand-purple/10 px-8 py-3 text-lg">
              Planifier une démo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
