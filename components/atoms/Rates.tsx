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
        'Contenu Simplifié',
        'Performance Sécurisée',
        'Solutions Intégrées',
        'Évolutivité Assurée',
        'Interactivité Accrue',
      ],
    },
  ]
  return (
    <div className="container">
      <h2>Liberté et Adaptabilité pour votre Projet</h2>
      <span>
        Je vous accompagne dans la conception de solutions web personnalisées,
        offrant le soutien nécessaire pour avancer avec confiance. Que vous
        souhaitiez démarrer en autonomie ou opter pour une solution entièrement
        sur mesure, je suis là pour vous guider à chaque étape de votre parcours
        numérique.
      </span>

      <section className="mx-auto lg:flex space-x-2">
        {rates.map((rate, index) => (
          <div
            className="w-full lg:w-1/3 lg:max-w-none bg-white px-8 dark:bg-gray-700 lg:px-10 py-8 lg:py-10 mb-3 mx-auto lg:my-6 shadow-lg shadow-gray-600 lg:flex lg:flex-col  hover:-translate-y-2 hover:shadow-2xl rounded-2xl cursor-pointer border p-8 hover:bg-blue-100 dark:hover:bg-blue-500 dark:hover:text-black"
            key={index}
          >
            <div className="w-full flex-grow">
              <h3 className="text-center font-bold uppercase mb-4">
                {rate.title}
              </h3>
              <p className="my-4">{rate.description}</p>
              <text className="flex justify-center items-center space-x-2">
                {rate.price !== 'Sur devis' && (
                  <span className="text-base font-normal">A partir de</span>
                )}
                <span className="font-bold text-3xl xl:text-4xl lg:mb-5">
                  {rate.price}
                </span>
              </text>
              <ul className="text-sm px-5 mb-8 space-y-8 mt-4 ">
                {rate.features.map((feature, index) => (
                  <li className="flex leading-tight" key={index}>
                    <AiFillCheckCircle className="w-5 h-5 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-center">
              <Link href="/contact" className="w-full">
                <Button className="dark:bg-blue-900 dark:text-white">
                  Lancez-vous Maintenant
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </section>
    </div>
  )
}
