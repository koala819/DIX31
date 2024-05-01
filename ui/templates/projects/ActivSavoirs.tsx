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

export default function Page() {
  const [index, setIndex] = useState<number>(-1)

  const photos = [
    {
      src: '/images/AS01.jpg',
      width: 1080,
      height: 800,
    },
    {
      src: '/images/AS02.jpg',
      width: 1080,
      height: 800,
    },
    {
      src: '/images/AS03.jpg',
      width: 1080,
      height: 800,
    },
    {
      src: '/images/AS04.jpg',
      width: 1080,
      height: 800,
    },
  ]

  return (
    <>
      <section className="text-gray-600 dark:text-gray-300 md:flex items-center justify-center p-4 ">
        <div className="w-full md:w-1/2 p-4">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 dark:text-gray-200">
            Activ&apos;Savoirs
          </h1>
          <p className="mb-8 leading-relaxed">
            Site web pour présenter un centre de formation professionnelle,
            couvrant neuf thématiques clés.
          </p>
          <div className="md:flex items-center space-x-4 mt-12 justify-center space-y-2 md:space-y-0">
            <Chip
              color="primary"
              className="dark:bg-orange-500 dark:text-black"
            >
              Projet avec un UX/UI
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
              Site Vitrine
            </Chip>
          </div>
        </div>
        <div className="flex justify-center w-full md:w-1/2 p-6">
          <Image
            alt="Activ'Savoirs website"
            className="object-cover"
            height={400}
            src="/images/ActivSavoirs.jpg"
            width={400}
          />
        </div>
      </section>

      {/* Secteur & Type de projet & Date de livraison  & Consulter le projet */}
      <section className="w-full mx-auto grid md:grid-cols-4 gap-x-4 p-4 space-y-12 md:space-y-0">
        <div className="text-center space-y-4 p-2 border-1 rounded-lg border-gray-300">
          <p className="font-bold text-lg">Secteur</p>
          <p>Indépendant</p>
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
            {/* <Link href='https://github.com/koala819/club306' target='_blank'>
              <Button size='sm' variant='shadow' color='primary'>
                Github
              </Button>
            </Link> */}
            <Tooltip
              content="Code non disponible"
              className="cursor-not-allowed"
            >
              <Button className="cursor-not-allowed" size="sm" variant="shadow">
                Github
              </Button>
            </Tooltip>

            <Link href="https://active-savoirs.vercel.app/" target="_blank">
              <Button
                size="sm"
                color="primary"
                className="mt-2 md:mt-0 dark:bg-orange-500 dark:text-black hover:underline"
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
            Le projet Activ Savoirs s&apos;est confronté à des défis techniques
            significatifs, axés principalement sur deux aspects : la création
            d&apos;une interface utilisateur moderne et la facilité de
            maintenance du contenu. Pour relever ces défis, j&apos;ai opté pour
            une combinaison robuste de technologies incluant Next.js,
            TypeScript, Prismic, et Tailwind. L&apos;aspect le plus crucial a
            été de développer une interface attrayante et intuitive, pour
            laquelle j&apos;ai collaboré étroitement avec un designer UX/UI.
            Cette collaboration a permis de fusionner esthétique moderne et
            fonctionnalité, aboutissant à une expérience utilisateur enrichie et
            engageante. Parallèlement, pour assurer une gestion de contenu
            flexible et efficace, j&apos;ai intégré Prismic comme CMS headless.
            Cette approche a grandement simplifié la mise à jour des diverses
            sections du site, permettant ainsi des ajustements rapides et des
            mises à jour régulières sans compromettre la performance ou la
            sécurité du site. Ensemble, ces solutions ont surmonté les obstacles
            techniques, aboutissant à un site de formation professionnelle à la
            fois esthétiquement plaisant et facile à maintenir.
          </p>
        </div>
        <div className="md:w-1/2 space-y-8 text-justify">
          <h1 className="text-3xl font-bold">Stratégie</h1>
          <p>
            La stratégie déployée pour le succès du site Activ Savoirs était
            centrée sur une communication et une gestion de projet efficaces,
            couplées à une analyse approfondie de la performance du site. Tout
            au long du développement, j&apos;ai maintenu une ligne de
            communication ouverte et régulière avec le client, organisant des
            réunions hebdomadaires via Google Meet et assurant une disponibilité
            quotidienne par e-mail. Cette approche a permis d&apos;aligner en
            permanence le développement du site avec les attentes et les besoins
            du client, tout en apportant des ajustements rapides en réponse aux
            feedbacks. Pour mesurer l&apos;impact et l&apos;efficacité du site,
            j&apos;ai intégré Google Analytics, un outil crucial pour suivre
            l&apos;évolution de la visibilité et de l&apos;engagement des
            utilisateurs. En combinant une gestion de projet agile avec des
            outils d&apos;analyse de pointe, la stratégie a non seulement
            facilité la livraison réussie d&apos;Activ Savoirs mais a également
            posé les fondations pour son succès continu dans le domaine de la
            formation professionnelle.
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
