import React from 'react'
import Link from 'next/link'
import DynamicLoadImage from '@/components/client/DynamicLoadImage'

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 px-4 py-10">
      <div className="max-w-2xl w-full text-center">
        <div className="my-8 relative h-64 rounded-lg overflow-hidden shadow-xl">
          <DynamicLoadImage
            src="https://images.unsplash.com/photo-1494995971821-13e351803d47"
            alt="Site fermé"
            fill
            className="object-cover transition-transform hover:scale-105 duration-300"
          />
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-gray-800 dark:text-white mb-6">
          <span className="text-blue-500">Site Fermé</span>
          <span className="block mt-2 text-2xl md:text-3xl">
            Merci d&apos;avoir été avec nous
          </span>
        </h1>

        <p className="mb-8 text-gray-600 dark:text-gray-300">
          Nous avons pris la décision de fermer ce site. Nous tenons à remercier tous nos visiteurs pour leur soutien et leur fidélité.
        </p>

        <div className="my-8 relative h-64 rounded-lg overflow-hidden shadow-xl">
          <DynamicLoadImage
            src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExYmh6aWhkbzJ0OWJtM2RzOHZ3NnE5NjI1cDRoNnNrOXdnbGoyZmF4ZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/6heBQSjt2IoA8/giphy.gif"
            fill={true}
            alt="Au revoir"
            className="rounded-lg shadow-lg object-cover"
          />
        </div>

        <p className="mt-8 text-sm text-gray-500 dark:text-gray-400 italic">
          Pour toute question, vous pouvez nous contacter à{' '}
          <a
            href="mailto:contact@dix31.com"
            className="text-blue-500 hover:underline"
          >
            contact@dix31.com
          </a>
        </p>
      </div>
    </div>
  )
}

export default NotFound
