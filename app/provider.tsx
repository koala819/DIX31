'use client'

// import { NextUIProvider } from '@nextui-org/react'
import { Toaster } from 'react-hot-toast'

import { ThemeProvider } from '@/context/ThemeContext'

export function ThemeProviders({ children }: { children: React.ReactNode }) {
  return (
    // <NextUIProvider>
    <>
      <ThemeProvider>{children}</ThemeProvider>
      <Toaster position="top-right" />
      {/* </NextUIProvider> */}
    </>
  )
}
