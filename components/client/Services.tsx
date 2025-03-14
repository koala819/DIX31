'use client'

import { Code, Globe, Server, ShieldCheck } from 'lucide-react'

interface ServiceItem {
  icon: string
  title: string
  description: string
}

interface ServicesClientProps {
  title: string
  services: ServiceItem[]
}

// Service component for individual service card
const ServiceCard = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode
  title: string
  description: string
}) => (
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

export default function ServicesClient({
  title,
  services,
}: ServicesClientProps) {
  // Helper function to get the correct icon component
  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck':
        return <ShieldCheck size={44} strokeWidth={1.5} />
      case 'Globe':
        return <Globe size={44} strokeWidth={1.5} />
      case 'Code':
        return <Code size={44} strokeWidth={1.5} />
      case 'Server':
        return <Server size={44} strokeWidth={1.5} />
      default:
        return <Code size={44} strokeWidth={1.5} />
    }
  }

  return (
    <section className="container mx-auto py-12 px-4">
      <h2 className="mb-8 text-2xl font-bold text-gray-800 dark:text-gray-200">
        {title}
      </h2>
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            icon={getIconComponent(service.icon)}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </section>
  )
}
