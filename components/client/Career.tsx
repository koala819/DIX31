'use client'

import DynamicLoadImage from './DynamicLoadImage'

interface CareerClientProps {
  translations: {
    title: string
    description: string
  }
  companies: Array<{
    src: string
    alt: string
  }>
}

export default function CareerClient({
  translations,
  companies,
}: CareerClientProps) {
  const t = translations

  return (
    <section aria-labelledby="career-heading" className="career-section">
      <header>
        <h2 id="career-heading">{t.title}</h2>
      </header>
      <p>{t.description}</p>
      <div className="flex flex-col lg:flex-row flex-wrap w-full items-center justify-center p-4 rounded-lg gap-4 mt-8">
        {companies.map((image, index) => (
          <figure
            key={index}
            className="relative w-40 h-40 lg:w-48 lg:h-48 flex-shrink-0 overflow-hidden rounded-xl"
            role="group"
            aria-labelledby={`image-${index}-caption`}
          >
            <DynamicLoadImage
              src={image.src}
              alt={image.alt}
              fill
              className="object-contain transition-transform duration-300 hover:scale-105"
              sizes="(max-width: 768px) 160px, 192px"
              belowFold={true}
            />
            <figcaption id={`image-${index}-caption`} className="sr-only">
              {image.alt}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
