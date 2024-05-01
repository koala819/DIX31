'use client'

import { Button, Chip, Image, Tooltip } from '@nextui-org/react'
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
      src: '/images/BSS01.jpg',
      width: 1080,
      height: 800,
    },
    {
      src: '/images/BSS02.jpg',
      width: 1080,
      height: 800,
    },
    {
      src: '/images/BSS03.jpg',
      width: 1080,
      height: 800,
    },
    {
      src: '/images/BSS04.jpg',
      width: 1080,
      height: 800,
    },
  ]

  return (
    <>
      <section className="text-gray-600 dark:text-gray-300 md:flex items-center justify-center p-4 ">
        <div className="w-full md:w-1/2 p-4">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 dark:text-gray-200">
            Bonheur Sur Seine
          </h1>
          <p className="mb-8 leading-relaxed">
            Bonheur sur Seine unit les wheelers, passionnés de gyroroue, dans la
            célébration de cette glisse urbaine, partageant leur enthousiasme
            pour ces déplacements innovants et écologiques au cœur de la ville.
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
        <div className="flex justify-center w-full md:w-1/2 p-6">
          <Image
            alt="Bonheur Sur Seine website"
            className="object-cover"
            height={400}
            src="/images/BonheurSurSeine.jpg"
            width={400}
          />
        </div>
      </section>

      {/* Secteur & Type de projet & Date de livraison  & Consulter le projet */}
      <section className="w-full mx-auto grid md:grid-cols-4 gap-x-4 p-4 space-y-12 md:space-y-0">
        <div className="text-center space-y-4 p-2 border-1 rounded-lg border-gray-300">
          <p className="font-bold text-lg">Secteur</p>
          <p>Site Perso</p>
        </div>
        <div className="text-center space-y-4 p-2 border-1 rounded-lg border-gray-300">
          <p className="font-bold text-lg">Type de projet</p>
          <p>Application Web</p>
        </div>
        <div className="text-center space-y-4 p-2 border-1 rounded-lg border-gray-300">
          <p className="font-bold text-lg">Date de livraison</p>
          <p>2024</p>
        </div>
        <div className="text-center space-y-4 p-2 border-1 rounded-lg border-gray-300">
          <p className="font-bold text-lg">Consulter le projet</p>
          <div className="space-x-2">
            <Tooltip
              content="Code non disponible"
              className="cursor-not-allowed"
            >
              <Button className="cursor-not-allowed" size="sm" variant="shadow">
                Github
              </Button>
            </Tooltip>

            <Link href="https://www.bonheursurseine.com/" target="_blank">
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
            Le challenge technique était de créer un site web communautaire
            dynamique pour Bonheur sur Seine, sous la direction de Raphael, un
            YouTuber français passionné par les gyroroues. L&apos;objectif était
            de sensibiliser le grand public au plaisir de la gyroroue tout en
            promouvant les bonnes pratiques et la sécurité. Avec une ambition de
            démontrer un niveau de développement web de pointe, le site vise à
            attirer de nouveaux clients par ses fonctionnalités innovantes,
            telles que le &rdquo;Bonheur Score&rdquo;, permettant de classer les
            gyroroues, et une section dédiée aux règles de sécurité pour une
            pratique responsable. Ce projet met en avant la passion de Raphael
            pour la gyroroue avec l&apos;espoir d&apos;inspirer et de rassembler
            une communauté variée autour de ce mode de transport écologique et
            moderne.
          </p>
        </div>
        <div className="md:w-1/2 space-y-8 text-justify">
          <h1 className="text-3xl font-bold">Stratégie</h1>
          <p>
            Pour concrétiser la vision de Raphael et créer un espace engageant
            pour les passionnés de gyroroue, le choix s&apos;est porté sur le
            framework Next.js, reconnu pour sa flexibilité et sa performance.
            L&apos;innovation majeure a été le développement du &rdquo;Bonheur
            Score&rdquo;, un système unique d&apos;évaluation des gyroroues,
            associé à un ensemble complet de directives de sécurité, visant à
            éduquer et à engager la communauté. L&apos;utilisation de
            technologies modernes comme Tailwind pour le design et TypeScript
            pour une programmation plus robuste a permis d&apos;offrir une
            expérience utilisateur fluide et réactive. Cette stratégie technique
            avancée visait non seulement à refléter l&apos;expertise de
            développement web de Raphael mais aussi à attirer de nouveaux
            clients par la démonstration d&apos;un travail de qualité
            supérieure. Le succès de &rdquo;Bonheur sur Seine&rdquo; en tant que
            plateforme communautaire est la preuve que la combinaison d&apos;une
            passion partagée avec une exécution technique impeccable peut créer
            un espace en ligne vibrant et accueillant pour tous.
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
            Prismic
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
