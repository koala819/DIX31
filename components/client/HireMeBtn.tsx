'use client'

import { Button } from '@/components/ui/button'

import { Link } from '@/i18n/navigation'

interface HireMeButtonProps {
  isScrolled?: boolean
  onClose?: () => void
  buttonText: string
}

export default function HireMeBtn({
  isScrolled,
  onClose,
  buttonText,
}: HireMeButtonProps) {
  const handleClick = () => {
    if (onClose) {
      onClose()
    }
  }

  return (
    <Link
      href="/?scrollTo=contact"
      onClick={handleClick}
      className="inline-block"
    >
      <Button
        variant="outline"
        className={`group relative inline-flex items-center justify-center rounded-md border border-primary font-medium text-primary shadow transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:scale-105 overflow-hidden ${
          isScrolled ? 'h-8 px-1 py-1' : 'h-12 px-4 py-3'
        }`}
      >
        <span
          className={`relative z-10 font-bold transition-colors duration-300 ${
            isScrolled ? 'text-sm sm:text-lg' : 'text-lg sm:text-2xl'
          } group-hover:text-white`}
        >
          {buttonText}
        </span>
        <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-red-500 opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100" />
        <span className="absolute -inset-px bg-gradient-to-r from-[#6F4E9E] to-[#EA5A60] opacity-0 blur transition-opacity duration-300 group-hover:opacity-75" />
      </Button>
    </Link>
  )
}
