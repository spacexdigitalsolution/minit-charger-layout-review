export default function robots() {
  const isPreview = process.env.NEXT_PUBLIC_PREVIEW_GUARD !== 'false';
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://minitcharger.com';

  if (isPreview) {
    return {
      rules: {
        userAgent: '*',
        disallow: '/',
      },
    };
  }

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/internal/'],
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}

