'use client'

import dynamic from 'next/dynamic'

const Hero = dynamic(() => import('@/components/atoms/Hero'))

export const DynamicHero = () => {
  return <Hero />
}
