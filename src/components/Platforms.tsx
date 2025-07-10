
const Platforms = () => {
  const platforms = [{
    name: "eBay",
    logo: "/lovable-uploads/d0c80e13-68bf-4639-aa50-15199f9a3175.png",
    color: "bg-white",
    isImage: true,
    isEbay: true
  }, {
    name: "Etsy",
    logo: "/lovable-uploads/ca0e1309-7535-4454-bbda-e72072179c8c.png",
    color: "bg-white",
    isImage: true,
    isEtsy: true
  }, {
    name: "Vinted",
    logo: "/lovable-uploads/7256daf7-fe58-4797-982b-1cac616712a6.png",
    color: "bg-white",
    isImage: true,
    isVinted: true
  }, {
    name: "Shopify",
    logo: "/lovable-uploads/03ef5e84-53fe-496a-bc10-f2866f267ab2.png",
    color: "bg-white",
    isImage: true,
    isShopify: true
  }, {
    name: "Depop",
    logo: "/lovable-uploads/4eb57a7b-74a8-4807-8ccf-ef6ef44ed921.png",
    color: "bg-white",
    isImage: true,
    isDepop: true
  }, {
    name: "Vestiaire Collective",
    logo: "/lovable-uploads/c1944d27-e9de-42dc-a6fa-fde442839b5b.png",
    color: "bg-white",
    isImage: true,
    isVestiaire: true
  }, {
    name: "ReSpartoo - 2nde main",
    logo: "/lovable-uploads/cc8762f3-c7ca-4ecb-8fe5-fe96f7e0e6bc.png",
    color: "bg-white",
    isImage: true,
    isSpartoo: true
  }];
  
  return <section id="platforms" className="py-20 bg-gradient-to-br from-brand-gray/20 to-brand-purple/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Connecté aux meilleures plateformes
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Diffusez vos annonces simultanément sur toutes les plateformes de seconde main les plus populaires
          </p>
        </div>

        <div className="grid grid-cols-7 gap-4">
          {platforms.map((platform, index) => {
            const isComingSoon = index >= 4; // Les 3 dernières plateformes (index 4, 5, 6)
            return (
              <div key={index} className={`group p-6 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer relative`}>
                {isComingSoon && (
                  <div className="absolute inset-0 flex items-center justify-center bg-white/80 rounded-2xl z-10 backdrop-blur-sm">
                    <span className="text-white font-bold text-sm bg-brand-dark px-3 py-1 rounded-full shadow-md border">Coming Soon</span>
                  </div>
                )}
                <div className={`text-center ${isComingSoon ? 'blur-[0.5px]' : ''}`}>
                  {platform.isShopify ? <div className="w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <img src={platform.logo} alt={`${platform.name} logo`} className="w-16 h-16 object-contain" />
                    </div> : platform.isVinted ? <div className="w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <img src={platform.logo} alt={`${platform.name} logo`} className="w-16 h-16 object-contain" />
                    </div> : platform.isEtsy ? <div className="w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <img src={platform.logo} alt={`${platform.name} logo`} className="w-16 h-16 object-contain" />
                    </div> : platform.isVestiaire ? <div className="w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <img src={platform.logo} alt={`${platform.name} logo`} className="w-16 h-16 object-contain" />
                    </div> : platform.isDepop ? <div className="w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <img src={platform.logo} alt={`${platform.name} logo`} className="w-16 h-16 object-contain" />
                    </div> : platform.isEbay ? <div className="w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <img src={platform.logo} alt={`${platform.name} logo`} className="w-16 h-16 object-contain" />
                    </div> : platform.isSpartoo ? <div className="w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <img src={platform.logo} alt={`${platform.name} logo`} className="w-16 h-16 object-contain" />
                    </div> : <div className={`w-16 h-16 ${platform.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                      {platform.isImage ? <img src={platform.logo} alt={`${platform.name} logo`} className="w-8 h-8 object-contain" /> : <span className="text-2xl">{platform.logo}</span>}
                    </div>}
                  <h3 className="font-semibold text-brand-dark text-sm">
                    {platform.name}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>;
};

export default Platforms;
