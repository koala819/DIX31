'use client'

import { Button } from '@nextui-org/react'
import ReactPlayer from 'react-player'

import Link from 'next/link'

import LazyLoad from '@/utils/LazyLoad'

export default function Hero() {
  return (
    <section className="mx-auto max-w-2xl px-4 lg:max-w-7xl lg:px-8">
      <div className="flex flex-wrap justify-between">
        <h1 className="text-4xl md:text-6xl font-bold  text-gray-600 dark:text-gray-200 mb-6">
          Naviguez vers le succès avec un artisan du web à vos côtés
        </h1>
        <aside className="flex w-full flex-col justify-center lg:mb-0 lg:w-1/2 lg:pb-24">
          {/* <h1 className="text-4xl font-bold text-black dark:text-white sm:text-5xl md:text-6xl">
            Starter Pack Gratuit pour Développeurs Web Débutants
          </h1>
          <h2 className="leading-relaxed text-gray-500 dark:text-gray-300 xl:text-lg">
            Outil Gratuit de Développement Web pour Lancer Votre Projet
          </h2> */}
          <div className="container mx-auto px-4">
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-6">
              Je transforme vos idées en expériences numériques captivantes,
              créant des sites sur mesure qui reflètent votre essence unique.
              Ensemble, faisons rayonner votre marque dans le monde digital.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link href="/contact">
                <Button color="primary" variant="shadow">
                  Commencez votre projet
                </Button>
              </Link>
            </div>
          </div>
        </aside>

        <aside className="w-full lg:w-1/2">
          <LazyLoad className="flex items-center justify-center  h-full p-8">
            <ReactPlayer
              url="https://www.youtube.com/watch?v=6TOL9fLe5yM"
              controls={true}
              width="100%"
              alt="Vidéo promotionnelle inspirante pour le Starter Pack DIX31, illustrant ses multiples fonctionnalités avec des images captivantes de personnes, chutes d'eau et étoiles, et mettant en avant des phrases clés motivantes pour lancer des projets créatifs et innovants."
              style={{ aspectRatio: '16 / 9' }}
            />
          </LazyLoad>
        </aside>
      </div>
    </section>
  )
}
