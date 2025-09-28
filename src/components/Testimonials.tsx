
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Laurette Makenda",
    role: "Propriétaire boutique vintage",
    company: "Vintage Paradise",
    content: "Repost a révolutionné ma façon de vendre. En quelques clics, mes articles sont sur toutes les plateformes. Mes ventes ont augmenté de 40% !",
    rating: 5,
    avatar: "LM"
  },
  {
    name: "Thomas Lefure",
    role: "Revendeur professionnel",
    company: "Second Life Store",
    content: "L'automatisation des publications m'a fait gagner 15h par semaine. Je peux enfin me concentrer sur la recherche de nouveaux produits.",
    rating: 4,
    avatar: "TL"
  },
  {
    name: "Laura Vinizi",
    role: "Créatrice mode",
    company: "SL Fashion",
    content: "Interface intuitive et résultats impressionnants. Le tableau de bord unifié me permet de tout gérer depuis un seul endroit.",
    rating: 5,
    avatar: "LV"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-brand-gray/20 to-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
            Ils nous font confiance
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Découvrez comment Repost transforme l'activité de nos utilisateurs
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-brand-yellow fill-brand-yellow" />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-600 mb-6 italic">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center">
                <div className="w-12 h-12 bg-brand-purple rounded-full flex items-center justify-center text-white font-bold mr-4">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-semibold text-brand-dark">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                  <p className="text-sm text-brand-purple font-medium">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-lg text-gray-600 mb-6">
            Rejoignez une communauté de plus de <span className="font-bold text-brand-purple">100 professionnels</span>
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
            <div className="flex items-center">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
              +30% d'augmentation des ventes
            </div>
            <div className="flex items-center">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
              +10h gagnées par semaine
            </div>
            <div className="flex items-center">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
              +40% de visibilité sur vos produits
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
