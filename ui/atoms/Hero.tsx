import dynamic from 'next/dynamic'
import Link from 'next/link'

import { Button } from '@/components/ui/button'

const WithCustomLoading = dynamic(() => import('@/ui/atoms/LoadPictures'), {
  loading: () => <div>Chargement ...</div>,
})

export default function Hero() {
  return (
    <section className="mx-auto max-w-2xl px-4 lg:max-w-7xl lg:px-8 bg-blue-500 sm:bg-red-400 md:bg-green-400 lg:bg-yellow-500 xl:bg-orange-500 2xl:border-l-cyan-600">
      <h1 className="font-sans text-4xl md:text-6xl font-bold text-gray-600 dark:text-gray-200 mb-6">
        Votre vision est ma mission !
      </h1>
      <section className="lg:flex">
        <aside className="w-full lg:hidden">
          <WithCustomLoading
            src="/images/Accompagner.webp"
            alt="dix31 vous accompagne dans votre projet"
            className="responsive"
            width={700}
            height={400}
            priority
          />
        </aside>
        <aside className="flex w-full flex-col justify-center lg:mb-0 lg:w-1/2 lg:pb-24 bg-blue-200">
          <div className="container mx-auto px-4">
            <p className="font-sans text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-6">
              Libérons ensemble votre projet des complexités et des contraintes
              des abonnements pour naviguer sereinement dans le paysage
              numérique. Découvrez l&apos;excellence professionnelle et
              associez-vous à moi pour transformer vos idées numériques en
              réalité. Contactez-moi dès aujourd&apos;hui et franchissez le
              premier pas vers l&apos;émancipation de votre projet
            </p>
            <Link href="/contact">
              <Button className="flex justify-center">
                Commencez votre projet
              </Button>
            </Link>
          </div>
        </aside>
        <aside className="hidden lg:block lg:w-1/2 bg-purple-500">
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
    </section>
  )
}
