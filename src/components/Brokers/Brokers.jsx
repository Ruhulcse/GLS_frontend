import React from 'react';
import { FiCheckSquare } from "react-icons/fi";
import broker from '../../assets/home/broker details.jpg';
import Services from '../../shared/Services/Services';

const Brokers = () => {
  const features = [
    {
      icon: <FiCheckSquare className="size-5 shrink-0" />,
      title: "Lorem ipsum dolor, sit amet consectetur adipisicing",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quas in consectetur porro similique veritatis! Quae tenetur expedita quis iusto?",
    },
    {
      icon: <FiCheckSquare className="size-5 shrink-0" />,
      title: "Lorem ipsum dolor, sit amet consectetur adipisicing",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quas in consectetur porro similique veritatis! Quae tenetur expedita quis iusto?",
    },
    {
      icon: <FiCheckSquare className="size-5 shrink-0" />,
      title: "Lorem ipsum dolor, sit amet consectetur adipisicing",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quas in consectetur porro similique veritatis! Quae tenetur expedita quis iusto?",
    },
    {
      icon: <FiCheckSquare className="size-5 shrink-0" />,
      title: "Lorem ipsum dolor, sit amet consectetur adipisicing",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quas in consectetur porro similique veritatis! Quae tenetur expedita quis iusto?",
    },
  ];
  return (
   <Services
    MainTitle1="GLS Mobile App Can Easier"
    MainTitle2="Your Business"
    serviceImage={broker}
    features={features}
    className="sm:flex-row flex-row-reverse sm:gap-20 bg-[#0A0D10]"
    textColor="text-white"
   />
  )
}

export default Brokers