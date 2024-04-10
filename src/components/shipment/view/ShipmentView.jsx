import Card from '@/components/ui/Card';
import { getShipment } from '@/store/api/shipment/shipmentSlice';
import { humanDate, moneyFormatter } from '@/util/helpers';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ShipmentBidsGrid from './ShipmentBidsGrid';

const ShipmentView = () => {
	const { id } = useParams();
	const dispatch = useDispatch();
	const { shipment } = useSelector(state => state.shipment);

	useEffect(() => {
		dispatch(getShipment({ id }));
	}, [id, dispatch]);

	return (
		<>
			<Card title={'Shipment Details'}>
				{/* <Timeline from='dhaka' to='CTG' /> */}

				<div className='grid grid-cols-4 gap-4'>
					<div className=''>
						<span>
							<strong>Cargo Type:</strong>{' '}
						</span>
						<span>{shipment?.cargoType}</span>
					</div>
					<div className=''>
						<span>
							<strong>Origin:</strong>{' '}
						</span>
						<span>{shipment?.origin}</span>
					</div>
					<div className=''>
						<span>
							<strong>Destination:</strong>{' '}
						</span>
						<span>{shipment?.destination}</span>
					</div>
					<div className=''>
						<span>
							<strong>Weight (in KG):</strong>{' '}
						</span>
						<span>{moneyFormatter(shipment?.weightKG)}</span>
					</div>
					<div className=''>
						<span>
							<strong>Number of Loads:</strong>{' '}
						</span>
						<span>{shipment?.numberOfLoads}</span>
					</div>
					<div className=''>
						<span>
							<strong>Height:</strong>{' '}
						</span>
						<span>{shipment?.dimensions?.height}</span>
					</div>
					<div className=''>
						<span>
							<strong>Length:</strong>{' '}
						</span>
						<span>{shipment?.dimensions?.length}</span>
					</div>
					<div className=''>
						<span>
							<strong>Width:</strong>{' '}
						</span>
						<span>{shipment?.dimensions?.width}</span>
					</div>
					<div className=''>
						<span>
							<strong>Offering Price:</strong>{' '}
						</span>
						<span>{moneyFormatter(shipment?.offeringPrice)}</span>
					</div>
					<div className=''>
						<span>
							<strong>Pickup date:</strong>{' '}
						</span>
						<span>{humanDate(shipment?.pickUpDate)}</span>
					</div>
					<div className=''>
						<span>
							<strong>Delivery Date:</strong>{' '}
						</span>
						<span>{humanDate(shipment?.deliveryDate)}</span>
					</div>
					<div className=''>
						<span>
							<strong>Initiated At:</strong>{' '}
						</span>
						<span>{humanDate(shipment?.createdAt)}</span>
					</div>
				</div>
			</Card>
			<Card title={'Bid List'} className='mt-5'>
				{shipment?.bids?.length ? (
					<ShipmentBidsGrid />
				) : (
					<div className='text-center text-danger-500'>
						No Bids Yet
					</div>
				)}
				{/* <ShipmentBidsGrid /> */}
			</Card>
		</>
	);
};

export default ShipmentView;
