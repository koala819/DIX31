import dynamic from 'next/dynamic'
import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/ui/button'

export default function Hero() {
  const WithCustomLoading = dynamic(() => import('@/lib/LoadImage'), {
    loading: () => <div>Chargement ...</div>,
  })

  const shimmer = (w: number, h: number) => `
  <svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <defs>
      <linearGradient id="g">
        <stop stop-color="#333" offset="20%" />
        <stop stop-color="#222" offset="50%" />
        <stop stop-color="#333" offset="70%" />
      </linearGradient>
    </defs>
    <rect width="${w}" height="${h}" fill="#333" />
    <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
    <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
  </svg>`

  const toBase64 = (str: string) =>
    typeof window === 'undefined'
      ? Buffer.from(str).toString('base64')
      : window.btoa(str)

  return (
    <>
      <h1>Votre vision est ma mission !</h1>
      <div className="lg:flex">
        {/* DISPLAY MOBILE VIEW */}
        <aside className="w-full lg:hidden flex justify-center">
          <Image
            src="/images/Accompagnement-dix31-mobile.webp"
            alt="dix31 vous accompagne dans votre projet"
            className="responsive rounded-3xl mb-2"
            placeholder={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
            width={350}
            height={200}
            priority
          />
        </aside>

        <aside className="flex w-full flex-col justify-center lg:mb-0 lg:w-1/2 lg:pb-24 space-y-8">
          <span>
            Libérons ensemble votre projet des complexités et des contraintes
            des abonnements pour naviguer sereinement dans le paysage numérique.
            Découvrez l&apos;excellence professionnelle et associez-vous à moi
            pour transformer vos idées numériques en réalité. Contactez-moi dès
            aujourd&apos;hui et franchissez le premier pas vers
            l&apos;émancipation de votre projet
          </span>
          <Link href="/contact">
            <Button>Commencez votre projet</Button>
          </Link>
        </aside>

        {/* DISPLAY LARGE VIEW */}
        <aside className="hidden lg:block lg:w-1/2">
          <picture className="hidden md:flex w-full justify-center p-8">
            <WithCustomLoading
              src="/images/Accompagnement-avec-dix31.webp"
              alt="dix31 vous accompagne dans votre projet"
              className="responsive"
              width={700}
              height={400}
              priority
            />
          </picture>
        </aside>
      </div>
    </>
  )
}
