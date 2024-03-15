import { useState } from "react"
import { objectToArray, transferObj } from "../util/objMaping/objectMap"
import { loginFiled } from "./loginFiled"
import logo from "./../assets/home/logo.png";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
function Login() {
  const [formState,setFormState] = useState(transferObj(loginFiled))
  const formData = objectToArray(formState)

  const navigate = useNavigate()

  const handleChange = (e) =>{
    const {name,value} = e.target
    setFormState({
      ...formState,
      [name]:{
        ...formState[name],
        value:value
      }
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const values = Object.keys(formState).reduce((acc,crr)=>{
      acc[crr] = formState[crr].value;
      return acc;
    },{})
    console.log(values);
    // You can add further logic for submitting the form data here
  };
  return (
    <div>
       <div className="h-screen w-full bg-[url('./../../src/assets/home/truck.jpg')] bg-cover bg-no-repeat flex justify-center items-center"></div>
       <div className="bg-black opacity-50 absolute inset-0"></div>
      <div className="h-screen w-full absolute inset-0">
        <div className="h-full w-full flex justify-center items-center">
          <form className="bg-gradient-to-tl from-[#afc0ee] to-[#6d5cf0] rounded-xl  min-h-96 w-96 lg:w-[420px] shadow-xl" onSubmit={handleSubmit}>
            <div className="mb-12 grid justify-center">
              <img
                src={logo}
                className="h-12 w-12 m-4 inline-block mx-auto"
                alt=""
              />

              {formData.map((item,i)=>(
                <div className="flex flex-col my-1.5">
                <label htmlFor="" className='text-lg font-medium my-[2px]'>{item.title}</label>
                <input 
                type={item.type}
                 placeholder={item.placeholder}
                  name={item.name} 
                   onChange={handleChange}
                  value={item.value}
                  className="w-64 lg:w-72 px-2 p-1.5 rounded-lg" />
                
            </div>
              ))}

              <button
                className="inline-block mx-auto mt-6 bg-gray-200 w-32 text-center rounded-full p-2 cursor-pointer hover:bg-black hover:text-white transition-all"
                type="submit"
              >
                Sign in
              </button>
              <p className="text-center p-4 text-white">sign in with</p>
             <div className="flex justify-center text-3xl space-x-4">
             <FcGoogle className="cursor-pointer" />
             <FaFacebook className="text-blue-600 cursor-pointer"/>
             </div>
             <div className="inline-block mx-auto text-lg text-blue-700 mt-6 hover:bg-black hover:text-white transition-all cursor-pointer bg-white rounded-full px-3">
              
              <p onClick={()=>navigate('/signUp')}>Create account</p>
             </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login