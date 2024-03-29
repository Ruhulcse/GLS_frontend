import users from './api/users/usersSlice';
import user from './api/user/userSlice';
import layout from './layout';

const rootReducer = {
	layout,
	users,
	user,
};
export default rootReducer;
