'use client'

import { useEffect } from 'react'

import { useSearchParams } from 'next/navigation'

export const ScrollToSection = () => {
  const searchParams = useSearchParams()

  useEffect(() => {
    const scrollTo = searchParams.get('scrollTo')
    if (scrollTo === 'contact') {
      const scrollToContact = () => {
        const contactElement = document.getElementById('contact')
        if (contactElement) {
          const elementPosition = contactElement.getBoundingClientRect().top
          const offsetPosition = elementPosition + window.pageYOffset - 90
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth',
          })
          // Vérification supplémentaire après le défilement
          setTimeout(() => {
            const newPosition = contactElement.getBoundingClientRect().top
            if (Math.abs(newPosition) > 5) {
              // Si la position n'est pas proche de 0 (avec une marge d'erreur)
              window.scrollTo({
                top: window.pageYOffset + newPosition - 90,
                behavior: 'smooth',
              })
            }
          }, 1000)
        }
      }
      // Essayer de défiler immédiatement
      scrollToContact()
      // Réessayer après un délai si le premier essai échoue
      setTimeout(scrollToContact, 1000)
      // Réessayer encore une fois après un délai plus long
      setTimeout(scrollToContact, 3000)
    }
  }, [searchParams])

  return null
}
