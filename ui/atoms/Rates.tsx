'use client'

// import { Button } from '@nextui-org/react'
import { AiFillCheckCircle } from 'react-icons/ai'

import Link from 'next/link'

import { Button } from '@/components/ui/button'

import { useTheme } from '@/context/ThemeContext'

export default function Rates() {
  const { theme } = useTheme()

  const rates = [
    {
      title: 'Une page Web unique',
      description:
        'La solution idéale pour présenter un service ou un\n' +
        'produit de manière concise et captivante. Inclut des visuels\n' +
        'engageants, du contenu descriptif, et un formulaire de contact\n' +
        'pour uneinteraction directe avec vos visiteurs.',
      price: '500 €',
      features: [
        "Page d'atterrissage personnalisée",
        'Contenu visuel interactif',
        'Description de produit détaillée',
        'Formulaire de contact direct',
      ],
    },
    {
      title: 'Site Vitrine',
      description:
        'Une solution moderne et responsive pour présenter votre\n' +
        'activité. Un design attrayant, une navigation intuitive et une\n' +
        'expérience utilisateur optimisée pour transformer les visiteurs\n' +
        'en clients.',
      price: '1 000 €',
      features: [
        'Site Professionnel Moderne',
        'Suivi de Performance Intégré',
        'Design Élégant et Personnalisable',
        'Visibilité en Ligne Optimisée',
        'Support et Maintenance Continus',
      ],
    },
    {
      title: 'Site Dynamique',
      description:
        'Un site web dynamique avec un backend pour une mise à jour\n' +
        'facile du contenu. Idéal pour des projets complexes pour\n' +
        'offrir une flexibilité et une personnalisation efficace.',
      price: 'Sur devis',
      features: [
        'Gestion de Contenu Facile',
        'Performance et Sécurité Optimales',
        'Solutions Web Intégrées',
        'Site Web Évolutif',
        'Personnalisation Avancée',
        'Fonctionnalités Interactives',
      ],
    },
  ]
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

          <section className="mx-auto md:flex space-x-2">
            {rates.map((rate, index) => (
              <div
                className="w-full md:w-1/3 md:max-w-none bg-white px-8 dark:bg-gray-700 md:px-10 py-8 md:py-10 mb-3 mx-auto md:my-6 shadow-lg shadow-gray-600 md:flex md:flex-col dark:text-gray-600 hover:-translate-y-2 hover:shadow-2xl rounded-2xl cursor-pointer border p-8"
                key={index}
              >
                <div className="w-full flex-grow">
                  <h3 className="text-center font-bold uppercase mb-4 text-gray-800 dark:text-gray-100">
                    {rate.title}
                  </h3>
                  <p className="my-4 text-gray-500 dark:text-gray-300">
                    {rate.description}
                  </p>
                  <text className="flex justify-center items-center space-x-2 text-gray-800 dark:text-gray-100">
                    {rate.price !== 'Sur devis' && (
                      <span className="text-base font-normal">A partir de</span>
                    )}
                    <span className="font-bold text-4xl mb-5">
                      {rate.price}
                    </span>
                  </text>
                  <ul className="text-sm px-5 mb-8 text-gray-700 dark:text-gray-300 space-y-8">
                    {rate.features.map((feature, index) => (
                      <li className="flex leading-tight" key={index}>
                        <AiFillCheckCircle className="w-5 h-5 text-blue-500 dark:text-orange-300 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="text-center">
                  <Link href="/contact" className="w-full">
                    <Button
                      color={theme === 'dark' ? 'warning' : 'primary'}
                      // variant="shadow"
                    >
                      Commander
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </section>
        </div>
      </div>
    </div>
  )
}
