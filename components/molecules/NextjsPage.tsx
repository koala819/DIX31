import { useTranslations } from 'next-intl'

import TechnosBenefits from '@/components/client/TechnosBenefits'
import TechnosContact from '@/components/client/TechnosContact'
import TechnosHeader from '@/components/client/TechnosHeader'
import TechnoServices from '@/components/client/TechnosServices'

import { myXP } from '@/lib/calculateXp'

export default function NextjsPage() {
  const experience = myXP()
  const t = useTranslations('ContentNext')
  const introWithXp = t('intro', { years: experience })

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 text-foreground">
      <TechnosHeader
        title={t('title')}
        intro={introWithXp}
        ctaText={t('dispositionLink')}
        picture="/images/Nextjs.svg"
        alt="Next.js logo"
      />

      <TechnosBenefits
        title={t('whyChoose')}
        reasons={[1, 2, 3, 4, 5, 6].map((num) => ({
          title: t(`reason${num}`),
          description: t(`reason${num}Desc`),
        }))}
      />

      <TechnoServices
        websitesTitle={t('nextWebsites')}
        websitesDesc={t('websitesDesc')}
        appsTitle={t('nextApplications')}
        appsDesc={t('applicationsDesc')}
      />

      <TechnosContact
        title={t('hire')}
        description={t('hireDesc')}
        contactText={t('contactLink')}
        workText={t('recentWorkLink')}
      />
    </div>
  )
}
