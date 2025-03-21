'use client'

import HireMeBtn from './HireMeBtn'

interface ProfileItem {
  label: string
  value: string
}

interface HeroClientProps {
  data: {
    title: string
    hireButtonText: string
    profileItems: ProfileItem[]
  }
}

export default function HeroClient({ data }: HeroClientProps) {
  return (
    <section aria-labelledby="hero-section">
      <header>
        <h1 className="mb-8">{data.title}</h1>
      </header>
      <div
        className="w-full bg-gradient-to-r from-blue-100 to-green-100 dark:from-blue-900 dark:to-green-900 mx-auto px-4 py-12 lg:px-6 xl:px-8 shadow-[inset_0_2px_4px_rgba(0,0,0,0.05)]"
        aria-labelledby="hero-section"
      >
        <div className="grid lg:grid-cols-[auto_1fr] items-center gap-6">
          <HireMeBtn buttonText={data.hireButtonText} />
          <div className="grid lg:grid-cols-4 gap-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 transition-all duration-300">
            {data.profileItems.map((item, index) => (
              <article
                key={index}
                className="grid gap-1 px-2 hover:bg-gray-50 dark:hover:bg-gray-700 rounded transition-all duration-200"
                aria-labelledby={`profile-item-${index}`}
              >
                <div className="flex justify-between items-center lg:flex-col lg:items-start py-2">
                  <p className="text-lg font-bold sm:text-2xl text-gray-800 dark:text-gray-200 order-2 lg:order-1 lg:mb-1 text-start">
                    {item.value}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 order-1 lg:order-2">
                    {item.label}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
