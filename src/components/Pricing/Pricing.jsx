import { MdCheck } from "react-icons/md";
import Container from "../../shared/Container/Container";
const Pricing = () => {
  const Products = [
    {
      id: 1,
      name: "Carriers",
      price: 45,
      feature1: "Lorem ipsum dolor sit.",
      feature2: "0% savings",
      feature3: "Lorem ipsum dolor sit.",
      feature4: "Lorem ipsum dolor sit.",
    },
    {
      id: 2,
      name: "Brokers",
      price: 20,
      feature1: "Lorem ipsum dolor sit.",
      feature2: "25% savings",
      feature3: "Lorem ipsum dolor sit.",
      feature4: "Lorem ipsum dolor sit.",
    },
    {
      id: 3,
      name: "Shippers",
      price: 35,
      feature1: "Lorem ipsum dolor sit.",
      feature2: "50% savings",
      feature3: "Lorem ipsum dolor sit.",
      feature4: "Lorem ipsum dolor sit.",
    },
  ];
  return (
    <section className="bg-[#0A0D10] py-16" id="pricing">
      <Container>
      <div>
        <h1 className="text-center sm:text-5xl text-3xl font-bold text-[#EFE8FF]">
          Choose your right plan!
        </h1>
        <p className="text-center text-sm leading-normal tracking-wide text-[#EFE8FF] my-4">
          Select from best plans, ensuring a perfect match. Need more or less?{" "}
          <br className="hidden sm:block" />
          Customize your subscription for a seamless fit!
        </p>
      </div>
      <div className="sm:flex justify-center items-center sm:space-y-0 space-y-2 sm:space-x-4 text-[#EFE8FF]">
        <p className="py-2 px-20 bg-[#0C0E7A] text-center rounded-full">Monthly</p>
        <p className="text-center">Yearly save (10%)</p>
      </div>
      <div className="relative sm:flex justify-center items-center sm:space-x-4 sm:space-y-0 space-y-16 mt-20">
        {Products.map((item) => (
          <div
            className="rounded border border-[#535159] text-[#e8e8eb] sm:w-96 w-auto h-auto bg-[#0E0C15] px-8 py-4"
            key={item.id}
          >
              <div className="-mt-12 sm:ml-24 ml-20">
                <button className="bg-[#371777] rounded-xl text-lg font-semibold tracking-normal leading-normal text-white py-4 px-4">
                  {item.name}
                </button>
              </div>
            <div className="flex flex-col space-y-4">
              <p className="text-sm font-normal text-left">
                {item.description}
              </p>
              <div className="border-b border-[#535159]">
                <h1 className="text-4xl text-[#9101FF] font-bold my-4">
                ${item.price}{" "}/
                  <span className="text-sm text-[#d8d8d8]">Per Month</span>
                </h1>
              </div>
              <div className="flex flex-col h-auto py-4 space-y-4">
                <div className="border-b border-[#535159]">
                  <div className="flex items-center space-x-2 mb-4">
                    <span className="w-5 h-5 flex justify-center items-center flex-shrink-0 border border-[#9101FF] font-medium rounded-full  dark:text-white">
                      <MdCheck className="text-white h-3 w-3" />
                    </span>
                    <p>{item.feature1}</p>
                  </div>
                </div>
                <div className="border-b border-[#535159]">
                  <div className="flex items-center space-x-2 mb-4">
                    <span className="w-5 h-5 flex justify-center items-center flex-shrink-0 border border-[#9101FF] font-medium rounded-full dark:text-white">
                      <MdCheck className="text-white h-3 w-3" />
                    </span>
                    <p>{item.feature2}</p>
                  </div>
                </div>
                <div className="border-b border-[#535159]">
                  <div className="flex items-center space-x-2 mb-4">
                    <span className="w-5 h-5 flex justify-center items-center flex-shrink-0 border border-[#9101FF] font-medium rounded-full dark:text-white">
                      <MdCheck className="text-white h-3 w-3" />
                    </span>
                    <p>{item.feature3}</p>
                  </div>
                </div>
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="w-5 h-5 flex justify-center items-center flex-shrink-0 border border-[#9101FF] font-medium rounded-full dark:text-white">
                      <MdCheck className="text-white h-3 w-3" />
                    </span>
                    <p>{item.feature4}</p>
                  </div>
                </div>
              </div>
              <button
                className="w-full py-2 flex items-center justify-center rounded-full text-base font-normal capitalize bg-[#371777] hover:bg-[#411991]  duration-500 text-white"
              >
                Get Started
              </button>
            </div>
          </div>
        ))}
      </div>
      </Container>
    </section>
  );
};

export default Pricing;