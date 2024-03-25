/* eslint-disable react/jsx-key */
import { useState } from "react";
import { objectToArray, transferObj } from "../util/objMaping/objectMap";
import logo from "./../assets/home/logo.png";
import { formFiled } from "./form";

function SignUp() {
  const [formState, setFormState] = useState(transferObj(formFiled));
  const [category,setCategory] = useState('')
  const formData = objectToArray(formState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: {
        ...formState[name],
        value: value,
      },
    });
  };
  const handleCategory =(e)=>{
    setCategory(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const values = Object.keys(formState).reduce((acc, crr) => {
      acc[crr] = formState[crr].value;
      return acc;
    }, {});
    console.log(values);
    // You can add further logic for submitting the form data here
  };

  return (
    <div className="">
      <div className=" h-screen w-full bg-[url('./../../src/assets/home/truck.jpg')] bg-cover bg-no-repeat flex justify-center items-center  relative"></div>
      <div className="h-[110vh] bg-black opacity-50 absolute inset-0"></div>
      <div className=" w-full absolute inset-0">
        <div className="mt-12 h-full w-full flex justify-center items-center">
          <form
            className="bg-gradient-to-tl from-[#afc0ee] to-[#6d5cf0] rounded-xl  min-h-96 w-96 lg:w-[420px] shadow-xl"
            onSubmit={handleSubmit}
          >
            <div className="mb-12 grid justify-center">
              <img
                src={logo}
                className="h-12 w-12 m-4 inline-block mx-auto"
                alt=""
              />

              {formData.map((item) => (
                <div className="flex flex-col my-px">
                  <label htmlFor="" className="text-base
                   font-medium my-[2px]">
                    {item.title}
                  </label>
                  <input
                    type={item.type}
                    placeholder={item.placeholder}
                    name={item.name}
                    onChange={handleChange}
                    value={item.value}
                    className="w-64 lg:w-72 px-2 p-1.5 rounded-lg"
                  />
                </div>
              ))}
               <label className="text-base font-medium my-[2px]">Category:</label>
                <select value={category} onChange={handleCategory}name="category">
                  <option value="">category</option>
                  <option value="carriers">Carriers</option>
                  <option value="brokers">Brokers</option>
                  <option value="shippers">Shippers</option>
                </select>

              <button
                className="inline-block mx-auto mt-6 bg-gray-200 w-32 text-center rounded-full p-2 cursor-pointer hover:bg-black hover:text-white transition-all hover:bg-black-500"
                type="submit"
              >
                Sign Up
              </button>
            </div>
          <div className="flex justify-between mb-4 mx-6 mt-[-12px] items-center">
            <div className="text-base text-blue-950 font-bold">Do you have an account?</div>
            <div className="text-xl font-bold cursor-pointer hover:text-black-500">Sign In</div>
          </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
