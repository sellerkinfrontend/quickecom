import React from "react";
import underline from "../assets/Vector 37.svg";

const PricingPlan = () => {
  const features = [
    "Shopify Website Creation and Setup",
    "Upto 200 Products Upload By Our Team",
    "Help you to connect with Domain ",
    "Responsive Website",
    "Social Media Integration",
    "Google Analytics Integration",
    "Google Maps Embed",
    "Whatsapp integration",
    "High Speed Optimization",
    "Search Console Integration",
    "Contact Form Integration",
    "Custom Favicon",
    "Shopify Portal Training Session",
    "Payment Gateway Integration",
    "Assistance in Shopfiy Apps Setup",
    "Shipping Gateway Setup & Integration",
  ];

  const standardPoints = [
    "Basic Search with Search Results Page",
    "Payment and Shipping Integration",
    "Shopify apps integration",
    "Newsletter Integration",
    "Coupon Code",
    "Popup Form",
    "Insta Feed",
    "WhatsApp Integration",
    "Product Image Zoom Option",
    "Map On Contact Us Page",
    "Fully tested Shopify Store",
    "Push website live",
    "Post-live 1-week support",
  ];

  const premiumPoints = [
    "Basic Search with Search Results Page",
    "Mega Menus",
    "Filters Collection Page",
    "Header Sticky",
    "Product Description Tabs on the Product Page",
    "Images - To Build Credibility",
    "Map on Contact Us Page",
    "On Product hover Product",
    "Image change",
    "Product Image Zoom",
    "Quick View Option",
    "Related Products on Product Page",
    "Banners on Collection Page",
    "PageCart drawer",
    "Insta Feed",
    "Newsletter subscription",
    "Customer Testimonials via custom Coding or App Integration",
    "Pop up form",
    "Track your order",
    "Reel Format Videos on home page",
    "5 - 6 autoplay videos on the Home Page",
    "Color Swatches on the collection",
    "Wishlist",
    "Size chart",
    "Product share button",
    "Product Compare Page",
    "Product Description Tabs on Product Page",
    "Product Compare Button",
    "Product Customization",
    "Product Reviews",
    "Pincode and Delivery date checker",
    "One-page checkout",
    "Add to cart button on the collection page",
    "Payment Integration",
    "Shipping Gateway Setup",
    "Shopify apps integration",
    "Fully tested Shopify Store",
    "Push website live",
    "Post-live 10 Days Support",
  ];

  const thirdPoint = [
    "Homepage",
    "About us",
    "Collection ( Listing )",
    "Product Details",
    "Cart",
    "Checkout",
    "Contact Us",
    "Map On Contact Us",
    "Privacy Policy",
    "Terms & Conditions",
    "Returns and Refund Policy",
  ];

  return (
    <div id="Pricing" className="mt-10 xl:mt-16">
      <div className="font-sans font-bold xl:text-5xl md:text-2xl lg:text-3xl hidden md:flex flex-col justify-center items-center gap-3 ">
        <p> Pricing Plans</p>
        <img
          src={underline}
          alt="img loading"
          className="xl:w-3/12 md:w-3/12 "
        />
      </div>
      <div className="font-sans font-bold text-3xl flex md:hidden flex-col justify-center items-center gap-3">
        <p> Pricing Plans </p>
      </div>
      <div className=" w-10/12  lg:w-8/12 mx-auto grid grid-cols-1  md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-8 mt-10">
        <div
          id="STANDARD"
          className=" rounded-md shadow w-10/12 sm:w-8/12 md:w-6/12 lg:w-11/12 mx-auto bg-white "
          style={{ border: "2px solid #F95700" }}
        >
          <div
            className="h-8 rounded-tl rounded-tr"
            style={{ backgroundColor: "#F95700" }}
          ></div>
          <div className="h-14 flex flex-col  items-center my-5">
            <p className="font-semibold text-3xl ">Standard</p>
            {/* <p className="text-xl">$399.99</p>
            <p className="text-md text-gray-500">per month</p> */}
          </div>
          <hr className="w-8/12 mx-auto" />
          <div id="Meta" className="px-8 my-4 text-sm">
            {/* <p className="font-semibold">META's CHARGES</p> */}
            <ul className="my-4">
              <li className="flex items-center gap-2 mb-2">
                <img
                  // src="https://cdn-icons-png.flaticon.com/128/9778/9778606.png"
                  src="https://cdn-icons-png.flaticon.com/128/14034/14034688.png"
                  className="h-6"
                />
                <span>Shopify Store Setup and Configuration</span>
              </li>
              <li className="flex items-center gap-2 mb-2">
                <img
                  // src="https://cdn-icons-png.flaticon.com/128/9778/9778606.png"
                  src="https://cdn-icons-png.flaticon.com/128/14034/14034688.png"
                  className="h-6"
                />
                <span>Bonus - Shopify theme worth upto Rs 17k</span>
              </li>
              <li className="flex items-center gap-2 mb-2">
                <img
                  // src="https://cdn-icons-png.flaticon.com/128/9778/9778606.png"
                  src="https://cdn-icons-png.flaticon.com/128/14034/14034688.png"
                  className="h-6"
                />
                <span>
                  Readymade Mobile Responsive Mobile theme as per your Branding
                </span>
              </li>
              <li className="flex flex-col mb-2">
                <hr className="w-8/12 mx-auto my-4" />
                <div className=" text-center mb-3">
                  <p className="font-semibold text-gray-500 text-lg">Pages </p>
                </div>
                <div className="">
                  <ul>
                    {thirdPoint.map((f, index) => (
                      <li className="flex items-center gap-2 mb-2" key={index}>
                        <img
                          // src="https://cdn-icons-png.flaticon.com/128/9778/9778606.png"
                          src="https://cdn-icons-png.flaticon.com/128/14034/14034688.png"
                          className="h-6"
                        />
                        <span>{f}</span>
                      </li>
                    ))}
                    <li className="flex items-center gap-2 mb-2">
                      <p className="  ml-6 my-2">
                        ( Content Provided by Brand )
                      </p>
                    </li>
                  </ul>
                </div>
                <hr className="w-8/12 mx-auto my-4" />
              </li>
              {standardPoints.map((f, index) => (
                <li className="flex items-center gap-2 mb-2" key={index}>
                  <img
                    // src="https://cdn-icons-png.flaticon.com/128/9778/9778606.png"
                    src="https://cdn-icons-png.flaticon.com/128/14034/14034688.png"
                    className="h-6"
                  />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>
          {/* <hr className="w-8/12 mx-auto" /> */}
        </div>

        <div
          id="PREMIUM"
          className=" rounded-md shadow w-10/12 sm:w-8/12 md:w-6/12 lg:w-11/12 mx-auto bg-white "
          style={{ border: "2px solid #F95700" }}
        >
          <div
            className="h-8 rounded-tl rounded-tr"
            style={{ backgroundColor: "#F95700" }}
          ></div>
          <div className="h-16 gap-2 flex flex-col justify-center items-center my-5">
            <p className="font-semibold text-3xl ">Premium</p>
            <p className=" font-semibold text-gray-600 text-[12px] my-2 text-center">
              (You can choose all features or as per your requirement)
            </p>
            {/* <p className="text-xl">$399.99</p>
            <p className="text-md text-gray-500">per month</p> */}
          </div>
          <hr className="w-8/12 mx-auto" />
          <div id="Meta" className="px-8 my-4 text-sm">
            {/* <p className="font-semibold">META's CHARGES</p> */}
            <ul className="my-4">
              <li className="flex items-center gap-2 mb-2">
                <img
                  // src="https://cdn-icons-png.flaticon.com/128/9778/9778606.png"
                  src="https://cdn-icons-png.flaticon.com/128/14034/14034688.png"
                  className="h-6"
                />
                <span>Shopify Store Setup and Configuration</span>
              </li>
              <li className="flex items-center gap-2 mb-2">
                <img
                  // src="https://cdn-icons-png.flaticon.com/128/9778/9778606.png"
                  src="https://cdn-icons-png.flaticon.com/128/14034/14034688.png"
                  className="h-6"
                />
                <span>Bonus - Shopify theme worth upto Rs 17k</span>
              </li>
              <li className="flex items-center gap-2 mb-2">
                <img
                  // src="https://cdn-icons-png.flaticon.com/128/9778/9778606.png"
                  src="https://cdn-icons-png.flaticon.com/128/14034/14034688.png"
                  className="h-6"
                />
                <span>
                  Readymade Mobile Responsive Mobile theme as per your Branding
                </span>
              </li>
              <li className="flex flex-col mb-2">
                <hr className="w-8/12 mx-auto my-4" />
                <div className=" text-center mb-3">
                  <p className="font-semibold text-gray-500 text-lg">Pages </p>
                </div>
                <div className="">
                  <ul>
                    {thirdPoint.map((f, index) => (
                      <li className="flex items-center gap-2 mb-2" key={index}>
                        <img
                          // src="https://cdn-icons-png.flaticon.com/128/9778/9778606.png"
                          src="https://cdn-icons-png.flaticon.com/128/14034/14034688.png"
                          className="h-6"
                        />
                        <span>{f}</span>
                      </li>
                    ))}
                    <li className="flex items-center gap-2 mb-2">
                      <p className="  ml-6 my-2">
                        ( Content Provided by Brand )
                      </p>
                    </li>
                  </ul>
                </div>
                <hr className="w-8/12 mx-auto my-4" />
              </li>
              {premiumPoints.map((f, index) => (
                <li className="flex items-center gap-2 mb-2" key={index}>
                  <img
                    // src="https://cdn-icons-png.flaticon.com/128/9778/9778606.png"
                    src="https://cdn-icons-png.flaticon.com/128/14034/14034688.png"
                    className="h-6"
                  />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>
          <hr className="w-8/12 mx-auto" />
        </div>

        {/* <div
          id="Plus"
          className=" rounded-md shadow w-10/12 sm:w-8/12 md:w-6/12 lg:w-11/12 mx-auto bg-white "
          style={{ border: "2px solid #F95700" }}
        >
          <div
            className="h-8 rounded-tl rounded-tr"
            style={{ backgroundColor: "#F95700" }}
          ></div>
          <div className="h-24 text-center my-5">
            <p className="font-semibold text-3xl mb-3">PLUS</p>
            <p className="text-xl">$399.99</p>
            <p className="text-md text-gray-500">per month</p>
          </div>
          <hr className="w-8/12 mx-auto" />
          <div id="Meta" className="px-8 my-4 text-sm"> */}
        {/* <p className="font-semibold">META's CHARGES</p> */}

        <div
          id="NOTE"
          className=" rounded-md shadow w-10/12 sm:w-8/12 md:w-6/12 lg:w-5/12 mx-auto bg-white lg:col-span-2 p-4 "
          style={{ border: "2px solid #F95700" }}
        >
          <p className="font-bold text-center">Note:</p>
          <p className="font-semibold text-gray-500 text-sm my-2">
            (Not included in both the Packages)
          </p>
          <ol className="list-decimal px-4">
            <li className="text-sm">
              Cost of Shopify Plan, Shopify App Pricing or Domain
            </li>
            <li className="text-sm">Logo Design, Images creations </li>
            <li className="text-sm">Data entry or product upload </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default PricingPlan;
