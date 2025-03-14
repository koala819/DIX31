'use client'

import { Calendar, Code, File, Reply, Rocket, Wrench } from 'lucide-react'

import { Button } from '@/components/ui/button'

import { Link } from '@/i18n/navigation'

interface Step {
  icon: string
  title: string
  description: string
}

interface IdeaToLaunchStepsClientProps {
  steps: Step[]
  translations: {
    title: string
    description: string
    buttonText: string
  }
}

export default function IdeaToLaunchStepsClient({
  steps,
  translations,
}: IdeaToLaunchStepsClientProps) {
  // Fonction helper pour obtenir le composant d'icône approprié
  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case 'Calendar':
        return <Calendar className="h-5 w-5" aria-hidden="true" />
      case 'File':
        return <File className="h-5 w-5" aria-hidden="true" />
      case 'Code':
        return <Code className="h-5 w-5" aria-hidden="true" />
      case 'Reply':
        return <Reply className="h-5 w-5" aria-hidden="true" />
      case 'Rocket':
        return <Rocket className="h-5 w-5" aria-hidden="true" />
      case 'Wrench':
        return <Wrench className="h-5 w-5" aria-hidden="true" />
      default:
        return <Calendar className="h-5 w-5" aria-hidden="true" />
    }
  }

  return (
    <section className="text-foreground" aria-labelledby="idea-to-launch-title">
      <div className="container mx-auto px-4 py-12 lg:px-6 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          <header className="space-y-4">
            <h2 id="idea-to-launch-title">{translations.title}</h2>
            <p className="max-w-[600px] text-muted-foreground lg:text-xl/relaxed">
              {translations.description}
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
                      {getIconComponent(step.icon)}
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
                href="/?scrollTo=contact"
                scroll={false}
                className="inline-block"
              >
                <Button>{translations.buttonText}</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
