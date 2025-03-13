'use client'

import { Suspense, lazy } from 'react'

const Navbar = lazy(() => import('@/components/organims/Navbar'))

export function NavbarWrapper() {
  return (
    <Suspense fallback={<div className="navbar-height" />}>
      <Navbar />
    </Suspense>
  )
}
