/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import Loading from '@/components/Loading';
import ShipmentViewDetails from '@/components/shipment/view/ShipmentViewDetails';
import Modal from '@/components/ui/Modal';
import { useDispatch, useSelector } from 'react-redux';
import BidForm from '../bid-form/BidForm';
import { getShipment, resetShipment } from '@/store/api/shipment/shipmentSlice';
import { getAssignBid, resetAssignBid } from '@/store/api/assignBid/assignBidSlice';

export const BidModal = ({ isOpen, setIsOpen, shipmentId,isEdit,setIsEdit }) => {
	const dispatch = useDispatch();
	const { shipment, loading } = useSelector(state => state.shipment);
	const onClose = () => {
		setIsOpen(false);
		setIsEdit(false);
		dispatch(resetShipment());
		dispatch(resetAssignBid());
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
					<BidForm onClose={onClose} shipmentId={shipmentId} isEdit={isEdit} setIsEdit={setIsEdit} />
				</div>
			)}
		</Modal>
	);
};
