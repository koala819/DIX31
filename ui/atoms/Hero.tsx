import { Button } from '@nextui-org/react'

import dynamic from 'next/dynamic'
// import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  const WithCustomLoading = dynamic(() => import('@/ui/atoms/LoadPictures'), {
    loading: () => <div>Chargement ...</div>,
  })
  return (
    <section className="mx-auto max-w-2xl px-4 lg:max-w-7xl lg:px-8">
      <div className="flex flex-wrap justify-between">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-600 dark:text-gray-200 mb-6">
          Créez avec Liberté, Vivez sans Limite
        </h1>
      </div>
      <aside className="flex w-full flex-col justify-center lg:mb-0 lg:w-1/2 lg:pb-24">
        <div className="container mx-auto px-4">
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-6">
            Dans l&apos;arène numérique, où la simplicité rencontre
            l&apos;innovation, je forge des sites web qui parlent...
            <Link
              href="https://www.bonheursurseine.com/"
              target="_blank"
              className="underline hover:text-blue-600 dark:hover:text-orange-600 font-bold"
            >
              BonheurSurSeine
            </Link>
            à l&apos;esprit communautaire du
            <Link
              href="https://www.club306.fr/"
              target="_blank"
              className="underline hover:text-blue-600 dark:hover:text-orange-600 font-bold"
            >
              Club 306
            </Link>
            , mon approche, centrée sur votre besoin est ma devise. Ensemble,
            émancipons votre projet du labyrinthe des abonnements et des
            complexités.
          </p>

          <Link href="/contact" className="flex justify-center">
            <Button
              // color={theme === 'dark' ? 'warning' : 'primary'}
              variant="shadow"
            >
              Commencez votre projet
            </Button>
          </Link>
        </div>
      </aside>
      <aside className="w-full lg:w-1/2">
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
            alt="Accompagner"
            layout="responsive"
            width={700}
            height={400}
          />
        </picture>
      </aside>
    </section>
  )
}
