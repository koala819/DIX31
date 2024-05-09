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
    <div className="mb-4">
      <header className="flex items-center justify-between w-full">
        <h5 className="font-bold text-lg uppercase px-1 my-2">Mots clés</h5>
        <Button color="primary" onClick={onReset} className="mr-2">
          Réinitialiser
        </Button>
      </header>

      <ul>
        {Object.entries(tags).map(([tagName, articleCount]) => (
          <li
            key={tagName}
            className="px-1 py-4 hover:border-b hover:border-t hover:border-primary transition duration-300"
            onClick={() => onTagClick(tagName)}
          >
            <section className="flex items-center cursor-pointer">
              {tagIcons[tagName] || <span className="inline-block h-4 w-4" />}
              <text className="font-bold ml-2">{tagName}</text>
              <span className="ml-auto">{articleCount} articles</span>
              <i className="bx bx-right-arrow-alt ml-1" />
            </section>
          </li>
        ))}
      </ul>
    </div>
  )
}
