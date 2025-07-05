
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
    <section id="how-it-works" className="py-20 bg-gray-100">
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
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 text-center relative transition-all duration-300 hover:shadow-xl hover:-translate-y-2 cursor-pointer group hover:border-2 hover:border-brand-purple/30"
            >
              {/* Step Number */}
              <div className="absolute -top-3 -left-3 z-10">
                <div className="w-8 h-8 bg-brand-purple rounded-full flex items-center justify-center text-white font-bold text-sm group-hover:scale-110 transition-transform duration-300">
                  {step.number}
                </div>
              </div>

              {/* Icon */}
              <div className="mb-4 relative z-10">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mx-auto group-hover:bg-brand-yellow/20 group-hover:scale-110 transition-all duration-300">
                  <step.icon className="w-6 h-6 text-brand-purple group-hover:text-brand-purple group-hover:scale-110 transition-all duration-300" />
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-lg font-bold text-gray-800 mb-3 group-hover:text-brand-purple transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  {step.description}
                </p>
              </div>

              {/* Arrow connector (except for last item) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                  <div className="w-6 h-0.5 bg-gradient-to-r from-brand-purple to-brand-yellow"></div>
                  <div className="w-0 h-0 border-l-4 border-l-brand-yellow border-t-2 border-t-transparent border-b-2 border-b-transparent absolute right-0 top-1/2 transform -translate-y-1/2"></div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Call to Action Section */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-gray-800 mb-4">
            Prêt à multiplier vos ventes ?
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-4xl mx-auto">
            Rejoignez des milliers de vendeurs qui utilisent déjà Repost pour maximiser leur présence en ligne.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button className="bg-brand-purple hover:bg-brand-purple/90 text-white px-8 py-3 rounded-lg font-semibold">
              Essai gratuit 14 jours
            </Button>
            <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3 rounded-lg font-semibold">
              Planifier une démo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
