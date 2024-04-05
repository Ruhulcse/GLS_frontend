import shipments from './api/shipments/shipmentsSlice';
import user from './api/user/userSlice';
import users from './api/users/usersSlice';
import layout from './layout';

const rootReducer = {
	layout,
	users,
	user,
	shipments,
};
export default rootReducer;
