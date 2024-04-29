import React from "react";
import Carousel from "./Carousel";
import Carousel1 from "./Carousel1";
import Carousel2 from "./Carousel2";
import underline from "../assets/Vector 37.svg";
import Faq from "./Faq";
import ConnectWithUs from "./ConnectWithUs";
import Table from "./Table";
import Navbar from "./Navbar.jsx";
import Process from "./Process";
import CarouselCT from "./CarouselCT.jsx";
import CombinedCarousel from "./CarouselTM.jsx";
import PricingPlan from "./PricingPlans.jsx";
import badge from "../assets/designrush/badge2.png";
import Footer from "./Footer.jsx";
const Hero = () => {
  return (
    <div className="bg-custom-color">
      <Navbar />

      <div className="relative font-serif mt-10">
        <p className="border-2  rounded-2xl bg-custom-color-1 border-custom-color-1 w-64 mx-auto flex justify-center items-center text-white font-serif xl:text-base md:text-xs lg:text-sm">
          This is an invite only page ...
        </p>
      </div>
      <div className="absolute top-[10px] left-[25px] hidden md:block ">
        <a
          href="https://www.designrush.com/agency/profile/ecomquiksolutions"
          target="_blank"
        >
          <img
            src={badge}
            alt="ecomquiksolutions on DesignRush"
            className="md:h-[80px] lg:h-[130px]  xl:h-[150px] mx-auto"
          />
        </a>
      </div>
      <div className="xl:text-lg md:text-base hidden md:flex justify-center flex-col items-center  mt-5 font-medium font-serif">
        <p>
          {" "}
          This is for all Ecom Owners who want to set up their store on Shopify
        </p>
      </div>
      <div className="  md:hidden flex justify-center flex-col items-center  mt-5 font-medium font-serif">
        <p> This is for all Ecom Owners who want </p>
        <p> to set up their store on Shopify</p>
      </div>
      <div className="xl:text-4xl md:text-2xl  hidden md:flex justify-center flex-col items-center  mt-5 font-semibold font-sans">
        <p>
          Our Tested and Proven{" "}
          <span className="text-custom-color-1"> DEVORT</span> Framework can
          help you to
        </p>
        <p>
          {" "}
          build your{" "}
          <span className="italic underline text-custom-color-1">High</span>
          &nbsp;
          <span className="italic text-custom-color-1 underline">
            Performing
          </span>{" "}
          Ecom Store on Shopify in
        </p>
        <p className="italic">
          {" "}
          <span className="underline ">Less than</span>{" "}
          <span className="underline">21 Days</span>
        </p>
      </div>
      <div className="  flex md:hidden justify-center flex-col text-[28px] items-center  mt-5 font-semibold font-sans">
        <p> Our Tested and Proven </p>
        <p>
          {" "}
          <span className="text-custom-color-1">DEVORT</span> Framework can
        </p>
        <p> help you to build your</p>
        <p>
          {" "}
          <span className="italic underline text-custom-color-1">
            High Performing
          </span>{" "}
          Ecom
        </p>
        <p> Store on Shopify in</p>
        <p className="italic">
          {" "}
          <span className="underline ">Less than</span>{" "}
          <span className="underline">21 Days</span>
        </p>
      </div>
      <div className="xl:text-2xl md:text-base hidden md:flex justify-center flex-col items-center  mt-10 font-serif">
        <p>
          Also Maximizes{" "}
          <span className="font-semibold">
            Conversions, Mobile Page Experience, Website Loading Speed{" "}
          </span>{" "}
          and helps
        </p>
        <p>
          in{" "}
          <span className="underline italic font-semibold">
            reducing Abandoned Cart
          </span>{" "}
          and{" "}
          <span className="underline italic font-semibold">
            Customer Acquisition Cost
          </span>{" "}
        </p>
      </div>
      <div className="mt-5 md:hidden">
        <a
          href="https://www.designrush.com/agency/profile/ecomquiksolutions"
          target="_blank"
        >
          <img
            src={badge}
            alt="ecomquiksolutions on DesignRush"
            className="h-[100px] sm:h-[130px] mx-auto"
          />
        </a>
      </div>
      <div className=" md:hidden flex justify-center flex-col items-center  mt-5 font-serif text-lg">
        <p>
          Also Maximizes{" "}
          <span className="font-semibold">Conversions, Mobile </span>
        </p>
        <p>
          Page <span>Experience, Website Loading </span>{" "}
        </p>
        <p>
          Speed and helps in{" "}
          <span className="underline italic font-semibold">reducing </span>{" "}
        </p>
        <p>
          {" "}
          <span className="underline italic font-semibold">
            {" "}
            Abandoned Cart
          </span>{" "}
          and <span className="underline italic font-semibold">Customer</span>
        </p>
        <p>
          {" "}
          <span className="underline italic font-semibold">
            Acquisition Cost
          </span>{" "}
        </p>
      </div>
      <div className="xl:text-lg md:text-base hidden md:flex justify-center flex-col items-center  mt-10 font-medium font-serif">
        <p>
          ( Successfully Delivered Shopify Stores to{" "}
          <span className="underline font-semibold italic">
            Numerous Clients
          </span>{" "}
          using DEVORT Framework )
        </p>
      </div>
      <div className=" md:hidden flex justify-center flex-col items-center  mt-5 font-medium text-lg font-serif">
        <p>( Successfully Delivered Shopify </p>
        <p>
          {" "}
          Stores to{" "}
          <span className="underline font-semibold italic">
            Numerous Clients
          </span>{" "}
        </p>
        <p> using DEVORT Framework )</p>
      </div>
      <div className=" md:hidden flex justify-center flex-col items-center  mt-5 font-medium font-serif text-lg">
        <p>Our Full Suite of Shopify </p>
        <p> Ecommerce Development Services </p>
      </div>
      <div className="xl:text-2xl md:text-lg hidden md:flex justify-center flex-col items-center  mt-10 font-medium font-serif">
        <p>Our Full Suite of Shopify Ecommerce Development Services </p>
      </div>
      <div className="grid justify-center items-center  xl:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-6 font-serif ">
        <div className="flex justify-center items-center">
          <div className="border-2   border-custom-color-1 text-black flex justify-center text-center md:m-9 m-6 rounded-md flex-col relative w-72 h-36 bg-[#D2B48C] shadow-xl">
            <div>
              <p className="font-medium text-2xl mb-2">Shopify Store Setup</p>
            </div>
            <div className="font-medium text-sm ">
              <p className="">Complete setup within</p>
              <p>7-21 Days</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="border-2   border-custom-color-1 text-black flex justify-center text-center md:m-9 m-6 rounded-md flex-col relative w-72 h-36 bg-[#D2B48C] shadow-xl">
            <div className="font-medium  text-2xl mb-2">
              <p>Custom Shopify Development Services</p>
            </div>
            <div className="font-medium text-sm">
              <p>Tailoring the store to specific</p>
              <p> requirements.</p>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center">
          <div className="border-2   border-custom-color-1 text-black flex justify-center text-center md:m-9 m-6 rounded-md flex-col relative w-72 h-36 bg-[#D2B48C] shadow-xl">
            <div className="font-medium  text-2xl mb-2">
              <p>Shopify App Integration Services</p>
            </div>
            <div className="font-medium text-sm">
              <p>By Default, includes Instagram and</p>
              <p> WhatsApp integration.</p>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center">
          <div className="border-2   border-custom-color-1 text-black flex justify-center text-center md:m-9 m-6 rounded-md flex-col relative w-72 h-36 bg-[#D2B48C] shadow-xl">
            <div className="font-medium  text-2xl mb-2">
              <p>Shopify Migration Services</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="border-2   border-custom-color-1 text-black flex justify-center text-center md:m-9 m-6 rounded-md flex-col relative w-72 h-36 bg-[#D2B48C] shadow-xl">
            <div className="font-medium text-2xl mb-2">
              <p>Third Party </p>
              <p> Integration</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="border-2   border-custom-color-1 text-black flex justify-center text-center md:m-9 m-6 rounded-md flex-col relative w-72 h-36 bg-[#D2B48C] shadow-xl">
            <div className="font-medium  text-2xl mb-2">
              <p>Shopify Maintenance and Support</p>
            </div>
          </div>
        </div>
      </div>

      <div className="xl:text-3xl md:text-xl hidden md:flex justify-center gap-6  items-center flex-col  mt-12 font-serif font-medium">
        <p>Now, Your e-commerce web development is in SAFE hands. </p>
      </div>
      <div className=" md:hidden flex flex-col justify-center  items-center  mt-6 font-serif font-medium text-lg">
        <p>Now, Your e-commerce web </p>
        <p> development is in SAFE hands. </p>
      </div>

      <div className="xl:text-5xl text-2xl lg:text-4xl flex justify-center  items-center  mt-10 md:mt-20 font-serif font-medium text-custom-color-1">
        <p>Few of our Shopify Clients</p>
      </div>
      <div className=" md:flex justify-center mt-2">
        <img
          src={underline}
          alt="img loading"
          className="mx-auto w-10/12 md:w-4/12 lg:w-5/12 xl:w-6/12"
        />
      </div>

      {/* ********************************** */}
      <CombinedCarousel />
      {/* ********************************** */}

      {/* <div className="xl:text-2xl md:text-base flex justify-center  items-center mt-16 md:mt-28 font-serif font-medium">
        <p style={{ color: "#f7516e" }}>pallavipoddar.com</p>
      </div>
      <div className="mt-10">
        <Carousel />
      </div>
      <div className="xl:text-2xl md:text-base  flex justify-center  items-center  font-serif font-medium mt-20">
        <p style={{ color: "#f7516e" }}> minimalistee.com </p>
      </div>
      <div className="mt-10">
        <Carousel1 />
      </div>
      <div className="xl:text-2xl md:text-base  flex justify-center  items-center   font-serif font-medium mt-20">
        <p style={{ color: "#f7516e" }}>moybyabeni.com </p>
      </div>
      <div className="mt-10">
        <Carousel2 />
      </div> */}

      <div className="mt-20">
        <div className="xl:text-5xl text-2xl lg:text-4xl flex justify-center  items-center  mt-10 md:mt-20 font-serif font-medium text-custom-color-1">
          <p>Customer Testimonials</p>
        </div>
        <div className=" md:flex justify-center mt-2">
          <img
            src={underline}
            alt="img loading"
            className="mx-auto w-10/12 md:w-4/12 lg:w-5/12 xl:w-6/12"
          />
        </div>
        <div className="mt-10">
          <CarouselCT />
        </div>
      </div>

      <div>
        <Process />
      </div>
      <div className="xl:text-5xl md:text-xl lg:text-3xl hidden md:flex justify-center  items-center  mt-16 xl:mt-28 font-serif font-medium text-custom-color-1">
        <p>Here is how our service compares to the Rest </p>
      </div>
      <div className=" md:hidden  flex flex-col text-3xl justify-center  items-center  mt-16  font-serif font-medium text-custom-color-1">
        <p>Here is how our service </p>
        <p> compares to the Rest </p>
      </div>

      <div className="hidden md:flex justify-center mt-2">
        <img
          src={underline}
          alt="img loading"
          className="md:w-6/12 lg:w-8/12 xl:w-10/12"
        />
      </div>
      <div className="mt-10 ">
        <Table></Table>
      </div>

      <div className="">
        <PricingPlan />
      </div>

      <div className="">
        <Faq />
      </div>
      <div>
        <ConnectWithUs />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Hero;
