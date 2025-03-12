import { getClient } from '@/lib/Blog/sanity/client'

async function getPosts() {
  const client = getClient()
  const query = `*[_type == 'blog'] | order(date desc) {
    titleEn,
    date,
    "currentSlug": slug.current,
    shortDescriptionEn
  }`
  const params = {
    cacheBuster: new Date().getTime(),
  }
  return await client.fetch(query, params)
}

function escapeXml(unsafe: string): string {
  return unsafe.replace(/[<>&'"]/g, function (c) {
    switch (c) {
      case '<':
        return '&lt;'
      case '>':
        return '&gt;'
      case '&':
        return '&amp;'
      case "'":
        return '&apos;'
      case '"':
        return '&quot;'
      default:
        return c
    }
  })
}

async function generateRssFeed(): Promise<string> {
  const posts: any = await getPosts()
  const websiteUrl = process.env.NEXT_PUBLIC_CLIENT_URL
  const blogUrl = `${websiteUrl}/en/blog`

  // Date au format RFC 822 pour RSS
  const formatRFC822Date = (date: Date): string => {
    return date.toUTCString()
  }

  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Dix31 Blog</title>
    <link>${blogUrl}</link>
    <description>Latest posts from Dix31</description>
    <language>en-us</language>
    <lastBuildDate>${formatRFC822Date(new Date())}</lastBuildDate>
    <atom:link href="${websiteUrl}/api/rss" rel="self" type="application/rss+xml" />
`

  posts
    .slice(0, 5)
    .forEach(
      (article: {
        currentSlug: any
        date: string | number | Date
        titleEn: any
        shortDescriptionEn: any
      }) => {
        const articleUrl = `${blogUrl}/${article.currentSlug}`
        const pubDate = article.date
          ? formatRFC822Date(new Date(article.date))
          : formatRFC822Date(new Date())

        const title = escapeXml(article.titleEn || '')
        const description = escapeXml(article.shortDescriptionEn || '')

        xml += `    <item>
      <title>${title}</title>
      <link>${articleUrl}</link>
      <guid isPermaLink="true">${articleUrl}</guid>
      <pubDate>${pubDate}</pubDate>
      <description>${description}</description>
    </item>
`
      },
    )

  xml += `  </channel>
</rss>`

  return xml
}

export default generateRssFeed
