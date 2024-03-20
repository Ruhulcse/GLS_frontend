import ShipmentForm from '@/components/shipment/form/ShipmentForm';
import Card from '@/components/ui/Card';

const ShipmentFormPage = () => {
	return (
		<div className='xl:col-span-2 col-span-1'>
			<Card title='Shipment Entry'>
				<ShipmentForm />
			</Card>
		</div>
	);
};

export default ShipmentFormPage;
