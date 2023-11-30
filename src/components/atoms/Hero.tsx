import Image from "next/image";
import head from "../../../public/images/maTete.jpg";
import StarterPack from "../../../public/images/StarterPack.jpg";

export default function Hero() {
  return (
    <section className='mx-auto max-w-2xl px-4 lg:max-w-7xl lg:px-8'>
      <div className='flex flex-wrap justify-between md:mb-16'>
        <div className='flex w-full flex-col justify-center lg:mb-0 lg:w-1/3 lg:pb-24 lg:pt-48'>
          <h1 className='text-4xl font-bold text-black dark:text-white sm:text-5xl md:mb-8 md:text-6xl'>
            Lancez-vous avec le Starter Pack !
          </h1>
          <p className='max-w-md leading-relaxed text-gray-500 dark:text-gray-300 xl:text-lg'>
            Un outil gratuit pour commencer votre projet
          </p>
        </div>

        <div className='flex w-full md:mb-16 lg:w-2/3'>
          <div className='relative left-12 top-12 z-10 -ml-12 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:left-16 md:top-16 lg:ml-0'>
            <Image
              src={head}
              alt={"image réalisée par AI de ma tête"}
              className='h-full w-full object-cover object-center'
              priority
              width={500}
              height={500}
            />
          </div>

          <div className='overflow-hidden rounded-lg bg-gray-100 shadow-lg'>
            <Image
              src={StarterPack}
              alt={"screenshot du StarterPack"}
              className='h-full w-full object-cover object-center'
              priority
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
