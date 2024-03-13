import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../pages/Home/Home";
import Carrier from "../pages/Solutions/Carrier";
import Brokers from "../pages/Solutions/Brokers";
import Shippers from "../pages/Solutions/Shippers";
import BlogPage from "../pages/Blog/BlogPage";
import BlogDetails from "../pages/Blog/subPage/BlogDetails";
import AboutDetails from "../pages/Blog/subPage/AboutDetails";
import Register from "../components/CarrierSections/Register";
import Learn from "../components/CarrierSections/Learn";
import Contact from "../pages/Solutions/Contact";
import BlogListPage from "../pages/Blog/subPage/BlogListPage";
import SignUp from "./../auth/SignUp";
import Login from "../auth/Login";

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
