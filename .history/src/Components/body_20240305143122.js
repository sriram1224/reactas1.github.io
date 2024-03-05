import React from 'react';
import { Carousel } from 'react-bootstrap'; // Import Carousel component from react-bootstrap
import ReactImg from './download.jpeg'; // Import your image files
import VueImg from './VueImg.jpg';
import AngularImg from './AngularImg.jpg';

function ControlledCarousel() {
  return (
    <Carousel controls indicators>
      {/* Define Carousel items with images */}
      <Carousel.Item>
        <img className="d-block w-100" src={ReactImg} alt="slide 1" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="" alt="slide 2" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={AngularImg} alt="slide 3" />
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;
