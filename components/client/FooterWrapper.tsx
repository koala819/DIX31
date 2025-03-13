'use client'

import { Suspense, lazy } from 'react'

const Footer = lazy(() => import('@/components/organims/Footer'))

export function FooterWrapper() {
  return (
    <Suspense fallback={<div>Chargement ...</div>}>
      <Footer />
    </Suspense>
  )
}
