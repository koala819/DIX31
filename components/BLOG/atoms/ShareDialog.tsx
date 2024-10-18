import { Check, Copy, Facebook, Share2, Twitter, X } from 'lucide-react'
import { useState } from 'react'
import toast from 'react-hot-toast'

import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

import { motion } from 'framer-motion'

interface ShareDialogProps {
  locale: string
  title: string
  url: string
}

export const ShareDialog: React.FC<ShareDialogProps> = ({
  locale,
  title,
  url,
}) => {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = () => {
    navigator.clipboard.writeText(url)
    setCopied(true)
    toast.success(locale === 'fr' ? 'Lien copié !' : 'Link copied!')
    setTimeout(() => setCopied(false), 3000)
  }

  const shareOptions = [
    {
      name: locale === 'fr' ? 'Copier' : 'Copy',
      icon: copied ? Check : Copy,
      onClick: copyToClipboard,
      color: '#10B981',
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
      color: '#1877F2',
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
      color: '#1DA1F2',
    },
  ]

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="flex items-center space-x-2">
          <Share2 className="w-4 h-4" />
          <span className="font-medium">
            {locale === 'fr' ? 'Partager' : 'Share'}
          </span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md bg-white dark:bg-gray-800 rounded-lg shadow-xl">
        <DialogHeader className="flex items-center justify-between">
          <DialogTitle className="text-2xl font-bold text-gray-800 dark:text-white">
            {locale === 'fr' ? 'Partager' : 'Share'}
          </DialogTitle>
        </DialogHeader>
        <div className="flex justify-center space-x-6 mt-6">
          {shareOptions.map((option) => (
            <motion.button
              key={option.name}
              onClick={option.onClick}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="flex flex-col items-center focus:outline-none"
            >
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mb-2"
                style={{ backgroundColor: `${option.color}20` }}
              >
                <option.icon
                  className="w-8 h-8"
                  style={{ color: option.color }}
                />
              </div>
              <span className="text-sm text-gray-600 dark:text-gray-300">
                {option.name}
              </span>
            </motion.button>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  )
}
