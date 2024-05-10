'use client'

import { Button, Image } from '@nextui-org/react'

import Link from 'next/link'

import { useTheme } from '@/context/ThemeContext'

export default function Projets() {
  const { theme } = useTheme()

  const projects = [
    {
      link: 'https://www.club306.fr/',
      title: 'Club 306',
      picture: {
        alt: 'Screenshot Club 306',
        src: '/images/Club-306.jpg',
      },
      description:
        'Un espace en ligne innovant créé pour les amateurs de Peugeot 306,\n' +
        "alliant design actuel et facilité d'utilisation. Avec\n" +
        "l'intégration d'un moyen de paiement pour simplifier\n" +
        'pour les adhésions, ce site a su fédérer une communauté de plus de\n' +
        '100 membres en peu de temps. Grâce à des outils interactifs, une\n' +
        'gestion fluide de la communauté, et une stratégie de développement\n' +
        'efficace, il est devenu le point de rendez-vous incontournable\n' +
        'pour partager la passion de la Peugeot 306.',
    },
    {
      link: 'https://www.bonheursurseine.com/',
      title: 'Bonheur Sur Seine',
      picture: {
        alt: 'Screenshot Bonheur Sur Seine',
        src: '/images/Bonheur-Sur-Seine.jpg',
      },
      description:
        "Plongez dans l'univers de Bonheur Sur Seine, une plateforme\n" +
        'révolutionnaire dédiée aux aficionados de la gyroroue, conçue\n' +
        'spécialement pour un YouTubeur et wheeler éminent. Ce site se\n' +
        'distingue par une approche innovante, exploitant des technologies\n' +
        'avancées pour offrir une navigation fluide et une esthétique\n' +
        'soignée. Grâce à un design réactif et à une gestion de contenu\n' +
        "intuitive, les utilisateurs profitent d'une expérience en ligne\n" +
        'sans égale, où la mise à jour du contenu est à la fois simple et\n' +
        'instantanée, assurant ainsi une interaction constante et engageante\n' +
        'avec la communauté.',
    },
  ]

  return (
    <section className="mx-auto max-w-2xl px-4 py-16 sm:py-24 lg:max-w-7xl lg:px-8 space-y-6  text-gray-600 dark:text-gray-200">
      <div className="mx-auto pb-10">
        <h2 className="text-5xl md:text-6xl font-bold mb-5">Projets clés</h2>
        <span className="text-xl font-medium">
          Chaque site web que je développe est plus qu’une construction : c’est
          une collaboration. Ici, découvrez des projets uniques, chacun façonné
          avec le souci de répondre parfaitement à vos besoins. Plus qu’un
          simple service, je vous guide vers l’autonomie, vous permettant de
          gérer facilement le contenu de votre site, comme un pro, sans jamais
          vous sentir perdu dans la technique. Ensemble, donnons vie à vos
          idées, en vous assurant contrôle et simplicité.
        </span>
      </div>

      {projects.map((project, index) => (
        <section className="w-full p-6" key={index}>
          <Link
            href={project.link}
            target="_blank"
            className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4 hover:-translate-y-2 hover:shadow-2xl rounded-2xl cursor-pointer border p-8 hover:bg-blue-100 dark:hover:bg-orange-300 hover:opacity-75 dark:hover:opacity-100 dark:hover:text-black text-gray-800 dark:text-white"
          >
            <picture className="w-full">
              <Image alt={project.picture.alt} src={project.picture.src} />
            </picture>

            <div className="w-full space-y-8">
              <h3 className="text-xl font-semibold ">{project.title}</h3>
              <p className="text-md ">{project.description}</p>
            </div>
          </Link>
        </section>
      ))}

      <div className="text-center">
        <Link href="/contact">
          <Button
            color={theme === 'dark' ? 'warning' : 'primary'}
            variant="shadow"
          >
            Commençons notre Collaboration
          </Button>
        </Link>
      </div>
    </section>
  )
}
