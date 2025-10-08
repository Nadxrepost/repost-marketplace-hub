const Partners = () => {
  const partners = [
    { name: "Apec", logo: "/lovable-uploads/placeholder-logo.png" },
    { name: "Bpi", logo: "/lovable-uploads/placeholder-logo.png" },
    { name: "Cci", logo: "/lovable-uploads/placeholder-logo.png" },
    { name: "Cic", logo: "/lovable-uploads/placeholder-logo.png" },
    { name: "Cpme", logo: "/lovable-uploads/placeholder-logo.png" },
    { name: "Diversidays", logo: "/lovable-uploads/placeholder-logo.png" },
    { name: "Ensiie", logo: "/lovable-uploads/placeholder-logo.png" },
    { name: "Imt Starter", logo: "/lovable-uploads/placeholder-logo.png" },
    { name: "Imt-Bs", logo: "/lovable-uploads/placeholder-logo.png" },
    { name: "La French Tech", logo: "/lovable-uploads/placeholder-logo.png" },
    { name: "Le logis des ts", logo: "/lovable-uploads/placeholder-logo.png" },
    { name: "Les Déterminés", logo: "/lovable-uploads/placeholder-logo.png" },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-white via-gray-50 to-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-16 leading-tight">
          <span className="text-brand-dark">ILS PARTAGENT NOTRE VISION, ET </span>
          <span className="text-brand-purple">CONCRÈTEMENT </span>
          <span className="text-brand-dark">LA RENDENT POSSIBLE</span>
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow group"
            >
              <div className="w-20 h-20 flex items-center justify-center mb-4 grayscale group-hover:grayscale-0 transition-all">
                <img
                  src={partner.logo}
                  alt={`Logo ${partner.name}`}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <span className="text-sm font-semibold text-brand-dark text-center">
                {partner.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
