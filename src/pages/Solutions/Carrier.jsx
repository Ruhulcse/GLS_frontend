import React from "react";
import { FaAnglesDown } from "react-icons/fa6";
import truck01 from "../../assets/solutions/truck01.jpg";
import truck02 from "../../assets/solutions/truck02.jpg";
import Bg_image from "../../assets/solutions/bg-image.jpg";
import truck03 from "../../assets/solutions/truck03.jpg";
import mobile from "../../assets/solutions/Mobail_app.jpg";
import truckDriver from "../../assets/solutions/truck_driver.jpg";
import Bussines from "../../assets/solutions/bussines.jpg";
import Apple from "../../assets/solutions/icons/apple_app.png";
import Android from "../../assets/solutions/icons/google-playstore.png";
import { SlCheck } from "react-icons/sl";
import { FaPhoneVolume } from "react-icons/fa6";
import Carrier_carusal from "./Carrier_carusal";
import { BsFuelPump } from "react-icons/bs";
import Testimonial from "./Testimonial";
import "../Solutions/Responsive.css";

const Carrier = () => {
  const handleScroll = () => {
    const element = document.getElementById("Smooth");
    element.scrollIntoView({ behavior: "smooth" });
  };
  const handleScroll1 = () => {
    const element = document.getElementById("Authority");
    element.scrollIntoView({ behavior: "smooth" });
  };
  const handleScroll2 = () => {
    const element = document.getElementById("Need_GLS");
    element.scrollIntoView({ behavior: "smooth" });
  };
  const handleScroll3 = () => {
    const element = document.getElementById("Bussines");
    element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      {/* banner section */}
      <div
        className="hero min-h-96 md:min-h-[500px] lg:min-h-screen"
        style={{
          backgroundImage: `url(${Bg_image})`,
          backgroundSize: "cover",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>

        <div className=" hero-content text-white">
          <div className="max-w-md">
            <h1 className="mb-5 mt-10 py-2 text-3xl  md:text-5xl font-bold">
              Solutions for <br /> Carriers
            </h1>
            <p className="mb-5">
              Whether you are new to being a Carrier or an industry veteran, DAT
              helps your business grow with next level tools to cut operating
              costs and get you the best loads first.
            </p>
            <div class="flex justify-center items-center text-center md:justify-end md:items-end md:text-end hover:translate-y-3 transition duration-200 ease-in-out">
              <p class="text-4xl">
                <FaAnglesDown onClick={handleScroll}></FaAnglesDown>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Card section */}
      <div
        id="Smooth"
        className=" w-full max-w-6xl mx-auto grid gap-6 lg:gap-8 py-10 px-3 md:px-10 lg:px-0 lg:py-16 my-8 lg:my-16 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center"
      >
        <div className="card w-96  md:w-80 lg:w-96 card_one bg-slate-900 shadow-xl rounded-none">
          <figure>
            <img src={truck01} alt="" />
          </figure>
          <div className="card-body ">
            <h2 className=" pb-3 text-white text-center text-2xl font-bold">
              Start a Strong Business
            </h2>
            <div className="card-actions  justify-center">
              <button
                onClick={handleScroll1}
                className=" font-bold py-1 px-8 bg-blue-700 uppercase text-white rounded-full hover:bg-white hover:text-blue-700 text-sm"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
        <div className="card w-96  md:w-80 lg:w-96 card_one bg-slate-900 shadow-xl rounded-none">
          <figure>
            <img src={truck02} alt="" />
          </figure>
          <div className="card-body ">
            <h2 className=" pb-3 text-white text-center text-2xl font-bold">
              Find the Best Loads
            </h2>
            <div className="card-actions  justify-center">
              <button
                onClick={handleScroll2}
                className=" font-bold py-1 px-8 bg-blue-700 uppercase text-white rounded-full hover:bg-white hover:text-blue-700 text-sm"
              >
                Unlock the best loads
              </button>
            </div>
          </div>
        </div>
        <div className="card w-96  md:w-80 lg:w-96 card_one bg-slate-900 shadow-xl rounded-none">
          <figure>
            <img src={truck03} alt="" />
          </figure>
          <div className="card-body ">
            <h2 className=" pb-3 text-white text-center text-2xl font-bold">
              Elevate Your Business
            </h2>
            <div className="card-actions  justify-center">
              <button
                onClick={handleScroll3}
                className=" font-bold py-1 px-8 bg-blue-700 uppercase text-white rounded-full hover:bg-white hover:text-blue-700 text-sm"
              >
                Empower Fleed
              </button>
            </div>
          </div>
        </div>
      </div>
      {/*  Got Authority */}
      <div id="Authority" className="w-full max-w-6xl mx-auto mt-20">
        <h1 className="text-3xl font-extrabold text-center text-gray-500">
          Got Authority?
        </h1>
        <div className="flex gap-3 justify-center items-center">
          <FaPhoneVolume></FaPhoneVolume>
          <p className=" font-medium text-center text-slate-500 ">
            Call Today - 800.551.8847
          </p>
        </div>
        <div className=" flex gap-6 md:gap-10 flex-col-reverse md:flex-row py-10 md:py-16 justify-between ">
          <div className="px-6 md:px-10 flex-1 pr-10 ">
            <div>
              <h1 className="text-2xl font-bold text-gray-500 ">
                Build your carrier <br /> business
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
                  Don’t worry about road bumps. We streamline completing
                  Federal, State and BOC-3 requirements.
                </p>
              </div>
              <div className="mt-2">
                <div className="flex items-center gap-2 mt-3">
                  <p className="text-xl text-green-700 font-semibold">
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
              <button className="px-6  btn btn-sm bg-blue-700 uppercase text-white hover:text-black hover:bg-neutral-100 w-[50%] ml-3 hover:border-2 hover:border-blue-700 rounded-full">
                get Started
              </button>
              <button className="px-6  btn btn-sm  uppercase text-blue-700 bg-neutral-100 w-[50%] ml-3 rounded-full border-2 border-blue-700">
                learn more
              </button>
            </div>
          </div>
          <div className="card  w-auto flex-1  ">
            <img className="rounded-lg p-3" src={Bg_image} alt="" />
          </div>
        </div>
      </div>
      {/* card Slider */}
      <div>
        <Carrier_carusal></Carrier_carusal>
      </div>
      {/* GlS info section */}
      <div id="Need_GLS" className="w-full max-w-6xl mx-auto mt-20">
        <h1 className="text-3xl font-extrabold text-center text-gray-500">
          You Need GLS One
        </h1>
        <h4 className="text-xl font-extrabold text-center text-gray-500">
          2.5x More Loads than Anywhere Else
        </h4>
        <div className="flex justify-center items-center">
          <p className=" font-medium text-center text-slate-500 ">
            Get access to the industry’s largest load board network and stay
            loaded no matter where you are.
          </p>
        </div>
        <div className=" flex gap-6 md:gap-10 flex-col md:flex-row-reverse py-10 md:py-16 justify-between ">
          <div className="px-6 md:px-10 flex-1 pr-10 ">
            <div>
              <h1 className="text-2xl font-bold text-gray-500 ">
                Build your carrier <br /> business
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
                  Don’t worry about road bumps. We streamline completing
                  Federal, State and BOC-3 requirements.
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
              <button className="px-6  btn btn-sm bg-blue-700 uppercase text-white hover:text-black hover:bg-neutral-100 w-[50%] ml-3 hover:border-2 hover:border-blue-700 rounded-full">
                get Started
              </button>
              <button className="px-6  btn btn-sm  uppercase text-blue-700 bg-neutral-100 w-[50%] ml-3 rounded-full border-2 border-blue-700">
                learn more
              </button>
            </div>
          </div>
          <div className="card  w-auto flex-1 text-green-500 ">
            <a href="https://youtu.be/6WgoqiNBWf8?si=-5EHnJzKF8uKJWyx">
              {" "}
              <img className="rounded-lg p-3" src={Bg_image} alt="" />
            </a>
          </div>
        </div>
      </div>
      {/* Pricing section */}
      <div></div>
      {/* GLS mobile app section */}
      <div className="min-h-screen bg-slate-400">
        <div className="w-full max-w-6xl mx-auto p-2 md:p-20 text-white">
          <div>
            <h1 className="text-3xl font-extrabold text-start md:text-center text-white p-2 md:p-10 py-10 ">
              The GLS One app is included in your subscription
            </h1>
          </div>
          <div className="flex  flex-col-reverse md:flex-row gap-6 md:10 lg:gap-16 mt-6 ">
            <div className="flex-1">
              <h3 className="text-3xl font-extrabold  text-white">
                The Single Source for All Things Freight
              </h3>
              <p>
                DAT One mobile combines 15 apps into one fast and easy set of
                tools to:
              </p>
              <div>
                <div className="flex items-center gap-2 mt-3">
                  <p className="text-xl text-green-700  font-semibold">
                    <SlCheck></SlCheck>
                  </p>
                  <h1 className="  font-semibold">
                    Run under your own MC number
                  </h1>
                </div>
                <p className=" text-xs pl-7 py-1 leading- ">
                  Use our experts to set up your authority so you can hit the
                  ground running.
                </p>
              </div>
              <div className="mt-2">
                <div className="flex items-center gap-2 mt-3">
                  <p className="text-xl text-green-700 font-semibold">
                    <SlCheck></SlCheck>
                  </p>
                  <h1 className="  font-semibold">Avoid process delays</h1>
                </div>
                <h3 className="text-xs pl-7 py-1  leading-2">
                  Don’t worry about road bumps. We streamline completing
                  Federal, State and BOC-3 requirements.
                </h3>
              </div>
              <div className="mt-2">
                <div className="flex items-center gap-2 mt-3">
                  <p className="text-xl  font-semibold text-green-700">
                    <SlCheck></SlCheck>
                  </p>
                  <h1 className="  font-semibold">Get the right permitting</h1>
                </div>
                <p className=" text-xs pl-7 py-1 leading-2 ">
                  Get support even after you’re up and running.
                </p>
              </div>
              <div className="mt-2">
                <div className="flex items-center gap-2 mt-3">
                  <p className="text-xl  font-semibold text-green-700">
                    <SlCheck></SlCheck>
                  </p>
                  <h1 className="  font-semibold">Get the right permitting</h1>
                </div>
                <p className=" text-xs pl-7 py-1 leading-2 ">
                  Get support even after you’re up and running.
                </p>
              </div>
              <div className="flex flex-col gap-6 pl-4 mt-6">
                <div className="flex bg-black w-[60%] lg:w-[40%] rounded-lg  border-2 border-white ">
                  <div>
                    <img className="w-10 h-10 m-2" src={Apple} alt="" />
                  </div>
                  <div>
                    <p className="text-sm text-">download on the</p>
                    <h1 className="text-xl text-white">App Store</h1>
                  </div>
                </div>
                <div>
                  <div className="flex bg-black w-[60%] lg:w-[40%] rounded-lg  border-2 border-white ">
                    <div>
                      <img className="w-10 h-10 m-2" src={Android} alt="" />
                    </div>
                    <div>
                      <p className="text-sm text-">download on the</p>
                      <h1 className="text-xl text-white">App Store</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1">
              <img className="rounded-lg" src={mobile} alt="" />
            </div>
          </div>
        </div>
      </div>
      {/* carrier book section */}
      <div id="Need_GLS" className="w-full max-w-6xl mx-auto mt-20">
        <h1 className="text-3xl font-extrabold text-center text-gray-500">
          Carriers Book Higher Rates on DAT than <br /> Anywhere Else
        </h1>
        <h4 className="text-sm font-extrabold text-center text-gray-500">
          Negotiate higher freight rates from verified transactions - not <br />{" "}
          posted rates.
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
                  Don’t worry about road bumps. We streamline completing
                  Federal, State and BOC-3 requirements.
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
                Buy now
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
      {/* Managing sections*/}
      <div className="min-h-screen bg-black pt-16 ">
        <div className="w-full max-w-6xl mx-auto  bg-slate-800 text-white my-9">
          <div className="p-1 py-3">
            <h2 className="text-center text-3xl font-bold">
              Need Help Managing Costs?
            </h2>
            <p className="text-center ">
              Streamline operations and increase your bottom line through our
              strategic partnership programs.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  p-6 gap-5 justify-center items-center px-[12%] ">
              <div className="w-64 flex flex-col justify-center items-center px-6  ">
                <BsFuelPump className="text-center text-5xl mt-auto  "></BsFuelPump>
                <p className="text-sm text-center my-3">
                  Save money at the pump and take control of your fuel costs.
                </p>
                <button className=" text-center px-6  btn btn-sm my-3 bg-blue-700 uppercase text-sm text-white hover:text-black hover:bg-neutral-100 w-[100%] ml-3 hover:border-2 hover:border-blue-700 rounded-full">
                  fuel card
                </button>
              </div>
              <div className="w-64 flex flex-col mt-auto justify-center items-center px-6">
                <BsFuelPump className="text-center text-5xl  "></BsFuelPump>
                <p className="text-sm my-3 text-center">
                  Get paid fast to keep your cash and your trucks rolling.
                </p>
                <button className=" text-center px-6  my-3 btn btn-sm bg-blue-700 uppercase text-sm text-white hover:text-black hover:bg-neutral-100 w-[100%] ml-3 hover:border-2 hover:border-blue-700 rounded-full">
                  factoring
                </button>
              </div>
              <div className=" w-64 flex flex-col mt-auto justify-center items-center px-6">
                <BsFuelPump className="text-center text-5xl   "></BsFuelPump>
                <p className="text-sm my-3 text-center">
                  Simplified commercial insurance solutions.
                </p>
                <button className=" text-center px-6 my-3 btn btn-sm  bottom-0 bg-blue-700 uppercase text-sm text-white hover:text-black hover:bg-neutral-100 w-[100%] ml-3 hover:border-2 hover:border-blue-700 rounded-full">
                  insurance
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* next level bussines */}
        <div id="Bussines" className="min-h-screen bg-slate-800">
          <div
            id="Authority"
            className="w-full max-w-6xl mx-auto mt-20 text-white "
          >
            <h1 className="text-3xl font-extrabold text-center pt-10 md:pt-20 ">
              Take Your Business to the Next Level
            </h1>
            <p className=" font-medium text-center pb-10 md:pb-20  ">
              Get tailored solutions for your entire fleet.
            </p>
            <div className=" flex gap-6 md:gap-10 flex-col-reverse md:flex-row py-10 md:py-16 justify-between ">
              <div className=" md:px-10 flex-1 pr-10 px-[5%] ">
                <div>
                  <h1 className="text-3xl font-extrabold  ">
                    Grow Your Truck Fleet
                  </h1>
                  <div>
                    <div className="flex items-center gap-2 mt-3">
                      <p className="text-xl text-green-700  font-semibold">
                        <SlCheck></SlCheck>
                      </p>
                      <h1 className="  font-semibold">
                        Run under your own MC number
                      </h1>
                    </div>
                    <p className=" text-xs pl-7 py-3 leading-3 ">
                      Use our experts to set up your authority so you can hit
                      the ground running.
                    </p>
                  </div>
                  <div className="mt-2">
                    <div className="flex items-center gap-2 mt-3">
                      <p className="text-xl text-green-700 font-semibold">
                        <SlCheck></SlCheck>
                      </p>
                      <h1 className="  font-semibold">Avoid process delays</h1>
                    </div>
                    <p className=" text-xs pl-7 py-3  leading-3">
                      Don’t worry about road bumps. We streamline completing
                      Federal, State and BOC-3 requirements.
                    </p>
                  </div>
                  <div className="mt-2">
                    <div className="flex items-center gap-2 mt-3">
                      <p className="text-xl text-green-700 font-semibold">
                        <SlCheck></SlCheck>
                      </p>
                      <h1 className=" font-semibold">
                        Get the right permitting
                      </h1>
                    </div>
                    <p className=" text-xs pl-7 py-3 leading-3 ">
                      Get support even after you’re up and running.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-3 md:gap-4 mt-2">
                  <button className="px-6  btn btn-sm  uppercase text-blue-700 bg-neutral-100 w-[50%] ml-3 rounded-full border-2 border-blue-700">
                    learn more
                  </button>
                </div>
              </div>
              <div className="card  w-auto flex-1  ">
                <img className="rounded-lg p-3" src={Bussines} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Connect Everything you need */}
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
                    Take charge of dispatching, scheduling, tracking, and
                    invoice.
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
      {/* testimonial sections */}
      <div>
        <Testimonial></Testimonial>
      </div>
    </div>
  );
};

export default Carrier;
