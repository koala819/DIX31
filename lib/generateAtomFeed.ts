import { client } from '@/lib/sanity'

async function getPosts() {
  const query = `*[_type== 'blog'] | order(date desc) {
    title,
    date,
    "currentSlug": slug.current
  }`

  return await client.fetch(query)
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

const generateAtomFeed = async (): Promise<string> => {
  const posts: any = await getPosts()

  let xml = '<?xml version="1.0" encoding="utf-8"?>'
  xml += '<rss version="2.0">'
  xml += '<channel>'
  xml +=
    '<title>Conseils Professionnels en Développement Web par DIX31 - Blog Tech France</title>'
  xml += '<link>https://dix31.com</link>'

  posts.slice(0, 3).forEach((article) => {
    const articleUrl =
      article.url || `https://dix31.com/blog/${article.currentSlug}`
    const pubDate = article.date
      ? new Date(article.date).toUTCString()
      : 'Invalid Date'
    xml += `<item>`
    xml += `<title>${escapeXml(article.title)}</title>`
    xml += `<link>${articleUrl}</link>`
    xml += `<pubDate>${pubDate}</pubDate>`
    xml += `</item>`
  })

  xml += '</channel>'
  xml += '</rss>'

  return xml
}

export default generateAtomFeed
