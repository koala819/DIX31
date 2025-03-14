import { getTranslations } from 'next-intl/server'

import IdeaToLaunchStepsClient from '@/components/client/IdeaToLaunchSteps'

export default async function IdeaToLaunchStepsWrapper() {
  const t = await getTranslations('IdeaToLaunchSteps')

  const steps = [
    {
      icon: 'Calendar',
      title: t('One.title'),
      description: t('One.description'),
    },
    {
      icon: 'File',
      title: t('Two.title'),
      description: t('Two.description'),
    },
    {
      icon: 'Code',
      title: t('Three.title'),
      description: t('Three.description'),
    },
    {
      icon: 'Reply',
      title: t('Four.title'),
      description: t('Four.description'),
    },
    {
      icon: 'Rocket',
      title: t('Five.title'),
      description: t('Five.description'),
    },
    {
      icon: 'Wrench',
      title: t('Six.title'),
      description: t('Six.description'),
    },
  ]

  // Autres traductions
  const translations = {
    title: t('title'),
    description: t('description'),
    buttonText: t('btn'),
  }

  return <IdeaToLaunchStepsClient steps={steps} translations={translations} />
}
