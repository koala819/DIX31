'use client'

import React from 'react'

import { useLocale } from 'next-intl'
import Image from "next/legacy/image"
import { usePathname } from 'next/navigation'

import frFlag from '@/public/images/flags/france.svg'
import gbFlag from '@/public/images/flags/uk.svg'

const LangSwitcher = ({
  handleNavItemClick,
}: {
  handleNavItemClick?: () => void
}) => {
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
    if (handleNavItemClick) handleNavItemClick()
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
        style={{
          maxWidth: '100%',
          height: 'auto',
        }}
        className="rounded-sm"
      />
    </button>
  )
}

export default LangSwitcher
