import { useTranslations } from 'next-intl'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Card, CardContent } from '@/components/ui/card'

export default function FAQ() {
  const t = useTranslations('FAQ')
  const faqData = [
    { question: t('One.question'), answer: t('One.answer') },
    { question: t('Two.question'), answer: t('Two.answer') },
    { question: t('Three.question'), answer: t('Three.answer') },
    { question: t('Four.question'), answer: t('Four.answer') },
    { question: t('Five.question'), answer: t('Five.answer') },
    { question: t('Six.question'), answer: t('Six.answer') },
  ]

  return (
    <div className="w-full  mx-auto mt-8 ">
      <h2 className="text-3xl font-bold mb-6 text-center dark:text-gray-100">
        {t('title')}
      </h2>
      <Card className="overflow-hidden bg-white dark:bg-gray-800 shadow-lg">
        <Accordion type="single" collapsible className="w-full">
          {faqData.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="flex items-center px-6 py-4 text-left text-lg font-semibold hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                <span className="flex-grow pr-4">{item.question}</span>
              </AccordionTrigger>
              <AccordionContent>
                <CardContent className="px-6 py-4 bg-gray-50 dark:bg-gray-700">
                  <p className="text-gray-700 dark:text-gray-200">
                    {item.answer}
                  </p>
                </CardContent>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Card>
    </div>
  )
}
