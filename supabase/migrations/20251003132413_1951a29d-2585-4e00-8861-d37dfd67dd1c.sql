-- Update contact_submissions table to match the actual form fields
ALTER TABLE public.contact_submissions
DROP COLUMN name,
DROP COLUMN company,
DROP COLUMN subject;

ALTER TABLE public.contact_submissions
ADD COLUMN prenom TEXT NOT NULL DEFAULT '',
ADD COLUMN nom TEXT NOT NULL DEFAULT '',
ADD COLUMN entreprise TEXT,
ADD COLUMN telephone TEXT,
ADD COLUMN connaissance TEXT,
ADD COLUMN objectif TEXT,
ADD COLUMN appel_equipe TEXT;

-- Remove default values after adding columns
ALTER TABLE public.contact_submissions
ALTER COLUMN prenom DROP DEFAULT,
ALTER COLUMN nom DROP DEFAULT;