// components/server/TestimonialWrapper.tsx
import { getTranslations } from 'next-intl/server'

import TestimonialClient from '@/components/client/Testimonial'

export default async function TestimonialWrapper({ user }: { user: string }) {
  const t = await getTranslations('Testimonial')

  const testimonial = {
    text: t(`${user}.text`),
    author: t(`${user}.author`),
    role: t(`${user}.role`),
    imgSrc:
      t(`${user}.img.src`) !== undefined
        ? t(`${user}.img.src`)
        : '/images/Amandine Werlé.jpeg',
    imgAlt: t(`${user}.img.alt`) || '',
  }

  return <TestimonialClient testimonial={testimonial} />
}
