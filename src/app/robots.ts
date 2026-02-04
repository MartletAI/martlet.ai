import type { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
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
      {
        userAgent: [
          'Googlebot',
          'Bingbot',
          'DuckDuckBot',
          'Baiduspider',
          'Applebot',
          'GPTBot',
          'ChatGPT-User',
          'ClaudeBot',
          'Claude-Web',
          'PerplexityBot',
          'Google-Extended',
          'Amazonbot',
          'CCBot',
          'CohereBot',
          'YouBot',
          'DuckAssist',
          'NeevaBot',
          'FacebookBot',
        ],
        allow: '/',
      },
    ],
    sitemap: 'https://martlet.ai/sitemap.xml',
    host: 'https://martlet.ai',
  }
}

