import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import first from "../assets/li1.png"
import second from "../assets/li2.png"
import third from "../assets/li3.png"

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Slider {...settings} className='w-[80%] mx-auto xl:h-[530px]'  >
      <div>
        <img src={first} alt="Img 1" className='object-cover '/>
      </div>
      <div>
        <img src={third} alt="Img 3" className='object-cover'/>
      </div>
      <div>
        <img src={second} alt="Img 2" className='object-cover'/>
      </div>
      
      
    </Slider>
  );
};

export default Carousel;
