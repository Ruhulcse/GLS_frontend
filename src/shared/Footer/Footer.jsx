import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import Container from "../Container/Container";
const Footer = () => {
  return (
    <section className="bg-[#0A0D10]">
      <div className="border-b border-[#dfdfdf] py-20">
        <div className="flex sm:flex-row flex-col sm:justify-between w-full max-w-6xl mx-auto sm:px-0 px-6 sm:space-y-0 space-y-4">
          <div className="space-y-2">
            <h3 className="text-2xl text-[#dfdfdf] font-bold mb-6">
              Quick Navigate
            </h3>
            <p className="text-sm text-[#dfdfdf] tracking-normal font-normal">
              Contact Us
            </p>
            <p className="text-sm text-[#dfdfdf] tracking-normal font-normal">
              What We Can Do
            </p>
            <p className="text-sm text-[#dfdfdf] tracking-normal font-normal">
              Industries We Cover
            </p>
            <p className="text-sm text-[#dfdfdf] tracking-normal font-normal">
              About Us
            </p>
            <p className="text-sm text-[#dfdfdf] tracking-normal font-normal">
              Services
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="text-2xl text-[#dfdfdf] font-bold mb-6">Services</h3>
            <p className="text-sm text-[#dfdfdf] tracking-normal font-normal">
              Lorem ipsum dolor sit amet consectetur.
            </p>
            <p className="text-sm text-[#dfdfdf] tracking-normal font-normal">
              Lorem ipsum dolor sit amet consectetur.
            </p>
            <p className="text-sm text-[#dfdfdf] tracking-normal font-normal">
              Lorem ipsum dolor sit amet.
            </p>
            <p className="text-sm text-[#dfdfdf] tracking-normal font-normal">
              Lorem ipsum dolor sit amet.
            </p>
            <p className="text-sm text-[#dfdfdf] tracking-normal font-normal">
              Lorem ipsum dolor sit.
            </p>
          </div>
          <div className="space-y-2 pt-14">
            <p className="text-sm text-[#dfdfdf] tracking-normal font-normal">
              Lorem ipsum dolor sit amet.
            </p>
            <p className="text-sm text-[#dfdfdf] tracking-normal font-normal">
              Lorem, ipsum dolor.
            </p>
            <p className="text-sm text-[#dfdfdf] tracking-normal font-normal">
              Lorem ipsum dolor sit.
            </p>
            <p className="text-sm text-[#dfdfdf] tracking-normal font-normal">
              Lorem, ipsum dolor.
            </p>
          </div>
          <div className="space-y-2">
            <h1 className="text-2xl text-[#dfdfdf] font-bold mb-6">
              Contact us
            </h1>
            <p className="text-sm text-[#dfdfdf] tracking-normal font-normal">
              Mon - Fri | 9am - 5pm
            </p>
            <p className="text-sm text-[#dfdfdf] tracking-normal font-normal">
              (09) 623 4340
            </p>
            <p className="text-sm text-[#dfdfdf] tracking-normal font-normal">
              ​021 261 7332
            </p>
            <p className="text-sm text-[#dfdfdf] tracking-normal font-normal">
              info@barbour
            </p>
          </div>
        </div>
      </div>
      <Container>
        <div className="flex sm:flex-row flex-col sm:justify-between justify-center items-center sm:space-y-0 space-y-4 py-5">
          <p className="text-sm text-[#dfdfdf] tracking-normal font-normal sm:text-left text-center">
            GLS All Rights Reserved.
          </p>
          <div className="flex space-x-4">
            <Link className="bg-[#fff] hover:bg-[#0A0D10] hover:text-white duration-500 ease-in-out rounded-full p-2">
              <FaFacebookF className="h-4 w-4" />
            </Link>
            <Link className="bg-[#fff] hover:bg-[#0A0D10] hover:text-white duration-500 ease-in-out rounded-full p-2">
              <FaTwitter className="h-4 w-4" />
            </Link>
            <Link className="bg-[#fff] hover:bg-[#0A0D10] hover:text-white duration-500 ease-in-out rounded-full p-2">
              <FaWhatsapp className="h-4 w-4" />
            </Link>
            <Link className="bg-[#fff] hover:bg-[#0A0D10] hover:text-white duration-500 ease-in-out rounded-full p-2">
              <FaYoutube className="h-4 w-4" />
            </Link>
            <Link className="bg-[#fff] hover:bg-[#0A0D10] hover:text-white duration-500 ease-in-out rounded-full p-2">
              <FaInstagram className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Footer;
