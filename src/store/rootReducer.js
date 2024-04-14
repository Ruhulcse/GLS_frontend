import agents from './api/agents/agentsSlice';
import myBids from './api/myBids/myBidsSlice';
import shipment from './api/shipment/shipmentSlice';
import shipments from './api/shipments/shipmentsSlice';
import user from './api/user/userSlice';
import users from './api/users/usersSlice';
import layout from './layout';

const rootReducer = {
	layout,
	users,
	user,
	shipments,
	shipment,
	agents,
	myBids,
};
export default rootReducer;
