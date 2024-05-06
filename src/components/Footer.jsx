import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className=" bg-[#2F363C] pt-4 font-serif">
      <div className="md:grid hidden grid-cols-2 text-xs">
        <div className="text-white flex flex-col relative gap-4 ml-16">
          <div>
            <p>
              This site is not a part of the Facebook website or Facebook inc.
              Additionally, This site is
            </p>
            <p>
              NOT endorsed by Facebook in any way. FACEBOOK is a trademark of
              FACEBOOK, Inc.
            </p>
          </div>
          <div>
            <p>Copyright © EcomQuikSolutions 2024. All Right Reserved.</p>
          </div>
          <div className="mb-2">
            <p>
              <Link to="terms-of-service" target="_blank">
                Terms Of Services
              </Link>{" "}
              |{" "}
              <Link to="privacy-policy" target="_blank">
                Privacy Policy
              </Link>{" "}
              |{" "}
              <Link to="cancellation" target="_blank">
                Cancellation & Refund Policy{" "}
              </Link>{" "}
              |{" "}
              <Link to="contactus" target="_blank">
                Contact us
              </Link>{" "}
              |{" "}
              <Link to="shipping-policy" target="_blank">
                Shipping Policy
              </Link>
            </p>
          </div>
        </div>
        <div className="flex gap-2 text-white justify-center items-center">
          <span className="text-2xl font-bold relative  ">
            Ecomquiksolutions
          </span>
        </div>
      </div>

      <div className="flex md:hidden flex-col text-white gap-4 ">
        <div className="flex gap-4 text-white justify-center items-center">
          <span className="text-2xl font-bold relative top-1  ">
            Ecomquiksolutions
          </span>
        </div>
        <div className="text-xs">
          <p className="flex justify-center items-center">
            This site is not a part of the Facebook{" "}
          </p>
          <p className="flex justify-center items-center">
            website or Facebook inc. Additionally,{" "}
          </p>
          <p className="flex justify-center items-center">
            This site is NOT endorsed by
          </p>
          <p className="flex justify-center items-center">
            {" "}
            Facebook in any way. FACEBOOK is a{" "}
          </p>
          <p className="flex justify-center items-center">
            trademark of FACEBOOK, Inc.
          </p>
        </div>
        <div className="text-xs">
          <p className="flex justify-center items-center">
            Copyright © Ecomquiksolutions 2024. All Right Reserved.
          </p>
        </div>
        <div className="text-xs">
          <p className="flex justify-center items-center">
            <Link to="terms-of-service" target="_blank">
              Terms Of Services
            </Link>{" "}
            |{" "}
            <Link to="privacy-policy" target="_blank">
              Privacy Policy
            </Link>{" "}
            |{" "}
            <Link to="cancellation" target="_blank">
              Cancellation & Refund Policy{" "}
            </Link>{" "}
            |{" "}
            <Link to="contactus" target="_blank">
              Contact us
            </Link>{" "}
            |{" "}
            <Link to="shipping-policy" target="_blank">
              Shipping Policy
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
