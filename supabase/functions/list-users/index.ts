import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.58.0'
import { corsHeaders } from '../_shared/cors.ts'

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const authHeader = req.headers.get('Authorization')
    if (!authHeader) {
      throw new Error('No authorization header')
    }

    // Créer un client avec les credentials de l'utilisateur
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_ANON_KEY') ?? '',
      { global: { headers: { Authorization: authHeader } } }
    )

    // Vérifier que l'utilisateur est admin
    const { data: { user } } = await supabaseClient.auth.getUser()
    if (!user) {
      throw new Error('Not authenticated')
    }

    const { data: roleData, error: roleError } = await supabaseClient
      .from('user_roles')
      .select('role')
      .eq('user_id', user.id)
      .eq('role', 'admin')
      .maybeSingle()

    if (roleError || !roleData) {
      throw new Error('Not authorized - admin role required')
    }

    // Créer un client admin avec service role key
    const supabaseAdmin = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    )

    // Lister tous les utilisateurs
    const { data: { users }, error: usersError } = await supabaseAdmin.auth.admin.listUsers()

    if (usersError) {
      throw usersError
    }

    // Récupérer les rôles admin
    const { data: roles } = await supabaseAdmin
      .from('user_roles')
      .select('user_id, role')
      .eq('role', 'admin')

    const adminIds = new Set(roles?.map(r => r.user_id) || [])

    // Formater les données
    const usersWithRoles = users.map(u => ({
      id: u.id,
      email: u.email || 'N/A',
      created_at: u.created_at,
      is_admin: adminIds.has(u.id),
    }))

    return new Response(
      JSON.stringify({ users: usersWithRoles }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  } catch (error) {
    console.error('list-users error:', error);
    
    const errorMsg = (error as { message?: string })?.message?.toLowerCase() || '';
    let statusCode = 500;
    let message = 'Une erreur est survenue.';
    
    if (errorMsg.includes('not authenticated') || errorMsg.includes('no authorization')) {
      statusCode = 401;
      message = 'Authentification requise.';
    } else if (errorMsg.includes('not authorized') || errorMsg.includes('admin role required')) {
      statusCode = 403;
      message = 'Accès non autorisé.';
    }
    
    return new Response(
      JSON.stringify({ error: message }),
      { 
        status: statusCode,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    )
  }
})
