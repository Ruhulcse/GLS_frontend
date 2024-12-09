import Contacts from "@/components/Contact/Contacts";
import ProductSupport from "../../components/Contact/ProductSupport";
import { FaFacebookF, FaYoutube, FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
const Contact = () => {
  return (
    <div className=" bg-indigo-900 overflow-hidden min-h-screen top-24 md:top-36 pb-10  ">
      <div className=" max-w-6xl mx-auto text-white text-center font-bold relative  ">
        <h1 className="text-center text-white text-3xl md:text-5xl font-extrabold my-4  border-b-[1px] border-gray-300 border-full pb-8 ">
          Customer Support
        </h1>
        <div className="bg-black-500 rounded-lg">
          <div className="flex flex-col-reverse md:flex-row gap-12 mt-14  ">
            <div className="flex-1 px-2 md:px-4 flex flex-col justify-center items-center">
              <ProductSupport></ProductSupport>
            </div>
            <div className="px-6 flex-1  ">
              <Contacts />
            </div>
          </div>
          <div className=" py-10">
            <div className="flex items-center justify-center gap-6 pt-10">
              <Link to={"https://www.facebook.com/"}>
                <FaFacebookF className="md:w-12 w-8 h-8 md:h-10 text-blue-800" />
              </Link>
              <Link to={"https://www.youtube.com"}>
                <FaYoutube className="md:w-12 w-8 h-8 md:h-10 text-red-700" />
              </Link>
              <Link to={"https://www.twitter.com"}>
                <FaXTwitter className="md:w-12 w-8 h-8 md:h-10" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
