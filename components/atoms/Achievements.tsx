import { useTranslations } from 'next-intl'
import dynamic from 'next/dynamic'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from '@/components/ui/card'

export const Achievements = () => {
  const t = useTranslations('Projects')

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

  const WithCustomLoading = dynamic(
    () => import('@/components/atoms/LoadImage'),
    {
      loading: () => <p aria-busy="true">Chargement de l&apos;image...</p>,
    },
  )

  return (
    <div className="container space-y-8">
      <h1 className="text-3xl font-bold mb-8">{t('title')}</h1>
      {projects.map((project) => (
        <Card
          key={project.title}
          className="shadow-lg shadow-gray-600 rounded-2xl border p-8"
        >
          <CardHeader>
            <h2 className="mb-4">{project.title}</h2>
            <CardDescription className="dark:text-white text-lg">
              {project.description}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <WithCustomLoading
                  alt={project.picture.alt}
                  className="rounded-lg object-cover w-full h-auto"
                  src={project.picture.src}
                />
              </div>
              <div className="space-y-4">
                <h3>{t('expertise')}</h3>
                <ul className="list-disc pl-5 space-y-2">
                  {project.expertise.map((item, index) => (
                    <li key={index}>
                      <span className="text-base">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="mt-8">
              <blockquote className="text-lg italic border-l-4 border-gray-300 pl-4">
                {project.testimonial.content}
                <footer className="mt-2 flex items-center">
                  <WithCustomLoading
                    src={project.testimonial.avatar || ''}
                    alt={`Photo de ${project.testimonial.author}`}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <strong>{project.testimonial.author}</strong>
                    <br />
                    <span className="text-sm">{project.testimonial.role}</span>
                  </div>
                </footer>
              </blockquote>
            </div>
          </CardContent>
          <CardFooter className="flex justify-center mt-4">
            <Link href={project.link.url} target="_blank">
              <Button className="dark:bg-blue-900 dark:text-white">
                {t('btnLink')}
              </Button>
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
