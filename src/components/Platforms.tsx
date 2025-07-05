

const Platforms = () => {
  const platforms = [
    { name: "Vinted", logo: "🛍️", color: "bg-vinted-teal" },
    { name: "Leboncoin", logo: "🏷️", color: "bg-orange-500" },
    { name: "Vestiaire Collective", logo: "👗", color: "bg-black" },
    { name: "Depop", logo: "🎨", color: "bg-pink-500" },
    { name: "eBay", logo: "🌟", color: "bg-blue-500" },
    { name: "Etsy", logo: "🎭", color: "bg-orange-600" },
    { name: "Imparfaite", logo: "🌿", color: "bg-green-600" },
    { name: "Shopify", logo: "/lovable-uploads/96b2349f-5375-42fd-9803-817d984f7e7e.png", color: "bg-white", isImage: true, isShopify: true },
    { name: "New Life by Spartoo", logo: "👟", color: "bg-purple-500" }
  ];

  return (
    <section id="platforms" className="py-20 bg-gradient-to-br from-brand-gray/20 to-brand-purple/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-brand-dark mb-4">
            Connecté aux <span className="gradient-text">meilleures plateformes</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Diffusez vos annonces simultanément sur toutes les plateformes de seconde main les plus populaires
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-16">
          {platforms.map((platform, index) => (
            <div 
              key={index}
              className="group p-6 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer"
            >
              <div className="text-center">
                {platform.isShopify ? (
                  <div className="w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <img 
                      src={platform.logo} 
                      alt={`${platform.name} logo`}
                      className="w-12 h-12 object-contain"
                    />
                  </div>
                ) : (
                  <div className={`w-16 h-16 ${platform.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                    {platform.isImage ? (
                      <img 
                        src={platform.logo} 
                        alt={`${platform.name} logo`}
                        className="w-8 h-8 object-contain"
                      />
                    ) : (
                      <span className="text-2xl">{platform.logo}</span>
                    )}
                  </div>
                )}
                <h3 className="font-semibold text-brand-dark text-sm">
                  {platform.name}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Integration Process */}
        <div className="bg-white rounded-3xl p-12 shadow-sm">
          <h3 className="text-2xl font-bold text-center text-brand-dark mb-12">
            Intégration en <span className="gradient-text">3 étapes simples</span>
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-purple rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">1</span>
              </div>
              <h4 className="text-xl font-semibold text-brand-dark mb-4">Connectez vos comptes</h4>
              <p className="text-gray-600">Liez vos comptes des différentes plateformes en toute sécurité avec notre système d'authentification.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-yellow rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-brand-dark text-2xl font-bold">2</span>
              </div>
              <h4 className="text-xl font-semibold text-brand-dark mb-4">Importez vos articles</h4>
              <p className="text-gray-600">Synchronisez automatiquement vos stocks existants ou créez de nouveaux articles directement dans Repost.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-purple rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">3</span>
              </div>
              <h4 className="text-xl font-semibold text-brand-dark mb-4">Publiez partout</h4>
              <p className="text-gray-600">Diffusez vos annonces sur toutes les plateformes sélectionnées en un seul clic et suivez leurs performances.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Platforms;

