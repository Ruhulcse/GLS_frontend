import Card from '@/components/ui/Card';
import { getShipment } from '@/store/api/shipment/shipmentSlice';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ShipmentBidsGrid from './ShipmentBidsGrid';
import ShipmentViewDetails from './ShipmentViewDetails';

const ShipmentView = () => {
	const { id } = useParams();
	const dispatch = useDispatch();
	const { shipment } = useSelector(state => state.shipment);

	useEffect(() => {
		dispatch(getShipment({ id }));
	}, [id, dispatch]);

	return (
		<>
			<ShipmentViewDetails shipment={shipment} />
			<Card title={'Bid List'} className='mt-5'>
				{shipment?.bids?.length ? (
					<ShipmentBidsGrid />
				) : (
					<div className='text-center text-danger-500'>No Bids Yet</div>
				)}
			</Card>
		</>
	);
};

export default ShipmentView;
