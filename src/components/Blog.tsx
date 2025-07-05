
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "10 conseils pour optimiser vos ventes sur les plateformes de seconde main",
      excerpt: "Découvrez les meilleures pratiques pour maximiser vos revenus et attirer plus d'acheteurs sur vos annonces.",
      author: "Marie Dupont",
      date: "15 mars 2024",
      image: "/lovable-uploads/6066c04d-163c-4a02-9ab2-ba8103f6dd71.png",
      category: "Conseils"
    },
    {
      id: 2,
      title: "L'avenir du commerce de seconde main : tendances 2024",
      excerpt: "Analyse des tendances émergentes dans le secteur de la revente et comment Repost vous aide à rester compétitif.",
      author: "Thomas Martin",
      date: "8 mars 2024",
      image: "/lovable-uploads/e39c0364-1d0b-4c09-bd30-5fc57822461b.png",
      category: "Tendances"
    },
    {
      id: 3,
      title: "Automatisation vs gestion manuelle : quel impact sur vos ventes ?",
      excerpt: "Comparaison détaillée entre la gestion manuelle et l'automatisation de vos annonces multi-plateformes.",
      author: "Sophie Bernard",
      date: "1 mars 2024",
      image: "/lovable-uploads/c6dda6d0-84cf-4dbb-a594-41853d563846.png",
      category: "Productivité"
    }
  ];

  return (
    <section id="blog" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-brand-dark mb-4">
            Notre <span className="gradient-text">Blog</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conseils, tendances et actualités pour optimiser votre activité de seconde main
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group cursor-pointer">
              <div className="relative overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-brand-purple text-white px-3 py-1 rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-brand-dark mb-3 group-hover:text-brand-purple transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-brand-purple group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center">
          <Button 
            variant="outline" 
            size="lg"
            className="border-brand-purple text-brand-purple hover:bg-brand-purple hover:text-white px-8 py-6 text-lg"
          >
            Voir tous les articles
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
