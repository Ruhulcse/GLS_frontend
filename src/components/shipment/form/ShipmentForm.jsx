import FormGroup from '@/components/ui/FormGroup';
import Select from '@/components/ui/Select';
import Textinput from '@/components/ui/Textinput';
import useToast from '@/hooks/useToast';
import fetchWrapper from '@/util/fetchWrapper';
import Flatpickr from 'react-flatpickr';
import { Controller, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';

const FormValidationSchema = yup
	.object({
		title: yup.string().required(),
		origin: yup.string().required(),
		destination: yup.string().required(),
		duration: yup.string().required(),
	})
	.required();

const ShipmentForm = () => {
	const { errorToast } = useToast();
	const navigate = useNavigate();
	const cargoOptions = [
		{
			label: 'Electronics',
			value: 'Electronics',
		},
		{
			label: 'Clothing',
			value: 'Clothing',
		},
		{
			label: 'Food Items',
			value: 'Food Items',
		},
		{
			label: 'Books',
			value: 'Books',
		},
		{
			label: 'Furniture',
			value: 'Gurniture',
		},
		{
			label: 'Automobile Parts',
			value: 'Auto Parts',
		},
	];
	const {
		register,
		control,
		formState: { errors },
		handleSubmit,
	} = useForm({
		// resolver: yupResolver(FormValidationSchema),
		mode: 'all',
	});

	const onSubmit = async data => {
		console.log('onSubmit == data:', data);
		try {
			const response = await fetchWrapper.post(`shipments`, data);
			console.log('onSubmit == response:', response);
			navigate('/shipments');
		} catch (error) {
			errorToast(error);
		}
	};

	return (
		<div>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className='lg:grid-cols-3 grid gap-5 grid-cols-1 '
			>
				<Select
					label='Cargo Type'
					type='text'
					// placeholder='cargoType'
					name='cargoType'
					register={register}
					error={errors.cargoType}
					options={cargoOptions}
				/>
				<Textinput
					label='Weight (in KG)'
					type='number'
					placeholder='Weight (in KG)'
					name='weightKG'
					register={register}
					error={errors.weightKG}
				/>
				<Textinput
					label='Offering Price'
					type='number'
					placeholder='Offering Price'
					name='offeringPrice'
					register={register}
					error={errors.offeringPrice}
				/>

				<Textinput
					label='Origin'
					type='text'
					placeholder='Origin'
					name='origin'
					register={register}
					error={errors.origin}
				/>

				<Textinput
					label='Destination'
					type='text'
					placeholder='Destination'
					name='destination'
					register={register}
					error={errors.destination}
				/>

				<Textinput
					label='Number of Loads'
					type='number'
					placeholder='Number of Loads'
					name='numberOfLoads'
					register={register}
					error={errors.numberOfLoads}
				/>

				<Textinput
					label='Length'
					type='number'
					placeholder='Length'
					name='length'
					register={register}
					error={errors.length}
				/>
				<Textinput
					label='height'
					type='number'
					placeholder='height'
					name='height'
					register={register}
					error={errors.height}
				/>
				<Textinput
					label='width'
					type='number'
					placeholder='width'
					name='width'
					register={register}
					error={errors.width}
				/>

				<FormGroup
					label='Pickup Date'
					id='default-picker'
					error={errors.startDate}
				>
					<Controller
						name='pickUpDate'
						control={control}
						render={({ field }) => (
							<Flatpickr
								className='form-control py-2'
								id='hf-picker'
								placeholder='Pickup Date'
								// value={user?.dateOfBirth}
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

				<FormGroup
					label='delivery Date'
					id='default-picker'
					error={errors.startDate}
				>
					<Controller
						name='deliveryDate'
						control={control}
						render={({ field }) => (
							<Flatpickr
								className='form-control py-2'
								id='hf-picker'
								placeholder='Delivery Date'
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

				<div className='lg:col-span-3 col-span-1'>
					<div className='ltr:text-right rtl:text-left'>
						<button type='submit' className='btn btn-dark  text-center'>
							Submit
						</button>
					</div>
				</div>
			</form>
		</div>
	);
};

export default ShipmentForm;
