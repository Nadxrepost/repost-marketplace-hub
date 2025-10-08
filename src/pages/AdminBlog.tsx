import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { LogOut, Plus, Edit, Trash2, Eye, Upload, AlignLeft, AlignCenter, AlignRight, AlignJustify, Check, Bold, Italic, Link2, List, ListOrdered, Quote, Code, Strikethrough, Underline } from 'lucide-react';
import { User, Session } from '@supabase/supabase-js';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
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
const generateSlug = (title: string): string => {
  return title.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
};

// Assure un slug unique en ajoutant un suffixe -n si nécessaire
const ensureUniqueSlug = async (base: string, currentId?: string | null): Promise<string> => {
  const baseSlug = base && base.trim().length > 0 ? base : 'article';
  let query = supabase.from('blog_posts').select('id, slug').ilike('slug', `${baseSlug}%`);
  if (currentId) {
    query = query.neq('id', currentId);
  }
  const {
    data,
    error
  } = await query;
  if (error) {
    // En cas d'erreur (RLS, etc.), fallback ultra-unique
    return `${baseSlug}-${Date.now()}`;
  }
  const taken = new Set((data || []).map((r: any) => r.slug));
  if (!taken.has(baseSlug)) return baseSlug;

  // Cherche le prochain suffixe disponible
  let n = 1;
  while (taken.has(`${baseSlug}-${n}`)) n++;
  return `${baseSlug}-${n}`;
};
const AdminBlog = () => {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [selectedPosts, setSelectedPosts] = useState<string[]>([]);
  const [editing, setEditing] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);
  const [uploadingCover, setUploadingCover] = useState(false);
  const [showEditor, setShowEditor] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [selectedTextStyle, setSelectedTextStyle] = useState('p');
  const [showLinkDialog, setShowLinkDialog] = useState(false);
  const [linkUrl, setLinkUrl] = useState('');
  const [savedSelection, setSavedSelection] = useState<Range | null>(null);
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    excerpt: '',
    content: '',
    cover_image: '',
    status: 'draft',
    category: 'article',
    published_at: ''
  });
  const fileInputRef = useRef<HTMLInputElement>(null);
  const coverInputRef = useRef<HTMLInputElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const {
    toast
  } = useToast();
  useEffect(() => {
    const {
      data: {
        subscription
      }
    } = supabase.auth.onAuthStateChange((event, session) => {
      setSession(session);
      setUser(session?.user ?? null);
      if (!session?.user) {
        navigate('/auth');
      } else {
        setTimeout(() => {
          checkAdminStatus(session.user.id);
        }, 0);
      }
    });
    supabase.auth.getSession().then(({
      data: {
        session
      }
    }) => {
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
    const {
      data
    } = await supabase.from('user_roles').select('role').eq('user_id', userId).eq('role', 'admin').maybeSingle();
    if (data) {
      setIsAdmin(true);
      fetchPosts();
    } else {
      toast({
        title: 'Accès refusé',
        description: 'Vous devez être administrateur pour accéder à cette page.',
        variant: 'destructive'
      });
      navigate('/');
    }
  };
  const fetchPosts = async () => {
    const {
      data
    } = await supabase.from('blog_posts').select('*').order('published_at', {
      ascending: false,
      nullsFirst: false
    }).order('created_at', {
      ascending: false
    });
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
    const baseSlug = generateSlug(formData.slug || formData.title);
    const finalSlug = await ensureUniqueSlug(baseSlug, editing);
    const postData = {
      ...formData,
      slug: finalSlug,
      status: publishNow ? 'published' : 'draft',
      published_at: publishNow ? formData.published_at || new Date().toISOString() : null,
      author_id: user?.id
    };
    if (editing) {
      let {
        error
      } = await supabase.from('blog_posts').update(postData).eq('id', editing);

      // Gestion robuste des collisions de slug
      if (error && (error as any).code === '23505') {
        const newSlug = await ensureUniqueSlug(`${postData.slug}-${Date.now()}`, editing);
        const retry = await supabase.from('blog_posts').update({
          ...postData,
          slug: newSlug
        }).eq('id', editing);
        error = retry.error;
      }
      if (error) {
        toast({
          title: 'Erreur',
          description: error.message,
          variant: 'destructive'
        });
        return;
      }
      toast({
        title: publishNow ? 'Article publié' : 'Article mis à jour'
      });
    } else {
      let {
        error
      } = await supabase.from('blog_posts').insert([postData]);
      if (error && (error as any).code === '23505') {
        const newSlug = await ensureUniqueSlug(`${postData.slug}-${Date.now()}`);
        const retry = await supabase.from('blog_posts').insert([{
          ...postData,
          slug: newSlug
        }]);
        error = retry.error;
      }
      if (error) {
        toast({
          title: 'Erreur',
          description: error.message,
          variant: 'destructive'
        });
        return;
      }
      toast({
        title: publishNow ? 'Article publié' : 'Article créé en brouillon'
      });
    }
    fetchPosts();

    // Rester dans l'éditeur après toute sauvegarde (brouillon ou publication)
    toast({
      title: publishNow ? (editing ? 'Modifications publiées' : 'Article publié') : 'Brouillon sauvegardé',
      description: publishNow ? 'Vos modifications ont été publiées' : 'Vos modifications ont été enregistrées'
    });
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
      published_at: post.published_at ? new Date(post.published_at).toISOString().slice(0, 16) : ''
    });
    setEditing(post.id);
    setShowEditor(true);
    // Définir le contenu de l'éditeur après le render
    setTimeout(() => {
      if (contentRef.current) {
        contentRef.current.innerHTML = post.content;
      }
    }, 0);
  };
  const handleDelete = async (id: string) => {
    if (!confirm('Êtes-vous sûr de vouloir supprimer cet article ?')) return;
    const {
      error
    } = await supabase.from('blog_posts').delete().eq('id', id);
    if (error) {
      toast({
        title: 'Erreur',
        description: error.message,
        variant: 'destructive'
      });
      return;
    }
    toast({
      title: 'Article supprimé'
    });
    fetchPosts();
    setSelectedPosts([]);
  };
  const handleBulkDelete = async () => {
    if (selectedPosts.length === 0) return;
    if (!confirm(`Êtes-vous sûr de vouloir supprimer ${selectedPosts.length} article(s) ?`)) return;
    const {
      error
    } = await supabase.from('blog_posts').delete().in('id', selectedPosts);
    if (error) {
      toast({
        title: 'Erreur',
        description: error.message,
        variant: 'destructive'
      });
      return;
    }
    toast({
      title: `${selectedPosts.length} article(s) supprimé(s)`
    });
    setSelectedPosts([]);
    fetchPosts();
  };
  const handleBulkPublish = async (status: 'published' | 'draft') => {
    if (selectedPosts.length === 0) return;
    const {
      error
    } = await supabase.from('blog_posts').update({
      status,
      published_at: status === 'published' ? new Date().toISOString() : null
    }).in('id', selectedPosts);
    if (error) {
      toast({
        title: 'Erreur',
        description: error.message,
        variant: 'destructive'
      });
      return;
    }
    toast({
      title: status === 'published' ? `${selectedPosts.length} article(s) publié(s)` : `${selectedPosts.length} article(s) en brouillon`
    });
    setSelectedPosts([]);
    fetchPosts();
  };
  const toggleSelectAll = () => {
    if (selectedPosts.length === posts.length) {
      setSelectedPosts([]);
    } else {
      setSelectedPosts(posts.map(post => post.id));
    }
  };
  const toggleSelectPost = (postId: string) => {
    setSelectedPosts(prev => prev.includes(postId) ? prev.filter(id => id !== postId) : [...prev, postId]);
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
        const {
          error: uploadError
        } = await supabase.storage.from('blog-images').upload(filePath, file);
        if (uploadError) throw uploadError;
        const {
          data
        } = supabase.storage.from('blog-images').getPublicUrl(filePath);

        // Insérer l'image directement dans le contenu
        const imageTag = `<img src="${data.publicUrl}" alt="Image de l'article" style="max-width: 100%; height: auto; margin: 1rem 0;" />\n`;
        setFormData(prev => ({
          ...prev,
          content: prev.content + imageTag
        }));
      }
      toast({
        title: 'Images ajoutées',
        description: 'Les images ont été insérées dans votre article'
      });
    } catch (error: any) {
      toast({
        title: 'Erreur',
        description: error.message,
        variant: 'destructive'
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
      const {
        error: uploadError
      } = await supabase.storage.from('blog-images').upload(filePath, file);
      if (uploadError) throw uploadError;
      const {
        data
      } = supabase.storage.from('blog-images').getPublicUrl(filePath);
      setFormData(prev => ({
        ...prev,
        cover_image: data.publicUrl
      }));
      toast({
        title: 'Photo de couverture ajoutée',
        description: 'L\'image a été téléchargée avec succès'
      });
    } catch (error: any) {
      toast({
        title: 'Erreur',
        description: error.message,
        variant: 'destructive'
      });
    } finally {
      setUploadingCover(false);
    }
  };
  const insertFormatting = (format: string) => {
    const editor = contentRef.current;
    if (!editor) return;
    editor.focus();
    const selection = window.getSelection();
    if (!selection || selection.rangeCount === 0) return;
    const range = selection.getRangeAt(0);

    // Pour les styles de bloc (titres, paragraphes)
    if (['h1', 'h2', 'h3', 'h4', 'p'].includes(format)) {
      document.execCommand('formatBlock', false, format);
      setSelectedTextStyle(format);
      return;
    }

    // Pour le formatage inline
    switch (format) {
      case 'bold':
        document.execCommand('bold', false);
        break;
      case 'italic':
        document.execCommand('italic', false);
        break;
      case 'underline':
        document.execCommand('underline', false);
        break;
      case 'strikethrough':
        document.execCommand('strikeThrough', false);
        break;
      case 'link':
        // Sauvegarder la sélection actuelle
        const selection = window.getSelection();
        if (selection && selection.rangeCount > 0) {
          const range = selection.getRangeAt(0);
          if (!range.collapsed) {
            setSavedSelection(range.cloneRange());
            setShowLinkDialog(true);
          } else {
            toast({
              title: 'Sélectionnez du texte',
              description: 'Veuillez sélectionner le texte pour créer un lien'
            });
          }
        }
        break;
      case 'ul':
        document.execCommand('insertUnorderedList', false);
        break;
      case 'ol':
        document.execCommand('insertOrderedList', false);
        break;
      case 'quote':
        document.execCommand('formatBlock', false, 'blockquote');
        break;
      case 'align-left':
        document.execCommand('justifyLeft', false);
        break;
      case 'align-center':
        document.execCommand('justifyCenter', false);
        break;
      case 'align-right':
        document.execCommand('justifyRight', false);
        break;
      case 'align-justify':
        document.execCommand('justifyFull', false);
        break;
    }

    // Mettre à jour le contenu
    updateContent();
  };
  const applyTextStyle = (style: string) => {
    setSelectedTextStyle(style);
    insertFormatting(style);
  };
  const updateContent = () => {
    const editor = contentRef.current;
    if (editor) {
      const newContent = editor.innerHTML;
      // Ne mettre à jour que si le contenu a réellement changé
      // Évite les re-renders inutiles qui font sauter le curseur
      if (newContent !== formData.content) {
        setFormData(prev => ({
          ...prev,
          content: newContent
        }));
      }
    }
  };
  const handleContentChange = () => {
    updateContent();
  };
  const handleInsertLink = () => {
    if (linkUrl && savedSelection) {
      const editor = contentRef.current;
      if (editor) {
        editor.focus();

        // Restaurer la sélection sauvegardée
        const selection = window.getSelection();
        if (selection) {
          selection.removeAllRanges();
          selection.addRange(savedSelection);

          // Insérer le lien
          document.execCommand('createLink', false, linkUrl);
          updateContent();
        }
      }
    }
    setShowLinkDialog(false);
    setLinkUrl('');
    setSavedSelection(null);
  };
  if (!isAdmin) {
    return null;
  }
  return <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b sticky top-0 z-10">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold"> Blog Admin</h1>
          <Button onClick={handleLogout} variant="outline">
            <LogOut className="w-4 h-4 mr-2" />
            Déconnexion
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-6 py-8">
        {!showEditor ? <div className="bg-white rounded-xl shadow p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Mes Articles</h2>
              <Button onClick={() => {
            setFormData({
              title: '',
              slug: '',
              excerpt: '',
              content: '',
              cover_image: '',
              status: 'draft',
              category: 'article',
              published_at: ''
            });
            setEditing(null);
            setShowEditor(true);
          }}>
                <Plus className="w-4 h-4 mr-2" />
                Nouvel article
              </Button>
            </div>

            {selectedPosts.length > 0 && <div className="mb-4 p-4 bg-blue-50 border border-blue-200 rounded-lg flex items-center justify-between">
                <span className="text-sm font-medium">
                  {selectedPosts.length} article(s) sélectionné(s)
                </span>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" onClick={() => handleBulkPublish('published')}>
                    Publier
                  </Button>
                  <Button size="sm" variant="outline" onClick={() => handleBulkPublish('draft')}>
                    Mettre en brouillon
                  </Button>
                  <Button size="sm" variant="destructive" onClick={handleBulkDelete}>
                    <Trash2 className="w-4 h-4 mr-2" />
                    Supprimer
                  </Button>
                </div>
              </div>}

            {posts.length > 0 && <div className="mb-3 flex items-center gap-2 pb-2 border-b">
                <input type="checkbox" checked={selectedPosts.length === posts.length} onChange={toggleSelectAll} className="w-4 h-4 rounded border-gray-300" />
                <span className="text-sm text-muted-foreground">
                  Tout sélectionner
                </span>
              </div>}

            <div className="space-y-3">{posts.map(post => <div key={post.id} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                  <div className="flex items-start gap-4">
                    <input type="checkbox" checked={selectedPosts.includes(post.id)} onChange={e => {
                e.stopPropagation();
                toggleSelectPost(post.id);
              }} className="w-4 h-4 mt-1 rounded border-gray-300" onClick={e => e.stopPropagation()} />
                    {post.cover_image && <div className="w-32 h-24 flex-shrink-0 rounded-lg overflow-hidden border cursor-pointer" onClick={() => handleEdit(post)}>
                        <img src={post.cover_image} alt={post.title} className="w-full h-full object-cover" />
                      </div>}
                    <div className="flex-1 min-w-0 cursor-pointer" onClick={() => handleEdit(post)}>
                      <h3 className="font-semibold text-lg">{post.title}</h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        {post.status === 'published' ? '✅ Publié' : '📝 Brouillon'}
                        {post.category && <span className="ml-2">• {post.category}</span>}
                        {post.published_at && <span className="ml-2">
                            • {new Date(post.published_at).toLocaleDateString('fr-FR', {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric'
                    })}
                          </span>}
                      </p>
                      {post.excerpt && <p className="text-sm text-gray-600 mt-2 line-clamp-2">{post.excerpt}</p>}
                    </div>
                    <div className="flex gap-2 ml-4">
                      {post.status === 'published' && <Button size="sm" variant="ghost" onClick={e => {
                  e.stopPropagation();
                  window.open(`/blog/${post.slug}`, '_blank');
                }}>
                          <Eye className="w-4 h-4" />
                        </Button>}
                      <Button size="sm" variant="ghost" onClick={e => {
                  e.stopPropagation();
                  handleEdit(post);
                }}>
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="ghost" onClick={e => {
                  e.stopPropagation();
                  handleDelete(post.id);
                }}>
                        <Trash2 className="w-4 h-4 text-destructive" />
                      </Button>
                    </div>
                  </div>
                </div>)}

              {posts.length === 0 && <div className="text-center py-12">
                  <p className="text-muted-foreground mb-4">Aucun article pour le moment</p>
                  <Button onClick={() => setShowEditor(true)}>
                    <Plus className="w-4 h-4 mr-2" />
                    Créer votre premier article
                  </Button>
                </div>}
            </div>
          </div> : <div className="bg-white rounded-xl shadow p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">
                {editing ? 'Modifier l\'article' : 'Nouvel article'}
              </h2>
              <Button variant="outline" onClick={() => {
            setShowEditor(false);
            setShowPreview(false);
            setEditing(null);
            setFormData({
              title: '',
              slug: '',
              excerpt: '',
              content: '',
              cover_image: '',
              status: 'draft',
              category: 'article',
              published_at: ''
            });
          }}>
                Retour à la liste
              </Button>
            </div>

            {showPreview ? <div className="space-y-6">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h3 className="font-semibold text-blue-900 mb-2">Mode Aperçu</h3>
                  <p className="text-sm text-blue-700">Voici comment votre article apparaîtra aux lecteurs</p>
                </div>

                <div className="bg-white border rounded-lg p-8">
                  <h1 className="text-4xl font-bold mb-4">{formData.title || 'Titre de l\'article'}</h1>
                  {formData.published_at && <p className="text-sm text-muted-foreground mb-6">
                      Publié le {new Date(formData.published_at).toLocaleDateString('fr-FR', {
                day: 'numeric',
                month: 'long',
                year: 'numeric'
              })}
                    </p>}
                  {formData.excerpt && <p className="text-lg text-gray-600 mb-6 italic">{formData.excerpt}</p>}
                  <div className="prose max-w-none" dangerouslySetInnerHTML={{
              __html: formData.content || '<p>Votre contenu apparaîtra ici...</p>'
            }} />
                </div>

                <div className="flex gap-2">
                  <Button onClick={() => setShowPreview(false)}>
                    <Edit className="w-4 h-4 mr-2" />
                    Retour à l&apos;édition
                  </Button>
                </div>
              </div> : <form onSubmit={e => handleSubmit(e, false)} className="space-y-4">
              <div>
                <Label htmlFor="title">Titre</Label>
                <Input id="title" value={formData.title} onChange={e => {
              const newTitle = e.target.value;
              setFormData({
                ...formData,
                title: newTitle,
                slug: generateSlug(newTitle)
              });
            }} required />
              </div>

              <div>
                <Label htmlFor="slug">Slug (URL)</Label>
                <Input id="slug" value={formData.slug} onChange={e => setFormData({
              ...formData,
              slug: e.target.value
            })} placeholder="mon-article" required />
                <p className="text-xs text-muted-foreground mt-1">
                  Généré automatiquement depuis le titre, mais vous pouvez le modifier
                </p>
              </div>

              <div>
                <Label htmlFor="excerpt">Résumé</Label>
                <Textarea id="excerpt" value={formData.excerpt} onChange={e => setFormData({
              ...formData,
              excerpt: e.target.value
            })} rows={3} />
              </div>

              <div>
                <Label>Photo de couverture</Label>
                <div className="space-y-3">
                  {formData.cover_image && <div className="relative w-full h-48 rounded-lg overflow-hidden border">
                      <img src={formData.cover_image} alt="Couverture" className="w-full h-full object-cover" />
                      <Button type="button" variant="destructive" size="sm" className="absolute top-2 right-2" onClick={() => setFormData({
                  ...formData,
                  cover_image: ''
                })}>
                        Supprimer
                      </Button>
                    </div>}
                  <div className="flex items-center gap-2">
                    <Input ref={coverInputRef} type="file" accept="image/*" onChange={handleCoverUpload} disabled={uploadingCover} className="hidden" />
                    <Button type="button" disabled={uploadingCover} variant="secondary" onClick={() => coverInputRef.current?.click()} className="w-full">
                      <Upload className="w-4 h-4 mr-2" />
                      {uploadingCover ? 'Upload...' : formData.cover_image ? 'Changer l\'image' : 'Ajouter une image'}
                    </Button>
                  </div>
                </div>
              </div>

              <div>
                <Label>Ajouter des images</Label>
                <div className="flex items-center gap-2">
                  <Input ref={fileInputRef} type="file" accept="image/*" multiple onChange={handleImageUpload} disabled={uploading} className="hidden" />
                  <Button type="button" disabled={uploading} variant="secondary" onClick={() => fileInputRef.current?.click()} className="w-full">
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
                <div className="border rounded-lg overflow-hidden bg-white">
                  {/* Barre d'outils inspirée de l'image */}
                  <div className="border-b bg-gray-50 p-2 flex items-center gap-1 flex-wrap">
                    {/* Dropdown de style de texte */}
                    <Select value={selectedTextStyle} onValueChange={applyTextStyle}>
                      <SelectTrigger className="w-[140px] bg-white">
                        <SelectValue placeholder="Style" />
                      </SelectTrigger>
                      <SelectContent className="bg-white z-50">
                        <SelectItem value="p">Paragraphe</SelectItem>
                        <SelectItem value="h1">Titre 1</SelectItem>
                        <SelectItem value="h2">Titre 2</SelectItem>
                        <SelectItem value="h3">Titre 3</SelectItem>
                        <SelectItem value="h4">Titre 4</SelectItem>
                      </SelectContent>
                    </Select>

                    <div className="w-px h-6 bg-gray-300 mx-1" />

                    {/* Formatage de texte */}
                    <Button type="button" size="sm" variant="ghost" onClick={() => insertFormatting('bold')} title="Gras" className="h-8 w-8 p-0">
                      <Bold className="w-4 h-4" />
                    </Button>
                    <Button type="button" size="sm" variant="ghost" onClick={() => insertFormatting('italic')} title="Italique" className="h-8 w-8 p-0">
                      <Italic className="w-4 h-4" />
                    </Button>
                    <Button type="button" size="sm" variant="ghost" onClick={() => insertFormatting('underline')} title="Souligner" className="h-8 w-8 p-0">
                      <Underline className="w-4 h-4" />
                    </Button>
                    <Button type="button" size="sm" variant="ghost" onClick={() => insertFormatting('strikethrough')} title="Barré" className="h-8 w-8 p-0">
                      <Strikethrough className="w-4 h-4" />
                    </Button>

                    <div className="w-px h-6 bg-gray-300 mx-1" />

                    {/* Lien */}
                    <Button type="button" size="sm" variant="ghost" onClick={() => insertFormatting('link')} title="Insérer un lien" className="h-8 w-8 p-0">
                      <Link2 className="w-4 h-4" />
                    </Button>

                    <div className="w-px h-6 bg-gray-300 mx-1" />

                    {/* Alignement */}
                    <Button type="button" size="sm" variant="ghost" onClick={() => insertFormatting('align-left')} title="Aligner à gauche" className="h-8 w-8 p-0">
                      <AlignLeft className="w-4 h-4" />
                    </Button>
                    <Button type="button" size="sm" variant="ghost" onClick={() => insertFormatting('align-center')} title="Centrer" className="h-8 w-8 p-0">
                      <AlignCenter className="w-4 h-4" />
                    </Button>
                    <Button type="button" size="sm" variant="ghost" onClick={() => insertFormatting('align-right')} title="Aligner à droite" className="h-8 w-8 p-0">
                      <AlignRight className="w-4 h-4" />
                    </Button>
                    <Button type="button" size="sm" variant="ghost" onClick={() => insertFormatting('align-justify')} title="Justifier" className="h-8 w-8 p-0">
                      <AlignJustify className="w-4 h-4" />
                    </Button>

                    <div className="w-px h-6 bg-gray-300 mx-1" />

                    {/* Citation */}
                    <Button type="button" size="sm" variant="ghost" onClick={() => insertFormatting('quote')} title="Citation" className="h-8 w-8 p-0">
                      <Quote className="w-4 h-4" />
                    </Button>

                    {/* Listes */}
                    <Button type="button" size="sm" variant="ghost" onClick={() => insertFormatting('ul')} title="Liste à puces" className="h-8 w-8 p-0">
                      <List className="w-4 h-4" />
                    </Button>
                    <Button type="button" size="sm" variant="ghost" onClick={() => insertFormatting('ol')} title="Liste numérotée" className="h-8 w-8 p-0">
                      <ListOrdered className="w-4 h-4" />
                    </Button>

                    <div className="w-px h-6 bg-gray-300 mx-1" />

                    {/* Code */}
                    <Button type="button" size="sm" variant="ghost" onClick={() => insertFormatting('code')} title="Code" className="h-8 w-8 p-0">
                      <Code className="w-4 h-4" />
                    </Button>
                  </div>

                  {/* Zone de texte avec éditeur visuel */}
                  <div ref={contentRef as any} contentEditable suppressContentEditableWarning onInput={handleContentChange} className="min-h-[400px] p-4 focus:outline-none prose max-w-none" style={{
                border: 'none',
                resize: 'vertical',
                overflow: 'auto'
              }} />
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  Sélectionnez du texte et utilisez les boutons de formatage pour styliser votre contenu
                </p>
              </div>

              <div>
                <Label htmlFor="published_at">Date de publication</Label>
                <Input id="published_at" type="datetime-local" value={formData.published_at} onChange={e => setFormData({
              ...formData,
              published_at: e.target.value
            })} />
                <p className="text-xs text-muted-foreground mt-1">
                  Laisser vide pour définir automatiquement à maintenant lors de la publication
                </p>
              </div>

              <div>
                <Label htmlFor="status">Statut</Label>
                <select id="status" value={formData.status} onChange={e => setFormData({
              ...formData,
              status: e.target.value
            })} className="w-full border rounded-md px-3 py-2">
                  <option value="draft">Brouillon</option>
                  <option value="published">Publié</option>
                </select>
              </div>

              <div>
                <Label htmlFor="category">Catégorie</Label>
                <select id="category" value={formData.category} onChange={e => setFormData({
              ...formData,
              category: e.target.value
            })} className="w-full border rounded-md px-3 py-2">
                  <option value="article">Article</option>
                  <option value="video">Vidéo</option>
                  <option value="tutorial">Tutoriel</option>
                  <option value="news">Actualité</option>
                  <option value="guide">Guide</option>
                </select>
              </div>

              <div className="flex gap-2 pt-4">
                <Button type="button" variant="ghost" onClick={() => {
                  setShowEditor(false);
                  setShowPreview(false);
                  setEditing(null);
                  setFormData({
                    title: '',
                    slug: '',
                    excerpt: '',
                    content: '',
                    cover_image: '',
                    status: 'draft',
                    category: 'article',
                    published_at: ''
                  });
                }}>
                  Retour à la liste
                </Button>
                <Button type="button" variant="outline" onClick={() => setShowPreview(true)}>
                  <Eye className="w-4 h-4 mr-2" />
                  Aperçu
                </Button>
                <Button type="submit" variant="secondary" className="flex-1">
                  Enregistrer brouillon
                </Button>
                <Button type="button" onClick={e => handleSubmit(e as any, true)} className="flex-1">
                  {editing && formData.status === 'published' ? 'Mettre à jour' : 'Publier'}
                </Button>
              </div>
            </form>}
          </div>}
      </main>

      {/* Dialog pour insérer un lien */}
      <Dialog open={showLinkDialog} onOpenChange={setShowLinkDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Insérer un lien</DialogTitle>
            <DialogDescription>
              Entrez l'URL du lien:
            </DialogDescription>
          </DialogHeader>
          <div className="py-4">
            <Input type="url" placeholder="https://exemple.com" value={linkUrl} onChange={e => setLinkUrl(e.target.value)} onKeyDown={e => {
            if (e.key === 'Enter') {
              e.preventDefault();
              handleInsertLink();
            }
          }} autoFocus />
          </div>
          <DialogFooter className="gap-2 sm:gap-0">
            <Button type="button" variant="outline" onClick={() => {
            setShowLinkDialog(false);
            setLinkUrl('');
          }}>
              Annuler
            </Button>
            <Button type="button" onClick={handleInsertLink}>
              OK
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>;
};
export default AdminBlog;