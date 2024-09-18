import { LocalePrefix, Pathnames } from 'next-intl/routing'

export const defaultLocale = 'fr' as const
export const locales = ['en', 'fr'] as const
export const localePrefix = 'always' satisfies LocalePrefix
export const pathnames: Pathnames<typeof locales> = {
  '/': '/',
  '/pathnames': {
    en: '/pathnames',
    fr: '/pfadnamen',
  },
}
