import { Calendar, Clock } from 'lucide-react'

import Image from 'next/image'

import { motion } from 'framer-motion'

interface PostHeaderProps {
  titleImage: string
  title: string
  shortDescription: string
  date: string
  readTime: number
  locale: string
}

export const PostHeader: React.FC<PostHeaderProps> = ({
  titleImage,
  title,
  shortDescription,
  date,
  readTime,
  locale,
}) => {
  return (
    <header className="relative">
      <div className="w-full h-[50vh] relative">
        <Image
          src={titleImage}
          alt={title}
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>
      <div className="w-full bg-gray-100 dark:bg-gray-800 py-8">
        <div className="container mx-auto px-4">
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-6 text-center text-gray-800 dark:text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {title}
          </motion.h1>
          <motion.p
            className="text-xl mb-6 px-4 text-gray-600 dark:text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {shortDescription}
          </motion.p>
        </div>
      </div>
      <motion.div
        className="w-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 dark:from-purple-600 dark:via-blue-500 dark:to-green-400 py-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <div className="container mx-auto px-4 flex justify-center items-center text-xs md:text-sm space-x-4">
          <span className="flex items-center bg-black bg-opacity-30 text-white rounded-full px-3 py-1 backdrop-blur-sm">
            <Calendar className="w-3 h-3 md:w-4 md:h-4 mr-2" />
            {date}
          </span>
          <span className="flex items-center bg-black bg-opacity-30 text-white rounded-full px-3 py-1 backdrop-blur-sm">
            <Clock className="w-3 h-3 md:w-4 md:h-4 mr-2" />
            {readTime} {locale === 'fr' ? 'min de lecture' : 'min read'}
          </span>
        </div>
      </motion.div>
    </header>
  )
}
