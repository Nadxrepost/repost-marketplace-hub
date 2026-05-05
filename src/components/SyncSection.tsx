const SyncSection = () => {
  const stats = [
    {
      value: "30%",
      text: "Près de 30 % des vêtements des consommateurs sont d'occasion, un chiffre légèrement inférieur à la part du commerce électronique."
    },
    {
      value: "2,7x",
      text: "Le marché mondial des vêtements d'occasion devrait atteindre 367 milliards de dollars d'ici 2029, soit une croissance 2,7 fois plus rapide que celle du marché mondial global de l'habillement."
    },
    {
      value: "50%",
      text: "En moyenne, 50 % des acheteurs d'articles d'occasion d'une marque sont de nouveaux clients, ce qui fait de la revente un canal d'acquisition puissant."
    },
    {
      value: "3x",
      text: "Les clients qui achètent à la fois des articles à prix plein et d'occasion ont un LTV 2 à 3 fois supérieur à celui des clients qui n'achètent que des articles à prix plein."
    }
  ];

  return <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-12 text-center uppercase tracking-tight max-w-4xl mx-auto">
          Pourquoi les grandes marques investissent-elles dans la revente ?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl md:text-6xl font-serif font-semibold text-brand-dark mb-4">
                {stat.value}
              </div>
              <p className="text-sm text-gray-700 leading-relaxed">
                {stat.text}
              </p>
            </div>
          ))}
        </div>
        <p className="text-xs italic text-gray-500 text-center mt-10">
          Sources : Rapport BCG x Vestiaire Collective 2025 ; Rapport ThredUp sur la revente 2025 ; Données d'archives
        </p>
      </div>
    </section>;
};
export default SyncSection;