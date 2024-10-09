import Image from "next/legacy/image"

import { motion } from 'framer-motion'
import { Comment } from 'types/models'

const CommentItem = ({
  comment,
  onMouseEnter,
  onMouseLeave,
}: {
  comment: Comment
  onMouseEnter: () => void
  onMouseLeave: () => void
}) => {
  return (
    <motion.div
      className="p-4 bg-white dark:bg-slate-600 shadow-lg rounded-lg m-2 hover:scale-105 cursor-pointer flex flex-col items-center w-full md:w-1/2 lg:w-1/3"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      whileHover={{ scale: 1.05 }}
      onClick={() => window.open(comment.link, '_blank')}
    >
      <Image
        src={comment.imageSrc}
        alt={comment.name}
        width={50}
        height={50}
        className="rounded-full"
      />
      <span className="text-lg font-bold">{comment.name}</span>
      <p className="text-sm">{comment.title}</p>
      <p className="text-xs">{comment.description}</p>
    </motion.div>
  )
}

export default CommentItem
