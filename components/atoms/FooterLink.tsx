import { ArrowRight } from 'lucide-react'

import { Link } from '@/i18n/routing'

const FooterLink = ({
  href,
  children,
  external = false,
}: {
  href: string
  children: React.ReactNode
  external?: boolean
}) => {
  return (
    <Link
      href={href}
      className="group flex items-center text-lg font-medium lg:text-xl text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors duration-300"
      prefetch={false}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
    >
      <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <span>{children}</span>
    </Link>
  )
}

export default FooterLink
