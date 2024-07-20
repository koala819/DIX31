import { Code, Globe, Server, ShieldCheck } from 'lucide-react'
import React from 'react'

import { useTranslations } from 'next-intl'

const Services: React.FC = () => {
  const t = useTranslations('Services')

  const services = [
    {
      icon: <ShieldCheck className="w-6 h-6 text-primary" />,
      title: t('One.title'),
      description: t('One.description'),
    },
    {
      icon: <Globe className="w-6 h-6 text-primary" />,
      title: 'Création de sites web',
      description:
        'Conception de sites web ultra-rapides avec un excellent SEO pour mettre en valeur votre contenu.',
    },
    {
      icon: <Code className="w-6 h-6 text-primary" />,
      title: 'Développement en React',
      description:
        "Développement d'interfaces utilisateur, architecture, systèmes de build et utilisation de Next.js, avec une attention particulière à l'accessibilité (a11y).",
    },
    {
      icon: <Server className="w-6 h-6 text-primary" />,
      title: 'Développement en Node.js',
      description:
        'Création de services web et API, ainsi que des applications en ligne de commande.',
    },
  ]

  return (
    <section className="container mx-auto py-12 px-4">
      <h2 className="mb-8">{t('title')}</h2>
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <div className="flex items-center mb-4">
              {service.icon}
              <h3 className="text-xl font-bold ml-2">{service.title}</h3>
            </div>
            <p className="text-gray-700 dark:text-gray-300">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Services
