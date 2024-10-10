import { ArrowLeft } from 'lucide-react'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { ShareDialog } from '@/components/BLOG/atoms/ShareDialog'
import { Button } from '@/components/ui/button'

interface PostFooterProps {
  locale: string
  isShareDialogOpen: boolean
  title: string
  // eslint-disable-next-line no-unused-vars
  setIsShareDialogOpen: (isOpen: boolean) => void
}

export const PostFooter: React.FC<PostFooterProps> = ({
  locale,
  isShareDialogOpen,
  setIsShareDialogOpen,
  title,
}) => {
  const fullUrl = usePathname()

  return (
    <footer className="mt-12 pt-6 border-t border-gray-200 dark:border-gray-700">
      <div className="flex justify-between items-center">
        <Link
          href={`/${locale}/blog`}
          className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-md"
        >
          <Button
            variant="ghost"
            className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="font-medium">
              {locale === 'fr' ? 'Retour aux articles' : 'Back to articles'}
            </span>
          </Button>
        </Link>
        <ShareDialog
          locale={locale}
          isOpen={isShareDialogOpen}
          onOpenChange={setIsShareDialogOpen}
          title={title}
          url={fullUrl}
        />
      </div>
    </footer>
  )
}
