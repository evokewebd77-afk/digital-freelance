import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://leverage-template.webflow.io';
  return [
    '',
    '/about',
    '/services',
    '/projects',
    '/prices',
    '/blogs',
    '/contact-us',
  ].map((route) => ({
    url: ${baseUrl},
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.8,
  }));
}
