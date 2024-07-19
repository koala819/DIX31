'use client'

import { useTranslations } from 'next-intl'
import dynamic from 'next/dynamic'

const Profile = () => {
  const t = useTranslations('Profile')

  const WithCustomLoading = dynamic(() => import('@/lib/LoadImage'), {
    loading: () => <div>Chargement ...</div>,
  })

  return (
    <div className="flex flex-col lg:flex-row items-start justify-center gap-8 p-4 md:p-8 lg:p-12">
      <div className="relative w-40 h-40 lg:w-48 lg:h-48 flex-shrink-0">
        <WithCustomLoading
          src="/images/Xavier-GENOLHAC.jpg"
          alt="Photo de Xavier"
          layout="fill"
          className="rounded-xl object-cover border-2 border-gray-300"
          sizes="(max-width: 768px) 160px, 192px"
          priority
        />
      </div>
      <div className="flex-grow max-w-2xl space-y-4 border-2 border-gray-300 rounded-xl p-4">
        <h3 className="text-2xl lg:text-3xl font-bold">{t('greeting')}</h3>
        <p>{t('intro')}</p>
        <p>{t('specialty')}</p>
        <p>{t('learning')}</p>
        <p>{t('callToAction')}</p>
      </div>
    </div>
  )
}

export default Profile
