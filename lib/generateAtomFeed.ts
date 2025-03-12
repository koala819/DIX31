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

// function escapeXml(unsafe: string): string {
//   return unsafe.replace(/[<>&'"]/g, function (c) {
//     switch (c) {
//       case '<':
//         return '&lt;'
//       case '>':
//         return '&gt;'
//       case '&':
//         return '&amp;'
//       case "'":
//         return '&apos;'
//       case '"':
//         return '&quot;'
//       default:
//         return c
//     }
//   })
// }

async function generateAtomFeed(): Promise<string> {
  const posts: any = await getPosts()

  const formattedPosts = posts
    .slice(0, 5)
    .map(
      (article: {
        currentSlug: any
        date: string | number | Date
        titleEn: any
        shortDescriptionEn: any
      }) => {
        const articleUrl = `https://dix31.com/en/blog/${article.currentSlug}`
        const pubDate = article.date
          ? new Date(article.date).toISOString()
          : new Date().toISOString()

        return {
          title: article.titleEn,
          url: articleUrl,
          date: pubDate,
          summary: article.shortDescriptionEn || '',
        }
      },
    )

  return JSON.stringify(formattedPosts)
}

export default generateAtomFeed
