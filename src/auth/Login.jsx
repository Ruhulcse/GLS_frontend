import Button from "@/components/ui/Button";
import Textinput from "@/components/ui/Textinput";
import useToast from "@/hooks/useToast";
import { useLoginMutation } from "@/store/api/auth/authApiSlice";
import { setUser } from "@/store/api/auth/authSlice";
import { getUser } from "@/store/api/user/userSlice";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import logo from "./../assets/home/logo.png";
import { useState } from "react";

const schema = yup
  .object({
    email: yup.string().email("Invalid email").required("Email is Required"),
    password: yup.string().required("Password is Required"),
  })
  .required();
function Login() {
  // const [formState, setFormState] = useState(transferObj(loginFiled));
  const dispatch = useDispatch();
  // const formData = objectToArray(formState);
  // const [failed, setFailed] = useState("");
  // console.log(failed);
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
      // setFailed("authentication failed");
      errorToast(error.message);
    }
  };

  // const handleChange = e => {
  // 	const { name, value } = e.target;
  // 	setFormState({
  // 		...formState,
  // 		[name]: {
  // 			...formState[name],
  // 			value: value,
  // 		},
  // 	});
  // };

  // const handleSubmit = async e => {
  // 	e.preventDefault();
  // 	const { email, password } = formState;
  // 	try {
  // 		const userData = await login({
  // 			email: email.value,
  // 			password: password.value,
  // 		}).unwrap();

  // 		if (userData?.token?.length) {
  // 			dispatch(
  // 				setUser({
  // 					token: userData.token,
  // 					user_id: userData._id,
  // 				})
  // 			);
  // 			dispatch(getUser({ user_id: userData._id }));
  // 			localStorage.setItem(
  // 				'auth',
  // 				JSON.stringify({
  // 					accessToken: userData.token,
  // 					user_id: userData._id,
  // 				})
  // 			),
  // 				navigate('/dashboard');
  // 		}

  //
  // 	} catch (error) {
  //
  // 	}

  // 	// navigate("/dashboard");
  // 	// You can add further logic for submitting the form data here
  // };
  return (
    <div>
      <div className="h-screen w-full bg-[url('./../../src/assets/home/truck.jpg')] bg-cover bg-no-repeat flex justify-center items-center"></div>
      <div className="bg-black opacity-50 absolute inset-0"></div>
      <div className="h-screen w-full absolute inset-0">
        <div className="h-full w-full flex justify-center items-center">
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
              {/* {failed && <span className="text-danger-500">{failed}</span>}
              <div>{failed}</div> */}
              <Button
                type="submit"
                text="Sign in"
                className="btn btn-dark block w-full text-center mt-4"
                isLoading={isLoading}
              />
              {/* <button
								className='inline-block mx-auto mt-6 bg-gray-200 w-32 text-center rounded-full p-2 cursor-pointer hover:bg-black hover:text-white transition-all hover:bg-black-500'
								type='submit'
							>
								Sign in
							</button> */}
            </div>
            <div className="flex justify-between mb-4 mx-6 mt-[-12px] items-center">
              <div className="text-base text-blue-950 font-bold">
                Don't have an account?
              </div>
              <div
                className="text-xl font-bold cursor-pointer hover:text-black-500"
                onClick={() => navigate("/signUp")}
              >
                Sign Up
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
