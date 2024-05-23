import { Article } from '@/types/models'

import { getClient } from '@/lib/sanity.client'

const generateAtomFeed = async (): Promise<string> => {
  const client = getClient()

  const query = `*[_type == "article"] {
      title,
      url,
      publishedDate
    }`

  const articles: Article[] = await client.fetch(query)
  let xml = '<?xml version="1.0" encoding="utf-8"?>'
  xml += '<rss version="2.0">'
  xml += '<channel>'
  xml += '<title>Your Website Title</title>'
  xml += '<link>https://yourwebsite.com</link>'

  articles.forEach((article) => {
    xml += `<item>`
    xml += `<title>${article.title}</title>`
    xml += `<link>${article.url}</link>`
    xml += `<pubDate>${new Date(article.publishedDate).toUTCString()}</pubDate>`
    xml += `</item>`
  })

  xml += '</channel>'
  xml += '</rss>'

  return xml
}

export default generateAtomFeed
