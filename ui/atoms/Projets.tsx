'use client'

import { Button, Image } from '@nextui-org/react'

import Link from 'next/link'

export default function Projets() {
  return (
    <section className="mx-auto max-w-2xl px-4 py-16 sm:py-24 lg:max-w-7xl lg:px-8 space-y-6  text-gray-600 dark:text-gray-200">
      <div className="text-center mx-auto pb-10">
        <h2 className="text-5xl md:text-6xl font-bold mb-5">
          Portefeuille de Projets : Succès avec le Starter Pack
        </h2>
        <span className="text-xl font-medium">
          Chaque site web que je crée est un récit de passion et
          d&apos;innovation. Explorez ici une sélection de mes sites les plus
          emblématiques, chacun reflétant une approche personnalisée et une
          réponse créative aux besoins uniques de mes partenaires.
        </span>
      </div>

      <section className="flex justify-center w-full p-6">
        <picture className="w-1/3">
          <Image
            alt="Screenshot DIX31 Portfolio"
            className="object-cover"
            height={400}
            src="/images/Club306.jpg"
            width={400}
          />
        </picture>
        <div className="w-2/3 p-4 space-y-8">
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
            Site communautaire moderne conçu pour les passionnés de Peugeot 306.
            Intègre PayPal pour adhésions faciles, atteint rapidement plus de
            100 membres, grâce à des fonctionnalités interactives, une gestion
            efficace des membres, et une stratégie de croissance réussie.
          </p>
        </div>
      </section>
      <section className="flex justify-center w-full p-6">
        <picture className="w-1/3">
          <Image
            alt="Screenshot Activ Savoirs"
            className="object-cover"
            height={400}
            src="/images/ActivSavoirs.jpg"
            width={400}
          />
        </picture>
        <div className="w-2/3 p-4 space-y-8">
          <Link
            href="https://www.activ-savoirs.com/"
            target="_blank"
            className="hover:underline  hover:text-blue-600 dark:hover:text-orange-600"
          >
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
              Activ&apos;Savoirs
            </h3>
          </Link>
          <p className="text-md text-gray-700 dark:text-gray-300">
            Conception du site Activ Savoirs, centre de formation continu, avec
            Next.js, TypeScript, Prismic, Tailwind. Interface utilisateur
            moderne, facile à maintenir grâce à Prismic. Collaboration étroite
            avec designer UX/UI pour l&apos;esthétique et une fonctionnalité
            simplifié. Intégration de Google Analytics pour le suivi de
            performance.
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
