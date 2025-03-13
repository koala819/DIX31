import React from 'react'

import Image from 'next/image'
import Link from 'next/link'

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 px-4 py-10">
      <div className="max-w-2xl w-full text-center">
        {/* <div className="mb-8 flex justify-center"> */}
        <div className="my-8 relative h-64 rounded-lg overflow-hidden shadow-xl">
          <Image
            src="https://images.unsplash.com/photo-1494995971821-13e351803d47"
            alt="Alone"
            fill
            style={{ objectFit: 'cover' }}
            className="transition-transform hover:scale-105 duration-300"
          />
        </div>
        {/* </div> */}

        <h1 className="text-5xl md:text-7xl font-bold text-gray-800 dark:text-white mb-6">
          <span className="text-blue-500">404</span>
          <span className="block mt-2 text-2xl md:text-3xl">
            Me suis-je perdu ?
          </span>
        </h1>

        <p className="mb-8 text-gray-600 dark:text-gray-300">
          Ne paniquons pas, il peut y avoir plusieurs explications possibles :
        </p>

        <ul className="text-left mb-10 space-y-2 text-gray-700 dark:text-gray-300">
          <li className="flex items-start">
            <span className="mr-2">•</span>
            <span>
              Vous êtes en avance et la page demandée n&apos;est pas encore
              développée
            </span>
          </li>
          <li className="flex items-start">
            <span className="mr-2">•</span>
            <span>
              Vous êtes en retard et vous naviguez dans les vestiges d&apos;une
              ancienne route
            </span>
          </li>
          <li className="flex items-start">
            <span className="mr-2">•</span>
            <span>
              Notre application fait sa mise à jour et cette page vous accueille
              pour patienter
            </span>
          </li>
          <li className="flex items-start">
            <span className="mr-2">•</span>
            <span>
              Un développeur distrait a oublié de déployer cette partie de
              l&apos;application
            </span>
          </li>
        </ul>

        <div className="my-8 relative h-64 rounded-lg overflow-hidden shadow-xl">
          <Image
            src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExYmh6aWhkbzJ0OWJtM2RzOHZ3NnE5NjI1cDRoNnNrOXdnbGoyZmF4ZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/6heBQSjt2IoA8/giphy.gif"
            fill
            alt="Person looking confused"
            className="h-64 rounded-lg shadow-lg"
          />
        </div>

        <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
          Que puis-je faire ?
        </h2>

        <ul className="text-left mb-10 space-y-3 text-gray-700 dark:text-gray-300">
          <li className="flex items-start">
            <span className="mr-2">•</span>
            <span>
              Retourner à{' '}
              <Link href="/" className="text-blue-500 hover:underline">
                la page d&apos;accueil
              </Link>{' '}
              pour repartir sur de bonnes bases
            </span>
          </li>
          <li className="flex items-start">
            <span className="mr-2">•</span>
            <span>
              Consulter les autres sections du site pour trouver ce que vous
              cherchez
            </span>
          </li>
          <li className="flex items-start">
            <span className="mr-2">•</span>
            <span>
              Envoyer un email à{' '}
              <a
                href="mailto:contact@dix31.com"
                className="text-blue-500 hover:underline"
              >
                contact@dix31.com
              </a>{' '}
              pour signaler ce problème
            </span>
          </li>
          <li className="flex items-start">
            <span className="mr-2">•</span>
            <span>
              Vérifier l&apos;URL et essayer à nouveau (mais sans trop y croire)
            </span>
          </li>
        </ul>

        <Link
          href="/"
          className="inline-block px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg transition-colors"
        >
          Retour à l&apos;accueil
        </Link>

        {/* Fun easter egg message */}
        <p className="mt-8 text-sm text-gray-500 dark:text-gray-400 italic">
          PS: Si vous trouvez la page perdue avant nous, envoyez-nous une carte
          postale !
        </p>
      </div>
    </div>
  )
}

export default NotFound
