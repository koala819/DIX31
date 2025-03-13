import { useTranslations } from 'next-intl'

import NextjsBenefits from '@/components/client/NextjsBenefits'
import NextjsContact from '@/components/client/NextjsContact'
import NextjsHeader from '@/components/client/NextjsHeader'
import NextjsServices from '@/components/client/NextjsServices'

import { myXP } from '@/lib/calculateXp'

export default function NextjsPage() {
  const experience = myXP()
  const t = useTranslations('ContentNext')
  const introWithXp = t('intro', { years: experience })

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 text-foreground">
      <NextjsHeader
        title={t('title')}
        intro={introWithXp}
        ctaText={t('dispositionLink')}
      />

      <NextjsBenefits
        title={t('whyChoose')}
        reasons={[1, 2, 3, 4, 5, 6].map((num) => ({
          title: t(`reason${num}`),
          description: t(`reason${num}Desc`),
        }))}
      />

      <NextjsServices
        websitesTitle={t('nextWebsites')}
        websitesDesc={t('websitesDesc')}
        appsTitle={t('nextApplications')}
        appsDesc={t('applicationsDesc')}
      />

      <NextjsContact
        title={t('hire')}
        description={t('hireDesc')}
        contactText={t('contactLink')}
        workText={t('recentWorkLink')}
      />
    </div>
  )
}
