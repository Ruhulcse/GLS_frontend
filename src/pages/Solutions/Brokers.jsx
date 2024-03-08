import React from "react";
import Banner from "./Banner";
import TruckOne from "../../assets/solutions/truck01.jpg";
const Brokers = () => {
  return (
    <div className=" h-screen">
      <Banner
        bgImage={TruckOne}
        heading="Solutions for"
        heroSpan="Freight Brokers"
        paragraph="Whether you are just starting your brokerage or an industry expert, DAT solutions take your company to the next level with tools to price freight more efficiently and win new business with the largest carrier network in North America.

      "
      ></Banner>
    </div>
  );
};

export default Brokers;
