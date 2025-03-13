import { getTranslations } from 'next-intl/server'

import ProjectCard from '@/components/molecules/ProjectCard'

export default async function ProjectsContainer() {
  // Utilisation de getTranslations côté serveur au lieu de useTranslations
  const t = await getTranslations('Projects')

  // Construction des données des projets côté serveur
  const projects = [
    {
      title: t('Club306.title'),
      picture: {
        src: t('Club306.img.src'),
        alt: t('Club306.img.alt'),
      },
      description: t('Club306.description'),
      expertise: [
        t('Club306.expertise.one'),
        t('Club306.expertise.two'),
        t('Club306.expertise.three'),
        t('Club306.expertise.four'),
        t('Club306.expertise.five'),
      ],
      testimonial: {
        content: t('Club306.testimonial.content'),
        author: t('Club306.testimonial.author'),
        role: t('Club306.testimonial.role'),
        avatar: t('Club306.testimonial.img.src') || '',
      },
      link: {
        url: t('Club306.link.url'),
      },
    },
    {
      title: t('BonheurSurSeine.title'),
      picture: {
        src: t('BonheurSurSeine.img.src'),
        alt: t('BonheurSurSeine.img.alt'),
      },
      description: t('BonheurSurSeine.description'),
      expertise: [
        t('BonheurSurSeine.expertise.one'),
        t('BonheurSurSeine.expertise.two'),
        t('BonheurSurSeine.expertise.three'),
        t('BonheurSurSeine.expertise.four'),
        t('BonheurSurSeine.expertise.five'),
      ],
      testimonial: {
        content: t('BonheurSurSeine.testimonial.content'),
        author: t('BonheurSurSeine.testimonial.author'),
        role: t('BonheurSurSeine.testimonial.role'),
        avatar: t('BonheurSurSeine.testimonial.img.src'),
      },
      link: {
        url: t('BonheurSurSeine.link.url'),
      },
    },
  ]

  return (
    <div className="container space-y-8">
      <h1 className="text-3xl font-bold mb-8">{t('title')}</h1>
      {projects.map((project) => (
        <ProjectCard
          key={project.title}
          project={project}
          btnText={t('btnLink')}
          expertise={t('expertise')}
        />
      ))}
    </div>
  )
}
