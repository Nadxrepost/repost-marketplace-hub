-- Make message column nullable since it's being removed from the form
ALTER TABLE public.contact_submissions
ALTER COLUMN message DROP NOT NULL;