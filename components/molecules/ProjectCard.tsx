import DynamicLoadImage from '@/components/client/DynamicLoadImage'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from '@/components/ui/card'

import { Link } from '@/i18n/navigation'

type ProjectProps = {
  project: {
    title: string
    picture: {
      src: string
      alt: string
    }
    description: string
    expertise: string[]
    testimonial: {
      content: string
      author: string
      role: string
      avatar: string
    }
    link: {
      url: string
    }
  }
  btnText: string
  expertise: string
}

export default function ProjectCard({
  project,
  btnText,
  expertise,
}: ProjectProps) {
  return (
    <Card className="shadow-lg shadow-gray-600 rounded-2xl border p-8">
      <CardHeader>
        <h2 className="mb-4">{project.title}</h2>
        <CardDescription className="dark:text-white text-lg">
          {project.description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <DynamicLoadImage
              alt={project.picture.alt}
              className="rounded-lg object-cover w-full h-auto"
              height={300}
              width={500}
              src={project.picture.src}
            />
          </div>
          <div className="space-y-4">
            <h3>{expertise}</h3>
            <ul className="list-disc pl-5 space-y-2">
              {project.expertise.map((item, index) => (
                <li key={index}>
                  <span className="text-base">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-8">
          <blockquote className="text-lg italic border-l-4 border-gray-300 pl-4">
            {project.testimonial.content}
            <footer className="mt-2 flex items-center">
              <DynamicLoadImage
                src={project.testimonial.avatar || ''}
                alt={`Photo de ${project.testimonial.author}`}
                width={50}
                height={50}
                className="rounded-full mr-4"
              />
              <div>
                <strong>{project.testimonial.author}</strong>
                <br />
                <span className="text-sm">{project.testimonial.role}</span>
              </div>
            </footer>
          </blockquote>
        </div>
      </CardContent>
      <CardFooter className="flex justify-center mt-4">
        <Link href={project.link.url} target="_blank">
          <Button className="dark:bg-blue-900 dark:text-white">
            {btnText}
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}
