import React from "react";

const ExploreLearn = ({ sectionID, sectionID02 }) => {
  const handleTransection = () => {
    const element = document.getElementById(sectionID);
    element.scrollIntoView({ behavior: "smooth" });
  };
  const handleTransection01 = () => {
    const element = document.getElementById(sectionID02);
    element.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div
      id="Learn_about"
      className=" max-w-6xl mx-auto py-10 md:my-20 lg:my-32 p-3 md:p-4"
    >
      <h1 className="text-7xl font-extrabold text-gray-600 my-10">
        Move at the speed of freight.
      </h1>
      <p className="mt-6 text-gray-600  font-bold text-5xl">
        Built on the latest technology,
        <span className="text-indigo-900">GLS One gives you control</span>
        over every aspect of moving freight, so that you can run your business
        with speed and efficiency.
      </p>
      <div className="flex flex-col md:flex-row gap-6 w-full md:w-[50%] mt-16">
        <button
          onClick={handleTransection}
          className=" w-[80%] md:w-[40%] uppercase py-1 px-3 bg-blue-700 text-sm text-white font-bold hover:bg-white hover:text-blue-700 rounded-full"
        >
          Explore for carrier
        </button>
        <button
          onClick={handleTransection01}
          className=" w-[80%] md:w-[40%] uppercase py-1 px-3 bg-blue-700 text-sm text-white font-bold hover:bg-white hover:text-blue-700 rounded-full"
        >
          Explore for Brokers
        </button>
      </div>
    </div>
  );
};

export default ExploreLearn;
