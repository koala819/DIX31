import { useTranslations } from 'next-intl'

import TechnosBenefits from '@/components/client/TechnosBenefits'
import TechnosContact from '@/components/client/TechnosContact'
import TechnosHeader from '@/components/client/TechnosHeader'
import TechnoServices from '@/components/client/TechnosServices'

import { myXP } from '@/lib/calculateXp'

const ReactPage: React.FC = () => {
  const experience = myXP()
  const t = useTranslations('ContentReact')
  const introWithXp = t('intro', { years: experience })

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 text-foreground">
      <TechnosHeader
        title={t('title')}
        intro={introWithXp}
        ctaText={t('dispositionLink')}
        picture="/images/React.svg"
        alt="React logo"
      />

      <TechnosBenefits
        title={t('whyChoose')}
        reasons={[1, 2, 3, 4, 5, 6].map((num) => ({
          title: t(`reason${num}`),
          description: t(`reason${num}Desc`),
        }))}
      />

      <TechnoServices
        websitesTitle={t('reactWebsites')}
        websitesDesc={t('websitesDesc')}
        appsTitle={t('reactApplications')}
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

export default ReactPage
