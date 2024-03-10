import React from "react";
import { twMerge } from "tailwind-merge";
const Services = ({MainTitle1,MainTitle2, features, serviceImage, className, textColor}) => {
  return (
      <div className={twMerge("sm:flex sm:space-x-20 sm:space-y-0 space-y-4 sm:py-20 py-10", className)}>
        <div className="sm:basis-1/3">
          <img src={serviceImage} alt="android" className="h-auto w-auto object-cover" />
        </div>
        <div className="sm:basis-1/2 flex flex-col space-y-4 self-center sm:px-0 px-4">
          <h1 className="sm:text-4xl text-2xl text-[#9101FF] font-bold">
            {MainTitle1} <br /> {MainTitle2}
          </h1>
          {features.map((feature, i) => (
            <div className={twMerge("flex space-x-4 text-[#0A0D10]", textColor)} key={i}>
              <span>{feature.icon}</span>
              <div className="inset-y-0 space-y-2">
                <p className="text-xl font-semibold">{feature.title}</p>
                <p className="text-xs tracking-wider leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
  );
};

export default Services;
