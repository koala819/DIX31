'use client'

import { useTranslations } from 'next-intl'

import Testimonial from '@/components/molecules/Testimonial'

const Opinion = () => {
  const t = useTranslations('Opinion')

  return (
    <Testimonial
      text={t('text')}
      author="Jorge Bravo Bertoglio"
      position="CTO @ Loopsider"
      imageSrc="/images/Joge-Bravo-Bertoglio.png"
      imageAlt="Photo du CTO de Loopsider"
    />
  )
}

export default Opinion
