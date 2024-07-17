import Link from 'next/link'

import { Button } from '@/components/ui/button'

const HireMeBtn = () => {
  return (
    <Link href="/contact">
      <Button
        variant="outline"
        className="hire-me-button group relative inline-flex h-9 items-center justify-center rounded-md border border-primary px-4 py-2 text-sm font-medium text-primary shadow transition-all duration-300 hover:text-white hover:font-bold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:pointer-events-none disabled:opacity-50 hover:scale-105"
      >
        <span className="relative z-10">Engagez-moi</span>
        <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-red-500 opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100 rounded-md"></span>
        <span className="absolute -inset-1 bg-gradient-to-r from-[#6F4E9E] to-[#EA5A60] opacity-0 blur-[10px] transition-opacity duration-300 group-hover:opacity-75"></span>
      </Button>
    </Link>
  )
}

export default HireMeBtn
