'use client'

// import { Button, Chip, Image } from '@nextui-org/react'
import { useState } from 'react'
import PhotoAlbum from 'react-photo-album'
import Lightbox from 'yet-another-react-lightbox'
// import optional lightbox plugins
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen'
import Slideshow from 'yet-another-react-lightbox/plugins/slideshow'
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails'
import 'yet-another-react-lightbox/plugins/thumbnails.css'
import Zoom from 'yet-another-react-lightbox/plugins/zoom'
import 'yet-another-react-lightbox/styles.css'

import dynamic from 'next/dynamic'
import Link from 'next/link'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

export default function Club306() {
  const [index, setIndex] = useState<number>(-1)

  const WithCustomLoading = dynamic(() => import('@/lib/LoadImage'), {
    loading: () => <div>Chargement ...</div>,
  })

  const photos = [
    {
      src: '/images/cpanel01.jpg',
      width: 1080,
      height: 800,
    },
    {
      src: '/images/cpanel02.jpg',
      width: 1080,
      height: 800,
    },
    {
      src: '/images/cpanel03.jpg',
      width: 1080,
      height: 800,
    },
    {
      src: '/images/club30601.jpg',
      width: 1080,
      height: 800,
    },
    {
      src: '/images/club30602.jpg',
      width: 1080,
      height: 800,
    },
    {
      src: '/images/cpanel_admin01.jpg',
      width: 1080,
      height: 800,
    },
    {
      src: '/images/cpanel_admin02.jpg',
      width: 1080,
      height: 800,
    },
    {
      src: '/images/cpanel_admin03.jpg',
      width: 1080,
      height: 800,
    },
  ]

  return (
    <div className="container space-y-32">
      <section className="md:flex items-center justify-center p-4 ">
        <aside className="w-full md:w-1/2 p-4">
          <h1>Club 306</h1>
          <span>
            Le Club 306 est une communauté vibrante qui rassemble les
            aficionados de la Peugeot 306, célébrant ensemble l&apos;héritage de
            ce modèle emblématique. Ce site web communautaire sert de plateforme
            pour partager leur passion et leurs expériences.
          </span>
        </aside>
        <picture className="w-full md:w-1/2 flex justify-center">
          <WithCustomLoading
            alt="Club306 website"
            src="/images/Club-306.jpg"
            width={500}
            height={500}
          />
        </picture>
      </section>

      {/* Secteur & Type de projet & Date de livraison  & Consulter le projet */}
      <section className="w-full mx-auto grid md:grid-cols-4 gap-x-4 p-4 space-y-12 md:space-y-0">
        <div className="text-center space-y-4 p-2 border-2 rounded-lg border-gray-300">
          <p className="font-bold text-lg">Secteur</p>
          <p>Association</p>
        </div>
        <div className="text-center space-y-4 p-2 border-2 rounded-lg border-gray-300">
          <p className="font-bold text-lg">Type de projet</p>
          <p>Application Web</p>
        </div>
        <div className="text-center space-y-4 p-2 border-2 rounded-lg border-gray-300">
          <p className="font-bold text-lg">Date de livraison</p>
          <p>2023</p>
        </div>
        <div className="text-center space-y-4 p-2 border-2 rounded-lg border-gray-300">
          <p className="font-bold text-lg">Consulter le projet</p>
          <div className="space-x-2">
            <Link href="https://github.com/koala819/club306" target="_blank">
              <Button>Github</Button>
            </Link>

            <Link href="https://www.club306.fr/" target="_blank">
              <Button>Visiter</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Challenge technique et stratégie */}
      <section className="w-full p-4 md:flex md:space-x-8 space-y-12 md:space-y-0">
        <div className="md:w-1/2 space-y-8 text-justify">
          <h2>Défi Technique </h2>
          <span>
            Développer un site web attrayant et fonctionnel pour le Club 306
            était essentiel pour répondre aux attentes de Pascal Besnard, le
            président de l&apos;association. L&apos;objectif était ambitieux :
            fédérer une communauté de 100 passionnés en trois ans. Pour cela, le
            site nécessitait une interface utilisateur intuitive, des
            fonctionnalités interactives avancées, une gestion efficace des
            membres, et une stratégie de croissance robuste.
          </span>
        </div>
        <div className="md:w-1/2 space-y-8 text-justify">
          <h2>Stratégie Employée</h2>
          <span>
            La solution a été de construire le site avec le framework Next.js,
            optimisant ainsi la performance et l&apos;expérience utilisateur.
            L&apos;intégration de solutions de paiement comme PayPal a simplifié
            le processus d&apos;adhésion, augmentant l&apos;accessibilité pour
            les nouveaux membres. Le succès ne s&apos;est pas fait attendre : la
            communauté a rapidement atteint et dépassé l&apos;objectif de 100
            membres, prouvant l&apos;efficacité de notre approche.
          </span>
        </div>
      </section>

      {/* Stacks utilisées */}
      <section className="w-full p-4 flex flex-col space-y-8">
        <h2>Stacks utilisées</h2>
        <div className="flex items-center justify-center space-x-4">
          <Badge>Next.JS</Badge>
          <Badge>Tailwind</Badge>
          <Badge>TypeScript</Badge>
          <Badge>Supabase</Badge>
        </div>
      </section>

      {/* Preview */}
      <section className="w-full space-y-8">
        <h2>Galerie du Projet</h2>
        <span>
          Découvrez le dynamisme et les fonctionnalités du Club 306 à travers
          notre sélection d&apos;images. Chaque photo illustre les solutions
          innovantes que nous avons intégrées pour enrichir cette communauté
          passionnée.
        </span>

        <PhotoAlbum
          photos={photos}
          layout="rows"
          columns={4}
          onClick={({ index }) => setIndex(index)}
        />
        <Lightbox
          slides={photos}
          open={index >= 0}
          index={index}
          close={() => setIndex(-1)}
          // enable optional lightbox plugins
          plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
        />
      </section>

      <Link
        href="/projects"
        className="w-full flex flex-col my-32 items-center"
      >
        <Button>Découvrir les autres réalisations</Button>
      </Link>
    </div>
  )
}
