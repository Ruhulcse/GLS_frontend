import ProductSupport from "../../components/Contact/ProductSupport";

const Contact = () => {
  return (
    <div className=" bg-slate-950 overflow-hidden">
      <div className=" text-white text-center font-bold relative  top-24 md:top-32 pb-10">
        <h1 className="text-center text-white text-3xl md:text-5xl font-extrabold my-4">
          Customer Support
        </h1>
        <div className="max-w-6xl mx-auto px-2 md:px-4 flex flex-col justify-center items-center">
          <ProductSupport></ProductSupport>
        </div>
      </div>
    </div>
  );
};

export default Contact;
