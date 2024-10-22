import { FiCheckSquare } from 'react-icons/fi';
import shipment from '../../assets/home/shipment details.jpg';
import Services from '../../shared/Services/Services';

const Shippers = () => {
	const features = [
		{
			icon: <FiCheckSquare className="size-5 shrink-0" />,
			title: 'Lorem ipsum dolor, sit amet consectetur adipisicing',
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quas in consectetur porro similique veritatis! Quae tenetur expedita quis iusto?',
		},
		{
			icon: <FiCheckSquare className="size-5 shrink-0" />,
			title: 'Lorem ipsum dolor, sit amet consectetur adipisicing',
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quas in consectetur porro similique veritatis! Quae tenetur expedita quis iusto?',
		},
		{
			icon: <FiCheckSquare className="size-5 shrink-0" />,
			title: 'Lorem ipsum dolor, sit amet consectetur adipisicing',
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quas in consectetur porro similique veritatis! Quae tenetur expedita quis iusto?',
		},
		{
			icon: <FiCheckSquare className="size-5 shrink-0" />,
			title: 'Lorem ipsum dolor, sit amet consectetur adipisicing',
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quas in consectetur porro similique veritatis! Quae tenetur expedita quis iusto?',
		},
	];
	return (
		<Services
			// MainTitle1="GLS Mobile App Can Easier"
			// MainTitle2="Your Business"
			MainTitle1="Shippers Features"
			serviceImage={shipment}
			features={features}
			className="flex-row-reverse sm:gap-20"
		/>
	);
};

export default Shippers;
