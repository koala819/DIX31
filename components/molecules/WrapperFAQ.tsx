import { getTranslations } from 'next-intl/server'

import FAQClient from '@/components/client/FAQ'

export default async function FAQWrapper() {
  const t = await getTranslations('FAQ')

  // Préparer les données de FAQ
  const faqData = [
    { question: t('One.question'), answer: t('One.answer') },
    { question: t('Two.question'), answer: t('Two.answer') },
    { question: t('Three.question'), answer: t('Three.answer') },
    { question: t('Four.question'), answer: t('Four.answer') },
    { question: t('Five.question'), answer: t('Five.answer') },
    { question: t('Six.question'), answer: t('Six.answer') },
  ]

  return <FAQClient title={t('title')} faqData={faqData} />
}
