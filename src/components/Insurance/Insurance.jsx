import Banner from "@/pages/Solutions/Banner";
import React from "react";
import insuranceImg from "../../assets/insurance/banner-insurance.jpg";
import Insurance_hero from "./Insurance_hero";

const Insurance = () => {
  return (
    <div className="min-h-scree ">
      <Banner
        bgImage={insuranceImg}
        heading="Secure your"
        heroSpan="future with"
        paragraph="Get affordable, per-load cargo insurance in 60 seconds through DAT’s insurance
      cargo partner, Load insurane.

     "
        btnId="insurance"
      ></Banner>
      <div id="insurance">
        <Insurance_hero></Insurance_hero>
      </div>
    </div>
  );
};

export default Insurance;
