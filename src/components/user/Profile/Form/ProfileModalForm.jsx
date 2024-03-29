/* eslint-disable react/prop-types */
import Button from '@/components/ui/Button';
import FormGroup from '@/components/ui/FormGroup';
import Modal from '@/components/ui/Modal';
import Textinput from '@/components/ui/Textinput';
import useToast from '@/hooks/useToast';
import { getUser } from '@/store/api/user/userSlice';
import fetchWrapper from '@/util/fetchWrapper';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import Flatpickr from 'react-flatpickr';
import { Controller, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import * as yup from 'yup';

const ProfileModalForm = ({
	showEditProfileModal,
	setShowEditProfileModal,
}) => {
	const [loading, setLoading] = useState(false);
	const { successToast, errorToast } = useToast();
	const dispatch = useDispatch();
	const { user } = useSelector(state => state.user);
	// const phoneRegExp =
	// 	/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

	const FormValidationSchema = yup
		.object({
			firstName: yup.string().required('Firstname is Required'),
			lastName: yup.string().required('Lastname is Required'),
			email: yup.string().email('Invalid email').required('Email is Required'),
			// phoneNumber: yup
			// 	.string()
			// 	.matches(phoneRegExp, 'Phone number is not valid')
			// 	.required('Phone Number is Required'),

			// password: yup.string().required('Password is Required'),
			confirmpassword: yup
				.string()
				// .required()
				.oneOf([yup.ref('password'), null], 'Passwords must match!'),
		})
		.required();
	const onClose = () => {
		setShowEditProfileModal(false);
	};

	const {
		register,
		control,
		formState: { errors },
		handleSubmit,
	} = useForm({
		resolver: yupResolver(FormValidationSchema),
		mode: 'all',
	});

	const onSubmit = async data => {
		setLoading(true);
		try {
			const response = await fetchWrapper.put(`user/${user?._id}`, data);
			if (response) {
				setShowEditProfileModal(false);
				setLoading(false);
				successToast('Profile updated successfully');
				dispatch(getUser({ user_id: user?._id }));
			}
		} catch (error) {
			errorToast(error);
		} finally {
			setLoading(false);
		}
		console.log(data);
	};

	return (
		<>
			<Modal
				title='Update Profile'
				activeModal={showEditProfileModal}
				centered
				onClose={onClose}
			>
				<form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
					<div className='lg:grid-cols-2 grid gap-5 grid-cols-1'>
						<Textinput
							name='firstName'
							label='Firstname'
							type='text'
							placeholder='Firstname'
							register={register}
							error={errors.firstName}
							defaultValue={user?.firstName ? user?.firstName : ''}
						/>
						<Textinput
							name='lastName'
							label='Lastname'
							type='text'
							placeholder='Lastname'
							register={register}
							error={errors.lastName}
							defaultValue={user?.lastName ? user?.lastName : ''}
						/>

						<Textinput
							name='email'
							label='Email'
							type='text'
							placeholder='Email'
							register={register}
							error={errors.email}
							defaultValue={user?.email ? user?.email : ''}
						/>
						<Textinput
							name='phoneNumber'
							label='Phone Number'
							type='text'
							placeholder='Phone Number'
							register={register}
							error={errors.phoneNumber}
							defaultValue={user?.phoneNumber ? user?.phoneNumber : ''}
						/>
						<Textinput
							name='password'
							label='Password'
							type='password'
							placeholder='password'
							register={register}
							error={errors.password}
						/>
						<Textinput
							name='confirmpassword'
							label='Confirm Password'
							type='password'
							placeholder='Confirm Password'
							register={register}
							error={errors.confirmpassword}
						/>

						<FormGroup
							label='Date of Birth'
							id='default-picker'
							error={errors.startDate}
						>
							<Controller
								name='dateOfBirth'
								control={control}
								render={({ field }) => (
									<Flatpickr
										className='form-control py-2'
										id='hf-picker'
										placeholder='Date of Birth'
										value={user?.dateOfBirth}
										onChange={date => {
											field.onChange(date);
										}}
										options={{
											altInput: true,
											altFormat: 'F j, Y',
											dateFormat: 'Y-m-d',
										}}
									/>
								)}
							/>
						</FormGroup>

						<Textinput
							name='address'
							label='Address'
							type='text'
							placeholder='Address'
							register={register}
							error={errors.address}
							defaultValue={user?.address ? user?.address : ''}
						/>

						<Textinput
							name='postalCode'
							label='Postal Code'
							type='text'
							placeholder='Postal Code'
							register={register}
							error={errors.postalCode}
							defaultValue={user?.postalCode ? user?.postalCode : ''}
						/>
					</div>
					<div className='ltr:text-right rtl:text-left'>
						<Button
							className='btn btn-dark  text-center'
							type='submit'
							text={'Update Profile'}
							isLoading={loading}
							disabled={loading}
						/>
					</div>
				</form>
			</Modal>
		</>
	);
};

export default ProfileModalForm;
