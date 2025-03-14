import { getTranslations } from 'next-intl/server'

import ProfileClient from '@/components/client/Profile'

export default async function ProfileWrapper() {
  // Récupération des traductions
  const t = await getTranslations('Profile')

  // Préparation des données à passer au client
  const profileData = {
    greeting: t('greeting'),
    intro: t('intro'),
    specialty: t('specialty'),
    learning: t('learning'),
    callToAction: t('callToAction'),
  }

  // Chemin de l'image
  const imagePath = '/images/Xavier-GENOLHAC.jpg'

  return <ProfileClient profileData={profileData} imagePath={imagePath} />
}
