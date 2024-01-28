import { notFound } from 'next/navigation'

import { fullBlog } from '@/types/blog'

import { client } from '@/lib/sanity'
import { Post } from '@/ui/molecules/Post'

async function getSlug(slug: string) {
  const query = `*[_type == 'blog' && slug.current =='${slug}'] {
    "currentSlug": slug.current,
      title,
      content,
      titleImage,
      date
  }[0]`
  if (!query) notFound()

  const data = await client.fetch(query)

  return data
}

export default async function Page({ params }: { params: { slug: string } }) {
  const post: fullBlog = await getSlug(params.slug)

  return <Post post={post} />
}
