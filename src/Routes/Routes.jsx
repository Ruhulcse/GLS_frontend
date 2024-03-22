import ShipmentList from "@/pages/admin/shipments/shipment-list";
import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Login from "../auth/Login";
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
import SignUp from "./../auth/SignUp";

const ShipmentFormPage = lazy(() =>
  import("@/pages/admin/shipments/shipment-form")
);
const Dashboard = lazy(() => import("@/pages/dashboard"));
//test commit
export const router = createBrowserRouter([
  {
    element: <Layout></Layout>,
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
        path: "/signUp",
        element: <SignUp />,
      },
      {
        path: "/logIn",
        element: <Login />,
      },
    ],
  },
  {
    element: <AdminLayout></AdminLayout>,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "/shipments",
        element: <ShipmentList></ShipmentList>,
      },
      {
        path: "/create-shipment",
        element: <ShipmentFormPage></ShipmentFormPage>,
      },
    ],
  },

  // {
  //   path: "/blog",
  //   element: <Layout></Layout>,
  //   children: [
  //     {
  //       path: "/blog",
  //       element: <BlogPage></BlogPage>,
  //     },
  //     {
  //       path: "/blog/:id",
  //       element: <BlogDetails />,
  //     },
  //     {
  //       path: "/about/:id",
  //       element: <AboutDetails />,
  //     },
  //   ],
  // },
  //       path: '/blogs/:category',
  //       element: <BlogListPage/>
  //     },

  //   ],
  // },

  //   {
  //     path:'/signUp',
  //     element:<SignUp/>
  //   },
  //   {
  //     path:'/logIn',
  //     element:<Login/>
  //   },
]);
