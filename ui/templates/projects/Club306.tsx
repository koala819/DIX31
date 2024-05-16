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

  const realisations = {
    title: 'Club 306',
    presentation:
      'Le Club 306 est une communauté vibrante qui rassemble les\n' +
      "aficionados de la Peugeot 306, célébrant ensemble l'héritage de\n" +
      'ce modèle emblématique. Ce site web communautaire sert de plateforme\n' +
      'pour partager leur passion et leurs expériences.',
    picture: {
      alt: 'Club306 website',
      src: '/images/Club-306.jpg',
    },
    secteurs: [
      { name: 'Secteur', description: 'Association' },
      { name: 'Type de projet', description: 'Application Web' },
      { name: 'Date de livraison', description: '2023' },
      {
        name: 'Consulter le projet',
        link: [
          { name: 'Github', url: 'https://github.com/koala819/club306' },
          { name: 'Visiter', url: 'https://www.club306.fr/' },
        ],
      },
    ],
    challenges: [
      {
        title: 'Défi Technique',
        description:
          'Développer un site web attrayant et fonctionnel pour le Club 306 était essentiel\n' +
          "pour répondre aux attentes de Pascal Besnard, le président de l'association.\n" +
          "L'objectif était ambitieux : fédérer une communauté de 100 passionnés en trois\n" +
          'ans.Pour cela, le site nécessitait une interface utilisateur intuitive, des\n' +
          'fonctionnalités interactives avancées, une gestion efficace des membres, et une\n' +
          'stratégie de croissance robuste.',
      },
      {
        title: 'Stratégie Employée',
        description:
          'La solution a été de construire le site avec le framework Next.js, optimisant\n' +
          "ainsi la performance et l'expérience utilisateur. L'intégration de solutions de\n" +
          "paiement comme PayPal a simplifié le processus d'adhésion, augmentant\n" +
          "l'accessibilité pour les nouveaux membres. Le succès ne s'est pas fait\n" +
          "attendre : la communauté a rapidement atteint et dépassé l'objectif de 100\n" +
          "membres, prouvant l'efficacité de notre approche.",
      },
    ],
    stacks: [
      {
        name: 'Next.js',
      },
      {
        name: 'Tailwind',
      },
      {
        name: 'TypeScript',
      },
      {
        name: 'Supabase',
      },
    ],
    gallery:
      'Découvrez le dynamisme et les fonctionnalités du Club 306 à travers notre sélection\n' +
      "d'images. Chaque photo illustre les solutions innovantes que nous avons intégrées\n" +
      'pour enrichir cette communauté passionnée.',
    photos: [
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
    ],
  }

  return (
    <div className="container space-y-32">
      <section className="md:flex items-center justify-center p-4 ">
        <aside className="w-full md:w-1/2 p-4">
          <h1>{realisations.title}</h1>
          <span>{realisations.presentation}</span>
        </aside>
        <picture className="w-full md:w-1/2 flex justify-center">
          <WithCustomLoading
            alt={realisations.picture.alt}
            src={realisations.picture.src}
            width={500}
            height={500}
          />
        </picture>
      </section>

      <section className="w-full mx-auto grid md:grid-cols-4 gap-x-4 p-4 space-y-12 md:space-y-0">
        {realisations.secteurs.map((secteur) => (
          <div
            key={secteur.name}
            className="text-center space-y-4 p-2 border-2 rounded-lg border-gray-300"
          >
            <h3>{secteur.name}</h3>
            <span className="flex flex-nowrap justify-center space-x-2">
              {secteur.description
                ? secteur.description
                : secteur.link !== undefined &&
                  secteur.link.map((link) => (
                    <div key={link.name}>
                      <Link href={link.url} target="_blank">
                        <Button>{link.name}</Button>
                      </Link>
                    </div>
                  ))}
            </span>
          </div>
        ))}
      </section>

      <section className="w-full p-4 md:flex md:space-x-8 space-y-12 md:space-y-0">
        {realisations.challenges.map((realisation) => (
          <div
            key={realisation.title}
            className="md:w-1/2 space-y-8 text-justify"
          >
            <h2>{realisation.title}</h2>
            <span>{realisation.description}</span>
          </div>
        ))}
      </section>

      {/* Stacks utilisées */}
      <section className="w-full p-4 flex flex-col space-y-8">
        <h2>Stacks utilisées</h2>
        <div className="flex items-center justify-center space-x-4">
          {realisations.stacks.map((stack) => (
            <Badge key={stack.name}>{stack.name}</Badge>
          ))}
        </div>
      </section>

      {/* Preview */}
      <section className="w-full space-y-8">
        <h2>Galerie du Projet</h2>
        <span>{realisations.gallery}</span>

        <PhotoAlbum
          photos={realisations.photos}
          layout="rows"
          columns={4}
          onClick={({ index }) => setIndex(index)}
        />
        <Lightbox
          slides={realisations.photos}
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
