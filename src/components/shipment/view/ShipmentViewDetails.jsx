import Card from '@/components/ui/Card';
import { humanDate, moneyFormatter } from '@/util/helpers';
import PropTypes from 'prop-types';

const ShipmentViewDetails = ({ shipment }) => {
	return (
		<Card title={'Shipment Details'}>
			{/* <Timeline from='dhaka' to='CTG' /> */}

			<div className='grid md:grid-cols-4 grid-cols-1 gap-4'>
				<div className=''>
					<span>
						<strong>Cargo Type:</strong>{' '}
					</span>
					<span>{shipment?.cargoType ?? 'N/A'}</span>
				</div>
				<div className=''>
					<span>
						<strong>Origin:</strong>{' '}
					</span>
					<span>{shipment?.origin ?? 'N/A'}</span>
				</div>
				<div className=''>
					<span>
						<strong>Destination:</strong>{' '}
					</span>
					<span>{shipment?.destination ?? 'N/A'}</span>
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
					<span>{shipment?.numberOfLoads ?? 'N/A'}</span>
				</div>
				<div className=''>
					<span>
						<strong>Height:</strong>{' '}
					</span>
					<span>{shipment?.dimensions?.height ?? 'N/A'}</span>
				</div>
				<div className=''>
					<span>
						<strong>Length:</strong>{' '}
					</span>
					<span>{shipment?.dimensions?.length ?? 'N/A'}</span>
				</div>
				<div className=''>
					<span>
						<strong>Width:</strong>{' '}
					</span>
					<span>{shipment?.dimensions?.width ?? 'N/A'}</span>
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
	);
};

ShipmentViewDetails.propTypes = {
	shipment: PropTypes.shape({
		cargoType: PropTypes.string.isRequired,
		origin: PropTypes.string.isRequired,
		destination: PropTypes.string.isRequired,
		weightKG: PropTypes.number.isRequired,
		numberOfLoads: PropTypes.number.isRequired,
		dimensions: PropTypes.shape({
			height: PropTypes.number.isRequired,
			length: PropTypes.number.isRequired,
			width: PropTypes.number.isRequired,
		}).isRequired,
		offeringPrice: PropTypes.number.isRequired,
		pickUpDate: PropTypes.string.isRequired,
		deliveryDate: PropTypes.string.isRequired,
		createdAt: PropTypes.string.isRequired,
	}).isRequired,
};
export default ShipmentViewDetails;
