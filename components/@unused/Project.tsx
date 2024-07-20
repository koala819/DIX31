'use client'

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

import { Realisations } from '@/types/models'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

export const Project = ({ realisations }: { realisations: Realisations }) => {
  const [index, setIndex] = useState<number>(-1)

  const WithCustomLoading = dynamic(
    () => import('@/components/atoms/LoadImage'),
    {
      loading: () => <div>Chargement ...</div>,
    },
  )
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
            <span className="flex items-center justify-center">
              {secteur.description}
            </span>
          </div>
        ))}
        <div className="text-center space-y-4 p-2 border-2 rounded-lg border-gray-300">
          <h3>Consulter le projet</h3>
          <span className="flex flex-col lg:flex-row justify-center lg:space-x-2 space-y-2 lg:space-y-0">
            {realisations.links.map((link) => (
              <div key={link.name}>
                {link.url === '#' ? (
                  <Button disabled>{link.name}</Button>
                ) : (
                  <Link href={link.url} target="_blank">
                    <Button>{link.name}</Button>
                  </Link>
                )}
              </div>
            ))}
          </span>
        </div>
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

      <section className="w-full p-4 flex flex-col space-y-8">
        <h2>Stacks utilisées</h2>
        <div className="flex items-center justify-center space-x-4">
          {realisations.stacks.map((stack) => (
            <Badge key={stack.name}>{stack.name}</Badge>
          ))}
        </div>
      </section>

      {realisations.photos !== undefined && (
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
      )}

      <Link
        href="/projects"
        className="w-full flex flex-col my-32 items-center"
      >
        <Button>Découvrir les autres réalisations</Button>
      </Link>
    </div>
  )
}
