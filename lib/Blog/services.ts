import { client, getImageUrl } from './sanity/client'
import { estimateReadTime } from './utils'
import { groq } from 'next-sanity'

export async function getAllBlogs(locale: string) {
  const titleField = locale === 'fr' ? 'titleFr' : 'titleEn'
  const descriptionField = locale === 'fr' ? 'shortDescriptionFr' : 'shortDescriptionEn'

  const query = groq`*[_type == "blog"] | order(date desc) {
    _id,
    ${titleField},
    ${descriptionField},
    slug,
    date,
    "tags": tags[]->title,
    imageSource,
    titleImagebyCloudinary,
    titleImage,
    contentFr,
    contentEn
  }`

  const blogs = await client.fetch(query)

  return blogs.map((blog: any) => {
    const content = locale === 'fr' ? blog.contentFr : blog.contentEn

    return {
      id: blog._id,
      title: blog[titleField] || '',
      excerpt: blog[descriptionField] || '',
      currentSlug: blog.slug?.current || '',
      date: blog.date || '',
      coverImage: getImageUrl(blog), // Utilise notre nouvelle fonction
      categories: blog.tags || [],
      readTime: estimateReadTime(content),
    }
  })
}

export async function getBlogBySlug(slug: string, locale: string) {
  const contentField = locale === 'fr' ? 'contentFr' : 'contentEn'
  const titleField = locale === 'fr' ? 'titleFr' : 'titleEn'
  const descriptionField = locale === 'fr' ? 'shortDescriptionFr' : 'shortDescriptionEn'

  const query = groq`*[_type == "blog" && slug.current == $slug][0] {
    _id,
    ${titleField},
    ${descriptionField},
    ${contentField},
    slug,
    date,
    "tags": tags[]->title,
    imageSource,
    titleImagebyCloudinary,
    titleImage
  }`

  const blog = await client.fetch(query, { slug })

  if (!blog) return null

  return {
    id: blog._id,
    title: blog[titleField] || '',
    content: blog[contentField] || [],
    shortDescription: blog[descriptionField] || '',
    date: blog.date || '',
    titleImage: getImageUrl(blog), // Utilise notre nouvelle fonction
    categories: blog.tags || [],
    readTime: estimateReadTime(blog[contentField]),
  }
}