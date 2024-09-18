import { Code, Globe, Server, ShieldCheck } from 'lucide-react'

import { useTranslations } from 'next-intl'

const Service: React.FC<{
  icon: React.ReactNode
  title: string
  description: string
}> = ({ icon, title, description }) => (
  <div
    className="flex items-start p-6 bg-white dark:bg-gray-700 rounded-lg shadow-md 
                  hover:shadow-lg dark:hover:shadow-gray-600
                  transition-all duration-300 ease-in-out
                  hover:scale-105 transform"
  >
    <div className="w-16 h-16 text-primary opacity-50">{icon}</div>
    <div className="ml-4 flex-1">
      <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-200">
        {title}
      </h3>
      <p className="text-sm text-gray-600 dark:text-gray-400">{description}</p>
    </div>
  </div>
)

const Services: React.FC = () => {
  const t = useTranslations('Services')
  const services = [
    {
      icon: <ShieldCheck size={44} strokeWidth={1.5} />,
      title: t('One.title'),
      description: t('One.description'),
    },
    {
      icon: <Globe size={44} strokeWidth={1.5} />,
      title: t('Two.title'),
      description: t('Two.description'),
    },
    {
      icon: <Code size={44} strokeWidth={1.5} />,
      title: t('Three.title'),
      description: t('Three.description'),
    },
    {
      icon: <Server size={44} strokeWidth={1.5} />,
      title: t('Four.title'),
      description: t('Four.description'),
    },
  ]

  return (
    <section className="container mx-auto py-12 px-4">
      <h2 className="mb-8 text-2xl font-bold text-gray-800 dark:text-gray-200">
        {t('title')}
      </h2>
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        {services.map((service, index) => (
          <Service
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </section>
  )
}

export default Services
