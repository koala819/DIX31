import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Image from "next/image";
import Link from "next/link";
import Date from "@/components/Date";

const getPostMetadata = () => {
  const postsDirectory = "src/posts";
  const files = fs.readdirSync(postsDirectory);
  // const markdownPosts = files.filter((file: any) => file.endsWith(".md"));
  // const slugs = markdownPosts.map((file: any) => file.replace(".md", ""));
  const allPostsData = files.map((filename) => {
    // Remove ".md" from file name to get id
    const id = filename.replace(/\.md$/, ""); // id = 'pre-rendering', 'ssg-ssr'

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, filename);
    // /Users/ef/Desktop/nextjs-blog/posts/pre-rendering.md
    const fileContents = fs.readFileSync(fullPath, "utf8"); // .md string content

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
      id,
      ...(matterResult.data as {
        date: string;
        title: string;
        picture: string;
      }),
    };
  });

  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
};

export default function Blog() {
  const allPostsData = getPostMetadata();
  const postPreviews = allPostsData.map(({ id, date, title, picture }) => (
    <div className='p-4 md:w-1/3' key={id}>
      <div className='h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden dark:bg-gray-600'>
        <div className='relative aspect-video flex items-center justify-center'>
          <Image className='p-2 rounded-md' src={picture} alt={"image"} fill />
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
  ));

  return (
    <section className='text-gray-600 body-font'>
      <div className='container px-5 py-24 mx-auto'>
        <div className='flex flex-wrap -m-4'>{postPreviews}</div>
      </div>
    </section>
  );
}
