import Bg_image from "../../assets/solutions/bg-image.jpg";
import Bussines from "../../assets/solutions/bussines.jpg";
import Carrier_carusal from "./Carrier_carusal";
import { BsFuelPump } from "react-icons/bs";
import { SlCheck } from "react-icons/sl";
import Testimonial from "./Testimonial";
// import "../Solutions/responsive.css";
import Banner from "./Banner";
import CardAction from "../../components/CardAction/CardAction";
import GotAthourity from "../../components/CarrierSections/GotAthourity";
import NeedGls from "../../components/CarrierSections/NeedGls";
import Pricing from "../../components/Pricing/Pricing";
import GlsMobaileApp from "../../components/CarrierSections/GlsMobaileApp";
import CarrierBook from "../../components/CarrierSections/CarrierBook";
import Connect from "../../components/CarrierSections/Connect";

const Carrier = () => {
  return (
    <div className=" overflow-x-hidden">
      <Banner
        bgImage={Bg_image}
        heading="Solutions for"
        heroSpan="Carriers"
        paragraph="Whether you are new to being a Carrier or an industry veteran,
         DAT helps your business grow with next level tools to cut operating costs
          and get you the best loads first. "
        btnId="smooth"
      ></Banner>
      <CardAction
        contentID="smooth"
        sectinId1="Authority"
        sectinId2="Need_GLS"
        sectinId3="mobile"
      ></CardAction>
      <GotAthourity></GotAthourity>
      <Carrier_carusal></Carrier_carusal>
      <NeedGls></NeedGls>
      <Pricing></Pricing>
      <GlsMobaileApp contentID2="mobile"></GlsMobaileApp>
      <CarrierBook
        heading1="Carriers Book Higher Rates on DAT than"
        heding2="Anywhere Else"
        paragraph="Negotiate higher freight rates from verified transactions - not
     posted rates."
        btnText2="buy now"
      ></CarrierBook>
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
      <Connect></Connect>
      <div>
        <Testimonial></Testimonial>
      </div>
    </div>
  );
};

export default Carrier;
