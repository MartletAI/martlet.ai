import type { MetadataRoute } from 'next'
import { getBlogPosts } from '@/lib/blog'
import { getAllAuthors } from '@/lib/authors'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://martlet.ai'
  const posts = getBlogPosts()

  const blogPosts = posts.map((post) => ({
    url: `${baseUrl}/resources/blog/${post.slug}`,
    lastModified: new Date(post.date),
  }))

  const authors = getAllAuthors()
  const authorPages = authors.map((author) => ({
    url: `${baseUrl}/author/${author.slug}`,
    lastModified: new Date(),
  }))

  const routes = [
    '',
    '/contact',
    '/ai-acceptable-use-policy',
    '/privacy-policy',
    '/terms-of-services',
    '/solutions/prospective-risk-adjustment',
    '/solutions/radv',
    '/solutions/retrospective-risk-adjustment',
    '/resources/blog',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }))

  return [...routes, ...blogPosts, ...authorPages]
}
