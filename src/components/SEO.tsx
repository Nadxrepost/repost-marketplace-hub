import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
  structuredData?: object;
}

const SEO = ({ 
  title = 'Repost - Solution SaaS pour la Seconde Main',
  description = 'Centralisez vos stocks, automatisez vos publications et mesurez vos performances sur toutes les plateformes de seconde main.',
  canonical,
  ogImage = '/lovable-uploads/254b0023-f77e-4b19-88d7-097a1d29a292.png',
  structuredData
}: SEOProps) => {
  const location = useLocation();

  useEffect(() => {
    // Update title
    document.title = title;

    // Update meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', description);

    // Update OG tags
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      ogTitle = document.createElement('meta');
      ogTitle.setAttribute('property', 'og:title');
      document.head.appendChild(ogTitle);
    }
    ogTitle.setAttribute('content', title);

    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (!ogDesc) {
      ogDesc = document.createElement('meta');
      ogDesc.setAttribute('property', 'og:description');
      document.head.appendChild(ogDesc);
    }
    ogDesc.setAttribute('content', description);

    let ogImageTag = document.querySelector('meta[property="og:image"]');
    if (!ogImageTag) {
      ogImageTag = document.createElement('meta');
      ogImageTag.setAttribute('property', 'og:image');
      document.head.appendChild(ogImageTag);
    }
    ogImageTag.setAttribute('content', ogImage);

    // Update canonical URL
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    const canonicalUrl = canonical || `${window.location.origin}${location.pathname}`;
    
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonicalUrl);

    // Add structured data
    let structuredDataScript = document.querySelector('script[type="application/ld+json"]');
    if (structuredData) {
      if (!structuredDataScript) {
        structuredDataScript = document.createElement('script');
        structuredDataScript.setAttribute('type', 'application/ld+json');
        document.head.appendChild(structuredDataScript);
      }
      structuredDataScript.textContent = JSON.stringify(structuredData);
    } else if (structuredDataScript) {
      structuredDataScript.remove();
    }
  }, [title, description, canonical, ogImage, structuredData, location.pathname]);

  return null;
};

export default SEO;
