import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import myo from "../assets/desktop/lap/myo.png";
import mini from "../assets/desktop/lap/mini.png";
import pallavi from "../assets/desktop/lap/pallavi.png";
import rank from "../assets/desktop/lap/rank.png";

import myoM from "../assets/mobile/myo.JPG";
import miniM from "../assets/mobile/mini.JPG";
import pallaviM from "../assets/mobile/pallavi.JPG";
import rankM from "../assets/mobile/rank.JPG";
function CombinedCarousel() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <div className="mt-24 w-10/12 mx-auto container grid grid-cols-1 sm:grid-cols-5 h-[80%]  ">
      <div className="col-span-3 h-5/5 ">
        <div className="w-[90%] mx-auto ">
          <Slider
            {...settings}
            className="w-[88%] mx-auto bg-white shadow rounded-tl-[10px] rounded-tr-[10px]"
            style={{
              borderTop: "14px solid black",
              borderLeft: "5px solid black",
              borderRight: "5px solid black",
              borderBottom: "8px solid black",
            }}
          >
            <div>
              <img src={myo} alt="Img 1" className="object-cover mx-auto" />
            </div>
            <div>
              <img src={mini} alt="Img 3" className="object-cover  mx-auto" />
            </div>
            <div>
              <img
                src={pallavi}
                alt="Img 2"
                className="object-cover  mx-auto"
              />
            </div>
            <div>
              <img src={rank} alt="Img 2" className="object-cover  mx-auto" />
            </div>
          </Slider>
          <div className="w-[100%] h-[9.5px] sm:h-[10px] md:h-[13px] lg:h-[15px] bg-[#363238]  rounded-bl-[12px] rounded-br-[12px] relative">
            <div className="w-[20%] h-[2px] sm:h-[3px] md:h-[4px] lg:h-[6px] bg-black mx-auto rounded-bl-[70%] rounded-br-[70%]"></div>
          </div>
        </div>
      </div>
      <div className="col-span-2 sm:h-[100%]">
        <Slider
          {...settings}
          className="mt-[15%] sm:mt-0 mx-auto w-[25%] sm:w-[35%] mx-auto  sm:h-[95%] md:h-[96%] lg:h-[96%] p-1/2"
          // className="mt-[20%] sm:mt-0 mx-auto w-[20%] sm:w-[35%] mx-auto  sm:h-[95%] md:h-[96%] lg:h-[98%] p-1/2"

          style={{
            borderTop: "8px solid black",
            borderBottom: "20px solid black",
            borderLeft: "3px solid black",
            borderRight: "3px solid black",
            backgroundColor: "White",
            borderRadius: "15px",
          }}
        >
          <div>
            <img src={myoM} alt="Img 1" className="rounded object-contain" />
          </div>
          <div>
            <img src={miniM} alt="Img 3" className="rounded object-contain" />
          </div>
          <div>
            <img
              src={pallaviM}
              alt="Img 2"
              className="rounded  object-contain"
            />
          </div>
          <div>
            <img src={rankM} alt="Img 2" className="rounded  object-contain" />
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default CombinedCarousel;
