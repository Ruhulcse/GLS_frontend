import { car } from "@/assets";
import Button from "@/components/ui/Button";
import Textinput from "@/components/ui/Textinput";
import { yupResolver } from "@hookform/resolvers/yup";

import { useDispatch } from "react-redux";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useForgetPassMutation } from "@/store/api/auth/authApiSlice";
import { useEffect, useState } from "react";

const schema = yup
  .object({
    email: yup.string().email("Invalid email").required("Email is Required"),
  })
  .required();

function ForgetPassword() {
  const [state,setState] = useState(false)
  console.log(state);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
    mode: "all",
  });
  // useEffect(()=>{
  //   setState(false)
  // },[state])
  const [forgetPass, { isLoading, data, error }] = useForgetPassMutation();

  const onSubmit = async (data) => {
    try {
      const email = await forgetPass(data).unwrap();
      //console.log(email);
      if(email) {
        setState(true)
      }
    } catch (error) {}
  };

  return (
    <div className="h-[95vh] bg-gradient-to-tr to-[#ede8e8] from-[#f4c5c5]">
      <div className="flex justify-center items-center h-full">
        <div className="bg-gradient-to-tl from-[#97aff1] to-[#c6f2f3de] min-h-5/6 w-5/6 grid  grid-cols-12 rounded-xl shadow-2xl ">
          {/* welcome */}
          <div className=" md:col-span-7 rounded-xl hidden md:block">
            <div className="h-full w-full relative rounded-xl">
              {" "}
              <img
                src={car}
                alt=""
                className="h-full w-full object-fill rounded-xl"
              />
              <div className="bg-black-500 inset-0 absolute opacity-25"></div>
              <div className=" inset-0 absolute rounded-xl">
                <div className="text-white  text-center justify-center items-center flex flex-col h-full w-full">
                  <div className="xl:text-6xl text-3xl  lg:text-5xl md:text-4xl font-bold ">
                    Welcome to GLS
                  </div>

                  <div className="font-medium text-base mt-24">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sint atque ullam, ratione tempora veritatis eligendi
                    deserunt labore ut distinctio tenetur exercitationem illum
                    quasi alias eum.{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* form */}
          <div className="md:col-span-5 col-span-full ">
            <div className="flex justify-center items-center h-full">
              <form className="" onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-12 grid justify-center items-center mt-6">
                  <div className="text-black-500 justify-center text-center font-bold text-2xl md:hidden">
                    Welcome to GLS
                  </div>
                  <div className="flex gap-3 items-center justify-center font-bold text-xl  py-6">
                    Forget Password
                  </div>

                  <div className="grid  grid-cols-1 ">
                    <Textinput
                      name="email"
                      label="email"
                      type="text"
                      defaultValue="faysalahmed.cse.98@gmail.com"
                      placeholder="Enter your email"
                      register={register}
                      error={errors.email}
                      className="w-[15rem]"
                      autoComplete="email"
                    />
                  </div>

                  {state?<Button
                    type=""
                    text="Go to mail"
                    className="btn btn-dark block w-full text-center mt-4 disabled"
                   // isLoading={isLoading}
                   disabled={true}
                  />:<Button
                  type="submit"
                  text="Send mail"
                  className="btn btn-dark block w-full text-center mt-4"
                  isLoading={isLoading}
                />}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgetPassword;
