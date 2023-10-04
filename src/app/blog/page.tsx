import Link from "next/link";
import { getSortedPostsData } from "@/lib/posts";
import Date from "@/components/Date";
import Image from "next/image";

type AllPostsData = {
  date: string;
  title: string;
  id: string;
  picture: string;
}[];

export const metadata = {
  title: "Blog DIX31",
};

export default async function Blog() {
  const allPostsData: AllPostsData = getSortedPostsData();

  return (
    <>
      <section className='text-gray-600 body-font'>
        <div className='container px-5 py-24 mx-auto'>
          <div className='flex flex-wrap -m-4'>
            {allPostsData.map(({ id, date, title, picture }) => (
              // <li className='mb-5' key={id}>
              //   <div className='font-medium mb-1 mt-5'>
              //     <Link href={`/blog/${id}`}>{title}</Link>
              //   </div>
              //   <small className='text-gray-500 font-medium'>
              //     <Date dateString={date} />
              //   </small>
              // </li>
              <div className='p-4 md:w-1/3' key={id}>
                <div className='h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden dark:bg-gray-600'>
                  <div className='relative aspect-video'>
                    <Image
                      className='object-cover rounded-md'
                      src={picture}
                      alt={"image"}
                      sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                      fill
                    />
                  </div>
                  <div className='p-6'>
                    <h2 className='tracking-widest text-xs title-font font-medium text-gray-400 dark:text-gray-200 mb-1'>
                      <Date dateString={date} />
                    </h2>
                    <div className='title-font text-lg font-medium text-gray-900 mb-3 dark:text-gray-300'>
                      {title}
                    </div>
                    {/* <div className='leading-relaxed mb-3 dark:text-gray-200'>
                    {article.data.description[0].text}
                  </div> */}
                    <div className='flex items-center flex-wrap '>
                      <Link
                        className='text-blue-500 inline-flex items-center md:mb-2 lg:mb-0 hover:underline hover:text-[#DB2323] dark:text-orange-400 dark:hover:text-orange-300'
                        href={`/blog/${id}`}
                      >
                        Lire Plus
                        <svg
                          className='w-4 h-4 ml-2'
                          viewBox='0 0 24 24'
                          stroke='currentColor'
                          strokeWidth='2'
                          fill='none'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        >
                          <path d='M5 12h14'></path>
                          <path d='M12 5l7 7-7 7'></path>
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
