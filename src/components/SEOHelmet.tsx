import React from 'react';
import { useLocation } from 'react-router-dom';

interface SEOHelmetProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
}

const SEOHelmet: React.FC<SEOHelmetProps> = ({
  title,
  description,
  keywords,
  canonicalUrl,
  ogImage
}) => {
  const location = useLocation();
  const currentUrl = `https://aaronmichaelservices.com${location.pathname}`;
  
  React.useEffect(() => {
    // Update title
    if (title) {
      document.title = title;
    }
    
    // Set favicon for all pages
    let favicon = document.querySelector('link[rel="icon"]') as HTMLLinkElement;
    if (favicon) {
      favicon.href = '/favicon.ico';
    } else {
      favicon = document.createElement('link');
      favicon.rel = 'icon';
      favicon.type = 'image/x-icon';
      favicon.href = '/favicon.ico';
      document.head.appendChild(favicon);
    }
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription && description) {
      metaDescription.setAttribute('content', description);
    }
    
    // Update meta keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (keywords) {
      if (!metaKeywords) {
        metaKeywords = document.createElement('meta');
        metaKeywords.setAttribute('name', 'keywords');
        document.head.appendChild(metaKeywords);
      }
      metaKeywords.setAttribute('content', keywords);
    }
    
    // Update canonical URL
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    const urlToUse = canonicalUrl || currentUrl;
    if (canonicalLink) {
      canonicalLink.setAttribute('href', urlToUse);
    } else {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      canonicalLink.setAttribute('href', urlToUse);
      document.head.appendChild(canonicalLink);
    }
    
    // Update Open Graph URL
    let ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) {
      ogUrl.setAttribute('content', urlToUse);
    }
    
    // Update Open Graph title
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle && title) {
      ogTitle.setAttribute('content', title);
    }
    
    // Update Open Graph description
    let ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription && description) {
      ogDescription.setAttribute('content', description);
    }
    
    // Update Open Graph image
    let ogImageMeta = document.querySelector('meta[property="og:image"]');
    if (ogImageMeta && ogImage) {
      ogImageMeta.setAttribute('content', ogImage);
    }
    
    // Update Twitter URL
    let twitterUrl = document.querySelector('meta[property="twitter:url"]');
    if (twitterUrl) {
      twitterUrl.setAttribute('content', urlToUse);
    }
    
    // Update Twitter title
    let twitterTitle = document.querySelector('meta[property="twitter:title"]');
    if (twitterTitle && title) {
      twitterTitle.setAttribute('content', title);
    }
    
    // Update Twitter description
    let twitterDescription = document.querySelector('meta[property="twitter:description"]');
    if (twitterDescription && description) {
      twitterDescription.setAttribute('content', description);
    }
    
    // Update Twitter image
    let twitterImage = document.querySelector('meta[property="twitter:image"]');
    if (twitterImage && ogImage) {
      twitterImage.setAttribute('content', ogImage);
    }
  }, [title, description, keywords, canonicalUrl, ogImage, currentUrl]);

  return null;
};

export default SEOHelmet;