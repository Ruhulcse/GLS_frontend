import { car } from "@/assets";
import Button from "@/components/ui/Button";
import FormGroup from "@/components/ui/FormGroup";
import Select from "@/components/ui/Select";
import Textinput from "@/components/ui/Textinput";
import { useRegisterUserMutation } from "@/store/api/auth/authApiSlice";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";

function SignUp() {
  const navigate = useNavigate();
  const [agent, setAgent] = useState(false);
  const [user, setUser] = useState("");
  const [signUp, { isLoading }] = useRegisterUserMutation();
  //console.log(user);

  const schema = yup
    .object({
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
        .label("User Type")
        .oneOf(["agent", "carrier", "broker", "shipper"])
        .required("select user type"),
      agent_code: agent && yup.string().required("Enter code"),
    })
    .required();

  useEffect(() => {
    user === "agent" && setAgent(false);
  }, [user]);

  const {
    register,
    formState: { errors },
    handleSubmit,
    control,
  } = useForm({
    resolver: yupResolver(schema),
    mode: "all",
    defaultValues: {
      firstName: "Testing",
      lastName: "test",
      email: "t@gmail.com",
      password: "test12345",
      confirmPassword: "test12345",
      phoneNumber: "0123456",
    },
  });
  const handleType = () => {
    if (user === "agent" || user === "") {
      return false;
    }
    return true;
  };
  //const type = handleType();

  const onSubmit = async (data) => {
    console.log("data =>", data);
    try {
      await signUp(data).unwrap();
      navigate("/logIn");
    } catch (error) {
      errorToast(error);
    }
  };
  return (
    <div className="min-h-[95vh] sm:h-[9vh] bg-gradient-to-tr to-[#ede8e8] from-[#f4c5c5]">
      <div className="flex justify-center items-center h-full">
        <div className="bg-gradient-to-tl from-[#97aff1] to-[#c6f2f3de] min-h-5/6 w-5/6 grid xl:grid-cols-2 md:grid-cols-3 rounded-xl shadow-2xl ">
          {/* welcome */}
          <div className="hidden lg:block xl:col-span-1 rounded-xl">
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
                  <div className="xl:text-6xl text-3xl md:text-4xl lg:text-4xl font-bold ">
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
          <div className="flex justify-center items-center md:col-span-3 lg:col-span-2 xl:col-span-1">
            <form className="" onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-12 grid justify-center ">
                <div className="text-black-500 justify-center text-center font-bold text-2xl lg:hidden">
                  Welcome to GLS
                </div>

                <div className="flex gap-3 items-center justify-center font-bold text-xl  py-6">
                  Registration
                  {/* <input
                  type="checkbox"
                  //defaultChecked
                  value={agent}
                  onClick={() => setAgent(!agent)}
                  className="checkbox bg-white"
                />
                <label className="text-lg font-medium text-black-500">
                  Agent form
                </label> */}
                </div>

                <div className="grid sm:grid-cols-2 gap-5 grid-cols-1 ">
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
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
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
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
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
                </div>
                <FormGroup label="User Type" error={errors.userType}>
                  <Controller
                    name="userType"
                    control={control}
                    render={({ field }) => (
                      <Select
                        defaultValue=""
                        options={["carrier", "broker", "shipper", "agent"]}
                        onChange={(e) => {
                          field.onChange(e); // update form control state
                          setUser(e.target.value); // update user state
                        }}
                        placeholder="Select User"
                      />
                    )}
                  />
                </FormGroup>
                {handleType() && (
                  <div className="flex gap-3 items-center font-bold text-xl  py-4">
                    <input
                      type="checkbox"
                      //defaultChecked
                      value={agent}
                      onClick={() => setAgent(!agent)}
                      className="checkbox bg-white"
                    />
                    <label className="text-lg font-medium text-black-500">
                      From Agent
                    </label>
                  </div>
                )}
                {agent && (
                  <Textinput
                    label="Agent code"
                    type="text"
                    name="agent_code"
                    //className="right-0"
                    autoComplete="code"
                    error={errors.agent_code}
                    placeholder="Code"
                    register={register}
                    className="w-full"
                  />
                )}
                {/* <Select
                  label="User type"
                  //defaultValue=""
                  options={["shipper", "broker", "carrier","agent"]}
                  onChange={handelChange}
                  //name="userType"
                  register={register}
                  error={errors.userType}
                  placeholder="Select User type"
                /> */}
                {/* {agent ? (
                <div className="sm:grid sm:grid-cols-2 gap-5 flex grid-cols-1"> */}
                {/* <Select
                    label="User type"
                    defaultValue='agent'
                    options={["agent"]}
                    name="userType"
                    register={register}
                    error={errors.userType}
                    placeholder="Select User type"
                  /> */}
                {/* <Textinput
                    label="Agent code"
                    type="text"
                    name="agent_code"
                    //className="right-0"
                    autoComplete="code"
                    error={errors.agent_code}
                    placeholder="Code"
                    register={register}
                    className="w-24 sm:w-full"
                  /> */}
                {/* </div>
              ) : (
                <Select
                  label="User type"
                  defaultValue=""
                  options={["shipper", "broker", "carrier"]}
                  name="userType"
                  register={register}
                  error={errors.userType}
                  placeholder="Select User type"
                />
              )} */}
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
              </div>
              <div className="flex justify-between mb-4 mx-0 mt-[-12px] items-center">
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
    </div>
  );
}

export default SignUp;
