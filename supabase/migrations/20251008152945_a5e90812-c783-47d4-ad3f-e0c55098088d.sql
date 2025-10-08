-- Add category column to blog_posts table
ALTER TABLE public.blog_posts 
ADD COLUMN category text NOT NULL DEFAULT 'article';

-- Add a comment to describe the column
COMMENT ON COLUMN public.blog_posts.category IS 'Category of the blog post (e.g., article, video, tutorial, etc.)';