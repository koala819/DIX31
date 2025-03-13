import { LocalePrefix as NextIntlLocalePrefix, Pathnames } from 'next-intl/routing'

type LocalePrefix = NextIntlLocalePrefix | 'as-needed'

export const defaultLocale = 'fr' as const
export const locales = ['en', 'fr'] as const
export const localePrefix: LocalePrefix = 'as-needed'
export const pathnames: Pathnames<typeof locales> = {
  '/': '/',
  '/pathnames': {
    en: '/pathnames',
    fr: '/pfadnamen',
  },
}
