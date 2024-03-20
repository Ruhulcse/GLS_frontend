import Textinput from '@/components/ui/Textinput';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
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
	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm({
		resolver: yupResolver(FormValidationSchema),
	});

	const onSubmit = data => {
		console.log(data);
	};

	return (
		<div>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className='lg:grid-cols-2 grid gap-5 grid-cols-1 '
			>
				<Textinput
					label='Title'
					type='text'
					placeholder='Title'
					name='title'
					register={register}
					error={errors.title}
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
					label='Duration'
					type='text'
					placeholder='Duration'
					name='duration'
					register={register}
					error={errors.duration}
				/>

				<div className='lg:col-span-2 col-span-1'>
					<div className='ltr:text-right rtl:text-left'>
						<button className='btn btn-dark  text-center'>Submit</button>
					</div>
				</div>
			</form>
		</div>
	);
};

export default ShipmentForm;
