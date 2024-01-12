'use client';

import { Button, Timeline } from 'flowbite-react';
import { HiArrowNarrowRight, HiCalendar } from 'react-icons/hi';

export default function TimelineC() {
  return (
    <Timeline>
      <Timeline.Item>
        <Timeline.Point icon={HiCalendar} />
        <Timeline.Content>          
          <Timeline.Title>Happy Learning</Timeline.Title>                   
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Point icon={HiCalendar} />
        <Timeline.Content>
          <Timeline.Time>
            <span className='text-black'>Module 1 </span> 
          </Timeline.Time>
          <Timeline.Title>Basics of Computers</Timeline.Title>
          <Timeline.Time >Duration 1 week</Timeline.Time>
          <Timeline.Body>
            Learn everything about Computer resources, Client-Server Architecture and how web works in general
          </Timeline.Body>
          <Button color="gray">
            Go to Course
            <HiArrowNarrowRight className="ml-2 h-3 w-3" />
          </Button>          
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Point icon={HiCalendar} />
        <Timeline.Content>
          <Timeline.Time>
            <span className='text-black'>Module 2</span> 
          </Timeline.Time>
          <Timeline.Title>HTML</Timeline.Title>
          <Timeline.Time >Duration 15 days</Timeline.Time>
          <Timeline.Body>
            All of the pages and components are first designed in Figma and we keep a parity between the two versions
            even as we update the project.
          </Timeline.Body>
          <Button color="gray">
            Go to Course
            <HiArrowNarrowRight className="ml-2 h-3 w-3" />
          </Button>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Point icon={HiCalendar} />
        <Timeline.Content>
          <Timeline.Time>
            <span className='text-black'>Module 3</span> 
          </Timeline.Time>
          <Timeline.Title>CSS</Timeline.Title>
          <Timeline.Time >Duration 1 month</Timeline.Time>
          <Timeline.Body>
            Get started with dozens of web components and interactive elements built on top of Tailwind CSS.
          </Timeline.Body>
          <Button color="gray">
            Go to Course
            <HiArrowNarrowRight className="ml-2 h-3 w-3" />
          </Button>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Point icon={HiCalendar} />
        <Timeline.Content>
          <Timeline.Time>
            <span className='text-black'>Module 4</span> 
          </Timeline.Time>
          <Timeline.Title>JavaScript</Timeline.Title>
          <Timeline.Time >Duration 1 month</Timeline.Time>
          <Timeline.Body>
            Get started with dozens of web components and interactive elements built on top of Tailwind CSS.
          </Timeline.Body>
          <Button color="gray">
            Go to Course
            <HiArrowNarrowRight className="ml-2 h-3 w-3" />
          </Button>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Point icon={HiCalendar} />
        <Timeline.Content>
          <Timeline.Time>
            <span className='text-black'>Module 5</span> 
          </Timeline.Time>
          <Timeline.Title>TypeScript</Timeline.Title>
          <Timeline.Time >Duration 1 month</Timeline.Time>
          <Timeline.Body>
            Get started with dozens of web components and interactive elements built on top of Tailwind CSS.
          </Timeline.Body>
          <Button color="gray">
            Go to Course
            <HiArrowNarrowRight className="ml-2 h-3 w-3" />
          </Button>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Point icon={HiCalendar} />
        <Timeline.Content>
          <Timeline.Time>
            <span className='text-black'>Module 6</span> 
          </Timeline.Time>
          <Timeline.Title>ReactJS</Timeline.Title>
          <Timeline.Time >Duration 1 month</Timeline.Time>
          <Timeline.Body>
            Get started with dozens of web components and interactive elements built on top of Tailwind CSS.
          </Timeline.Body>
          <Button color="gray">
            Go to Course
            <HiArrowNarrowRight className="ml-2 h-3 w-3" />
          </Button>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Point icon={HiCalendar} />
        <Timeline.Content>
          <Timeline.Time>
            <span className='text-black'>Module 7</span> 
          </Timeline.Time>
          <Timeline.Title>NextJS</Timeline.Title>
          <Timeline.Time >Duration 1 month</Timeline.Time>
          <Timeline.Body>
            Get started with dozens of web components and interactive elements built on top of Tailwind CSS.
          </Timeline.Body>
          <Button color="gray">
            Go to Course
            <HiArrowNarrowRight className="ml-2 h-3 w-3" />
          </Button>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Point icon={HiCalendar} />
        <Timeline.Content>          
          <Timeline.Title>Full Stack Development</Timeline.Title>         
        </Timeline.Content>
      </Timeline.Item>
    </Timeline>
  );
}
