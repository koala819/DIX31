import { AiFillCheckCircle } from 'react-icons/ai'

import Link from 'next/link'

import { Button } from '@/components/ui/button'

export default function Rates() {
  const rates = [
    {
      title: 'SoloWeb',
      description:
        'Découvrez la solution parfaite pour mettre en avant votre produit ou\n' +
        'service. Cette page unique sera conçue pour captiver vos visiteurs\n' +
        'grâce à des visuels attrayants, un contenu riche et un formulaire de\n' +
        'contact pour faciliter les interactions directes.',
      price: '500 €',
      features: [
        'Visuels Impactants',
        'Contenu Persuasif',
        'Interaction Facilitée',
        'Optimisation Mobile',
        'Sécurité Renforcée',
      ],
    },
    {
      title: 'ProWeb',
      description:
        'Transformez votre présence en ligne avec une plateforme qui ne se\n' +
        "contente pas d'afficher votre activité, mais la met en valeur de\n" +
        'manière spectaculaire. Notre site vitrine, à la fois moderne et\n' +
        'responsive, est conçu pour captiver vos visiteurs et optimiser\n' +
        'chaque interaction.',
      price: '1 000 €',
      features: [
        'Architecture Moderne',
        'Analytique Avancée',
        'Design Sur Mesure ',
        'Optimisation SEO',
        'Assistance Complète',
      ],
    },
    {
      title: 'FlexiWeb',
      description:
        "Créez un site web dynamique doté d'un backend intuitif pour une mise\n" +
        'à jour facile du contenu. Idéal pour les projets complexes, cette\n' +
        'solution offre une flexibilité et une personnalisation poussées pour\n' +
        'répondre à toutes vos exigences.',
      price: 'Sur devis',
      features: [
        'Gestion de Contenu Facile',
        'Performance et Sécurité Optimales',
        'Solutions Web Intégrées',
        'Site Web Évolutif',
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
              Liberté et Adaptabilité pour votre Projet
            </h2>
            <span className="text-xl font-medium">
              Je vous accompagne dans la conception de solutions web
              personnalisées, offrant le soutien nécessaire pour avancer avec
              confiance. Que vous souhaitiez démarrer en autonomie ou opter pour
              une solution entièrement sur mesure, je suis là pour vous guider à
              chaque étape de votre parcours numérique.
            </span>
          </div>

          <section className="mx-auto lg:flex space-x-2">
            {rates.map((rate, index) => (
              <div
                className="w-full lg:w-1/3 lg:max-w-none bg-white px-8 dark:bg-gray-700 lg:px-10 py-8 lg:py-10 mb-3 mx-auto lg:my-6 shadow-lg shadow-gray-600 lg:flex lg:flex-col dark:text-gray-600 hover:-translate-y-2 hover:shadow-2xl rounded-2xl cursor-pointer border p-8"
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
                    <span className="font-bold text-3xl xl:text-4xl lg:mb-5">
                      {rate.price}
                    </span>
                  </text>
                  <ul className="text-sm px-5 mb-8 text-gray-700 dark:text-gray-300 space-y-8 mt-4 ">
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
                    <Button>Lancez-vous Maintenant</Button>
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
