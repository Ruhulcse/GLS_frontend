import ProductSupport from "../../components/Contact/ProductSupport";

const Contact = () => {
  return (
    <div className=" bg-indigo-900 overflow-hidden">
      <div className=" max-w-6xl mx-auto text-white text-center font-bold relative  top-24 md:top-32 pb-10 ">
        <h1 className="text-center text-white text-3xl md:text-5xl font-extrabold my-4  border-b-2 border-white border-full pb-8 ">
          Customer Support
        </h1>
        <div className="flex flex-col-reverse md:flex-row gap-12 mt-14 ">
          <div className="flex-1 px-2 md:px-4 flex flex-col justify-center items-center">
            <ProductSupport></ProductSupport>
          </div>
          <div className="p-6 flex-1  ">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente
            vitae voluptatum vel dolorem obcaecati praesentium magnam eos ipsum
            delectus quaerat libero, id nobis? Ullam odit a et nobis tempore
            vero?
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
