import dynamic from 'next/dynamic'
import Link from 'next/link'

import { urlFor } from '@/lib/sanity'
import { format, parseISO } from 'date-fns'

export default function Blog({ posts }: any) {
  const WithCustomLoading = dynamic(() => import('@/lib/LoadImage'), {
    loading: () => <div>Chargement ...</div>,
  })

  return (
    <>
      <h2>Derniers articles</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 text-center px-2 mx-auto">
        {posts.map((post: any) => (
          <>
            <article className="bg-white dark:bg-slate-700 p-6 mb-6 shadow transition duration-300 group transform hover:-translate-y-2 hover:shadow-2xl rounded-2xl cursor-pointer border hover:bg-blue-100 hover:dark:bg-blue-500">
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
                  className="object-cover"
                />
                <Link
                  className="flex justify-center items-center bg-blue-100 dark:bg-blue-500 bg-opacity-80 dark:bg-opacity-80 z-10 absolute top-0 left-0 w-full h-full text-black dark:text-black rounded-2xl opacity-0 transition-all duration-300 transform group-hover:scale-105 text-xl group-hover:opacity-100"
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
                <p className="text-sm text-gray-500 dark:text-gray-200 dark:group-hover:text-black">
                  Publié le {format(parseISO(post.date), 'dd-MM-yyyy')}
                </p>
              </div>
              <h3>
                <Link
                  href={`/blog/${post.currentSlug}`}
                  className="block relative group-hover:font-extrabold dark:group-hover:text-black transition-colors duration-200 "
                >
                  {post?.title}
                </Link>
              </h3>
            </article>
          </>
        ))}
      </div>
    </>
  )
}
