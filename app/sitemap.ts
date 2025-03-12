import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${process.env.NEXT_PUBLIC_CLIENT_URL}`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${process.env.NEXT_PUBLIC_CLIENT_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    },
    {
      url: `${process.env.NEXT_PUBLIC_CLIENT_URL}/projects`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.5,
    },
    {
      url: `${process.env.NEXT_PUBLIC_CLIENT_URL}/project/Club306`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.5,
    },
    {
      url: `${process.env.NEXT_PUBLIC_CLIENT_URL}/projects/BonheurSurSeine`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.5,
    },
    {
      url: `${process.env.NEXT_PUBLIC_CLIENT_URL}/projects/dix31`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.5,
    },
    {
      url: `${process.env.NEXT_PUBLIC_CLIENT_URL}/projects/ActivSavoirs`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.5,
    },
    {
      url: `${process.env.NEXT_PUBLIC_CLIENT_URL}/contact/Thouy`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.3,
    },
  ]
}
