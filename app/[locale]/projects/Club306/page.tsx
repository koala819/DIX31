import { Metadata } from 'next'

import { Project } from '@/components/atoms/Project'

export const metadata: Metadata = {
  title: 'Club 306 - La Communauté des Passionnés de Peugeot 306 | DIX31',
  description:
    'Découvrez le Club 306, un site web dédié aux passionnés de la Peugeot 306. Ce projet unique par DIX31 utilise Next.js, Tailwind, TypeScript, et Supabase pour créer une expérience communautaire interactive et engageante, mettant en avant la passion pour cette voiture emblématique.',
}

export default function Page() {
  const realisations = {
    title: 'Club 306',
    presentation:
      'Le Club 306 est une communauté vibrante qui rassemble les\n' +
      "aficionados de la Peugeot 306, célébrant ensemble l'héritage de\n" +
      'ce modèle emblématique. Ce site web communautaire sert de plateforme\n' +
      'pour partager leur passion et leurs expériences.',
    picture: {
      alt: 'Club306 website',
      src: '/images/Club-306.jpg',
    },
    secteurs: [
      { name: 'Secteur', description: 'Association' },
      { name: 'Type de projet', description: 'Application Web' },
      { name: 'Date de livraison', description: '2023' },
    ],
    links: [
      { name: 'Github', url: 'https://github.com/koala819/club306' },
      { name: 'Visiter', url: 'https://www.club306.fr/' },
    ],
    challenges: [
      {
        title: 'Défi Technique',
        description:
          'Développer un site web attrayant et fonctionnel pour le Club 306 était essentiel\n' +
          "pour répondre aux attentes de Pascal Besnard, le président de l'association.\n" +
          "L'objectif était ambitieux : fédérer une communauté de 100 passionnés en trois\n" +
          'ans.Pour cela, le site nécessitait une interface utilisateur intuitive, des\n' +
          'fonctionnalités interactives avancées, une gestion efficace des membres, et une\n' +
          'stratégie de croissance robuste.',
      },
      {
        title: 'Stratégie Employée',
        description:
          'La solution a été de construire le site avec le framework Next.js, optimisant\n' +
          "ainsi la performance et l'expérience utilisateur. L'intégration de solutions de\n" +
          "paiement comme PayPal a simplifié le processus d'adhésion, augmentant\n" +
          "l'accessibilité pour les nouveaux membres. Le succès ne s'est pas fait\n" +
          "attendre : la communauté a rapidement atteint et dépassé l'objectif de 100\n" +
          "membres, prouvant l'efficacité de notre approche.",
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
        name: 'Supabase',
      },
    ],
    gallery:
      "Découvrez le dynamisme et les fonctionnalités du Club 306 à travers notre sélection d'images. Chaque photo illustre les solutions innovantes que nous avons intégrées pour enrichir cette communauté passionnée.",
    photos: [
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
    ],
  }

  return <Project realisations={realisations} />
}
