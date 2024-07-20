'use client'

import { ChevronDown, ChevronRight } from 'lucide-react'
import { useState } from 'react'

import { useTranslations } from 'next-intl'

import { Card, CardContent } from '@/components/ui/card'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const t = useTranslations('FAQ')

  const faqData = [
    {
      question: t('One.question'),
      answer: t('One.answer'),
    },
    {
      question: t('Two.question'),
      answer: t('Two.answer'),
    },
    {
      question: t('Three.question'),
      answer: t('Three.answer'),
    },
    {
      question: t('Four.question'),
      answer: t('Four.answer'),
    },
    {
      question: t('Five.question'),
      answer: t('Five.answer'),
    },
    {
      question: t('Six.question'),
      answer: t('Six.answer'),
    },
  ]

  return (
    <div className="w-full max-w-3xl mx-auto mt-8">
      <h2>{t('title')}</h2>
      <Card className="overflow-hidden">
        {faqData.map((item, index) => (
          <div key={index} className="border-b last:border-b-0">
            <div
              className="flex items-center cursor-pointer px-4 py-3 bg-gray-50 hover:bg-gray-100 transition-colors"
              onClick={() => toggleFAQ(index)}
            >
              {openIndex === index ? (
                <ChevronDown className="w-5 h-5 mr-3 text-primary" />
              ) : (
                <ChevronRight className="w-5 h-5 mr-3 text-gray-400" />
              )}
              <h3 className="text-lg font-semibold flex-grow">
                {item.question}
              </h3>
            </div>
            {openIndex === index && (
              <CardContent className="px-4 py-3 bg-white">
                <p className="pl-8">{item.answer}</p>
              </CardContent>
            )}
          </div>
        ))}
      </Card>
    </div>
  )
}
