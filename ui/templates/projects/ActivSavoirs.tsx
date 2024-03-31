'use client'

import {
  Button,
  Chip,
  Modal,
  ModalContent,
  Tooltip,
  useDisclosure,
} from '@nextui-org/react'
import { useState } from 'react'

import Image from 'next/image'
import Link from 'next/link'

export default function Page() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()
  const [imageSrc, setImageSrc] = useState<string>('')

  function displayBigPicture(picture: string) {
    onOpen()
    setImageSrc(`/images/${picture}.jpg`)
  }

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
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        size="5xl"
        hideCloseButton
      >
        <ModalContent>
          {() => (
            <Image
              className="object-cover object-center w-full h-full"
              alt="Panel member club 306"
              height={1000}
              src={imageSrc}
              width={1000}
            />
          )}
        </ModalContent>
      </Modal>
      <section className="w-full p-4">
        <>
          <h1 className="text-3xl font-bold">Preview</h1>
          <div className="w-full mx-auto grid md:grid-cols-4 gap-x-4 p-4 space-y-12 md:space-y-0">
            <div className="text-center space-y-4 p-2 border-1 rounded-lg border-gray-300">
              <Image
                onClick={() => displayBigPicture('AS01')}
                alt="Activ'Savoirs Thematique"
                className="object-cover"
                height={400}
                src="/images/AS01.jpg"
                width={400}
              />
            </div>
            <div className="text-center space-y-4 p-2 border-1 rounded-lg border-gray-300">
              <Image
                onClick={() => displayBigPicture('AS02')}
                alt="Activ'Savoirs Formateur"
                className="object-cover"
                height={400}
                src="/images/AS02.jpg"
                width={400}
              />
            </div>
            <div className="text-center space-y-4 p-2 border-1 rounded-lg border-gray-300">
              <Image
                onClick={() => displayBigPicture('AS03')}
                alt="Activ'Savoirs full site"
                className="object-cover"
                height={400}
                src="/images/AS03.jpg"
                width={400}
              />
            </div>
            <div className="text-center space-y-4 p-2 border-1 rounded-lg border-gray-300">
              <Image
                onClick={() => displayBigPicture('AS04')}
                alt="Activ'Savoirs avis user"
                className="object-cover"
                height={400}
                src="/images/AS04.jpg"
                width={400}
              />
            </div>
          </div>
        </>
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
