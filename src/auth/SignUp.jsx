/* eslint-disable react/jsx-key */
import { useState } from "react";
import { objectToArray, transferObj } from "../util/objMaping/objectMap";
import logo from "./../assets/home/logo.png";
import { formFiled } from "./form";
import { useNavigate } from "react-router-dom";
import { useRegisterUserMutation } from "@/store/api/auth/authApiSlice";
import Textinput from "@/components/ui/Textinput";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Select from "@/components/ui/Select";
import useToast from "@/hooks/useToast";
import Button from "@/components/ui/Button";

const schema = yup.object({
  firstName: yup.string().label("First Name").required(),
  lastName: yup.string().label("Last Name").required(),
  email: yup.string().email("invalid email").required("email is required"),
  phoneNumber: yup.string().required(),
  password: yup.string().required(),
  confirmPassword: yup
    .string()

    .oneOf([yup.ref("password"), null], "Passwords must match!"),
  userType: yup
    .string()
    .oneOf(["agent", "carrier", "broker", "shipper"])
    .required("select user type"),
});

function SignUp() {
  const { errorToast } = useToast();
  const [SignUp, { data, isLoading, error: responseError }] =
    useRegisterUserMutation();
  const navigate = useNavigate();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
    mode: "all",
  });

  const onSubmit = async (data) => {
    try {
      await SignUp(data).unwrap();
      navigate("/logIn");
    } catch (error) {
      errorToast(error);
    }
  };

  return (
    <div className="">
      <div className=" h-screen w-full bg-[url('./../../src/assets/home/truck.jpg')] bg-cover bg-no-repeat flex justify-center items-center  relative"></div>
      <div className="h-[110vh] bg-black opacity-50 absolute inset-0"></div>
      <div className=" w-full absolute inset-0">
        <div className="mt-12 h-full w-full flex justify-center items-center">
          <form
            className="bg-gradient-to-tl from-[#afc0ee] to-[#6d5cf0] rounded-xl  min-h-96 w-96 lg:w-[420px] shadow-xl"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="mb-12 grid justify-center">
              <img
                src={logo}
                className="h-12 w-12 m-4 inline-block mx-auto"
                alt=""
              />

              <Textinput
                label="First Name"
                type="text"
                name="firstName"
                error={errors.firstName}
                defaultValue=""
                placeholder="Enter your first name"
                register={register}
                className="w-[15rem]"
                autoComplete="firstName"
              />
              <Textinput
                label="Last Name"
                type="text"
                name="lastName"
                defaultValue=""
                error={errors.lastName}
                autoComplete="lastName"
                placeholder="Enter your last name"
                register={register}
                className="w-[15rem]"
              />
              <Textinput
                label="Email"
                type="email"
                name="email"
                defaultValue=""
                error={errors.email}
                autoComplete="email"
                placeholder="Enter your email"
                register={register}
                className="w-[15rem]"
              />
              <Textinput
                label="Phone"
                placeholder="Phone"
                type="tel"
                name="phoneNumber"
                error={errors.phoneNumber}
                autoComplete="phone"
                register={register}
                className="w-[15rem]"
              />
              <Textinput
                label="Password"
                placeholder="Password"
                type="password"
                name="password"
                autoComplete="password"
                error={errors.password}
                register={register}
                className="w-[15rem]"
              />
              <Textinput
                label="Confirm Password"
                type="password"
                name="confirmPassword"
                autoComplete="confirmPassword"
                error={errors.confirmPassword}
                placeholder="Confirm password"
                register={register}
                className="w-[15rem]"
              />
              <Select
                label="User type"
                defaultValue=""
                options={["agent", "shipper", "broker", "carrier"]}
                name="userType"
                register={register}
                error={errors.userType}
                placeholder="Select User type"
              />
              {/* <button
                className="inline-block mx-auto mt-6 bg-gray-200 w-32 text-center rounded-full p-2 cursor-pointer hover:bg-black hover:text-white transition-all hover:bg-black-500"
                type="submit"
                isLoading={isLoading}
              >
                Sign Up
              </button> */}
              <Button
                type="submit"
                text="Sign Up"
                className="btn btn-dark block w-full text-center mt-4"
                isLoading={isLoading}
              />
              {/* <Button
                type="submit"
                text="Sign in"
                className="btn btn-dark block w-full text-center mt-4"
                isLoading={isLoading}
              /> */}
            </div>
            <div className="flex justify-between mb-4 mx-6 mt-[-12px] items-center">
              <div className="text-base text-blue-950 font-bold">
                Do you have an account?
              </div>
              <div
                className="text-xl font-bold cursor-pointer hover:text-black-500"
                onClick={() => navigate("/logIn")}
              >
                Sign In
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
