'use client'

import { Button, Image } from '@nextui-org/react'

import Link from 'next/link'

export default function Projets() {
  return (
    <section className="mx-auto max-w-2xl px-4 py-16 sm:py-24 lg:max-w-7xl lg:px-8 space-y-6  text-gray-600 dark:text-gray-200">
      <div className="mx-auto pb-10">
        <h2 className="text-5xl md:text-6xl font-bold mb-5">Projets clés</h2>
        <span className="text-xl font-medium">
          Chaque site web que je développe est plus qu’une construction : c’est
          une collaboration. Ici, découvrez des projets uniques, chacun façonné
          avec le souci de répondre parfaitement à vos besoins. Plus qu’un
          simple service, je vous guide vers l’autonomie, vous permettant de
          gérer facilement le contenu de votre site, comme un pro, sans jamais
          vous sentir perdu dans la technique. Ensemble, donnons vie à vos
          idées, en vous assurant contrôle et simplicité.
        </span>
      </div>

      <section className="hidden:flex lg:flex justify-center w-full p-6">
        <picture className="flex w-full justify-center lg:w-1/3">
          <Image alt="Screenshot Club 306" src="/images/Club306.jpg" />
        </picture>
        <div className="w-full lg:w-2/3 p-4 space-y-8">
          <Link
            href="https://www.club306.fr/"
            target="_blank"
            className="hover:underline  hover:text-blue-600 dark:hover:text-orange-600"
          >
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
              Club 306
            </h3>
          </Link>
          <p className="text-md text-gray-700 dark:text-gray-300">
            Un espace en ligne innovant créé pour les amateurs de Peugeot 306,
            alliant design actuel et facilité d&apos;utilisation. Avec
            l&apos;intégration d&apos;un moyen de paiement pour simplifier pour
            les adhésions, ce site a su fédérer une communauté de plus de 100
            membres en peu de temps. Grâce à des outils interactifs, une gestion
            fluide de la communauté, et une stratégie de développement efficace,
            il est devenu le point de rendez-vous incontournable pour partager
            la passion de la Peugeot 306.
          </p>
        </div>
      </section>

      <section className="hidden:flex lg:flex justify-center w-full p-6">
        <picture className="flex w-full justify-center lg:w-1/3">
          <Image
            alt="Screenshot Bonheur Sur Seine"
            src="/images/BonheurSurSeine.jpg"
          />
        </picture>
        <div className="w-full lg:w-2/3 p-4 space-y-8">
          <Link
            href="https://www.bonheursurseine.com/"
            target="_blank"
            className="hover:underline  hover:text-blue-600 dark:hover:text-orange-600"
          >
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
              Bonheur Sur Seine
            </h3>
          </Link>
          <p className="text-md text-gray-700 dark:text-gray-300">
            Plongez dans l&apos;univers de Bonheur Sur Seine, une plateforme
            révolutionnaire dédiée aux aficionados de la gyroroue, conçue
            spécialement pour un YouTubeur et wheeler éminent. Ce site se
            distingue par une approche innovante, exploitant des technologies
            avancées pour offrir une navigation fluide et une esthétique
            soignée. Grâce à un design réactif et à une gestion de contenu
            intuitive, les utilisateurs profitent d&apos;une expérience en ligne
            sans égale, où la mise à jour du contenu est à la fois simple et
            instantanée, assurant ainsi une interaction constante et engageante
            avec la communauté.
          </p>
        </div>
      </section>

      <div className="text-center">
        <Link href="/contact">
          <Button color="primary" variant="shadow">
            Commençons notre Collaboration
          </Button>
        </Link>
      </div>
    </section>
  )
}
