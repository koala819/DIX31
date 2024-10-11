import createMiddleware from 'next-intl/middleware'

import { routing } from './i18n/routing'

export default createMiddleware(routing)

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(fr|en)/:path*'],
}
// import createMiddleware from 'next-intl/middleware'
// import type { NextRequest } from 'next/server'

// import { defaultLocale, localePrefix, locales, pathnames } from './i18n/config'

// const intlMiddleware = createMiddleware({
//   defaultLocale,
//   locales,
//   localePrefix,
//   pathnames,
// })

// export default function middleware(request: NextRequest) {
//   // console.log('\n\n\nMiddleware executed for:', request.url, '\n\n\n')
//   return intlMiddleware(request)
// }

// export const config = {
//   matcher: [
//     // Enable a redirect to a matching locale at the root
//     '/',

//     // Set a cookie to remember the previous locale for
//     // all requests that have a locale prefix
//     '/(fr|en)/:path*',

//     // Enable redirects that add missing locales
//     // (e.g. `/pathnames` -> `/en/pathnames`)
//     '/((?!api|_next|_vercel|studio|.*\\..*).*)',
//   ],
// }
