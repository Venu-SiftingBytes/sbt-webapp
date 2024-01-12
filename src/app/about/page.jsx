import Journey from '@/components/journey/Journey';
import Team from '@/components/team/Team';
import React from 'react'

const AboutPage = () => {
  return (
    <div className='flex flex-col gap-y-4'>
      <Journey />
      <Team />
    </div>
  )
}

export default AboutPage;