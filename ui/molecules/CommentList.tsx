'use client'

import { useEffect, useState } from 'react'

import CommentItem from '@/ui/atoms/CommentItem'
import { motion, useAnimation } from 'framer-motion'
import { Comment } from 'types/comment'

const CommentList = ({ comments }: { comments: Comment[] }) => {
  const [shuffledSections, setShuffledSections] = useState<Comment[]>([])
  const [isReadyToAnimate, setIsReadyToAnimate] = useState(false)

  const controls = useAnimation()

  function pauseAnimation() {
    controls.stop()
  }

  function startAnimation() {
    // Utilisez shuffledSections pour le calcul de la longueur
    controls.start({
      y: -100 * shuffledSections.length,
      transition: {
        duration: 10 * shuffledSections.length,
        repeat: Infinity,
        ease: 'linear',
      },
    })
  }

  useEffect(() => {
    async function shuffleArray(array: Comment[]) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        ;[array[i], array[j]] = [array[j], array[i]]
      }
      return array
    }

    shuffleArray([...comments]).then((shuffled) => {
      setShuffledSections([...shuffled, ...shuffled])
      setIsReadyToAnimate(true)
    })
  }, [comments])

  useEffect(() => {
    startAnimation()
  }, [isReadyToAnimate])

  return (
    // <section className="my-16">
    //   <h2 className="mx-auto lg:max-w-7xl lg:px-8 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
    //     Témoignages Clients : Expériences Réussies avec DIX31
    //   </h2>
    <div className="mx-auto px-4 lg:max-w-7xl lg:px-8">
      <div className="space-y-4">
        <div className="w-full mx-auto px-5 py-10 text-gray-600 dark:text-gray-200 mb-10">
          <div className="mx-auto pb-10">
            <h2 className="text-5xl md:text-6xl font-bold mb-5">
              Témoignages Clients : Expériences Réussies avec DIX31
            </h2>
            <span className="text-xl font-medium">
              Découvrez comment mes clients ont transformé leurs entreprises
              avec DIX31 : des histoires de succès inspirantes qui témoignent de
              mon expertise et de mon engagement.
            </span>
          </div>

          <div className="mt-6 overflow-hidden h-[calc(100vh-100px)]">
            <motion.div
              className="flex flex-wrap justify-center items-start"
              initial={{ y: 0 }}
              animate={controls}
              onMouseEnter={pauseAnimation}
              onMouseLeave={startAnimation}
            >
              {shuffledSections.map((comment, index) => (
                <CommentItem
                  key={index}
                  comment={comment}
                  onMouseEnter={pauseAnimation}
                  onMouseLeave={startAnimation}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CommentList
