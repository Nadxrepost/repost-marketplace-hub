import { Package, Zap, BarChart3, Globe } from 'lucide-react';
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
    description: "Publiez simultanément sur Vinted, Leboncoin, Vestiaire Collective, Depop, eBay, Etsy et bien d'autres plateformes.",
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
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Repost simplifie la gestion de votre activité de seconde main avec quatre piliers essentiels :</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => <div key={index} className="group p-8 rounded-2xl bg-white border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-2 hover:border-brand-purple">
              <div className={`w-16 h-16 ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-brand-dark mb-4">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>)}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid md:grid-cols-3 gap-8 text-center">
          <div className="p-6">
            <div className="text-4xl font-bold gradient-text mb-2">10+</div>
            <div className="text-gray-600">Plateformes connectées</div>
          </div>
          <div className="p-6">
            <div className="text-4xl font-bold gradient-text mb-2">500%</div>
            <div className="text-gray-600">Gain de productivité</div>
          </div>
          <div className="p-6">
            <div className="text-4xl font-bold gradient-text mb-2">24/7</div>
            <div className="text-gray-600">Synchronisation automatique</div>
          </div>
        </div>
      </div>
    </section>;
};
export default Features;