import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import first from "../assets/li6.png"
import second from "../assets/li7.png"
import third from "../assets/li8.png"

const Carousel1 = () => {
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
    <Slider {...settings} className='w-[80%] mx-auto xl:h-[500px]' >
      <div>
        <img src={first} alt="Img 1" className='object-cover '/>
      </div>
      <div>
        <img src={second} alt="Img 2" className='object-cover'/>
      </div>
      <div>
        <img src={third} alt="Img 3" className='object-cover'/>
      </div>
      
    </Slider>
  );
};

export default Carousel1;
