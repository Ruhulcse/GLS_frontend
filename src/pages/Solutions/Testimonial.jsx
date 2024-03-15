import React from "react";
import { FaChevronRight } from "react-icons/fa6";

const Testimonial = () => {
  return (
    <div
      className=" min-h-96 md:min-h-[500px] lg:min-h-screen bg-black  "
      style={{
        backgroundSize: "cover",
      }}
    >
      <div className="text-white  max-w-6xl mx-auto text-center flex flex-col justify-center items-center ">
        <h1 className="text-xl font-semibold pt-6 md:pt-10">
          What our customers are saying
        </h1>
        <div className=" flex justify-center items-center my-10">
          <p className="border-b-4 w-[72px] text-center text-3xl font-semibold"></p>
        </div>

        <h2 className="text-3xl font-bold my-6">
          “it costs you more money not to have this tools. With GLS, there's
          very little time my truck is sitting ”
        </h2>
        <p className="text-sm font-medium my-10">
          -summy Lloyd, Lloyd trucking
        </p>

        <div className="my-10">
          <h2 className="text-2xl font-bold my-10">
            Explore Customer Experiences: Read Our Reviews
          </h2>
          <a
            className="text-sm  text-blue-700 btn btn-ghost bg-slate-100 hover:bg-sky-500 hover:text-black"
            href=""
          >
            Feedback
          </a>
        </div>
        <div className=" bg-neutral-50 flex flex-col justify-center items-center p-10 md:p-20 my-10">
          <h1 className="text-gray-600 text-3xl font-bold my-6">
            Looking for more tools?
          </h1>
          <p className="text-gray-500 ">
            We have even more solutions, from carrier TMS to tracking, insurance
            to parking. Find exactly what you need.
          </p>
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mt-5">
            <a
              className=" bg-blue-700 text-white hover:text-blue-800 hover:bg-slate-200 text-center px-10 py-1 rounded-full border-2 border-slate-800    hover:border-2 hover:border-blue-800"
              href=""
            >
              Productfinder
            </a>
            <a
              className=" text-blue-800 bg-slate-200 text-center px-10 py-1 rounded-full  border-2 border-blue-700 "
              href=""
            >
              contact us
            </a>
          </div>
        </div>
      </div>
      {/* more tools */}
      <div className="max-w-6xl mx-auto ">
        <div className="flex flex-col text-white justify-center items-center p-2 ">
          <h1 className="font-extrabold text-3xl my-6">
            Need resources? We got you covered.
          </h1>
          <p>
            We have been in the industry since 1978 to bring you the most
            knowledge and insight to help you find your path.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-4 gap-6 py-10 px-20">
          <div className="card text-white font-bold bg-slate-950 flex flex-col justify-center items-center p-2">
            <div className=" flex flex-col w-32 h-32 justify-center items-center text-center">
              <div className="flex text-xl font-bold gap-1 text-center">
                <div className="bg-blue-700 px-1 text-xs">G</div>
                <div className="bg-blue-700 px-1 text-xs">L</div>
                <div className="bg-blue-700 px-1 text-xs">S</div>
              </div>
              <div className="text-3xl font-extrabold text-center border-2 border-white p-2">
                iQ
              </div>
            </div>
            <div className="flex flex-col justify-center items-center">
              <h4 className="title text-center">Trendlines</h4>
              <p className="text-xs text-center my-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores maiores ipsum in architecto
              </p>
              <div className="text-xs my-4 flex justify-center items-center gap-3">
                <a href=" ">Learn more</a>
                <FaChevronRight></FaChevronRight>
              </div>
            </div>
          </div>
          <div className="card text-white font-bold bg-slate-950 flex flex-col justify-center items-center p-2">
            <div className=" flex flex-col w-32 h-32 justify-center items-center text-center">
              <div className="flex text-xl font-bold gap-1 text-center">
                <div className="bg-blue-700 px-1 text-xs">G</div>
                <div className="bg-blue-700 px-1 text-xs">L</div>
                <div className="bg-blue-700 px-1 text-xs">S</div>
              </div>
              <div className="text-3xl font-extrabold text-center border-2 border-white p-2">
                iQ
              </div>
            </div>
            <div className="flex flex-col justify-center items-center">
              <h4 className="title text-center">Market Update</h4>
              <p className="text-xs text-center my-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores maiores ipsum in architecto
              </p>
              <div className="text-xs my-4 flex justify-center items-center gap-3">
                <a href=" ">Learn more</a>
                <FaChevronRight></FaChevronRight>
              </div>
            </div>
          </div>
          <div className="card text-white font-bold bg-slate-950 flex flex-col justify-center items-center p-2">
            <div className=" flex flex-col w-32 h-32 justify-center items-center text-center">
              <div className="flex text-xl font-bold gap-1 text-center">
                <div className="bg-blue-700 px-1 text-xs">G</div>
                <div className="bg-blue-700 px-1 text-xs">L</div>
                <div className="bg-blue-700 px-1 text-xs">S</div>
              </div>
              <div className="text-3xl font-extrabold text-center border-2 border-white p-2">
                iQ
              </div>
            </div>
            <div className="flex flex-col justify-center items-center">
              <h4 className="title text-center">Podcasts</h4>
              <p className="text-xs text-center my-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores maiores ipsum in architecto
              </p>
              <div className="text-xs my-4 flex justify-center items-center gap-3">
                <a href=" ">Learn more</a>
                <FaChevronRight></FaChevronRight>
              </div>
            </div>
          </div>
          <div className="card text-white font-bold bg-slate-950 flex flex-col justify-center items-center p-2">
            <div className=" flex flex-col w-32 h-32 justify-center items-center text-center">
              <div className="flex text-xl font-bold gap-1 text-center">
                <div className="bg-blue-700 px-1 text-xs">G</div>
                <div className="bg-blue-700 px-1 text-xs">L</div>
                <div className="bg-blue-700 px-1 text-xs">S</div>
              </div>
              <div className="text-3xl font-extrabold text-center border-2 border-white p-2">
                iQ
              </div>
            </div>
            <div className="flex flex-col justify-center items-center">
              <h4 className="title text-center">White papers</h4>
              <p className="text-xs text-center my-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores maiores ipsum in architecto
              </p>
              <div className="text-xs my-4 flex justify-center items-center gap-3">
                <a href=" ">Learn more</a>
                <FaChevronRight></FaChevronRight>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center pb-10">
          <button className=" flex justify-center items-center px-5 py-1 text-sm font-bold text-white text-center border-2 border-gray-600 hover:border-2 hover:border-gray-600 bg-blue-700 hover:bg-slate-200 hover:text-blue-700 rounded-full">
            <a href="">GLS Resourse center</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
