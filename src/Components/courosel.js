import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const images = [
  'https://i.stack.imgur.com/CJT47.jpg',
  'https://i.stack.imgur.com/capu1.jpg',
  'https://i.stack.imgur.com/zMoo4.jpg',
  'https://i.stack.imgur.com/hOIuY.jpg',
];

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div>
      
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Slide ${index}`} style={{ height: '40rem',width:'80rem' }} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
