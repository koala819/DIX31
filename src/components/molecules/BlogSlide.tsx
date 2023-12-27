"use client";
import React from "react";
import { TagCount, TagIconMap } from "@/types/models";
import { Button } from "@nextui-org/react";
import { BsFillEmojiSmileUpsideDownFill } from "react-icons/bs";
import { FaGithub, FaAndroid, FaJsSquare, FaRobot } from "react-icons/fa";
import { HiMiniHandThumbUp } from "react-icons/hi2";
import { IoMdRocket } from "react-icons/io";
import { MdComputer } from "react-icons/md";
import { SiHackaday } from "react-icons/si";
import { TiLightbulb } from "react-icons/ti";

export function BlogSlide({
  tags,
  onTagClick,
  onReset,
}: {
  tags: TagCount;
  // eslint-disable-next-line no-unused-vars
  onTagClick: (tagName: string) => void;
  onReset: () => void;
}) {
  const tagIcons: TagIconMap = {
    DIX31: <MdComputer />,
    IA: <FaRobot />,
    StarterPack: <IoMdRocket />,
    Github: <FaGithub />,
    BestPracticesIT: <HiMiniHandThumbUp />,
    tips: <TiLightbulb />,
    JS: <FaJsSquare />,
    hack: <SiHackaday />,
    git: <FaGithub />,
    android: <FaAndroid />,
    humour: <BsFillEmojiSmileUpsideDownFill />,
  };

  return (
    <div className='mb-4'>
      <header className='flex items-center justify-between w-full'>
        <h5 className='font-bold text-lg uppercase text-gray-700 px-1 my-2'>
          Mots clés
        </h5>
        <Button
          color='primary'
          onClick={onReset}
          variant='shadow'
          className='my-2 mr-2'
        >
          Réinitialiser
        </Button>
      </header>

      <ul>
        {Object.entries(tags).map(([tagName, articleCount]) => (
          <li
            key={tagName}
            className='px-1 py-4 border-b border-t border-white hover:border-gray-200 transition duration-300'
            onClick={() => onTagClick(tagName)}
          >
            <section className='flex items-center text-gray-600 cursor-pointer'>
              {tagIcons[tagName] || (
                <span className='inline-block h-4 w-4 bg-green-300'></span>
              )}
              <text className='font-bold ml-2'>{tagName}</text>
              <span className='text-gray-500 ml-auto'>
                {articleCount} articles
              </span>
              <i className='text-gray-500 bx bx-right-arrow-alt ml-1'></i>
            </section>
          </li>
        ))}
      </ul>
    </div>
  );
}
