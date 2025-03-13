'use client'
import { useTranslations } from 'next-intl'

// import Link from 'next/link'
import { Button } from '@/components/ui/button'

import { Link } from '@/i18n/navigation'

const HireMeBtn = ({
  isScrolled,
  onClose,
}: {
  isScrolled?: boolean
  onClose?: () => void
}) => {
  const t = useTranslations()

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // e.preventDefault()

    // Fermer le menu mobile si la fonction onClose est fournie
    if (onClose) {
      onClose()
    }

    // // Attendre un peu pour que le menu se ferme avant de défiler
    // setTimeout(() => {
    //   const contactSection = document.getElementById('contact')
    //   if (contactSection) {
    //     contactSection.scrollIntoView({ behavior: 'smooth' })
    //   }
    // }, 100)
  }
  return (
    <Link
      href="/?scrollTo=contact"
      onClick={handleClick}
      className="inline-block"
    >
      <Button
        variant="outline"
        className={`group relative inline-flex  items-center justify-center rounded-md border border-primary font-medium text-primary shadow transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:scale-105 overflow-hidden ${isScrolled ? 'h-8 px-1 py-1' : 'h-12 px-4 py-3'}`}
      >
        <span
          className={`relative z-10 font-bold transition-colors duration-300 ${
            isScrolled ? 'text-sm sm:text-lg' : 'text-lg sm:text-2xl'
          } group-hover:text-white`}
        >
          {t('Btn-hire')}
        </span>
        <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-red-500 opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100 " />
        <span className="absolute -inset-px bg-gradient-to-r from-[#6F4E9E] to-[#EA5A60] opacity-0 blur transition-opacity duration-300 group-hover:opacity-75 " />
      </Button>
    </Link>
  )
}

export default HireMeBtn
