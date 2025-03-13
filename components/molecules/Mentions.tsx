import { Suspense } from 'react'

import MentionsAnimated from '@/components/client/MentionsAnimated'
import MentionsContent from '@/components/client/MentionsContent'

export default function Mentions() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <Suspense
        fallback={
          <div className="text-center py-8">
            Chargement de l&apos;en-tête...
          </div>
        }
      >
        <MentionsAnimated />
      </Suspense>

      <Suspense
        fallback={
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-pulse">
            <div className="h-64 bg-card/50 rounded-lg"></div>
            <div className="h-64 bg-card/50 rounded-lg"></div>
          </div>
        }
      >
        <MentionsContent />
      </Suspense>
    </div>
  )
}
