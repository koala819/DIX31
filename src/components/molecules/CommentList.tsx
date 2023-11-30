"use client";
import { motion, useAnimation } from "framer-motion";
import CommentItem from "@/components/atoms/CommentItem";
import { Comment } from "@/types/models";
import { useEffect, useState } from "react";

const CommentList = ({ comments }: { comments: Comment[] }) => {
  const [shuffledSections, setShuffledSections] = useState<Comment[]>([]);

  const controls = useAnimation();

  const pauseAnimation = () => controls.stop();
  const startAnimation = () => {
    // Utilisez shuffledSections pour le calcul de la longueur
    controls.start({
      y: -100 * shuffledSections.length,
      transition: {
        duration: 10 * shuffledSections.length,
        repeat: Infinity,
        ease: "linear",
      },
    });
  };

  useEffect(() => {
    async function shuffleArray(array: Comment[]) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    }

    shuffleArray([...comments]).then((shuffled) => {
      setShuffledSections([...shuffled, ...shuffled]); // Dupliquez la liste mélangée ici
      startAnimation();
    });

    setTimeout(() => {
      startAnimation();
    }, 100);
  }, [comments]);

  return (
    <>
      <h2 className='mx-auto lg:max-w-7xl lg:px-8 text-2xl font-bold tracking-tight text-gray-900'>
        Ce que mes Partenaires disent de moi
      </h2>

      <div className='mt-6 overflow-hidden h-[calc(100vh-100px)]'>
        <motion.div
          className='flex flex-wrap justify-center items-start'
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
    </>
  );
};

export default CommentList;
