import { Metadata } from 'next'

import { Project } from '@/components/@unused/Project'

export const metadata: Metadata = {
  title: 'Bonheur Sur Seine - La Communauté de la gyroroue en France | DIX31',
  description:
    "Explorez le monde de la gyroroue avec DIX31: un hub communautaire pour les amateurs d'EDPM. Découvrez, partagez via Next.js, Tailwind, TypeScript",
  alternates: {
    canonical: `${process.env.CLIENT_URL}/BonheurSurSeine`,
  },
}

export default function Page() {
  const realisations = {
    title: 'Bonheur Sur Seine',
    presentation:
      'Bonheur Sur Seine est une plateforme communautaire dédiée aux passionnés de gyroroue,\n' +
      "aussi connus comme wheelers. Ce site célèbre l'art de la glisse urbaine en partageant\n" +
      "l'enthousiasme pour ce moyen de transport innovant et écologique, tout en rassemblant\n" +
      'une communauté autour de la passion urbaine au cœur de la ville.',
    picture: {
      alt: 'BonheurSurSeine website',
      src: '/images/Bonheur-Sur-Seine.jpg',
    },
    secteurs: [
      { name: 'Secteur', description: 'Site Personnel' },
      { name: 'Type de projet', description: 'Application Web' },
      { name: 'Date de livraison', description: '2024' },
    ],
    links: [
      { name: 'Github', url: '#' },
      { name: 'Visiter', url: 'https://www.bonheursurseine.com/' },
    ],
    challenges: [
      {
        title: 'Défi Technique',
        description:
          'Le défi principal pour le projet Bonheur sur Seine, dirigé par Raphael, un\n ' +
          'YouTuber et fervent adepte des gyroroues, était de créer une plateforme web\n' +
          'dynamique qui incarne à la fois la passion pour ce hobby et les pratiques\n' +
          'responsables. Le site devait non seulement éduquer sur le plaisir des gyroroues\n ' +
          "mais aussi promouvoir la sécurité et le respect des règles. L'introduction du\n" +
          '"Bonheur Score", un système de classement innovant pour évaluer les gyroroues,\n' +
          "ainsi qu'une section exhaustive sur les normes de sécurité, étaient au cœur de\n" +
          'cette initiative pour rendre le site fonctionnel et informatif.',
      },
      {
        title: 'Stratégie Employée',
        description:
          "La vision de Raphael a été concrétisée grâce à l'utilisation du framework Next.js,\n" +
          'choisi pour sa flexibilité et sa haute performance. Le développement du "Bonheur\n' +
          'Score" a innové en créant un moyen unique et interactif pour évaluer les gyroroues.\n' +
          'Le design du site, réalisé avec Tailwind CSS, et la programmation robuste en\n' +
          "TypeScript ont permis d'offrir une expérience utilisateur fluide et engageante.\n" +
          "L'approche technique avancée a non seulement démontré l'expertise en développement\n" +
          'web mais a aussi aidé à attirer de nouveaux utilisateurs par une présentation de\n' +
          'qualité supérieure.',
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
      "Découvrez à travers notre galerie d'images comment Bonheur Sur Seine fusionne\n" +
      'esthétique moderne, fonctionnalités pratiques et engagement communautaire, reflétant\n' +
      'la passion urbaine de la gyroroue.',
    photos: [
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
    ],
  }

  return <Project realisations={realisations} />
}
