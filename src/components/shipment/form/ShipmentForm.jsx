import FormGroup from '@/components/ui/FormGroup';
import Select from '@/components/ui/Select';
import Textinput from '@/components/ui/Textinput';
import useToast from '@/hooks/useToast';
import { getShipment } from '@/store/api/shipment/shipmentSlice';
import fetchWrapper from '@/util/fetchWrapper';
import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect } from 'react';
import Flatpickr from 'react-flatpickr';
import { Controller, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import * as yup from 'yup';

const FormValidationSchema = yup
	.object({
		origin: yup.string().required(),
		destination: yup.string().required(),
		cargoType: yup.string().required(),
		weightKG: yup.string().required(),
		offeringPrice: yup.string().required(),
		numberOfLoads: yup.number().required(),
		dimensions: yup.object().shape({
			length: yup.number().required(),
			width: yup.number().required(),
			height: yup.number().required(),
		}),
		deliveryDate: yup.date().required(),
		pickUpDate: yup.date().required(),
	})
	.required();

const ShipmentForm = () => {
	const { id } = useParams();
	const { shipment } = useSelector(state => state.shipment);
	const dispatch = useDispatch();
	const { errorToast, successToast } = useToast();
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
			value: 'Furniture',
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
		reset,
	} = useForm({
		resolver: yupResolver(FormValidationSchema),
		mode: 'all',
		// reValidateMode: 'onChange',
	});

	useEffect(() => {
		if (id) {
			dispatch(getShipment({ id }));
		}
	}, [id, dispatch]);

	useEffect(() => {
		if (id && shipment) {
			reset(prev => ({
				...prev,
				...shipment,
				length: shipment?.dimensions?.length,
				width: shipment?.dimensions?.width,
				height: shipment?.dimensions?.height,
			}));
		}
	}, [id, reset, shipment]);

	const onSubmit = async data => {
		if (id) {
			updateData(data);
		} else {
			storeData(data);
		}
	};

	const storeData = async data => {
		try {
			const response = await fetchWrapper.post(`shipments`, data);
			if (response) {
				successToast('Shipment saved successfully!');
				navigate('/shipments');
			}
		} catch (error) {
			errorToast(error.message);
		}
	};
	const updateData = async data => {
		try {
			const response = await fetchWrapper.put(`shipments/${id}`, data);
			if (response) {
				successToast('Update Success!');
				navigate('/shipments');
			}
		} catch (error) {
			errorToast(error.message);
		}
	};

	return (
		<div>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className='lg:grid-cols-3 grid gap-5 grid-cols-1 '
			>
				<Select
					label={
						<div>
							Cargo Type <span className='text-red-500'>*</span>
						</div>
					}
					type='text'
					// placeholder='cargoType'
					// defaultValue={shipment.cargoType}
					name='cargoType'
					register={register}
					error={errors.cargoType}
					options={cargoOptions}
				/>
				<Textinput
					label={
						<div>
							Weight (in KG) <span className='text-red-500'>*</span>
						</div>
					}
					type='number'
					placeholder='Weight (in KG)'
					name='weightKG'
					// defaultValue={shipment.weightKG}
					register={register}
					error={errors.weightKG}
				/>
				<Textinput
					label={
						<div>
							Offering Price (USD) <span className='text-red-500'>*</span>
						</div>
					}
					type='number'
					placeholder='Offering Price'
					name='offeringPrice'
					// defaultValue={shipment.offeringPrice}
					register={register}
					error={errors.offeringPrice}
				/>

				<Textinput
					label={
						<div>
							Origin <span className='text-red-500'>*</span>
						</div>
					}
					type='text'
					placeholder='Origin'
					name='origin'
					// defaultValue={shipment.origin}
					register={register}
					error={errors.origin}
				/>

				<Textinput
					label={
						<div>
							Destination <span className='text-red-500'>*</span>
						</div>
					}
					type='text'
					placeholder='Destination'
					name='destination'
					// defaultValue={shipment.destination}
					register={register}
					error={errors.destination}
				/>

				<Textinput
					label={
						<div>
							Number of Loads <span className='text-red-500'>*</span>
						</div>
					}
					type='number'
					placeholder='Number of Loads'
					name='numberOfLoads'
					// defaultValue={shipment.numberOfLoads}
					register={register}
					error={errors.numberOfLoads}
				/>

				<Textinput
					label={
						<div>
							Length <span className='text-red-500'>*</span>
						</div>
					}
					type='number'
					placeholder='Length'
					name='dimensions.length'
					// defaultValue={shipment?.dimensions?.length}
					register={register}
					error={errors?.dimensions?.length}
				/>
				<Textinput
					label={
						<div>
							Height <span className='text-red-500'>*</span>
						</div>
					}
					type='number'
					placeholder='Height'
					name='dimensions.height'
					// defaultValue={shipment?.dimensions?.height}
					register={register}
					error={errors?.dimensions?.height}
				/>
				<Textinput
					label={
						<div>
							Width <span className='text-red-500'>*</span>
						</div>
					}
					type='number'
					placeholder='Width'
					name='dimensions.width'
					// defaultValue={shipment?.dimensions?.width}
					register={register}
					error={errors?.dimensions?.width}
				/>

				<FormGroup
					label={
						<div>
							Pickup Date <span className='text-red-500'>*</span>
						</div>
					}
					id='default-picker'
					error={errors.pickUpDate}
				>
					<Controller
						name='pickUpDate'
						control={control}
						render={({ field }) => (
							<Flatpickr
								className='form-control py-2'
								id='hf-picker'
								placeholder='Pickup Date'
								value={id && shipment?.pickUpDate}
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
					label={
						<div>
							Delivery Date <span className='text-red-500'>*</span>
						</div>
					}
					id='default-picker'
					error={errors.deliveryDate}
				>
					<Controller
						name='deliveryDate'
						control={control}
						render={({ field }) => (
							<Flatpickr
								className='form-control py-2'
								id='hf-picker'
								value={id && shipment?.deliveryDate}
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
						<button type='submit' className='btn  text-center'>
							{id ? 'Update' : 'Submit'}
						</button>
					</div>
				</div>
			</form>
		</div>
	);
};

export default ShipmentForm;
