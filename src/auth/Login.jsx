import { useLoginMutation } from '@/store/api/auth/authApiSlice';
import { setUser } from '@/store/api/auth/authSlice';
import { getUser } from '@/store/api/user/userSlice';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { objectToArray, transferObj } from '../util/objMaping/objectMap';
import logo from './../assets/home/logo.png';
import { loginFiled } from './loginFiled';
function Login() {
	const [formState, setFormState] = useState(transferObj(loginFiled));
	const dispatch = useDispatch();
	const formData = objectToArray(formState);
	const [login, { data, error }] = useLoginMutation();

	const navigate = useNavigate();

	const handleChange = e => {
		const { name, value } = e.target;
		setFormState({
			...formState,
			[name]: {
				...formState[name],
				value: value,
			},
		});
	};

	const handleSubmit = async e => {
		e.preventDefault();
		const { email, password } = formState;
		try {
			const userData = await login({
				email: email.value,
				password: password.value,
			}).unwrap();

			if (userData?.token?.length) {
				dispatch(
					setUser({
						token: userData.token,
						user_id: userData._id,
					})
				);
				dispatch(getUser({ user_id: userData._id }));
				localStorage.setItem(
					'auth',
					JSON.stringify({
						accessToken: userData.token,
						user_id: userData._id,
					})
				),
					navigate('/dashboard');
			}

			console.log('userData', userData);
		} catch (error) {
			console.error(error);
		}

		// navigate("/dashboard");
		// You can add further logic for submitting the form data here
	};
	return (
		<div>
			<div className="h-screen w-full bg-[url('./../../src/assets/home/truck.jpg')] bg-cover bg-no-repeat flex justify-center items-center"></div>
			<div className='bg-black opacity-50 absolute inset-0'></div>
			<div className='h-screen w-full absolute inset-0'>
				<div className='h-full w-full flex justify-center items-center'>
					<form
						className='bg-gradient-to-tl from-[#afc0ee] to-[#6d5cf0] rounded-xl  min-h-96 w-96 lg:w-[420px] shadow-xl'
						onSubmit={handleSubmit}
					>
						<div className='mb-12 grid justify-center'>
							<img
								src={logo}
								className='h-12 w-12 m-4 inline-block mx-auto'
								alt=''
							/>

							{...formData.map((item, i) => (
								<div className='flex flex-col my-px'>
									<label htmlFor='' className='text-base font-medium my-[2px]'>
										{item.title}
									</label>
									<input
										type={item.type}
										placeholder={item.placeholder}
										name={item.name}
										onChange={handleChange}
										value={item.value}
										className='w-64 lg:w-72 px-2 p-1.5 rounded-lg'
									/>
								</div>
							))}

							<button
								className='inline-block mx-auto mt-6 bg-gray-200 w-32 text-center rounded-full p-2 cursor-pointer hover:bg-black hover:text-white transition-all hover:bg-black-500'
								type='submit'
							>
								Sign in
							</button>
						</div>
						<div className='flex justify-between mb-4 mx-6 mt-[-12px] items-center'>
							<div className='text-base text-blue-950 font-bold'>
								Don't have an account?
							</div>
							<div
								className='text-xl font-bold cursor-pointer hover:text-black-500'
								onClick={() => navigate('/signUp')}
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
