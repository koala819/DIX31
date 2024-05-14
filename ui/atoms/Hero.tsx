// import { Button } from '@nextui-org/react'
import dynamic from 'next/dynamic'
// import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/ui/button'

export default function Hero() {
  const WithCustomLoading = dynamic(() => import('@/ui/atoms/LoadPictures'), {
    loading: () => <div>Chargement ...</div>,
  })
  return (
    <section className="mx-auto max-w-2xl px-4 lg:max-w-7xl lg:px-8">
      <div className="flex flex-wrap justify-between">
        <h1 className="font-sans text-4xl md:text-6xl font-bold text-gray-600 dark:text-gray-200 mb-6">
          Votre vision est ma mission !
        </h1>
      </div>
      <aside className="flex w-full flex-col justify-center lg:mb-0 lg:w-1/2 lg:pb-24 bg-blue-200">
        <div className="container mx-auto px-4">
          <p className="font-sans text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-6">
            Libérons ensemble votre projet des complexités et des contraintes
            des abonnements pour naviguer sereinement dans le paysage numérique.
            Découvrez l&apos;excellence professionnelle et associez-vous à moi
            pour transformer vos idées numériques en réalité. Contactez-moi dès
            aujourd&apos;hui et franchissez le premier pas vers
            l&apos;émancipation de votre projet
          </p>

          <Link href="/contact" className="flex justify-center">
            <Button
            // color={theme === 'dark' ? 'warning' : 'primary'}
            // variant="shadow"
            >
              Commencez votre projet
            </Button>
          </Link>
        </div>
      </aside>
      <aside className="w-full lg:w-1/2 bg-red-200">
        {/* <LazyLoad className="flex items-center justify-center  h-full p-8">
            <ReactPlayer
              url="https://www.youtube.com/watch?v=6TOL9fLe5yM"
              controls={true}
              width="100%"
              alt="Vidéo promotionnelle inspirante pour le Starter Pack DIX31, illustrant ses multiples fonctionnalités avec des images captivantes de personnes, chutes d'eau et étoiles, et mettant en avant des phrases clés motivantes pour lancer des projets créatifs et innovants."
              style={{ aspectRatio: '16 / 9' }}
            />
          </LazyLoad> */}
        <picture className="hidden md:flex w-full justify-center p-8">
          <WithCustomLoading
            src="/images/Accompagner.webp"
            alt="dix31 vous accompagne dans votre projet"
            className="responsive"
            width={700}
            height={400}
            priority
          />
        </picture>
      </aside>
    </section>
  )
}
