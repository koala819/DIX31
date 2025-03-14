'use client'

import DynamicLoadImage from './DynamicLoadImage'

interface ProfileClientProps {
  profileData: {
    greeting: string
    intro: string
    specialty: string
    learning: string
    callToAction: string
  }
  imagePath: string
}

export default function ProfileClient({
  profileData,
  imagePath,
}: ProfileClientProps) {
  return (
    <section
      className="flex flex-col lg:flex-row items-start justify-center gap-8 p-4 md:p-8 lg:p-12"
      aria-labelledby="profile-heading"
    >
      <div className="relative w-40 h-40 lg:w-48 lg:h-48 flex-shrink-0">
        <DynamicLoadImage
          src={imagePath}
          alt="Photo de Xavier"
          fill
          className="rounded-xl object-cover border-2 border-gray-300"
          sizes="(max-width: 768px) 160px, 192px"
          priority
        />
      </div>
      <div
        className="flex-grow max-w-2xl space-y-4 border-2 border-gray-300 rounded-xl p-4"
        role="contentinfo"
      >
        <h2 id="profile-heading" className="text-2xl lg:text-3xl font-bold">
          {profileData.greeting}
        </h2>
        <p>{profileData.intro}</p>
        <p>{profileData.specialty}</p>
        <p>{profileData.learning}</p>
        <p>{profileData.callToAction}</p>
      </div>
    </section>
  )
}
