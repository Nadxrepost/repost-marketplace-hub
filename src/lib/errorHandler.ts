// User-friendly error messages mapping
const USER_FRIENDLY_ERRORS: Record<string, string> = {
  'already registered': 'Cet email est déjà enregistré. Essayez de vous connecter.',
  'invalid login credentials': 'Email ou mot de passe incorrect.',
  'not authenticated': 'Veuillez vous connecter.',
  'not authorized': 'Vous n\'avez pas la permission d\'effectuer cette action.',
  'jwt expired': 'Votre session a expiré. Veuillez vous reconnecter.',
  'row level security': 'Accès refusé.',
  'violates foreign key': 'Cette action ne peut pas être effectuée.',
  'duplicate key value': 'Cette entrée existe déjà.',
  'email not confirmed': 'Veuillez confirmer votre email avant de vous connecter.',
  'invalid email': 'Adresse email invalide.',
  'password should be': 'Le mot de passe doit contenir au moins 6 caractères.',
  'network': 'Erreur de connexion. Vérifiez votre connexion internet.',
  'timeout': 'La requête a expiré. Veuillez réessayer.',
  'no authorization header': 'Authentification requise.',
  'admin role required': 'Accès réservé aux administrateurs.',
};

export const getUserFriendlyError = (error: unknown): string => {
  const errorMsg = (error as { message?: string })?.message?.toLowerCase() || '';
  
  // Check for known patterns
  for (const [pattern, userMsg] of Object.entries(USER_FRIENDLY_ERRORS)) {
    if (errorMsg.includes(pattern)) {
      return userMsg;
    }
  }
  
  // Log full error for debugging (only in development)
  console.error('Unhandled error:', error);
  
  // Return generic message
  return 'Une erreur est survenue. Veuillez réessayer.';
};

// For edge functions - returns appropriate HTTP status codes
export const getErrorResponse = (error: unknown): { message: string; status: number } => {
  const errorMsg = (error as { message?: string })?.message?.toLowerCase() || '';
  
  if (errorMsg.includes('not authenticated') || errorMsg.includes('no authorization')) {
    return { message: 'Authentification requise.', status: 401 };
  }
  
  if (errorMsg.includes('not authorized') || errorMsg.includes('admin role required')) {
    return { message: 'Accès non autorisé.', status: 403 };
  }
  
  if (errorMsg.includes('not found')) {
    return { message: 'Ressource non trouvée.', status: 404 };
  }
  
  return { message: 'Une erreur est survenue.', status: 500 };
};
