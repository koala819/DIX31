"use client";
// import Image from "next/image";
// import head from "../../../public/images/maTete.jpg";
// import StarterPack from "../../../public/images/StarterPack.jpg";
import ReactPlayer from "react-player";
import LazyLoad from "@/lib/LazyLoad";

export default function Hero() {
  return (
    <section className='mx-auto max-w-2xl px-4 lg:max-w-7xl lg:px-8'>
      <div className='flex flex-wrap justify-between'>
        <aside className='flex w-full flex-col justify-center lg:mb-0 lg:w-1/2 lg:pb-24'>
          <div className='text-4xl font-bold text-black dark:text-white sm:text-5xl md:text-6xl'>
            Lancez-vous avec le Starter Pack !
          </div>
          <div className='leading-relaxed text-gray-500 dark:text-gray-300 xl:text-lg'>
            Un outil gratuit pour commencer votre projet
          </div>
        </aside>

        <aside className='w-full lg:w-1/2'>
          <LazyLoad className='flex items-center justify-center  h-full p-8'>
            <ReactPlayer
              url='https://www.youtube.com/watch?v=6TOL9fLe5yM'
              controls={true}
              width='100%'
              style={{ aspectRatio: "16 / 9" }}
            />
          </LazyLoad>
        </aside>
      </div>
    </section>
  );
}
