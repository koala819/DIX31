'use client'

import { Button, Chip, Image } from '@nextui-org/react'
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

import Link from 'next/link'

export default function Club306() {
  const [index, setIndex] = useState<number>(-1)

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
    <>
      <section className="text-gray-600 dark:text-gray-300 md:flex items-center justify-center p-4 ">
        <div className="w-full md:w-1/2 p-4">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 dark:text-gray-200">
            Club 306
          </h1>
          <p className="mb-8 leading-relaxed">
            Le Club 306 réunit les passionnés de la Peugeot 306, partageant leur
            amour pour ce modèle emblématique de voiture.
          </p>
          <div className="md:flex items-center space-x-4 mt-12 justify-center space-y-2 md:space-y-0">
            <Chip
              color="primary"
              className="dark:bg-orange-500 dark:text-black"
            >
              Projet Solo
            </Chip>
            <Chip
              color="primary"
              className="dark:bg-orange-500 dark:text-black"
            >
              Web App
            </Chip>
            <Chip
              color="primary"
              className="dark:bg-orange-500 dark:text-black"
            >
              Site Communautaire
            </Chip>
          </div>
        </div>
        <picture className="w-full md:w-1/2 flex justify-center">
          <Image alt="Club306 website" src="/images/Club306.jpg" />
        </picture>
      </section>

      {/* Secteur & Type de projet & Date de livraison  & Consulter le projet */}
      <section className="w-full mx-auto grid md:grid-cols-4 gap-x-4 p-4 space-y-12 md:space-y-0">
        <div className="text-center space-y-4 p-2 border-1 rounded-lg border-gray-300">
          <p className="font-bold text-lg">Secteur</p>
          <p>Association</p>
        </div>
        <div className="text-center space-y-4 p-2 border-1 rounded-lg border-gray-300">
          <p className="font-bold text-lg">Type de projet</p>
          <p>Application Web</p>
        </div>
        <div className="text-center space-y-4 p-2 border-1 rounded-lg border-gray-300">
          <p className="font-bold text-lg">Date de livraison</p>
          <p>2023</p>
        </div>
        <div className="text-center space-y-4 p-2 border-1 rounded-lg border-gray-300">
          <p className="font-bold text-lg">Consulter le projet</p>
          <div className="space-x-2">
            <Link href="https://github.com/koala819/club306" target="_blank">
              <Button
                size="sm"
                variant="shadow"
                color="primary"
                className="dark:bg-orange-500 dark:text-black"
              >
                Github
              </Button>
            </Link>

            <Link href="https://www.club306.fr/" target="_blank">
              <Button
                size="sm"
                color="primary"
                className="dark:bg-orange-500 dark:text-black mt-2 md:mt-0"
                variant="shadow"
              >
                Visiter
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Challenge technique et stratégie */}
      <section className="w-full p-4 md:flex md:space-x-8 space-y-12 md:space-y-0">
        <div className="md:w-1/2 space-y-8 text-justify">
          <h1 className="text-3xl font-bold">Challenge technique</h1>
          <p>
            Le défi technique consistait à développer un site web communautaire
            moderne pour le Club 306, répondant aux besoins du président Pascal
            Besnard. L&apos;objectif ambitieux était de rassembler 100
            passionnés de la Peugeot 306 en trois ans, nécessitant une
            conception conviviale, des fonctionnalités interactives, une gestion
            efficace des membres et une stratégie de croissance solide.
          </p>
        </div>
        <div className="md:w-1/2 space-y-8 text-justify">
          <h1 className="text-3xl font-bold">Stratégie</h1>
          <p>
            La stratégie consistait à choisir le framework Next.js pour
            concevoir l&apos;outil nécessaire à Pascal. L&apos;intégration de
            PayPal a facilité l&apos;adhésion des membres. En quelques mois, la
            communauté a dépassé les 100 membres, démontrant le succès de la
            stratégie.
          </p>
        </div>
      </section>

      {/* Stacks utilisées */}
      <section className="w-full p-4 flex flex-col space-y-8">
        <h1 className="text-3xl font-bold">Stacks utilisées</h1>
        <div className="flex items-center justify-center space-x-4">
          <Chip color="primary" className="dark:bg-orange-500 dark:text-black">
            Next.JS
          </Chip>
          <Chip color="primary" className="dark:bg-orange-500 dark:text-black">
            Tailwind
          </Chip>
          <Chip color="primary" className="dark:bg-orange-500 dark:text-black">
            TypeScript
          </Chip>
          <Chip color="primary" className="dark:bg-orange-500 dark:text-black">
            Supabase
          </Chip>
        </div>
      </section>

      {/* Preview */}
      <section className="w-full">
        <h1 className="text-3xl font-bold mb-8">Preview</h1>

        <picture className="p-8">
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
        </picture>
      </section>

      <Link
        href="/projects"
        className="w-full flex flex-col my-32 items-center"
      >
        <Button
          variant="shadow"
          color="primary"
          className="dark:bg-orange-500 dark:text-black hover:underline"
        >
          Retour
        </Button>
      </Link>
    </>
  )
}
