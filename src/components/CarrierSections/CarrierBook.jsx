import React from "react";

import truckDriver from "../../assets/solutions/truck_driver.jpg";
import { SlCheck } from "react-icons/sl";

const CarrierBook = ({ heading1, heding2, paragraph, btnText2 }) => {
  return (
    <div id="Need_GLS" className="w-full max-w-6xl mx-auto mt-20">
      <h1 className="text-3xl font-extrabold text-center text-gray-500">
        {heading1} <br /> {heding2}
      </h1>
      <h4 className="text-sm font-extrabold text-center text-gray-500">
        {paragraph}
      </h4>
      <div className=" flex gap-6 md:gap-10 flex-col md:flex-row-reverse py-10 md:py-16 justify-between ">
        <div className="px-6 md:px-10 flex-1 pr-10 ">
          <div>
            <h1 className="text-3xl font-extrabold text-gray-500 ">
              Be Confident Using the Most Accurate Rates
            </h1>
            <div>
              <div className="flex items-center gap-2 mt-3">
                <p className="text-xl text-green-700  font-semibold">
                  <SlCheck></SlCheck>
                </p>
                <h1 className=" text-gray-600 font-semibold">
                  Run under your own MC number
                </h1>
              </div>
              <p className="text-slate-500 text-xs pl-7 py-3 leading-3 ">
                Use our experts to set up your authority so you can hit the
                ground running.
              </p>
            </div>
            <div className="mt-2">
              <div className="flex items-center gap-2 mt-3">
                <p className="text-xl text-green-700 font-semibold">
                  <SlCheck></SlCheck>
                </p>
                <h1 className=" text-gray-600 font-semibold">
                  Avoid process delays
                </h1>
              </div>
              <p className="text-slate-500 text-xs pl-7 py-3  leading-3">
                Don’t worry about road bumps. We streamline completing Federal,
                State and BOC-3 requirements.
              </p>
            </div>
            <div className="mt-2">
              <div className="flex items-center gap-2 mt-3">
                <p className="text-xl  font-semibold text-green-700">
                  <SlCheck></SlCheck>
                </p>
                <h1 className=" text-gray-600 font-semibold">
                  Get the right permitting
                </h1>
              </div>
              <p className="text-slate-500 text-xs pl-7 py-3 leading-3 ">
                Get support even after you’re up and running.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-3 md:gap-4 mt-2">
            <button className="px-6  btn btn-sm bg-blue-700 uppercase text-sm text-white hover:text-black hover:bg-neutral-100 w-[50%] ml-3 hover:border-2 hover:border-blue-700 rounded-full">
              {btnText2}
            </button>
          </div>
        </div>
        <div className="card  w-auto flex-1 text-green-500 ">
          <a href="https://youtu.be/6WgoqiNBWf8?si=-5EHnJzKF8uKJWyx">
            {" "}
            <img className="rounded-lg p-3" src={truckDriver} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default CarrierBook;
