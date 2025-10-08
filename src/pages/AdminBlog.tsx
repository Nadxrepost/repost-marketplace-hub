import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { LogOut, Plus, Edit, Trash2, Eye, Upload, AlignLeft, AlignCenter, AlignRight, AlignJustify } from 'lucide-react';
import { User, Session } from '@supabase/supabase-js';

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  cover_image: string | null;
  status: string;
  category: string;
  published_at: string | null;
  author_id: string | null;
  created_at: string;
}

const AdminBlog = () => {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [editing, setEditing] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);
  const [uploadingCover, setUploadingCover] = useState(false);
  const [showEditor, setShowEditor] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    excerpt: '',
    content: '',
    cover_image: '',
    status: 'draft',
    category: 'article',
    published_at: '',
  });
  const fileInputRef = useRef<HTMLInputElement>(null);
  const coverInputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setSession(session);
        setUser(session?.user ?? null);
        
        if (!session?.user) {
          navigate('/auth');
        } else {
          setTimeout(() => {
            checkAdminStatus(session.user.id);
          }, 0);
        }
      }
    );

    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setUser(session?.user ?? null);
      if (!session?.user) {
        navigate('/auth');
      } else {
        checkAdminStatus(session.user.id);
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  const checkAdminStatus = async (userId: string) => {
    const { data } = await supabase
      .from('user_roles')
      .select('role')
      .eq('user_id', userId)
      .eq('role', 'admin')
      .maybeSingle();

    if (data) {
      setIsAdmin(true);
      fetchPosts();
    } else {
      toast({
        title: 'Accès refusé',
        description: 'Vous devez être administrateur pour accéder à cette page.',
        variant: 'destructive',
      });
      navigate('/');
    }
  };

  const fetchPosts = async () => {
    const { data } = await supabase
      .from('blog_posts')
      .select('*')
      .order('created_at', { ascending: false });

    if (data) {
      setPosts(data);
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/');
  };

  const handleSubmit = async (e: React.FormEvent, publishNow = false) => {
    e.preventDefault();

    const postData = {
      ...formData,
      status: publishNow ? 'published' : 'draft',
      published_at: publishNow ? (formData.published_at || new Date().toISOString()) : null,
      author_id: user?.id,
    };

    if (editing) {
      const { error } = await supabase
        .from('blog_posts')
        .update(postData)
        .eq('id', editing);

      if (error) {
        toast({
          title: 'Erreur',
          description: error.message,
          variant: 'destructive',
        });
        return;
      }

      toast({ title: publishNow ? 'Article publié' : 'Article mis à jour' });
    } else {
      const { error } = await supabase
        .from('blog_posts')
        .insert([postData]);

      if (error) {
        toast({
          title: 'Erreur',
          description: error.message,
          variant: 'destructive',
        });
        return;
      }

      toast({ title: publishNow ? 'Article publié' : 'Article créé en brouillon' });
    }

    fetchPosts();
    
    // Si on publie, retourner à la liste. Si on enregistre un brouillon, rester dans l'éditeur
    if (publishNow) {
      setFormData({ title: '', slug: '', excerpt: '', content: '', cover_image: '', status: 'draft', category: 'article', published_at: '' });
      setEditing(null);
      setShowEditor(false);
    }
  };

  const handleEdit = (post: BlogPost) => {
    setFormData({
      title: post.title,
      slug: post.slug,
      excerpt: post.excerpt || '',
      content: post.content,
      cover_image: post.cover_image || '',
      status: post.status,
      category: post.category || 'article',
      published_at: post.published_at ? new Date(post.published_at).toISOString().slice(0, 16) : '',
    });
    setEditing(post.id);
    setShowEditor(true);
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Êtes-vous sûr de vouloir supprimer cet article ?')) return;

    const { error } = await supabase
      .from('blog_posts')
      .delete()
      .eq('id', id);

    if (error) {
      toast({
        title: 'Erreur',
        description: error.message,
        variant: 'destructive',
      });
      return;
    }

    toast({ title: 'Article supprimé' });
    fetchPosts();
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    setUploading(true);

    try {
      for (const file of Array.from(files)) {
        const fileExt = file.name.split('.').pop();
        const fileName = `${Math.random().toString(36).substring(2)}-${Date.now()}.${fileExt}`;
        const filePath = `${fileName}`;

        const { error: uploadError } = await supabase.storage
          .from('blog-images')
          .upload(filePath, file);

        if (uploadError) throw uploadError;

        const { data } = supabase.storage
          .from('blog-images')
          .getPublicUrl(filePath);

        // Insérer l'image directement dans le contenu
        const imageTag = `<img src="${data.publicUrl}" alt="Image de l'article" style="max-width: 100%; height: auto; margin: 1rem 0;" />\n`;
        setFormData(prev => ({ ...prev, content: prev.content + imageTag }));
      }

      toast({
        title: 'Images ajoutées',
        description: 'Les images ont été insérées dans votre article',
      });
    } catch (error: any) {
      toast({
        title: 'Erreur',
        description: error.message,
        variant: 'destructive',
      });
    } finally {
      setUploading(false);
    }
  };

  const handleCoverUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploadingCover(true);

    try {
      const fileExt = file.name.split('.').pop();
      const fileName = `cover-${Math.random().toString(36).substring(2)}-${Date.now()}.${fileExt}`;
      const filePath = `${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from('blog-images')
        .upload(filePath, file);

      if (uploadError) throw uploadError;

      const { data } = supabase.storage
        .from('blog-images')
        .getPublicUrl(filePath);

      setFormData(prev => ({ ...prev, cover_image: data.publicUrl }));

      toast({
        title: 'Photo de couverture ajoutée',
        description: 'L\'image a été téléchargée avec succès',
      });
    } catch (error: any) {
      toast({
        title: 'Erreur',
        description: error.message,
        variant: 'destructive',
      });
    } finally {
      setUploadingCover(false);
    }
  };

  const insertFormatting = (format: string) => {
    const textarea = document.getElementById('content') as HTMLTextAreaElement;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = formData.content.substring(start, end);
    
    if (!selectedText) {
      toast({
        title: 'Sélectionnez du texte',
        description: 'Veuillez d\'abord sélectionner le texte à formater',
      });
      return;
    }
    
    let newText = '';

    switch (format) {
      case 'h1':
        newText = `<h1>${selectedText}</h1>`;
        break;
      case 'h2':
        newText = `<h2>${selectedText}</h2>`;
        break;
      case 'h3':
        newText = `<h3>${selectedText}</h3>`;
        break;
      case 'p':
        newText = `<p>${selectedText}</p>`;
        break;
      case 'bold':
        newText = `<strong>${selectedText}</strong>`;
        break;
      case 'italic':
        newText = `<em>${selectedText}</em>`;
        break;
      case 'link':
        const url = prompt('Collez votre lien ici:');
        if (!url) return;
        newText = `<a href="${url}">${selectedText}</a>`;
        break;
      case 'ul':
        newText = `<ul>\n  <li>${selectedText}</li>\n</ul>`;
        break;
      case 'align-left':
        newText = `<div style="text-align: left;">${selectedText}</div>`;
        break;
      case 'align-center':
        newText = `<div style="text-align: center;">${selectedText}</div>`;
        break;
      case 'align-right':
        newText = `<div style="text-align: right;">${selectedText}</div>`;
        break;
      case 'align-justify':
        newText = `<div style="text-align: justify;">${selectedText}</div>`;
        break;
    }

    const newContent = formData.content.substring(0, start) + newText + formData.content.substring(end);
    setFormData({ ...formData, content: newContent });
  };

  if (!isAdmin) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b sticky top-0 z-10">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Administration du Blog</h1>
          <Button onClick={handleLogout} variant="outline">
            <LogOut className="w-4 h-4 mr-2" />
            Déconnexion
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-6 py-8">
        {!showEditor ? (
          <div className="bg-white rounded-xl shadow p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Mes Articles</h2>
              <Button onClick={() => {
                setFormData({ title: '', slug: '', excerpt: '', content: '', cover_image: '', status: 'draft', category: 'article', published_at: '' });
                setEditing(null);
                setShowEditor(true);
              }}>
                <Plus className="w-4 h-4 mr-2" />
                Nouvel article
              </Button>
            </div>

            <div className="space-y-3">{posts.map((post) => (
                <div
                  key={post.id}
                  className="border rounded-lg p-4 hover:bg-gray-50 transition-colors cursor-pointer"
                  onClick={() => handleEdit(post)}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg">{post.title}</h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        {post.status === 'published' ? '✅ Publié' : '📝 Brouillon'}
                        {post.published_at && (
                          <span className="ml-2">
                            • {new Date(post.published_at).toLocaleDateString('fr-FR', {
                              day: 'numeric',
                              month: 'long',
                              year: 'numeric'
                            })}
                          </span>
                        )}
                      </p>
                      {post.excerpt && (
                        <p className="text-sm text-gray-600 mt-2">{post.excerpt}</p>
                      )}
                    </div>
                    <div className="flex gap-2 ml-4">
                      {post.status === 'published' && (
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={(e) => {
                            e.stopPropagation();
                            window.open(`/blog/${post.slug}`, '_blank');
                          }}
                        >
                          <Eye className="w-4 h-4" />
                        </Button>
                      )}
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleEdit(post);
                        }}
                      >
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDelete(post.id);
                        }}
                      >
                        <Trash2 className="w-4 h-4 text-destructive" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}

              {posts.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-muted-foreground mb-4">Aucun article pour le moment</p>
                  <Button onClick={() => setShowEditor(true)}>
                    <Plus className="w-4 h-4 mr-2" />
                    Créer votre premier article
                  </Button>
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">
                {editing ? 'Modifier l\'article' : 'Nouvel article'}
              </h2>
              <Button variant="outline" onClick={() => {
                setShowEditor(false);
                setShowPreview(false);
                setEditing(null);
                setFormData({ title: '', slug: '', excerpt: '', content: '', cover_image: '', status: 'draft', category: 'article', published_at: '' });
              }}>
                Retour à la liste
              </Button>
            </div>

            {showPreview ? (
              <div className="space-y-6">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h3 className="font-semibold text-blue-900 mb-2">Mode Aperçu</h3>
                  <p className="text-sm text-blue-700">Voici comment votre article apparaîtra aux lecteurs</p>
                </div>

                <div className="bg-white border rounded-lg p-8">
                  <h1 className="text-4xl font-bold mb-4">{formData.title || 'Titre de l\'article'}</h1>
                  {formData.published_at && (
                    <p className="text-sm text-muted-foreground mb-6">
                      Publié le {new Date(formData.published_at).toLocaleDateString('fr-FR', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric'
                      })}
                    </p>
                  )}
                  {formData.excerpt && (
                    <p className="text-lg text-gray-600 mb-6 italic">{formData.excerpt}</p>
                  )}
                  <div 
                    className="prose max-w-none"
                    dangerouslySetInnerHTML={{ __html: formData.content || '<p>Votre contenu apparaîtra ici...</p>' }}
                  />
                </div>

                <div className="flex gap-2">
                  <Button onClick={() => setShowPreview(false)}>
                    <Edit className="w-4 h-4 mr-2" />
                    Retour à l&apos;édition
                  </Button>
                </div>
              </div>
            ) : (
            <form onSubmit={(e) => handleSubmit(e, false)} className="space-y-4">
              <div>
                <Label htmlFor="title">Titre</Label>
                <Input
                  id="title"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  required
                />
              </div>

              <div>
                <Label htmlFor="slug">Slug (URL)</Label>
                <Input
                  id="slug"
                  value={formData.slug}
                  onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                  placeholder="mon-article"
                  required
                />
              </div>

              <div>
                <Label htmlFor="excerpt">Résumé</Label>
                <Textarea
                  id="excerpt"
                  value={formData.excerpt}
                  onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                  rows={3}
                />
              </div>

              <div>
                <Label>Photo de couverture</Label>
                <div className="space-y-3">
                  {formData.cover_image && (
                    <div className="relative w-full h-48 rounded-lg overflow-hidden border">
                      <img 
                        src={formData.cover_image} 
                        alt="Couverture" 
                        className="w-full h-full object-cover"
                      />
                      <Button
                        type="button"
                        variant="destructive"
                        size="sm"
                        className="absolute top-2 right-2"
                        onClick={() => setFormData({ ...formData, cover_image: '' })}
                      >
                        Supprimer
                      </Button>
                    </div>
                  )}
                  <div className="flex items-center gap-2">
                    <Input
                      ref={coverInputRef}
                      type="file"
                      accept="image/*"
                      onChange={handleCoverUpload}
                      disabled={uploadingCover}
                      className="hidden"
                    />
                    <Button
                      type="button"
                      disabled={uploadingCover}
                      variant="secondary"
                      onClick={() => coverInputRef.current?.click()}
                      className="w-full"
                    >
                      <Upload className="w-4 h-4 mr-2" />
                      {uploadingCover ? 'Upload...' : formData.cover_image ? 'Changer l\'image' : 'Ajouter une image'}
                    </Button>
                  </div>
                </div>
              </div>

              <div>
                <Label>Ajouter des images</Label>
                <div className="flex items-center gap-2">
                  <Input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={handleImageUpload}
                    disabled={uploading}
                    className="hidden"
                  />
                  <Button
                    type="button"
                    disabled={uploading}
                    variant="secondary"
                    onClick={() => fileInputRef.current?.click()}
                    className="w-full"
                  >
                    <Upload className="w-4 h-4 mr-2" />
                    {uploading ? 'Upload...' : 'Ajouter'}
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  Les images seront insérées automatiquement dans votre contenu
                </p>
              </div>

              <div>
                <Label htmlFor="content">Contenu de l&apos;article</Label>
                <div className="border rounded-md p-2 bg-gray-50 mb-2 flex flex-wrap gap-1">
                  <Button
                    type="button"
                    size="sm"
                    variant="outline"
                    onClick={() => insertFormatting('h1')}
                    title="Titre principal"
                  >
                    H1
                  </Button>
                  <Button
                    type="button"
                    size="sm"
                    variant="outline"
                    onClick={() => insertFormatting('h2')}
                    title="Sous-titre"
                  >
                    H2
                  </Button>
                  <Button
                    type="button"
                    size="sm"
                    variant="outline"
                    onClick={() => insertFormatting('h3')}
                    title="Titre de section"
                  >
                    H3
                  </Button>
                  <Button
                    type="button"
                    size="sm"
                    variant="outline"
                    onClick={() => insertFormatting('p')}
                    title="Paragraphe"
                  >
                    P
                  </Button>
                  <Button
                    type="button"
                    size="sm"
                    variant="outline"
                    onClick={() => insertFormatting('bold')}
                    title="Gras"
                  >
                    <strong>B</strong>
                  </Button>
                  <Button
                    type="button"
                    size="sm"
                    variant="outline"
                    onClick={() => insertFormatting('italic')}
                    title="Italique"
                  >
                    <em>I</em>
                  </Button>
                  <Button
                    type="button"
                    size="sm"
                    variant="outline"
                    onClick={() => insertFormatting('link')}
                    title="Lien"
                  >
                    Link
                  </Button>
                  <Button
                    type="button"
                    size="sm"
                    variant="outline"
                    onClick={() => insertFormatting('ul')}
                    title="Liste"
                  >
                    Liste
                  </Button>
                  <div className="w-px bg-gray-300 mx-1" />
                  <Button
                    type="button"
                    size="sm"
                    variant="outline"
                    onClick={() => insertFormatting('align-left')}
                    title="Aligner à gauche"
                  >
                    <AlignLeft className="w-4 h-4" />
                  </Button>
                  <Button
                    type="button"
                    size="sm"
                    variant="outline"
                    onClick={() => insertFormatting('align-center')}
                    title="Centrer"
                  >
                    <AlignCenter className="w-4 h-4" />
                  </Button>
                  <Button
                    type="button"
                    size="sm"
                    variant="outline"
                    onClick={() => insertFormatting('align-right')}
                    title="Aligner à droite"
                  >
                    <AlignRight className="w-4 h-4" />
                  </Button>
                  <Button
                    type="button"
                    size="sm"
                    variant="outline"
                    onClick={() => insertFormatting('align-justify')}
                    title="Justifier"
                  >
                    <AlignJustify className="w-4 h-4" />
                  </Button>
                </div>
                <Textarea
                  id="content"
                  value={formData.content}
                  onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                  rows={10}
                  required
                />
              </div>

              <div>
                <Label htmlFor="published_at">Date de publication</Label>
                <Input
                  id="published_at"
                  type="datetime-local"
                  value={formData.published_at}
                  onChange={(e) => setFormData({ ...formData, published_at: e.target.value })}
                />
                <p className="text-xs text-muted-foreground mt-1">
                  Laisser vide pour définir automatiquement à maintenant lors de la publication
                </p>
              </div>

              <div>
                <Label htmlFor="status">Statut</Label>
                <select
                  id="status"
                  value={formData.status}
                  onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                  className="w-full border rounded-md px-3 py-2"
                >
                  <option value="draft">Brouillon</option>
                  <option value="published">Publié</option>
                </select>
              </div>

              <div>
                <Label htmlFor="category">Catégorie</Label>
                <select
                  id="category"
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="w-full border rounded-md px-3 py-2"
                >
                  <option value="article">Article</option>
                  <option value="video">Vidéo</option>
                  <option value="tutorial">Tutoriel</option>
                  <option value="news">Actualité</option>
                  <option value="guide">Guide</option>
                </select>
              </div>

              <div className="flex gap-2 pt-4">
                <Button 
                  type="button" 
                  variant="outline"
                  onClick={() => setShowPreview(true)}
                  className="flex-1"
                >
                  <Eye className="w-4 h-4 mr-2" />
                  Aperçu
                </Button>
                <Button 
                  type="submit" 
                  variant="secondary"
                  className="flex-1"
                >
                  Enregistrer brouillon
                </Button>
                <Button 
                  type="button"
                  onClick={(e) => handleSubmit(e as any, true)}
                  className="flex-1"
                >
                  {editing && formData.status === 'published' ? 'Mettre à jour' : 'Publier'}
                </Button>
              </div>
            </form>
            )}
          </div>
        )}
      </main>
    </div>
  );
};

export default AdminBlog;
