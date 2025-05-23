import ScrollTop from "@/components/ScrollTop/ScrollTop";
import Blogs from "@/pages/admin/Blogs/Blogs-list";
import CreateBlog from "@/pages/admin/Blogs/Create-Blog";
import DetailsBlog from "@/pages/admin/Blogs/DetailsBlog";
import ShipmentList from "@/pages/admin/shipments/shipment-list";
import CardDetails from "@/pages/guide/subPage/CardDetails";
import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Learn from "../components/CarrierSections/Learn";
import Register from "../components/CarrierSections/Register";
import BlogPage from "../pages/Blog/BlogPage";
import AboutDetails from "../pages/Blog/subPage/AboutDetails";
import BlogDetails from "../pages/Blog/subPage/BlogDetails";
import BlogListPage from "../pages/Blog/subPage/BlogListPage";
import Home from "../pages/Home/Home";
import Brokers from "../pages/Solutions/Brokers";
import Carrier from "../pages/Solutions/Carrier";
import Contact from "../pages/Solutions/Contact";
import Shippers from "../pages/Solutions/Shippers";
import AdminLayout from "../pages/admin/layout/Layout";
import Guide from "./../pages/guide/Guide";

//import PrivateRoute from "@/authGard/PrivateRoute";
// import Text from '@/components/Text';
import Login from "@/auth/Login";
import SignUp from "@/auth/SignUp";
import PrivateRoute from "@/authGard/PrivateRoute";
import PublicRoute from "@/authGard/PublicRoute";
import Insurance from "@/components/Insurance/Insurance";
import Load from "@/pages/Product/Load";
import ProductFinder from "@/pages/Product/ProductFinder";
import GuideDetailsPage from "@/pages/admin/Recources/Guide/GuideBlogDetails";
import GuideListPage from "@/pages/admin/Recources/Guide/GuideList";
import AgentListPage from "@/pages/admin/agents/agent-list";
import BidListPage from "@/pages/admin/bids/bids-list";
import NotificationsPage from "@/pages/admin/notifications";
import ProfilePage from "@/pages/admin/profile";
import ShipmentViewPage from "@/pages/admin/shipments/shipment-view";
import UserListPage from "@/pages/admin/users/user-list";
import ChatPage from "@/pages/admin/chat";
import PlansPage from "@/pages/admin/plans";
import SuccessPage from "@/pages/admin/success";
import ForgetPassword from "@/auth/ForgetPassword";
import ReSetPassword from "@/auth/ResetPassword";
import ContactList from "@/pages/admin/contactList";
import Message from "@/pages/admin/contactList/Message";
import AssignLoadList from "@/pages/broker/assignLoad/AssignLoadList";
import UserDetails from "@/components/user-details";

const ShipmentFormPage = lazy(() =>
  import("@/pages/admin/shipments/shipment-form")
);
const BlogUploadForm = lazy(() =>
  import("@/components/Blogs/form/BlogUploadFrom")
);
const GuideBlogUploadForm = lazy(() =>
  import("@/pages/admin/Recources/Guide/CreateGuide")
);
const Dashboard = lazy(() => import("@/pages/dashboard"));
//test commit updated
export const router = createBrowserRouter([
  {
    element: (
      <>
        <ScrollTop></ScrollTop>
        <Layout></Layout>
      </>
    ),
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/carriers",
        element: <Carrier></Carrier>,
      },
      {
        path: "/brokers",
        element: <Brokers></Brokers>,
      },
      {
        path: "/shippers",
        element: <Shippers></Shippers>,
      },
      {
        path: "/guide",
        element: <Guide />,
      },
      {
        path: "/guide/:id",
        element: <CardDetails />,
      },
      {
        path: "/blog",
        element: <BlogPage></BlogPage>,
      },
      {
        path: "/blog/:id",
        element: <BlogDetails />,
      },
      {
        path: "/about/:id",
        element: <AboutDetails />,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/learn",
        element: <Learn></Learn>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/blogs/:category",
        element: <BlogListPage />,
      },
      {
        path: "/blog/:id",
        element: <BlogDetails />,
      },
      {
        path: "/insurance",
        element: <Insurance></Insurance>,
      },
      {
        path: "/load",
        element: <Load></Load>,
      },
      {
        path: "/finder",
        element: <ProductFinder></ProductFinder>,
      },
      {
        path: "/signUp",
        element: (
          <PublicRoute>
            <SignUp />
          </PublicRoute>
        ),
      },
      {
        path: "/logIn",
        element: (
          <PublicRoute>
            <Login />
          </PublicRoute>
        ),
      },
      {
        path: "/forgetPassword",
        element: (
          <PublicRoute>
            <ForgetPassword />
          </PublicRoute>
        ),
      },
      {
        path: "/resetPassword",
        element: (
          <PublicRoute>
            <ReSetPassword />
          </PublicRoute>
        ),
      },
      // {
      // 	path: '/hello',
      // 	element: <Text />,
      // },
    ],
  },
  {
    element: (
      <PrivateRoute>
        <AdminLayout />
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/shipments",
        element: <ShipmentList />,
      },
      {
        path: "/create-shipment",
        element: <ShipmentFormPage />,
      },
      {
        path: "/assign-loads",
        element: <AssignLoadList />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/blogs-details/:id",
        element: <DetailsBlog />,
      },
      {
        path: "/blog/edit-blog/:id",
        element: <BlogUploadForm />,
      },
      {
        path: "/create-blog",
        element: <CreateBlog />,
      },
      {
        path: "/create-guide",
        element: <GuideBlogUploadForm />,
      },
      {
        path: "/guideblog-list",
        element: <GuideListPage />,
      },
      {
        path: "/guideblog-details/:id",
        element: <GuideDetailsPage />,
      },
      {
        path: "/guideblog/edit-guideblog/:id",
        element: <GuideBlogUploadForm />,
      },
      {
        path: "/users",
        element: <UserListPage />,
      },
      {
        path:"/user-details/:id",
        element:<UserDetails/>
      },
      {
        path: "/notifications",
        element: <NotificationsPage />,
      },
      {
        path: "/agents",
        element: <AgentListPage />,
      },
      {
        path: "/bids",
        element: <BidListPage />,
      },
      {
        path: "/profile/:id",
        element: <ProfilePage />,
      },
      {
        path: "/shipment/:id",
        element: <ShipmentViewPage />,
      },
      {
        path: "/shipment/edit/:id",
        element: <ShipmentFormPage />,
      },
      {
        path: "/chat",
        element: <ChatPage />,
      },
      {
        path:"/contacts",
        element:<ContactList/>
      },
      {
        path:"/message/:id",
        element:<Message/>
      },
      {
        path: "/chat/:id",
        element: <ChatPage />,
      },
      {
        path: "/plans",
        element: <PlansPage />,
      },
      {
        path: "/success",
        element: <SuccessPage />,
      }
    ],
  },

 
]);
