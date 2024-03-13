import { Link } from "react-router-dom";
import { FaPhoneVolume } from "react-icons/fa6";
import { SlCheck } from "react-icons/sl";

const SingleAthourity = ({
  heading,
  headingTitle1,
  headTitle2,
  phonNo,
  feture01,
  fetureTitle01,
  feture02,
  fetureTitle02,
  feture03,
  fetureTitle03,
  btnLink1,
  btnLink02,
  btnText01,
  btnText02,
  bgImg,
  contendIdName,
  SiCheakSybol,
}) => {
  return (
    <div>
      <div id={contendIdName} className="w-full max-w-6xl mx-auto mt-20">
        <h1 className="text-3xl font-extrabold text-center text-gray-500">
          {heading}
        </h1>
        <div className="flex gap-3 justify-center items-center">
          <FaPhoneVolume></FaPhoneVolume>
          <p className=" font-medium text-center text-slate-500 ">{phonNo}</p>
        </div>
        <div className=" flex gap-6 md:gap-10 flex-col-reverse md:flex-row py-10 md:py-16 justify-between ">
          <div className="px-6 md:px-10 flex-1 pr-10 ">
            <div>
              <h1 className="text-2xl font-bold text-gray-500 ">
                {headingTitle1} <br /> <span>{headTitle2}</span>
              </h1>
              <div>
                <div className="flex items-center gap-2 mt-3">
                  <p className="text-xl text-green-700  font-semibold">
                    <SlCheck></SlCheck>
                  </p>
                  <h1 className=" text-gray-600 font-semibold">{feture01}</h1>
                </div>
                <p className="text-slate-500 text-xs pl-7 py-3 leading-3 ">
                  {fetureTitle01}
                </p>
              </div>
              <div className="mt-2">
                <div className="flex items-center gap-2 mt-3">
                  <p className="text-xl text-green-700 font-semibold">
                    <SlCheck></SlCheck>
                  </p>
                  <h1 className=" text-gray-600 font-semibold">f{feture02}</h1>
                </div>
                <p className="text-slate-500 text-xs pl-7 py-3  leading-3">
                  {fetureTitle02}
                </p>
              </div>
              <div className="mt-2">
                <div className="flex items-center gap-2 mt-3">
                  <p className="text-xl text-green-700 font-semibold">
                    <SlCheck></SlCheck>
                  </p>
                  <h1 className=" text-gray-600 font-semibold">{feture03}</h1>
                </div>
                <p className="text-slate-500 text-xs pl-7 py-3 leading-3 ">
                  {fetureTitle03}
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-3 md:gap-4 mt-2">
              <Link to={btnLink1}>
                <button className="px-6  btn btn-sm bg-blue-700 uppercase text-white hover:text-black hover:bg-neutral-100 w-[50%] ml-3 hover:border-2 hover:border-blue-700 rounded-full">
                  {btnText01}
                </button>
              </Link>
              <Link to={btnLink02}>
                <button className="px-6  btn btn-sm  uppercase text-blue-700 bg-neutral-100 w-[50%] ml-3 rounded-full border-2 border-blue-700">
                  {btnText02}
                </button>
              </Link>
            </div>
          </div>
          <div className="card  w-auto flex-1  ">
            <img className="rounded-lg p-3" src={bgImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleAthourity;
