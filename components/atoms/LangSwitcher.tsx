'use client'

import { useLocale } from 'next-intl'
import { usePathname } from 'next/navigation'

import DynamicLoadImage from '@/components/client/DynamicLoadImage'

import frFlag from '@/public/images/flags/france.svg'
import gbFlag from '@/public/images/flags/uk.svg'

type Language = 'fr' | 'en'
type LanguageInfo = {
  flag: string
  alt: string
}

interface LangSwitcherProps {
  isScrolled?: boolean
}

export default function LangSwitcher({ isScrolled }: LangSwitcherProps) {
  const pathname = usePathname()
  const locale = useLocale() as Language

  const languages: Record<Language, LanguageInfo> = {
    fr: { flag: gbFlag.src, alt: 'UK flag' },
    en: { flag: frFlag.src, alt: 'Drapeau français' },
  }

  const toggleLanguage = () => {
    const newLocale: Language = locale === 'en' ? 'fr' : 'en'
    const newPath = pathname.replace(`/${locale}`, `/${newLocale}`)
    window.location.href = newPath // Force un rechargement complet de la page
  }

  return (
    <button
      onClick={toggleLanguage}
      className="focus:outline-none transition-transform duration-200 hover:scale-110"
      title={locale === 'en' ? 'Passer en français' : 'Switch to English'}
    >
      <DynamicLoadImage
        src={languages[locale].flag}
        width={isScrolled ? 25 : 30}
        height={isScrolled ? 25 : 30}
        alt={languages[locale].alt}
        className="rounded-sm"
      />
    </button>
  )
}
