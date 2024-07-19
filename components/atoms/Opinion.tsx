'use client'

import { useTranslations } from 'next-intl'
import dynamic from 'next/dynamic'

const Opinion = () => {
  const t = useTranslations('Opinion')

  const WithCustomLoading = dynamic(() => import('@/lib/LoadImage'), {
    loading: () => <div>Chargement ...</div>,
  })

  return (
    <div className="w-full bg-gradient-to-r from-blue-100 to-green-100 dark:from-blue-900 dark:to-green-900 mx-auto px-4 py-12 lg:px-6 xl:px-8 shadow-[inset_0_2px_4px_rgba(0,0,0,0.05)]">
      <div className="flex items-start">
        <h2 className="mr-4">❝</h2>
        <p className="flex-1">{t('text')}</p>
      </div>
      <div className="flex items-center mt-8">
        <div className="relative w-24 h-24 lg:w-28 lg:h-28 flex-shrink-0 mr-4">
          <WithCustomLoading
            src="/images/Jorge Bravo Bertoglio.jpeg"
            alt="Photo du CTO de Loopsider"
            layout="fill"
            className="rounded-full object-cover"
            sizes="(max-width: 768px) 96px, 112px"
            priority
          />
        </div>
        <div>
          <h4>Jorge Bravo Bertoglio</h4>
          <p className="text-gray-500 text-xs">CTO @Loopsider</p>
        </div>
      </div>
    </div>
  )
}

export default Opinion
