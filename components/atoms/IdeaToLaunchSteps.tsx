import { Calendar, Code, File, Reply, Rocket, Wrench } from 'lucide-react'
import React from 'react'

import { useTranslations } from 'next-intl'
import Link from 'next/link'

export default function IdeaToLaunchSteps() {
  const t = useTranslations('IdeaToLaunchSteps')

  const steps = [
    {
      icon: Calendar,
      title: t('One.title'),
      description: t('One.description'),
    },
    {
      icon: File,
      title: t('Two.title'),
      description: t('Two.description'),
    },
    {
      icon: Code,
      title: t('Three.title'),
      description: t('Three.description'),
    },
    {
      icon: Reply,
      title: t('Four.title'),
      description: t('Four.description'),
    },
    {
      icon: Rocket,
      title: t('Five.title'),
      description: t('Five.description'),
    },
    {
      icon: Wrench,
      title: t('Six.title'),
      description: t('Six.description'),
    },
  ]

  return (
    <section
      className="bg-background text-foreground"
      aria-labelledby="idea-to-launch-title"
    >
      <div className="container mx-auto px-4 py-12 lg:px-6 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          <header className="space-y-4">
            <h2 id="idea-to-launch-title">{t('title')}</h2>
            <p className="max-w-[600px] text-muted-foreground lg:text-xl/relaxed">
              {t('description')}
            </p>
          </header>
          <div className="space-y-6">
            <div
              className="grid gap-6"
              role="list"
              aria-labelledby="steps-list"
            >
              {steps.map((step, index) => (
                <article
                  key={index}
                  className="flex items-start gap-4"
                  role="listitem"
                  aria-labelledby={`step-title-${index}`}
                >
                  <div className="flex-shrink-0">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      <step.icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 id={`step-title-${index}`}>{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </article>
              ))}
            </div>
            <div className="flex flex-col gap-2 sm:flex-row">
              <Link
                href="#"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
                aria-label={t('btn')}
              >
                {t('btn')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
