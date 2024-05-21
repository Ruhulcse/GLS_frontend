import { car } from "@/assets";
import Button from "@/components/ui/Button";
import Textinput from "@/components/ui/Textinput";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useLocation } from "react-router-dom";
import { useResetPassMutation } from "@/store/api/auth/authApiSlice";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useToast from "@/hooks/useToast";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const schema = yup
  .object({
    password: yup.string().required("Password is required"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match!")
      .required("Confirm Password is required"),
    token: yup.string().required("Token is required"),
  })
  .required();

function ResetPassword() {
  const query = useQuery();
  const id = query.get("token");
  const [token, setToken] = useState(id);

  const {errorToast} = useToast()

  const navigate = useNavigate();

  useEffect(() => {
    setToken(id);
  }, [id]);

  const [resetPassword, { error, isLoading }] = useResetPassMutation();


  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
  } = useForm({
    resolver: yupResolver(schema),
    mode: "all",
  });

  useEffect(() => {
    setValue("token", token);
  }, [token, setValue]);

  const onSubmit = async (data) => {
   
    try {
      const response = await resetPassword(data).unwrap();
      navigate("/login");

      
    } catch (err) {
      errorToast(err.message)
    }
  };

  return (
    <div className="h-[95vh] bg-gradient-to-tr to-[#ede8e8] from-[#f4c5c5]">
      <div className="flex justify-center items-center h-full">
        <div className="bg-gradient-to-tl from-[#97aff1] to-[#c6f2f3de] min-h-5/6 w-5/6 grid grid-cols-12 rounded-xl shadow-2xl">
          {/* welcome */}
          <div className="md:col-span-7 rounded-xl hidden md:block">
            <div className="h-full w-full relative rounded-xl">
              <img
                src={car}
                alt=""
                className="h-full w-full object-fill rounded-xl"
              />
              <div className="bg-black-500 inset-0 absolute opacity-25"></div>
              <div className="inset-0 absolute rounded-xl">
                <div className="text-white text-center justify-center items-center flex flex-col h-full w-full">
                  <div className="xl:text-6xl text-3xl lg:text-5xl md:text-4xl font-bold">
                    Welcome to GLS
                  </div>
                  <div className="font-medium text-base mt-24">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sint atque ullam, ratione tempora veritatis eligendi
                    deserunt labore ut distinctio tenetur exercitationem illum
                    quasi alias eum.
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* form */}
          <div className="md:col-span-5 col-span-full">
            <div className="flex justify-center items-center h-full">
              <form className="" onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-12 grid justify-center items-center mt-6">
                  <div className="text-black-500 justify-center text-center font-bold text-2xl md:hidden">
                    Welcome to GLS
                  </div>
                  <div className="flex gap-3 items-center justify-center font-bold text-xl py-6">
                    New Password
                  </div>
                  <div className="grid grid-cols-1">
                    <Textinput
                      label="New Password"
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
                    {/* Hidden input for token */}
                    <input type="hidden" {...register("token")} value={token} />
                  </div>
                  <Button
                    type="submit"
                    text="Reset Password"
                    className="btn btn-dark block w-full text-center mt-4"
                    isLoading={isLoading}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResetPassword;
