import Image from 'next/legacy/image'
import { Link } from '@/i18n/navigation'
import { getImageUrl } from '@/lib/Blog/sanity/client' // Importer la fonction globale getImageUrl

interface SimilarPostsListProps {
  locale: string
  formatDate: (date: string) => string
  similarPosts: Post[]
}

type Post = {
  currentSlug: string
  titleFr: string
  titleEn: string
  date: string
  titleImage?: any
  titleImagebyCloudinary?: any
  imageSource?: string  // Nouvelle propriété
  coverImage?: string   // Nouvelle propriété optionnelle qui pourrait être présente
}

const SimilarPostsList: React.FC<SimilarPostsListProps> = ({
  similarPosts,
  locale,
  formatDate,
}) => {
  // Fonction pour obtenir l'URL de l'image
  // Si coverImage existe déjà (prétraitée), l'utiliser
  // Sinon, utiliser la fonction getImageUrl
  const getPostImageUrl = (post: Post) => {
    if (post.coverImage) {
      return post.coverImage;
    }

    return getImageUrl(post);
  }

  return (
    <ul className="space-y-4">
      {similarPosts.map((similarPost, index) => (
        <li key={index}>
          <Link
            href={`/blog/${similarPost.currentSlug}`}
            className="flex items-center space-x-4 hover:bg-gray-200 dark:hover:bg-gray-700 p-2 rounded transition-colors duration-200"
          >
            <div className="flex-shrink-0 w-16 h-16 relative">
              <Image
                src={getPostImageUrl(similarPost)}
                alt={similarPost.titleFr || similarPost.titleEn}
                layout="fill"
                objectFit="cover"
                className="rounded"
              />
            </div>
            <div className="flex-grow">
              <h4 className="font-medium text-gray-800 dark:text-gray-200">
                {locale === 'fr' ? similarPost.titleFr : similarPost.titleEn}
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {formatDate(similarPost.date)}
              </p>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default SimilarPostsList