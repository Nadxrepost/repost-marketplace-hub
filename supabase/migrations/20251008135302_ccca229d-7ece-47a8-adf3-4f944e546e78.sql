-- Fix contact_submissions SELECT policy to restrict to admins only
DROP POLICY IF EXISTS "Only authenticated users can view submissions" ON public.contact_submissions;

CREATE POLICY "Only admins can view submissions"
ON public.contact_submissions
FOR SELECT
USING (has_role(auth.uid(), 'admin'::app_role));

-- Add missing UPDATE and DELETE policies for user_roles table
CREATE POLICY "Only admins can update roles"
ON public.user_roles
FOR UPDATE
USING (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Only admins can delete roles"
ON public.user_roles
FOR DELETE
USING (has_role(auth.uid(), 'admin'::app_role));