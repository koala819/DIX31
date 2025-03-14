'use client'

import DynamicLoadImage from './DynamicLoadImage'

interface TestimonialClientProps {
  testimonial: {
    text: string
    author: string
    role: string
    imgSrc: string
    imgAlt: string
  }
}

export default function TestimonialClient({
  testimonial,
}: TestimonialClientProps) {
  return (
    <div className="w-full bg-gradient-to-r from-blue-100 to-green-100 dark:from-blue-900 dark:to-green-900 mx-auto px-4 py-12 lg:px-6 xl:px-8 shadow-[inset_0_2px_4px_rgba(0,0,0,0.05)]">
      <div className="flex items-start">
        <span className="text-2xl font-bold text-gray-600 dark:text-gray-200 lg:text-3xl mr-4">
          ❝
        </span>
        <p className="flex-1">{testimonial.text}</p>
      </div>
      <div className="flex items-center mt-8">
        <div className="relative w-24 h-24 lg:w-28 lg:h-28 flex-shrink-0 mr-4">
          <DynamicLoadImage
            src={testimonial.imgSrc}
            alt={testimonial.imgAlt}
            fill
            className="rounded-full object-cover"
            sizes="(max-width: 768px) 96px, 112px"
            priority
          />
        </div>
        <div>
          <span className="text-sm font-bold">{testimonial.author}</span>
          <p className="text-gray-500 text-xs">{testimonial.role}</p>
        </div>
      </div>
    </div>
  )
}
