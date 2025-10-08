import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { User, Session } from '@supabase/supabase-js';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [isRecovery, setIsRecovery] = useState(false);
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();
  const { toast } = useToast();
useEffect(() => {
  // Détecter un lien de récupération de mot de passe
  const isRec = window.location.hash.includes('type=recovery');
  setIsRecovery(isRec);

  const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
    setSession(session);
    setUser(session?.user ?? null);

    if (event === 'PASSWORD_RECOVERY') {
      setIsRecovery(true);
      return; // ne pas rediriger, on affiche le formulaire de nouveau mot de passe
    }

    // Rediriger seulement hors mode recovery
    if (session?.user && !isRec && !isRecovery) {
      navigate('/admin/blog');
    }
  });

  // Vérifier une session existante
  supabase.auth.getSession().then(({ data: { session } }) => {
    setSession(session);
    setUser(session?.user ?? null);
    if (session?.user && !isRec && !isRecovery) {
      navigate('/admin/blog');
    }
  });

  return () => subscription.unsubscribe();
}, [navigate]);

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const normalizedEmail = email.trim().toLowerCase();
      if (isLogin) {
        const { error } = await supabase.auth.signInWithPassword({
          email: normalizedEmail,
          password,
        });

        if (error) throw error;

        toast({
          title: 'Connexion réussie',
          description: 'Bienvenue !',
        });
      } else {
        const redirectUrl = `${window.location.origin}/admin/blog`;
        const { error } = await supabase.auth.signUp({
          email: normalizedEmail,
          password,
          options: { emailRedirectTo: redirectUrl },
        });

        if (error) throw error;

        toast({
          title: 'Compte créé',
          description: 'Vérifiez votre email pour confirmer votre compte.',
        });
      }
    } catch (error: any) {
      const message = (error?.message || '').toString();
      if (message.toLowerCase().includes('already registered')) {
        // L'utilisateur existe déjà: basculer en mode connexion pour une meilleure UX
        setIsLogin(true);
        toast({
          title: 'Compte déjà existant',
          description: 'Cet email est déjà inscrit. Connectez-vous avec vos identifiants.',
        });
      } else {
        toast({
          title: 'Erreur',
          description: message,
          variant: 'destructive',
        });
      }
    } finally {
      setLoading(false);
    }
};

  const handleResetPassword = async () => {
    if (!email) {
      toast({
        title: 'Entrez votre email',
        description: "Saisissez votre email puis cliquez sur 'Mot de passe oublié'",
      });
      return;
    }
    setLoading(true);
    try {
      const redirectTo = `${window.location.origin}/auth`;
      const normalizedEmail = email.trim().toLowerCase();
      const { error } = await supabase.auth.resetPasswordForEmail(normalizedEmail, { redirectTo });
      if (error) throw error;
      toast({
        title: 'Email envoyé',
        description: 'Consultez votre boîte mail pour réinitialiser votre mot de passe.',
      });
    } catch (error: any) {
      toast({ title: 'Erreur', description: error.message, variant: 'destructive' });
    } finally {
      setLoading(false);
    }
  };

  const handleUpdatePassword = async (e: React.FormEvent) => {
    e.preventDefault();
    if (newPassword.length < 6) {
      toast({ title: 'Mot de passe trop court', description: '6 caractères minimum.' });
      return;
    }
    if (newPassword !== confirmPassword) {
      toast({ title: 'Les mots de passe ne correspondent pas', description: 'Veuillez retaper le même mot de passe.' });
      return;
    }
    setLoading(true);
    try {
      const { error } = await supabase.auth.updateUser({ password: newPassword });
      if (error) throw error;
      setIsRecovery(false);
      setNewPassword('');
      setConfirmPassword('');
      toast({ title: 'Mot de passe mis à jour', description: 'Vous êtes connecté.' });
      navigate('/admin/blog');
    } catch (error: any) {
      toast({ title: 'Erreur', description: error.message, variant: 'destructive' });
    } finally {
      setLoading(false);
    }
  };

  const handleMagicLink = async () => {
    if (!email) {
      toast({ title: 'Entrez votre email', description: "Saisissez votre email pour recevoir un lien magique." });
      return;
    }
    setLoading(true);
    try {
      const redirectTo = `${window.location.origin}/admin/blog`;
      const normalizedEmail = email.trim().toLowerCase();
      const { error } = await supabase.auth.signInWithOtp({
        email: normalizedEmail,
        options: { emailRedirectTo: redirectTo },
      });
      if (error) throw error;
      toast({ title: 'Lien envoyé', description: 'Vérifiez votre email et cliquez sur le lien pour vous connecter.' });
    } catch (error: any) {
      toast({ title: 'Erreur', description: error.message, variant: 'destructive' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-gray-50 to-white px-6">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h1 className="text-3xl font-bold text-center mb-2">
            {isLogin ? 'Connexion' : 'Inscription'}
          </h1>
          <p className="text-center text-muted-foreground mb-8">
            Administration du blog Repost
          </p>

{isRecovery ? (
            <form onSubmit={handleUpdatePassword} className="space-y-4">
              <div>
                <Label htmlFor="new_password">Nouveau mot de passe</Label>
                <Input
                  id="new_password"
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  required
                  minLength={6}
                />
              </div>
              <div>
                <Label htmlFor="confirm_password">Confirmer le mot de passe</Label>
                <Input
                  id="confirm_password"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  minLength={6}
                />
              </div>
              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? 'Chargement...' : 'Définir le nouveau mot de passe'}
              </Button>
            </form>
          ) : (
            <>
              <form onSubmit={handleAuth} className="space-y-4">
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="vous@exemple.com"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="password">Mot de passe</Label>
                  <Input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    required
                    minLength={6}
                  />
                </div>

                <div className="text-right">
                  <button
                    type="button"
                    onClick={handleResetPassword}
                    className="text-sm text-primary hover:underline"
                  >
                    Mot de passe oublié ?
                  </button>
                </div>

                <Button type="submit" className="w-full" disabled={loading}>
                  {loading ? 'Chargement...' : isLogin ? 'Se connecter' : "S'inscrire"}
                </Button>

                <Button type="button" variant="outline" className="w-full mt-2" onClick={handleMagicLink} disabled={loading}>
                  Recevoir un lien magique
                </Button>
              </form>

              <div className="mt-6 text-center">
                <button
                  onClick={() => setIsLogin(!isLogin)}
                  className="text-primary hover:underline"
                >
                  {isLogin ? "Pas encore de compte ? S'inscrire" : 'Déjà un compte ? Se connecter'}
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Auth;
