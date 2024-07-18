'use client'

import React from 'react'

import { useLocale } from 'next-intl'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

import frFlag from '@/public/images/flags/france.svg'
import gbFlag from '@/public/images/flags/uk.svg'

const LangSwitcher: React.FC = () => {
  const pathname = usePathname()
  const locale = useLocale()
  const languages: { [key: string]: { flag: any; alt: string } } = {
    fr: { flag: frFlag, alt: 'Drapeau français' },
    en: { flag: gbFlag, alt: 'UK flag' },
  }

  const toggleLanguage = () => {
    const newLocale = locale === 'fr' ? 'en' : 'fr'
    const newPath = pathname.replace(`/${locale}`, `/${newLocale}`)
    window.location.href = newPath // Force a full page reload
  }

  return (
    <button
      onClick={toggleLanguage}
      className="focus:outline-none transition-transform duration-200 hover:scale-110"
      title={locale === 'fr' ? 'Switch to English' : 'Passer en français'}
    >
      <Image
        src={languages[locale].flag}
        width={30}
        height={30}
        alt={languages[locale].alt}
        className="rounded-"
      />
    </button>
  )
}

export default LangSwitcher
