/* eslint-disable react/prop-types */
import Button from '@/components/ui/Button';
import FormGroup from '@/components/ui/FormGroup';
import Textarea from '@/components/ui/Textarea';
import Textinput from '@/components/ui/Textinput';
import useToast from '@/hooks/useToast';
import fetchWrapper from '@/util/fetchWrapper';
import { convertMoneyStringToNumber } from '@/util/helpers';
import { yupResolver } from '@hookform/resolvers/yup';
import moment from 'moment';
import { useState } from 'react';
import Flatpickr from 'react-flatpickr';
import { Controller, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';

const BidForm = ({ onClose, shipmentId }) => {
	const navigate = useNavigate();
	const [loading, setLoading] = useState(false);
	const FormValidationSchema = yup
		.object({
			bidAmount: yup.string().required('Bid Amount is Required'),
			proposedTimeline: yup.string().required('Proposed Timeline is Required'),
		})
		.required();

	const { successToast, errorToast } = useToast();

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
			const payload = {
				...data,
				shipmentId,
				bidAmount: convertMoneyStringToNumber(data.bidAmount),
			};
			const response = await fetchWrapper.post(`shipments/bid`, payload);
            console.log("onSubmit == response:", response)
			if (response.status === 201) {
				successToast('Bid placed successfully!');
				navigate('/bids');
				onClose();
			}
		} catch (error) {
			errorToast(error?.message);
			onClose();
		} finally {
			setLoading(false);
		}
	};
	return (
		<>
			<form onSubmit={handleSubmit(onSubmit)} className='space-y-4 my-3'>
				<div className='grid-cols-1 grid'>
					<FormGroup
						label={
							<div>
								Bid Amount <span className='text-red-500'>*</span>
							</div>
						}
						id='default-picker'
						error={errors.bidAmount}
					>
						<Controller
							name='bidAmount'
							control={control}
							render={({ field }) => (
								<Textinput
									id='nu'
									options={{ numeral: true }}
									placeholder='Bid Amount'
									isMask
									onChange={data => {
										field.onChange(data);
									}}
									className='my-2'
								/>
							)}
						/>
					</FormGroup>

					<FormGroup
						label={
							<div>
								Proposed Timeline <span className='text-red-500'>*</span>
							</div>
						}
						id='default-picker'
						error={errors.proposedTimeline}
					>
						<Controller
							name='proposedTimeline'
							control={control}
							render={({ field }) => (
								<Flatpickr
									className='form-control my-2 py-0'
									id='hf-picker'
									placeholder='Proposed Timeline'
									onChange={date => {
										field.onChange(moment(date[0]).format('YYYY-MM-DD'));
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

					<Textarea
						label='Remarks'
						name='remarks'
						id='pn4'
						placeholder='Enter remarks'
						row='5'
						register={register}
						className='my-2'
					/>

					<div className='ltr:text-right rtl:text-left mt-3'>
						<Button
							className='btn btn-primary text-center'
							type='submit'
							text={'Place Bid'}
							isLoading={loading}
							disabled={loading}
						/>
					</div>
				</div>
			</form>
		</>
	);
};

export default BidForm;
