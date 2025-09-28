const BusinessSection = () => {
  return <section className="py-20 bg-gradient-to-br from-purple-100/50 to-blue-100/50">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-4xl font-bold text-brand-dark mb-6 leading-tight">Multipliez vos ventes, maîtrisez vos stocks et gagnez du temps avec la solution tout-en-un dédiée aux professionnels de la 2<sup>nde</sup> main.</h2>
            <p className="text-lg text-gray-600 leading-relaxed">Publiez une fois, vendez partout ! Repost vous aide à atteindre de nouveaux clients. Simplifie la gestion de votre activité et booste vos ventes sur toutes les plateformes, en rendant la gestion de vos stocks, commandes et annonces ultra-facile et rapide.</p>
          </div>

          {/* Dashboard Image */}
          <div className="relative animate-fade-in">
            <div className="bg-white rounded-2xl shadow-2xl p-4 transform hover:scale-105 transition-all duration-500 hover:shadow-3xl">
              <img src="/lovable-uploads/d17c062a-67ca-498c-a5ef-9039d1f1c7c0.png" alt="Dashboard de gestion multicanal" className="w-full h-auto rounded-lg transition-transform duration-300 hover:scale-102" />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-gradient-to-br from-brand-purple/20 to-brand-purple/10 rounded-full blur-xl"></div>
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-to-br from-blue-400/20 to-blue-300/10 rounded-full blur-lg"></div>
          </div>
        </div>
      </div>
    </section>;
};
export default BusinessSection;