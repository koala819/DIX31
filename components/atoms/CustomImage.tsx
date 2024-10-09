import React, { useState } from 'react'

import Image from "next/legacy/image"

import { urlFor } from '@/lib/sanity'
import { AnimatePresence, motion } from 'framer-motion'

const CustomImage = ({ value }: { value: any }) => {
  const [isFullScreen, setIsFullScreen] = useState(false)

  const handleImageClick = () => {
    setIsFullScreen(true)
  }

  return (
    <>
      <figure className="my-8 mx-auto max-w-2xl">
        <div className="bg-gray-100 p-2 rounded-lg shadow-md">
          <Image
            src={urlFor(value)}
            alt={value.alt || 'Image'}
            width={600}
            height={400}
            style={{
              maxWidth: '100%',
              height: 'auto',
            }}
            className="object-contain rounded-md cursor-pointer"
            onClick={handleImageClick}
          />
        </div>
        {value.caption && (
          <figcaption className="text-center text-sm text-gray-500 mt-2">
            {value.caption}
          </figcaption>
        )}
      </figure>
      <AnimatePresence>
        {isFullScreen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
            onClick={() => setIsFullScreen(false)}
          >
            <Image
              src={urlFor(value)}
              alt={value.alt || 'Full size image'}
              width={1200}
              height={800}
              style={{
                maxWidth: '100%',
                height: 'auto',
              }}
              className="object-contain"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default CustomImage
