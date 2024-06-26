import dynamic from 'next/dynamic'
import Link from 'next/link'

import { Button } from '@/components/ui/button'

export default function Projets() {
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
  const WithCustomLoading = dynamic(() => import('@/lib/LoadImage'), {
    loading: () => <div>Chargement ...</div>,
  })

  return (
    <>
      <h2 className="pb-12">Projets clés</h2>
      <span>
        Chaque site web créé est une collaboration unique ! Il est conçu pour
        répondre précisément à vos besoins. Découvrez deux projets sur-mesure,
        chacun façonné avec une attention particulière pour garantir une
        expérience utilisateur optimale. Nous offrons bien plus qu&apos;un
        simple service :{' '}
        <strong>nous vous guidons vers l&apos;indépendance</strong>. Gérez le
        contenu de votre site avec aisance et confiance, sans jamais vous sentir
        submergé par la complexité technique. Ensemble, transformons vos idées
        en réalité, en vous assurant <strong>un contrôle total</strong> et{' '}
        <strong>une simplicité d&apos;utilisation</strong>. Contactez-nous pour
        commencer à donner vie à vos visions.
      </span>

      {projects.map((project, index) => (
        <section className="w-full p-6" key={index}>
          <Link
            href={project.link}
            target="_blank"
            className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4 hover:-translate-y-2 hover:shadow-2xl rounded-2xl cursor-pointer border p-8 hover:bg-blue-100 dark:hover:bg-blue-500  dark:hover:opacity-100 dark:hover:text-black"
          >
            <picture className="w-full">
              <WithCustomLoading
                alt={project.picture.alt}
                src={project.picture.src}
                width={700}
                height={400}
              />
            </picture>

            <div className="w-full">
              <h3 className="mb-4">{project.title}</h3>
              <span>{project.description}</span>
            </div>
          </Link>
        </section>
      ))}

      <div className="text-center">
        <Link href="/contact">
          <Button>Planifiez une Consultation Gratuite</Button>
        </Link>
      </div>
    </>
  )
}
