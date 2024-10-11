'use client'

import { useLocale } from 'next-intl'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

import frFlag from '@/public/images/flags/france.svg'
import gbFlag from '@/public/images/flags/uk.svg'

type Language = 'fr' | 'en'

type LanguageInfo = {
  flag: typeof frFlag | typeof gbFlag
  alt: string
}

const LangSwitcher: React.FC = () => {
  const pathname = usePathname()
  const locale = useLocale() as Language

  const languages: Record<Language, LanguageInfo> = {
    fr: { flag: gbFlag, alt: 'UK flag' },
    en: { flag: frFlag, alt: 'Drapeau français' },
  }

  const toggleLanguage = () => {
    const newLocale: Language = locale === 'en' ? 'fr' : 'en'
    const newPath = pathname.replace(`/${locale}`, `/${newLocale}`)
    window.location.href = newPath // Force a full page reload
  }

  return (
    <button
      onClick={toggleLanguage}
      className="focus:outline-none transition-transform duration-200 hover:scale-110"
      title={locale === 'en' ? 'Passer en français' : 'Switch to English'}
    >
      <Image
        src={languages[locale].flag}
        width={30}
        height={30}
        alt={languages[locale].alt}
        className="rounded-sm"
      />
    </button>
  )
}

export default LangSwitcher
