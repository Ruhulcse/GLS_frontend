import Banner from "../../pages/Solutions/Banner";
import learImage from "../../assets/solutions/bg-image03.jpg";
import TruckTransparent from "../../assets/home/truck.jpg";

import ExploreLearn from "./ExploreLearn";
import { Link } from "react-router-dom";
import Button from "./Button";
import Pricing from "../Pricing/Pricing";

const Learn = () => {
  return (
    <div className="min-h-screen ">
      <Banner
        bgImage={learImage}
        heading="GLS One"
        paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
        doloribus optio nobis. Ducimus distinctio est tenetur earum nulla,
        modi sed provident debitis adipisci? Similique, modi. Adipisci ipsum
        ullam et officia."
        btnId="Learn_about"
      ></Banner>
      {/* banner action */}
      <ExploreLearn
        sectionID="transparent-hero"
        sectionID02="pricing"
      ></ExploreLearn>
      <div
        id="transparent-hero"
        className=" flex justify-center items-center h-screen max-h-[300px] md:max-h-[600px]  "
        style={{
          backgroundImage: `url(${TruckTransparent})`,
          backgroundSize: "cover",
        }}
      >
        <div className="max-w-6xl mx-auto  bg-black  bg-opacity-10 p-4  justify-center items-center pt-8 flex gap-6">
          <div className="text-indigo-800 text-xl md:text-5xl font-bold">
            MORE THAN 150,000 TRANSACTIONS EVERY MINUTE.
          </div>
          <div className="text-indigo-800 text-sm md:text-3xl font-semibold">
            FIND SOLUTIONS FOR EVERY STAGE OF THE FREIGHT JOURNEY.
          </div>
        </div>
      </div>
      {/* find the best load */}
      <div className="bg-indigo-900">
        <div className="flex flex-col justify-center items-center text-center text-neutral-200 py-10">
          <h1 className="text-xl font-bold md:text-3xl lg:text-5xl">
            Get the best loads first
          </h1>
          <p className="text-sm font-semibold md:text-xl lg:text-3xl mt-2">
            Select a tailored plan and gain access to loads and data exclusively
            on DAT's network.
          </p>
        </div>
        <div className="grid grid-cols-12 justify-center items-center ">
          <div className="border-2 border-black col-span-5 "></div>
          <p className="col-span-2 text-[5px] md:text-xs lg:text-xl text-white text-center ">
            Lorem, ipsum dolor.
          </p>
          <div className="border-2 border-black col-span-5 "></div>
        </div>
        <div className="flex justify-center items-center mt-16">
          <Link to="https://www.youtube.com/watch?v=xjgUhS5cffU">
            <Button btnText="Find the right carrer plan"></Button>
          </Link>
        </div>
        <div id="pricing" className="mt-10">
          <Pricing></Pricing>
        </div>
      </div>
    </div>
  );
};

export default Learn;
