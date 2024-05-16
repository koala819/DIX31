import dynamic from 'next/dynamic'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

export const Achievements = () => {
  const projects = [
    {
      insideLink: '/projects/Club306',
      title: 'Club 306',
      picture: {
        src: '/images/Club-306.jpg',
        alt: 'Club 306 website',
      },
      description:
        'Rejoignez la communauté des passionnés de la Peugeot 306. Notre site offre un\n' +
        "espace dynamique pour partager, célébrer et découvrir l'héritage de ce véhicule\n" +
        'emblématique.',
      avis:
        'Xavier est devenu un développeur fullstack talentueux qui a joué un rôle' +
        ' essentiel dans la création de notre site internet du club. Sa contribution' +
        ' exceptionnelle a transformé notre vision en une réalité numérique époustouflante.' +
        ' De plus, il a su créer un site internet qui non seulement répond à nos besoins, mais' +
        ' qui dépasse largement nos attentes. Sa maîtrise du développement front-end et back-end' +
        ' lui a permis de concevoir une expérience utilisateur fluide et conviviale.' +
        ' ' +
        'Son attitude positive et son dévouement en font un atout précieux pour toute équipe' +
        " de développement. Nous avons tous pu travailler avec lui et il a su s'adapter à nos différentes" +
        ' approches, demandes, et personnalité. Par conséquent, sa capacité à travailler en équipe a' +
        " également été un atout précieux, collaborant efficacement avec d'autres membres de l'équipe" +
        ' pour atteindre nos objectifs communs.' +
        ' ' +
        'Le Club306, son staff, et ses membres sont ravi de recommander Xavier pour vos projets. Nous' +
        " ne vous cacherons pas que le travail de Xavier a été crucial dans la mise en place d'une" +
        ' stratégie virtuelle de notre club.',
      proprietaire: 'Pascal',
      avatar: '/images/Pascal BESNARD.jpeg',
      link: {
        name: 'Linkedin',
        url: 'https://www.linkedin.com/in/xavier%F0%9F%92%BB-genolhac-79a98390',
      },
    },
    {
      insideLink: '/projects/BonheurSurSeine',
      title: 'Bonheur Sur Seine',
      picture: {
        src: '/images/Bonheur-Sur-Seine.jpg',
        alt: 'Bonheur Sur Seine website',
      },
      description:
        "Plongez dans l'univers des gyroroues avec Bonheur Sur Seine. Ce site\n" +
        'communautaire met en avant la mobilité urbaine écologique et vous engage avec des\n' +
        'scores interactifs et des guides de sécurité.',
      avis: 'Xavier est une personne sérieuse, compétente qui a su réaliser ce projet avec brio.',
      proprietaire: 'Raphael',
      avatar: '/images/BonheurSurSeine_logo.png',
      link: {
        name: 'Youtube',
        url: 'https://www.youtube.com/watch?v=zh5neo3xsa0',
      },
    },
    {
      insideLink: '/projects/Thouy',
      title: 'Thouy',
      picture: {
        src: '/images/Thouy.jpg',
        alt: 'Gîtes de Thouy website',
      },
      description:
        'Vivez le Tarn comme jamais auparavant. Les Gîtes de Thouy vous offrent un\n' +
        'hébergement charmant et pratique, avec une réservation en ligne simplifiée pour\n' +
        'une escapade parfaite.',
      avis:
        'Nous avons apprécié son professionnalisme et sa motivation. Xavier' +
        ' est un technicien développeur compétent qui a su se rendre' +
        " disponible aux moments ou nous en avons eu besoin. C'est avec" +
        ' une confiance évidente que nous pourrions lui confier de nouvelles' +
        ' missions. Son charisme et ses qualités humaines sont un plus dans' +
        ' ces relations de travail.',
      proprietaire: 'Sandrine',
      avatar: '/images/Sandrine PELLISER.jpeg',
      link: {
        name: 'Linkedin',
        url: 'https://www.linkedin.com/in/xavier%F0%9F%92%BB-genolhac-79a98390',
      },
    },
    {
      insideLink: '/projects/ActivSavoirs',
      title: "Activ'Savoirs",
      picture: {
        src: '/images/ActivSavoirs.jpg',
        alt: 'ActivSavoirs website',
      },
      description:
        "Un portail éducatif sur mesure, Activ'Savoirs simplifie l'accès à la formation" +
        'professionnelle continue. Explorez des cours dans divers domaines et avancez dans' +
        'votre carrière professionnelle.',
      avis:
        "Si vous recherchez un prestataire qui conjugue professionnalisme, sens avéré de l'écoute et une véritable dimenssion humaine pour " +
        'la création de votre futur site internet je vous recommande dans ce cas les services de Xavier Genolhac. ' +
        "Ainsi, je voulais partager avec vous mon expérience client car Xavier a réalisé le nouveau site internet de mon entreprise Activ' Savoirs. " +
        'Il est très sérieux, particuliérement fiable et animé par un véritable souci de la satisfaction de son client. ' +
        "Cerise sur le gateau ses prestations sont d'un excellent rapport qualité/prix " +
        "Consultez le sans réserve et je suis convaincu que vous viendrez enrichir ses recommandations car il le mérite à plus d'un égard.",
      proprietaire: 'Vincent',
      avatar: '/images/Vincent DECLERCQ.jpeg',
      link: {
        name: 'Linkedin',
        url: 'https://www.linkedin.com/in/xavier%F0%9F%92%BB-genolhac-79a98390',
      },
    },
  ]

  const WithCustomLoading = dynamic(() => import('@/lib/LoadImage'), {
    loading: () => <div>Chargement ...</div>,
  })

  return (
    <div className="container space-y-8">
      {projects.map((project) => (
        <Card
          key={project.title}
          className="shadow-lg shadow-gray-600 lg:flex lg:flex-col rounded-2xl border p-8"
        >
          <CardHeader>
            <CardTitle>{project.title}</CardTitle>
            <CardDescription className="dark:text-white">
              {project.description}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <WithCustomLoading
                alt={project.picture.alt}
                className="rounded-lg object-cover"
                height={300}
                width={500}
                src={project.picture.src}
              />
              <div className="space-y-4">
                <blockquote className="text-lg italic">
                  {project.avis}
                  <div className="mt-4 flex items-center space-x-4 text-sm">
                    <div>
                      {project.avis !== '' && (
                        <div className="font-medium">
                          <WithCustomLoading
                            src={project.avatar || ''}
                            alt={`Photo de ${project.proprietaire}`}
                            width={50}
                            height={50}
                            className="rounded-full"
                          />
                          {project.proprietaire}
                        </div>
                      )}
                      <Link
                        className="hover:underline"
                        href={project.link.url}
                        rel="noreferrer"
                        target="_blank"
                      >
                        Découvrir son avis sur {project.link.name}
                      </Link>
                    </div>
                  </div>
                </blockquote>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-center">
            <Link href={project.insideLink}>
              <Button className="dark:bg-blue-900 dark:text-white">
                Explorer
              </Button>
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
