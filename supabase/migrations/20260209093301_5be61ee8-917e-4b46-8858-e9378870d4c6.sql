-- Fix Security Issue 1: Prevent email exposure in comments
-- Create a public view that excludes author_email field

CREATE VIEW public.comments_public
WITH (security_invoker=on) AS
  SELECT 
    id,
    blog_post_id,
    user_id,
    author_name,
    content,
    status,
    created_at,
    updated_at
  FROM public.comments
  WHERE status = 'approved';

-- Grant SELECT on the view to anon and authenticated roles
GRANT SELECT ON public.comments_public TO anon, authenticated;

-- Fix Security Issue 2: Restrict comment creation to authenticated users only
-- Drop the overly permissive policy
DROP POLICY IF EXISTS "Anyone can create comments" ON public.comments;

-- Create a new policy that requires authentication
CREATE POLICY "Authenticated users can create comments"
ON public.comments
FOR INSERT
TO authenticated
WITH CHECK (
  auth.uid() = user_id 
  AND user_id IS NOT NULL
);