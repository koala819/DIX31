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

const generateAtomFeed = async (): Promise<string> => {
  const posts: any = await getPosts()
  let xml = '<?xml version="1.0" encoding="utf-8"?>'
  xml += '<feed xmlns="http://www.w3.org/2005/Atom">'
  xml += '<title>Professional Web Development Tips by DIX31 - Tech Blog</title>'
  xml += '<link href="https://dix31.com/en"/>'
  xml += '<updated>' + new Date().toISOString() + '</updated>'
  xml += '<id>https://dix31.com/en/</id>'

  posts
    .slice(0, 5)
    .forEach(
      (article: {
        currentSlug: string
        date: string | number | Date
        titleEn: string
        shortDescriptionEn: string
      }) => {
        const articleUrl = `https://dix31.com/en/blog/${article.currentSlug}`
        const pubDate = article.date
          ? new Date(article.date).toISOString()
          : new Date().toISOString()

        xml += '<entry>'
        xml += `<title>${escapeXml(article.titleEn)}</title>`
        xml += `<link href="${articleUrl}"/>`
        xml += `<id>${articleUrl}</id>`
        xml += `<updated>${pubDate}</updated>`
        xml += `<summary>${escapeXml(article.shortDescriptionEn || '')}</summary>`
        xml += '</entry>'
      },
    )

  xml += '</feed>'
  return xml
}

export default generateAtomFeed
