import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { Calendar, ArrowLeft, Clock, FileText, ChevronLeft, ChevronRight, MessageCircle, Send } from 'lucide-react';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  content: string;
  cover_image: string | null;
  published_at: string;
  tags: string[] | null;
  meta_title: string | null;
  meta_description: string | null;
}

interface NavigationPost {
  id: string;
  title: string;
  slug: string;
}

interface Comment {
  id: string;
  author_name: string;
  content: string;
  created_at: string;
  user_id: string | null;
}

const calculateReadingTime = (content: string): number => {
  const wordsPerMinute = 200;
  const words = content.replace(/<[^>]*>/g, '').split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
};

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [previousPost, setPreviousPost] = useState<NavigationPost | null>(null);
  const [nextPost, setNextPost] = useState<NavigationPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [comments, setComments] = useState<Comment[]>([]);
  const [commentContent, setCommentContent] = useState('');
  const [authorName, setAuthorName] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [user, setUser] = useState<any>(null);
  const { toast } = useToast();

  useEffect(() => {
    const fetchPost = async () => {
      if (!slug) return;

      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('slug', slug)
        .eq('status', 'published')
        .maybeSingle();

      if (!error && data) {
        setPost(data);
        
        // Fetch previous post
        const { data: prevData } = await supabase
          .from('blog_posts')
          .select('id, title, slug')
          .eq('status', 'published')
          .lt('published_at', data.published_at)
          .order('published_at', { ascending: false })
          .limit(1)
          .maybeSingle();
        
        if (prevData) setPreviousPost(prevData);
        
        // Fetch next post
        const { data: nextData } = await supabase
          .from('blog_posts')
          .select('id, title, slug')
          .eq('status', 'published')
          .gt('published_at', data.published_at)
          .order('published_at', { ascending: true })
          .limit(1)
          .maybeSingle();
        
        if (nextData) setNextPost(nextData);

        // Fetch comments
        fetchComments(data.id);
      }
      setLoading(false);
    };

    const fetchComments = async (postId: string) => {
      const { data, error } = await supabase
        .from('comments')
        .select('*')
        .eq('blog_post_id', postId)
        .eq('status', 'approved')
        .order('created_at', { ascending: false });

      if (!error && data) {
        setComments(data);
      }
    };

    const checkUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);
    };

    fetchPost();
    checkUser();
  }, [slug]);

  const handleSubmitComment = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!user) {
      toast({
        title: 'Authentification requise',
        description: 'Vous devez être connecté pour commenter',
        variant: 'destructive'
      });
      return;
    }

    if (!commentContent.trim() || !authorName.trim()) {
      toast({
        title: 'Erreur',
        description: 'Veuillez remplir tous les champs',
        variant: 'destructive'
      });
      return;
    }

    setSubmitting(true);

    const { error } = await supabase.from('comments').insert({
      blog_post_id: post?.id,
      user_id: user.id,
      author_name: authorName,
      content: commentContent,
      status: 'approved'
    });

    if (error) {
      toast({
        title: 'Erreur',
        description: error.message,
        variant: 'destructive'
      });
    } else {
      toast({
        title: 'Commentaire ajouté',
        description: 'Votre commentaire a été publié avec succès'
      });
      setCommentContent('');
      // Rafraîchir les commentaires
      if (post) {
        const { data } = await supabase
          .from('comments')
          .select('*')
          .eq('blog_post_id', post.id)
          .eq('status', 'approved')
          .order('created_at', { ascending: false });
        
        if (data) setComments(data);
      }
    }

    setSubmitting(false);
  };

  if (loading) {
    return (
      <div className="min-h-screen">
        <Header />
        <main className="container mx-auto px-6 py-24">
          <div className="max-w-4xl mx-auto animate-pulse">
            <div className="bg-gray-200 h-8 rounded mb-4 w-3/4"></div>
            <div className="bg-gray-200 h-64 rounded mb-4"></div>
            <div className="space-y-3">
              <div className="bg-gray-200 h-4 rounded"></div>
              <div className="bg-gray-200 h-4 rounded"></div>
              <div className="bg-gray-200 h-4 rounded w-5/6"></div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen">
        <Header />
        <main className="container mx-auto px-6 py-24">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">Article non trouvé</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Désolé, cet article n'existe pas ou n'est plus disponible.
            </p>
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowLeft className="w-4 h-4" />
              Retour au blog
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "datePublished": post.published_at,
    "description": post.meta_description || post.title,
    "image": post.cover_image || '/lovable-uploads/254b0023-f77e-4b19-88d7-097a1d29a292.png',
    "author": {
      "@type": "Organization",
      "name": "Repost"
    }
  };

  return (
    <div className="min-h-screen">
      <SEO 
        title={post.meta_title || `${post.title} | Repost Blog`}
        description={post.meta_description || post.title}
        ogImage={post.cover_image || undefined}
        structuredData={structuredData}
      />
      <Header />
      <main className="container mx-auto px-6 py-24">
        <article className="max-w-4xl mx-auto">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Retour au blog
          </Link>

          <header className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{post.title}</h1>
            <div className="flex items-center gap-4 text-muted-foreground">
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {format(new Date(post.published_at), 'dd MMMM yyyy', { locale: fr })}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {calculateReadingTime(post.content)} min
              </span>
            </div>
            {post.tags && post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-4">
                {post.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </header>

          <div
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Section Commentaires */}
          <div className="mt-16 pt-8 border-t border-gray-200">
            <div className="flex items-center gap-2 mb-8">
              <MessageCircle className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-bold">
                Commentaires ({comments.length})
              </h2>
            </div>

            {/* Formulaire de commentaire */}
            {user ? (
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>Laisser un commentaire</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmitComment} className="space-y-4">
                    <div>
                      <Label htmlFor="author-name">Nom</Label>
                      <Input
                        id="author-name"
                        value={authorName}
                        onChange={(e) => setAuthorName(e.target.value)}
                        placeholder="Votre nom"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="comment-content">Commentaire</Label>
                      <Textarea
                        id="comment-content"
                        value={commentContent}
                        onChange={(e) => setCommentContent(e.target.value)}
                        placeholder="Écrivez votre commentaire..."
                        rows={4}
                        required
                      />
                    </div>
                    <Button type="submit" disabled={submitting}>
                      <Send className="w-4 h-4 mr-2" />
                      {submitting ? 'Envoi...' : 'Publier'}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            ) : (
              <Card className="mb-8">
                <CardContent className="pt-6">
                  <p className="text-muted-foreground text-center">
                    <Link to="/auth" className="text-primary hover:underline">
                      Connectez-vous
                    </Link>
                    {' '}pour laisser un commentaire
                  </p>
                </CardContent>
              </Card>
            )}

            {/* Liste des commentaires */}
            <div className="space-y-6">
              {comments.length === 0 ? (
                <p className="text-center text-muted-foreground py-8">
                  Aucun commentaire pour le moment. Soyez le premier à commenter !
                </p>
              ) : (
                comments.map((comment) => (
                  <Card key={comment.id}>
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <span className="text-primary font-semibold">
                            {comment.author_name.charAt(0).toUpperCase()}
                          </span>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="font-semibold">{comment.author_name}</span>
                            <span className="text-sm text-muted-foreground">
                              {format(new Date(comment.created_at), 'dd MMMM yyyy à HH:mm', { locale: fr })}
                            </span>
                          </div>
                          <p className="text-muted-foreground whitespace-pre-wrap">{comment.content}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))
              )}
            </div>
          </div>

          {/* Navigation entre articles */}
          <div className="mt-16 pt-8 border-t border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {previousPost ? (
                <Link
                  to={`/blog/${encodeURIComponent(previousPost.slug)}`}
                  className="group flex items-center gap-4 p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <ChevronLeft className="w-8 h-8 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
                  <div className="text-left">
                    <p className="text-sm text-muted-foreground mb-1">Article précédent</p>
                    <h3 className="font-semibold group-hover:text-primary transition-colors line-clamp-2">
                      {previousPost.title}
                    </h3>
                  </div>
                </Link>
              ) : (
                <div></div>
              )}
              
              {nextPost ? (
                <Link
                  to={`/blog/${encodeURIComponent(nextPost.slug)}`}
                  className="group flex items-center gap-4 p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors md:ml-auto"
                >
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground mb-1">Article suivant</p>
                    <h3 className="font-semibold group-hover:text-primary transition-colors line-clamp-2">
                      {nextPost.title}
                    </h3>
                  </div>
                  <ChevronRight className="w-8 h-8 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
                </Link>
              ) : (
                <div></div>
              )}
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost;
