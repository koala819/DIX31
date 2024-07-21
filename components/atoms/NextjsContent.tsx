import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'

const NextjsContent: React.FC = () => {
  const t = useTranslations('ContentNext')

  return (
    <div className="max-w-3xl mx-auto px-4 py-8 font-sans">
      <div className="flex w-full justify-center pb-4">
        <Image
          alt="Next.js logo"
          width={150}
          height={10}
          objectFit="cover"
          src="/images/Nextjs.svg"
        />
      </div>
      <h1 className="text-center pb-12">{t('title')}</h1>
      <p className="text-lg mb-6 text-gray-700 leading-relaxed">
        {t('intro')}{' '}
        <Link
          href="/?scrollTo=contact"
          className="text-blue-600 hover:text-blue-800 underline"
        >
          {t('dispositionLink')}
        </Link>
      </p>

      <h2 className="mb-4">{t('whyChoose')}</h2>
      <ul className="list-disc pl-6 space-y-6 mb-8">
        {[1, 2, 3, 4, 5, 6].map((num) => (
          <li key={num} className="mb-4">
            <h3 className="text-xl font-semibold mb-2 text-gray-800">
              {t(`reason${num}`)}
            </h3>
            <p className="text-gray-700">{t(`reason${num}Desc`)}</p>
          </li>
        ))}
      </ul>

      <h2 className="text-2xl font-semibold mb-4 text-gray-800">
        {t('nextWebsites')}
      </h2>
      <p className="text-lg mb-6 text-gray-700">{t('websitesDesc')}</p>

      <h2 className="text-2xl font-semibold mb-4 text-gray-800">
        {t('nextApplications')}
      </h2>
      <p className="text-lg mb-6 text-gray-700">{t('applicationsDesc')}</p>

      <h2 className="text-2xl font-semibold mb-4 text-gray-800">{t('hire')}</h2>
      <p className="text-lg mb-6 text-gray-700">
        {t('hireDesc')}{' '}
        <Link
          className="text-blue-600 hover:text-blue-800 underline"
          href="/projects"
        >
          {t('recentWorkLink')}
        </Link>{' '}
        ou{' '}
        <Link
          className="text-blue-600 hover:text-blue-800 underline"
          href="/?scrollTo=contact"
        >
          {t('contactLink')}
        </Link>
      </p>
    </div>
  )
}

export default NextjsContent