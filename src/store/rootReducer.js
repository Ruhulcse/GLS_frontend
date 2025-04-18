import agents from "./api/agents/agentsSlice";
import blogs from "./api/blog/blogSlice";
import blog from "./api/blogs/blogsSlice";
import guideblog from "./api/guideblog/guidesblogSlice";
import guideblogs from "./api/guideblogs/guideblogsSlice";
import myBids from "./api/myBids/myBidsSlice";
import shipment from "./api/shipment/shipmentSlice";
import shipments from "./api/shipments/shipmentsSlice";
import user from "./api/user/userSlice";
import users from "./api/users/usersSlice";
import layout from "./layout";
import chat from "../pages/admin/chat/store";
import contact from "./api/contact/contactSlice";
import shipperShipments from "./api/shipperShipments/shipperShipmentsSlice";
import assignBids from "./api/assignBids/assignBidsSlice";
import singleBid from "./api/assignBid/assignBidSlice";
import agentCodeUser from './api/userByAgentCode/userByAgentCodeSlice'

const rootReducer = {
  layout,
  users,
  chat,
  user,
  blogs,
  blog,
  shipments,
  shipment,
  guideblog,
  guideblogs,
  agents,
  myBids,
  contact,
  shipperShipments,
  assignBids,
  singleBid,
  agentCodeUser
};
export default rootReducer;
