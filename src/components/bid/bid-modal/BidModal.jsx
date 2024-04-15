/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import Loading from '@/components/Loading';
import ShipmentViewDetails from '@/components/shipment/view/ShipmentViewDetails';
import Modal from '@/components/ui/Modal';
import { useSelector } from 'react-redux';
import BidForm from '../bid-form/BidForm';

export const BidModal = ({ isOpen, setIsOpen, shipmentId }) => {
	const { shipment, loading } = useSelector(state => state.shipment);
	const onClose = () => {
		setIsOpen(false);
	};

	return (
		<Modal
			className='max-w-5xl bg-[#eeeeee]'
			title='Place Bid'
			activeModal={isOpen}
			centered
			onClose={onClose}
		>
			{loading ? (
				<Loading />
			) : (
				<div className=''>
					<ShipmentViewDetails shipment={shipment} />
					<BidForm onClose={onClose} shipmentId={shipmentId} />
				</div>
			)}
		</Modal>
	);
};
