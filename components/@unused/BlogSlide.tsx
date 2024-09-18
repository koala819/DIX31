'use client'

import { AiOutlineCodeSandbox } from 'react-icons/ai'
import { BsFillEmojiSmileUpsideDownFill } from 'react-icons/bs'
import {
  FaAndroid,
  FaGithub,
  FaJsSquare,
  FaRobot,
  FaSearch,
} from 'react-icons/fa'
import { HiMiniHandThumbUp } from 'react-icons/hi2'
import { IoMdRocket } from 'react-icons/io'
import { MdComputer } from 'react-icons/md'
import { SiHackaday } from 'react-icons/si'
import { TiLightbulb } from 'react-icons/ti'

import { TagCount, TagIconMap } from '@/types/blog'

import { Button } from '@/components/ui/button'

import { motion } from 'framer-motion'

export function BlogSlide({
  tags,
  onTagClick,
  onReset,
}: {
  tags: TagCount
  // eslint-disable-next-line no-unused-vars
  onTagClick: (tagName: string) => void
  onReset: () => void
}) {
  const tagIcons: TagIconMap = {
    android: <FaAndroid />,
    BestPracticesIT: <HiMiniHandThumbUp />,
    IA: <FaRobot />,
    DIX31: <MdComputer />,
    git: <FaGithub />,
    Github: <FaGithub />,
    hack: <SiHackaday />,
    humour: <BsFillEmojiSmileUpsideDownFill />,
    IT: <AiOutlineCodeSandbox />,
    JS: <FaJsSquare />,
    SEO: <FaSearch />,
    StarterPack: <IoMdRocket />,
    tips: <TiLightbulb />,
  }

  return (
    <motion.div
      className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <header className="flex items-center justify-between mb-4">
        <h5 className="font-bold text-lg text-gray-800 dark:text-white">
          Mots clés
        </h5>
        <Button
          onClick={onReset}
          className="text-sm bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded transition duration-300"
        >
          Réinitialiser
        </Button>
      </header>
      <motion.ul
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
        initial="hidden"
        animate="show"
      >
        {Object.entries(tags).map(([tagName, articleCount]) => (
          <motion.li
            key={tagName}
            variants={{
              hidden: { opacity: 0, x: -20 },
              show: { opacity: 1, x: 0 },
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onTagClick(tagName)}
            className="py-2 px-3 mb-2 rounded-md cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 transition duration-300"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <span className="text-blue-500 mr-2">
                  {tagIcons[tagName] || (
                    <span className="inline-block h-4 w-4" />
                  )}
                </span>
                <span className="font-medium text-gray-700 dark:text-gray-300">
                  {tagName}
                </span>
              </div>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {articleCount}
              </span>
            </div>
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  )
}
