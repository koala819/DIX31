import dynamic from 'next/dynamic'
import Link from 'next/link'

import { urlFor } from '@/lib/sanity'
import { format, parseISO } from 'date-fns'

export default function Blog({ posts }: any) {
  const WithCustomLoading = dynamic(() => import('@/lib/LoadImage'), {
    loading: () => <div>Chargement ...</div>,
  })

  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:py-24 lg:max-w-7xl lg:px-8 space-y-6  text-gray-600 dark:text-gray-200">
      <h2 className="text-5xl md:text-6xl font-bold mb-5">Derniers articles</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 text-center px-2 mx-auto">
        {posts.map((post: any) => (
          <>
            <article className="bg-white dark:bg-slate-700 p-6 mb-6 shadow transition duration-300 group transform hover:-translate-y-2 hover:shadow-2xl rounded-2xl cursor-pointer border">
              <Link
                target="_self"
                href={`/blog/${post.currentSlug}`}
                className="absolute opacity-0 top-0 right-0 left-0 bottom-0"
                aria-label={post.currentSlug}
              ></Link>
              <div className="relative mb-4 rounded-2xl w-full h-64">
                <WithCustomLoading
                  src={
                    post.titleImage
                      ? urlFor(post.titleImage)
                      : urlFor(post.titleImagebyCloudinary)
                  }
                  alt={
                    post.titleImagebyCloudinary
                      ? post.titleImagebyCloudinary.alt
                      : post.title
                  }
                  layout="fill"
                  objectFit="cover"
                  className="object-cover rounded-3xl"
                />
                <Link
                  className="flex justify-center items-center bg-blue-700 dark:bg-orange-300 bg-opacity-80 dark:bg-opacity-80 z-10 absolute top-0 left-0 w-full h-full text-white dark:text-black rounded-2xl opacity-0 transition-all duration-300 transform group-hover:scale-105 text-xl group-hover:opacity-100"
                  href={`/blog/${post.currentSlug}`}
                  target="_self"
                  rel="noopener noreferrer"
                >
                  Lire l&apos;article
                  <svg
                    className="ml-2 w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 5l7 7-7 7M5 5l7 7-7 7"
                    ></path>
                  </svg>
                </Link>
              </div>

              <div className="flex justify-between items-center w-full pb-4 mb-auto">
                <p className="text-sm text-gray-500 dark:text-gray-200">
                  Publié le {format(parseISO(post.date), 'dd-MM-yyyy')}
                </p>
              </div>
              <h3 className="font-medium text-xl leading-8">
                <Link
                  href={`/blog/${post.currentSlug}`}
                  className="block relative group-hover:text-blue-700 dark:group-hover:text-orange-300 transition-colors duration-200 "
                >
                  {post?.title}
                </Link>
              </h3>
              <div></div>
            </article>
          </>
        ))}
      </div>
    </div>
  )
}
