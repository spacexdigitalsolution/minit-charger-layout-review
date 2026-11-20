export default function robots() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://minit-charger-layout-review.vercel.app';

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/internal/'],
      },
      {
        userAgent: [
          'GPTBot',
          'ChatGPT-User',
          'Claude-Web',
          'ClaudeBot',
          'anthropic-ai',
          'PerplexityBot',
          'Google-Extended',
          'GoogleOther',
          'Applebot',
          'Bingbot',
          'CCBot',
          'cohere-ai'
        ],
        allow: '/',
      }
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}

