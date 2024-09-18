'use client'

import { useEffect } from 'react'

import { useSearchParams } from 'next/navigation'

const ScrollToContact = () => {
  const searchParams = useSearchParams()

  useEffect(() => {
    if (searchParams.get('scrollTo') === 'contact') {
      const contactElement = document.getElementById('contact')
      const navbarHeight = document.getElementById('navbar')?.offsetHeight || 0

      if (contactElement) {
        window.scrollTo({
          top: contactElement.offsetTop - navbarHeight * 2.5,
          behavior: 'smooth',
        })
      }
    }
  }, [searchParams])

  return null
}

export default ScrollToContact
