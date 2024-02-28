import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CarouselCT = () => {
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
    <Slider {...settings} className="w-[80%] mx-auto xl:h-[350px]">
      <div>
        <div className="flex flex-col  w-10/12 md:w-7/12 mx-auto p-4  rounded-xl bg-custom-color-2 shadow-lg mt-10">
          <p className="mb-2">
            ecomquiksolutions.com are my go to point for Shopify websites. I got
            2 websites done through them back to back and those are two are few
            of the best projects being taken care by me. What I liked most about
            their services is direct communication with the developer and their
            subject knowledge (they know about their stuff and are clear about
            it). Also their finishing to a project is also commendable, which is
            an important part in web design & development.
          </p>
          <p className="mt-2">
            If you are looking for a shopify website, I would highly recommend
            them. Cheers !!
          </p>
          <div
            className="mt-5"
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "15px",
              alignItems: "center",
            }}
          >
            <p className="font-medium">
              Ajay Binani ( Founder of Minimalistee.com )
            </p>
            <img
              src="https://sellerkin.com/static/media/Group%20486.b3a329ee014907cfb77443bf44666c07.svg"
              alt="star"
              style={{ height: "25px", display: "inline" }}
            />
          </div>
        </div>
      </div>
      <div>
        <div className="flex flex-col  w-10/12 md:w-7/12 mx-auto p-4  rounded-xl bg-custom-color-2 shadow-lg mt-10">
          <p className="mb-2">
            Had a great experience working with Amit and the team. They were
            receptive to the many changes I wanted in the website and also were
            ready to work in my budget. Would definitely recommend their
            services!
          </p>
          <div
            className="mt-5"
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "15px",
              alignItems: "center",
            }}
          >
            <p className="font-medium">Cydwel ( Founder of moybyabeni.com )</p>
            <img
              src="https://sellerkin.com/static/media/Group%20486.b3a329ee014907cfb77443bf44666c07.svg"
              alt="star"
              style={{ height: "25px", display: "inline" }}
            />
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default CarouselCT;
