import { useTranslations } from 'next-intl'
import Link from 'next/link'

import { Button } from '@/components/ui/button'

const HireMeBtn = () => {
  const t = useTranslations()
  return (
    <Link href="/?scrollTo=contact" scroll={false} className="inline-block">
      <Button
        variant="outline"
        className="group relative inline-flex h-12 items-center justify-center rounded-md border border-primary px-4 py-3 text-sm font-medium text-primary shadow transition-all duration-300 hover:text-white hover:font-bold focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:scale-105 overflow-hidden"
      >
        <span className="relative z-10 text-lg font-bold sm:text-2xl">
          {t('Btn-hire')}
        </span>
        <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-red-500 opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100"></span>
        <span className="absolute -inset-px bg-gradient-to-r from-[#6F4E9E] to-[#EA5A60] opacity-0 blur transition-opacity duration-300 group-hover:opacity-75"></span>
      </Button>
    </Link>
  )
}

export default HireMeBtn
