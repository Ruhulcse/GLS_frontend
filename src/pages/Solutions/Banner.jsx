import React from "react";
import { FaAnglesDown } from "react-icons/fa6";

const Banner = ({ bgImage, heroSpan, heading, paragraph, btnId }) => {
  const handleScroll = () => {
    const element = document.getElementById(btnId);
    element.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div
      className="hero min-h-96 md:min-h-[500px] lg:min-h-screen"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className=" hero-content text-white">
        <div className="max-w-md">
          <h1 className="mb-5 mt-10 py-2 text-3xl  md:text-5xl font-bold">
            {heading} <br /> <span>{heroSpan}</span>
          </h1>
          <p className="mb-5">{paragraph}</p>
          <div class="flex justify-center items-center text-center md:justify-end md:items-end md:text-end hover:translate-y-3 transition duration-200 ease-in-out">
            <p class="text-4xl">
              <FaAnglesDown onClick={handleScroll}></FaAnglesDown>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
