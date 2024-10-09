import {
  Check,
  Facebook,
  Link as LinkIcon,
  Share2,
  Twitter,
} from 'lucide-react'
import React from 'react'
import toast from 'react-hot-toast'

import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

interface ShareDialogProps {
  locale: string
  isOpen: boolean
  // eslint-disable-next-line no-unused-vars
  onOpenChange: (open: boolean) => void
  title: string
  url: string
}

export const ShareDialog: React.FC<ShareDialogProps> = ({
  locale,
  isOpen,
  onOpenChange,
  title,
  url,
}) => {
  const [copied, setCopied] = React.useState<boolean>(false)

  const copyToClipboard = () => {
    navigator.clipboard.writeText(url)
    setCopied(true)
    toast.success(locale === 'fr' ? 'Lien copié !' : 'Link copied!')
    setTimeout(() => setCopied(false), 3000)
  }

  const shareOptions = [
    {
      name: locale === 'fr' ? 'Copier ' : 'Copy Link',
      icon: copied ? Check : LinkIcon,
      onClick: copyToClipboard,
      className:
        'bg-gray-300 hover:bg-gray-400 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200',
    },
    {
      name: 'Facebook',
      icon: Facebook,
      onClick: () =>
        window.open(
          `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
          '_blank',
          'noopener,noreferrer',
        ),
      className: 'bg-[#1877F2] hover:bg-[#166FE5] text-white',
    },
    {
      name: 'Twitter',
      icon: Twitter,
      onClick: () =>
        window.open(
          `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
          '_blank',
          'noopener,noreferrer',
        ),
      className: 'bg-[#1DA1F2] hover:bg-[#1A91DA] text-white',
    },
  ]

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="flex items-center space-x-2 bg-blue-500 text-white hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 transition-colors duration-300"
        >
          <Share2 className="w-4 h-4" />
          <span className="font-medium">
            {locale === 'fr' ? 'Partager' : 'Share'}
          </span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold mb-2">
            {locale === 'fr' ? 'Partager cet article' : 'Share this article'}
          </DialogTitle>
        </DialogHeader>
        <div className="grid grid-cols-3 gap-4 mt-4">
          {shareOptions.map((option) => (
            <Button
              key={option.name}
              onClick={option.onClick}
              className={`flex space-x-1 items-center justify-center  ${option.className}`}
              // className={`flex flex-col items-center justify-center p-4 rounded-lg transition-colors duration-300 ${option.className}`}
            >
              <option.icon className="w-6 h-6 mb-2" />

              <span className="text-sm">{option.name}</span>
            </Button>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  )
}
