import rightImg from "../../assets/insurance/insurance-right.jpg";
import leftImg from "../../assets/insurance/insurance-left.jpg";
import { useState } from "react";
import Button from "../ui/Button";
import { useNavigate } from "react-router-dom";

const Insurance_hero = () => {
  const [insuranceType,setInsuranceType] = useState(true)
  const navigate = useNavigate()
  return (
    <div className="max-w-6xl mx-auto my-10 md:my-14">
      <div className="text-center justify-center  items-center p-2">
        <div className="flex justify-center mb-8 text-black-500">
          <div className={`text-xl px-5 cursor-pointer ${insuranceType&& 'border-black-500 '} md:border-b-4 border-b-2`} onClick={()=>setInsuranceType(true)}>Family insurance</div>
          <div className={`text-xl cursor-pointer px-5  md:border-b-4 border-b-2 ${!insuranceType&& 'border-black-500'}`} onClick={()=>setInsuranceType(false)}>Commercial insurance</div>
        </div>
        <h1 className=" uppercase text-3xl font-bold text-info-800  my-3  border-b-2 border-info-800 ">
          protect <span className="text-gray-700">{
            insuranceType?'your family with':'your commercial with'
          }</span>{" "}
          insurance
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil earum
          illum vel aliquam maxime facilis maiores consequatur, perferendis
          harum dolorem! Veniam ab delectus ea blanditiis vel officiis
          consequuntur totam magnam!
        </p>
        {insuranceType? <div className="flex gap-[8%] flex-col md:flex-row my-10">
        <div className=" w-[90%] md:w-[36%] p-2">
          <h1 className="text-3xl font-bold mb-3">Insurance policy</h1>
          <p>
            Marquee Insurance Group is staffed with certified transportation
            risk & compliance specialists who have over 100 collective years of
            experience in the transportation and risk management industry.
            Marquee Insurance Group streamlined the insurance quoting process,
            to all but guarantee that truckers receive a personalized insurance
            quote faster than the other agents.Marquee partnered with industry
            leaders to create exclusive discounts on numerous products and
            services truckers are currently spending more to use. Start saving
            with priority insurance coverages AND trucking services all through
            one trust.
          </p>
        </div>
        <div className="w-[95%] md:w-[54%] p-2">
          <img
            className=" rounded-lg md:rounded-tr-full md:rounded-br-full"
            src={rightImg}
            alt=""
          />
        </div>
      </div>:
      <div>
        <div className="flex gap-[8%] flex-col md:flex-row my-10">
      <div className=" w-[90%] md:w-[36%] p-2">
        <h1 className="text-3xl font-bold mb-3">Insurance policy</h1>
        <p>
          Marquee Insurance Group is staffed with certified transportation
          risk & compliance specialists who have over 100 collective years of
          experience in the transportation and risk management industry.
          Marquee Insurance Group streamlined the insurance quoting process,
          to all but guarantee that truckers receive a personalized insurance
          quote faster than the other agents.Marquee partnered with industry
          leaders to create exclusive discounts on numerous products and
          services truckers are currently spending more to use. Start saving
          with priority insurance coverages AND trucking services all through
          one trust.
        </p>
      </div>
      <div className="w-[95%] md:w-[54%] p-2">
        <img
          className=" rounded-lg md:rounded-tr-full md:rounded-br-full"
          src={leftImg}
          alt=""
        />
      </div>
     
    </div>
    <Button className="btn btn-dark bg-blue-400 block w-40 text-center mt-4 hover:bg-blue-600 font-bold" onClick={()=>navigate('/contact')}>Contact us</Button>
      </div>
      }
        {/* <h1 className=" uppercase text-3xl font-bold text-info-800  my-3  border-b-2 border-info-800 ">
          protect <span className="text-gray-700">your family with</span>{" "}
          insurance
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil earum
          illum vel aliquam maxime facilis maiores consequatur, perferendis
          harum dolorem! Veniam ab delectus ea blanditiis vel officiis
          consequuntur totam magnam!
        </p>
      </div>
      <div className="flex gap-[8%] flex-col md:flex-row my-10">
        <div className=" w-[90%] md:w-[36%] p-2">
          <h1 className="text-3xl font-bold mb-3">Insurance policy</h1>
          <p>
            Marquee Insurance Group is staffed with certified transportation
            risk & compliance specialists who have over 100 collective years of
            experience in the transportation and risk management industry.
            Marquee Insurance Group streamlined the insurance quoting process,
            to all but guarantee that truckers receive a personalized insurance
            quote faster than the other agents.Marquee partnered with industry
            leaders to create exclusive discounts on numerous products and
            services truckers are currently spending more to use. Start saving
            with priority insurance coverages AND trucking services all through
            one trust.
          </p>
        </div>
        <div className="w-[95%] md:w-[54%] p-2">
          <img
            className=" rounded-lg md:rounded-tr-full md:rounded-br-full"
            src={rightImg}
            alt=""
          />
        </div>
      </div>
      <div className="flex gap-[8%] flex-col md:flex-row-reverse my-10">
        <div className=" w-[90%] md:w-[54%] p-2">
          <p>
            Get affordable, per-load cargo insurance in 60 seconds through DAT’s
            insurance cargo partner, Load insurane. With per-load insurance, you
            pay a rate that reflects your current freight value, cutting your
            insurance costs by as much as 80% Use per-load insurance to pay for
            more expensive coverage only when you want to haul higher-value
            freight. From inside threats to Acts of God and more, Loadsure’s
            per-load insurance has you covered and can be accessed in seconds
            while you’re on the road.
          </p>
        </div>
        <div className="w-[95%] md:w-[36%] p-2">
          <img
            className=" rounded-lg md:rounded-tl-full md:rounded-bl-full"
            src={leftImg}
            alt=""
          />
        </div> */}
      </div>
    </div>
  );
};

export default Insurance_hero;
