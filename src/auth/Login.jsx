import { car } from '@/assets'
import Button from '@/components/ui/Button'
import Textinput from '@/components/ui/Textinput'
import { yupResolver } from '@hookform/resolvers/yup';

import { useDispatch } from "react-redux";
import * as yup from "yup";
import { useForm } from 'react-hook-form';
import { useNavigate } from "react-router-dom";
import { setUser } from '@/store/api/auth/authSlice';
import { getUser } from '@/store/api/user/userSlice';
import useToast from '@/hooks/useToast';
import { useLoginMutation } from '@/store/api/auth/authApiSlice';
const schema = yup
  .object({
    email: yup.string().email("Invalid email").required("Email is Required"),
    password: yup.string().required("Password is Required"),
  })
  .required();
function Login() {
    
  const dispatch = useDispatch();
  
  const { errorToast } = useToast();

  const [login, { isLoading, data, error }] = useLoginMutation();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
    mode: "all",
  });

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const userData = await login(data).unwrap();

      dispatch(
        setUser({
          token: userData?.token,
          user_id: userData?._id,
        })
      );
      dispatch(getUser({ user_id: userData?._id }));
      localStorage.setItem(
        "auth",
        JSON.stringify({
          accessToken: userData?.token,
          user_id: userData?._id,
        })
      );
      navigate("/dashboard");
    } catch (error) {
      
      errorToast(error.message);
    }
  };
  return (
    <div className="h-[95vh] bg-gradient-to-tr to-[#ede8e8] from-[#f4c5c5]">
    <div className="flex justify-center items-center h-full">
      <div className="bg-gradient-to-tl from-[#b1c2f1] to-[#6d6d6f] min-h-5/6 w-5/6 grid  grid-cols-12 rounded-xl shadow-2xl ">
          {/* welcome */}
          <div className=" md:col-span-7 rounded-xl hidden md:block">
             
              <div className="h-full w-full relative rounded-xl"> <img src={car} alt="" className="h-full w-full object-fill rounded-xl" />
              <div className="bg-black-500 inset-0 absolute opacity-25">
              </div>
              <div className=" inset-0 absolute rounded-xl">
                <div className="text-white  text-center xl:justify-center xl:items-center xl:flex xl:flex-col h-full w-full">
                  <div className="text-6xl font-bold">welcome to GLS</div>
                  <div className="font-medium text-base mt-24">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint atque ullam, ratione tempora veritatis eligendi deserunt labore ut distinctio tenetur exercitationem illum quasi alias eum. </div>

                </div>
               
              </div>
              </div>
          </div>
          {/* form */}
          <div className='md:col-span-5 col-span-full '>
          <div className="flex justify-center items-center h-full">
          <form
          className=""
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="mb-12 grid justify-center items-center mt-6">
            <div className="text-black-500 justify-center text-center font-bold text-2xl md:hidden">welcome to GLS</div>
          
            

           <div className="grid  grid-cols-1 ">
           <Textinput
                name="email"
                label="email"
                type="text"
                defaultValue="ruhul.cse123@gmail.com"
                placeholder="Enter your email"
                register={register}
                error={errors.email}
                className="w-[15rem]"
                autoComplete="email"
              />

              <Textinput
                name="password"
                label="password"
                type="password"
                defaultValue="test123"
                placeholder="Enter your password"
                register={register}
                error={errors.password}
                className="w-[15rem]"
                autoComplete="current-password"
              />
           </div>
           
            
           
           <Button
                type="submit"
                text="Sign in"
                className="btn btn-dark block w-full text-center mt-4"
                isLoading={isLoading}
              />
           
          </div>
          <div className="flex justify-between mb-4 mx-6 mt-[-12px] items-center">
            <div className="text-base text-blue-950 font-bold">
              Do you have an account?
            </div>
            <div
              className="text-xl font-bold cursor-pointer hover:text-black-500"
              onClick={() => navigate("/signUp")}
            >
              Sign In
            </div>
          </div>
        </form>
          </div>
          </div>
      </div>
    </div>
  </div>
  )
}

export default Login