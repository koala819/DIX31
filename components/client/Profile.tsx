'use client'

import dynamic from 'next/dynamic'

const Profile = dynamic(() => import('@/components/atoms/Profile'))

export const DynamicProfile = () => {
  return <Profile />
}
