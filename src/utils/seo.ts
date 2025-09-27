export const generatePageTitle = (pageTitle: string, includeBusinessName = true): string => {
  const businessName = "Aaron Michael Services";
  const location = "Buffalo NY";
  
  if (includeBusinessName) {
    return `${pageTitle} | ${businessName} | ${location}`;
  }
  return pageTitle;
};

export const generateMetaDescription = (description: string, maxLength = 160): string => {
  if (description.length <= maxLength) {
    return description;
  }
  
  // Truncate at word boundary
  const truncated = description.substring(0, maxLength);
  const lastSpace = truncated.lastIndexOf(' ');
  return truncated.substring(0, lastSpace) + '...';
};

export const generateKeywords = (primaryKeywords: string[], location = 'Buffalo NY'): string => {
  const locationKeywords = [
    location,
    'Western New York',
    'WNY',
    'Erie County'
  ];
  
  const businessKeywords = [
    'ADA contractor',
    'accessibility specialist',
    'home modifications',
    'licensed contractor'
  ];
  
  return [...primaryKeywords, ...locationKeywords, ...businessKeywords].join(', ');
};

export const generateCanonicalUrl = (path: string): string => {
  const baseUrl = 'https://aaronmichaelservices.com';
  return `${baseUrl}${path}`;
};

export const generateStructuredData = (type: string, data: object) => {
  const baseData = {
    "@context": "https://schema.org",
    "@type": type,
    ...data
  };
  
  return baseData;
};