'use client'

import { AiFillCheckCircle } from 'react-icons/ai'

import Link from 'next/link'

export default function Rates() {
  return (
    <div className="mx-auto max-w-2xl px-4 lg:max-w-7xl lg:px-8">
      <div className="space-y-4">
        <div className="w-full mx-auto px-5 py-10 text-gray-600 dark:text-gray-200 mb-10">
          <div className="mx-auto pb-10">
            <h2 className="text-5xl md:text-6xl font-bold mb-5">
              Liberté et Adaptabilité pour votre projet
            </h2>
            <span className="text-xl font-medium">
              Je vous accompagne dans la conception de solutions web, en vous
              fournissant le soutien nécessaire pour progresser. Que vous
              débutiez seul ou préfériez une solution entièrement sur mesure, je
              suis là pour vous guider à chaque étape de votre aventure
              numérique.
            </span>
          </div>
          <div className="mx-auto md:flex">
            <div className="w-full md:w-1/3 md:max-w-none bg-white px-8 dark:bg-gray-700 md:px-10 py-8 md:py-10 mb-3 mx-auto md:my-6 rounded-md shadow-lg shadow-gray-600 md:flex md:flex-col dark:text-gray-600">
              <div className="w-full flex-grow">
                <h3 className="text-center font-bold uppercase mb-4 text-gray-800 dark:text-gray-100">
                  Une page Web unique
                </h3>
                <p className="my-4 text-gray-500 dark:text-gray-300">
                  La solution idéale pour présenter un service ou un produit de
                  manière concise et captivante. Inclut des visuels engageants,
                  du contenu descriptif, et un formulaire de contact pour une
                  interaction directe avec vos visiteurs.
                </p>
                <text className="flex justify-center items-center space-x-2 text-gray-800 dark:text-gray-100">
                  <span className="text-base font-normal">A partir de</span>
                  <span className="font-bold text-4xl mb-5">500 €</span>
                </text>
                <ul className="text-sm px-5 mb-8 text-gray-700 dark:text-gray-300 space-y-8">
                  <li className="flex leading-tight">
                    <AiFillCheckCircle className="w-5 h-5 text-blue-500 dark:text-orange-600 mr-2" />{' '}
                    Page d&apos;atterrissage personnalisée
                  </li>
                  <li className="flex leading-tight">
                    <AiFillCheckCircle className="w-5 h-5 text-blue-500 dark:text-orange-600 mr-2" />{' '}
                    Contenu visuel interactif
                  </li>
                  <li className="flex leading-tight">
                    <AiFillCheckCircle className="w-5 h-5 text-blue-500 dark:text-orange-600 mr-2" />{' '}
                    Description de produit détaillée
                  </li>
                  <li className="flex leading-tight">
                    <AiFillCheckCircle className="w-5 h-5 text-blue-500 dark:text-orange-600 mr-2" />{' '}
                    Formulaire de contact direct
                  </li>
                </ul>
              </div>
              <Link href="/contact" className="w-full">
                <button className="font-bold bg-gray-600 dark:bg-orange-600 hover:bg-blue-600 dark:hover:bg-orange-800 text-white rounded-md px-10 py-2 transition-colors w-full">
                  Commander
                </button>
              </Link>
            </div>
            <div className="w-full md:w-1/3 md:max-w-none bg-white px-8 dark:bg-gray-700 md:px-10 py-8 md:py-10 mb-3 mx-auto md:-mx-3 md:mb-0 rounded-md shadow-lg shadow-gray-600 md:relative md:z-30 md:flex md:flex-col">
              <div className="w-full flex-grow">
                <h3 className="text-center font-bold uppercase mb-4 text-gray-800 dark:text-gray-100">
                  Site Vitrine
                </h3>
                <p className="my-4 text-gray-500 dark:text-gray-300">
                  Une solution moderne et responsive pour présenter votre
                  activité. Un design attrayant, une navigation intuitive et une
                  expérience utilisateur optimisée pour transformer les
                  visiteurs en clients.
                </p>
                <text className="flex justify-center items-center space-x-2 text-gray-800 dark:text-gray-100">
                  <span className="text-base font-normal">A partir de</span>
                  <span className="font-bold text-4xl mb-5">1 000 €</span>
                </text>
                <ul className="text-sm px-5 mb-8 text-gray-700 dark:text-gray-300 space-y-8">
                  <li className="flex leading-tight">
                    <AiFillCheckCircle className="w-5 h-5 text-blue-500 dark:text-orange-600 mr-2" />{' '}
                    Site Professionnel Moderne
                  </li>
                  <li className="flex leading-tight">
                    <AiFillCheckCircle className="w-5 h-5 text-blue-500 dark:text-orange-600 mr-2" />{' '}
                    Suivi de Performance Intégré
                  </li>
                  <li className="flex leading-tight">
                    <AiFillCheckCircle className="w-5 h-5 text-blue-500 dark:text-orange-600 mr-2" />{' '}
                    Design Élégant et Personnalisable
                  </li>
                  <li className="flex leading-tight">
                    <AiFillCheckCircle className="w-5 h-5 text-blue-500 dark:text-orange-600 mr-2" />{' '}
                    Visibilité en Ligne Optimisée
                  </li>
                  <li className="flex leading-tight">
                    <AiFillCheckCircle className="w-5 h-5 text-blue-500 dark:text-orange-600 mr-2" />{' '}
                    Support et Maintenance Continus
                  </li>
                </ul>
              </div>
              <Link href="/contact" className="w-full">
                <button className="font-bold bg-gray-600 dark:bg-orange-600 hover:bg-blue-600 dark:hover:bg-orange-800 text-white rounded-md px-10 py-2 transition-colors w-full">
                  Commander
                </button>
              </Link>
            </div>
            <div className="w-full md:w-1/3 md:max-w-none bg-white px-8 dark:bg-gray-700 md:px-10 py-8 md:py-10 mb-3 mx-auto md:my-6 rounded-md shadow-lg shadow-gray-600 md:flex md:flex-col">
              <div className="w-full flex-grow">
                <h2 className="text-center font-bold uppercase mb-4 text-gray-800 dark:text-gray-100">
                  Site Dynamique
                </h2>
                <p className="my-4 text-gray-500 dark:text-gray-300">
                  Un site web dynamique avec un backend pour une mise à jour
                  facile du contenu. Idéal pour des projets complexes pour
                  offrir une flexibilité et une personnalisation efficace.
                </p>
                <text className="flex justify-center items-center space-x-2 text-gray-800 dark:text-gray-100">
                  {/* <span className="text-base font-normal mb-5">Sur devis</span> */}
                  <span className="font-bold text-2xl mb-5">Sur devis</span>
                </text>
                <ul className="text-sm px-5 mb-8 text-gray-700 dark:text-gray-300 space-y-8">
                  <li className="flex leading-tight">
                    <AiFillCheckCircle className="w-5 h-5 text-blue-500 dark:text-orange-600 mr-2" />{' '}
                    Gestion de Contenu Facile
                  </li>
                  <li className="flex leading-tight">
                    <AiFillCheckCircle className="w-5 h-5 text-blue-500 dark:text-orange-600 mr-2" />{' '}
                    Performance et Sécurité Optimales
                  </li>
                  <li className="flex leading-tight">
                    <AiFillCheckCircle className="w-5 h-5 text-blue-500 dark:text-orange-600 mr-2" />{' '}
                    Solutions Web Intégrées
                  </li>
                  <li className="flex leading-tight">
                    <AiFillCheckCircle className="w-5 h-5 text-blue-500 dark:text-orange-600 mr-2" />{' '}
                    Site Web Évolutif
                  </li>
                  <li className="flex leading-tight">
                    <AiFillCheckCircle className="w-5 h-5 text-blue-500 dark:text-orange-600 mr-2" />{' '}
                    Personnalisation Avancée
                  </li>
                  <li className="flex leading-tight">
                    <AiFillCheckCircle className="w-5 h-5 text-blue-500 dark:text-orange-600 mr-2" />{' '}
                    Fonctionnalités Interactives
                  </li>
                </ul>
              </div>
              <Link href="/contact" className="w-full">
                <button className="font-bold bg-gray-600 dark:bg-orange-600 hover:bg-blue-600 dark:hover:bg-orange-800 text-white rounded-md px-10 py-2 transition-colors w-full">
                  Commander
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
