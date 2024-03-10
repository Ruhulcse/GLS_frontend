import React from 'react';
import { FiCheckSquare } from "react-icons/fi";
import carrier from '../../assets/home/carrier details.jpg';
import Services from '../../shared/Services/Services';

const Carrier = () => {
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
   serviceImage={carrier}
   features={features}
   className="sm:flex-row-reverse"
   />
  )
}

export default Carrier