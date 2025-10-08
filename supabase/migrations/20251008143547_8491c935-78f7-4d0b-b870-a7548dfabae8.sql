-- Créer un bucket pour les images de blog
insert into storage.buckets (id, name, public)
values ('blog-images', 'blog-images', true);

-- Policy pour permettre aux admins de voir toutes les images
create policy "Admins can view all blog images"
on storage.objects
for select
using (
  bucket_id = 'blog-images' 
  and exists (
    select 1 from public.user_roles 
    where user_id = auth.uid() 
    and role = 'admin'
  )
);

-- Policy pour permettre à tout le monde de voir les images (car bucket public)
create policy "Anyone can view blog images"
on storage.objects
for select
using (bucket_id = 'blog-images');

-- Policy pour permettre aux admins d'uploader des images
create policy "Admins can upload blog images"
on storage.objects
for insert
with check (
  bucket_id = 'blog-images' 
  and exists (
    select 1 from public.user_roles 
    where user_id = auth.uid() 
    and role = 'admin'
  )
);

-- Policy pour permettre aux admins de supprimer des images
create policy "Admins can delete blog images"
on storage.objects
for delete
using (
  bucket_id = 'blog-images' 
  and exists (
    select 1 from public.user_roles 
    where user_id = auth.uid() 
    and role = 'admin'
  )
);