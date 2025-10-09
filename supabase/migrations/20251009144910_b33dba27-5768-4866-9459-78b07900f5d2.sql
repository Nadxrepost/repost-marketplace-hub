-- Créer la table des commentaires
CREATE TABLE public.comments (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  blog_post_id UUID NOT NULL REFERENCES public.blog_posts(id) ON DELETE CASCADE,
  user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  author_name TEXT NOT NULL,
  author_email TEXT,
  content TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'approved',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Activer RLS
ALTER TABLE public.comments ENABLE ROW LEVEL SECURITY;

-- Politique: Tout le monde peut voir les commentaires approuvés
CREATE POLICY "Anyone can view approved comments"
ON public.comments
FOR SELECT
USING (status = 'approved');

-- Politique: Les utilisateurs authentifiés peuvent créer des commentaires
CREATE POLICY "Authenticated users can create comments"
ON public.comments
FOR INSERT
TO authenticated
WITH CHECK (auth.uid() = user_id);

-- Politique: Les utilisateurs peuvent modifier leurs propres commentaires
CREATE POLICY "Users can update their own comments"
ON public.comments
FOR UPDATE
TO authenticated
USING (auth.uid() = user_id);

-- Politique: Les utilisateurs peuvent supprimer leurs propres commentaires
CREATE POLICY "Users can delete their own comments"
ON public.comments
FOR DELETE
TO authenticated
USING (auth.uid() = user_id);

-- Politique: Les admins peuvent tout voir
CREATE POLICY "Admins can view all comments"
ON public.comments
FOR SELECT
TO authenticated
USING (has_role(auth.uid(), 'admin'::app_role));

-- Politique: Les admins peuvent tout modifier (pour modération)
CREATE POLICY "Admins can update all comments"
ON public.comments
FOR UPDATE
TO authenticated
USING (has_role(auth.uid(), 'admin'::app_role));

-- Politique: Les admins peuvent tout supprimer
CREATE POLICY "Admins can delete all comments"
ON public.comments
FOR DELETE
TO authenticated
USING (has_role(auth.uid(), 'admin'::app_role));

-- Trigger pour updated_at
CREATE TRIGGER update_comments_updated_at
BEFORE UPDATE ON public.comments
FOR EACH ROW
EXECUTE FUNCTION public.update_blog_post_updated_at();

-- Index pour améliorer les performances
CREATE INDEX idx_comments_blog_post_id ON public.comments(blog_post_id);
CREATE INDEX idx_comments_user_id ON public.comments(user_id);
CREATE INDEX idx_comments_status ON public.comments(status);