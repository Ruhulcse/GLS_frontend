import truck03 from "../../assets/solutions/truck03.jpg";
import { SlCheck } from "react-icons/sl";

const Connect = () => {
  return (
    <div className="w-full max-w-6xl mx-auto mt-20">
      <h1 className="text-3xl font-extrabold text-center text-gray-500">
        Connect Everything You Need
      </h1>
      <h4 className="text-sm font-extrabold text-center text-gray-500">
        Integrate your TMS with DAT One.
      </h4>
      <div className="card  w-auto bottom-0   flex gap-6 md:gap-10 flex-col md:flex-row-reverse py-10 md:py-16 justify-center items-center ">
        <div className="px-6 md:px-10 flex-1 pr-10 ">
          <div>
            <h1 className="text-3xl font-extrabold text-gray-500 ">
              Automate and Optimize Your Operations
            </h1>
            <div className="mt-2">
              <div className="flex items-center gap-2 mt-3">
                <p className="flex text-xl text-green-700 font-semibold">
                  <SlCheck></SlCheck>
                </p>
                <h1 className=" text-gray-600 font-semibold">
                  Access the DAT Load Board and integrate with your ELD, maps,
                  accounting systems, and more.
                </h1>
              </div>
            </div>
            <div className="my-4">
              <div className="flex items-center gap-2 mt-3">
                <p className="text-xl text-green-700 font-semibold">
                  <SlCheck></SlCheck>
                </p>
                <h1 className=" text-gray-600 font-semibold">
                  Take charge of dispatching, scheduling, tracking, and invoice.
                </h1>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3 md:gap-4 my-8 bottom-0 mb-0">
            <button className="px-6  btn btn-sm bg-blue-700 uppercase text-sm   text-white hover:text-black hover:bg-neutral-100 w-[50%] ml-3 hover:border-2 hover:border-blue-700 rounded-full">
              <a href="">Buy now</a>
            </button>
          </div>
        </div>
        <div className="card  w-auto flex-1 text-green-500 ">
          <a href="https://youtu.be/6WgoqiNBWf8?si=-5EHnJzKF8uKJWyx">
            {" "}
            <img className="rounded-lg p-3" src={truck03} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Connect;
