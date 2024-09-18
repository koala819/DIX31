import { Metadata } from 'next'

import { Project } from '@/components/@unused/Project'

export const metadata: Metadata = {
  title: "Activ'Savoirs - Site de Formation Professionnelle par DIX31",
  description:
    "Découvrez Activ'Savoirs, un site web innovant conçu par DIX31 pour une expérience utilisateur enrichie. Le projet illustre notre expertise en Next.js, Tailwind, TypeScript, et Prismic, offrant une interface moderne et une gestion de contenu flexible pour le secteur de la formation professionnelle.",
}

export default function Page() {
  const realisations = {
    title: "Activ'Savoirs",
    presentation:
      "Activ'Savoirs est un site web dédié à la présentation d'un centre de formation\n" +
      'professionnelle continue, abordant neuf thématiques clés. Cette plateforme est\n' +
      'conçue pour offrir une expérience utilisateur optimale, grâce à une interface\n' +
      'moderne et une gestion de contenu aisée.',
    picture: {
      alt: "Activ'Savoirs website",
      src: '/images/ActivSavoirs.jpg',
    },
    secteurs: [
      { name: 'Secteur', description: 'Indépendant' },
      { name: 'Type de projet', description: 'Application Web' },
      { name: 'Date de livraison', description: '2023' },
    ],
    links: [
      { name: 'Github', url: '#' },
      { name: 'Visiter', url: 'https://active-savoirs.vercel.app/' },
    ],
    challenges: [
      {
        title: 'Défi Technique',
        description:
          "Le développement d'Activ Savoirs présentait des défis complexes, principalement\n " +
          "dans la conception d'une interface utilisateur (UI) moderne et dans la facilité\n " +
          'de maintenance du contenu. Pour y répondre, une combinaison de technologies de\n ' +
          'pointe telles que Next.js, TypeScript, Prismic, et Tailwind a été employée. Un\n ' +
          'effort particulier a été consacré à créer une interface attrayante et intuitive\n ' +
          'en collaboration étroite avec un designer UX/UI, intégrant esthétique moderne et\n ' +
          "fonctionnalité pratique pour une expérience utilisateur supérieure. L'adoption de\n " +
          'Prismic comme CMS headless a simplifié la gestion du contenu, permettant des mises\n ' +
          'à jour fluides et régulières.',
      },
      {
        title: 'Stratégie Employée',
        description:
          "La stratégie pour Activ Savoirs a mis l'accent sur une communication efficace et\n " +
          'une gestion agile du projet. Des réunions régulières via Google Meet et une\n ' +
          'communication constante par e-mail ont assuré une synchronisation parfaite avec\n ' +
          "les attentes du client et une réactivité aux retours. L'intégration de Google\n " +
          "Analytics a permis de suivre précisément l'évolution de l'engagement utilisateur\n " +
          'et de la visibilité du site, ce qui a grandement aidé à ajuster les stratégies en\n ' +
          "temps réel pour maximiser l'impact du site.",
      },
    ],
    stacks: [
      {
        name: 'Next.js',
      },
      {
        name: 'Tailwind CSS',
      },
      {
        name: 'TypeScript',
      },
      {
        name: 'Prismic',
      },
    ],
    gallery:
      "Explorez quelques-unes des fonctionnalités clés et l'esthétique du site à travers\n " +
      "notre galerie d'images, illustrant la fusion réussie entre design moderne et\n " +
      'fonctionnalité utilisateur.',
    photos: [
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
    ],
  }

  return <Project realisations={realisations} />
}
