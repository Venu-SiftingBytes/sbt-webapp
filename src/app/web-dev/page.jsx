import BCPath from '@/components/breadcrumb/BCPath';
import TimelineC from '@/components/timeline/Timeline';
import React from 'react'

const WebDevelopmentPage = () => {
  return (
    <div>
      <div className='m-8'>
          <BCPath courseName="Web Development with ReactJS" />
      </div>
      <div className='mt-16 mx-32'>
        <TimelineC />
      </div>
    </div>
    
  )
}

export default WebDevelopmentPage;