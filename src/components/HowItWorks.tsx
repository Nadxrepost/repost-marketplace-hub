
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
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Comment ça marche ?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            En 4 étapes simples, transformez votre façon de vendre en ligne
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 text-center shadow-sm border border-gray-100 relative"
            >
              {/* Step Number */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="w-8 h-8 bg-brand-purple rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {step.number}
                </div>
              </div>

              {/* Icon */}
              <div className="mb-6 mt-4">
                <div className="w-16 h-16 bg-yellow-50 rounded-2xl flex items-center justify-center mx-auto">
                  <step.icon className="w-8 h-8 text-brand-purple" />
                </div>
              </div>

              {/* Content */}
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action Section */}
        <div className="text-center">
          <h3 className="text-4xl font-bold text-gray-800 mb-4">
            Prêt à multiplier vos ventes ?
          </h3>
          <p className="text-xl text-gray-600 mb-10 max-w-4xl mx-auto">
            Rejoignez des milliers de vendeurs qui utilisent déjà Repost pour maximiser leur présence en ligne.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button className="bg-brand-purple hover:bg-brand-purple/90 text-white px-8 py-4 rounded-xl font-semibold text-lg">
              Essai gratuit 14 jours
            </Button>
            <Button variant="outline" className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-4 rounded-xl font-semibold text-lg">
              Planifier une démo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
