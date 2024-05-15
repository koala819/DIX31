'use client'

import * as React from 'react'
import { Toaster } from 'react-hot-toast'

import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { type ThemeProviderProps } from 'next-themes/dist/types'

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider {...props}>
      {children} <Toaster position="top-right" />
    </NextThemesProvider>
  )
}

// 'use client'

// // import { NextUIProvider } from '@nextui-org/react'
// import { Toaster } from 'react-hot-toast'

// import { ThemeProvider } from '@/context/ThemeContext'

// export function ThemeProviders({ children }: { children: React.ReactNode }) {
//   return (
//     // <NextUIProvider>
//     <>
//       <ThemeProvider>{children}</ThemeProvider>
//       <Toaster position="top-right" />
//       {/* </NextUIProvider> */}
//     </>
//   )
// }
