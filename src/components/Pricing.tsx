
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "29",
      period: "/mois",
      description: "Parfait pour débuter",
      features: [
        "Jusqu'à 100 articles",
        "3 plateformes connectées",
        "Support par email",
        "Tableau de bord basique",
        "Synchronisation manuelle"
      ],
      popular: false,
      cta: "Commencer l'essai"
    },
    {
      name: "Professional",
      price: "79",
      period: "/mois",
      description: "Pour les professionnels actifs",
      features: [
        "Jusqu'à 1000 articles",
        "Toutes les plateformes",
        "Support prioritaire",
        "Analytics avancés",
        "Synchronisation automatique",
        "API personnalisée",
        "Formation incluse"
      ],
      popular: true,
      cta: "Essayer gratuitement"
    },
    {
      name: "Enterprise",
      price: "Sur mesure",
      period: "",
      description: "Solutions personnalisées",
      features: [
        "Articles illimités",
        "Intégrations sur mesure",
        "Support dédié 24/7",
        "Formation personnalisée",
        "SLA garanti",
        "Fonctionnalités exclusives",
        "Accompagnement stratégique"
      ],
      popular: false,
      cta: "Nous contacter"
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-brand-dark mb-4">
            Des <span className="gradient-text">tarifs transparents</span> pour tous
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choisissez le plan qui correspond à vos besoins. Tous nos plans incluent un essai gratuit de 14 jours
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative p-8 rounded-3xl border-2 transition-all duration-300 hover:scale-105 ${
                plan.popular 
                  ? 'border-brand-purple bg-gradient-to-br from-brand-purple/5 to-brand-yellow/5 shadow-lg' 
                  : 'border-gray-200 bg-white hover:border-brand-purple/30'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-brand-purple text-white px-4 py-2 rounded-full text-sm font-medium">
                    Le plus populaire
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-brand-dark mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-4">{plan.description}</p>
                
                <div className="mb-6">
                  {plan.price === "Sur mesure" ? (
                    <div className="text-2xl font-bold text-brand-dark">{plan.price}</div>
                  ) : (
                    <div className="flex items-center justify-center">
                      <span className="text-4xl font-bold text-brand-dark">{plan.price}€</span>
                      <span className="text-gray-600 ml-2">{plan.period}</span>
                    </div>
                  )}
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check className="w-5 h-5 text-brand-purple mr-3 flex-shrink-0" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                className={`w-full py-6 text-lg font-semibold ${
                  plan.popular
                    ? 'bg-brand-purple hover:bg-brand-purple/90 text-white'
                    : 'border-2 border-brand-purple text-brand-purple hover:bg-brand-purple hover:text-white'
                }`}
                variant={plan.popular ? 'default' : 'outline'}
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="mt-20 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-center text-brand-dark mb-8">
            Questions fréquentes
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 bg-brand-gray/30 rounded-2xl">
              <h4 className="font-semibold text-brand-dark mb-3">Puis-je changer de plan à tout moment ?</h4>
              <p className="text-gray-600">Oui, vous pouvez upgrader ou downgrader votre plan à tout moment depuis votre tableau de bord.</p>
            </div>
            
            <div className="p-6 bg-brand-gray/30 rounded-2xl">
              <h4 className="font-semibold text-brand-dark mb-3">Y a-t-il des frais cachés ?</h4>
              <p className="text-gray-600">Non, nos tarifs sont transparents. Aucun frais de setup ou commission sur vos ventes.</p>
            </div>
            
            <div className="p-6 bg-brand-gray/30 rounded-2xl">
              <h4 className="font-semibold text-brand-dark mb-3">Que se passe-t-il après l'essai gratuit ?</h4>
              <p className="text-gray-600">Vous pouvez continuer avec un plan payant ou votre compte sera suspendu (vos données restent sauvegardées).</p>
            </div>
            
            <div className="p-6 bg-brand-gray/30 rounded-2xl">
              <h4 className="font-semibold text-brand-dark mb-3">Support technique inclus ?</h4>
              <p className="text-gray-600">Oui, tous nos plans incluent un support technique en français par email et chat.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
