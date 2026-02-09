import { Button } from '@/components/ui/button';
import { List, Settings, Send, TrendingUp } from 'lucide-react';
const steps = [{
  number: 1,
  title: "Étape 1",
  subtitle: "Connectez vos plateformes",
  description: "Reliez Repost aux plateformes de revente que vous utilisez déjà.",
  icon: List
}, {
  number: 2,
  title: "Étape 2",
  subtitle: "Centralisez et diffusez vos annonces",
  description: "Gérez vos annonces depuis une seule interface et diffusez-les sur plusieurs canaux sans duplication.",
  icon: Settings
}, {
  number: 3,
  title: "Étape 3",
  description: "Publiez vos annonces partout en 1 clic !",
  icon: Send
}, {
  number: 4,
  title: "Étape 4",
  description: "Atteignez plus de clients et vendez plus rapidement !",
  icon: TrendingUp
}];
const HowItWorks = () => {
  return <section id="how-it-works" className="py-20 bg-gray-100">
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
          {steps.map((step, index) => {
          const IconComponent = step.icon;
          return <div key={index} className="bg-white rounded-xl p-6 text-center relative transition-all duration-300 hover:shadow-xl hover:-translate-y-2 cursor-pointer group hover:bg-gray-50 hover:border-2 hover:border-gray-400">
                {/* Step Icon - Large and centered */}
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gray-600 rounded-xl flex items-center justify-center mx-auto group-hover:bg-gray-700 group-hover:scale-110 transition-all duration-300">
                    <IconComponent className="text-white w-8 h-8" />
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-gray-700 transition-colors duration-300">
                    {step.title}
                  </h3>
                  {step.subtitle && (
                    <h4 className="text-base font-semibold text-gray-700 mb-2">
                      {step.subtitle}
                    </h4>
                  )}
                  <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {step.description}
                  </p>
                </div>

                {/* Arrow connector (except for last item) */}
                {index < steps.length - 1 && <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                    <div className="w-6 h-0.5 bg-gradient-to-r from-brand-purple to-brand-yellow"></div>
                    <div className="w-0 h-0 border-l-4 border-l-brand-yellow border-t-2 border-t-transparent border-b-2 border-b-transparent absolute right-0 top-1/2 transform -translate-y-1/2"></div>
                  </div>}
              </div>;
        })}
        </div>

        {/* Call to Action Section - Encadrée */}
        <div className="bg-white rounded-2xl shadow-lg p-12 max-w-4xl mx-auto transition-all duration-300 hover:border-2 hover:border-brand-purple">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">Prêt à vendre partout avec Repost ?</h3>
            <p className="text-lg text-gray-600 mb-8 max-w-4xl mx-auto">Déjà adopté par de centaines de professionnels de la seconde main.</p>
            <div className="flex justify-center items-center">
            <Button onClick={() => {
              window.open('https://tally.so/r/mV2xGM', '_blank', 'noopener,noreferrer');
            }} size="lg" className="bg-brand-purple hover:bg-brand-purple/90 text-black px-12 py-6 rounded-full text-xl font-semibold">
                Oui, je veux vendre avec Repost !
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HowItWorks;