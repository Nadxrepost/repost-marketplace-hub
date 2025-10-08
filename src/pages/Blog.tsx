import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';
interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  cover_image: string | null;
  published_at: string;
  tags: string[] | null;
}
const Blog = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchPosts = async () => {
      const {
        data,
        error
      } = await supabase.from('blog_posts').select('id, title, slug, excerpt, cover_image, published_at, tags').eq('status', 'published').order('published_at', {
        ascending: false
      });
      if (!error && data) {
        setPosts(data);
      }
      setLoading(false);
    };
    fetchPosts();
  }, []);
  return <div className="min-h-screen">
      <SEO 
        title="Blog Seconde Main - Conseils et Actualités | Repost"
        description="Découvrez nos articles sur la mode seconde main, l'économie circulaire et nos conseils pour optimiser vos ventes en ligne."
      />
      <Header />
      <main className="container mx-auto px-6 py-24 md:py-32">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">Le blog </h1>
          <p className="text-xl text-center text-muted-foreground mb-12 max-w-2xl mx-auto">Actus, conseils, coulisses...Découvrez tout ce qu'il faut savoir dans l'univers de la mode seconde main et de l'économie circulaire.</p>

          {loading ? <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map(i => <div key={i} className="animate-pulse">
                  <div className="bg-gray-200 h-48 rounded-lg mb-4"></div>
                  <div className="bg-gray-200 h-6 rounded mb-2"></div>
                  <div className="bg-gray-200 h-4 rounded w-3/4"></div>
                </div>)}
            </div> : posts.length === 0 ? <div className="text-center py-20">
              <p className="text-xl text-muted-foreground">
                Aucun article publié pour le moment. Revenez bientôt !
              </p>
            </div> : <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map(post => <Link key={post.id} to={`/blog/${encodeURIComponent(post.slug)}`} className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  {post.cover_image && <div className="aspect-video overflow-hidden">
                      <img src={post.cover_image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                    </div>}
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {format(new Date(post.published_at), 'dd MMMM yyyy', {
                    locale: fr
                  })}
                      </span>
                    </div>
                    <h2 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-muted-foreground mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    {post.tags && post.tags.length > 0 && <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.map((tag, index) => <span key={index} className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">
                            {tag}
                          </span>)}
                      </div>}
                    <span className="inline-flex items-center gap-2 text-primary font-semibold">
                      Lire la suite
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </Link>)}
            </div>}
        </div>
      </main>
      <Footer />
    </div>;
};
export default Blog;