'use client'

import { useEffect } from 'react'

import { useSearchParams } from 'next/navigation'

const ScrollToContact = () => {
  const searchParams = useSearchParams()

  useEffect(() => {
    const scrollTo = searchParams.get('scrollTo')
    if (scrollTo === 'contact') {
      setTimeout(() => {
        const contactElement = document.getElementById('contact')

        if (contactElement) {
          window.scrollTo({
            top: contactElement.offsetTop - 90,
            behavior: 'smooth',
          })
        } else {
          console.error(
            "Contact element not found. Make sure the ID 'contact' exists in your HTML.",
          )
        }
      }, 500)
    }
  }, [searchParams])

  return null
}

export default ScrollToContact
