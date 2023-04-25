
import { useState } from 'react';
import { SlCarousel, SlCarouselItem } from '@shoelace-style/shoelace/dist/react';


function Carousel() {
    const [slides, setSlides] = useState([]);

    return (
        <SlCarousel className="dynamic-carousel" loop pagination navigation>
        {slides.map((i) => (
          <SlCarouselItem style=''>
            Slide {i}
          </SlCarouselItem>
        ))}
      </SlCarousel>
    );
}

export default Carousel