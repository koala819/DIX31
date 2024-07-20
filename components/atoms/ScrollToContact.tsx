'use client'

import { useEffect } from 'react'

import { useSearchParams } from 'next/navigation'

const ScrollToContact = () => {
  const searchParams = useSearchParams()

  useEffect(() => {
    if (searchParams.get('scrollTo') === 'contact') {
      const contactElement = document.getElementById('contact')
      if (contactElement) {
        contactElement.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }, [searchParams])

  return null
}

export default ScrollToContact
