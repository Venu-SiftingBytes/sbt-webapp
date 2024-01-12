import { Carousel } from 'flowbite-react';
import HeroOne from '../hero/HeroOne';
import HeroTwo from '../hero/HeroTwo';

export default function CarouselShell() {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-[600px]">
      <Carousel pauseOnHover>
        <HeroOne />
        <HeroTwo />
      </Carousel>
    </div>
  );
}
