import { PortableTextReactComponents } from '@portabletext/react'
import dynamic from 'next/dynamic'
import CodeBlock from '@/components/BLOG/atoms/CodeBlock'
import CustomImage from '@/components/atoms/CustomImage'

const YouTubePlayer = dynamic(() => import('react-player/youtube'), {
  ssr: false,
  loading: () => <p>Chargement de la vidéo...</p>,
})

/**
 * Fonction utilitaire pour décoder correctement les données de code provenant de Sanity
 */
const processSanityCode = (codeValue: any): string => {
  // Cas où l'objet est déjà correct
  if (typeof codeValue === 'object' && codeValue !== null) {
    return codeValue.code || '';
  }

  // Cas où c'est une chaîne JSON
  if (typeof codeValue === 'string' && codeValue.trim().startsWith('{') && codeValue.trim().endsWith('}')) {
    try {
      const parsedObj = JSON.parse(codeValue);
      return parsedObj.code || codeValue;
    } catch (e) {
      console.warn('Failed to parse JSON code value');
      return codeValue;
    }
  }

  // Cas où c'est juste une chaîne de caractères
  return codeValue;
};

export const CustomPortableTextComponents: Partial<PortableTextReactComponents> = {
  block: {
    h2: ({ children }) => <h2 id={children?.toString()}>{children}</h2>,
    h3: ({ children }) => <h3 id={children?.toString()}>{children}</h3>,
  },
  types: {
    code: ({ value }) => {
      // Check if value has the expected structure
      if (value && typeof value === 'object') {
        // Extraire le code et le langage, avec des valeurs par défaut
        const codeContent = processSanityCode(value.code || '');
        const language = value.language || 'javascript';

        // Passer les données traitées au composant CodeBlock
        return <CodeBlock code={codeContent} language={language} />;
      }

      // Fallback pour les cas non-standard
      console.warn('Unexpected code block structure:', value);
      return <pre>{JSON.stringify(value, null, 2)}</pre>;
    },
    image: CustomImage,
    cloudinaryImage: CustomImage,
    youtube: ({ value }) => {
      return (
        <div className="my-8 aspect-w-16 aspect-h-9 flex justify-center">
          <YouTubePlayer url={value.url} />
        </div>
      );
    },
  },
};