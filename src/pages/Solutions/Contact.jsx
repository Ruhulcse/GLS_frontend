import Contacts from "@/components/Contact/Contacts";
import ProductSupport from "../../components/Contact/ProductSupport";

const Contact = () => {
  return (
    <div className=" bg-indigo-900 overflow-hidden ">
      <div className=" max-w-6xl mx-auto text-white text-center font-bold relative  top-24 md:top-32 pb-10 ">
        <h1 className="text-center text-white text-3xl md:text-5xl font-extrabold my-4  border-b-[1px] border-gray-300 border-full pb-8 ">
          Customer Support
        </h1>
        <div className="flex flex-col-reverse md:flex-row gap-12 mt-14 mb-10 bg-black-500 rounded-lg">
          <div className="flex-1 px-2 md:px-4 flex flex-col justify-center items-center">
            <ProductSupport></ProductSupport>
          </div>
          <div className="px-6 flex-1  ">
            <Contacts />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
