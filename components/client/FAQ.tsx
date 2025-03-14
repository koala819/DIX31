'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Card, CardContent } from '@/components/ui/card'

interface FAQItem {
  question: string
  answer: string
}

interface FAQClientProps {
  title: string
  faqData: FAQItem[]
}

export default function FAQClient({ title, faqData }: FAQClientProps) {
  return (
    <div className="w-full mx-auto mt-8">
      <h2 className="text-3xl font-bold mb-6 text-center dark:text-gray-100">
        {title}
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
