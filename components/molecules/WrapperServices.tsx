import { getTranslations } from 'next-intl/server'

import ServicesClient from '@/components/client/Services'

export default async function ServicesWrapper() {
  const t = await getTranslations('Services')

  // Configuration des services
  const serviceData = [
    {
      icon: 'ShieldCheck',
      title: t('One.title'),
      description: t('One.description'),
    },
    {
      icon: 'Globe',
      title: t('Two.title'),
      description: t('Two.description'),
    },
    {
      icon: 'Code',
      title: t('Three.title'),
      description: t('Three.description'),
    },
    {
      icon: 'Server',
      title: t('Four.title'),
      description: t('Four.description'),
    },
  ]

  return <ServicesClient title={t('title')} services={serviceData} />
}
