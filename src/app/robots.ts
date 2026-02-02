import type { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/api/',
        '/admin/',
        '/private/',
        '/_next/',
        '/*.json$',
      ],
    },
    sitemap: 'https://martlet.ai/sitemap.xml',
    host: 'https://martlet.ai',
  }
}

