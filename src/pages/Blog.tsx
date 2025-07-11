import { ArrowLeft, Plus, Edit, Trash2, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
  readTime: string;
  content?: string;
}

const Blog = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([
    {
      id: 1,
      title: "10 astuces pour optimiser vos ventes sur Vinted",
      excerpt: "Découvrez les meilleures pratiques pour augmenter vos ventes et votre visibilité sur la plateforme leader de la seconde main.",
      date: "15 Mars 2024",
      category: "Conseils",
      image: "/lovable-uploads/c5af3827-0fbf-4874-8d6f-2230e2b0479b.png",
      readTime: "5 min"
    },
    {
      id: 2,
      title: "Guide complet : Synchroniser son stock entre plateformes",
      excerpt: "Comment éviter les doubles ventes et maintenir un inventaire cohérent sur toutes vos plateformes de vente.",
      date: "12 Mars 2024",
      category: "Tutoriel",
      image: "/lovable-uploads/415e2b73-c6b8-421d-b7bd-c6b058d330cf.png",
      readTime: "8 min"
    },
    {
      id: 3,
      title: "Analytics : Comprendre ses performances de vente",
      excerpt: "Apprenez à analyser vos données de vente pour identifier les tendances et optimiser votre stratégie.",
      date: "8 Mars 2024",
      category: "Analytics",
      image: "/lovable-uploads/55add11b-8104-4969-8858-93eacdf08f19.png",
      readTime: "6 min"
    },
    {
      id: 4,
      title: "Les erreurs à éviter sur les plateformes de seconde main",
      excerpt: "Découvrez les pièges les plus courants et comment les éviter pour maximiser vos chances de succès.",
      date: "5 Mars 2024",
      category: "Conseils",
      image: "/lovable-uploads/23cdd733-e7b7-4a07-b2d5-e0a9dce5b609.png",
      readTime: "7 min"
    },
    {
      id: 5,
      title: "Automatisation : Gagner du temps avec Repost",
      excerpt: "Comment automatiser vos publications et votre gestion d'inventaire pour vous concentrer sur l'essentiel.",
      date: "1 Mars 2024",
      category: "Automatisation",
      image: "/lovable-uploads/de631b36-dbfc-4af7-a993-a6c96fcc28bd.png",
      readTime: "4 min"
    },
    {
      id: 6,
      title: "Tendances 2024 : L'avenir de la seconde main",
      excerpt: "Analyse des tendances émergentes et prédictions pour le marché de la seconde main en 2024.",
      date: "25 Février 2024",
      category: "Tendances",
      image: "/lovable-uploads/1fbf7e02-d88b-477e-872d-1958c7ceee3e.png",
      readTime: "10 min"
    }
  ]);

  const [isAdmin, setIsAdmin] = useState(false);
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    excerpt: '',
    category: '',
    image: '',
    readTime: '',
    content: ''
  });

  const categories = ["Tous", "Conseils", "Tutoriel", "Analytics", "Automatisation", "Tendances"];
  const categoryOptions = categories.filter(c => c !== "Tous");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const now = new Date().toLocaleDateString('fr-FR', { 
      day: 'numeric', 
      month: 'long', 
      year: 'numeric' 
    });

    if (editingPost) {
      setBlogPosts(posts => posts.map(post => 
        post.id === editingPost.id 
          ? { ...post, ...formData, date: post.date }
          : post
      ));
    } else {
      const newPost: BlogPost = {
        id: Math.max(...blogPosts.map(p => p.id)) + 1,
        ...formData,
        date: now
      };
      setBlogPosts(posts => [newPost, ...posts]);
    }

    setFormData({ title: '', excerpt: '', category: '', image: '', readTime: '', content: '' });
    setEditingPost(null);
    setIsDialogOpen(false);
  };

  const handleEdit = (post: BlogPost) => {
    setEditingPost(post);
    setFormData({
      title: post.title,
      excerpt: post.excerpt,
      category: post.category,
      image: post.image,
      readTime: post.readTime,
      content: post.content || ''
    });
    setIsDialogOpen(true);
  };

  const handleDelete = (id: number) => {
    setBlogPosts(posts => posts.filter(post => post.id !== id));
  };

  const resetForm = () => {
    setFormData({ title: '', excerpt: '', category: '', image: '', readTime: '', content: '' });
    setEditingPost(null);
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Retour à l'accueil */}
      <div className="py-4 px-4 border-b mt-20">
        <div className="max-w-6xl mx-auto">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Retour à l'accueil
          </Link>
        </div>
      </div>
      
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex justify-between items-center mb-6">
              <div className="flex-1">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Blog Repost
                </h1>
                <p className="text-xl text-muted-foreground">
                  Conseils, astuces et actualités pour réussir dans la seconde main
                </p>
              </div>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  onClick={() => setIsAdmin(!isAdmin)}
                  className="whitespace-nowrap"
                >
                  {isAdmin ? 'Mode Lecture' : 'Mode Admin'}
                </Button>
                {isAdmin && (
                  <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                    <DialogTrigger asChild>
                      <Button onClick={resetForm}>
                        <Plus className="h-4 w-4 mr-2" />
                        Nouvel Article
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle>
                          {editingPost ? 'Modifier l\'article' : 'Créer un nouvel article'}
                        </DialogTitle>
                      </DialogHeader>
                      <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                          <Label htmlFor="title">Titre</Label>
                          <Input
                            id="title"
                            value={formData.title}
                            onChange={(e) => setFormData({...formData, title: e.target.value})}
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="excerpt">Extrait</Label>
                          <Textarea
                            id="excerpt"
                            value={formData.excerpt}
                            onChange={(e) => setFormData({...formData, excerpt: e.target.value})}
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="category">Catégorie</Label>
                          <Select value={formData.category} onValueChange={(value) => setFormData({...formData, category: value})}>
                            <SelectTrigger>
                              <SelectValue placeholder="Sélectionner une catégorie" />
                            </SelectTrigger>
                            <SelectContent>
                              {categoryOptions.map((cat) => (
                                <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <Label htmlFor="image">Image URL</Label>
                          <Input
                            id="image"
                            value={formData.image}
                            onChange={(e) => setFormData({...formData, image: e.target.value})}
                            placeholder="/lovable-uploads/..."
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="readTime">Temps de lecture</Label>
                          <Input
                            id="readTime"
                            value={formData.readTime}
                            onChange={(e) => setFormData({...formData, readTime: e.target.value})}
                            placeholder="5 min"
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="content">Contenu</Label>
                          <Textarea
                            id="content"
                            value={formData.content}
                            onChange={(e) => setFormData({...formData, content: e.target.value})}
                            rows={6}
                            placeholder="Contenu complet de l'article..."
                          />
                        </div>
                        <div className="flex gap-2">
                          <Button type="submit" className="flex-1">
                            {editingPost ? 'Modifier' : 'Créer'}
                          </Button>
                          <Button 
                            type="button" 
                            variant="outline" 
                            onClick={() => setIsDialogOpen(false)}
                          >
                            Annuler
                          </Button>
                        </div>
                      </form>
                    </DialogContent>
                  </Dialog>
                )}
              </div>
            </div>
          </div>

          {/* Categories Filter */}
          <div className="flex flex-wrap gap-2 justify-center mb-12">
            {categories.map((category) => (
              <Badge 
                key={category} 
                variant={category === "Tous" ? "default" : "outline"}
                className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors px-4 py-2"
              >
                {category}
              </Badge>
            ))}
          </div>

          {/* Featured Post */}
          {blogPosts.length > 0 && (
            <div className="mb-12">
              <Card className="overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/2">
                    <img 
                      src={blogPosts[0].image} 
                      alt={blogPosts[0].title}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-1/2 p-8">
                    <div className="flex items-center justify-between mb-4">
                      <Badge>{blogPosts[0].category}</Badge>
                      {isAdmin && (
                        <div className="flex gap-2">
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => handleEdit(blogPosts[0])}
                          >
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => handleDelete(blogPosts[0].id)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      )}
                    </div>
                    <h2 className="text-3xl font-bold mb-4">{blogPosts[0].title}</h2>
                    <p className="text-muted-foreground mb-6 text-lg">{blogPosts[0].excerpt}</p>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <span>{blogPosts[0].date}</span>
                      <span>{blogPosts[0].readTime} de lecture</span>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          )}

          {/* Blog Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post) => (
              <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer relative">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                {isAdmin && (
                  <div className="absolute top-2 right-2 flex gap-1">
                    <Button
                      size="sm"
                      variant="secondary"
                      onClick={() => handleEdit(post)}
                      className="h-8 w-8 p-0"
                    >
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button
                      size="sm"
                      variant="destructive"
                      onClick={() => handleDelete(post.id)}
                      className="h-8 w-8 p-0"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                )}
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline">{post.category}</Badge>
                    <span className="text-sm text-muted-foreground">{post.readTime}</span>
                  </div>
                  <CardTitle className="text-xl hover:text-primary transition-colors">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-base">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <span className="text-sm text-muted-foreground">{post.date}</span>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Newsletter Signup */}
          <div className="mt-16 text-center bg-gradient-to-r from-primary/10 to-purple-100 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4">Restez informé</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Recevez nos derniers articles, conseils et actualités directement dans votre boîte mail. 
              Pas de spam, que du contenu utile pour développer votre activité.
            </p>
            <div className="flex max-w-md mx-auto gap-2">
              <input 
                type="email" 
                placeholder="Votre adresse email"
                className="flex-1 px-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2 rounded-lg font-medium transition-colors">
                S'abonner
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;