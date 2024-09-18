import { Metadata } from 'next'

import { Project } from '@/components/@unused/Project'

export const metadata: Metadata = {
  title: 'Gîtes de Thouy - Location de Gîtes dans le Tarn | Projet de DIX31',
  description:
    "Découvrez 'Gîtes de Thouy', un site de location de gîtes personnalisé conçu pour offrir une expérience unique dans le Tarn. Ce projet illustre l'expertise de DIX31 en création de sites vitrines axés sur le tourisme, combinant esthétique et fonctionnalité pour une expérience utilisateur optimale.",
}

export default function Page() {
  const realisations = {
    title: 'Gîtes de Thouy',
    presentation:
      'Découvrez les charmes du Tarn et réservez une expérience unique grâce à notre site\n' +
      'personnalisé de location de gîtes. Les Gîtes de Thouy vous invitent à explorer cette\n' +
      'région pittoresque avec confort et style.',
    picture: {
      alt: 'Thouy gîtes website',
      src: '/images/Thouy.jpg',
    },
    secteurs: [
      { name: 'Secteur', description: 'Tourisme' },
      { name: 'Type de projet', description: 'Site Vitrine' },
      { name: 'Date de livraison', description: '2005' },
    ],
    links: [
      { name: 'Github', url: '#' },
      {
        name: 'Visiter',
        url: 'https://web.archive.org/web/20150221195549/http:/www.gites-tarn-thouy.com/index.php',
      },
    ],
    challenges: [
      {
        title: 'Défi Technique',
        description:
          'Monsieur Dominique Thouy, le propriétaire, souhaitait accroître la visibilité en\n' +
          'ligne de ses cinq gîtes pour toucher un public plus large. Le challenge a été de\n' +
          'développer une plateforme en ligne professionnelle qui non seulement met en\n' +
          "valeur chaque gîte, mais facilite également la réservation en ligne. L'objectif\n" +
          'était de créer un site attrayant et facile à naviguer, augmentant ainsi les\n' +
          'réservations et la satisfaction des clients.',
      },
      {
        title: 'Stratégie Employée',
        description:
          'Pour répondre à ces exigences, une plateforme robuste et conviviale a été mise en\n' +
          'place, intégrant des fonctionnalités de réservation avancées pour une gestion\n' +
          "efficace des séjours. La simplicité d'utilisation a été priorisée pour garantir\n" +
          'une expérience utilisateur agréable, encourageant les visiteurs à explorer toutes\n' +
          'les options disponibles et à réserver directement en ligne.',
      },
    ],
    stacks: [
      {
        name: 'HTML',
      },
      {
        name: 'CSS',
      },
      {
        name: 'PHP',
      },
    ],
  }

  return <Project realisations={realisations} />
}
