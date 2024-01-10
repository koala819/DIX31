import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.dix31.com/",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://www.dix31.com/blog",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
  ];
}
