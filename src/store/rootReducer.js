import agents from './api/agents/agentsSlice';
import blogs from "./api/blog/blogSlice";
import blog from "./api/blogs/blogsSlice";
import guideblog from "./api/guideblog/guidesblogSlice";
import guideblogs from "./api/guideblogs/guideblogsSlice";
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
	blogs,
	blog,
	shipments,
	shipment,
	guideblog,
	guideblogs,
	agents,
	myBids,
};
export default rootReducer;
