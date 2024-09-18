'use client'

import { useEffect, useState } from 'react'

import CommentItem from '@/components/@unused/CommentItem'

import { motion, useAnimation } from 'framer-motion'
import { Comment } from 'types/models'

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
    <>
      <h2 className="pb-12">Vos Triomphes, Notre Fierté</h2>
      <span>
        Plongez dans les histoires de ceux qui ont transformé leur vision en
        réalité avec DIX31. Chaque succès est une célébration de notre passion
        et de notre innovation au service de vos ambitions.
      </span>

      <section className="overflow-hidden h-[calc(100vh-100px)]">
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
      </section>
    </>
  )
}

export default CommentList
