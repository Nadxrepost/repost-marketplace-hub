import { Package, Zap, BarChart3, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
const Features = () => {
  const features = [{
    icon: Package,
    title: "Centraliser",
    description: "Gérez tous vos stocks depuis une interface unique. Importez, organisez et synchronisez vos articles en quelques clics.",
    color: "bg-gray-600"
  }, {
    icon: Zap,
    title: "Gérer",
    description: "Automatisez vos tâches répétitives. Mise à jour des prix, gestion des stocks et suivi des commandes en temps réel.",
    color: "bg-gray-500"
  }, {
    icon: Globe,
    title: "Diffuser",
    description: "Publiez simultanément sur Vinted, Depop, eBay, Etsy et bien d'autres plateformes.",
    color: "bg-gray-600"
  }, {
    icon: BarChart3,
    title: "Mesurer",
    description: "Analysez vos performances avec des rapports détaillés. Optimisez vos ventes grâce à des insights précis.",
    color: "bg-gray-500"
  }];
  return <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-brand-dark mb-4">
            Une solution <span className="gradient-text">complète</span> pour votre business
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Votre activité 2<sup>nde</sup> main, pilotée simplement avec Repost.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => <div key={index} className="group p-8 rounded-2xl bg-white border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-2 hover:border-brand-purple">
              <div className={`w-16 h-16 ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-brand-dark mb-4">
                {feature.title}
              </h3>
              
              {index === 0 && (
                <div className="text-sm font-bold text-brand-dark mb-3 italic">
                  +30% de temps gagné sur la gestion des stocks.
                </div>
              )}
              
              {index === 1 && (
                <div className="text-sm font-bold text-brand-dark mb-3 italic">
                  Stock et prix toujours à jour, sans effort.
                </div>
              )}
              
              {index === 2 && (
                <div className="text-sm font-bold text-brand-dark mb-3 italic">
                  Vendez sur 7 plateformes en 1 clic.
                </div>
              )}
              
              {index === 3 && (
                <div className="text-sm font-bold text-brand-dark mb-3 italic">
                  Identifiez vos best-sellers en un clin d'œil.
                </div>
              )}
              
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>)}
        </div>

        
        {/* CTA Button */}
        <div className="mt-16 text-center">
          <Button 
            size="lg" 
            className="bg-brand-purple hover:bg-brand-purple/90 text-white px-8 py-4 text-lg font-semibold"
            onClick={() => window.open('https://airtable.com/appMT60uGxIwVBPMZ/pagZPAJ5iNbpaQfLp/form', '_blank')}
          >
            Démarrer maintenant avec Repost
          </Button>
        </div>
      </div>
    </section>;
};
export default Features;