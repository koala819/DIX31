import {
  CodeXml,
  Computer,
  Cpu,
  Network,
  Newspaper,
  Search,
  Smile,
  Wrench,
} from 'lucide-react'
import { GrAndroid } from 'react-icons/gr'

import { TagIconMap } from '@/types/blog'

const tagIcons: TagIconMap = {
  Actus: <Newspaper />,
  Android: <GrAndroid />,
  Dev: <CodeXml />,
  DIX31: <Computer />,
  Hack: <Network />,
  Humour: <Smile />,
  IA: <Cpu />,
  Outils: <Wrench />,
  SEO: <Search />,
}

const TagIcons = ({ tag, className }: { tag: string; className?: string }) => {
  const IconComponent = tagIcons[tag]

  if (!IconComponent) {
    return null
  }

  return <span className={className}>{IconComponent}</span>
}

export default TagIcons
