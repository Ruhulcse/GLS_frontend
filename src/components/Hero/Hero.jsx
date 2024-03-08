import React from "react";
import backgroundImage from "../../assets/home/truck.jpg";
import Container from "../../shared/Container/Container";
const Hero = () => {
  return (
    <section
      className="mt-[88px] bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})`, objectFit: "cover" }}
    >
      <div className="bg-gradient-to-r from-[#001427] w-full sm:h-screen h-[80vh]">
        <div className="relative top-1/4 flex flex-col space-y-4">
          <Container>
            <h1
              className="uppercase sm:text-6xl text-3xl font-bold text-white sm:leading-tight"
              data-aos="fade-right"
            >
              Fast & Safest <br /> Shipping service
            </h1>
            <p className="text-base text-white font-normal leading-normal tracking-normal my-6">
              At first, we ensure the product safety. From starting product
              loading to unloading <br className="hidden sm:block" /> we
              maintain the standard terms of safety while in transit.
            </p>
              <button
                className="px-8 py-6 text-sm tracking-normal uppercase font-semibold text-white bg-[#03045e] hover:bg-[#0B0D7D]"
                data-aos="fade-left"
              >
                Request a quote
              </button>
          </Container>
        </div>
      </div>
    </section>
  );
};

export default Hero;
